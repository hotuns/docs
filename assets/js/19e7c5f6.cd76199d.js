"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[24856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=p(n),g=r,c=f["".concat(s,".").concat(g)]||f[g]||d[g]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},33683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"filesystem"},l="FileSystem",o={unversionedId:"api/middleware/filesystem",id:"version-v2.x/api/middleware/filesystem",title:"FileSystem",description:"Filesystem middleware for Fiber that enables you to serve files from a directory.",source:"@site/versioned_docs/version-v2.x/api/middleware/filesystem.md",sourceDirName:"api/middleware",slug:"/api/middleware/filesystem",permalink:"/api/middleware/filesystem",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1705052378,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"filesystem"},sidebar:"tutorialSidebar",previous:{title:"Favicon",permalink:"/api/middleware/favicon"},next:{title:"Health Check",permalink:"/api/middleware/healthcheck"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"embed",id:"embed",level:2},{value:"pkger",id:"pkger",level:2},{value:"packr",id:"packr",level:2},{value:"go.rice",id:"gorice",level:2},{value:"fileb0x",id:"fileb0x",level:2},{value:"statik",id:"statik",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Utils",id:"utils",level:2},{value:"SendFile",id:"sendfile",level:3}],m={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filesystem"},"FileSystem"),(0,r.kt)("p",null,"Filesystem middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that enables you to serve files from a directory."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},":params")," & ",(0,r.kt)("inlineCode",{parentName:"strong"},":optionals?")," within the prefix path are not supported!")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"To handle paths with spaces (or other url encoded values) make sure to set ",(0,r.kt)("inlineCode",{parentName:"strong"},"fiber.Config{ UnescapePath: true }")))),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(filesystem.New(filesystem.Config{\n    Root: http.Dir("./assets"),\n}))\n\n// Or extend your config for customization\napp.Use(filesystem.New(filesystem.Config{\n    Root:         http.Dir("./assets"),\n    Browse:       true,\n    Index:        "index.html",\n    NotFoundFile: "404.html",\n    MaxAge:       3600,\n}))\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your environment (Go 1.16+) supports it, we recommend using Go Embed instead of the other solutions listed as this one is native to Go and the easiest to use.")),(0,r.kt)("h2",{id:"embed"},"embed"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/embed/"},"Embed")," is the native method to embed files in a Golang excecutable. Introduced in Go 1.16."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "embed"\n    "io/fs"\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n\n// Embed a single file\n//go:embed index.html\nvar f embed.FS\n\n// Embed a directory\n//go:embed static/*\nvar embedDirStatic embed.FS\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/", filesystem.New(filesystem.Config{\n        Root: http.FS(f),\n    }))\n\n    // Access file "image.png" under `static/` directory via URL: `http://<server>/static/image.png`.\n    // Without `PathPrefix`, you have to access it via URL:\n    // `http://<server>/static/static/image.png`.\n    app.Use("/static", filesystem.New(filesystem.Config{\n        Root: http.FS(embedDirStatic),\n        PathPrefix: "static",\n        Browse: true,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"pkger"},"pkger"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"https://github.com/markbates/pkger")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/markbates/pkger"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: pkger.Dir("/assets"),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"packr"},"packr"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/packr"},"https://github.com/gobuffalo/packr")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: packr.New("Assets Box", "/assets"),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"gorice"},"go.rice"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/GeertJohan/go.rice"},"https://github.com/GeertJohan/go.rice")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: rice.MustFindBox("assets").HTTPBox(),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"fileb0x"},"fileb0x"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/UnnoTed/fileb0x"},"https://github.com/UnnoTed/fileb0x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "<Your go module>/myEmbeddedFiles"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: myEmbeddedFiles.HTTP,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"statik"},"statik"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/rakyll/statik"},"https://github.com/rakyll/statik")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    // Use blank to invoke init function and register data to statik\n    _ "<Your go module>/statik" \n    "github.com/rakyll/statik/fs"\n)\n\nfunc main() {\n    statikFS, err := fs.New()\n    if err != nil {\n        panic(err)\n    }\n\n    app := fiber.New()\n\n    app.Use("/", filesystem.New(filesystem.Config{\n        Root: statikFS,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Root"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"http.FileSystem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Root is a FileSystem that provides access to a collection of files and directories."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PathPrefix"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"PathPrefix defines a prefix to be added to a filepath when reading a file from the FileSystem."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Browse"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable directory browsing."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Index"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Index file for serving a directory."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"index.html"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxAge"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value for the Cache-Control HTTP-header that is set on the file response. MaxAge is defined in seconds."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NotFoundFile"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"File to return if the path is not found. Useful for SPA's."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContentTypeCharset"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value for the Content-Type HTTP-header that is set on the file response."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:   nil,\n    Root:   nil,\n    PathPrefix: "",\n    Browse: false,\n    Index:  "/index.html",\n    MaxAge: 0,\n    ContentTypeCharset: "",\n}\n')),(0,r.kt)("h2",{id:"utils"},"Utils"),(0,r.kt)("h3",{id:"sendfile"},"SendFile"),(0,r.kt)("p",null,"Serves a file from an ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#FileSystem"},"HTTP file system")," at the specified path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature" title="Signature"',title:'"Signature"'},"func SendFile(c *fiber.Ctx, filesystem http.FileSystem, path string) error\n")),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Define a route to serve a specific file\napp.Get("/download", func(c *fiber.Ctx) error {\n    // Serve the file using SendFile function\n    err := filesystem.SendFile(c, http.Dir("your/filesystem/root"), "path/to/your/file.txt")\n    if err != nil {\n        // Handle the error, e.g., return a 404 Not Found response\n        return c.Status(fiber.StatusNotFound).SendString("File not found")\n    }\n    \n    return nil\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Serve static files from the "build" directory using Fiber\'s built-in middleware.\napp.Use("/", filesystem.New(filesystem.Config{\n    Root:       http.FS(f),         // Specify the root directory for static files.\n    PathPrefix: "build",            // Define the path prefix where static files are served.\n}))\n\n// For all other routes (wildcard "*"), serve the "index.html" file from the "build" directory.\napp.Use("*", func(ctx *fiber.Ctx) error {\n    return filesystem.SendFile(ctx, http.FS(f), "build/index.html")\n})\n')))}d.isMDXComponent=!0}}]);