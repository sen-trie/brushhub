import"./disclose-version.Bg9kRutz.js";import{c as v,k as a,b as i,t as T,s as z,f as C,am as H,m as V,H as j}from"./runtime.Bg64Jrmk.js";import{s as q}from"./render.DxcVzlYI.js";import{i as A}from"./if.GZK3E1Dr.js";import{e as u,i as _}from"./each.CCMC36rA.js";import{d as B,a as c,t as b,c as D}from"./template.nFEuBT-2.js";import{c as E}from"./svelte-component.DZhybpc5.js";import{s as F,t as h}from"./class.BsCMgcqh.js";import{p as G}from"./proxy.BIPFQ7So.js";var I=b('<li><span class="block cursor-pointer border-b-2 px-4 py-2 hover:border-gray-300 svelte-gfp98w"> </span></li>'),J=b('<div class="flex-1 rounded-b-lg border border-gray-300 p-10"><!></div>'),K=b('<div class="flex h-screen flex-col"><ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white svelte-gfp98w"></ul> <!></div>');function W(x,g){let t=H(1);const k=o=>()=>j(t,G(o));var d=K(),n=v(d);u(n,21,()=>g.items,_,(o,e)=>{var r=I(),s=v(r),f=V(()=>k(a(e).value));s.__click=function(...m){var p;(p=a(f))==null||p.apply(this,m)};var l=v(s,!0);i(s),i(r),T(()=>{F(r,`${(a(t)===a(e).value?"active":"")??""} svelte-gfp98w`),h(s,"font-semibold",a(t)===a(e).value),h(s,"bg-white",a(t)===a(e).value),q(l,a(e).label)}),c(o,r)}),i(n);var y=z(n,2);u(y,17,()=>g.items,_,(o,e)=>{var r=D(),s=C(r);A(s,()=>a(t)==a(e).value,f=>{var l=J(),m=v(l);E(m,()=>a(e).component,(p,w)=>{w(p,{get props(){return a(e).props}})}),i(l),c(f,l)}),c(o,r)}),i(d),c(x,d)}B(["click"]);export{W as T};
