import{a as s,t as d,c as K,s as T}from"./disclose-version.CSxEiuyN.js";import{p as V,a as W,c as n,f as M,g as e,r as l,t as g,s as m,k as P,l as k,e as B}from"./runtime.yDkJktn_.js";import{i as u}from"./if.B3MD_1yl.js";import{e as X,i as Y}from"./each.CJeE_QmZ.js";import{s as D}from"./class.BR4QoFxp.js";import{p as Z}from"./props.zMKOg1SH.js";var C=d('<div class="h-3 w-3 rounded-full !bg-white"></div>'),$=d("<div></div>"),ee=d('<div class="h-3 w-3 rounded-full !bg-white"></div>'),te=d("<div><!></div>"),ae=d("<p> </p>"),re=d('<p class="mt-2 text-sm font-medium text-orange-500"> </p>'),ve=d('<p class="text-xs"> </p>'),se=d('<span class="invisible">-</span>'),oe=d('<p class="text-xs font-bold text-green-600"> </p>'),de=d('<span class="invisible">-</span>'),ie=d("<!> <!> <!>",1),ne=d('<div class="flex flex-col items-center"><!> <!></div> <div></div>',1),le=d('<div class="flex w-full items-center"><div class="relative flex w-full items-center"><div class="flex flex-col items-center"><!> <!></div> <div class="mx-2 h-1 flex-1 !bg-orange-500"></div> <!> <div class="flex flex-col items-center"><!> <!></div></div></div>');function xe(L,b){V(b,!0);const N=(a,r)=>{let v=P(()=>k(r==null?void 0:r(),()=>-2,!0));var i=te();const c=B(()=>`flex h-6 w-6 items-center justify-center rounded-full ${O("!bg-orange-500","!bg-gray-500",e(v))??""}`);var p=n(i);u(p,()=>Object.keys(h()).length===0,f=>{var _=C();s(f,_)},f=>{var _=K(),S=M(_);u(S,()=>h().value==="finished",w=>{var x=$();s(w,x)},w=>{var x=K(),E=M(x);u(E,()=>e(v)===-1||e(v)>=0&&h().progress[e(v)].date===null,A=>{var o=ee();s(A,o)},null,!0),s(w,x)},!0),s(f,_)}),l(i),g(()=>D(i,e(c))),s(a,i)},j=(a,r,v,i,c)=>{let p=P(()=>k(r==null?void 0:r(),()=>-1,!0)),f=P(()=>k(v==null?void 0:v(),"")),_=P(()=>k(i==null?void 0:i(),"")),S=P(()=>k(c==null?void 0:c(),""));var w=ie(),x=M(w);u(x,()=>e(p)!==-2,o=>{var t=ae();const y=B(()=>`mt-2 text-sm font-medium ${O("text-orange-500","",e(p))??""}`);var U=n(t,!0);l(t),g(()=>{D(t,e(y)),T(U,e(f))}),s(o,t)},o=>{var t=re(),y=n(t,!0);l(t),g(()=>T(y,e(f))),s(o,t)});var E=m(x,2);u(E,()=>e(_),o=>{var t=ve(),y=n(t,!0);l(t),g(()=>T(y,e(_))),s(o,t)},o=>{var t=se();s(o,t)});var A=m(E,2);u(A,()=>e(S),o=>{var t=oe(),y=n(t,!0);l(t),g(()=>T(y,e(S))),s(o,t)},o=>{var t=de();s(o,t)}),s(a,w)};let h=Z(b,"currentService",19,()=>({}));const O=(a,r,v=-1)=>Object.keys(h()).length===0||h().value==="finished"||v!==-1&&(v===-2||h().progress[v].date!==null)?a:r;var q=le(),F=n(q),z=n(F),G=n(z);N(G);var Q=m(G,2);u(Q,()=>b.selectedService.downpayment.payment.enabled===!1,a=>{j(a,()=>-2,()=>"Start",()=>"Start of Project",()=>"")},a=>{j(a,()=>-2,()=>"Start",()=>"Start of Project",()=>`Pay ${b.selectedService.downpayment.payment.value}%`)}),l(z);var H=m(z,4);X(H,17,()=>b.selectedService.milestones,Y,(a,r,v)=>{var i=ne(),c=M(i),p=n(c);N(p,()=>v);var f=m(p,2);j(f,()=>v,()=>e(r).name,()=>e(r).duration?`${e(r).duration.value} ${e(r).duration.unit}`:"",()=>e(r).payment?`Pay ${e(r).payment.value}%`:""),l(c);var _=m(c,2);const S=B(()=>`mx-2 h-1 flex-1 ${O("!bg-orange-500","!bg-gray-500",v)??""}`);g(()=>D(_,e(S))),s(a,i)});var I=m(H,2),J=n(I);N(J,()=>-1);var R=m(J,2);u(R,()=>b.selectedService.milestones.filter(a=>a.payment.value>=100).length>0,a=>{j(a,()=>-1,()=>"End",()=>"End of Project",()=>"")},a=>{j(a,()=>-1,()=>"End",()=>"End of Project",()=>"Pay 100%")}),l(I),l(F),l(q),s(L,q),W()}export{xe as M};
