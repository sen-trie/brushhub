import{e as Me}from"../chunks/index.BnZ_zlD2.js";import{p as F,g as be,n as fe,m as Re,o as Ne,s as K,r as xe,q as Oe,a as ve}from"../chunks/util.CTWbUTz8.js";import{d as te,a as c,t as _,g as Pe,c as he}from"../chunks/disclose-version.TbKqxNJi.js";import{p as X,c as t,r as e,s as a,t as D,n as we,g as r,a as Y,ak as ye,d as U,b as H,e as ke,f as ee}from"../chunks/runtime.CHrGdgHD.js";import{s as m}from"../chunks/render.CZZNUFKP.js";import{s as Z}from"../chunks/class.DWYijzLi.js";import{T as Ee}from"../chunks/Tabs.D_sOgtAn.js";import{i as E,p as V}from"../chunks/if.eqP7gfIA.js";import{e as W,i as Q}from"../chunks/each.DPCLWfUA.js";import{s as ze,a as Fe}from"../chunks/store.C8UG7p6n.js";import{p as We}from"../chunks/stores.nos-t-kg.js";import{B as Te}from"../chunks/Browse.BiTWUH_Z.js";import{S as qe}from"../chunks/Services.DGt7JRln.js";import{a as ce}from"../chunks/input.DL2JL8lo.js";import{b as Je}from"../chunks/select.cSFZNQFZ.js";import{p as Ke}from"../chunks/props.Cneju1jB.js";import{b as Qe}from"../chunks/this.Dt2pQjFz.js";const Ge=!1,He=async()=>[{slug:"hungry_anne"}],Ve=({params:d})=>{try{const o=F("user",{},{username:d.slug}),s=F("artist",{},{id:o.id});return{...o,...s}}catch{throw Me(404,"Artist profile not found")}},tr=Object.freeze(Object.defineProperty({__proto__:null,entries:He,load:Ve,ssr:Ge},Symbol.toStringTag,{value:"Module"}));var Xe=(d,o)=>fe("/account/edit",o().url.pathname),Ye=_('<button class="edit-profile mt-4 text-orange-600">Edit your profile <i class="fas fa-edit"></i></button>'),Ze=_('<li class="list-disc"> </li>'),et=_('<details class="category group border-b last:border-none"><summary class="flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-orange-500 focus:outline-none"><span> </span> <span class="transform transition-transform group-open:rotate-180">▼</span></summary> <ul class="py-2 pl-6 text-gray-600"></ul></details>'),tt=_('<div class="tos-container mx-auto max-w-2xl rounded-lg bg-gray-50 p-6 shadow"><h2 class="mb-4 text-2xl font-bold">Terms of Service</h2> <p class="mb-6 text-sm text-gray-500"> </p> <!></div>'),rt=(d,o,s)=>fe(`/manage-services/${o.username}`,s().url.pathname),at=_('<button class="my-services-button mt-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">My Services &gt;</button>'),st=_('<div class="overview-container p-4"><div class="content-section flex flex-col gap-6 md:flex-row"><div class="left-column flex w-full flex-col gap-6 md:w-1/3"><div class="bio rounded-lg border border-gray-300 p-4 shadow-sm"><p class="mb-4"> </p> <p class="mb-2"> </p> <p class="mb-4"> </p> <a target="_blank" class="mt-2 block text-blue-600"> </a> <a target="_blank" class="mt-2 block text-blue-600"> </a> <!> <p class="mt-4"> </p> <p> </p> <p> </p> <p> </p> <p class="mb-4"> </p> <!></div></div> <div class="right-column flex w-full flex-col gap-6 md:w-2/3"><div class="featured-artworks rounded-lg border border-gray-300 p-4 shadow-sm"><h3 class="mb-4 text-lg font-semibold">Featured Artworks</h3> <!></div> <div class="services rounded-lg border border-gray-300 p-4 shadow-sm"><h3 class="text-lg font-semibold">Services</h3> <div class="service-grid mt-4 grid grid-cols-2 gap-4"><!></div> <!></div></div></div></div>');function ot(d,o){X(o,!0);const s=ze(),p=()=>Fe(We,"$page",s),i=o.props[0],l=be().id===i.id,v=F("tos",{},{artistId:i.id}),b=F("services",{artistId:i.id,state:"published"},{}),k=F("artwork",{featured:G=>i.featured.includes(G.id)},{});var $=st(),j=t($),S=t(j),A=t(S),u=t(A),w=t(u,!0);e(u);var I=a(u,2),g=t(I,!0);e(I);var n=a(I,2),y=t(n,!0);D(()=>m(y,i.languages.join(", "))),e(n);var f=a(n,2),O=t(f,!0);e(f);var x=a(f,2),L=t(x,!0);e(x);var M=a(x,2);E(M,()=>l,G=>{var J=Ye();J.__click=[Xe,p],c(G,J)});var h=a(M,2),T=t(h);D(()=>m(T,`Joined ${Re(new Date(i.joined))??""} ago`)),e(h);var B=a(h,2),R=t(B);e(B);var C=a(B,2),P=t(C);D(()=>m(P,`Avg. Response Time: ${Ne(i.responseTime)??""}`)),e(C);var N=a(C,2),z=t(N);e(N);var q=a(N,2),re=t(q);e(q);var De=a(q,2);E(De,()=>v,G=>{var J=tt(),oe=a(t(J),2),Ae=t(oe);D(()=>m(Ae,`Last updated: ${new Date(v.lastUpdated).toLocaleDateString()??""}`)),e(oe);var Be=a(oe,2);W(Be,17,()=>v.categories,ie=>ie.title,(ie,ge)=>{var le=et(),ne=t(le),me=t(ne),Ce=t(me,!0);e(me),we(2),e(ne);var _e=a(ne,2);W(_e,21,()=>r(ge).details,Q,(Ue,Ie)=>{var de=Ze(),Le=t(de,!0);e(de),D(()=>m(Le,r(Ie))),c(Ue,de)}),e(_e),e(le),D(()=>m(Ce,r(ge).title)),c(ie,le)}),e(J),c(G,J)}),e(A),e(S);var ue=a(S,2),ae=t(ue),Se=a(t(ae),2);Te(Se,{artDB:k,showArtist:!1}),e(ae);var pe=a(ae,2),se=a(t(pe),2),$e=t(se);qe($e,{serviceDB:b}),e(se);var je=a(se,2);E(je,()=>l,G=>{var J=at();J.__click=[rt,i,p],c(G,J)}),e(pe),e(ue),e(j),e($),D(()=>{m(w,i.bio),m(g,i.location),K(f,"href",`https://${i.youtube??""}`),m(O,i.youtube),K(x,"href",`https://${i.twitter??""}`),m(L,i.twitter),m(R,`Satisfaction Level: ${i.satisfaction??""}/5.0`),m(z,`Completion Rate: ${i.completionRate??""}%`),m(re,`Total: ${i.total??""}`)}),c(d,$),Y()}te(["click"]);function it(d,o,s,p,i,l){r(o)&&r(s).length>0&&(d.key==="ArrowDown"?(d.preventDefault(),U(p,(r(p)+1)%r(s).length)):d.key==="ArrowUp"?(d.preventDefault(),U(p,(r(p)-1+r(s).length)%r(s).length)):d.key==="Enter"&&(i.currentTags.push(r(s)[r(p)].name),l()))}var lt=_('<div class="items-center space-x-1 rounded bg-orange-100 px-2 py-1 text-orange-500"><span> </span> <button class="text-xs font-bold">x</button></div>'),nt=(d,o,s,p)=>{o.currentTags.push(r(s).name),p()},dt=_('<li><span> </span> <span class="text-sm text-gray-500"> </span></li>'),vt=_('<ul class="absolute left-0 z-30 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"></ul>'),ct=_('<div class="relative"><div class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm"><div class="mb-2 flex flex-wrap gap-2"></div> <input type="text" placeholder="Search for tags..." class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></div> <!></div>');function ut(d,o){X(o,!0);let s=H(""),p=H(!1),i=ke(()=>F("tags",{name:u=>u.name.toLowerCase().includes(r(s).toLowerCase())&&!o.currentTags.includes(u.name.toLowerCase())},{}).sort((u,w)=>w.count-u.count)),l=H(0),v=null;ye(()=>{r(s).length>0?U(p,!0):U(p,!1)});function b(){U(s,""),U(p,!1),U(l,0)}var k=ct(),$=t(k),j=t($);W(j,21,()=>o.currentTags,Q,(u,w,I)=>{var g=lt();g.__click=()=>o.currentTags.splice(I,1);var n=t(g),y=t(n,!0);e(n),we(2),e(g),D(()=>m(y,r(w))),c(u,g)}),e(j);var S=a(j,2);xe(S),S.__keydown=[it,p,i,l,o,b],Qe(S,u=>v=u,()=>v),e($);var A=a($,2);E(A,()=>r(p)&&r(i).length>0,u=>{var w=vt();W(w,21,()=>r(i).slice(0,6),Q,(I,g,n)=>{var y=dt();y.__click=[nt,o,g,b];var f=t(y),O=t(f,!0);e(f);var x=a(f,2),L=t(x);e(x),e(y),D(()=>{Z(y,`flex cursor-pointer items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-100 ${(n===r(l)?"bg-orange-100":"")??""}`),m(O,r(g).name),m(L,`(${r(g).count??""} Mentions)`)}),c(I,y)}),e(w),c(u,w)}),e(k),ce(S,()=>r(s),u=>U(s,u)),c(d,k),Y()}te(["click","keydown"]);var pt=_('<span class="absolute bottom-2 right-2 rounded bg-red-500 px-2 py-1 text-xs text-white"> </span>'),gt=_('<div><img alt="Uploaded artwork" class="h-32 w-full rounded-md object-cover"> <!></div>'),mt=_("<option> </option>"),_t=_('<select class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"><option disabled>Select a service</option><!></select>'),bt=_("<p>No services available</p>"),ft=(d,o,s)=>o.sumbitTag(s),xt=_('<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"><div class="flex h-[70vh] w-full max-w-4xl flex-col rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-2xl font-bold">Tag Artworks</h2> <div class="flex w-full grow overflow-y-auto"><div class="h-full w-1/3 overflow-y-auto border-r border-gray-200 pr-4"></div> <div class="h-full w-2/3 overflow-y-auto pl-6"><div><div class="mb-4"><label class="mb-2 block text-sm font-semibold">Title</label> <input type="text" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Enter title..."></div> <div class="mb-4"><label class="mb-2 block text-sm font-semibold">Description</label> <textarea rows="3" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Enter description..."></textarea></div> <div class="mb-4"><label class="mb-2 block text-sm font-semibold">Tags</label> <!></div> <div class="mb-4"><label class="mb-2 block text-sm font-semibold">Add to Service</label> <!></div></div></div></div> <div class="flex w-full justify-end space-x-4"><button class="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600">Back</button> <button>Continue</button></div></div></div>');function ht(d,o){X(o,!0);let s=Ke(o,"uploadedImages",7);const p={title:"",description:"",tags:[],service:""};let i=H(0),l=V(s().map(()=>({...p})));const v=h=>{const T=l[h];return T.title.trim()===""?"Missing Title":T.description.trim()===""?"Missing Description":T.tags.length===0?"Missing Tags":""};var b=xt(),k=t(b),$=a(t(k),2),j=t($);W(j,21,s,Q,(h,T,B)=>{var R=gt();R.__click=()=>U(i,V(B));var C=t(R),P=a(C,2);E(P,()=>v(B)!=="",N=>{var z=pt(),q=t(z,!0);D(()=>m(q,v(B))),e(z),c(N,z)}),e(R),D(()=>{Z(R,`relative mb-4 cursor-pointer rounded-lg border p-2 hover:border-orange-500 ${(r(i)===B?"border-2 border-orange-500":"")??""}`),K(C,"src",r(T))}),c(h,R)}),e(j);var S=a(j,2),A=t(S),u=t(A),w=a(t(u),2);xe(w),e(u);var I=a(u,2),g=a(t(I),2);Pe(g),e(I);var n=a(I,2),y=a(t(n),2);ut(y,{get currentTags(){return l[r(i)].tags},set currentTags(h){l[r(i)].tags=h}}),e(n);var f=a(n,2),O=a(t(f),2);E(O,()=>o.serviceDB.length>0,h=>{var T=_t(),B=t(T);B.value=((B.__value="")==null,"");var R=a(B);W(R,17,()=>o.serviceDB,Q,(C,P)=>{var N=mt(),z={},q=t(N,!0);e(N),D(()=>{z!==(z=r(P).id)&&(N.value=(N.__value=r(P).id)==null?"":r(P).id),m(q,r(P).title)}),c(C,N)}),e(T),Je(T,()=>l[r(i)].service,C=>l[r(i)].service=C),c(h,T)},h=>{var T=bt();c(h,T)}),e(f),e(A),e(S),e($);var x=a($,2),L=t(x);L.__click=function(...h){var T;(T=o.backStep)==null||T.apply(this,h)};var M=a(L,2);M.__click=[ft,o,l],e(x),e(k),e(b),D(()=>{Z(M,`rounded px-6 py-3 text-white ${s().length>0?"bg-green-500 hover:bg-green-600":"cursor-not-allowed bg-gray-400"}`),M.disabled=s().length===0}),ce(w,()=>l[r(i)].title,h=>l[r(i)].title=h),ce(g,()=>l[r(i)].description,h=>l[r(i)].description=h),c(d,b),Y()}te(["click"]);async function wt(d,o,s){await(async p=>(U(o,V(p[0])),U(s,V(p[1]))))(await Oe(d,r(o),8))}var yt=(d,o)=>U(o,1),kt=_('<button class="my-services-button mb-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">Upload New Artworks</button>'),Tt=()=>{var d;return(d=document.getElementById("upload-images"))==null?void 0:d.click()},Dt=_('<span class="col-span-4 mt-24 text-center text-sm text-gray-500">No images uploaded</span>'),St=_('<div class="group relative"><img alt="Uploaded reference" class="h-32 w-32 rounded-md border object-cover"> <button class="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600">×</button></div>'),$t=_('<p class="mt-2 text-sm text-red-500"> </p>'),jt=(d,o)=>U(o,2),At=_('<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"><div class="h-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-6 text-2xl font-bold">Upload Images</h2> <div class="mb-6 border-b border-orange-500"><p class="mt-4 text-center font-semibold text-orange-500">Browse from Device</p></div> <div class="mb-6 grid min-h-64 cursor-pointer grid-cols-4 gap-6 rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-orange-500"><!> <!></div> <!> <input id="upload-images" type="file" accept="image/*" multiple class="hidden"> <div class="flex justify-end space-x-4"><button class="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600">Cancel</button> <button>Continue</button></div></div></div>'),Bt=_("<div><!> <!></div> <!>",1);function Ct(d,o){X(o,!0);const s=o.props[0],p=be().id===s.id,i=ke(()=>F("artwork",{artist:s.id})),l=F("services",{artistId:s.id,state:"published"});let v=H(0),b=H(V([])),k=H("");const $=g=>{U(b,V(r(b).filter((n,y)=>y!==g)))};function j(){U(b,V([])),U(k,""),U(v,0)}ye(()=>{r(v)!==0?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")});var S=Bt(),A=ee(S),u=t(A);E(u,()=>p,g=>{var n=kt();n.__click=[yt,v],c(g,n)});var w=a(u,2);Te(w,{get artDB(){return r(i)},showArtist:!1}),e(A);var I=a(A,2);E(I,()=>r(v)===1,g=>{var n=At(),y=t(n),f=a(t(y),4);f.__click=[Tt];var O=t(f);E(O,()=>r(b).length===0,R=>{var C=Dt();c(R,C)});var x=a(O,2);W(x,17,()=>r(b),Q,(R,C,P)=>{var N=St(),z=t(N),q=a(z,2);q.__click=re=>{re.stopPropagation(),$(P)},e(N),D(()=>K(z,"src",r(C))),c(R,N)}),e(f);var L=a(f,2);E(L,()=>r(k),R=>{var C=$t(),P=t(C,!0);e(C),D(()=>m(P,r(k))),c(R,C)});var M=a(L,2);M.__change=[wt,b,k];var h=a(M,2),T=t(h);T.__click=j;var B=a(T,2);B.__click=[jt,v],e(h),e(y),e(n),D(()=>{Z(B,`rounded px-6 py-3 text-white ${r(b).length>0?"bg-green-500 hover:bg-green-600":"cursor-not-allowed bg-gray-400"}`),B.disabled=r(b).length===0}),c(g,n)},g=>{var n=he(),y=ee(n);E(y,()=>r(v)===2,f=>{ht(f,{get uploadedImages(){return r(b)},serviceDB:l,backStep:()=>U(v,1),sumbitTag:O=>{console.log(O),j()}})},null,!0),c(g,n)}),c(d,S),Y()}te(["click","change"]);var Ut=_('<span class="fas fa-star text-orange-500">★</span>'),It=_('<span class="fas fa-star text-gray-300">★</span>'),Lt=_('<div class="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow"><div class="flex items-center gap-1"><!> <!></div> <p class="text-gray-800"> </p> <div class="mt-2 flex items-center gap-4"><div class="h-10 w-10 rounded-full bg-gray-300"><img alt="User Avatar" class="h-10 w-10 rounded-full object-cover"></div> <div><p class="font-bold text-gray-700"> </p> <p class="text-sm text-gray-500"> </p></div></div></div>'),Mt=_('<div class="grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6"></div>');function Rt(d,o){X(o,!0);const s=o.props[0],p=F("review",{artist:s.id},{}).map(l=>({...l,service:F("services",{},{id:l.service}),user:F("user",{},{id:l.commissioner})}));var i=Mt();W(i,21,()=>p,Q,(l,v)=>{var b=Lt(),k=t(b),$=t(k);W($,17,()=>Array(r(v).rating),Q,(x,L)=>{var M=Ut();c(x,M)});var j=a($,2);E(j,()=>r(v).rating<5,x=>{var L=he(),M=ee(L);W(M,17,()=>Array(5-r(v).rating),Q,(h,T)=>{var B=It();c(h,B)}),c(x,L)}),e(k);var S=a(k,2),A=t(S,!0);e(S);var u=a(S,2),w=t(u),I=t(w);D(()=>{var x;return K(I,"src",ve("dp",(x=r(v).user)==null?void 0:x.avatar))}),e(w);var g=a(w,2),n=t(g),y=t(n,!0);e(n);var f=a(n,2),O=t(f);e(f),e(g),e(u),e(b),D(()=>{var x,L,M;m(A,r(v).comment),m(y,((L=(x=r(v))==null?void 0:x.user)==null?void 0:L.displayName)||"Anonymous"),m(O,`(Purchased: ${(((M=r(v).service)==null?void 0:M.title)||"Unknown")??""})`)}),c(l,b)}),e(i),c(d,i),Y()}var Nt=_('<img class="h-52 w-full rounded-xl object-cover"> <div class="header-section my-4 flex items-center text-black"><div class="profile-info flex items-center"><img class="h-32 w-32 rounded-full object-cover"> <div class="ml-6 space-y-2"><h1 class="profile-name text-3xl font-bold"> </h1> <span> </span> <p class="text-gray-600"> </p> <div class="text-sm text-gray-500"><span> </span> • <span> </span></div></div></div></div> <!>',1);function rr(d,o){X(o,!0);const s=o.data;let p=[{label:"Overview",value:1,component:ot,props:[s]},{label:"Portfolio",value:2,component:Ct,props:[s]},{label:"Reviews",value:3,component:Rt,props:[s]}];var i=Nt(),l=ee(i);D(()=>K(l,"src",ve("banner",s.coverImage)));var v=a(l,2),b=t(v),k=t(b);D(()=>K(k,"src",ve("dp",s.avatar)));var $=a(k,2),j=t($),S=t(j,!0);e(j);var A=a(j,2),u=t(A,!0);e(A);var w=a(A,2),I=t(w);e(w);var g=a(w,2),n=t(g),y=t(n);e(n);var f=a(n,2),O=t(f);e(f),e(g),e($),e(b),e(v);var x=a(v,2);Ee(x,{items:p}),D(()=>{K(l,"alt",s.coverImage),K(k,"alt",s.displayName),m(S,s.displayName),Z(A,`profile-status inline-block rounded
                    ${(s.openCommission?"bg-green-500":"bg-red-500")??""} 
                    px-2 py-1 text-sm text-white
                `),m(u,s.openCommission?"Open":"Closed"),m(I,`@${s.username??""}`),m(y,`${s.followers.length??""} Followers`),m(O,`${s.following.length??""} Following`)}),c(d,i),Y()}export{rr as component,tr as universal};
