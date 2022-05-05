!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.summerTools=t():e.summerTools=t()}(self,(()=>(()=>{var e={152:(e,t,o)=>{"use strict";o.r(t),o.d(t,{checkValidValue:()=>r});const r=e=>![null,"null",void 0,"undefined",""," ",NaN,"NaN"].includes(e)},50:(e,t,o)=>{"use strict";o.r(t),o.d(t,{getCookie:()=>r});const r=e=>{const t=document.cookie.replace(/\s/g,"").split(";");for(let o=0;o<t.length;o++){let r=t[o].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""}},544:(e,t,o)=>{"use strict";o.r(t),o.d(t,{removeCookie:()=>n});let r=o(575);const n=e=>{r(e,"1",-1)}},575:(e,t,o)=>{"use strict";o.r(t),o.d(t,{setCookie:()=>r});const r=(e,t,o)=>{let r=new Date;r.setDate(r.getDate()+o),document.cookie=e+"="+t+";expires="+r}},314:(e,t,o)=>{"use strict";o.r(t),o.d(t,{getOS:()=>r});const r=()=>{let e="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",t=("navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase(),"navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"");return/iphone/i.test(e)||/ipad/i.test(e)||/ipod/i.test(e)?"ios":/android/i.test(e)?"android":/win/i.test(t)&&/phone/i.test(e)?"windowsPhone":/mac/i.test(t)?"MacOSX":/win/i.test(t)?"windows":/linux/i.test(t)?"linux":void 0}},412:(e,t,o)=>{"use strict";o.r(t),o.d(t,{isChinaPhone:()=>r,isEmail:()=>n,isIdCard:()=>i,isUrl:()=>s,verifyNumberInput:()=>a});const r=e=>/^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e),n=e=>/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e),i=e=>/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e),s=e=>/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(e),a=(e,t=2)=>{e=(e=(e=(e=(e=e.replace(/[^\d.]/g,"")).replace(/^\./g,"")).replace(/^0+$/g,"0")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".");let o=new RegExp("^(\\-)*(\\d+)\\.(\\d{"+t+"}).*$");return e.replace(o,"$1$2.$3")}},138:(e,t,o)=>{let r={};const n=o(520);n.keys().forEach((e=>{let t=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("."));r[t]=n(e)})),e.exports=r},182:(e,t,o)=>{"use strict";o.r(t),o.d(t,{queryUrlArgs:()=>n,queryUrlStr:()=>r,splitPrice:()=>i});const r=(e,t)=>{if(!e||!t)return null;t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");let o=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==o?null:o[1]},n=e=>{if(!e)return{};const t=e.indexOf("?"),o={},r=e.slice(t+1).split("&");for(let e=0;e<r.length;e++){let t=r[e].indexOf("=");if(-1===t)continue;let n=r[e].substring(0,t),i=r[e].substring(t+1);i=decodeURIComponent(i),o[n]=i}return o},i=(e=0,t=2)=>{const o=Number(e).toFixed(t).split(".");return{int:o[0],dec:"."+o[1]}}},167:(e,t,o)=>{"use strict";o.r(t),o.d(t,{randomColor:()=>r});const r=()=>"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},39:(e,t,o)=>{"use strict";o.r(t),o.d(t,{randomNum:()=>r});const r=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e)},520:(e,t,o)=>{var r={"./check/sumCheck.js":152,"./cookie/getCookie.js":50,"./cookie/removeCookie.js":544,"./cookie/setCookie.js":575,"./device/sumDevice.js":314,"./form/sumForm.js":412,"./query/sumQuery.js":182,"./random/sumColor.js":167,"./random/sumNum.js":39};function n(e){var t=i(e);return o(t)}function i(e){if(!o.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=520}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(138)})()));