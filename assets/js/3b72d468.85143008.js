"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[70025],{82623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=n(74848),l=n(28453);const s={title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",sidebar_position:1},r=void 0,a={id:"README",title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",source:"@site/template_versioned_docs/version-html_v2.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/template/html_v2.x.x/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/README.md",tags:[],version:"html_v2.x.x",lastUpdatedAt:1719410638e3,sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83e\uddec Template engine middlewares for Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Ace",permalink:"/template/html_v2.x.x/ace/"}},o={},h=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3},{value:"More Examples",id:"more-examples",level:3},{value:"embedded Systems",id:"embedded-systems",level:3},{value:"pkger",id:"pkger",level:4},{value:"packr",id:"packr",level:4},{value:"go.rice",id:"gorice",level:4},{value:"fileb0x",id:"fileb0x",level:4},{value:"Benchmarks",id:"benchmarks",level:3},{value:"Simple",id:"simple",level:4},{value:"Extended",id:"extended",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,i.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/template/master/.github/logo.svg#gh-light-mode-only"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://pkg.go.dev/github.com/gofiber/template?tab=doc",children:(0,i.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})}),(0,i.jsx)("a",{href:"https://goreportcard.com/report/github.com/gofiber/template",children:(0,i.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})}),(0,i.jsx)("a",{href:"https://gofiber.io/discord",children:(0,i.jsx)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"})})]}),"\n",(0,i.jsxs)(t.p,{children:["This package provides universal methods to use multiple template engines with the ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber web framework"})," using the new ",(0,i.jsx)(t.a,{href:"https://godoc.org/github.com/gofiber/fiber#Views",children:"Views"})," interface that is available from ",(0,i.jsx)(t.code,{children:"> v1.11.1"}),". Special thanks to @bdtomlin & @arsmn for helping!"]}),"\n",(0,i.jsx)(t.p,{children:"9 template engines are supported:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/ace/",children:"ace"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Ace%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-ace.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/amber/",children:"amber"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Amber%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-amber.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/django/",children:"django"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Django%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-django.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/handlebars/",children:"handlebars"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Handlebars%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-handlebars.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/html/",children:"html"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Html%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-html.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/jet/",children:"jet"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Jet%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-jet.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/mustache/",children:"mustache"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Mustache%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-mustache.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/pug/",children:"pug"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Pug%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-pug.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/slim/",children:"slim"})," ",(0,i.jsxs)("a",{href:"https://github.com/gofiber/template/actions?query=workflow%3A%22Tests+Slim%22",children:[" ",(0,i.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/template/test-slim.yml?branch=master&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})]})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Go version ",(0,i.jsx)(t.code,{children:"1.17"})," or higher is required."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/template/any_template_engine/vX\n"})}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\n\t// To use a specific template engine, import as shown below:\n\t// "github.com/gofiber/template/pug"\n\t// "github.com/gofiber/template/mustache"\n\t// etc..\n\n\t// In this example we use the html template engine\n\t"github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n\t// Create a new engine by passing the template folder\n\t// and template extension using <engine>.New(dir, ext string)\n\tengine := html.New("./views", ".html")\n\n  \t// We also support the http.FileSystem interface\n\t// See examples below to load templates from embedded files\n\tengine := html.NewFileSystem(http.Dir("./views"), ".html")\n\n\t// Reload the templates on each render, good for development\n\tengine.Reload(true) // Optional. Default: false\n\n\t// Debug will print each template that is parsed, good for debugging\n\tengine.Debug(true) // Optional. Default: false\n\n\t// Layout defines the variable name that is used to yield templates within layouts\n\tengine.Layout("embed") // Optional. Default: "embed"\n\n\t// Delims sets the action delimiters to the specified strings\n\tengine.Delims("{{", "}}") // Optional. Default: engine delimiters\n\n\t// AddFunc adds a function to the template\'s global function map.\n\tengine.AddFunc("greet", func(name string) string {\n\t\treturn "Hello, " + name + "!"\n\t})\n\n\t// After you created your engine, you can pass it to Fiber\'s Views Engine\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\t// To render a template, you can call the ctx.Render function\n\t// Render(tmpl string, values interface{}, layout ...string)\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\t// Render with layout example\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"more-examples",children:"More Examples"}),"\n",(0,i.jsx)(t.p,{children:"To view more specific examples, you could visit each engine folder to learn more"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/ace/",children:"ace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/amber/",children:"amber"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/django/",children:"django"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/handlebars/",children:"handlebars"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/html/",children:"html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/jet/",children:"jet"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/mustache/",children:"mustache"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/pug/",children:"pug"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/template/html_v2.x.x/slim/",children:"slim"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"embedded-systems",children:"embedded Systems"}),"\n",(0,i.jsxs)(t.p,{children:["We support the ",(0,i.jsx)(t.code,{children:"http.FileSystem"})," interface, so you can use different libraries to load the templates from embedded binaries."]}),"\n",(0,i.jsx)(t.h4,{id:"pkger",children:"pkger"}),"\n",(0,i.jsxs)(t.p,{children:["Read documentation: ",(0,i.jsx)(t.a,{href:"https://github.com/markbates/pkger",children:"https://github.com/markbates/pkger"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/html"\n\n\t"github.com/markbates/pkger"\n)\n\nfunc main() {\n\tengine := html.NewFileSystem(pkger.Dir("/views"), ".html")\n\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\t// run pkger && go build\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"packr",children:"packr"}),"\n",(0,i.jsxs)(t.p,{children:["Read documentation: ",(0,i.jsx)(t.a,{href:"https://github.com/gobuffalo/packr",children:"https://github.com/gobuffalo/packr"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/html"\n\n\t"github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n\tengine := html.NewFileSystem(packr.New("Templates", "/views"), ".html")\n\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\t// run packr && go build\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"gorice",children:"go.rice"}),"\n",(0,i.jsxs)(t.p,{children:["Read documentation: ",(0,i.jsx)(t.a,{href:"https://github.com/GeertJohan/go.rice",children:"https://github.com/GeertJohan/go.rice"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/html"\n\n\t"github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n\tengine := html.NewFileSystem(rice.MustFindBox("views").HTTPBox(), ".html")\n\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\t// run rice embed-go && go build\n}\n\n'})}),"\n",(0,i.jsx)(t.h4,{id:"fileb0x",children:"fileb0x"}),"\n",(0,i.jsxs)(t.p,{children:["Read documentation: ",(0,i.jsx)(t.a,{href:"https://github.com/UnnoTed/fileb0x",children:"https://github.com/UnnoTed/fileb0x"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/html"\n\t// your generated package\n\t"github.com/<user>/<repo>/static"\n)\n\nfunc main() {\n\tengine := html.NewFileSystem(static.HTTP, ".html")\n\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\t// Read the documentation on how to use fileb0x\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,i.jsx)(t.h4,{id:"simple",children:"Simple"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Simple-TimeperOperation.png",alt:""})}),"\n",(0,i.jsx)(t.h4,{id:"extended",children:"Extended"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/gofiber/template/master/.github/data/Extended-TimeperOperation.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"Benchmarks were ran on Apple Macbook M1. Each engine was benchmarked 20 times and the results averaged into a single xlsx file. Mustache was excluded from the extended benchmark"})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);