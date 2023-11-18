import{v as w,a as ke,b as X}from"./runtime-dom.esm-bundler-49120a1b.js";import{h as ge,b as we,a as ye,f as Ae}from"./const-81308dad.js";import{EnhancedContent as Ce,TextCanvasObject as be,RGBAColor as c,NoteCanvasObject as F,ClackLineCanvasObject as xe}from"./gui-d002ad5e.js";import{EventBus as Ne}from"./event-4329e05e.js";import{Chart as Z,Note as q,MultiPath as ee,StaticPath as M,LinePath as Ie,ArcPath as Te,Pow2SPath as Ee}from"./chart-9486b373.js";import{EnhancedAudioContext as $e,SoundManager as Ue}from"./sound-37c3646d.js";import Ve from"./vuepath-c5e3d203.js";import{s as Be,t as v,C as D,u as Pe,v as d,w as s,F as R,D as H,E as y,G as _,x as j,B as r,H as te,I as Se,J as Fe,K as Me,_ as De}from"./_plugin-vue_export-helper-d2fbe755.js";import"./util-1764465e.js";import"./vuechildpath-8868b3e0.js";const n=T=>(Fe("data-v-7b0c44d7"),T=T(),Me(),T),Oe={id:"innerBox"},Le=n(()=>s("canvas",{id:"main_canvas",width:"3200",height:"1800"},null,-1)),Re=[Le],He={key:0,id:"notes"},je=["onClick"],We={class:"showNote"},ze=["fill"],Ge=n(()=>s("circle",{r:"2em",cx:"2.5em",cy:"2.5em",fill:"#00000000",stroke:"white","stroke-width":"0.05em"},null,-1)),Je={class:"noteTag"},Ke=n(()=>s("span",{class:"noteTrack"},"Track",-1)),Qe=["onUpdate:modelValue"],Ye=n(()=>s("option",{value:"A"},"A",-1)),Xe=n(()=>s("option",{value:"B"},"B",-1)),Ze=[Ye,Xe],qe=n(()=>s("span",{class:"noteHitTime"},"Hit Time",-1)),et=n(()=>s("span",{class:"noteClack"},"Clack Note",-1)),tt=["checked","onChange"],at={key:0,class:"noteClackTime"},st=["onUpdate:modelValue"],lt=["onUpdate:modelValue"],nt=["onClick"],ot={key:1,id:"notes"},it=["onClick"],ut={class:"showNote"},ct=["fill"],rt=n(()=>s("circle",{r:"2em",cx:"2.5em",cy:"2.5em",fill:"#00000000",stroke:"white","stroke-width":"0.05em"},null,-1)),dt={class:"noteTag"},ht=n(()=>s("span",{class:"noteTrack"},"Fill",-1)),pt=["value","onChange"],ft=n(()=>s("span",{class:"noteHitTime"},"Hit Time",-1)),vt=n(()=>s("span",{class:"noteClack"},"Clack Note",-1)),_t=["checked","onChange"],mt={key:0,class:"noteClackTime"},kt=["onUpdate:modelValue"],gt=["onUpdate:modelValue"],wt=n(()=>s("span",{class:"noteFadeTime"},"Fade In&Out",-1)),yt=["onUpdate:modelValue"],At=["onUpdate:modelValue"],Ct=["onClick"],bt={key:2,id:"notes"},xt={id:"dataBox"},Nt=n(()=>s("span",null,"Sec: ",-1)),It=n(()=>s("br",null,null,-1)),Tt=n(()=>s("span",null,"Paused: ",-1)),Et=n(()=>s("br",null,null,-1)),$t=n(()=>s("span",null,"Chart: ",-1)),Ut=n(()=>s("br",null,null,-1)),Vt=n(()=>s("span",null,"Upload Music: ",-1)),Bt=n(()=>s("br",null,null,-1)),Pt=n(()=>s("span",null,"Upload Background: ",-1)),St=n(()=>s("br",null,null,-1)),Ft=n(()=>s("span",null,"Bar: ",-1)),Mt=n(()=>s("option",{value:"N"},"Notes",-1)),Dt=n(()=>s("option",{value:"AN"},"Animation Notes",-1)),Ot=n(()=>s("option",{value:"PE"},"Path Editor",-1)),Lt=[Mt,Dt,Ot],Rt=n(()=>s("br",null,null,-1)),Ht=n(()=>s("br",null,null,-1)),jt=n(()=>s("br",null,null,-1)),Wt=Be({__name:"maker",setup(T){const A=v("N");let b;const i=v(new Z({notes:[],animationNotes:[],length:3600}));let h=60,E,p=new $e(new AudioContext),ae=.5,se=.5,x=0;const $=v(!1),C=D({get:()=>$.value,set:e=>{e!=$.value&&(e?(p.pause(),$.value=!0):(p.play(o.value),$.value=!1))}});let U=[];const N=v(0),o=v(0);let V=0,O=!1,f,B=1e5,m=new Ne;v({notes:[],animationNotes:[],bgsound:"maker.mp3",length:3600});const W=v(null),z=v(null),le=v(null),G=v(null),k=v("none");function g(e,t,a,u="center",l=50,L=new c(255,255,255)){f.render(new be(e,t,a,u,l,L instanceof c?L:new c(255,255,255,L)))}function J(e){if(e.a||(o.value-e.h+e.p.spd)/e.p.spd<0||(o.value-e.h+e.p.spd)/e.p.spd>1)return;let t=e.p.cal((o.value-e.h+e.p.spd)/e.p.spd),a=new c(e.f[0],e.f[1],e.f[2]);f.render(new F(...t,a))}function ne(e){e.y=="A"&&((o.value-e.h+e.p.spd)/e.p.spd<0||(o.value-e.al-e.h+e.p.spd)/e.p.spd>1||f.render(new xe(e.p,(o.value-e.al-e.h+e.p.spd)/e.p.spd,(o.value-e.h+e.p.spd)/e.p.spd)))}function K(e){if(e.a<=0)return;let t=o.value-e.aa,a=e.p.cal((e.aa-e.h+e.p.spd)/e.p.spd);if(e.a==12&&t<e.hi){let u=t/e.hi+1,l=new c(e.f[0],e.f[1],e.f[2],u-1);f.render(new F(...a,l))}else if(e.a==11&&t<e.ho){let u=t/e.ho+1,l=new c(e.f[0],e.f[1],e.f[2],2-u);f.render(new F(...a,l))}else if(e.a>0&&t<.25){let u=t/.25+1,l=new c(0,0,0,0);e.a==1?l=new c(160,144,0,2-u):e.a==2&&(l=new c(0,167,195,2-u)),f.render(new F(...a,l,u*88))}}function oe(){b.fillStyle=ye,b.font=Ae,b.textAlign="center",g(`${x}`,1600,60),g("COMBO",1600,120),g(`Point: ${(x/i.value.notes.length*1e5).toFixed(0)}`,3150,60,"right"),g(`Music: ${(o.value/i.value.length*100).toFixed(2)}%`,3150,120,"right");{let e=U.length,t=new c(255,0,255);e/h>=0&&(t=new c(255,0,255)),e/h>.3&&(t=new c(255,0,63)),e/h>.6&&(t=new c(255,0,0)),e/h>.9&&(t=new c(255,127,0)),e/h>.95&&(t=new c(255,255,0)),e/h>.999&&(t=new c(0,255,0)),e/h>.99999&&(t=new c(0,255,255)),g(`TPS: ${e.toFixed(0)}/${h}`,3150,180,"right",50,t),g(`Sec: ${o.value.toFixed(3)} Paused: ${V.toFixed(3)} Total: ${((Date.now()-N.value)/1e3).toFixed(3)} Music: ${p.actx.currentTime.toFixed(3)}`,3150,240,"right")}}function ie(){f.clear()}Pe(async()=>{document.getElementById("canvas_box").style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P4DwQACfsD/Z8fLAAAAAAASUVORK5CYII=)",b=document.getElementById("main_canvas").getContext("2d"),f=new Ce(b),f.setBackGroundColor("rgba(0,0,0,0.5)"),f.clear(),g("游戏正在加载",1600,900,"center",200,new c(200,200,200)),m.on("hit",()=>{x++}),m.on("hit",()=>{E.play()}),m.on("tick",()=>{let t=Date.now();for(U.push(t);t-U[0]>=1e3;)U.splice(0,1)}),m.on("start",()=>{N.value=Date.now()-p.actx.currentTime*1e3}),f.clear(),g("加载中",1600,900,"center",200,new c(250,250,250)),E=new Ue(ge),await p.actx.suspend(),await E.load(),await p.load(we),p.setVolume(se),E.setVolume(ae),m.on("start",()=>{setInterval(function(){if(C.value){V=(Date.now()-N.value)/1e3-o.value;return}if(O){console.log("Dropping tick! Try reducing tps");return}O=!0,ie(),o.value=(Date.now()-N.value)/1e3-V,m.emit("tick",o.value),i.value.animationNotes.forEach(t=>{t.a==12&&o.value-t.aa>t.hi?(t.a=0,t.aa=0):Math.abs(t.h-o.value)<=1.5/h?t.ho&&(t.a=11,t.aa=o.value):t.hi!=null&&Math.abs(t.h-t.p.spd-t.hi-o.value)<=1.5/h&&(t.a=12,t.aa=o.value),J(t),K(t)}),i.value.notes.forEach(t=>{ne(t)}),i.value.notes.forEach(t=>{!t.a&&Math.abs(t.h-o.value)<1.5/h?(t.a=1,t.aa=t.h,m.emit("hit",1)):o.value-t.h>.16&&!t.a&&(t.a=-1,m.emit("miss",null)),J(t)}),i.value.notes.forEach(t=>{K(t)}),oe(),o.value>=i.value.length&&(P.value=0),O=!1},1e3/h)}),f.clear(),await p.actx.resume(),p.play(0),m.emit("start",null)});const P=D({get:()=>o.value,set:e=>{i.value.notes.forEach(t=>{t.a=0,t.aa=0}),i.value.animationNotes.forEach(t=>{t.a=0,t.aa=0}),x=0,i.value.notes.forEach(t=>{t.h<e&&x++}),p.pause(),N.value=Date.now()-e*1e3,V=0,o.value=e,C||p.play(e)}});function I(e){if(e instanceof M)return{type:"static",pos:[e.x,e.y],spd:e.spd};if(e instanceof Ie)return{type:"line",f:[e.fx,e.fy],t:[e.tx,e.ty],spd:e.spd};if(e instanceof Te)return{type:"arc",c:[e.cx,e.cy],f:[e.fromx,e.fromy],t:[e.tox,e.toy],spd:e.spd};if(e instanceof Ee)return{type:"pow2",p:I(e.p),f:e.f,t:e.t}}function ue(e){if(e.y=="I"){let t={h:0,paths:[],track:void 0,type:"I"};return t.h=e.h,e.p.ps.forEach(a=>{t.paths.push(I(a))}),t.track=e.t,t}else{let t={h:0,paths:[],track:void 0,type:"A",al:void 0};return t.h=e.h,e.p.ps.forEach(a=>{t.paths.push(I(a))}),t.track=e.t,t.al=e.al,t}}function ce(e){if(e.y=="I"){let t={h:0,paths:[],type:"I"};return t.h=e.h,e.p.ps.forEach(a=>{t.paths.push(I(a))}),t}else{let t={h:0,paths:[],type:"A",al:void 0};return t.h=e.h,e.p.ps.forEach(a=>{t.paths.push(I(a))}),t.al=e.al,t}}const Q=D({get:()=>{let e={animationNotes:[],length:0,notes:[]};return i.value.notes.forEach(t=>{e.notes.push(ue(t))}),i.value.animationNotes.forEach(t=>{e.animationNotes.push(ce(t))}),e.length=i.value.length,e},set:e=>{i.value=new Z(e)}}),Y=D({get:()=>JSON.stringify(Q.value),set:e=>{Q.value=JSON.parse(e)}});function re(){let e=URL.createObjectURL(z.value.files[0]);console.log(e),G.value.style.backgroundImage=`url(${e})`}function de(){let e=URL.createObjectURL(W.value.files[0]);console.log(e),p.load(e)}function he(e,t){let a=e.target.value;t.f=[parseInt(a.slice(1,3),16),parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]}function pe(e){if(e=="none")return"<<CURRENTLY NONE>>";if(e.startsWith("N"))return`Note ${parseInt(e.slice(1))+1}`;if(e.startsWith("AN"))return`Animation Note ${parseInt(e.slice(2))+1}`}function S(e){if(e=="none")return null;if(e.startsWith("N"))return i.value.notes[parseInt(e.slice(1))];if(e.startsWith("AN"))return i.value.animationNotes[parseInt(e.slice(2))]}function fe(){B=S(k.value).h;let e=S(k.value).p.spd;C.value=!1,P.value=B-e}m.on("tick",e=>{e>B&&(C.value=!0,B=1e5)});function ve(){i.value.notes.push(new q(new ee([new M(1e-4,1600,900)]),0,"A","I",0))}function _e(){i.value.animationNotes.push(new q(new ee([new M(1e-4,1600,900)]),0,"M","I",0,[64,64,64]))}function me(){S(k.value).p.ps.push(new M(1e-4,1600,900))}return(e,t)=>(r(),d("div",{id:"gameBox",ref_key:"gamebox",ref:le},[s("div",Oe,[s("div",{id:"canvas_box",ref_key:"canvasbox",ref:G},Re,512),A.value=="N"?(r(),d("ul",He,[(r(!0),d(R,null,H(i.value.notes,(a,u)=>(r(),d("li",{class:te({selected:k.value==`N${u}`}),onClick:l=>k.value=`N${u}`},[(r(),d("svg",We,[s("circle",{r:"2.2em",cx:"2.5em",cy:"2.5em",fill:`rgb(${a.f[0]},${a.f[1]},${a.f[2]})`,"stroke-width":"0"},null,8,ze),Ge])),s("span",Je,"Note #"+j(u+1),1),Ke,_(s("select",{class:"noteTrackInput","onUpdate:modelValue":l=>a.t=l},Ze,8,Qe),[[X,a.t]]),qe,et,s("input",{type:"checkbox",class:"noteIfClack",checked:a.y=="A",onChange:l=>{a.y=l.target.checked?"A":"I"}},null,40,tt),a.y=="A"?(r(),d("span",at,"Clack Length")):y("",!0),a.y=="A"?_((r(),d("input",{key:1,class:"noteClackTimeInput","onUpdate:modelValue":l=>a.al=l,type:"text"},null,8,st)),[[w,a.al,void 0,{number:!0}]]):y("",!0),_(s("input",{class:"noteHitTimeInput","onUpdate:modelValue":l=>a.h=l,type:"text"},null,8,lt),[[w,a.h,void 0,{number:!0}]]),s("span",{class:"noteDelete",onClick:l=>i.value.notes.splice(u,1)},"X",8,nt)],10,je))),256)),s("li",{id:"add",onClick:ve}," + ")])):y("",!0),A.value=="AN"?(r(),d("ul",ot,[(r(!0),d(R,null,H(i.value.animationNotes,(a,u)=>(r(),d("li",{class:te({selected:k.value==`AN${u}`}),onClick:l=>k.value=`AN${u}`},[(r(),d("svg",ut,[s("circle",{r:"2.2em",cx:"2.5em",cy:"2.5em",fill:`rgb(${a.f[0]},${a.f[1]},${a.f[2]})`,"stroke-width":"0"},null,8,ct),rt])),s("span",dt,"Animation Note #"+j(u+1),1),ht,s("input",{class:"noteFillInput",type:"color",value:`#${a.f[0].toString(16)}${a.f[1].toString(16)}${a.f[2].toString(16)}`,onChange:l=>{he(l,a)}},null,40,pt),ft,vt,s("input",{type:"checkbox",class:"noteIfClack",checked:a.y=="A",onChange:l=>{a.y=l.target.checked?"A":"I"}},null,40,_t),a.y=="A"?(r(),d("span",mt,"Clack Length")):y("",!0),a.y=="A"?_((r(),d("input",{key:1,class:"noteClackTimeInput","onUpdate:modelValue":l=>a.al=l,type:"text"},null,8,kt)),[[w,a.al,void 0,{number:!0}]]):y("",!0),_(s("input",{class:"noteHitTimeInput","onUpdate:modelValue":l=>a.h=l,type:"text"},null,8,gt),[[w,a.h,void 0,{number:!0}]]),wt,_(s("input",{class:"noteFadeIn","onUpdate:modelValue":l=>a.hi=l,type:"text"},null,8,yt),[[w,a.hi,void 0,{number:!0}]]),_(s("input",{class:"noteFadeOut","onUpdate:modelValue":l=>a.ho=l,type:"text"},null,8,At),[[w,a.ho,void 0,{number:!0}]]),s("span",{class:"noteDelete",onClick:l=>i.value.animationNotes.splice(u,1)},"X",8,Ct)],10,it))),256)),s("li",{id:"add",onClick:_e}," + ")])):y("",!0),A.value=="PE"?(r(),d("ul",bt,[(r(!0),d(R,null,H(S(k.value).p.ps,(a,u)=>(r(),Se(Ve,{path:a,index:u,chart:i.value,sel:k.value},null,8,["path","index","chart","sel"]))),256)),s("li",{id:"add",onClick:me}," + ")])):y("",!0),s("div",xt,[Nt,_(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>P.value=a)},null,512),[[w,P.value,void 0,{lazy:!0}]]),It,Tt,_(s("input",{id:"pause",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=a=>C.value=a)},null,512),[[ke,C.value]]),Et,$t,_(s("textarea",{id:"chartArea","onUpdate:modelValue":t[2]||(t[2]=a=>Y.value=a)},null,512),[[w,Y.value,void 0,{lazy:!0}]]),Ut,Vt,s("input",{type:"file",accept:"audio/*",ref_key:"music",ref:W,onChange:de},null,544),Bt,Pt,s("input",{type:"file",accept:"image/*",ref_key:"bg",ref:z,onChange:re},null,544),St,Ft,_(s("select",{"onUpdate:modelValue":t[3]||(t[3]=a=>A.value=a)},Lt,512),[[X,A.value,void 0,{lazy:!0}]]),Rt,s("span",null,"Current: "+j(pe(k.value)),1),Ht,A.value=="PE"?(r(),d("button",{key:0,onClick:fe},"Preview")):y("",!0),jt])])],512))}});const ta=De(Wt,[["__scopeId","data-v-7b0c44d7"]]);export{ta as default};
