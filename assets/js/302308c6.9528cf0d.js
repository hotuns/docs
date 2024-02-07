"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[39092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,c=m["".concat(d,".").concat(u)]||m[u]||f[u]||i;return a?r.createElement(c,o(o({ref:t},s),{},{components:a})):r.createElement(c,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"limiter"},o="Limiter",l={unversionedId:"api/middleware/limiter",id:"api/middleware/limiter",title:"Limiter",description:"Limiter middleware for Fiber that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled.",source:"@site/docs/core/api/middleware/limiter.md",sourceDirName:"api/middleware",slug:"/api/middleware/limiter",permalink:"/next/api/middleware/limiter",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/limiter.md",tags:[],version:"current",lastUpdatedAt:1707310911,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"limiter"},sidebar:"tutorialSidebar",previous:{title:"Keyauth",permalink:"/next/api/middleware/keyauth"},next:{title:"Logger",permalink:"/next/api/middleware/logger"}},d={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Sliding window",id:"sliding-window",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],s={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"limiter"},"Limiter"),(0,n.kt)("p",null,"Limiter middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This module does not share state with other processes/servers by default.")),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/limiter"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(limiter.New())\n\n// Or extend your config for customization\napp.Use(limiter.New(limiter.Config{\n    Next: func(c fiber.Ctx) bool {\n        return c.IP() == "127.0.0.1"\n    },\n    Max:          20,\n    Expiration:     30 * time.Second,\n    KeyGenerator:          func(c fiber.Ctx) string {\n        return c.Get("x-forwarded-for")\n    },\n    LimitReached: func(c fiber.Ctx) error {\n        return c.SendFile("./toofast.html")\n    },\n    Storage: myCustomStorage{},\n}))\n')),(0,n.kt)("h2",{id:"sliding-window"},"Sliding window"),(0,n.kt)("p",null,"Instead of using the standard fixed window algorithm, you can enable the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sliding_window_protocol"},"sliding window")," algorithm."),(0,n.kt)("p",null,"A example of such configuration is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(limiter.New(limiter.Config{\n    Max:            20,\n    Expiration:     30 * time.Second,\n    LimiterMiddleware: limiter.SlidingWindow{},\n}))\n")),(0,n.kt)("p",null,"This means that every window will take into account the previous window(if there was any). The given formula for the rate is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"weightOfPreviousWindpw = previous window's amount request * (whenNewWindow / Expiration)\nrate = weightOfPreviousWindpw + current window's amount request.\n")),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nil"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Max"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Max number of recent connections during ",(0,n.kt)("inlineCode",{parentName:"td"},"Expiration")," seconds before sending a 429 response."),(0,n.kt)("td",{parentName:"tr",align:"left"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator allows you to generate custom keys, by default c.IP() is used."),(0,n.kt)("td",{parentName:"tr",align:"left"},"A function using c.IP() as the default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Expiration"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Expiration is the time on how long to keep records of requests in memory."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 * time.Minute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LimitReached"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,n.kt)("td",{parentName:"tr",align:"left"},"LimitReached is called when a request hits the limit."),(0,n.kt)("td",{parentName:"tr",align:"left"},"A function sending 429 response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SkipFailedRequests"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"When set to true, requests with StatusCode >= 400 won't be counted."),(0,n.kt)("td",{parentName:"tr",align:"left"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SkipSuccessfulRequests"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"When set to true, requests with StatusCode < 400 won't be counted."),(0,n.kt)("td",{parentName:"tr",align:"left"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Store is used to store the state of the middleware."),(0,n.kt)("td",{parentName:"tr",align:"left"},"An in-memory store for this process only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LimiterMiddleware"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"LimiterHandler")),(0,n.kt)("td",{parentName:"tr",align:"left"},"LimiterMiddleware is the struct that implements a limiter middleware."),(0,n.kt)("td",{parentName:"tr",align:"left"},"A new Fixed Window Rate Limiter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Duration (Deprecated)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Use Expiration instead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Store (Deprecated)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Use Storage instead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Key (Deprecated)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Use KeyGenerator instead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A custom store can be used if it implements the ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," interface - more details and an example can be found in ",(0,n.kt)("inlineCode",{parentName:"p"},"store.go"),".")),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Max:        5,\n    Expiration: 1 * time.Minute,\n    KeyGenerator: func(c fiber.Ctx) string {\n        return c.IP()\n    },\n    LimitReached: func(c fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusTooManyRequests)\n    },\n    SkipFailedRequests: false,\n    SkipSuccessfulRequests: false,\n    LimiterMiddleware: FixedWindow{},\n}\n")),(0,n.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,n.kt)("p",null,"You can use any storage from our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(limiter.New(limiter.Config{\n    Storage: storage,\n}))\n")))}f.isMDXComponent=!0}}]);