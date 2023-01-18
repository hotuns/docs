"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"etag",title:"ETag",sidebar_position:8},o=void 0,l={unversionedId:"api/middleware/etag",id:"api/middleware/etag",title:"ETag",description:"ETag middleware for Fiber that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.",source:"@site/docs/api/middleware/etag.md",sourceDirName:"api/middleware",slug:"/api/middleware/etag",permalink:"/docs/api/middleware/etag",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/etag.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1674054641,formattedLastUpdatedAt:"Jan 18, 2023",sidebarPosition:8,frontMatter:{id:"etag",title:"ETag",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"EnvVar",permalink:"/docs/api/middleware/envvar"},next:{title:"ExpVar",permalink:"/docs/api/middleware/expvar"}},s={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config-1",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ETag middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/etag"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(etag.New())\n\n// Get / receives Etag: "13-1831710635" in response header\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n')),(0,a.kt)("h3",{id:"custom-config"},"Custom Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(etag.New(etag.Config{\n    Weak: true,\n}))\n\n// Get / receives Etag: "W/"13-1831710635" in response header\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Weak indicates that a weak validator is used. Weak etags are easy\n    // to generate, but are far less useful for comparisons. Strong\n    // validators are ideal for comparisons but can be very difficult\n    // to generate efficiently. Weak ETag values of two representations\n    // of the same resources might be semantically equivalent, but not\n    // byte-for-byte identical. This means weak etags prevent caching\n    // when byte range requests are used, but strong etags mean range\n    // requests can still be cached.\n    Weak bool\n}\n")),(0,a.kt)("h2",{id:"default-config-1"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next: nil,\n    Weak: false,\n}\n")))}u.isMDXComponent=!0}}]);