import{e as s}from"../chunks/Tabs.svelte_svelte_type_style_lang.DCaMCd2T.js";import{b as i,B as m}from"../chunks/Browse.CV0mUPTq.js";import{t as p}from"../chunks/tags.BoVYDFb2.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as u,o as c,a as f,l,g,q as d,m as h,n as w}from"../chunks/runtime.CTyMkRS6.js";import{a as v,t as _}from"../chunks/template.DRBod4Mf.js";import{p as n}from"../chunks/if.BpS_0VHs.js";import"../chunks/legacy.CtaTdtmd.js";import"../chunks/entry.DNiFUYZz.js";const y=async()=>[{slug:"anime"},{slug:"3d"}],B=({params:e})=>{const r=e.slug.toLowerCase(),a=p.find(o=>o.name.toLowerCase()===r);if(!a)throw s(404,"No matching tag found for your search");const t=i.filter(o=>o.tags.includes(a.name));if(t.length===0)throw s(404,"No artworks found for the matching tag");return{artwork:t}},T=Object.freeze(Object.defineProperty({__proto__:null,entries:y,load:B},Symbol.toStringTag,{value:"Module"}));var k=_('<div class="mx-auto w-full p-4"><!></div>');function q(e,r){u(r,!0);let a=c(n(r.data.artwork));f(()=>{d(a,n(r.data.artwork))});var t=k(),o=h(t);m(o,{get artDB(){return g(a)}}),w(t),v(e,t),l()}export{q as component,T as universal};