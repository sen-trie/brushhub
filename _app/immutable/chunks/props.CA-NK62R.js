import{g as q,f as y,L as C,B as F,R as N,s as O,P as x,u as A,j as L,k as U,l,m as M,n as Y,o as $,t as T,v as j,w as z,x as G,y as H}from"./runtime.DB3OD_6s.js";import{p as V}from"./if.CGNK2Ke6.js";import{c as Z}from"./store.CjOx6k1S.js";import{l as J}from"./index.BFqC5wTN.js";function w(a){for(var r=T,t=T;r!==null&&!(r.f&(F|N));)r=r.parent;try{return O(r),a()}finally{O(t)}}function k(a,r,t,v){var h;var I=(t&j)!==0,d=!J||(t&x)!==0,R=(t&z)!==0,B=(t&G)!==0,S=!1,f;R?[f,S]=Z(()=>a[r]):f=a[r];var s=(h=q(a,r))==null?void 0:h.set,n=v,c=!0,o=!1,p=()=>(o=!0,c&&(c=!1,B?n=A(v):n=v),n);f===void 0&&v!==void 0&&(s&&d&&y(),f=p(),s&&s(f));var u;if(d)u=()=>{var e=a[r];return e===void 0?p():(c=!0,o=!1,e)};else{var b=w(()=>(I?L:U)(()=>a[r]));b.f|=C,u=()=>{var e=l(b);return e!==void 0&&(n=void 0),e===void 0?n:e}}if(!(t&M))return u;if(s){var D=a.$$legacy;return function(e,i){return arguments.length>0?((!d||!i||D||S)&&s(i?u():e),e):u()}}var m=!1,g=!1,P=H(f),_=w(()=>L(()=>{var e=u(),i=l(P);return m?(m=!1,g=!0,i):(g=!1,P.v=e)}));return I||(_.equals=Y),function(e,i){if(arguments.length>0){const E=i?l(_):d&&R?V(e):e;return _.equals(E)||(m=!0,$(P,E),o&&n!==void 0&&(n=E),A(()=>l(_))),e}return l(_)}}export{k as p};