(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{137:function(e,t,s){"use strict";var c=s(7),a=s(10),i=s(11),n=s.n(i),r=s(0),l=s(12),j=s(1),d=["bsPrefix","bg","pill","text","className","as"],b=r.forwardRef((function(e,t){var s=e.bsPrefix,i=e.bg,r=e.pill,b=e.text,o=e.className,m=e.as,h=void 0===m?"span":m,x=Object(a.a)(e,d),O=Object(l.a)(s,"badge");return Object(j.jsx)(h,Object(c.a)(Object(c.a)({ref:t},x),{},{className:n()(o,O,r&&"rounded-pill",b&&"text-".concat(b),i&&"bg-".concat(i))}))}));b.displayName="Badge",b.defaultProps={bg:"primary",pill:!1},t.a=b},417:function(e,t,s){"use strict";s.r(t);var c=s(39),a=s(2),i=s(0),n=s(62),r=s(43),l=s(45),j=s(47),d=s(44),b=s(16),o=s(137),m=s(88),h=s(89),x=s(19),O=s(63),f=s(1),p=s(42);t.default=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),s=t[0],u=t[1],g=Object(i.useState)(null),N=Object(c.a)(g,2),w=N[0],y=N[1],v=Object(i.useState)(null),k=Object(c.a)(v,2),C=k[0],E=k[1],S=Object(a.g)().type;return Object(i.useEffect)((function(){document.title="".concat(S[0].toUpperCase()+S.slice(1)," | Diamond FM"),p.get("/posts/").then((function(e){e.data.status?(u(e.data.posts.reverse().filter((function(e){return e.type===S}))),y(e.data.posts.filter((function(e){return"airProgramme"===e.type})))):E(e.data.message)}))}),[S]),Object(f.jsxs)("div",{children:[Object(f.jsx)(n.a,{programmes:w}),C&&Object(f.jsx)(l.a,{variant:"warning",className:"mx-2",children:C}),Object(f.jsx)("div",{className:"bg-primary my-3 text-white bg-gradient",children:Object(f.jsxs)("div",{className:"container py-4",children:[Object(f.jsx)("h4",{children:S.toUpperCase()}),Object(f.jsx)("p",{className:"mb-0",children:"HOME/".concat(S.toUpperCase())})]})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(j.a,{className:"my-5",children:[Object(f.jsx)(d.a,{xs:12,xl:8,children:null!==s?Object(f.jsx)("div",{children:s.map((function(e){return Object(f.jsxs)("section",{className:"my-4 shadow rounded-4",style:{minWidth:"90%"},children:[Object(f.jsxs)("div",{className:"w-100 position-relative",children:[Object(f.jsx)(r.a,{src:e.featuredImage,rounded:!0,style:{width:"100%"}}),"airProgramme"===e.type&&Object(f.jsx)(o.a,{bg:"info position-absolute translate-middle py-2",style:{top:"32px",left:"29px"},children:Object(f.jsx)("i",{className:"bi h1 text-white bi-mic rounded"})})]}),Object(f.jsxs)("div",{className:"m-4",children:[Object(f.jsxs)("p",{children:[e.createdAt.split("T")[0]," |"," ",e.comments.length," comments"]}),Object(f.jsx)("h4",{className:"mb-2",children:e.title.slice(0,25)+"..."}),Object(f.jsx)("p",{className:"text-secondary",children:e.featuredDesc.slice(0,45)+"..."}),Object(f.jsx)("a",{href:"/posts/"+e._id,className:"btn btn-info text-white mb-4",children:"airProgramme"===e.type?"LISTEN NOW":"CONTINUE READING"})]})]},e._id)}))}):Object(f.jsx)(x.default,{})}),Object(f.jsxs)(d.a,{xs:12,xl:4,children:[Object(f.jsx)(m.a,{}),Object(f.jsx)("a",{href:"tel:+2349136556952",children:Object(f.jsx)(r.a,{src:"/media/ads.png",className:"w-100 my-4"})}),Object(f.jsx)(h.a,{})]})]})}),Object(f.jsx)(O.a,{posts:s})]})}},62:function(e,t,s){"use strict";var c=s(39),a=s(0),i=s(43),n=s(16),r=s(93),l=s(17),j=s(94),d=s(1);t.a=function(e){var t=e.programmes,s=(new Date).toISOString().split("T"),b=s[0],o=Object(a.useState)(null),m=Object(c.a)(o,2),h=m[0],x=m[1],O=Object(a.useState)(null),f=Object(c.a)(O,2),p=f[0],u=f[1];Object(a.useEffect)((function(){t&&u(t.filter((function(e){return e.programmeDate.split("T")[0]===s[0]&&e.programmeDate.split("T")[1]<s[1]})))}),[t,b]),Object(a.useEffect)((function(){p&&(p.length>0?x(p[0]):x(t[0]))}),[p,t]);var g=Object(a.useState)(!0),N=Object(c.a)(g,2),w=N[0],y=N[1],v=Object(a.useState)(null),k=Object(c.a)(v,2),C=k[0],E=k[1];Object(a.useEffect)((function(){C&&(w?C.pause():C.play())}),[C,w]);return Object(d.jsx)("div",{children:Object(d.jsx)(r.a,{expand:"lg",children:Object(d.jsx)(n.a,{children:Object(d.jsxs)("header",{className:"w-100 my-3",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(d.jsx)(r.a.Brand,{href:"#home",className:"d-none d-lg-block",children:Object(d.jsx)(i.a,{src:"/media/logoo.jpeg",rounded:!0,width:"70",height:"70"})}),Object(d.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"me-3"}),Object(d.jsx)("section",{className:"grow-1 w-100 bg-white shadow rounded",children:Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"d-flex flex-nowrap justify-content-between align-items-center",children:[h?Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsxs)("div",{className:"position-relative",children:[Object(d.jsxs)("span",{className:"rounded-circle p-2 position-absolute top-50 start-50 translate-middle",style:{backgroundColor:"#F9474E"},children:[w&&Object(d.jsx)("i",{className:"bi bi-play-fill text-white",style:{cursor:"pointer"},onClick:function(){return function(e){var t=new Audio(e);E(t),y(!1)}(h.audio)}}),!w&&Object(d.jsx)("i",{className:"bi bi-pause-fill text-white",style:{cursor:"pointer"},onClick:function(){y(!0)}})]}),Object(d.jsx)(i.a,{src:h.featuredImage,rounded:!0,width:"70",height:"70"})]}),Object(d.jsx)("a",{href:"/posts/"+h._id,target:"_blank",rel:"noreferrer",className:"text-secondary text-decoration-none",children:Object(d.jsxs)("div",{className:"ms-2 me-1 me-md-3 ",children:[Object(d.jsx)("p",{className:"mb-0",children:"Live on air"}),Object(d.jsx)("p",{className:"mb-1 fw-bolder fs-6",children:h.title.slice(0,30)})]})}),Object(d.jsxs)("div",{style:{color:"#F9474E"},className:"d-flex flex-nowrap me-3",children:[Object(d.jsx)("a",{href:"/posts/type/airProgramme",style:{color:"#F9474E"},className:"mb-0 text-decoration-none",children:"Next programme"}),Object(d.jsx)("i",{className:"bi bi-arrow-right"})]})]}):Object(d.jsx)(l.a,{animation:"border",className:"my-3 ms-3"}),Object(d.jsxs)("div",{className:"d-none d-md-flex align-items-center flex-nowrap me-3",children:[Object(d.jsx)("a",{href:"https://www.facebook.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bi bi-facebook h4 text-secondary mx-2"})}),Object(d.jsx)("a",{href:"https://instagram.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bi bi-instagram h4 mx-2 text-secondary"})}),Object(d.jsx)("a",{href:"https://twitter.com/diamond887fm",target:"_blank",rel:"noreferrer",className:"rounded p-2",style:{backgroundColor:"#F9474E"},children:Object(d.jsx)("i",{className:"bi bi-twitter h4 mx-2 text-white"})})]})]})})})]}),Object(d.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"ms-auto mt-4 justify-content-between",style:{width:"89%",maxWidth:"100%"},children:[Object(d.jsx)(j.a.Link,{href:"/",children:"HOME"}),Object(d.jsx)(j.a.Link,{href:"#about",children:"ABOUT US"}),Object(d.jsx)(j.a.Link,{href:"/posts/type/airProgramme",children:"PROGRAMME"}),Object(d.jsx)(j.a.Link,{href:"/posts/type/news",children:"NEWS"}),Object(d.jsx)(j.a.Link,{href:"/posts/type/blog",children:"BLOG"}),Object(d.jsx)(j.a.Link,{href:"/posts/type/sport",children:"SPORT"}),Object(d.jsx)(j.a.Link,{href:"/privacy-policy",children:"PRIVACY POLICY"}),Object(d.jsx)(j.a.Link,{href:"/contact",children:"CONTACT US"})]})})]})})})})}},63:function(e,t,s){"use strict";var c=s(39),a=s(16),i=s(47),n=s(44),r=s(43),l=s(0),j=s(1);t.a=function(e){var t=e.posts,s=Object(l.useState)((new Date).toISOString()),d=Object(c.a)(s,1)[0];return Object(j.jsxs)("div",{className:"mt-5",children:[t&&Object(j.jsx)("div",{className:"py-5",style:{backgroundImage:"url('/media/calltoAct.png')",backgroundPosition:"center center",backgroundSize:"cover",minHeight:"40vh"},children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)("h1",{className:"fw-bolder text-center text-white",children:"DIAMOND FM"}),Object(j.jsx)("p",{className:"text-center text-white",children:"Instagram @diamond887fm"}),Object(j.jsx)(i.a,{children:t.slice(0,4).map((function(e){return Object(j.jsx)(n.a,{className:"",xs:12,md:4,xl:3,children:Object(j.jsx)("a",{href:"/posts/"+e._id,children:Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{src:e.featuredImage,rounded:!0,height:"220",className:"mx-auto my-2",style:{width:"100%"}})})})})}))})]})}),Object(j.jsx)("div",{style:{backgroundColor:"#CCDFEC"},children:Object(j.jsx)(a.a,{children:Object(j.jsxs)("p",{className:"mb-0 py-3",children:["\xa9 ",d.split("T")[0].split("-")[0]," DiamondFM"]})})})]})}},88:function(e,t,s){"use strict";var c=s(39),a=s(0),i=s(1),n=s(42);t.a=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),s=t[0],r=t[1],l=Object(a.useState)(null),j=Object(c.a)(l,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){n.get("https://api.openweathermap.org/data/2.5/weather?q=Kwara,ilorin&appid=b190a0605344cc4f3af08d0dd473dd25&units=metric").then((function(e){r(e.data.weather[0]),b(e.data.main.temp)}))}),[]),Object(i.jsxs)("div",{className:"my-4",children:[Object(i.jsx)("h4",{children:"WEATHER REPORT"}),Object(i.jsxs)("section",{className:"bg-info my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"bi bi-brightness-alt-high-fill h1 fw-bolder"}),Object(i.jsxs)("h1",{children:[d||"25"," \xb0C"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"mb-0",children:"Ilorin"}),Object(i.jsx)("h4",{className:"fw-bolder",children:s?s.main:"Clouds"}),Object(i.jsx)("p",{className:"mb-0",children:s?s.description:"scattered clouds"})]})]})]})}},89:function(e,t,s){"use strict";var c=s(1);t.a=function(){return Object(c.jsxs)("div",{className:"my-4",children:[Object(c.jsx)("h4",{children:"COVID-19 NIGERIA"}),Object(c.jsxs)("section",{className:"bg-primary my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Confirmed Cases"})]}),Object(c.jsx)("h4",{children:"212,894"})]}),Object(c.jsxs)("section",{className:"bg-warning my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Active Cases"})]}),Object(c.jsx)("h4",{children:"5,297"})]}),Object(c.jsxs)("section",{className:"bg-success my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Discharged Cases"})]}),Object(c.jsx)("h4",{children:"204,675"})]}),Object(c.jsxs)("section",{className:"bg-danger my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"bi bi-gear-fill fw-bold"}),Object(c.jsx)("p",{className:"mb-0",children:"Death"})]}),Object(c.jsx)("h4",{children:"2,922"})]})]})}}}]);
//# sourceMappingURL=11.8870cef7.chunk.js.map