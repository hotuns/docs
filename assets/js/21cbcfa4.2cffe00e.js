"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[81681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),f=r,u=s["".concat(d,".").concat(f)]||s[f]||m[f]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},87386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"cache"},l="Cache",o={unversionedId:"api/middleware/cache",id:"api/middleware/cache",title:"Cache",description:"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!",source:"@site/docs/core/api/middleware/cache.md",sourceDirName:"api/middleware",slug:"/api/middleware/cache",permalink:"/next/api/middleware/cache",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/cache.md",tags:[],version:"current",lastUpdatedAt:1707207024,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{id:"cache"},sidebar:"tutorialSidebar",previous:{title:"BasicAuth",permalink:"/next/api/middleware/basicauth"},next:{title:"Compress",permalink:"/next/api/middleware/compress"}},d={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Cache middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," designed to intercept responses and cache them. This middleware will cache the ",(0,r.kt)("inlineCode",{parentName:"p"},"Body"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusCode")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"c.Path()")," as unique identifier. Special thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codemicro/fiber-cache"},"@codemicro")," for creating this middleware for Fiber core!"),(0,r.kt)("p",null,"Request Directives",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," will return the up-to-date response but still caches it. You will always get a ",(0,r.kt)("inlineCode",{parentName:"p"},"miss")," cache status.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-store")," will refrain from caching. You will always get the up-to-date response."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/cache"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(cache.New())\n\n// Or extend your config for customization\napp.Use(cache.New(cache.Config{\n    Next: func(c fiber.Ctx) bool {\n        return fiber.Query[bool](c, "noCache")\n    },\n    Expiration: 30 * time.Minute,\n    CacheControl: true,\n}))\n')),(0,r.kt)("p",null,"Or you can custom key and expire time like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cache.New(cache.Config{\n    ExpirationGenerator: func(c fiber.Ctx, cfg *cache.Config) time.Duration {\n        newCacheTime, _ := strconv.Atoi(c.GetRespHeader("Cache-Time", "600"))\n        return time.Second * time.Duration(newCacheTime)\n    },\n    KeyGenerator: func(c fiber.Ctx) string {\n        return utils.CopyString(c.Path())\n    },\n}))\n\napp.Get("/", func(c fiber.Ctx) error {\n    c.Response().Header.Add("Cache-Time", "6000")\n    return c.SendString("hi")\n})\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function that is executed before creating the cache entry and can be used to execute the request without cache creation. If an entry already exists, it will be used. If you want to completely bypass the cache functionality in certain cases, you should use the ",(0,r.kt)("a",{parentName:"td",href:"/next/api/middleware/skip"},"skip middleware"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration is the time that a cached response will live."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1 * time.Minute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CacheHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'CacheHeader is the header on the response header that indicates the cache status, with the possible return values "hit," "miss," or "unreachable."'),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"X-Cache"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CacheControl"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CacheControl enables client-side caching if set to true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key allows you to generate custom keys."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(c fiber.Ctx) string { return utils.CopyString(c.Path()) }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExpirationGenerator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx, *cache.Config) time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ExpirationGenerator allows you to generate custom expiration keys based on the request."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Store is used to store the state of the middleware."),(0,r.kt)("td",{parentName:"tr",align:"left"},"In-memory store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Store (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Use Storage instead."),(0,r.kt)("td",{parentName:"tr",align:"left"},"In-memory store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Key (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Use KeyGenerator instead."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"StoreResponseHeaders"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"StoreResponseHeaders allows you to store additional headers generated by next middlewares & handler."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxBytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxBytes is the maximum number of bytes of response bodies simultaneously stored in cache."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")," (No limit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Methods"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Methods specifies the HTTP methods to cache."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string{fiber.MethodGet, fiber.MethodHead}"))))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    Expiration:   1 * time.Minute,\n    CacheHeader:  "X-Cache",\n    CacheControl: false,\n    KeyGenerator: func(c fiber.Ctx) string {\n        return utils.CopyString(c.Path())\n    },\n    ExpirationGenerator:  nil,\n    StoreResponseHeaders: false,\n    Storage:              nil,\n    MaxBytes:             0,\n    Methods: []string{fiber.MethodGet, fiber.MethodHead},\n}\n')))}m.isMDXComponent=!0}}]);