import{Y as j,w as ee,Z as $,o as C,W as M,v as ae,_ as re,$ as F,U as ne,V as z,X as k,y as H,a0 as S,T as G,x as J,z as fe,q as ie,N as B,a1 as y,a2 as Q,a3 as L,a4 as le,a5 as se,a6 as ue,a7 as te,a8 as ve,a9 as de,aa as _e,ab as oe,Q as ce,A as W,ac as he,ad as Ee}from"./runtime.yDkJktn_.js";function Ie(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)le(e[u].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;se(A),A.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!o)}})}function me(l,e,a,t,v,_=null){var u=l,o={flags:e,items:new Map,first:null},A=(e&$)!==0;if(A){var h=l;u=C?M(ve(h)):h.appendChild(j())}C&&ae();var d=null,w=!1;ee(()=>{var r=a(),s=re(r)?r:r==null?[]:F(r),i=s.length;if(w&&i===0)return;w=i===0;let x=!1;if(C){var E=u.data===ne;E!==(i===0)&&(u=z(),M(u),k(!1),x=!0)}if(C){for(var p=null,T,c=0;c<i;c++){if(H.nodeType===8&&H.data===de){u=H,x=!0,k(!1);break}var n=s[c],f=t(n,c);T=K(H,o,p,null,n,f,c,v,e),o.items.set(f,T),p=T}i>0&&M(z())}if(!C){var b=_e;Ae(s,o,u,v,e,(b.f&S)!==0,t)}_!==null&&(i===0?d?G(d):d=J(()=>_(u)):d!==null&&fe(d,()=>{d=null})),x&&k(!0),a()}),C&&(u=H)}function Ae(l,e,a,t,v,_,u){var V,Y,q,U;var o=(v&oe)!==0,A=(v&(y|L))!==0,h=l.length,d=e.items,w=e.first,r=w,s,i=null,x,E=[],p=[],T,c,n,f;if(o)for(f=0;f<h;f+=1)T=l[f],c=u(T,f),n=d.get(c),n!==void 0&&((V=n.a)==null||V.measure(),(x??(x=new Set)).add(n));for(f=0;f<h;f+=1){if(T=l[f],c=u(T,f),n=d.get(c),n===void 0){var b=r?r.e.nodes_start:a;i=K(b,e,i,i===null?e.first:i.next,T,c,f,t,v),d.set(c,i),E=[],p=[],r=i.next;continue}if(A&&Te(n,T,f,v),n.e.f&S&&(G(n.e),o&&((Y=n.a)==null||Y.unfix(),(x??(x=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var R=p[0],I;i=R.prev;var O=E[0],g=E[E.length-1];for(I=0;I<E.length;I+=1)Z(E[I],R,a);for(I=0;I<p.length;I+=1)s.delete(p[I]);m(e,O.prev,g.next),m(e,i,O),m(e,g,R),r=R,i=g,f-=1,E=[],p=[]}else s.delete(n),Z(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&S))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var N=s===void 0?[]:F(s);r!==null;)(_||!(r.e.f&S))&&N.push(r),r=r.next;var D=N.length;if(D>0){var P=v&$&&h===0?a:null;if(o){for(f=0;f<D;f+=1)(q=N[f].a)==null||q.measure();for(f=0;f<D;f+=1)(U=N[f].a)==null||U.fix()}pe(e,N,P,d)}}o&&ie(()=>{var X;if(x!==void 0)for(n of x)(X=n.a)==null||X.apply()}),B.first=e.first&&e.first.e,B.last=i&&i.e}function Te(l,e,a,t){t&y&&Q(l.v,e),t&L?Q(l.i,a):l.i=a}function K(l,e,a,t,v,_,u,o,A){var h=(A&y)!==0,d=(A&he)===0,w=h?d?ce(v):W(v):v,r=A&L?W(u):u,s={i:r,v:w,k:_,a:null,e:null,prev:a,next:t};try{return s.e=J(()=>o(l,w,r),C),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function Z(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,Ie as i};
