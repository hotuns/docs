"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[33046],{67992:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=n(74848),s=n(28453);const t={id:"middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",sidebar_position:3},o=void 0,l={id:"api/middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",source:"@site/versioned_docs/version-v1.x/api/middleware.md",sourceDirName:"api",slug:"/api/middleware",permalink:"/v1.x/api/middleware",draft:!1,unlisted:!1,tags:[],version:"v1.x",lastUpdatedAt:1713702565e3,sidebarPosition:3,frontMatter:{id:"middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde0 Ctx",permalink:"/v1.x/api/ctx"},next:{title:"Guide",permalink:"/v1.x/category/guide"}},d={},a=[{value:"Compress",id:"compress",level:2},{value:"Skipping middleware execution",id:"skipping-middleware-execution",level:2},{value:"FileSystem",id:"filesystem",level:2},{value:"Favicon",id:"favicon",level:2}];function c(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Fiber ships with multiple middleware modules by default:"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber"\n  "github.com/gofiber/fiber/middleware"\n)\n'})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["****",(0,r.jsx)(i.a,{href:"#compress",children:(0,r.jsx)(i.strong,{children:"Compress"})})," Compress middleware that supports ",(0,r.jsx)(i.code,{children:"deflate"}),", ",(0,r.jsx)(i.code,{children:"gzip"})," and ",(0,r.jsx)(i.code,{children:"brotli"})," compression."]}),"\n",(0,r.jsxs)(i.li,{children:["****",(0,r.jsx)(i.a,{href:"#filesystem",children:(0,r.jsx)(i.strong,{children:"FileSystem"})})," FileSystem middleware for Fiber, special thanks and credits to Alireza Salary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Favicon"})," Ignore favicon from logs or serve from memory if a file path is provided."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Logger"})," HTTP request/response logger."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Pprof"})," HTTP server runtime profiling"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Recover"})," Recover middleware recovers from panics anywhere in the stack chain and handles the control to the centralized",(0,r.jsx)(i.a,{href:"../guide/error-handling",children:" ErrorHandler"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"RequestID"})," Request ID middleware generates a unique id for a request."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Timeout"})," A wrapper function for handlers which will raise an error if the handler takes longer than a set amount of time to return"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Fiber also maintains external middleware modules, these have to be installed separately:"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber"\n  "github.com/gofiber/<module>"\n)\n'})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/adaptor"})," Converter for net/http handlers to/from Fiber request handlers."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/basicauth"})," Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/cors"})," Enable cross-origin resource sharing (CORS) with various options."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/csrf"})," Protect from CSRF exploits."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/helmet"})," Helps secure your apps by setting various HTTP headers."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/jwt"})," JWT returns a JSON Web Token (JWT) auth middleware."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/keyauth"})," Key auth middleware provides a key-based authentication."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/limiter"})," Rate-limiting middleware for Fiber. Use to limit repeated requests to public APIs and/or endpoints such as password reset."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/rewrite"})," Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/session"})," This session middleware is built on top of fasthttp/session by @savsgio MIT. Special thanks to"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/template"})," This package contains 8 template engines"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"gofiber/websocket"})," Based on Gorilla WebSocket for Fiber"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"compress",children:"Compress"}),"\n",(0,r.jsxs)(i.p,{children:["Compress middleware for with support for ",(0,r.jsx)(i.code,{children:"deflate"}),", ",(0,r.jsx)(i.code,{children:"gzip"})," and ",(0,r.jsx)(i.code,{children:"brotli"}),"compression.",(0,r.jsx)(i.br,{}),"\n","It will use the fastest compression method depending on the request header ",(0,r.jsx)(i.code,{children:"Accept-Encoding"}),"value."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Signature"',children:"func Compress(options ...interface{}) fiber.Handler {}\n"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Config"',children:"type CompressConfig struct {\n  // Next defines a function to skip this middleware.\n  // Default: nil\n  Next func(*fiber.Ctx) bool\n\n  // Compression level for brotli, gzip and deflate\n  // CompressLevelDisabled        = -1\n  // CompressLevelDefault         = 0\n  // CompressLevelBestSpeed       = 1\n  // CompressLevelBestCompression = 2\n  // Default: CompressLevelDefault\n  Level int\n}\n"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Example"',children:'// Compression handler with default settings\napp.Use(middleware.Compress())\n\n// Provide a custom compression level\napp.Use(middleware.Compress(2))\n\n// Pass a next function to skip specific requests\napp.Use(middleware.Compress(func(c *fiber.Ctx) bool {\n    return c.Path() == "/dontcompress"\n}))\n\n// Provide a full Config\napp.Use(middleware.Compress(middleware.CompressConfig{\n  Next:  func(c *fiber.Ctx) bool {\n    return c.Path() == "/dontcompress"\n  },\n  Level: CompressLevelDefault,\n})\n'})}),"\n",(0,r.jsx)(i.h2,{id:"skipping-middleware-execution",children:"Skipping middleware execution"}),"\n",(0,r.jsx)(i.p,{children:"When adding middleware to your application, you can also specify when the middleware should be activated and when it should not through a function passed when initialising the middleware using a function passed in the configuration for the middleware."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Signature"',children:"func (*fiber.Ctx) bool\n"})}),"\n",(0,r.jsxs)(i.p,{children:["This function should return ",(0,r.jsx)(i.code,{children:"true"})," if the middleware should be deactivated. For example, if you would like admin users to be exempt from rate-limiting, you could do something like this:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Example"',children:"app.Use(limiter.New(limiter.Config{\n    Timeout: 10,\n    Max: 3,\n    Filter: func (c *fiber.Ctx) bool {\n        var isUserAdmin bool\n        // Your logic here\n        return isUserAdmin\n    }\n}))\n"})}),"\n",(0,r.jsxs)(i.admonition,{type:"caution",children:[(0,r.jsxs)(i.p,{children:["If you are using middleware that is included with Fiber by default (for example Compress or Logger), you should use the ",(0,r.jsx)(i.code,{children:"Next"})," field instead of the ",(0,r.jsx)(i.code,{children:"Filter"})," field. For example:"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",metastring:'title="Example"',children:'app.Use(middleware.Logger(middleware.LoggerConfig{\n    Format:     "${time} ${method} ${path}",\n    TimeFormat: "15:04:05",\n    TimeZone:   "Asia/Chongqing",\n    Next: func (c *fiber.Ctx) bool {\n        var isUserAdmin bool\n        // Your logic here\n        return isUserAdmin\n    }\n}))\n'})})]}),"\n",(0,r.jsx)(i.h2,{id:"filesystem",children:"FileSystem"}),"\n",(0,r.jsx)(i.h2,{id:"favicon",children:"Favicon"})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var r=n(96540);const s={},t=r.createContext(s);function o(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);