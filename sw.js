(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"107a81a769136ea8b55e772ed40e0ae8","url":"404.html"},{"revision":"c7804308b7440ff041b6a54fbfb84462","url":"api/app/index.html"},{"revision":"97263ba59146320e6aeedf9470a09a1a","url":"api/client/index.html"},{"revision":"e1067a68ef6fb3a0daecb9f4ade7b22a","url":"api/constants/index.html"},{"revision":"7a764246592346810c27f3125c57d764","url":"api/ctx/index.html"},{"revision":"d882ec74b3cb94cb0c61c43e91f2e651","url":"api/fiber/index.html"},{"revision":"4858a742b020ace0db074502f22aee1b","url":"api/middleware/basicauth/index.html"},{"revision":"e185fc5e3c22b427eebd9afb3c2183bc","url":"api/middleware/cache/index.html"},{"revision":"435711618de12f563c99769d402ec4a4","url":"api/middleware/compress/index.html"},{"revision":"fe14aacdc3e1ecd61c0392354d192ff4","url":"api/middleware/cors/index.html"},{"revision":"663e93a7dba0b03480bf24171827c5c2","url":"api/middleware/csrf/index.html"},{"revision":"e97e092fda08f8b25b628a614105bbda","url":"api/middleware/earlydata/index.html"},{"revision":"f04d211fe75e631d84b3e2a0b472e348","url":"api/middleware/encryptcookie/index.html"},{"revision":"d5604f6b08ff5cf422a251bef5203924","url":"api/middleware/envvar/index.html"},{"revision":"0b2680d4da5ba6ad993090430f2b6016","url":"api/middleware/etag/index.html"},{"revision":"e50528002c6ea3789d1c02cc7fae546d","url":"api/middleware/expvar/index.html"},{"revision":"6f9c5be0e8d046b0f405561da1d05453","url":"api/middleware/favicon/index.html"},{"revision":"286df157874ccc832bb5670c8ddcb2b0","url":"api/middleware/filesystem/index.html"},{"revision":"b4189ce349aa144533174bd60586b361","url":"api/middleware/idempotency/index.html"},{"revision":"c8be6a7f09654c37c34e94b1754d5aba","url":"api/middleware/limiter/index.html"},{"revision":"971f3a1ee1e5835f9686a503e545739e","url":"api/middleware/logger/index.html"},{"revision":"0b5ef1d754f1660c1d4106e394bb75ca","url":"api/middleware/monitor/index.html"},{"revision":"0b225bc2e25c50efe185b11c1be95c03","url":"api/middleware/pprof/index.html"},{"revision":"15285957ea04a92aff6851cadb8ce20d","url":"api/middleware/proxy/index.html"},{"revision":"147f4e8f6db3a711a352d8a13303afd6","url":"api/middleware/recover/index.html"},{"revision":"a8b5923872a9aaa926c947093fc35936","url":"api/middleware/requestid/index.html"},{"revision":"f139edcef81068651d066843a92d34ff","url":"api/middleware/session/index.html"},{"revision":"65e6eceae51751c7dc570ad3509d6ff7","url":"api/middleware/skip/index.html"},{"revision":"3c0915239f6e7a7dc3f7363c2ca5d2eb","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"1d277a5199beb33c2ed552838bd64d6c","url":"assets/js/05e2dc8a.39f3e472.js"},{"revision":"7e4967d151184c7ec2251d9966c5150a","url":"assets/js/089526fe.fd8ca42e.js"},{"revision":"4854cb356ea82cc56ee46cab4ccfd978","url":"assets/js/0b8e8946.6d3c0ce4.js"},{"revision":"0f7998a78dc73fd83338890bb1b5ef1b","url":"assets/js/0c35ae3f.7cc7904b.js"},{"revision":"ab5380bf67c74cd37102402cd35e8148","url":"assets/js/0e384e19.c9b5155f.js"},{"revision":"33718bfc296961ee3d9ef44f6c07ffa8","url":"assets/js/0f17a9fe.81a99196.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"1c06c82db04f04cca2dc6c29ac6982f1","url":"assets/js/105f1242.ba4d9679.js"},{"revision":"e56c04bb7054aa2bf442f2d87ae09d58","url":"assets/js/14a7e971.1093c250.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"4f7329842844734d3cff39ceb4b4c331","url":"assets/js/1588a372.7865b355.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"4924838b2a9adf49919bb9388bcf727e","url":"assets/js/19e7c5f6.158e2283.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"3e1fcdaebb43396acf2da34b45eb26be","url":"assets/js/1a56c576.75dd653e.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"ace59f1406480e8525002b27f870189b","url":"assets/js/1ed4c90d.861e94da.js"},{"revision":"5d44b87552d8ab3525b149672ae1733f","url":"assets/js/20e81fa7.2ec8a4da.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"4799a8909816e792ed71653f84e717db","url":"assets/js/24847ea2.74ab4ec0.js"},{"revision":"ffe916ded8329d0781454b1435646b79","url":"assets/js/26257c43.005f2c56.js"},{"revision":"98642510a4c61a30182d0c079cdf5705","url":"assets/js/2bc33efd.599efa39.js"},{"revision":"80520a7ad097f35de72d89bc6e73455f","url":"assets/js/3201faa7.365297c6.js"},{"revision":"8391bcc75fbfa153b88feff12cc8c2a2","url":"assets/js/32778213.cc271995.js"},{"revision":"d95c3d82a1648cb4c07657151a5f9e71","url":"assets/js/354823c1.c288aa1e.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"3d82d1e739b4b8b4e3287627925af451","url":"assets/js/37882858.00be34d4.js"},{"revision":"a76867e2e6a0239ea12ed43f44c76264","url":"assets/js/396a05ac.a9a1ac0a.js"},{"revision":"a4234192d8e2a2a02f39d98db61ca4bf","url":"assets/js/411460cb.172b8836.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"fcc036248e9a7d163fa8102e85dea723","url":"assets/js/41a4aef8.0d10b7bd.js"},{"revision":"069fcd8190ee489ed7e011769be99c25","url":"assets/js/44ea2a3d.27f8393a.js"},{"revision":"642769762c49b8c34828477c2a3d47f8","url":"assets/js/48c6cc07.05989ebe.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"1fe0012b4ad6237475962e2b784e0534","url":"assets/js/4a9dde3b.3edd9557.js"},{"revision":"0b1f1580b03df52c1dabcac649b0a843","url":"assets/js/4b47f78b.a97e8805.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"4fb4a502ad10de3b3d4ca8c54d9de8bd","url":"assets/js/5229ce75.6096b915.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"a10b59d69ad91c2897aa34edc628f5b4","url":"assets/js/563969e6.7fc0ccef.js"},{"revision":"dc8ab67d7491e8c3c33ba0061191ffeb","url":"assets/js/5995d508.9724bf75.js"},{"revision":"528be35b621de20e17aafb8ed255b150","url":"assets/js/59e3a47e.bfcecaae.js"},{"revision":"7237d4fb1f00bfc75d51da6fb5ab82f0","url":"assets/js/5aebd6e8.97012b25.js"},{"revision":"114bf7792c4642d9371914a5d7ec02fc","url":"assets/js/5f49a855.1431835b.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"024ca397cec43afefa1d080ed28abb92","url":"assets/js/683903ba.2054756c.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"b70a7eb582c3dda7600c6d389a7cb343","url":"assets/js/696e1f87.a49b7b91.js"},{"revision":"90a1ca77deb7efbf2db255bd08ec171e","url":"assets/js/6b69f1ff.5be1b356.js"},{"revision":"956696ffb39fca62b27df85d5b11becb","url":"assets/js/6e3111c2.8ea2b490.js"},{"revision":"2dadaf5f3d28e8621ff013396ba82e52","url":"assets/js/6f9f0f49.8ada6ecf.js"},{"revision":"e08ebf05662ca40a4d06946b84f9675b","url":"assets/js/72c9b8f6.1025fdaa.js"},{"revision":"3979b60fa8cf389559bbe59a5ffc33af","url":"assets/js/7449d9ed.beb8344b.js"},{"revision":"79217746e68f431351e03c634fa165cd","url":"assets/js/7859bc5c.4063f682.js"},{"revision":"6ed5f6ad977b8c120e91efc0f222714c","url":"assets/js/78c6c509.97aaf411.js"},{"revision":"c492cd1baf68dcd667d9f7c4c8a4cc3e","url":"assets/js/7998e0de.b5911de6.js"},{"revision":"7426cd205f8efc75ee583bd55b257fdd","url":"assets/js/7a7fff1b.885095db.js"},{"revision":"95954ea9914d5ef873072cae7ce874ee","url":"assets/js/7e307fec.0a43a10d.js"},{"revision":"209a4c71e38c62aa4dc9417731a008ce","url":"assets/js/800a3acf.daf8f10f.js"},{"revision":"4fe7b0e0202def139ba85f4e0d1b6221","url":"assets/js/8231ac58.e88cfd40.js"},{"revision":"29af1917c521f434a26a9c47de2fc9d7","url":"assets/js/82a52177.e6d14b0e.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"883c41f2d0da6814c093764adf9fc167","url":"assets/js/894f4d94.604e819b.js"},{"revision":"970a7d5770de9d8fd849d32e6c644627","url":"assets/js/8d52ac26.a83081ec.js"},{"revision":"d2a5a5c093e763577af18d0864559199","url":"assets/js/8ec8555c.b8391191.js"},{"revision":"ff90a5151b990098c36f19dd804ae579","url":"assets/js/9169002b.87724ad2.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"63bd7a2b822eca27a9fbdf12456c80a6","url":"assets/js/935f2afb.0eae22ac.js"},{"revision":"b9cf4b6c267dc365602059df16528eef","url":"assets/js/9717e045.e555488e.js"},{"revision":"0528abef4b2f2867768d156351a63638","url":"assets/js/9947fe9c.a7fefb7b.js"},{"revision":"5ccf60aeba995e168ae65460d37b7855","url":"assets/js/9a57fc4d.6f5ea041.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"e40a95d3f83365d9e2c76557881ee598","url":"assets/js/9e17a0a7.e112f940.js"},{"revision":"c51f2b66917676c7c60b40052db3e6f7","url":"assets/js/a1a0db23.925d7d46.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"cd195b08dc468e845567b40c110a5ef9","url":"assets/js/a98ab587.d8b983cc.js"},{"revision":"a2ad79ccd4d00d4269a22c3694ae1d5a","url":"assets/js/b0ac2aab.9a5aae16.js"},{"revision":"88e0a6132bed770309a6e6eb894f008b","url":"assets/js/b45514a6.39bb8d63.js"},{"revision":"303a9e8675654fd4c885b1d90047ba20","url":"assets/js/bafae794.8d0981da.js"},{"revision":"0b97e169972d65eaca428f31e2383500","url":"assets/js/c1bcbd07.4fbaec10.js"},{"revision":"f5622dcb671daa5c3f595a474f6ccac2","url":"assets/js/c36fa059.3f681190.js"},{"revision":"d5ad8a0f7e6690141fe60ed435163800","url":"assets/js/c6147012.79d00149.js"},{"revision":"873835f995a2983f7ddbd653dc5f2c89","url":"assets/js/c91a29ee.19074c83.js"},{"revision":"d443dcdc9f30649c112c6b8dde8234c7","url":"assets/js/c921e1c5.366749bd.js"},{"revision":"3d1f807e0e1568f0e82185ca93c0257e","url":"assets/js/c9386115.024b8705.js"},{"revision":"f65657ffbe2a36052c28a8e330e10270","url":"assets/js/ca4084cc.da8b394e.js"},{"revision":"0c1d5cab251d12cc8aec7dda46569738","url":"assets/js/cd01922d.f43f8d5f.js"},{"revision":"6ec9db0a344bf60bbd7322d349be1a55","url":"assets/js/ceb3afff.8830d030.js"},{"revision":"04c504f604a6861e74ac40a425f9585e","url":"assets/js/cf63ef8e.974ff5db.js"},{"revision":"22cc6d7e8fa8bb8e145eda367a99b002","url":"assets/js/d3f7bfd6.3f393780.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"1a36d4aff29222e5f5cb9c5575daf3b3","url":"assets/js/d8d851c4.a711353e.js"},{"revision":"1d2ab621411110905cc6c662cefe1064","url":"assets/js/dd6e99a2.0a100517.js"},{"revision":"6c75805fab68cee1247e352d3e4c1c6e","url":"assets/js/df7efcc1.81a168ce.js"},{"revision":"f3a96e45b4261cd2c3181b3c32591731","url":"assets/js/dfc29094.fff49b0b.js"},{"revision":"7ffa41fedd446624598b2a49a49bdbd2","url":"assets/js/e02ba15b.b9700f1b.js"},{"revision":"8d85ff2581da17c71769ca3e3d220eb6","url":"assets/js/e3a7aa50.856066a6.js"},{"revision":"c77cb0461ade67ae9cd76df11a91389f","url":"assets/js/e5c54bdb.313a58d4.js"},{"revision":"490378cfb961fd2da2b64eea73b671b8","url":"assets/js/e77f4328.3e992124.js"},{"revision":"a5f9332e977d29b9cc7aefedd6510a61","url":"assets/js/e7e568e4.f8341377.js"},{"revision":"65beebfc9d2113770018cbe9b33c4d31","url":"assets/js/e9780dc4.59a7811d.js"},{"revision":"ae74de76ce63554333bd737c8afcb554","url":"assets/js/ee02910b.21d3feef.js"},{"revision":"66c6070cdba4a435926ecf0dab122ef0","url":"assets/js/f2e0d9eb.dc688ec2.js"},{"revision":"8f6056d6735e51d43a4d2b56562c3e0a","url":"assets/js/f36dee5a.4d17aaf0.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"fa9cb381cadeadfca40b59096e006ee8","url":"assets/js/f740b2ca.38699007.js"},{"revision":"59c9f1d447f9d05404795d763aaa395f","url":"assets/js/f7cef55a.15c55506.js"},{"revision":"4a533d59356a53cf5ec01e2b220f4f0c","url":"assets/js/f9806908.1ecc1afe.js"},{"revision":"9dc6611e2fdf228f70c59f66a270ab33","url":"assets/js/fba67bfa.8060fe3c.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"68e43a01da2201f436bdd390fb92338c","url":"assets/js/fc970c7f.e2e4640f.js"},{"revision":"524468a280ddbcd4e83f94357078b086","url":"assets/js/main.d9cc29bd.js"},{"revision":"a9af9b8f0b744256e4bdb05ec7229ea8","url":"assets/js/runtime~main.4ad4717a.js"},{"revision":"5f01084b4ee12383250039a7915f0998","url":"category/-middleware/index.html"},{"revision":"5e2b99070edc79e8a8a5e061651dd53c","url":"category/api/index.html"},{"revision":"0414e5a5a6ec83ae1982c5267d467979","url":"category/extra/index.html"},{"revision":"19c584af9d9ee23e9fa962129102dbfa","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"add661e0e874240f9a5dd4a84c0810f3","url":"extra/benchmarks/index.html"},{"revision":"4f39d705890d5df1285ee516fcec9ba8","url":"extra/faq/index.html"},{"revision":"cb5bfd79eeb98323b0f940e9876a762d","url":"guide/error-handling/index.html"},{"revision":"cf42749089a92f86a91c62fb5568da0b","url":"guide/faster-fiber/index.html"},{"revision":"0204741cf6e2985abced1c143685c886","url":"guide/grouping/index.html"},{"revision":"9035b755532536624058749247793ba4","url":"guide/hooks/index.html"},{"revision":"f3b5269dbdaff3e556ee2e02016418aa","url":"guide/routing/index.html"},{"revision":"35146673f6a30c4a1fa69c5b79877a85","url":"guide/templates/index.html"},{"revision":"c750b76b7424ab7cd49e27ecee2eca79","url":"guide/validation/index.html"},{"revision":"d1a05d6306143ffe362e24da44d7770b","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"f1ecb68a934f610d71e62772f1ddb074","url":"next/api/app/index.html"},{"revision":"3b09c171149348104b01493c19c9f94e","url":"next/api/client/index.html"},{"revision":"b5367e843085d7c22eb483f7b1132b9a","url":"next/api/constants/index.html"},{"revision":"59fe359c9650567b6abf401f68074838","url":"next/api/ctx/index.html"},{"revision":"26ab0ec6c20b9cc6aa33f997294a0494","url":"next/api/fiber/index.html"},{"revision":"5cb595936fdf770677caa72c3ab3f6a0","url":"next/api/middleware/basicauth/index.html"},{"revision":"2cc759f4db6caaf3576ce6f9270de285","url":"next/api/middleware/cache/index.html"},{"revision":"54d470f0ae5ac83dda741adc93b30334","url":"next/api/middleware/compress/index.html"},{"revision":"9d35fb140b9824b9260fad795c5456ff","url":"next/api/middleware/cors/index.html"},{"revision":"c38651862dd5f693991132a84233fd5c","url":"next/api/middleware/csrf/index.html"},{"revision":"8ce88e047dee1e13a556d84672784eaa","url":"next/api/middleware/earlydata/index.html"},{"revision":"c5bd645419f5fb966f151ed2c7c0bb13","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"f4b8a90d4d34cd30db32dd21d17bbd81","url":"next/api/middleware/envvar/index.html"},{"revision":"830fe4efe1ab7b9741c6dab1c1e34067","url":"next/api/middleware/etag/index.html"},{"revision":"e78f282badcfff97811343ab4fb0872b","url":"next/api/middleware/expvar/index.html"},{"revision":"02fad61e3cf7e1dae66eb706cb91a0d7","url":"next/api/middleware/favicon/index.html"},{"revision":"be998c3c55ba5a18b05bb25edb517a94","url":"next/api/middleware/filesystem/index.html"},{"revision":"63ca758647d2d447dc9bbf7877d262c3","url":"next/api/middleware/idempotency/index.html"},{"revision":"d264c9dd6a4ae0ddb012ceeee3941ad7","url":"next/api/middleware/limiter/index.html"},{"revision":"47e502b57acfc11c16a1dfe21641017f","url":"next/api/middleware/logger/index.html"},{"revision":"2e1ebdaa13df2cf79c7f9b686a1f22db","url":"next/api/middleware/monitor/index.html"},{"revision":"cb8005e4a9e72164c40683c3a5c4824a","url":"next/api/middleware/pprof/index.html"},{"revision":"7214f32f70b52c8d640aaaba22549a4a","url":"next/api/middleware/proxy/index.html"},{"revision":"a08e1991d49f510040d22f8de315ef7e","url":"next/api/middleware/recover/index.html"},{"revision":"942d2ecd751582a24029a0433b0e21e3","url":"next/api/middleware/requestid/index.html"},{"revision":"34b8dafa3e92de6d119752df36f81c4a","url":"next/api/middleware/session/index.html"},{"revision":"7f5ed3e492cbe51e252879b2e0dd1676","url":"next/api/middleware/skip/index.html"},{"revision":"2a73404128eb1d66786271fd7774cf11","url":"next/api/middleware/timeout/index.html"},{"revision":"74e20223f98a9d4e87fb2c5dfcf21632","url":"next/category/-middleware/index.html"},{"revision":"026248cbc763fbc0b7219107fb3199cf","url":"next/category/api/index.html"},{"revision":"e6311c84de20471467796a884d13614c","url":"next/category/extra/index.html"},{"revision":"3ff5b84a6bcd1d73026b3e56e83aa1c7","url":"next/category/guide/index.html"},{"revision":"afee789b18faa458f249897070d70b48","url":"next/extra/benchmarks/index.html"},{"revision":"c699c4ff8bb128512ccc91dfc4be923c","url":"next/extra/faq/index.html"},{"revision":"df3db95e6d5c687c6ab0f7e8fd8046c3","url":"next/guide/error-handling/index.html"},{"revision":"5f528474209c0567c290a0afbecf6829","url":"next/guide/faster-fiber/index.html"},{"revision":"be37ca1205183f1ea1b9cfd5f7fc5eca","url":"next/guide/grouping/index.html"},{"revision":"0ea694ba180ac6512377fab23dd2730a","url":"next/guide/hooks/index.html"},{"revision":"c9f2cee25285008d079de80a8df7c473","url":"next/guide/routing/index.html"},{"revision":"cc357b9346f96c501394a629e83cbce9","url":"next/guide/templates/index.html"},{"revision":"627a6753960e4221016562c86139d9fa","url":"next/guide/validation/index.html"},{"revision":"3b5d5a9e7982b38c4ffa965b54c83bd2","url":"next/index.html"},{"revision":"d9de6cf4e47d7aef7afe7c66e8b67142","url":"next/partials/routing/route-handlers/index.html"},{"revision":"ad7c9747a8eb3f71a2565720843865e1","url":"next/search-index.json"},{"revision":"435525500c0a14b4e4558ba74a8d0b0f","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"6f7fca37ccbd96ccc28856534bb25c6f","url":"search-index.json"},{"revision":"fe7cd83d59a9a9eeb09311ce74a06085","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"f1fbaec9e66fd309a25d8ad776a08470","url":"v1.x/api/app/index.html"},{"revision":"cec746e065d76ff344ac504d01772c71","url":"v1.x/api/ctx/index.html"},{"revision":"121b579bfa7d1fe1ea306929f50cbebe","url":"v1.x/api/middleware/index.html"},{"revision":"c0e23f9c17ed27454552ee5b43746ded","url":"v1.x/category/api/index.html"},{"revision":"4d265c18105eb2503716fa90f2343319","url":"v1.x/category/guide/index.html"},{"revision":"ea031432ea271c45fa81094a137df9e6","url":"v1.x/category/misc/index.html"},{"revision":"091f61332213b9450afd4a247b75b704","url":"v1.x/guide/error-handling/index.html"},{"revision":"bc99d7e0f0dbf38b2271970285ef3dfa","url":"v1.x/guide/grouping/index.html"},{"revision":"bef047b846340ae2811af5f08d65ce78","url":"v1.x/guide/routing/index.html"},{"revision":"0e3cd1e374b9edaa80a62ae663d6ba3e","url":"v1.x/guide/templates/index.html"},{"revision":"b82911bb0493bd1b98576897b2b1d87d","url":"v1.x/guide/validating/index.html"},{"revision":"dd0d6b07f13bf01a2521550635ff1b58","url":"v1.x/index.html"},{"revision":"c353c8cd69aa8db83652aeddb3601e02","url":"v1.x/misc/benchmarks/index.html"},{"revision":"7a3d1c2d13d9b4cfb5aed750bbb4d9b0","url":"v1.x/misc/faq/index.html"},{"revision":"ea8ddd225ef7c83dddff7a2e3e3fa707","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();