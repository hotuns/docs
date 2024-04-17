"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[14302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),b=i,d=f["".concat(l,".").concat(b)]||f[b]||u[b]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},13150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"fibersentry",title:"Fibersentry"},o=void 0,s={unversionedId:"fibersentry/fibersentry",id:"version-fiberi18n_v0.x.x/fibersentry/fibersentry",title:"Fibersentry",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v0.x.x/fibersentry/README.md",sourceDirName:"fibersentry",slug:"/fibersentry/",permalink:"/contrib/fiberi18n_v0.x.x/fibersentry/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fibersentry/README.md",tags:[],version:"fiberi18n_v0.x.x",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"fibersentry",title:"Fibersentry"},sidebar:"tutorialSidebar",previous:{title:"Fibernewrelic",permalink:"/contrib/fiberi18n_v0.x.x/fibernewrelic/"},next:{title:"Fiberzap",permalink:"/contrib/fiberi18n_v0.x.x/fiberzap/"}},l={},c=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Usage",id:"usage",level:3},{value:"Accessing Context in <code>BeforeSend</code> callback",id:"accessing-context-in-beforesend-callback",level:3}],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibersentry*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry")," support for Fiber."),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"This middleware supports Fiber v2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibersentry\ngo get -u github.com/getsentry/sentry-go\n")),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fibersentry.New(config ...Config) fiber.Handler\n")),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Repanic"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Repanic configures whether Sentry should repanic after recovery. Set to true, if ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/tree/master/middleware/recover"},"Recover")," middleware is used."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WaitForDelivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"WaitForDelivery configures whether you want to block the request before moving forward with the response. If ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/tree/master/middleware/recover"},"Recover")," middleware is used, it's safe to either skip this option or set it to false."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout for the event delivery requests."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time.Second * 2"))))),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fibersentry")," attaches an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"*sentry.Hub")," (",(0,i.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/getsentry/sentry-go#Hub"},"https://godoc.org/github.com/getsentry/sentry-go#Hub"),") to the request's context, which makes it available throughout the rest of the request's lifetime.\nYou can access it by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fibersentry.GetHubFromContext()")," method on the context itself in any of your proceeding middleware and routes.\nAnd it should be used instead of the global ",(0,i.kt)("inlineCode",{parentName:"p"},"sentry.CaptureMessage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sentry.CaptureException"),", or any other calls, as it keeps the separation of data between the requests."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keep in mind that ",(0,i.kt)("inlineCode",{parentName:"strong"},"*sentry.Hub")," won't be available in middleware attached before to ",(0,i.kt)("inlineCode",{parentName:"strong"},"fibersentry"),"!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/getsentry/sentry-go"\n    "github.com/gofiber/contrib/fibersentry"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/utils"\n)\n\nfunc main() {\n    _ = sentry.Init(sentry.ClientOptions{\n        Dsn: "",\n        BeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n            if hint.Context != nil {\n                if c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n                    // You have access to the original Context if it panicked\n                    fmt.Println(utils.ImmutableString(c.Hostname()))\n                }\n            }\n            fmt.Println(event)\n            return event\n        },\n        Debug:            true,\n        AttachStacktrace: true,\n    })\n\n    app := fiber.New()\n\n    app.Use(fibersentry.New(fibersentry.Config{\n        Repanic:         true,\n        WaitForDelivery: true,\n    }))\n\n    enhanceSentryEvent := func(c *fiber.Ctx) error {\n        if hub := fibersentry.GetHubFromContext(c); hub != nil {\n            hub.Scope().SetTag("someRandomTag", "maybeYouNeedIt")\n        }\n        return c.Next()\n    }\n\n    app.All("/foo", enhanceSentryEvent, func(c *fiber.Ctx) error {\n        panic("y tho")\n    })\n\n    app.All("/", func(c *fiber.Ctx) error {\n        if hub := fibersentry.GetHubFromContext(c); hub != nil {\n            hub.WithScope(func(scope *sentry.Scope) {\n                scope.SetExtra("unwantedQuery", "someQueryDataMaybe")\n                hub.CaptureMessage("User provided unwanted query string, but we recovered just fine")\n            })\n        }\n        return c.SendStatus(fiber.StatusOK)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h3",{id:"accessing-context-in-beforesend-callback"},"Accessing Context in ",(0,i.kt)("inlineCode",{parentName:"h3"},"BeforeSend")," callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'sentry.Init(sentry.ClientOptions{\n    Dsn: "your-public-dsn",\n    BeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n        if hint.Context != nil {\n            if c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n                // You have access to the original Context if it panicked\n                fmt.Println(c.Hostname())\n            }\n        }\n        return event\n    },\n})\n')))}u.isMDXComponent=!0}}]);