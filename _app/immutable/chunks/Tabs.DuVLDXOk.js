import{d as P,a as t,t as h,c as b,s as Q}from"./disclose-version.CO6q0Qfh.js";import{d as R,f,c as m,g as a,r as _,t as D,h as E,s as S,e as U,a as W}from"./runtime.DMxaCD9P.js";import{i as g}from"./if.CoD_4mrj.js";import{e as F,i as G}from"./each.DPKI_RZ5.js";import{c as H}from"./svelte-component.DLNyBxfd.js";import{s as J,t as X}from"./class.DBFJk8qm.js";import{p as Y}from"./proxy.Dv8l_DbE.js";import{p as C}from"./props.DNKDIsES.js";var Z=h("<li><span> </span></li>"),$=h("<div><!></div>"),aa=h('<ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white"><!></ul>'),ea=h('<div class="flex flex-col"><!> <!></div>');function va(K,o){const L=(r,s=E)=>{var n=b(),l=f(n);F(l,17,s,G,(T,e)=>{var i=Z(),d=m(i),k=U(()=>M(a(e).value));d.__click=function(...y){var c;(c=a(k))==null||c.apply(this,y)};var v=m(d,!0);_(d),_(i),D(()=>{J(d,`block cursor-pointer border-b-2 px-4 py-2 font-semibold transition-all duration-300 ease-in-out
                      ${(a(u)===a(e).value?"border-orange-400 text-orange-400":"border-transparent")??""}`),X(d,"hover:border-gray-400",a(u)!==a(e).value),Q(v,a(e).label)}),t(T,i)}),t(r,n)},V=(r,s=E)=>{var n=b(),l=f(n);F(l,17,s,G,(T,e)=>{var i=b(),d=f(i);g(d,()=>a(e).value===(q()?q():a(u)),k=>{var v=$(),y=m(v);g(y,()=>a(e).bindable,c=>{var p=b(),I=f(p);H(I,()=>a(e).component,(w,z)=>{z(w,{get props(){return a(e).props},set props(O){a(e).props=O}})}),t(c,p)},c=>{var p=b(),I=f(p);H(I,()=>a(e).component,(w,z)=>{z(w,{get props(){return a(e).props}})}),t(c,p)}),_(v),D(()=>J(v,j()?"":"pt-6")),t(k,v)}),t(T,i)}),t(r,n)};let j=C(o,"hideTabs",3,!1),q=C(o,"currentTab",3,0),A=C(o,"binded",3,!1),u=S(1);const M=r=>()=>W(u,Y(r));var x=ea(),B=m(x);g(B,()=>!j(),r=>{var s=aa(),n=m(s);g(n,A,l=>{L(l,()=>o.bindableItems)},l=>{L(l,()=>o.items)}),_(s),t(r,s)});var N=R(B,2);g(N,A,r=>{V(r,()=>o.bindableItems)},r=>{V(r,()=>o.items)}),_(x),t(K,x)}P(["click"]);export{va as T};
