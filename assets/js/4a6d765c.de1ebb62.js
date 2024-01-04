"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[13729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},f="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),f=d(n),s=a,k=f["".concat(p,".").concat(s)]||f[s]||g[s]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[f]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25653:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={id:"helmet"},i="Helmet",o={unversionedId:"api/middleware/helmet",id:"version-v2.x/api/middleware/helmet",title:"Helmet",description:"Helmet middleware helps secure your apps by setting various HTTP headers.",source:"@site/versioned_docs/version-v2.x/api/middleware/helmet.md",sourceDirName:"api/middleware",slug:"/api/middleware/helmet",permalink:"/api/middleware/helmet",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1704366986,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"helmet"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/api/middleware/filesystem"},next:{title:"Idempotency",permalink:"/api/middleware/idempotency"}},p={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],m={toc:d},f="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"helmet"},"Helmet"),(0,a.kt)("p",null,"Helmet middleware helps secure your apps by setting various HTTP headers."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/helmet"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  app.Use(helmet.New())\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Welcome!")\n  })\n\n  app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"curl -I http://localhost:3000\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip middleware."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"XSSProtection"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"XSSProtection"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"0"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ContentTypeNosniff"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ContentTypeNosniff"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"nosniff"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"XFrameOptions"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"XFrameOptions"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"SAMEORIGIN"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSMaxAge"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSMaxAge"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSExcludeSubdomains"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSExcludeSubdomains"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ContentSecurityPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ContentSecurityPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CSPReportOnly"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"CSPReportOnly"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSPreloadEnabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HSTSPreloadEnabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ReferrerPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ReferrerPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"ReferrerPolicy"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PermissionPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Permissions-Policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CrossOriginEmbedderPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cross-Origin-Embedder-Policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"require-corp"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CrossOriginOpenerPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cross-Origin-Opener-Policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"same-origin"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CrossOriginResourcePolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cross-Origin-Resource-Policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"same-origin"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"OriginAgentCluster"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Origin-Agent-Cluster"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"?1"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"XDNSPrefetchControl"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"X-DNS-Prefetch-Control"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"off"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"XDownloadOptions"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"X-Download-Options"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"noopen"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"XPermittedCrossDomain"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"X-Permitted-Cross-Domain-Policies"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"none"')))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    XSSProtection:             "0",\n    ContentTypeNosniff:        "nosniff",\n    XFrameOptions:             "SAMEORIGIN",\n    ReferrerPolicy:            "no-referrer",\n    CrossOriginEmbedderPolicy: "require-corp",\n    CrossOriginOpenerPolicy:   "same-origin",\n    CrossOriginResourcePolicy: "same-origin",\n    OriginAgentCluster:        "?1",\n    XDNSPrefetchControl:       "off",\n    XDownloadOptions:          "noopen",\n    XPermittedCrossDomain:     "none",\n}\n')))}g.isMDXComponent=!0}}]);