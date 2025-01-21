import{e as be}from"../chunks/index.N2vYJoCP.js";import{p as ne,r as ce,s as oe,d as _e}from"../chunks/db.CVRkyNLs.js";import{d as me,a as f,t as C,s as S,r as ve,c as te}from"../chunks/disclose-version.CSxEiuyN.js";import{p as se,s,f as z,c as r,r as t,t as w,g as a,n as ue,a as ie,b as W,d,ak as xe,e as he}from"../chunks/runtime.yDkJktn_.js";import{i as V}from"../chunks/if.B3MD_1yl.js";import{p as E}from"../chunks/proxy.C9ShvAXK.js";import"../chunks/legacy.BB2Gp0qm.js";import{e as re,i as ae}from"../chunks/each.CJeE_QmZ.js";import{c as le}from"../chunks/svelte-component.DTTE5Kzt.js";import{M as fe}from"../chunks/Milestone.DtnjWnrE.js";import{b as ye,a as de}from"../chunks/input.dMsVNq4n.js";import{b as we}from"../chunks/select.BOS-8e6M.js";import{p as Se}from"../chunks/props.zMKOg1SH.js";import{o as ke}from"../chunks/index-client.BtXiuVzy.js";import{c as K,k as ge,d as Ce}from"../chunks/util.DwkNCAbs.js";import{I as Be,C as Pe,S as Ie}from"../chunks/ServicePage.RVkeBF1G.js";import{B as Te}from"../chunks/BackButtonArrow.Ck_N1D_G.js";const De=async()=>[{slug:"1"},{slug:"2"}],Me=({params:x})=>{const e=x.slug.toLowerCase(),i=ne("services",{},{id:Number(e)});if(!i)throw be(404,"No matching tag found for your search");return{service:i}},pt=Object.freeze(Object.defineProperty({__proto__:null,entries:De,load:Me},Symbol.toStringTag,{value:"Module"}));var Re=()=>{window.history.back()},je=C('<button class="mb-4 inline-flex items-center rounded border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50">Back</button>');function Oe(x){var e=je();e.__click=[Re],f(x,e)}me(["click"]);var Ae=C('<details class="rounded-md border p-4"><summary class="text-sm font-semibold"> </summary> <p class="mt-2 text-sm"> </p></details>'),Ee=C('<h2 class="mt-6 text-lg font-semibold">Milestones</h2> <p class="mb-6 text-sm">* Your money will be held and paid to the artist as per the completion of milestones.</p> <!> <h2 class="mt-6 text-lg font-semibold">Terms of Services</h2> <div class="mt-4 space-y-2"></div> <p class="mt-6 text-sm">* By proceeding to the commission, you agree with the proposed milestones and terms of service.</p>',1);function Ne(x,e){var k;se(e,!0);const i=(k=ne("tos",{},{artistId:e.selectedService.artistId}))==null?void 0:k.categories.filter(B=>e.selectedService.termsOfService[B.title]===!0);var m=Ee(),v=s(z(m),4);fe(v,{get selectedService(){return e.selectedService}});var u=s(v,4);re(u,21,()=>i,ae,(B,h)=>{var g=Ae(),b=r(g),P=r(b,!0);t(b);var I=s(b,2),y=r(I,!0);t(I),t(g),w(()=>{S(P,a(h).title),S(y,a(h).details)}),f(B,g)}),t(u),ue(2),f(x,m),ie()}var Ue=C('<option class="entry"> </option>'),We=C('<div class="flex items-center"><input type="checkbox" class="h-4 w-4 rounded colour-border text-orange-500 focus:ring-orange-500"> <label class="ml-2 text-sm" style="user-select: none;"> </label></div>'),qe=(x,e)=>{const i=x.target.value;e(i)},Fe=C('<p class="-mt-4 text-sm text-red-500"> </p>'),He=C(`<div class="grid grid-cols-2 gap-6 pt-6"><div><div class="mb-4"><label for="type" class="block text-sm font-medium">Type *</label> <select id="type" class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></select></div> <div class="mb-4"><label for="extras" class="block text-sm font-medium">Extras</label> <div class="mt-2 space-y-2"></div></div> <div class="mb-4"><label for="brief" class="block text-sm font-medium"> </label> <textarea id="brief" rows="3" class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm" placeholder="Input your brief idea..."></textarea> <div class="mt-2 flex items-center"><p class="mr-2 text-sm">Or</p> <label for="upload-brief" class="cursor-pointer rounded border colour-border px-3 py-1 text-sm 
                            bg-orange-500 text-white hover:bg-orange-600">Upload your brief</label> <input id="upload-brief" type="file" accept=".txt" class="hidden"></div></div> <div class="mb-4"><label for="deadline" class="block text-sm font-medium">Deadline *</label> <input id="deadline" type="date" class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"></div> <p class="mt-4 text-lg font-bold text-green-600"> </p></div> <div><h3 class="text-sm font-medium">References</h3> <!></div> <!></div>`);function Le(x,e){se(e,!0);let i=Se(e,"commissionChoice",15),m=W(E([])),v=W(""),u=W(""),k=W(""),B=he(()=>ge(e.selectedService,i()));const h=5e3,g=o=>{o.length>h?(d(k,`Brief cannot exceed ${h} characters.`),d(u,E(o.slice(0,h)))):(d(u,E(o)),d(k,""))},b=new Date;b.setDate(b.getDate()+1);const P=b.toISOString().split("T")[0],I=o=>{var l;const n=(l=o.target.files)==null?void 0:l[0];if(!n)return;if(n.type!=="text/plain"){d(k,"Only .txt files are allowed for the brief.");return}const c=new FileReader;c.onload=()=>{const _=c.result;g(_)},c.readAsText(n)},y=o=>{const n=o.target.files;if(n){if(a(m).length+n.length>10){d(v,"You can upload a maximum of 10 images.");return}for(const c of n){if(!c.type.startsWith("image/")){d(v,"Only image files (e.g., jpg, png) are allowed.");return}const l=new FileReader;l.onload=()=>{d(m,E([...a(m),l.result]))},l.readAsDataURL(c)}d(v,"")}},Z=o=>{d(m,E(a(m).filter((n,c)=>c!==o)))};ke(()=>{d(u,E(i().brief)),d(m,E(i().images))}),xe(()=>{i(i().brief=a(u),!0),i(i().images=a(m),!0)});var T=He(),O=r(T),q=r(O),F=s(r(q),2);re(F,21,()=>e.selectedService.types,ae,(o,n,c)=>{var l=Ue();l.value=(l.__value=c)==null?"":c;var _=r(l);w(()=>S(_,`${a(n).name??""} (${K(a(n).price)??""})`)),t(l),f(o,l)}),t(F),t(q);var N=s(q,2),G=s(r(N),2);re(G,21,()=>e.selectedService.extras,ae,(o,n,c)=>{var l=We(),_=r(l);ce(_);var A=s(_,2),J=r(A);w(()=>S(J,`${a(n).name??""} (+${(a(n).type==="percentage"?`${a(n).price} % of base price`:K(a(n).price))??""}
                            )`)),t(A),t(l),w(()=>{oe(_,"id",a(n).name),oe(A,"for",a(n).name)}),ye(_,()=>i().extras[c],pe=>i(i().extras[c]=pe,!0)),f(o,l)}),t(G),t(N);var D=s(N,2),M=r(D),Q=r(M);t(M);var R=s(M,2);ve(R),R.__input=[qe,g];var X=s(R,2),$=s(r(X),4);$.__change=I,t(X),t(D);var U=s(D,2),H=s(r(U),2);ce(H),oe(H,"min",P),t(U);var ee=s(U,2),j=r(ee,!0);w(()=>S(j,K(a(B)))),t(ee),t(O);var p=s(O,2),L=s(r(p),2);Be(L,{get uploadedImages(){return a(m)},get imageWarningMessage(){return a(v)},removeImage:Z,handleImageUpload:y}),t(p);var Y=s(p,2);V(Y,()=>e.warningMessage,o=>{var n=Fe(),c=r(n,!0);t(n),w(()=>S(c,e.warningMessage)),f(o,n)}),t(T),w(()=>S(Q,`Brief * (${h-a(u).length} characters left)`)),we(F,()=>i().selectedTier,o=>i(i().selectedTier=o,!0)),de(R,()=>a(u),o=>d(u,o)),de(H,()=>i().deadline,o=>i(i().deadline=o,!0)),f(x,T),ie()}me(["input","change"]);var Ye=C('<div><p> </p> <p class="font-medium"> </p></div>'),ze=C("<p>No extras selected.</p>"),Ge=C('<img alt="Reference" class="h-32 w-full rounded-md border object-cover">'),Qe=C(`<div class="pt-6"><!> <div class="mt-6 grid grid-cols-2 gap-6"><div><div class="mb-4 flex justify-between"><p class="font-medium">Type:</p> <p class="font-medium"> </p></div> <div class="mb-4 flex justify-between"><p class="font-medium">Base Price:</p> <p class="font-medium"> </p></div> <div class="mb-4 flex justify-between"><p class="font-medium">Extras:</p> <div class="text-right"><!> <!></div></div> <div class="mb-4"><p class="block font-medium">Brief:</p> <textarea readonly="" rows="5" class="mt-1 w-full rounded-md colour-border entry
                    p-2 shadow-sm focus:colour-border focus:ring-0 sm:text-sm"></textarea></div> <div class="mb-4 flex justify-between"><p class="font-medium">Deadline:</p> <p class="font-medium"> </p></div></div> <div><p class="mb-2 block font-medium">References:</p> <div class="grid grid-cols-3 gap-2"></div> <div class="mt-6"><label for="payment-method" class="mb-2 block font-medium">Method</label> <select id="payment-method" class="mt-1 block w-full rounded-md entry 
                            shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"><option>Stripe</option><option>PayPal</option><option>Credit Card</option></select></div></div></div> <div class="flex items-center justify-between"><p class="text-sm">* Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.</p> <div class="text-right"><p class="text-lg font-bold text-green-600"> </p></div></div></div>`);function Xe(x,e){se(e,!0);const i=e.selectedService.types[e.commissionChoice.selectedTier].price,m=ge(e.selectedService,e.commissionChoice),v=e.selectedService.extras.filter((j,p)=>e.commissionChoice.extras[p]).length>0;var u=Qe(),k=r(u);fe(k,{get selectedService(){return e.selectedService}});var B=s(k,2),h=r(B),g=r(h),b=s(r(g),2),P=r(b,!0);t(b),t(g);var I=s(g,2),y=s(r(I),2),Z=r(y,!0);w(()=>S(Z,K(i))),t(y),t(I);var T=s(I,2),O=s(r(T),2),q=r(O);re(q,17,()=>e.selectedService.extras,ae,(j,p,L)=>{var Y=te(),o=z(Y);V(o,()=>e.commissionChoice.extras[L],n=>{var c=Ye(),l=r(c),_=r(l);t(l);var A=s(l,2),J=r(A);w(()=>S(J,`+${(a(p).type==="percentage"?a(p).price+"% ("+K(Math.round(i*a(p).price/100))+")":K(a(p).price))??""}`)),t(A),t(c),w(()=>S(_,`${a(p).name??""}:`)),f(n,c)}),f(j,Y)});var F=s(q,2);V(F,()=>!v,j=>{var p=ze();f(j,p)}),t(O),t(T);var N=s(T,2),G=s(r(N),2);ve(G),t(N);var D=s(N,2),M=s(r(D),2),Q=r(M);w(()=>S(Q,`${e.commissionChoice.deadline??""}
                    [${Ce(e.commissionChoice.deadline)??""}]`)),t(M),t(D),t(h);var R=s(h,2),X=s(r(R),2);re(X,21,()=>e.commissionChoice.images,ae,(j,p)=>{var L=Ge();w(()=>oe(L,"src",a(p))),f(j,L)}),t(X),ue(2),t(R),t(B);var $=s(B,2),U=s(r($),2),H=r(U),ee=r(H,!0);w(()=>S(ee,K(m))),t(H),t(U),t($),t(u),w(()=>{S(P,e.selectedService.types[e.commissionChoice.selectedTier].name),_e(G,`${e.commissionChoice.brief??""}
                `)}),f(x,u),ie()}var Je=C("<!> <!>",1),Ke=C(`<div class="fixed inset-0 z-50 overflow-y-auto"><div class="relative !bg-gray-100 dark:!bg-stone-900 h-full"><div class="mb-4 flex w-full justify-between border-b-2 pt-4 pb-2
            colour-border px-2 sm:px-6 md:px-8 lg:px-10"><!></div> <div class="px-2 sm:px-6 md:px-10 lg:px-16 !bg-gray-100 dark:!bg-stone-900 pb-6"><div class="card-container px-6"><div class="space-y-2"><h1 class="text-3xl font-bold"> </h1> <p class="text-sm"> </p></div> <!></div></div></div></div>`);function Ve(x,e){se(e,!0);let i=W(""),m=W(E({selectedTier:e.tierIndex,extras:e.selectedService.extras.map(D=>!1),brief:"",images:[],deadline:""})),v=W(0),u=[{component:Ne,backwards:"Back to Overview",forwards:"Proceed to Brief"},{component:Le,backwards:"Back to Type Selection",forwards:"Proceed to Checkout"},{component:Xe,backwards:"Back to Brief",forwards:"Submit Request"}];const k=()=>{if(a(m).brief==="")return d(i,"Please provide a brief for your commission."),!1;if(a(m).deadline==="")return d(i,"Please provide a deadline for your commission."),!1;const D=new Date().setHours(0,0,0,0);return new Date(a(m).deadline).setHours(0,0,0,0)<=D?(d(i,"Deadline must be after today."),!1):(d(i,""),!0)};function B(){a(v)===1&&!k()||(a(v)<u.length-1?d(v,a(v)+1):a(v)===u.length-1&&(alert("Request Submitted!"),e.closePlaceCommission()))}function h(){a(v)>0?d(v,a(v)-1):e.closePlaceCommission()}var g=Ke(),b=r(g),P=r(b),I=r(P);Te(I,{get closeEdit(){return e.closePlaceCommission},buttonText:"Place Commission Request"}),t(P);var y=s(P,2),Z=r(y),T=r(Z),O=r(T),q=r(O,!0);t(O);var F=s(O,2),N=r(F,!0);t(F),t(T);var G=s(T,2);re(G,17,()=>u,ae,(D,M,Q)=>{let R=()=>a(M).component,X=()=>a(M).backwards,$=()=>a(M).forwards;var U=te(),H=z(U);V(H,()=>Q===a(v),ee=>{var j=Je(),p=z(j);V(p,()=>Q===1,Y=>{var o=te(),n=z(o);le(n,R,(c,l)=>{l(c,{get selectedService(){return e.selectedService},get warningMessage(){return a(i)},get commissionChoice(){return a(m)},set commissionChoice(_){d(m,E(_))}})}),f(Y,o)},Y=>{var o=te(),n=z(o);V(n,()=>Q===2,c=>{var l=te(),_=z(l);le(_,R,(A,J)=>{J(A,{get selectedService(){return e.selectedService},get commissionChoice(){return a(m)}})}),f(c,l)},c=>{var l=te(),_=z(l);le(_,R,(A,J)=>{J(A,{get selectedService(){return e.selectedService}})}),f(c,l)},!0),f(Y,o)});var L=s(p,2);Pe(L,{goToPreviousStep:h,proceedToNextStep:B,get backwards(){return X()},get forwards(){return $()}}),f(ee,j)}),f(D,U)}),t(Z),t(y),t(b),t(g),w(()=>{S(q,e.selectedService.title),S(N,e.currentArtist.displayName)}),f(x,g),ie()}var Ze=C('<div class="card-island"><!> <!> <!></div>');function bt(x,e){se(e,!0);const i=e.data.service,m=ne("artwork",{},{}).filter(y=>i.samples.includes(y.imgSrc)),v=ne("user",{},{id:i.artistId});let u=W(!1),k=W(0);function B(y){d(k,E(y)),d(u,!0)}function h(){d(u,!1)}var g=Ze(),b=r(g);V(b,()=>a(u),y=>{Ve(y,{selectedService:i,closePlaceCommission:h,get tierIndex(){return a(k)},currentArtist:v})});var P=s(b,2);Oe(P);var I=s(P,2);Ie(I,{selectedService:i,artDB:m,currentArtist:v,openPlaceCommission:B}),t(g),f(x,g),ie()}export{bt as component,pt as universal};
