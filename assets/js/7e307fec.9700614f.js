"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"limiter",title:"Limiter"},o=void 0,s={unversionedId:"api/middleware/limiter",id:"version-v2.x/api/middleware/limiter",title:"Limiter",description:"Limiter middleware for Fiber that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled.",source:"@site/versioned_docs/version-v2.x/api/middleware/limiter.md",sourceDirName:"api/middleware",slug:"/api/middleware/limiter",permalink:"/api/middleware/limiter",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1688653574,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"limiter",title:"Limiter"},sidebar:"tutorialSidebar",previous:{title:"Keyauth",permalink:"/api/middleware/keyauth"},next:{title:"Logger",permalink:"/api/middleware/logger"}},l={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Sliding window",id:"sliding-window",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Limiter middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This module does not share state with other processes/servers by default.")),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/limiter"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(limiter.New())\n\n// Or extend your config for customization\napp.Use(limiter.New(limiter.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return c.IP() == "127.0.0.1"\n    },\n    Max:          20,\n    Expiration:     30 * time.Second,\n    KeyGenerator:          func(c *fiber.Ctx) string {\n        return c.Get("x-forwarded-for")\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendFile("./toofast.html")\n    },\n    Storage: myCustomStorage{},\n}))\n')),(0,i.kt)("h2",{id:"sliding-window"},"Sliding window"),(0,i.kt)("p",null,"Instead of using the standard fixed window algorithm, you can enable the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sliding_window_protocol"},"sliding window")," algorithm."),(0,i.kt)("p",null,"A example of such configuration is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(limiter.New(limiter.Config{\n    Max:            20,\n    Expiration:     30 * time.Second,\n    LimiterMiddleware: limiter.SlidingWindow{},\n}))\n")),(0,i.kt)("p",null,"This means that every window will take into account the previous window(if there was any). The given formula for the rate is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"weightOfPreviousWindpw = previous window's amount request * (whenNewWindow / Expiration)\nrate = weightOfPreviousWindpw + current window's amount request.\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Max number of recent connections during `Duration` seconds before sending a 429 response\n    //\n    // Default: 5\n    Max int\n\n    // KeyGenerator allows you to generate custom keys, by default c.IP() is used\n    //\n    // Default: func(c *fiber.Ctx) string {\n    //   return c.IP()\n    // }\n    KeyGenerator func(*fiber.Ctx) string\n\n    // Expiration is the time on how long to keep records of requests in memory\n    //\n    // Default: 1 * time.Minute\n    Expiration time.Duration\n\n    // LimitReached is called when a request hits the limit\n    //\n    // Default: func(c *fiber.Ctx) error {\n    //   return c.SendStatus(fiber.StatusTooManyRequests)\n    // }\n    LimitReached fiber.Handler\n\n    // When set to true, requests with StatusCode >= 400 won't be counted.\n    //\n    // Default: false\n    SkipFailedRequests bool\n\n    // When set to true, requests with StatusCode < 400 won't be counted.\n    //\n    // Default: false\n    SkipSuccessfulRequests bool\n\n    // Store is used to store the state of the middleware\n    //\n    // Default: an in memory store for this process only\n    Storage fiber.Storage\n\n    // LimiterMiddleware is the struct that implements limiter middleware.\n    //\n    // Default: a new Fixed Window Rate Limiter\n    LimiterMiddleware LimiterHandler\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A custom store can be used if it implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," interface - more details and an example can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"store.go"),".")),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Max:        5,\n    Expiration: 1 * time.Minute,\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return c.IP()\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusTooManyRequests)\n    },\n    SkipFailedRequests: false,\n    SkipSuccessfulRequests: false,\n    LimiterMiddleware: FixedWindow{},\n}\n")),(0,i.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,i.kt)("p",null,"You can use any storage from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(limiter.New(limiter.Config{\n    Storage: storage,\n}))\n")))}c.isMDXComponent=!0}}]);