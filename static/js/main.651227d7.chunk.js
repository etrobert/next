(this.webpackJsonpnext=this.webpackJsonpnext||[]).push([[0],{109:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},217:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),r=n(40),s=n.n(r),o=n(11),u=n(103),i=n(15),j=n(0),d=n.n(j),b=n(3),f=n(7),l=n(14),O=n(95),p=Object(O.a)({apiKey:"AIzaSyAvvj4nuUOxBJ6d0iE1Gjgg8gCXO7aXo_g",authDomain:"next-etienne.firebaseapp.com",projectId:"next-etienne",storageBucket:"next-etienne.appspot.com",messagingSenderId:"489100545863",appId:"1:489100545863:web:dafb3e6b2bb270198e4662"}),h=Object(l.e)(p),m=function(){return Object(c.useCallback)((function(){return Object(l.a)(Object(l.b)(h,"projects"),{})}),[])},v=(n(109),n(6)),x=function(){var e=m(),t=Object(c.useState)(!1),n=Object(f.a)(t,2),a=n[0],r=n[1],s=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,e();case 3:n=t.sent,window.location.href="/next/project/".concat(n.id);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"LandingPage",children:[Object(v.jsx)("h1",{className:"LandingPage__title",children:"[next]"}),Object(v.jsx)("button",{className:"LandingPage__cta",onClick:a?void 0:s,children:a?"Creating Project...":"START NOW"})]})},k=n(16),g=n(96),y=n.n(g),w=Object(o.c)({key:"Task",default:{name:"DEFAULT-NAME",status:"ready"}}),N=Object(o.c)({key:"Dependency",default:{predecessor:"DEFAULT-ID",successor:"DEFAULT-ID"}}),C=Object(o.b)({key:"ProjectId",default:"AY61ltFwdgzx8AgBFqKC"}),T=Object(o.b)({key:"Project",default:{tasks:[],dependencies:[]}}),_=Object(o.d)({key:"ProjectWithoutCompleted",get:function(e){var t=e.get,n=t(T),c=n.tasks,a=n.dependencies,r=y()(c,(function(e){return"completed"===t(w(e)).status})),s=Object(f.a)(r,2),o=s[0];return{tasks:s[1],dependencies:a.filter((function(e){var n=t(N(e)),c=n.predecessor,a=n.successor;return!o.some((function(e){return e===a||e===c}))}))}}}),D=Object(o.e)({key:"HasTaskPredecessor",get:function(e){return function(t){var n=t.get;return n(T).dependencies.some((function(t){return n(N(t)).successor===e}))}}}),E=Object(o.d)({key:"NextTaskId",get:function(e){var t,n=e.get;return null!==(t=n(T).tasks.filter((function(e){return!n(D(e))&&"ready"===n(w(e)).status}))[0])&&void 0!==t?t:null}}),P=Object(o.d)({key:"CytoscapeData",get:function(e){var t=e.get,n=t(_),c=n.tasks,a=n.dependencies,r=c.map((function(e){return{data:{id:e,name:t(w(e)).name}}})),s=a.map((function(e){var n=t(N(e));return{data:{id:e,source:n.predecessor,target:n.successor}}}));return[].concat(Object(k.a)(r),Object(k.a)(s))}}),I=n(10),L=n(68),F=function(){var e=Object(o.f)((function(e){var t=e.set;return function(e,n){t(w(e),n),t(T,(function(t){return Object(I.a)(Object(I.a)({},t),{},{tasks:[].concat(Object(k.a)(t.tasks),[e])})}))}})),t=Object(o.f)((function(e){var t=e.set;return function(e){return t(T,(function(t){return Object(I.a)(Object(I.a)({},t),{},{tasks:Object(L.without)(t.tasks,e)})}))}}));return{addTask:e,setTask:Object(o.f)((function(e){var t=e.set;return function(e,n){return t(w(e),n)}})),removeTask:t,addDependency:Object(o.f)((function(e){var t=e.set;return function(e,n){t(N(e),n),t(T,(function(t){return Object(I.a)(Object(I.a)({},t),{},{dependencies:[].concat(Object(k.a)(t.dependencies),[e])})}))}})),removeDependency:Object(o.f)((function(e){var t=e.set;return function(e){return t(T,(function(t){return Object(I.a)(Object(I.a)({},t),{},{dependencies:Object(L.without)(t.dependencies,e)})}))}}))}},S=function(){var e=Object(o.h)(C),t=F(),n=t.addTask,a=t.setTask,r=t.removeTask,s=t.addDependency,u=t.removeDependency;Object(c.useEffect)((function(){var t=Object(l.b)(h,"projects/".concat(e,"/tasks"));return Object(l.f)(t,(function(e){return e.docChanges().forEach((function(e){var t=e.doc.id,c=e.doc.data();switch(e.type){case"added":n(t,c);break;case"modified":a(t,c);break;case"removed":r(t)}}))}))}),[e,n,r,a]),Object(c.useEffect)((function(){var t=Object(l.b)(h,"projects/".concat(e,"/dependencies"));return Object(l.f)(t,(function(e){return e.docChanges().forEach((function(e){var t=e.doc.id,n=e.doc.data();switch(e.type){case"added":s(t,n);break;case"modified":break;case"removed":u(t)}}))}))}),[e,s,u])},A=function(){var e=Object(o.i)(T);Object(c.useEffect)((function(){return e({tasks:[],dependencies:[]})}))},M=function(){var e=Object(o.h)(C);return Object(c.useCallback)((function(t){var n=Object(l.b)(h,"projects/".concat(e,"/tasks")),c={name:t,status:"ready"};return Object(l.a)(n,c)}),[e])},B=n(34),U=n(97),q=n.n(U),z=(n(199),["icon","className","title"]),G=function(e){var t=e.icon,n=e.className,c=e.title,a=Object(B.a)(e,z),r=q.a.icons[t].toSvg();return Object(v.jsx)("button",Object(I.a)(Object(I.a)({className:"IconButton ".concat(n)},a),{},{dangerouslySetInnerHTML:{__html:r},"aria-label":c,title:c}))},J=function(){var e=Object(o.h)(C);return Object(c.useCallback)(function(){var t=Object(b.a)(d.a.mark((function t(n){var c,a,r,s,o,u,i,j,b;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(l.j)(h),a=Object(l.b)(h,"projects/".concat(e,"/dependencies")),r=Object(l.g)(a,Object(l.i)("successor","==",n)),s=Object(l.g)(a,Object(l.i)("predecessor","==",n)),t.next=6,Promise.all([Object(l.d)(r),Object(l.d)(s)]);case 6:return o=t.sent,u=Object(f.a)(o,2),i=u[0],j=u[1],b=function(t){var n=Object(l.c)(h,"projects/".concat(e,"/dependencies/").concat(t.id));c.delete(n)},i.forEach(b),j.forEach(b),c.delete(Object(l.c)(h,"projects/".concat(e,"/tasks/").concat(n))),t.abrupt("return",c.commit());case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e])},H=function(){var e=Object(o.h)(C);return Object(c.useCallback)((function(t,n){return Object(l.h)(Object(l.c)(h,"projects/".concat(e,"/tasks/").concat(t)),n)}),[e])},K=(n(200),function(e){var t=e.id,n=Object(o.h)(w(t)),c=n.name,a=n.status,r=J(),s=H();return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",checked:"completed"===a,onChange:function(){return s(t,{status:"ready"===a?"completed":"ready"})}})}),Object(v.jsx)("td",{className:"Task__name-td",children:c}),Object(v.jsx)("td",{children:Object(v.jsx)(G,{icon:"x-square",title:"Delete",onClick:function(){return r(t)}})})]})}),V=(n(201),function(){var e=Object(o.h)(T).tasks,t=Object(c.useState)(""),n=Object(f.a)(t,2),a=n[0],r=n[1],s=M();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("form",{id:"new-task-form",onSubmit:function(e){e.preventDefault(),""!==a&&(s(a),r(""))}}),Object(v.jsx)("table",{className:"ListView",children:Object(v.jsxs)("tbody",{children:[e.map((function(e){return Object(v.jsx)(K,{id:e},e)})),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)(G,{icon:"plus-square",type:"submit",form:"new-task-form",title:"Create"})}),Object(v.jsx)("td",{children:Object(v.jsx)("input",{className:"ListView__new-task-input",type:"text",form:"new-task-form",value:a,onChange:function(e){return r(e.target.value)}})})]})]})})]})}),W=(n(202),function(){var e=Object(o.h)(E),t=Object(o.g)(w(null!==e&&void 0!==e?e:"")),n=Object(f.a)(t,2),c=n[0],a=n[1];return Object(v.jsx)("div",{className:"NextPanel",children:null===e?Object(v.jsx)("h2",{className:"NextPanel__done",children:"You're done!"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"Next Task"}),c.name,Object(v.jsx)("button",{onClick:function(){return a((function(e){return Object(I.a)(Object(I.a)({},e),{},{status:"completed"})}))},children:"DONE!"})]})})}),X=n(98),Y=n.n(X),R=function(){var e=Object(o.h)(C);return Object(c.useCallback)((function(t,n){var c=Object(l.b)(h,"projects/".concat(e,"/dependencies")),a={predecessor:t,successor:n};return Object(l.a)(c,a)}),[e])},Q=function(e,t,n){Object(c.useEffect)((function(){if(null!==e)return e.on(t,n),function(){e.removeListener(t,n)}}),[e,t,n])},Z=(n(210),[{selector:"node[name]",style:{width:"label",height:"label",shape:"round-rectangle",label:"data(name)","text-valign":"center",padding:"10px"}},{selector:"edge",style:{"target-arrow-shape":"triangle","curve-style":"bezier",width:"5","target-distance-from-node":5,"source-distance-from-node":5}}]),$=function(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(o.h)(P);Object(c.useEffect)((function(){if(null!==n){var e=n.layout({name:"cola",animate:!0});return e.run(),function(){e.stop()}}}),[n,r]),Object(c.useEffect)((function(){if(null!==n){var e=n.edgehandles({snap:!1,hoverDelay:0});return e.enableDrawMode(),function(){return e.destroy()}}}),[n]);var s=R();return Q(n,"ehcomplete",(function(e,t,c,a){null===n||void 0===n||n.remove(a),s(t.id(),c.id())})),Object(v.jsx)("div",{className:"Graph",children:Object(v.jsx)(Y.a,{className:"Graph__cytoscape",elements:r,stylesheet:Z,cy:function(e){return a(e)}})})},ee=(n(211),function(){var e=Object(i.f)().projectId,t=Object(o.i)(C);return Object(c.useEffect)((function(){return t(e)}),[e,t]),S(),A(),Object(v.jsxs)("div",{className:"MainPage",children:[Object(v.jsxs)("div",{className:"MainPage__left-pane",children:[Object(v.jsx)("h1",{className:"MainPage__title",children:"[next]"}),Object(v.jsx)(V,{})]}),Object(v.jsx)($,{}),Object(v.jsx)(W,{})]})});n(217);var te=function(){return Object(v.jsx)(u.a,{basename:"/next",children:Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",children:Object(v.jsx)(x,{})}),Object(v.jsx)(i.a,{path:"/project/:projectId",children:Object(v.jsx)(ee,{})})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},ce=n(54),ae=n.n(ce),re=n(101),se=n.n(re),oe=n(102),ue=n.n(oe);ae.a.use(se.a),ae.a.use(ue.a);n(227);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(o.a,{children:Object(v.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[228,1,2]]]);
//# sourceMappingURL=main.651227d7.chunk.js.map