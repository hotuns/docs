"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1252],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={id:"helmet",title:"Helmet"},a=void 0,l={unversionedId:"api/middleware/helmet",id:"api/middleware/helmet",title:"Helmet",description:"Helmet middleware helps secure your apps by setting various HTTP headers.",source:"@site/docs/core/api/middleware/helmet.md",sourceDirName:"api/middleware",slug:"/api/middleware/helmet",permalink:"/next/api/middleware/helmet",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/helmet.md",tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1688653574,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"helmet",title:"Helmet"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/next/api/middleware/filesystem"},next:{title:"Idempotency",permalink:"/next/api/middleware/idempotency"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],u={toc:p},c="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Helmet middleware helps secure your apps by setting various HTTP headers."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/helmet"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  app.Use(helmet.New())\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Welcome!")\n  })\n\n  app.Listen(":3000")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl -I http://localhost:3000\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip middleware.\n    // Optional. Default: nil\n    Next func(*fiber.Ctx) bool\n\n    // XSSProtection\n    // Optional. Default value "0".\n    XSSProtection string\n\n    // ContentTypeNosniff\n    // Optional. Default value "nosniff".\n    ContentTypeNosniff string\n\n    // XFrameOptions\n    // Optional. Default value "SAMEORIGIN".\n    // Possible values: "SAMEORIGIN", "DENY", "ALLOW-FROM uri"\n    XFrameOptions string\n\n    // HSTSMaxAge\n    // Optional. Default value 0.\n    HSTSMaxAge int\n\n    // HSTSExcludeSubdomains\n    // Optional. Default value false.\n    HSTSExcludeSubdomains bool\n\n    // ContentSecurityPolicy\n    // Optional. Default value "".\n    ContentSecurityPolicy string\n\n    // CSPReportOnly\n    // Optional. Default value false.\n    CSPReportOnly bool\n\n    // HSTSPreloadEnabled\n    // Optional. Default value false.\n    HSTSPreloadEnabled bool\n\n    // ReferrerPolicy\n    // Optional. Default value "ReferrerPolicy".\n    ReferrerPolicy string\n\n    // Permissions-Policy\n    // Optional. Default value "".\n    PermissionPolicy string\n\n    // Cross-Origin-Embedder-Policy\n    // Optional. Default value "require-corp".\n    CrossOriginEmbedderPolicy string\n\n    // Cross-Origin-Opener-Policy\n    // Optional. Default value "same-origin".\n    CrossOriginOpenerPolicy string\n\n    // Cross-Origin-Resource-Policy\n    // Optional. Default value "same-origin".\n    CrossOriginResourcePolicy string\n\n    // Origin-Agent-Cluster\n    // Optional. Default value "?1".\n    OriginAgentCluster string\n\n    // X-DNS-Prefetch-Control\n    // Optional. Default value "off".\n    XDNSPrefetchControl string\n\n    // X-Download-Options\n    // Optional. Default value "noopen".\n    XDownloadOptions string\n\n    // X-Permitted-Cross-Domain-Policies\n    // Optional. Default value "none".\n    XPermittedCrossDomain string\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    XSSProtection:             "0",\n    ContentTypeNosniff:        "nosniff",\n    XFrameOptions:             "SAMEORIGIN",\n    ReferrerPolicy:            "no-referrer",\n    CrossOriginEmbedderPolicy: "require-corp",\n    CrossOriginOpenerPolicy:   "same-origin",\n    CrossOriginResourcePolicy: "same-origin",\n    OriginAgentCluster:        "?1",\n    XDNSPrefetchControl:       "off",\n    XDownloadOptions:          "noopen",\n    XPermittedCrossDomain:     "none",\n}\n')))}f.isMDXComponent=!0}}]);