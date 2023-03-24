(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"a204347ee7810f7e6b2971dbd340d26b","url":"404.html"},{"revision":"9de5f20a096663d99e8cc0d98ec76132","url":"api/app/index.html"},{"revision":"64fb765cea5be1ebc9da72a37bdb13d2","url":"api/client/index.html"},{"revision":"be6f3583e7f3342d3726dad2f4cf596a","url":"api/constants/index.html"},{"revision":"6df40385e69e8e0a955e65b04be4e683","url":"api/ctx/index.html"},{"revision":"688d460e0ab09f1622e35b98d7177ed4","url":"api/fiber/index.html"},{"revision":"59949c2a64ff24e9586e0cde3ef3e170","url":"api/middleware/basicauth/index.html"},{"revision":"3267661f045e1da48d19249ce9d45960","url":"api/middleware/cache/index.html"},{"revision":"61afce8fe6de93f1ae8b927a7ec0a182","url":"api/middleware/compress/index.html"},{"revision":"7142130c64779f3cbe6d09640b6e99b3","url":"api/middleware/cors/index.html"},{"revision":"0f856ed01b7b219771765ec99ab49583","url":"api/middleware/csrf/index.html"},{"revision":"eb16771f0a1e03e5e0e49cb9deb682d3","url":"api/middleware/earlydata/index.html"},{"revision":"8b15659a2e26e5cf2effbde46b8ffd2c","url":"api/middleware/encryptcookie/index.html"},{"revision":"260e9341268c062a870ff08c2feec6e7","url":"api/middleware/envvar/index.html"},{"revision":"02c250a74894841bb33650bb683c5e80","url":"api/middleware/etag/index.html"},{"revision":"b11ab7c2a30c8d2c6f11833917bbd931","url":"api/middleware/expvar/index.html"},{"revision":"b1fc7121df294d85cc2ae3748d2be9ea","url":"api/middleware/favicon/index.html"},{"revision":"0106025fc3ba9abb83817999f8e7ccc1","url":"api/middleware/filesystem/index.html"},{"revision":"c7e0d805b293f695232da4edde1b19c0","url":"api/middleware/idempotency/index.html"},{"revision":"5e91adab9d89b9110e9d3c828a6823c4","url":"api/middleware/limiter/index.html"},{"revision":"d3741d1d486a07a1e46ea6105b5a56fd","url":"api/middleware/logger/index.html"},{"revision":"295d596400b2366664650a763fd37979","url":"api/middleware/monitor/index.html"},{"revision":"bd0392a3003a6b6acbdb01ba2b0592e1","url":"api/middleware/pprof/index.html"},{"revision":"604ba5e51060f005264adf8658afa341","url":"api/middleware/proxy/index.html"},{"revision":"fe6572904b32af4cd31ae8a8abae3906","url":"api/middleware/recover/index.html"},{"revision":"b198e3890520c0ed9ae6acbd6887ce56","url":"api/middleware/requestid/index.html"},{"revision":"cc3a0a10c487e6536a0c606645a51233","url":"api/middleware/session/index.html"},{"revision":"1f60281c1c1ea261b7c346974caf6510","url":"api/middleware/skip/index.html"},{"revision":"8672228cdac9d20d7d5107f714c9b57e","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"c06a68647ab78ca51548a442e4effb45","url":"assets/js/05e2dc8a.00ecbd1f.js"},{"revision":"d74dc9c045e3cf4bfc4c0349c78e6bba","url":"assets/js/089526fe.c8c8af33.js"},{"revision":"f2a15254a96c9869236dfcf6484f2806","url":"assets/js/0b8e8946.a5cd4a6a.js"},{"revision":"b60d3d044d0a8d6f3ba7324b392ba732","url":"assets/js/0c35ae3f.01e6869e.js"},{"revision":"a8cebeef437f6357362cb8682d73668a","url":"assets/js/0e384e19.f0031c26.js"},{"revision":"5ca5fc9f7cdd6fe63cc7ad52bdff6236","url":"assets/js/0f17a9fe.59ac1136.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"21413d0203169b3a18db649d7b654a4d","url":"assets/js/105f1242.7281ec54.js"},{"revision":"f97cb70095f2f8e57111fa83a9f25e89","url":"assets/js/14a7e971.edba6fbf.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"bd15e71b013440710b7de439c46527e2","url":"assets/js/1588a372.c01e9b66.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"f1f63cd9d27bf467298713aa947ad6f0","url":"assets/js/19e7c5f6.72bb5929.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"e5a37e84019563f944fdafe436d5fd7f","url":"assets/js/1a56c576.1706f65b.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"5f1f040795052a150cc641397a20d941","url":"assets/js/1ed4c90d.8bf39b80.js"},{"revision":"2e0118d27fcfbf8acffd420369b94153","url":"assets/js/20e81fa7.efc518e3.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"19e831502024db1efd44411c27df6f25","url":"assets/js/24847ea2.88688f6c.js"},{"revision":"2d13e81a1a3a696a1286f772fef08f83","url":"assets/js/26257c43.078d9358.js"},{"revision":"9406dc4361ff9c07daa51059e3e228c2","url":"assets/js/2bc33efd.1a1f3dae.js"},{"revision":"67b4da34b635b9821e7b8681806ea6ec","url":"assets/js/3201faa7.6e553164.js"},{"revision":"84ebf476be2ccc28efe2e20579c59c78","url":"assets/js/32778213.dcfe3b64.js"},{"revision":"b726fa5fb30a02890d817416ec947ebe","url":"assets/js/354823c1.244dd1f2.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"3dfabf559035a67ef6fa652d6c408003","url":"assets/js/37882858.24a6e330.js"},{"revision":"a42d32f603bfe664c022258ab07f6a9e","url":"assets/js/396a05ac.649d15b2.js"},{"revision":"8a7bbacd9e1e0231df03497c9785fe2d","url":"assets/js/411460cb.b0f38f66.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"0fcf7b29d3bb6d4a2aa624087339a059","url":"assets/js/41a4aef8.7ea29128.js"},{"revision":"4f46ffcc743c8e1873f0bbf4d605cfc6","url":"assets/js/44ea2a3d.109ecd19.js"},{"revision":"7f30b2e2266a7962a88f10b03ff140e6","url":"assets/js/48c6cc07.abcec063.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"8dd4bfd0997cd83010e23ea653e7ea91","url":"assets/js/4a9dde3b.84ac1634.js"},{"revision":"e2ef2c41b3dfc473883bc154150abe95","url":"assets/js/4b47f78b.6a724b2c.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"93f3ed4d5b67955e9b15006e7fe2d71f","url":"assets/js/5229ce75.a4bb2d48.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"98d56be8f242a2748f676c36d6a75636","url":"assets/js/563969e6.37787819.js"},{"revision":"c7f9ea79d4cf7624f57f4e269a6c3651","url":"assets/js/5995d508.a428caf0.js"},{"revision":"9802071f1e6958a8e77875652ebe4f01","url":"assets/js/59e3a47e.6faa0630.js"},{"revision":"70d9338e381a13ebbad7d1253d31f573","url":"assets/js/5aebd6e8.cea12b80.js"},{"revision":"5a2df64fe3705782d2a4ac5f75adf52f","url":"assets/js/5f49a855.1a0b7d2e.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"356f7c611ca78d1330a33411c6cf5851","url":"assets/js/683903ba.6685b633.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"3ed22715d81e9343b5511c523a1971d1","url":"assets/js/696e1f87.7ab73088.js"},{"revision":"dec92f1c101a0c065468b3ad578f0232","url":"assets/js/6b69f1ff.ed695883.js"},{"revision":"46b27535cdb0230299310ee38830c766","url":"assets/js/6e3111c2.98e42475.js"},{"revision":"3734b442104b62efab3a67b4d56ea2ac","url":"assets/js/6f9f0f49.33c37b2f.js"},{"revision":"5a1b1e776665d7627d2f4febe58ae6dc","url":"assets/js/72c9b8f6.18035baf.js"},{"revision":"062871a94f6f4cefdfc3e92760d48a98","url":"assets/js/7449d9ed.33d19f3d.js"},{"revision":"767eac42cf604d01400a09071ba89b16","url":"assets/js/7859bc5c.33919112.js"},{"revision":"1b063cf6b04918abaa329fc1ed69b088","url":"assets/js/78c6c509.bad5e954.js"},{"revision":"b25045d2ce6d8484b03d8b8c9f232d59","url":"assets/js/7998e0de.b1cb081b.js"},{"revision":"beb371eeddd2fbb7f4aceab083adb59c","url":"assets/js/7a7fff1b.82f582c8.js"},{"revision":"ee64a252ccc0ef9a9f709ffaefeb6e71","url":"assets/js/7e307fec.46d7e82a.js"},{"revision":"7e3e1c7a9f78331e47b00cc80666db76","url":"assets/js/800a3acf.3684ff01.js"},{"revision":"d772d57efc6937cd9fd13eb0097976cc","url":"assets/js/8231ac58.d939acb5.js"},{"revision":"a989d14785c685b01509638eb00a1974","url":"assets/js/82a52177.ad538d63.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"82f64e9fb376a86040e995592e449e8d","url":"assets/js/894f4d94.4f9c167d.js"},{"revision":"417aeafe77bfeb80076263a013b97504","url":"assets/js/8d52ac26.239c4c79.js"},{"revision":"0c379e0450bbe6572bd86b8e8d5f8a92","url":"assets/js/8ec8555c.b2aab969.js"},{"revision":"105cd03f2354eaf516a6de71fb88659b","url":"assets/js/9169002b.bdfddacd.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"63bd7a2b822eca27a9fbdf12456c80a6","url":"assets/js/935f2afb.0eae22ac.js"},{"revision":"3d2c30f4451258d189b3862672996070","url":"assets/js/9717e045.eee220d5.js"},{"revision":"43728bfb5d9884ffab601011a0321fad","url":"assets/js/9947fe9c.c1d1691c.js"},{"revision":"5181aadaf732654acfbd5c1eea7576d3","url":"assets/js/9a57fc4d.7153e992.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"5ebc8586d987da53e9d9a91d171895fa","url":"assets/js/9e17a0a7.508d86c2.js"},{"revision":"32e42ef521670da78eaa35971949fb49","url":"assets/js/a1a0db23.7553d367.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"1ef8624620d57b35555b224e6eac82ef","url":"assets/js/a98ab587.86b304c5.js"},{"revision":"882ec1b21989177aa8afd0b9740c9d43","url":"assets/js/b0ac2aab.b5548048.js"},{"revision":"2c8200c48364e23afe2bee4edb987798","url":"assets/js/b45514a6.58e86e45.js"},{"revision":"bd82a407c7c7e9f2e7f1591973203949","url":"assets/js/bafae794.c8f95fa2.js"},{"revision":"8c92a2036902691a6fda6a65c60b752e","url":"assets/js/c1bcbd07.ccc86f86.js"},{"revision":"df2e2f4913e9609a6ba7d0b71f1ed884","url":"assets/js/c36fa059.1cc821bd.js"},{"revision":"fef4d4ef401e728c010fa636adc3af51","url":"assets/js/c6147012.3cf1bd7b.js"},{"revision":"90f9ef4d27398acab0572974d89975d8","url":"assets/js/c91a29ee.db25816f.js"},{"revision":"f3739794250e3e7d2907e452d25658f0","url":"assets/js/c921e1c5.16b9c48f.js"},{"revision":"3e4b25f813ffdc53730fe39cffe8eed9","url":"assets/js/c9386115.45e391bf.js"},{"revision":"04bb181f94e5c371ae8b716eb9b6992c","url":"assets/js/ca4084cc.7bd7356b.js"},{"revision":"f05b7ccdae6715722f98aa28a3fff2b7","url":"assets/js/cd01922d.242d7100.js"},{"revision":"1bbe79477960ebf448d3ddc792ced896","url":"assets/js/ceb3afff.401f6abb.js"},{"revision":"43134d71f36d9d691f9a47d2a7ad5ee5","url":"assets/js/cf63ef8e.1c58f2b5.js"},{"revision":"34bc8b6146f2adefdfdd9a22c95880f7","url":"assets/js/d3f7bfd6.19cac9b3.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"acb249004b8e5b9cd010945b9230e5e6","url":"assets/js/d8d851c4.42945966.js"},{"revision":"8ac78e9448f562c1d6a0afc705241a71","url":"assets/js/dd6e99a2.8a6682d1.js"},{"revision":"40d61ab1a7c7c4bc68576bbcfe155feb","url":"assets/js/df7efcc1.7219484b.js"},{"revision":"311d90acbb3052e63d0b2b4edc8ac2c5","url":"assets/js/dfc29094.1383f215.js"},{"revision":"b3800bdd8fd1cdd4c8251ab3c9372bf0","url":"assets/js/e02ba15b.2956da5c.js"},{"revision":"23a74e4342df86e5141eb5f14747f95b","url":"assets/js/e3a7aa50.2f568822.js"},{"revision":"b1e95f2e0bc2d26697093bc781bed13d","url":"assets/js/e5c54bdb.99ae13fa.js"},{"revision":"4a49f6dce15056c79c6bd96ae152e77c","url":"assets/js/e77f4328.00417cea.js"},{"revision":"79a1cb0f75c34ea764972808642fd77d","url":"assets/js/e7e568e4.6db31a8f.js"},{"revision":"152d8a6a056de245733dc10a33f3a274","url":"assets/js/e9780dc4.23ea8f11.js"},{"revision":"13ce1d1aa5d2fe7429b82f6faef8eeeb","url":"assets/js/ee02910b.3fa4055c.js"},{"revision":"9b782eaa97c938f84c03f8ab5d0755c7","url":"assets/js/f2e0d9eb.b4810729.js"},{"revision":"c0a41fbe1c5f70ebba1fb6bd7703f78f","url":"assets/js/f36dee5a.36c93228.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"fa9cb381cadeadfca40b59096e006ee8","url":"assets/js/f740b2ca.38699007.js"},{"revision":"30649e26c0bf5ef6ff4755737e577e6c","url":"assets/js/f7cef55a.d00e1b09.js"},{"revision":"2494b9dfc4c9690c104ecbef106aed00","url":"assets/js/f9806908.c963c167.js"},{"revision":"90b4af032206b91768c75ff8b3766dd3","url":"assets/js/fba67bfa.d323aedc.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"f2dd18bf7c8728efc00057324601896b","url":"assets/js/fc970c7f.98c1f8de.js"},{"revision":"09d8c7544da2953314ddb27d14b5ee86","url":"assets/js/main.542dee3b.js"},{"revision":"5706d5427123fff98d031c08fe84d03d","url":"assets/js/runtime~main.dc3de128.js"},{"revision":"5b92385147c011d0506244cd19f51e4a","url":"category/-middleware/index.html"},{"revision":"70442da4af93657579916ece37770bd1","url":"category/api/index.html"},{"revision":"698e55af74023155383b24e2d8f4dafb","url":"category/extra/index.html"},{"revision":"7a0dab0d5cf4bae67d4e97a64a7ce8b4","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"ab2b670c6ab38d66a4c312e730427eff","url":"extra/benchmarks/index.html"},{"revision":"134203a436bc7042ce55e49beba7440e","url":"extra/faq/index.html"},{"revision":"733b38188337efcda9d95208c8673265","url":"guide/error-handling/index.html"},{"revision":"4367c645566b971d7a4c39d1c3a05692","url":"guide/faster-fiber/index.html"},{"revision":"84e974e10e6895b3f8d89be19482f66a","url":"guide/grouping/index.html"},{"revision":"c78647f11c23cbe98b59734b4213cd85","url":"guide/hooks/index.html"},{"revision":"ff562bd52d77b722aad1655ebb0c3ec6","url":"guide/routing/index.html"},{"revision":"b168f07335ede9be003c0d636d09eddc","url":"guide/templates/index.html"},{"revision":"63e00e620433410ea64d03d90f864f24","url":"guide/validation/index.html"},{"revision":"206838489f63644e3f99e0df11a6d4ff","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"ddcc9339a83351d09eb6d05e2b4e6017","url":"next/api/app/index.html"},{"revision":"c83d9d5852790cea6e22b66582aee47c","url":"next/api/client/index.html"},{"revision":"5961cbfb2cb17c7a08fc13bba3823493","url":"next/api/constants/index.html"},{"revision":"eac858370bcf2e8e07b23449eb876c6f","url":"next/api/ctx/index.html"},{"revision":"df47687f309844d8642b9db451ad619a","url":"next/api/fiber/index.html"},{"revision":"cb83d18674818628739a817ff3fe6463","url":"next/api/middleware/basicauth/index.html"},{"revision":"c1ab6380046e2e5b82ea8797cc58fb9e","url":"next/api/middleware/cache/index.html"},{"revision":"ac06d869d0b8ee4e08cb54946ee24ec1","url":"next/api/middleware/compress/index.html"},{"revision":"4939b8c47631c1c1dc7abe8c979647ed","url":"next/api/middleware/cors/index.html"},{"revision":"eb49c5c19cbf8a0ae81bd8b228910e3e","url":"next/api/middleware/csrf/index.html"},{"revision":"cc87d4c54661343f52b0d4752ea97619","url":"next/api/middleware/earlydata/index.html"},{"revision":"5037e03486dff6217fb6cc98e6bd91e2","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"cff2d373483d62664e215d1b8189e4e8","url":"next/api/middleware/envvar/index.html"},{"revision":"d0adb8705fb7be1d1c1c86fb5b851bb4","url":"next/api/middleware/etag/index.html"},{"revision":"1725b13e65b507eabbc85a8bc2a10173","url":"next/api/middleware/expvar/index.html"},{"revision":"ff66f7841bfb01047df1f62b343b12f0","url":"next/api/middleware/favicon/index.html"},{"revision":"66b97a104529f52d2f18265ad03d4b9c","url":"next/api/middleware/filesystem/index.html"},{"revision":"2eafe002abc8a7c29ef73e9ffabfea75","url":"next/api/middleware/idempotency/index.html"},{"revision":"c309a0d14307ed889f91f414791473fd","url":"next/api/middleware/limiter/index.html"},{"revision":"d68c058e89eda4931d11b7c7671fa93b","url":"next/api/middleware/logger/index.html"},{"revision":"0e558cbf8f2e4edf3e0adcf653f953d8","url":"next/api/middleware/monitor/index.html"},{"revision":"2a8067f982d2a2c47b4f00086f136768","url":"next/api/middleware/pprof/index.html"},{"revision":"be90529175db31355d0563b68933afb7","url":"next/api/middleware/proxy/index.html"},{"revision":"ea6eba649306c5615e81c093ff3e50f0","url":"next/api/middleware/recover/index.html"},{"revision":"f0ec2d5bc9f96707e2ae0ebf350b6a34","url":"next/api/middleware/requestid/index.html"},{"revision":"5b526cc34d0d5685e001c8630c75ce03","url":"next/api/middleware/session/index.html"},{"revision":"b2e977fca6beb06281e7f7778fd219b1","url":"next/api/middleware/skip/index.html"},{"revision":"00809f25ea1c206ce9161c94a7524696","url":"next/api/middleware/timeout/index.html"},{"revision":"00919e4cf5e91168ebe28093311d29e3","url":"next/category/-middleware/index.html"},{"revision":"e21230f4eab168f9e41e6d24292c0898","url":"next/category/api/index.html"},{"revision":"e2e62d8db051558e08e4226d38376ca9","url":"next/category/extra/index.html"},{"revision":"1881b0826762c876b6cef7662c615583","url":"next/category/guide/index.html"},{"revision":"bd73d17b1bf62c02c1f064bcdd528433","url":"next/extra/benchmarks/index.html"},{"revision":"64038ad479c24412b67fa84d712ff941","url":"next/extra/faq/index.html"},{"revision":"21158e721294c271f1e7e97a6b1e3fc2","url":"next/guide/error-handling/index.html"},{"revision":"5b8ee6b6ae1321281eaa4c35303176ce","url":"next/guide/faster-fiber/index.html"},{"revision":"bcf0188480100dae297e9a51d73c469d","url":"next/guide/grouping/index.html"},{"revision":"f1ffe9bd222e8049f65647581fe9bc94","url":"next/guide/hooks/index.html"},{"revision":"3aad9d02e28c23bb55f2b42b60a46d50","url":"next/guide/routing/index.html"},{"revision":"b8fc2af33281be5832e791feefc9df17","url":"next/guide/templates/index.html"},{"revision":"be8511aa5b81b0a4615036a4b67be5ad","url":"next/guide/validation/index.html"},{"revision":"801e122c4eb83cd8291d889dfe321859","url":"next/index.html"},{"revision":"e9aa042c6acebbf85defc4920a688458","url":"next/partials/routing/route-handlers/index.html"},{"revision":"d288ed208198c9da4ac89402c5fbdd5d","url":"next/search-index.json"},{"revision":"c3abed4c5306239c383f088ff0fdf011","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"552082ec7ee30698aee1793a3d4d596f","url":"search-index.json"},{"revision":"e037615a5f3138dec9dacfd7e993317f","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"7381cc262d4e2cc5ddc6410acb409925","url":"v1.x/api/app/index.html"},{"revision":"56b6b1bd69959fa056ca39a10cf1d535","url":"v1.x/api/ctx/index.html"},{"revision":"f567bb98ac0bd8cd86ca5544c7757bdc","url":"v1.x/api/middleware/index.html"},{"revision":"621bf75f2534b31a9e980c0f9815f6f3","url":"v1.x/category/api/index.html"},{"revision":"9703340a0b43f4ad166c1c89d89a7b9d","url":"v1.x/category/guide/index.html"},{"revision":"fe8545c801ffcf23be5b634480539b87","url":"v1.x/category/misc/index.html"},{"revision":"893049a84256c497a3143d506e353923","url":"v1.x/guide/error-handling/index.html"},{"revision":"b304539ad54a4d8ea923a5b99fa59e91","url":"v1.x/guide/grouping/index.html"},{"revision":"2732d13b9ca98e53d2d53bad986634c8","url":"v1.x/guide/routing/index.html"},{"revision":"5ba6126c49a628b80ee6f14ecf037bee","url":"v1.x/guide/templates/index.html"},{"revision":"c6e4f7adddc48bb75f1d7068a8961df0","url":"v1.x/guide/validating/index.html"},{"revision":"da2b94746b4108a8948145b235a7d6af","url":"v1.x/index.html"},{"revision":"a3796d2a7e89174460459f15e0bc7a93","url":"v1.x/misc/benchmarks/index.html"},{"revision":"83daa43ff9a988a28b8f313645fc2a3f","url":"v1.x/misc/faq/index.html"},{"revision":"01aab3c1d582066274744984c7b464a3","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();