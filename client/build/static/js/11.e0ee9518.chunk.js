(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{432:function(e,t,a){"use strict";a.r(t);var c=a(39),n=a(2),r=a(0),s=a.n(r),i=a(55),o=a(41),l=a(45),d=a(46),b=a(44),j=a(16),u=a(90),h=a(186),m=a(91),f=a(18),p=a(56),O=a(51),x=a(19),v=a(1),w=a(43),y=function(e){var t=e.postId,a=e.oldComments,n=Object(r.useState)(null),s=Object(c.a)(n,2),i=s[0],o=s[1],u=Object(r.useState)(null),h=Object(c.a)(u,2),m=h[0],f=h[1],p=Object(r.useState)(null),y=Object(c.a)(p,2),g=y[0],N=y[1],k=Object(r.useState)(null),C=Object(c.a)(k,2),S=C[0],P=C[1],I=Object(r.useState)(null),F=Object(c.a)(I,2),E=F[0],R=F[1];return Object(v.jsx)("div",{children:Object(v.jsxs)(j.a,{className:"mt-5 mb-3",children:[Object(v.jsx)("h5",{children:"Leave a comment"}),E&&Object(v.jsx)(l.a,{variant:"warning",children:"Comment added pending approval"}),Object(v.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),P(!0);var c=[{name:i,email:m,body:g,avatar:null,approved:!1}];a.forEach((function(e){return c.push(e)})),w.post("/posts/add-comment",{id:t,comments:c}).then((function(e){e.data.status?R(!0):console.log(e)})),P(!1)},children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(O.a.Group,{controlId:"name",children:Object(v.jsx)(O.a.Control,{className:"border-bottom-1 mb-2",type:"text",placeholder:"Your Name",value:i,required:!0,onChange:function(e){return o(e.target.value)}})})}),Object(v.jsx)(b.a,{children:Object(v.jsx)(O.a.Group,{controlId:"name",children:Object(v.jsx)(O.a.Control,{className:"border-bottom-1 mb-2",type:"email",placeholder:"Your Email",value:m,required:!0,onChange:function(e){return f(e.target.value)}})})})]}),Object(v.jsx)(d.a,{children:Object(v.jsx)(O.a.Group,{controlId:"message",children:Object(v.jsx)(O.a.Control,{style:{height:"200px"},className:" border-1 rounded-0",type:"text",placeholder:"Your Comment",value:g,required:!0,onChange:function(e){return N(e.target.value)}})})}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)("button",{className:"btn btn-info text-white my-2",type:"submit",children:S?Object(v.jsxs)("span",{children:[Object(v.jsx)(x.a,{as:"span",size:"sm",animation:"border",role:"status","aria-hidden":"true"}),Object(v.jsx)("span",{className:"mx-1",children:"posting..."})]}):Object(v.jsx)("span",{children:"Post Comment"})})}),Object(v.jsx)(b.a,{})]})]})]})})},g=a(185),N=a.n(g),k=function(){var e=function(t,a){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},e(t,a)};return function(t,a){function c(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}(),C=function(e){function t(t){var a=e.call(this,t)||this;return a.name="AssertionError",a}return k(t,e),t}(Error);function S(e,t){if(!e)throw new C(t)}function P(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(a))}));return t.length>0?"?"+t.join("&"):""}var I=a(11),F=a.n(I),E=function(){var e=function(t,a){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},e(t,a)};return function(t,a){function c(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}(),R=function(){return R=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},R.apply(this,arguments)},_=function(e,t,a,c){return new(a||(a=Promise))((function(n,r){function s(e){try{o(c.next(e))}catch(t){r(t)}}function i(e){try{o(c.throw(e))}catch(t){r(t)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,i)}o((c=c.apply(e,t||[])).next())}))},L=function(e,t){var a,c,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,c&&(n=2&r[0]?c.return:r[0]?c.throw||((n=c.return)&&n.call(c),0):c.next)&&!(n=n.call(c,r[1])).done)return n;switch(c=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,c=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(i){r=[6,i],c=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}},z=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},T=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},D=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},A=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function H(e,t,a){var c=t.height,n=t.width,r=z(t,["height","width"]),s=R({height:c,width:n,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},r),i=window.open(e,"",Object.keys(s).map((function(e){return e+"="+s[e]})).join(", "));if(a)var o=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(o),a(i))}catch(e){console.error(e)}}),1e3);return i}var M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var a=t.props,c=a.onShareWindowClose,n=a.windowHeight,r=void 0===n?400:n,s=a.windowPosition,i=void 0===s?"windowCenter":s,o=a.windowWidth,l=void 0===o?550:o;H(e,R({height:r,width:l},"windowCenter"===i?D(l,r):A(l,r)),c)},t.handleClick=function(e){return _(t,void 0,void 0,(function(){var t,a,c,n,r,s,i,o,l,d;return L(this,(function(b){switch(b.label){case 0:return t=this.props,a=t.beforeOnClick,c=t.disabled,n=t.networkLink,r=t.onClick,s=t.url,i=t.openShareDialogOnClick,o=t.opts,l=n(s,o),c?[2]:(e.preventDefault(),a?(d=a(),T(d)?[4,d]:[3,2]):[3,2]);case 1:b.sent(),b.label=2;case 2:return i&&this.openShareDialog(l),r&&r(e,l),[2]}}))}))},t}return E(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),a=e.className,c=e.disabled,n=e.disabledStyle,r=e.forwardedRef,i=(e.networkLink,e.networkName),o=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,z(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),b=F()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!c,disabled:!!c},a),j=R(R(o?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),c&&n);return s.a.createElement("button",R({},d,{"aria-label":d["aria-label"]||i,className:b,onClick:this.handleClick,ref:r,style:j}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),W=M,B=function(){return B=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},B.apply(this,arguments)};var V=function(e,t,a,c){function n(n,r){var i=a(n),o=B({},n);return Object.keys(i).forEach((function(e){delete o[e]})),s.a.createElement(W,B({},c,o,{forwardedRef:r,networkName:e,networkLink:t,opts:a(n)}))}return n.displayName="ShareButton-"+e,Object(r.forwardRef)(n)};var G=V("facebook",(function(e,t){var a=t.quote,c=t.hashtag;return S(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+P({u:e,quote:a,hashtag:c})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),Y=function(){return Y=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Y.apply(this,arguments)},q=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};function U(e){var t=function(t){var a=t.bgStyle,c=t.borderRadius,n=t.iconFillColor,r=t.round,i=t.size,o=q(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return s.a.createElement("svg",Y({viewBox:"0 0 64 64",width:i,height:i},o),r?s.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:a}):s.a.createElement("rect",{width:"64",height:"64",rx:c,ry:c,fill:e.color,style:a}),s.a.createElement("path",{d:e.path,fill:n}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var J=U({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var K=V("whatsapp",(function(e,t){var a=t.title,c=t.separator;return S(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+P({text:a?a+c+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),X=U({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var Q=V("telegram",(function(e,t){var a=t.title;return S(e,"telegram.url"),"https://telegram.me/share/url"+P({url:e,text:a})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),Z=U({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"}),$=a(43);t.default=function(){var e=Object(n.g)().id,t=Object(r.useState)(null),a=Object(c.a)(t,2),s=a[0],O=a[1],x=Object(r.useState)(null),w=Object(c.a)(x,2),g=w[0],k=w[1],C=Object(r.useState)(null),S=Object(c.a)(C,2),P=S[0],I=S[1],F=Object(r.useState)(null),E=Object(c.a)(F,2),R=E[0],_=E[1],L=Object(r.useState)(null),z=Object(c.a)(L,2),T=z[0],D=z[1],A=Object(r.useState)(null),H=Object(c.a)(A,2),M=H[0],W=H[1];Object(r.useEffect)((function(){document.title="Post | DiamondFM",$.get("/posts/").then((function(e){e.data.status?O(e.data.posts):D(e.data.message)})),$.get("/posts/single/"+e).then((function(e){e.data.status?(k(e.data.post),I(e.data.post.createdBy),W(e.data.post.comments.filter((function(e){return!0===e.approved})))):D(e.data.message)}))}),[e]),Object(r.useEffect)((function(){$.get("/users/"+P).then((function(e){e.data.status?_(e.data.user):console.log(e.data)}))}),[P]);var B=Object(r.useState)(!1),V=Object(c.a)(B,2),Y=V[0],q=V[1],U=Object(r.useState)(null),ee=Object(c.a)(U,2),te=ee[0],ae=ee[1];return Object(r.useEffect)((function(){te&&(Y?te.play():te.pause())}),[te,Y]),Object(v.jsxs)("div",{children:[Object(v.jsx)(i.a,{}),T&&Object(v.jsx)(l.a,{variant:"warning",className:"mx-2",children:T}),Object(v.jsx)(j.a,{children:Object(v.jsxs)(d.a,{className:"my-5",children:[Object(v.jsx)(b.a,{xs:12,xl:8,children:null!==g?Object(v.jsxs)("div",{children:[Object(v.jsxs)("section",{className:"my-4 shadow-sm py-2 rounded-4",style:{minWidth:"90%"},children:[Object(v.jsxs)("div",{className:"mx-4 my-1",children:[Object(v.jsx)("h4",{className:"mb-2",children:g.title}),Object(v.jsxs)("p",{className:"text-secondary mb-1",children:[N()(new Date(g.createdAt)).format("MMMM Do YYYY, h:mm:ss a")," ","| ",g.comments.length," comments"]}),R&&Object(v.jsxs)("div",{className:"mb-2",children:[Object(v.jsx)("p",{className:"text-secondary",children:"By ".concat(R.firstname+" "+R.lastname)}),Object(v.jsx)("p",{})]})]}),Object(v.jsxs)("div",{className:"w-100 position-relative",children:[Object(v.jsx)(o.a,{src:g.featuredImage,rounded:!0,style:{width:"100%",height:"450px"}}),"airProgramme"===g.type&&Object(v.jsx)(h.a,{bg:"info position-absolute translate-middle py-2",style:{top:"32px",left:"29px"},children:Object(v.jsx)("i",{className:"bi h1 text-white bi-mic rounded"})})]}),Object(v.jsxs)("div",{className:"m-4",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(G,{url:"https://diamondfm.net/posts/".concat(e),className:"me-md-2 my-2",children:Object(v.jsx)(J,{size:"30",round:!0})}),Object(v.jsx)(K,{url:"https://diamondfm.net/posts/".concat(e),className:"me-md-2 my-2",children:Object(v.jsx)(X,{size:"30",round:"true"})}),Object(v.jsx)(Q,{url:"https://diamondfm.net/posts/".concat(e),className:"me-md-2 my-2",children:Object(v.jsx)(Z,{size:"30",round:"true"})})]}),Object(v.jsx)("div",{className:"text-secondary fs-5 my-4",dangerouslySetInnerHTML:{__html:g.body}}),"airProgramme"===g.type&&Object(v.jsxs)("div",{className:"d-flex flex-nowrap align-items-center",children:[Object(v.jsx)("button",{onClick:function(){return function(e){var t=new Audio(e);ae(t),q(!0)}(g.audio)},className:"btn text-white mb-4 m-2 ".concat(Y?"btn-primary":"btn-info"),children:Y?"Playing...":"Play Now"}),Y&&Object(v.jsx)("button",{className:"btn btn-warning mb-4 m-2",onClick:function(){q(!1)},children:"Pause"})]})]})]}),Object(v.jsxs)("div",{children:[M&&M.length>0&&Object(v.jsx)("div",{children:M.map((function(e){return Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsx)(o.a,{src:e.avatar?e.avatar:"/media/defaultAvatar.png",width:"70",height:"70",roundedCircle:!0,className:"me-3"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h5",{className:"my-2",children:e.name}),Object(v.jsx)("p",{children:e.body})]})]},e._id)}))}),Object(v.jsx)(y,{postId:g._id,oldComments:g.comments})]})]}):Object(v.jsx)(f.default,{})}),Object(v.jsxs)(b.a,{xs:12,xl:4,children:[Object(v.jsx)(u.a,{}),Object(v.jsx)("a",{href:"tel:+2349136556952",children:Object(v.jsx)(o.a,{src:"/media/ads.png",className:"w-100 my-4"})}),Object(v.jsx)(m.a,{})]})]})}),Object(v.jsx)(p.a,{posts:s})]})}},50:function(e,t,a){"use strict";var c=function(){};e.exports=c},51:function(e,t,a){"use strict";var c=a(7),n=a(10),r=a(11),s=a.n(r),i=a(9),o=a.n(i),l=a(0),d=a(1),b=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},u=l.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.className,o=e.type,l=void 0===o?"valid":o,j=e.tooltip,u=void 0!==j&&j,h=Object(n.a)(e,b);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},h),{},{ref:t,className:s()(i,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=j;var h=u,m=l.createContext({}),f=a(12),p=["id","bsPrefix","className","type","isValid","isInvalid","as"],O=l.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,i=e.className,o=e.type,b=void 0===o?"checkbox":o,j=e.isValid,u=void 0!==j&&j,h=e.isInvalid,O=void 0!==h&&h,x=e.as,v=void 0===x?"input":x,w=Object(n.a)(e,p),y=Object(l.useContext)(m).controlId;return r=Object(f.a)(r,"form-check-input"),Object(d.jsx)(v,Object(c.a)(Object(c.a)({},w),{},{ref:t,type:b,id:a||y,className:s()(i,r,u&&"is-valid",O&&"is-invalid")}))}));O.displayName="FormCheckInput";var x=O,v=["bsPrefix","className","htmlFor"],w=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.htmlFor,o=Object(n.a)(e,v),b=Object(l.useContext)(m).controlId;return a=Object(f.a)(a,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:t,htmlFor:i||b,className:s()(r,a)}))}));w.displayName="FormCheckLabel";var y=w,g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],N=l.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,i=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,j=e.disabled,u=void 0!==j&&j,p=e.isValid,O=void 0!==p&&p,v=e.isInvalid,w=void 0!==v&&v,N=e.feedbackTooltip,k=void 0!==N&&N,C=e.feedback,S=e.feedbackType,P=e.className,I=e.style,F=e.title,E=void 0===F?"":F,R=e.type,_=void 0===R?"checkbox":R,L=e.label,z=e.children,T=e.as,D=void 0===T?"input":T,A=Object(n.a)(e,g);r=Object(f.a)(r,"form-check"),i=Object(f.a)(i,"form-switch");var H=Object(l.useContext)(m).controlId,M=Object(l.useMemo)((function(){return{controlId:a||H}}),[H,a]),W=null!=L&&!1!==L&&!z,B=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},A),{},{type:"switch"===_?"checkbox":_,ref:t,isValid:O,isInvalid:w,disabled:u,as:D}));return Object(d.jsx)(m.Provider,{value:M,children:Object(d.jsx)("div",{style:I,className:s()(P,L&&r,b&&"".concat(r,"-inline"),"switch"===_&&i),children:z||Object(d.jsxs)(d.Fragment,{children:[B,W&&Object(d.jsx)(y,{title:E,children:L}),C&&Object(d.jsx)(h,{type:S,tooltip:k,children:C})]})})})}));N.displayName="FormCheck";var k=Object.assign(N,{Input:x,Label:y}),C=a(17),S=(a(50),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=l.forwardRef((function(e,t){var a,r,i=e.bsPrefix,o=e.type,b=e.size,j=e.htmlSize,u=e.id,h=e.className,p=e.isValid,O=void 0!==p&&p,x=e.isInvalid,v=void 0!==x&&x,w=e.plaintext,y=e.readOnly,g=e.as,N=void 0===g?"input":g,k=Object(n.a)(e,S),P=Object(l.useContext)(m).controlId;(i=Object(f.a)(i,"form-control"),w)?a=Object(C.a)({},"".concat(i,"-plaintext"),!0):(r={},Object(C.a)(r,i,!0),Object(C.a)(r,"".concat(i,"-").concat(b),b),a=r);return Object(d.jsx)(N,Object(c.a)(Object(c.a)({},k),{},{type:o,size:j,ref:t,readOnly:y,id:u||P,className:s()(h,a,O&&"is-valid",v&&"is-invalid","color"===o&&"".concat(i,"-color"))}))}));P.displayName="FormControl";var I=Object.assign(P,{Feedback:h}),F=a(48),E=Object(F.a)("form-floating"),R=["controlId","as"],_=l.forwardRef((function(e,t){var a=e.controlId,r=e.as,s=void 0===r?"div":r,i=Object(n.a)(e,R),o=Object(l.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(m.Provider,{value:o,children:Object(d.jsx)(s,Object(c.a)(Object(c.a)({},i),{},{ref:t}))})}));_.displayName="FormGroup";var L=_,z=a(44),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],D=l.forwardRef((function(e,t){var a=e.as,r=void 0===a?"label":a,i=e.bsPrefix,o=e.column,b=e.visuallyHidden,j=e.className,u=e.htmlFor,h=Object(n.a)(e,T),p=Object(l.useContext)(m).controlId;i=Object(f.a)(i,"form-label");var O="col-form-label";"string"===typeof o&&(O="".concat(O," ").concat(O,"-").concat(o));var x=s()(j,i,b&&"visually-hidden",o&&O);return u=u||p,o?Object(d.jsx)(z.a,Object(c.a)({ref:t,as:"label",className:x,htmlFor:u},h)):Object(d.jsx)(r,Object(c.a)({ref:t,className:x,htmlFor:u},h))}));D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};var A=D,H=["bsPrefix","className","id"],M=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.id,o=Object(n.a)(e,H),b=Object(l.useContext)(m).controlId;return a=Object(f.a)(a,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:t,className:s()(r,a),id:i||b}))}));M.displayName="FormRange";var W=M,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],V=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.size,i=e.htmlSize,o=e.className,b=e.isValid,j=void 0!==b&&b,u=e.isInvalid,h=void 0!==u&&u,p=e.id,O=Object(n.a)(e,B),x=Object(l.useContext)(m).controlId;return a=Object(f.a)(a,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},O),{},{size:i,ref:t,className:s()(o,a,r&&"".concat(a,"-").concat(r),j&&"is-valid",h&&"is-invalid"),id:p||x}))}));V.displayName="FormSelect";var G=V,Y=["bsPrefix","className","as","muted"],q=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,o=void 0===i?"small":i,l=e.muted,b=Object(n.a)(e,Y);return a=Object(f.a)(a,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:t,className:s()(r,a,l&&"text-muted")}))}));q.displayName="FormText";var U=q,J=l.forwardRef((function(e,t){return Object(d.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));J.displayName="Switch";var K=Object.assign(J,{Input:k.Input,Label:k.Label}),X=["bsPrefix","className","children","controlId","label"],Q=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.children,o=e.controlId,l=e.label,b=Object(n.a)(e,X);return a=Object(f.a)(a,"form-floating"),Object(d.jsxs)(L,Object(c.a)(Object(c.a)({ref:t,className:s()(r,a),controlId:o},b),{},{children:[i,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));Q.displayName="FloatingLabel";var Z=Q,$=["className","validated","as"],ee={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},te=l.forwardRef((function(e,t){var a=e.className,r=e.validated,i=e.as,o=void 0===i?"form":i,l=Object(n.a)(e,$);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:t,className:s()(a,r&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:L,Control:I,Floating:E,Check:k,Switch:K,Label:A,Text:U,Range:W,Select:G,FloatingLabel:Z})},55:function(e,t,a){"use strict";var c=a(39),n=a(0),r=a(41),s=a(16),i=a(77),o=a(78),l=a(1);t.a=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],d=t[1],b=Object(n.useState)(null),j=Object(c.a)(b,2),u=j[0],h=j[1];Object(n.useEffect)((function(){u&&(a?u.pause():u.play())}),[u,a]);return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{expand:"lg",children:Object(l.jsx)(s.a,{children:Object(l.jsxs)("header",{className:"w-100 my-3",children:[Object(l.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(l.jsx)(i.a.Brand,{href:"#home",className:"d-none d-lg-block",children:Object(l.jsx)(r.a,{src:"/media/logoo.jpeg",rounded:!0,width:"50",height:"50"})}),Object(l.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"me-3"}),Object(l.jsx)("section",{className:"grow-1 w-100 bg-white shadow rounded",children:Object(l.jsx)("div",{children:Object(l.jsxs)("section",{className:"d-flex flex-nowrap justify-content-between align-items-center",children:[Object(l.jsxs)("div",{className:"d-flex align-items-center",children:[Object(l.jsxs)("div",{className:"position-relative",children:[Object(l.jsxs)("span",{className:"rounded-circle position-absolute top-50 start-50 translate-middle",style:{backgroundColor:"#F9474E",padding:"0px 2px "},children:[a&&Object(l.jsx)("i",{className:"bi bi-play-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){return function(e){var t=new Audio(e);h(t),d(!1)}("https://streams.radiomast.io/4b6d766f-3b8a-422a-ab07-822a1738ff2f")}}),!a&&Object(l.jsx)("i",{className:"bi bi-pause-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){d(!0)}})]}),Object(l.jsx)(r.a,{src:"/media/testFeaturedImg.png",rounded:!0,width:"50",height:"40"})]}),Object(l.jsx)("div",{className:"ms-2 me-1 me-md-3 ",children:Object(l.jsx)("p",{className:"mb-1 fw-bolder",style:{fontSize:"14px"},children:"ON AIR NOW"})}),Object(l.jsxs)("div",{style:{color:"#F9474E"},className:"d-flex flex-nowrap me-3",children:[Object(l.jsx)("a",{href:"/posts/post/airProgramme",style:{color:"#F9474E"},className:"mb-0 text-decoration-none",children:"Next"}),Object(l.jsx)("i",{className:"bi bi-arrow-right ms-1"})]})]}),Object(l.jsxs)("div",{className:"d-none d-md-flex align-items-center flex-nowrap ms-auto",children:[Object(l.jsx)("a",{href:"https://www.facebook.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"bi bi-facebook h4 text-secondary mx-2"})}),Object(l.jsx)("a",{href:"https://instagram.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"bi bi-instagram h4 mx-2 text-secondary"})}),Object(l.jsx)("a",{href:"https://twitter.com/diamond887fm",target:"_blank",rel:"noreferrer",className:"rounded p-2",style:{backgroundColor:"#F9474E"},children:Object(l.jsx)("i",{className:"bi bi-twitter h4 mx-2 text-white"})})]})]})})})]}),Object(l.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(o.a,{className:"ms-auto mt-4 justify-content-between",style:{width:"89%",maxWidth:"100%"},children:[Object(l.jsx)(o.a.Link,{href:"/",children:"HOME"}),Object(l.jsx)(o.a.Link,{href:"/about",children:"ABOUT US"}),Object(l.jsx)(o.a.Link,{href:"/posts/post/airProgramme",children:"PROGRAMMES PLAY BACK"}),Object(l.jsx)(o.a.Link,{href:"/posts/post/news",children:"NEWS"}),Object(l.jsx)(o.a.Link,{href:"/posts/post/blog",children:"BLOG"}),Object(l.jsx)(o.a.Link,{href:"/posts/post/sport",children:"SPORTS"}),Object(l.jsx)(o.a.Link,{href:"/presenters",children:"PRESENTERS"}),Object(l.jsx)(o.a.Link,{href:"/contact",children:"CONTACT US"})]})})]})})})})}},56:function(e,t,a){"use strict";var c=a(39),n=a(16),r=a(46),s=a(44),i=a(41),o=a(0),l=a(1);t.a=function(e){var t=e.posts,a=Object(o.useState)((new Date).toISOString()),d=Object(c.a)(a,1)[0];return Object(l.jsxs)("div",{className:"mt-5",children:[t&&Object(l.jsx)("div",{className:"py-5",style:{backgroundImage:"url('/media/calltoAct.png')",backgroundPosition:"center center",backgroundSize:"cover",minHeight:"40vh"},children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)("h1",{className:"fw-bolder text-center text-white",children:"DIAMOND FM"}),Object(l.jsx)("p",{className:"text-center text-white",children:"Instagram @diamond887fm"}),Object(l.jsx)(r.a,{children:t.slice(0,4).map((function(e){return Object(l.jsx)(s.a,{className:"",xs:12,md:4,xl:3,children:Object(l.jsx)("a",{href:"/posts/"+e._id,children:Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{src:e.featuredImage,rounded:!0,height:"250",className:"mx-auto my-2",style:{width:"100%"}})})})})}))})]})}),Object(l.jsx)("div",{style:{backgroundColor:"#CCDFEC"},children:Object(l.jsx)(n.a,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(s.a,{children:Object(l.jsxs)("p",{className:"mb-0 py-3",children:["\xa9 ",d.split("T")[0].split("-")[0]," DiamondFM"]})}),Object(l.jsx)(s.a,{children:Object(l.jsx)("p",{className:"py-3",children:Object(l.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})})})]})})})]})}},90:function(e,t,a){"use strict";var c=a(39),n=a(0),r=a(1),s=a(43);t.a=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(null),l=Object(c.a)(o,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){s.get("https://api.openweathermap.org/data/2.5/weather?q=Kwara,ilorin&appid=b190a0605344cc4f3af08d0dd473dd25&units=metric").then((function(e){i(e.data.weather[0]),b(e.data.main.temp)}))}),[]),Object(r.jsxs)("div",{className:"my-4",children:[Object(r.jsx)("h4",{children:"WEATHER REPORT"}),Object(r.jsxs)("section",{className:"bg-info my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("i",{className:"bi bi-brightness-alt-high-fill h1 fw-bolder"}),Object(r.jsxs)("h1",{children:[d||"25"," \xb0C"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"mb-0",children:"Ilorin"}),Object(r.jsx)("h4",{className:"fw-bolder",children:a?a.main:"Clouds"}),Object(r.jsx)("p",{className:"mb-0",children:a?a.description:"scattered clouds"})]})]})]})}},91:function(e,t,a){"use strict";var c=a(1);t.a=function(){return Object(c.jsxs)("div",{className:"my-4",children:[Object(c.jsx)("h4",{children:"COVID-19 NIGERIA"}),Object(c.jsxs)("section",{className:"bg-primary my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Confirmed Cases"})]}),Object(c.jsx)("h4",{children:"212,894"})]}),Object(c.jsxs)("section",{className:"bg-warning my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Active Cases"})]}),Object(c.jsx)("h4",{children:"5,297"})]}),Object(c.jsxs)("section",{className:"bg-success my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Discharged Cases"})]}),Object(c.jsx)("h4",{children:"204,675"})]}),Object(c.jsxs)("section",{className:"bg-danger my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Death"})]}),Object(c.jsx)("h4",{children:"2,922"})]})]})}}}]);
//# sourceMappingURL=11.e0ee9518.chunk.js.map