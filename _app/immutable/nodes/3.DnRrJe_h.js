import{e as me}from"../chunks/index.BnZ_zlD2.js";import{g as be,p as fe,a as le,r as D,d as _e,s as P}from"../chunks/util.CTWbUTz8.js";import{d as xe,a as b,t as _,g as ye}from"../chunks/disclose-version.TbKqxNJi.js";import{p as he,b as B,ak as ke,s as r,f as we,t as f,a as De,g as e,d as u,al as Pe,c as i,r as o,n as W}from"../chunks/runtime.CHrGdgHD.js";import{s as h}from"../chunks/render.CZZNUFKP.js";import{p as q,i as oe}from"../chunks/if.eqP7gfIA.js";import{e as z,i as V}from"../chunks/each.DPCLWfUA.js";import{a as k}from"../chunks/input.DL2JL8lo.js";import{b as Be}from"../chunks/select.cSFZNQFZ.js";const je=!1,Ue=()=>{const p=be(),d=fe("artist",{},{id:p.id});if(!d)throw me(404,"You are not the current user");return{artist:d}},Ke=Object.freeze(Object.defineProperty({__proto__:null,load:Ue,ssr:je},Symbol.toStringTag,{value:"Module"}));var Ce=(p,d,v)=>d(p,v()),Re=(p,d,v,w,a)=>{d()==="dp"?(e(v).uploadedDP="",u(w,"")):(e(v).uploadedBanner="",u(a,""))},Ae=_('<div class="mt-2 flex justify-center space-x-2"><label class="mr-4 cursor-pointer rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Upload Image</label> <input type="file" accept="image/*" class="hidden"> <button class="text-red-500 hover:underline">Remove</button></div>'),Me=_('<p class="mt-2 text-sm text-red-500"> </p>'),Ne=_('<p class="mt-2 text-sm text-red-500"> </p>'),Se=_('<div class="items-center space-x-1 rounded bg-orange-100 px-2 py-1 text-orange-500"><span> </span> <button class="text-xs font-bold">x</button></div>'),Oe=_("<option> </option>"),Ee=_('<div class="flex items-center space-x-2"><button class="text-gray-500 hover:text-orange-500 disabled:text-gray-300" aria-label="Move link up">▲</button> <button class="text-gray-500 hover:text-orange-500 disabled:text-gray-300" aria-label="Move link down">▼</button> <input type="url" placeholder="Enter link URL" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"> <button class="text-gray-500 hover:text-red-500" aria-label="Remove link">🗑️</button></div>'),Le=(p,d)=>e(d).links.push(""),Te=(p,d,v)=>{confirm("Are you sure you want to discard all changes?")&&u(d,q(v))},We=_(`<h1 class="text-2xl font-bold">Profile Customization</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><p class="block text-sm font-medium text-gray-700">Profile Picture</p> <p class="mt-1 text-sm text-gray-500">Appears whenever your page is presented to others</p> <!> <img alt="DP" class="mx-auto my-4 h-24 w-24 rounded-full"> <!></div> <div><p class="block text-sm font-medium text-gray-700">Banner Image</p> <p class="mt-1 text-sm text-gray-500">This image will be displayed at the top of your profile page</p> <!> <img alt="Cover Banner" class="mx-auto my-4 h-24 w-full rounded-md object-cover"> <!></div></div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label for="username" class="block text-sm font-medium text-gray-700">Handle</label> <p class="mt-1 text-sm text-gray-500"> </p> <input type="text" id="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></div> <div><label for="displayName" class="block text-sm font-medium text-gray-700">Display Name</label> <p class="mt-1 text-sm text-gray-500">Choose a channel name that represents you and your content</p> <input type="text" id="displayName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></div></div> <div><label for="bio" class="block text-sm font-medium text-gray-700">Bio</label> <textarea id="bio" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea></div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label for="languages" class="block text-sm font-medium text-gray-700">Languages</label> <div class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm"><div class="flex flex-wrap gap-2"></div> <input type="text" placeholder="Add language" class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></div> <p class="mt-1 text-sm text-gray-500">Enter a comma after every language</p></div> <div><label for="location" class="block text-sm font-medium text-gray-700">Location</label> <select id="location" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></select></div></div> <div class="mt-6 space-y-2"><label for="location" class="block text-sm font-medium text-gray-700">External Links</label> <p class="text-sm text-gray-500">Share external links with viewers. They'll be visible on your profile.</p> <!> <button class="mt-2 flex items-center text-orange-500 hover:underline"><span class="mr-2 text-lg">+</span> Add new link</button></div> <div class="mt-6 flex justify-end space-x-4"><button class="rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-50">Discard Changes</button> <button class="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">Save</button></div>`,1);function Qe(p,d){he(d,!0);const v=(l,s=Pe)=>{var t=Ae(),n=i(t),c=r(n,2);c.__change=[Ce,ie,s];var m=r(c,2);m.__click=[Re,s,a,y,x],o(t),f(()=>{P(n,"for",`upload-${s()??""}`),P(c,"id",`upload-${s()??""}`)}),b(l,t)},w={...d.data.artist,...d.data.user,uploadedDP:le("dp",d.data.user.avatar),uploadedBanner:le("banner",d.data.user.coverImage)};let a=B(q(w)),g=B("");ke(()=>{/,\s$/.test(e(g))&&(u(g,q(e(g).replace(/,\s$/,""))),e(a).languages.push(e(g)),u(g,""))});let x=B(""),y=B("");const ie=(l,s)=>{var c;const t=(c=l.target.files)==null?void 0:c[0];if(!t)return;if(!t.type.startsWith("image/")){s==="dp"?u(y,"Only image files (e.g., jpg, png) are allowed."):u(x,"Only image files (e.g., jpg, png) are allowed.");return}const n=new FileReader;n.onload=()=>{s==="dp"?(e(a).uploadedDP=n.result,u(y,"")):(e(a).uploadedBanner=n.result,u(x,""))},n.readAsDataURL(t)};function F(l,s){if(s<0||s>=e(a).links.length)return;const t=e(a).links[l];e(a).links[l]=e(a).links[s],e(a).links[s]=t}var H=We(),j=r(we(H),2),U=i(j),Y=r(i(U),4);oe(Y,()=>e(y),l=>{var s=Me(),t=i(s,!0);o(s),f(()=>h(t,e(y))),b(l,s)});var G=r(Y,2),ne=r(G,2);v(ne,()=>"dp"),o(U);var I=r(U,2),J=r(i(I),4);oe(J,()=>e(x),l=>{var s=Ne(),t=i(s,!0);o(s),f(()=>h(t,e(x))),b(l,s)});var K=r(J,2),de=r(K,2);v(de,()=>"banner"),o(I),o(j);var C=r(j,2),R=i(C),A=r(i(R),2),ce=i(A);o(A);var Q=r(A,2);D(Q),o(R);var X=r(R,2),Z=r(i(X),4);D(Z),o(X),o(C);var M=r(C,2),$=r(i(M),2);ye($),o(M);var N=r(M,2),S=i(N),ee=r(i(S),2),O=i(ee);z(O,21,()=>e(a).languages,V,(l,s,t)=>{var n=Se();n.__click=()=>e(a).languages.splice(t,1);var c=i(n),m=i(c,!0);o(c),W(2),o(n),f(()=>h(m,e(s))),b(l,n)}),o(O);var ae=r(O,2);D(ae),o(ee),W(2),o(S);var te=r(S,2),E=r(i(te),2);z(E,21,_e,V,(l,s)=>{var t=Oe(),n={},c=i(t,!0);o(t),f(()=>{n!==(n=e(s))&&(t.value=(t.__value=e(s))==null?"":e(s)),h(c,e(s))}),b(l,t)}),o(E),o(te),o(N);var L=r(N,2),re=r(i(L),4);z(re,17,()=>e(a).links,V,(l,s,t)=>{var n=Ee(),c=i(n);c.__click=()=>F(t,t-1),c.disabled=t===0;var m=r(c,2);m.__click=()=>F(t,t+1);var T=r(m,2);D(T);var pe=r(T,2);pe.__click=()=>e(a).links.splice(t,1),o(n),f(()=>m.disabled=t===e(a).links.length-1),k(T,()=>e(a).links[t],ge=>e(a).links[t]=ge),b(l,n)});var ue=r(re,2);ue.__click=[Le,a],o(L);var se=r(L,2),ve=i(se);ve.__click=[Te,a,w],W(2),o(se),f(()=>{P(G,"src",e(a).uploadedDP),P(K,"src",e(a).uploadedBanner),h(ce,`Choose a unique handle - brushhub.com/${e(a).username??""}`)}),k(Q,()=>e(a).username,l=>e(a).username=l),k(Z,()=>e(a).displayName,l=>e(a).displayName=l),k($,()=>e(a).bio,l=>e(a).bio=l),k(ae,()=>e(g),l=>u(g,l)),Be(E,()=>e(a).location,l=>e(a).location=l),b(p,H),De()}xe(["change","click"]);export{Qe as component,Ke as universal};
