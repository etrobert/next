(this.webpackJsonpnext=this.webpackJsonpnext||[]).push([[0],{57:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(5),a=n.n(c),r=n(34),s=n.n(r),j=n(13),u=n(50),i=n(14),o=n(0),b=n.n(o),d=n(3),O=n(9),l=n(15),f=n(45),x=Object(f.a)({apiKey:"AIzaSyAvvj4nuUOxBJ6d0iE1Gjgg8gCXO7aXo_g",authDomain:"next-etienne.firebaseapp.com",projectId:"next-etienne",storageBucket:"next-etienne.appspot.com",messagingSenderId:"489100545863",appId:"1:489100545863:web:dafb3e6b2bb270198e4662"}),h=Object(l.e)(x),m=function(){return Object(c.useCallback)((function(){return Object(l.a)(Object(l.b)(h,"projects"),{})}),[])},k=(n(57),n(6)),p=function(){var t=m(),e=Object(c.useState)(!1),n=Object(O.a)(e,2),a=n[0],r=n[1],s=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,t();case 3:n=e.sent,window.location.href="/next/project/".concat(n.id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"LandingPage",children:[Object(k.jsx)("h1",{className:"LandingPage__title",children:"Next"}),Object(k.jsx)("button",{className:"LandingPage__cta",onClick:a?void 0:s,children:a?"Creating Project...":"START NOW"})]})},g=Object(j.c)({key:"Task",default:{name:"DEFAULT-NAME",status:"ready"}}),v=Object(j.b)({key:"ProjectId",default:"AY61ltFwdgzx8AgBFqKC"}),N=Object(j.b)({key:"Project",default:{tasks:[]}}),y=Object(j.d)({key:"NextTaskId",get:function(t){var e,n=t.get;return null!==(e=n(N).tasks.filter((function(t){return"completed"!==n(g(t)).status}))[0])&&void 0!==e?e:null}}),w=n(21),C=n(10),T=n(46),_=function(){var t=Object(j.e)((function(t){var e=t.set;return function(t,n){e(g(t),n),e(N,(function(e){return Object(C.a)(Object(C.a)({},e),{},{tasks:[].concat(Object(w.a)(e.tasks),[t])})}))}})),e=Object(j.e)((function(t){var e=t.set;return function(t){return e(N,(function(e){return Object(C.a)(Object(C.a)({},e),{},{tasks:Object(T.without)(e.tasks,t)})}))}}));return{addTask:t,setTask:Object(j.e)((function(t){var e=t.set;return function(t,n){return e(g(t),n)}})),removeTask:e}},I=function(){var t=Object(j.g)(v),e=_(),n=e.addTask,a=e.setTask,r=e.removeTask;Object(c.useEffect)((function(){var e=Object(l.b)(h,"projects/".concat(t,"/tasks"));return Object(l.f)(e,(function(t){return t.docChanges().forEach((function(t){var e=t.doc.id,c=t.doc.data();switch(t.type){case"added":n(e,c);break;case"modified":a(e,c);break;case"removed":r(e)}}))}))}),[t,n,r,a])},P=function(){var t=Object(j.h)(N);Object(c.useEffect)((function(){return t({tasks:[]})}))},S=function(){var t=Object(j.g)(v);return Object(c.useCallback)((function(e){var n=Object(l.b)(h,"projects/".concat(t,"/tasks")),c={name:e,status:"ready"};return Object(l.a)(n,c)}),[t])},E=function(){var t=Object(j.g)(v);return Object(c.useCallback)((function(e){return Object(l.c)(Object(l.d)(h,"projects/".concat(t,"/tasks/").concat(e)))}),[t])},F=function(){var t=Object(j.g)(v);return Object(c.useCallback)((function(e,n){return Object(l.g)(Object(l.d)(h,"projects/".concat(t,"/tasks/").concat(e)),n)}),[t])},L=n(29),A=n(47),B=n.n(A),D=(n(60),["icon","className"]),M=function(t){var e=t.icon,n=t.className,c=Object(L.a)(t,D),a=B.a.icons[e].toSvg();return Object(k.jsx)("button",Object(C.a)(Object(C.a)({className:"IconButton ".concat(n)},c),{},{dangerouslySetInnerHTML:{__html:a}}))},q=(n(61),function(t){var e=t.id,n=Object(j.g)(g(e)),c=n.name,a=n.status,r=E(),s=F();return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)("input",{type:"checkbox",checked:"completed"===a,onChange:function(){return s(e,{status:"ready"===a?"completed":"ready"})}})}),Object(k.jsx)("td",{className:"Task__name-td",children:c}),Object(k.jsx)("td",{children:Object(k.jsx)(M,{icon:"x-square",onClick:function(){return r(e)}})})]})}),J=(n(62),function(){var t=Object(j.g)(N).tasks,e=Object(c.useState)(""),n=Object(O.a)(e,2),a=n[0],r=n[1],s=S();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("form",{id:"new-task-form",onSubmit:function(t){t.preventDefault(),""!==a&&(s(a),r(""))}}),Object(k.jsx)("table",{className:"ListView",children:Object(k.jsxs)("tbody",{children:[t.map((function(t){return Object(k.jsx)(q,{id:t},t)})),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)(M,{icon:"plus-square",type:"submit",form:"new-task-form"})}),Object(k.jsx)("td",{children:Object(k.jsx)("input",{className:"ListView__new-task-input",type:"text",form:"new-task-form",value:a,onChange:function(t){return r(t.target.value)}})})]})]})})]})}),z=(n(63),function(){var t=Object(j.g)(y),e=Object(j.f)(g(null!==t&&void 0!==t?t:"")),n=Object(O.a)(e,2),c=n[0],a=n[1];return Object(k.jsx)("div",{className:"NextPanel",children:null===t?Object(k.jsx)("h2",{className:"NextPanel__done",children:"You're done!"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"Next Task"}),c.name,Object(k.jsx)("button",{onClick:function(){return a((function(t){return Object(C.a)(Object(C.a)({},t),{},{status:"completed"})}))},children:"DONE!"})]})})}),K=(n(64),function(){var t=Object(i.f)().projectId,e=Object(j.h)(v);return Object(c.useEffect)((function(){return e(t)}),[t,e]),I(),P(),Object(k.jsxs)("div",{className:"MainPage",children:[Object(k.jsx)("h1",{className:"MainPage__title",children:"Next"}),Object(k.jsx)(J,{}),Object(k.jsx)(z,{})]})});n(72);var U=function(){return Object(k.jsx)(u.a,{basename:"/next",children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:"/",children:Object(k.jsx)(p,{})}),Object(k.jsx)(i.a,{path:"/project/:projectId",children:Object(k.jsx)(K,{})})]})})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};n(73);s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(j.a,{children:Object(k.jsx)(U,{})})}),document.getElementById("root")),V()}},[[74,1,2]]]);
//# sourceMappingURL=main.854e801b.chunk.js.map