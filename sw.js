self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("gamelive-v1").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/register.html",
        "/home.html"
      ])
    )
  );
});
