/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "30608144e18b64fb8760a3d0c7929089"
  },
  {
    "url": "about.html",
    "revision": "8dd2f11b64989f80d65815e68dd06eb2"
  },
  {
    "url": "assets/css/0.styles.03f514b0.css",
    "revision": "280072c7b31ee64d17ec52b26943c0ad"
  },
  {
    "url": "assets/img/favicon.da44ae7b.png",
    "revision": "da44ae7ba1402418ae418b0fc78abf41"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7239be9.js",
    "revision": "544b81a05464cb582e9f9d75062b1c30"
  },
  {
    "url": "assets/js/10.e8fbc73c.js",
    "revision": "6210cfa75fd26143fcc979cd569d1551"
  },
  {
    "url": "assets/js/11.68552397.js",
    "revision": "80baaf9dbc219a0851195f8768e9a120"
  },
  {
    "url": "assets/js/12.254adae6.js",
    "revision": "ae229af3e0f011774a7a75318cc196d1"
  },
  {
    "url": "assets/js/13.bd2a9e1b.js",
    "revision": "4d4e1f567ad90f098a458b54e4bd3ec3"
  },
  {
    "url": "assets/js/14.4049cc9a.js",
    "revision": "bd3ceb5f6b290f0f508da08f235cbc31"
  },
  {
    "url": "assets/js/15.fdb8c18b.js",
    "revision": "c77537b3a8ea48cd900e6dbb26af66b0"
  },
  {
    "url": "assets/js/16.799acffc.js",
    "revision": "3361cc3dafb2d4b817750d8ee5f911d9"
  },
  {
    "url": "assets/js/17.bd8b3a56.js",
    "revision": "9002e022fa31b499982e56acff44c18a"
  },
  {
    "url": "assets/js/18.ca2647aa.js",
    "revision": "6ab23bcf9b67ea205c68abda155b1510"
  },
  {
    "url": "assets/js/19.0ef36589.js",
    "revision": "70516d85929ee2b686c3510b843652e2"
  },
  {
    "url": "assets/js/2.276acac4.js",
    "revision": "b92800184ecb1535a3778c8aa6f72f4e"
  },
  {
    "url": "assets/js/20.cacd19fe.js",
    "revision": "588131b8a44047f6dfc09413f713487c"
  },
  {
    "url": "assets/js/21.9a835daf.js",
    "revision": "cb347c28b35efc645587b91ee9784772"
  },
  {
    "url": "assets/js/22.8f0c5f3c.js",
    "revision": "8e0ad9fb24cb8212d4976ed24ae851a6"
  },
  {
    "url": "assets/js/23.81be2278.js",
    "revision": "6c49f7fd9f60a9482f0b3adfcc1e423f"
  },
  {
    "url": "assets/js/24.58a4e894.js",
    "revision": "6a05d2255d0b6495750570bbfc854355"
  },
  {
    "url": "assets/js/25.195f4347.js",
    "revision": "96f7bb9569fe4c9b8403449255752b21"
  },
  {
    "url": "assets/js/26.6771959d.js",
    "revision": "ff1bec58c9d4cdf1ac28238686c6dd6a"
  },
  {
    "url": "assets/js/27.25adfb60.js",
    "revision": "123093a5d2626816b66afee78ba2a020"
  },
  {
    "url": "assets/js/28.a905cc2a.js",
    "revision": "98c7623e6705bb21d74cd7a1625e372a"
  },
  {
    "url": "assets/js/29.795962b3.js",
    "revision": "4dfb826ab7dad90501710df40c21fcd4"
  },
  {
    "url": "assets/js/3.1201d738.js",
    "revision": "644ed254eadd3042b0e6d867b3791e7e"
  },
  {
    "url": "assets/js/30.faccb619.js",
    "revision": "4f679a4a0134f44df78680e0cb502ecb"
  },
  {
    "url": "assets/js/31.de11fda2.js",
    "revision": "0513883cc1776f941d0104436c0fd739"
  },
  {
    "url": "assets/js/32.489552d7.js",
    "revision": "4a3606e530f4c940e83f4f721991de5e"
  },
  {
    "url": "assets/js/33.caafeac3.js",
    "revision": "0e57f4c00e72922daa42651f625ec32d"
  },
  {
    "url": "assets/js/4.b9189654.js",
    "revision": "411f783af3e4fae42e7b41539de36b80"
  },
  {
    "url": "assets/js/5.fa981c56.js",
    "revision": "38474fe2a849d0e5209180885a27259e"
  },
  {
    "url": "assets/js/6.0a115713.js",
    "revision": "2cbf246bcd7093c87690cd170ab6538f"
  },
  {
    "url": "assets/js/7.98ad7b68.js",
    "revision": "420b57ba6ac9a737d5407b949554ede9"
  },
  {
    "url": "assets/js/app.024d8dd8.js",
    "revision": "09da6dd72715c8d483dfe13830f9995b"
  },
  {
    "url": "assets/js/vendors~docsearch.5b076cc2.js",
    "revision": "411f22d9279082036324329298ea14c6"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "2b099f840602006e80e48b01815cf5db"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "856c440c60681fc66db57979ec3e32a2"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "d25f30f13bdffa6be20c0e29c0aa2b72"
  },
  {
    "url": "css/index.html",
    "revision": "4b90ae761c78f7f9cddb77250027083a"
  },
  {
    "url": "index.html",
    "revision": "61121a3b42339ec3f93ef7dcfc38eda6"
  },
  {
    "url": "javascript/index.html",
    "revision": "58d30da6a56d9108d5f4b609a35b694e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "da7c18ed4d05f6d86859c93699a95edb"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "3aa7f0fe9f6e508da5a64acb458f2a2d"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "8dd09eaafb930b2925da5a6e71160cd5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
