(this.webpackJsonpputonghuaproject=this.webpackJsonpputonghuaproject||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(13),n(14),n(1)),c=n(2),l=n(4),u=n(3),d=n(5),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={consonant:e.consonant,vowel:e.vowel,content:e.content},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={marginLeft:"0px",marginRight:"0px"},t={paddingRight:"0px",paddingLeft:"0px"},n=this.state.consonant+this.state.vowel,a="_",r="_",o="_",s="_",c=!0,l=this.state.content.find((function(e){return e.pinyin2===n+"1"}));l&&(a=l.list[0],c=!1);var u=this.state.content.find((function(e){return e.pinyin2===n+"2"}));u&&(r=u.list[0],c=!1);var d=this.state.content.find((function(e){return e.pinyin2===n+"3"}));d&&(o=d.list[0],c=!1);var m=this.state.content.find((function(e){return e.pinyin2===n+"4"}));return m&&(s=m.list[0],c=!1),c&&(a=r=o=s=""),i.a.createElement("div",{className:"col border",style:t},i.a.createElement("div",{className:"row",style:e},i.a.createElement("div",{className:"col mini-box",style:t},a),i.a.createElement("div",{className:"col mini-box",style:t},r)),i.a.createElement("div",{className:"row",style:e},i.a.createElement("div",{className:"col mini-box",style:t},o),i.a.createElement("div",{className:"col mini-box",style:t},s)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{content:e.content}}}]),t}(i.a.Component),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).consonantList=["b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s",""],n.vowelList=["a","o","e","\xea","ai","ei","ao","ou","an","en","ang","eng","er","i","ia","ie","iao","iu","ian","in","iang","ing","u","ua","uo","uai","ui","uan","un","uang","ueng","ong","\xfc","\xfce","\xfcan","\xfcn","iong"],n.listUrl="https://ymlai87416.github.io/res/pinyin_word.json",n.state={errorMessage:"",content:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.readList()}},{key:"readList",value:function(){var e=this.listUrl;fetch(e).then((function(e){if(e.ok)return e.text();throw new Error("Error message.")})).then(function(e){var t=JSON.parse(e);this.setState({content:t})}.bind(this)).catch(function(t){this.setState({content:[],errorMessage:"failed to load "+e+" "+t.message+t.line}),console.log(this.state.errorMessage)}.bind(this))}},{key:"render",value:function(){var e=this,t=this.renderHeader(),n=this.consonantList.map((function(t,n){return e.renderRow(t,n)}));return i.a.createElement("div",{className:"container-fluid",style:{minWidth:"1500px"}},t,n)}},{key:"renderHeader",value:function(){var e={paddingRight:"0px",paddingLeft:"0px"};return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col",style:e},"\xa0"),this.vowelList.map((function(t,n){return i.a.createElement("div",{className:"col",key:n,style:e},t)})))}},{key:"renderRow",value:function(e,t){var n=this,a=t*this.vowelList.length;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col border",style:{paddingRight:"0px",paddingLeft:"0px"}},i.a.createElement("b",null,e)),this.vowelList.map((function(t,i){return n.renderGrid(e,t,a+i)})))}},{key:"renderGrid",value:function(e,t,n){return i.a.createElement(m,{consonant:e,vowel:t,key:n,content:this.state.content})}}]),t}(i.a.Component);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3ebd462b.chunk.js.map