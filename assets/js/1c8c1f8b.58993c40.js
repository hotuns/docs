"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[14465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"mustache",title:"Mustache"},o=void 0,l={unversionedId:"mustache/mustache",id:"version-pug_v2.x.x/mustache/mustache",title:"Mustache",description:"Release",source:"@site/template_versioned_docs/version-pug_v2.x.x/mustache/README.md",sourceDirName:"mustache",slug:"/mustache/",permalink:"/template/pug_v2.x.x/mustache/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/mustache/README.md",tags:[],version:"pug_v2.x.x",lastUpdatedAt:1707375532,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"mustache",title:"Mustache"},sidebar:"tutorialSidebar",previous:{title:"Jet",permalink:"/template/pug_v2.x.x/jet/"},next:{title:"Pug",permalink:"/template/pug_v2.x.x/pug/"}},s={},p=[{value:"Basic Example",id:"basic-example",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=mustache*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"Mustache is a template engine created by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbroglie/mustache"},"hoisie/cbroglie"),", to see the original syntax documentation please ",(0,a.kt)("a",{parentName:"p",href:"https://mustache.github.io/mustache.5.html"},"click here")),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/index.mustache"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"{{> views/partials/header }}\n\n<h1>{{Title}}</h1>\n\n{{> views/partials/footer }}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/header.mustache"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Header</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/partials/footer.mustache"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Footer</h2>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"./views/layouts/main.mustache"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{{embed}}}\n</body>\n\n</html>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    \n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/mustache/v2"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := mustache.New("./views", ".mustache")\n\n  // Or from an embedded system\n  //   Note that with an embedded system the partials included from template files must be\n  //   specified relative to the filesystem\'s root, not the current working directory\n  // engine := mustache.NewFileSystem(http.Dir("./views", ".mustache"), ".mustache")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')))}u.isMDXComponent=!0}}]);