(this["webpackJsonpreact-captp-experiment"]=this["webpackJsonpreact-captp-experiment"]||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var r=n(12),a=n.n(r),c=n(56),o=n.n(c),i=(n(65),n(2)),u=n(3),s=n.n(u),f=n(5),p=(n(102),n(104),Math.pow);Math.pow=function(t,e){return"bigint"===typeof t&&"bigint"===typeof e?Math.pow(t,e):p(t,e)},lockdown({__allowUnsafeMonkeyPatching__:"unsafe",errorTaming:"unsafe",overrideTaming:"severe",consoleTaming:"unsafe"});var l=n(38),h=n(37);function b(t,e){var n,r,a,c=new h.Duplex;c._read=d;var o=Object(l.b)(t,(function(t){c.push(JSON.stringify(t))}),e);return n=o.dispatch,r=o.getBootstrap,a=o.abort,c._write=function(t,e,r){try{n(JSON.parse(t))}catch(a){return r(a)}r()},c._writev=function(t,e){try{t.forEach((function(t){n(JSON.parse(t))}))}catch(r){return e(r)}e()},c._final=function(t){a(),t()},{getBootstrap:r,abort:a,E:l.a,captpStream:c}}function d(){}n(80);var v=n(8);function j(t){var e=Object(r.useState)("Loading name..."),n=Object(i.a)(e,2),a=n[0],c=n[1],o=Object(r.useState)(a),u=Object(i.a)(o,2),s=u[0],f=u[1],p=t.E,l=t.bootstrap;function h(t){t.then((function(t){var e=Object(i.a)(t,2),n=e[0],r=e[1];c(n),h(r)}))}return p(l).getLatestName().then((function(t){var e=Object(i.a)(t,2),n=e[0],r=e[1];console.log("name returned"),c(n),h(r)})),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:a}),Object(v.jsx)("input",{type:"text",placeholder:a,onChange:function(t){f(t.target.value)}}),Object(v.jsx)("button",{onClick:function(){p(l).setName(s).then((function(t){console.log("name updated successfully!")})).catch((function(t){console.error("name update failed: ".concat(t))}))},children:"Change"})]})}var O,m,g=n(82),w=n(88),x=g(),S=x.clientSide,y=x.serverSide,k="Anon",_=b("server",harden({getName:function(){var t=Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("name requested"),t.abrupt("return",new Promise((function(t){setTimeout((function(){return t(k)}),500)})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getLatestName:function(){var t=Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O||(m=new Promise((function(t){O=t}))),t.abrupt("return",[k,m]);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),setName:function(){var t=Object(f.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k=e,O&&(n=O,m=new Promise((function(t){O=t})),n([e,m]));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})).captpStream;w(_,y,_);var N=b("client",harden({})),E=N.getBootstrap,M=N.E,T=N.captpStream;w(T,S,T);var C=function(){var t=Object(r.useState)(void 0),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(void 0),o=Object(i.a)(c,2),u=o[0],s=o[1];E().then((function(t){a(t)})).catch((function(t){s(t)}));var f=u||n?Object(v.jsx)(j,{bootstrap:n,E:M}):"Loading";return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"CapTP React Test"}),f]})};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root"))},65:function(t,e,n){},69:function(t,e){},71:function(t,e){},80:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e),function(t){var e=n(57),r=n(58),a=n(60),c=n(59),o=n(37).Duplex,i=n(84),u=Symbol("Callback"),s=Symbol("Other"),f=function(t){Object(a.a)(o,t);var n=Object(c.a)(o);function o(t){var r;return Object(e.a)(this,o),(r=n.call(this,t))[u]=null,r[s]=null,r}return Object(r.a)(o,[{key:"_read",value:function(){var t=this[u];t&&(this[u]=null,t())}},{key:"_write",value:function(t,e,n){i.notStrictEqual(this[s],null),i.strictEqual(this[s][u],null),this[s][u]=n,this[s].push(t)}},{key:"_final",value:function(t){this[s].on("end",t),this[s].push(null)}}]),o}(o);t.exports=function(){var t=new f({objectMode:!0}),e=new f({objectMode:!0});return t[s]=e,e[s]=t,{clientSide:t,serverSide:e}}}.call(this,n(83)(t))},91:function(t,e){},94:function(t,e){},96:function(t,e){}},[[103,1,2]]]);
//# sourceMappingURL=main.5e8a0362.chunk.js.map