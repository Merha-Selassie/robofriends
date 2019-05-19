(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},38:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(19),i=n.n(a),c=n(12),s=n(10),l=n(23),u=n(24),d=(n(38),n(5)),h=n(6),g=n(8),b=n(7),f=n(9),p=n(44),E=n(46),m=n(45),v=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Error, this path does not exist"))},O=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},w=function(e){var t=e.robots;return console.log("CardList"),o.a.createElement("div",null,t.map(function(e,n){return o.a.createElement(O,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),R=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},j=function(e){e.searchField;var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t}))},y=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?o.a.createElement("h1",{className:"tc fl w-100 pv7"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(j,{searchChange:n}),o.a.createElement(R,null,o.a.createElement(S,null,o.a.createElement(w,{robots:i}))))}}]),t}(r.Component),C=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y),_=(n(39),function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(E.a,null,o.a.createElement(m.a,{path:"/",component:C,exact:!0}),o.a.createElement(m.a,{component:v})))}}]),t}(r.Component)),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N={searchField:""},P={isPending:!1,robots:[],error:""},U={isPending:!1,robot:"",error:""},B=(n(41),Object(l.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},requestRobot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robot:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),L=Object(s.d)(B,Object(s.a)(u.a));i.a.render(o.a.createElement(c.a,{store:L},o.a.createElement(_,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");T?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.8381d62f.chunk.js.map