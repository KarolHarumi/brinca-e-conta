(function(e){function t(t){for(var r,a,d=t[0],i=t[1],u=t[2],s=0,l=[];s<d.length;s++)a=d[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var d=n[a];0!==o[d]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function d(e){return i.p+"js/"+({welcome:"welcome"}[e]||e)+"."+{"chunk-02ffffaa":"f9ac2574","chunk-1238a5c2":"49f2cfd3","chunk-2d0d6d35":"c0a2e5d0","chunk-7f1748dc":"5129108b",welcome:"a70de3b7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02ffffaa":1,"chunk-1238a5c2":1,"chunk-7f1748dc":1,welcome:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({welcome:"welcome"}[e]||e)+"."+{"chunk-02ffffaa":"cf9283fa","chunk-1238a5c2":"0a719ddb","chunk-2d0d6d35":"31d6cfe0","chunk-7f1748dc":"76686bc5",welcome:"0b457a6c"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),d=0;d<c.length;d++){var u=c[d],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){u=l[d],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=d(e);var l=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={components:{}},d=c,i=(n("034f"),n("2877")),u=Object(i["a"])(d,a,o,!1,null,null,null),s=u.exports,l=n("a18c"),m=n("43f9"),f=n.n(m);n("51de"),n("e094");r["default"].config.productionTip=!1,r["default"].use(f.a),new r["default"]({router:l["a"],render:function(e){return e(s)}}).$mount("#app")},"5ced":function(e,t,n){},"5fa3":function(e,t,n){e.exports=n.p+"img/cover_mock.1186e1b6.png"},"85ec":function(e,t,n){},"96e9":function(e,t,n){"use strict";var r=n("e1fb"),a=n.n(r);a.a},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Estante Encantada"}}),r("div",{staticClass:"cards-container"},[r("md-card",[r("md-card-header",[r("md-card-header-text",[r("div",{staticClass:"md-title"},[e._v("Lenda da Vitória Régia")]),r("div",{staticClass:"md-subhead"},[e._v("Nome do Autor")])]),r("md-card-media",{attrs:{"md-big":""}},[r("img",{attrs:{src:n("5fa3"),alt:"Capa"}})])],1),r("md-card-actions",[r("router-link",{staticClass:"md-dense md-raised md-primary",attrs:{to:"/story/123"}},[r("md-button",[e._v("Ler")])],1),r("md-button",[e._v("Favoritar")])],1)],1),r("md-card",[r("md-card-header",[r("md-card-header-text",[r("div",{staticClass:"md-title"},[e._v("Lenda da Vitória Régia")]),r("div",{staticClass:"md-subhead"},[e._v("Nome do Autor")])]),r("md-card-media",{attrs:{"md-big":""}},[r("img",{attrs:{src:n("5fa3"),alt:"Capa"}})])],1),r("md-card-actions",[r("router-link",{staticClass:"md-dense md-raised md-primary",attrs:{to:"/story/123"}},[r("md-button",[e._v("Ler")])],1),r("md-button",[e._v("Favoritar")])],1)],1),r("md-card",[r("md-card-header",[r("md-card-header-text",[r("div",{staticClass:"md-title"},[e._v("Lenda da Vitória Régia")]),r("div",{staticClass:"md-subhead"},[e._v("Nome do Autor")])]),r("md-card-media",{attrs:{"md-big":""}},[r("img",{attrs:{src:n("5fa3"),alt:"Capa"}})])],1),r("md-card-actions",[r("router-link",{staticClass:"md-dense md-raised md-primary",attrs:{to:"/story/123"}},[r("md-button",[e._v("Ler")])],1),r("md-button",[e._v("Favoritar")])],1)],1)],1)],1)},c=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])},i=[],u={name:"HelloWorld",props:{msg:String}},s=u,l=(n("96e9"),n("2877")),m=Object(l["a"])(s,d,i,!1,null,"db414e2a",null),f=m.exports,p={name:"Home",components:{HelloWorld:f}},h=p,v=(n("cccb"),Object(l["a"])(h,o,c,!1,null,null,null)),b=v.exports;r["default"].use(a["a"]);var g=[{path:"/home",name:"Home",component:b},{path:"/",name:"Splash",component:function(){return n.e("chunk-1238a5c2").then(n.bind(null,"8f75"))}},{path:"/onboarding",name:"Onboarding",component:function(){return n.e("chunk-7f1748dc").then(n.bind(null,"4677"))}},{path:"/welcome",name:"Welcome",component:function(){return n.e("welcome").then(n.bind(null,"eec5"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"/story/123",name:"Story",component:function(){return n.e("chunk-02ffffaa").then(n.bind(null,"095a"))}}],y=new a["a"]({mode:"history",base:"/",routes:g});t["a"]=y},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},e1fb:function(e,t,n){}});
//# sourceMappingURL=app.2bf804d3.js.map