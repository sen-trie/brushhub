import{e as q}from"../chunks/index.BS2gANe0.js";import{a as C,p}from"../chunks/util.SOMtIajs.js";import{c as w,h as O,a as h,t as j}from"../chunks/disclose-version.BdgloYrR.js";import{p as y,b as f,j as B,a as D,$ as R,g as m,d as c,s as T,c as V,r as $}from"../chunks/runtime.B7jOGP1B.js";import{i as k}from"../chunks/if.D5MR8JA_.js";import{p as l}from"../chunks/proxy.Dai5s8My.js";import{C as x,V as I}from"../chunks/CommissionOrderTab.DoQti2gg.js";const M=!1,S=async()=>[{slug:"hungry_anne"}],U=({params:d})=>{const o=d.slug.toLowerCase(),a=C(),t=p("user",{},{username:o});if(!t||a.username!==t.username)throw q(404,"Not Found");let r=p("request",{artistId:t.id},{});return r=r.map(n=>({...n,service:p("services",{},{id:n.serviceId})})),{request:r}},Q=Object.freeze(Object.defineProperty({__proto__:null,entries:S,load:U,ssr:M},Symbol.toStringTag,{value:"Module"}));var z=j('<div class="card-island"><h1 class="page-title mb-4">Your Commissions</h1> <!></div>');function Y(d,o){var v;y(o,!0);let a=f(l((v=o.data)==null?void 0:v.request)),t=f(l({})),r=f(!1);const n=e=>{c(r,!0),c(t,l(e))},b=(e,s)=>{if(!e&&!confirm("Are you sure you want to reject this request? This action cannot be undone."))return;const i=s.service.milestones.map(u=>({approval:null,name:u.name,date:null,feedback:"",sample:[]}));e?s.state={value:"active",progress:i}:s.state={value:"rejected",progress:i},c(a,l(m(a).map(u=>u.id===s.id?s:u)))};var g=w();O(e=>{R.title="BrushHub - Manage Commissions"});var _=B(g);k(_,()=>m(r),e=>{I(e,{closeRequest:()=>c(r,!1),get request(){return m(t)},artistView:!0,editEntry:b})},e=>{var s=z(),i=T(V(s),2);x(i,{commissionOrOrder:!0,get requestDB(){return m(a)},openRequest:n,artistOrCommissioner:!0}),$(s),h(e,s)}),h(d,g),D()}export{Y as component,Q as universal};
