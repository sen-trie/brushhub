import{e as y,s as w}from"../chunks/services._xPLpAwU.js";import{g as j,u as C}from"../chunks/util.CfQX7Olw.js";import{r as R,D as l,V as x}from"../chunks/ViewCommission.b4Zcz_H5.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as O,am as b,f as T,a as k,H as c,k as h,c as m,s as I,b as p}from"../chunks/runtime.Bg64Jrmk.js";import{c as S,a as _,t as U}from"../chunks/template.nFEuBT-2.js";import{i as V}from"../chunks/if.GZK3E1Dr.js";import{p as D}from"../chunks/proxy.BIPFQ7So.js";import{T as Y}from"../chunks/Tabs.oHDLI1dt.js";const z=async()=>[{slug:"hungry_anne"}],A=({params:i})=>{const o=i.slug.toLowerCase(),a=j(),r=C.find(t=>t.username===o);if(!r||a.username!==r.username)throw y(404,"You are not the current user");let s=R.filter(t=>t.customerId===r.id);return s=s.map(t=>({...t,service:w.find(n=>n.id===t.serviceId)})),{request:s}},N=Object.freeze(Object.defineProperty({__proto__:null,entries:z,load:A},Symbol.toStringTag,{value:"Module"}));var F=U('<div><div class="overview-container p-4"><h2 class="mb-4 text-lg font-semibold">Your Orders</h2> <div><!></div></div></div>');function W(i,o){var v;O(o,!0);const a=(v=o.data)==null?void 0:v.request;let r=b(D({})),s=b(!1);const t=e=>{c(s,!0),c(r,D(e))};let n=[{label:"Active",value:1,component:l,props:{requestDB:a.filter(e=>e.state.value==="active"||e.state.value==="pending"),openRequest:t}},{label:"Cancelled / Rejected",value:2,component:l,props:{requestDB:a.filter(e=>e.state.value==="cancelled"||e.state.value==="rejected"),openRequest:t}},{label:"Finished",value:3,component:l,props:{requestDB:a.filter(e=>e.state.value==="finished"),openRequest:t}}];var d=S(),q=T(d);V(q,()=>h(s),e=>{x(e,{closeRequest:()=>c(s,!1),get request(){return h(r)}})},e=>{var u=F(),f=m(u),g=I(m(f),2),B=m(g);Y(B,{items:n}),p(g),p(f),p(u),_(e,u)}),_(i,d),k()}export{W as component,N as universal};
