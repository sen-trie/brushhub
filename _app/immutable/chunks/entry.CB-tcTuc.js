var Zt=t=>{throw TypeError(t)};var Fe=(t,e,n)=>e.has(t)||Zt("Cannot "+n);var b=(t,e,n)=>(Fe(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Zt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{f as It,aJ as Ve,b as O,g as C,d as N,ay as Be}from"./runtime.NkCrfN_B.js";import{o as Qt}from"./index-client.DEimdaJB.js";new URL("sveltekit-internal://");function qe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ge(t){return t.split("%25").map(decodeURI).join("%25")}function Me(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Ut({href:t}){return t.split("#")[0]}function He(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));e();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ke="/__data.json",We=".html__data.json";function Ye(t){return t.endsWith(".html")?t.replace(/\.html$/,We):t.replace(/\/$/,"")+Ke}function ze(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Je(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const pe=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(jt(t)),pe(t,e));const Y=new Map;function Xe(t,e){const n=jt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Je(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function Ze(t,e,n){if(Y.size>0){const r=jt(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function jt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${ze(...a)}"]`}return r}const Qe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function tn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${nn(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Lt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=Qe.exec(c),[,d,y,u,g]=h;return e.push({name:u,matcher:g,optional:!!d,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return Lt(c)}).join("")}).join("")}/?$`),params:e}}function en(t){return!/^\([^)]+\)$/.test(t)}function nn(t){return t.slice(1).split("/").filter(en)}function rn(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=e[s+1],d=a[s+1];h&&!h.rest&&h.optional&&d&&c.chained&&(i=0),!h&&!d&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function an({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,h]])=>{const{pattern:d,params:y}=tn(s),u={id:s,exec:g=>{const f=d.exec(g);if(f)return rn(f,y,r)},errors:[1,...h||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function ge(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function te(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const V=[];function $t(t,e=It){let n=null;const r=new Set;function a(s){if(Ve(t,s)&&(t=s,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(s){a(s(t))}function i(s,c=It){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||It),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}var le;const P=((le=globalThis.__sveltekit_4msw0l)==null?void 0:le.base)??"/brushhub";var fe;const on=((fe=globalThis.__sveltekit_4msw0l)==null?void 0:fe.assets)??P,sn="1737847660108",me="sveltekit:snapshot",ye="sveltekit:scroll",_e="sveltekit:states",cn="sveltekit:pageurl",q="sveltekit:history",X="sveltekit:navigation",ht={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function we(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Dt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ee={...ht,"":ht.hover};function ve(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function be(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ve(t)}}function Ot(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function dt(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),e===null&&(e=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=ve(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ee[r??"off"],preload_data:ee[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function ne(t){const e=$t(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const ke={v:()=>{}};function ln(){const{set:t,subscribe:e}=$t(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${on}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==sn;return i&&(t(!0),ke.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function re(t){const e=un(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const fn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function un(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=fn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const hn=-1,dn=-2,pn=-3,gn=-4,mn=-5,yn=-6;function _n(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===hn)return;if(o===pn)return NaN;if(o===gn)return 1/0;if(o===mn)return-1/0;if(o===yn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const h=new Set;r[o]=h;for(let u=1;u<s.length;u+=1)h.add(a(s[u]));break;case"Map":const d=new Map;r[o]=d;for(let u=1;u<s.length;u+=2)d.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=re(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=re(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const h=s[l];h!==dn&&(c[l]=a(h))}}else{const c={};r[o]=c;for(const l in s){const h=s[l];c[l]=a(h)}}return r[o]}return a(0)}const Ae=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ae];const wn=new Set([...Ae]);[...wn];function vn(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Se{constructor(e,n){this.status=e,this.location=n}}class Ft extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const bn="x-sveltekit-invalidated",kn="x-sveltekit-trailing-slash";function pt(t){return t instanceof bt||t instanceof Ft?t.status:500}function An(t){return t instanceof Ft?t.text:"Internal Error"}let U,Z,Tt;const Sn=Qt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Qt.toString());var et,nt,rt,at,ot,st,it,ct,ue,lt,he,ft,de;Sn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Tt={current:!1}):(U=new(ue=class{constructor(){x(this,et,O({}));x(this,nt,O(null));x(this,rt,O(null));x(this,at,O({}));x(this,ot,O({id:null}));x(this,st,O({}));x(this,it,O(-1));x(this,ct,O(new URL("https://example.com")))}get data(){return C(b(this,et))}set data(e){N(b(this,et),e)}get form(){return C(b(this,nt))}set form(e){N(b(this,nt),e)}get error(){return C(b(this,rt))}set error(e){N(b(this,rt),e)}get params(){return C(b(this,at))}set params(e){N(b(this,at),e)}get route(){return C(b(this,ot))}set route(e){N(b(this,ot),e)}get state(){return C(b(this,st))}set state(e){N(b(this,st),e)}get status(){return C(b(this,it))}set status(e){N(b(this,it),e)}get url(){return C(b(this,ct))}set url(e){N(b(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,ue),Z=new(he=class{constructor(){x(this,lt,O(null))}get current(){return C(b(this,lt))}set current(e){N(b(this,lt),e)}},lt=new WeakMap,he),Tt=new(de=class{constructor(){x(this,ft,O(!1))}get current(){return C(b(this,ft))}set current(e){N(b(this,ft),e)}},ft=new WeakMap,de),ke.v=()=>Tt.current=!0);function Ee(t){Object.assign(U,t)}const En=new Set(["icon","shortcut icon","apple-touch-icon"]),F=ge(ye)??{},Q=ge(me)??{},$={url:ne({}),page:ne({}),navigating:$t(null),updated:ln()};function Vt(t){F[t]=Dt()}function Rn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function Re(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function ae(){}let kt,Ct,gt,j,Nt,A;const Bt=[],mt=[];let L=null;const Ie=new Set,In=new Set,z=new Set;let _={branch:[],error:null,url:null},qt=!1,yt=!1,oe=!0,tt=!1,K=!1,Ue=!1,Gt=!1,Mt,I,T,H;const J=new Set;let Pt;async function Gn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),A=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),kt=an(t),j=document.documentElement,Nt=e,Ct=t.nodes[0],gt=t.nodes[1],Ct(),gt(),I=(i=history.state)==null?void 0:i[q],T=(s=history.state)==null?void 0:s[X],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[X]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Nn(Nt,n):On(location.href,{replaceState:!0}),Cn()}async function Un(){if(await(Pt||(Pt=Promise.resolve())),!Pt)return;Pt=null;const t=St(_.url,!0);L=null;const e=H={},n=t&&await Yt(t);if(!(!n||e!==H)){if(n.type==="redirect")return Ht(new URL(n.location,_.url).href,{},1,e);n.props.page&&Object.assign(U,n.props.page),_=n.state,Le(),Mt.$set(n.props),Ee(n.props.page)}}function Le(){Bt.length=0,Gt=!1}function Te(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Pe(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=mt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function se(){Vt(I),te(ye,F),Te(T),te(me,Q)}async function Ht(t,e,n,r){return W({type:"goto",url:we(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Gt=!0)}})}async function Ln(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Yt({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xt(t){const e=kt.find(n=>n.exec(Oe(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function xe(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),Mt=new A.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Pe(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),yt=!0}function _t({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=qe(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:vn(n).map(u=>u.node.component),page:zt(U)}};i!==void 0&&(c.props.form=i);let l={},h=!U,d=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(h=!0),g&&(l={...l,...g.data},h&&(c.props[`data_${d}`]=l),d+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||h)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:h?l:U.data}),c}async function Kt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var h,d,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((h=l.universal)!=null&&h.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:He(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),yt?Ze(k,E.href,p):Xe(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(d=l.universal)!=null&&d.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ie(t,e,n,r,a,o){if(Gt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Bt.some(s=>s(new URL(i))))return!0;return!1}function Wt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Tn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ce({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:zt(U),constructors:[]}}}async function Yt({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let h=null;const d=_.url?t!==wt(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=Tn(_.url,n);let g=!1;const f=l.map((m,w)=>{var D;const S=_.branch[w],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||ie(g,y,d,u,(D=S.server)==null?void 0:D.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{h=await je(n,f)}catch(m){const w=await G(m,{url:n,params:r,route:{id:t}});return J.has(o)?ce({error:w,url:n,params:r,route:a}):At({status:pt(m),error:w,url:n,route:a})}if(h.type==="redirect")return h}const p=h==null?void 0:h.nodes;let k=!1;const E=l.map(async(m,w)=>{var Et;if(!m)return;const S=_.branch[w],R=p==null?void 0:p[w];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!ie(k,y,d,u,(Et=S.universal)==null?void 0:Et.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Kt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Xt;const Jt={};for(let Rt=0;Rt<w;Rt+=1)Object.assign(Jt,(Xt=await E[Rt])==null?void 0:Xt.data);return Jt},server_data_node:Wt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await E[m])}catch(w){if(w instanceof Se)return{type:"redirect",location:w.location};if(J.has(o))return ce({error:await G(w,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=pt(w),R;if(p!=null&&p.includes(w))S=w.status??S,R=w.error;else if(w instanceof bt)R=w.body;else{if(await $.updated.check())return await Re(),await M(n);R=await G(w,{params:r,url:n,route:{id:a.id}})}const D=await Pn(m,v,i);return D?_t({url:n,params:r,branch:v.slice(0,D.idx).concat(D.node),status:S,error:R,route:a}):await Ne(n,{id:a.id},R,S)}else v.push(void 0);return _t({url:n,params:r,branch:v,status:200,error:null,route:a,form:e?void 0:null})}async function Pn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:r}){const a={};let o=null;if(A.server_loads[0]===0)try{const l=await je(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||qt)&&await M(n)}const s=await Kt({loader:Ct,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Wt(o)}),c={node:await gt(),loader:gt,universal:null,server:null,data:null};return _t({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function St(t,e){if(!t||vt(t,P,A.hash))return;let n;try{if(n=A.hooks.reroute({url:new URL(t)})??t,typeof n=="string"){const a=new URL(t);A.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Oe(n);for(const a of kt){const o=a.exec(r);if(o)return{id:wt(t),invalidating:e,route:a,params:Me(o),url:t}}}function Oe(t){return Ge(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(P.length))||"/"}function wt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ce({url:t,type:e,intent:n,delta:r}){let a=!1;const o=De(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return tt||Ie.forEach(s=>s(i)),a?null:o}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=ae,block:h=ae}){const d=St(e,!1),y=Ce({url:e,type:t,delta:n==null?void 0:n.delta,intent:d});if(!y){h();return}const u=I,g=T;l(),tt=!0,yt&&$.navigating.set(Z.current=y.navigation),H=c;let f=d&&await Yt(d);if(!f){if(vt(e,P,A.hash))return await M(e);f=await Ne(e,{id:null},await G(new Ft(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(d==null?void 0:d.url)||e,H!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await At({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Ht(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Re(),await M(e));if(Le(),Vt(u),Te(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=o?0:1,m={[q]:I+=v,[X]:T+=v,[_e]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||Rn(I,T)}if(L=null,f.props.page.state=i,yt){_=f.state,f.props.page&&(f.props.page.url=e);const v=(await Promise.all(Array.from(In,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(w=>{z.delete(w)})};v.push(m),v.forEach(w=>{z.add(w)})}Mt.$set(f.props),Ee(f.props.page),Ue=!0}else xe(f,Nt,!1);const{activeElement:p}=document;await Be();const k=n?n.scroll:a?Dt():null;if(oe){const v=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):v?v.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&jn(),oe=!0,f.props.page&&Object.assign(U,f.props.page),tt=!1,t==="popstate"&&Pe(T),y.fulfil(void 0),z.forEach(v=>v(y.navigation)),$.navigating.set(Z.current=null)}async function Ne(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!qt?await At({status:r,error:n,url:t,route:e}):await M(t)}function xn(){let t;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(xt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=be(o,j);if(!s)return;const{url:c,external:l,download:h}=Ot(s,P,A.hash);if(l||h)return;const d=dt(s),y=c&&wt(_.url)===wt(c);if(!d.reload&&!y)if(i<=d.preload_data){const u=St(c,!1);u&&Ln(u)}else i<=d.preload_code&&xt(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=Ot(o,P,A.hash);if(s||c)continue;const l=dt(o);l.reload||(l.preload_code===ht.viewport&&n.observe(o),l.preload_code===ht.eager&&xt(i))}}z.add(a),a()}function G(t,e){if(t instanceof bt)return t.body;const n=pt(t),r=An(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function On(t,e={}){return t=new URL(we(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Ht(t,e,0)}function Mn(t){{const{href:e}=new URL(t,location.href);Bt.push(n=>n.href===e)}return Un()}function Cn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(se(),!tt){const a=De(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ie.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&se()}),(e=navigator.connection)!=null&&e.saveData||xn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=be(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=Ot(r,P,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[h,d]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===Ut(location);if(o||c.reload&&(!y||!d)){Ce({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(d!==void 0&&y){const[,u]=_.url.href.split("#");if(u===d){if(n.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(d));g&&(g.scrollIntoView(),g.focus())}return}if(K=!0,Vt(I),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(s,P,!1))return;const c=n.target,l=dt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),d=a==null?void 0:a.getAttribute("name");d&&h.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(h).toString(),W({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(H={},a===I)return;const o=F[a],i=n.state[_e]??{},s=new URL(n.state[cn]??location.href),c=n.state[X],l=Ut(location)===Ut(_.url);if(c===T&&(Ue||l)){i!==U.state&&(U.state=i),t(s),F[I]=Dt(),o&&scrollTo(o.x,o.y),I=a;return}const d=a-I;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:d},accept:()=>{I=a,T=c},block:()=>{history.go(-d)},nav_token:H})}else if(!K){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[q]:++I,[X]:T},"",location.href)):A.hash&&_.url.hash===location.hash&&W({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))En.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function t(n){_.url=U.url=n,$.page.set(zt(U)),$.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){qt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=St(c,!1)||{});let l,h=!0;try{const d=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=$e(p.uses)),Kt({loader:A.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await d[E]).data);return k},server_data_node:Wt(p)})}),y=await Promise.all(d),u=kt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=_t({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(d){if(d instanceof Se){await M(new URL(d.location,location.href));return}l=await At({status:pt(d),error:await G(d,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",h=!1}l.props.page&&(l.props.page.state={}),xe(l,t,h)}async function je(t,e){var a;const n=new URL(t);n.pathname=Ye(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(kn,"1"),n.searchParams.append(bn,e.map(o=>o?"1":"0").join(""));const r=await pe(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new bt(r.status,o)}return new Promise(async o=>{var d;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return _n(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let h="";for(;;){const{done:y,value:u}=await s.read();if(y&&!h)break;for(h+=!u&&h?`
`:c.decode(u,{stream:!0});;){const g=h.indexOf(`
`);if(g===-1)break;const f=JSON.parse(h.slice(0,g));if(h=h.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(d=f.nodes)==null||d.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=$e(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,v=i.get(p);i.delete(p),E?v.reject(l(E)):v.fulfil(l(k))}}}})}function $e(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function jn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function De(t,e,n,r){var c,l;let a,o;const i=new Promise((h,d)=>{a=h,o=d});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}function zt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}export{bt as H,Gn as a,P as b,On as g,Mn as i,U as p,$ as s,Tt as u};
