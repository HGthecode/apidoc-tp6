if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7dafdff6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.75d1ecf0.css",revision:"a2b600ba0deefae19467d1e94e74e473"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/38.822c433d.js",revision:"63d3cc464f695ea4f717b9f03d38e630"},{url:"assets/js/39.4d37f946.js",revision:"97749a43d5f7864e5845f45d253b7806"},{url:"assets/js/40.cd1d3711.js",revision:"7249aad8c30ade53a7edbfc0d95df8cf"},{url:"assets/js/app.55c08638.js",revision:"5c850469d4079fdc2cd701813ce2bc15"},{url:"assets/js/layout-Blog.eb6d519e.js",revision:"7f2d96dfa45b66a4a116a7f0892d2b1e"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.4fedb810.js",revision:"ccbbafb84f5cfb9ff7af6cda4cfb4b73"},{url:"assets/js/layout-Slide.c0028b2e.js",revision:"630844b40488b8edc6d88c5f19dcd5d1"},{url:"assets/js/page-Markdown文档.5c213fa3.js",revision:"1f97adead61fa5a8e4fd78736c1fec8d"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.77f1b324.js",revision:"2313e44eea0d301e082f5b213f9503fe"},{url:"assets/js/page-V10升级V20报错.c7062df1.js",revision:"bed87dc84ff430e62a198954d17dcd1c"},{url:"assets/js/page-介绍.71ad9728.js",revision:"4b663fa1e8c063bafc5f2f9d45170905"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.319e99f7.js",revision:"a445caca5dcb95b9011c29097a46bcf2"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.a7792eff.js",revision:"21f2542b8d6111c0eb2ac3034107fed5"},{url:"assets/js/page-多应用多版本.764f2af8.js",revision:"655a1f7545d92927f1f3ddb7675dc052"},{url:"assets/js/page-安装更新.7965878f.js",revision:"22c38be32bd82d3c83cda86c77649f64"},{url:"assets/js/page-密码验证.94ef7001.js",revision:"5a2ffefbbf7463368f0d9fa804a6ecdf"},{url:"assets/js/page-常见问题.7b056651.js",revision:"2115ed19789b61feb468c967ce13b5c3"},{url:"assets/js/page-建议及规范.8e76e8f8.js",revision:"31ab92377a1735d182ac94861500734e"},{url:"assets/js/page-引入解释文件.d14ee757.js",revision:"1a7463927ea4654c19e8cd01a38058d8"},{url:"assets/js/page-快速生成CRUD.49151b1e.js",revision:"648a9ec8a80c25026de37c4ab0979c68"},{url:"assets/js/page-指南.6f71a6ac.js",revision:"c8f289357e0e12c82fbab9e296073efe"},{url:"assets/js/page-接口注释.0a6dc5bb.js",revision:"50275375f085f6212488b109f95add33"},{url:"assets/js/page-接口调试.6bcb7c4e.js",revision:"82591cb4f08083ce3ad9b10f26d7dcb7"},{url:"assets/js/page-控制器分组.d956acc8.js",revision:"efc558ba0db51d3dcd19db3ce91eafd9"},{url:"assets/js/page-控制器注释.196b541e.js",revision:"810266b6790e4a8aa44a7aec8bb96fff"},{url:"assets/js/page-教程.2331c9df.js",revision:"c12416f52d0643556442f61f37eff60f"},{url:"assets/js/page-文档缓存.d52f6be8.js",revision:"8580bb80408d80b66c49ccc8f21e6313"},{url:"assets/js/page-更新日志.7a288ac8.js",revision:"1d5e87cec89494cb7439d5c0a5ad105a"},{url:"assets/js/page-没有生成apidocphp配置文件.81db94f0.js",revision:"4e5e946c4c96b483a5bd55cedadcfc04"},{url:"assets/js/page-编写注释.61cac90f.js",revision:"b1d2719729affddb058accf9f0440e9a"},{url:"assets/js/page-配置参数.2421c31f.js",revision:"307fd343228250b20026e3aa98d035d8"},{url:"assets/js/page-页面404错误.4a74ef5e.js",revision:"14a1b27a693eb435ac046fee54268ece"},{url:"assets/js/page-页面500错误.7c6ef356.js",revision:"6d1493b5da517f8b7335c342477321a9"},{url:"assets/js/page-页面布局.4b91c47a.js",revision:"55f6cc77e5e1cc605611b0d46abdc476"},{url:"assets/js/page-页面配置.c2a80846.js",revision:"55a1da2273a3de1e4a41c34323914180"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.df080a92.js",revision:"13cf464b28026154409967db43d49a31"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.56110a7c.js",revision:"7204388c3bbc1471554ad69c7bbf6ed3"},{url:"assets/js/vendors~layout-Layout.68e9d14b.js",revision:"e75601a48b03f23f0a4a0541afabe916"},{url:"assets/js/vendors~photo-swipe.00de1f37.js",revision:"a5f249ecfe640a031ec3b7ff95a8f9e0"},{url:"404.html",revision:"b7248ac42a65cfe252ccc199acd6f3ef"},{url:"config/index.html",revision:"8e69ad6d144a1a47a8300febc422a2d5"},{url:"config/page/index.html",revision:"849c608f479c86473a67240e93527bc6"},{url:"course/createTpAndInstall/index.html",revision:"c841f9723ec3fb3b55cf66077b474ee4"},{url:"course/githubActionsDeploy/index.html",revision:"9748b3335372209ab5ce37aae75a62cc"},{url:"course/index.html",revision:"8d9b4020aa5bdb10ad873b1a73014cee"},{url:"course/phpStudyInstall/index.html",revision:"af26a7b8e7796915152b302a18903a26"},{url:"guide/changelog/index.html",revision:"ad09cdc6362cd63e5cffeab111ef6180"},{url:"guide/index.html",revision:"f8c8d3a7da531484ce84e8b0a388da17"},{url:"guide/install/index.html",revision:"4834da3b2a08a2b66d54812725a86d3a"},{url:"index.html",revision:"c3a633d75a2becee5a93d735613bcd3e"},{url:"use/function/apps/index.html",revision:"e944572b70fd469a230e8d7d8f7026c5"},{url:"use/function/cache/index.html",revision:"abfb701cc5398b3054bc2b6f2824199c"},{url:"use/function/controllerGroup/index.html",revision:"95832bdc7741eeb2bac37d6ad9bec0a6"},{url:"use/function/crud/index.html",revision:"7b034b694802bef67da2e1e86ba7683d"},{url:"use/function/docs/index.html",revision:"4842ff89d645281c1bd33b3dc1c7c561"},{url:"use/function/password/index.html",revision:"a69c9740610de7d85a659c6e5fdcb5da"},{url:"use/help/404/index.html",revision:"ccd6afaa32ccaa51d3bab4875fc7a2e3"},{url:"use/help/500/index.html",revision:"49d59f0d5b5f11be5f23edfd4a72ec9b"},{url:"use/help/index.html",revision:"f2c52a6190262bfc687763b66b64b67b"},{url:"use/help/notConfig/index.html",revision:"2627db6f79c1b0dd2ce7f02bf9273ba5"},{url:"use/help/v1Tov2/index.html",revision:"7f03e854e1de8b8aa5546ed5f3ed1db5"},{url:"use/index.html",revision:"56b8494b8158247efa390eb6a3ecbf0f"},{url:"use/notes/api/index.html",revision:"2512e9aa1395417feed97dd52422f1b4"},{url:"use/notes/controller/index.html",revision:"a8cd0feee33866ed38ed25aab474893e"},{url:"use/notes/index.html",revision:"7b12fe5404e544367ce896616d00be8d"},{url:"use/notes/useFile/index.html",revision:"51e18c1a6f850c36f17542ac3a99685e"},{url:"use/operation/apidebug/index.html",revision:"a5e6c2658ad500718e11b1c2f9c7d4cb"},{url:"use/operation/layout/index.html",revision:"9a4066e439588bc892c1171ffbf40f24"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"dc6db87c76980646dd89d801e7d2fad3"},{url:"images/apidoc-api-complete-demo.png",revision:"0f1b3e12ca365f2c1dec82342cb96510"},{url:"images/apidoc-api-dictionary-demo.png",revision:"e2c83946e7669a4b2943d7e505bd449c"},{url:"images/apidoc-api-model-demo.png",revision:"4920f55448d8f0ff7dd34cc7b1a234cc"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"10f8c091787dd3e142e51d4631fca29b"},{url:"images/apidoc-api-server-demo.png",revision:"0d04ef74eab3027a652f91c2b8781284"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"db279004724dc47565acee78b9edf013"},{url:"images/apidoc-demo-md.png",revision:"b7f978a7285fcc3173dcb8b5faff6b08"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
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
