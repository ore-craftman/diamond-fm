(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{415:function(e,t,a){"use strict";a.r(t);var c=a(39),n=a(52),s=a(51),i=a(47),r=a(44),l=a(43),o=a(17),j=a(45),d=a(74),b=a(0),u=a(2),h=a(1),O=a(42);t.default=function(){Object(b.useEffect)((function(){document.title="Login | DiamondFM"}));var e=Object(b.useState)(!1),t=Object(c.a)(e,2),a=t[0],m=t[1],f=Object(b.useState)(""),x=Object(c.a)(f,2),p=x[0],v=x[1],g=Object(b.useState)(""),w=Object(c.a)(g,2),y=w[0],N=w[1],S=Object(b.useState)(null),C=Object(c.a)(S,2),k=C[0],D=C[1],L=Object(u.f)(),E=Object(b.useState)(!1),I=Object(c.a)(E,2),P=I[0],R=I[1],A=Object(b.useState)(""),H=Object(c.a)(A,2),K=H[0],G=H[1],T=Object(b.useState)(null),q=Object(c.a)(T,2),F=q[0],M=q[1],z=Object(b.useState)(!1),J=Object(c.a)(z,2),U=J[0],V=J[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)(i.a,{className:"h-100",children:[Object(h.jsx)(r.a,{xs:6,style:{padding:"0"},className:"d-none d-lg-block",children:Object(h.jsx)(l.a,{src:"/media/authLeft.png",fluid:!0,style:{width:"100%",height:"99.9vh"}})}),Object(h.jsx)(r.a,{style:{height:"95vh"},children:Object(h.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(h.jsxs)("section",{className:"w-100 px-md-5 ps-lg-5",children:[Object(h.jsxs)("div",{className:"d-flex mb-4 align-items-center",children:[Object(h.jsx)(l.a,{src:"/media/icon.png",className:"me-2"}),Object(h.jsx)("h5",{className:"fw-bolder",children:"DiamondFM"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"fw-bold mb-4",children:"SIGN IN"}),k&&Object(h.jsx)(j.a,{variant:"danger",children:k}),Object(h.jsxs)(s.a,{onSubmit:function(e){e.preventDefault(),m(!0);var t={email:p,password:y};O.post("/users/auth",t).then((function(e){if(e)if(e.data.status){var t=new Date;t.setTime(t.getTime()+1296e6);var a=t.toUTCString();document.cookie="uid=".concat(e.data.user._id,";expires=").concat(a,";path=/;"),L.push("/df-dashboard")}else D(e.data.message),m(!1);else D("Error logging In"),m(!1)})).catch((function(e){console.log(e),D("Error logging In"),m(!1)}))},children:[Object(h.jsx)(i.a,{className:"mb-3",children:Object(h.jsxs)(s.a.Group,{controlId:"email",children:[Object(h.jsx)(s.a.Label,{children:"Email Address"}),Object(h.jsx)(s.a.Control,{type:"email",placeholder:"johndoe@gmail.com",required:!0,value:p,onChange:function(e){return v(e.target.value)}})]})}),Object(h.jsx)(i.a,{className:"mb-3",children:Object(h.jsxs)(s.a.Group,{controlId:"password",children:[Object(h.jsx)(s.a.Label,{children:"Password"}),Object(h.jsx)(s.a.Control,{type:"password",placeholder:"********",required:!0,value:y,onChange:function(e){return N(e.target.value)}})]})}),Object(h.jsxs)(i.a,{children:[Object(h.jsx)(r.a,{children:Object(h.jsx)(n.a,{variant:"info",type:"submit",className:"text-white mb-3",children:a?Object(h.jsxs)("span",{children:[Object(h.jsx)(o.a,{as:"span",size:"sm",animation:"border",role:"status","aria-hidden":"true"}),Object(h.jsx)("span",{className:"mx-1",children:"Loading..."})]}):Object(h.jsx)("span",{children:"Sign In"})})}),Object(h.jsx)(r.a,{children:Object(h.jsxs)("p",{children:["New Here? ",Object(h.jsx)("a",{href:"/df-new-keymaster",children:"Sign Up"})]})})]}),Object(h.jsx)(i.a,{children:Object(h.jsxs)("p",{children:["Forgot Password?"," ",Object(h.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),R(!0)},children:"Reset Password"})]})})]})]})]})})})]})}),Object(h.jsxs)(d.a,{size:"sm",show:P,onHide:function(){return R(!1)},centered:!0,children:[Object(h.jsx)(d.a.Header,{children:Object(h.jsx)(d.a.Title,{children:"Password Recovery"})}),Object(h.jsxs)(d.a.Body,{children:[Object(h.jsx)("h5",{children:"Email Address"}),Object(h.jsx)(s.a,{onSubmit:function(e){e.preventDefault();var t={email:K};O.post("/users/forget-password",t).then((function(e){e.data.status?(V(!0),M(null)):M(e.data.message)})).catch((function(e){console.log(e)}))},children:Object(h.jsxs)(i.a,{className:"mb-3",children:[F&&Object(h.jsx)(j.a,{variant:"danger",children:F}),U?Object(h.jsx)(j.a,{variant:"success",children:"Recovery link sent, kindly check your email"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)(s.a.Group,{controlId:"email",children:[Object(h.jsx)(s.a.Label,{children:"Provide the email attached with your account"}),Object(h.jsx)(s.a.Control,{type:"email",placeholder:"Your email",required:!0,value:K,onChange:function(e){return G(e.target.value)}})]}),Object(h.jsx)(n.a,{variant:"info",type:"submit",className:"my-3 ms-2 w-75",children:"Submit"})]})]})})]})]})]})}},45:function(e,t,a){"use strict";var c=a(7),n=a(10),s=a(11),i=a.n(s),r=a(0),l=a(69),o=a(64),j=a(59),d=a(12),b=a(65),u=a(75),h=a(71),O=a(49),m=a(1),f=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],x=Object(h.a)("h4");x.displayName="DivStyledAsH4";var p=Object(O.a)("alert-heading",{Component:x}),v=Object(O.a)("alert-link",{Component:j.a}),g={variant:"primary",show:!0,transition:b.a,closeLabel:"Close alert"},w=r.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),s=a.bsPrefix,r=a.show,j=a.closeLabel,h=a.closeVariant,O=a.className,x=a.children,p=a.variant,v=a.onClose,g=a.dismissible,w=a.transition,y=Object(n.a)(a,f),N=Object(d.a)(s,"alert"),S=Object(o.a)((function(e){v&&v(!1,e)})),C=!0===w?b.a:w,k=Object(m.jsxs)("div",Object(c.a)(Object(c.a)({role:"alert"},C?void 0:y),{},{ref:t,className:i()(O,N,p&&"".concat(N,"-").concat(p),g&&"".concat(N,"-dismissible")),children:[g&&Object(m.jsx)(u.a,{onClick:S,"aria-label":j,variant:h}),x]}));return C?Object(m.jsx)(C,Object(c.a)(Object(c.a)({unmountOnExit:!0},y),{},{ref:void 0,in:r,children:k})):r?k:null}));w.displayName="Alert",w.defaultProps=g,t.a=Object.assign(w,{Link:v,Heading:p})},59:function(e,t,a){"use strict";var c=a(39),n=a(0),s=(a(56),a(46),a(48));a(54),a(57);a(60),new WeakMap;var i=a(61),r=a(1),l=["onKeyDown"];var o=n.forwardRef((function(e,t){var a,n=e.onKeyDown,o=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l),j=Object(i.b)(Object.assign({tagName:"a"},o)),d=Object(c.a)(j,1)[0],b=Object(s.a)((function(e){d.onKeyDown(e),null==n||n(e)}));return((a=o.href)&&"#"!==a.trim()||o.role)&&"button"!==o.role?Object(r.jsx)("a",Object.assign({ref:t},o,{onKeyDown:n})):Object(r.jsx)("a",Object.assign({ref:t},o,d,{onKeyDown:b}))}));o.displayName="Anchor";t.a=o},60:function(e,t,a){"use strict";(function(e){var c=a(0),n="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,s="undefined"!==typeof document;t.a=s||n?c.useLayoutEffect:c.useEffect}).call(this,a(25))}}]);
//# sourceMappingURL=16.633ad21a.chunk.js.map