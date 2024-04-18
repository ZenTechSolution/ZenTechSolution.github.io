'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9a7709e7ee62019312900008342f9711",
"assets/AssetManifest.bin.json": "7101a6ceed75b5c96222385e434f82a2",
"assets/AssetManifest.json": "6ee51c66aa1ee4a48c6b6086ba089912",
"assets/assets/1.png": "f5f4b26a21b9d65e8f607dfdf4522a63",
"assets/assets/2.png": "e98989092650a8e605ac8186cc900f88",
"assets/assets/3.png": "7564b582fdf41ae5cfdd3fab5ce023d1",
"assets/assets/arts.png": "2f5eb6cdba5caa178cf1d49253c4742b",
"assets/assets/bbq.png": "84003a4d1276d741192f6d5476eec76d",
"assets/assets/bbq_cat.png": "73eaebec300ae08b9bac3fa32ff75609",
"assets/assets/bbq_kit.png": "0d6e878075899b94d1f9169aed789038",
"assets/assets/burger_menu.png": "0dbc9f212ff531ada1dae6b13b693521",
"assets/assets/calender.png": "b88723679a111ed941533f400971226e",
"assets/assets/calender_form_header.png": "59924bcf29cc6a56692dc28ff2927880",
"assets/assets/calender_page_header.png": "a29a500dfae21465af50ccabfe43c9dd",
"assets/assets/care_pack.png": "da01bc03b83e072b942619b783a739f7",
"assets/assets/crowed.png": "ede1255669292751745be106417879fe",
"assets/assets/dao.png": "7a87b735fd86332947e596647f89d8c5",
"assets/assets/event1.png": "f0ebca061ad94eb96270e18da2aefc55",
"assets/assets/event2.png": "5ba228669f50be1e2b6cc07971b6cb91",
"assets/assets/family.png": "08ab64cc4673294a7cf54ff17cc2d296",
"assets/assets/family_garments.png": "7d905681e3cd8729e2b6ff23391979d4",
"assets/assets/ice.png": "030c3a8ded21c05f0d33c46ee6ddf861",
"assets/assets/iceCream.png": "60ea445d0adadb920add022d9e952ee8",
"assets/assets/invest_form_img.png": "7f148ce0e9d8fb79b24b413a1a09c1ef",
"assets/assets/launcher.png": "0d545d4648f95202940fb9b0789942ca",
"assets/assets/logo.png": "9ad9ce4ba0e1543848ea597686a7614c",
"assets/assets/magazine.png": "f3854ae8c84127eed8c0f889d923739c",
"assets/assets/marketplace.png": "a5f1ffa733516ec098c13a6e378e6558",
"assets/assets/microphone.png": "06981e2ede5c0f0cae6fb111b8e32bbe",
"assets/assets/next_img.png": "0745f69955debcca7de3b74b5f95d71f",
"assets/assets/park.png": "640eb2c27eb1683d7fae509572f31532",
"assets/assets/profile.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/promo.mp4": "f79a1663d847995e0e1890ffa939f190",
"assets/assets/promo.png": "0a87d66ea05b7116fd12af08e34f96aa",
"assets/assets/sea.png": "a9d04193d43c0639271bc1bc69327bd7",
"assets/assets/search.png": "1aa1d184f08fe9167c493345093dcedf",
"assets/assets/skin.png": "dc3ab49f019bc22dc2f97a646e199141",
"assets/assets/splash.jpg": "99cff39a874ad5180061f7b8ff193719",
"assets/assets/state_img.png": "5fbb3a4d96130f0258455a0750844796",
"assets/assets/stream.png": "293aafe55789067cd4b9eed9303ae593",
"assets/assets/temple.png": "17f39df9645868e67bdbbcee0bdea5ad",
"assets/assets/tourism.png": "bb4f769bd74fdeba43af8094f6f39b33",
"assets/assets/upload.png": "42adc35e42538063a3bf70b82a62b925",
"assets/assets/veg.png": "23a69223be63c96403d92c73e2ef4ba0",
"assets/assets/village_of_peace.png": "cee11869ea0f54b024fc6a92a70f0df5",
"assets/assets/walet.png": "8d7a98619ac7168f19d609fb10a9f9a4",
"assets/assets/WhatsApp.png": "5f2185a5689808bb2325057730e36530",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4ad871e67ff54cb7246d836fd65767e",
"assets/fonts/poppins_bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/poppins_regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "6c1eb4015a5369f34a30eebf093e0c16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
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
"favicon.png": "4a37072d90205a1a71cfdf147725821c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac13d25a82fe6f32163213776d9af002",
"icons/Icon-512.png": "483f587709b594468edcd42ce23b87c1",
"icons/Icon-maskable-192.png": "ac13d25a82fe6f32163213776d9af002",
"icons/Icon-maskable-512.png": "483f587709b594468edcd42ce23b87c1",
"index.html": "d88903d4b1ed262754e9a383725eebca",
"/": "d88903d4b1ed262754e9a383725eebca",
"main.dart.js": "17b8eccac18b49b3d708a7fba6ee24a4",
"manifest.json": "109a380313c610c7fda350c2ad925189",
"version.json": "18c05744a7c049a6cf88f51599bf81d9"};
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
