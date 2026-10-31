// AgriAlert Service Worker - Progressive Web App & Offline Field Companion
const CACHE_NAME = 'agrialert-cache-v3';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const scope = self.registration.scope;
      const cleanScope = scope.endsWith('/') ? scope : scope + '/';

      const essentialAssets = [
        cleanScope,
        cleanScope + 'cuaca',
        cleanScope + 'deteksi',
        cleanScope + 'hama',
        cleanScope + 'tanibot',
        cleanScope + 'pengaduan',
        cleanScope + 'manifest.json',
        cleanScope + 'images/mascot.png',
        cleanScope + 'images/sun.png',
        cleanScope + 'images/gps.png',
        cleanScope + 'images/maps.png',
        cleanScope + 'models/model_agriwarn.onnx',
        cleanScope + 'ort/ort.min.js',
        cleanScope + 'ort/ort-wasm-simd.wasm',
        cleanScope + 'ort/ort-wasm.wasm'
      ];

      for (const asset of essentialAssets) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn(`[SW] Pre-cache note for ${asset}:`, err);
        }
      }
    })()
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match(self.registration.scope);
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
});
