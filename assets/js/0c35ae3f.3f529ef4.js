"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8541,66834],{96780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(74848),a=t(28453),i=t(43910);const s={id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},l=void 0,o={id:"api/app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",source:"@site/versioned_docs/version-v2.x/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/api/app",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719410638e3,sidebarPosition:2,frontMatter:{id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Fiber",permalink:"/api/fiber"},next:{title:"\ud83e\udde0 Ctx",permalink:"/api/ctx"}},c={},d=[{value:"Static",id:"static",level:2},{value:"Route Handlers",id:"route-handlers",level:2},...i.toc,{value:"Mount",id:"mount",level:2},{value:"MountPath",id:"mountpath",level:2},{value:"Group",id:"group",level:2},{value:"Route",id:"route",level:2},{value:"Server",id:"server",level:2},{value:"Server Shutdown",id:"server-shutdown",level:2},{value:"HandlersCount",id:"handlerscount",level:2},{value:"Stack",id:"stack",level:2},{value:"Name",id:"name",level:2},{value:"GetRoute",id:"getroute",level:2},{value:"GetRoutes",id:"getroutes",level:2},{value:"Config",id:"config",level:2},{value:"Handler",id:"handler",level:2},{value:"Listen",id:"listen",level:2},{value:"ListenTLS",id:"listentls",level:2},{value:"ListenTLSWithCertificate",id:"listentlswithcertificate",level:2},{value:"ListenMutualTLS",id:"listenmutualtls",level:2},{value:"ListenMutualTLSWithCertificate",id:"listenmutualtlswithcertificate",level:2},{value:"Listener",id:"listener",level:2},{value:"Test",id:"test",level:2},{value:"Hooks",id:"hooks",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"static",children:"Static"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.strong,{children:"Static"})," method to serve static files such as ",(0,r.jsx)(n.strong,{children:"images"}),", ",(0,r.jsx)(n.strong,{children:"CSS,"})," and ",(0,r.jsx)(n.strong,{children:"JavaScript"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.strong,{children:"Static"})," will serve ",(0,r.jsx)(n.code,{children:"index.html"})," files in response to a request on a directory."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Static(prefix, root string, config ...Static) Router\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the following code to serve files in a directory named ",(0,r.jsx)(n.code,{children:"./public"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Static("/", "./public")\n\n// => http://localhost:3000/hello.html\n// => http://localhost:3000/js/jquery.js\n// => http://localhost:3000/css/style.css\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Serve files from multiple directories\napp.Static("/", "./public")\n\n// Serve files from "./files" directory:\napp.Static("/", "./files")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can use any virtual path prefix (",(0,r.jsx)(n.em,{children:"where the path does not actually exist in the file system"}),") for files that are served by the ",(0,r.jsx)(n.strong,{children:"Static"})," method, specify a prefix path for the static directory, as shown below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app.Static("/static", "./public")\n\n// => http://localhost:3000/static/hello.html\n// => http://localhost:3000/static/js/jquery.js\n// => http://localhost:3000/static/css/style.css\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to have a little bit more control regarding the settings for serving static files. You could use the ",(0,r.jsx)(n.code,{children:"fiber.Static"})," struct to enable specific settings."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="fiber.Static{}"',children:'// Static defines configuration options when defining static assets.\ntype Static struct {\n    // When set to true, the server tries minimizing CPU usage by caching compressed files.\n    // This works differently than the github.com/gofiber/compression middleware.\n    // Optional. Default value false\n    Compress bool `json:"compress"`\n\n    // When set to true, enables byte range requests.\n    // Optional. Default value false\n    ByteRange bool `json:"byte_range"`\n\n    // When set to true, enables directory browsing.\n    // Optional. Default value false.\n    Browse bool `json:"browse"`\n\n    // When set to true, enables direct download.\n    // Optional. Default value false.\n    Download bool `json:"download"`\n\n    // The name of the index file for serving a directory.\n    // Optional. Default value "index.html".\n    Index string `json:"index"`\n\n    // Expiration duration for inactive file handlers.\n    // Use a negative time.Duration to disable it.\n    //\n    // Optional. Default value 10 * time.Second.\n    CacheDuration time.Duration `json:"cache_duration"`\n\n    // The value for the Cache-Control HTTP-header\n    // that is set on the file response. MaxAge is defined in seconds.\n    //\n    // Optional. Default value 0.\n    MaxAge int `json:"max_age"`\n\n    // ModifyResponse defines a function that allows you to alter the response.\n    //\n    // Optional. Default: nil\n    ModifyResponse Handler\n\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *Ctx) bool\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// Custom config\napp.Static("/", "./public", fiber.Static{\n  Compress:      true,\n  ByteRange:     true,\n  Browse:        true,\n  Index:         "john.html",\n  CacheDuration: 10 * time.Second,\n  MaxAge:        3600,\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"route-handlers",children:"Route Handlers"}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(n.h2,{id:"mount",children:"Mount"}),"\n",(0,r.jsxs)(n.p,{children:["You can Mount Fiber instance by creating a ",(0,r.jsx)(n.code,{children:"*Mount"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (a *App) Mount(prefix string, app *App) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n    app := fiber.New()\n    micro := fiber.New()\n    app.Mount("/john", micro) // GET /john/doe -> 200 OK\n\n    micro.Get("/doe", func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"mountpath",children:"MountPath"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MountPath"})," property contains one or more path patterns on which a sub-app was mounted."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) MountPath() string\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n\tapp := fiber.New()\n\tone := fiber.New()\n\ttwo := fiber.New()\n\tthree := fiber.New()\n\n\ttwo.Mount("/three", three)\n\tone.Mount("/two", two)\n\tapp.Mount("/one", one)\n  \n\tone.MountPath()   // "/one"\n\ttwo.MountPath()   // "/one/two"\n\tthree.MountPath() // "/one/two/three"\n\tapp.MountPath()   // ""\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Mounting order is important for MountPath. If you want to get mount paths properly, you should start mounting from the deepest app."})}),"\n",(0,r.jsx)(n.h2,{id:"group",children:"Group"}),"\n",(0,r.jsxs)(n.p,{children:["You can group routes by creating a ",(0,r.jsx)(n.code,{children:"*Group"})," struct."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Group(prefix string, handlers ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler)   // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,r.jsx)(n.p,{children:"You can define routes with a common prefix inside the common function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Route(prefix string, fn func(router Router), name ...string) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n  app := fiber.New()\n\n  app.Route("/test", func(api fiber.Router) {\n      api.Get("/foo", handler).Name("foo") // /test/foo (name: test.foo)\n      api.Get("/bar", handler).Name("bar") // /test/bar (name: test.bar)\n  }, "test.")\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,r.jsxs)(n.p,{children:["Server returns the underlying ",(0,r.jsx)(n.a,{href:"https://godoc.org/github.com/valyala/fasthttp#Server",children:"fasthttp server"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Server() *fasthttp.Server\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:"func main() {\n    app := fiber.New()\n\n    app.Server().MaxConnsPerIP = 1\n\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"server-shutdown",children:"Server Shutdown"}),"\n",(0,r.jsx)(n.p,{children:"Shutdown gracefully shuts down the server without interrupting any active connections. Shutdown works by first closing all open listeners and then waits indefinitely for all connections to return to idle before shutting down."}),"\n",(0,r.jsx)(n.p,{children:"ShutdownWithTimeout will forcefully close any active connections after the timeout expires."}),"\n",(0,r.jsx)(n.p,{children:"ShutdownWithContext shuts down the server including by force if the context's deadline is exceeded."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (app *App) Shutdown() error\nfunc (app *App) ShutdownWithTimeout(timeout time.Duration) error\nfunc (app *App) ShutdownWithContext(ctx context.Context) error\n"})}),"\n",(0,r.jsx)(n.h2,{id:"handlerscount",children:"HandlersCount"}),"\n",(0,r.jsx)(n.p,{children:"This method returns the amount of registered handlers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) HandlersCount() uint32\n"})}),"\n",(0,r.jsx)(n.h2,{id:"stack",children:"Stack"}),"\n",(0,r.jsx)(n.p,{children:"This method returns the original router stack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Stack() [][]*Route\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/john/:age", handler)\n    app.Post("/register", handler)\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Println(string(data))\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="Result"',children:'[\n  [\n    {\n      "method": "GET",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "POST",\n      "path": "/register",\n      "params": null\n    }\n  ]\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"This method assigns the name of latest created route."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Name(name string) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler)\n    app.Name("index")\n\n    app.Get("/doe", handler).Name("home")\n\n    app.Trace("/tracer", handler).Name("tracert")\n\n    app.Delete("/delete", handler).Name("delete")\n\n    a := app.Group("/a")\n    a.Name("fd.")\n\n    a.Get("/test", handler).Name("test")\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Print(string(data))\n\n    app.Listen(":3000")\n\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="Result"',children:'[\n  [\n    {\n      "method": "GET",\n      "name": "index",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "home",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "fd.test",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "DELETE",\n      "name": "delete",\n      "path": "/delete",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "TRACE",\n      "name": "tracert",\n      "path": "/tracer",\n      "params": null\n    }\n  ],\n  null\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"getroute",children:"GetRoute"}),"\n",(0,r.jsx)(n.p,{children:"This method gets the route by name."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) GetRoute(name string) Route\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler).Name("index")\n    \n    data, _ := json.MarshalIndent(app.GetRoute("index"), "", "  ")\n\tfmt.Print(string(data))\n\n\n\tapp.Listen(":3000")\n\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="Result"',children:'{\n  "method": "GET",\n  "name": "index",\n  "path": "/",\n  "params": null\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"getroutes",children:"GetRoutes"}),"\n",(0,r.jsx)(n.p,{children:"This method gets all routes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) GetRoutes(filterUseOption ...bool) []Route\n"})}),"\n",(0,r.jsx)(n.p,{children:"When filterUseOption equal to true, it will filter the routes registered by the middleware."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n\tapp := fiber.New()\n\tapp.Post("/", func (c *fiber.Ctx) error {\n\t\treturn c.SendString("Hello, World!")\n\t}).Name("index")\n\tdata, _ := json.MarshalIndent(app.GetRoutes(true), "", "  ")\n\tfmt.Print(string(data))\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="Result"',children:'[\n    {\n        "method": "POST",\n        "name": "index",\n        "path": "/",\n        "params": null\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.p,{children:"Config returns the app config as value ( read-only )."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Config() Config\n"})}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:"Handler"}),"\n",(0,r.jsx)(n.p,{children:"Handler returns the server handler that can be used to serve custom *fasthttp.RequestCtx requests."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Handler() fasthttp.RequestHandler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"listen",children:"Listen"}),"\n",(0,r.jsx)(n.p,{children:"Listen serves HTTP requests from the given address."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Listen(addr string) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Listen on port :8080 \napp.Listen(":8080")\n\n// Custom host\napp.Listen("127.0.0.1:8080")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"listentls",children:"ListenTLS"}),"\n",(0,r.jsx)(n.p,{children:"ListenTLS serves HTTPs requests from the given address using certFile and keyFile paths to as TLS certificate and key file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) ListenTLS(addr, certFile, keyFile string) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app.ListenTLS(":443", "./cert.pem", "./cert.key");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"ListenTLS"})," defaults to the following config ( use ",(0,r.jsx)(n.code,{children:"Listener"})," to provide your own config )"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Default *tls.Config"',children:"&tls.Config{\n    MinVersion:               tls.VersionTLS12,\n    Certificates: []tls.Certificate{\n        cert,\n    },\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"listentlswithcertificate",children:"ListenTLSWithCertificate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) ListenTLS(addr string, cert tls.Certificate) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app.ListenTLSWithCertificate(":443", cert);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"ListenTLSWithCertificate"})," defaults to the following config ( use ",(0,r.jsx)(n.code,{children:"Listener"})," to provide your own config )"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Default *tls.Config"',children:"&tls.Config{\n    MinVersion:               tls.VersionTLS12,\n    Certificates: []tls.Certificate{\n        cert,\n    },\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"listenmutualtls",children:"ListenMutualTLS"}),"\n",(0,r.jsx)(n.p,{children:"ListenMutualTLS serves HTTPs requests from the given address using certFile, keyFile and clientCertFile are the paths to TLS certificate and key file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) ListenMutualTLS(addr, certFile, keyFile, clientCertFile string) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app.ListenMutualTLS(":443", "./cert.pem", "./cert.key", "./ca-chain-cert.pem");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"ListenMutualTLS"})," defaults to the following config ( use ",(0,r.jsx)(n.code,{children:"Listener"})," to provide your own config )"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Default *tls.Config"',children:"&tls.Config{\n\tMinVersion: tls.VersionTLS12,\n\tClientAuth: tls.RequireAndVerifyClientCert,\n\tClientCAs:  clientCertPool,\n\tCertificates: []tls.Certificate{\n\t\tcert,\n\t},\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"listenmutualtlswithcertificate",children:"ListenMutualTLSWithCertificate"}),"\n",(0,r.jsx)(n.p,{children:"ListenMutualTLSWithCertificate serves HTTPs requests from the given address using certFile, keyFile and clientCertFile are the paths to TLS certificate and key file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) ListenMutualTLSWithCertificate(addr string, cert tls.Certificate, clientCertPool *x509.CertPool) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app.ListenMutualTLSWithCertificate(":443", cert, clientCertPool);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"ListenMutualTLSWithCertificate"})," defaults to the following config ( use ",(0,r.jsx)(n.code,{children:"Listener"})," to provide your own config )"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Default *tls.Config"',children:"&tls.Config{\n\tMinVersion: tls.VersionTLS12,\n\tClientAuth: tls.RequireAndVerifyClientCert,\n\tClientCAs:  clientCertPool,\n\tCertificates: []tls.Certificate{\n\t\tcert,\n\t},\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"listener",children:"Listener"}),"\n",(0,r.jsxs)(n.p,{children:["You can pass your own ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/net/#Listener",children:(0,r.jsx)(n.code,{children:"net.Listener"})})," using the ",(0,r.jsx)(n.code,{children:"Listener"})," method. This method can be used to enable ",(0,r.jsx)(n.strong,{children:"TLS/HTTPS"})," with a custom tls.Config."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Listener(ln net.Listener) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'ln, _ := net.Listen("tcp", ":3000")\n\ncer, _:= tls.LoadX509KeyPair("server.crt", "server.key")\n\nln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})\n\napp.Listener(ln)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,r.jsxs)(n.p,{children:["Testing your application is done with the ",(0,r.jsx)(n.strong,{children:"Test"})," method. Use this method for creating ",(0,r.jsx)(n.code,{children:"_test.go"})," files or when you need to debug your routing logic. The default timeout is ",(0,r.jsx)(n.code,{children:"1s"})," if you want to disable a timeout altogether, pass ",(0,r.jsx)(n.code,{children:"-1"})," as a second argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Create route with GET method for test:\napp.Get("/", func(c *fiber.Ctx) error {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  return c.SendString("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == fiber.StatusOK {\n  body, _ := io.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hooks",children:"Hooks"}),"\n",(0,r.jsxs)(n.p,{children:["Hooks is a method to return ",(0,r.jsx)(n.a,{href:"/guide/hooks",children:"hooks"})," property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Hooks() *Hooks\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},43910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),a=t(28453);const i={id:"route-handlers",title:"Route Handlers"},s=void 0,l={id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/versioned_docs/version-v2.x/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/partials/routing/route-handlers",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719410638e3,frontMatter:{id:"route-handlers",title:"Route Handlers"}},o={},c=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use"})," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.jsx)(n.code,{children:"/john"})," will match ",(0,r.jsx)(n.code,{children:"/john/doe"}),", ",(0,r.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...interface{}) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);