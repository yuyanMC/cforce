import{_ as a,s as f,a as _}from"./util-27987e50.js";import{n as h,r as s,y as E,o as y,z as C,_ as d,p as r,q as t,F as I,A as D,u as w,t as l,B as V,s as O,w as A,C as R,x as B}from"./_plugin-vue_export-helper-d6ea623c.js";const b={id:"song_list"},x=["onClick"],L={id:"operation"},S=h({__name:"selector",setup(P){var i=[];const n=s(0),e=s({id:"",name:"",difficulty:0}),m=E(()=>({change:Date.now()-n.value<=1e3}));var p=R();const o=s("");y(async()=>{await a(()=>import("./data-3e9ffc66.js"),[],import.meta.url).then(async c=>i=c.default),C(()=>{p.proxy.$forceUpdate()}),e.value=i[0],o.value="url("+(await d(Object.assign({"./images/atthespeedoflight.png":()=>a(()=>import("./atthespeedoflight-d3f26589.js"),[],import.meta.url),"./images/introduction.png":()=>a(()=>import("./introduction-45cb3d30.js"),[],import.meta.url)}),`./images/${e.value.id}.png`).catch(()=>({default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P4DwQACfsD/Z8fLAAAAAAASUVORK5CYII="}))).default+")"});function g(){console.log("Redirecting..."),location.replace(`./player.html${f({id:e.value.id})}`)}async function v(){n.value=Date.now(),await _(500),o.value="url("+(await d(Object.assign({"./images/atthespeedoflight.png":()=>a(()=>import("./atthespeedoflight-d3f26589.js"),[],import.meta.url),"./images/introduction.png":()=>a(()=>import("./introduction-45cb3d30.js"),[],import.meta.url)}),`./images/${e.value.id}.png`).catch(()=>({default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P4DwQACfsD/Z8fLAAAAAAASUVORK5CYII="}))).default+")",await _(500),n.value=0}return(c,U)=>(A(),r("div",{id:"gameBox",style:O("background-image:"+o.value)},[t("div",{id:"innerBox",class:V(m.value)},[t("div",b,[(A(!0),r(I,null,D(w(i),u=>(A(),r("p",{onClick:k=>{e.value=u,v()}},l(u.name),9,x))),256))]),t("div",L,[t("h1",null,l(e.value.name),1),t("h3",null," 难度："+l(e.value.difficulty),1),t("button",{onClick:g}," 开始 ")])],2)],4))}});const $=B(S,[["__scopeId","data-v-4d29dbc1"]]);export{$ as default};
