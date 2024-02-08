"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"basicauth"},o="BasicAuth",l={unversionedId:"api/middleware/basicauth",id:"api/middleware/basicauth",title:"BasicAuth",description:"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.",source:"@site/docs/core/api/middleware/basicauth.md",sourceDirName:"api/middleware",slug:"/api/middleware/basicauth",permalink:"/next/api/middleware/basicauth",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/basicauth.md",tags:[],version:"current",lastUpdatedAt:1707376672,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"basicauth"},sidebar:"tutorialSidebar",previous:{title:"Adaptor",permalink:"/next/api/middleware/adaptor"},next:{title:"Cache",permalink:"/next/api/middleware/cache"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basicauth"},"BasicAuth"),(0,r.kt)("p",null,"Basic Authentication middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides an HTTP basic authentication. It calls the next handler for valid credentials and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"},"401 Unauthorized")," or a custom response for missing or invalid credentials."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\nfunc UsernameFromContext(c fiber.Ctx) string\nfunc PasswordFromContext(c fiber.Ctx) string\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/basicauth"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n}))\n\n// Or extend your config for customization\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n    Realm: "Forbidden",\n    Authorizer: func(user, pass string) bool {\n        if user == "john" && pass == "doe" {\n            return true\n        }\n        if user == "admin" && pass == "123456" {\n            return true\n        }\n        return false\n    },\n    Unauthorized: func(c fiber.Ctx) error {\n        return c.SendFile("./unauthorized.html")\n    },\n}))\n')),(0,r.kt)("p",null,"Getting the username and password"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c fiber.Ctx) error {\n    username := basicauth.UsernameFromContext(c)\n    password := basicauth.PasswordFromContext(c)\n    log.Printf("Username: %s Password: %s", username, password)\n    return c.SendString("Hello, " + username)\n}\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Users defines the allowed credentials."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]string{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Realm"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Realm is a string to define the realm attribute of BasicAuth. The realm identifies the system to authenticate against and can be used by clients to save credentials."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Restricted"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorizer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(string, string) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorizer defines a function to check the credentials. It will be called with a username and password and is expected to return true or false to indicate approval."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unauthorized defines the response body for unauthorized responses."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:            nil,\n    Users:           map[string]string{},\n    Realm:           "Restricted",\n    Authorizer:      nil,\n    Unauthorized:    nil,\n}\n')))}u.isMDXComponent=!0}}]);