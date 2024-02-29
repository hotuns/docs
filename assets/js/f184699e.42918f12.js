"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[60463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,u=c["".concat(o,".").concat(h)]||c[h]||d[h]||l;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={id:"html",title:"HTML"},i=void 0,p={unversionedId:"html/html",id:"version-amber_v2.x.x/html/html",title:"HTML",description:"Release",source:"@site/template_versioned_docs/version-amber_v2.x.x/html/README.md",sourceDirName:"html",slug:"/html/",permalink:"/template/amber_v2.x.x/html/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/html/README.md",tags:[],version:"amber_v2.x.x",lastUpdatedAt:1709212463,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{id:"html",title:"HTML"},sidebar:"tutorialSidebar",previous:{title:"Handlebars",permalink:"/template/amber_v2.x.x/handlebars/"},next:{title:"Golang Templates Cheatsheet",permalink:"/template/amber_v2.x.x/html/TEMPLATES_CHEATSHEET"}},o={},m=[{value:"Basic Example",id:"basic-example",level:3},{value:"Example with embed.FS",id:"example-with-embedfs",level:3},{value:"Example with innerHTML",id:"example-with-innerhtml",level:3}],s={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=html*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"HTML is the official Go template engine ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/html/template/"},"html/template"),", to see the original syntax documentation please ",(0,a.kt)("a",{parentName:"p",href:"/template/amber_v2.x.x/html/TEMPLATES_CHEATSHEET"},"click here")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Info:")),(0,a.kt)("p",null,"All templates within the specified view directory are analyzed and compiled at the beginning to increase the performance when using them.\nThus it should be noted that no ",(0,a.kt)("inlineCode",{parentName:"p"},"definition")," with the same name should exist, otherwise they will overwrite each other.\nFor templating the ",(0,a.kt)("inlineCode",{parentName:"p"},"{{embed}}")," tag should be used"),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{{template "partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "partials/footer" .}}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/header.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Header</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/footer.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Footer</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/layouts/main.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Main</title>\n  </head>\n\n  <body>\n    {{embed}}\n  </body>\n</html>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := html.New("./views", ".html")\n\n    // Or from an embedded system\n    // See github.com/gofiber/embed for examples\n    // engine := html.NewFileSystem(http.Dir("./views", ".html"))\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    app.Get("/layouts-nested", func(c *fiber.Ctx) error {\n        // Render index within layouts/nested/main within layouts/nested/base\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/nested/main", "layouts/nested/base")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,a.kt)("h3",{id:"example-with-embedfs"},"Example with embed.FS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "net/http"\n    "embed"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index - start with views directory\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"and change the starting point to the views directory"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{{template "views/partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "views/partials/footer" .}}\n')),(0,a.kt)("h3",{id:"example-with-innerhtml"},"Example with innerHTML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "embed"\n    "html/template"\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n    engine.AddFunc(\n        // add unescape function\n        "unescape", func(s string) template.HTML {\n            return template.HTML(s)\n        },\n    )\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{Views: engine})\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, <b>World</b>!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"and change the starting point to the views directory"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<p>{{ unescape .Title}}</p>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"html output")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<p>Hello, <b>World</b>!</p>\n")))}d.isMDXComponent=!0}}]);