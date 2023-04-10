"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",sidebar_position:3},o=void 0,l={unversionedId:"api/middleware",id:"version-v1.x/api/middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",source:"@site/versioned_docs/version-v1.x/api/middleware.md",sourceDirName:"api",slug:"/api/middleware",permalink:"/v1.x/api/middleware",draft:!1,tags:[],version:"v1.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681094915,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:3,frontMatter:{id:"middleware",title:"\ud83e\uddec Middleware",description:"Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde0 Ctx",permalink:"/v1.x/api/ctx"},next:{title:"Guide",permalink:"/v1.x/category/guide"}},s={},p=[{value:"Compress",id:"compress",level:2},{value:"Skipping middleware execution",id:"skipping-middleware-execution",level:2},{value:"FileSystem",id:"filesystem",level:2},{value:"Favicon",id:"favicon",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fiber ships with multiple middleware modules by default:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber"\n  "github.com/gofiber/fiber/middleware"\n)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"*","*","*","*",(0,i.kt)("a",{parentName:"li",href:"#compress"},(0,i.kt)("strong",{parentName:"a"},"Compress"))," Compress middleware that supports ",(0,i.kt)("inlineCode",{parentName:"li"},"deflate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli")," compression."),(0,i.kt)("li",{parentName:"ul"},"*","*","*","*",(0,i.kt)("a",{parentName:"li",href:"#filesystem"},(0,i.kt)("strong",{parentName:"a"},"FileSystem"))," FileSystem middleware for Fiber, special thanks and credits to Alireza Salary"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Favicon")," Ignore favicon from logs or serve from memory if a file path is provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logger")," HTTP request/response logger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pprof")," HTTP server runtime profiling"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recover")," Recover middleware recovers from panics anywhere in the stack chain and handles the control to the centralized",(0,i.kt)("a",{parentName:"li",href:"../guide/error-handling"}," ErrorHandler"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RequestID")," Request ID middleware generates a unique id for a request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timeout")," A wrapper function for handlers which will raise an error if the handler takes longer than a set amount of time to return")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fiber also maintains external middleware modules, these have to be installed separately:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber"\n  "github.com/gofiber/<module>"\n)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/adaptor")," Converter for net/http handlers to/from Fiber request handlers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/basicauth")," Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/cors")," Enable cross-origin resource sharing ","(","CORS",")"," with various options."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/csrf")," Protect from CSRF exploits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/helmet")," Helps secure your apps by setting various HTTP headers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/jwt")," JWT returns a JSON Web Token ","(","JWT",")"," auth middleware."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/keyauth")," Key auth middleware provides a key-based authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/limiter")," Rate-limiting middleware for Fiber. Use to limit repeated requests to public APIs and/or endpoints such as password reset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/rewrite")," Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/session")," This session middleware is built on top of fasthttp/session by @savsgio MIT. Special thanks to "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/template")," This package contains 8 template engines"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gofiber/websocket")," Based on Gorilla WebSocket for Fiber")),(0,i.kt)("h2",{id:"compress"},"Compress"),(0,i.kt)("p",null,"Compress middleware for with support for ",(0,i.kt)("inlineCode",{parentName:"p"},"deflate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gzip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"brotli"),"compression.",(0,i.kt)("br",{parentName:"p"}),"\n","It will use the fastest compression method depending on the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Encoding"),"value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func Compress(options ...interface{}) fiber.Handler {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Config"',title:'"Config"'},"type CompressConfig struct {\n  // Next defines a function to skip this middleware.\n  // Default: nil\n  Next func(*fiber.Ctx) bool\n\n  // Compression level for brotli, gzip and deflate\n  // CompressLevelDisabled        = -1\n  // CompressLevelDefault         = 0\n  // CompressLevelBestSpeed       = 1\n  // CompressLevelBestCompression = 2\n  // Default: CompressLevelDefault\n  Level int\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Compression handler with default settings\napp.Use(middleware.Compress())\n\n// Provide a custom compression level\napp.Use(middleware.Compress(2))\n\n// Pass a next function to skip specific requests\napp.Use(middleware.Compress(func(c *fiber.Ctx) bool {\n    return c.Path() == "/dontcompress"\n}))\n\n// Provide a full Config\napp.Use(middleware.Compress(middleware.CompressConfig{\n  Next:  func(c *fiber.Ctx) bool {\n    return c.Path() == "/dontcompress"\n  },\n  Level: CompressLevelDefault,\n})\n')),(0,i.kt)("h2",{id:"skipping-middleware-execution"},"Skipping middleware execution"),(0,i.kt)("p",null,"When adding middleware to your application, you can also specify when the middleware should be activated and when it should not through a function passed when initialising the middleware using a function passed in the configuration for the middleware."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (*fiber.Ctx) bool\n")),(0,i.kt)("p",null,"This function should return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the middleware should be deactivated. For example, if you would like admin users to be exempt from rate-limiting, you could do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"app.Use(limiter.New(limiter.Config{\n    Timeout: 10,\n    Max: 3,\n    Filter: func (c *fiber.Ctx) bool {\n        var isUserAdmin bool\n        // Your logic here\n        return isUserAdmin\n    }\n}))\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are using middleware that is included with Fiber by default ","(","for example Compress or Logger",")",", you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Next")," field instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," field. For example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Use(middleware.Logger(middleware.LoggerConfig{\n    Format:     "${time} ${method} ${path}",\n    TimeFormat: "15:04:05",\n    TimeZone:   "Asia/Chongqing",\n    Next: func (c *fiber.Ctx) bool {\n        var isUserAdmin bool\n        // Your logic here\n        return isUserAdmin\n    }\n}))\n'))),(0,i.kt)("h2",{id:"filesystem"},"FileSystem"),(0,i.kt)("h2",{id:"favicon"},"Favicon"))}u.isMDXComponent=!0}}]);