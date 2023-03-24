(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"565245895b53d167925351f4bf1d4e20","url":"404.html"},{"revision":"bd23b96d9df59301427536cab1f7c513","url":"api/app/index.html"},{"revision":"4bea836cdd73ec1f54bd8f892eaee904","url":"api/client/index.html"},{"revision":"9635a01a39cc27e84d1bf15fa45d2442","url":"api/constants/index.html"},{"revision":"944a43a0d585a86888cb1d2ea677586c","url":"api/ctx/index.html"},{"revision":"281635d2b7ec34c0d75a5beced4c255c","url":"api/fiber/index.html"},{"revision":"b86546357108ea7060e07136248d42e6","url":"api/middleware/basicauth/index.html"},{"revision":"8128e3e21490bf9958734b16a73a5e54","url":"api/middleware/cache/index.html"},{"revision":"8f02dafc3cc5814f40a042bf0b04996d","url":"api/middleware/compress/index.html"},{"revision":"d1600b054307060076e29ec31a02884d","url":"api/middleware/cors/index.html"},{"revision":"ff8112a00262d25273656d8b7d54c69a","url":"api/middleware/csrf/index.html"},{"revision":"193a38b85e765d8c6a78ebca41078a16","url":"api/middleware/earlydata/index.html"},{"revision":"1b2e3afbb0e6d1d9fd1fb56f30481113","url":"api/middleware/encryptcookie/index.html"},{"revision":"f704cf351d3fefdc9987c7ad234853f0","url":"api/middleware/envvar/index.html"},{"revision":"4f24f10239c049c00d97e19d5d6b946c","url":"api/middleware/etag/index.html"},{"revision":"25504c58881309a984a0174cd63be561","url":"api/middleware/expvar/index.html"},{"revision":"05249814bc3a9bfc20193323ad23bbe6","url":"api/middleware/favicon/index.html"},{"revision":"71f169f3050fc9f244048c584a51c7ff","url":"api/middleware/filesystem/index.html"},{"revision":"6d0d22233cbb6d92ff162e8f965481bd","url":"api/middleware/idempotency/index.html"},{"revision":"98cb5d9e4744b1a27cacb0d09201593c","url":"api/middleware/limiter/index.html"},{"revision":"c7efe930a84943bd2cb8eef642093371","url":"api/middleware/logger/index.html"},{"revision":"537dd89257592c34c82e00f07e7d0ce7","url":"api/middleware/monitor/index.html"},{"revision":"391e054225c868a4f3575d188ce72a8f","url":"api/middleware/pprof/index.html"},{"revision":"754c23f59b494aa66da320d5e78b657e","url":"api/middleware/proxy/index.html"},{"revision":"c825c1e1d066d511902382f7ca7bd5b3","url":"api/middleware/recover/index.html"},{"revision":"ab88af2ecb69a395706d4c14e1740fe0","url":"api/middleware/requestid/index.html"},{"revision":"400cb13f4a0e2d8396942648dcc9d914","url":"api/middleware/session/index.html"},{"revision":"08b60cd19d71dbcfb7e2e07fffacca05","url":"api/middleware/skip/index.html"},{"revision":"437355fa74580d0bdaf096ab008cc6e2","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"202ec2be015ad5b4db596e8831b831e0","url":"assets/js/05e2dc8a.f35e39c9.js"},{"revision":"03a43fc6070510fa36f7ed75825d1a17","url":"assets/js/089526fe.dff86ab0.js"},{"revision":"75e7263521935148e6f79cdfd66f67ed","url":"assets/js/0b8e8946.37391ad5.js"},{"revision":"06191ba86d4faf3e45eaeed7b4cff5c0","url":"assets/js/0c35ae3f.2bb68dbd.js"},{"revision":"7cd720ffa89e75d3d2a45d0b8c75639a","url":"assets/js/0e384e19.8fcea870.js"},{"revision":"d4d47ed13fc0843adb9b70dd44505a88","url":"assets/js/0f17a9fe.7e0a4b9f.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"d13439538a8b1c2038439da6c027b032","url":"assets/js/105f1242.554535c0.js"},{"revision":"f79db243dad0344803ac4c36bbdb5698","url":"assets/js/14a7e971.6818c75d.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"c70d0884b2e704810c980bed808cae63","url":"assets/js/1588a372.811b8de5.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"f7c19312304f00239b5a5dc5ae231ee4","url":"assets/js/19e7c5f6.386d89b9.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"cdc340bb281bd7f75ec8b26cd4cbe7d7","url":"assets/js/1a56c576.cadbbadc.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"b26a76ad9ab949ee02088cd8a87d31de","url":"assets/js/1ed4c90d.fbb7899e.js"},{"revision":"d51eddb6f856d3ddbaa83e846849412f","url":"assets/js/20e81fa7.11b4f29e.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"9d31ea095e7c0ba5c52837d64b00e28e","url":"assets/js/24847ea2.6349e6bd.js"},{"revision":"5dfb89e2cf709a2754d2180c0c34f96a","url":"assets/js/26257c43.61bbdc45.js"},{"revision":"27bda2e730237c9e62ae0b078024263b","url":"assets/js/2bc33efd.17cd7268.js"},{"revision":"bb72829cf86cee38b9865c9c51a8d560","url":"assets/js/3201faa7.ab365d8a.js"},{"revision":"f792eb9db0f55b59531ee5fdb96e34aa","url":"assets/js/32778213.72ea6769.js"},{"revision":"6ad83b2d7fde2bc59d40957a1a853aae","url":"assets/js/354823c1.4723274d.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"76b2d84e2cc7cbebfaf3daa62a04d9ad","url":"assets/js/37882858.4f3e98b3.js"},{"revision":"b85bd959a8bc6dd00ebb31ab8d8958b8","url":"assets/js/396a05ac.1768ce68.js"},{"revision":"4025800b2d8dfd07b6eecbc7fa9d76ec","url":"assets/js/411460cb.60bda14a.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"4b7805d83c19bbfb5ee47332a501c253","url":"assets/js/41a4aef8.4f48c801.js"},{"revision":"9195d184affd13ec1a0f39ab3f2568a2","url":"assets/js/44ea2a3d.deda3c86.js"},{"revision":"a1bf7c0c10c32be1392954208c2f3316","url":"assets/js/48c6cc07.fe49866f.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"ff0745af6f04d324dee3eef4d0b08f64","url":"assets/js/4a9dde3b.b753a1e5.js"},{"revision":"8765d9e233264743ccffa21d85549690","url":"assets/js/4b47f78b.31322d11.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"da6e0e94506963d278a119afd70e80ad","url":"assets/js/5229ce75.051d3d0f.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"ee304b75a2edfd7cf984f71593a944f6","url":"assets/js/563969e6.17c3389c.js"},{"revision":"3796aff712210b861a3837a041e371a3","url":"assets/js/5995d508.e2d5d613.js"},{"revision":"5523488d12f507ef104f509b75e94870","url":"assets/js/59e3a47e.58e66e21.js"},{"revision":"36a102df505414bb0672d272ea315c72","url":"assets/js/5aebd6e8.c0454428.js"},{"revision":"7bfb9554c6887ae69891716c0e3f5519","url":"assets/js/5f49a855.eb560173.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"8de677f836a8761dc2867993b1dda7f8","url":"assets/js/683903ba.256c86ee.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"96988bad972cf14ced87a7deeb5708d9","url":"assets/js/696e1f87.2f3f472a.js"},{"revision":"10d880d06f18119792f202cb49e2478c","url":"assets/js/6b69f1ff.28839744.js"},{"revision":"b325c2e1726477d20d8d03a3f14777aa","url":"assets/js/6e3111c2.f39b3897.js"},{"revision":"ccf5b66ea50c0e5cad0f55ca336a8d86","url":"assets/js/6f9f0f49.a75a8d2a.js"},{"revision":"b052e3dd366d9f1922b6c09ad4690ba6","url":"assets/js/72c9b8f6.22882b4b.js"},{"revision":"f32b71663aa61a65c27234a84abc8d9c","url":"assets/js/7449d9ed.e0f13efe.js"},{"revision":"61d6ebe430212bc1b56104d5b516294e","url":"assets/js/7859bc5c.22ae456a.js"},{"revision":"20fb57d8a9a547dcacadf22149e3c323","url":"assets/js/78c6c509.7d07eb5e.js"},{"revision":"c9accd473a8654b38dc6ebec860c7182","url":"assets/js/7998e0de.e7229775.js"},{"revision":"9eeea0590bd93c01cf84c6a2526f7dc4","url":"assets/js/7a7fff1b.13672b7e.js"},{"revision":"df6a077127cf7b7c670b65cb9f517688","url":"assets/js/7e307fec.fac5a510.js"},{"revision":"45de860e327c0fde15baf5bf173fc326","url":"assets/js/800a3acf.d7ba8691.js"},{"revision":"8f70dc2378cbffbaca23a41a8b41e0ce","url":"assets/js/8231ac58.ac238005.js"},{"revision":"d89bc05be3a2ae54d3381b8c679962fb","url":"assets/js/82a52177.c62cf1c5.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"4aa6b9b4775e540f31afd100887a4334","url":"assets/js/894f4d94.a8b305b8.js"},{"revision":"95bc61d37d5e1dc5c9bdd0e0d6baff09","url":"assets/js/8d52ac26.06118c7b.js"},{"revision":"80047fccd27b1d25a51425269e1fafd6","url":"assets/js/8ec8555c.bc205671.js"},{"revision":"4bb2e73d5fbb2f1ea33dce11afa2518f","url":"assets/js/9169002b.8fa952f0.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"63bd7a2b822eca27a9fbdf12456c80a6","url":"assets/js/935f2afb.0eae22ac.js"},{"revision":"7644af95e364902d0e33bc9708990588","url":"assets/js/9717e045.de87d387.js"},{"revision":"635383a6b94d54f95bb31ea8854492b0","url":"assets/js/9947fe9c.204cd5d0.js"},{"revision":"9c6fe662e3de72a73da6aace3bb374c6","url":"assets/js/9a57fc4d.af97bf50.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"5e433c366bf756277cb539c6a7f0bba8","url":"assets/js/9e17a0a7.132722cb.js"},{"revision":"17e0a9b62119866dda504cc581756615","url":"assets/js/a1a0db23.dc94465b.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"f427b1ccc001dfd424cac379eb8d76e8","url":"assets/js/a98ab587.d9271b0b.js"},{"revision":"8f74a6513a29db7e6bf7aa52536ab2b3","url":"assets/js/b0ac2aab.7cca278e.js"},{"revision":"77e557a33712aa1bfa3396b77374e904","url":"assets/js/b45514a6.cf162eff.js"},{"revision":"71a48a582cb29513760de9eec688d0ae","url":"assets/js/bafae794.5cfa88d2.js"},{"revision":"59052382e313df7ad6ba8f562bdc35d2","url":"assets/js/c1bcbd07.798da08b.js"},{"revision":"bbec7054f2bf5aa3301940388894e0dc","url":"assets/js/c36fa059.642423a4.js"},{"revision":"8db0574dcad053611ed5b5fb566e79bd","url":"assets/js/c6147012.36ebad27.js"},{"revision":"1f949fe7717e9f6aed80190e1bd85853","url":"assets/js/c91a29ee.d38597e4.js"},{"revision":"82e82ad3402450f69a661d496e5e2507","url":"assets/js/c921e1c5.572d9934.js"},{"revision":"f56bbf45d4db15726f1721b4d1626970","url":"assets/js/c9386115.56407d59.js"},{"revision":"f479911978b4cfe644b5596efb0660fb","url":"assets/js/ca4084cc.c826fc3a.js"},{"revision":"28ddfb07c49dfd6fffd4f828961f79d9","url":"assets/js/cd01922d.57c8476e.js"},{"revision":"123fee97fddc2602e47a68e36386e7b8","url":"assets/js/ceb3afff.a6e9f6ac.js"},{"revision":"d01343922633040d8683add829e8f3fb","url":"assets/js/cf63ef8e.294647b6.js"},{"revision":"2e1cf9beb14dda99ef9e1c120677dbf9","url":"assets/js/d3f7bfd6.3f023a03.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"81d25a094cfa4c2a239d27db5a727a83","url":"assets/js/d8d851c4.1d9eb7a8.js"},{"revision":"5d84dedbd7e04dbf271d13036bf04c8c","url":"assets/js/dd6e99a2.b021ffb8.js"},{"revision":"d3ac4cd74ecd0a9c0e41590a6ca259c1","url":"assets/js/df7efcc1.1d20dc66.js"},{"revision":"9ae43a047bd551fb9864482208c4ea20","url":"assets/js/dfc29094.e1bcb660.js"},{"revision":"39f84fb8239f0391efbe415d526ec82a","url":"assets/js/e02ba15b.9cc5f30b.js"},{"revision":"fdf261e34bb363acec4cb327fd6b869c","url":"assets/js/e3a7aa50.656a7485.js"},{"revision":"d9c0963482f5bf7da5e223d00f58bb03","url":"assets/js/e5c54bdb.de701512.js"},{"revision":"17ae190b6989aca8abb6edcf93ddbaf4","url":"assets/js/e77f4328.3bfba8b4.js"},{"revision":"d905ae66f27fd0265110a9977550526e","url":"assets/js/e7e568e4.0c69441c.js"},{"revision":"e85523c384ad099222a962c26f6ee8a0","url":"assets/js/e9780dc4.5d9c8f26.js"},{"revision":"29ddb1decd0d3e09685a3b1789098f0c","url":"assets/js/ee02910b.8aa794f9.js"},{"revision":"b534a7597a6fb24f8687dbe428f9885b","url":"assets/js/f2e0d9eb.a55ab83e.js"},{"revision":"182ed835e3988f00ca3fc09e81950e5c","url":"assets/js/f36dee5a.523eb9f0.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"fa9cb381cadeadfca40b59096e006ee8","url":"assets/js/f740b2ca.38699007.js"},{"revision":"4e5f8bf2e8270cac234d2bdbcfdb2263","url":"assets/js/f7cef55a.81e3cde5.js"},{"revision":"0fc96ee9039ac387651b1dd5cdafa11c","url":"assets/js/f9806908.2f491839.js"},{"revision":"5682b3828b8c6ff17c9fa4f05d3d770e","url":"assets/js/fba67bfa.4328d3d4.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"922a0e5b2feabba13eebe9dff551cf42","url":"assets/js/fc970c7f.fcf8db9a.js"},{"revision":"524468a280ddbcd4e83f94357078b086","url":"assets/js/main.d9cc29bd.js"},{"revision":"1838c9a6f853e598faa05e7bf92ea290","url":"assets/js/runtime~main.7ecca9c6.js"},{"revision":"ea59f408ef07dd70f8fff2aef43f87f9","url":"category/-middleware/index.html"},{"revision":"f02c646ccd74c7608f40d6ce8ddcd515","url":"category/api/index.html"},{"revision":"58952eaea45268dfae148ef171e62f90","url":"category/extra/index.html"},{"revision":"7dd50763b096d859539d351c39a190c9","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"1baea4be6966b11bda6340ee2240edbd","url":"extra/benchmarks/index.html"},{"revision":"a57388ddb30123372f3bf3fe624d605a","url":"extra/faq/index.html"},{"revision":"84aba9e197ee625aba97d73996c7133c","url":"guide/error-handling/index.html"},{"revision":"d98932f17030ed98baf1eac936625ca4","url":"guide/faster-fiber/index.html"},{"revision":"c617ff491dd2f7dc59cd1ef2ee57ecae","url":"guide/grouping/index.html"},{"revision":"f9aea351b067f87f4af10778f8cf7b68","url":"guide/hooks/index.html"},{"revision":"5876b7b2d1f247ebbee8a52c6abd3254","url":"guide/routing/index.html"},{"revision":"1db7cac5332c19498453cc3c077cbe2b","url":"guide/templates/index.html"},{"revision":"90fdca93f625abed2a74ae55a78f739a","url":"guide/validation/index.html"},{"revision":"45205e5c392542463f168f5ed90587cb","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"3fe73f9947d6fe0d9690b446b3298f9e","url":"next/api/app/index.html"},{"revision":"0b964fc3878c79a46e9e90174d5504b9","url":"next/api/client/index.html"},{"revision":"d8cd56955df453bd25938b7cfa160321","url":"next/api/constants/index.html"},{"revision":"911d03ea01e0fca5f681ed1338957689","url":"next/api/ctx/index.html"},{"revision":"36fb0cedd4b2d8e665e6ece4dcf50627","url":"next/api/fiber/index.html"},{"revision":"d2c590643c11e06d417197c731850713","url":"next/api/middleware/basicauth/index.html"},{"revision":"ee5b04b4993ed21253b690867f6001f1","url":"next/api/middleware/cache/index.html"},{"revision":"ad2891c9e7ee268d386a697fc7b2f290","url":"next/api/middleware/compress/index.html"},{"revision":"66972bf78a1f9cf860aa056f10b305cc","url":"next/api/middleware/cors/index.html"},{"revision":"7add33140fd9b07e7e22534b00f17556","url":"next/api/middleware/csrf/index.html"},{"revision":"2439b7013d58a3bdb62828354cee90f6","url":"next/api/middleware/earlydata/index.html"},{"revision":"03cb2cdac03f128e697d01a50b421c48","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"037069eafd87cad7eacd74de7b45c23d","url":"next/api/middleware/envvar/index.html"},{"revision":"f5bcf85bef9c5d5a98b4f3b6fc9a7b29","url":"next/api/middleware/etag/index.html"},{"revision":"f1c82010efb71300eb5ca1e9073daead","url":"next/api/middleware/expvar/index.html"},{"revision":"55903c612ec24e04052de4cbb2bbefe2","url":"next/api/middleware/favicon/index.html"},{"revision":"c20477c8327826bef3b6e100f6d618dd","url":"next/api/middleware/filesystem/index.html"},{"revision":"b34663b036eb4c1e0d908cf14c3da5ce","url":"next/api/middleware/idempotency/index.html"},{"revision":"e2b797fa776fe2ceac4e532c7016a078","url":"next/api/middleware/limiter/index.html"},{"revision":"af35c415167127a1c280de7483524ef5","url":"next/api/middleware/logger/index.html"},{"revision":"030eb89409e19b3ec45b02d068143747","url":"next/api/middleware/monitor/index.html"},{"revision":"9df167dc6ff97db4861518b352d4d2e1","url":"next/api/middleware/pprof/index.html"},{"revision":"d085ac404b98813631b64b0e0b5ac1d3","url":"next/api/middleware/proxy/index.html"},{"revision":"d91f2564d6139b85cbdef26da1e2e921","url":"next/api/middleware/recover/index.html"},{"revision":"ce4332effbd161f357353e7f7b675bd2","url":"next/api/middleware/requestid/index.html"},{"revision":"3f38b19ffe16728483e12efd0ad4bb51","url":"next/api/middleware/session/index.html"},{"revision":"2460f6244116cfb06eedd17215e5d979","url":"next/api/middleware/skip/index.html"},{"revision":"fb695f23ba9566a428cd42dd05ef2381","url":"next/api/middleware/timeout/index.html"},{"revision":"5ef841e51a0f26fd9f066eb88cb71e4b","url":"next/category/-middleware/index.html"},{"revision":"6341f19d71422a407131ccb2c24fa6d5","url":"next/category/api/index.html"},{"revision":"819f33977ce0de8ca00dd5d76a1db5e7","url":"next/category/extra/index.html"},{"revision":"ab721e5fa3220e3a06a7997464243de4","url":"next/category/guide/index.html"},{"revision":"e8cbac6af5f4f2abfed3ad17b9aec835","url":"next/extra/benchmarks/index.html"},{"revision":"c547751260cfc9a37a1e5e3de504ee16","url":"next/extra/faq/index.html"},{"revision":"f262e4afd3892d9b3fa38b2929a65639","url":"next/guide/error-handling/index.html"},{"revision":"7c6c592302374f8d08ecb7c490bd61b4","url":"next/guide/faster-fiber/index.html"},{"revision":"a7a4e5d6bdbb9f57c039380339725f50","url":"next/guide/grouping/index.html"},{"revision":"7a0248741156b8508bd2edc46e63f9eb","url":"next/guide/hooks/index.html"},{"revision":"0acd085069d6badde8e3ec5a5bf2fe89","url":"next/guide/routing/index.html"},{"revision":"ca316c7426213d738d5ccda842721617","url":"next/guide/templates/index.html"},{"revision":"342147074b672f93ff91a99e6d136c28","url":"next/guide/validation/index.html"},{"revision":"570238b9784e4e4e18aae0c872fdc289","url":"next/index.html"},{"revision":"b2db4087df33f387703edd7f80e23654","url":"next/partials/routing/route-handlers/index.html"},{"revision":"981e431a9ebe8e7f57377e237b7556cb","url":"next/search-index.json"},{"revision":"1b3d7c3bbc658e118c1215c0e66dbdca","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"6f7fca37ccbd96ccc28856534bb25c6f","url":"search-index.json"},{"revision":"42ef1d4c09fcf7bb8664cd8988102d68","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"8308ad3012fb23d9d4ac0f90657bb92a","url":"v1.x/api/app/index.html"},{"revision":"23c5d6bf29f54f896071e0846faf90da","url":"v1.x/api/ctx/index.html"},{"revision":"ed6f804d028ed178386e94678b331ea6","url":"v1.x/api/middleware/index.html"},{"revision":"1f6a978325207465650b84ffcf789b3d","url":"v1.x/category/api/index.html"},{"revision":"3f984b4f111dcc4c83b3f050b77311b4","url":"v1.x/category/guide/index.html"},{"revision":"69a64b383a1bd0ca8cdce995463da597","url":"v1.x/category/misc/index.html"},{"revision":"0aa6743d84278055252831614c6ce09c","url":"v1.x/guide/error-handling/index.html"},{"revision":"b9005f5a26b1ef227efe2a216d687237","url":"v1.x/guide/grouping/index.html"},{"revision":"60c4d3f8895f2cfdee92e54dd9539517","url":"v1.x/guide/routing/index.html"},{"revision":"be7dc295cb7f95f250fd26d4ed7646c6","url":"v1.x/guide/templates/index.html"},{"revision":"d9c0344cadfce79e58763c5b11f745bf","url":"v1.x/guide/validating/index.html"},{"revision":"54e763c1b2c03226c715dc61f3425f19","url":"v1.x/index.html"},{"revision":"840c19ccf21c6025879a72b55bac7057","url":"v1.x/misc/benchmarks/index.html"},{"revision":"f10ef3f2d3fc32c2974cae3a1c5173cb","url":"v1.x/misc/faq/index.html"},{"revision":"ea8ddd225ef7c83dddff7a2e3e3fa707","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();