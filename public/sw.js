if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let i = {};
    const r = (e) => c(e, t),
      d = { module: { uri: t }, exports: i, require: r };
    s[t] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (n(...e), i));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/130-f4cd4725b67894dc.js",
          revision: "f4cd4725b67894dc",
        },
        {
          url: "/_next/static/chunks/23918f63-2b19dafa14d1223c.js",
          revision: "2b19dafa14d1223c",
        },
        {
          url: "/_next/static/chunks/2852872c-c47390737640bac3.js",
          revision: "c47390737640bac3",
        },
        {
          url: "/_next/static/chunks/304-8dd93cedab9c9e82.js",
          revision: "8dd93cedab9c9e82",
        },
        {
          url: "/_next/static/chunks/3f06fcd6-02afaaf051808cb1.js",
          revision: "02afaaf051808cb1",
        },
        {
          url: "/_next/static/chunks/519-81e90e403a41c337.js",
          revision: "81e90e403a41c337",
        },
        {
          url: "/_next/static/chunks/5727625e-71c1843195a7cb19.js",
          revision: "71c1843195a7cb19",
        },
        {
          url: "/_next/static/chunks/646e0218-559cebb778d9cdf4.js",
          revision: "559cebb778d9cdf4",
        },
        {
          url: "/_next/static/chunks/68c0a17d-3ab687d5651b0404.js",
          revision: "3ab687d5651b0404",
        },
        {
          url: "/_next/static/chunks/6b2193de-458f5998e9ab6245.js",
          revision: "458f5998e9ab6245",
        },
        {
          url: "/_next/static/chunks/7112840a-a2522d62c62b497d.js",
          revision: "a2522d62c62b497d",
        },
        {
          url: "/_next/static/chunks/75fc9c18-677b9b304ed99070.js",
          revision: "677b9b304ed99070",
        },
        {
          url: "/_next/static/chunks/cb355538-bbfb05e155d3548f.js",
          revision: "bbfb05e155d3548f",
        },
        {
          url: "/_next/static/chunks/cfaebb58-274e29574afcd284.js",
          revision: "274e29574afcd284",
        },
        {
          url: "/_next/static/chunks/e21e5bbe-d97e0983c7ac7228.js",
          revision: "d97e0983c7ac7228",
        },
        {
          url: "/_next/static/chunks/ebc70433-51e812c5900da6d8.js",
          revision: "51e812c5900da6d8",
        },
        {
          url: "/_next/static/chunks/f8f44001-69d29fb5f6d34def.js",
          revision: "69d29fb5f6d34def",
        },
        {
          url: "/_next/static/chunks/fea29d9f-6de431f4004814c2.js",
          revision: "6de431f4004814c2",
        },
        {
          url: "/_next/static/chunks/framework-ecc4130bc7a58a64.js",
          revision: "ecc4130bc7a58a64",
        },
        {
          url: "/_next/static/chunks/main-b002bf463eff310a.js",
          revision: "b002bf463eff310a",
        },
        {
          url: "/_next/static/chunks/pages/_app-a7e2d84213bc89e5.js",
          revision: "a7e2d84213bc89e5",
        },
        {
          url: "/_next/static/chunks/pages/_error-77823ddac6993d35.js",
          revision: "77823ddac6993d35",
        },
        {
          url: "/_next/static/chunks/pages/admin-c86c7a0ef04c6d8e.js",
          revision: "c86c7a0ef04c6d8e",
        },
        {
          url: "/_next/static/chunks/pages/auth-5333d94ac2716554.js",
          revision: "5333d94ac2716554",
        },
        {
          url: "/_next/static/chunks/pages/chat-06da09abc2c3d96e.js",
          revision: "06da09abc2c3d96e",
        },
        {
          url: "/_next/static/chunks/pages/index-0be817ccab219260.js",
          revision: "0be817ccab219260",
        },
        {
          url: "/_next/static/chunks/pages/join-e6000dbf6044ea87.js",
          revision: "e6000dbf6044ea87",
        },
        {
          url: "/_next/static/chunks/pages/users-a7e2ad656132f507.js",
          revision: "a7e2ad656132f507",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-18e1e020f3fa96ee.js",
          revision: "18e1e020f3fa96ee",
        },
        {
          url: "/_next/static/css/127e0dd224536edd.css",
          revision: "127e0dd224536edd",
        },
        {
          url: "/_next/static/css/2f71e0d51b6954c9.css",
          revision: "2f71e0d51b6954c9",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/_next/static/uD5Qai4-NNiSlF11jyqg5/_buildManifest.js",
          revision: "a67aa39d9f894beee96fdd1ea9bac3a1",
        },
        {
          url: "/_next/static/uD5Qai4-NNiSlF11jyqg5/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        { url: "/manifest.json", revision: "32b0756eccfe3708567058ed0d5da96f" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
