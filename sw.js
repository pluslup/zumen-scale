// 図面スケール合わせ — offline cache
const CACHE = 'zumen-scale-f8648f19a4';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-180.png', 'icon-192.png', 'icon-512.png', 'pdf-lib.min.js', 'pdf.min.mjs', 'pdf.worker.min.mjs', '78-EUC-H.bcmap', '78-EUC-V.bcmap', '78-H.bcmap', '78-RKSJ-H.bcmap', '78-RKSJ-V.bcmap', '78-V.bcmap', '78ms-RKSJ-H.bcmap', '78ms-RKSJ-V.bcmap', '83pv-RKSJ-H.bcmap', '90ms-RKSJ-H.bcmap', '90ms-RKSJ-V.bcmap', '90msp-RKSJ-H.bcmap', '90msp-RKSJ-V.bcmap', '90pv-RKSJ-H.bcmap', '90pv-RKSJ-V.bcmap', 'Add-H.bcmap', 'Add-RKSJ-H.bcmap', 'Add-RKSJ-V.bcmap', 'Add-V.bcmap', 'Adobe-Japan1-0.bcmap', 'Adobe-Japan1-1.bcmap', 'Adobe-Japan1-2.bcmap', 'Adobe-Japan1-3.bcmap', 'Adobe-Japan1-4.bcmap', 'Adobe-Japan1-5.bcmap', 'Adobe-Japan1-6.bcmap', 'Adobe-Japan1-UCS2.bcmap', 'CGATS001Compat-v2-micro.icc', 'EUC-H.bcmap', 'EUC-V.bcmap', 'Ext-H.bcmap', 'Ext-RKSJ-H.bcmap', 'Ext-RKSJ-V.bcmap', 'Ext-V.bcmap', 'FoxitDingbats.pfb', 'FoxitFixed.pfb', 'FoxitFixedBold.pfb', 'FoxitFixedBoldItalic.pfb', 'FoxitFixedItalic.pfb', 'FoxitSerif.pfb', 'FoxitSerifBold.pfb', 'FoxitSerifBoldItalic.pfb', 'FoxitSerifItalic.pfb', 'FoxitSymbol.pfb', 'H.bcmap', 'Hankaku.bcmap', 'Hiragana.bcmap', 'Katakana.bcmap', 'LiberationSans-Bold.ttf', 'LiberationSans-BoldItalic.ttf', 'LiberationSans-Italic.ttf', 'LiberationSans-Regular.ttf', 'NWP-H.bcmap', 'NWP-V.bcmap', 'RKSJ-H.bcmap', 'RKSJ-V.bcmap', 'Roman.bcmap', 'UniJIS-UCS2-H.bcmap', 'UniJIS-UCS2-HW-H.bcmap', 'UniJIS-UCS2-HW-V.bcmap', 'UniJIS-UCS2-V.bcmap', 'UniJIS-UTF16-H.bcmap', 'UniJIS-UTF16-V.bcmap', 'UniJIS-UTF32-H.bcmap', 'UniJIS-UTF32-V.bcmap', 'UniJIS-UTF8-H.bcmap', 'UniJIS-UTF8-V.bcmap', 'UniJIS2004-UTF16-H.bcmap', 'UniJIS2004-UTF16-V.bcmap', 'UniJIS2004-UTF32-H.bcmap', 'UniJIS2004-UTF32-V.bcmap', 'UniJIS2004-UTF8-H.bcmap', 'UniJIS2004-UTF8-V.bcmap', 'UniJISPro-UCS2-HW-V.bcmap', 'UniJISPro-UCS2-V.bcmap', 'UniJISPro-UTF8-V.bcmap', 'UniJISX0213-UTF32-H.bcmap', 'UniJISX0213-UTF32-V.bcmap', 'UniJISX02132004-UTF32-H.bcmap', 'UniJISX02132004-UTF32-V.bcmap', 'V.bcmap', 'WP-Symbol.bcmap', 'jbig2.wasm', 'jbig2_nowasm_fallback.js', 'openjpeg.wasm', 'openjpeg_nowasm_fallback.js', 'qcms_bg.wasm', 'quickjs-eval.js', 'quickjs-eval.wasm'];
self.addEventListener('install', e => {
  // the app itself must cache; font maps / decoders are cached one by one so a single missing file can't block offline use
  const CORE = ['./','index.html','pdf.min.mjs','pdf.worker.min.mjs','pdf-lib.min.js'];
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(CORE).then(() => Promise.all(FILES.filter(f => !CORE.includes(f)).map(f => c.add(f).catch(() => null)))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).catch(() => caches.match('index.html'))));
});
