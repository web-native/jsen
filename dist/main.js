!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var s=function(t){return Array.isArray(t)},n=function(t){return"function"==typeof t},i=function(t){return n(t)||t&&"[object function]"==={}.toString.call(t)},a=function(t){return!Array.isArray(t)&&"object"==typeof t&&t},o=function(t){return Array.isArray(t)||"object"==typeof t&&t||n(t)},h=function(t){return!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)},c=function(t,e){var r=[];return function(t,e){e=(e=e||Object.prototype)&&!s(e)?[e]:e;var r=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)r.push(t),t=t?Object.getPrototypeOf(t):null;return r}(t,e).forEach(t=>{!function(t,...e){e.forEach(e=>{t.indexOf(e)<0&&t.push(e)})}(r,...Object.getOwnPropertyNames(t))}),r};function l(t,e,r=!1,n=!1,u=!0){var p=0,f=t.shift();if((h(f)||!0===f||!1===f)&&(p=f,f=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,g)=>{(o(t)||i(t))&&(r?c(t):Object.getOwnPropertyNames(t)).forEach(i=>{var o=f[i],c=t[i];if((s(o)&&s(c)||a(o)&&a(c))&&(!0===p||p>0))f[i]=s(o)&&s(c)?[]:{},l([h(p)?p-1:p,f[i],o,c],e,r,n,u);else if(e(i,f,t,g))if(s(f)&&s(t))n?f[i]=c:f.push(c);else try{u?Object.defineProperty(f,i,Object.getOwnPropertyDescriptor(t,i)):f[i]=t[i]}catch(t){}})}),f}var u=function(...t){return l(t,(t,e,r)=>!0,!1,!1,!1)},p=function(t){return null===t||""===t},f=function(t){return arguments.length&&(void 0===t||void 0===t)},g=function(t,e,r=!1){for(var s=t.indexOf(e);s>-1&&(r||!1===r);)t.splice(s,1),r>0&&r--,s=t.indexOf(e);return t},m=function(t,e){if(!t)return!1;if(t instanceof e)return!0;var r=t=>{for(;t&&t!==Function.prototype;){if(t===e||t.prototypes&&t.prototypes.reduce((t,s)=>t||s===e||r(s),!1))return!0;t=Object.getPrototypeOf(t)}return!1};return r(t.constructor)},v=function(t){return t instanceof Number||"number"==typeof t},d=function(t){return a(t)&&Object.getPrototypeOf(t)===Object.prototype},y=function(t){return!0===t||!1===t},x=function(t,e){var r=void 0;return o(t)&&Object.keys(t).forEach((s,n)=>{!1!==r&&(r=e(h(s)?parseFloat(s):s,t[s],n))}),r};const w=function(t,e,r=!0,n=1){if(s(t)&&s(e)&&t.length!==e.length)return!r;if(a(t)&&a(e)){var h=Object.keys(t),c=Object.keys(e);if(!h.length&&!c.length)return d(t)&&d(e)?r:t===e===r;if(!w(h,c))return!r}if(n>0&&(s(t)&&s(e)||a(t)&&a(e))){var l=function(t,e,r=!0,n=!0,i=!1,h=!1){if(s(t)&&s(e)){var c=[],l=!0;return t.forEach(t=>{if(l){var u=!1;x(e,(e,i)=>{(!u||n&&o(t))&&(u=r(t,i),(s(u)&&!u.length||a(u)&&!Object.keys(u).length)&&(u=!1),o(u)&&n&&(t=u))}),o(u)?c.push(n?u:t):y(u)?i&&!u||!i&&u?c.push(t):h&&(l=!1):c.push(u)}}),c}if(a(t)&&a(e)){c={},l=!0;return Object.keys(t).forEach(u=>{if(l){var p=r(t[u],e[u]);(s(p)&&!p.length||a(p)&&!Object.keys(p).length)&&(p=!1),o(p)?c[u]=n?p:t[u]:y(p)?i&&!p||!i&&p?c[u]=t[u]:h&&(l=!1):c[u]=p}}),c}}(t,e,(t,e)=>w(t,e,r,n-1),!1,!1,!0);return s(l)?l.length===t.length&&l.length===e.length:a(l)&&a(t)?Object.keys(l).length===Object.keys(t).length&&Object.keys(l).length===Object.keys(e).length:l}return i(r)?r(t,e):v(t)&&v(e)&&isNaN(t)&&isNaN(e)?r:t===e===r};var b=w,j=class{even(t){return!(!a(t)||t.jsenType!==this.jsenType)&&b(t,this)}inherit(t){return this}withComments(t){return this.meta||(this.meta={}),this.meta.comments=t,this}withVars(t){return this.meta||(this.meta={}),this.meta.vars=t,this}};const k=class extends j{};Object.defineProperty(k.prototype,"jsenType",{get:()=>"Reference"});var O=k;const T=class extends j{};Object.defineProperty(T.prototype,"jsenType",{get:()=>"CallExpression"});var E=T;const C=class extends j{};Object.defineProperty(C.prototype,"jsenType",{get:()=>"FunctionType"});var S=C;const $=class extends j{};Object.defineProperty($.prototype,"jsenType",{get:()=>"IfConditional"});var P=$,W=class extends Error{constructor(...t){super(...t),this.name="Syntax Error"}};const F={};class _{static parse(t,e,r={}){if(t.length){var s;if(F[t]&&!e&&!1!==r.allowCache)if(s=this.parseOne(t,F[t],r))return s;for(var n=Object.values(e||this.grammars),i=0;i<n.length;i++){var a=this.parseOne(t,n[i],r);if(a)return e||!1===r.allowCache||(F[t]=n[i]),a}if(!1===r.assert)return;throw new W(t)}}static parseOne(t,e,r={}){var n=[],i=[],a=e.parse(t,(t,e,s={})=>{var a=this.parse(t,e,s?u(r,s):r);return!1!==s.lodge&&((m(a,O)||m(a,E))&&n.push(a),a&&(a.meta.vars.forEach(t=>n.push(t)),a.meta.deepVars.forEach(t=>i.push(t)))),a},r);return a&&(a.meta||(a.meta={}),a.meta.vars=n,a.meta.deepVars=i,m(a,E)?a.reference.context&&a.meta.vars.push(a.reference.context):m(a,S)?a.meta.vars.splice(0):m(a,P)&&(a.onTrue&&a.onTrue.meta.vars.concat(a.onTrue.meta.deepVars).forEach(t=>{g(a.meta.vars,t),a.meta.deepVars.push(t)}),a.onFalse&&a.onFalse.meta.vars.concat(a.onFalse.meta.deepVars).forEach(t=>{g(a.meta.vars,t),a.meta.deepVars.push(t)})),s(r.explain)&&r.explain.push(t+" >>-------------\x3e> "+a.jsenType)),a}}var A=function(t){return t instanceof String||"string"==typeof t&&null!==t},N=function(t,e,r=!1){if(""==e)return t;var s=r?t.lastIndexOf(e):t.indexOf(e);return-1===s?"":t.substr(s+e.length)},L=function(t,e,r=!1){if(""==e)return t;var s=r?t.lastIndexOf(e):t.indexOf(e);return-1===s?t:t.substr(0,s)},q=function(t){return t.filter((t,e,r)=>r.indexOf(t)===e)},D=class extends Error{constructor(...t){super(...t),this.name="Reference Error"}};class I{constructor(t,e={}){if(this.stack=t,this.params=e,!("main"in this.stack))throw new Error('A "main" context must be provided!');this.stack.super&&(this.stack.super=I.create(this.stack.super,{errorLevel:e.errorLevel})),this.stack.local=this.stack.local||{},this.stack.$local=this.stack.$local||{}}observe(t,e){this.stack.super&&this.stack.super.observe(t,r=>{if(r.props.filter(e=>!V(this.stack.local,e,t)&&!V(this.stack.main,e,t)).length)return r.scope="super",e(r)}),t.observe(this.stack,r=>{var s=(r=r.filter(t=>"main"===t.name)).map(t=>N(t.path,".")).filter(t=>t),n=s.map(t=>L(t,"."));if(!s.length&&r.length&&r[0].value&&(s=n=q((o(r[0].value)?Object.keys(r[0].value):[]).concat(r[0].oldValue&&o(r[0].oldValue)?Object.keys(r[0].oldValue):[]))),n.filter(e=>!V(this.stack.local,e,t)).length)return e({props:n,references:s,scope:"local"})},{subtree:!0,tags:[this,"jsen-context"]})}unobserve(t,e){this.stack.super&&this.stack.super.unobserve(t,e),t.unobserve(this.stack,e,{subtree:!0,tags:[this,"jsen-context"]})}handle(t,e,r,s=0){var n=()=>e(this.stack.main,null,()=>this.stack.super?this.stack.super.handle(t,e,r,s+1):r?r():void 0,s);return"toString"===t&&this.stack.local.toString===Object.prototype.toString?n():e(this.stack.local,this.stack.$local,n,s)}get(t,e={},r=!0){return t instanceof String&&(t+=""),this.handle(t,(s,a,o,h)=>{var c=B(s,t,e);return!f(c)||V(s,t,e)?i(c)&&!function(t){return n(t)&&/^class\s?/.test(Function.prototype.toString.call(t))}(c)&&r?c.bind(s):c:o()})}set(t,e,r={},s=!1){if(2===this.params.type&&"var"===s&&this.stack.super)return this.stack.super.set(t,e,r,s);t instanceof String&&(t+="");const n=(t,e,r,s)=>s.set?s.set(t,e,r):(t[e]=r,!0);return this.handle(!!s||t,(i,a,o)=>{if(a&&"const"===a[t])throw new LogicalError("CONST "+t+" cannot be modified!");return s?(a[t]=s,n(i,t,e,r)):V(i,t,r)?n(i,t,e,r):o()},()=>{throw new D('"'+t+'" is undefined!')})}del(t,e={}){return t instanceof String&&(t+=""),this.handle(t,(r,s,n)=>V(r,t,e)?(s&&delete s[t],e.deleteProperty||e.del?(e.deleteProperty||e.del)(r,t):(delete r[t],!0)):n())}has(t,e,r={}){return t instanceof String&&(t+=""),e instanceof String&&(e+=""),this.handle(t,(s,n,i)=>{if(V(s,t,r)){var a=B(s,t,r);return V(a,e,r)}return i()},()=>{throw new D('"'+t+'" is undefined!')})}exec(t,e,r={}){return t instanceof String&&(t+=""),this.handle(t,(s,n,a)=>{var o=B(s,t,r);if(!f(o)||V(s,t,r)){if(!i(o)){if(r.exec)return r.exec(s,t,e);throw new D('"'+t+'" is not a function! (Called on type: '+typeof s+".)")}return r.apply?r.apply(o,s,e):o.apply(s,e)}return a()},()=>{if(r.execUnknown)return r.execUnknown(this,t,e);throw new D('"'+t+'()" is undefined!')})}static create(t,e={}){return t instanceof I?t:new I({main:t},e)}}const B=(t,e,r)=>{if(!p(t)&&!f(t))return r.get&&o(t)?r.get(t,e):t[e]},V=(t,e,r)=>!p(t)&&!f(t)&&(r.has&&o(t)?r.has(t,e):o(t)?e in t:!f(t[e]));var M=function(t,e,r){return t.startsWith(e)&&t.endsWith(r)},R=function(t,e,r){return function(t,e){return L(t,e,!0)}(N(t,e),r)},U=function(t,e=!0){return s(t)?t:!e&&a(t)?[t]:!1!==t&&0!==t&&function(t){return p(t)||f(t)||!1===t||0===t||o(t)&&!Object.keys(t).length}(t)?[]:function(t){return!A(t)&&!f(t.length)}(t)?Array.prototype.slice.call(t):a(t)?Object.values(t):[t]};const Q=function(t,e=1,r=!0){return!h(e)||e<=0?t:(!s(t)&&a(t)&&r&&(t=Object.values(t)),s(t)?t.reduce((t,n)=>s(n)||a(n)&&r?t.concat(Q(s(n)?n:Object.values(n),e-1,r)):t.concat(n),[]):t)};var K=Q,J=function(t,e=1){var r=0;t.forEach(t=>{r++});var s=t.slice(t.length-r,e);return arguments.length>1?s:s[0]},z=function(t,e=1){return arguments.length>1?J(t.slice().reverse(),e).reverse():J(t.slice().reverse())},G=function(t,e=[]){return l([{},t],(t,r,n)=>{if(!i(n[t]))return i(e)?e(t):!s(e)||!e.length||e.indexOf(t)>-1},!1,!1,!1)};class H{static lex(t,e,r={}){if(!A(t+=""))throw new Error("Argument1 must be a string!");var s=t=>({delims:t.delims.slice(),options:G(t.options),nesting:t.nesting.slice(),maxDepth:t.maxDepth,comments:t.comments.slice(),tokens:t.tokens.slice(),matches:t.matches.slice(),matchesi:G(t.matchesi)});if(H.$cache[t]&&!1!==r.cache)for(var n=0;n<H.$cache[t].length;n++){var i=H.$cache[t][n];if(b(i.delims,e))return s(i)}var a=new H(t,r).lex(e);return!1!==r.cache&&(H.$cache[t]=H.$cache[t]||[],H.$cache[t].push(a)),s(a)}static split(t,e,r){return H.lex(t,e,r).tokens}static match(t,e,r){return H.lex(t,e,r).matches}constructor(t,e){if(!A(t))throw new Error("Lexer requires the first argument to be a string.");this.$str=t,this.$options=e||{},this.$options.blocks||(this.$options.blocks=H.$blocks),this.$options.quotes||(this.$options.quotes=H.$quotes),this.$options.comments||(this.$options.comments=H.$comments)}lex(t,e){var r={delims:U(t),options:u(!0,{},this.$options,e||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}};if(this._evalCharsAt(r,0),r.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+K(r.nesting).join(", "));return r}_evalCharsAt(t,e){if(!(e>=this.$str.length)){var r=1,s={},n={},i={};if(t.openComment||(n=this._testQuotes(t,e)),t.openQuote||(s=this._testComments(t,e)),t.openComment||s.ending)if(t.nesting.length||i.ending)this._push(t,this.$str[e]);else r=(o=s.starting||s.ending||this.$str[e]).length,this._push(t,o,"comments",s.starting);else if(t.openQuote||n.ending)this._push(t,this.$str[e]);else{if(t.options.limit&&t.matches.length===t.options.limit)return this._push(t,this.$str[e]),this._evalCharsAt(t,e+1);i=this._testNesting(t,e);i=this._testNesting(t,e);var a=this._testChars(t.options.stopChars||[],t,e);if(!t.nesting.length&&!1!==a)return t.options.stopChar=a,void(t.options.stopCharForward=this.$str.substr(e));if(t.delims.length)if(t.nesting.length||i.ending){var o;r=(o=i.starting||i.ending||this.$str[e]).length,this._push(t,o)}else{this._push(t,"");var h=this._testChars(t.delims,t,e);if(!1!==h&&(t.matches.push(h),t.matchesi[e]=h,r=h.length||1,!t.options.preserveDelims))return this._evalCharsAt(t,e+(h.length||1));this._push(t,h||this.$str[e])}else 2===t.nesting.length&&i.starting?(t.matches.push(null),this._push(t,i.starting),r=i.starting.length):!t.nesting.length&&i.ending?(this._push(t,i.ending),r=i.ending.length,t.matches.push(null)):this._push(t,this.$str[e])}return this._evalCharsAt(t,e+r)}}_testQuotes(t,e){var r={};return(t.options.quotes||[]).forEach(s=>{this.$str.substr(e,1)===s&&(t.openQuote?s===t.openQuote&&(t.openQuote=!1,r.ending=s):(t.openQuote=s,r.starting=s))}),r}_testComments(t,e){var r={};return(t.options.comments||[]).forEach(s=>{if(t.openComment){if(z(s)===z(t.openComment)){var n=z(s);this.$str.substr(e).startsWith(n)&&(t.openComment=!1,r.ending=n)}}else{var i=J(s);this.$str.substr(e).startsWith(i)&&(t.openComment=s,r.starting=i)}}),r}_testNesting(t,e){var r={};return(t.options.blocks||[]).forEach(s=>{var n=J(s);if(this.$str.substr(e).startsWith(n))t.nesting=t.nesting.concat([s]),r.starting=n;else if(t.nesting.length&&z(s)===z(z(t.nesting))){var i=z(s);this.$str.substr(e).startsWith(i)&&(t.nesting=t.nesting.slice(0,-1),r.ending=i)}}),t.maxDepth=Math.max(t.maxDepth,t.nesting.length),r}_testChars(t,e,r){for(var s=0;s<t.length;s++){var n=t[s];if(i(n)){var a=n(this.$str.substr(0,r),this.$str.substr(r));if(!1!==a)return a}if(e.options.useRegex){var o=this.$str.substr(r).match(new RegExp("^"+n,!0!==e.options.useRegex?e.options.useRegex:""));if(o)return o[0]}if(!e.options.ci&&this.$str.substr(r,n.length)===n||e.options.ci&&this.$str.substr(r,n.length).toLowerCase()===n.toLowerCase())return n}return!1}_push(t,e,r="tokens",s=!1){var n=t.matches.length;if(f(t.tokens[n])&&(t.tokens[n]=""),"comments"===r){t.tokens[n].comments||(t.tokens[n]=new String(t.tokens[n]),t.tokens[n].comments=[]);var i=t.tokens[n].comments.length-(!t.tokens[n].comments.length||s?0:1);t.tokens[n].comments[i]=(t.tokens[n].comments[i]||"")+e}else{var a=t.tokens[n].comments;t.tokens[n]=new String(t.tokens[n]+e),t.tokens[n].comments=a}}split(t,e,r){return this.lex(e,r).tokens}match(t,e,r){return this.lex(e,r).matches}regParse(t,e){return this.lex(t,u({useRegex:!0},e||{}))}regSplit(t,e){return this.regParse(t,e).tokens}regMatch(t,e){return this.regParse(t,e).matches}}H.$blocks=[["(",")"],["[","]"],["{","}"]],H.$quotes=['"',"'","`"],H.$comments=[["/*","*/"],["//","\n"]],H.$cache={};const X=class extends j{};Object.defineProperty(X.prototype,"jsenType",{get:()=>"Abstraction"});var Y=X;var Z=class extends Y{constructor(t){super(),this.expr=t}eval(t=null,e={}){return this.expr.eval(t,e)}toString(){return this.stringify()}stringify(t={}){return"("+this.expr.stringify(t)+")"}static parse(t,e,r={}){if(M(t,"(",")")&&!H.match(t,[" "]).length)return new this(e(R(t,"(",")")))}};const tt=class extends j{};Object.defineProperty(tt.prototype,"jsenType",{get:()=>"ArrayType"});var et=tt;var rt=class extends et{constructor(t){super(),this.exprs=t||[]}inherit(t){if(t instanceof et){var e=t.exprs.filter(t=>this.exprs.reduce((e,r)=>e&&!t.even(r),!0));this.exprs=e.concat(this.exprs)}return this}eval(t=null,e={}){return this.exprs.map(r=>r.eval(t,e))}toString(){return this.stringify()}stringify(t={}){return"["+this.exprs.map(e=>e.stringify(t)).join(", ")+"]"}static parse(t,e,r={}){if(M(t,"[","]")&&!H.match(t.trim(),[" "]).length)return new this(H.split(R(t,"[","]"),[","]).map(t=>t.trim()).filter(t=>t).map(t=>e(t)))}};const st=class extends j{};Object.defineProperty(st.prototype,"jsenType",{get:()=>"Arguments"});var nt=st;var it=class extends nt{constructor(t=[]){super(),this.list=t}eval(t=null,e={}){return this.list.map(r=>r.eval(t,e))}toString(){return this.stringify()}stringify(t={}){return"("+this.list.map(e=>e.stringify(t)).join(", ")+")"}static parse(t,e,r={}){if(t=t.trim(),M(t,"(",")")&&!H.match(t,[" "]).length)return new this(H.split(R(t,"(",")"),[","]).map(t=>e(t.trim())))}};const at=class extends j{};Object.defineProperty(at.prototype,"jsenType",{get:()=>"AssertionExpression"});var ot=at;const ht=class extends ot{constructor(t,e){super(),this.exprs=t,this.logic=e}eval(t=null,e={}){if(this.logic.toLowerCase()===ht.negation.toLowerCase())return!J(this.exprs).eval(t,e);K(ht.operators);for(var r=(this.logic||"").trim().toUpperCase(),s=r===(ht.operators.or||"").trim().toUpperCase(),n=r===(ht.operators.nor||"").trim().toUpperCase(),i=r===(ht.operators.and||"").trim().toUpperCase(),a=r===(ht.operators.nand||"").trim().toUpperCase(),o=!0,h=0,c=0;c<this.exprs.length;c++){if(o=this.exprs[c].eval(t,e),i&&!o)return!1;if(a&&!o)return!0;if(s&&o)return o;h+=o?1:0}return s?o:i||a?i:n&&0===h}toString(){return this.stringify()}stringify(t={}){return this.logic.toLowerCase()===ht.negation.toLowerCase()?this.logic+J(this.exprs).stringify(t):this.exprs.map(e=>e.stringify(t)).join(" "+this.logic+" ")}static parse(t,e,r={}){if(t.toUpperCase().startsWith(ht.negation.toUpperCase()))return new this([e(t.substr(ht.negation.length))],ht.negation);var s=H.lex(t,K(this.operators));if(s.tokens.length>1){var n=q(s.matches);if(n.length>1)throw new Error('"AND" and "OR" logic cannot be asserted in the same expression: '+t+"!");return new this(s.tokens.map(t=>e(t.trim())),J(n))}}};ht.negation="!",ht.operators={and:"&&",or:"||"};var ct=ht;const lt=class extends j{};Object.defineProperty(lt.prototype,"jsenType",{get:()=>"AssignmentExpression"});var ut=lt;const pt=class extends ut{constructor(t,e,r,s="=",n=!1){super(),this.initKeyword=t,this.reference=e,this.val=r,this.operator=s,this.postIncrDecr=n}eval(t=null,e={}){var r,n,i=this.reference.getEval(t,e);if(["++","--"].includes(this.operator)){if(n=this.reference.eval(t,e),!v(n))throw new Error(this.reference+" must be a number!");r="++"===this.operator?n+1:n-1}else if(["+=","-=","*=","/="].includes(this.operator)){var a=i.get(),o=this.val.eval(t,e);if(!("+="===this.operator||v(a)&&v(o)))throw new Error(this+" - operands must each be a number!");r="*="===this.operator?a*o:"/="===this.operator?a/o:"-="===this.operator?a-o:a+o}else r=this.val.eval(t,e);try{return i.set(r,this.initKeyword),e&&s(e.references)&&_pushUnique(e.references,this.reference.toString()),this.postIncrDecr?n:r}catch(t){throw t instanceof D?new D("["+this+"]: "+t.message):t}}toString(){return this.stringify()}stringify(t={}){return["++","--"].includes(this.operator)?this.postIncrDecr?this.reference.stringify(t)+this.operator:this.operator+this.reference.stringify(t):(this.initKeyword?this.initKeyword+" ":"")+[this.reference.stringify(t),this.operator,this.val.stringify(t)].join(" ")}static parse(t,e,r={}){var s=H.lex(t,this.operators.concat([ft]));if(s.matches.length){var n,i,a,o,h=s.matches[0].trim(),c=["++","--"].includes(h);if(c?(o=t.trim().endsWith("++")||t.trim().endsWith("--"),i=s.tokens[o?"shift":"pop"]().trim()):(i=s.tokens.shift().trim(),a=s.tokens.shift().trim()),["var","let","const"].includes(L(i," "))){if("="!==h)throw new W("Invalid declaration: "+t);n=L(i," "),i=N(i," ").trim()}if(!((i=e(i,null,{lodge:!1}))instanceof O)||!c&&!(a=e(a)))throw new W(t);return new this(n,i,a,h,o)}}};pt.operators=["+=","-=","*=","/=","++","--"];const ft=(t,e)=>!(t.endsWith("=")||!e.startsWith("=")||e.startsWith("=>")||e.startsWith("==")||e.startsWith("==="))&&"=";var gt=pt,mt=function(t,e=[],r=!0){var n=0;return h(arguments[0])&&o(arguments[1])&&(n=arguments[0],t=arguments[1],e=arguments[2]||[]),l([n,{},t],(t,r,n)=>i(e)?e(t):!s(e)||!e.length||e.indexOf(t)>-1,!1,!1,r)};const vt=class extends j{};Object.defineProperty(vt.prototype,"jsenType",{get:()=>"Block"});var dt=vt;const yt=class extends j{};Object.defineProperty(yt.prototype,"jsenType",{get:()=>"ReturnDirective"});var xt=yt;class wt extends dt{constructor(t,e){super(),this.stmts=t||[],this.delim=e}eval(t=null,e={}){e=e?mt(e):{},t=I.create(t);for(var r=t=>q(t.map(t=>L(L(t.toString(),"["),"("))),s=(t,e,r)=>{try{return t.eval(e,r)}catch(t){r.catch&&r.catch(t)}},n=[],i=0;i<this.stmts.length;i++){var a=this.stmts[i],o=r(a.meta.vars),h=r(a.meta.deepVars||[]),c=(e.references||[]).filter(t=>o.filter(e=>(e+".").startsWith(t+".")).length),l=(e.references||[]).filter(t=>h.filter(e=>(e+".").startsWith(t+".")).length);if(!e.references||!e.references.length||(c=c.length)||(l=l.length)){var u=e;if(c&&delete(u=mt(e)).references,a instanceof xt)return s(a,t,u);n[i]=s(a,t,u),e.references&&a instanceof ut&&(e.references=e.references.concat(r([a.reference])))}}return n}toString(){return this.stringify()}stringify(t={}){return this.stmts.map(e=>e.stringify(t)).join(this.delim)}static parse(t,e,r={}){var s=H.lex(t+";",K(this.operators).concat([wt.testBlockEnd]));if(s.matches.length)return new this(s.tokens.map(t=>e(t.trim())).filter(t=>t),s.matches[0].trim())}static testBlockEnd(t,e){return!(!t.endsWith("}")||e.trim().startsWith("else"))&&""}}wt.operators=[";","\r\n"];const bt=class extends j{};Object.defineProperty(bt.prototype,"jsenType",{get:()=>"BooleanType"});var jt=bt;var kt=class extends jt{constructor(t){super(),this.state=t}eval(){return"true"===this.state.toLowerCase().trim()}toString(){return this.stringify()}stringify(t={}){return this.state}static parse(t,e,r={}){if("true"===(t=t.toLowerCase().trim())||"false"===t)return new this(t)}};var Ot=class extends E{constructor(t,e){super(),this.reference=t,this.args=e}eval(t=null,e={}){try{var r=this.args.eval(t,e);return this.reference.getEval(t,e).exec(r)}catch(t){throw t instanceof D?new D("["+this+"]: "+t.message):t}}toString(){return this.stringify()}stringify(t={}){return this.reference.stringify(t)+this.args.stringify(t)}static parse(t,e,r={}){if(!t.startsWith("(")&&t.endsWith(")")&&!H.match(t,[" "]).length){var s,n=H.split(t,[]),i=n.pop();if(!((s=e(n.join(""),null,{lodge:!1}))instanceof O&&(i=e(i,[it]))))throw new W(t);return new this(s,i)}}};const Tt=class extends j{};Object.defineProperty(Tt.prototype,"jsenType",{get:()=>"ComparisonExpression"});var Et=Tt;class Ct extends Et{constructor(t,e,r){super(),this.operand1=t,this.operand2=e,this.operator=r}eval(t=null,e={}){return this.constructor.compare(this.operand1.eval(t,e),this.operand2.eval(t,e),this.operator)}toString(){return this.stringify()}stringify(t={}){return[this.operand1.stringify(t),this.operator,this.operand2.stringify(t)].join(" ")}static parse(t,e,r={}){var s=K(this.operators).map(t=>" "+t+" "),n=H.lex(t,s);if(n.tokens.length>1){if(n.tokens.length>2)throw new Error('Malformed "Comparison" expression: '+t+"!");return new this(e(J(n.tokens).trim()),e(z(n.tokens).trim()),n.matches[0].trim())}}static compare(t,e,r="=="){if(-1===K(this.operators).indexOf(r))throw new Error('The operator "'+r+'" is not recognized.');switch(r){case"===":return t===e;case"==":case"=":return t==e;case">":return t>e;case"<":return t<e;case">=":return t>=e;case"<=":return t<=e;case"!=":return t!=e;case"<>":case"!==":return t!==e;case"^=":return A(t)&&t.startsWith(e);case"$=":return A(t)&&t.endsWith(e);case"*=":return!(!s(e)&&!A(e))&&t.indexOf(e)>-1;case"~=":return A(t)&&A(e)&&(" "+t+" ").indexOf(" "+e+" ")>-1;case">=<":if(!s(e)||2!==e.length)throw new Error("A 'Between' comparison requires argument 2 to be an array of exactly 2 values.");return t>=e[0]&&t<=e[1];case"/**/":return e.match(new RegExp(t));default:return!1}}static diff(t,e,r){return!this.compare(t,e,r?"===":"==")}}Ct.operators={exact:{is:"===",isNull:"===",equalsTo:"==",strictlyNotEqualsTo:"!==",notEqualsTo:"!="},relative:{lesserThan:"<",greaterThan:">",lesserThanOrEqualsTo:"<=",greaterThanOrEqualsTo:">=",between:">=<"},partial:{startsWith:"^=",endsWith:"$=",contains:"*=",any:"~=",in:"~=",matches:"/**/"}};const St=class extends j{};Object.defineProperty(St.prototype,"jsenType",{get:()=>"TernaryConditional"});var $t=St;class Pt extends $t{constructor(t,e,r){super(),this.assertion=t,this.onTrue=e,this.onFalse=r}eval(t=null,e={}){return this.assertion.eval(t,e)?this.onTrue.eval(t,e):this.onFalse.eval(t,e)}toString(){return this.stringify()}stringify(t={}){return[this.assertion.stringify(t),this.constructor.operators[0],this.onTrue.stringify(t),this.constructor.operators[1],this.onFalse.stringify(t)].join(" ")}static parse(t,e,r={}){var s=H.split(t,this.operators);if(s.length>1){if(2===s.length)throw new Error("Malformed ternary expression: "+t+"!");return new this(e(s[0].trim()),e(s[1].trim()),e(s[2].trim()))}}}Pt.operators=["?",":"];const Wt=class extends j{};Object.defineProperty(Wt.prototype,"jsenType",{get:()=>"DeleteExpression"});var Ft=Wt;const _t=class extends Ft{constructor(t,e="delete"){super(),this.reference=t,this.operator=e}eval(t=null,e={}){try{return this.reference.getEval(t,e).del()}catch(t){throw t instanceof D?new D("["+this+"]: "+t.message):t}}toString(){return this.stringify()}stringify(t={}){return this.operator+" "+this.reference.stringify(t)}static parse(t,e,r={}){var s=H.lex(t,Object.values(this.operators));if(1===s.matches.length&&t.startsWith(s.matches[0]+" ")){var n;if(!((n=e(s.tokens.pop().trim()))instanceof O))throw new W(t);return new this(n,s.matches[0].trim())}}};_t.operators={red:"reduce",del:"delete"};var At=_t;const Nt=class extends S{constructor(t,e,r={}){super(),this.paramters=t||{},this.statements=e,this.arrowFunctionFormatting=r}inherit(t){if(t instanceof S){for(var e=Object.keys(t.paramters),r=Object.keys(this.paramters),s=0;s<Math.max(r.length,e.length);s++){var n=e[s],i=r[s];if(!i&&n)throw new Error("Parameter #"+s+" ("+n+") in parent function must be implemented.");if(i&&n){var a=t.paramters[n],o=this.paramters[i];if(o&&!a)throw new Error("Parameter #"+s+" ("+i+") must not have a default value as established in parent function.");if(o&&a&&o.jsenType!==a.jsenType)throw new Error("Default value for parameter #"+s+" ("+i+") must be of type "+a.jsenType+" as established in parent function.")}}this.sup=t}return this}eval(t=null,e={}){var r=this;return function(...s){var n={};x(Object.keys(r.paramters),(i,a)=>{var o=r.paramters[a];if(s.length-1<i&&!o)throw new Error('The parameter "'+a+'" is required.');n[a]=s.length>i?s[i]:r.paramters[a]?r.paramters[a].eval(t,e):null}),r.arrowFunctionFormatting||(n.this=this);var i=t instanceof I?t.params.errorLevel:void 0,a=new I({main:n,super:t},{errorLevel:i}),o=r.statements.eval(a,e);return!1===r.arrowFunctionFormatting.body?o[0]:o}}toString(){return this.stringify()}stringify(t={}){var e=[];if(x(this.paramters,(r,s)=>{e.push(r+(s?"="+s.stringify(t):""))}),this.arrowFunctionFormatting){var r=!1===this.arrowFunctionFormatting.head||1===e.length&&-1===e[0].indexOf("="),s=!1===this.arrowFunctionFormatting.body;return(r?e[0]:"("+e.join(", ")+")")+" => "+(s?this.statements.stringify(t):"{"+this.statements.stringify(t)+"}")}return"function ("+e.join(", ")+") {"+this.statements.stringify(t)+"}"}static parse(t,e,r={}){var s;if((t=t.trim()).startsWith("function")&&(s=H.split(t,[]).slice(1).filter(t=>t.trim()))&&2===s.length)var n=!1,i=R(s.shift().trim(),"(",")"),a=R(s.shift().trim(),"{","}");else{if(t.startsWith("function")||!(s=H.split(t,["=>"]))||2!==s.length)return;i=s.shift().trim(),a=s.shift().trim(),n={};M(i,"(",")")?i=R(i,"(",")"):n.head=!1,M(a,"{","}")?a=R(a,"{","}"):n.body=!1}var o={};H.split(i,[","]).forEach(t=>{var r=t.split("=");r[1]?o[r[0].trim()]=e(r[1].trim(),null,{meta:null}):o[t.trim()]=null});var h=e(a,[wt],{assert:!1})||e(a,null,{meta:null});return new this(o,"Block"===h.jsenType?h:new wt([h]),n)}};Nt.operators=["=>"];var Lt=Nt;var qt=class extends P{constructor(t,e,r,s={}){super(),this.assertion=t,this.onTrue=e,this.onFalse=r,this.params=s}eval(t=null,e={}){var r=t instanceof I?t.params.errorLevel:void 0,s=new I({main:{},super:t},{type:2,errorLevel:r});return this.assertion.eval(t,e)?this.onTrue?this.onTrue.eval(s,e):void 0:this.onFalse?this.onFalse.eval(s,e):void 0}toString(){return this.stringify()}stringify(t={}){var e=this.onTrue&&this.params.onTrueIsBlock?"{"+this.onTrue.stringify(t)+"}":this.onTrue?this.onTrue.stringify(t):"",r=this.onFalse&&this.params.onFalseIsBlock?"{"+this.onFalse.stringify(t)+"}":this.onFalse?this.onFalse.stringify(t):"";return"if ("+this.assertion.stringify(t)+")"+e+(r?" else "+r:"")}static parse(t,e,r={}){var s;if((t=t.trim()).startsWith("if")&&(s=H.split(t,[],{limit:2}).slice(1).filter(t=>t.trim()))&&2===s.length){var n,i,a=e(R(s.shift().trim(),"(",")").trim()),o=H.split(s.shift().trim(),["else"],{limit:1}),h=o.shift().trim(),c=(o.shift()||"").trim();return M(h,"{","}")?(n=!0,h=e(h=R(h,"{","}").trim(),[wt],{assert:!1,meta:null})||e(h,null,{meta:null})):h=e(h,null,{meta:null}),c&&(M(c,"{","}")?(i=!0,c=e(c=R(c,"{","}").trim(),[wt],{assert:!1,meta:null})||e(c,null,{meta:null})):c=e(c,null,{meta:null})),new this(a,h?"Block"===h.jsenType?h:new wt([h]):null,c?"Block"===c.jsenType?c:new wt([c]):null,{onTrueIsBlock:n,onFalseIsBlock:i})}}},Dt=function(t,e,r=null){return s(e)?t.filter(t=>r?e.filter(e=>r(t,e)).length:-1!==e.indexOf(t)):[]};const It=class extends j{};Object.defineProperty(It.prototype,"jsenType",{get:()=>"MathExpression"});var Bt=It;const Vt=class extends Bt{constructor(t,e){super(),this.val=t,this.exprs=e}eval(t=null,e={}){return this.exprs.reduce((r,s)=>{var n=s.val.eval(t,e),i=s.operator.trim();if(!(h(r)&&h(n)||"+"===i))throw new Error("Invalid Math expression: "+this.toString()+"!");switch(i){case"+":return r+n;case"-":return r-n;case"*":return r*n;case"/":return r/n}},this.val.eval(t,e))}toString(){return this.stringify()}stringify(t={}){return[this.val.stringify(t)].concat(this.exprs.map(e=>e.operator+" "+e.val.stringify(t))).join(" ")}static parse(t,e,r={}){var s=H.lex(t,K(this.operators));if(s.tokens.length>1&&s.matches.length===s.tokens.length-1){var n=q(s.matches);if(Dt(n,this.operators.sup).length&&Dt(n,this.operators.sub).length)throw new Error('"Addition/subtraction" and "multiplication/division" operators cannot be used in the same expression: '+t+"!");return new this(e(s.tokens.shift().trim()),s.tokens.map((t,r)=>({operator:s.matches[r],val:e(t.trim())})))}}};Vt.operators={sup:["*","/"],sub:["+","-"]};var Mt=Vt;const Rt=class extends j{};Object.defineProperty(Rt.prototype,"jsenType",{get:()=>"NumberType"});var Ut=Rt;var Qt=class extends Ut{constructor(t,e=0){super(),this.int=t,this.dec=e}eval(){return parseFloat(this.int+(this.dec?"."+this.dec:null))}toString(){return this.stringify()}stringify(t={}){return this.int+(this.dec?"."+this.dec:null)}static parse(t,e,r={}){if(h(t)){t=t.split(".");return new this(parseInt(t.shift()),parseInt(t.shift()))}}};const Kt=class extends j{};Object.defineProperty(Kt.prototype,"jsenType",{get:()=>"ObjectType"});var Jt=Kt;const zt=class extends Jt{constructor(t){super(),this.entries=t||{}}inherit(t){return t instanceof Jt&&x(t.entries,(t,e)=>{t in this.entries||(this.entries[t]=e)}),this}eval(t=null,e={}){var r={};return x(this.entries,(s,n)=>{r[s]=n.eval(t,e)}),r}toString(){return this.stringify()}stringify(t={}){var e=[];return x(this.entries,(r,s)=>{e.push(r+zt.operators.sub+s.stringify(t))}),"{"+e.join(zt.operators.sup)+"}"}static parse(t,e,r={}){if(M(t,"{","}")&&!H.match(t.trim(),[" "]).length){var s={},n=H.split(R(t,"{","}"),[zt.operators.sup]).map(t=>t.trim()).filter(t=>t);return x(n,(t,r)=>{var n=H.split(r,[zt.operators.sub],{limit:1});s[J(n).trim()]=e(z(n).trim())}),new this(s)}}};zt.operators={sup:",",sub:":"};var Gt=zt;const Ht=class extends j{};Object.defineProperty(Ht.prototype,"jsenType",{get:()=>"PresenceOperator"});var Xt=Ht;const Yt=class extends Xt{constructor(t,e,r="in"){super(),this.prop=t,this.reference=e,this.operator=r}eval(t=null,e={}){var r=this.prop.eval(t,e);try{return this.reference.getEval(t,e).has(r)}catch(t){throw t instanceof D?new D("["+this+"]: "+t.message):t}}toString(){return this.stringify()}stringify(t={}){return[this.prop.stringify(t),this.operator,this.reference.stringify(t)].join(" ")}static parse(t,e,r={}){var s=H.lex(t,this.operators);if(2===s.tokens.length){var n,i;if(!((n=e(s.tokens.shift().trim()))&&(i=e(s.tokens.shift().trim()))instanceof O))throw new W(t);return new this(n,i,s.matches[0].trim())}}};Yt.operators=[" in "];var Zt=Yt;const te=class extends O{constructor(t,e,r=!1){super(),this.context=t,this.name=e,this.backticks=r}getEval(t=null,e={}){var r=t,s=this.name;return this.context&&(s instanceof j&&(s=s.eval(t,e)),r=this.context.eval(t,e)),{get:()=>I.create(r).get(s,e.trap),del:()=>I.create(r).del(s,e.trap),has:t=>I.create(r).has(s,t,e.trap),set:(t,n=null)=>I.create(r).set(s,t,e.trap,n),exec:t=>I.create(r).exec(s,t,e.trap)}}eval(t=null,e={}){try{return this.getEval(t,e).get()}catch(t){throw t instanceof D?new D("["+this+"]: "+t.message):t}}toString(){return this.stringify()}stringify(t={}){var e=this.name;if(this.context){var r=this.context.stringify(t);e instanceof j?e="["+e.stringify(t)+"]":this.backticks&&(e="`"+e+"`")}else{r=t.context;this.backticks&&(e="`"+e+"`")}return(r||"")+(r&&!e.startsWith("[")?te.separator:"")+e}static parse(t,e,r={}){if(!H.match(t.trim(),[" "]).length){var s,n,i=H.split(t,[]),a=i.pop(),o=H.split(a.trim(),[this.separator],{preserveDelims:!0});if(o.length>1&&(a=o.pop().substr(1),i=i.concat(o)),M(a,"`","`")&&(a=R(a,"`","`"),n=!0),i.length&&((s=e(i.join(""))).isContext=!0),M(a,"[","]")){if(!s)throw new W(t);a=e(R(a,"[","]"))}return new this(s,a,n)}}};te.separator=".";var ee=te;var re=class extends xt{constructor(t){super(),this.expr=t}eval(t=null,e={}){return this.expr?this.expr.eval(t,e):void 0}toString(){return this.stringify()}stringify(t={}){return this.expr?"return "+this.expr.stringify(t):"return"}static parse(t,e,r={}){var s=t.toLowerCase();if(s.startsWith("return ")||"return"===s)return new this(e(t.substr(6).trim()))}};const se=class extends j{};Object.defineProperty(se.prototype,"jsenType",{get:()=>"StringType"});var ne=se;var ie=class extends ne{constructor(t,e){super(),this.expr=t,this.quote=e}eval(){return this.expr}toString(){return this.stringify()}stringify(t={}){return this.quote+this.expr+this.quote}static parse(t,e,r={}){if(t=t.trim(),(M(t,'"','"')||M(t,"'","'"))&&!H.match(t,[" "]).length){var s=M(t,'"','"')?'"':"'";return new this(R(t,s,s),s)}}};const ae=class extends j{};Object.defineProperty(ae.prototype,"jsenType",{get:()=>"Void"});var oe=ae;var he=class extends oe{constructor(t){super(),this.val=t}eval(){return"null"===this.val.toLowerCase().trim()?null:void 0}toString(){return this.stringify()}stringify(t={}){return this.val}static parse(t,e,r={}){if("null"===(t=t.toLowerCase().trim())||"undefined"===t)return new this(t)}};_.grammars={If:qt,Return:re,Deletion:At,Assignment:gt,Presence:Zt,Func:Lt,Abstraction:Z,Condition:Pt,Assertion:ct,Comparison:Ct,Math:Mt,Arr:rt,Obj:Gt,Num:Qt,Str:ie,Bool:kt,Void:he,Call:Ot,Reference:ee};var ce=_;window.WN||(window.WN={}),window.WN.Jsen=ce,window.WebNative||(window.WebNative={}),window.WebNative.Jsen=ce}]);
//# sourceMappingURL=main.js.map