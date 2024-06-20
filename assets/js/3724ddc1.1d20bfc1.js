"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[75415],{64738:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(74848),s=r(28453);const i={slug:"/",id:"welcome",title:"\ud83d\udc4b Welcome",sidebar_position:1},o=void 0,l={id:"welcome",title:"\ud83d\udc4b Welcome",description:"An online API documentation with examples so you can start building web apps with Fiber right away!",source:"@site/docs/core/intro.md",sourceDirName:".",slug:"/",permalink:"/next/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1718889343e3,sidebarPosition:1,frontMatter:{slug:"/",id:"welcome",title:"\ud83d\udc4b Welcome",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83c\udd95 Whats New in v3",permalink:"/next/whats_new"}},a={},c=[{value:"Installation",id:"installation",level:3},{value:"Zero Allocation",id:"zero-allocation",level:3},{value:"Hello, World!",id:"hello-world",level:3},{value:"Basic routing",id:"basic-routing",level:3},{value:"Static files",id:"static-files",level:3},{value:"Note",id:"note",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"An online API documentation with examples so you can start building web apps with Fiber right away!"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Fiber"})," is an ",(0,t.jsx)(n.a,{href:"https://github.com/expressjs/express",children:"Express"})," inspired ",(0,t.jsx)(n.strong,{children:"web framework"})," built on top of ",(0,t.jsx)(n.a,{href:"https://github.com/valyala/fasthttp",children:"Fasthttp"}),", the ",(0,t.jsx)(n.strong,{children:"fastest"})," HTTP engine for ",(0,t.jsx)(n.a,{href:"https://go.dev/doc/",children:"Go"}),". Designed to ",(0,t.jsx)(n.strong,{children:"ease"})," things up for ",(0,t.jsx)(n.strong,{children:"fast"})," development with ",(0,t.jsx)(n.strong,{children:"zero memory allocation"})," and ",(0,t.jsx)(n.strong,{children:"performance"})," in mind."]}),"\n",(0,t.jsxs)(n.p,{children:["These docs are for ",(0,t.jsx)(n.strong,{children:"Fiber v3"}),", which was released on ",(0,t.jsx)(n.strong,{children:"March XX, 2024"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["First of all, ",(0,t.jsx)(n.a,{href:"https://go.dev/dl/",children:"download"})," and install Go. ",(0,t.jsx)(n.code,{children:"1.21"})," or higher is required."]}),"\n",(0,t.jsxs)(n.p,{children:["Installation is done using the ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them",children:(0,t.jsx)(n.code,{children:"go get"})})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/fiber/v3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"zero-allocation",children:"Zero Allocation"}),"\n",(0,t.jsxs)(n.p,{children:["Fiber is optimized for ",(0,t.jsx)(n.strong,{children:"high-performance"}),", meaning values returned from ",(0,t.jsx)(n.strong,{children:"fiber.Ctx"})," are ",(0,t.jsx)(n.strong,{children:"not"})," immutable by default and ",(0,t.jsx)(n.strong,{children:"will"})," be re-used across requests. As a rule of thumb, you ",(0,t.jsx)(n.strong,{children:"must"})," only use context values within the handler and ",(0,t.jsx)(n.strong,{children:"must not"})," keep any references. Once you return from the handler, any values obtained from the context will be re-used in future requests. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo") \n\n    // ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to persist such values outside the handler, make copies of their ",(0,t.jsx)(n.strong,{children:"underlying buffer"})," using the ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/builtin/#copy",children:"copy"})," builtin. Here is an example for persisting a string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo")\n\n    // Make a copy\n    buffer := make([]byte, len(result))\n    copy(buffer, result)\n    resultCopy := string(buffer) \n    // Variable is now valid forever\n\n    // ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We created a custom ",(0,t.jsx)(n.code,{children:"CopyString"})," function that does the above and is available under ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/utils",children:"gofiber/utils"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get("/:foo", func(c fiber.Ctx) error {\n\t// Variable is now immutable\n\tresult := utils.CopyString(c.Params("foo")) \n\n\t// ...\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can also use the ",(0,t.jsx)(n.code,{children:"Immutable"})," setting. It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"app := fiber.New(fiber.Config{\n\tImmutable: true,\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please check ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/426",children:(0,t.jsx)(n.strong,{children:"#426"})}),", ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/185",children:(0,t.jsx)(n.strong,{children:"#185"})})," and ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/3012",children:(0,t.jsx)(n.strong,{children:"#3012"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"hello-world",children:"Hello, World!"}),"\n",(0,t.jsxs)(n.p,{children:["Embedded below is essentially the most straightforward ",(0,t.jsx)(n.strong,{children:"Fiber"})," app you can create:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "github.com/gofiber/fiber/v3"\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Hello, World!")\n\t})\n\n\tapp.Listen(":3000")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run server.go\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Browse to ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})," and you should see ",(0,t.jsx)(n.code,{children:"Hello, World!"})," on the page."]}),"\n",(0,t.jsx)(n.h3,{id:"basic-routing",children:"Basic routing"}),"\n",(0,t.jsxs)(n.p,{children:["Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", ",(0,t.jsx)(n.code,{children:"POST"}),", etc.)."]}),"\n",(0,t.jsxs)(n.p,{children:["Each route can have ",(0,t.jsx)(n.strong,{children:"multiple handler functions"})," that are executed when the route is matched."]}),"\n",(0,t.jsx)(n.p,{children:"Route definition takes the following structures:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Function signature\napp.Method(path string, ...func(fiber.Ctx) error)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app"})," is an instance of ",(0,t.jsx)(n.strong,{children:"Fiber"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Method"})," is an ",(0,t.jsx)(n.a,{href:"https://docs.gofiber.io/api/app#route-handlers",children:"HTTP request method"}),": ",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", ",(0,t.jsx)(n.code,{children:"POST"}),", etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," is a virtual path on the server"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"func(fiber.Ctx) error"})," is a callback function containing the ",(0,t.jsx)(n.a,{href:"https://docs.gofiber.io/api/ctx",children:"Context"})," executed when the route is matched"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Simple route"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Respond with "Hello, World!" on root path, "/"\napp.Get("/", func(c fiber.Ctx) error {\n\treturn c.SendString("Hello, World!")\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:8080/hello%20world\n\napp.Get("/:value", func(c fiber.Ctx) error {\n\treturn c.SendString("value: " + c.Params("value"))\n\t// => Get request with value: hello world\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional parameter"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/john\n\napp.Get("/:name?", func(c fiber.Ctx) error {\n\tif c.Params("name") != "" {\n\t\treturn c.SendString("Hello " + c.Params("name"))\n\t\t// => Hello john\n\t}\n\treturn c.SendString("Where is john?")\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Wildcards"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/api/user/john\n\napp.Get("/api/*", func(c fiber.Ctx) error {\n\treturn c.SendString("API path: " + c.Params("*"))\n\t// => API path: user/john\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"static-files",children:"Static files"}),"\n",(0,t.jsxs)(n.p,{children:["To serve static files such as ",(0,t.jsx)(n.strong,{children:"images"}),", ",(0,t.jsx)(n.strong,{children:"CSS"}),", and ",(0,t.jsx)(n.strong,{children:"JavaScript"})," files, replace your function handler with a file or directory string.\nYou can check out ",(0,t.jsx)(n.a,{href:"/next/middleware/static",children:"static middleware"})," for more information.\nFunction signature:"]}),"\n",(0,t.jsxs)(n.p,{children:["Use the following code to serve files in a directory named ",(0,t.jsx)(n.code,{children:"./public"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app := fiber.New()\n\napp.Get("/*", static.New("./public")) \n\napp.Listen(":3000")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can load the files that are in the ",(0,t.jsx)(n.code,{children:"./public"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:3000/hello.html\nhttp://localhost:3000/js/jquery.js\nhttp://localhost:3000/css/style.css\n"})}),"\n",(0,t.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.p,{children:["For more information on how to build APIs in Go with Fiber, please check out this excellent article\n",(0,t.jsx)(n.a,{href:"https://blog.logrocket.com/express-style-api-go-fiber/",children:"on building an express-style API in Go with Fiber"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);