if(!self.define){let e,n={};const s=(s,o)=>(s=new URL(s+".js",o).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let r={};const a=e=>s(e,t),l={module:{uri:t},exports:r,require:a};n[t]=Promise.all(o.map((e=>l[e]||a(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"7798eba3cbed0f8ad3478245f5d1e05f"},{url:"contact/_payload.json",revision:"7032e6787362ebec44a98a0cb6e88fa7"},{url:"eth/_payload.json",revision:"0ff1597b98ba41a1d0fe062a13d1db5e"},{url:"nfts/_payload.json",revision:"5c905bb9880a523a27eef05571d85e3c"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/61e8e6a7-8e4a-441f-b8d8-ae9699427c4a.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
