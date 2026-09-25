const CACHE_VERSION = 'tok-v4.42-3d';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Network-first for the HTML so GitHub Pages gets new builds promptly.
  if (url.origin === self.location.origin && url.pathname.endsWith('/index.html')) {
    event.respondWith(
      fetch(req, {cache:'no-store'})
        .then(res => { const copy=res.clone(); caches.open(CACHE_VERSION).then(c=>c.put(req,copy)); return res; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for local static assets.
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy=res.clone(); caches.open(CACHE_VERSION).then(c=>c.put(req,copy)); return res;
    })));
  }
});
