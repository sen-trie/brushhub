import{v as d,aM as Se,aN as Oe,q as Te,ak as k,aO as Ne}from"./runtime.DMxaCD9P.js";import{g as Pe,i as xe,j as y,d as Fe,k as qe,o as He,p as We}from"./disclose-version.CO6q0Qfh.js";function ss(e){if(d){var s=!1,t=()=>{if(!s){if(s=!0,e.hasAttribute("value")){var i=e.value;_(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var n=e.checked;_(e,"checked",null),e.checked=n}}};e.__on_r=t,Se(t),Pe()}}function ts(e,s){var t=e.__attributes??(e.__attributes={});t.value===(t.value=s)||e.value===s&&(s!==0||e.nodeName!=="PROGRESS")||(e.value=s)}function _(e,s,t,i){var n=e.__attributes??(e.__attributes={});d&&(n[s]=e.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&e.nodeName==="LINK")||n[s]!==(n[s]=t)&&(s==="style"&&"__styles"in e&&(e.__styles={}),s==="loading"&&(e[Oe]=t),t==null?e.removeAttribute(s):typeof t!="string"&&Le(e).includes(s)?e[s]=t:e.setAttribute(s,t))}function rs(e,s,t,i,n=!1,p=!1,Qe=!1){var o=s||{},Ae=e.tagName==="OPTION";for(var m in s)m in t||(t[m]=null);var Be=Le(e),Ie=e.__attributes??(e.__attributes={}),b=[];for(const r in t){let a=t[r];if(Ae&&r==="value"&&a==null){e.value=e.__value="",o[r]=a;continue}var f=o[r];if(a!==f){o[r]=a;var w=r[0]+r[1];if(w!=="$$"){if(w==="on"){const g={},u="$$"+r;let l=r.slice(2);var v=We(l);if(xe(l)&&(l=l.slice(0,-7),g.capture=!0),!v&&f){if(a!=null)continue;e.removeEventListener(l,o[u],g),o[u]=null}if(a!=null)if(v)e[`__${l}`]=a,Fe([l]);else{let h=function(je){o[r].call(this,je)};s?o[u]=y(l,e,h,g):b.push([r,a,()=>o[u]=y(l,e,h,g)])}}else if(r==="style"&&a!=null)e.style.cssText=a+"";else if(r==="autofocus")qe(e,!!a);else if(r==="__value"||r==="value"&&a!=null)e.value=e[r]=e.__value=a;else{var c=r;n||(c=He(c)),a==null&&!p?(Ie[r]=null,e.removeAttribute(r)):Be.includes(c)&&(p||typeof a!="string")?e[c]=a:typeof a!="function"&&(d&&(c==="src"||c==="href"||c==="srcset")||_(e,c,a))}r==="style"&&"__styles"in e&&(e.__styles={})}}}return s||Te(()=>{if(e.isConnected)for(const[r,a,g]of b)o[r]===a&&g()}),o}var R=new Map;function Le(e){var s=R.get(e.nodeName);if(s)return s;R.set(e.nodeName,s=[]);for(var t,i=k(e),n=Element.prototype;n!==i;){t=Ne(i);for(var p in t)t[p].set&&s.push(p);i=k(i)}return s}const U=""+new URL("../assets/0.CWyrftyc.png",import.meta.url).href,L=""+new URL("../assets/1.BOU6xSeu.png",import.meta.url).href,C=""+new URL("../assets/10.Co9WVzGr.png",import.meta.url).href,D=""+new URL("../assets/11.Dydeg_ix.png",import.meta.url).href,A=""+new URL("../assets/12.3xTeHdRq.png",import.meta.url).href,B=""+new URL("../assets/13.CJypDgpD.png",import.meta.url).href,I=""+new URL("../assets/14.IzmPb8LD.png",import.meta.url).href,j=""+new URL("../assets/15.Czw5Gl40.png",import.meta.url).href,S=""+new URL("../assets/16.RqHwb_2Y.png",import.meta.url).href,O=""+new URL("../assets/17.D28YHi3f.png",import.meta.url).href,T=""+new URL("../assets/18.CWRWI3gk.png",import.meta.url).href,N=""+new URL("../assets/19.BDmKP1PB.png",import.meta.url).href,P=""+new URL("../assets/2.B-1JQVr3.png",import.meta.url).href,x=""+new URL("../assets/20.BLObN0d_.png",import.meta.url).href,F=""+new URL("../assets/21.Dwq2OpOD.png",import.meta.url).href,q=""+new URL("../assets/22.KVqNK7iO.png",import.meta.url).href,H=""+new URL("../assets/23.BHuNqbxY.png",import.meta.url).href,W=""+new URL("../assets/24.DDSHE4ji.png",import.meta.url).href,E=""+new URL("../assets/25.DwEyy83z.png",import.meta.url).href,M=""+new URL("../assets/26.CKCq9wqK.png",import.meta.url).href,Z=""+new URL("../assets/27.DZg52BR1.png",import.meta.url).href,G=""+new URL("../assets/28.CsofBfOG.png",import.meta.url).href,K=""+new URL("../assets/29.D7ZNc8e4.png",import.meta.url).href,V=""+new URL("../assets/3.C5k3D2vx.png",import.meta.url).href,z=""+new URL("../assets/30.DSIJSGhZ.png",import.meta.url).href,$=""+new URL("../assets/31.DNz0P3qd.png",import.meta.url).href,J=""+new URL("../assets/32.BpwfBr7k.png",import.meta.url).href,Y=""+new URL("../assets/33.F58zEMlC.png",import.meta.url).href,Q=""+new URL("../assets/34.CCncHVla.png",import.meta.url).href,X=""+new URL("../assets/35.CAi-yH2d.png",import.meta.url).href,ee=""+new URL("../assets/36.DcM--F2S.png",import.meta.url).href,se=""+new URL("../assets/37.D9RYswOq.png",import.meta.url).href,te=""+new URL("../assets/38.eCv-eAS-.png",import.meta.url).href,re=""+new URL("../assets/39.BTvPWfA-.png",import.meta.url).href,ae=""+new URL("../assets/4.BCOr1dqW.png",import.meta.url).href,ie=""+new URL("../assets/5.Bl_KTvPh.png",import.meta.url).href,ne=""+new URL("../assets/6.Bfy2e_95.png",import.meta.url).href,oe=""+new URL("../assets/7.Ci8e5HF5.png",import.meta.url).href,le=""+new URL("../assets/8.B4rlFLeM.png",import.meta.url).href,ce=""+new URL("../assets/9.DKLcidNn.png",import.meta.url).href,pe=""+new URL("../assets/default.lEK-KCSq.png",import.meta.url).href,ge=""+new URL("../assets/test.DgaNxIsS.jpeg",import.meta.url).href,ue=""+new URL("../assets/1.Bwuc2tDD.jpeg",import.meta.url).href,_e=""+new URL("../assets/default.BMTBI8Vc.png",import.meta.url).href,de=""+new URL("../assets/1.CVD17ylK.jpeg",import.meta.url).href,me=""+new URL("../assets/2.BVmRDBBn.png",import.meta.url).href,be=""+new URL("../assets/3.Ct9CzOE4.png",import.meta.url).href,fe=""+new URL("../assets/4.IGUnj_TV.png",import.meta.url).href,we=""+new URL("../assets/5.Zxufam4M.png",import.meta.url).href,ve=""+new URL("../assets/6.CSwZmPBj.png",import.meta.url).href,he=""+new URL("../assets/default.CXQ6DtH1.png",import.meta.url).href,ke=""+new URL("../assets/1.CJtHz6GF.jpeg",import.meta.url).href,ye=""+new URL("../assets/2.c9-6r62y.jpeg",import.meta.url).href,Re=""+new URL("../assets/default.mg6mRyj-.png",import.meta.url).href,Ee=[{id:1,artist:1,imgSrc:"test.jpg",tags:["anime","illustration"],datePosted:"2024-01-01T10:00:00Z",title:"Anime Character Illustration",description:"A vibrant anime-style character illustration showcasing detailed shading and dynamic poses."},{id:2,artist:1,imgSrc:"0.png",tags:["3d","character"],datePosted:"2024-01-02T14:30:00Z",title:"3D Character Model",description:"A fully rendered 3D character model with realistic textures and intricate details."},{id:3,artist:2,imgSrc:"1.png",tags:["anime"],datePosted:"2024-01-03T08:45:00Z",title:"Anime Artwork",description:"A captivating anime artwork with expressive emotions and vibrant colours."},{id:4,artist:2,imgSrc:"2.png",tags:["illustration","concept art"],datePosted:"2024-01-04T12:15:00Z",title:"Concept Art Illustration",description:"Concept art focusing on a futuristic cityscape with stunning lighting and atmosphere."},{id:5,artist:5,imgSrc:"3.png",tags:["anime","3d","fantasy"],datePosted:"2024-01-05T16:00:00Z",title:"Fantasy World Design",description:"A breathtaking fantasy world design blending anime aesthetics with 3D elements."}],Me=[{artistId:1,lastUpdated:"2023-11-15T12:00:00Z",categories:[{title:"Prohibited Works",details:["Explicit Content / Adult Content","Violent (incl. Blood / Gore)","Fetish Content","Political / Religious Imagery"]},{title:"References",details:["Provide at least 2 reference images per major element (e.g., character, background, item).","Include as many visual materials as possible."]},{title:"Commission Briefs",details:["Describe your vision clearly. For example, provide details on facial expressions, poses, or environment.","If you have a specific pose or composition in mind, provide examples."]}]},{artistId:2,lastUpdated:"2023-10-10T08:30:00Z",categories:[{title:"Prohibited Works",details:["Explicit Content","Hate Speech","Fetish Content","Illegal Activities"]},{title:"Payment",details:["50% upfront payment is required.","The remaining 50% is due upon approval of the final draft."]},{title:"Edits and Revisions",details:["Up to 3 revisions are allowed for free.","Additional revisions may incur extra fees."]}]}],Ze=[{id:1,artistId:1,state:"published",isOpen:!0,title:"High-quality Illustration",description:"This service provides you with fully rendered artwork, including a free simple background.",thumbnail:"1.jpg",samples:["1.png","2.png"],tags:["illustration","character","fantasy"],types:[{name:"Headshot",price:300,description:"A detailed headshot illustration."},{name:"Half-body",price:400,description:"An illustration covering half of the body."},{name:"Full-body",price:500,description:"A fully rendered full-body illustration."}],extras:[{name:"Character",type:"percentage",price:70,description:"Additional character in the illustration."},{name:"Detailed Background",type:"currency",price:50,description:"A detailed background for the illustration."}],fastDelivery:{enabled:!0,price:50,type:"percentage",duration:3,unit:"days"},commercialUse:{enabled:!0,price:100,type:"percentage"},downpayment:{payment:{value:20,enabled:!0}},milestones:[{name:"Sketch",duration:{value:3,unit:"days",enabled:!0},payment:{value:30,enabled:!1}},{name:"Base Color",duration:{value:7,unit:"days",enabled:!1},payment:{value:50,enabled:!0}}],termsOfService:{"Prohibited Works":!0,References:!0,"Commission Briefs":!0},uniqueTos:[{title:"Prohibited Content",details:"I do not draw explicit content, hate speech, or offensive material."}]},{id:2,artistId:1,state:"published",isOpen:!0,title:"High-quality Illustration",description:"This service provides you with fully rendered artwork, including a free simple background.",thumbnail:"1.jpg",samples:["1.png","2.png"],tags:["illustration","character","fantasy"],types:[{name:"Headshot",price:300,description:"A detailed headshot illustration."},{name:"Half-body",price:400,description:"An illustration covering half of the body."},{name:"Full-body",price:500,description:"A fully rendered full-body illustration."}],extras:[{name:"Character",type:"percentage",price:70,description:"Additional character in the illustration."},{name:"Detailed Background",type:"currency",price:50,description:"A detailed background for the illustration."}],fastDelivery:{enabled:!0,duration:3,unit:"days",type:"percentage",price:50},commercialUse:{enabled:!0,price:100,type:"percentage"},downpayment:{payment:{value:20,enabled:!0}},milestones:[{name:"Sketch",duration:{value:3,unit:"days",enabled:!0},payment:{value:30,enabled:!1}},{name:"Base Color",duration:{value:7,unit:"days",enabled:!1},payment:{value:50,enabled:!0}}],termsOfService:{"Prohibited Works":!0,References:!0,"Commission Briefs":!0},uniqueTos:[{title:"Prohibited Content",details:"I do not draw explicit content, hate speech, or offensive material."}]},{id:3,artistId:1,state:"archived",isOpen:!1,title:"Manga",description:"Black and white manga-style illustration.",thumbnail:"2.jpg",samples:["3.png","4.png"],tags:["anime","manga","illustration"],types:[{name:"Panel",price:200,description:"A single manga panel illustration."},{name:"Page",price:500,description:"A full manga page illustration."}],extras:[{name:"Background Details",type:"percentage",price:20,description:"Detailed background for the illustration."}],fastDelivery:{enabled:!1,duration:3,unit:"days",type:"percentage",price:50},commercialUse:{enabled:!0,price:150,type:"percentage"},downpayment:{payment:{value:30,enabled:!0}},milestones:[{name:"Line Art",duration:{value:5,unit:"days",enabled:!0},payment:{value:30,enabled:!1}},{name:"Shading",duration:{value:3,unit:"days",enabled:!1},payment:{value:50,enabled:!0}}],termsOfService:{"Prohibited Works":!0,Payment:!1,"Edits and Revisions":!0},uniqueTos:[{title:"Prohibited Content",details:"I do not draw explicit content, hate speech, or offensive material."}]}],Ge=[{id:1,bio:"I'm Anne, a digital artist who loves playing games on Steam. Feed me so I can buy more games. Follow for new updates and buy me some snacks!",location:"Singapore",languages:["English","Malay"],artFollowers:100,openCommission:!0,links:["youtube.com/@hungryanne","x.com/hungry_anne"],joined:"2024-01-15T00:00:00Z",satisfaction:4.8,responseTime:"02:00:00",completionRate:95,total:120,tags:["anime","concept art","illustration"],featured:[1,2]},{id:2,bio:"Sample bio for Artist Name 2.",location:"USA",languages:["English"],artFollowers:150,openCommission:!1,links:["youtube.com/@artistname2","x.com/artist_name2"],joined:"2023-07-01T00:00:00Z",satisfaction:4.5,responseTime:"02:30:00",completionRate:85,total:45,tags:["anime","landscape","realism"],featured:[3,4]}],Ke=[{id:1,name:"anime",count:322},{id:2,name:"3d",count:100},{id:3,name:"illustration",count:200},{id:4,name:"character",count:300},{id:5,name:"concept art",count:50},{id:6,name:"fantasy",count:130},{id:7,name:"landscape",count:40},{id:8,name:"sci-fi",count:50},{id:9,name:"realism",count:60},{id:10,name:"portrait",count:90}],Ve=[{id:1,username:"hungry_anne",displayName:"Anne the Hungry",followers:[2,3,4],following:[5,6],avatar:"1.jpg",coverImage:"1.jpg"},{id:2,username:"art_lover",displayName:"Art Lover",followers:[1],following:[1,3,4],avatar:"2.png",coverImage:"1.jpg"},{id:3,username:"digital_creator",displayName:"Digital Creator",followers:[1,2],following:[],avatar:"3.png",coverImage:"1.jpg"},{id:4,username:"fantasy_fan",displayName:"Fantasy Fan",followers:[1,2],following:[1],avatar:"4.png",coverImage:"1.jpg"},{id:5,username:"manga_master",displayName:"Manga Master",followers:[3],following:[1],avatar:"5.png",coverImage:"1.png"},{id:6,username:"commission_guru",displayName:"Commission Guru",followers:[],following:[1],avatar:"6.png",coverImage:"1.jpg"}],ze=[{id:1,artistId:2,customerId:1,serviceId:1,state:{value:"pending",progress:[{name:"Sketch",date:null,feedback:"",approval:null,sample:[]},{name:"Base Colour",date:null,feedback:"",approval:null,sample:[]}]},brief:"I WANT A DRAWING OF A CAT",deadline:"2021-12-31",references:[1,2],type:"Full-body",extras:["Character"],fastDelivery:!0,commercialUse:!0,price:650},{id:2,artistId:2,customerId:1,serviceId:1,state:{value:"active",progress:[{name:"Sketch",date:"2021-12-21",feedback:"",approval:!0,sample:[]},{name:"Base Colour",date:null,feedback:"",approval:null,sample:[]}]},brief:"I WANT A DRAWING OF A CAT",deadline:"2021-12-30",references:[1,2],type:"Full-body",extras:["Character"],fastDelivery:!0,commercialUse:!0,price:650}],$e=[{id:1,service:1,commissioner:5,artist:1,rating:5,comment:"Artist was pleasant and helpful, making my comm exactly how I wanted!"},{id:2,service:2,commissioner:4,artist:1,rating:4,comment:"Great work, just needed a few revisions."},{id:3,service:3,commissioner:5,artist:1,rating:5,comment:"Received my order very fast!!"},{id:4,service:1,commissioner:4,artist:1,rating:5,comment:"Very happy with the product."}],Je={user:Ve,tags:Ke,artist:Ge,artwork:Ee,tos:Me,services:Ze,request:ze,review:$e};function Ue(e,s){let t=!0;for(const i in s){const n=s[i];if(typeof n=="function"){if(!n(e))return!1}else if(e[i]!==n)return!1}return t}function Ye(e,s,t){let i=e;return Object.keys(s).length!==0&&(i=i.filter(n=>Ue(n,s))),Object.keys(t).length!==0?i.find(p=>Ue(p,t))??null:i}function as(e,s={},t={}){return Ye(Je[e],s,t)}const Ce=(e="artwork")=>{switch(e){case"artwork":return Object.assign({"/src/lib/assets/artwork/0.png":U,"/src/lib/assets/artwork/1.png":L,"/src/lib/assets/artwork/10.png":C,"/src/lib/assets/artwork/11.png":D,"/src/lib/assets/artwork/12.png":A,"/src/lib/assets/artwork/13.png":B,"/src/lib/assets/artwork/14.png":I,"/src/lib/assets/artwork/15.png":j,"/src/lib/assets/artwork/16.png":S,"/src/lib/assets/artwork/17.png":O,"/src/lib/assets/artwork/18.png":T,"/src/lib/assets/artwork/19.png":N,"/src/lib/assets/artwork/2.png":P,"/src/lib/assets/artwork/20.png":x,"/src/lib/assets/artwork/21.png":F,"/src/lib/assets/artwork/22.png":q,"/src/lib/assets/artwork/23.png":H,"/src/lib/assets/artwork/24.png":W,"/src/lib/assets/artwork/25.png":E,"/src/lib/assets/artwork/26.png":M,"/src/lib/assets/artwork/27.png":Z,"/src/lib/assets/artwork/28.png":G,"/src/lib/assets/artwork/29.png":K,"/src/lib/assets/artwork/3.png":V,"/src/lib/assets/artwork/30.png":z,"/src/lib/assets/artwork/31.png":$,"/src/lib/assets/artwork/32.png":J,"/src/lib/assets/artwork/33.png":Y,"/src/lib/assets/artwork/34.png":Q,"/src/lib/assets/artwork/35.png":X,"/src/lib/assets/artwork/36.png":ee,"/src/lib/assets/artwork/37.png":se,"/src/lib/assets/artwork/38.png":te,"/src/lib/assets/artwork/39.png":re,"/src/lib/assets/artwork/4.png":ae,"/src/lib/assets/artwork/5.png":ie,"/src/lib/assets/artwork/6.png":ne,"/src/lib/assets/artwork/7.png":oe,"/src/lib/assets/artwork/8.png":le,"/src/lib/assets/artwork/9.png":ce,"/src/lib/assets/artwork/default.png":pe,"/src/lib/assets/artwork/test.jpg":ge});case"banner":return Object.assign({"/src/lib/assets/banner/1.jpg":ue,"/src/lib/assets/banner/default.png":_e});case"dp":return Object.assign({"/src/lib/assets/dp/1.jpg":de,"/src/lib/assets/dp/2.png":me,"/src/lib/assets/dp/3.png":be,"/src/lib/assets/dp/4.png":fe,"/src/lib/assets/dp/5.png":we,"/src/lib/assets/dp/6.png":ve,"/src/lib/assets/dp/default.png":he});case"thumbnail":return Object.assign({"/src/lib/assets/thumbnail/1.jpg":ke,"/src/lib/assets/thumbnail/2.jpg":ye,"/src/lib/assets/thumbnail/default.png":Re});default:return Object.assign({"/src/lib/assets/artwork/0.png":U,"/src/lib/assets/artwork/1.png":L,"/src/lib/assets/artwork/10.png":C,"/src/lib/assets/artwork/11.png":D,"/src/lib/assets/artwork/12.png":A,"/src/lib/assets/artwork/13.png":B,"/src/lib/assets/artwork/14.png":I,"/src/lib/assets/artwork/15.png":j,"/src/lib/assets/artwork/16.png":S,"/src/lib/assets/artwork/17.png":O,"/src/lib/assets/artwork/18.png":T,"/src/lib/assets/artwork/19.png":N,"/src/lib/assets/artwork/2.png":P,"/src/lib/assets/artwork/20.png":x,"/src/lib/assets/artwork/21.png":F,"/src/lib/assets/artwork/22.png":q,"/src/lib/assets/artwork/23.png":H,"/src/lib/assets/artwork/24.png":W,"/src/lib/assets/artwork/25.png":E,"/src/lib/assets/artwork/26.png":M,"/src/lib/assets/artwork/27.png":Z,"/src/lib/assets/artwork/28.png":G,"/src/lib/assets/artwork/29.png":K,"/src/lib/assets/artwork/3.png":V,"/src/lib/assets/artwork/30.png":z,"/src/lib/assets/artwork/31.png":$,"/src/lib/assets/artwork/32.png":J,"/src/lib/assets/artwork/33.png":Y,"/src/lib/assets/artwork/34.png":Q,"/src/lib/assets/artwork/35.png":X,"/src/lib/assets/artwork/36.png":ee,"/src/lib/assets/artwork/37.png":se,"/src/lib/assets/artwork/38.png":te,"/src/lib/assets/artwork/39.png":re,"/src/lib/assets/artwork/4.png":ae,"/src/lib/assets/artwork/5.png":ie,"/src/lib/assets/artwork/6.png":ne,"/src/lib/assets/artwork/7.png":oe,"/src/lib/assets/artwork/8.png":le,"/src/lib/assets/artwork/9.png":ce,"/src/lib/assets/artwork/default.png":pe,"/src/lib/assets/artwork/test.jpg":ge,"/src/lib/assets/banner/1.jpg":ue,"/src/lib/assets/banner/default.png":_e,"/src/lib/assets/dp/1.jpg":de,"/src/lib/assets/dp/2.png":me,"/src/lib/assets/dp/3.png":be,"/src/lib/assets/dp/4.png":fe,"/src/lib/assets/dp/5.png":we,"/src/lib/assets/dp/6.png":ve,"/src/lib/assets/dp/default.png":he,"/src/lib/assets/thumbnail/1.jpg":ke,"/src/lib/assets/thumbnail/2.jpg":ye,"/src/lib/assets/thumbnail/default.png":Re})}},De=(e,s,t)=>t[`/src/lib/assets/${e}/${s}`],is=(e,s="")=>s.startsWith("data:image")?s:De(e,s,Ce(e)),ns=(e,s)=>s||De(e,"default.png",Ce(e));export{rs as a,De as b,ts as c,is as g,Ce as i,as as p,ss as r,_ as s,ns as w};
