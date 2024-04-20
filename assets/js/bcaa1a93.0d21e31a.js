"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52694],{10087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(74848),i=n(28453);const s={id:"amber",title:"Amber"},a=void 0,l={id:"amber/amber",title:"Amber",description:"Release",source:"@site/docs/template/amber/README.md",sourceDirName:"amber",slug:"/amber/",permalink:"/template/next/amber/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/amber/README.md",tags:[],version:"current",lastUpdatedAt:1713634533e3,frontMatter:{id:"amber",title:"Amber"},sidebar:"tutorialSidebar",previous:{title:"Ace",permalink:"/template/next/ace/"},next:{title:"Django",permalink:"/template/next/django/"}},o={},c=[{value:"Basic Example",id:"basic-example",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=amber*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:["Amber is a template engine create by ",(0,r.jsx)(t.a,{href:"https://github.com/eknkc/amber",children:"eknkc"}),", to see the original syntax documentation please ",(0,r.jsx)(t.a,{href:"https://github.com/eknkc/amber#tags",children:"click here"})]}),"\n",(0,r.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/index.amber"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"import ./views/partials/header\n\nh1 #{Title}\n\nimport ./views/partials/footer\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/partials/header.amber"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"h1 Header\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/partials/footer.amber"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"h1 Footer\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"./views/layouts/main.amber"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"doctype html\nhtml\n  head\n    title Main\n  body\n    #{embed()}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\t\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/amber/v2"\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := amber.New("./views", ".amber")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".amber"))\n\n\t// Pass the engine to the Views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);