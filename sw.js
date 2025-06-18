self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('stationery-app-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'products.html',
        'cart.html',
        'style.css',
        'manifest.json',
        'sw.js',
        'images/icon-192.png',
        'images/icon-512.png',
        // Add any other images used in products
      ]);
    })
  );
  console.log("Service Worker Installed");
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
