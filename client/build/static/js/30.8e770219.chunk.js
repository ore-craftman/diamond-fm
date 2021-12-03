(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{427:function(e,t,a){"use strict";a.r(t);var c=a(70),n=a(39),s=a(106),r=a.n(s),o=(a(116),a(0)),i=a(51),l=a(46),j=a(44),d=a(52),u=a(45),b=a(19),h=a(118),O=a.n(h),m=(a(117),a(1)),p=a(43);t.default=function(){var e="";document.cookie.split(";").forEach((function(t){var a=t.split("=");"uid"===a[0]&&(e=a[1])}));var t=Object(o.useState)(null),a=Object(n.a)(t,2),s=a[0],h=a[1];Object(o.useEffect)((function(){p.get("/users/".concat(e)).then((function(e){h((function(){return e.data.user}))}))}),[e]);var x=Object(o.useState)(!1),f=Object(n.a)(x,2),g=f[0],v=f[1],y=Object(o.useState)(""),N=Object(n.a)(y,2),S=N[0],w=N[1],P=Object(o.useState)(""),C=Object(n.a)(P,2),I=C[0],D=C[1],L=Object(o.useState)(""),k=Object(n.a)(L,2),G=k[0],A=k[1],T=Object(o.useState)(""),q=Object(n.a)(T,2),E=q[0],F=q[1],_=Object(o.useState)(""),B=Object(n.a)(_,2),J=B[0],R=B[1],z=Object(o.useState)(new Date),U=Object(n.a)(z,2),H=U[0],K=U[1],M=Object(o.useState)(!1),Q=Object(n.a)(M,2),V=Q[0],W=Q[1],X=Object(o.useState)(!1),Y=Object(n.a)(X,2),Z=Y[0],$=Y[1],ee=Object(o.useState)(null),te=Object(n.a)(ee,2),ae=te[0],ce=te[1],ne=Object(o.useState)(null),se=Object(n.a)(ne,2),re=se[0],oe=se[1],ie=Object(o.useState)(""),le=Object(n.a)(ie,2),je=le[0],de=le[1];return s&&!s.canPublish&&ae&&p.get("/users/").then((function(e){e.data.users.filter((function(e){return"admin"===e.role})).forEach((function(e){var t={id:e._id,notifications:[].concat(Object(c.a)(e.notifications),[{type:"Pending post",body:ae.featuredDesc.slice(0,25)}])};p.post("/users/notify",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){console.log(e)})),Object(m.jsxs)("div",{className:"bg-white px-1 py-4 me-md-2 my-4",children:[ae&&s.canPublish&&Object(m.jsxs)(u.a,{variant:"success",className:"my-2",children:["Post Published"," ",Object(m.jsx)(u.a.Link,{href:"/posts/".concat(ae._id),children:"Click here to view"})]}),ae&&!s.canPublish&&Object(m.jsx)(u.a,{variant:"warning",className:"my-2",children:"Post pending review, you'll be notified when approved by admin"}),!ae&&re&&Object(m.jsx)(u.a,{variant:"danger",className:"my-2",children:re}),!ae&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"New Post"}),Object(m.jsxs)(i.a,{onSubmit:function(e){if(e.preventDefault(),v(!0),""===E||""===G)v(!1),W(!0),$(!0);else{var t=new FileReader,a={title:S,type:I,body:E,audio:""!==J?J:null,createdBy:s._id,featuredDesc:je,programmeDate:""!==H?H:null,pending:!0!==s.canPublish};t.addEventListener("load",(function(){a.featuredImage=t.result,p.post("/posts/create",a).then((function(e){e.data&&e.data.status?ce(e.data.post):(oe(e.data.message?e.data.message:"Oops.. network error"),v(!1))})).catch((function(e){console.log(e)}))})),t.readAsDataURL(G)}},children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)(j.a,{xs:8,children:Object(m.jsx)(i.a.Group,{controlId:"postTitle",children:Object(m.jsx)(i.a.Control,{type:"text",placeholder:"Add Title",required:!0,value:S,onChange:function(e){return w(e.target.value)}})})}),Object(m.jsx)(j.a,{children:Object(m.jsx)(i.a.Group,{controlId:"postType",children:Object(m.jsxs)(i.a.Select,{onChange:function(e){return D(e.target.value)},required:!0,value:I,children:[Object(m.jsx)("option",{value:"",children:"Select Post Type"}),Object(m.jsx)("option",{value:"news",children:"News"}),Object(m.jsx)("option",{value:"blog",children:"Blog"}),Object(m.jsx)("option",{value:"sport",children:"Sport"}),Object(m.jsx)("option",{value:"airProgramme",children:"Air Programme"})]})})})]}),"airProgramme"===I&&Object(m.jsxs)(l.a,{className:"mt-4",children:[Object(m.jsx)(j.a,{children:Object(m.jsxs)(i.a.Group,{controlId:"programmeDate",className:"mb-3",children:[Object(m.jsx)(i.a.Label,{children:"Select Programme Date"}),Object(m.jsx)(O.a,{selected:H,onChange:function(e){return K(e)},showTimeSelect:!0,timeIntervals:10,dateFormat:"Pp",className:"form-control"})]})}),Object(m.jsx)(j.a,{children:Object(m.jsxs)(i.a.Group,{controlId:"audioLink",className:"mb-3",children:[Object(m.jsx)(i.a.Label,{children:"Audio Link"}),Object(m.jsx)(i.a.Control,{type:"text",placeholder:"https://streams.radiomast.io/...",required:!0,onChange:function(e){return R(e.target.value)},value:J})]})})]}),Object(m.jsxs)(l.a,{className:"my-3",children:[Object(m.jsx)(j.a,{children:Object(m.jsxs)(i.a.Group,{controlId:"featuredImage",className:"mb-3",children:[Object(m.jsx)(i.a.Label,{children:"Featured Desc"}),Object(m.jsx)(i.a.Control,{type:"text",placeholder:"Post description",required:!0,value:je,onChange:function(e){return de(e.target.value)}})]})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(i.a.Group,{controlId:"featuredImage",className:"mb-3",children:[Object(m.jsx)(i.a.Label,{children:"Featured Image"}),Object(m.jsx)(i.a.Control,{type:"file",onChange:function(e){return A(e.target.files[0])}})]}),Z&&Object(m.jsx)(u.a,{variant:"danger",className:"m-1",children:"Choose featured Image"})]})]}),Object(m.jsxs)(l.a,{className:"my-4 p",children:[Object(m.jsx)(r.a,{theme:"snow",placeholder:"Post Content... start writting",onChange:F}),V&&Object(m.jsx)(u.a,{variant:"danger",className:"mx-2 mt-5",children:"Add text to post"})]}),Object(m.jsx)(d.a,{variant:"info",type:"submit",className:"text-white mt-5",children:g?Object(m.jsxs)("span",{children:[Object(m.jsx)(b.a,{as:"span",size:"sm",animation:"border",role:"status","aria-hidden":"true"}),Object(m.jsx)("span",{className:"mx-1",children:"Creating..."})]}):Object(m.jsx)("span",{children:"Create New Post"})})]})]})]})}}}]);
//# sourceMappingURL=30.8e770219.chunk.js.map