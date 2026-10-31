// AgriAlert Service Worker - Safe & Resilient Field Caching
const CACHE_NAME = 'agrialert-cache-v4-clean';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      // Purge all old broken caches immediately
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle standard GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Do not intercept non-http/https or chrome-extension schemes
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    // 1. Try real network first to always get latest site content
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          }).catch(() => {});
        }
        return networkResponse;
      })
      .catch(async () => {
        // 2. If network completely fails (device is offline in the middle of rice fields)
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // If navigating to an HTML page, try finding any cached HTML page or root
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match(self.registration.scope) || await caches.match(self.registration.scope + 'deteksi/');
          if (fallback) return fallback;
        }

        // 3. Fallback graceful response instead of browser ERR_FAILED crash
        return new Response(
          '<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><title>Mode Lapangan Offline | AgriAlert</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="font-family:sans-serif;padding:2rem;text-align:center;background:#f5f7f4;color:#1F3921;"><h2>Anda Sedang Offline</h2><p>Pastikan Anda memiliki koneksi internet untuk memuat halaman ini pertama kali, setelah itu sistem dapat berjalan secara offline.</p><button onclick="window.location.reload()" style="padding:10px 20px;background:#1F3921;color:#fff;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">Coba Lagi</button></body></html>',
          {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          }
        );
      })
  );
});
