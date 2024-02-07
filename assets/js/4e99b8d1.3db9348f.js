"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[66187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,g=s["".concat(p,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},f),{},{components:n})):r.createElement(g,o({ref:t},f))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"opafiber"},o="Opafiber",l={unversionedId:"opafiber/opafiber",id:"version-fiberi18n_v2.x.x/opafiber/opafiber",title:"Opafiber",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v2.x.x/opafiber/README.md",sourceDirName:"opafiber",slug:"/opafiber/",permalink:"/contrib/fiberi18n_v2.x.x/opafiber/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/opafiber/README.md",tags:[],version:"fiberi18n_v2.x.x",lastUpdatedAt:1707310911,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"opafiber"},sidebar:"tutorialSidebar",previous:{title:"JWT",permalink:"/contrib/fiberi18n_v2.x.x/jwt/"},next:{title:"Otelfiber",permalink:"/contrib/fiberi18n_v2.x.x/otelfiber/"}},p={},d=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Types",id:"types",level:2},{value:"Usage",id:"usage",level:2}],f={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opafiber"},"Opafiber"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=opafiber*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/opa"},"Open Policy Agent")," support for Fiber."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/opafiber/v2\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"opafiber.New(config opafiber.Config) fiber.Handler\n\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RegoQuery"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required - Rego query"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RegoPolicy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"io.Reader")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required - Rego policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IncludeQueryString"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Include query string as input to rego policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DeniedStatusCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Http status code to return when policy denies request"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"400"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DeniedResponseMessage"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Http response body text to return when policy denies request"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IncludeHeaders"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Include headers as input to rego policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"InputCreationMethod"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"InputCreationFunc")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Use your own function to provide input for OPA"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func defaultInput(ctx *fiber.Ctx) (map[string]interface{}, error)"))))),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type InputCreationFunc func(c *fiber.Ctx) (map[string]interface{}, error)\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"OPA Fiber middleware sends the following example data to the policy engine as input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "GET",\n  "path": "/somePath",\n  "query": {\n    "name": ["John Doe"]\n  },\n  "headers": {\n    "Accept": "application/json",\n    "Content-Type": "application/json"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/opafiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n    module := `\npackage example.authz\n\ndefault allow := false\n\nallow {\n    input.method == "GET"\n}\n`\n\n    cfg := opafiber.Config{\n        RegoQuery:             "data.example.authz.allow",\n        RegoPolicy:            bytes.NewBufferString(module),\n        IncludeQueryString:    true,\n        DeniedStatusCode:      fiber.StatusForbidden,\n        DeniedResponseMessage: "status forbidden",\n        IncludeHeaders:        []string{"Authorization"},\n        InputCreationMethod:   func (ctx *fiber.Ctx) (map[string]interface{}, error) {\n            return map[string]interface{}{\n                "method": ctx.Method(),\n                "path": ctx.Path(),\n            }, nil\n        },\n    }\n    app.Use(opafiber.New(cfg))\n\n    app.Get("/", func(ctx *fiber.Ctx) error {\n        return ctx.SendStatus(200)\n    })\n\n    app.Listen(":8080")\n}\n')))}c.isMDXComponent=!0}}]);