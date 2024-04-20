"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[63026],{25573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(74848),i=n(28453);const l={id:"adaptor"},d="Adaptor",a={id:"api/middleware/adaptor",title:"Adaptor",description:"Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!",source:"@site/versioned_docs/version-v2.x/api/middleware/adaptor.md",sourceDirName:"api/middleware",slug:"/api/middleware/adaptor",permalink:"/api/middleware/adaptor",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1713634533e3,frontMatter:{id:"adaptor"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddec Middleware",permalink:"/category/-middleware"},next:{title:"BasicAuth",permalink:"/api/middleware/basicauth"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"net/http to Fiber",id:"nethttp-to-fiber",level:3},{value:"net/http middleware to Fiber",id:"nethttp-middleware-to-fiber",level:3},{value:"Fiber Handler to net/http",id:"fiber-handler-to-nethttp",level:3},{value:"Fiber App to net/http",id:"fiber-app-to-nethttp",level:3},{value:"Fiber Context to (net/http).Request",id:"fiber-context-to-nethttprequest",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"adaptor",children:"Adaptor"}),"\n",(0,r.jsxs)(t.p,{children:["Converter for net/http handlers to/from Fiber request handlers, special thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/arsmn",children:"@arsmn"}),"!"]}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Signature"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"HTTPHandler(h http.Handler) fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"http.Handler -> fiber.Handler"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPHandlerFunc"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"HTTPHandlerFunc(h http.HandlerFunc) fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"http.HandlerFunc -> fiber.Handler"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPMiddleware"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"HTTPHandlerFunc(mw func(http.Handler) http.Handler) fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"func(http.Handler) http.Handler -> fiber.Handler"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FiberHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"FiberHandler(h fiber.Handler) http.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Handler -> http.Handler"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FiberHandlerFunc"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"FiberHandlerFunc(h fiber.Handler) http.HandlerFunc"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Handler -> http.HandlerFunc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FiberApp"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"FiberApp(app *fiber.App) http.HandlerFunc"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Fiber app -> http.HandlerFunc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ConvertRequest"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"ConvertRequest(c *fiber.Ctx, forServer bool) (*http.Request, error)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fiber.Ctx -> http.Request"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CopyContextToFiberContext"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"CopyContextToFiberContext(context interface{}, requestContext *fasthttp.RequestCtx)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"context.Context -> fasthttp.RequestCtx"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"nethttp-to-fiber",children:"net/http to Fiber"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n\t// New fiber app\n\tapp := fiber.New()\n\n\t// http.Handler -> fiber.Handler\n\tapp.Get("/", adaptor.HTTPHandler(handler(greet)))\n\n\t// http.HandlerFunc -> fiber.Handler\n\tapp.Get("/func", adaptor.HTTPHandlerFunc(greet))\n\n\t// Listen on port 3000\n\tapp.Listen(":3000")\n}\n\nfunc handler(f http.HandlerFunc) http.Handler {\n\treturn http.HandlerFunc(f)\n}\n\nfunc greet(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprint(w, "Hello World!")\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"nethttp-middleware-to-fiber",children:"net/http middleware to Fiber"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t"net/http"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n\t// New fiber app\n\tapp := fiber.New()\n\n\t// http middleware -> fiber.Handler\n\tapp.Use(adaptor.HTTPMiddleware(logMiddleware))\n\n\t// Listen on port 3000\n\tapp.Listen(":3000")\n}\n\nfunc logMiddleware(next http.Handler) http.Handler {\n\treturn http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n\t\tlog.Println("log middleware")\n\t\tnext.ServeHTTP(w, r)\n\t})\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fiber-handler-to-nethttp",children:"Fiber Handler to net/http"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"net/http"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n\t// fiber.Handler -> http.Handler\n\thttp.Handle("/", adaptor.FiberHandler(greet))\n\n  \t// fiber.Handler -> http.HandlerFunc\n\thttp.HandleFunc("/func", adaptor.FiberHandlerFunc(greet))\n\n\t// Listen on port 3000\n\thttp.ListenAndServe(":3000", nil)\n}\n\nfunc greet(c *fiber.Ctx) error {\n\treturn c.SendString("Hello World!")\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fiber-app-to-nethttp",children:"Fiber App to net/http"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"net/http"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/greet", greet)\n\n\t// Listen on port 3000\n\thttp.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greet(c *fiber.Ctx) error {\n\treturn c.SendString("Hello World!")\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fiber-context-to-nethttprequest",children:"Fiber Context to (net/http).Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"net/http"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/adaptor"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/greet", greetWithHTTPReq)\n\n\t// Listen on port 3000\n\thttp.ListenAndServe(":3000", adaptor.FiberApp(app))\n}\n\nfunc greetWithHTTPReq(c *fiber.Ctx) error {\n\thttpReq, err := adaptor.ConvertRequest(c, false)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\treturn c.SendString("Request URL: " + httpReq.URL.String())\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var r=n(96540);const i={},l=r.createContext(i);function d(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);