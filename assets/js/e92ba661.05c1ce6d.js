"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[73045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(m,".").concat(u)]||c[u]||g[u]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",sidebar_position:1},l=void 0,o={unversionedId:"README",id:"version-jet_v2.x.x/README",title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",source:"@site/template_versioned_docs/version-jet_v2.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/template/jet_v2.x.x/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/README.md",tags:[],version:"jet_v2.x.x",lastUpdatedAt:1705921083,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Ace",permalink:"/template/jet_v2.x.x/ace/"}},m={},s=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3},{value:"More Examples",id:"more-examples",level:3},{value:"embedded Systems",id:"embedded-systems",level:3},{value:"pkger",id:"pkger",level:4},{value:"packr",id:"packr",level:4},{value:"go.rice",id:"gorice",level:4},{value:"fileb0x",id:"fileb0x",level:4},{value:"Benchmarks",id:"benchmarks",level:3},{value:"Simple",id:"simple",level:4},{value:"Extended",id:"extended",level:4}],p={toc:s},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,r.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo.svg#gh-light-mode-only"}),(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://pkg.go.dev/github.com/gofiber/template?tab=doc"},(0,r.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})),(0,r.kt)("a",{href:"https://goreportcard.com/report/github.com/gofiber/template"},(0,r.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})),(0,r.kt)("a",{href:"https://gofiber.io/discord"},(0,r.kt)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"}))),(0,r.kt)("p",null,"This package provides universal methods to use multiple template engines with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber web framework")," using the new ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/gofiber/fiber#Views"},"Views")," interface that is available from ",(0,r.kt)("inlineCode",{parentName:"p"},"> v1.11.1"),". Special thanks to @bdtomlin & @arsmn for helping!"),(0,r.kt)("p",null,"9 template engines are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/ace/"},"ace")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Ace%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-ace.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/amber/"},"amber")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Amber%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-amber.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/django/"},"django")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Django%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-django.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/handlebars/"},"handlebars")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Handlebars%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-handlebars.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/html/"},"html")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Html%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-html.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/jet/"},"jet")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Jet%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-jet.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/mustache/"},"mustache")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Mustache%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-mustache.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/pug/"},"pug")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Pug%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-pug.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/slim/"},"slim")," ",(0,r.kt)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Slim%22"}," ",(0,r.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-slim.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})))),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Go version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.17")," or higher is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/template/any_template_engine/vX\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n\n    // To use a specific template engine, import as shown below:\n    // "github.com/gofiber/template/pug"\n    // "github.com/gofiber/template/mustache"\n    // etc..\n\n    // In this example we use the html template engine\n    "github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n    // Create a new engine by passing the template folder\n    // and template extension using <engine>.New(dir, ext string)\n    engine := html.New("./views", ".html")\n\n    // We also support the http.FileSystem interface\n    // See examples below to load templates from embedded files\n    engine := html.NewFileSystem(http.Dir("./views"), ".html")\n\n    // Reload the templates on each render, good for development\n    engine.Reload(true) // Optional. Default: false\n\n    // Debug will print each template that is parsed, good for debugging\n    engine.Debug(true) // Optional. Default: false\n\n    // Layout defines the variable name that is used to yield templates within layouts\n    engine.Layout("embed") // Optional. Default: "embed"\n\n    // Delims sets the action delimiters to the specified strings\n    engine.Delims("{{", "}}") // Optional. Default: engine delimiters\n\n    // AddFunc adds a function to the template\'s global function map.\n    engine.AddFunc("greet", func(name string) string {\n        return "Hello, " + name + "!"\n    })\n\n    // After you created your engine, you can pass it to Fiber\'s Views Engine\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // To render a template, you can call the ctx.Render function\n    // Render(tmpl string, values interface{}, layout ...string)\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    // Render with layout example\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,r.kt)("h3",{id:"more-examples"},"More Examples"),(0,r.kt)("p",null,"To view more specific examples, you could visit each engine folder to learn more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/ace/"},"ace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/amber/"},"amber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/django/"},"django")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/handlebars/"},"handlebars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/html/"},"html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/jet/"},"jet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/mustache/"},"mustache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/pug/"},"pug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/template/jet_v2.x.x/slim/"},"slim"))),(0,r.kt)("h3",{id:"embedded-systems"},"embedded Systems"),(0,r.kt)("p",null,"We support the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.FileSystem")," interface, so you can use different libraries to load the templates from embedded binaries."),(0,r.kt)("h4",{id:"pkger"},"pkger"),(0,r.kt)("p",null,"Read documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"https://github.com/markbates/pkger")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n\n    "github.com/markbates/pkger"\n)\n\nfunc main() {\n    engine := html.NewFileSystem(pkger.Dir("/views"), ".html")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // run pkger && go build\n}\n')),(0,r.kt)("h4",{id:"packr"},"packr"),(0,r.kt)("p",null,"Read documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/packr"},"https://github.com/gobuffalo/packr")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n\n    "github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n    engine := html.NewFileSystem(packr.New("Templates", "/views"), ".html")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // run packr && go build\n}\n')),(0,r.kt)("h4",{id:"gorice"},"go.rice"),(0,r.kt)("p",null,"Read documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GeertJohan/go.rice"},"https://github.com/GeertJohan/go.rice")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n\n    "github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n    engine := html.NewFileSystem(rice.MustFindBox("views").HTTPBox(), ".html")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // run rice embed-go && go build\n}\n\n')),(0,r.kt)("h4",{id:"fileb0x"},"fileb0x"),(0,r.kt)("p",null,"Read documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UnnoTed/fileb0x"},"https://github.com/UnnoTed/fileb0x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n    // your generated package\n    "github.com/<user>/<repo>/static"\n)\n\nfunc main() {\n    engine := html.NewFileSystem(static.HTTP, ".html")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // Read the documentation on how to use fileb0x\n}\n')),(0,r.kt)("h3",{id:"benchmarks"},"Benchmarks"),(0,r.kt)("h4",{id:"simple"},"Simple"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Simple-TimeperOperation.png",alt:null})),(0,r.kt)("h4",{id:"extended"},"Extended"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Extended-TimeperOperation.png",alt:null})),(0,r.kt)("p",null,"Benchmarks were ran on Apple Macbook M1. Each engine was benchmarked 20 times and the results averaged into a single xlsx file. Mustache was excluded from the extended benchmark"))}g.isMDXComponent=!0}}]);