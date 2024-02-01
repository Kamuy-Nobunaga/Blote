(function(){"use strict";var e={2239:function(e,n,t){t.d(n,{VJ:function(){return s},db:function(){return u},iJ:function(){return c}});var o=t(7795),r=t(4287);const a={apiKey:"AIzaSyCAbwe9VoZdslCTgr9DnlKHHEGgPiq59XY",authDomain:"blotes-3b289.firebaseapp.com",projectId:"blotes-3b289",storageBucket:"blotes-3b289.appspot.com",messagingSenderId:"380541885361",appId:"1:380541885361:web:a075f8f24ecb285dc97b90"},i=(0,o.ZF)(a),u=(0,r.ad)(i),s=(0,r.hJ)(u,"blogs"),c=(0,r.hJ)(u,"notes")},5405:function(e,n,t){var o=t(9242),r=t(3396),a=(t(560),t(3245)),i=t(4690),u=t(2483);const s={class:"navbar"};var c={__name:"NavbarElement",setup(e){const n=(0,u.tv)(),t=(0,i.v0)(),o=(0,a.N)(),c=()=>{(0,i.w7)(t).then((()=>{console.log("the user signed out"),o.isLogin=!1,n.push({name:"home"})})).catch((e=>{console.log(e.message)}))};return(e,n)=>{const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",s,[(0,r.Wm)(t,{to:"/blotes"},{default:(0,r.w5)((()=>[(0,r.Uk)("Blotes")])),_:1}),(0,r._)("button",{onClick:c},"Logout")])}}},l=t(89);const d=(0,l.Z)(c,[["__scopeId","data-v-486b22f3"]]);var f=d,p={__name:"App",setup(e){return(e,n)=>{const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(f),(0,r.Wm)(t)],64)}}};const m=p;var g=m,b=t(4870);const h=e=>((0,r.dD)("data-v-cc51379a"),e=e(),(0,r.Cn)(),e),v={class:"login"},y=h((()=>(0,r._)("label",{for:"email",class:"email"},"Email",-1))),w=h((()=>(0,r._)("label",{for:"password",class:"password"},"Password",-1))),_=h((()=>(0,r._)("button",null,"Log in",-1)));var k={__name:"LogIn",setup(e){const n=(0,u.tv)(),t=(0,a.N)(),s=(0,b.qj)({email:"",password:""}),c=(0,i.v0)(),l=()=>{(0,i.e5)(c,s.email,s.password).then((e=>{console.log("user logged in:",e.user),t.isLogin=!0,n.push({name:"blotes"})})).catch((e=>{console.log(e.message)}))};return(e,n)=>{const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("form",{onSubmit:(0,o.iM)(l,["prevent"])},[y,(0,r.wy)((0,r._)("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":n[0]||(n[0]=e=>s.email=e)},null,512),[[o.nr,s.email]]),w,(0,r.wy)((0,r._)("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>s.password=e)},null,512),[[o.nr,s.password]]),_,(0,r.Wm)(t,{to:{name:"sign up"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign up")])),_:1})],32)])}}};const C=(0,l.Z)(k,[["__scopeId","data-v-cc51379a"]]);var E=C;const O={class:"home"};var S={__name:"HomeView",setup(e){return(e,n)=>((0,r.wg)(),(0,r.iD)("div",O,[(0,r.Wm)(E)]))}};const j=S;var L=j;const N=[{path:"/",name:"home",component:L},{path:"/blotes",name:"blotes",component:()=>t.e(814).then(t.bind(t,6814))},{path:"/sign-up",name:"sign up",component:()=>t.e(546).then(t.bind(t,9546))},{path:"/add-blote",name:"add blote",component:()=>t.e(365).then(t.bind(t,365))},{path:"/blog/:id",name:"blog",component:()=>t.e(281).then(t.bind(t,6281))},{path:"/blog/:id/edit",name:"blog-edit",component:()=>t.e(848).then(t.bind(t,7848))}],A=(0,u.p7)({history:(0,u.PO)("/"),routes:N});var P=A;A.beforeEach((e=>{const n=(0,a.N)();if("/"!==e.fullPath)return!!n.isLogin||"/"}));var B=t(1020);(0,o.ri)(g).use(P).use((0,B.WB)()).mount("#app")},3245:function(e,n,t){t.d(n,{N:function(){return i}});var o=t(1020),r=t(2239),a=t(4287);(0,o.WB)();const i=(0,o.Q_)("blogStore",{state:()=>({blogs:[],isLogin:!1}),getters:{},actions:{async fetchBlogs(){try{const e=await(0,a.PL)(r.VJ);this.blogs=e.docs.map((e=>({...e.data(),id:e.id})))}catch(e){console.log(e.message)}},async fetchBlog(){},async deleteBlog(e){await(0,a.oe)((0,a.JU)(r.db,"blogs",e))}}})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{281:"d0938abd",365:"335751b1",546:"73c5f084",814:"e183540e",848:"1cf9f00b"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{281:"1d43c567",365:"d106a3c9",546:"53002331",814:"0947706f",848:"cf515d9b"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="blog:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&t.type,u=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={281:1,365:1,546:1,814:1,848:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var l=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkblog"]=self["webpackChunkblog"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5405)}));o=t.O(o)})();
//# sourceMappingURL=app.bca1d46f.js.map