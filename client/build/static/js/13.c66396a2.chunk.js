(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{430:function(e,t,n){"use strict";n.r(t);var r=n(39),o=n(0),i=n(45),a=n(16),c=n(44),l=n(41),s=n(46),u=n(55),d=n(83),f=n.n(d),p=n(56),b=n(1),h=n(43);t.default=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],d=t[1],m=Object(o.useState)(null),j=Object(r.a)(m,2),y=j[0],O=j[1];return Object(o.useEffect)((function(){document.title="About Us | DiamondFM",h.get("/posts/").then((function(e){e.data.status?d(e.data.posts):O(e.data.message)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)(f.a,{children:[Object(b.jsx)("title",{children:"Abput Us | DiamondFM"}),Object(b.jsx)("meta",{property:"og:title",content:"DiamondFM"}),Object(b.jsx)("meta",{property:"og:image",content:"/logo192.png"}),Object(b.jsx)("meta",{name:"description",content:"We offer exclusive news stories, music and programmes that focus on entertainment, topical issues, community development and corporate social responsibility."}),Object(b.jsx)("link",{rel:"apple-touch-icon",href:"/logo192.png"})]}),Object(b.jsx)(u.a,{}),y&&Object(b.jsx)(i.a,{variant:"warning",className:"mx-2",children:y}),Object(b.jsx)(a.a,{className:"py-4",children:Object(b.jsxs)(s.a,{className:"align-items-center",children:[Object(b.jsxs)(c.a,{sm:12,md:6,children:[Object(b.jsx)("h2",{className:"fw-bolder fs-1",id:"#about",children:"ABOUT US"}),Object(b.jsx)("p",{children:"Diamond FM is an urban radio station in Ilorin, Kwara State, Nigeria. Our radio waves cover North Central and South Western Nigerian."}),Object(b.jsx)("p",{children:"We offer exclusive news stories, music and programmes that focus on entertainment, topical issues, community development and corporate social responsibility."}),Object(b.jsx)("p",{children:"We engage our audience in conversations that add value to their lives and contribute to nation-building. Our vision is to continue earning the trust of our audience through quality reportage, standard content production, entertaining and informative programmes and the right business attitude that encourages growth and community development."}),Object(b.jsx)("p",{children:"We are relentless in our resolve to maintain professional and ethical standards."})]}),Object(b.jsx)(c.a,{sm:12,md:6,children:Object(b.jsx)(l.a,{src:"/media/aboutCenter.png",style:{maxWidth:"100%"},className:"d-none d-md-block rounded mb-4"})})]})}),Object(b.jsx)(p.a,{posts:n})]})}},55:function(e,t,n){"use strict";var r=n(39),o=n(0),i=n(41),a=n(16),c=n(79),l=n(80),s=n(1);t.a=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=t[0],u=t[1],d=Object(o.useState)(null),f=Object(r.a)(d,2),p=f[0],b=f[1];Object(o.useEffect)((function(){p&&(n?p.pause():p.play())}),[p,n]);return Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{expand:"lg",children:Object(s.jsx)(a.a,{children:Object(s.jsxs)("header",{className:"w-100 my-3",children:[Object(s.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(s.jsx)(c.a.Brand,{href:"#home",className:"d-none d-lg-block",children:Object(s.jsx)(i.a,{src:"/media/logoo.jpeg",rounded:!0,width:"50",height:"50"})}),Object(s.jsx)(c.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"me-3"}),Object(s.jsx)("section",{className:"grow-1 w-100 bg-white shadow rounded",children:Object(s.jsx)("div",{children:Object(s.jsxs)("section",{className:"d-flex flex-nowrap justify-content-between align-items-center",children:[Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsxs)("div",{className:"position-relative",children:[Object(s.jsxs)("span",{className:"rounded-circle position-absolute top-50 start-50 translate-middle",style:{backgroundColor:"#F9474E",padding:"0px 2px "},children:[n&&Object(s.jsx)("i",{className:"bi bi-play-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){return function(e){var t=new Audio(e);b(t),u(!1)}("https://streams.radiomast.io/4b6d766f-3b8a-422a-ab07-822a1738ff2f")}}),!n&&Object(s.jsx)("i",{className:"bi bi-pause-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){u(!0)}})]}),Object(s.jsx)(i.a,{src:"/media/testFeaturedImg.png",rounded:!0,width:"50",height:"40"})]}),Object(s.jsx)("div",{className:"ms-2 me-1 me-md-3 ",children:Object(s.jsx)("p",{className:"mb-1 fw-bolder",style:{fontSize:"14px"},children:"ON AIR NOW"})}),Object(s.jsxs)("div",{style:{color:"#F9474E"},className:"d-flex flex-nowrap me-3",children:[Object(s.jsx)("a",{href:"/posts/post/airProgramme",style:{color:"#F9474E"},className:"mb-0 text-decoration-none",children:"Next"}),Object(s.jsx)("i",{className:"bi bi-arrow-right ms-1"})]})]}),Object(s.jsxs)("div",{className:"d-none d-md-flex align-items-center flex-nowrap ms-auto",children:[Object(s.jsx)("a",{href:"https://www.facebook.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"bi bi-facebook h4 text-secondary mx-2"})}),Object(s.jsx)("a",{href:"https://instagram.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"bi bi-instagram h4 mx-2 text-secondary"})}),Object(s.jsx)("a",{href:"https://twitter.com/diamond887fm",target:"_blank",rel:"noreferrer",className:"rounded p-2",style:{backgroundColor:"#F9474E"},children:Object(s.jsx)("i",{className:"bi bi-twitter h4 mx-2 text-white"})})]})]})})})]}),Object(s.jsx)(c.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(l.a,{className:"ms-auto mt-4 justify-content-between",style:{width:"89%",maxWidth:"100%"},children:[Object(s.jsx)(l.a.Link,{href:"/",children:"HOME"}),Object(s.jsx)(l.a.Link,{href:"/about",children:"ABOUT US"}),Object(s.jsx)(l.a.Link,{href:"/posts/post/airProgramme",children:"PROGRAMMES PLAY BACK"}),Object(s.jsx)(l.a.Link,{href:"/posts/post/news",children:"NEWS"}),Object(s.jsx)(l.a.Link,{href:"/posts/post/blog",children:"BLOG"}),Object(s.jsx)(l.a.Link,{href:"/posts/post/sport",children:"SPORTS"}),Object(s.jsx)(l.a.Link,{href:"/presenters",children:"PRESENTERS"}),Object(s.jsx)(l.a.Link,{href:"/contact",children:"CONTACT US"})]})})]})})})})}},56:function(e,t,n){"use strict";var r=n(39),o=n(16),i=n(46),a=n(44),c=n(41),l=n(0),s=n(1);t.a=function(e){var t=e.posts,n=Object(l.useState)((new Date).toISOString()),u=Object(r.a)(n,1)[0];return Object(s.jsxs)("div",{className:"mt-5",children:[t&&Object(s.jsx)("div",{className:"py-5",style:{backgroundImage:"url('/media/calltoAct.png')",backgroundPosition:"center center",backgroundSize:"cover",minHeight:"40vh"},children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)("h1",{className:"fw-bolder text-center text-white",children:"DIAMOND FM"}),Object(s.jsx)("p",{className:"text-center text-white",children:"Instagram @diamond887fm"}),Object(s.jsx)(i.a,{children:t.slice(0,4).map((function(e){return Object(s.jsx)(a.a,{className:"",xs:12,md:4,xl:3,children:Object(s.jsx)("a",{href:"/posts/"+e._id,children:Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{src:e.featuredImage,rounded:!0,height:"250",className:"mx-auto my-2",style:{width:"100%"}})})})})}))})]})}),Object(s.jsx)("div",{style:{backgroundColor:"#CCDFEC"},children:Object(s.jsx)(o.a,{children:Object(s.jsxs)(i.a,{children:[Object(s.jsx)(a.a,{children:Object(s.jsxs)("p",{className:"mb-0 py-3",children:["\xa9 ",u.split("T")[0].split("-")[0]," DiamondFM"]})}),Object(s.jsx)(a.a,{children:Object(s.jsx)("p",{className:"py-3",children:Object(s.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})})})]})})})]})}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var u=(0,r.createContext)({});t.MetaContext=u;var d=function(e){function t(){return i(this,t),c(this,l(t).apply(this,arguments))}var n,o,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(u.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&a(n.prototype,o),d&&a(n,d),t}(r.Component),f=d;t.default=f},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(20))&&r.__esModule?r:{default:r},a=n(95),c=n(74);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var b=function(e){function t(){return s(this,t),d(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=o.default.createElement("div",{className:"react-head-temp"},t);i.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,i=o.innerHTML;(r=(r=r.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,a.getDuplicateTitle)();n&&(0,a.removeChild)(o,n)}else if(e.id){var r=(0,a.getDuplicateElementById)(e);r&&(0,a.removeChild)(o,r)}else if("meta"===t){var i=(0,a.getDuplicateMeta)(e);i&&(0,a.removeChild)(o,i)}else if("link"===t&&"canonical"===e.rel){var c=(0,a.getDuplicateCanonical)(e);c&&(0,a.removeChild)(o,c)}})),(0,a.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,r),c&&u(n,c),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(b,"contextType",c.MetaContext);var h=b;t.default=h,e.exports=t.default},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var r=a(n(74)),o=a(n(75)),i=a(n(96));function a(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],a=[];return e.forEach((function(e){var o=e.type,i=e.props;"title"===o?t=e:"link"===o&&"canonical"===i.rel?n=e:"meta"===o?r.push(e):a.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var a=e[r],c=a.props.id;(c?!t.id[c]:0===o.filter((function(e){var n=a.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(a),i.forEach((function(e){var n=a.props[e];n&&(t[e][n]=a)})))},a=e.length-1;a>=0;a--)r(a);return n}(r)),[n],a)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return r.reduce((function(n,r){var o,i=e.getAttribute(r);return i?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),i=o.concat(["id"])},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(75))&&r.__esModule?r:{default:r};function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var f=function(e){function t(){return c(this,t),s(this,u(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.default.createElement(i.default,null,o.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,r),a&&l(n,a),t}(o.Component),p=f;t.default=p,e.exports=t.default}}]);
//# sourceMappingURL=13.c66396a2.chunk.js.map