(function(t){function n(n){for(var e,o,r=n[0],c=n[1],l=n[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);d&&d(n);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],e=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(e=!1)}e&&(s.splice(n--,1),t=o(o.s=i[0]))}return t}var e={},a={app:0},s=[];function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/hkcovidmap/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";i("85ec")},"36ea":function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("Slide")],1)},s=[],o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"slide"},[0==t.locIdx?i("HongKong",{attrs:{path:t.path}}):i("District",{attrs:{dIndex:t.locIdx,path:t.path}})],1)},r=[],c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"hk"},[i("table",{staticClass:"display"},[i("tr",[i("td",{staticClass:"main",attrs:{colspan:"2"}},[i("img",{key:t.image.id,staticClass:"imageMain",attrs:{src:t.image.src,alt:"image.alt"}}),i("img",{key:t.imageNext.id,staticClass:"imageMainHidden",attrs:{src:t.imageNext.src,alt:"image.alt"}})]),i("td",{staticClass:"ranking",attrs:{rowspan:"2"}},[i("table",[i("tbody",[t._m(0),t._l(t.rank,(function(n){var e=n[0],a=n[1];return[i("tr",{key:e},[i("td",[t._v(" "+t._s(t.translateZh[e])+" ")]),i("td",[t._v(" "+t._s(a.today||0)+" ")]),i("td",[t._v(" "+t._s(a.day7||0)+" ")]),i("td",[t._v(" "+t._s(a.day14||0)+" ")]),i("td",[t._v(" 0 ")])])]}))],2)])])]),i("tr",[t._m(1),i("td",{staticClass:"summary2"},[i("table",[i("tr",[i("td",[t._v("出院")]),i("td",[t._v(t._s(t.hcase.discharged_count))])]),i("tr",[i("td",[t._v("死亡")]),i("td",[t._v(t._s(t.hcase.deceased_count))])]),i("tr",[i("td",[t._v("住院")]),i("td",[t._v(t._s(t.hcase.hospitalize_count))])])])])])])])},l=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("tr",[i("th",[t._v("地區")]),i("th",[t._v("今日")]),i("th",[t._v("7日")]),i("th",[t._v("14日")]),i("th",[t._v("總計")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("td",{staticClass:"summary1"},[i("img",{attrs:{src:"info/hospital_case.png"}})])}],d=(i("d81d"),i("b64b"),i("d3b7"),{name:"HongKong",props:{path:String},mounted:function(){this.path="info",this.read_rank(),this.read_hospital_case(),this.switchImage()},data:function(){return{timer:"",rank:"",hcase:"",index:0,image:null,imageNext:null,images:[{id:1,src:"info/cumulative_case.png",alt:"cumulative",displayTime:2e3},{id:2,src:"info/day_case.png",alt:"day case",displayTime:2e3},{id:3,src:"info/2020-12-20-animation.png",alt:"danger zone",displayTime:500},{id:4,src:"info/2020-12-21-animation.png",alt:"danger zone",displayTime:500},{id:5,src:"info/2020-12-22-animation.png",alt:"danger zone",displayTime:500},{id:6,src:"info/2020-12-23-animation.png",alt:"danger zone",displayTime:500},{id:7,src:"info/2020-12-24-animation.png",alt:"danger zone",displayTime:500},{id:8,src:"info/2020-12-25-animation.png",alt:"danger zone",displayTime:500},{id:9,src:"info/2020-12-26-animation.png",alt:"danger zone",displayTime:2e3}],translateZh:{"Hong Kong":11,"Central & Western":"中西區",Eastern:"東區",Southern:"南區","Wan Chai":"灣仔區","Kowloon City":"九龍城區","Kwun Tong":"觀塘區","Sham Shui Po":"深水埗區","Wong Tai Sin":"黃大仙區","Yau Tsim Mong":"油尖旺區",Islands:"離島區","Kwai Tsing":"葵青區",North:"北區","Sai Kung":"西貢區","Sha Tin":"沙田區","Tai Po":"大埔區","Tsuen Wan":"荃灣區","Tuen Mun":"屯門區","Yuen Long":"元朗區"}}},methods:{read_rank:function(){var t=this,n=this.path+"\\rank_concat.json";fetch(n).then((function(t){return t.json()})).then((function(n){delete n["Uncertain"];var i=Object.keys(n).map((function(t){return[t,n[t]]}));i.sort((function(t,n){return n[1].today-t[1].today})),t.rank=i}))},read_hospital_case:function(){var t=this,n=this.path+"\\case_summary.json";fetch(n).then((function(t){return t.json()})).then((function(n){return t.hcase=n}))},switchImage:function(){this.image=this.images[this.index];var t=this.images[this.index].displayTime;this.index=(this.index+1)%this.images.length,this.imageNext=this.images[this.index],this.timer=setTimeout(this.switchImage,t)},beforeDestroy:function(){clearTimeout(this.timer)}}}),u=d,m=(i("a0a2"),i("2877")),g=Object(m["a"])(u,c,l,!1,null,"bb1e5682",null),h=g.exports,p=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"district"},[i("h1",{staticClass:"title"},[t._v(t._s(t.locLoopZh[t.dIndex]))]),i("img",{key:t.image.id,staticClass:"imageMain",attrs:{src:t.image.src,alt:"image.alt"}}),i("img",{key:t.imageNext.id,staticClass:"imageMainHidden",attrs:{src:t.imageNext.src,alt:"imageNext.alt"}})])},f=[],T=(i("a9e3"),i("ac1f"),i("5319"),{name:"District",props:{dIndex:Number,path:String},data:function(){return{index:0,timer:"",locLoop:["Hong Kong","Central and Western","Eastern","Southern","Wan Chai","Kowloon City","Kwun Tong","Sham Shui Po","Wong Tai Sin","Yau Tsim Mong","Islands","Kwai Tsing","North","Sai Kung","Sha Tin","Tai Po","Tsuen Wan","Tuen Mun","Yuen Long"],locLoopZh:["香港","中西區","東區","南區","灣仔區","九龍城區","觀塘區","深水埗區","黃大仙區","油尖旺區","離島區","葵青區","北區","西貢區","沙田區","大埔區","荃灣區","屯門區","元朗區"],image:null,imageNext:null,images:[{id:1,src:"info/%s/cumulative_case.png",srcT:"info/%s/cumulative_case.png",alt:"cumulative",displayTime:2e3},{id:2,src:"info/%s/2020-12-20-animation.png",srcT:"info/%s/2020-12-20-animation.png",alt:"danger zone",displayTime:500},{id:3,src:"info/%s/2020-12-21-animation.png",srcT:"info/%s/2020-12-21-animation.png",alt:"danger zone",displayTime:500},{id:4,src:"info/%s/2020-12-22-animation.png",srcT:"info/%s/2020-12-22-animation.png",alt:"danger zone",displayTime:500},{id:5,src:"info/%s/2020-12-23-animation.png",srcT:"info/%s/2020-12-23-animation.png",alt:"danger zone",displayTime:500},{id:6,src:"info/%s/2020-12-24-animation.png",srcT:"info/%s/2020-12-24-animation.png",alt:"danger zone",displayTime:500},{id:7,src:"info/%s/2020-12-25-animation.png",srcT:"info/%s/2020-12-25-animation.png",alt:"danger zone",displayTime:500},{id:8,src:"info/%s/2020-12-26-animation.png",srcT:"info/%s/2020-12-26-animation.png",alt:"danger zone",displayTime:2e3}],imageCase:"info/%s/day_case.png",imageDanger:"info/%s/zone14d.png",imageCaseT:"info/%s/day_case.png",imageDangerT:"info/%s/zone14d.png"}},watch:{dIndex:function(t,n){t!=n&&(console.log("watcher..."),this.resetComponent(t))}},created:function(){this.resetComponent(this.dIndex)},methods:{resetComponent:function(t){""!=this.timer&&clearTimeout(this.timer),console.log("shit"+t);var n=this.locLoop[t];console.log("shit"+t+" "+n),this.imageCase=this.imageCaseT.replace("%s",n),this.imageDanger=this.imageDangerT.replace("%s",n);for(var i=0;i<this.images.length;++i){var e=this.images[i];e.src=e.srcT.replace("%s",n)}this.switchImage()},switchImage:function(){this.image=this.images[this.index];var t=this.images[this.index].displayTime;this.index=(this.index+1)%this.images.length,this.imageNext=this.images[this.index],this.timer=setTimeout(this.switchImage,t)},beforeDestroy:function(){clearTimeout(this.timer)}}}),y=T,_=(i("f89a"),Object(m["a"])(y,p,f,!1,null,"c4b24b20",null)),v=_.exports,x={name:"Slide",props:{path:String},data:function(){return{timer:"",locIdx:-1,locLoop:["Hong Kong","Central and Western","Eastern","Southern","Wan Chai","Kowloon City","Kwun Tong","Sham Shui Po","Wong Tai Sin","Yau Tsim Mong","Islands","Kwai Tsing","North","Sai Kung","Sha Tin","Tai Po","Tsuen Wan","Tuen Mun","Yuen Long"],hongKongDelay:9e3,districtDelay:7e3}},components:{HongKong:h,District:v},mounted:function(){this.path="C:\\GitProjects\\hkcovidmap\\out\\2020-12-26",this.startAnim()},methods:{startAnim:function(){console.log("shit"+this.locIdx),this.locIdx=(this.locIdx+1)%19,0==this.locIdx?this.timer=setTimeout(this.startAnim,this.hongKongDelay):this.timer=setTimeout(this.startAnim,this.districtDelay)}}},b=x,C=(i("7747"),Object(m["a"])(b,o,r,!1,null,"768202db",null)),w=C.exports,S={name:"App",components:{Slide:w}},I=S,K=(i("034f"),Object(m["a"])(I,a,s,!1,null,null,null)),j=K.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(j)}}).$mount("#app")},7747:function(t,n,i){"use strict";i("daaa")},"85ec":function(t,n,i){},a0a2:function(t,n,i){"use strict";i("36ea")},a5dc:function(t,n,i){},daaa:function(t,n,i){},f89a:function(t,n,i){"use strict";i("a5dc")}});
//# sourceMappingURL=app.34961f85.js.map