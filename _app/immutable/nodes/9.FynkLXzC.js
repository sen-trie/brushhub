import{e as We}from"../chunks/index.CRQyEwE3.js";import{p as q,s as J,w as qe,r as Je,g as ge}from"../chunks/db.BaQdwY0M.js";import{d as me,a as l,t as v,s as u,r as Xe,c as je}from"../chunks/disclose-version.BEEGi2oI.js";import{p as ae,c as a,r as e,s as t,t as f,n as De,f as ee,g as r,a as te,d as W,b as se,u as Ye,e as Ge}from"../chunks/runtime.C-s0Hq_6.js";import{s as oe}from"../chunks/class.Bsjm69_Q.js";import{T as He}from"../chunks/Tabs.BxN9-eAX.js";import{i as E}from"../chunks/if.DN0dI3wX.js";import{e as X,i as G}from"../chunks/each.Bjkk2cOk.js";import{s as Ke,a as Qe}from"../chunks/store.QkJGiwQc.js";import{g as Ie,n as Ae,f as Ve,h as Ze,j as ea}from"../chunks/util.3lGB5WEb.js";import{I as re,M as aa,a as ta,L as ra,P as sa}from"../chunks/Icon.ClDke9pl.js";import{p as oa}from"../chunks/stores.Dg8cbDtW.js";import{B as Be}from"../chunks/Browse.C_bblnb_.js";import{S as ia}from"../chunks/Services.rWJWylbQ.js";import{p as K}from"../chunks/proxy.CWL-fuXM.js";import{a as $e}from"../chunks/input.Asw2ctPt.js";import{b as la}from"../chunks/select.DqRc-Iyy.js";import{p as da}from"../chunks/props.BcShvcsW.js";import{S as na}from"../chunks/SearchTags.BT4v6QAM.js";const va=!1,ca=async()=>[{slug:"hungry_anne"}],pa=({params:_})=>{try{const s=q("user",{},{username:_.slug}),i=q("artist",{},{id:s.id});return{...s,...i}}catch{throw We(404,"Artist profile not found")}},gt=Object.freeze(Object.defineProperty({__proto__:null,entries:ca,load:pa,ssr:va},Symbol.toStringTag,{value:"Module"}));var ua=v('<div class="flex gap-2"><!> <a target="_blank" class="max-w-64 truncate text-blue-600"> </a></div>'),ga=(_,s)=>Ae("/account/edit",s().url.pathname),ma=v('<button class="confirm-button mt-4 flex gap-2 rounded"><!> Edit Your Profile</button>'),_a=v('<li class="list-disc"> </li>'),fa=v('<details class="category group border-b last:border-none"><summary class="text-m flex cursor-pointer items-center justify-between py-3 font-medium text-gray-700 hover:text-orange-500 focus:outline-none"><span> </span> <span class="transform transition-transform group-open:rotate-180">▼</span></summary> <ul class="-mt-2 pb-4 pl-6 text-gray-600"></ul></details>'),ba=v('<hr class="my-4"> <div class="tos-container"><h3 class="mb-2 text-xl font-bold">Terms of Service</h3> <p class="mb-2 text-sm text-gray-500"> </p> <!></div>',1),xa=v('<img alt="Service Missing" class="h-48 w-full rounded-md object-contain">'),ha=(_,s,i)=>Ae(`/manage-services/${s.username}`,i().url.pathname),wa=v('<button class="my-services-button mt-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">My Services &gt;</button>'),ya=v('<div><div class="content-section flex flex-col gap-6 md:flex-row"><div class="left-column flex w-full flex-col md:w-1/4"><div class="bio card-container"><p> </p> <hr class="my-4"> <div class="my-2 flex flex-col gap-2"><div class="flex gap-2"><!> <p class="max-w-64 truncate"> </p></div> <div class="flex gap-2"><!> <p class="max-w-64 truncate"> </p></div> <!></div> <!> <hr class="my-4"> <div class="my-4 flex flex-col gap-1"><p> </p> <div class="grid grid-cols-4 gap-1"><div class="col-span-3"><p>Satisfaction Level:</p></div> <div class="col-span-1 text-end"><p> </p></div> <div class="col-span-3"><p>Avg. Response Time:</p></div> <div class="col-span-1 text-end"><p> </p></div> <div class="col-span-3"><p>Completion Rate:</p></div> <div class="col-span-1 text-end"><p> </p></div> <div class="col-span-3"><p>Total Commissions:</p></div> <div class="col-span-1 text-end"><p> </p></div></div></div> <!></div></div> <div class="right-column flex w-full flex-col gap-6 md:w-3/4"><div class="featured-artworks card-container"><h3 class="mb-4 text-lg font-semibold">Featured Artworks</h3> <!></div> <div class="services card-container"><h3 class="text-lg font-semibold">Services</h3> <div class="service-grid mt-4 grid grid-cols-2 gap-4"><!></div> <!> <!></div></div></div></div>');function ka(_,s){ae(s,!0);const i=Ke(),L=()=>Qe(oa,"$page",i),o=s.props[0],n=Ie().id===o.id,d=q("tos",{},{artistId:o.id}),p=q("services",{artistId:o.id,state:"published"},{}),$=q("artwork",{featured:F=>o.featured.includes(F.id)},{});var j=ya(),M=a(j),k=a(M),z=a(k),h=a(z),O=a(h,!0);e(h);var P=t(h,4),b=a(P),c=a(b);re(c,{src:aa,size:"24"});var T=t(c,2),I=a(T,!0);e(T),e(b);var U=t(b,2),x=a(U);re(x,{src:ta,size:"24"});var w=t(x,2),S=a(w,!0);f(()=>u(S,o.languages.length>0?o.languages.join(", "):"-")),e(w),e(U);var g=t(U,2);X(g,17,()=>o.links,G,(F,B)=>{var Y=ua(),Q=a(Y);re(Q,{src:ra,size:"24"});var Z=t(Q,2),ne=a(Z,!0);e(Z),e(Y),f(()=>{J(Z,"href","//"+r(B)),u(ne,r(B))}),l(F,Y)}),e(P);var m=t(P,2);E(m,()=>n,F=>{var B=ma();B.__click=[ga,L];var Y=a(B);re(Y,{src:sa,size:"24"}),De(),e(B),l(F,B)});var y=t(m,4),D=a(y),A=a(D);f(()=>u(A,`Joined ${Ve(new Date(o.joined))??""} ago`)),e(D);var N=t(D,2),C=t(a(N),2),R=a(C),H=a(R);e(R),e(C);var V=t(C,4),_e=a(V),Pe=a(_e,!0);f(()=>u(Pe,Ze(o.responseTime))),e(_e),e(V);var ie=t(V,4),fe=a(ie),Ue=a(fe);e(fe),e(ie);var be=t(ie,4),xe=a(be),Ce=a(xe,!0);e(xe),e(be),e(N),e(y);var Me=t(y,2);E(Me,()=>d,F=>{var B=ba(),Y=t(ee(B),2),Q=t(a(Y),2),Z=a(Q);f(()=>u(Z,`Last updated: ${new Date(d.lastUpdated).toLocaleDateString()??""}`)),e(Q);var ne=t(Q,2);X(ne,17,()=>d.categories,ve=>ve.title,(ve,ke)=>{var ce=fa(),pe=a(ce),Te=a(pe),Oe=a(Te,!0);e(Te),De(2),e(pe);var Se=t(pe,2);X(Se,21,()=>r(ke).details,G,(Re,Ee)=>{var ue=_a(),Fe=a(ue,!0);e(ue),f(()=>u(Fe,r(Ee))),l(Re,ue)}),e(Se),e(ce),f(()=>u(Oe,r(ke).title)),l(ve,ce)}),e(Y),l(F,B)}),e(z),e(k);var he=t(k,2),le=a(he),Le=t(a(le),2);Be(Le,{artDB:$,showArtist:!1}),e(le);var we=t(le,2),de=t(a(we),2),ze=a(de);ia(ze,{serviceDB:p}),e(de);var ye=t(de,2);E(ye,()=>p.length===0,F=>{var B=xa();f(()=>J(B,"src",qe("artwork",""))),l(F,B)});var Ne=t(ye,2);E(Ne,()=>n,F=>{var B=wa();B.__click=[ha,o,L],l(F,B)}),e(we),e(he),e(M),e(j),f(()=>{u(O,o.bio),u(I,o.location),u(H,`${o.satisfaction??""} / 5.0`),u(Ue,`${o.completionRate??""}%`),u(Ce,o.total)}),l(_,j),te()}me(["click"]);var Ta=v('<span class="absolute bottom-2 right-2 rounded bg-red-500 px-2 py-1 text-xs text-white"> </span>'),Sa=v('<div><img alt="Uploaded artwork" class="h-32 w-full rounded-md object-cover"> <!></div>'),Da=v("<option> </option>"),$a=v('<select class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"><option disabled>Select a service</option><!></select>'),ja=v("<p>No services available</p>"),Ia=(_,s,i)=>s.sumbitTag(i),Aa=v('<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"><div class="flex h-[70vh] w-full max-w-4xl flex-col rounded-lg bg-white p-6 shadow-lg"><h2 class="page-title mb-4">Tag Artworks</h2> <div class="flex w-full grow overflow-y-auto"><div class="h-full w-1/3 overflow-y-auto border-r border-gray-200 pr-4"></div> <div class="h-full w-2/3 overflow-y-auto p-4 pt-0"><div class="flex flex-col space-y-4"><div><label class="mb-2 block text-sm font-semibold">Title</label> <input type="text" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Enter title..."></div> <div><label class="mb-2 block text-sm font-semibold">Description</label> <textarea rows="3" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Enter description..."></textarea></div> <div><label class="mb-2 block text-sm font-semibold">Tags</label> <!></div> <div><label class="mb-2 block text-sm font-semibold">Add to Service</label> <!></div></div></div></div> <div class="mt-4 flex w-full justify-end space-x-4"><button class="discard-button">Discard</button> <button>Continue</button></div></div></div>');function Ba(_,s){ae(s,!0);let i=da(s,"uploadedImages",7);const L={title:"",description:"",tags:[],service:""};let o=se(0),n=K(i().map(()=>({...L})));const d=g=>{const m=n[g];return m.title.trim()===""?"Missing Title":m.description.trim()===""?"Missing Description":m.tags.length===0?"Missing Tags":""};var p=Aa(),$=a(p),j=t(a($),2),M=a(j);X(M,21,i,G,(g,m,y)=>{var D=Sa();D.__click=()=>W(o,K(y));var A=a(D),N=t(A,2);E(N,()=>d(y)!=="",C=>{var R=Ta(),H=a(R,!0);f(()=>u(H,d(y))),e(R),l(C,R)}),e(D),f(()=>{oe(D,`relative mb-4 cursor-pointer rounded-lg border p-2 hover:border-orange-500 ${(r(o)===y?"border-2 border-orange-500":"")??""}`),J(A,"src",r(m))}),l(g,D)}),e(M);var k=t(M,2),z=a(k),h=a(z),O=t(a(h),2);Je(O),e(h);var P=t(h,2),b=t(a(P),2);Xe(b),e(P);var c=t(P,2),T=t(a(c),2);na(T,{get currentTags(){return n[r(o)].tags},set currentTags(g){n[r(o)].tags=g}}),e(c);var I=t(c,2),U=t(a(I),2);E(U,()=>s.serviceDB.length>0,g=>{var m=$a(),y=a(m);y.value=((y.__value="")==null,"");var D=t(y);X(D,17,()=>s.serviceDB,G,(A,N)=>{var C=Da(),R={},H=a(C,!0);e(C),f(()=>{R!==(R=r(N).id)&&(C.value=(C.__value=r(N).id)==null?"":r(N).id),u(H,r(N).title)}),l(A,C)}),e(m),la(m,()=>n[r(o)].service,A=>n[r(o)].service=A),l(g,m)},g=>{var m=ja();l(g,m)}),e(I),e(z),e(k),e(j);var x=t(j,2),w=a(x);w.__click=function(...g){var m;(m=s.backStep)==null||m.apply(this,g)};var S=t(w,2);S.__click=[Ia,s,n],e(x),e($),e(p),f(()=>{oe(S,`save-button ${i().length>0?"bg-green-500 hover:bg-green-600":"cursor-not-allowed bg-gray-400"}`),S.disabled=i().length===0}),$e(O,()=>n[r(o)].title,g=>n[r(o)].title=g),$e(b,()=>n[r(o)].description,g=>n[r(o)].description=g),l(_,p),te()}me(["click"]);async function Pa(_,s,i){await(async L=>(W(s,K(L[0])),W(i,K(L[1]))))(await ea(_,r(s),8))}var Ua=(_,s)=>W(s,1),Ca=v('<button class="my-services-button mb-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">Upload New Artworks</button>'),Ma=()=>{var _;return(_=document.getElementById("upload-images"))==null?void 0:_.click()},La=v('<span class="col-span-4 mt-24 text-center text-sm text-gray-500">No images uploaded</span>'),za=v('<div class="group relative"><img alt="Uploaded reference" class="h-32 w-32 rounded-md border object-cover"> <button class="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600">X</button></div>'),Na=v('<p class="mt-2 text-sm text-red-500"> </p>'),Oa=(_,s)=>W(s,2),Ra=v('<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"><div class="h-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-6 text-2xl font-bold">Upload Images</h2> <div class="mb-6 border-b border-orange-500"><p class="mt-4 text-center font-semibold text-orange-500">Browse from Device</p></div> <div class="mb-6 grid min-h-64 cursor-pointer grid-cols-4 gap-6 rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-orange-500"><!> <!></div> <!> <input id="upload-images" type="file" accept="image/*" multiple class="hidden"> <div class="flex justify-end space-x-4"><button class="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600">Cancel</button> <button>Continue</button></div></div></div>'),Ea=v("<div><!> <!></div> <!>",1);function Fa(_,s){ae(s,!0);const i=s.props[0],L=Ie().id===i.id,o=Ge(()=>q("artwork",{artist:i.id})),n=q("services",{artistId:i.id,state:"published"});let d=se(0),p=se(K([])),$=se("");const j=b=>{W(p,K(r(p).filter((c,T)=>T!==b)))};function M(){W(p,K([])),W($,""),W(d,0)}Ye(()=>{r(d)!==0?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")});var k=Ea(),z=ee(k),h=a(z);E(h,()=>L,b=>{var c=Ca();c.__click=[Ua,d],l(b,c)});var O=t(h,2);Be(O,{get artDB(){return r(o)},showArtist:!1}),e(z);var P=t(z,2);E(P,()=>r(d)===1,b=>{var c=Ra(),T=a(c),I=t(a(T),4);I.__click=[Ma];var U=a(I);E(U,()=>r(p).length===0,D=>{var A=La();l(D,A)});var x=t(U,2);X(x,17,()=>r(p),G,(D,A,N)=>{var C=za(),R=a(C),H=t(R,2);H.__click=V=>{V.stopPropagation(),j(N)},e(C),f(()=>J(R,"src",r(A))),l(D,C)}),e(I);var w=t(I,2);E(w,()=>r($),D=>{var A=Na(),N=a(A,!0);e(A),f(()=>u(N,r($))),l(D,A)});var S=t(w,2);S.__change=[Pa,p,$];var g=t(S,2),m=a(g);m.__click=M;var y=t(m,2);y.__click=[Oa,d],e(g),e(T),e(c),f(()=>{oe(y,`rounded px-6 py-3 text-white ${r(p).length>0?"bg-green-500 hover:bg-green-600":"cursor-not-allowed bg-gray-400"}`),y.disabled=r(p).length===0}),l(b,c)},b=>{var c=je(),T=ee(c);E(T,()=>r(d)===2,I=>{Ba(I,{get uploadedImages(){return r(p)},serviceDB:n,backStep:()=>W(d,1),sumbitTag:U=>{console.log(U),M()}})},null,!0),l(b,c)}),l(_,k),te()}me(["click","change"]);var Wa=v('<span class="fas fa-star text-orange-500">★</span>'),qa=v('<span class="fas fa-star text-gray-300">★</span>'),Ja=v('<div class="card-container flex flex-col gap-4"><div class="flex items-center gap-1"><!> <!></div> <p class="text-gray-800"> </p> <div class="mt-2 flex items-center gap-4"><div class="h-10 w-10 rounded-full bg-gray-300"><img alt="User Avatar" class="h-10 w-10 rounded-full object-cover"></div> <div><p class="font-bold text-gray-700"> </p> <p class="text-sm text-gray-500"> </p></div></div></div>'),Xa=v('<div class="grid grid-cols-2 gap-6"></div>');function Ya(_,s){ae(s,!0);const i=s.props[0],L=q("review",{artist:i.id},{}).map(n=>({...n,service:q("services",{},{id:n.service}),user:q("user",{},{id:n.commissioner})}));var o=Xa();X(o,21,()=>L,G,(n,d)=>{var p=Ja(),$=a(p),j=a($);X(j,17,()=>Array(r(d).rating),G,(x,w)=>{var S=Wa();l(x,S)});var M=t(j,2);E(M,()=>r(d).rating<5,x=>{var w=je(),S=ee(w);X(S,17,()=>Array(5-r(d).rating),G,(g,m)=>{var y=qa();l(g,y)}),l(x,w)}),e($);var k=t($,2),z=a(k,!0);e(k);var h=t(k,2),O=a(h),P=a(O);f(()=>{var x;return J(P,"src",ge("dp",(x=r(d).user)==null?void 0:x.avatar))}),e(O);var b=t(O,2),c=a(b),T=a(c,!0);e(c);var I=t(c,2),U=a(I);e(I),e(b),e(h),e(p),f(()=>{var x,w,S;u(z,r(d).comment),u(T,((w=(x=r(d))==null?void 0:x.user)==null?void 0:w.displayName)||"Anonymous"),u(U,`(Purchased: ${(((S=r(d).service)==null?void 0:S.title)||"Unknown")??""})`)}),l(n,p)}),e(o),l(_,o),te()}var Ga=v('<div class="card-island pt-0 px-0 pb-6"><img class="h-52 w-full object-cover"> <div class="header-section mt-4 flex items-center text-black screen-padding-x"><div class="profile-info flex items-center"><img class="h-32 w-32 rounded-full object-cover"> <div class="ml-6 space-y-2"><h1 class="profile-name text-3xl font-bold"> </h1> <span> </span> <p class="text-gray-600"> </p> <div class="text-sm text-gray-500"><span> </span> • <span> </span></div></div></div></div></div> <div class="tab-section card-island mt-4"><!></div>',1);function mt(_,s){ae(s,!0);const i=s.data;let L=[{label:"Overview",value:1,component:ka,props:[i]},{label:"Portfolio",value:2,component:Fa,props:[i]},{label:"Reviews",value:3,component:Ya,props:[i]}];var o=Ga(),n=ee(o),d=a(n);f(()=>J(d,"src",ge("banner",i.coverImage)));var p=t(d,2),$=a(p),j=a($);f(()=>J(j,"src",ge("dp",i.avatar)));var M=t(j,2),k=a(M),z=a(k,!0);e(k);var h=t(k,2),O=a(h,!0);e(h);var P=t(h,2),b=a(P);e(P);var c=t(P,2),T=a(c),I=a(T);e(T);var U=t(T,2),x=a(U);e(U),e(c),e(M),e($),e(p),e(n);var w=t(n,2),S=a(w);He(S,{items:L}),e(w),f(()=>{J(d,"alt",i.coverImage),J(j,"alt",i.displayName),u(z,i.displayName),oe(h,`profile-status inline-block rounded
                        ${(i.openCommission?"bg-green-500":"bg-red-500")??""} 
                        px-2 py-1 text-sm text-white
                    `),u(O,i.openCommission?"Open":"Closed"),u(b,`@${i.username??""}`),u(I,`${i.followers.length??""} Followers`),u(x,`${i.following.length??""} Following`)}),l(_,o),te()}export{mt as component,gt as universal};
