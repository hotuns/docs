"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/",id:"welcome",title:"\ud83d\udc4b Welcome",sidebar_position:1},l=void 0,i={unversionedId:"welcome",id:"version-v2.x/welcome",title:"\ud83d\udc4b Welcome",description:"An online API documentation with examples so you can start building web apps with Fiber right away!",source:"@site/versioned_docs/version-v2.x/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1704461823,formattedLastUpdatedAt:"Jan 5, 2024",sidebarPosition:1,frontMatter:{slug:"/",id:"welcome",title:"\ud83d\udc4b Welcome",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API",permalink:"/category/api"}},p={},s=[{value:"Installation",id:"installation",level:3},{value:"Zero Allocation",id:"zero-allocation",level:3},{value:"Hello, World!",id:"hello-world",level:3},{value:"Basic routing",id:"basic-routing",level:3},{value:"Static files",id:"static-files",level:3},{value:"Note",id:"note",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An online API documentation with examples so you can start building web apps with Fiber right away!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expressjs/express"},"Express")," inspired ",(0,r.kt)("strong",{parentName:"p"},"web framework")," built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp"},"Fasthttp"),", the ",(0,r.kt)("strong",{parentName:"p"},"fastest")," HTTP engine for ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/"},"Go"),". Designed to ",(0,r.kt)("strong",{parentName:"p"},"ease")," things up for ",(0,r.kt)("strong",{parentName:"p"},"fast")," development with ",(0,r.kt)("strong",{parentName:"p"},"zero memory allocation")," and ",(0,r.kt)("strong",{parentName:"p"},"performance")," in mind."),(0,r.kt)("p",null,"These docs are for ",(0,r.kt)("strong",{parentName:"p"},"Fiber v2"),", which was released on ",(0,r.kt)("strong",{parentName:"p"},"September 15th, 2020"),"."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First of all, ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"download")," and install Go. ",(0,r.kt)("inlineCode",{parentName:"p"},"1.17")," or higher is required."),(0,r.kt)("p",null,"Installation is done using the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them"},(0,r.kt)("inlineCode",{parentName:"a"},"go get"))," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/fiber/v2\n")),(0,r.kt)("h3",{id:"zero-allocation"},"Zero Allocation"),(0,r.kt)("p",null,"Some values returned from ","*",(0,r.kt)("strong",{parentName:"p"},"fiber.Ctx")," are ",(0,r.kt)("strong",{parentName:"p"},"not")," immutable by default."),(0,r.kt)("p",null,"Because fiber is optimized for ",(0,r.kt)("strong",{parentName:"p"},"high-performance"),", values returned from ",(0,r.kt)("strong",{parentName:"p"},"fiber.Ctx")," are ",(0,r.kt)("strong",{parentName:"p"},"not")," immutable by default and ",(0,r.kt)("strong",{parentName:"p"},"will")," be re-used across requests. As a rule of thumb, you ",(0,r.kt)("strong",{parentName:"p"},"must")," only use context values within the handler, and you ",(0,r.kt)("strong",{parentName:"p"},"must not")," keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c *fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo") \n\n    // ...\n}\n')),(0,r.kt)("p",null,"If you need to persist such values outside the handler, make copies of their ",(0,r.kt)("strong",{parentName:"p"},"underlying buffer")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/builtin/#copy"},"copy")," builtin. Here is an example for persisting a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c *fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo")\n\n    // Make a copy\n    buffer := make([]byte, len(result))\n    copy(buffer, result)\n    resultCopy := string(buffer) \n    // Variable is now valid forever\n\n    // ...\n}\n')),(0,r.kt)("p",null,"We created a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"CopyString")," function that does the above and is available under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/utils"},"gofiber/utils"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:foo", func(c *fiber.Ctx) error {\n    // Variable is now immutable\n    result := utils.CopyString(c.Params("foo")) \n\n    // ...\n})\n')),(0,r.kt)("p",null,"Alternatively, you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Immutable")," setting. It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app := fiber.New(fiber.Config{\n    Immutable: true,\n})\n")),(0,r.kt)("p",null,"For more information, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/issues/426"},(0,r.kt)("strong",{parentName:"a"},"#","426"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/issues/185"},(0,r.kt)("strong",{parentName:"a"},"#","185")),"."),(0,r.kt)("h3",{id:"hello-world"},"Hello, World!"),(0,r.kt)("p",null,"Embedded below is essentially the most straightforward ",(0,r.kt)("strong",{parentName:"p"},"Fiber")," app you can create:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "github.com/gofiber/fiber/v2"\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"go run server.go\n")),(0,r.kt)("p",null,"Browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, World!")," on the page."),(0,r.kt)("h3",{id:"basic-routing"},"Basic routing"),(0,r.kt)("p",null,"Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", etc.)."),(0,r.kt)("p",null,"Each route can have ",(0,r.kt)("strong",{parentName:"p"},"multiple handler functions")," that are executed when the route is matched."),(0,r.kt)("p",null,"Route definition takes the following structures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Function signature\napp.Method(path string, ...func(*fiber.Ctx) error)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," is an instance of ",(0,r.kt)("strong",{parentName:"li"},"Fiber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Method")," is an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/api/app#route-handlers"},"HTTP request method"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),", etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," is a virtual path on the server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func(*fiber.Ctx) error")," is a callback function containing the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/api/ctx"},"Context")," executed when the route is matched")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple route")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Respond with "Hello, World!" on root path, "/"\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:8080/hello%20world\n\napp.Get("/:value", func(c *fiber.Ctx) error {\n    return c.SendString("value: " + c.Params("value"))\n    // => Get request with value: hello world\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional parameter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:3000/john\n\napp.Get("/:name?", func(c *fiber.Ctx) error {\n    if c.Params("name") != "" {\n        return c.SendString("Hello " + c.Params("name"))\n        // => Hello john\n    }\n    return c.SendString("Where is john?")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcards")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:3000/api/user/john\n\napp.Get("/api/*", func(c *fiber.Ctx) error {\n    return c.SendString("API path: " + c.Params("*"))\n    // => API path: user/john\n})\n')),(0,r.kt)("h3",{id:"static-files"},"Static files"),(0,r.kt)("p",null,"To serve static files such as ",(0,r.kt)("strong",{parentName:"p"},"images"),", ",(0,r.kt)("strong",{parentName:"p"},"CSS"),", and ",(0,r.kt)("strong",{parentName:"p"},"JavaScript")," files, replace your function handler with a file or directory string."),(0,r.kt)("p",null,"Function signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.Static(prefix, root string, config ...Static)\n")),(0,r.kt)("p",null,"Use the following code to serve files in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"./public"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New()\n\napp.Static("/", "./public") \n\napp.Listen(":3000")\n')),(0,r.kt)("p",null,"Now, you can load the files that are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./public")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://localhost:3000/hello.html\nhttp://localhost:3000/js/jquery.js\nhttp://localhost:3000/css/style.css\n")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"For more information on how to build APIs in Go with Fiber, please check out this excellent article\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/express-style-api-go-fiber/"},"on building an express-style API in Go with Fiber"),"."))}m.isMDXComponent=!0}}]);