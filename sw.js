const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/script.js',
    '/imagens/icons/icon-144x144.png',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.4.1.slim.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
];

// Install service worker 
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// Activate event 
self.addEventListener('activate', evt => {
    //console.log('service worker has been activated');
});

// Fetch event
self.addEventListener('fetch', evt =>{
    //console.log("fetch event", evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
});