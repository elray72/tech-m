(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},53:function(e,t,n){e.exports=n(88)},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),s=n(5),i=n(16),u=n(8),l=n(11),d=n(41),f=n(44),p=n(45),v=n.n(p),m=n(15),b=n.n(m),E=n(20),g=n(46),_=n.n(g),h=function(){var e=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://pb-api.herokuapp.com/bars");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(e){return{type:"RECEIVE_PROGRESS_BARS_CONFIG",config:e,receivedAt:Date.now()}},R=function(e){return{type:"SET_SELECTED_BAR",selected:e}},w=function(e){return{type:"UPDATE_PROGRESS_BAR",selected:e,valueToAdd:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}},j={bars:[],config:void 0,isFetching:!0,selected:void 0,valueToAdd:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_PROGRESS_BARS_CONFIG":return Object.assign({},e,{isFetching:!0});case"RECEIVE_PROGRESS_BARS_CONFIG":return Object.assign({},e,{isFetching:!1,config:t.config,lastUpdated:t.receivedAt});case"SET_SELECTED_BAR":return Object.assign({},e,{selected:t.selected});case"UPDATE_PROGRESS_BAR":var n=t.selected,a=t.valueToAdd,r=e.bars,c=r.find(function(e){return e.id===n});if(console.log("dog",e),c){var o=c.value+a;c.value=o<0?0:o}else r.push({id:n,value:a>0?a:0});return Object.assign({},e,{selected:n,valueToAdd:a,bars:r});default:return e}},y=function(e,t){return Object(l.e)(function(e){return Object(l.c)({router:Object(i.b)(e),progressBars:S})}(t),e,Object(l.d)(Object(l.a)(Object(d.a)(t),f.a,v.a)))},A=n(48),T=n(21),N=(n(85),n(86),n(27)),B=n(28),C=n(13),F=n.n(C),k=function(e){var t=F()(e.className,"page");return r.a.createElement("div",{className:t},e.children)},x=n(14),D=(n(23),Object(s.c)(function(e,t){var n=e.progressBars,a=n.selected,r=n.bars,c=n.valueToAdd,o=n.config.limit,s=r.find(function(e){return e.id===t.id}),i=(s||t).value,u=void 0===i?0:i;return Object(x.a)({selected:a,value:u,valueToAdd:c,limit:o},e)})(function(e){var t=e.id,n=e.value,r=void 0===n?0:n,c=e.valueToAdd,o=void 0===c?0:c,s=e.limit,i=Math.round(r/s*100),u=a.useRef(null);a.useEffect(function(){e.dispatch(w(t,e.value))},[]),a.useEffect(function(){l(r)},[e.value]);var l=function(e){var t=u.current;if(t){var n=i/100;t.style.transform="scaleX(".concat(n,")"),t.style.transitionDuration="".concat(Math.abs(o/100),"s")}},d=F()("progress__bar",{"progress__bar--active":e.id===e.selected,"progress__bar--over":r>s});return a.createElement("div",{id:t,className:d,onClick:function(){e.dispatch(R(e.id))}},a.createElement("span",{className:"progress__bar-outer"},a.createElement("span",{className:"progress__bar-inner",ref:u}),a.createElement("span",{className:"progress__bar-label"},i,"%")),a.createElement("span",{className:"progress__bar-legend"},r," / ",s))})),G=(n(87),function(e){var t=r.a.useRef(null),n=F()(e.className,"button");return r.a.createElement("button",{className:n,ref:t,onClick:function(n){!function(e){var n=t.current;if(n){var a=document.createElement("div");a.classList.add("button__ripple"),a.style.top="".concat(e.clientY-n.offsetTop+window.pageYOffset,"px"),a.style.left="".concat(e.clientX-n.offsetLeft+window.pageXOffset,"px"),n.appendChild(a),setTimeout(function(){a.remove()},1e4)}}(n),e.onClick&&e.onClick()},value:e.value},e.value)}),P=Object(s.c)(function(e,t){var n,a=e.progressBars,r=a.selected,c=a.config,o=[];return c&&(n=c.bars,o=c.buttons.sort(function(e,t){return e-t})),Object(x.a)({selected:r,barData:n,buttons:o},t)})(function(e){var t=e.buttons,n=r.a.Children.map(e.bars,function(e){var t=e.props,n=t.id,a=t.value;return{id:n,value:void 0===a?0:a}}).find(function(t){return t.id===e.selected});return r.a.createElement("div",{className:"progress__controls"},(t||[]).map(function(t){return r.a.createElement(G,{className:"progress__button",value:t,onClick:function(){return a=t,void(n&&e.dispatch(w(e.selected,a)));var a},key:"progress_button__".concat(t)})}))}),I=Object(s.c)(function(e,t){var n=e.progressBars,a=n.config,r=n.lastUpdated,c=n.isFetching,o=[];return a&&(o=a.bars),Object(x.a)({config:a,barData:o,lastUpdated:r,isFetching:c},t)})(function(e){e.isFetching;var t=(e.barData||[]).map(function(e,t){return r.a.createElement(D,{id:"bar__".concat(t),key:"bar__".concat(t),value:e})});return r.a.useEffect(function(){e.dispatch(function(){var e=Object(E.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_PROGRESS_BARS_CONFIG"}),e.next=3,h();case 3:return n=e.sent,e.abrupt("return",t(O(n)));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[]),r.a.useEffect(function(){if(t&&t[0]){var n=t[0];e.dispatch(R(n.props.id))}},[t]),r.a.createElement("div",{className:"progress"},t,r.a.createElement(P,{bars:t}))});function U(){var e=Object(N.a)(["\n\tfont-size: ",";\n\talign-self: flex-start;\n"]);return U=function(){return e},e}function L(){var e=Object(N.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\tmax-width: ",";\n\tmargin: 0 auto;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]);return L=function(){return e},e}var X,J=B.a.div(L(),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return 0===e?0:(0===t&&(t=16),"".concat(parseFloat((e/t).toFixed(3)),"em"))}(480)),M=B.a.h1(U(),0===(X=24)?0:"".concat(parseFloat((X/16).toFixed(3)),"rem")),Q=function(){return a.createElement(k,null,a.createElement(J,null,a.createElement(M,null,"Progress bar"),a.createElement(I,null,a.createElement(D,{id:"bar_1"}),a.createElement(D,{id:"bar_2"}),a.createElement(D,{id:"bar_3"}))))},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.Helmet,{titleTemplate:"Ray Ranola - %s",defaultTitle:"Ray Ranola - Progress Bar Demo"},r.a.createElement("meta",{name:"description",content:""})),r.a.createElement("main",{className:"main"},r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=Object(u.a)(),Y=y({},W);o.a.render(r.a.createElement(s.a,{store:Y},r.a.createElement(i.a,{history:W},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.07e21e31.chunk.js.map