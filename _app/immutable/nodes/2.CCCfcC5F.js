import{d as H,a as C,t as N}from"../chunks/disclose-version.CSxEiuyN.js";import{p as J,b as p,g as r,d as i,t as D,a as K,c as s,s as a,e as L,r as o,n as M}from"../chunks/runtime.yDkJktn_.js";import{i as P}from"../chunks/if.B3MD_1yl.js";import{r as E,p as w}from"../chunks/db.CVRkyNLs.js";import{s as A}from"../chunks/class.BR4QoFxp.js";import{b as I}from"../chunks/input.dMsVNq4n.js";import{p as B}from"../chunks/proxy.C9ShvAXK.js";import{I as Q,F as R}from"../chunks/Icon.yzdjAnNF.js";import{g as V,i as W}from"../chunks/util.DwkNCAbs.js";import{B as X}from"../chunks/Browse.DLs4skZi.js";import{S as Y}from"../chunks/SearchTags.CW2jw7en.js";function Z(c,l){i(l,B([]))}var ee=(c,l)=>i(l,!1),te=(c,l)=>i(l,!0),re=N("<button>Following</button>"),se=N('<div class="flex card-island min-h-full"><div class="content flex-grow"><div class="mb-4 flex items-center"><button>Explore</button> <!></div> <div><!></div></div> <div class="filter-panel sticky top-6 ml-8 h-96 w-72 pt-4"><button class="clear-button flex justify-center gap-2"><!> Clear Filters</button> <hr class="my-4"> <label class="checkbox flex justify-between items-center cursor-pointer">Open Artists Only <input type="checkbox" class="cursor-pointer"></label> <label class="checkbox mt-2 flex justify-between items-center cursor-pointer">Commercial Use <input type="checkbox" class="cursor-pointer"></label> <hr class="my-4"> <div><label class="mb-2 block text-sm font-semibold">Tags</label> <!></div></div></div>');function fe(c,l){J(l,!0);const d=V();let n=p(!1),v=p(!1),f=p(!1),m=p(B([])),S=L(()=>w("artwork",{tags:e=>W(e.tags,r(m)),artist:e=>{const t=w("artist",{},{id:e.artist});return!r(v)||(t==null?void 0:t.openCommission)===!0},followers:e=>{const t=d.isNotEmpty()&&d.following.includes(e.artist);return!r(n)||t},services:e=>{const t=w("services",{state:"published"},{samples:h=>h.samples.includes(e.id),commercialUse:h=>h.commercialUse.enabled===!0});return!r(f)||!!t}},{}));var b=se(),_=s(b),g=s(_),x=s(g);x.__click=[ee,n];var $=a(x,2);P($,()=>d.isNotEmpty(),e=>{var t=re();t.__click=[te,n],D(()=>A(t,`mr-4 text-2xl font-bold focus:outline-none
                        ${(r(n)===!0?"text-orange-500 dark:text-orange-300":"text-gray-400 hover:text-orange-500")??""}
                        `)),C(e,t)}),o(g);var F=a(g,2),z=s(F);X(z,{get artDB(){return r(S)}}),o(F),o(_);var O=a(_,2),u=s(O);u.__click=[Z,m];var q=s(u);Q(q,{src:R,size:"24"}),M(),o(u);var y=a(u,4),T=a(s(y));E(T),o(y);var k=a(y,2),U=a(s(k));E(U),o(k);var j=a(k,4),G=a(s(j),2);Y(G,{get currentTags(){return r(m)},set currentTags(e){i(m,B(e))},slim:!0}),o(j),o(O),o(b),D(()=>A(x,`mr-4 text-2xl font-bold focus:outline-none
                    ${(r(n)===!1?"text-orange-500 dark:text-orange-300":"text-gray-400 hover:text-orange-500")??""}
                    `)),I(T,()=>r(v),e=>i(v,e)),I(U,()=>r(f),e=>i(f,e)),C(c,b),K()}H(["click"]);export{fe as component};
