'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bb0624884bafc95b1d46ba71468b9a76",
"assets/AssetManifest.bin.json": "39e15151415e3a9ced331cbe5d3bd634",
"assets/AssetManifest.json": "6714bc4f596ba21fa2aa5522d63eb466",
"assets/assets/emotions/angry-flames.gif": "c411668de1e1dc1359a67e36a0106300",
"assets/assets/emotions/annoyed.gif": "03b04c2b1a39ba3dadc28cf0b05246fb",
"assets/assets/emotions/big-laugh.gif": "b9d0b02a4efbfa13c8655b007241f4a1",
"assets/assets/emotions/big-smile.gif": "96aa04031f2c9d6382455b493f113c34",
"assets/assets/emotions/blush.gif": "4e0dc1a794264937df7d4fb29d27932f",
"assets/assets/emotions/crying.gif": "896d312aa2ec8f4fab1960aa9f71a474",
"assets/assets/emotions/devil-angry.gif": "9b1173608cef7717ee4ee2b5ec66f409",
"assets/assets/emotions/heart-eyes.gif": "29b9f9fcdab4d630735a8d3c6721353c",
"assets/assets/emotions/hour-glass.gif": "b9b113bca7e6144bc7f6bef6ef6cc51d",
"assets/assets/emotions/mind-blown.gif": "d20992fe728d620157270aa5b4caeabe",
"assets/assets/emotions/puking.gif": "c8fb512f9d7c5a266db20e412235024f",
"assets/assets/emotions/sad.gif": "5d58ccf47511fc0c6f8ce6e7cda349ca",
"assets/assets/emotions/shocked.gif": "a2ae3478916c90f0ed3d3c9e8f9c042d",
"assets/assets/emotions/smirk.gif": "7a267d05b7ded7c9059ef9bf4db11249",
"assets/assets/emotions/thinking.gif": "2edcb092f8d00a74e6d76f7ca23c6585",
"assets/assets/emotions/tired.gif": "642fcb693ed86a67df66898c841d9c4b",
"assets/assets/emotions/very-annoyed.gif": "cd1bef87572a7fa191067a6cc8c87262",
"assets/assets/emotions/very-sad.gif": "e66f5396138a334c4b45c3b35b287484",
"assets/assets/emotions/very-shocked.gif": "e5ab2302faebe5d089e8a7faf99fdd7f",
"assets/assets/emotions/wink.gif": "64851855620fb773ddcc3fe183df78fb",
"assets/assets/sounds/ai_avatar.png": "8a1742b04c811dd61f02672a3581bae9",
"assets/assets/sounds/angry-flames.wav": "e9eb9505772f38a0db442d49336458be",
"assets/assets/sounds/annoyed.wav": "13cd7821f1c18482132a2c2e83c0a5c5",
"assets/assets/sounds/bg_1.mp3": "4e8f3a08b0f9ad2c0301ee814ee64b55",
"assets/assets/sounds/bg_2.mp3": "1eb8bd099bfa8fae32a5e3014e44568f",
"assets/assets/sounds/bg_3.mp3": "94bc927064440280fd3f35669e46923a",
"assets/assets/sounds/bg_4.mp3": "824b7faf64d09baf684889a2e08b4fbd",
"assets/assets/sounds/big-laugh.wav": "3449bd3edc4fb81eb6ae917a7eee84ca",
"assets/assets/sounds/big-smile.wav": "10e5a08ca2d4efbb406e2cda2d5af058",
"assets/assets/sounds/blush.wav": "febcecb0d113ecf12ec68ebde3d97615",
"assets/assets/sounds/bubble_appear1.wav": "26f727fcbf8bedf1dfa229969b2eb16a",
"assets/assets/sounds/bubble_appear2.wav": "bda4e2c87dbe0ea4040d3f7f254fc4f4",
"assets/assets/sounds/click_select.wav": "d587a77f12c7e1f2776e6d4cdc03c913",
"assets/assets/sounds/crying.wav": "c020daf5cc7f9580db6ca6318d72ec2a",
"assets/assets/sounds/devil-angry.wav": "45c7f7194c2646494436644548b6bdf4",
"assets/assets/sounds/heart-eyes.wav": "0b46f50cb1b599ede56a702f462a6a48",
"assets/assets/sounds/mind-blown.wav": "afe051fa861edf86025f1ce2887033a5",
"assets/assets/sounds/player_avatar.png": "772f7667208040aed6952725b818a951",
"assets/assets/sounds/puking.wav": "7efb6626069f751ffeed7b6cdb25cca5",
"assets/assets/sounds/sad.wav": "9fbefab58d73ebd8d8f559f7b6bbec42",
"assets/assets/sounds/shocked.wav": "57b6f076b24996d731a7375f41f343e5",
"assets/assets/sounds/smirk.wav": "4be1455592b806654868099ae90fdf5c",
"assets/assets/sounds/thinking.wav": "a7f3d982615101568c2c07a59fc1b0ce",
"assets/assets/sounds/tired.wav": "01d20e006aacea98a0cad08f43fbd0aa",
"assets/assets/sounds/very-annoyed.wav": "b1b34de7ce34c58b9da9121d42f94cc1",
"assets/assets/sounds/very-sad.wav": "f16c897ec79f75240a7edf7312b9d0f9",
"assets/assets/sounds/very-shocked.wav": "ba9bd3a4d994210545829bfcf2c196fe",
"assets/assets/sounds/voice_guess.mp3": "90f3cbe6458a5efb3297f0c9ccd4ffb4",
"assets/assets/sounds/voice_outro.mp3": "dedfe9fe833c14b8777039549267f1e7",
"assets/assets/sounds/waiting_loop.wav": "7439fe262052ec64a302b511e872d1d7",
"assets/assets/sounds/wink.wav": "5e68e3490151c759d28333c710aa344d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6f0309f3863af01830a216968bd9ff4e",
"assets/NOTICES": "10353221c42e51ed2afa9aa538038328",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"CNAME": "50754c238d19f24407bbe449b7f8f8b8",
"favicon.png": "dd2679f39ab567524212f384a7205ac7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "aeafba31631174f1a25bf6ce2e19af0e",
"icons/Icon-192.png": "e70033aede91448126ae0dd63db1d7c2",
"icons/Icon-512.png": "dd2679f39ab567524212f384a7205ac7",
"icons/Icon-maskable-192.png": "e70033aede91448126ae0dd63db1d7c2",
"icons/Icon-maskable-512.png": "dd2679f39ab567524212f384a7205ac7",
"index.html": "1871639d6d761c104acfba99286af026",
"/": "1871639d6d761c104acfba99286af026",
"landing.html": "4678aab156d123ff3d39e11799fdcbc0",
"main.dart.js": "6dc57ce380fc169aad10958ebdfe8fe5",
"manifest.json": "adb4e55b069d6e2549524f41693ae8b9",
"privacy.html": "c54a7d514e8e3e914160a34dc09ce65c",
"terms.html": "f7915fce5fcd66a212a268a90afd56c5",
"version.json": "ccea3a51993378c3603d8ae008bb2cd7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
