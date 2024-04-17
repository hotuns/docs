"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[31856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(n),s=i,m=d["".concat(p,".").concat(s)]||d[s]||g[s]||a;return n?r.createElement(m,l(l({ref:t},f),{},{components:n})):r.createElement(m,l({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"fibernewrelic"},l="Fibernewrelic",o={unversionedId:"fibernewrelic/fibernewrelic",id:"version-fibernewrelic_v1.x.x/fibernewrelic/fibernewrelic",title:"Fibernewrelic",description:"Release",source:"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/fibernewrelic/README.md",sourceDirName:"fibernewrelic",slug:"/fibernewrelic/",permalink:"/contrib/fibernewrelic_v1.x.x/fibernewrelic/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fibernewrelic/README.md",tags:[],version:"fibernewrelic_v1.x.x",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"fibernewrelic"},sidebar:"tutorialSidebar",previous:{title:"Fiberi18n",permalink:"/contrib/fibernewrelic_v1.x.x/fiberi18n/"},next:{title:"Fibersentry",permalink:"/contrib/fibernewrelic_v1.x.x/fibersentry/"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage with existing New Relic application",id:"usage-with-existing-new-relic-application",level:2}],f={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fibernewrelic"},"Fibernewrelic"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibernewrelic*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/newrelic/go-agent"},"NewRelic")," support for Fiber."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibernewrelic\n")),(0,i.kt)("h2",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"fibernewrelic.New(config fibernewrelic.Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"License"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required - New Relic License Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'""'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"AppName"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Relic Application Name"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fiber-api"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable New Relic"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},"TransportType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"del"},"string"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},"Can be HTTP or HTTPS")," (Deprecated)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"del"},'"HTTP"')))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Application"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Application")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Existing New Relic App"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ErrorStatusCodeHandler"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func(c *fiber.Ctx, err error) int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you want to change newrelic status code, you can use it."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DefaultErrorStatusCodeHandler"))))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fibernewrelic"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(ctx *fiber.Ctx) error {\n        return ctx.SendStatus(200)\n    })\n\n    cfg := fibernewrelic.Config{\n        License:       "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",\n        AppName:       "MyCustomApi",\n        Enabled:       true,\n    }\n\n    app.Use(fibernewrelic.New(cfg))\n\n    app.Listen(":8080")\n}\n')),(0,i.kt)("h2",{id:"usage-with-existing-new-relic-application"},"Usage with existing New Relic application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fibernewrelic"\n    "github.com/newrelic/go-agent/v3/newrelic"\n)\n\nfunc main() {\n    newrelicApp, err := newrelic.NewApplication(\n        newrelic.ConfigAppName("MyCustomApi"),\n        newrelic.ConfigLicense("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),\n        newrelic.ConfigEnabled(true),\n    )\n\n    app := fiber.New()\n\n    app.Get("/", func(ctx *fiber.Ctx) error {\n        return ctx.SendStatus(200)\n    })\n    \n    app.Get("/foo", func(ctx *fiber.Ctx) error {\n        txn := newrelic.FromContext(ctx)\n        segment := txn.StartSegment("foo segment")\n        defer segment.End()\n        \n        // do foo \n\n        return nil\n    })\n\n    cfg := fibernewrelic.Config{\n        Application:       newrelicApp,\n    }\n\n    app.Use(fibernewrelic.New(cfg))\n\n    app.Listen(":8080")\n}\n')))}g.isMDXComponent=!0}}]);