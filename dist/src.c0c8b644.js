parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aTtJ":[function(require,module,exports) {
module.exports="/book-icon.ce84a31c.svg";
},{}],"HQAh":[function(require,module,exports) {
module.exports="/eye-icon.00eaa2e8.svg";
},{}],"Focm":[function(require,module,exports) {
function e(e){for(var t,s,n=function(e){return 180*e/Math.PI},a={x:e.clientX,y:e.clientY},c=document.getElementsByClassName("cat__eye"),i=0;i<c.length;i++){var o=c[i].getBoundingClientRect(),r=(t=a,s=o,n(Math.atan((t.y-s.y)/(t.x-s.x))));a.x<o.x&&(r+=180),c[i].style.transform="rotate(".concat(r,"deg)")}}function t(e){var t=require("./img/book-icon.svg"),s=require("./img/eye-icon.svg"),n=document.getElementsByClassName("readMode")[0],a=document.getElementById("readMode_button").children[0];n.classList.contains("readMode--is-active")?(n.classList.remove("readMode--is-active"),a.src=t):(n.classList.add("readMode--is-active"),a.src=s)}function s(e){var t=document.getElementsByClassName("terms__confirm")[0];document.getElementsByClassName("terms__confirm__text")[0];this.checked?t.classList.add("terms__confirm--is-visible"):t.classList.remove("terms__confirm--is-visible")}var n=document.getElementById("readMode_button"),a=document.getElementsByClassName("terms__checkbox")[0];document.addEventListener("mousemove",e),n.addEventListener("click",t),a.addEventListener("change",s);
},{"./img/book-icon.svg":"aTtJ","./img/eye-icon.svg":"HQAh"}]},{},["Focm"], null)
//# sourceMappingURL=/src.c0c8b644.js.map