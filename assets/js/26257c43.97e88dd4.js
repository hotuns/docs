"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5890],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={id:"compress",title:"Compress"},i=void 0,l={unversionedId:"api/middleware/compress",id:"version-v2.x/api/middleware/compress",title:"Compress",description:"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.",source:"@site/versioned_docs/version-v2.x/api/middleware/compress.md",sourceDirName:"api/middleware",slug:"/api/middleware/compress",permalink:"/api/middleware/compress",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1688638075,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"compress",title:"Compress"},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/api/middleware/cache"},next:{title:"CORS",permalink:"/api/middleware/cors"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Compression middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that will compress the response using ",(0,o.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deflate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brotli")," compression depending on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"},"Accept-Encoding")," header."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/compress"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(compress.New())\n\n// Or extend your config for customization\napp.Use(compress.New(compress.Config{\n    Level: compress.LevelBestSpeed, // 1\n}))\n\n// Skip middleware for specific routes\napp.Use(compress.New(compress.Config{\n  Next:  func(c *fiber.Ctx) bool {\n    return c.Path() == "/dont_compress"\n  },\n  Level: compress.LevelBestSpeed, // 1\n}))\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Level determines the compression algoritm\n    //\n    // Optional. Default: LevelDefault\n    // LevelDisabled:         -1\n    // LevelDefault:          0\n    // LevelBestSpeed:        1\n    // LevelBestCompression:  2\n    Level int\n}\n")),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:  nil,\n    Level: LevelDefault,\n}\n")),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Compression levels\nconst (\n    LevelDisabled        = -1\n    LevelDefault         = 0\n    LevelBestSpeed       = 1\n    LevelBestCompression = 2\n)\n")))}m.isMDXComponent=!0}}]);