if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let t={};const d=e=>n(e,r),l={module:{uri:r},exports:t,require:d};o[r]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"0fbd5013b8fdd85341bc573129d8211c"},{url:"about/_payload.json",revision:"c07ffd016b353993b6864e85cf35af41"},{url:"clock/_payload.json",revision:"f3dc07aa6199767f8323796541835950"},{url:"contact/_payload.json",revision:"1aec146add11b7ee446a9df0036fb124"},{url:"edge/_payload.json",revision:"d6b9309afcb81b940f73204feb439bf5"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/01251de3-5cf6-4951-a255-3bb211e23d0c.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
