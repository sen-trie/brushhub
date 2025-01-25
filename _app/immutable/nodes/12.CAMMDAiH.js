import{d as J,h as L,a as h,t as $,s as w}from"../chunks/disclose-version.bD0kEr0Y.js";import{p as R,a as T,$ as U,c as a,s as t,r as e,t as k,j as V,n as q,g as z}from"../chunks/runtime.NkCrfN_B.js";import{i as E}from"../chunks/if.BQ7NR3mh.js";import{e as F,i as G}from"../chunks/each.CcwbMJOJ.js";import{s as S,g as K}from"../chunks/db.SHkFEn0i.js";import{p as Q}from"../chunks/proxy.B8o5R4Xe.js";import{b as C}from"../chunks/select.DJoPLiCy.js";import{a as W,g as X,e as Z}from"../chunks/util.DdrE0CmF.js";function ee(P,l){console.log(l),window.localStorage.setItem("user_pref",JSON.stringify(l)),window.localStorage.setItem("color-theme",l.darkMode),window.location.reload()}var ae=$('<option class="entry"> </option>'),te=$(`<div class="my-4 border-t border-gray-700"></div> <div><h1 class="mb-2 text-2xl font-bold">Your BrushHub Profile</h1> <p class="text-sm text-gray-400">This is your public presence on BrushHub. You need a profile to upload your own
                services, comment on artwork, or create commissions.</p> <div class="my-4 flex items-center space-x-4"><div class="flex w-auto items-center space-x-4 card-container p-6 py-3"><img class="h-16 w-16 rounded-full border  shadow"> <div><p class="text-lg font-semibold"> </p> <p class="text-sm text-gray-400"> </p></div></div></div> <div class="mt-2 space-x-4 py-4"><a class="large-button">View Profile</a> <a href="/account/edit" class="large-button">Manage Profile</a></div></div>`,1),re=$('<div class="card-island min-h-full"><h1 class="mb-4 sm:mb-2 text-2xl font-bold">BrushHub Settings</h1> <div class="space-y-4 text-lg font-medium"><div class="flex items-center justify-between"><label>Appearance</label> <select class="w-40 rounded-md focus:border-orange-500 focus:ring-orange-500 entry"><option class="entry">Auto Detect</option><option class="entry">Dark</option><option class="entry">Light</option></select></div> <div class="flex items-center justify-between"><label>Preferred Currency</label> <select class="w-40 rounded-md focus:border-orange-500 focus:ring-orange-500 entry"></select></div></div> <div class="mt-4 flex justify-end space-x-4"><button class="large-button">Save Preferences</button></div> <!></div>');function ue(P,l){R(l,!0);let n=Q(W());const i=X();var u=re();L(s=>{U.title="BrushHub - Settings"});var p=t(a(u),2),m=a(p),f=t(a(m),2),_=a(f);_.value=(_.__value="auto")==null?"":"auto";var g=t(_);g.value=(g.__value="dark")==null?"":"dark";var j=t(g);j.value=(j.__value="light")==null?"":"light",e(f),e(m);var B=t(m,2),b=t(a(B),2);F(b,21,()=>Object.entries(Z),G,(s,v)=>{let o=()=>z(v)[0];var r=ae(),c={},d=a(r,!0);e(r),k(()=>{c!==(c=o())&&(r.value=(r.__value=o())==null?"":o()),w(d,o())}),h(s,r)}),e(b),e(B),e(p);var x=t(p,2),A=a(x);A.__click=[ee,n],e(x);var D=t(x,2);E(D,()=>i.displayName,s=>{var v=te(),o=t(V(v),2),r=t(a(o),4),c=a(r),d=a(c);k(()=>S(d,"src",K("dp",i.avatar)));var H=t(d,2),y=a(H),I=a(y,!0);e(y);var M=t(y,2),O=a(M);e(M),e(H),e(c),e(r);var N=t(r,2),Y=a(N);q(2),e(N),e(o),k(()=>{S(d,"alt",`${i.displayName}'s avatar`),w(I,i.displayName),w(O,`@${i.username??""}`),S(Y,"href",`/profile/${i.username??""}`)}),h(s,v)}),e(u),C(f,()=>n.darkMode,s=>n.darkMode=s),C(b,()=>n.preferredCurrency,s=>n.preferredCurrency=s),h(P,u),T()}J(["click"]);export{ue as component};
