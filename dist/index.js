!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.shed=t(require("react")):e.shed=t(e.react)}(self,(e=>(()=>{"use strict";var t={155:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{createShed:()=>c,getShed:()=>a,useShed:()=>f});const s=new Map;function c(e,t){if(s.has(e))throw new Error("현재 상태에 맞는 키가 이미 있습니다.");let r=t;const o=new Set,n={getState:()=>r,setState:e=>{const t="function"==typeof e?e(r):e;r=Object.assign(Object.assign({},r),t),o.forEach((e=>e(r)))},subscribe:e=>(o.add(e),()=>o.delete(e))};return s.set(e,n),n}function a(e){const t=s.get(e);if(!t)throw new Error(`맞는 키가 없습니다. Key: "${e}"`);return t}var u=o(155);function f(e,t){const r=a(e),[o,n]=(0,u.useState)((()=>t(r.getState())));return(0,u.useEffect)((()=>r.subscribe((e=>{const r=t(e);n(r)}))),[r,t]),o}return n})()));
//# sourceMappingURL=index.js.map