webpackJsonp([35783957827783],{96:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;v.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(p)&&_.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==p){var s=n[i],u=o.hasOwnProperty(i);if(r(u,i),_.hasOwnProperty(i))_[i](t,s);else{var l=N.hasOwnProperty(i),E="function"==typeof s,d=E&&!l&&!u&&n.autobind!==!1;if(d)a.push(i,s),o[i]=s;else if(u){var y=N[i];c(l&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=f(o[i],s):"DEFINE_MANY"===y&&(o[i]=m(o[i],s))}else o[i]=s}}}else;}function u(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in _;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=g.hasOwnProperty(n)?g[n]:null;return c("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],o))}t[n]=o}}}function l(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return l(r,n),l(r,o),r}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function E(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=E(t,r)}}function y(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new M,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],h.forEach(a.bind(null,e)),a(e,D),a(e,t),a(e,b),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var h=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},M=function(){};return i(M.prototype,t.prototype,v),y}var a,i=n(4),s=n(34),c=n(1),p="mixins";a={},t.exports=r},157:function(t,e,n){!function(e,n){t.exports=n()}(this,function(){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);return function c(p,u,l){if("string"!=typeof u){if(s){var f=i(u);f&&f!==s&&c(p,f,l)}var m=o(u);r&&(m=m.concat(r(u)));for(var E=0;E<m.length;++E){var d=m[E];if(!(t[d]||e[d]||l&&l[d])){var y=a(u,d);try{n(p,d,y)}catch(t){}}}return p}return p}})},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(t,e){for(var o,s,c=n(t),p=1;p<arguments.length;p++){o=Object(arguments[p]);for(var u in o)a.call(o,u)&&(c[u]=o[u]);if(r){s=r(o);for(var l=0;l<s.length;l++)i.call(o,s[l])&&(c[s[l]]=o[s[l]])}}return c}},292:function(t,e){},202:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(5),a=o(r),i=n(99);o(i);n(292);var s=n(426),c=o(s),p=function(){return a.default.createElement("main",null,a.default.createElement("img",{src:c.default,alt:"Profile Picture"}),a.default.createElement("h1",null,"Come work with me"),a.default.createElement("p",null,"Email: Firstname and Lastname at gmail dot com."),a.default.createElement("p",null,"Twitter: ",a.default.createElement("a",{href:"https://twitter.com/CaseyLeask"},"@CaseyLeask")),a.default.createElement("p",null,"LinkedIn: ",a.default.createElement("a",{href:"https://www.linkedin.com/in/casey-leask-099aa922/"},"https://www.linkedin.com/in/casey-leask-099aa922/")),a.default.createElement("p",null,"I’m looking for a new role as CTO or VP/Head of Engineering (or COO), or similar, remote or in Melbourne."))};e.default=p,t.exports=e.default},426:function(t,e,n){t.exports=n.p+"static/profile.d4235b15.jpeg"}});
//# sourceMappingURL=component---src-pages-index-js-fb37216e3718b0894b8c.js.map