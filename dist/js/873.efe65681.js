"use strict";(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[873],{3029:function(t,e,n){n.d(e,{Z:function(){return u}});const o="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var l={randomUUID:o};n(4224),n(1121),n(7133);let a;const d=new Uint8Array(16);function r(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(d)}n(560);const i=[];for(let f=0;f<256;++f)i.push((f+256).toString(16).slice(1));function c(t,e=0){return i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]}function s(t,e,n){if(l.randomUUID&&!e&&!t)return l.randomUUID();t=t||{};const o=t.random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=o[t];return e}return c(o)}var u=s},1269:function(t,e,n){n.d(e,{d:function(){return d}});var o=n(1020),l=n(2239),a=n(4287);const d=(0,o.Q_)("noteStore",{state:()=>({notes:[]}),getters:{},actions:{async fetchNotes(){try{const t=await(0,a.PL)(l.iJ);this.notes=t.docs.map((t=>({...t.data(),id:t.id}))),console.log(t.docs)}catch(t){console.log(t.message)}},async deleteNote(t){await(0,a.oe)((0,a.JU)(l.db,"notes",t))}}})},5688:function(t,e,n){n.d(e,{Z:function(){return b}});var o=n(3396),l=n(9242),a=n(2239),d=n(4287),r=n(4870),i=n(3029),c=n(1269);const s=t=>((0,o.dD)("data-v-c82f16c6"),t=t(),(0,o.Cn)(),t),u=s((()=>(0,o._)("label",{for:"title"},"Title",-1))),f=s((()=>(0,o._)("label",{for:"note"},"note",-1))),p=s((()=>(0,o._)("button",null,"Add",-1)));var _={__name:"AddNote",setup(t){const e=(0,c.d)(),n=(0,r.iH)(!1),s=(0,r.qj)({title:"",note:"",id:null}),_=()=>{(0,d.ET)(a.iJ,{title:s.title,note:s.note,id:(0,i.Z)()}).then((()=>{s.title="",s.note="",n.value=!1,e.fetchNotes()}))},m=()=>{n.value=!n.value};return(t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{class:"add-new-note",onClick:m},"add a note"),n.value?((0,o.wg)(),(0,o.iD)("form",{key:0,class:"add-note",onSubmit:(0,l.iM)(_,["prevent"])},[u,(0,o.wy)((0,o._)("input",{type:"text",name:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t),required:""},null,512),[[l.nr,s.title]]),f,(0,o.wy)((0,o._)("textarea",{name:"note",id:"note",cols:"40",rows:"15","onUpdate:modelValue":e[1]||(e[1]=t=>s.note=t),required:""},null,512),[[l.nr,s.note]]),p],32)):(0,o.kq)("",!0)],64))}},m=n(89);const v=(0,m.Z)(_,[["__scopeId","data-v-c82f16c6"]]);var b=v},259:function(t,e,n){n.d(e,{Z:function(){return p}});var o=n(3396),l=n(4870),a=n(7139),d=n(1020),r=n(1269);const i={class:"all-notes"},c=["onClick"];var s={__name:"SingleNote",setup(t){const e=(0,r.d)(),{notes:n}=(0,d.Jk)(e),s=t=>{e.deleteNote(t),e.fetchNotes()};return e.fetchNotes(),(t,e)=>((0,o.wg)(),(0,o.iD)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,l.SU)(n),(t=>((0,o.wg)(),(0,o.iD)("div",{class:"note",key:t.id},[(0,o._)("h5",null,(0,a.zw)(t.title),1),(0,o._)("p",null,(0,a.zw)(t.note),1),(0,o._)("button",{onClick:e=>s(t.id)},"delete",8,c)])))),128))]))}},u=n(89);const f=(0,u.Z)(s,[["__scopeId","data-v-2d5f100a"]]);var p=f},2873:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var o=n(3396),l=n(5688),a=n(259),d=n(9242),r=n(2239),i=n(4287),c=n(3029),s=n(4870);const u=t=>((0,o.dD)("data-v-44484af7"),t=t(),(0,o.Cn)(),t),f=u((()=>(0,o._)("label",{for:"title"},"Title",-1))),p=u((()=>(0,o._)("label",{for:"content"},"Content",-1))),_=u((()=>(0,o._)("button",null,"Add the blote",-1)));var m={__name:"AddBlog",setup(t){const e=(0,s.qj)({title:"",content:"",id:null}),n=()=>{(0,i.ET)(r.VJ,{title:e.title,content:e.content,id:(0,c.Z)()}).then((()=>{e.title="",e.content=""}))};return(t,l)=>((0,o.wg)(),(0,o.iD)("form",{class:"add-blog",onSubmit:(0,d.iM)(n,["prevent"])},[f,(0,o.wy)((0,o._)("input",{type:"text",name:"title","onUpdate:modelValue":l[0]||(l[0]=t=>e.title=t)},null,512),[[d.nr,e.title]]),p,(0,o.wy)((0,o._)("textarea",{name:"context",id:"context",cols:"50",rows:"30","onUpdate:modelValue":l[1]||(l[1]=t=>e.content=t)},null,512),[[d.nr,e.content]]),_],32))}},v=n(89);const b=(0,v.Z)(m,[["__scopeId","data-v-44484af7"]]);var g=b;const w={class:"add-blotes"},y={class:"notes"},h={class:"blog"};var U={__name:"BloteAddView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",y,[(0,o.Wm)(l.Z),(0,o.Wm)(a.Z)]),(0,o._)("div",h,[(0,o.Wm)(g)])]))}};const D=(0,v.Z)(U,[["__scopeId","data-v-0d0febb4"]]);var k=D}}]);
//# sourceMappingURL=873.efe65681.js.map