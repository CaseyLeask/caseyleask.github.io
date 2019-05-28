webpackJsonp([35783957827783],{96:function(e,t,n){"use strict";function a(e){return e}function l(e,t,n){function l(e,t){var n=y.hasOwnProperty(t)?y[t]:null;_.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(u)&&b.mixins(e,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==u){var i=n[o],c=a.hasOwnProperty(o);if(l(c,o),b.hasOwnProperty(o))b[o](e,i);else{var d=y.hasOwnProperty(o),p="function"==typeof i,h=p&&!d&&!c&&n.autobind!==!1;if(h)r.push(o,i),a[o]=i;else if(c){var E=y[o];s(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,o),"DEFINE_MANY_MERGED"===E?a[o]=m(a[o],i):"DEFINE_MANY"===E&&(a[o]=f(a[o],i))}else a[o]=i}}}else;}function c(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var l=n in b;s(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var o=v.hasOwnProperty(n)?v[n]:null;return s("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=m(e[n],a))}e[n]=a}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function m(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var l={};return d(l,n),d(l,a),l}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],l=t[n+1];e[a]=p(e,l)}}function E(e){var t=a(function(e,a,l){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=a,this.refs=i,this.updater=l||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new N,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(r.bind(null,t)),r(t,w),r(t,e),r(t,k),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in y)t.prototype[l]||(t.prototype[l]=null);return t}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=m(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},k={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},N=function(){};return o(N.prototype,e.prototype,_),E}var r,o=n(4),i=n(34),s=n(1),u="mixins";r={},e.exports=l},157:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,i=o&&o(Object);return function s(u,c,d){if("string"!=typeof c){if(i){var m=o(c);m&&m!==i&&s(u,m,d)}var f=a(c);l&&(f=f.concat(l(c)));for(var p=0;p<f.length;++p){var h=f[p];if(!(e[h]||t[h]||d&&d[h])){var E=r(c,h);try{n(u,h,E)}catch(e){}}}return u}return u}})},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,i,s=n(e),u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var c in a)r.call(a,c)&&(s[c]=a[c]);if(l){i=l(a);for(var d=0;d<i.length;d++)o.call(a,i[d])&&(s[i[d]]=a[i[d]])}}return s}},293:function(e,t){},202:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(5),r=a(l),o=n(99);a(o);n(293);var i=n(427),s=a(i),u=function(){return r.default.createElement("main",null,r.default.createElement("section",{className:"about-me"},r.default.createElement("img",{src:s.default,className:"profile",alt:"Profile Picture"}),r.default.createElement("h1",null,"Hello! My name is Casey Leask."),r.default.createElement("h3",null,"I’m looking for a new role as CTO or VP/Head of Engineering (or COO), or similar, remote or in Melbourne.")),r.default.createElement("table",{className:"socialdeets"},r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"Email"),r.default.createElement("td",null,"Firstname and Lastname at gmail dot com.")),r.default.createElement("tr",null,r.default.createElement("td",null,"Twitter"),r.default.createElement("td",null,r.default.createElement("a",{href:"https://twitter.com/CaseyLeask"},"@CaseyLeask"))),r.default.createElement("tr",null,r.default.createElement("td",null,"LinkedIn"),r.default.createElement("td",null,r.default.createElement("a",{href:"https://www.linkedin.com/in/casey-leask-099aa922/"},"https://www.linkedin.com/in/casey-leask-099aa922/"))))),r.default.createElement("br",null),r.default.createElement("section",{className:"summary"},r.default.createElement("h4",null,"Some things I agree with"),r.default.createElement("p",null,"I've learnt a great deal from other people. Instead of attempting to rephrase or claim credit, I'm going to list a lot of principles (with links) that I found interesting and changed how I view software."),r.default.createElement("p",null,"Happy to talk at length about anything in this list!"),r.default.createElement("p",null,"(This list may expand or shrink at a moment's notice.)")),r.default.createElement("ul",{className:"principles-and-practices"},r.default.createElement("li",null,r.default.createElement("h3",null,"Asynchronous communication over synchronous communication "),r.default.createElement("p",null,r.default.createElement("a",{href:"http://blog.xebia.com/microservices-architecture-principle-4-asynchronous-communication-over-synchronous-communication"},"http://blog.xebia.com/microservices-architecture-principle-4-asynchronous-communication-over-synchronous-communication"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Simple over Complex"),r.default.createElement("blockquote",{cite:"https://en.wikiquote.org/wiki/John_Gall"},r.default.createElement("p",null,"A complex system that works is invariably found to have evolved from a simple system that worked."),r.default.createElement("p",null,"A complex system designed from scratch never works and cannot be patched up to make it work."),r.default.createElement("p",null,"You have to start over, beginning with a working simple system."),r.default.createElement("cite",null,"John Gall"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Infrastructure as Code"),r.default.createElement("p",null,"Apply the same standards of quality, consistency and repeatability of behaviour to your infrastructure as you do to your code.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Autonomy vs. Leverage"),r.default.createElement("p",null,"Have an agreed understanding of what areas we're interested in providing autonomy, and what areas of common function we should be leveraging."),r.default.createElement("p",null,r.default.createElement("a",{href:"https://svpg.com/autonomy-vs-leverage/"},"https://svpg.com/autonomy-vs-leverage"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Work in the spirit of agile"),r.default.createElement("p",null,r.default.createElement("a",{href:"agilemanifesto.org"},"agilemanifesto.org"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Defense in depth"),r.default.createElement("p",null,"Don't rely on firewalls or any other single feature to keep you safe. Bake in security practices at every single layer of your infrastructure and architecture."),r.default.createElement("p",null,r.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Defense_in_depth_(computing)"},"https://en.wikipedia.org/wiki/Defense_in_depth_(computing)"))),r.default.createElement("li",null,r.default.createElement("h3",null,"You build it, you own it"),r.default.createElement("p",null,"A direct mapping of DevOps principles"),r.default.createElement("p",null,r.default.createElement("a",{href:"https://www.goodreads.com/book/show/26083308-the-devops-handbook"},"https://www.goodreads.com/book/show/26083308-the-devops-handbook"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Bounded Contexts"),r.default.createElement("p",null,"Build services around ",r.default.createElement("a",{href:"https://martinfowler.com/bliki/BoundedContext.html"},"Bounded Contexts"),"."),r.default.createElement("p",null,"Deal with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Privacy by Design"),r.default.createElement("p",null,"In dealing with any Personally Identifiable Information, have a Subject Matter Expert on Australian Privacy Laws and Data Retention Laws.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Trust, but Verify"),r.default.createElement("p",null,"Don't try to be a gatekeeper, instead, ensure that everyone has the skills, knowledge and tools necessary to release changes in a safe way."),r.default.createElement("p",null,"Verify with runtime monitoring tools, WAFs and other realtime tooling.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Mean Time to Recovery, not Mean Time Between Failures"),r.default.createElement("p",null,"In a distributed computing environment, failures are inevitable."),r.default.createElement("p",null,"It's more pragmatic to plan for failure and test for it.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Have a single source of truth for all data"),r.default.createElement("p",null,"For example, if a user's name changes, it should only need to change in one place to replicate throughout all systems.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Security at the start"),r.default.createElement("p",null,"The most expensive security failure is the one that's already happened.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Understand the 12 Factor Model"),r.default.createElement("p",null,r.default.createElement("a",{href:"https://12factor.net/"},"https://12factor.net/"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Understand the Fallacies of distributed computing, and how it relates to what you build"),r.default.createElement("p",null,r.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing"},"https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Apply Capacity Planning to Cloud Usage"),r.default.createElement("p",null,"Building in the cloud still costs money to the business, that should be planned and budgeted for.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Collect Raw Events, aggregate later"),r.default.createElement("p",null,"There's no recovering raw events from aggregates, but aggregates can always be calculated later")),r.default.createElement("li",null,r.default.createElement("h3",null,"Understand your testing options"),r.default.createElement("p",null,r.default.createElement("a",{href:"https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16"},"https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16")),r.default.createElement("p",null,"For example, personally, I favour Contract Testing over Integration Testing."),r.default.createElement("p",null,"With a complex system, production cannot be accurately reproduced."),r.default.createElement("p",null,"When relying on Integration testing, every discrepancy from production to the testing environment is an untested venue for failure."),r.default.createElement("p",null,"Contract Testing provides better coverage, see ",r.default.createElement("a",{href:"https://www.destroyallsoftware.com/talks/boundaries"},"https://www.destroyallsoftware.com/talks/boundaries")," and ",r.default.createElement("a",{href:"http://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam"},"http://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Have a standard way of understanding the health and historical behaviour of every system"),r.default.createElement("p",null,"If you're awoken at 3 AM, all the information you need to diagnose an issue should already have been collected."),r.default.createElement("p",null,"Collect a record of all steps that needed to be taken to stabilise and resolve the issue, and fix any gaps in data collection. SSH is often a crutch for poor observability of a system.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Global Mutable State"),r.default.createElement("p",null,"Avoid these three wherever possible. ")),r.default.createElement("li",null,r.default.createElement("h3",null,"Exploit native strengths and avoid generalising to irrelevant areas"),r.default.createElement("p",null,"Favour programming languages native to the operating system"),r.default.createElement("p",null,"Use Cloud tooling specific to the platform unless you have a very compelling reason otherwise")),r.default.createElement("li",null,r.default.createElement("h3",null,"Put all State in Managed Services"),r.default.createElement("p",null,"Unless you're a database vendor, it's not your core competency. Lean on services who can provide better support than the business could ever justify.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Test your backups"),r.default.createElement("p",null,"A backup isn't working until you can prove that it works. Think of the consequences of a backup failing, and plan for this as well.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Roll Forward"),r.default.createElement("p",null,"If you're building fast, reliable deployment mechanisms, rolling forward is the known, working path of deployment. Rollback mechanisms are another venue for failure that's rarely tested.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Roles, not Access Keys"),r.default.createElement("p",null,"Roles automatically rotate, and are validated against assuming the permissions."),r.default.createElement("p",null,"Access Keys are long-lived, with weak validation of the source of where they are used."),r.default.createElement("p",null,"(If someone leaks a Role name on GitHub, you won't be in danger like a leaked Access Key)")),r.default.createElement("li",null,r.default.createElement("h3",null,"Build a Learning Culture"),r.default.createElement("p",null,"In a multi-disciplinary team, the specialists are responsible for coaching and training others in their skillset. Use regular gatherings of functional skill groups to reinforce patterns and share learning."),r.default.createElement("p",null,r.default.createElement("a",{href:"https://medium.com/@jpcontad/building-a-learning-culture-in-tech-organizations-dec03b0924ba"},"https://medium.com/@jpcontad/building-a-learning-culture-in-tech-organizations-dec03b0924ba"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Hold blameless Post-Mortems"),r.default.createElement("p",null,r.default.createElement("a",{href:"https://codeascraft.com/2012/05/22/blameless-postmortems/"},"https://codeascraft.com/2012/05/22/blameless-postmortems/"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Context is king"),r.default.createElement("p",null,"Keep a historical record of Architecture decisions."),r.default.createElement("p",null,"Similar to how we use git history to understand the context behind a codebase, architectures decisions are equally crucial."),r.default.createElement("p",null,r.default.createElement("a",{href:"https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records"},"https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records"))),r.default.createElement("li",null,r.default.createElement("h3",null,"Prefer Services to Vendors"),r.default.createElement("p",null,"Vendor products seldom neatly match the particular requirements of a business, whereas a service use can be customised to unique business needs.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Understand the guarantees of reliability every services provides to the business"),r.default.createElement("p",null,"SLAs, SLOs, SLIs, whichever metric you decide on, monitor and adjust behaviour accordingly.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Innovation requires slack time"),r.default.createElement("p",null,"Hack Days, 20% time, Fix-it Fridays, whichever solutions works for your business in giving engineers dedicated time to work on what they see as high priority."),r.default.createElement("p",null,"This may manifest in engineers automating and refactoring problem areas, or it may lead to surprising innovation. ")),r.default.createElement("li",null,r.default.createElement("h3",null,"Write all services like they're public"),r.default.createElement("p",null,"Strict guidelines in how internal service communication happens leads to tighter interfaces and less undefined behaviour."),r.default.createElement("p",null,r.default.createElement("a",{href:"https://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/"},"https://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/")))))};t.default=u,e.exports=t.default},427:function(e,t,n){e.exports=n.p+"static/profile_600_converted.621a9392.jpg"}});
//# sourceMappingURL=component---src-pages-index-js-0117868ad98eedf2ab59.js.map