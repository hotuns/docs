(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"fa99008f1cdc162b123f47745cf923c8","url":"404.html"},{"revision":"360eb5d8b6960607d94f9bda21694eec","url":"api/app/index.html"},{"revision":"f6b06df8d9b7825dd128d94d77e9ab76","url":"api/client/index.html"},{"revision":"eb1178c1b54faa0303b8c6066725e25e","url":"api/constants/index.html"},{"revision":"f59110bee385a0e2dc97e533a5152f03","url":"api/ctx/index.html"},{"revision":"4014b38b6eb3729d8ee6333e12e72622","url":"api/fiber/index.html"},{"revision":"ae0af3f6376ac288ba38f65626767530","url":"api/middleware/basicauth/index.html"},{"revision":"5579026c91a1b8451b88d72f5a4738c7","url":"api/middleware/cache/index.html"},{"revision":"878f7fe26da3e38977580573425dc55e","url":"api/middleware/compress/index.html"},{"revision":"d96c8ffa85c4fd36c922ed438275afc0","url":"api/middleware/cors/index.html"},{"revision":"f5899609b4af49769f334e08ca97bc1d","url":"api/middleware/csrf/index.html"},{"revision":"c9c1ede5ef97519b64b2a04eeacfb718","url":"api/middleware/earlydata/index.html"},{"revision":"28248c333508c6117cb3285c0b9b517c","url":"api/middleware/encryptcookie/index.html"},{"revision":"3dc4cc5d0305d528ec803f0fb2f68934","url":"api/middleware/envvar/index.html"},{"revision":"536f2583ae71b844331edab751ac53d8","url":"api/middleware/etag/index.html"},{"revision":"4716fae4082cbae51e7b0b76e37ff72f","url":"api/middleware/expvar/index.html"},{"revision":"e3cdabef32476d5a41860bbd12d7d40a","url":"api/middleware/favicon/index.html"},{"revision":"9d5f528f621b5e8785b1fb0d6127a006","url":"api/middleware/filesystem/index.html"},{"revision":"fed3413086e691e574a4ab3aa72ddaab","url":"api/middleware/idempotency/index.html"},{"revision":"1f4d37197f3d97f3d62c64f2a9e43eaf","url":"api/middleware/limiter/index.html"},{"revision":"47091076246bf50b1d09092bc353d434","url":"api/middleware/logger/index.html"},{"revision":"65e592efdf25f0d2f8a7c167a159bdf8","url":"api/middleware/monitor/index.html"},{"revision":"be50be98ce6ba13c07cfc2ed7b19b95d","url":"api/middleware/pprof/index.html"},{"revision":"8b3a50717f547ba5740391ee268b96aa","url":"api/middleware/proxy/index.html"},{"revision":"0b0567e8be660f1620eab881a0498062","url":"api/middleware/recover/index.html"},{"revision":"45cb527c7dd75255b4908271dc50f7b3","url":"api/middleware/requestid/index.html"},{"revision":"25838bcbd5872fd0e67f2a534eddd06c","url":"api/middleware/session/index.html"},{"revision":"1a215a242cd075c14b5a5ae08a95d05f","url":"api/middleware/skip/index.html"},{"revision":"e6e1ae1dde9468b07ae82f11c733edb0","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"48725a69021d220706e2f388b1951abb","url":"assets/js/05e2dc8a.99540145.js"},{"revision":"37a374adc02d35938475efaf52432af7","url":"assets/js/089526fe.9596a5a7.js"},{"revision":"6bd4d6f4baa1dbc39408154f66ef12d8","url":"assets/js/0b8e8946.d24dd014.js"},{"revision":"869e6eb764942d5c8aad780d9e0f0c43","url":"assets/js/0c35ae3f.914e0a80.js"},{"revision":"2ade4b99aeb60bae9806f9029f23dac9","url":"assets/js/0e384e19.81931932.js"},{"revision":"eb1db8eb079cbce71d55dc1ed984789f","url":"assets/js/0f17a9fe.857468a6.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"9253cf6822aa5bc0d5777d83d4fd6198","url":"assets/js/105f1242.e6b1781b.js"},{"revision":"b734c4254933467d3902be6abcacb600","url":"assets/js/14a7e971.b8beda1c.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"6b82d9ee3ab2d308c964fcacecaa8d55","url":"assets/js/1588a372.febf0d1f.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"6af019ade89ab9e83aea7e60eb3d6ff3","url":"assets/js/19e7c5f6.0cf46f04.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"44b2e2a665363689743d9f9525299b14","url":"assets/js/1a56c576.d2248077.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"40baaa9453ffa11b4d473eb1505c57e0","url":"assets/js/1ed4c90d.17997289.js"},{"revision":"5ce17c57fccf1e746533e02841a0ba5e","url":"assets/js/20e81fa7.0f04bbc7.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"0b8e07d8fd9b301b2407a9a8cbdcc0a6","url":"assets/js/24847ea2.74135c05.js"},{"revision":"b78e98d75ca2de26a007a8c74740144c","url":"assets/js/26257c43.e9eafb52.js"},{"revision":"fd45f29a713fd7b4fb0ed48270043548","url":"assets/js/2bc33efd.1a34c26a.js"},{"revision":"7aeb6942af611c79b823791c12593e5a","url":"assets/js/3201faa7.8ac4c979.js"},{"revision":"31c80626396bd252ff62af30c7ff98e3","url":"assets/js/32778213.230fbe9f.js"},{"revision":"8abe9ef3bb0f282f5f020c429d3a9a33","url":"assets/js/354823c1.f7d306ee.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"d23541b304a3af4b3bd1339aec50ab68","url":"assets/js/37882858.082b9b2c.js"},{"revision":"35db8a1782fdccee729838248b60d727","url":"assets/js/396a05ac.925c878a.js"},{"revision":"afefe40bef986fc676052a984f90ef6b","url":"assets/js/411460cb.929b5b29.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"ca9901c69334d9d21141296df9c959ff","url":"assets/js/41a4aef8.ea20652d.js"},{"revision":"d5f22f1ace9571238de6843f22d992a7","url":"assets/js/44ea2a3d.51df384c.js"},{"revision":"8c222fc08df62f1b0ac74e84c884a51a","url":"assets/js/48c6cc07.242f28b8.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"c40a8fa683eb9be5602dac63332078c1","url":"assets/js/4a9dde3b.10b62763.js"},{"revision":"6b9a8d0e0a5acc9865485016598b2626","url":"assets/js/4b47f78b.059099fe.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"c78afad115d2f0e26adaafb7cdfe5dd2","url":"assets/js/5229ce75.738e5a9e.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"7598389d0a95efd57636e53f14881cc3","url":"assets/js/563969e6.f125dec5.js"},{"revision":"e41bf6d4e16b304d46140a732b2a1e86","url":"assets/js/5995d508.5d31e51f.js"},{"revision":"2bfe099fad92488e840552fb702230a0","url":"assets/js/59e3a47e.e4afdf9b.js"},{"revision":"9b0f1471275c8d968efb2cd663d80bee","url":"assets/js/5aebd6e8.26b7894b.js"},{"revision":"cb9efe04a0909c5c838560af92ede7fd","url":"assets/js/5f49a855.71ccd6a5.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"aba3a78862fb4fa76e04729160a4c799","url":"assets/js/683903ba.5a82cef0.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"bab341ecb72c82aaad0ee8150a3f60de","url":"assets/js/696e1f87.90a40709.js"},{"revision":"e45c9d64f72407f9d7b6ebeb4b6688fe","url":"assets/js/6b69f1ff.0b33c163.js"},{"revision":"70dd297b861a3666da0ff1393db4eae0","url":"assets/js/6e3111c2.65cddfde.js"},{"revision":"f0f9b0f5058beefdbddc13079f5b5219","url":"assets/js/6f9f0f49.e4428811.js"},{"revision":"303714b212c5cd66635b7a3cbde1558d","url":"assets/js/72c9b8f6.6cabdbce.js"},{"revision":"9f5537776052ad3db4881e50b5632500","url":"assets/js/7449d9ed.23385664.js"},{"revision":"1c786d2c3811426c632c63741e27d81b","url":"assets/js/7859bc5c.533a6e80.js"},{"revision":"37aee70abea06665beb41d8fa7bbd8a6","url":"assets/js/78c6c509.3e18f702.js"},{"revision":"aaec1eec6a03955ce1acf59be7714969","url":"assets/js/7998e0de.d9eb4011.js"},{"revision":"ed1b20edcd6a7508cc544351dde5b47d","url":"assets/js/7a7fff1b.44998e50.js"},{"revision":"8b9a4c50e303da687c9d3b35cdb2a65b","url":"assets/js/7e307fec.25ccb2f8.js"},{"revision":"d9a71f5110e614cb46da1f8d27814259","url":"assets/js/800a3acf.6d10d526.js"},{"revision":"de08a23687671eb7a9fdfdb343f8be56","url":"assets/js/8231ac58.05139c9e.js"},{"revision":"0409fe125a2e65c7ebb2d2486744ea7d","url":"assets/js/82a52177.ece19bcb.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"ba7993e12010d82a9d6ea9aff5dd4b58","url":"assets/js/894f4d94.e480ce6c.js"},{"revision":"bc06cd8b574bfdd9a819227403fac0fc","url":"assets/js/8d52ac26.3f138567.js"},{"revision":"9aafd784f1cbbe71eb3fbddee125de3a","url":"assets/js/8ec8555c.5f458401.js"},{"revision":"a75903e46170612e4555ec1ce6655baf","url":"assets/js/9169002b.c5fa6b73.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"68ea4d78e1c1de6cef971af643934cb1","url":"assets/js/935f2afb.a94320ee.js"},{"revision":"8b51ed33852982e9b5b3236d4325ff51","url":"assets/js/9717e045.bdc5294f.js"},{"revision":"8bf80493fb3a8c29812929d77bf83d74","url":"assets/js/9947fe9c.585d5c6d.js"},{"revision":"7f11101a916ff2e165ea7ee9f8386d1f","url":"assets/js/9a57fc4d.be81e1ab.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"eb7711f3bf963211654c3d705ef90526","url":"assets/js/9e17a0a7.56ff7f3d.js"},{"revision":"523f9fbdcfeb75d9efe1a3414ea3f304","url":"assets/js/a1a0db23.f902820d.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"8255afaf709433c4919b7f58e3e6347c","url":"assets/js/a98ab587.ed626006.js"},{"revision":"86521b758ac6fc60b283958489e74add","url":"assets/js/b0ac2aab.6c1ccf98.js"},{"revision":"367ac26140a8d1a492e995ec891b72a2","url":"assets/js/b45514a6.04c14be6.js"},{"revision":"c131c7e775d3aba3ea6eccb980cde02f","url":"assets/js/bafae794.9ef14bfb.js"},{"revision":"ee78d8de05f24a6079981266cc4900cd","url":"assets/js/c1bcbd07.b28a6301.js"},{"revision":"62100865d1930534b3a3c0e37605a892","url":"assets/js/c36fa059.5ca1e47d.js"},{"revision":"2a04d7187c6c6b12f53b921234e65aba","url":"assets/js/c6147012.4b1e5af7.js"},{"revision":"7edb64c9198a06b554e528037c77496a","url":"assets/js/c91a29ee.85e5cfa1.js"},{"revision":"4e1cc7ac6bd0d03ec2a46b793af56757","url":"assets/js/c921e1c5.630002ac.js"},{"revision":"80eeedb469692757002b308f6e2043a2","url":"assets/js/c9386115.b69cff41.js"},{"revision":"07d6548929b5cb941a8523840d4d49b0","url":"assets/js/ca4084cc.9c41458b.js"},{"revision":"81fa6edbeefe31b25ed60cdf1a5cf445","url":"assets/js/cd01922d.6babd1a4.js"},{"revision":"4c60a6e5f77c0fd5e0325932b73184d2","url":"assets/js/ceb3afff.230b6cb9.js"},{"revision":"f6151cb7c545419e7064979665b739c8","url":"assets/js/cf63ef8e.e76c31e7.js"},{"revision":"193ea9f64e932031f52fc952fd59efc2","url":"assets/js/d3f7bfd6.41d682f7.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"3e8d5d7c7e2f84ab6726e2cd7bac03b4","url":"assets/js/d8d851c4.1c43a6ae.js"},{"revision":"535efa86bb8c06f96cd0b580c7a4087b","url":"assets/js/dd6e99a2.a981c126.js"},{"revision":"afc30eeec6dfb91463f22da14ce5bde5","url":"assets/js/df7efcc1.e40d9055.js"},{"revision":"5e369b6355874fc916286e8424c7da77","url":"assets/js/dfc29094.7f911903.js"},{"revision":"d294beb0bf50b2e58710e23088d18c99","url":"assets/js/e02ba15b.f50b0556.js"},{"revision":"f5197651428b79c6ec5dfac254a86094","url":"assets/js/e3a7aa50.8540f41d.js"},{"revision":"68cab3ff64ae9dd33ef50cd6655e66c9","url":"assets/js/e5c54bdb.b544ee29.js"},{"revision":"8d0adaba0f34673fcf1d0740774bf1ff","url":"assets/js/e77f4328.91069a5e.js"},{"revision":"43deaac9b2167e4f97a3cf8b98472d66","url":"assets/js/e7e568e4.8cfb93e8.js"},{"revision":"33ada8669dbdbcb7be56df98b2ba2822","url":"assets/js/e9780dc4.7861d24b.js"},{"revision":"73ae9ee9fdedc51b963417bb9a7d0040","url":"assets/js/ee02910b.f923b7f1.js"},{"revision":"e0357130023cb899f115bf5cb69299ef","url":"assets/js/f2e0d9eb.7d16569f.js"},{"revision":"1009caae709c9f354a3f3074f9714950","url":"assets/js/f36dee5a.d7a7c047.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"fa9cb381cadeadfca40b59096e006ee8","url":"assets/js/f740b2ca.38699007.js"},{"revision":"9294054a337db5deecd1cf0c0b0af97c","url":"assets/js/f7cef55a.1c2474e4.js"},{"revision":"663ddbc000fce68680769f1abe9b35a7","url":"assets/js/f9806908.94bd0b9b.js"},{"revision":"5516ce279ce1e17bb6da0e09e61f17e0","url":"assets/js/fba67bfa.7070c850.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"216c4405fea4edef500a6b3f8e478dcc","url":"assets/js/fc970c7f.f4d1e768.js"},{"revision":"8f939a40890593a849ce8de2a26b30da","url":"assets/js/main.a1d0ab75.js"},{"revision":"fc4381994945f60a01cf5d33e0922f9f","url":"assets/js/runtime~main.12aad7c2.js"},{"revision":"76b6f8a6c226cf6be526ca03558a3d36","url":"category/-middleware/index.html"},{"revision":"6f5ba5464021638126443d228002ed9b","url":"category/api/index.html"},{"revision":"1f70162f8b6a779097bf01c2b3e8b6c2","url":"category/extra/index.html"},{"revision":"d1a67f9a0e1ea9db1b585e3cae220a63","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"e27d9aa64f656c2dd412ca3b48806164","url":"extra/benchmarks/index.html"},{"revision":"67149632d5c89a6d97bd5c51a77a157e","url":"extra/faq/index.html"},{"revision":"9d5ed09cb82c18b6efd02483c6ea4280","url":"guide/error-handling/index.html"},{"revision":"c06f75c1f599893b665d7be24e43e9a6","url":"guide/faster-fiber/index.html"},{"revision":"f28c8e55a0d838a6141961bd49d0e661","url":"guide/grouping/index.html"},{"revision":"dfbfdc4b3eabd7f28fd0e2c009415f47","url":"guide/hooks/index.html"},{"revision":"c4afcbb1df1bb3678131b33718283370","url":"guide/routing/index.html"},{"revision":"9255d639b3da98188035168db23d8769","url":"guide/templates/index.html"},{"revision":"ff38177ea4a83dba49168bafe50e09d3","url":"guide/validation/index.html"},{"revision":"ceccf92f097bba19cf6dafc0595320ba","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"d1971acbabb1ffee7fbeaa9c662579cf","url":"next/api/app/index.html"},{"revision":"13f57846a6470ab538d1e8373eff3e88","url":"next/api/client/index.html"},{"revision":"a9695aa67c1f69a94528bdf5088e41ea","url":"next/api/constants/index.html"},{"revision":"fcf6c00a37369b08379001c447a64481","url":"next/api/ctx/index.html"},{"revision":"bb9c882973c8be469d8da6240d4bd38e","url":"next/api/fiber/index.html"},{"revision":"31982d9de702bc29ac1543a7760793cb","url":"next/api/middleware/basicauth/index.html"},{"revision":"0e189d18c9b10d3339b0a1d231172b58","url":"next/api/middleware/cache/index.html"},{"revision":"56b0af80cfb548f29e9feb047edc054a","url":"next/api/middleware/compress/index.html"},{"revision":"fedb1abce612e52484869ad9f5e5a0fd","url":"next/api/middleware/cors/index.html"},{"revision":"a30953acabafcde6b1dfe6aa0d284ce3","url":"next/api/middleware/csrf/index.html"},{"revision":"a9f7ea2a224cf39054a908f4bad35d84","url":"next/api/middleware/earlydata/index.html"},{"revision":"c0ba1fe8c177f2156b2ff2734bb57c9e","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"d6e2dd4441790364ae94d54cbcd6ad38","url":"next/api/middleware/envvar/index.html"},{"revision":"c3881e7970fb1bc9dd24fb46d32bcb78","url":"next/api/middleware/etag/index.html"},{"revision":"73772fe379bf5b716145b68b44a6cc0b","url":"next/api/middleware/expvar/index.html"},{"revision":"6ab7cfce0ddf716965f0ee9b0ce80bc3","url":"next/api/middleware/favicon/index.html"},{"revision":"35619bffed0c093671167e91ed39fb90","url":"next/api/middleware/filesystem/index.html"},{"revision":"017318436986c3f8e57927e0d377d440","url":"next/api/middleware/idempotency/index.html"},{"revision":"9cb2cf9f6c3f0f945dd9d6343c19eed3","url":"next/api/middleware/limiter/index.html"},{"revision":"ed728cadcb29a3d760462229e05fc4f4","url":"next/api/middleware/logger/index.html"},{"revision":"95a854886e5f6052b679df23ed1ad51c","url":"next/api/middleware/monitor/index.html"},{"revision":"0ee52273fb52ec18b9a53f27849658c8","url":"next/api/middleware/pprof/index.html"},{"revision":"e3701ed398dd71400a8c224f4536cc1b","url":"next/api/middleware/proxy/index.html"},{"revision":"c1d37b924fb4d5737d714315b296ebf5","url":"next/api/middleware/recover/index.html"},{"revision":"761364a1da4e428af98298a77c6034c5","url":"next/api/middleware/requestid/index.html"},{"revision":"bbcb0bed7940d3ec3164a9503b8d2814","url":"next/api/middleware/session/index.html"},{"revision":"eb228c277c026fea9b1d9c225196ce3e","url":"next/api/middleware/skip/index.html"},{"revision":"1e4ecbd1f42afc874de1e63681d58b1f","url":"next/api/middleware/timeout/index.html"},{"revision":"7628d278a5143c939349e495058c950a","url":"next/category/-middleware/index.html"},{"revision":"0fe1f0ca7e7f1f3539535e2f757ad233","url":"next/category/api/index.html"},{"revision":"413c4af990371358c2021b7979982839","url":"next/category/extra/index.html"},{"revision":"f1d71a8fc3a660bb2c17aecf5359f360","url":"next/category/guide/index.html"},{"revision":"6752289ef4341731b39d7a27eee2c365","url":"next/extra/benchmarks/index.html"},{"revision":"663f79e35f74dfce48694dba73199400","url":"next/extra/faq/index.html"},{"revision":"debe8a28355ff766506b1f2f583cf6dc","url":"next/guide/error-handling/index.html"},{"revision":"c6fd6ad10b3138bcf940a2d1dd776308","url":"next/guide/faster-fiber/index.html"},{"revision":"8545b12b786c78e8f5cad1807b1767e7","url":"next/guide/grouping/index.html"},{"revision":"1a4f9ad70488ca35c9d9a3d0ffcfd25c","url":"next/guide/hooks/index.html"},{"revision":"017fdda6a9b115fa24960e5bb8866754","url":"next/guide/routing/index.html"},{"revision":"b5f88f4a80d35083ab2ba357373914a2","url":"next/guide/templates/index.html"},{"revision":"b9fc07265f4c3572c70cab0fa86629ce","url":"next/guide/validation/index.html"},{"revision":"6c425663456ad4e0e9ccc0f7b973fc1c","url":"next/index.html"},{"revision":"bf5b10dd5da15270928fc2aacd6898f8","url":"next/partials/routing/route-handlers/index.html"},{"revision":"72444326756b23a72aac00cdb7324a58","url":"next/search-index.json"},{"revision":"c2711f397dfd3e3f5e223a70e302339c","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"ac15d5531b184d2e96d76dddbcb7ed01","url":"search-index.json"},{"revision":"e3660addd91a9c30b68be21d87c7ee2a","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"0ade7a2feb93381b7aa3bd5fa3770d36","url":"v1.x/api/app/index.html"},{"revision":"ffc1c1311bf5578a91401a4e87d67552","url":"v1.x/api/ctx/index.html"},{"revision":"4b847907695bc8dc343a95f2380e471b","url":"v1.x/api/middleware/index.html"},{"revision":"8982fe14172a11acc29ef49f88c44800","url":"v1.x/category/api/index.html"},{"revision":"0bc2c4a2b90c4845b21c85c445baba67","url":"v1.x/category/guide/index.html"},{"revision":"c6fe5762295e6d0603cdad0a0b0dad06","url":"v1.x/category/misc/index.html"},{"revision":"f7525faa7ccb5d48fb0a648152f0f2e0","url":"v1.x/guide/error-handling/index.html"},{"revision":"1f6dd2ca732c051c2d89568fce257245","url":"v1.x/guide/grouping/index.html"},{"revision":"d160db01932ce5a9e520333d032960cb","url":"v1.x/guide/routing/index.html"},{"revision":"a42ca48c9ba8a4a7ce2db0b3e271dc6d","url":"v1.x/guide/templates/index.html"},{"revision":"dc67509f6cdf16901996151441c880c6","url":"v1.x/guide/validating/index.html"},{"revision":"5bf3c67b656705fc7a66681895dd9df5","url":"v1.x/index.html"},{"revision":"36ac6ec9be6a808e970121f3150c14ae","url":"v1.x/misc/benchmarks/index.html"},{"revision":"b70e95013c27817d0e8eab376367bd7a","url":"v1.x/misc/faq/index.html"},{"revision":"c14882e6916cde4d72dabfa5b0b1282c","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();