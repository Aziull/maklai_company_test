(()=>{"use strict";var t={424:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([t.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: hsla(0, 6%, 87%, 0.5);\n    color: hsla(240, 17%, 35%, 1);\n}\n\n.root {\n    margin: 0 10px;\n}\n\n.static {\n    width: min(100%, 700px);\n    margin: 0 auto 20px;\n}\n\nh1 {\n    font-size: calc(20px + 0.5vw);\n}\n\n.form {\n    background-color: rgb(192, 210, 219);\n    padding: 15px;\n\n    border-radius: 2px;\n\n    display: flex;\n    align-items: flex-end;\n\n\n    gap: 1rem;\n}\n\n.form .item {\n    display: flex;\n    flex-direction: column;\n\n    flex: 1;\n}\n\n.form input,\n.form button {\n    height: 35px;\n    border-width: 0;\n}\n\n.form input {\n    padding: 0 20px;\n}\n\n.form button {\n    background-color: hsla(217, 79%, 24%, 1);\n    color: white;\n}\n\n.form button:hover {\n    cursor: pointer;\n    background-color: rgb(15, 68, 153);\n}\n\n#results {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.person {\n    padding: 15px;\n    background-color: white;\n}\n\n.person>* {\n    margin-bottom: 5px;\n}\n\na {\n    text-decoration: none;\n    color: hsla(217, 79%, 24%, 1);\n\n}\n\n.text-bottom {\n    display: flex;\n    align-items: flex-end;\n    gap: 5px\n}\n\n.person .icon {\n    font-size: inherit;\n}\n\n\n@media(max-width: 547px) {\n    .form {\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n    }\n}",""]);const s=i},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:t=>{t.exports=function(t){return t[1]}},548:(t,n,e)=>{e.r(n),e.d(n,{default:()=>y});var r=e(379),a=e.n(r),o=e(795),i=e.n(o),s=e(569),c=e.n(s),l=e(565),u=e.n(l),d=e(216),p=e.n(d),f=e(589),h=e.n(f),m=e(424),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),a()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=e(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=a(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=e(o[i]);n[s].references--}for(var c=r(t,a),l=0;l<o.length;l++){var u=e(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},465:function(t,n,e){var r=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(a,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,s)}c((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),e(548);const a=document.getElementById("startDate"),o=document.getElementById("endDate");new class{constructor(t,n){this.startDateInput=t,this.endDateInput=n,this.startDateInput.addEventListener("change",this.validate.bind(this)),this.endDateInput.addEventListener("change",this.validate.bind(this))}validate(){new Date(this.startDateInput.value)>new Date(this.endDateInput.value)&&([this.startDateInput.value,this.endDateInput.value]=[this.endDateInput.value,this.startDateInput.value])}}(a,o),new class{constructor(t,n){this.form=document.getElementById("searchForm"),this.startDateInput=t,this.endDateInput=n,this.resultsContainer=document.getElementById("results"),this.form.addEventListener("submit",this.search.bind(this))}search(t){return r(this,void 0,void 0,(function*(){t.preventDefault();const n=this.startDateInput.value,e=this.endDateInput.value,r=yield this.fetchData(n,e);this.displayResult(r)}))}fetchData(t,n){return r(this,void 0,void 0,(function*(){const e=`https://fakerapi.it/api/v1/persons?_birthday_start=${t}&_birthday_end=${n}&_limit=10`,r=yield fetch(e);return(yield r.json()).data}))}displayResult(t){this.resultsContainer.innerHTML="",t.map((t=>{const n=document.createElement("div");n.className="person",n.innerHTML=`\n                <h3>${t.firstname} ${t.lastname}</h3>\n                <a href="mailto:${t.email}" class="text-bottom"><p class="text-bottom">${this.displayIcon("email")} ${t.email}</p></a>\n                <p class="text-bottom">${this.displayIcon("phone")} ${t.phone}</p>\n                <p class="text-bottom">${this.displayIcon("cake")} ${t.birthday}</p>\n                <p class="text-bottom">${this.displayIcon(t.gender)} ${t.gender}</p>\n                <a href="${t.website}" target="_blank"><p class="text-bottom">${this.displayIcon("web")} ${t.website}</p></a>\n            `,this.resultsContainer.appendChild(n)}))}displayIcon(t){switch(t){case"male":return this.getIcon("man");case"female":return this.getIcon("woman");default:return this.getIcon(t)}}getIcon(t){return`<span class="material-icons icon">${t}</span>`}}(a,o)}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nc=void 0,e(465)})();