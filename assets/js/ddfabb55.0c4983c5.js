"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[75057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),s=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,m=c["".concat(g,".").concat(u)]||c[u]||f[u]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={id:"swagger"},o="Swagger",l={unversionedId:"swagger/swagger",id:"version-otelfiber_v1.x.x/swagger/swagger",title:"Swagger",description:"Release",source:"@site/contrib_versioned_docs/version-otelfiber_v1.x.x/swagger/README.md",sourceDirName:"swagger",slug:"/swagger/",permalink:"/contrib/otelfiber_v1.x.x/swagger/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/swagger/README.md",tags:[],version:"otelfiber_v1.x.x",lastUpdatedAt:1693559534,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"swagger"},sidebar:"tutorialSidebar",previous:{title:"Paseto",permalink:"/contrib/otelfiber_v1.x.x/paseto/"},next:{title:"Websocket",permalink:"/contrib/otelfiber_v1.x.x/websocket/"}},g={},s=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Config",id:"custom-config",level:2}],p={toc:s},c="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"swagger"},"Swagger"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=swagger*",alt:"Release"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,n.kt)("p",null,"Swagger middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),". The middleware handles Swagger UI. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/swagger\n")),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...swagger.Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BasePath"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BasePath is the base path for the configuration file."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FilePath"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"FilePath is the file path to the configuration file."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'""'))))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/swagger"\n)\n')),(0,n.kt)("p",null,"Then create a Fiber app with app := fiber.New()."),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(swagger.New(cfg))\n")),(0,n.kt)("h2",{id:"custom-config"},"Custom Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'cfg := swagger.Config{\n    BasePath: "/", //swagger ui base path\n    FilePath: "./docs/swagger.json",\n}\n\napp.Use(swagger.New(cfg))\n')))}f.isMDXComponent=!0}}]);