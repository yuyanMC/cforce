import{i as P,a,c as w,e as L,b as x,d as M,f as T,h as _,g as O,j as R,k as I,l as N,m as B}from"./_plugin-vue_export-helper-d6ea623c.js";const H="http://www.w3.org/2000/svg",u=typeof document<"u"?document:null,g=u&&u.createElement("template"),z={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?u.createElementNS(H,e):u.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{g.innerHTML=i?`<svg>${e}</svg>`:e;const c=g.content;if(i){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function D(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function W(e,t,n){const i=e.style,s=a(n);if(n&&!s){if(t&&!a(t))for(const r in t)n[r]==null&&m(i,r,"");for(const r in n)m(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const b=/\s*!important$/;function m(e,t,n){if(T(n))n.forEach(i=>m(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=q(e,t);b.test(n)?e.setProperty(_(i),n.replace(b,""),"important"):e[i]=n}}const S=["Webkit","Moz","ms"],p={};function q(e,t){const n=p[t];if(n)return n;let i=O(t);if(i!=="filter"&&i in e)return p[t]=i;i=R(i);for(let s=0;s<S.length;s++){const r=S[s]+i;if(r in e)return p[t]=r}return t}const A="http://www.w3.org/1999/xlink";function $(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(A,t.slice(6,t.length)):e.setAttributeNS(A,t,n);else{const r=I(t);n==null||r&&!N(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function j(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,h=n??"";l!==h&&(e.value=h),n==null&&e.removeAttribute(t);return}let f=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=N(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{e[t]=n}catch{}f&&e.removeAttribute(t)}function F(e,t,n,i){e.addEventListener(t,n,i)}function U(e,t,n,i){e.removeEventListener(t,n,i)}function X(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[c,f]=J(t);if(i){const l=r[t]=Y(i,s);F(e,c,l,f)}else o&&(U(e,c,o,f),r[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function J(e){let t;if(C.test(e)){t={};let i;for(;i=e.match(C);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_(e.slice(2)),t]}let d=0;const K=Promise.resolve(),Q=()=>d||(K.then(()=>d=0),d=Date.now());function Y(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;B(Z(i,n.value),t,5,[i])};return n.value=e,n.attached=Q(),n}function Z(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const E=/^on[a-z]/,G=(e,t,n,i,s=!1,r,o,c,f)=>{t==="class"?D(e,i,s):t==="style"?W(e,n,i):x(t)?M(t)||X(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):V(e,t,i,s))?j(e,t,i,r,o,c,f):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),$(e,t,i,s))};function V(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&E.test(t)&&P(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||E.test(t)&&a(n)?!1:t in e}const y=L({patchProp:G},z);let v;function k(){return v||(v=w(y))}const nt=(...e)=>{const t=k().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=tt(i);if(!s)return;const r=t._component;!P(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function tt(e){return a(e)?document.querySelector(e):e}export{nt as c};
