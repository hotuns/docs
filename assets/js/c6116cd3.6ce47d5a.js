"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[25690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),f=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=f(r),u=a,d=s["".concat(p,".").concat(u)]||s[u]||g[u]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const i={id:"fgprof"},o="Fgprof",l={unversionedId:"fgprof/fgprof",id:"version-casbin_v1.x.x/fgprof/fgprof",title:"Fgprof",description:"Release",source:"@site/contrib_versioned_docs/version-casbin_v1.x.x/fgprof/README.md",sourceDirName:"fgprof",slug:"/fgprof/",permalink:"/contrib/casbin_v1.x.x/fgprof/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fgprof/README.md",tags:[],version:"casbin_v1.x.x",lastUpdatedAt:1711665375,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"fgprof"},sidebar:"tutorialSidebar",previous:{title:"Casbin",permalink:"/contrib/casbin_v1.x.x/casbin/"},next:{title:"Fiberi18n",permalink:"/contrib/casbin_v1.x.x/fiberi18n/"}},p={},f=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}],c={toc:f},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fgprof"},"Fgprof"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fgprof*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/felixge/fgprof"},"fgprof")," support for Fiber."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("p",null,"Using fgprof to profiling your Fiber app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fgprof\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"func(c *fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to skip this middleware when returned ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"),"."),(0,a.kt)("td",{parentName:"tr",align:null},'Prefix defines a URL prefix added before "/debug/fgprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'""'))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/contrib/fgprof"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n    app.Use(fgprof.New())\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("OK")\n    })\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go tool pprof -http=:8080 http://localhost:3000/debug/fgprof\n")))}g.isMDXComponent=!0}}]);