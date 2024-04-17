"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[99497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2},o=void 0,l={unversionedId:"whats_new",id:"whats_new",title:"\ud83c\udd95 Whats New in v3",description:"Its a draft, not finished yet.",source:"@site/docs/core/whats_new.md",sourceDirName:".",slug:"/whats_new",permalink:"/next/whats_new",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/whats_new.md",tags:[],version:"current",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:2,frontMatter:{id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/next/"},next:{title:"API",permalink:"/next/category/api"}},s={},d=[{value:"\ud83c\udf89 Welcome to Fiber v3",id:"-welcome-to-fiber-v3",level:2},{value:"\ud83d\ude80 Highlights",id:"-highlights",level:2},{value:"Drop for old Go versions",id:"drop-for-old-go-versions",level:3},{value:"App changes",id:"app-changes",level:3},{value:"Context change",id:"context-change",level:3},{value:"interface",id:"interface",level:4},{value:"customizable",id:"customizable",level:4},{value:"Client package",id:"client-package",level:3},{value:"Binding",id:"binding",level:3},{value:"Generic functions",id:"generic-functions",level:3},{value:"Middleware refactoring",id:"middleware-refactoring",level:3},{value:"Session middleware",id:"session-middleware",level:4},{value:"Filesystem middleware",id:"filesystem-middleware",level:4},{value:"Migration guide",id:"migration-guide",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Its a draft, not finished yet.")),(0,i.kt)("h2",{id:"-welcome-to-fiber-v3"},"\ud83c\udf89 Welcome to Fiber v3"),(0,i.kt)("p",null,"We are excited to announce the release of Fiber v3! \ud83d\ude80"),(0,i.kt)("p",null,"Fiber v3 is a major release with a lot of new features, improvements, and breaking changes. We have worked hard to make Fiber even faster, more flexible, and easier to use."),(0,i.kt)("h2",{id:"-highlights"},"\ud83d\ude80 Highlights"),(0,i.kt)("h3",{id:"drop-for-old-go-versions"},"Drop for old Go versions"),(0,i.kt)("h3",{id:"app-changes"},"App changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Listen functions reduced")),(0,i.kt)("h3",{id:"context-change"},"Context change"),(0,i.kt)("h4",{id:"interface"},"interface"),(0,i.kt)("h4",{id:"customizable"},"customizable"),(0,i.kt)("h3",{id:"client-package"},"Client package"),(0,i.kt)("h3",{id:"binding"},"Binding"),(0,i.kt)("h3",{id:"generic-functions"},"Generic functions"),(0,i.kt)("h3",{id:"middleware-refactoring"},"Middleware refactoring"),(0,i.kt)("h4",{id:"session-middleware"},"Session middleware"),(0,i.kt)("h4",{id:"filesystem-middleware"},"Filesystem middleware"),(0,i.kt)("h2",{id:"migration-guide"},"Migration guide"),(0,i.kt)("p",null,"..."))}p.isMDXComponent=!0}}]);