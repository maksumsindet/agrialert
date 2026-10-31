// AgriAlert Service Worker - Progressive Web App & Offline Field Companion
const CACHE_NAME = 'agrialert-cache-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const scope = self.registration.scope; // e.g. "https://maksumsindet.github.io/agrialert/" or "http://localhost:4321/"
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
        cleanScope + 'model_agriwarn.onnx',
        cleanScope + 'ort/ort.min.js',
        cleanScope + 'ort/ort-wasm-simd-threaded.wasm'
      ];

      // Add each asset gracefully so one missing asset doesn't break cache installation
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
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Stale-while-revalidate strategy for maximum speed and instant offline availability
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
        // Fallback for navigation requests if network fails
        if (event.request.mode === 'navigate') {
          return caches.match(self.registration.scope);
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
});
