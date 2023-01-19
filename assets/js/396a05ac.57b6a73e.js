"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"compress",title:"Compress",sidebar_position:3},i=void 0,s={unversionedId:"api/middleware/compress",id:"api/middleware/compress",title:"Compress",description:"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.",source:"@site/docs/api/middleware/compress.md",sourceDirName:"api/middleware",slug:"/api/middleware/compress",permalink:"/docs/api/middleware/compress",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/compress.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1674142774,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:3,frontMatter:{id:"compress",title:"Compress",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/docs/api/middleware/cache"},next:{title:"CORS",permalink:"/docs/api/middleware/cors"}},l={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Compression middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that will compress the response using ",(0,o.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deflate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brotli")," compression depending on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"},"Accept-Encoding")," header."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/compress"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Default middleware config\napp.Use(compress.New())\n\n// Provide a custom compression level\napp.Use(compress.New(compress.Config{\n    Level: compress.LevelBestSpeed, // 1\n}))\n\n// Skip middleware for specific routes\napp.Use(compress.New(compress.Config{\n  Next:  func(c *fiber.Ctx) bool {\n    return c.Path() == "/dont_compress"\n  },\n  Level: compress.LevelBestSpeed, // 1\n}))\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // CompressLevel determines the compression algoritm\n    //\n    // Optional. Default: LevelDefault\n    // LevelDisabled:         -1\n    // LevelDefault:          0\n    // LevelBestSpeed:        1\n    // LevelBestCompression:  2\n    Level int\n}\n")),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:  nil,\n    Level: LevelDefault,\n}\n")),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Compression levels\nconst (\n    LevelDisabled        = -1\n    LevelDefault         = 0\n    LevelBestSpeed       = 1\n    LevelBestCompression = 2\n)\n")))}d.isMDXComponent=!0}}]);