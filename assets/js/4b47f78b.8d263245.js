"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"cache",title:"Cache"},o=void 0,c={unversionedId:"api/middleware/cache",id:"version-v2.x/api/middleware/cache",title:"Cache",description:"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!",source:"@site/versioned_docs/version-v2.x/api/middleware/cache.md",sourceDirName:"api/middleware",slug:"/api/middleware/cache",permalink:"/api/middleware/cache",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1686406588,formattedLastUpdatedAt:"Jun 10, 2023",frontMatter:{id:"cache",title:"Cache"},sidebar:"tutorialSidebar",previous:{title:"BasicAuth",permalink:"/api/middleware/basicauth"},next:{title:"Compress",permalink:"/api/middleware/compress"}},l={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cache middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," designed to intercept responses and cache them. This middleware will cache the ",(0,a.kt)("inlineCode",{parentName:"p"},"Body"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StatusCode")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"c.Path()")," as unique identifier. Special thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/codemicro/fiber-cache"},"@codemicro")," for creating this middleware for Fiber core!"),(0,a.kt)("p",null,"Request Directives",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," will return the up-to-date response but still caches it. You will always get a ",(0,a.kt)("inlineCode",{parentName:"p"},"miss")," cache status.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-store")," will refrain from caching. You will always get the up-to-date response."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/cache"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(cache.New())\n\n// Or extend your config for customization\napp.Use(cache.New(cache.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return c.Query("refresh") == "true"\n    },\n    Expiration: 30 * time.Minute,\n    CacheControl: true,\n}))\n')),(0,a.kt)("p",null,"Or you can custom key and expire time like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cache.New(cache.Config{\n    ExpirationGenerator: func(c *fiber.Ctx, cfg *cache.Config) time.Duration {\n        newCacheTime, _ := strconv.Atoi(c.GetRespHeader("Cache-Time", "600"))\n        return time.Second * time.Duration(newCacheTime)\n    },\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return utils.CopyString(c.Path())\n    },\n}))\n\napp.Get("/", func(c *fiber.Ctx) error {\n    c.Response().Header.Add("Cache-Time", "6000")\n    return c.SendString("hi")\n})\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Expiration is the time that an cached response will live\n    //\n    // Optional. Default: 1 * time.Minute\n    Expiration time.Duration\n\n    // CacheHeader header on response header, indicate cache status, with the following possible return value\n    //\n    // hit, miss, unreachable\n    //\n    // Optional. Default: X-Cache\n    CacheHeader string\n\n    // CacheControl enables client side caching if set to true\n    //\n    // Optional. Default: false\n    CacheControl bool\n\n    // Key allows you to generate custom keys, by default c.Path() is used\n    //\n    // Default: func(c *fiber.Ctx) string {\n    //   return utils.CopyString(c.Path())\n    // }\n    KeyGenerator func(*fiber.Ctx) string\n\n    // allows you to generate custom Expiration Key By Key, default is Expiration (Optional)\n    //\n    // Default: nil\n    ExpirationGenerator func(*fiber.Ctx, *Config) time.Duration\n\n    // Store is used to store the state of the middleware\n    //\n    // Default: an in memory store for this process only\n    Storage fiber.Storage\n\n    // allows you to store additional headers generated by next middlewares & handler\n    //\n    // Default: false\n    StoreResponseHeaders bool\n\n    // Max number of bytes of response bodies simultaneously stored in cache. When limit is reached,\n    // entries with the nearest expiration are deleted to make room for new.\n    // 0 means no limit\n    //\n    // Default: 0\n    MaxBytes uint\n\n    // You can specify HTTP methods to cache.\n    // The middleware just caches the routes of its methods in this slice.\n    //\n    // Default: []string{fiber.MethodGet, fiber.MethodHead}\n    Methods []string\n}\n")),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    Expiration:   1 * time.Minute,\n    CacheHeader:  "X-Cache",\n    CacheControl: false,\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return utils.CopyString(c.Path())\n    },\n    ExpirationGenerator:  nil,\n    StoreResponseHeaders: false,\n    Storage:              nil,\n    MaxBytes:             0,\n    Methods: []string{fiber.MethodGet, fiber.MethodHead},\n}\n')))}d.isMDXComponent=!0}}]);