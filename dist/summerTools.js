!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.summerTools=o():e.summerTools=o()}(self,(()=>(()=>{var e={59:(e,o,t)=>{"use strict";t.r(o),t.d(o,{isChinaPhone:()=>r,isEmail:()=>n});const r=e=>/^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e),n=e=>/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)},138:(e,o,t)=>{let r={};const n=t(520);n.keys().forEach((e=>{let o=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("."));r[o]=n(e)})),e.exports=r},180:(e,o,t)=>{"use strict";t.r(o),t.d(o,{randomColor:()=>r});const r=()=>"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},847:(e,o,t)=>{"use strict";t.r(o),t.d(o,{randomNum:()=>r});const r=(e,o)=>(e=Math.ceil(e),o=Math.floor(o),Math.floor(Math.random()*(o-e+1))+e)},520:(e,o,t)=>{var r={"./form/form.js":59,"./random/color.js":180,"./random/num.js":847};function n(e){var o=s(e);return t(o)}function s(e){if(!t.o(r,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=520}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}return t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(138)})()));