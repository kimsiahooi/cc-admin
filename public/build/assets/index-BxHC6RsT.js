import{q as O,a5 as _,a6 as G,a7 as p,$ as T,a8 as V,Z as D,a9 as J,aa as z,M as U,c as b,ab as w,A as F,ac as C,x as k,B as q,G as K,u as Q}from"./app-CoWngWRx.js";function fe(e,t){var n;const o=w();return F(()=>{o.value=e()},{...t,flush:(n=void 0)!=null?n:"sync"}),C(o)}function y(e){return _()?(G(e),!0):!1}function de(e){let t=!1,n;const o=z(!0);return(...s)=>(t||(n=o.run(()=>e(...s)),t=!0),n)}const x=new WeakMap,Z=(...e)=>{var t;const n=e[0],o=(t=T())==null?void 0:t.proxy;if(o==null&&!V())throw new Error("injectLocal must be called in setup");return o&&x.has(o)&&n in x.get(o)?x.get(o)[n]:D(...e)};function ve(e){let t=0,n,o;const s=()=>{t-=1,o&&t<=0&&(o.stop(),n=void 0,o=void 0)};return(...u)=>(t+=1,o||(o=z(!0),n=o.run(()=>e(...u))),y(s),n)}const P=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const H=e=>typeof e<"u",X=Object.prototype.toString,Y=e=>X.call(e)==="[object Object]",ee=()=>{},me=te();function te(){var e,t;return P&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function N(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function ne(e){return T()}function j(e){return Array.isArray(e)?e:[e]}function pe(e,t=1e4){return J((n,o)=>{let s=p(e),u;const l=()=>setTimeout(()=>{s=p(e),o()},p(t));return y(()=>{clearTimeout(u)}),{get(){return n(),s},set(i){s=i,o(),clearTimeout(u),u=l()}}})}const he=p;function we(e,t){ne()&&U(e,t)}function oe(e,t,n={}){const{immediate:o=!0,immediateCallback:s=!1}=n,u=w(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function r(){u.value=!1,i()}function a(...c){s&&e(),i(),u.value=!0,l=setTimeout(()=>{u.value=!1,l=null,e(...c)},p(t))}return o&&(u.value=!0,P&&a()),y(r),{isPending:C(u),start:a,stop:r}}function be(e=1e3,t={}){const{controls:n=!1,callback:o}=t,s=oe(o??ee,e,t),u=b(()=>!s.isPending.value);return n?{ready:u,...s}:u}function ie(e,t,n){return O(e,t,{...n,immediate:!0})}const S=P?window:void 0;function E(e){var t;const n=p(e);return(t=n==null?void 0:n.$el)!=null?t:n}function $(...e){const t=[],n=()=>{t.forEach(i=>i()),t.length=0},o=(i,r,a,c)=>(i.addEventListener(r,a,c),()=>i.removeEventListener(r,a,c)),s=b(()=>{const i=j(p(e[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0}),u=ie(()=>{var i,r;return[(r=(i=s.value)==null?void 0:i.map(a=>E(a)))!=null?r:[S].filter(a=>a!=null),j(p(s.value?e[1]:e[0])),j(Q(s.value?e[2]:e[1])),p(s.value?e[3]:e[2])]},([i,r,a,c])=>{if(n(),!(i!=null&&i.length)||!(r!=null&&r.length)||!(a!=null&&a.length))return;const v=Y(c)?{...c}:c;t.push(...i.flatMap(d=>r.flatMap(f=>a.map(m=>o(d,f,m,v)))))},{flush:"post"}),l=()=>{u(),n()};return y(n),l}function se(){const e=w(!1),t=T();return t&&K(()=>{e.value=!0},t),e}function B(e){const t=se();return b(()=>(t.value,!!e()))}function ue(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function ye(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:s=S,eventName:u="keydown",passive:l=!1,dedupe:i=!1}=o,r=ue(t);return $(s,u,c=>{c.repeat&&p(i)||r(c)&&n(c)},l)}function Se(e,t={}){const{immediate:n=!0,fpsLimit:o=void 0,window:s=S,once:u=!1}=t,l=w(!1),i=b(()=>o?1e3/p(o):null);let r=0,a=null;function c(f){if(!l.value||!s)return;r||(r=f);const m=f-r;if(i.value&&m<i.value){a=s.requestAnimationFrame(c);return}if(r=f,e({delta:m,timestamp:f}),u){l.value=!1,a=null;return}a=s.requestAnimationFrame(c)}function v(){!l.value&&s&&(l.value=!0,r=0,a=s.requestAnimationFrame(c))}function d(){l.value=!1,a!=null&&s&&(s.cancelAnimationFrame(a),a=null)}return n&&v(),y(d),{isActive:C(l),pause:d,resume:v}}const re=Symbol("vueuse-ssr-width");function ae(){const e=V()?Z(re,null):null;return typeof e=="number"?e:void 0}function ge(e,t={}){const{window:n=S,ssrWidth:o=ae()}=t,s=B(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),u=w(typeof o=="number"),l=w(),i=w(!1),r=a=>{i.value=a.matches};return F(()=>{if(u.value){u.value=!s.value;const a=p(e).split(",");i.value=a.some(c=>{const v=c.includes("not all"),d=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let m=!!(d||f);return d&&m&&(m=o>=N(d[1])),f&&m&&(m=o<=N(f[1])),v?!m:m});return}s.value&&(l.value=n.matchMedia(p(e)),i.value=l.value.matches)}),$(l,"change",r,{passive:!0}),b(()=>i.value)}function le(e){return JSON.parse(JSON.stringify(e))}function Ae(e,t,n={}){const{window:o=S,...s}=n;let u;const l=B(()=>o&&"ResizeObserver"in o),i=()=>{u&&(u.disconnect(),u=void 0)},r=b(()=>{const v=p(e);return Array.isArray(v)?v.map(d=>E(d)):[E(v)]}),a=O(r,v=>{if(i(),l.value&&o){u=new ResizeObserver(t);for(const d of v)d&&u.observe(d,s)}},{immediate:!0,flush:"post"}),c=()=>{i(),a()};return y(c),{isSupported:l,stop:c}}function Me(e,t,n,o={}){var s,u,l;const{clone:i=!1,passive:r=!1,eventName:a,deep:c=!1,defaultValue:v,shouldEmit:d}=o,f=T(),m=n||(f==null?void 0:f.emit)||((s=f==null?void 0:f.$emit)==null?void 0:s.bind(f))||((l=(u=f==null?void 0:f.proxy)==null?void 0:u.$emit)==null?void 0:l.bind(f==null?void 0:f.proxy));let g=a;t||(t="modelValue"),g=g||`update:${t.toString()}`;const L=h=>i?typeof i=="function"?i(h):le(h):h,R=()=>H(e[t])?L(e[t]):v,I=h=>{d?d(h)&&m(g,h):m(g,h)};if(r){const h=R(),W=k(h);let A=!1;return O(()=>e[t],M=>{A||(A=!0,W.value=L(M),q(()=>A=!1))}),O(W,M=>{!A&&(M!==e[t]||c)&&I(M)},{deep:c}),W}else return b({get(){return R()},set(h){I(h)}})}export{se as a,E as b,de as c,ve as d,me as e,$ as f,fe as g,Ae as h,P as i,he as j,S as k,be as l,Se as m,ge as n,ye as o,pe as r,we as t,Me as u};
