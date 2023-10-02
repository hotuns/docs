"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,u=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={id:"django",title:"Django"},o=void 0,l={unversionedId:"django/django",id:"version-slim_v2.x.x/django/django",title:"Django",description:"Release",source:"@site/template_versioned_docs/version-slim_v2.x.x/django/README.md",sourceDirName:"django",slug:"/django/",permalink:"/template/django/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/django/README.md",tags:[],version:"slim_v2.x.x",lastUpdatedAt:1696252895,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"django",title:"Django"},sidebar:"tutorialSidebar",previous:{title:"Amber",permalink:"/template/amber/"},next:{title:"Handlebars",permalink:"/template/handlebars/"}},s={},p=[{value:"Basic Example",id:"basic-example",level:3},{value:"Using embedded file system (1.16+ only)",id:"using-embedded-file-system-116-only",level:3},{value:"Register and use custom functions",id:"register-and-use-custom-functions",level:3}],m={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=django*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,r.kt)("p",null,"Django is a template engine create by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flosch/pongo2"},"flosch"),", to see the original syntax documentation please ",(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/dev/topics/templates/"},"click here")),(0,r.kt)("h3",{id:"basic-example"},"Basic Example"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"./views/index.django"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{% include "partials/header.django" %}\n\n<h1>{{ Title }}</h1>\n\n{% include "partials/footer.django" %}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"./views/partials/header.django"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Header</h2>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"./views/partials/footer.django"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Footer</h2>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"./views/layouts/main.django"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{embed}}\n</body>\n\n</html>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/django/v3"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := django.New("./views", ".django")\n\n  // Or from an embedded system\n  // See github.com/gofiber/embed for examples\n  // engine := html.NewFileSystem(http.Dir("./views", ".django"))\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,r.kt)("h3",{id:"using-embedded-file-system-116-only"},"Using embedded file system (1.16+ only)"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"// go:embed")," directive, resolution of inherited templates using django's ",(0,r.kt)("inlineCode",{parentName:"p"},"{% extend '' %}")," keyword fails when instantiating the template engine with ",(0,r.kt)("inlineCode",{parentName:"p"},"django.NewFileSystem()"),". In that case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"django.NewPathForwardingFileSystem()")," function to instantiate the template engine. "),(0,r.kt)("p",null,"This function provides the proper configuration for resolving inherited templates."),(0,r.kt)("p",null,"Assume you have the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/blob/master/django/views/ancestor.django"},"views/ancenstor.django")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/blob/master/django/views/descendant.django"},"views/descendant.djando"))),(0,r.kt)("p",null,"then"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "embed"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/django/v3"\n)\n\n//go:embed views\nvar viewsAsssets embed.FS\n\nfunc main() {\n    // Create a new engine\n    engine := NewPathForwardingFileSystem(http.FS(viewsAsssets), "/views", ".django")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render descendant\n        return c.Render("descendant", fiber.Map{\n            "greeting": "World",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,r.kt)("h3",{id:"register-and-use-custom-functions"},"Register and use custom functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// My custom function\nfunc Nl2brHtml(value interface{}) string {\n    if str, ok := value.(string); ok {\n        return strings.Replace(str, "\\n", "<br />", -1)\n    }\n    return ""\n}\n\n// Create a new engine\nengine := django.New("./views", ".django")\n\n// register functions\nengine.AddFunc("nl2br", Nl2brHtml)\n\n// Pass the engine to the Views\napp := fiber.New(fiber.Config{Views: engine})\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"in the handler"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'c.Render("index", fiber.Map{\n    "Fiber": "Hello, World!\\n\\nGreetings from Fiber Team",\n})\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"./views/index.django"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\n{{ nl2br(Fiber) }}\n</body>\n</html>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\nHello, World!<br /><br />Greetings from Fiber Team\n</body>\n</html>\n')))}g.isMDXComponent=!0}}]);