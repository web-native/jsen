
/**
 * @imports
 */
import _isTypeObject from '@onephrase/util/js/isTypeObject.js';
import _isUndefined from '@onephrase/util/js/isUndefined.js';
import _isFunction from '@onephrase/util/js/isFunction.js';
import _isClass from '@onephrase/util/js/isClass.js';
import _isString from '@onephrase/util/js/isString.js';
import _isNull from '@onephrase/util/js/isNull.js';
import _isNumber from '@onephrase/util/js/isNumber.js';
import _after from '@onephrase/util/str/after.js';
import _before from '@onephrase/util/str/before.js';
import _unique from '@onephrase/util/arr/unique.js';
import ReferenceError from './ReferenceError.js';

/**
 * @exports
 */
export default class Scope {

	/**
	 * Creates a new context stack.
	 *
	 * @param object	 	params
	 * @param object		params
	 *
	 * @return Scope
	 */
	constructor(stack, params = {}) {
		this.stack = stack;
		this.params = params;
		if (!('main' in this.stack)) {
			throw new Error('A "main" context must be provided!');
		}
		if (this.stack.super) {
			this.stack.super = Scope.create(this.stack.super, {errorLevel: params.errorLevel});
		}
		this.stack.local = this.stack.local || {};
		this.stack.$local = this.stack.$local || {};
	}

	/**
	 * Binds a callback to changes
	 * that happen in the contexts.
	 *
	 * @param object		 	trap
	 * @param function		 	callback
	 *
	 * @return Scope
	 */
	observe(trap, callback) {
		if (this.stack.super) {
			this.stack.super.observe(trap, (e) => {
				if (e.props.filter(prop => !_has(this.stack.local, prop, trap) && !_has(this.stack.main, prop, trap)).length) {
					e.scope = 'super';
					return callback(e);
				}
			});
		}
		trap.observe(this.stack, changes => {
			// Changes firing directly from super and local should be ignored
			changes = changes.filter(delta => delta.name === 'main');
			var references = changes.map(delta => _after(delta.path, '.'))
				.filter(path => path);
			var props = references.map(path => _before(path, '.'));
			if (!references.length && changes.length && changes[0].value) {
				props = _unique((
						_isTypeObject(changes[0].value) ? Object.keys(changes[0].value) : []
					).concat(changes[0].oldValue && _isTypeObject(changes[0].oldValue) ? Object.keys(changes[0].oldValue) : [])
				);
				references = props;
			}
			if (props.filter(prop => !_has(this.stack.local, prop, trap)).length) {
				return callback({
					props,
					references,
					scope:'local',
				});
			}
		}, {
			subtree:true,
			tags:[this, 'jsen-context',],
		});
	}
	
	/**
	 * Unbinds callbacks previously bound
	 * with observe()
	 *
	 * @param object		 	trap
	 * @param function		 	callback
	 *
	 * @return Scope
	 */
	unobserve(trap, callback) {
		if (this.stack.super) {
			this.stack.super.unobserve(trap, callback);
		}
		trap.unobserve(this.stack, callback, {
			subtree:true,
			tags:[this, 'jsen-context',],
		});
	}
	
	/**
	 * Tries the handler on the different contexts in the stack.
	 *
	 * @param string|number 	prop
	 * @param function		 	callback
	 * @param function		 	final
	 *
	 * @return Scope
	 */
	handle(prop, callback, final, level = 0) {
		var callMain = () => {
			return callback(this.stack.main, null, () => {
				if (this.stack.super) {
					return this.stack.super.handle(prop, callback, final, level + 1);
				}
				if (final) {
					return final();
				}
			}, level);
		};
		// Normally, we would begin with local...
		// but no if...
		if (prop === 'toString' && this.stack.local.toString === Object.prototype.toString) {
			return callMain();
		}
		// Conditions are right, we begin with local
		return callback(this.stack.local, this.stack.$local, callMain, level);
	}

	/**
	 * Returns a property's value from the first possessing context.
	 *
	 * @param string|number prop
	 * @param object		trap
	 * @param bool			bindThis
	 *
	 * @return mixed
	 */
	get(prop, trap = {}, bindThis = true) {
		if (prop instanceof String) {
			// incase we recieved new String()
			prop = prop + '';
		}
		return this.handle(prop, (contxtObj, contxtMeta, advance, level) => {
			var val = _get(contxtObj, prop, trap);
			// asking first mught not go well generally && _has(this[i], prop, trap)
			if (!_isUndefined(val) || _has(contxtObj, prop, trap)) {
				if (_isFunction(val) && !_isClass(val) && bindThis) {
					return val.bind(contxtObj);
				}
				return val;
			}
			return advance();
		}/* Not good for RQL derived fields , () => {throw new ReferenceError('"' + prop + '" is undefined!');}*/);
	}
	
