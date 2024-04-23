"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[75547],{13311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),s=t(28453);const i={id:"handlebars",title:"Handlebars"},a=void 0,l={id:"handlebars/handlebars",title:"Handlebars",description:"Release",source:"@site/template_versioned_docs/version-pug_v2.x.x/handlebars/README.md",sourceDirName:"handlebars",slug:"/handlebars/",permalink:"/template/pug_v2.x.x/handlebars/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/handlebars/README.md",tags:[],version:"pug_v2.x.x",lastUpdatedAt:171385321e4,frontMatter:{id:"handlebars",title:"Handlebars"},sidebar:"tutorialSidebar",previous:{title:"Django",permalink:"/template/pug_v2.x.x/django/"},next:{title:"HTML",permalink:"/template/pug_v2.x.x/html/"}},o={},d=[{value:"Basic Example",id:"basic-example",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=handlebars*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(n.p,{children:["Handlebars is a template engine create by ",(0,r.jsx)(n.a,{href:"https://github.com/aymerick/raymond",children:"aymerick"}),", to see the original syntax documentation please ",(0,r.jsx)(n.a,{href:"https://github.com/aymerick/raymond#table-of-contents",children:"click here"})]}),"\n",(0,r.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/index.hbs"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"{{> 'partials/header' }}\n\n<h1>{{Title}}</h1>\n\n{{> 'partials/footer' }}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/partials/header.hbs"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/partials/footer.hbs"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"./views/layouts/main.hbs"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{embed}}\n</body>\n\n</html>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/handlebars/v2"\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := handlebars.New("./views", ".hbs")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".hbs"))\n\n\t// Pass the engine to the Views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);