import{as as b,G as E,ab as V,M as O,S as Y,a1 as q,at as z,W as B,au as L,a9 as C,av as P,af as $,aw as S,_ as w,V as D,w as j,z as p,aa as G,ax as X,ay as x,a6 as F,X as J,az as K,T as Q,y as U,p as Z,h as N,l as rr,c as tr}from"./runtime.CTyMkRS6.js";import{b as ar,c as er}from"./template.DRBod4Mf.js";function k(r){var t=V,e=O;b(null),E(null);try{return r()}finally{b(t),E(e)}}function cr(r,t,e,i=e){r.addEventListener(t,()=>k(e));const n=r.__on_r;n?r.__on_r=()=>{n(),i()}:r.__on_r=i,ar()}const I=new Set,R=new Set;function nr(r,t,e,i){function n(a){if(i.capture||y.call(t,a),!a.cancelBubble)return k(()=>e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?q(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function dr(r,t,e,i,n){var a={capture:i,passive:n},f=nr(r,t,e,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(r,f,a)})}function lr(r){for(var t=0;t<r.length;t++)I.add(r[t]);for(var e of R)e(r)}function y(r){var A;var t=this,e=t.ownerDocument,i=r.type,n=((A=r.composedPath)==null?void 0:A.call(r))||[],a=n[0]||r.target,f=0,h=r.__root;if(h){var d=n.indexOf(h);if(d!==-1&&(t===document||t===window)){r.__root=t;return}var l=n.indexOf(t);if(l===-1)return;d<=l&&(f=d)}if(a=n[f]||r.target,a!==t){z(r,"currentTarget",{configurable:!0,get(){return a||e}});var T=V,u=O;b(null),E(null);try{for(var s,o=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+i];if(_!==void 0&&!a.disabled)if(B(_)){var[W,...H]=_;W.apply(a,[r,...H])}else _.call(a,r)}catch(g){s?o.push(g):s=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=t,delete r.currentTarget,b(T),E(u)}}}const sr=["touchstart","touchmove"];function ir(r){return sr.includes(r)}function _r(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function or(r,t){return M(r,t)}function hr(r,t){L(),t.intro=t.intro??!1;const e=t.target,i=N,n=p;try{for(var a=C(e);a&&(a.nodeType!==8||a.data!==P);)a=$(a);if(!a)throw S;w(!0),D(a),j();const f=M(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==G)throw X(),S;return w(!1),f}catch(f){if(f===S)return t.recover===!1&&x(),L(),F(e),w(!1),or(r,t);throw f}finally{w(i),D(n)}}const v=new Map;function M(r,{target:t,anchor:e,props:i={},events:n,context:a,intro:f=!0}){L();var h=new Set,d=u=>{for(var s=0;s<u.length;s++){var o=u[s];if(!h.has(o)){h.add(o);var c=ir(o);t.addEventListener(o,y,{passive:c});var _=v.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),v.set(o,1)):v.set(o,_+1)}}};d(J(I)),R.add(d);var l=void 0,T=K(()=>{var u=e??t.appendChild(Q());return U(()=>{if(a){Z({});var s=tr;s.c=a}n&&(i.$$events=n),N&&er(u,null),l=r(u,i)||{},N&&(O.nodes_end=p),a&&rr()}),()=>{var c;for(var s of h){t.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}R.delete(d),m.delete(l),u!==e&&((c=u.parentNode)==null||c.removeChild(u))}});return m.set(l,T),l}let m=new WeakMap;function vr(r){const t=m.get(r);t&&t()}export{lr as d,dr as e,hr as h,cr as l,or as m,_r as s,vr as u};
