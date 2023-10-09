self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('food-app-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/script.js',
        '/icon.png'
        // Add other files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});