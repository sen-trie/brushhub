import{l as c,i as f,m as d}from"./runtime.CHrGdgHD.js";import{l as o}from"./disclose-version.TbKqxNJi.js";function i(e,a,l=a){var v=c();o(e,"input",()=>{var r=n(e)?u(e.value):e.value;l(r),v&&r!==(r=a())&&(e.value=r??"")}),f(()=>{var r=a();if(d&&e.defaultValue!==e.value){l(e.value);return}n(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function m(e,a,l=a){o(e,"change",()=>{var v=e.checked;l(v)}),a()==null&&l(!1),f(()=>{var v=a();e.checked=!!v})}function n(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{i as a,m as b};
