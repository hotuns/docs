"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},f=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=o(n),u=a,b=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(b,p(p({ref:t},f),{},{components:n})):r.createElement(b,p({ref:t},f))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={id:"adaptor"},p="Adaptor",l={unversionedId:"api/middleware/adaptor",id:"api/middleware/adaptor",title:"Adaptor",description:"Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!",source:"@site/docs/core/api/middleware/adaptor.md",sourceDirName:"api/middleware",slug:"/api/middleware/adaptor",permalink:"/next/api/middleware/adaptor",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/adaptor.md",tags:[],version:"current",lastUpdatedAt:1693559534,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"adaptor"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddec Middleware",permalink:"/next/category/-middleware"},next:{title:"BasicAuth",permalink:"/next/api/middleware/basicauth"}},d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"net/http to Fiber",id:"nethttp-to-fiber",level:3},{value:"net/http middleware to Fiber",id:"nethttp-middleware-to-fiber",level:3},{value:"Fiber Handler to net/http",id:"fiber-handler-to-nethttp",level:3},{value:"Fiber App to net/http",id:"fiber-app-to-nethttp",level:3},{value:"Fiber Context to (net/http).Request",id:"fiber-context-to-nethttprequest",level:3}],f={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adaptor"},"Adaptor"),(0,a.kt)("p",null,"Converter for net/http handlers to/from Fiber request handlers, special thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/arsmn"},"@arsmn"),"!"),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Signature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"HTTPHandler(h http.Handler) fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"http.Handler -> fiber.Handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPHandlerFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"HTTPHandlerFunc(h http.HandlerFunc) fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"http.HandlerFunc -> fiber.Handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPMiddleware"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"HTTPHandlerFunc(mw func(http.Handler) http.Handler) fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"func(http.Handler) http.Handler -> fiber.Handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FiberHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FiberHandler(h fiber.Handler) http.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"fiber.Handler -> http.Handler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FiberHandlerFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FiberHandlerFunc(h fiber.Handler) http.HandlerFunc")),(0,a.kt)("td",{parentName:"tr",align:"left"},"fiber.Handler -> http.HandlerFunc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FiberApp"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FiberApp(app *fiber.App) http.HandlerFunc")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fiber app -> http.HandlerFunc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ConvertRequest"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ConvertRequest(c *fiber.Ctx, forServer bool) (*http.Request, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"fiber.Ctx -> http.Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CopyContextToFiberContext"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CopyContextToFiberContext(context interface{}, requestContext *fasthttp.RequestCtx)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"context.Context -> fasthttp.RequestCtx")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"nethttp-to-fiber"},"net/http to Fiber"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n    // New fiber app\n    app := fiber.New()\n\n    // http.Handler -> fiber.Handler\n    app.Get("/", adaptor.HTTPHandler(handler(greet)))\n\n    // http.HandlerFunc -> fiber.Handler\n    app.Get("/func", adaptor.HTTPHandlerFunc(greet))\n\n    // Listen on port 3000\n    app.Listen(":3000")\n}\n\nfunc handler(f http.HandlerFunc) http.Handler {\n    return http.HandlerFunc(f)\n}\n\nfunc greet(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprint(w, "Hello World!")\n}\n')),(0,a.kt)("h3",{id:"nethttp-middleware-to-fiber"},"net/http middleware to Fiber"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n    // New fiber app\n    app := fiber.New()\n\n    // http middleware -> fiber.Handler\n    app.Use(adaptor.HTTPMiddleware(logMiddleware))\n\n    // Listen on port 3000\n    app.Listen(":3000")\n}\n\nfunc logMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        log.Println("log middleware")\n        next.ServeHTTP(w, r)\n    })\n}\n')),(0,a.kt)("h3",{id:"fiber-handler-to-nethttp"},"Fiber Handler to net/http"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n    // fiber.Handler -> http.Handler\n    http.Handle("/", adaptor.FiberHandler(greet))\n\n    // fiber.Handler -> http.HandlerFunc\n    http.HandleFunc("/func", adaptor.FiberHandlerFunc(greet))\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", nil)\n}\n\nfunc greet(c *fiber.Ctx) error {\n    return c.SendString("Hello World!")\n}\n')),(0,a.kt)("h3",{id:"fiber-app-to-nethttp"},"Fiber App to net/http"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/greet", greet)\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greet(c *fiber.Ctx) error {\n    return c.SendString("Hello World!")\n}\n')),(0,a.kt)("h3",{id:"fiber-context-to-nethttprequest"},"Fiber Context to (net/http).Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/greet", greetWithHTTPReq)\n\n    // Listen on port 3000\n    http.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greetWithHTTPReq(c *fiber.Ctx) error {\n    httpReq, err := adaptor.ConvertRequest(c, false)\n    if err != nil {\n        return err\n    }\n\n    return c.SendString("Request URL: " + httpReq.URL.String())\n}\n')))}m.isMDXComponent=!0}}]);