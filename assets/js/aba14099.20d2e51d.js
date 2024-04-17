"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[92593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"compress"},o="Compress",l={unversionedId:"api/middleware/compress",id:"api/middleware/compress",title:"Compress",description:"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.",source:"@site/docs/core/api/middleware/compress.md",sourceDirName:"api/middleware",slug:"/api/middleware/compress",permalink:"/next/api/middleware/compress",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/compress.md",tags:[],version:"current",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"compress"},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/next/api/middleware/cache"},next:{title:"CORS",permalink:"/next/api/middleware/cors"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Config",id:"config-1",level:3},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compress"},"Compress"),(0,a.kt)("p",null,"Compression middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that will compress the response using ",(0,a.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deflate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"brotli")," compression depending on the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"},"Accept-Encoding")," header."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The compression middleware refrains from compressing bodies that are smaller than 200 bytes. This decision is based on the observation that, in such cases, the compressed size is likely to exceed the original size, making compression inefficient. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp/blob/497922a21ef4b314f393887e9c6147b8c3e3eda4/http.go#L1713-L1715"},"more"))),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/compress"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(compress.New())\n\n// Or extend your config for customization\napp.Use(compress.New(compress.Config{\n    Level: compress.LevelBestSpeed, // 1\n}))\n\n// Skip middleware for specific routes\napp.Use(compress.New(compress.Config{\n  Next:  func(c fiber.Ctx) bool {\n    return c.Path() == "/dont_compress"\n  },\n  Level: compress.LevelBestSpeed, // 1\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("h3",{id:"config-1"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Level"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Level")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Level determines the compression algorithm."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"LevelDefault (0)"))))),(0,a.kt)("p",null,'Possible values for the "Level" field are:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LevelDisabled (-1)"),": Compression is disabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LevelDefault (0)"),": Default compression level."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LevelBestSpeed (1)"),": Best compression speed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LevelBestCompression (2)"),": Best compression.")),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:  nil,\n    Level: LevelDefault,\n}\n")),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Compression levels\nconst (\n    LevelDisabled        = -1\n    LevelDefault         = 0\n    LevelBestSpeed       = 1\n    LevelBestCompression = 2\n)\n")))}m.isMDXComponent=!0}}]);