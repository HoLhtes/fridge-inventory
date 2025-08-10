
const CACHE_NAME = 'fridge-v1';
const ASSETS = [
  '.',
  './',
  'index.html',
  'manifest.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // network first for Google searches, cache-first for app shell
  const url = new URL(e.request.url);
  if (url.hostname.includes('google') || url.hostname.includes('bing')) {
    return e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
  }
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
