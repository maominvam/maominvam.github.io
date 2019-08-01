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
    "revision": "92e372b92f924041e5af25fe6e9a650a"
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
    "url": "assets/js/app.6776a5de.js",
    "revision": "2686173d7b266e72ab8bc082e171f371"
  },
  {
    "url": "CSS/index.html",
    "revision": "bdf454ae1fffce26fd938d06bcd3ecbf"
  },
  {
    "url": "HTML/index.html",
    "revision": "0b86268671e8389197c49fd09692235b"
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
    "revision": "21dccdd65edceec16cf93656a0db233a"
  },
  {
    "url": "JS/index.html",
    "revision": "c973de516d240fc1736a0d57747e075b"
  },
  {
    "url": "main.html",
    "revision": "e740fb7cbde1cd05c0bf9c5722c6f5fd"
  },
  {
    "url": "Other/index.html",
    "revision": "e93a674ea03a14e2c9f96e2c4381ae4a"
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
