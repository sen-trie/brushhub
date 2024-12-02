import{s as pe,e as xe}from"../chunks/services.6v_wX2kh.js";import"../chunks/disclose-version.Bg9kRutz.js";import{H as te,M as t,O as r,I as K,N as e,J as k,j as s,K as ae,T as se,Q as X,k as b,A as be,t as _e}from"../chunks/runtime.D41qTSeh.js";import{e as re,a as n,t as _,i as le,b as x,r as ve,f as ee}from"../chunks/store.CMaJaUna.js";import{i as q,p as z}from"../chunks/if.C0zgFsmD.js";import{e as V,i as Z,r as de,b as ie,h as me,j as he,s as ye}from"../chunks/util.ChvpWbSe.js";import"../chunks/legacy.CtaTdtmd.js";import{b as we,B as Se}from"../chunks/Browse.CNi7JERi.js";import{c as ne}from"../chunks/svelte-component.DewKv4U0.js";import{b as ke,a as ce}from"../chunks/input.BhHbBtxr.js";import{I as Ce,b as De}from"../chunks/ImageSamples.CNCIVO3l.js";import{p as Be}from"../chunks/props.CADplsd1.js";import{o as Pe}from"../chunks/index-client.DN1rvaXi.js";const Te=async()=>[{slug:"1"},{slug:"2"}],je=({params:h})=>{const a=h.slug.toLowerCase(),i=pe.find(o=>o.id===Number(a));if(!i)throw xe(404,"No matching tag found for your search");return{service:i}},_t=Object.freeze(Object.defineProperty({__proto__:null,entries:Te,load:je},Symbol.toStringTag,{value:"Module"}));var Me=()=>{window.history.back()},Ie=_('<button class="mb-4 inline-flex items-center rounded border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50"><i class="fas fa-arrow-left mr-2"></i> Back</button>');function Oe(h){var a=Ie();a.__click=[Me],n(h,a)}re(["click"]);var Ne=_('<span class="invisible">Days</span>'),Ue=_('<span class="invisible">Pay</span>'),Ae=_('<div class="mx-2 h-1 flex-1 bg-orange-500"></div>'),He=_('<div class="flex flex-col items-center"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"><div class="h-3 w-3 rounded-full bg-white"></div></div> <p class="mt-2 text-sm font-medium text-orange-500"> </p> <p class="text-xs text-gray-500"><!></p> <p class="text-xs font-bold text-green-600"><!></p></div> <!>',1),Re=_('<div class="flex w-full items-center"><div class="relative flex w-full items-center"><div class="flex flex-col items-center"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"><div class="h-3 w-3 rounded-full bg-white"></div></div> <p class="mt-2 text-sm font-medium text-orange-500">Start</p> <p class="text-xs text-gray-500">Start of Project</p> <p class="text-xs font-bold text-green-600"><span class="invisible">Pay</span></p></div> <div class="mx-2 h-1 flex-1 bg-orange-500"></div> <!></div></div>');function fe(h,a){te(a,!0);var i=Re(),o=t(i),l=r(t(o),4);V(l,17,()=>a.selectedService.milestones,Z,(f,u,C)=>{var m=He(),g=K(m),y=r(t(g),2),I=t(y,!0);e(y);var O=r(y,2),H=t(O);q(H,()=>s(u).duration,d=>{var p=le();k(()=>x(p,`${s(u).duration.value??""} ${s(u).duration.unit??""}`)),n(d,p)},d=>{var p=Ne();n(d,p)}),e(O);var W=r(O,2),N=t(W);q(N,()=>s(u).payment,d=>{var p=le();k(()=>x(p,`Pay ${s(u).payment??""}%`)),n(d,p)},d=>{var p=Ue();n(d,p)}),e(W),e(g);var D=r(g,2);q(D,()=>C<a.selectedService.milestones.length-1,d=>{var p=Ae();n(d,p)}),k(()=>x(I,s(u).name)),n(f,m)}),e(o),e(i),n(h,i),ae()}var Ee=_('<details class="rounded-md border p-4"><summary class="text-sm font-semibold"> </summary> <p class="mt-2 text-sm text-gray-500"> </p></details>'),Ge=_('<h2 class="mt-6 text-lg font-semibold">Milestones</h2> <p class="text-sm text-gray-500">* Your money will be held and paid to the artist as per the completion of milestones.</p> <!> <h2 class="mt-6 text-lg font-semibold">Terms of Services</h2> <div class="mt-4 space-y-2"></div> <p class="mt-6 text-sm text-gray-500">* By proceeding to the commission, you agree with the proposed milestones and terms of service.</p>',1);function Le(h,a){te(a,!0);var i=Ge(),o=r(K(i),4);fe(o,{get selectedService(){return a.selectedService}});var l=r(o,4);V(l,21,()=>a.selectedService.termsOfService,Z,(f,u)=>{var C=Ee(),m=t(C),g=t(m,!0);e(m);var y=r(m,2),I=t(y,!0);e(y),e(C),k(()=>{x(g,s(u).title),x(I,s(u).details)}),n(f,C)}),e(l),se(2),n(h,i),ae()}var Fe=_("<option> </option>"),We=_('<div class="flex items-center"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"> <label class="ml-2 text-sm text-gray-700" style="user-select: none;"> </label></div>'),Ye=(h,a)=>{const i=h.target.value;a(i)},ze=_('<p class="mb-4 text-sm text-red-500"> </p>'),Qe=_('<div class="grid grid-cols-2 gap-6 p-6"><div><div class="mb-4"><label for="type" class="block text-sm font-medium text-gray-700">Type *</label> <select id="type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></select></div> <div class="mb-4"><label for="extras" class="block text-sm font-medium text-gray-700">Extras</label> <div class="mt-2 space-y-2"></div></div> <div class="mb-4"><label for="brief" class="block text-sm font-medium text-gray-700"> </label> <textarea id="brief" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" placeholder="Input your brief idea..."></textarea> <div class="mt-2 flex items-center"><span class="mr-2 text-sm text-gray-500">Or</span> <label for="upload-brief" class="cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50">Upload your brief</label> <input id="upload-brief" type="file" accept=".txt" class="hidden"></div></div> <div class="mb-4"><label for="deadline" class="block text-sm font-medium text-gray-700">Deadline *</label> <input id="deadline" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></div> <p class="mt-4 text-lg font-bold text-green-600"> </p></div> <div><h3 class="text-sm font-medium text-gray-700">References</h3> <!></div> <!></div>');function Je(h,a){te(a,!0);let i=Be(a,"commissionChoice",15),o=X(z([])),l=X(""),f=X(""),u=X(""),C=_e(()=>me(a.selectedService,i()));const m=5e3,g=c=>{c.length>m?(b(u,`Brief cannot exceed ${m} characters.`),b(f,z(c.slice(0,m)))):(b(f,z(c)),b(u,""))},y=new Date;y.setDate(y.getDate()+1);const I=y.toISOString().split("T")[0],O=c=>{var M;const v=(M=c.target.files)==null?void 0:M[0];if(!v)return;if(v.type!=="text/plain"){b(u,"Only .txt files are allowed for the brief.");return}const j=new FileReader;j.onload=()=>{const $=j.result;g($)},j.readAsText(v)},H=c=>{const v=c.target.files;if(v){if(s(o).length+v.length>10){b(l,"You can upload a maximum of 10 images.");return}for(const j of v){if(!j.type.startsWith("image/")){b(l,"Only image files (e.g., jpg, png) are allowed.");return}const M=new FileReader;M.onload=()=>{b(o,z([...s(o),M.result]))},M.readAsDataURL(j)}b(l,"")}},W=c=>{b(o,z(s(o).filter((v,j)=>j!==c)))};Pe(()=>{b(f,z(i().brief)),b(o,z(i().images))}),be(()=>{i(i().brief=s(f),!0),i(i().images=s(o),!0)});var N=Qe(),D=t(N),d=t(D),p=r(t(d),2);V(p,21,()=>a.selectedService.types,Z,(c,v,j)=>{var M=Fe();M.value=(M.__value=j)==null?"":j;var $=t(M);e(M),k(()=>x($,`${s(v).name??""} (${s(v).price??""} USD)`)),n(c,M)}),e(p),e(d);var E=r(d,2),Y=r(t(E),2);V(Y,21,()=>a.selectedService.extras,Z,(c,v,j)=>{var M=We(),$=t(M);de($);var oe=r($,2),ue=t(oe);e(oe),e(M),k(()=>{ie($,"id",s(v).name),ie(oe,"for",s(v).name),x(ue,`${s(v).name??""} (+${s(v).price??""}
                            ${(s(v).type==="percentage"?"% of base price":"USD")??""})`)}),ke($,()=>i().extras[j],ge=>i(i().extras[j]=ge,!0)),n(c,M)}),e(Y),e(E);var w=r(E,2),S=t(w),L=t(S);e(S);var P=r(S,2);ve(P),P.__input=[Ye,g];var U=r(P,2),B=r(t(U),4);B.__change=O,e(U),e(w);var T=r(w,2),F=r(t(T),2);de(F),ie(F,"min",I),e(T);var R=r(T,2),Q=t(R);e(R),e(D);var A=r(D,2),G=r(t(A),2);Ce(G,{get uploadedImages(){return s(o)},get imageWarningMessage(){return s(l)},removeImage:W,handleImageUpload:H}),e(A);var J=r(A,2);q(J,()=>a.warningMessage,c=>{var v=ze(),j=t(v,!0);e(v),k(()=>x(j,a.warningMessage)),n(c,v)}),e(N),k(()=>{x(L,`Brief * (${m-s(f).length} characters left)`),x(Q,`${s(C)??""} SGD`)}),De(p,()=>i().selectedTier,c=>i(i().selectedTier=c,!0)),ce(P,()=>s(f),c=>b(f,c)),ce(F,()=>i().deadline,c=>i(i().deadline=c,!0)),n(h,N),ae()}re(["input","change"]);var Ke=_('<div><span> </span> <span class="font-medium text-gray-900"> </span></div>'),Xe=_('<img alt="Reference" class="h-32 w-full rounded-md border object-cover">'),qe=_(`<div class="p-6"><!> <div class="mt-8 grid grid-cols-2 gap-6"><div><div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Type:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Base Price:</span> <span class="font-medium text-gray-900"></span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Extras:</span> <div class="text-right"></div></div> <div class="mb-4"><span class="block font-medium text-gray-700">Brief:</span> <textarea readonly="" rows="5" class="mt-1 w-full rounded-md border-gray-300 bg-gray-100 p-2 shadow-sm focus:border-gray-300 focus:ring-0 sm:text-sm"></textarea></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Deadline:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Add-in Services:</span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Add-in Price:</span> <span class="font-medium text-gray-900">SGD 0</span></div></div> <div><span class="mb-2 block font-medium text-gray-700">References:</span> <div class="grid grid-cols-3 gap-2"></div> <div class="mt-6"><label for="payment-method" class="mb-2 block font-medium text-gray-700">Method</label> <select id="payment-method" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"><option>DBS PayLah</option><option>PayNow</option><option>Credit Card</option></select></div></div></div> <div class="mt-8 flex items-center justify-between"><p class="text-sm text-gray-500">* Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.</p> <div class="text-right"><p class="mb-2 text-lg font-bold text-green-600"></p></div></div></div>`);function Ve(h,a){te(a,!0);const i=a.selectedService.types[a.commissionChoice.selectedTier].price,o=me(a.selectedService,a.commissionChoice);var l=qe(),f=t(l);fe(f,{get selectedService(){return a.selectedService}});var u=r(f,2),C=t(u),m=t(C),g=r(t(m),2),y=t(g,!0);e(g),e(m);var I=r(m,2),O=r(t(I),2);O.textContent=`${i??""} USD`,e(I);var H=r(I,2),W=r(t(H),2);V(W,21,()=>a.selectedService.extras,Z,(U,B,T)=>{var F=ee(),R=K(F);q(R,()=>a.commissionChoice.extras[T],Q=>{var A=Ke(),G=t(A),J=t(G);e(G);var c=r(G,2),v=t(c);k(()=>x(v,`+${(s(B).type==="percentage"?s(B).price+"% ("+Math.round(i*s(B).price/100)+" USD)":s(B).price+" USD")??""}`)),e(c),e(A),k(()=>x(J,`${s(B).name??""}:`)),n(Q,A)}),n(U,F)}),e(W),e(H);var N=r(H,2),D=r(t(N),2);ve(D),e(N);var d=r(N,2),p=r(t(d),2),E=t(p);k(()=>x(E,`${a.commissionChoice.deadline??""}
                    [Due in ${Math.ceil((new Date(a.commissionChoice.deadline).setHours(0,0,0,0)-new Date().setHours(0,0,0,0))/(1e3*60*60*24))??""} day(s)]`)),e(p),e(d),se(4),e(C);var Y=r(C,2),w=r(t(Y),2);V(w,21,()=>a.commissionChoice.images,Z,(U,B)=>{var T=Xe();k(()=>ie(T,"src",s(B))),n(U,T)}),e(w),se(2),e(Y),e(u);var S=r(u,2),L=r(t(S),2),P=t(L);P.textContent=`${o??""} USD`,e(L),e(S),e(l),k(()=>{x(y,a.selectedService.types[a.commissionChoice.selectedTier].name),he(D,`${a.commissionChoice.brief??""}
                `)}),n(h,l),ae()}var Ze=_('<div class="mt-6 flex items-center justify-between"><button class="flex items-center font-medium text-orange-500"><i class="fas fa-arrow-left mr-2"></i> </button> <button class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"><i class="fas fa-arrow-right ml-2"> </i></button></div>');function $e(h,a){var i=Ze(),o=t(i);o.__click=function(...m){var g;(g=a.goToPreviousStep)==null||g.apply(this,m)};var l=r(t(o));e(o);var f=r(o,2);f.__click=function(...m){var g;(g=a.proceedToNextStep)==null||g.apply(this,m)};var u=t(f),C=t(u,!0);e(u),e(f),e(i),k(()=>{x(l,` ${a.backwards??""}`),x(C,a.forwards)}),n(h,i)}re(["click"]);var et=_("<!> <!>",1),tt=_('<div class="fixed inset-0 z-50 overflow-y-auto bg-white"><div class="relative p-6"><button class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500" aria-label="Back"><i class="fas fa-arrow-left"></i> <span>Back</span></button> <div class="space-y-2"><h1 class="text-3xl font-bold"> </h1> <p class="text-sm text-gray-500">Anne the Hungry</p></div> <!></div></div>');function at(h,a){te(a,!0);let i=X(""),o=X(z({selectedTier:a.tierIndex,extras:a.selectedService.extras.map(D=>!1),brief:"",images:[],deadline:""})),l=X(0),f=[{component:Le,backwards:"Back to Overview",forwards:"Next to Brief"},{component:Je,backwards:"Back to Type Selection",forwards:"Next to Checkout"},{component:Ve,backwards:"Back to Brief",forwards:"Finish"}];const u=()=>{if(s(o).brief==="")return b(i,"Please provide a brief for your commission."),!1;if(s(o).deadline==="")return b(i,"Please provide a deadline for your commission."),!1;const D=new Date().setHours(0,0,0,0);return new Date(s(o).deadline).setHours(0,0,0,0)<=D?(b(i,"Deadline must be after today."),!1):(b(i,""),!0)};function C(){s(l)===1&&!u()||s(l)<f.length-1&&b(l,s(l)+1)}function m(){s(l)>0?b(l,s(l)-1):a.closePlaceCommission()}var g=tt(),y=t(g),I=t(y);I.__click=function(...D){var d;(d=a.closePlaceCommission)==null||d.apply(this,D)};var O=r(I,2),H=t(O),W=t(H,!0);e(H),se(2),e(O);var N=r(O,2);V(N,17,()=>f,Z,(D,d,p)=>{let E=()=>s(d).component,Y=()=>s(d).backwards,w=()=>s(d).forwards;var S=ee(),L=K(S);q(L,()=>p===s(l),P=>{var U=et(),B=K(U);q(B,()=>p===1,F=>{var R=ee(),Q=K(R);ne(Q,E,(A,G)=>{G(A,{get selectedService(){return a.selectedService},get warningMessage(){return s(i)},get commissionChoice(){return s(o)},set commissionChoice(J){b(o,z(J))}})}),n(F,R)},F=>{var R=ee(),Q=K(R);q(Q,()=>p===2,A=>{var G=ee(),J=K(G);ne(J,E,(c,v)=>{v(c,{get selectedService(){return a.selectedService},get commissionChoice(){return s(o)}})}),n(A,G)},A=>{var G=ee(),J=K(G);ne(J,E,(c,v)=>{v(c,{get selectedService(){return a.selectedService}})}),n(A,G)},!0),n(F,R)});var T=r(B,2);$e(T,{goToPreviousStep:m,proceedToNextStep:C,get backwards(){return Y()},get forwards(){return w()}}),n(P,U)}),n(D,S)}),e(y),e(g),k(()=>x(W,a.selectedService.title)),n(h,g),ae()}re(["click"]);var st=_('<div class="rounded-lg border p-4 shadow-sm"><h2 class="text-lg font-semibold text-orange-500"> </h2> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"> </p> <button class="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Place a commission</button></div>'),rt=_('<div class="rounded-lg border bg-orange-50 p-4 shadow-sm"><h3 class="font-semibold text-orange-500"> </h3> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"></p></div>'),it=_('<div><!> <div class="p-6"><!> <div class="flex items-center space-x-4"><h1 class="text-2xl font-bold"> </h1> <span> </span></div> <p class="text-sm text-gray-500">Anne the Hungry</p> <h2 class="mt-8 text-lg font-bold">Samples</h2> <div><!></div> <h2 class="mt-8 text-lg font-bold">Tiers</h2> <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"></div> <h2 class="mt-8 text-lg font-bold">Extras</h2> <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"></div></div></div>');function ht(h,a){te(a,!0);const i=a.data.service,o=we.filter(w=>i.samples.includes(w.id));let l=X(!1),f=X(0);function u(w){b(f,z(w)),b(l,!0)}function C(){b(l,!1)}var m=it(),g=t(m);q(g,()=>s(l),w=>{at(w,{selectedService:i,closePlaceCommission:C,get tierIndex(){return s(f)}})});var y=r(g,2),I=t(y);Oe(I);var O=r(I,2),H=t(O),W=t(H,!0);e(H);var N=r(H,2),D=t(N,!0);e(N),e(O);var d=r(O,6),p=t(d);Se(p,{artDB:o,showArtist:!1}),e(d);var E=r(d,4);V(E,21,()=>i.types,Z,(w,S,L)=>{var P=st(),U=t(P),B=t(U,!0);e(U);var T=r(U,2),F=t(T);e(T);var R=r(T,2),Q=t(R,!0);e(R);var A=r(R,2);A.__click=()=>{u(L)},e(P),k(()=>{x(B,s(S).name),x(F,`SGD ${s(S).price??""}`),x(Q,s(S).description)}),n(w,P)}),e(E);var Y=r(E,4);V(Y,21,()=>i.extras,Z,(w,S)=>{var L=rt(),P=t(L),U=t(P,!0);e(P);var B=r(P,2),T=t(B,!0);e(B),se(2),e(L),k(()=>{x(U,s(S).name),x(T,s(S).type==="percentage"?`+ ${s(S).value}%`:`+ SGD ${s(S).value}`)}),n(w,L)}),e(Y),e(y),e(m),k(()=>{x(W,i.title),ye(N,`rounded px-2 py-1 text-xs font-bold text-white
                    ${(i.isOpen?"bg-green-600":"bg-red-600")??""} 
                `),x(D,i.isOpen?"OPEN":"CLOSED")}),n(h,m),ae()}re(["click"]);export{ht as component,_t as universal};
