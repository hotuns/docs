"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[59027],{92780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={id:"jet",title:"Jet"},a=void 0,l={id:"jet/jet",title:"Jet",description:"Release",source:"@site/template_versioned_docs/version-django_v3.x.x/jet/README.md",sourceDirName:"jet",slug:"/jet/",permalink:"/template/django_v3.x.x/jet/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/jet/README.md",tags:[],version:"django_v3.x.x",lastUpdatedAt:1713634533e3,frontMatter:{id:"jet",title:"Jet"},sidebar:"tutorialSidebar",previous:{title:"Golang Templates Cheatsheet",permalink:"/template/django_v3.x.x/html/TEMPLATES_CHEATSHEET"},next:{title:"Mustache",permalink:"/template/django_v3.x.x/mustache/"}},o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=jet*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Jet is a template engine create by ",(0,i.jsx)(t.a,{href:"https://github.com/CloudyKit/jet",children:"cloudykit"}),", to see the original syntax documentation please ",(0,i.jsx)(t.a,{href:"https://github.com/CloudyKit/jet/wiki/3.-Jet-template-syntax",children:"click here"})]}),"\n",(0,i.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/index.jet"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'{{include "partials/header"}}\n\n<h1>{{ Title }}</h1>\n\n{{include "partials/footer"}}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/header.jet"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/footer.jet"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/layouts/main.jet"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Title</title>\n</head>\n\n<body>\n  {{ embed() }}\n</body>\n\n</html>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/jet/v2"\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := jet.New("./views", ".jet")\n\n\t// Or from an embedded system\n\t// See github.com/gofiber/embed for examples\n\t// engine := jet.NewFileSystem(http.Dir("./views", ".jet"))\n\n\t// Pass the engine to the views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);