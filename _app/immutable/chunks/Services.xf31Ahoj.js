import"./disclose-version.Bg9kRutz.js";import{M as i,N as r,J as $,O as u,I as A,l as a,Q as G,j as H,o as R,H as q,K as z}from"./runtime.DB3OD_6s.js";import{a as p,t as d,f as B,g as E,b as C,e as F,s as I,d as J}from"./store.CjOx6k1S.js";import{i as w,p as K}from"./if.CGNK2Ke6.js";import{e as D,i as S,s as N,t as L,n as P,b as Q}from"./util.C9qf0wzy.js";import{c as V}from"./svelte-component.jiY5qeoV.js";import{p as X}from"./stores.BlZyIgxE.js";var Z=d('<li><span class="block cursor-pointer border-b-2 px-4 py-2 hover:border-gray-300 svelte-gfp98w"> </span></li>'),W=d('<div class="flex-1 rounded-b-lg border border-gray-300 p-10"><!></div>'),Y=d('<div class="flex h-screen flex-col"><ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white svelte-gfp98w"></ul> <!></div>');function ba(y,c){let n=G(1);const k=e=>()=>R(n,K(e));var _=Y(),m=i(_);D(m,21,()=>c.items,S,(e,s)=>{var o=Z(),l=i(o),f=H(()=>k(a(s).value)),v=i(l,!0);r(l),r(o),$(()=>{N(o,`${(a(n)===a(s).value?"active":"")??""} svelte-gfp98w`),L(l,"font-semibold",a(n)===a(s).value),L(l,"bg-white",a(n)===a(s).value),C(v,a(s).label)}),B("click",l,function(...g){var b;(b=a(f))==null||b.apply(this,g)}),p(e,o)}),r(m);var j=u(m,2);D(j,17,()=>c.items,S,(e,s)=>{var o=E(),l=A(o);w(l,()=>a(n)==a(s).value,f=>{var v=W(),g=i(v);V(g,()=>a(s).component,(b,x)=>{x(b,{get props(){return a(s).props}})}),r(v),p(f,v)}),p(e,o)}),r(_),p(y,_)}const aa=""+new URL("../assets/1.C4j3AACk.jpg",import.meta.url).href,ea=""+new URL("../assets/2.ChZqXlH_.jpg",import.meta.url).href;var ta=(y,c,n)=>P(`./service/${a(c).id}`,n().url.pathname),sa=d('<span class="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">CLOSED</span>'),ra=d('<span class="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600">Fast Delivery</span>'),oa=d('<span class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">Commercial</span>'),la=d('<button class="service flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm"><div class="relative w-full"><img alt="Service Thumbnail" class="h-48 w-full rounded-md object-cover"> <!></div> <div class="mt-4"><h4 class="text-lg font-semibold"> </h4> <p class="mt-2 text-green-600"> </p> <div class="mt-3 flex flex-wrap items-center gap-2"><!> <!></div></div></button>'),ia=d('<div class="service-grid mt-4 grid grid-cols-2 gap-4"></div>');function ua(y,c){q(c,!0);const n=I(),k=()=>J(X,"$page",n),_=Object.assign({"/src/lib/assets/thumbnail/1.jpg":aa,"/src/lib/assets/thumbnail/2.jpg":ea});var m=ia();D(m,21,()=>c.serviceDB,S,(j,e)=>{var s=la();s.__click=[ta,e,k];var o=i(s),l=i(o),f=u(l,2);w(f,()=>!a(e).isOpen,t=>{var h=sa();p(t,h)}),r(o);var v=u(o,2),g=i(v),b=i(g,!0);r(g);var x=u(g,2),M=i(x,!0);$(()=>C(M,a(e).types.length>0?`SGD ${Math.min(...a(e).types.map(t=>t.price))} ~ SGD ${Math.max(...a(e).types.map(t=>t.price))}`:"Price not set")),r(x);var T=u(x,2),O=i(T);w(O,()=>{var t;return(t=a(e).fastDelivery)==null?void 0:t.enabled},t=>{var h=ra();p(t,h)});var U=u(O,2);w(U,()=>{var t;return(t=a(e).commercialUse)==null?void 0:t.enabled},t=>{var h=oa();p(t,h)}),r(T),r(v),r(s),$(()=>{Q(l,"src",_["/src/lib/assets/thumbnail/"+a(e).thumbnail]),C(b,a(e).title)}),p(j,s)}),r(m),p(y,m),z()}F(["click"]);export{ua as S,ba as T};
