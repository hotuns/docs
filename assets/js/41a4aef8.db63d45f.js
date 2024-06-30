"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[56381,66834],{57653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=r(74848),a=r(28453),s=r(11470),i=r(19365),o=r(43910);const l={id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},c=void 0,d={id:"guide/routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",source:"@site/versioned_docs/version-v2.x/guide/routing.md",sourceDirName:"guide",slug:"/guide/routing",permalink:"/guide/routing",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719776394e3,sidebarPosition:1,frontMatter:{id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/category/guide"},next:{title:"\ud83c\udfad Grouping",permalink:"/guide/grouping"}},u={},h=[{value:"Handlers",id:"handlers",level:2},...o.toc,{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Middleware",id:"middleware",level:2},{value:"Constraints on Adding Routes Dynamically",id:"constraints-on-adding-routes-dynamically",level:3},{value:"Grouping",id:"grouping",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsx)(n.h2,{id:"paths",children:"Paths"}),"\n",(0,t.jsxs)(n.p,{children:["Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,t.jsx)(n.strong,{children:"strings"})," or ",(0,t.jsx)(n.strong,{children:"string patterns"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples of route paths based on strings"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) error {\n      return c.SendString("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) error {\n    return c.SendString("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) error {\n    return c.SendString("random.txt")\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"As with the expressJs framework, the order of the route declaration plays a role.\nWhen a request is received, the routes are checked in the order in which they are declared."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"So please be careful to write routes with variable parameters after the routes that contain fixed parts, so that these variable parts do not match instead and unexpected behavior occurs."})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Route parameters are dynamic elements in the route, which are ",(0,t.jsx)(n.strong,{children:"named"})," or ",(0,t.jsx)(n.strong,{children:"not named segments"}),". This segments that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,t.jsx)(n.a,{href:"https://fiber.wiki/context#params",children:"Params"})," function, with the name of the route parameter specified in the path as their respective keys or for unnamed parameters the character(*, +) and the counter of this."]}),"\n",(0,t.jsx)(n.p,{children:"The characters :, +, and * are characters that introduce a parameter."}),"\n",(0,t.jsx)(n.p,{children:"Greedy parameters are indicated by wildcard(*) or plus(+) signs."}),"\n",(0,t.jsx)(n.p,{children:'The routing also offers the possibility to use optional parameters, for the named parameters these are marked with a final "?", unlike the plus sign which is not optional, you can use the wildcard character for a parameter range which is optional and greedy.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example of define routes with route parameters"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s\\n", c.Params("name"))\n    fmt.Fprintf(c, "%s\\n", c.Params("title"))\n    return nil\n})\n// Plus - greedy - not optional\napp.Get("/user/+", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("+"))\n})\n\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("name"))\n})\n\n// Wildcard - greedy - optional\napp.Get("/user/*", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("*"))\n})\n\n// This route path will match requests to "/v1/some/resource/name:customVerb", since the parameter character is escaped\napp.Get(`/v1/some/resource/name\\:customVerb`, func(c *fiber.Ctx) error {\n    return c.SendString("Hello, Community")\n})\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Since the hyphen (",(0,t.jsx)(n.code,{children:"-"}),") and the dot (",(0,t.jsx)(n.code,{children:"."}),") are interpreted literally, they can be used along with route parameters for useful purposes."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["All special parameter characters can also be escaped with ",(0,t.jsx)(n.code,{children:'"\\\\"'})," and lose their value, so you can use them in the route if you want, like in the custom methods of the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/apis/design/custom_methods",children:"google api design guide"}),". It's recommended to use backticks ",(0,t.jsx)(n.code,{children:"`"})," because in go's regex documentation, they always use backticks to make sure it is unambiguous and the escape character doesn't interfere with regex patterns in an unexpected way."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s.%s\\n", c.Params("genus"), c.Params("species"))\n    return nil // prunus.persica\n})\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s-%s\\n", c.Params("from"), c.Params("to"))\n    return nil // LAX-SFO\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"Our intelligent router recognizes that the introductory parameter characters should be part of the request route in this case and can process them as such."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/shop/product/color:blue/size:xs\napp.Get("/shop/product/color::color/size::size", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s:%s\\n", c.Params("color"), c.Params("size"))\n    return nil // blue:xs\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"In addition, several parameters in a row and several unnamed parameter characters in the route, such as the wildcard or plus character, are possible, which greatly expands the possibilities of the router for the user."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET /@v1\n// Params: "sign" -> "@", "param" -> "v1"\napp.Get("/:sign:param", handler)\n\n// GET /api-v1\n// Params: "name" -> "v1" \napp.Get("/api-:name", handler)\n\n// GET /customer/v1/cart/proxy\n// Params: "*1" -> "customer/", "*2" -> "/cart"\napp.Get("/*v1*/proxy", handler)\n\n// GET /v1/brand/4/shop/blue/xs\n// Params: "*1" -> "brand/4", "*2" -> "blue/xs"\napp.Get("/v1/*/shop/*", handler)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We have adapted the routing strongly to the express routing, but currently without the possibility of the regular expressions, because they are quite slow. The possibilities can be tested with version 0.1.7 (express 4) in the online ",(0,t.jsx)(n.a,{href:"http://forbeslindesay.github.io/express-route-tester/",children:"Express route tester"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,t.jsxs)(n.p,{children:["Route constraints execute when a match has occurred to the incoming URL and the URL path is tokenized into route values by parameters. The feature was intorduced in ",(0,t.jsx)(n.code,{children:"v2.37.0"})," and inspired by ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-6.0#route-constraints",children:".NET Core"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Constraints aren't validation for parameters. If constraints aren't valid for a parameter value, Fiber returns ",(0,t.jsx)(n.strong,{children:"404 handler"}),"."]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constraint"}),(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{children:"Example matches"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":id<int\\>"})}),(0,t.jsx)(n.td,{children:"123456789, -123456789"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":active<bool\\>"})}),(0,t.jsx)(n.td,{children:"true,false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"guid"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":id<guid\\>"})}),(0,t.jsx)(n.td,{children:"CD2C1638-1638-72D5-1638-DEADBEEF1638"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":weight<float\\>"})}),(0,t.jsx)(n.td,{children:"1.234, -1,001.01e8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"minLen(value)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":username<minLen(4)\\>"})}),(0,t.jsx)(n.td,{children:"Test (must be at least 4 characters)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maxLen(value)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":filename<maxLen(8)\\>"})}),(0,t.jsx)(n.td,{children:"MyFile (must be no more than 8 characters"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"len(length)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":filename<len(12)\\>"})}),(0,t.jsx)(n.td,{children:"somefile.txt (exactly 12 characters)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"min(value)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":age<min(18)\\>"})}),(0,t.jsx)(n.td,{children:"19 (Integer value must be at least 18)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"max(value)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":age<max(120)\\>"})}),(0,t.jsx)(n.td,{children:"91 (Integer value must be no more than 120)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range(min,max)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":age<range(18,120)\\>"})}),(0,t.jsx)(n.td,{children:"91 (Integer value must be at least 18 but no more than 120)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"alpha"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":name<alpha\\>"})}),(0,t.jsx)(n.td,{children:"Rick (String must consist of one or more alphabetical characters, a-z and case-insensitive)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datetime"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":dob<datetime(2006\\\\\\\\-01\\\\\\\\-02)\\>"})}),(0,t.jsx)(n.td,{children:"2005-11-01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"regex(expression)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:":date<regex(\\\\d{4}-\\\\d{2}-\\\\d{2})\\>"})}),(0,t.jsx)(n.td,{children:"2022-08-27 (Must match regular expression)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"single-constraint",label:"Single Constraint",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/12\n// 12\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n'})})}),(0,t.jsxs)(i.A,{value:"multiple-constraints",label:"Multiple Constraints",children:[(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:";"})," for multiple constraints."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(100);maxLen(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/120000\n// Cannot GET /120000\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n\n// curl -X GET http://localhost:3000/250\n// 250\n'})})]}),(0,t.jsxs)(i.A,{value:"regex-constraint",label:"Regex Constraint",children:[(0,t.jsx)(n.p,{children:"Fiber precompiles regex query when to register routes. So there're no performance overhead for regex constraint."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get(`/:date<regex(\\d{4}-\\d{2}-\\d{2})>`, func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("date"))\n})\n\n// curl -X GET http://localhost:3000/125\n// Cannot GET /125\n\n// curl -X GET http://localhost:3000/test\n// Cannot GET /test\n\n// curl -X GET http://localhost:3000/2022-08-27\n// 2022-08-27\n'})})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["You should use ",(0,t.jsx)(n.code,{children:"\\\\"})," before routing-specific characters when to use datetime constraint (",(0,t.jsx)(n.code,{children:"*"}),", ",(0,t.jsx)(n.code,{children:"+"}),", ",(0,t.jsx)(n.code,{children:"?"}),", ",(0,t.jsx)(n.code,{children:":"}),", ",(0,t.jsx)(n.code,{children:"/"}),", ",(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:";"}),", ",(0,t.jsx)(n.code,{children:"("}),", ",(0,t.jsx)(n.code,{children:")"}),"), to avoid wrong parsing."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Parameter Example"})}),"\n",(0,t.jsx)(n.p,{children:"You can impose constraints on optional parameters as well."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<int>?", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n// curl -X GET http://localhost:3000/42\n// 42\n// curl -X GET http://localhost:3000/\n//\n// curl -X GET http://localhost:3000/7.0\n// Cannot GET /7.0\n'})}),"\n",(0,t.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,t.jsxs)(n.p,{children:["Functions that are designed to make changes to the request or response are called ",(0,t.jsx)(n.strong,{children:"middleware functions"}),". The ",(0,t.jsx)(n.a,{href:"/api/ctx#next",children:"Next"})," is a ",(0,t.jsx)(n.strong,{children:"Fiber"})," router function, when called, executes the ",(0,t.jsx)(n.strong,{children:"next"})," function that ",(0,t.jsx)(n.strong,{children:"matches"})," the current route."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example of a middleware function"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Use(func(c *fiber.Ctx) error {\n  // Set a custom header on all responses:\n  c.Set("X-Custom-Header", "Hello, World")\n\n  // Go to next middleware:\n  return c.Next()\n})\n\napp.Get("/", func(c *fiber.Ctx) error {\n  return c.SendString("Hello, World!")\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Use"})," method path is a ",(0,t.jsx)(n.strong,{children:"mount"}),", or ",(0,t.jsx)(n.strong,{children:"prefix"})," path, and limits middleware to only apply to any paths requested that begin with it."]}),"\n",(0,t.jsx)(n.h3,{id:"constraints-on-adding-routes-dynamically",children:"Constraints on Adding Routes Dynamically"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Adding routes dynamically after the application has started is not supported due to design and performance considerations. Make sure to define all your routes before the application starts."})}),"\n",(0,t.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,t.jsxs)(n.p,{children:["If you have many endpoints, you can organize your routes using ",(0,t.jsx)(n.code,{children:"Group"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["More information about this in our ",(0,t.jsx)(n.a,{href:"/guide/grouping",children:"Grouping Guide"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},43910:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(74848),a=r(28453);const s={id:"route-handlers",title:"Route Handlers"},i=void 0,o={id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/versioned_docs/version-v2.x/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/partials/routing/route-handlers",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719776394e3,frontMatter:{id:"route-handlers",title:"Route Handlers"}},l={},c=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Use"})," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,t.jsx)(n.code,{children:"/john"})," will match ",(0,t.jsx)(n.code,{children:"/john/doe"}),", ",(0,t.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...interface{}) Router\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(34164),s=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:r,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);