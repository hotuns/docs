"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[88071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"jet",title:"Jet"},o=void 0,l={unversionedId:"jet/jet",id:"version-django_v3.x.x/jet/jet",title:"Jet",description:"Release",source:"@site/template_versioned_docs/version-django_v3.x.x/jet/README.md",sourceDirName:"jet",slug:"/jet/",permalink:"/template/django_v3.x.x/jet/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/jet/README.md",tags:[],version:"django_v3.x.x",lastUpdatedAt:1704302079,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"jet",title:"Jet"},sidebar:"tutorialSidebar",previous:{title:"Golang Templates Cheatsheet",permalink:"/template/django_v3.x.x/html/TEMPLATES_CHEATSHEET"},next:{title:"Mustache",permalink:"/template/django_v3.x.x/mustache/"}},p={},s=[{value:"Basic Example",id:"basic-example",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=jet*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"Jet is a template engine create by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CloudyKit/jet"},"cloudykit"),", to see the original syntax documentation please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CloudyKit/jet/wiki/3.-Jet-template-syntax"},"click here")),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.jet"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{{include "partials/header"}}\n\n<h1>{{ Title }}</h1>\n\n{{include "partials/footer"}}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/header.jet"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Header</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/footer.jet"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Footer</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/layouts/main.jet"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Title</title>\n</head>\n\n<body>\n  {{ embed() }}\n</body>\n\n</html>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    \n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/jet/v2"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := jet.New("./views", ".jet")\n\n    // Or from an embedded system\n    // See github.com/gofiber/embed for examples\n    // engine := jet.NewFileSystem(http.Dir("./views", ".jet"))\n\n    // Pass the engine to the views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')))}u.isMDXComponent=!0}}]);