module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(e){}return n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus(),c};e.exports=r,e.exports.default=r},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),c=n(2),u=n.n(c),i=n(3),l=n.n(i);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}o.a.initializers.add("nearata/flarum-ext-copy-code-to-clipboard",(function(){Object(a.extend)(u.a.prototype,"config",(function(e,t){if(!t){for(var n,r=d(this.element.getElementsByTagName("pre"));!(n=r()).done;){var a=n.value,c=document.createElement("div");c.textContent=o.a.translator.trans("nearata-copy-code-to-clipboard.forum.copy"),c.classList.add("copy-code"),a.appendChild(c)}for(var u,i=function(){var e=u.value;e.addEventListener("click",(function(){for(var t,n=d(e.parentElement.childNodes);!(t=n()).done;){var r=t.value;"code"===r.nodeName.toLowerCase()&&l()(r.textContent)}e.textContent=o.a.translator.trans("nearata-copy-code-to-clipboard.forum.copied"),setTimeout((function(){return e.textContent=o.a.translator.trans("nearata-copy-code-to-clipboard.forum.copy")}),2e3)}),!1)},s=d(this.element.getElementsByClassName("copy-code"));!(u=s()).done;)i()}}))}))}]);
//# sourceMappingURL=forum.js.map