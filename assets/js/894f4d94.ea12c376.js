"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={id:"requestid",title:"RequestID"},o=void 0,l={unversionedId:"api/middleware/requestid",id:"api/middleware/requestid",title:"RequestID",description:"RequestID middleware for Fiber that adds an indentifier to the response.",source:"@site/docs/api/middleware/requestid.md",sourceDirName:"api/middleware",slug:"/api/middleware/requestid",permalink:"/next/api/middleware/requestid",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/requestid.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680599597,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{id:"requestid",title:"RequestID"},sidebar:"tutorialSidebar",previous:{title:"Recover",permalink:"/next/api/middleware/recover"},next:{title:"Session",permalink:"/next/api/middleware/session"}},s={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RequestID middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that adds an indentifier to the response."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/requestid"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Default middleware config\napp.Use(requestid.New())\n\n// Or extend your config for customization\napp.Use(requestid.New(requestid.Config{\n    Header:    "X-Custom-Header",\n    Generator: func() string {\n        return "static-id"\n    },\n}))\n')),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Header is the header key where to get/set the unique request ID\n    //\n    // Optional. Default: "X-Request-ID"\n    Header string\n\n    // Generator defines a function to generate the unique identifier.\n    //\n    // Optional. Default: utils.UUID\n    Generator func() string\n\n    // ContextKey defines the key used when storing the request ID in\n    // the locals for a specific request.\n    //\n    // Optional. Default: requestid\n    ContextKey interface{}\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("p",null,"The default config uses a fast UUID generator which will expose the number of\nrequests made to the server. To conceal this value for better privacy, use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"utils.UUIDv4")," generator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:       nil,\n    Header:     fiber.HeaderXRequestID,\n    Generator:  utils.UUID,\n    ContextKey: "requestid",\n}\n')))}c.isMDXComponent=!0}}]);