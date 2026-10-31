// AgriAlert Service Worker - Auto-cleanup & self-unregister
// This ensures no stale cache or fetch interception causes ERR_FAILED in user browsers
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((k) => caches.delete(k)));
    }).then(() => {
      return self.registration.unregister();
    })
  );
});
