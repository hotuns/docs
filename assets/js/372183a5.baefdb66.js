"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[30927],{87126:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=i(74848),s=i(28453);const t={id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2,toc_max_heading_level:3},d=void 0,l={id:"whats_new",title:"\ud83c\udd95 Whats New in v3",description:"Its a draft, not finished yet.",source:"@site/docs/core/whats_new.md",sourceDirName:".",slug:"/whats_new",permalink:"/next/whats_new",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/whats_new.md",tags:[],version:"current",lastUpdatedAt:1718889343e3,sidebarPosition:2,frontMatter:{id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/next/"},next:{title:"\ud83d\udee0\ufe0f API",permalink:"/next/category/\ufe0f-api"}},a={},o=[{value:"\ud83c\udf89 Welcome",id:"-welcome",level:2},{value:"Drop for old Go versions",id:"drop-for-old-go-versions",level:2},{value:"\ud83d\ude80 App",id:"-app",level:2},{value:"new methods",id:"new-methods",level:3},{value:"removed methods",id:"removed-methods",level:3},{value:"Methods changes",id:"methods-changes",level:3},{value:"CTX interface + customizable",id:"ctx-interface--customizable",level:3},{value:"\ud83d\uddfa Router",id:"-router",level:2},{value:"HTTP method registration",id:"http-method-registration",level:3},{value:"Route chaining",id:"route-chaining",level:3},{value:"Middleware registration",id:"middleware-registration",level:3},{value:"\ud83e\udde0 Context",id:"-context",level:2},{value:"new methods",id:"new-methods-1",level:3},{value:"removed methods",id:"removed-methods-1",level:3},{value:"changed methods",id:"changed-methods",level:3},{value:"\ud83c\udf0e Client package",id:"-client-package",level:2},{value:"\ud83d\udcce Binding",id:"-binding",level:2},{value:"\ud83d\udd04 Redirect",id:"-redirect",level:2},{value:"\ud83e\uddf0 Generic functions",id:"-generic-functions",level:2},{value:"\ud83e\uddec Middlewares",id:"-middlewares",level:2},{value:"CORS",id:"cors",level:3},{value:"New Struct Fields",id:"new-struct-fields",level:4},{value:"Updated Struct Fields",id:"updated-struct-fields",level:4},{value:"Session",id:"session",level:3},{value:"Filesystem",id:"filesystem",level:3},{value:"Monitor",id:"monitor",level:3},{value:"\ud83d\udccb Migration guide",id:"-migration-guide",level:2},{value:"\ud83d\ude80 App",id:"-app-1",level:3},{value:"Static",id:"static",level:4},{value:"\ud83d\uddfa Router",id:"-router-1",level:3},{value:"\ud83e\udde0 Context",id:"-context-1",level:3},{value:"\ud83d\udcce Parser",id:"-parser",level:3},{value:"\ud83d\udd04 Redirect",id:"-redirect-1",level:3},{value:"\ud83c\udf0e Client package",id:"-client-package-1",level:3},{value:"\ud83e\uddec Middlewares",id:"-middlewares-1",level:3},{value:"CORS",id:"cors-1",level:4},{value:"Filesystem",id:"filesystem-1",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Its a draft, not finished yet."})}),"\n",(0,r.jsx)(n.h2,{id:"-welcome",children:"\ud83c\udf89 Welcome"}),"\n",(0,r.jsx)(n.p,{children:"We are excited to announce the release of Fiber v3! \ud83d\ude80"}),"\n",(0,r.jsxs)(n.p,{children:["In this guide, we'll walk you through the most important changes in Fiber ",(0,r.jsx)(n.code,{children:"v3"})," and show you how to migrate your existing Fiber ",(0,r.jsx)(n.code,{children:"v2"})," applications to Fiber ",(0,r.jsx)(n.code,{children:"v3"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's a quick overview of the changes in Fiber ",(0,r.jsx)(n.code,{children:"v3"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-app",children:"\ud83d\ude80 App"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-router",children:"\ud83d\uddfa\ufe0f Router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-context",children:"\ud83e\udde0 Context"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-binding",children:"\ud83d\udcce Binding"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-redirect",children:"\ud83d\udd04\ufe0f Redirect"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-client-package",children:"\ud83c\udf0e Client package"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-generic-functions",children:"\ud83e\uddf0 Generic functions"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#-middlewares",children:"\ud83e\uddec Middlewares"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#cors",children:"CORS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#session",children:"Session"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#filesystem",children:"Filesystem"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#monitor",children:"Monitor"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-migration-guide",children:"\ud83d\udccb Migration guide"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"drop-for-old-go-versions",children:"Drop for old Go versions"}),"\n",(0,r.jsxs)(n.p,{children:["Fiber ",(0,r.jsx)(n.code,{children:"v3"})," drops support for Go versions below ",(0,r.jsx)(n.code,{children:"1.21"}),". We recommend upgrading to Go ",(0,r.jsx)(n.code,{children:"1.21"})," or higher to use Fiber ",(0,r.jsx)(n.code,{children:"v3"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"-app",children:"\ud83d\ude80 App"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.p,{children:"We have made several changes to the Fiber app, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Listen -> unified with config"}),"\n",(0,r.jsxs)(n.li,{children:["Static -> has been removed and moved to ",(0,r.jsx)(n.a,{href:"/next/middleware/static",children:"static middleware"})]}),"\n",(0,r.jsxs)(n.li,{children:["app.Config properties moved to listen config","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DisableStartupMessage"}),"\n",(0,r.jsx)(n.li,{children:"EnablePrefork -> previously Prefork"}),"\n",(0,r.jsx)(n.li,{children:"EnablePrintRoutes"}),"\n",(0,r.jsx)(n.li,{children:"ListenerNetwork -> previously Network"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"new-methods",children:"new methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RegisterCustomBinder"}),"\n",(0,r.jsx)(n.li,{children:"RegisterCustomConstraint"}),"\n",(0,r.jsx)(n.li,{children:"NewCtxFunc"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"removed-methods",children:"removed methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mount -> Use app.Use() instead"}),"\n",(0,r.jsx)(n.li,{children:"ListenTLS -> Use app.Listen() with tls.Config"}),"\n",(0,r.jsx)(n.li,{children:"ListenTLSWithCertificate -> Use app.Listen() with tls.Config"}),"\n",(0,r.jsx)(n.li,{children:"ListenMutualTLS -> Use app.Listen() with tls.Config"}),"\n",(0,r.jsx)(n.li,{children:"ListenMutualTLSWithCertificate -> Use app.Listen() with tls.Config"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"methods-changes",children:"Methods changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Test -> timeout changed to 1 second"}),"\n",(0,r.jsx)(n.li,{children:"Listen -> has a config parameter"}),"\n",(0,r.jsx)(n.li,{children:"Listener -> has a config parameter"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ctx-interface--customizable",children:"CTX interface + customizable"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-router",children:"\ud83d\uddfa Router"}),"\n",(0,r.jsx)(n.p,{children:"We have slightly adapted our router interface"}),"\n",(0,r.jsx)(n.h3,{id:"http-method-registration",children:"HTTP method registration"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"v2"})," one handler was already mandatory when the route has been registered, but this was checked at runtime and was not correctly reflected in the signature, this has now been changed in ",(0,r.jsx)(n.code,{children:"v3"})," to make it more explicit."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"-    Get(path string, handlers ...Handler) Router\n+    Get(path string, handler Handler, middleware ...Handler) Router\n-    Head(path string, handlers ...Handler) Router\n+    Head(path string, handler Handler, middleware ...Handler) Router\n-    Post(path string, handlers ...Handler) Router\n+    Post(path string, handler Handler, middleware ...Handler) Router\n-    Put(path string, handlers ...Handler) Router\n+    Put(path string, handler Handler, middleware ...Handler) Router\n-    Delete(path string, handlers ...Handler) Router\n+    Delete(path string, handler Handler, middleware ...Handler) Router\n-    Connect(path string, handlers ...Handler) Router\n+    Connect(path string, handler Handler, middleware ...Handler) Router\n-    Options(path string, handlers ...Handler) Router\n+    Options(path string, handler Handler, middleware ...Handler) Router\n-    Trace(path string, handlers ...Handler) Router\n+    Trace(path string, handler Handler, middleware ...Handler) Router\n-    Patch(path string, handlers ...Handler) Router\n+    Patch(path string, handler Handler, middleware ...Handler) Router\n-    All(path string, handlers ...Handler) Router\n+    All(path string, handler Handler, middleware ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.h3,{id:"route-chaining",children:"Route chaining"}),"\n",(0,r.jsxs)(n.p,{children:["The route method is now like ",(0,r.jsx)(n.a,{href:"https://expressjs.com/de/api.html#app.route",children:(0,r.jsx)(n.code,{children:"Express"})})," which gives you the option of a different notation and allows you to concatenate the route declaration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"-    Route(prefix string, fn func(router Router), name ...string) Router\n+    Route(path string) Register    \n"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Route("/api").Route("/user/:id?")\n  .Get(func(c fiber.Ctx) error {\n    // Get user\n    return c.JSON(fiber.Map{"message": "Get user", "id": c.Params("id")})\n  })\n  .Post(func(c fiber.Ctx) error {\n    // Create user\n    return c.JSON(fiber.Map{"message": "User created"})\n  })\n  .Put(func(c fiber.Ctx) error {\n    // Update user\n    return c.JSON(fiber.Map{"message": "User updated", "id": c.Params("id")})\n  })\n  .Delete(func(c fiber.Ctx) error {\n    // Delete user\n    return c.JSON(fiber.Map{"message": "User deleted", "id": c.Params("id")})\n  })\n})\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./api/app#route",children:"Here"})," you can find more information."]}),"\n",(0,r.jsx)(n.h3,{id:"middleware-registration",children:"Middleware registration"}),"\n",(0,r.jsxs)(n.p,{children:["We have aligned our method for middlewares closer to ",(0,r.jsx)(n.a,{href:"https://expressjs.com/de/api.html#app.use",children:(0,r.jsx)(n.code,{children:"Express"})})," and now also support the ",(0,r.jsx)(n.a,{href:"./api/app#use",children:(0,r.jsx)(n.code,{children:"Use"})})," of multiple prefixes."]}),"\n",(0,r.jsxs)(n.p,{children:["Registering a subapp is now also possible via the ",(0,r.jsx)(n.a,{href:"./api/app#use",children:(0,r.jsx)(n.code,{children:"Use"})})," method instead of the old ",(0,r.jsx)(n.code,{children:"app.Mount"})," method."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// register mulitple prefixes\napp.Use(["/v1", "/v2"], func(c *fiber.Ctx) error {\n  // Middleware for /v1 and /v2\n  return c.Next() \n})\n\n// define subapp\napi := fiber.New()\napi.Get("/user", func(c *fiber.Ctx) error {\n  return c.SendString("User")\n})\n// register subapp\napp.Use("/api", api)\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["To enable the routing changes above we had to slightly adjust the signature of the ",(0,r.jsx)(n.code,{children:"Add"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"-    Add(method, path string, handlers ...Handler) Router\n+    Add(methods []string, path string, handler Handler, middleware ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-context",children:"\ud83e\udde0 Context"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.h3,{id:"new-methods-1",children:"new methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AutoFormat -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"Host -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"Port -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"IsProxyTrusted"}),"\n",(0,r.jsx)(n.li,{children:"Reset"}),"\n",(0,r.jsx)(n.li,{children:"Schema -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"SendStream -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"SendString -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"String -> ExpressJs like"}),"\n",(0,r.jsx)(n.li,{children:"ViewBind -> instead of Bind"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"removed-methods-1",children:"removed methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AllParams -> c.Bind().URL() ?"}),"\n",(0,r.jsx)(n.li,{children:"ParamsInt -> Params Generic"}),"\n",(0,r.jsx)(n.li,{children:"QueryBool -> Query Generic"}),"\n",(0,r.jsx)(n.li,{children:"QueryFloat -> Query Generic"}),"\n",(0,r.jsx)(n.li,{children:"QueryInt -> Query Generic"}),"\n",(0,r.jsx)(n.li,{children:"BodyParser -> c.Bind().Body()"}),"\n",(0,r.jsx)(n.li,{children:"CookieParser -> c.Bind().Cookie()"}),"\n",(0,r.jsx)(n.li,{children:"ParamsParser -> c.Bind().URL()"}),"\n",(0,r.jsx)(n.li,{children:"RedirectToRoute -> c.Redirect().Route()"}),"\n",(0,r.jsx)(n.li,{children:"RedirectBack -> c.Redirect().Back()"}),"\n",(0,r.jsx)(n.li,{children:"ReqHeaderParser -> c.Bind().Header()"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changed-methods",children:"changed methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Bind -> for Binding instead of View, us c.ViewBind()"}),"\n",(0,r.jsxs)(n.li,{children:["Format -> Param: body interface"," -> handlers ...ResFmt"]}),"\n",(0,r.jsx)(n.li,{children:"Redirect -> c.Redirect().To()"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-client-package",children:"\ud83c\udf0e Client package"}),"\n",(0,r.jsxs)(n.p,{children:["The Gofiber client has been completely rebuilt. It includes numerous new features such as Cookiejar, request/response hooks, and more.\nYou can take a look to ",(0,r.jsx)(n.a,{href:"/next/client/rest",children:"client docs"})," to see what's new with the client."]}),"\n",(0,r.jsx)(n.h2,{id:"-binding",children:"\ud83d\udcce Binding"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.h2,{id:"-redirect",children:"\ud83d\udd04 Redirect"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.h2,{id:"-generic-functions",children:"\ud83e\uddf0 Generic functions"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.h2,{id:"-middlewares",children:"\ud83e\uddec Middlewares"}),"\n",(0,r.jsx)(n.h3,{id:"cors",children:"CORS"}),"\n",(0,r.jsx)(n.p,{children:"We've made some changes to the CORS middleware to improve its functionality and flexibility. Here's what's new:"}),"\n",(0,r.jsx)(n.h4,{id:"new-struct-fields",children:"New Struct Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Config.AllowPrivateNetwork"}),": This new field is a boolean that allows you to control whether private networks are allowed. This is related to the ",(0,r.jsx)(n.a,{href:"https://wicg.github.io/private-network-access/",children:"Private Network Access (PNA)"})," specification from the Web Incubator Community Group (WICG). When set to ",(0,r.jsx)(n.code,{children:"true"}),", the CORS middleware will allow CORS preflight requests from private networks and respond with the ",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Private-Network: true"})," header. This could be useful in development environments or specific use cases, but should be done with caution due to potential security risks."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"updated-struct-fields",children:"Updated Struct Fields"}),"\n",(0,r.jsx)(n.p,{children:"We've updated several fields from a single string (containing comma-separated values) to slices, allowing for more explicit declaration of multiple values. Here are the updated fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Config.AllowOrigins"}),": Now accepts a slice of strings, each representing an allowed origin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Config.AllowMethods"}),": Now accepts a slice of strings, each representing an allowed method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Config.AllowHeaders"}),": Now accepts a slice of strings, each representing an allowed header."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Config.ExposeHeaders"}),": Now accepts a slice of strings, each representing an exposed header."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"session",children:"Session"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.h3,{id:"filesystem",children:"Filesystem"}),"\n",(0,r.jsxs)(n.p,{children:["We've decided to remove filesystem middleware to clear up the confusion between static and filesystem middleware.\nNow, static middleware can do everything that filesystem middleware and static do. You can check out ",(0,r.jsx)(n.a,{href:"/next/middleware/static",children:"static middleware"})," or ",(0,r.jsx)(n.a,{href:"#-migration-guide",children:"migration guide"})," to see what has been changed."]}),"\n",(0,r.jsx)(n.h3,{id:"monitor",children:"Monitor"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DRAFT section"})}),"\n",(0,r.jsx)(n.p,{children:"Monitor middleware is now in Contrib package."}),"\n",(0,r.jsx)(n.h2,{id:"-migration-guide",children:"\ud83d\udccb Migration guide"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-app-1",children:"\ud83d\ude80 App"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-router-1",children:"\ud83d\uddfa Router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-context-1",children:"\ud83e\udde0 Context"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-parser",children:"\ud83d\udcce Parser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-redirect-1",children:"\ud83d\udd04 Redirect"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-client-package-1",children:"\ud83c\udf0e Client package"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#-middlewares-1",children:"\ud83e\uddec Middlewares"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"-app-1",children:"\ud83d\ude80 App"}),"\n",(0,r.jsx)(n.h4,{id:"static",children:"Static"}),"\n",(0,r.jsxs)(n.p,{children:["Since we've removed ",(0,r.jsx)(n.code,{children:"app.Static()"}),", you need to move methods to static middleware like the example below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Before\napp.Static("/", "./public")\napp.Static("/prefix", "./public")\napp.Static("/prefix", "./public", Static{\n  Index: "index.htm",\n})\napp.Static("*", "./public/index.html")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// After\napp.Get("/*", static.New("./public"))\napp.Get("/prefix*", static.New("./public"))\napp.Get("/prefix*", static.New("./public", static.Config{\n  IndexNames: []string{"index.htm", "index.html"},\n}))\napp.Get("*", static.New("./public/index.html"))\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["You have to put ",(0,r.jsx)(n.code,{children:"*"})," to the end of the route if you don't define static route with ",(0,r.jsx)(n.code,{children:"app.Use"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"-router-1",children:"\ud83d\uddfa Router"}),"\n",(0,r.jsxs)(n.p,{children:["The signatures for ",(0,r.jsx)(n.a,{href:"#middleware-registration",children:(0,r.jsx)(n.code,{children:"Add"})})," and ",(0,r.jsx)(n.a,{href:"#route-chaining",children:(0,r.jsx)(n.code,{children:"Route"})})," have been changed."]}),"\n",(0,r.jsxs)(n.p,{children:["To migrate ",(0,r.jsx)(n.a,{href:"#middleware-registration",children:(0,r.jsx)(n.code,{children:"Add"})})," you must change the ",(0,r.jsx)(n.code,{children:"methods"})," in a slice."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Before\napp.Add(fiber.MethodPost, "/api", myHandler)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// After\napp.Add([]string{fiber.MethodPost}, "/api", myHandler)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To migrate ",(0,r.jsx)(n.a,{href:"#route-chaining",children:(0,r.jsx)(n.code,{children:"Route"})})," you need to read ",(0,r.jsx)(n.a,{href:"#route-chaining",children:"this"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Before\napp.Route("/api", func(apiGrp Router) {\n        apiGrp.Route("/user/:id?", func(userGrp Router) {\n            userGrp.Get("/", func(c fiber.Ctx) error {\n                // Get user\n                return c.JSON(fiber.Map{"message": "Get user", "id": c.Params("id")})\n            })\n            userGrp.Post("/", func(c fiber.Ctx) error {\n                // Create user\n                return c.JSON(fiber.Map{"message": "User created"})\n            })\n        })\n})\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// After\napp.Route("/api").Route("/user/:id?")\n  .Get(func(c fiber.Ctx) error {\n    // Get user\n    return c.JSON(fiber.Map{"message": "Get user", "id": c.Params("id")})\n  })\n  .Post(func(c fiber.Ctx) error {\n    // Create user\n    return c.JSON(fiber.Map{"message": "User created"})\n  });\n'})}),"\n",(0,r.jsx)(n.h3,{id:"-context-1",children:"\ud83e\udde0 Context"}),"\n",(0,r.jsx)(n.h3,{id:"-parser",children:"\ud83d\udcce Parser"}),"\n",(0,r.jsx)(n.h3,{id:"-redirect-1",children:"\ud83d\udd04 Redirect"}),"\n",(0,r.jsx)(n.h3,{id:"-client-package-1",children:"\ud83c\udf0e Client package"}),"\n",(0,r.jsx)(n.h3,{id:"-middlewares-1",children:"\ud83e\uddec Middlewares"}),"\n",(0,r.jsx)(n.h4,{id:"cors-1",children:"CORS"}),"\n",(0,r.jsxs)(n.p,{children:["The CORS middleware has been updated to use slices instead of strings for the ",(0,r.jsx)(n.code,{children:"AllowOrigins"}),", ",(0,r.jsx)(n.code,{children:"AllowMethods"}),", ",(0,r.jsx)(n.code,{children:"AllowHeaders"}),", and ",(0,r.jsx)(n.code,{children:"ExposeHeaders"})," fields. Here's how you can update your code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Before\napp.Use(cors.New(cors.Config{\n  AllowOrigins: "https://example.com,https://example2.com",\n  AllowMethods: strings.Join([]string{fiber.MethodGet, fiber.MethodPost}, ","),\n  AllowHeaders: "Content-Type",\n  ExposeHeaders: "Content-Length",\n}))\n\n// After\napp.Use(cors.New(cors.Config{\n  AllowOrigins: []string{"https://example.com", "https://example2.com"},\n  AllowMethods: []string{fiber.MethodGet, fiber.MethodPost},\n  AllowHeaders: []string{"Content-Type"},\n  ExposeHeaders: []string{"Content-Length"},\n}))\n'})}),"\n",(0,r.jsx)(n.h4,{id:"filesystem-1",children:"Filesystem"}),"\n",(0,r.jsx)(n.p,{children:"You need to move filesystem middleware to static middleware due to it has been removed from the core."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Before\napp.Use(filesystem.New(filesystem.Config{\n  Root: http.Dir("./assets"),\n}))\n\napp.Use(filesystem.New(filesystem.Config{\n  Root:         http.Dir("./assets"),\n  Browse:       true,\n  Index:        "index.html",\n  MaxAge:       3600,\n}))\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// After\napp.Use(static.New("", static.Config{\n  FS: os.DirFS("./assets"),\n}))\n\napp.Use(static.New("", static.Config{\n  FS:           os.DirFS("./assets"),\n  Browse:       true,\n  IndexNames:   []string{"index.html"},\n  MaxAge:       3600,\n}))\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);