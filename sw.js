if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let t={};const l=e=>n(e,r),d={module:{uri:r},exports:t,require:l};o[r]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"d554a293ccab2af4d7756f65944b3574"},{url:"about/_payload.json",revision:"5af959248ef4f08fe584d50564935f29"},{url:"clock/_payload.json",revision:"9fa8ec805507b11c0d65265f92b291d3"},{url:"contact/_payload.json",revision:"d88ce99d7b08ff4e68fe081c16cdb860"},{url:"edge/_payload.json",revision:"1f726617bdc510e81780cad31a309954"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/2fca657d-f2bc-4be4-a189-895973e3ea9f.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
