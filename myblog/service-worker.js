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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be3e66fe632779be425a0e3d1f402ff1"
  },
  {
    "url": "assets/css/0.styles.c9549e22.css",
    "revision": "4f979cdf06c6f4ac83c4246b54daf989"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.567fac94.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.6ae8b7dc.js",
    "revision": "a4d0ba1dfd6e15c1a3b15acb8c6de41f"
  },
  {
    "url": "assets/js/4.7a613d35.js",
    "revision": "8d89d41653140af588b1f3d75fcd8c8c"
  },
  {
    "url": "assets/js/5.21f61ebf.js",
    "revision": "c7d5f117eefa897da7e690f429ba91a7"
  },
  {
    "url": "assets/js/6.fb1c99d8.js",
    "revision": "7ec34a6bb58c418f81c30dcab9f0bbb8"
  },
  {
    "url": "assets/js/7.6d93d783.js",
    "revision": "59b0282ea20713fd42d9749db1335c40"
  },
  {
    "url": "assets/js/8.d5ab1beb.js",
    "revision": "7ce8377037edf26440ef164b7c9ee782"
  },
  {
    "url": "assets/js/9.b01521cb.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.4c0da571.js",
    "revision": "081246778f92ebd7b30fa65ddf2ee945"
  },
  {
    "url": "CSS/index.html",
    "revision": "e3009df76141de6dc664f32d47e62d51"
  },
  {
    "url": "HTML/index.html",
    "revision": "506bbbcbbc48de17939a1ea7d36021f2"
  },
  {
    "url": "images/logo.jpg",
    "revision": "0acd031010e0b59723a2934c6ef72365"
  },
  {
    "url": "images/logo.png",
    "revision": "ef5addc19315407c8c9daebd79bace0a"
  },
  {
    "url": "index.html",
    "revision": "fea54569b52c23dd34771858dbd8cfb0"
  },
  {
    "url": "JS/index.html",
    "revision": "148c71750dfbff44304a2ae682ab7c5b"
  },
  {
    "url": "main.html",
    "revision": "8595619c268cfad2b7fa9060d7b44289"
  },
  {
    "url": "Other/index.html",
    "revision": "93f97becf71517d8d0c06bf852f67874"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
