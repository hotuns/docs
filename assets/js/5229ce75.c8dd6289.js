"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[98048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=p(r),u=n,s=f["".concat(c,".").concat(u)]||f[u]||m[u]||i;return r?a.createElement(s,l(l({ref:t},d),{},{components:r})):a.createElement(s,l({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"recover"},l="Recover",o={unversionedId:"api/middleware/recover",id:"version-v2.x/api/middleware/recover",title:"Recover",description:"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.",source:"@site/versioned_docs/version-v2.x/api/middleware/recover.md",sourceDirName:"api/middleware",slug:"/api/middleware/recover",permalink:"/api/middleware/recover",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1706864260,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"recover"},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/api/middleware/proxy"},next:{title:"Redirect",permalink:"/api/middleware/redirect"}},c={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],d={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recover"},"Recover"),(0,n.kt)("p",null,"Recover middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that recovers from panics anywhere in the stack chain and handles the control to the centralized ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/guide/error-handling"},"ErrorHandler"),"."),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/recover"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(recover.New())\n\n// This panic will be caught by the middleware\napp.Get("/", func(c *fiber.Ctx) error {\n    panic("I\'m an error")\n})\n')),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nil"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EnableStackTrace"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"EnableStackTrace enables handling stack trace."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StackTraceHandler"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, interface{})")),(0,n.kt)("td",{parentName:"tr",align:"left"},"StackTraceHandler defines a function to handle stack trace."),(0,n.kt)("td",{parentName:"tr",align:"left"},"defaultStackTraceHandler")))),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:              nil,\n    EnableStackTrace:  false,\n    StackTraceHandler: defaultStackTraceHandler,\n}\n")))}m.isMDXComponent=!0}}]);