"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[4856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,u=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(u,o(o({ref:t},f),{},{components:n})):a.createElement(u,o({ref:t},f))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"filesystem",title:"FileSystem"},o=void 0,l={unversionedId:"api/middleware/filesystem",id:"version-v2.x/api/middleware/filesystem",title:"FileSystem",description:"Filesystem middleware for Fiber that enables you to serve files from a directory.",source:"@site/versioned_docs/version-v2.x/api/middleware/filesystem.md",sourceDirName:"api/middleware",slug:"/api/middleware/filesystem",permalink:"/api/middleware/filesystem",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1684159899,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{id:"filesystem",title:"FileSystem"},sidebar:"tutorialSidebar",previous:{title:"Favicon",permalink:"/api/middleware/favicon"},next:{title:"Idempotency",permalink:"/api/middleware/idempotency"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"embed",id:"embed",level:2},{value:"pkger",id:"pkger",level:2},{value:"packr",id:"packr",level:2},{value:"go.rice",id:"gorice",level:2},{value:"fileb0x",id:"fileb0x",level:2},{value:"statik",id:"statik",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],f={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filesystem middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that enables you to serve files from a directory."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},":params")," & ",(0,i.kt)("inlineCode",{parentName:"strong"},":optionals?")," within the prefix path are not supported!")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"To handle paths with spaces (or other url encoded values) make sure to set ",(0,i.kt)("inlineCode",{parentName:"strong"},"fiber.Config{ UnescapePath: true }")))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/middleware/filesystem#signatures"},"Signatures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/middleware/filesystem#examples"},"Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/middleware/filesystem#config"},"Config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/middleware/filesystem#default-config"},"Default Config"))),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(filesystem.New(filesystem.Config{\n    Root: http.Dir("./assets"),\n}))\n\n// Or extend your config for customization\napp.Use(filesystem.New(filesystem.Config{\n    Root:         http.Dir("./assets"),\n    Browse:       true,\n    Index:        "index.html",\n    NotFoundFile: "404.html",\n    MaxAge:       3600,\n}))\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If your environment (Go 1.16+) supports it, we recommend using Go Embed instead of the other solutions listed as this one is native to Go and the easiest to use.")),(0,i.kt)("h2",{id:"embed"},"embed"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/embed/"},"Embed")," is the native method to embed files in a Golang excecutable. Introduced in Go 1.16."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "embed"\n    "io/fs"\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n\n// Embed a single file\n//go:embed index.html\nvar f embed.FS\n\n// Embed a directory\n//go:embed static/*\nvar embedDirStatic embed.FS\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/", filesystem.New(filesystem.Config{\n        Root: http.FS(f),\n    }))\n\n    // Access file "image.png" under `static/` directory via URL: `http://<server>/static/image.png`.\n    // Without `PathPrefix`, you have to access it via URL:\n    // `http://<server>/static/static/image.png`.\n    app.Use("/static", filesystem.New(filesystem.Config{\n        Root: http.FS(embedDirStatic),\n        PathPrefix: "static",\n        Browse: true,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"pkger"},"pkger"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"https://github.com/markbates/pkger")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/markbates/pkger"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: pkger.Dir("/assets"),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"packr"},"packr"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/packr"},"https://github.com/gobuffalo/packr")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: packr.New("Assets Box", "/assets"),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"gorice"},"go.rice"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GeertJohan/go.rice"},"https://github.com/GeertJohan/go.rice")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: rice.MustFindBox("assets").HTTPBox(),\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"fileb0x"},"fileb0x"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/UnnoTed/fileb0x"},"https://github.com/UnnoTed/fileb0x")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "<Your go module>/myEmbeddedFiles"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: myEmbeddedFiles.HTTP,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"statik"},"statik"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rakyll/statik"},"https://github.com/rakyll/statik")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    // Use blank to invoke init function and register data to statik\n    _ "<Your go module>/statik" \n    "github.com/rakyll/statik/fs"\n)\n\nfunc main() {\n    statikFS, err := fs.New()\n    if err != nil {\n        panic(err)\n    }\n\n    app := fiber.New()\n\n    app.Use("/", filesystem.New(filesystem.Config{\n        Root: statikFS,\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Root is a FileSystem that provides access\n    // to a collection of files and directories.\n    //\n    // Required. Default: nil\n    Root http.FileSystem `json:"-"`\n\n    // PathPrefix defines a prefix to be added to a filepath when\n    // reading a file from the FileSystem.\n    //\n    // Use when using Go 1.16 embed.FS\n    //\n    // Optional. Default ""\n    PathPrefix string `json:"path_prefix"`\n\n    // Enable directory browsing.\n    //\n    // Optional. Default: false\n    Browse bool `json:"browse"`\n\n    // Index file for serving a directory.\n    //\n    // Optional. Default: "index.html"\n    Index string `json:"index"`\n\n    // The value for the Cache-Control HTTP-header\n    // that is set on the file response. MaxAge is defined in seconds.\n    //\n    // Optional. Default value 0.\n    MaxAge    int `json:"max_age"`\n\n    // File to return if path is not found. Useful for SPA\'s.\n    //\n    // Optional. Default: ""\n    NotFoundFile string `json:"not_found_file"`\n    \n    // The value for the Content-Type HTTP-header\n    // that is set on the file response\n    //\n    // Optional. Default: ""\n    ContentTypeCharset string `json:"content_type_charset"`\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:   nil,\n    Root:   nil,\n    PathPrefix: "",\n    Browse: false,\n    Index:  "/index.html",\n    MaxAge: 0,\n    ContentTypeCharset: "",\n}\n')))}d.isMDXComponent=!0}}]);