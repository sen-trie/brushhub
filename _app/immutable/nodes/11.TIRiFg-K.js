import{s as ge,e as pe}from"../chunks/services._xPLpAwU.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as ae,s,f as K,c as t,b as e,t as I,k as r,n as te,a as re,am as J,H as f,g as xe,m as be}from"../chunks/runtime.Bg64Jrmk.js";import{s as p}from"../chunks/render.DxcVzlYI.js";import{i as $}from"../chunks/if.GZK3E1Dr.js";import{e as V,i as Z}from"../chunks/each.CCMC36rA.js";import{d as se,a as u,t as C,r as ce,c as ee}from"../chunks/template.nFEuBT-2.js";import{s as _e}from"../chunks/class.BsCMgcqh.js";import{p as Q}from"../chunks/proxy.BIPFQ7So.js";import"../chunks/legacy.CtaTdtmd.js";import{a as he,B as ye}from"../chunks/Browse.TVD-2ysD.js";import{c as ne}from"../chunks/svelte-component.DZhybpc5.js";import{M as me}from"../chunks/Milestone.K0irzQRY.js";import{t as we}from"../chunks/tos.B1OixlxM.js";import{r as le,s as ie,d as ve,a as Se}from"../chunks/util.CfQX7Olw.js";import{b as ke,a as de}from"../chunks/input.odaSXa6_.js";import{b as Ce}from"../chunks/select.BtS-QQzV.js";import{p as De}from"../chunks/props.Fqppj0pZ.js";import{o as Be}from"../chunks/index-client.BrO4Z8w0.js";import{I as Pe}from"../chunks/ImageSamples.C74ppYSZ.js";const Te=async()=>[{slug:"1"},{slug:"2"}],Me=({params:h})=>{const a=h.slug.toLowerCase(),i=ge.find(o=>o.id===Number(a));if(!i)throw pe(404,"No matching tag found for your search");return{service:i}},wt=Object.freeze(Object.defineProperty({__proto__:null,entries:Te,load:Me},Symbol.toStringTag,{value:"Module"}));var Ie=()=>{window.history.back()},Oe=C('<button class="mb-4 inline-flex items-center rounded border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50"><i class="fas fa-arrow-left mr-2"></i> Back</button>');function je(h){var a=Oe();a.__click=[Ie],u(h,a)}se(["click"]);var Ne=C('<details class="rounded-md border p-4"><summary class="text-sm font-semibold"> </summary> <p class="mt-2 text-sm text-gray-500"> </p></details>'),Ue=C('<h2 class="mt-6 text-lg font-semibold">Milestones</h2> <p class="mb-6 text-sm text-gray-500">* Your money will be held and paid to the artist as per the completion of milestones.</p> <!> <h2 class="mt-6 text-lg font-semibold">Terms of Services</h2> <div class="mt-4 space-y-2"></div> <p class="mt-6 text-sm text-gray-500">* By proceeding to the commission, you agree with the proposed milestones and terms of service.</p>',1);function Ee(h,a){var D;ae(a,!0);const i=(D=we.find(y=>y.artistId===a.selectedService.artistId))==null?void 0:D.categories.filter(y=>a.selectedService.termsOfService[y.title]===!0);var o=Ue(),d=s(K(o),4);me(d,{get selectedService(){return a.selectedService}});var c=s(d,4);V(c,21,()=>i,Z,(y,g)=>{var v=Ne(),B=t(v),G=t(B,!0);e(B);var P=s(B,2),H=t(P,!0);e(P),e(v),I(()=>{p(G,r(g).title),p(H,r(g).details)}),u(y,v)}),e(c),te(2),u(h,o),re()}var He=C("<option> </option>"),Re=C('<div class="flex items-center"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"> <label class="ml-2 text-sm text-gray-700" style="user-select: none;"> </label></div>'),Ae=(h,a)=>{const i=h.target.value;a(i)},Le=C('<p class="mb-4 text-sm text-red-500"> </p>'),Fe=C('<div class="grid grid-cols-2 gap-6 p-6"><div><div class="mb-4"><label for="type" class="block text-sm font-medium text-gray-700">Type *</label> <select id="type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></select></div> <div class="mb-4"><label for="extras" class="block text-sm font-medium text-gray-700">Extras</label> <div class="mt-2 space-y-2"></div></div> <div class="mb-4"><label for="brief" class="block text-sm font-medium text-gray-700"> </label> <textarea id="brief" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" placeholder="Input your brief idea..."></textarea> <div class="mt-2 flex items-center"><span class="mr-2 text-sm text-gray-500">Or</span> <label for="upload-brief" class="cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50">Upload your brief</label> <input id="upload-brief" type="file" accept=".txt" class="hidden"></div></div> <div class="mb-4"><label for="deadline" class="block text-sm font-medium text-gray-700">Deadline *</label> <input id="deadline" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></div> <p class="mt-4 text-lg font-bold text-green-600"> </p></div> <div><h3 class="text-sm font-medium text-gray-700">References</h3> <!></div> <!></div>');function Ge(h,a){ae(a,!0);let i=De(a,"commissionChoice",15),o=J(Q([])),d=J(""),c=J(""),D=J(""),y=be(()=>ve(a.selectedService,i()));const g=5e3,v=n=>{n.length>g?(f(D,`Brief cannot exceed ${g} characters.`),f(c,Q(n.slice(0,g)))):(f(c,Q(n)),f(D,""))},B=new Date;B.setDate(B.getDate()+1);const G=B.toISOString().split("T")[0],P=n=>{var x;const l=(x=n.target.files)==null?void 0:x[0];if(!l)return;if(l.type!=="text/plain"){f(D,"Only .txt files are allowed for the brief.");return}const _=new FileReader;_.onload=()=>{const z=_.result;v(z)},_.readAsText(l)},H=n=>{const l=n.target.files;if(l){if(r(o).length+l.length>10){f(d,"You can upload a maximum of 10 images.");return}for(const _ of l){if(!_.type.startsWith("image/")){f(d,"Only image files (e.g., jpg, png) are allowed.");return}const x=new FileReader;x.onload=()=>{f(o,Q([...r(o),x.result]))},x.readAsDataURL(_)}f(d,"")}},X=n=>{f(o,Q(r(o).filter((l,_)=>_!==n)))};Be(()=>{f(c,Q(i().brief)),f(o,Q(i().images))}),xe(()=>{i(i().brief=r(c),!0),i(i().images=r(o),!0)});var R=Fe(),M=t(R),w=t(M),U=s(t(w),2);V(U,21,()=>a.selectedService.types,Z,(n,l,_)=>{var x=He();x.value=(x.__value=_)==null?"":_;var z=t(x);e(x),I(()=>p(z,`${r(l).name??""} (${r(l).price??""} USD)`)),u(n,x)}),e(U),e(w);var O=s(w,2),Y=s(t(O),2);V(Y,21,()=>a.selectedService.extras,Z,(n,l,_)=>{var x=Re(),z=t(x);le(z);var oe=s(z,2),fe=t(oe);e(oe),e(x),I(()=>{ie(z,"id",r(l).name),ie(oe,"for",r(l).name),p(fe,`${r(l).name??""} (+${r(l).price??""}
                            ${(r(l).type==="percentage"?"% of base price":"USD")??""})`)}),ke(z,()=>i().extras[_],ue=>i(i().extras[_]=ue,!0)),u(n,x)}),e(Y),e(O);var b=s(O,2),S=t(b),A=t(S);e(S);var k=s(S,2);ce(k),k.__input=[Ae,v];var j=s(k,2),L=s(t(j),4);L.__change=P,e(j),e(b);var E=s(b,2),T=s(t(E),2);le(T),ie(T,"min",G),e(E);var m=s(E,2),F=t(m);e(m),e(M);var N=s(M,2),W=s(t(N),2);Pe(W,{get uploadedImages(){return r(o)},get imageWarningMessage(){return r(d)},removeImage:X,handleImageUpload:H}),e(N);var q=s(N,2);$(q,()=>a.warningMessage,n=>{var l=Le(),_=t(l,!0);e(l),I(()=>p(_,a.warningMessage)),u(n,l)}),e(R),I(()=>{p(A,`Brief * (${g-r(c).length} characters left)`),p(F,`${r(y)??""} SGD`)}),Ce(U,()=>i().selectedTier,n=>i(i().selectedTier=n,!0)),de(k,()=>r(c),n=>f(c,n)),de(T,()=>i().deadline,n=>i(i().deadline=n,!0)),u(h,R),re()}se(["input","change"]);var We=C('<div><span> </span> <span class="font-medium text-gray-900"> </span></div>'),Ye=C('<p class="text-gray-500">No extras selected.</p>'),ze=C('<img alt="Reference" class="h-32 w-full rounded-md border object-cover">'),Qe=C(`<div class="p-6"><!> <div class="mt-8 grid grid-cols-2 gap-6"><div><div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Type:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Base Price:</span> <span class="font-medium text-gray-900"></span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Extras:</span> <div class="text-right"><!> <!></div></div> <div class="mb-4"><span class="block font-medium text-gray-700">Brief:</span> <textarea readonly="" rows="5" class="mt-1 w-full rounded-md border-gray-300 bg-gray-100 p-2 shadow-sm focus:border-gray-300 focus:ring-0 sm:text-sm"></textarea></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Deadline:</span> <span class="font-medium text-gray-900"> </span></div> <div class="mb-4 flex justify-between"><span class="font-medium text-gray-700">Add-in Services:</span></div></div> <div><span class="mb-2 block font-medium text-gray-700">References:</span> <div class="grid grid-cols-3 gap-2"></div> <div class="mt-6"><label for="payment-method" class="mb-2 block font-medium text-gray-700">Method</label> <select id="payment-method" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"><option>DBS PayLah</option><option>PayNow</option><option>Credit Card</option></select></div></div></div> <div class="mt-8 flex items-center justify-between"><p class="text-sm text-gray-500">* Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.</p> <div class="text-right"><p class="mb-2 text-lg font-bold text-green-600"></p></div></div></div>`);function Xe(h,a){ae(a,!0);const i=a.selectedService.types[a.commissionChoice.selectedTier].price,o=ve(a.selectedService,a.commissionChoice),d=a.selectedService.extras.filter((T,m)=>a.commissionChoice.extras[m]).length>0;var c=Qe(),D=t(c);me(D,{get selectedService(){return a.selectedService}});var y=s(D,2),g=t(y),v=t(g),B=s(t(v),2),G=t(B,!0);e(B),e(v);var P=s(v,2),H=s(t(P),2);H.textContent=`${i??""} USD`,e(P);var X=s(P,2),R=s(t(X),2),M=t(R);V(M,17,()=>a.selectedService.extras,Z,(T,m,F)=>{var N=ee(),W=K(N);$(W,()=>a.commissionChoice.extras[F],q=>{var n=We(),l=t(n),_=t(l);e(l);var x=s(l,2),z=t(x);I(()=>p(z,`+${(r(m).type==="percentage"?r(m).price+"% ("+Math.round(i*r(m).price/100)+" USD)":r(m).price+" USD")??""}`)),e(x),e(n),I(()=>p(_,`${r(m).name??""}:`)),u(q,n)}),u(T,N)});var w=s(M,2);$(w,()=>!d,T=>{var m=Ye();u(T,m)}),e(R),e(X);var U=s(X,2),O=s(t(U),2);ce(O),e(U);var Y=s(U,2),b=s(t(Y),2),S=t(b);I(()=>p(S,`${a.commissionChoice.deadline??""}
                    [Due in ${Math.ceil((new Date(a.commissionChoice.deadline).setHours(0,0,0,0)-new Date().setHours(0,0,0,0))/(1e3*60*60*24))??""} day(s)]`)),e(b),e(Y),te(2),e(g);var A=s(g,2),k=s(t(A),2);V(k,21,()=>a.commissionChoice.images,Z,(T,m)=>{var F=ze();I(()=>ie(F,"src",r(m))),u(T,F)}),e(k),te(2),e(A),e(y);var j=s(y,2),L=s(t(j),2),E=t(L);E.textContent=`${o??""} USD`,e(L),e(j),e(c),I(()=>{p(G,a.selectedService.types[a.commissionChoice.selectedTier].name),Se(O,`${a.commissionChoice.brief??""}
                `)}),u(h,c),re()}var qe=C('<div class="mt-6 flex items-center justify-between"><button class="flex items-center font-medium text-orange-500"><i class="fas fa-arrow-left mr-2"></i> </button> <button class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"><i class="fas fa-arrow-right ml-2"> </i></button></div>');function Je(h,a){var i=qe(),o=t(i);o.__click=function(...g){var v;(v=a.goToPreviousStep)==null||v.apply(this,g)};var d=s(t(o));e(o);var c=s(o,2);c.__click=function(...g){var v;(v=a.proceedToNextStep)==null||v.apply(this,g)};var D=t(c),y=t(D,!0);e(D),e(c),e(i),I(()=>{p(d,` ${a.backwards??""}`),p(y,a.forwards)}),u(h,i)}se(["click"]);var Ke=C("<!> <!>",1),Ve=C('<div class="fixed inset-0 z-50 overflow-y-auto bg-white"><div class="relative p-6"><button class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500" aria-label="Back"><i class="fas fa-arrow-left"></i> <span>Back</span></button> <div class="space-y-2"><h1 class="text-3xl font-bold"> </h1> <p class="text-sm text-gray-500">Anne the Hungry</p></div> <!></div></div>');function Ze(h,a){ae(a,!0);let i=J(""),o=J(Q({selectedTier:a.tierIndex,extras:a.selectedService.extras.map(M=>!1),brief:"",images:[],deadline:""})),d=J(0),c=[{component:Ee,backwards:"Back to Overview",forwards:"Next to Brief"},{component:Ge,backwards:"Back to Type Selection",forwards:"Next to Checkout"},{component:Xe,backwards:"Back to Brief",forwards:"Finish"}];const D=()=>{if(r(o).brief==="")return f(i,"Please provide a brief for your commission."),!1;if(r(o).deadline==="")return f(i,"Please provide a deadline for your commission."),!1;const M=new Date().setHours(0,0,0,0);return new Date(r(o).deadline).setHours(0,0,0,0)<=M?(f(i,"Deadline must be after today."),!1):(f(i,""),!0)};function y(){r(d)===1&&!D()||r(d)<c.length-1&&f(d,r(d)+1)}function g(){r(d)>0?f(d,r(d)-1):a.closePlaceCommission()}var v=Ve(),B=t(v),G=t(B);G.__click=function(...M){var w;(w=a.closePlaceCommission)==null||w.apply(this,M)};var P=s(G,2),H=t(P),X=t(H,!0);e(H),te(2),e(P);var R=s(P,2);V(R,17,()=>c,Z,(M,w,U)=>{let O=()=>r(w).component,Y=()=>r(w).backwards,b=()=>r(w).forwards;var S=ee(),A=K(S);$(A,()=>U===r(d),k=>{var j=Ke(),L=K(j);$(L,()=>U===1,T=>{var m=ee(),F=K(m);ne(F,O,(N,W)=>{W(N,{get selectedService(){return a.selectedService},get warningMessage(){return r(i)},get commissionChoice(){return r(o)},set commissionChoice(q){f(o,Q(q))}})}),u(T,m)},T=>{var m=ee(),F=K(m);$(F,()=>U===2,N=>{var W=ee(),q=K(W);ne(q,O,(n,l)=>{l(n,{get selectedService(){return a.selectedService},get commissionChoice(){return r(o)}})}),u(N,W)},N=>{var W=ee(),q=K(W);ne(q,O,(n,l)=>{l(n,{get selectedService(){return a.selectedService}})}),u(N,W)},!0),u(T,m)});var E=s(L,2);Je(E,{goToPreviousStep:g,proceedToNextStep:y,get backwards(){return Y()},get forwards(){return b()}}),u(k,j)}),u(M,S)}),e(B),e(v),I(()=>p(X,a.selectedService.title)),u(h,v),re()}se(["click"]);var $e=C('<div class="rounded-lg border p-4 shadow-sm"><h2 class="text-lg font-semibold text-orange-500"> </h2> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"> </p> <button class="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Place a commission</button></div>'),et=C('<div class="rounded-lg border bg-orange-50 p-4 shadow-sm"><h3 class="font-semibold text-orange-500"> </h3> <p class="font-bold text-green-600"> </p> <p class="mt-2 text-sm text-gray-600"></p></div>'),tt=C('<div><!> <div class="p-6"><!> <div class="flex items-center space-x-4"><h1 class="text-2xl font-bold"> </h1> <span> </span></div> <p class="text-sm text-gray-500">Anne the Hungry</p> <h2 class="mt-8 text-lg font-bold">Samples</h2> <div><!></div> <h2 class="mt-8 text-lg font-bold">Tiers</h2> <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"></div> <h2 class="mt-8 text-lg font-bold">Extras</h2> <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"></div></div></div>');function St(h,a){ae(a,!0);const i=a.data.service,o=he.filter(b=>i.samples.includes(b.id));let d=J(!1),c=J(0);function D(b){f(c,Q(b)),f(d,!0)}function y(){f(d,!1)}var g=tt(),v=t(g);$(v,()=>r(d),b=>{Ze(b,{selectedService:i,closePlaceCommission:y,get tierIndex(){return r(c)}})});var B=s(v,2),G=t(B);je(G);var P=s(G,2),H=t(P),X=t(H,!0);e(H);var R=s(H,2),M=t(R,!0);e(R),e(P);var w=s(P,6),U=t(w);ye(U,{artDB:o,showArtist:!1}),e(w);var O=s(w,4);V(O,21,()=>i.types,Z,(b,S,A)=>{var k=$e(),j=t(k),L=t(j,!0);e(j);var E=s(j,2),T=t(E);e(E);var m=s(E,2),F=t(m,!0);e(m);var N=s(m,2);N.__click=()=>{D(A)},e(k),I(()=>{p(L,r(S).name),p(T,`SGD ${r(S).price??""}`),p(F,r(S).description)}),u(b,k)}),e(O);var Y=s(O,4);V(Y,21,()=>i.extras,Z,(b,S)=>{var A=et(),k=t(A),j=t(k,!0);e(k);var L=s(k,2),E=t(L,!0);e(L),te(2),e(A),I(()=>{p(j,r(S).name),p(E,r(S).type==="percentage"?`+ ${r(S).price}%`:`+ SGD ${r(S).price}`)}),u(b,A)}),e(Y),e(B),e(g),I(()=>{p(X,i.title),_e(R,`rounded px-2 py-1 text-xs font-bold text-white
                    ${(i.isOpen?"bg-green-600":"bg-red-600")??""} 
                `),p(M,i.isOpen?"OPEN":"CLOSED")}),u(h,g),re()}se(["click"]);export{St as component,wt as universal};
