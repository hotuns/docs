"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[75889],{3905:(t,e,r)=>{r.d(e,{Zo:()=>b,kt:()=>g});var i=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=i.createContext({}),c=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},b=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},f="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,b=s(t,["components","mdxType","originalType","parentName"]),f=c(r),p=o,g=f["".concat(l,".").concat(p)]||f[p]||m[p]||a;return r?i.createElement(g,n(n({ref:e},b),{},{components:r})):i.createElement(g,n({ref:e},b))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,n=new Array(a);n[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[f]="string"==typeof t?t:o,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57088:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(87462),o=(r(67294),r(3905));const a={title:"\ud83d\udc4b Welcome",sidebar_position:1},n=void 0,s={unversionedId:"README",id:"version-casbin_v1.x.x/README",title:"\ud83d\udc4b Welcome",description:"Discord",source:"@site/contrib_versioned_docs/version-casbin_v1.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/contrib/casbin_v1.x.x/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/README.md",tags:[],version:"casbin_v1.x.x",lastUpdatedAt:1711204266,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Casbin",permalink:"/contrib/casbin_v1.x.x/casbin/"}},l={},c=[{value:"\ud83d\udcd1 Middleware Implementations",id:"-middleware-implementations",level:2}],b={toc:c},f="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(f,(0,i.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,o.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo.svg#gh-light-mode-only"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,o.kt)("p",null,"Repository for third party middlewares with dependencies.")),(0,o.kt)("h2",{id:"-middleware-implementations"},"\ud83d\udcd1 Middleware Implementations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/casbin/"},"Casbin")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Casbin%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-casbin.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fiberi18n/"},"Fiberi18n")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberi18n%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberi18n.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fibersentry/"},"Fibersentry")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibersentry%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibersentry.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fiberzap/"},"Fiberzap")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzap%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzap.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fiberzerolog/"},"Fiberzerolog")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzerolog%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzerolog.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/jwt/"},"JWT")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+jwt%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-jwt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fibernewrelic/"},"NewRelic")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibernewrelic%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibernewrelic.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/opafiber/"},"Open Policy Agent")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+opafiber%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-opafiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/otelfiber/"},"Otelfiber (OpenTelemetry)")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+otelfiber%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-otelfiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/paseto/"},"Paseto")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+paseto%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-paseto.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/swagger/"},"Swagger")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+swagger%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-swagger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/websocket/"},"Websocket")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+websocket%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-websocket.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contrib/casbin_v1.x.x/fgprof/"},"Fgprof")," ",(0,o.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Fgprof%22"}," ",(0,o.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fgprof.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}m.isMDXComponent=!0}}]);