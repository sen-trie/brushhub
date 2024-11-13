import{l as tt}from"./index.BFqC5wTN.js";const ct=!1;var gn=Array.isArray,Rn=Array.from,xn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,In=Object.prototype,Sn=Array.prototype,Vt=Object.getPrototypeOf;const kn=()=>{};function Dn(t){return t()}function Kt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,vt=4,L=8,nt=16,y=32,G=64,S=128,B=256,p=512,R=1024,j=2048,C=4096,H=8192,$t=16384,pt=32768,On=65536,Gt=1<<18,ht=1<<19,ut=Symbol("$state");function dt(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Et(t){return!Zt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function Nn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function Fn(t){return nn(rt(t))}function qn(t,n=!1){var e;const r=rt(t);return n||(r.equals=Et),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function nn(t){return u!==null&&u.f&m&&(E===null?hn([t]):E.push(t)),t}function Mn(t,n){return u!==null&&lt()&&u.f&(m|nt)&&(E===null||!E.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=Mt(),yt(t,R),lt()&&a!==null&&a.f&p&&!(a.f&y)&&(_!==null&&_.includes(t)?(w(a,R),W(a)):g===null?dn([t]):g.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&R||!e&&o===a||(w(o,n),i&(p|S)&&(i&m?yt(o,j):W(o)))}}const Ln=1,jn=2,Hn=16,Yn=1,Un=2,Bn=4,Vn=8,Kn=16,$n=1,Gn=2,en="[",sn="[!",ln="]",wt={},Zn=Symbol();function Tt(t){console.warn("hydration_mismatch")}let I=!1;function Wn(t){I=t}let d;function F(t){if(t===null)throw Tt(),wt;return d=t}function Xn(){return F(k(d))}function zn(t){if(I){if(k(d)!==null)throw Tt(),wt;d=t}}function Jn(t=1){if(I){for(var n=t,r=d;n--;)r=k(r);d=r}}function Qn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=k(n);n.remove(),n=e}}var it,mt,At;function tr(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;mt=at(n,"firstChild").get,At=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function z(t){return mt.call(t)}function k(t){return At.call(t)}function nr(t,n){if(!I)return z(t);var r=z(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function rr(t,n){if(!I){var r=z(t);return r instanceof Comment&&r.data===""?k(r):r}return d}function er(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=k(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var l=X();return e==null||e.before(l),F(l),l}return F(e),e}function sr(t){t.textContent=""}function on(t){var n=m|R;a===null?n|=S:a.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:a};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function lr(t){const n=on(t);return n.equals=Et,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):b(e)}}}function Rt(t){var n,r=a;$(t.parent);try{gt(t),n=Lt(t)}finally{$(r)}return n}function xt(t){var n=Rt(t),r=(D||t.f&S)&&t.deps!==null?j:p;w(t,r),t.equals(n)||(t.v=n,t.version=Mt())}function et(t){gt(t),M(t,0),w(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){a===null&&u===null&&zt(),u!==null&&u.f&S&&Xt(),st&&Wt()}function an(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&G)!==0,l=a,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),Z(o),o.f|=$t}catch(c){throw b(o),c}finally{ft(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ht)===0;if(!T&&!s&&e&&(l!==null&&an(o,l),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(o)}return o}function or(t){const n=P(L,null,!1);return w(n,p),n.teardown=t,n}function ar(t){It();var n=a!==null&&(a.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:u})}else{var e=St(t);return e}}function ur(t){return It(),un(t)}function ir(t){const n=P(G,t,!0);return()=>{b(n)}}function St(t){return P(vt,t,!1)}function un(t){return P(L,t,!0)}function fr(t){return fn(t)}function fn(t,n=0){return P(L|nt|n,t,!0)}function _r(t,n=!0){return P(L|y,t,!0,n)}function kt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),K(null);try{n.call(null)}finally{_t(r),K(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Ot(t,n&&!r),Dt(t),M(t,0),w(t,H);var o=t.transitions;if(o!==null)for(const T of o)T.stop();kt(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function cr(t,n){var r=[];Ct(t,r,!0),cn(r,()=>{b(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&pt)!==0||(e.f&y)!==0;Ct(e,n,l?r:!1),e=s}}}function vr(t){Pt(t,!0)}function Pt(t,n){if(t.f&C){Y(t)&&Z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,J=[];function bt(){V=!1;const t=J.slice();J=[],Kt(t)}function pr(t){V||(V=!0,queueMicrotask(bt)),J.push(t)}function vn(){V&&bt()}const Ft=0,pn=1;let U=Ft,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let x=[],N=0;let u=null;function K(t){u=t}let a=null;function $(t){a=t}let E=null;function hn(t){E=t}let _=null,h=0,g=null;function dn(t){g=t}let qt=0,D=!1,f=null;function Mt(){return++qt}function lt(){return!tt||f!==null&&f.l===null}function Y(t){var o,i;var n=t.f;if(n&R)return!0;if(n&j){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(Y(l)&&xt(l),e&&a!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Lt(t){var ot;var n=_,r=h,e=g,s=u,l=D,o=E,i=f,T=t.f;_=null,h=0,g=null,u=T&(y|G)?null:t,D=!O&&(T&S)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,D=l,E=o,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,j),n.f&(S|B)||(n.f^=B),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&H)){w(t,p);var r=a;a=t;try{n&nt?_n(t):Ot(t),Dt(t),kt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){En(s)}finally{a=r}}}function jt(){N>1e3&&(N=0,Jt()),N++}function Ht(t){var n=t.length;if(n!==0){jt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Yt(s,l),wn(l)}}finally{O=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|C))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=x;x=[],Ht(t),q||(N=0)}function W(t){U===Ft&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|y)){if(!(r&p))return;n.f^=p}}x.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,o=l&&(s&p)!==0;if(!o&&!(s&C))if(s&L){l?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&vt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function Ut(t){var n=U,r=x;try{jt();const s=[];U=pn,x=s,q=!1,Ht(r);var e=t==null?void 0:t();return vn(),(x.length>0||s.length>0)&&Ut(),N=0,e}finally{U=n,x=r}}async function hr(){await Promise.resolve(),Ut()}function dr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&H){var e=Rt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Qt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&a!==null&&a.f&p&&!(a.f&y)&&g.includes(t)&&(w(a,R),W(a))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,Y(l)&&xt(l)),t.v}function Er(t){const n=u;try{return u=null,t()}finally{u=n}}const mn=~(R|j|p);function w(t,n){t.f=t.f&mn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function wr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=a,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];$(l.effect),K(l.reaction),St(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ir as $,er as A,kn as B,or as C,qn as D,pt as E,Mn as F,z as G,sn as H,X as I,Gn as J,a as K,K as L,$ as M,u as N,pr as O,xn as P,gn as Q,tr as R,en as S,$n as T,k as U,wt as V,ln as W,Tt as X,Nn as Y,sr as Z,Rn as _,_r as a,ut as a0,In as a1,Sn as a2,rt as a3,Pn as a4,Zn as a5,at as a6,bn as a7,Vt as a8,St as a9,un as aa,Cn as ab,On as ac,Bn as ad,Et as ae,y as af,G as ag,Yn as ah,Un as ai,Vn as aj,lr as ak,Kn as al,Ut as am,hr as an,Fn as ao,C as ap,rn as aq,Ct as ar,cn as as,b as at,jn as au,Ln as av,Hn as aw,Zt as ax,fn as b,Xn as c,Qn as d,Wn as e,d as f,ar as g,I as h,f as i,Er as j,Kt as k,dr as l,Dn as m,Tr as n,on as o,cr as p,Jn as q,vr as r,F as s,yr as t,ur as u,rr as v,fr as w,wr as x,nr as y,zn as z};
