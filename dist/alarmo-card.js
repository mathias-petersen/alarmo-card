var AlarmoCard=function(e){"use strict";function t(e,t,i,n){var r,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,i,o):r(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,t,i,n,r,a,o){try{var s=e[a](o),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(n,r)}function a(e,t,i){return t=h(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}(e,m()?Reflect.construct(t,i||[],h(e).constructor):t.apply(e,i))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function l(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw a}}}}function d(e,t,i){return(t=k(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var n=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(arguments.length<3?e:i):r.value}},u.apply(null,arguments)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(){v=function(){return t};var e,t={},i=Object.prototype,n=i.hasOwnProperty,r=Object.defineProperty||function(e,t,i){e[t]=i.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,i){return e[t]=i}}function d(e,t,i,n){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype),s=new z(n||[]);return r(o,"_invoke",{value:O(e,i,s)}),o}function u(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var h="suspendedStart",p="suspendedYield",m="executing",f="completed",g={};function _(){}function b(){}function y(){}var w={};c(w,o,(function(){return this}));var k=Object.getPrototypeOf,$=k&&k(k(P([])));$&&$!==i&&n.call($,o)&&(w=$);var x=y.prototype=_.prototype=Object.create(w);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function i(r,a,o,s){var l=u(e[r],e,a);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,o,s)}),(function(e){i("throw",e,o,s)})):t.resolve(d).then((function(e){c.value=e,o(c)}),(function(e){return i("throw",e,o,s)}))}s(l.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function O(t,i,n){var r=h;return function(a,o){if(r===m)throw Error("Generator is already running");if(r===f){if("throw"===a)throw o;return{value:e,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var l=E(s,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var c=u(t,i,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}function E(t,i){var n=i.method,r=t.iterator[n];if(r===e)return i.delegate=null,"throw"===n&&t.iterator.return&&(i.method="return",i.arg=e,E(t,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=u(r,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,g;var o=a.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,g):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(t){if(t||""===t){var i=t[o];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function i(){for(;++r<t.length;)if(n.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=y,r(x,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},A(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,i,n,r,a){void 0===a&&(a=Promise);var o=new C(d(e,i,n,r),a);return t.isGeneratorFunction(i)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},A(x),c(x,l,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var n in t)i.push(n);return i.reverse(),function e(){for(;i.length;){var n=i.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(n,r){return s.type="throw",s.arg=t,i.next=n,r&&(i.method="next",i.arg=e),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),j(i),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var n=i.completion;if("throw"===n.type){var r=n.arg;j(i)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:P(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(i=i.call(e)).next,0===t);else for(;!(l=(n=a.call(i)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,i,n){var r=u(h(e.prototype),t,i);return"function"==typeof r?function(e){return r.apply(i,e)}:r}function w(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(m())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var r=new(e.bind.apply(e,n));return i&&_(r,i.prototype),r}(e,arguments,h(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),_(i,e)},A(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var C,O,E=window,S=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),z=new WeakMap,P=function(){return l((function e(t,i,n){if(o(this,e),this._$cssResult$=!0,n!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}),[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(S&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=z.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&z.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),T=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var r=1===e.length?e[0]:i.reduce((function(t,i,n){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[n+1]}),e[0]);return new P(r,e,j)},M=S?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",n=c(e.cssRules);try{for(n.s();!(t=n.n()).done;){i+=t.value.cssText}}catch(e){n.e(e)}finally{n.f()}return function(e){return new P("string"==typeof e?e:e+"",void 0,j)}(i)}(e):e},N=window,L=N.trustedTypes,U=L?L.emptyScript:"",R=N.reactiveElementPolyfillSupport,H={toAttribute:function(e,t){switch(t){case Boolean:e=e?U:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},D=function(e,t){return t!==e&&(t==t||e==e)},I={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:D},B="finalized",q=function(e){function t(){var e;return o(this,t),(e=a(this,t))._$Ei=new Map,e.isUpdatePending=!1,e.hasUpdated=!1,e._$El=null,e._$Eu(),e}return p(t,e),l(t,[{key:"_$Eu",value:function(){var e,t=this;this._$E_=new Promise((function(e){return t.enableUpdating=e})),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((function(e){return e(t)}))}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}},{key:"_$Eg",value:function(){var e=this;this.constructor.elementProperties.forEach((function(t,i){e.hasOwnProperty(i)&&(e._$Ei.set(i,e[i]),delete e[i])}))}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){S?e.adoptedStyleSheets=t.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet})):t.forEach((function(t){var i=document.createElement("style"),n=E.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$ES)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$EO",value:function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I,r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){var a=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:H).toAttribute(t,n.type);this._$El=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}},{key:"_$AK",value:function(e,t){var i,n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){var a=n.getPropertyOptions(r),o="function"==typeof a.converter?{fromAttribute:a.converter}:void 0!==(null===(i=a.converter)||void 0===i?void 0:i.fromAttribute)?a.converter:H;this._$El=r,this[r]=o.fromAttribute(t,a.type),this._$El=null}}},{key:"requestUpdate",value:function(e,t,i){var n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||D)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}},{key:"_$Ej",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var o=e.apply(t,i);function s(e){r(o,n,a,s,l,"next",e)}function l(e){r(o,n,a,s,l,"throw",e)}s(void 0)}))}}(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isUpdatePending=!0,e.prev=1,e.next=4,this._$E_;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Promise.reject(e.t0);case 9:if(t=this.scheduleUpdate(),e.t1=null!=t,!e.t1){e.next=14;break}return e.next=14,t;case 14:return e.abrupt("return",!this.isUpdatePending);case 15:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var e,t=this;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach((function(e,i){return t[i]=e})),this._$Ei=void 0);var i=!1,n=this._$AL;try{(i=this.shouldUpdate(n))?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw i=!1,this._$Ek(),e}i&&this._$AE(n)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$Ek",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$E_}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._$EC&&(this._$EC.forEach((function(e,i){return t._$EO(i,t[i],e)})),this._$EC=void 0),this._$Ek()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this.elementProperties.forEach((function(i,n){var r=e._$Ep(n,i);void 0!==r&&(e._$Ev.set(r,n),t.push(r))})),t}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var i="symbol"==$(e)?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}},{key:"getPropertyDescriptor",value:function(e,t,i){return{get:function(){return this[t]},set:function(n){var r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this.elementProperties.get(e)||I}},{key:"finalize",value:function(){if(this.hasOwnProperty(B))return!1;this[B]=!0;var e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=w(e.h)),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var t,i=this.properties,n=c([].concat(w(Object.getOwnPropertyNames(i)),w(Object.getOwnPropertySymbols(i))));try{for(n.s();!(t=n.n()).done;){var r=t.value;this.createProperty(r,i[r])}}catch(e){n.e(e)}finally{n.f()}}return this.elementStyles=this.finalizeStyles(this.styles),!0}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,n=c(new Set(e.flat(1/0).reverse()));try{for(n.s();!(i=n.n()).done;){var r=i.value;t.unshift(M(r))}}catch(e){n.e(e)}finally{n.f()}}else void 0!==e&&t.push(M(e));return t}},{key:"_$Ep",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(A(HTMLElement));q[B]=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},null==R||R({ReactiveElement:q}),(null!==(C=N.reactiveElementVersions)&&void 0!==C?C:N.reactiveElementVersions=[]).push("1.6.3");var F=window,V=F.trustedTypes,W=V?V.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,Z="$lit$",G="lit$".concat((Math.random()+"").slice(9),"$"),K="?"+G,J="<".concat(K,">"),Y=document,Q=function(){return Y.createComment("")},X=function(e){return null===e||"object"!=$(e)&&"function"!=typeof e},ee=Array.isArray,te="[ \t\n\f\r]",ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,re=/>/g,ae=RegExp(">|".concat(te,"(?:([^\\s\"'>=/]+)(").concat(te,"*=").concat(te,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),oe=/'/g,se=/"/g,le=/^(?:script|style|textarea|title)$/i,ce=function(e){return function(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:e,strings:t,values:n}}}(1),de=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),he=new WeakMap,pe=Y.createTreeWalker(Y,129,null,!1);function me(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==W?W.createHTML(t):t}var fe=function(e,t){for(var i,n=e.length-1,r=[],a=2===t?"<svg>":"",o=ie,s=0;s<n;s++){for(var l=e[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(o.lastIndex=h,null!==(d=o.exec(l)));)h=o.lastIndex,o===ie?"!--"===d[1]?o=ne:void 0!==d[1]?o=re:void 0!==d[2]?(le.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=ae):void 0!==d[3]&&(o=ae):o===ae?">"===d[0]?(o=null!=i?i:ie,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?ae:'"'===d[3]?se:oe):o===se||o===oe?o=ae:o===ne||o===re?o=ie:(o=ae,i=void 0);var p=o===ae&&e[s+1].startsWith("/>")?" ":"";a+=o===ie?l+J:u>=0?(r.push(c),l.slice(0,u)+Z+l.slice(u)+G+p):l+G+(-2===u?(r.push(void 0),s):p)}return[me(e,a+(e[n]||"<?>")+(2===t?"</svg>":"")),r]},ge=function(){return l((function e(t,i){var n,r=t.strings,a=t._$litType$;o(this,e),this.parts=[];var s=0,l=0,d=r.length-1,u=this.parts,h=b(fe(r,a),2),p=h[0],m=h[1];if(this.el=e.createElement(p,i),pe.currentNode=this.el.content,2===a){var f=this.el.content,g=f.firstChild;g.remove(),f.append.apply(f,w(g.childNodes))}for(;null!==(n=pe.nextNode())&&u.length<d;){if(1===n.nodeType){if(n.hasAttributes()){var v,_=[],y=c(n.getAttributeNames());try{for(y.s();!(v=y.n()).done;){var k=v.value;if(k.endsWith(Z)||k.startsWith(G)){var $=m[l++];if(_.push(k),void 0!==$){var x=n.getAttribute($.toLowerCase()+Z).split(G),A=/([.?@])?(.*)/.exec($);u.push({type:1,index:s,name:A[2],strings:x,ctor:"."===A[1]?we:"?"===A[1]?$e:"@"===A[1]?xe:ye})}else u.push({type:6,index:s})}}}catch(e){y.e(e)}finally{y.f()}for(var C=0,O=_;C<O.length;C++){var E=O[C];n.removeAttribute(E)}}if(le.test(n.tagName)){var S=n.textContent.split(G),j=S.length-1;if(j>0){n.textContent=V?V.emptyScript:"";for(var z=0;z<j;z++)n.append(S[z],Q()),pe.nextNode(),u.push({type:2,index:++s});n.append(S[j],Q())}}}else if(8===n.nodeType)if(n.data===K)u.push({type:2,index:s});else for(var P=-1;-1!==(P=n.data.indexOf(G,P+1));)u.push({type:7,index:s}),P+=G.length-1;s++}}),null,[{key:"createElement",value:function(e,t){var i=Y.createElement("template");return i.innerHTML=e,i}}])}();function ve(e,t){var i,n,r,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,s=arguments.length>3?arguments[3]:void 0;if(t===de)return t;var l=void 0!==s?null===(i=o._$Co)||void 0===i?void 0:i[s]:o._$Cl,c=X(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(e))._$AT(e,o,s),void 0!==s?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:o._$Cl=l),void 0!==l&&(t=ve(e,l._$AS(e,t.values),l,s)),t}var _e=function(){return l((function e(t,i){o(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,n=i.el.content,r=i.parts,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Y).importNode(n,!0);pe.currentNode=a;for(var o=pe.nextNode(),s=0,l=0,c=r[0];void 0!==c;){if(s===c.index){var d=void 0;2===c.type?d=new be(o,o.nextSibling,this,e):1===c.type?d=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(d=new Ae(o,this,e)),this._$AV.push(d),c=r[++l]}s!==(null==c?void 0:c.index)&&(o=pe.nextNode(),s++)}return pe.currentNode=Y,a}},{key:"v",value:function(e){var t,i=0,n=c(this._$AV);try{for(n.s();!(t=n.n()).done;){var r=t.value;void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,i),i+=r.strings.length-2):r._$AI(e[i])),i++}}catch(e){n.e(e)}finally{n.f()}}}])}(),be=function(){function e(t,i,n,r){var a;o(this,e),this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=r,this._$Cp=null===(a=null==r?void 0:r.isConnected)||void 0===a||a}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}},{key:"parentNode",get:function(){var e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=ve(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),X(e)?e===ue||null==e||""===e?(this._$AH!==ue&&this._$AR(),this._$AH=ue):e!==this._$AH&&e!==de&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):function(e){return ee(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.T(e):this._(e)}},{key:"k",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"$",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}},{key:"_",value:function(e){this._$AH!==ue&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(Y.createTextNode(e)),this._$AH=e}},{key:"g",value:function(e){var t,i=e.values,n=e._$litType$,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ge.createElement(me(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{var a=new _e(r,this),o=a.u(this.options);a.v(i),this.$(o),this._$AH=a}}},{key:"_$AC",value:function(e){var t=he.get(e.strings);return void 0===t&&he.set(e.strings,t=new ge(e)),t}},{key:"T",value:function(t){ee(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,a=0,o=c(t);try{for(o.s();!(n=o.n()).done;){var s=n.value;a===r.length?r.push(i=new e(this.k(Q()),this.k(Q()),this,this.options)):i=r[a],i._$AI(s),a++}}catch(e){o.e(e)}finally{o.f()}a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}},{key:"_$AR",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){var n=t.nextSibling;t.remove(),t=n}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),ye=function(){return l((function e(t,i,n,r,a){o(this,e),this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ue}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,a=!1;if(void 0===r)e=ve(this,e,t,0),(a=!X(e)||e!==this._$AH&&e!==de)&&(this._$AH=e);else{var o,s,l=e;for(e=r[0],o=0;o<r.length-1;o++)(s=ve(this,l[i+o],t,o))===de&&(s=this._$AH[o]),a||(a=!X(s)||s!==this._$AH[o]),s===ue?e=ue:e!==ue&&(e+=(null!=s?s:"")+r[o+1]),this._$AH[o]=s}a&&!n&&this.j(e)}},{key:"j",value:function(e){e===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),we=function(e){function t(){var e;return o(this,t),(e=a(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===ue?void 0:e}}])}(ye),ke=V?V.emptyScript:"",$e=function(e){function t(){var e;return o(this,t),(e=a(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){e&&e!==ue?this.element.setAttribute(this.name,ke):this.element.removeAttribute(this.name)}}])}(ye),xe=function(e){function t(e,i,n,r,s){var l;return o(this,t),(l=a(this,t,[e,i,n,r,s])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=ve(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:ue)!==de){var i=this._$AH,n=e===ue&&i!==ue||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==ue&&(i===ue||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}])}(ye),Ae=function(){return l((function e(t,i,n){o(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){ve(this,e)}}])}(),Ce=F.litHtmlPolyfillSupport;null==Ce||Ce(ge,be),(null!==(O=F.litHtmlVersions)&&void 0!==O?O:F.litHtmlVersions=[]).push("2.8.0");var Oe,Ee,Se=function(e){function t(){var e;return o(this,t),(e=a(this,t,arguments)).renderOptions={host:n(e)},e._$Do=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,n=y(t,"createRenderRoot",this)([]);return null!==(e=(i=this.renderOptions).renderBefore)&&void 0!==e||(i.renderBefore=n.firstChild),n}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),y(t,"update",this)([e]),this._$Do=function(e,t,i){var n,r,a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t,o=a._$litPart$;if(void 0===o){var s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;a._$litPart$=o=new be(t.insertBefore(Q(),s),s,void 0,null!=i?i:{})}return o._$AI(e),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;y(t,"connectedCallback",this)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;y(t,"disconnectedCallback",this)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return de}}])}(q);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Se.finalized=!0,Se._$litElement$=!0,null===(Oe=globalThis.litElementHydrateSupport)||void 0===Oe||Oe.call(globalThis,{LitElement:Se});var je=globalThis.litElementPolyfillSupport;null==je||je({LitElement:Se}),(null!==(Ee=globalThis.litElementVersions)&&void 0!==Ee?Ee:globalThis.litElementVersions=[]).push("3.3.3");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ze,Pe,Te,Me=function(e){return function(t){return"function"==typeof t?function(e,t){return customElements.define(e,t),t}(e,t):function(e,t){return{kind:t.kind,elements:t.elements,finisher:function(t){customElements.define(e,t)}}}(e,t)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ne(e){return function(t,i){return void 0!==i?function(e,t,i){t.constructor.createProperty(i,e)}(e,t,i):function(e,t){return"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?g(g({},t),{},{finisher:function(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(i){i.createProperty(t.key,e)}}}(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Le(e){return Ne(g(g({},e),{},{state:!0}))}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ue(e){return e.substr(0,e.indexOf("."))}null===(ze=window.HTMLSlotElement)||void 0===ze||ze.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Pe||(Pe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Te||(Te={}));var Re=function(e,t,i,n){n=n||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,e.dispatchEvent(r),r},He={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function De(e,t){if(e in He)return He[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var Ie={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Be={binary_sensor:function(e,t){var i="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return De("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Ie)return Ie[t];if("battery"===t){var i=Number(e.state);if(isNaN(i))return"mdi:battery-unknown";var n=10*Math.round(i/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var r=e.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"mdi:thermometer":De("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?De("input_datetime"):"mdi:calendar":"mdi:clock"}};const qe=["1","2","3","4","5","6","7","8","9","","0","clear"],Fe="number";var Ve;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Ve||(Ve={}));const We={[Ve.ArmedAway]:"hass:shield-lock",[Ve.ArmedHome]:"hass:shield-home",[Ve.ArmedNight]:"hass:shield-moon",[Ve.ArmedVacation]:"hass:shield-airplane",[Ve.ArmedCustomBypass]:"hass:security",[Ve.Disarmed]:"hass:shield-off",[Ve.Arming]:"hass:shield-outline",[Ve.Pending]:"hass:shield-outline",[Ve.Triggered]:"hass:bell-ring"};var Ze;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm",e.SwitchMode="switch_mode"}(Ze||(Ze={}));const Ge={[Ze.ArmAway]:Ve.ArmedAway,[Ze.ArmHome]:Ve.ArmedHome,[Ze.ArmNight]:Ve.ArmedNight,[Ze.ArmVacation]:Ve.ArmedVacation,[Ze.ArmCustomBypass]:Ve.ArmedCustomBypass,[Ze.Disarm]:Ve.Disarmed};var Ke;!function(e){e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Ke||(Ke={}));const Je=["arming","pending"],Ye={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0},Qe=2.5,Xe={skip_delay:!1,force:!1};var et={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},tt={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},it={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},nt={arm_options:et,editor:tt,errors:it},rt={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},at={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},ot={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},st={arm_options:rt,editor:at,errors:ot},lt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},ct={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},dt={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},ut={arm_options:lt,editor:ct,errors:dt},ht={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},pt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},mt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},ft={arm_options:ht,editor:pt,errors:mt},gt={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},vt={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},_t={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},bt={arm_options:gt,editor:vt,errors:_t},yt={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},wt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},kt={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},$t={arm_options:yt,editor:wt,errors:kt},xt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},At={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",use_clear_icon:"Mostre o ícone (em vez de texto) no teclado para limpar a entrada do código.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:"Mostrar botão para esta ação",button_label:"Substituir texto do botão",state_label:"Substituir texto de status"}},Ct={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Ot={arm_options:xt,editor:At,errors:Ct},Et={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},St={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},jt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},zt={arm_options:Et,editor:St,errors:jt},Pt={cs:Object.freeze({__proto__:null,arm_options:et,default:nt,editor:tt,errors:it}),en:Object.freeze({__proto__:null,arm_options:rt,default:st,editor:at,errors:ot}),es:Object.freeze({__proto__:null,arm_options:lt,default:ut,editor:ct,errors:dt}),fr:Object.freeze({__proto__:null,arm_options:ht,default:ft,editor:pt,errors:mt}),it:Object.freeze({__proto__:null,arm_options:gt,default:bt,editor:vt,errors:_t}),nl:Object.freeze({__proto__:null,arm_options:yt,default:$t,editor:wt,errors:kt}),"pt-BR":Object.freeze({__proto__:null,arm_options:xt,default:Ot,editor:At,errors:Ct}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Et,default:zt,editor:St,errors:jt})};function Tt(e,t,i="",n=""){const r=t.replace(/['"]+/g,"").replace("-","_");var a;try{a=e.split(".").reduce(((e,t)=>e[t]),Pt[r])}catch(t){a=e.split(".").reduce(((e,t)=>e[t]),Pt.en)}if(void 0===a&&(a=e.split(".").reduce(((e,t)=>e[t]),Pt.en)),""!==i&&""!==n){Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);for(let e=0;e<i.length;e++)a=a.replace(i[e],n[e])}return a}function Mt(e){return null!=e}function Nt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Mt(e)}}const Lt=(e,t)=>{let i={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Ut=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Ze.ArmAway),1&t&&i.push(Ze.ArmHome),4&t&&i.push(Ze.ArmNight),32&t&&i.push(Ze.ArmVacation),16&t&&i.push(Ze.ArmCustomBypass),i},Rt=(e,t,i)=>{const n=Ue(e.entity_id),r=e.attributes.device_class,a=e.state;if(Object.values(Ve).includes(a)&&i){const e=Lt(a,i);if(!Nt(e.state_label))return e.state_label}let o="";return r&&(o=t(`component.${n}.entity_component.${r}.state.${e.state}`)),o||(o=t(`component.${n}.entity_component._.state.${e.state}`)),o},Ht=e=>null!==e.attributes.code_format,Dt=e=>e.callWS({type:"alarmo/entities"}),It=e=>e.callWS({type:"alarmo/config"});let Bt=class extends Se{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Dt(this.hass).then((e=>{this._entities=e.map((e=>e.entity_id))})).catch((e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})})),this._alarmoConfig=await It(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Ye),e)}render(){var e,t,i;if(!this._config||!this.hass||!this._entities)return ce``;if(!this._entities.length)return ce`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const n=this._config.entity?this.hass.states[this._config.entity]:void 0,r=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=Lt(Ge[this._editAction],this._config);return ce`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Tt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!e.hide}
            ?disabled=${!e.hide&&1==Ut(n).map((e=>Ge[e])).filter((e=>!Lt(e,this._config).hide)).length||this._editAction==Ze.Disarm}
            @change=${e=>this._updateStateConfig(Ge[this._editAction],e.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          <span
            @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
          >
            ${Tt("editor.action_dialog.show_button",this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Tt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(Ge[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-textfield
            label="${Tt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${Ge[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(Ge[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>
        </div>
      `}return ce`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${n?ce`
              <div class="config-item">
                <span>${Tt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[...Ut(n),Ze.Disarm].map((e=>{const t=Ut(n).map((e=>Ge[e])),i=Lt(Ge[e],this._config).hide;return ce`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==t.filter((e=>!Lt(e,this._config).hide)).length||e==Ze.Disarm}
                        @change=${t=>this._updateStateConfig(Ge[e],t.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
                      >
                        ${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${Lt(Ge[e],this._config).hide}
                        @click=${()=>this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>
                  `}))}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Tt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              pin
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Tt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              pin
              ?disabled=${!n||!r}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Tt("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!n||!r}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Tt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Mt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Tt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!n||!r||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_arm_required)==(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Tt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Tt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}Re(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const n=e=>function(e,t){return e?Object.entries(e).filter((([e])=>t.includes(e))).reduce(((e,[t,i])=>Object.assign(e,{[t]:i})),{}):{}}(e,Object.keys(e).filter((t=>!Nt(e[t]))));let r=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const a=n(Object.assign(Object.assign({},r[e]),t));r=n(Object.assign(Object.assign({},r),{[e]:a})),this._updateConfig("states",r)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return T`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.checkbox-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.checkbox-item {
        display: flex;
        flex-direction: row;
        flex: 1 0 300px;
        font-size: 0.875rem;
        align-items: center;
      }
      div.checkbox-item.disabled {
        color: var(--disabled-text-color);
      }
      .checkbox-item span {
        cursor: pointer;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `}};t([Ne({attribute:!1})],Bt.prototype,"hass",void 0),t([Le()],Bt.prototype,"_config",void 0),t([Le()],Bt.prototype,"_alarmoConfig",void 0),t([Le()],Bt.prototype,"_entities",void 0),t([Le()],Bt.prototype,"_editAction",void 0),Bt=t([Me("alarmo-card-editor")],Bt);var qt=Object.freeze({__proto__:null,get AlarmoCardEditor(){return Bt}});class Ft extends Se{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Je.includes(i)?this.startTimer():Je.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Je.includes(e)&&this.startTimer()}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then((e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)})).catch((e=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this.datetime&&this.duration?ce` ${Math.max(Math.round(this.getRemaining()),0)} `:ce` <ha-icon .icon=${We[e]}></ha-icon> `}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],n=this.datetime&&this.duration;return ce`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${n?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${n?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return T`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}t([Ne()],Ft.prototype,"hass",void 0),t([Ne()],Ft.prototype,"entity",void 0),customElements.define("alarmo-state-badge",Ft);class Vt extends Se{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return ce``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=Ue(e.entity_id);return t in Be?Be[t](e):De(t,e.state)}(t):"mdi:help-circle-outline",n=e?Rt(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Pe.language}),r=e?t.attributes.friendly_name||function(e){return e.substr(e.indexOf(".")+1)}(t.entity_id):this.entity;let a=!!this.state||"on"==t.state;return ce`
      <div class="badge-container" @click=${()=>Re(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${a?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${i}></ha-icon>
            <div class="label">
              <span>${n}</span>
            </div>
          </div>
        </div>
        <div class="title">${r}</div>
      </div>
    `}static get styles(){return T`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([Ne()],Vt.prototype,"hass",void 0),t([Ne()],Vt.prototype,"entity",void 0),t([Ne()],Vt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",Vt);class Wt extends Se{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return ce`
      ${this.scaled?ce`
            <button ?disabled=${this.disabled}>
              <slot></slot>
            </button>
          `:ce`
            <mwc-button ?disabled=${this.disabled} ?outlined=${!this.disabled}>
              <slot></slot>
            </mwc-button>
          `}
    `}handleFocus(e){e.target.blur()}static get styles(){return T`
      button {
        width: 100%;
        border: none;
        background-color: rgba(var(--rgb-primary-text-color), 0.05);
        color: var(--primary-text-color);
        border-radius: 12px;
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * 0.875rem);
        font-weight: var(--mdc-typography-button-font-weight, 500);
        letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
        text-decoration: var(--mdc-typography-button-text-decoration, none);
        text-transform: var(--mdc-typography-button-text-transform, uppercase);
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button:not(:disabled) {
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
      button:disabled {
        color: var(--disabled-text-color);
          background-color: transparent;
      }
      button:not(:disabled):hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.08);
      }
      button:not(:disabled):active {
          background-color: rgba(var(--rgb-primary-text-color), 0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}t([Ne({type:Boolean})],Wt.prototype,"disabled",void 0),t([Ne({type:Boolean})],Wt.prototype,"scaled",void 0),customElements.define("alarmo-button",Wt);const Zt=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Ne({attribute:!1})],i.prototype,"hass",void 0),i};return e.AlarmoCard=class extends(Zt(Se)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Xe),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return qt})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find((e=>"alarm_control_panel"==Ue(e)));return await Dt(e).then((e=>{const i=e.sort(((e,t)=>Number(e.area_id)-Number(t.area_id)));i.length&&(t=i[0].entity_id)})),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe&&(Ht(t)||this._config.keep_keypad_visible)?9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Ue(e.entity))throw new Error("Invalid configuration provided for entity");if(Mt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>Qe))throw new Error("Invalid configuration provided for button_scale_keypad");if(Mt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>Qe))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Ye),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:"alarmo_updated"})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||Dt(this.hass).then((e=>{const t=e.find((e=>e.entity_id==this._config.entity));t&&(this.area_id=t.area_id?t.area_id:null)})).then((()=>It(this.hass))).then((e=>{this._alarmoConfig=e,this.backendConnection=!0})).then((()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t})).then((e=>{this.readyForArmModes=e.modes})).catch((e=>{this.backendConnection=!1}))}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Ke.Arm:this._clearCode();break;case Ke.Trigger:break;case Ke.InvalidCodeProvided:case Ke.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Ke.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case Ke.CommandNotAllowed:this._clearCode();break;case Ke.TriggerTimeExpired:break;case Ke.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((e=>t.states[e]!==this.hass.states[e])))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==Ve.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return ce``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?ce`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:ce`
      <ha-card>
        ${i.state===Ve.Disarmed?ce`
              <ha-button-menu
                corner="BOTTOM_START"
                multi
                @action=${this._toggleArmOptions}
                @click=${e=>e.preventDefault()}
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <mwc-list-item noninteractive>
                  <span class="title">
                    ${Tt("arm_options.heading",this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Tt("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Tt("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>Re(this,"hass-more-info",{entityId:this._config.entity})}
              style="--alarm-state-color: ${(e=>{if(!e||!e.state)return"var(--state-unavailable-color)";const t=e.state;return t==Ve.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Ve).includes(t)?`var(--state-alarm_control_panel-${t}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(i)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>Nt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${Rt(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${Ht(i)||this._config.keep_keypad_visible?ce`
              <div style="display: flex"><ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Ht(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe?"numeric":"text"}
              ></ha-textfield></div>
            `:ce``}
        ${!Ht(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Fe?ce``:ce`
              <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
                ${qe.map((e=>""===e?ce`
                        <alarmo-button
                          disabled
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        ></alarmo-button>
                      `:ce`
                        <alarmo-button
                          .value="${e}"
                          @click=${this._handlePadClick}
                          ?disabled=${!Ht(i)}
                          class="${"clear"!==e?"numberKey":""}"
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        >
                          ${"clear"===e?this._config.use_clear_icon?ce`
                                  <ha-icon icon="hass:backspace-outline"></ha-icon>
                                `:ce`
                                  <span>${this.hass.localize("ui.card.alarm_control_panel.clear_code")}</span>
                                `:ce`
                                <span>${e}</span>
                              `}
                        </alarmo-button>
                      `))}
              </div>
            `}
      </ha-card>
    `:ce`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return ce``;const e=this.hass.states[this._config.entity],t=e.state===Ve.Disarmed?Ut(e).filter((e=>!Lt(Ge[e],this._config).hide)):[Ze.Disarm],i=this._config.show_ready_indicator;return t.map((e=>{const t=Lt(Ge[e],this._config),n=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(Ge[e]);return ce`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${i&&e!=Ze.Disarm?ce`
                <ha-icon
                  icon="mdi:circle-medium"
                  style="${null===this.readyForArmModes?"color: var(--label-badge-grey)":n?"color: var(--success-color)":"color: var(--error-color)"}"
                  class="leading"
                ></ha-icon>
              `:""}
          ${Nt(t.button_label)?ce`
                <span>${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}</span>
              `:ce`
                <span>${t.button_label}</span>
              `}
        </alarmo-button>
      `}))}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return ce``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Ve.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?ce`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?Tt("errors.blocking_sensors",this.hass.language):Tt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map((([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ce`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?ce`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${Tt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map((e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ce`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:ce``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}_handleActionClick(e,t){e.target.blur(),this._clearCodeError(),t==Ze.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:Ge[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},Xe)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout((()=>{t.firstElementChild.blur()}),50)}static get styles(){return T`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
      }
      .header .icon {
        display: flex;
        padding-right: 20px;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 8px auto;
        max-width: 200px;
        text-align: center;
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
      }
      #keypad alarmo-button {
        padding: 8px;
        width: 30%;
        box-sizing: border-box;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      ha-button-menu {
        position: absolute;
        right: 4px;
        top: 4px;
      }
      mwc-list-item {
        --mdc-theme-secondary: var(--primary-color);
        --mdc-list-item-graphic-margin: 16px;
      }
      mwc-list-item .title {
        font-weight: 500;
        font-size: 1.1em;
      }
    `}},t([Ne({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([Le()],e.AlarmoCard.prototype,"_config",void 0),t([Le()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([Le()],e.AlarmoCard.prototype,"_input",void 0),t([Le()],e.AlarmoCard.prototype,"warning",void 0),t([Le()],e.AlarmoCard.prototype,"area_id",void 0),t([Le()],e.AlarmoCard.prototype,"armOptions",void 0),t([Le()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([Le()],e.AlarmoCard.prototype,"backendConnection",void 0),t([Le()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([Me("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.5.2".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
