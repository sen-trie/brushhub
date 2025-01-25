import{d as $,a as p,t as v,s as x}from"./disclose-version.bD0kEr0Y.js";import{p as tt,j as rt,a as et,g as o,b as at,c as i,t as d,s as n,r as a,d as E}from"./runtime.NkCrfN_B.js";import{i as h}from"./if.BQ7NR3mh.js";import{e as U,i as W}from"./each.CcwbMJOJ.js";import{p as F,s as B,w as ot,a as X,i as st}from"./db.SHkFEn0i.js";import{s as z}from"./class.rDyswWNQ.js";import{p as it}from"./proxy.B8o5R4Xe.js";import{p as C}from"./props.CoMpn4C5.js";import{n as lt}from"./util.DdrE0CmF.js";import{p as nt}from"./index.CrZa2Q9e.js";const dt=(m,r)=>{var g;const f=F("user",{},{id:(g=o(r))==null?void 0:g.artist});lt(`./profile/${f.username}`,nt.url.pathname)};function q(m,r){E(r,null)}var ct=(m,r,f)=>r(o(f)),pt=v('<span class="absolute left-2 top-2 rounded bg-gray-700 px-2 py-1 text-xs text-white">Closed</span>'),vt=v('<button type="button" aria-label="View artwork details"><img alt="Artwork"> <!></button>'),mt=v('<img alt="Artwork">'),ut=m=>m.stopImmediatePropagation(),ft=v('<span class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"> </span>'),gt=v(`<button class="mt-4 block rounded-lg bg-orange-500 px-4 py-2 
                                        text-center font-medium text-white">To Artist Profile</button>`),_t=v(`<div class="fixed inset-0 z-50 flex items-center justify-center 
                !bg-black !bg-opacity-50 dark:!bg-opacity-65" role="dialog" aria-modal="true"><div class="relative rounded-lg shadow-lg dark:bg-stone-800 border-2 colour-border flex 
                     w-5/6 sm:w-1/2 p-2 sm:p-6" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description"><button class="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full 
                        bg-red-500 text-white hover:bg-red-600 text-lg" aria-label="Close popup">X</button> <div class="flex flex-col sm:flex-row"><img alt="Artwork" class="h-64 w-96 rounded-md object-contain
                           mt-2 sm:mt-0"> <div class="p-2 sm:p-0 ml-0 sm:ml-6 flex flex-col justify-between"><div><h2 class="text-xl font-bold"> </h2> <p> </p> <p class="mt-2 text-sm"> </p> <div class="mt-4 flex flex-wrap gap-2"></div></div> <div><!></div></div></div></div></div>`),bt=v("<!> <!> <!>",1);function zt(m,r){tt(r,!0);let f=C(r,"showArtist",3,!0),g=C(r,"size",3,48),S=C(r,"artViewOnly",3,!1),s=at(null);const T=st("artwork"),G=t=>F("artist",{},{id:t});function H(t){typeof t!="string"&&E(s,it(t))}function J(t){return typeof t=="string"&&t.startsWith("data:image")?t:X("artwork",t.imgSrc,T)}var V=bt(),I=rt(V);U(I,17,()=>r.artDB,W,(t,e)=>{var l=vt();l.__click=[ct,H,e];var u=i(l);d(()=>B(u,"src",J(o(e))));var _=n(u,2);h(_,()=>{var c;return!((c=G(o(e).artist))!=null&&c.openCommission)&&!S()},c=>{var b=pt();p(c,b)}),a(l),d(()=>{z(l,`relative w-full overflow-hidden rounded-lg colour-border border-2 bg-white shadow
                ${(S()?"cursor-default":"cursor-pointer")??""}`),z(u,`h-${g()??""} w-full object-cover`)}),p(t,l)});var O=n(I,2);h(O,()=>r.artDB.length===0,t=>{var e=mt();d(()=>B(e,"src",ot("artwork",""))),d(()=>z(e,`h-${g()??""} w-full object-contain`)),p(t,e)});var K=n(O,2);h(K,()=>o(s),t=>{var e=_t();e.__click=[q,s];var l=i(e);l.__click=[ut];var u=i(l);u.__click=[q,s];var _=n(u,2),c=i(_);d(()=>B(c,"src",X("artwork",o(s).imgSrc,T)));var b=n(c,2),k=i(b),y=i(k),N=i(y,!0);a(y);var A=n(y,2),Q=i(A,!0);a(A);var j=n(A,2),R=i(j,!0);d(()=>x(R,o(s).datePosted?"Posted: "+new Date(o(s).datePosted).toLocaleDateString():"")),a(j);var L=n(j,2);U(L,21,()=>o(s).tags,W,(P,w)=>{var D=ft(),Z=i(D);a(D),d(()=>x(Z,`#${o(w)??""}`)),p(P,D)}),a(L),a(k);var M=n(k,2),Y=i(M);h(Y,f,P=>{var w=gt();w.__click=[dt,s],p(P,w)}),a(M),a(b),a(_),a(l),a(e),d(()=>{x(N,o(s).title||"Untitled Artwork"),x(Q,o(s).description)}),p(t,e)}),p(m,V),et()}$(["click"]);export{zt as B};
