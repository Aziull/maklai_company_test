(()=>{"use strict";var n={424:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: hsla(0, 6%, 87%, 0.5);\n    color: hsla(240, 17%, 35%, 1);\n}\n\n.root {\n    margin: 0 10px;\n}\n\n.static {\n    width: min(100%, 700px);\n    margin: 0 auto 20px;\n}\n\nh1 {\n    font-size: calc(20px + 0.5vw);\n}\n\n.form {\n    background-color: rgb(192, 210, 219);\n    padding: 15px;\n\n    border-radius: 2px;\n\n    display: flex;\n    align-items: flex-end;\n\n\n    gap: 1rem;\n}\n\n.form .item {\n    display: flex;\n    flex-direction: column;\n\n    flex: 1;\n}\n\n.form input,\n.form button {\n    width: 100%;\n\n    box-sizing: border-box;\n    \n    height: 35px;\n    border-width: 0;\n}\n\n.form input {\n    padding: 0 20px;\n}\n\n.form button {\n    background-color: hsla(217, 79%, 24%, 1);\n    color: white;\n}\n\n.form button:hover {\n    cursor: pointer;\n    background-color: rgb(15, 68, 153);\n}\n\n#results {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.person {\n    padding: 15px;\n    background-color: white;\n}\n\n.person>* {\n    margin-bottom: 5px;\n}\n\na {\n    text-decoration: none;\n    color: hsla(217, 79%, 24%, 1);\n\n}\n\n.text-bottom {\n    display: flex;\n    align-items: flex-end;\n    gap: 5px\n}\n\n.person .icon {\n    font-size: inherit;\n}\n\n\n@media(max-width: 547px) {\n    .form {\n        display: block;\n    }\n    \n    .item {\n        display: block;\n        width: 100%;\n        margin-bottom: 20px;\n    }\n    .item:last-child {\n        margin-bottom: 0;\n    }\n}",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:n=>{n.exports=function(n){return n[1]}},548:(n,t,e)=>{e.r(t),e.d(t,{default:()=>y});var r=e(379),a=e.n(r),o=e(795),i=e.n(o),s=e(569),c=e.n(s),l=e(565),u=e.n(l),d=e(216),p=e.n(d),f=e(589),h=e.n(f),m=e(424),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),a()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=e(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var u=e(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},465:function(n,t,e){var r=this&&this.__awaiter||function(n,t,e,r){return new(e||(e=Promise))((function(a,o){function i(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,s)}c((r=r.apply(n,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),e(548);const a=document.getElementById("startDate"),o=document.getElementById("endDate");new class{constructor(n,t){this.startDateInput=n,this.endDateInput=t,this.startDateInput.addEventListener("change",this.validate.bind(this)),this.endDateInput.addEventListener("change",this.validate.bind(this))}validate(){new Date(this.startDateInput.value)>new Date(this.endDateInput.value)&&([this.startDateInput.value,this.endDateInput.value]=[this.endDateInput.value,this.startDateInput.value])}}(a,o),new class{constructor(n,t){this.form=document.getElementById("searchForm"),this.startDateInput=n,this.endDateInput=t,this.resultsContainer=document.getElementById("results"),this.form.addEventListener("submit",this.search.bind(this))}search(n){return r(this,void 0,void 0,(function*(){n.preventDefault();const t=this.startDateInput.value,e=this.endDateInput.value,r=yield this.fetchData(t,e);this.displayResult(r)}))}fetchData(n,t){return r(this,void 0,void 0,(function*(){const e=`https://fakerapi.it/api/v1/persons?_birthday_start=${n}&_birthday_end=${t}&_limit=10`,r=yield fetch(e);return(yield r.json()).data}))}displayResult(n){this.resultsContainer.innerHTML="",n.map((n=>{const t=document.createElement("div");t.className="person",t.innerHTML=`\n                <h3>${n.firstname} ${n.lastname}</h3>\n                <a href="mailto:${n.email}" class="text-bottom"><p class="text-bottom">${this.displayIcon("email")} ${n.email}</p></a>\n                <p class="text-bottom">${this.displayIcon("phone")} ${n.phone}</p>\n                <p class="text-bottom">${this.displayIcon("cake")} ${n.birthday}</p>\n                <p class="text-bottom">${this.displayIcon(n.gender)} ${n.gender}</p>\n                <a href="${n.website}" target="_blank"><p class="text-bottom">${this.displayIcon("web")} ${n.website}</p></a>\n            `,this.resultsContainer.appendChild(t)}))}displayIcon(n){switch(n){case"male":return this.getIcon("man");case"female":return this.getIcon("woman");default:return this.getIcon(n)}}getIcon(n){return`<span class="material-icons icon">${n}</span>`}}(a,o)}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nc=void 0,e(465)})();