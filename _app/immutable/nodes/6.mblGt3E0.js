import{s as xe,e as be}from"../chunks/services.nxiSfVjb.js";import"../chunks/disclose-version.Bg9kRutz.js";import{e as me,H as te,M as a,O as s,I as Z,N as e,J as k,l as i,K as ae,T as ee,Q as V,o as b,A as _e}from"../chunks/runtime.DB3OD_6s.js";import{l as he,e as le,a as c,t as p,j as ce,b as u,r as ue,g as ie}from"../chunks/store.CjOx6k1S.js";import{a as ye,i as K,p as J}from"../chunks/if.CGNK2Ke6.js";import{e as W,i as X,b as oe,r as we,k as ke,s as Se}from"../chunks/util.C9qf0wzy.js";import"../chunks/legacy.CtaTdtmd.js";import{b as Ce,B as De}from"../chunks/Browse.D333pnz7.js";import{c as de}from"../chunks/svelte-component.jiY5qeoV.js";import{a as ve}from"../chunks/input.CUz6bESB.js";import{p as Be}from"../chunks/props.CA-NK62R.js";import{o as Pe}from"../chunks/index-client.BGkPsbCz.js";function fe(n,t,r){if(n.multiple)return Oe(n,t);for(var o of n.options){var l=ne(o);if(ye(l,t)){o.selected=!0;return}}(!r||t!==void 0)&&(n.selectedIndex=-1)}function je(n,t){me(()=>{var r=new MutationObserver(()=>{var o=n.__value;fe(n,o)});return r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function Te(n,t,r=t){var o=!0;he(n,"change",()=>{var l;if(n.multiple)l=[].map.call(n.querySelectorAll(":checked"),ne);else{var d=n.querySelector(":checked");l=d&&ne(d)}r(l)}),me(()=>{var l=t();if(fe(n,l,o),o&&l===void 0){var d=n.querySelector(":checked");d!==null&&(l=ne(d),r(l))}n.__value=l,o=!1}),je(n)}function Oe(n,t){for(var r of n.options)r.selected=~t.indexOf(ne(r))}function ne(n){return"__value"in n?n.__value:n.value}const Me=async()=>[{slug:"1"},{slug:"2"}],Ne=({params:n})=>{const t=n.slug.toLowerCase(),r=xe.find(o=>o.id===Number(t));if(!r)throw be(404,"No matching tag found for your search");return{service:r}},Ct=Object.freeze(Object.defineProperty({__proto__:null,entries:Me,load:Ne},Symbol.toStringTag,{value:"Module"}));var Ae=()=>{window.history.back()},Ie=p('<button class="mb-4 inline-flex items-center rounded border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50"><i class="fas fa-arrow-left mr-2"></i> Back</button>');function Ge(n){var t=Ie();t.__click=[Ae],c(n,t)}le(["click"]);var He=p('<span class="invisible">Days</span>'),Re=p('<span class="invisible">Pay</span>'),Ee=p('<div class="mx-2 h-1 flex-1 bg-orange-500"></div>'),Le=p('<div class="flex flex-col items-center"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"><div class="h-3 w-3 rounded-full bg-white"></div></div> <p class="mt-2 text-sm font-medium text-orange-500"> </p> <p class="text-xs text-gray-500"><!></p> <p class="text-xs font-bold text-green-600"><!></p></div> <!>',1),Ue=p('<div class="flex w-full items-center"><div class="relative flex w-full items-center"><div class="flex flex-col items-center"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"><div class="h-3 w-3 rounded-full bg-white"></div></div> <p class="mt-2 text-sm font-medium text-orange-500">Start</p> <p class="text-xs text-gray-500">Start of Project</p> <p class="text-xs font-bold text-green-600"><span class="invisible">Pay</span></p></div> <div class="mx-2 h-1 flex-1 bg-orange-500"></div> <!></div></div>');function ge(n,t){te(t,!0);var r=Ue(),o=a(r),l=s(a(o),4);W(l,17,()=>t.selectedService.milestones,X,(d,f,y)=>{var _=Le(),g=Z(_),S=s(a(g),2),I=a(S,!0);e(S);var M=s(S,2),j=a(M);K(j,()=>i(f).duration,m=>{var x=ce();k(()=>u(x,`${i(f).duration.value??""} ${i(f).duration.unit??""}`)),c(m,x)},m=>{var x=He();c(m,x)}),e(M);var H=s(M,2),N=a(H);K(N,()=>i(f).payment,m=>{var x=ce();k(()=>u(x,`Pay ${i(f).payment??""}%`)),c(m,x)},m=>{var x=Re();c(m,x)}),e(H),e(g);var D=s(g,2);K(D,()=>y<t.selectedService.milestones.length-1,m=>{var x=Ee();c(m,x)}),k(()=>u(I,i(f).name)),c(d,_)}),e(o),e(r),c(n,r),ae()}var Fe=p('<details class="rounded-md border p-4"><summary class="text-sm font-semibold"> </summary> <p class="mt-2 text-sm text-gray-500"> </p></details>'),qe=p('<h2 class="mt-6 text-lg font-semibold">Milestones</h2> <p class="text-sm text-gray-500">* Your money will be held and paid to the artist as per the completion of milestones.</p> <!> <h2 class="mt-6 text-lg font-semibold">Terms of Services</h2> <div class="mt-4 space-y-2"></div> <p class="mt-6 text-sm text-gray-500">* By proceeding to the commission, you agree with the proposed milestones and terms of service.</p>',1);function Ye(n,t){te(t,!0);var r=qe(),o=s(Z(r),4);ge(o,{get selectedService(){return t.selectedService}});var l=s(o,4);W(l,21,()=>t.selectedService.termsOfService,X,(d,f)=>{var y=Fe(),_=a(y),g=a(_,!0);e(_);var S=s(_,2),I=a(S,!0);e(S),e(y),k(()=>{u(g,i(f).title),u(I,i(f).details)}),c(d,y)}),e(l),ee(2),c(n,r),ae()}const ze=(n,t,r)=>{const o=n.target.files;if(o){if(i(t).length+o.length>10){b(r,"You can upload a maximum of 10 images.");return}for(const l of o){if(!l.type.startsWith("image/")){b(r,"Only image files (e.g., jpg, png) are allowed.");return}const d=new FileReader;d.onload=()=>{b(t,J([...i(t),d.result]))},d.readAsDataURL(l)}b(r,"")}};var Qe=p("<option> </option>"),Je=p('<div class="flex items-center"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"> <label class="ml-2 text-sm text-gray-700"> </label></div>'),Ke=(n,t)=>{const r=n.target.value;t(r)},We=p('<span class="text-sm text-gray-500">No images uploaded</span>'),Xe=p('<div class="relative"><img alt="Uploaded reference" class="h-16 w-16 rounded-md border object-cover"> <button class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">×</button></div>'),Ve=p('<p class="mt-2 text-sm text-red-500"> </p>'),Ze=p('<p class="mb-4 text-sm text-red-500"> </p>'),$e=p('<div class="grid grid-cols-2 gap-6 p-6"><div><div class="mb-4"><label for="type" class="block text-sm font-medium text-gray-700">Type *</label> <select id="type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></select></div> <div class="mb-4"><label for="extras" class="block text-sm font-medium text-gray-700">Extras</label> <div class="mt-2 space-y-2"></div></div> <div class="mb-4"><label for="brief" class="block text-sm font-medium text-gray-700"> </label> <textarea id="brief" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" placeholder="Input your brief idea..."></textarea> <div class="mt-2 flex items-center"><span class="mr-2 text-sm text-gray-500">Or</span> <label for="upload-brief" class="cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50">Upload your brief</label> <input id="upload-brief" type="file" accept=".txt" class="hidden"></div></div> <div class="mb-4"><label for="deadline" class="block text-sm font-medium text-gray-700">Deadline *</label> <input id="deadline" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></div> <p class="mt-4 text-lg font-bold text-green-600">SGD 500</p></div> <div><h3 class="text-sm font-medium text-gray-700">References</h3> <div class="mt-2 flex h-48 w-full flex-wrap items-center justify-center gap-2 rounded-md border border-dashed border-gray-300 bg-gray-50 p-2"><!> <!></div> <!> <div class="mt-4"><label for="upload-images" class="cursor-pointer rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Upload images</label> <input id="upload-images" type="file" accept="image/*" multiple class="hidden"></div></div> <!></div>');function et(n,t){te(t,!0);let r=Be(t,"commissionChoice",15),o=V(J([])),l=V(""),d=V(""),f=V("");const y=5e3,_=v=>{v.length>y?(b(f,`Brief cannot exceed ${y} characters.`),b(l,J(v.slice(0,y)))):(b(l,J(v)),b(f,""))},g=new Date;g.setDate(g.getDate()+1);const S=g.toISOString().split("T")[0],I=v=>{var O;const h=(O=v.target.files)==null?void 0:O[0];if(!h)return;if(h.type!=="text/plain"){b(f,"Only .txt files are allowed for the brief.");return}const P=new FileReader;P.onload=()=>{const Q=P.result;_(Q)},P.readAsText(h)},M=v=>{b(o,J(i(o).filter((h,P)=>P!==v)))};Pe(()=>{b(l,J(r().brief)),b(o,J(r().images))}),_e(()=>{r(r().brief=i(l),!0),r(r().images=i(o),!0)});var j=$e(),H=a(j),N=a(H),D=s(a(N),2);W(D,21,()=>t.selectedService.types,X,(v,h,P)=>{var O=Qe();O.value=(O.__value=P)==null?"":P;var Q=a(O,!0);e(O),k(()=>u(Q,i(h).name)),c(v,O)}),e(D),e(N);var m=s(N,2),x=s(a(m),2);W(x,21,()=>t.selectedService.extras,X,(v,h,P)=>{var O=Je(),Q=a(O);Q.__change=()=>{r(r().extras[P]=!r().extras[P],!0)};var se=s(Q,2),pe=a(se,!0);e(se),e(O),k(()=>{oe(Q,"id",i(h).name),oe(se,"for",i(h).name),u(pe,i(h).name)}),c(v,O)}),e(x),e(m);var R=s(m,2),q=a(R),T=a(q);e(q);var w=s(q,2);ue(w),w.__input=[Ke,_];var E=s(w,2),L=s(a(E),4);L.__change=I,e(E),e(R);var A=s(R,2),B=s(a(A),2);we(B),oe(B,"min",S),e(A),ee(2),e(H);var C=s(H,2),U=s(a(C),2),G=a(U);K(G,()=>i(o).length===0,v=>{var h=We();c(v,h)});var Y=s(G,2);W(Y,17,()=>i(o),X,(v,h,P)=>{var O=Xe(),Q=a(O),se=s(Q,2);se.__click=()=>M(P),e(O),k(()=>oe(Q,"src",i(h))),c(v,O)}),e(U);var F=s(U,2);K(F,()=>i(d),v=>{var h=Ve(),P=a(h,!0);e(h),k(()=>u(P,i(d))),c(v,h)});var z=s(F,2),$=s(a(z),2);$.__change=[ze,o,d],e(z),e(C);var re=s(C,2);K(re,()=>t.warningMessage,v=>{var h=Ze(),P=a(h,!0);e(h),k(()=>u(P,t.warningMessage)),c(v,h)}),e(j),k(()=>u(T,`Brief * (${y-i(l).length} characters left)`)),Te(D,()=>r().selectedTier,v=>r(r().selectedTier=v,!0)),ve(w,()=>i(l),v=>b(l,v)),ve(B,()=>r().deadline,v=>r(r().deadline=v,!0)),c(n,j),ae()}le(["change","input","click"]);var tt=p('<div><span> </span> <span class="font-medium text-gray-900"> </span></div>'),at=p('<img alt="Reference" class="h-32 w-full rounded-md border object-cover">'),rt=p(`<div class="p-6"><!> <div class="mt-8 grid grid-cols-2 gap-6"><div><div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Type:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Base Price:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Extras:</span> <div class="text-right"></div></div> <div class="mb-4"><span class="block font-medium text-gray-700">Brief:</span> <textarea readonly="" rows="5" class="mt-1 w-full rounded-md border-gray-300 bg-gray-100 p-2 shadow-sm focus:border-gray-300 focus:ring-0 sm:text-sm"></textarea></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Deadline:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Add-in Services:</span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Add-in Price:</span> <span class="font-medium text-gray-900">SGD 0</span></div></div> <div><span class="mb-2 block font-medium text-gray-700">References:</span> <div class="grid grid-cols-3 gap-2"></div> <div class="mt-6"><label for="payment-method" class="mb-2 block font-medium text-gray-700">Method</label> <select id="payment-method" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"><option>DBS PayLah</option><option>PayNow</option><option>Credit Card</option></select></div></div></div> <div class="mt-8 flex items-center justify-between"><p class="text-sm text-gray-500">* Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.</p> <div class="text-right"><p class="mb-2 text-lg font-bold text-green-600"></p></div></div></div>`);function st(n,t){te(t,!0);const r=100;var o=rt(),l=a(o);ge(l,{get selectedService(){return t.selectedService}});var d=s(l,2),f=a(d),y=a(f),_=s(a(y),2),g=a(_,!0);e(_),e(y);var S=s(y,2),I=s(a(S),2),M=a(I);e(I),e(S);var j=s(S,2),H=s(a(j),2);W(H,21,()=>t.selectedService.extras,X,(A,B)=>{var C=tt(),U=a(C),G=a(U);e(U);var Y=s(U,2),F=a(Y);e(Y),e(C),k(()=>{u(G,`${i(B).name??""} (${i(B).count??""})`),u(F,`SGD ${i(B).price??""}`)}),c(A,C)}),e(H),e(j);var N=s(j,2),D=s(a(N),2);ue(D),e(N);var m=s(N,2),x=s(a(m),2),R=a(x);k(()=>u(R,`${t.commissionChoice.deadline??""}
                    [Due in ${Math.ceil((new Date(t.commissionChoice.deadline).setHours(0,0,0,0)-new Date().setHours(0,0,0,0))/(1e3*60*60*24))??""} day(s)]`)),e(x),e(m),ee(4),e(f);var q=s(f,2),T=s(a(q),2);W(T,21,()=>t.commissionChoice.images,X,(A,B)=>{var C=at();k(()=>oe(C,"src",i(B))),c(A,C)}),e(T),ee(2),e(q),e(d);var w=s(d,2),E=s(a(w),2),L=a(E);L.textContent=`SGD ${r}`,e(E),e(w),e(o),k(()=>{u(g,t.selectedService.types[t.commissionChoice.selectedTier].name),u(M,`SGD ${t.selectedService.types[t.commissionChoice.selectedTier].price??""}`),ke(D,`${t.commissionChoice.brief??""}
                `)}),c(n,o),ae()}var it=p('<div class="mt-6 flex items-center justify-between"><button class="flex items-center font-medium text-orange-500"><i class="fas fa-arrow-left mr-2"></i> </button> <button class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"><i class="fas fa-arrow-right ml-2"> </i></button></div>');function ot(n,t){var r=it(),o=a(r);o.__click=function(..._){var g;(g=t.goToPreviousStep)==null||g.apply(this,_)};var l=s(a(o));e(o);var d=s(o,2);d.__click=function(..._){var g;(g=t.proceedToNextStep)==null||g.apply(this,_)};var f=a(d),y=a(f,!0);e(f),e(d),e(r),k(()=>{u(l,` ${t.backwards??""}`),u(y,t.forwards)}),c(n,r)}le(["click"]);var nt=p("<!> <!>",1),lt=p('<div class="fixed inset-0 z-50 overflow-y-auto bg-white"><div class="relative p-6"><button class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500" aria-label="Back"><i class="fas fa-arrow-left"></i> <span>Back</span></button> <div class="space-y-2"><h1 class="text-3xl font-bold"> </h1> <p class="text-sm text-gray-500">Anne the Hungry</p></div> <!></div></div>');function dt(n,t){te(t,!0);let r=V(""),o=V(J({selectedTier:t.tierIndex,extras:t.selectedService.extras.map(D=>!1),brief:"",images:[],deadline:""})),l=V(0),d=[{component:Ye,backwards:"Back to Overview",forwards:"Next to Brief"},{component:et,backwards:"Back to Type Selection",forwards:"Next to Checkout"},{component:st,backwards:"Back to Brief",forwards:"Finish"}];const f=()=>{if(i(o).brief==="")return b(r,"Please provide a brief for your commission."),!1;if(i(o).deadline==="")return b(r,"Please provide a deadline for your commission."),!1;const D=new Date().setHours(0,0,0,0);return new Date(i(o).deadline).setHours(0,0,0,0)<=D?(b(r,"Deadline must be after today."),!1):(b(r,""),!0)};function y(){i(l)===1&&!f()||i(l)<d.length-1&&b(l,i(l)+1)}function _(){i(l)>0?b(l,i(l)-1):t.closePlaceCommission()}var g=lt(),S=a(g),I=a(S);I.__click=function(...D){var m;(m=t.closePlaceCommission)==null||m.apply(this,D)};var M=s(I,2),j=a(M),H=a(j,!0);e(j),ee(2),e(M);var N=s(M,2);W(N,17,()=>d,X,(D,m,x)=>{let R=()=>i(m).component,q=()=>i(m).backwards,T=()=>i(m).forwards;var w=ie(),E=Z(w);K(E,()=>x===i(l),L=>{var A=nt(),B=Z(A);K(B,()=>x===1,U=>{var G=ie(),Y=Z(G);de(Y,R,(F,z)=>{z(F,{get selectedService(){return t.selectedService},get warningMessage(){return i(r)},get commissionChoice(){return i(o)},set commissionChoice($){b(o,J($))}})}),c(U,G)},U=>{var G=ie(),Y=Z(G);K(Y,()=>x===2,F=>{var z=ie(),$=Z(z);de($,R,(re,v)=>{v(re,{get selectedService(){return t.selectedService},get commissionChoice(){return i(o)}})}),c(F,z)},F=>{var z=ie(),$=Z(z);de($,R,(re,v)=>{v(re,{get selectedService(){return t.selectedService}})}),c(F,z)},!0),c(U,G)});var C=s(B,2);ot(C,{goToPreviousStep:_,proceedToNextStep:y,get backwards(){return q()},get forwards(){return T()}}),c(L,A)}),c(D,w)}),e(S),e(g),k(()=>u(H,t.selectedService.title)),c(n,g),ae()}le(["click"]);var ct=p('<div class="rounded-lg border p-4 shadow-sm"><h2 class="text-lg font-semibold text-orange-500"> </h2> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"> </p> <button class="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Place a commission</button></div>'),vt=p('<div class="rounded-lg border bg-orange-50 p-4 shadow-sm"><h3 class="font-semibold text-orange-500"> </h3> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"></p></div>'),mt=p('<div><!> <div class="p-6"><!> <div class="flex items-center space-x-4"><h1 class="text-2xl font-bold"> </h1> <span> </span></div> <p class="text-sm text-gray-500">Anne the Hungry</p> <h2 class="mt-8 text-lg font-bold">Samples</h2> <div><!></div> <h2 class="mt-8 text-lg font-bold">Tiers</h2> <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"></div> <h2 class="mt-8 text-lg font-bold">Extras</h2> <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"></div></div></div>');function Dt(n,t){te(t,!0);const r=t.data.service,o=Ce.filter(T=>r.samples.includes(T.id));let l=V(!1),d=V(0);function f(T){b(d,J(T)),b(l,!0)}function y(){b(l,!1)}var _=mt(),g=a(_);K(g,()=>i(l),T=>{dt(T,{selectedService:r,closePlaceCommission:y,get tierIndex(){return i(d)}})});var S=s(g,2),I=a(S);Ge(I);var M=s(I,2),j=a(M),H=a(j,!0);e(j);var N=s(j,2),D=a(N,!0);e(N),e(M);var m=s(M,6),x=a(m);De(x,{artDB:o,showArtist:!1}),e(m);var R=s(m,4);W(R,21,()=>r.types,X,(T,w,E)=>{var L=ct(),A=a(L),B=a(A,!0);e(A);var C=s(A,2),U=a(C);e(C);var G=s(C,2),Y=a(G,!0);e(G);var F=s(G,2);F.__click=()=>{f(E)},e(L),k(()=>{u(B,i(w).name),u(U,`SGD ${i(w).price??""}`),u(Y,i(w).description)}),c(T,L)}),e(R);var q=s(R,4);W(q,21,()=>r.extras,X,(T,w)=>{var E=vt(),L=a(E),A=a(L,!0);e(L);var B=s(L,2),C=a(B,!0);e(B),ee(2),e(E),k(()=>{u(A,i(w).name),u(C,i(w).type==="percentage"?`+ ${i(w).value}%`:`+ SGD ${i(w).value}`)}),c(T,E)}),e(q),e(S),e(_),k(()=>{u(H,r.title),Se(N,`rounded px-2 py-1 text-xs font-bold text-white
                    ${(r.isOpen?"bg-green-600":"bg-red-600")??""} 
                `),u(D,r.isOpen?"OPEN":"CLOSED")}),c(n,_),ae()}le(["click"]);export{Dt as component,Ct as universal};
