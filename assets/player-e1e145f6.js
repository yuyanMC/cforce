var h=Object.defineProperty;var d=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(d(r,typeof t!="symbol"?t+"":t,e),e);import{_ as __vitePreload}from"./preload-helper-8235fac6.js";import{calculateAngle,getQueryString}from"./util-159a5f05.js";const player$1="",hit="/assets/hit-7d4160ed.mp3",hit$1=Object.freeze(Object.defineProperty({__proto__:null,default:hit},Symbol.toStringTag,{value:"Module"})),blank="/assets/blank-d6053d36.mp3",blank$1=Object.freeze(Object.defineProperty({__proto__:null,default:blank},Symbol.toStringTag,{value:"Module"}));class EnhancedContent{constructor(t){i(this,"ctx");i(this,"backGroundColor","rgba(0,0,0,0)");i(this,"size",[300,150]);this.ctx=t,this.size=[parseInt(this.ctx.canvas.getAttribute("width")||"300"),parseInt(this.ctx.canvas.getAttribute("height")||"150")]}setBackGroundColor(t){this.backGroundColor=t}clear(){this.ctx.fillStyle=this.backGroundColor,this.ctx.clearRect(0,0,...this.size),this.ctx.fillRect(0,0,...this.size)}render(t){t.drawOnCtx(this.ctx)}}class CanvasObject{}class NoteCanvasObject{constructor(t=-100,e=-100,o=new RGBAColor(64,64,64),s=88){i(this,"x",-100);i(this,"y",-100);i(this,"f",new RGBAColor(64,64,64));i(this,"r",88);this.x=t,this.y=e,this.f=o,this.r=s}drawOnCtx(t){t.fillStyle=`rgba(${this.f.getColor()[0]},${this.f.getColor()[1]},${this.f.getColor()[2]},${this.f.getColor()[3]})`,t.beginPath(),t.arc(this.x,this.y,this.r,0,Math.PI*2,!0),t.fill(),t.lineWidth=2,t.strokeStyle=`rgba(255,255,255,${this.f.getColor()[3]})`,t.beginPath(),t.arc(this.x,this.y,this.r/1.1,0,Math.PI*2,!0),t.stroke()}}class ClackLineCanvasObject{constructor(t,e,o){i(this,"p");i(this,"fp");i(this,"tp");this.p=t,this.fp=e,this.tp=o}drawOnCtx(t){if(this.tp<0||this.fp>1)return;this.tp>1&&(this.tp=1),this.fp<0&&(this.fp=0);let e=this.p.cal(this.tp);t.lineWidth=5,t.beginPath(),t.moveTo(...e);for(let o=this.tp;o>=this.fp&&o<=this.tp;o+=(this.fp-this.tp)/tps)e=this.p.cal(o),t.strokeStyle="rgb(255,255,255)",t.lineTo(...e);t.stroke()}}class TextCanvasObject{constructor(t,e,o,s="left",a=50,n=new RGBAColor(255,255,255)){i(this,"text");i(this,"x");i(this,"y");i(this,"align");i(this,"fontSize");i(this,"fill");this.text=t,this.x=e,this.y=o,this.align=s,this.fontSize=a,this.fill=n}drawOnCtx(t){t.fillStyle=`rgba(${this.fill.getColor()[0]},${this.fill.getColor()[1]},${this.fill.getColor()[2]},${this.fill.getColor()[3]})`,t.font=`${this.fontSize}px 'Courier New'`,t.textAlign=this.align,t.fillText(this.text,this.x,this.y)}}class RGBAColor{constructor(t,e,o,s=1){i(this,"c",[0,0,0,1]);this.c=[t,e,o,s]}getColor(){return this.c}}const gui=Object.freeze(Object.defineProperty({__proto__:null,CanvasObject,ClackLineCanvasObject,EnhancedContent,NoteCanvasObject,RGBAColor,TextCanvasObject},Symbol.toStringTag,{value:"Module"}));class EventBus{constructor(){i(this,"map",new Map)}on(t,e){let o=this.map.get(t);o||(o=new Set,this.map.set(t,o)),o.add(e)}emit(t,e){const o=this.map.get(t);if(!o)return;[...o].forEach(a=>a(e))}}const event=Object.freeze(Object.defineProperty({__proto__:null,EventBus},Symbol.toStringTag,{value:"Module"}));class Chart{constructor(t){i(this,"notes");i(this,"animationNotes");i(this,"notesTotal");i(this,"length");this.notes=[],this.animationNotes=[],t.notes.forEach(e=>{let o=[];e.paths.forEach(a=>{o.push(Chart.parsePath(a))});let s=new MultiPath(o);e.type!=="I"?this.notes.push(new Note(s,e.h,e.track,e.type,e.al)):this.notes.push(new Note(s,e.h,e.track,e.type))}),t.animationNotes.forEach(e=>{let o=[];e.paths.forEach(n=>{o.push(Chart.parsePath(n))});let s=new MultiPath(o),a;e.type!=="I"?a=new Note(s,e.h,"M",e.type,e.al,e.fill):a=new Note(s,e.h,"M",e.type,void 0,e.fill),a.ho=e.ho,a.hi=e.hi,this.animationNotes.push(a)}),this.notesTotal=t.notes.length,this.length=t.length}static parsePath(t){let e=t,o=new Path(0);switch(e.type){case"arc":o=new ArcPath(e.spd,e.c[0],e.c[1],e.f[0],e.f[1],e.t[0],e.t[1]);break;case"line":o=new LinePath(e.spd,e.f[0],e.f[1],e.t[0],e.t[1]);break;case"static":o=new StaticPath(e.spd,e.pos[0],e.pos[1]);break;case"pow2":o=new Pow2SPath(Chart.parsePath(e.p));break;case"rpow2":o=new ReversePow2SPath(Chart.parsePath(e.p));break;default:throw Error("Invalid path type")}return o}}class Path{constructor(t){i(this,"spd");this.spd=t}cal(t){return[0,0]}}class StaticPath extends Path{constructor(e,o,s){super(e);i(this,"x");i(this,"y");this.x=o,this.y=s}cal(e){return[this.x,this.y]}}class LinePath extends Path{constructor(e,o,s,a,n){super(e);i(this,"fx");i(this,"fy");i(this,"tx");i(this,"ty");this.fx=o,this.fy=s,this.tx=a,this.ty=n}cal(e){return[this.fx+(this.tx-this.fx)*e,this.fy+(this.ty-this.fy)*e]}}class ArcPath extends Path{constructor(e,o,s,a,n,c=1600,l=900){super(e);i(this,"cx");i(this,"cy");i(this,"fromx");i(this,"fromy");i(this,"tox");i(this,"toy");if((a-o)**2+(n-s)**2-(c-o)**2-(l-s)**2>=.01)throw Error(`Invalid ArcPath for(${o} ${s} ${a} ${n} ${c} ${l})`);this.cx=o,this.cy=s,this.fromx=a,this.fromy=n,this.tox=c,this.toy=l}cal(e){if(e<0)return[this.fromx,this.fromy];if(e>1)return[this.tox,this.toy];let o=calculateAngle(this.cx,this.cy,this.fromx,this.fromy),s=calculateAngle(this.cx,this.cy,this.tox,this.toy),a=o+(s-o)*e,n=Math.sqrt((this.tox-this.cx)**2+(this.toy-this.cy)**2);return[Math.cos(a)*n+this.cx,Math.sin(a)*n+this.cy]}}class SubscriberPath extends Path{constructor(e){super(e.spd);i(this,"p");this.p=e}}class Pow2SPath extends SubscriberPath{constructor(t){super(t)}cal(t){return this.p.cal(t**2)}}class ReversePow2SPath extends SubscriberPath{constructor(t){super(t)}cal(t){return this.p.cal((1-t)**2)}}class MultiPath extends Path{constructor(e){let o=0;e.forEach(a=>{o+=a.spd});super(o);i(this,"ps");i(this,"ssp");this.ps=e,this.ssp=[];let s=0;this.ssp.push(0),e.forEach(a=>{s+=a.spd,this.ssp.push(s/o)})}cal(e){for(let o=1;o<this.ssp.length;o++)if(e<this.ssp[o]){let s=(e-this.ssp[o-1])/(this.ssp[o]-this.ssp[o-1]);return this.ps[o-1].cal(s)}return this.ps[this.ps.length-1].cal(1)}}class Note{constructor(t,e,o,s,a,n){i(this,"p");i(this,"h");i(this,"a");i(this,"aa");i(this,"ho");i(this,"hi");i(this,"t");i(this,"y");i(this,"al");i(this,"f");this.p=t,this.h=e,this.t=o,this.y=s,this.a=0,this.aa=0,this.y=="A"&&a==null&&(a=0),this.al=a,this.f=n||[64,64,64]}}const chart$1=Object.freeze(Object.defineProperty({__proto__:null,Chart,Note,Path},Symbol.toStringTag,{value:"Module"})),modules=Object.assign({"/src/charts/atthespeedoflight.json":()=>__vitePreload(()=>import("./atthespeedoflight-15398c93.js"),[]),"/src/charts/beeper.json":()=>__vitePreload(()=>import("./beeper-a0223045.js"),[]),"/src/charts/demo.json":()=>__vitePreload(()=>import("./demo-f6ada2c3.js"),[]),"/src/charts/introduction.json":()=>__vitePreload(()=>import("./introduction-d894f9d3.js"),[]),"/src/charts/test.json":()=>__vitePreload(()=>import("./test-2e501a08.js"),[]),"/src/charts/timer.json":()=>__vitePreload(()=>import("./timer-fbc7f604.js"),[]),"/src/charts/阴游.json":()=>__vitePreload(()=>import("./阴游-7f321caa.js"),[]),"/src/data/data.json":()=>__vitePreload(()=>import("./data-3e9ffc66.js"),[]),"/src/data/meta.json":()=>__vitePreload(()=>import("./meta-f156df76.js"),[]),"/src/finish.ts":()=>__vitePreload(()=>import("./finish-4040843c.js"),["assets/finish-4040843c.js","assets/preload-helper-8235fac6.js","assets/dynamic-import-helper-be004503.js","assets/util-159a5f05.js","assets/finish-8e0d29c9.css"]),"/src/globals.d.ts":()=>__vitePreload(()=>import("./globals.d-4ed993c7.js"),[]),"/src/images/atthespeedoflight.png":()=>__vitePreload(()=>import("./atthespeedoflight-33f5b707.js"),[]),"/src/images/introduction.png":()=>__vitePreload(()=>import("./introduction-fb03b31b.js"),[]),"/src/player.ts":()=>__vitePreload(()=>Promise.resolve().then(()=>player),void 0),"/src/player/chart.ts":()=>__vitePreload(()=>Promise.resolve().then(()=>chart$1),void 0),"/src/player/event.ts":()=>__vitePreload(()=>Promise.resolve().then(()=>event),void 0),"/src/player/gui.ts":()=>__vitePreload(()=>Promise.resolve().then(()=>gui),void 0),"/src/player/sound.ts":()=>__vitePreload(()=>Promise.resolve().then(()=>sound),void 0),"/src/player/util.ts":()=>__vitePreload(()=>import("./util-159a5f05.js"),[]),"/src/scripts/introduction.ts":()=>__vitePreload(()=>import("./introduction-4ffd5aa9.js"),["assets/introduction-4ffd5aa9.js","assets/preload-helper-8235fac6.js","assets/util-159a5f05.js"]),"/src/scripts/timer.ts":()=>__vitePreload(()=>import("./timer-91ef3f9b.js"),["assets/timer-91ef3f9b.js","assets/preload-helper-8235fac6.js","assets/util-159a5f05.js"]),"/src/selector.ts":()=>__vitePreload(()=>import("./selector-b2196534.js"),["assets/selector-b2196534.js","assets/preload-helper-8235fac6.js","assets/dynamic-import-helper-be004503.js","assets/selector-1dc53f68.css"]),"/src/sounds/atthespeedoflight.mp3":()=>__vitePreload(()=>import("./atthespeedoflight-c73dc3cb.js"),[]),"/src/sounds/beeper.mp3":()=>__vitePreload(()=>import("./beeper-12d1e476.js"),[]),"/src/sounds/blank.mp3":()=>__vitePreload(()=>Promise.resolve().then(()=>blank$1),void 0),"/src/sounds/hit.mp3":()=>__vitePreload(()=>Promise.resolve().then(()=>hit$1),void 0),"/src/sounds/introduction.mp3":()=>__vitePreload(()=>import("./introduction-a26f4fef.js"),[]),"/src/style/finish.css":()=>__vitePreload(()=>Promise.resolve({}),["assets/finish-8e0d29c9.css"]),"/src/style/player.css":()=>__vitePreload(()=>Promise.resolve({}),["assets/player-e852206a.css"]),"/src/style/selector.css":()=>__vitePreload(()=>Promise.resolve({}),["assets/selector-1dc53f68.css"])});console.log(modules);class DynamicLoader{constructor(t){i(this,"dir");this.dir=t}async loadAsUrl(t){let e=modules[`/src/${this.dir}/${t}`];if(e)return(await e()).default;throw Error("404 Not Found")}async loadAsBase64(t){return toDataUrl(await this.loadAsUrl(t))}}class DynamicScriptLoader extends DynamicLoader{async loadAsUrl(t){return new Promise(e=>{e(`/src/${this.dir}/${t}`)})}async inject(t){let e=modules[`/src/${this.dir}/${t}`];if(e)return e();throw Error("404 Not Found")}}class DynamicJsonLoader extends DynamicLoader{async loadAsUrl(t){return new Promise(e=>{e(`/src/${this.dir}/${t}`)})}async loadAsJson(t){let e=modules[`/src/${this.dir}/${t}`];if(e)return e();throw Error("404 Not Found")}}async function toDataUrl(r){let t=new XMLHttpRequest,e=new Promise(o=>{t.onload=()=>{let s=new FileReader;s.onloadend=function(){o(s.result)},s.readAsDataURL(t.response)}});return t.open("GET",r),t.responseType="blob",t.send(),e}class EnhancedAudioContext{constructor(t){i(this,"actx");i(this,"audioBuffer");i(this,"volume");i(this,"url","about:blank");i(this,"startTime",0);this.actx=t}play(){this.startTime=Date.now();let t=this.actx.createBufferSource(),e=this.actx.createGain();t.buffer=this.audioBuffer,t.loop=!1,t.connect(e),t.start(0),e.gain.value=this.volume,e.connect(this.actx.destination),console.log(`[sound.ts/EnhancedAudioContext] Audio '${this.url}' played.`),console.debug(t,e,this.actx,this.audioBuffer)}async init(t){let e=this;return this.actx.decodeAudioData(t,function(o){e.audioBuffer=o})}async load(t){return this.url=t,fetch(t).then(e=>e.arrayBuffer()).then(e=>this.init(e)).then(e=>console.log(`[sound.ts/EnhancedAudioContext] Audio '${t}' loaded.`))}setVolume(t){this.volume=t}}class SoundManager{constructor(t,e=16){i(this,"enhancedAudioContexts",[]);i(this,"url");i(this,"num");i(this,"loaded",!1);this.url=t,this.num=e}async load(){if(this.loaded)throw Error("Already loaded.");this.loaded=!0;for(let t=0;t<this.num;t++)this.enhancedAudioContexts.push(new EnhancedAudioContext(new AudioContext)),await this.enhancedAudioContexts[t].load(this.url),console.log(`[sound.ts/SoundManager] Audio '${this.url}' loaded for #${t+1}/${this.num}`)}play(){console.debug(this.enhancedAudioContexts);for(let t=0;t<this.num;t++)if(Date.now()-this.enhancedAudioContexts[t].startTime>this.enhancedAudioContexts[t].audioBuffer.length/this.enhancedAudioContexts[t].audioBuffer.sampleRate){this.enhancedAudioContexts[t].play(),console.log(`[sound.ts/SoundManager] Audio '${this.url}' played for #${t+1}/${this.num}`);return}}setVolume(t){for(let e=0;e<this.num;e++)this.enhancedAudioContexts[e].setVolume(t)}}const sound=Object.freeze(Object.defineProperty({__proto__:null,EnhancedAudioContext,SoundManager},Symbol.toStringTag,{value:"Module"}));let imageLoader=new DynamicLoader("images"),soundLoader=new DynamicLoader("sounds"),chartLoader=new DynamicJsonLoader("charts"),scriptLoader=new DynamicScriptLoader("scripts"),ctx,chart,tps=60,combo=0,hitSoundManager,backgroundMusic,hitVolume=.2,backgroundVolume=.1,pointsGot=0,maxCombo=0,perfect=0,good=0,paused=!1,tickTimes=[],startTime,sec,pausedTime=0,ec,bus=new EventBus;function renderText(r,t,e,o="left",s=50,a=new RGBAColor(255,255,255)){ec.render(new TextCanvasObject(r,t,e,o,s,a instanceof RGBAColor?a:new RGBAColor(255,255,255,a)))}function drawNote(r){if((sec-r.h+r.p.spd)/r.p.spd<0||(sec-r.h+r.p.spd)/r.p.spd>1)return;let t=r.p.cal((sec-r.h+r.p.spd)/r.p.spd),e;r.t=="A"?e=new RGBAColor(0,220,240):r.t=="B"?e=new RGBAColor(220,70,20):e=new RGBAColor(r.f[0],r.f[1],r.f[2]),ec.render(new NoteCanvasObject(...t,e))}function drawClackLine(r){r.y=="A"&&((sec-r.h+r.p.spd)/r.p.spd<0||(sec-r.al-r.h+r.p.spd)/r.p.spd>1||ec.render(new ClackLineCanvasObject(r.p,(sec-r.al-r.h+r.p.spd)/r.p.spd,(sec-r.h+r.p.spd)/r.p.spd)))}function drawA(r){let t=sec-r.aa;if(r.a==12&&t<r.hi){let e=r.p.cal(0),o=t/r.hi+1,s=new RGBAColor(r.f[0],r.f[1],r.f[2],o-1);ec.render(new NoteCanvasObject(...e,s))}else if(r.a==11&&t<r.ho){let e=r.p.cal(1),o=t/r.ho+1,s=new RGBAColor(r.f[0],r.f[1],r.f[2],2-o);ec.render(new NoteCanvasObject(...e,s))}else if(r.a>0&&t<.25){let e=t/.25+1,o=r.p.cal(1),s=new RGBAColor(0,0,0,0);r.a==1?s=new RGBAColor(160,144,0,2-e):r.a==2&&(s=new RGBAColor(0,167,195,2-e)),ec.render(new NoteCanvasObject(...o,s,e*88))}}function drawTexts(){ctx.fillStyle="rgb(255,255,255)",ctx.font="50px 'Courier New'",ctx.textAlign="center",renderText(`${combo}`,1600,60,"center"),renderText("COMBO",1600,120,"center"),renderText(`Point: ${(pointsGot/chart.notesTotal/100*1e5).toFixed(0)}`,3150,60,"right"),renderText(`Music: ${(sec/chart.length*100).toFixed(2)}%`,3150,120,"right");{let r=tickTimes.length,t=new RGBAColor(255,0,255);r/tps>=0&&(t=new RGBAColor(255,0,255)),r/tps>.3&&(t=new RGBAColor(255,0,63)),r/tps>.6&&(t=new RGBAColor(255,0,0)),r/tps>.9&&(t=new RGBAColor(255,127,0)),r/tps>.95&&(t=new RGBAColor(255,255,0)),r/tps>.999&&(t=new RGBAColor(0,255,0)),r/tps>.99999&&(t=new RGBAColor(0,255,255)),renderText(`TPS: ${r.toFixed(0)}/${tps}`,3150,180,"right",50,t),renderText(`Sec: ${sec.toFixed(3)} Paused: ${pausedTime.toFixed(3)} Total: ${((Date.now()-startTime)/1e3).toFixed(3)} Music: ${backgroundMusic.actx.currentTime.toFixed(3)}`,3150,240,"right")}}function nextFrame(){ec.clear()}async function main(){let r=getQueryString("id");if(document.getElementById("canvas_box").style.backgroundImage=`url(${await imageLoader.loadAsUrl(`${r}.png`).catch(()=>"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P4DwQACfsD/Z8fLAAAAAAASUVORK5CYII=")})`,ctx=document.getElementById("main_canvas").getContext("2d"),ec=new EnhancedContent(ctx),ec.setBackGroundColor("rgba(0,0,0,0.5)"),ec.clear(),renderText("游戏正在加载",1600,900,"center",200,new RGBAColor(200,200,200)),bus.on("hit",function(o){combo++,maxCombo=Math.max(combo,maxCombo),o==1?(pointsGot+=100,perfect+=1):o==2&&(pointsGot+=75,good+=1)}),bus.on("hit",()=>{hitSoundManager.play()}),bus.on("miss",()=>{combo=0}),bus.on("tick",()=>{let o=Date.now();for(tickTimes.push(o);o-tickTimes[0]>=1e3;)tickTimes.splice(0,1)}),bus.on("start",()=>{startTime=Date.now()-backgroundMusic.actx.currentTime*1e3}),document.addEventListener("keydown",o=>{let s=!1;o.keyCode==65&&(chart.notes.forEach(a=>{s||a.a||a.t!="A"||(Math.abs(a.h-sec)<=.08?(s=!0,a.a=1,a.aa=sec,bus.emit("hit",1)):Math.abs(a.h-sec)<=.16&&(s=!0,a.a=2,a.aa=sec,bus.emit("hit",2)))}),s||bus.emit("miss",null)),o.keyCode==76&&(chart.notes.forEach(a=>{s||a.a||a.t!="B"||(Math.abs(a.h-sec)<=.08?(s=!0,a.a=1,a.aa=sec,bus.emit("hit",1)):Math.abs(a.h-sec)<=.16&&(s=!0,a.a=2,a.aa=sec,bus.emit("hit",2)))}),s||bus.emit("miss",null))}),document.addEventListener("keyup",o=>{o.keyCode==65&&chart.notes.forEach(s=>{s.a<=0||s.t!="A"||s.y!="A"||s.h+s.al-sec>0&&s.h-sec<0&&(pointsGot-=s.a==1?100:75,s.a==1?perfect--:good--,s.a=-1,s.aa=0,bus.emit("miss",null))}),o.keyCode==76&&chart.notes.forEach(s=>{s.a<=0||s.t!="B"||s.y!="A"||s.h+s.al-sec>0&&s.h-sec<0&&(pointsGot-=s.a==1?100:75,s.a==1?perfect--:good--,s.a=-1,s.aa=0,bus.emit("miss",null))})}),r==null)throw ec.clear(),renderText("游戏加载错误，请尝试刷新",1600,900,"center",200,new RGBAColor(200,200,200)),new Error("No data file given.");let e;if(await chartLoader.loadAsJson(`${r}.json`).then(async o=>e=o.default),e==null)throw ec.clear(),renderText("游戏加载错误，请尝试刷新",1600,900,"center",200,new RGBAColor(200,200,200)),new Error("Data file has nothing or corrupted or not exist.");e.script&&await scriptLoader.inject(e.script),ec.clear(),renderText("点击屏幕开始",1600,900,"center",200,new RGBAColor(230,230,230)),await new Promise(o=>{document.onclick=()=>{document.onclick=null,o(null)}}),hitSoundManager=new SoundManager(hit),backgroundMusic=new EnhancedAudioContext(new AudioContext),await backgroundMusic.actx.suspend(),await hitSoundManager.load(),e.bgsound?await backgroundMusic.load(await soundLoader.loadAsUrl(e.bgsound)):await backgroundMusic.load(blank),backgroundMusic.setVolume(backgroundVolume),hitSoundManager.setVolume(hitVolume),chart=new Chart(e),bus.on("start",()=>{let o=setInterval(async function(){if(paused){pausedTime=(Date.now()-startTime)/1e3-sec;return}nextFrame(),sec=(Date.now()-startTime)/1e3-pausedTime,bus.emit("tick",sec),chart.animationNotes.forEach(s=>{s.a==12&&sec-s.aa>s.hi?(s.a=0,s.aa=0):Math.abs(s.h-sec)<=1.5/tps?s.ho&&(s.a=11,s.aa=sec):s.hi!=null&&Math.abs(s.h-s.p.spd-s.hi-sec)<=1.5/tps&&(s.a=12,s.aa=sec),drawNote(s),drawA(s)}),chart.notes.forEach(s=>{drawClackLine(s)}),chart.notes.forEach(s=>{sec-s.h>.16&&!s.a&&(s.a=-1,bus.emit("miss",null)),drawNote(s)}),chart.notes.forEach(s=>{drawA(s)}),drawTexts(),sec>=e.length&&(clearInterval(o),paused=!0,location.replace(`./finish.html?i=${r}&c=${maxCombo}&t=${(pointsGot/chart.notesTotal/100*1e5).toFixed(0)}&p=${perfect}&g=${good}&m=${chart.notesTotal-perfect-good}`))},1e3/tps)}),ec.clear(),await backgroundMusic.actx.resume(),backgroundMusic.play(),bus.emit("start",null)}globalThis.cinject=(k,v)=>{eval(`${k}=${v}`)};window.onload=main;const player=Object.freeze(Object.defineProperty({__proto__:null,bus,get ctx(){return ctx},drawA,drawClackLine,drawNote,get paused(){return paused},renderText,get sec(){return sec},tps},Symbol.toStringTag,{value:"Module"}));export{bus as b,renderText as r};
