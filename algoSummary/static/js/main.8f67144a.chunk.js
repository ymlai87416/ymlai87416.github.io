(this["webpackJsonpalgo-summary-project"]=this["webpackJsonpalgo-summary-project"]||[]).push([[0],{20:function(e,t,c){e.exports={parent:"QuestionList_parent__2aVJ-"}},25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(18),s=c.n(a),o=(c(25),c(4)),i=c(3),l=(c.p,c(26),c(19)),u=c.n(l),j=c(7),h=c.n(j),p=c(0);console.log(h.a.parent);var d=function(){var e=Object(n.useContext)(g),t=Object(n.useContext)(_);return Object(p.jsx)("div",{className:h.a.parent,children:Object(p.jsx)("input",{className:h.a.search,type:"search",placeholder:"Search keyword here",onChange:function(c){var n=e.state.content.filter((function(e){return function(e,t){for(var c=(e=e.toLowerCase().trim()).split(" "),n=[],r=0;r<c.length;++r)n[r]=!1;for(var a=0;a<t.length;a++)for(var s=0;s<c.length;++s)t[a].trim().toLowerCase().includes(c[s])&&(n[s]=!0);return n.every((function(e){return e}))}(c.target.value,e.topics)}));console.log(n),t.dispatch({type:"search_completed",value:n})}})})},b=c(9),f=c.n(b);var O=function(){var e=Object(n.useContext)(_),t=new Map;return e.state.result.forEach((function(e){for(var c=0;c<e.topics.length;c++){var n=e.topics[c];t.set(n,(t.get(n)||0)+1)}})),Object(p.jsx)("div",{className:f.a.parent,children:Array.from(t.entries()).sort().map((function(e,t){var c,n=Object(o.a)(e,2),r=n[0],a=n[1];return Object(p.jsxs)("div",{className:f.a.topic,children:[(c=r,c.replaceAll("_"," "))," - ",a]},t)}))})},v=c(20),x=c.n(v);var m=function(){var e=Object(n.useContext)(_);return Object(p.jsx)("div",{className:x.a.parent,children:Object(p.jsx)("ul",{children:e.state.result.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.path,children:(c=e.path,c.split("/").pop())})},t);var c}))})})},g=r.a.createContext(),_=r.a.createContext(),y=function(e,t){switch(t.type){case"fetch_success":return Object(i.a)(Object(i.a)({},e),{},{load:!0,content:t.value});case"fetch_error":return Object(i.a)(Object(i.a)({},e),{},{load:!0,content:null,error:t.value});default:return e}},C={load:!1,content:[],error:""},N=function(e,t){return"search_completed"===t.type?Object(i.a)(Object(i.a)({},e),{},{result:t.value}):e},w={result:[]};var S=function(){var e=Object(n.useReducer)(y,C),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useReducer)(N,w),s=Object(o.a)(a,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){u.a.get("../index.json").then((function(e){r({type:"fetch_success",value:e.data})})).catch((function(e){console.log(e),r({type:"fetch_error",value:e})}))})),Object(p.jsx)(g.Provider,{value:{state:c,dispatch:r},children:Object(p.jsx)(_.Provider,{value:{state:i,dispatch:l},children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{children:Object(p.jsx)(d,{})}),Object(p.jsxs)("div",{className:"parent",children:[Object(p.jsx)("div",{className:"question",children:Object(p.jsx)(m,{})}),Object(p.jsx)("div",{className:"topic",children:Object(p.jsx)(O,{})})]}),Object(p.jsxs)("div",{className:"links",children:[Object(p.jsx)("h3",{children:" Userful links: "}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.mindmeister.com/2021534788/algorithm",children:"Mind map"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://uhunt.onlinejudge.org/",children:"UVaHunt"})})]})]})]})})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(46);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),k()},7:function(e,t,c){e.exports={parent:"Search_parent__7U-iS",search:"Search_search__24RFV"}},9:function(e,t,c){e.exports={parent:"TopicNote_parent__3WG-J",topic:"TopicNote_topic__YYfw1"}}},[[47,1,2]]]);
//# sourceMappingURL=main.8f67144a.chunk.js.map