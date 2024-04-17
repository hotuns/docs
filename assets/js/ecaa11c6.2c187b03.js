"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[46252,66162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(48925);const l={id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},o=void 0,p={unversionedId:"api/app",id:"api/app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",source:"@site/docs/core/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/next/api/app",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/app.md",tags:[],version:"current",lastUpdatedAt:1713366823,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:2,frontMatter:{id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Fiber",permalink:"/next/api/fiber"},next:{title:"\ud83e\udde0 Ctx",permalink:"/next/api/ctx"}},s={},u=[{value:"Routing",id:"routing",level:2},{value:"Static",id:"static",level:3},{value:"Route Handlers",id:"route-handlers",level:3},{value:"Mount",id:"mount",level:3},{value:"MountPath",id:"mountpath",level:3},{value:"Group",id:"group",level:3},{value:"Route",id:"route",level:3},{value:"HandlersCount",id:"handlerscount",level:3},{value:"Stack",id:"stack",level:3},{value:"Name",id:"name",level:3},{value:"GetRoute",id:"getroute",level:3},{value:"GetRoutes",id:"getroutes",level:3},{value:"Config",id:"config",level:2},{value:"Handler",id:"handler",level:2},{value:"ErrorHandler",id:"errorhandler",level:2},{value:"NewCtxFunc",id:"newctxfunc",level:2},{value:"RegisterCustomBinder",id:"registercustombinder",level:2},{value:"RegisterCustomConstraint",id:"registercustomconstraint",level:2},{value:"SetTLSHandler",id:"settlshandler",level:2},{value:"Test",id:"test",level:2},{value:"Hooks",id:"hooks",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"routing"},"Routing"),(0,r.kt)("h3",{id:"static"},"Static"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method to serve static files such as ",(0,r.kt)("strong",{parentName:"p"},"images"),", ",(0,r.kt)("strong",{parentName:"p"},"CSS,")," and ",(0,r.kt)("strong",{parentName:"p"},"JavaScript"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("strong",{parentName:"p"},"Static")," will serve ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," files in response to a request on a directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Static(prefix, root string, config ...Static) Router\n")),(0,r.kt)("p",null,"Use the following code to serve files in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"./public")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Static("/", "./public")\n\n// => http://localhost:3000/hello.html\n// => http://localhost:3000/js/jquery.js\n// => http://localhost:3000/css/style.css\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Serve files from multiple directories\napp.Static("/", "./public")\n\n// Serve files from "./files" directory:\napp.Static("/", "./files")\n')),(0,r.kt)("p",null,"You can use any virtual path prefix ","(",(0,r.kt)("em",{parentName:"p"},"where the path does not actually exist in the file system"),")"," for files that are served by the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method, specify a prefix path for the static directory, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Static("/static", "./public")\n\n// => http://localhost:3000/static/hello.html\n// => http://localhost:3000/static/js/jquery.js\n// => http://localhost:3000/static/css/style.css\n')),(0,r.kt)("p",null,"If you want to have a little bit more control regarding the settings for serving static files. You could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.Static")," struct to enable specific settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="fiber.Static{}"',title:'"fiber.Static{}"'},'// Static defines configuration options when defining static assets.\ntype Static struct {\n    // When set to true, the server tries minimizing CPU usage by caching compressed files.\n    // This works differently than the github.com/gofiber/compression middleware.\n    // Optional. Default value false\n    Compress bool `json:"compress"`\n\n    // When set to true, enables byte range requests.\n    // Optional. Default value false\n    ByteRange bool `json:"byte_range"`\n\n    // When set to true, enables directory browsing.\n    // Optional. Default value false.\n    Browse bool `json:"browse"`\n\n    // When set to true, enables direct download.\n    // Optional. Default value false.\n    Download bool `json:"download"`\n\n    // The name of the index file for serving a directory.\n    // Optional. Default value "index.html".\n    Index string `json:"index"`\n\n    // Expiration duration for inactive file handlers.\n    // Use a negative time.Duration to disable it.\n    //\n    // Optional. Default value 10 * time.Second.\n    CacheDuration time.Duration `json:"cache_duration"`\n\n    // The value for the Cache-Control HTTP-header\n    // that is set on the file response. MaxAge is defined in seconds.\n    //\n    // Optional. Default value 0.\n    MaxAge int `json:"max_age"`\n\n    // ModifyResponse defines a function that allows you to alter the response.\n    //\n    // Optional. Default: nil\n    ModifyResponse Handler\n\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c Ctx) bool\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Custom config\napp.Static("/", "./public", fiber.Static{\n  Compress:      true,\n  ByteRange:     true,\n  Browse:        true,\n  Index:         "john.html",\n  CacheDuration: 10 * time.Second,\n  MaxAge:        3600,\n})\n')),(0,r.kt)("h3",{id:"route-handlers"},"Route Handlers"),(0,r.kt)(i.default,{mdxType:"RoutingHandler"}),(0,r.kt)("h3",{id:"mount"},"Mount"),(0,r.kt)("p",null,"You can Mount Fiber instance by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Mount")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *App) Mount(prefix string, app *App) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n    app := fiber.New()\n    micro := fiber.New()\n    app.Mount("/john", micro) // GET /john/doe -> 200 OK\n\n    micro.Get("/doe", func(c fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h3",{id:"mountpath"},"MountPath"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MountPath")," property contains one or more path patterns on which a sub-app was mounted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) MountPath() string\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n    app := fiber.New()\n    one := fiber.New()\n    two := fiber.New()\n    three := fiber.New()\n\n    two.Mount("/three", three)\n    one.Mount("/two", two)\n    app.Mount("/one", one)\n  \n    one.MountPath()   // "/one"\n    two.MountPath()   // "/one/two"\n    three.MountPath() // "/one/two/three"\n    app.MountPath()   // ""\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Mounting order is important for MountPath. If you want to get mount paths properly, you should start mounting from the deepest app.")),(0,r.kt)("h3",{id:"group"},"Group"),(0,r.kt)("p",null,"You can group routes by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Group")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Group(prefix string, handlers ...Handler) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler)   // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h3",{id:"route"},"Route"),(0,r.kt)("p",null,"You can define routes with a common prefix inside the common function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Route(prefix string, fn func(router Router), name ...string) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n  app := fiber.New()\n\n  app.Route("/test", func(api fiber.Router) {\n      api.Get("/foo", handler).Name("foo") // /test/foo (name: test.foo)\n      api.Get("/bar", handler).Name("bar") // /test/bar (name: test.bar)\n  }, "test.")\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h3",{id:"handlerscount"},"HandlersCount"),(0,r.kt)("p",null,"This method returns the amount of registered handlers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) HandlersCount() uint32\n")),(0,r.kt)("h3",{id:"stack"},"Stack"),(0,r.kt)("p",null,"This method returns the original router stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Stack() [][]*Route\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/john/:age", handler)\n    app.Post("/register", handler)\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Println(string(data))\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n  [\n    {\n      "method": "GET",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "POST",\n      "path": "/register",\n      "params": null\n    }\n  ]\n]\n')),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"This method assigns the name of latest created route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Name(name string) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler)\n    app.Name("index")\n\n    app.Get("/doe", handler).Name("home")\n\n    app.Trace("/tracer", handler).Name("tracert")\n\n    app.Delete("/delete", handler).Name("delete")\n\n    a := app.Group("/a")\n    a.Name("fd.")\n\n    a.Get("/test", handler).Name("test")\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Print(string(data))\n\n    app.Listen(":3000")\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n  [\n    {\n      "method": "GET",\n      "name": "index",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "home",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "fd.test",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "DELETE",\n      "name": "delete",\n      "path": "/delete",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "TRACE",\n      "name": "tracert",\n      "path": "/tracer",\n      "params": null\n    }\n  ],\n  null\n]\n')),(0,r.kt)("h3",{id:"getroute"},"GetRoute"),(0,r.kt)("p",null,"This method gets the route by name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) GetRoute(name string) Route\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler).Name("index")\n    \n    data, _ := json.MarshalIndent(app.GetRoute("index"), "", "  ")\n    fmt.Print(string(data))\n\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'{\n  "method": "GET",\n  "name": "index",\n  "path": "/",\n  "params": null\n}\n')),(0,r.kt)("h3",{id:"getroutes"},"GetRoutes"),(0,r.kt)("p",null,"This method gets all routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) GetRoutes(filterUseOption ...bool) []Route\n")),(0,r.kt)("p",null,"When filterUseOption equal to true, it will filter the routes registered by the middleware."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n    app := fiber.New()\n    app.Post("/", func (c fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    }).Name("index")\n    data, _ := json.MarshalIndent(app.GetRoutes(true), "", "  ")\n    fmt.Print(string(data))\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n    {\n        "method": "POST",\n        "name": "index",\n        "path": "/",\n        "params": null\n    }\n]\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"Config returns the app config as value ","("," read-only ",")","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Config() Config\n")),(0,r.kt)("h2",{id:"handler"},"Handler"),(0,r.kt)("p",null,"Handler returns the server handler that can be used to serve custom ","*","fasthttp.RequestCtx requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Handler() fasthttp.RequestHandler\n")),(0,r.kt)("h2",{id:"errorhandler"},"ErrorHandler"),(0,r.kt)("p",null,"Errorhandler executes the process which was defined for the application in case of errors, this is used in some cases in middlewares."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) ErrorHandler(ctx Ctx, err error) error\n")),(0,r.kt)("h2",{id:"newctxfunc"},"NewCtxFunc"),(0,r.kt)("p",null,"NewCtxFunc allows to customize the ctx struct as we want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) NewCtxFunc(function func(app *App) CustomCtx)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'type CustomCtx struct {\n    DefaultCtx\n}\n\n// Custom method\nfunc (c *CustomCtx) Params(key string, defaultValue ...string) string {\n    return "prefix_" + c.DefaultCtx.Params(key)\n}\n\napp := New()\napp.NewCtxFunc(func(app *fiber.App) fiber.CustomCtx {\n    return &CustomCtx{\n        DefaultCtx: *NewDefaultCtx(app),\n    }\n})\n// curl http://localhost:3000/123\napp.Get("/:id", func(c Ctx) error {\n    // use custom method - output: prefix_123\n    return c.SendString(c.Params("id"))\n})\n')),(0,r.kt)("h2",{id:"registercustombinder"},"RegisterCustomBinder"),(0,r.kt)("p",null,'You can register custom binders to use as Bind().Custom("name").\nThey should be compatible with CustomBinder interface.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) RegisterCustomBinder(binder CustomBinder)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app := fiber.New()\n\n// My custom binder\ncustomBinder := &customBinder{}\n// Name of custom binder, which will be used as Bind().Custom("name")\nfunc (*customBinder) Name() string {\n    return "custom"\n}\n// Is used in the Body Bind method to check if the binder should be used for custom mime types\nfunc (*customBinder) MIMETypes() []string {\n    return []string{"application/yaml"}\n}\n// Parse the body and bind it to the out interface\nfunc (*customBinder) Parse(c Ctx, out any) error {\n    // parse yaml body\n    return yaml.Unmarshal(c.Body(), out)\n}\n// Register custom binder\napp.RegisterCustomBinder(customBinder)\n\n// curl -X POST http://localhost:3000/custom -H "Content-Type: application/yaml" -d "name: John"\napp.Post("/custom", func(c Ctx) error {\n    var user User\n    // output: {Name:John}\n    // Custom binder is used by the name\n    if err := c.Bind().Custom("custom", &user); err != nil {\n        return err\n    }\n    // ...\n    return c.JSON(user)\n})\n// curl -X POST http://localhost:3000/normal -H "Content-Type: application/yaml" -d "name: Doe"\napp.Post("/normal", func(c Ctx) error {\n    var user User\n    // output: {Name:Doe}\n    // Custom binder is used by the mime type\n    if err := c.Bind().Body(&user); err != nil {\n        return err\n    }\n    // ...\n    return c.JSON(user)\n})\n')),(0,r.kt)("h2",{id:"registercustomconstraint"},"RegisterCustomConstraint"),(0,r.kt)("p",null,"RegisterCustomConstraint allows to register custom constraint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) RegisterCustomConstraint(constraint CustomConstraint)\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/next/guide/routing#custom-constraint"},"Custom Constraint")," section for more information."),(0,r.kt)("h2",{id:"settlshandler"},"SetTLSHandler"),(0,r.kt)("p",null,"Use SetTLSHandler to set ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-4.1.2"},"ClientHelloInfo")," when using TLS with Listener."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) SetTLSHandler(tlsHandler *TLSHandler)\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"Testing your application is done with the ",(0,r.kt)("strong",{parentName:"p"},"Test")," method. Use this method for creating ",(0,r.kt)("inlineCode",{parentName:"p"},"_test.go")," files or when you need to debug your routing logic. The default timeout is ",(0,r.kt)("inlineCode",{parentName:"p"},"1s")," if you want to disable a timeout altogether, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," as a second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Create route with GET method for test:\napp.Get("/", func(c fiber.Ctx) error {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  return c.SendString("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == fiber.StatusOK {\n  body, _ := io.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n')),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Hooks is a method to return ",(0,r.kt)("a",{parentName:"p",href:"/next/api/hooks"},"hooks")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Hooks() *Hooks\n")))}m.isMDXComponent=!0},48925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"route-handlers",title:"Route Handlers"},l=void 0,o={unversionedId:"partials/routing/route-handlers",id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/docs/core/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/next/partials/routing/route-handlers",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/partials/routing/handler.md",tags:[],version:"current",lastUpdatedAt:1713366823,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"route-handlers",title:"Route Handlers"}},p={},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Registers a route bound to a specific ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signatures"',title:'"Signatures"'},"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specify a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Simple GET handler\napp.Get("/api/list", func(c fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use")," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"/john")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"/john/doe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/johnnnnn")," etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Use(args ...any) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Match any request\napp.Use(func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n')))}d.isMDXComponent=!0}}]);