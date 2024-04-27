'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ac10a1020fa06b56e4baec719d8fb89c",
"assets/AssetManifest.bin.json": "55ea7599f221f1d83e63400c93b116ee",
"assets/AssetManifest.json": "f0d8ba01f9bde0c1694a816d2a0384d2",
"assets/assets/data/albumes.json": "2067fe61beca826a1c369f6582caf597",
"assets/assets/data/canciones.json": "16a39f9b870847963bfbd8381837e203",
"assets/assets/data/integrantes.json": "d2d78b5b72edfcfc90e92f4206d96787",
"assets/assets/data/versiones.json": "e580a6047d8c3837fb3879a8b66986e5",
"assets/assets/images/albumes/Doublast.jpg": "0d4bd16eb974b0e20dff6d6c8cf65401",
"assets/assets/images/albumes/FirstImpact.jpg": "9fc07a65f936d21a46cc467630ee7058",
"assets/assets/images/albumes/FlyBy.jpg": "8a89b888f2aef1202f2bc02c06bbc95b",
"assets/assets/images/albumes/FlyHigh.jpg": "41ff0a8a9cdd2ea5cc7efb716887471e",
"assets/assets/images/albumes/FlyUp.jpg": "6cb559deaf5ec8a0a4fdc0a13896024c",
"assets/assets/images/albumes/LoveStruck.jpg": "a7b8eaf09c0aa3a2c3b763114c71f493",
"assets/assets/images/albumes/MagicHour.jpg": "1a2a243fd815b96cfcfc86254eb3a36f",
"assets/assets/images/albumes/TroubleShooter.jpg": "5f8662a686c00aa9d4d227b3d68f66cf",
"assets/assets/images/integrantes/chaehyun/Chaehyun.jpg": "15ffbc7b597fbf74678222760c6493e3",
"assets/assets/images/integrantes/chaehyun/Chaehyun1.jpg": "f30c19fdb23b85a67174567d47cc6df2",
"assets/assets/images/integrantes/chaehyun/Chaehyun2.jpg": "7d273883eff3508ab0f5dec80fd3357c",
"assets/assets/images/integrantes/chaehyun/Chaehyun3.jpeg": "c73aab0d8f7c5073619538c134c666e0",
"assets/assets/images/integrantes/dayeon/Dayeon.jpg": "aefc53b9f2e83174bc25894f21bdd530",
"assets/assets/images/integrantes/dayeon/Dayeon1.jpg": "8901216823ad84973ab71d2b4ffb8eb6",
"assets/assets/images/integrantes/dayeon/Dayeon2.jpg": "8972bba99aaa1e11016b0d2583ef47bd",
"assets/assets/images/integrantes/dayeon/Dayeon3.jpeg": "c69d82da6c474b439f1791213329dbbd",
"assets/assets/images/integrantes/hikaru/Hikaru.jpg": "2c9443eb786db5aee5a1dfad7fcdefad",
"assets/assets/images/integrantes/hikaru/Hikaru1.jpg": "7b49b58b1fb5f536323b709ac55942fc",
"assets/assets/images/integrantes/hikaru/Hikaru2.jpg": "98f34374f25df372459213802413a69f",
"assets/assets/images/integrantes/hikaru/Hikaru3.jpeg": "c06ef4b09b94da3ae1b8a4045bc28d2f",
"assets/assets/images/integrantes/hiyyih/Hiyyih.jpg": "64d2ab5e7832784a7477e448e7d50d43",
"assets/assets/images/integrantes/hiyyih/Hiyyih1.jpg": "f88480fb4d003ca4c8a2f3693c32953b",
"assets/assets/images/integrantes/hiyyih/Hiyyih2.jpg": "f66707fb34fd085855da307cba373710",
"assets/assets/images/integrantes/hiyyih/Hiyyih3.jpeg": "e73cb57ca99c40d72e21913f364800e7",
"assets/assets/images/integrantes/mashiro/Mashiro.jpg": "baf865c7b3ad2a329b5c75d7920c3e91",
"assets/assets/images/integrantes/mashiro/Mashiro1.jpg": "9c1e839b70b778b85aba7a993db1860e",
"assets/assets/images/integrantes/mashiro/Mashiro2.jpg": "d752b554561ceda6aa631c4270f6b3b7",
"assets/assets/images/integrantes/mashiro/Mashiro3.jpeg": "e4b33d1b45835eaf946b070424444324",
"assets/assets/images/integrantes/xiaoting/Xiaoting.jpg": "a1dbbafd8410628bfcd825b17f8614f8",
"assets/assets/images/integrantes/xiaoting/Xiaoting1.jpg": "1e124f76f4a09eedcc7d217d19e6b41c",
"assets/assets/images/integrantes/xiaoting/Xiaoting2.jpg": "ce7f28d32c7a7667b881eea651aba89f",
"assets/assets/images/integrantes/xiaoting/Xiaoting3.jpeg": "866ac8f2ba48c6d49cac0c3eb96ef5e8",
"assets/assets/images/integrantes/yeseo/Yeseo.jpg": "4c22a03f7965961dfd027a18761d1076",
"assets/assets/images/integrantes/yeseo/Yeseo1.jpg": "39d68fb2bf167638442a3f47e1b821b8",
"assets/assets/images/integrantes/yeseo/Yeseo2.jpg": "fad733a05e27dd52d53b23b7307fc838",
"assets/assets/images/integrantes/yeseo/Yeseo3.jpeg": "fb38da4196a889826dba19513a746cca",
"assets/assets/images/integrantes/youngeun/Youngeun.jpg": "44f2020e0ce56de9a9adb19ad604760d",
"assets/assets/images/integrantes/youngeun/Youngeun1.jpg": "f1e88f2e98c3cc86e54b4f147ad467e7",
"assets/assets/images/integrantes/youngeun/Youngeun2.jpg": "080e4a895eba49bd0ad8ae5a92aa9b3e",
"assets/assets/images/integrantes/youngeun/Youngeun3.jpeg": "b96c4ba2808e70cb8ef51c0edc941421",
"assets/assets/images/integrantes/yujin/Yujin.jpg": "43e0ddad85864b0d0dd7e825ba24c37a",
"assets/assets/images/integrantes/yujin/Yujin1.jpg": "1f01782884edf51def75c4d0769f3d81",
"assets/assets/images/integrantes/yujin/Yujin2.jpg": "29aa61c61bb7af3b00381fda4ccbe395",
"assets/assets/images/integrantes/yujin/Yujin3.jpeg": "8dd81dcb22e06bb9fcfe9efc31522a24",
"assets/assets/images/versiones/Doublast/DoublastBlue.png": "b75f2636d0ecc1d682db912cac43c462",
"assets/assets/images/versiones/Doublast/DoublastJewelBlue.png": "182b0fa6921fb92bd5a1b00197248b68",
"assets/assets/images/versiones/Doublast/DoublastJewelLemon.png": "2813ca2583f16b21a62e8ae31f94897b",
"assets/assets/images/versiones/Doublast/DoublastLemon.png": "c0345af4fc07fabb031a6cbee21f1905",
"assets/assets/images/versiones/FirstImpact/FirstImpactConnect.png": "2c45edd6ae3a6d53b5d89531531c7dc4",
"assets/assets/images/versiones/FirstImpact/FirstImpactConnect0.png": "51e6653f58a725df92ab1b7871fe947a",
"assets/assets/images/versiones/FirstImpact/FirstImpactConnect1.png": "f4e0224d0ccc7079fe91283855c12718",
"assets/assets/images/versiones/FlyBy/FlyByLimitedA.png": "11c6d71b7e33b517e7608022edacefcb",
"assets/assets/images/versiones/FlyBy/FlyByLimitedB.png": "cb2b77fbf45798718acf2e6ca832f464",
"assets/assets/images/versiones/FlyBy/FlyByRegular.png": "ec688d7155fee545747ccc842db23a98",
"assets/assets/images/versiones/FlyHigh/FlyHighLimited.png": "1bbceed04987515ca09ed8e851412e46",
"assets/assets/images/versiones/FlyHigh/FlyHighStandart.png": "a3a52293c175a364b201d4a78f267e8b",
"assets/assets/images/versiones/FlyUp/FlyUpLimitedA.png": "a42906fd95d27fa61764eac682c78c24",
"assets/assets/images/versiones/FlyUp/FlyUpLimitedB.png": "4fe15a40f2a58752d546993550663f48",
"assets/assets/images/versiones/FlyUp/FlyUpStandart.png": "9d8480cb6e09f051010d151c4ab0f482",
"assets/assets/images/versiones/Lovestruck/LoveStruckDigipack.png": "06edb718caa1e8bd7e25488c83022914",
"assets/assets/images/versiones/Lovestruck/LoveStruckEyeContact.png": "380604904e0c206f6512976c186ba697",
"assets/assets/images/versiones/Lovestruck/LoveStruckFirstBlush.png": "96643044d632f8828df2f04abbfa539c",
"assets/assets/images/versiones/Lovestruck/LoveStruckLoveStrike.png": "e10fdce17534f2a671ce9aad8858274d",
"assets/assets/images/versiones/MagicHour/MagicHourBeloved.png": "a93a567244685470faa7747f33e397b6",
"assets/assets/images/versiones/MagicHour/MagicHourMoonlighted.png": "47fb96c64e6ccb295d4fe5bec6a91b11",
"assets/assets/images/versiones/MagicHour/MagicHourPlatform.png": "0f603d830f9495999eaef8a7496f4378",
"assets/assets/images/versiones/MagicHour/MagicHourSunkissed.png": "393e6ea1c4233b6a149fb181d3efe81d",
"assets/assets/images/versiones/MagicHour/MagicHourTape.png": "80c3751cf09c9418ba49400f8c9e734c",
"assets/assets/images/versiones/MagicHour/MagicHourTropical.png": "89e17552d240d361606a18377b4ac9a3",
"assets/assets/images/versiones/TroubleShooter/TroubleShooterDaydream.png": "a0bb57b2704b9e9ed5b114326797f37a",
"assets/assets/images/versiones/TroubleShooter/TroubleShooterDigipack.png": "7ca39d500db01879e5ab00efae61d881",
"assets/assets/images/versiones/TroubleShooter/TroubleShooterK.png": "5b9a89d5b435987c057717d9853586a5",
"assets/assets/images/versiones/TroubleShooter/TroubleShooterMidnight.png": "08a7d360c69d76fd427f626253ac59ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c25253f86e63f90074269902cd18103e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6fab63c6cbb349b9d9dee58f446398a6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "eed821daa4e5a1b98de5ffcfee36716b",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c221b533c14979c7dceac34c5289854",
"/": "6c221b533c14979c7dceac34c5289854",
"main.dart.js": "9cab844c987ece558f17e0df59c01471",
"manifest.json": "36a31725232c8cfe0480f0afc3b6bf7f",
"version.json": "bf18ac52943e4756b9261be773121400"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
