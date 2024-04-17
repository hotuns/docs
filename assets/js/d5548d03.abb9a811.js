"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),f=p(n),s=r,u=f["".concat(d,".").concat(s)]||f[s]||c[s]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"idempotency"},o="Idempotency",l={unversionedId:"api/middleware/idempotency",id:"version-v3.x/api/middleware/idempotency",title:"Idempotency",description:"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.",source:"@site/versioned_docs/version-v3.x/api/middleware/idempotency.md",sourceDirName:"api/middleware",slug:"/api/middleware/idempotency",permalink:"/api/middleware/idempotency",draft:!1,tags:[],version:"v3.x",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"idempotency"},sidebar:"tutorialSidebar",previous:{title:"Helmet",permalink:"/api/middleware/helmet"},next:{title:"Keyauth",permalink:"/api/middleware/keyauth"}},d={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config-1",level:2}],m={toc:p},f="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"idempotency"},"Idempotency"),(0,r.kt)("p",null,"Idempotency middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02"},"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02")," for a better understanding."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\nfunc IsFromCache(c fiber.Ctx) bool\nfunc WasPutToCache(c fiber.Ctx) bool\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/idempotency"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(idempotency.New())\n")),(0,r.kt)("h3",{id:"custom-config"},"Custom Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(idempotency.New(idempotency.Config{\n    Lifetime: 42 * time.Minute,\n    // ...\n}))\n")),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function for safe methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Lifetime"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lifetime is the maximum lifetime of an idempotency key."),(0,r.kt)("td",{parentName:"tr",align:"left"},"30 * time.Minute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyHeader is the name of the header that contains the idempotency key."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"X-Idempotency-Key"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyHeaderValidate"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(string) error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyHeaderValidate defines a function to validate the syntax of the idempotency header."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function for UUID validation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeepResponseHeaders"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeepResponseHeaders is a list of headers that should be kept from the original response."),(0,r.kt)("td",{parentName:"tr",align:"left"},"nil (keep all headers)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Lock"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Locker")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lock locks an idempotency key."),(0,r.kt)("td",{parentName:"tr",align:"left"},"An in-memory locker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage stores response data by idempotency key."),(0,r.kt)("td",{parentName:"tr",align:"left"},"An in-memory storage")))),(0,r.kt)("h2",{id:"default-config-1"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next: func(c fiber.Ctx) bool {\n        // Skip middleware if the request was done using a safe HTTP method\n        return fiber.IsMethodSafe(c.Method())\n    },\n\n    Lifetime: 30 * time.Minute,\n\n    KeyHeader: "X-Idempotency-Key",\n    KeyHeaderValidate: func(k string) error {\n        if l, wl := len(k), 36; l != wl { // UUID length is 36 chars\n            return fmt.Errorf("%w: invalid length: %d != %d", ErrInvalidIdempotencyKey, l, wl)\n        }\n\n        return nil\n    },\n\n    KeepResponseHeaders: nil,\n\n    Lock: nil, // Set in configDefault so we don\'t allocate data here.\n\n    Storage: nil, // Set in configDefault so we don\'t allocate data here.\n}\n')))}c.isMDXComponent=!0}}]);