	/**
	 * Updates a property's value from the first possessing context.
	 * Or adds a new context to set the property.
	 *
	 * @param string|number prop
	 * @param mixed			val
	 * @param object		trap
	 * @param bool			initKeyword
	 *
	 * @return bool
	 */
	set(prop, val, trap = {}, initKeyword = false) {
		if (this.params.type === 2 && initKeyword === 'var' && this.stack.super) {
			return this.stack.super.set(prop, val, trap, initKeyword);
		}
		if (prop instanceof String) {
			// incase we recieved new String()
			prop = prop + '';
		}
		const _set = (cntxt, prop, val, trap) => {
			if (trap.set) {
				return trap.set(cntxt, prop, val);
			}
			cntxt[prop] = val;
			return true;
		};
		return this.handle(initKeyword ? true : prop, (contxtObj, localContxtMeta, advance) => {
			// Whatever the level of localContext...
			if (localContxtMeta && localContxtMeta[prop] === 'const') {
				throw new LogicalError('CONST ' + prop + ' cannot be modified!');
			}
			// Set this locally, we wont be getting to advance()
			if (initKeyword) {
				localContxtMeta[prop] = initKeyword;
				return _set(contxtObj, prop, val, trap);
			}
			// For any other contex, it must already exists
			if (_has(contxtObj, prop, trap)) {
				return _set(contxtObj, prop, val, trap);
			}
			return advance();
		}, () => {throw new ReferenceError('"' + prop + '" is undefined!');});
	}
	
	/**
	 * Deletes a property from the first possessing context.
	 *
	 * @param string|number prop
	 * @param object		trap
	 *
	 * @return bool
	 */
	del(prop, trap = {}) {
		if (prop instanceof String) {
			// incase we recieved new String()
			prop = prop + '';
		}
		return this.handle(prop, (contxtObj, contxtMeta, advance) => {
			if (_has(contxtObj, prop, trap)) {
				if (contxtMeta) {
					delete contxtMeta[prop];
				}
				if (trap.deleteProperty || trap.del) {
					return (trap.deleteProperty || trap.del)(contxtObj, prop);
				}
				delete contxtObj[prop];
				return true;
			}
			return advance();
		});
	}

	/**
	 * Tests if a property exists in any context.
	 *
	 * @param string|number prop
	 * @param string|number prop2
	 * @param object		trap
	 *
	 * @return bool
	 */
	has(prop, prop2, trap = {}) {
		if (prop instanceof String) {
			// incase we recieved new String()
			prop = prop + '';
		}
		if (prop2 instanceof String) {
			// incase we recieved new String()
			prop2 = prop2 + '';
		}
		return this.handle(prop, (contxtObj, contxtMeta, advance) => {
			if (_has(contxtObj, prop, trap)) {
				var contextObj2 = _get(contxtObj, prop, trap);
				return _has(contextObj2, prop2, trap);
			}
			return advance();
		}, () => {throw new ReferenceError('"' + prop + '" is undefined!');});
	}
	
	/**
	 * Tests if a property exists in any context.
	 *
	 * @param string|number prop
	 * @param array			args
	 * @param object		trap
	 *
	 * @return mixed
	 */
	exec(prop, args, trap = {}) {
		if (prop instanceof String) {
			// incase we recieved new String()
			prop = prop + '';
		}
		return this.handle(prop, (contxtObj, contxtMeta, advance) => {
			var fn = _get(contxtObj, prop, trap);
			if (!_isUndefined(fn) || _has(contxtObj, prop, trap)) {
				if (!_isFunction(fn)) {
					if (trap.exec) {
						return trap.exec(contxtObj, prop, args);
					}
					throw new ReferenceError('"' + prop + '" is not a function! (Called on type: ' + typeof contxtObj + '.)');
				}
				if (trap.apply) {
					return trap.apply(fn, contxtObj, args);
				}
				return fn.apply(contxtObj, args);
			}
			return advance();
		}, () => {
			if (trap.execUnknown) {
				return trap.execUnknown(this, prop, args);
			}
			throw new ReferenceError('"' + prop + '()" is undefined!');
		});
	}

	/**
	 * Factory method for making a Scope instance.
	 *
	 * @param array|object 	cntxt
	 * @param object 		params
	 *
	 * @return Scope
	 */
	static create(cntxt, params = {}) {
		return cntxt instanceof Scope ? cntxt : new Scope({
			main: cntxt,
		}, params);
	}
};

const _get = (cntxt, prop, trap) => {
	if (_isNull(cntxt) || _isUndefined(cntxt)) {
		return;
	}
	return trap.get && _isTypeObject(cntxt) ? trap.get(cntxt, prop) : (
		cntxt[prop]
	);
};

const _has = (cntxt, prop, trap) => {
	if (_isNull(cntxt) || _isUndefined(cntxt)) {
		return false;
	}
	return trap.has && _isTypeObject(cntxt) ? trap.has(cntxt, prop) : (
		_isTypeObject(cntxt) ? prop in cntxt : !_isUndefined(cntxt[prop])
	);
};