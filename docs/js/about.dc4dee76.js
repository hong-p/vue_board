(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5d6d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("board-list")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"all"},[n("h1",[t._v(t._s(t.subject))]),n("ol",{attrs:{id:"content-list"}},t._l(t.contents,(function(e){return n("li",{key:e._id},[t._v(" "+t._s(e.content)+" ")])})),0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("button",{on:{click:t.btnClick}},[t._v("등록")])])])},o=[],c=n("1da1"),i=(n("d3b7"),n("96cf"),{data:function(){return{contents:[],msg:"",subject:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.subject=t.$route.query.subject,t.loadContents();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){setInterval(this.loadContents,1e4)},methods:{loadContents:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch("https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board?subject="+t.subject,n);case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,t.contents=a,console.log("loadContents()");case 9:case"end":return e.stop()}}),e)})))()},btnClick:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:t.subject,content:t.msg})},e.next=3,fetch("https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board",n);case 3:t.msg="",t.loadContents();case 5:case"end":return e.stop()}}),e)})))()}}}),u=i,l=(n("ab50"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,"77e10b20",null),p=d.exports,m={components:{BoardList:p}},b=m,f=Object(l["a"])(b,r,a,!1,null,"64b4f4d1",null);e["default"]=f.exports},ab50:function(t,e,n){"use strict";n("e19a")},e19a:function(t,e,n){}}]);
//# sourceMappingURL=about.dc4dee76.js.map