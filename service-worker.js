const CACHE_NAME = "avatech-balloon-Pop-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./audio_files/Balloon-pop.mp3",
  "./audio_files/SoundHelix-Song-1.mp3"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
