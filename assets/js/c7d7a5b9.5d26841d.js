"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[28819],{87882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={id:"pug",title:"Pug"},a=void 0,l={id:"pug/pug",title:"Pug",description:"Release",source:"@site/template_versioned_docs/version-jet_v2.x.x/pug/README.md",sourceDirName:"pug",slug:"/pug/",permalink:"/template/jet_v2.x.x/pug/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/pug/README.md",tags:[],version:"jet_v2.x.x",lastUpdatedAt:1713704843e3,frontMatter:{id:"pug",title:"Pug"},sidebar:"tutorialSidebar",previous:{title:"Mustache",permalink:"/template/jet_v2.x.x/mustache/"},next:{title:"Slim",permalink:"/template/jet_v2.x.x/slim/"}},o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=pug*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Pug is a template engine create by ",(0,i.jsx)(t.a,{href:"https://github.com/Joker/jade",children:"joker"}),", to see the original syntax documentation please ",(0,i.jsx)(t.a,{href:"https://pugjs.org/language/tags.html",children:"click here"})]}),"\n",(0,i.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/index.pug"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"include partials/header.pug\n\nh1 #{.Title}\n\ninclude partials/footer.pug\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/header.pug"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"h2 Header\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/partials/footer.pug"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"h2 Footer\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"./views/layouts/main.pug"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n    include ../partials/meta.pug\n  body\n    | {{embed}}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/pug/v2"\n\n\t// "net/http" // embedded system\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := pug.New("./views", ".pug")\n\n\t// Or from an embedded system\n\t// See github.com/gofiber/embed for examples\n\t// engine := pug.NewFileSystem(http.Dir("./views"), ".pug")\n\n\t// Pass the engine to the views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);