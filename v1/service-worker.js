if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7dafdff6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.edba2088.css",revision:"ce9562acc7846c1ada4d099f57cdfece"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/19.f024f6ba.js",revision:"baaca1ac018c567b1f795d75cfa8e7a3"},{url:"assets/js/app.445433c4.js",revision:"4ef4e6a9d434a697a2762f5c6fc67840"},{url:"assets/js/layout-Blog.cbc63269.js",revision:"9d5ee02c78193594f1e7dadc42369c5b"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.22767f33.js",revision:"24e1a07683b459d6b175593b3ad3a817"},{url:"assets/js/layout-Slide.201c8a52.js",revision:"b60b7c73f2b3d558ece7311a8afc3499"},{url:"assets/js/page--7732b027.a0d4c880.js",revision:"d8575ffaacbc08fc3623f6a4d50223ed"},{url:"assets/js/page-Home.8bd4d199.js",revision:"2ee143654445f4125e1eb9910992b22c"},{url:"assets/js/page-功能配置.f782354e.js",revision:"8453230c5c972f2baba571d161e5c64a"},{url:"assets/js/page-常见问题.a5a9b9ed.js",revision:"dadb3932d8f33edbb3400c4260491249"},{url:"assets/js/page-文档试用.e581ca53.js",revision:"20b2802764366a47b7c3f5bfcaf1ef18"},{url:"assets/js/page-更新日志.5113e80a.js",revision:"b69093aaaf3b6d54f93feac3126e3df0"},{url:"assets/js/page-来个Star呗.14b9dd9f.js",revision:"c446a1d19603013a3f27b0efec9ac2c4"},{url:"assets/js/page-编写注释.e9151457.js",revision:"27e593f515810cc5df092e01a3c24611"},{url:"assets/js/page-配置参数.6ad296b4.js",revision:"8ca6e0ceef8d46278881a43f71ee6299"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c951b686.js",revision:"06470707aeab1f7f8102afcc6e8c7a86"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.3dd7b8fe.js",revision:"f2dda25ba5633b92bdae16415dd7381b"},{url:"assets/js/vendors~layout-Layout.50daf392.js",revision:"03e957835f2347680b0c6b13b3e3cc3e"},{url:"assets/js/vendors~photo-swipe.19d130ad.js",revision:"a1dce8c804418f32ae64310bed93bbe7"},{url:"404.html",revision:"c38a3970da7c9de9df2ec2052cc4db8e"},{url:"changelog/index.html",revision:"7b8e75c75f79b6e86ef69e157eea6486"},{url:"config/function/index.html",revision:"d941789c261e27d0152e94cb43a8fdbe"},{url:"config/index.html",revision:"0a8da08fa262a1fe58698542a7cf4a95"},{url:"index.html",revision:"56552e628164a15312223f713c46f5c5"},{url:"install/index.html",revision:"1ffb9b33e29916cd217a8d2a2d029e3d"},{url:"sponsor/index.html",revision:"d2e88b080ecd3ca4fd2b48739c11df6e"},{url:"use/actions/index.html",revision:"8324778f402b5b49c9602f98cc1953f7"},{url:"use/help/index.html",revision:"6b4753deb029b94a2950948c06265fcd"},{url:"use/index.html",revision:"a797ed1b2e708ef51f2d70d0b8b06f2b"},{url:"images/apidoc-api-base-demo.png",revision:"6bd88d68b0fd3e523032660eb9aee475"},{url:"images/apidoc-api-dictionary-demo.png",revision:"cce781123d1fb147d5541c08d347e43f"},{url:"images/apidoc-api-model-demo.png",revision:"b0177363bc0acaa238d21706c37e71ac"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"20973901188cce5babceb3e3a8eb4097"},{url:"images/apidoc-api-server-demo.png",revision:"9924414cc25e046085b24e5d7a8e46c4"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
