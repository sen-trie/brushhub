import{S as h,U as Y,V as k,W as _,X as F,o,g as R,Y as u,l as x,t as K,Z as M,_ as U,$ as Z,b as q,a0 as O,c as A,p as S,h as T,a as B,E as C,a1 as H,a2 as V,a3 as W,a4 as D,d as X}from"./runtime.DB3OD_6s.js";function b(f,y=null,E){if(typeof f!="object"||f===null||h in f)return f;const g=U(f);if(g!==Y&&g!==k)return f;var a=new Map,d=Z(f),v=_(0);d&&a.set("length",_(f.length));var l;return new Proxy(f,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&F();var r=a.get(e);return r===void 0?(r=_(t.value),a.set(e,r)):o(r,b(t.value,l)),!0},deleteProperty(n,e){var t=a.get(e);if(t===void 0)e in n&&a.set(e,_(u));else{if(d&&typeof e=="string"){var r=a.get("length"),i=Number(e);Number.isInteger(i)&&i<r.v&&o(r,i)}o(t,u),j(v)}return!0},get(n,e,t){var c;if(e===h)return f;var r=a.get(e),i=e in n;if(r===void 0&&(!i||(c=R(n,e))!=null&&c.writable)&&(r=_(b(i?n[e]:u,l)),a.set(e,r)),r!==void 0){var s=x(r);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=x(r))}else if(t===void 0){var i=a.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===h)return!0;var t=a.get(e),r=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||K!==null&&(!r||(s=R(n,e))!=null&&s.writable)){t===void 0&&(t=_(r?b(n[e],l):u),a.set(e,t));var i=x(t);if(i===u)return!1}return r},set(n,e,t,r){var I;var i=a.get(e),s=e in n;if(d&&e==="length")for(var c=t;c<i.v;c+=1){var m=a.get(c+"");m!==void 0?o(m,u):c in n&&(m=_(u),a.set(c+"",m))}i===void 0?(!s||(I=R(n,e))!=null&&I.writable)&&(i=_(void 0),o(i,b(t,l)),a.set(e,i)):(s=i.v!==u,o(i,b(t,l)));var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(r,t),!s){if(d&&typeof e=="string"){var P=a.get("length"),N=Number(e);Number.isInteger(N)&&N>=P.v&&o(P,N+1)}j(v)}return!0},ownKeys(n){x(v);var e=Reflect.ownKeys(n).filter(i=>{var s=a.get(i);return s===void 0||s.v!==u});for(var[t,r]of a)r.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){M()}})}function j(f,y=1){o(f,f.v+y)}function L(f){return f!==null&&typeof f=="object"&&h in f?f[h]:f}function z(f,y){return Object.is(L(f),L(y))}function G(f,y,E,g=null,a=!1){T&&B();var d=f,v=null,l=null,n=null,e=a?C:0;q(()=>{if(n===(n=!!y()))return;let t=!1;if(T){const r=d.data===H;n===r&&(d=V(),W(d),D(!1),t=!0)}n?(v?O(v):v=A(()=>E(d)),l&&S(l,()=>{l=null})):(l?O(l):g&&(l=A(()=>g(d))),v&&S(v,()=>{v=null})),t&&D(!0)},e),T&&(d=X)}export{z as a,G as i,b as p};
