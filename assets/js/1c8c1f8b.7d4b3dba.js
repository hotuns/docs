"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[44115],{8865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),i=n(28453);const r={id:"mustache",title:"Mustache"},a=void 0,c={id:"mustache/mustache",title:"Mustache",description:"Release",source:"@site/template_versioned_docs/version-pug_v2.x.x/mustache/README.md",sourceDirName:"mustache",slug:"/mustache/",permalink:"/template/pug_v2.x.x/mustache/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/mustache/README.md",tags:[],version:"pug_v2.x.x",lastUpdatedAt:1713704843e3,frontMatter:{id:"mustache",title:"Mustache"},sidebar:"tutorialSidebar",previous:{title:"Jet",permalink:"/template/pug_v2.x.x/jet/"},next:{title:"Pug",permalink:"/template/pug_v2.x.x/pug/"}},l={},o=[{value:"Basic Example",id:"basic-example",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=mustache*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,s.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,s.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,s.jsxs)(t.p,{children:["Mustache is a template engine created by ",(0,s.jsx)(t.a,{href:"https://github.com/cbroglie/mustache",children:"hoisie/cbroglie"}),", to see the original syntax documentation please ",(0,s.jsx)(t.a,{href:"https://mustache.github.io/mustache.5.html",children:"click here"})]}),"\n",(0,s.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"./views/index.mustache"})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"{{> views/partials/header }}\n\n<h1>{{Title}}</h1>\n\n{{> views/partials/footer }}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"./views/partials/header.mustache"})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"./views/partials/footer.mustache"})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"./views/layouts/main.mustache"})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{{embed}}}\n</body>\n\n</html>\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/mustache/v2"\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := mustache.New("./views", ".mustache")\n\n  // Or from an embedded system\n  //   Note that with an embedded system the partials included from template files must be\n  //   specified relative to the filesystem\'s root, not the current working directory\n  // engine := mustache.NewFileSystem(http.Dir("./views", ".mustache"), ".mustache")\n\n\t// Pass the engine to the Views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);