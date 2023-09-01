"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[40559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"rewrite"},l="Rewrite",o={unversionedId:"api/middleware/rewrite",id:"version-v2.x/api/middleware/rewrite",title:"Rewrite",description:"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.",source:"@site/versioned_docs/version-v2.x/api/middleware/rewrite.md",sourceDirName:"api/middleware",slug:"/api/middleware/rewrite",permalink:"/api/middleware/rewrite",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1693559534,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"rewrite"},sidebar:"tutorialSidebar",previous:{title:"RequestID",permalink:"/api/middleware/requestid"},next:{title:"Session",permalink:"/api/middleware/session"}},p={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:3}],c={toc:d},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rewrite"},"Rewrite"),(0,a.kt)("p",null,"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip middleware."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Rules"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Rules defines the URL path rewrite rules. The values captured in asterisk can be retrieved by index."),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Required)")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/rewrite"\n)\n\nfunc main() {\n  app := fiber.New()\n  \n  app.Use(rewrite.New(rewrite.Config{\n    Rules: map[string]string{\n      "/old":   "/new",\n      "/old/*": "/new/$1",\n    },\n  }))\n  \n  app.Get("/new", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n  })\n  app.Get("/new/*", func(c *fiber.Ctx) error {\n    return c.SendString("Wildcard: " + c.Params("*"))\n  })\n  \n  app.Listen(":3000")\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"curl http://localhost:3000/old\ncurl http://localhost:3000/old/hello\n")))}u.isMDXComponent=!0}}]);