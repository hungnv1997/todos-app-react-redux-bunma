(this["webpackJsonparr-map-key"]=this["webpackJsonparr-map-key"]||[]).push([[0],{22:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),r=o(4),s=o.n(r),i=o(3),a=o(6),d=o(25),l=o(1);var u=function(e){var t=Object(n.useState)(""),o=Object(a.a)(t,2),c=o[0],r=o[1],s=Object(d.a)();return Object(l.jsxs)("div",{className:"block header",children:[Object(l.jsx)("h1",{className:"is-size-1 has-text-centered block",children:"Todos App"}),Object(l.jsxs)("div",{className:" block",children:[Object(l.jsx)("input",{className:"input block header__input",placeholder:"...Add your todo",type:"text",id:"add-input",onChange:function(e){console.log(e.target.value),r(e.target.value)},maxLength:"20"}),Object(l.jsx)("button",{className:"button is-primary  is-fullwidth",onClick:function(t){t.preventDefault(),function(t,o){e.addTodo(t,o)}(c,s),document.getElementById("add-input").value="",r("")},children:"Add"})]})]})};var j=function(e){var t=e.todo,o=Object(n.useState)(!1),c=Object(a.a)(o,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){s(t.isMarked)}),[t]),Object(l.jsxs)("div",{className:"block todos__todo is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center ",children:[Object(l.jsxs)("div",{className:"is-flex is-flex-direction-row is-justify-content-center is-align-items-center",children:[Object(l.jsx)("input",{className:"todos__todo--checkbox",type:"checkbox",onChange:function(){var o;o=t.id,e.markTodo(o)}}),Object(l.jsx)("p",{className:"is-size-5 block",style:r?{textDecoration:"line-through"}:{textDecoration:"none"},children:t.text})]}),Object(l.jsx)("button",{className:"button is-danger is-small",onClick:function(){var o;console.log("todo.id"),o=t.id,e.deleteTodo(o)},children:"DELETE"})]})};var O=function(){var e=Object(i.c)((function(e){return e.todos}));console.log("todos redux",e);var t=Object(i.b)(),o=function(e){return console.log("connect addTodo from redux"),t(function(e){return{type:"MARK_TODO",id:e}}(e))},n=function(e){return console.log("connect addTodo from redux"),t(function(e){return{type:"DELETE_TODO",id:e}}(e))};return Object(l.jsxs)("div",{className:"todo-app box container  is-widescreen",children:[Object(l.jsx)(u,{addTodo:function(e,o){return console.log("connect addTodo from redux"),t(function(e,t){return{type:"ADD_TODO",text:e,id:t}}(e,o))}}),e.length>0&&e.map((function(e){return Object(l.jsx)(j,{todo:e,markTodo:o,deleteTodo:n},e.id)}))]})};o(22);var b,f=function(){return Object(l.jsx)("div",{className:"App container is-max-960",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(l.jsx)(O,{className:"block"})})},x=o(7),m=o(12),p=o(11),h=localStorage.getItem("todos");b=h?JSON.parse(h):[];var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var o={id:t.id,text:t.text,isMarked:!1};console.log("newTodo",o);var n=[].concat(Object(p.a)(e),[o]);return localStorage.setItem("todos",JSON.stringify(n)),[].concat(Object(p.a)(e),[o]);case"DELETE_TODO":var c=e.filter((function(e){return e.id!==t.id}));return localStorage.setItem("todos",c),c;case"MARK_TODO":var r=e.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{isMarked:!e.isMarked}):e}));return localStorage.setItem("todos",r),r;default:return e}},g=Object(x.a)({todos:v}),T=Object(x.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{store:T,children:Object(l.jsx)(f,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.18d97bfa.chunk.js.map