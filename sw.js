(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"e4a6c6b3300e8062d316cba86944707d","url":"404.html"},{"revision":"454671999c554438fc3e48f3726a54ba","url":"api/app/index.html"},{"revision":"44f478a7a5685aa14939259558b68488","url":"api/client/index.html"},{"revision":"b7bfd2bf08ec3bb3067a6428fa4fbcf3","url":"api/constants/index.html"},{"revision":"0e52a7335ac9c0cd3238a7f7364208c3","url":"api/ctx/index.html"},{"revision":"22679ee16e270b5dc4664825821924ee","url":"api/fiber/index.html"},{"revision":"852d7a73d2dae92797fc9b463cfc8c55","url":"api/middleware/basicauth/index.html"},{"revision":"a03bcf6cad3c7ba90e328ffb0d98075c","url":"api/middleware/cache/index.html"},{"revision":"4a08bdb4bee40518ddc6a32a6e09f17d","url":"api/middleware/compress/index.html"},{"revision":"f27569646a8532dcba7f095441ed5aaa","url":"api/middleware/cors/index.html"},{"revision":"e84dcac38cfa509ecb222bc3424f5ad5","url":"api/middleware/csrf/index.html"},{"revision":"55bc41070de56a0560d660a7164e8898","url":"api/middleware/earlydata/index.html"},{"revision":"dd143069f30d3d797384442aebe542d7","url":"api/middleware/encryptcookie/index.html"},{"revision":"695a395f98f8ba454b0a09a3c1052ab1","url":"api/middleware/envvar/index.html"},{"revision":"50fb2750d6b45cff35cef5cc5729dc73","url":"api/middleware/etag/index.html"},{"revision":"4003ce6af4db11c8a2fd292fc00fd03f","url":"api/middleware/expvar/index.html"},{"revision":"fc4e99ca33c0cef538313a0da6a4e776","url":"api/middleware/favicon/index.html"},{"revision":"590bd502e9a08e712ab35b39fdb07452","url":"api/middleware/filesystem/index.html"},{"revision":"e64502c405d490dd7dfb2f99b602973e","url":"api/middleware/idempotency/index.html"},{"revision":"9af55b8cc5ba250d7004504268251753","url":"api/middleware/limiter/index.html"},{"revision":"2e842dbf18c07a0e4fab22fb0507ff11","url":"api/middleware/logger/index.html"},{"revision":"466d21fc3402404b43050899ccaeea0c","url":"api/middleware/monitor/index.html"},{"revision":"f23f8f94a1eaa1605b2491c994653379","url":"api/middleware/pprof/index.html"},{"revision":"b53a30cf3bc5f307b2a7ae0767a11c5b","url":"api/middleware/proxy/index.html"},{"revision":"6677535636d7b44a2c07d84f217bedf3","url":"api/middleware/recover/index.html"},{"revision":"bd9ffe83f9113a10c9a28695ef4b7e53","url":"api/middleware/requestid/index.html"},{"revision":"04f3054835c614508499eacbc415ebcc","url":"api/middleware/session/index.html"},{"revision":"968d67373a26b392feb1e15800f8f599","url":"api/middleware/skip/index.html"},{"revision":"a5ba2d0a8b28884fefacea1520895f0b","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"9224d76a8de64a0b3f8a203496a5f417","url":"assets/js/05e2dc8a.a6105308.js"},{"revision":"5c2284efc50b538bebb52924839d0e5e","url":"assets/js/089526fe.03d60981.js"},{"revision":"d96ff2d0ec2a1fe6880bdb37a66cb52a","url":"assets/js/0b8e8946.20447f9d.js"},{"revision":"d542490aace139beb5a7cb94154e9587","url":"assets/js/0c35ae3f.23112f9a.js"},{"revision":"b5d5e910d1d9688c28fb8538ea130342","url":"assets/js/0e384e19.0e2be1fd.js"},{"revision":"9d63a967d657ca0c2464aa6faac76abd","url":"assets/js/0f17a9fe.65001c0e.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"7892690df4c828af33a0a64a8800963c","url":"assets/js/105f1242.0c102d7f.js"},{"revision":"7faa013839fd3edaf2f8dfa4ee81c9ef","url":"assets/js/14a7e971.401769ee.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"c3f7abb34254dd88ea5544f163285713","url":"assets/js/1588a372.02817859.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"89c5b669b30d1eed4d05ca900b7e26d0","url":"assets/js/19e7c5f6.d07d2ea2.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"455fd1df5278ad0b95be656135f741d8","url":"assets/js/1a56c576.f828f59b.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"20b795438a0033a2ced56c043054b76c","url":"assets/js/1ed4c90d.76075915.js"},{"revision":"1bd9e09937071c347bbef39d875d32d1","url":"assets/js/20e81fa7.2624f259.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"2278001cee6f2140cf9caf2ef2372e29","url":"assets/js/24847ea2.dc06c709.js"},{"revision":"21ef89747703d50a136b88fb379ada8a","url":"assets/js/26257c43.7088f273.js"},{"revision":"1fe560f54cec0a60a41d67a2a451e579","url":"assets/js/2bc33efd.b71f144d.js"},{"revision":"56175a0f84b09757b094882f154d9b1c","url":"assets/js/3201faa7.9772fd16.js"},{"revision":"e274481816e4dd6ffd38e81a5f92455c","url":"assets/js/32778213.99c4c2ab.js"},{"revision":"164236c364dfd1de569a5511cfe5e12e","url":"assets/js/354823c1.a64b84b2.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"3978b5b3c04c02ca92d3474b9d5d5dc0","url":"assets/js/37882858.32f5be5e.js"},{"revision":"e1fde04d024976e8a13e92e0eab8da6f","url":"assets/js/396a05ac.3a289c36.js"},{"revision":"303f6a89cca2d5c11881ba2f0248d1e0","url":"assets/js/411460cb.90b17138.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"3fcd10a84998a543d0cc431337ed868a","url":"assets/js/41a4aef8.ab644e21.js"},{"revision":"203c3e533c35c6b567aa620e836232ca","url":"assets/js/44ea2a3d.82b6ce35.js"},{"revision":"2912a50cf51f6a732f3504f38ec35520","url":"assets/js/48c6cc07.28d611d7.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"1e1444bd5746c81cab9033ce7aabf84e","url":"assets/js/4a9dde3b.34612c3a.js"},{"revision":"2842d58af3b8ada1b25ea32d5953023f","url":"assets/js/4b47f78b.e34efd83.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"ccd5886eb9eda0dd0a253162c0d097bb","url":"assets/js/5229ce75.45b906d6.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"1940c3a97c62410a2a50a88f65057a55","url":"assets/js/563969e6.a71c24e3.js"},{"revision":"8df68b84647147595b2bfbebc4baa790","url":"assets/js/5995d508.5d95bbac.js"},{"revision":"0bba668b5ba6c2abea2688670368f5ae","url":"assets/js/59e3a47e.b78d55df.js"},{"revision":"fd797c79bc305bad84e963e9bd86ae13","url":"assets/js/5aebd6e8.c269996d.js"},{"revision":"b1997d2ea9ad0e7e627b1621e690a948","url":"assets/js/5f49a855.9cea4425.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"e7a3d8498e627ca6da8e80f5fa0b0cbc","url":"assets/js/683903ba.9cb601a3.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"d522ba3158a8d5b439f2a08dbd6aba5b","url":"assets/js/696e1f87.db8afe9d.js"},{"revision":"6ef64328890ec970c939eccbfae09314","url":"assets/js/6b69f1ff.eb5c8322.js"},{"revision":"737715923e49d7cfd6e64150996151a9","url":"assets/js/6e3111c2.53c200a0.js"},{"revision":"d82f1805195776ffd1acfceaf86071f4","url":"assets/js/6f9f0f49.437c2170.js"},{"revision":"6f209ba98a2e0836379aef618791186e","url":"assets/js/72c9b8f6.44877831.js"},{"revision":"0d629decd243451868ed36839cd23e16","url":"assets/js/7449d9ed.227e26a0.js"},{"revision":"642e52a54b25926fdb8999f00fba72fb","url":"assets/js/7859bc5c.a62cf672.js"},{"revision":"b3833fdfecc3eba5ca8f7b09edd3e690","url":"assets/js/78c6c509.4ec7aa7e.js"},{"revision":"7470cbf204d436283ccc3bcb7b8100f9","url":"assets/js/7998e0de.65d09d31.js"},{"revision":"1f24ea418c7d00e50fae6d600966810b","url":"assets/js/7a7fff1b.74259173.js"},{"revision":"86f8cbc5470433e308c964c1d8689d03","url":"assets/js/7e307fec.d3f83f90.js"},{"revision":"7894ad869de2b4852ebf630106d0c9ff","url":"assets/js/800a3acf.9b5a9bb7.js"},{"revision":"bb48a474699c7af06ac276c6df6f22c7","url":"assets/js/8231ac58.2aa75968.js"},{"revision":"8029325bea415e14839ca63aa550a4fa","url":"assets/js/82a52177.93892a8f.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"db4adfeccf4630580456297136533392","url":"assets/js/894f4d94.9b7399ef.js"},{"revision":"fab2b19f83813989583ee9b9ad692a15","url":"assets/js/8d52ac26.ac7fb814.js"},{"revision":"13e00a1f57d8685cc344ccfc4fe6a059","url":"assets/js/8ec8555c.5b2b0123.js"},{"revision":"9de6929fd4f325e13e06b02569ac7e29","url":"assets/js/9169002b.a680f270.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"7de98f663fcff4a2da1e53d2848d80f4","url":"assets/js/935f2afb.b6dd7874.js"},{"revision":"390bcd56add64739434c8b2ed0c336a5","url":"assets/js/9717e045.53a94b7d.js"},{"revision":"306027da06e15a1140c541867f3a2ec8","url":"assets/js/9947fe9c.b46566f9.js"},{"revision":"d4e377c9766e75f93d56588b08a777fb","url":"assets/js/9a57fc4d.301c2cf0.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"31bd4fa89fec2073a84f951f58964f94","url":"assets/js/9e17a0a7.d0349db4.js"},{"revision":"303dfaf0469992934403cf345a89c193","url":"assets/js/a1a0db23.8355279b.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"d8a40555d3652e8eac058ad990e99f72","url":"assets/js/a98ab587.a7bb6de1.js"},{"revision":"8647a691bea24fff11a8363d8076fb08","url":"assets/js/b0ac2aab.92463a9b.js"},{"revision":"c5f601e052385e922dc58c286952c15d","url":"assets/js/b45514a6.b6eb7d24.js"},{"revision":"b573b4652ed1cbae6eb297d44f63c02d","url":"assets/js/bafae794.c93ca6e7.js"},{"revision":"a5afaf22819f73df894fe4600abaf720","url":"assets/js/c1bcbd07.14854f9d.js"},{"revision":"dae6fd7d82b8292afe1774c19eae1e5c","url":"assets/js/c36fa059.ad03e8f0.js"},{"revision":"febf894d6806077e8d8d4780f45ca2d0","url":"assets/js/c6147012.09c79e21.js"},{"revision":"1164bf76d7ea3da3fecbec77735a3262","url":"assets/js/c91a29ee.11d7bd92.js"},{"revision":"02f2e4dab3c3d01ec2c44e3f9c16d289","url":"assets/js/c921e1c5.491f5586.js"},{"revision":"058d6cd873ec6de670a4b0d065cb9799","url":"assets/js/c9386115.7b3fddce.js"},{"revision":"6aeb621b96fccaa6fd74fb4ea791ccb0","url":"assets/js/ca4084cc.cf943c5d.js"},{"revision":"39f55e2cdbbb38cbdb3c4a478b2dc56b","url":"assets/js/cd01922d.8f68301c.js"},{"revision":"2503e242dc9fbff6f4fba0fd8d64c661","url":"assets/js/ceb3afff.9a7b688b.js"},{"revision":"759123a187f19582d08403882de6c737","url":"assets/js/cf63ef8e.1c2b260d.js"},{"revision":"bfeab8f605b8b1b0c7d61c338d3ea94b","url":"assets/js/d3f7bfd6.2ab270ae.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"ed614dc83421d8c11fea7e2f0338f5e3","url":"assets/js/d8d851c4.5dc9146c.js"},{"revision":"23672f87d76d3b115db02706a66b002c","url":"assets/js/dd6e99a2.c3b51893.js"},{"revision":"acd81f693eeef36b67b00a8b598448ce","url":"assets/js/df7efcc1.962d90ff.js"},{"revision":"bdb4a4967f501c9f554f14a7a7a848aa","url":"assets/js/dfc29094.6f02febf.js"},{"revision":"9b7522cbf172a43b1a0e6a002497bfc9","url":"assets/js/e02ba15b.0bcdf182.js"},{"revision":"abc6016d91a356bc0cd58e4ee41d99e2","url":"assets/js/e3a7aa50.af14ab8c.js"},{"revision":"572ad2e3d1d53efe5e2d1bdb25185806","url":"assets/js/e5c54bdb.ac5cdd58.js"},{"revision":"0a662a8c9d2f0d7c2daeaa221729b0fc","url":"assets/js/e77f4328.99443a00.js"},{"revision":"faf64f49ed2d1afb6443eaa86b224b07","url":"assets/js/e7e568e4.ff82e3dc.js"},{"revision":"c5356f92b6b6a09c5014bbfc9264ef2c","url":"assets/js/e9780dc4.94047d0a.js"},{"revision":"c89876f69439fa1c963d68033f49f18c","url":"assets/js/ee02910b.948d415b.js"},{"revision":"576431dc486edf78b632a346258e6725","url":"assets/js/f2e0d9eb.a4a126db.js"},{"revision":"2f35f17afe18b8b63ff84448a7fd57dc","url":"assets/js/f36dee5a.cc7c9852.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"e2ff5f2a39633b65dc945bb3602bf484","url":"assets/js/f740b2ca.8a7e32a1.js"},{"revision":"135c3c9e7530d74c59b18fb433a6ae18","url":"assets/js/f7cef55a.7835925c.js"},{"revision":"55a0f0f4524ca4b527d3cff3ab606236","url":"assets/js/f9806908.0f5d4988.js"},{"revision":"c5b125bd26ce79c0d14159ed8b2e2907","url":"assets/js/fba67bfa.fc2d8da1.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"d23c2c5eef3dbd6f05f368e891b3a27e","url":"assets/js/fc970c7f.a834ab40.js"},{"revision":"af96f485da88be6641aa88bfb91e3107","url":"assets/js/main.fbc5f686.js"},{"revision":"55f1dee4ee424aa26fddd28fbda9c6a0","url":"assets/js/runtime~main.6acb03a1.js"},{"revision":"fb2cd000e04cfaa9927895e54479c853","url":"category/-middleware/index.html"},{"revision":"6f017444655e520156e6ee9f624a5ef4","url":"category/api/index.html"},{"revision":"5e50cb2c611e8c79a7816b143cebbc69","url":"category/extra/index.html"},{"revision":"34e6b0a22bcda16b8dffef5b5eaee762","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"1170473e193cc29ba0fbb6b3ed86a3b3","url":"extra/benchmarks/index.html"},{"revision":"0726267f9779b7c7c31a826d141f23a7","url":"extra/faq/index.html"},{"revision":"63aef661ad0cd57ecee97111834d64fa","url":"guide/error-handling/index.html"},{"revision":"9476b16aef215d275ddbb12199609220","url":"guide/faster-fiber/index.html"},{"revision":"7e3aaa1c331034a6be538ee237941a4d","url":"guide/grouping/index.html"},{"revision":"4bbf081ea1ba8f88f9d0134122cb23bb","url":"guide/hooks/index.html"},{"revision":"704ec09121a01f5983b011d7d6e74945","url":"guide/routing/index.html"},{"revision":"88c90021da575254d0ae3950ecd81114","url":"guide/templates/index.html"},{"revision":"511207c13829d8237ffc8b4319b745aa","url":"guide/validation/index.html"},{"revision":"c15326584954e4b3b238868afcdf6206","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"dca4ff46f6a64fcd8a39bac141d954aa","url":"next/api/app/index.html"},{"revision":"bcbfbcd98f3941e5c14a621d263a946e","url":"next/api/client/index.html"},{"revision":"9d311153811376e32ca2e69b020ac288","url":"next/api/constants/index.html"},{"revision":"d8a6baa2f23d8a7765f1b8aa7caea16e","url":"next/api/ctx/index.html"},{"revision":"95e4baaa324236852ae7f7c2384274a8","url":"next/api/fiber/index.html"},{"revision":"035212fb94d3eb104b4cfb02228878ab","url":"next/api/middleware/basicauth/index.html"},{"revision":"f938b2e90fe5fd2d02fad500bd85bd93","url":"next/api/middleware/cache/index.html"},{"revision":"996bd09a91afa2dbe464d37ecc816f8f","url":"next/api/middleware/compress/index.html"},{"revision":"723646d951b22b0be78f715634a5af8e","url":"next/api/middleware/cors/index.html"},{"revision":"666c39825516a23251c0228703e59b12","url":"next/api/middleware/csrf/index.html"},{"revision":"0940b4564280014833e621adc5c9b0c4","url":"next/api/middleware/earlydata/index.html"},{"revision":"d5df7003dd83a73149507c6f21511e23","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"e31cc9bdc6400f1492f17998ef19f442","url":"next/api/middleware/envvar/index.html"},{"revision":"415a3defa1ad1afdf24dd3aa48d9664b","url":"next/api/middleware/etag/index.html"},{"revision":"635cf7e5e60c8338337ad13868de3070","url":"next/api/middleware/expvar/index.html"},{"revision":"531c2cb5ba2dc3907d1cf95a5d913c23","url":"next/api/middleware/favicon/index.html"},{"revision":"6672a9e98ca36acc205c55426cdf9bcc","url":"next/api/middleware/filesystem/index.html"},{"revision":"ce5f748d075a5ad621676af932285c7b","url":"next/api/middleware/idempotency/index.html"},{"revision":"6057d69ef9eb95439aac4cf455fe2920","url":"next/api/middleware/limiter/index.html"},{"revision":"eb087e0c309f8a5f31ffb86299c417b5","url":"next/api/middleware/logger/index.html"},{"revision":"823686dd65d23190ac55f7ff519af6b2","url":"next/api/middleware/monitor/index.html"},{"revision":"4130a70b903800a190d701d326a5bb26","url":"next/api/middleware/pprof/index.html"},{"revision":"4f36e7e0f17b76c467d7a0f4ce254f83","url":"next/api/middleware/proxy/index.html"},{"revision":"da509ffb8d85070da4cd4bfd142935be","url":"next/api/middleware/recover/index.html"},{"revision":"9991cf400036c352a367448f05b438e7","url":"next/api/middleware/requestid/index.html"},{"revision":"0b0c7617a1e15ce019c628ef801dc9a0","url":"next/api/middleware/session/index.html"},{"revision":"47133589bc3068a792dabf48ced3fff5","url":"next/api/middleware/skip/index.html"},{"revision":"bd92528703cde2d802ff7562c6343416","url":"next/api/middleware/timeout/index.html"},{"revision":"b5d7333fdda05892d213c2e558dbf424","url":"next/category/-middleware/index.html"},{"revision":"e3b46151048e513847f41e5033d40767","url":"next/category/api/index.html"},{"revision":"380d9fbb0943f605c0ad93965e661938","url":"next/category/extra/index.html"},{"revision":"6d4650fccf066f161a5cebb667d87c20","url":"next/category/guide/index.html"},{"revision":"f077439e473cf6c818a7354b8b0901d4","url":"next/extra/benchmarks/index.html"},{"revision":"477810c7dbfc48c545e0c90d314a375f","url":"next/extra/faq/index.html"},{"revision":"b17203c8e0df86823cd088b5e44b9deb","url":"next/guide/error-handling/index.html"},{"revision":"a58803c124362c9d4e7af43ea9f85610","url":"next/guide/faster-fiber/index.html"},{"revision":"4e4d907d5bba5053494de02f2f1ab7ee","url":"next/guide/grouping/index.html"},{"revision":"2a618045e69707759c9f32b7f51c05f0","url":"next/guide/hooks/index.html"},{"revision":"aeec1087360556fe6043376df95a6ecb","url":"next/guide/routing/index.html"},{"revision":"bfd019ac22b95df14be2674d8faa1f15","url":"next/guide/templates/index.html"},{"revision":"548fc99d0080ba52f121e129f0dfabe8","url":"next/guide/validation/index.html"},{"revision":"1c716eb61c3b48ac216804cd95c6b42c","url":"next/index.html"},{"revision":"6a69b500ced6912b3b3b7ae304288690","url":"next/partials/routing/route-handlers/index.html"},{"revision":"298add6cdc0d11bc265bad0a8dc2e28d","url":"next/search-index.json"},{"revision":"f31aa81b9e77d3906f4cbba17e00ed67","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"391d55713cdd7029a504bdf21fbf207b","url":"search-index.json"},{"revision":"e8d6e1ffa37cf081dd2824e0f7eb94d8","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"d7b1dba42435137418b90a3bdfc1a176","url":"v1.x/api/app/index.html"},{"revision":"3495f856ae904d76834196c0a21b4179","url":"v1.x/api/ctx/index.html"},{"revision":"11d02c9be2e1cc76e61eca502eab97a7","url":"v1.x/api/middleware/index.html"},{"revision":"fb230c714317aaef75784f79c0063602","url":"v1.x/category/api/index.html"},{"revision":"1a691d5d0a1cad98fbbac12c61966403","url":"v1.x/category/guide/index.html"},{"revision":"da8ce3c84247dd96b0e5118ebccbb383","url":"v1.x/category/misc/index.html"},{"revision":"170f682dfa5d584a67cf84e2e8c71a58","url":"v1.x/guide/error-handling/index.html"},{"revision":"87f909c407857ec68ed2c0145c84a047","url":"v1.x/guide/grouping/index.html"},{"revision":"fb6b6fcf14dd2dfd7fa6761d654a1e26","url":"v1.x/guide/routing/index.html"},{"revision":"70f5945ee55cae6cc518931f3d1edc4c","url":"v1.x/guide/templates/index.html"},{"revision":"a6a8f6ba3611f9340e22b5307565f61b","url":"v1.x/guide/validating/index.html"},{"revision":"8546a1feb91b54a37010b1b4883f7658","url":"v1.x/index.html"},{"revision":"ea3c43ad0a0d172f0b5a673c4e716588","url":"v1.x/misc/benchmarks/index.html"},{"revision":"4b545fa0f6dc0e76715825dc22a533f8","url":"v1.x/misc/faq/index.html"},{"revision":"63028de504cb55e31ef06c2ca0a2df57","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();