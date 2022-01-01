const timestamp = 1640997939156;
const build = [
  "/soundboard/internal/start-d73bca8c.js",
  "/soundboard/internal/assets/start-61d1577b.css",
  "/soundboard/internal/pages/__layout.svelte-3185e07f.js",
  "/soundboard/internal/assets/pages/__layout.svelte-652eb3be.css",
  "/soundboard/internal/error.svelte-0c2c9d4c.js",
  "/soundboard/internal/pages/index.svelte-d9b59490.js",
  "/soundboard/internal/assets/pages/index.svelte-e87213a1.css",
  "/soundboard/internal/chunks/vendor-474fbf16.js"
];
const files = [
  "/soundboard/android-chrome-192x192.png",
  "/soundboard/android-chrome-512x512.png",
  "/soundboard/apple-touch-icon.png",
  "/soundboard/button_normal.png",
  "/soundboard/button_pressed.png",
  "/soundboard/favicon-16x16.png",
  "/soundboard/favicon-32x32.png",
  "/soundboard/favicon.ico",
  "/soundboard/favicon.png",
  "/soundboard/manifest.json",
  "/soundboard/robots.txt",
  "/soundboard/site.webmanifest",
  "/soundboard/sound/1990s-internet.mp3",
  "/soundboard/sound/26f8b9_sonic_ring_sound_effect.mp3",
  "/soundboard/sound/a-few-moments-later-hd.mp3",
  "/soundboard/sound/aint-nobody-got-time.mp3",
  "/soundboard/sound/all-stars-smash-mough.mp3",
  "/soundboard/sound/anime-wow-sound-effect_Q6Q4ech.mp3",
  "/soundboard/sound/bateria-tum-dum-tss.mp3",
  "/soundboard/sound/batman-transition-download-sound-link.mp3",
  "/soundboard/sound/batman.mp3",
  "/soundboard/sound/batman_on_drugs-1.mp3",
  "/soundboard/sound/birdtheword.swf.mp3",
  "/soundboard/sound/bongo-feet.mp3",
  "/soundboard/sound/buzzer.mp3",
  "/soundboard/sound/censor-beep-1.mp3",
  "/soundboard/sound/censor-beep-2.mp3",
  "/soundboard/sound/censor-beep-3.mp3",
  "/soundboard/sound/chewbacca.mp3",
  "/soundboard/sound/clapping.mp3",
  "/soundboard/sound/combobreaker.mp3",
  "/soundboard/sound/crack_the_whip.mp3",
  "/soundboard/sound/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3",
  "/soundboard/sound/crickets.mp3",
  "/soundboard/sound/cuek.mp3",
  "/soundboard/sound/ding-sound-effect_2.mp3",
  "/soundboard/sound/directed-by-robert-b_voI2Z4T.mp3",
  "/soundboard/sound/doh.mp3",
  "/soundboard/sound/dramatic.swf.mp3",
  "/soundboard/sound/dun-dun.mp3",
  "/soundboard/sound/elevator_2jN6tnc.mp3",
  "/soundboard/sound/epic-mealtime-crow-sound.mp3",
  "/soundboard/sound/epic-sax-guy-plays-for-57-minutes.mp3",
  "/soundboard/sound/epic.mp3",
  "/soundboard/sound/error_CDOxCYm.mp3",
  "/soundboard/sound/eye-of-the-tiger.mp3",
  "/soundboard/sound/family-feud-good-answer.mp3",
  "/soundboard/sound/ferris_bueller_chicka_chicka.mp3",
  "/soundboard/sound/finishhim.mp3",
  "/soundboard/sound/gayyy.mp3",
  "/soundboard/sound/gta-san-andreas-mission-complete-sound-hq.mp3",
  "/soundboard/sound/hitmarker_2.mp3",
  "/soundboard/sound/i-like-turtles.mp3",
  "/soundboard/sound/ill-be-back.mp3",
  "/soundboard/sound/jeopardy.mp3",
  "/soundboard/sound/ka-ching.mp3",
  "/soundboard/sound/kamehameha_dragon_ball.mp3",
  "/soundboard/sound/kids_cheering.mp3",
  "/soundboard/sound/legendary-za-warudo-road-roller-combo-mp3cut.mp3",
  "/soundboard/sound/mario-1-up.mp3",
  "/soundboard/sound/mario-jump.mp3",
  "/soundboard/sound/mario-star-power.mp3",
  "/soundboard/sound/mc-hammer-u-cant-touch-this.mp3",
  "/soundboard/sound/minecraft-hurt.mp3",
  "/soundboard/sound/mlg-air-horn.mp3",
  "/soundboard/sound/movie_1_C2K5NH0.mp3",
  "/soundboard/sound/no-god-please-no-noooooooooo.mp3",
  "/soundboard/sound/oh-yeah.mp3",
  "/soundboard/sound/over9000.mp3",
  "/soundboard/sound/owenwowson2.mp3",
  "/soundboard/sound/owenwowson3.mp3",
  "/soundboard/sound/owenwowson4.mp3",
  "/soundboard/sound/owenwowson5.mp3",
  "/soundboard/sound/please-stand-by-video-effect.mp3",
  "/soundboard/sound/punch.mp3",
  "/soundboard/sound/r2d2-doesnt-feel-that-good.mp3",
  "/soundboard/sound/saaaadaffleck.mp3",
  "/soundboard/sound/sad-trombone.mp3",
  "/soundboard/sound/seinfeld-theme_1.mp3",
  "/soundboard/sound/sexy_song_careless_whispers.mp3",
  "/soundboard/sound/sitcom-laughing.mp3",
  "/soundboard/sound/sneaky-snitch.mp3",
  "/soundboard/sound/snoop-dogg-base-instrumental-mp3cut.mp3",
  "/soundboard/sound/spongebob-dolphin-censor.mp3",
  "/soundboard/sound/starwars.mp3",
  "/soundboard/sound/success.mp3",
  "/soundboard/sound/surprise-motherfucka.mp3",
  "/soundboard/sound/taco-bell-bong.mp3",
  "/soundboard/sound/test-whip-crack.mp3",
  "/soundboard/sound/the-simpsons-nelsons-haha.mp3",
  "/soundboard/sound/tmpbxydyrz3.mp3",
  "/soundboard/sound/untitled-1_qPskhfn.mp3",
  "/soundboard/sound/whip-sound-effect-1.mp3",
  "/soundboard/sound/whip.mp3",
  "/soundboard/sound/wilhelmscream.mp3",
  "/soundboard/sound/wrong-answer-sound-effect.mp3",
  "/soundboard/sound/wrong.mp3",
  "/soundboard/svelte-welcome.png"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
