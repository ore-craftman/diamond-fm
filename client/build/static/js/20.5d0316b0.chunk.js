(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{423:function(e,t,s){"use strict";s.r(t);var a=s(39),c=s(0),n=s(45),i=s(16),r=s(44),l=s(41),o=s(46),d=s(55),j=s(56),b=s(1),h=s(43);t.default=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),s=t[0],m=t[1],x=Object(c.useState)(null),O=Object(a.a)(x,2),u=O[0],p=O[1];return Object(c.useEffect)((function(){document.title="About Us | DiamondFM",h.get("/posts/").then((function(e){e.data.status?m(e.data.posts):p(e.data.message)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{}),u&&Object(b.jsx)(n.a,{variant:"warning",className:"mx-2",children:u}),Object(b.jsx)(i.a,{className:"py-4",children:Object(b.jsxs)(o.a,{className:"align-items-center",children:[Object(b.jsxs)(r.a,{sm:12,md:6,children:[Object(b.jsx)("h2",{className:"fw-bolder fs-1",id:"#about",children:"ABOUT US"}),Object(b.jsx)("p",{children:"Diamond FM is an urban radio station in Ilorin, Kwara State, Nigeria. Our radio waves cover North Central and South Western Nigerian."}),Object(b.jsx)("p",{children:"We offer exclusive news stories, music and programmes that focus on entertainment, topical issues, community development and corporate social responsibility."}),Object(b.jsx)("p",{children:"We engage our audience in conversations that add value to their lives and contribute to nation-building. Our vision is to continue earning the trust of our audience through quality reportage, standard content production, entertaining and informative programmes and the right business attitude that encourages growth and community development."}),Object(b.jsx)("p",{children:"We are relentless in our resolve to maintain professional and ethical standards."})]}),Object(b.jsx)(r.a,{sm:12,md:6,children:Object(b.jsx)(l.a,{src:"/media/aboutCenter.png",style:{maxWidth:"100%"},className:"d-none d-md-block rounded mb-4"})})]})}),Object(b.jsx)(j.a,{posts:s})]})}},55:function(e,t,s){"use strict";var a=s(39),c=s(0),n=s(41),i=s(16),r=s(77),l=s(78),o=s(1);t.a=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),s=t[0],d=t[1],j=Object(c.useState)(null),b=Object(a.a)(j,2),h=b[0],m=b[1];Object(c.useEffect)((function(){h&&(s?h.pause():h.play())}),[h,s]);return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{expand:"lg",children:Object(o.jsx)(i.a,{children:Object(o.jsxs)("header",{className:"w-100 my-3",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(o.jsx)(r.a.Brand,{href:"#home",className:"d-none d-lg-block",children:Object(o.jsx)(n.a,{src:"/media/logoo.jpeg",rounded:!0,width:"50",height:"50"})}),Object(o.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"me-3"}),Object(o.jsx)("section",{className:"grow-1 w-100 bg-white shadow rounded",children:Object(o.jsx)("div",{children:Object(o.jsxs)("section",{className:"d-flex flex-nowrap justify-content-between align-items-center",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsxs)("div",{className:"position-relative",children:[Object(o.jsxs)("span",{className:"rounded-circle position-absolute top-50 start-50 translate-middle",style:{backgroundColor:"#F9474E",padding:"0px 2px "},children:[s&&Object(o.jsx)("i",{className:"bi bi-play-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){return function(e){var t=new Audio(e);m(t),d(!1)}("https://streams.radiomast.io/4b6d766f-3b8a-422a-ab07-822a1738ff2f")}}),!s&&Object(o.jsx)("i",{className:"bi bi-pause-fill h5 text-white mx-auto",style:{cursor:"pointer"},onClick:function(){d(!0)}})]}),Object(o.jsx)(n.a,{src:"/media/testFeaturedImg.png",rounded:!0,width:"50",height:"40"})]}),Object(o.jsx)("div",{className:"ms-2 me-1 me-md-3 ",children:Object(o.jsx)("p",{className:"mb-1 fw-bolder",style:{fontSize:"14px"},children:"ON AIR NOW"})}),Object(o.jsxs)("div",{style:{color:"#F9474E"},className:"d-flex flex-nowrap me-3",children:[Object(o.jsx)("a",{href:"/posts/post/airProgramme",style:{color:"#F9474E"},className:"mb-0 text-decoration-none",children:"Next"}),Object(o.jsx)("i",{className:"bi bi-arrow-right ms-1"})]})]}),Object(o.jsxs)("div",{className:"d-none d-md-flex align-items-center flex-nowrap ms-auto",children:[Object(o.jsx)("a",{href:"https://www.facebook.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bi bi-facebook h4 text-secondary mx-2"})}),Object(o.jsx)("a",{href:"https://instagram.com/diamond887fm/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bi bi-instagram h4 mx-2 text-secondary"})}),Object(o.jsx)("a",{href:"https://twitter.com/diamond887fm",target:"_blank",rel:"noreferrer",className:"rounded p-2",style:{backgroundColor:"#F9474E"},children:Object(o.jsx)("i",{className:"bi bi-twitter h4 mx-2 text-white"})})]})]})})})]}),Object(o.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(l.a,{className:"ms-auto mt-4 justify-content-between",style:{width:"89%",maxWidth:"100%"},children:[Object(o.jsx)(l.a.Link,{href:"/",children:"HOME"}),Object(o.jsx)(l.a.Link,{href:"/about",children:"ABOUT US"}),Object(o.jsx)(l.a.Link,{href:"/posts/post/airProgramme",children:"PROGRAMMES PLAY BACK"}),Object(o.jsx)(l.a.Link,{href:"/posts/post/news",children:"NEWS"}),Object(o.jsx)(l.a.Link,{href:"/posts/post/blog",children:"BLOG"}),Object(o.jsx)(l.a.Link,{href:"/posts/post/sport",children:"SPORTS"}),Object(o.jsx)(l.a.Link,{href:"/presenters",children:"PRESENTERS"}),Object(o.jsx)(l.a.Link,{href:"/contact",children:"CONTACT US"})]})})]})})})})}},56:function(e,t,s){"use strict";var a=s(39),c=s(16),n=s(46),i=s(44),r=s(41),l=s(0),o=s(1);t.a=function(e){var t=e.posts,s=Object(l.useState)((new Date).toISOString()),d=Object(a.a)(s,1)[0];return Object(o.jsxs)("div",{className:"mt-5",children:[t&&Object(o.jsx)("div",{className:"py-5",style:{backgroundImage:"url('/media/calltoAct.png')",backgroundPosition:"center center",backgroundSize:"cover",minHeight:"40vh"},children:Object(o.jsxs)(c.a,{children:[Object(o.jsx)("h1",{className:"fw-bolder text-center text-white",children:"DIAMOND FM"}),Object(o.jsx)("p",{className:"text-center text-white",children:"Instagram @diamond887fm"}),Object(o.jsx)(n.a,{children:t.slice(0,4).map((function(e){return Object(o.jsx)(i.a,{className:"",xs:12,md:4,xl:3,children:Object(o.jsx)("a",{href:"/posts/"+e._id,children:Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{src:e.featuredImage,rounded:!0,height:"250",className:"mx-auto my-2",style:{width:"100%"}})})})})}))})]})}),Object(o.jsx)("div",{style:{backgroundColor:"#CCDFEC"},children:Object(o.jsx)(c.a,{children:Object(o.jsxs)(n.a,{children:[Object(o.jsx)(i.a,{children:Object(o.jsxs)("p",{className:"mb-0 py-3",children:["\xa9 ",d.split("T")[0].split("-")[0]," DiamondFM"]})}),Object(o.jsx)(i.a,{children:Object(o.jsx)("p",{className:"py-3",children:Object(o.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})})})]})})})]})}}}]);
//# sourceMappingURL=20.5d0316b0.chunk.js.map