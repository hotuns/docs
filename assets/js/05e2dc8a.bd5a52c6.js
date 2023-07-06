"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"basicauth",title:"BasicAuth"},o=void 0,s={unversionedId:"api/middleware/basicauth",id:"api/middleware/basicauth",title:"BasicAuth",description:"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.",source:"@site/docs/api/middleware/basicauth.md",sourceDirName:"api/middleware",slug:"/api/middleware/basicauth",permalink:"/next/api/middleware/basicauth",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/basicauth.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1688638075,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"basicauth",title:"BasicAuth"},sidebar:"tutorialSidebar",previous:{title:"Adaptor",permalink:"/next/api/middleware/adaptor"},next:{title:"Cache",permalink:"/next/api/middleware/cache"}},l={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Basic Authentication middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides an HTTP basic authentication. It calls the next handler for valid credentials and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"},"401 Unauthorized")," or a custom response for missing or invalid credentials."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/basicauth"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n}))\n\n// Or extend your config for customization\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n    Realm: "Forbidden",\n    Authorizer: func(user, pass string) bool {\n        if user == "john" && pass == "doe" {\n            return true\n        }\n        if user == "admin" && pass == "123456" {\n            return true\n        }\n        return false\n    },\n    Unauthorized: func(c *fiber.Ctx) error {\n        return c.SendFile("./unauthorized.html")\n    },\n    ContextUsername: "_user",\n    ContextPassword: "_pass",\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Users defines the allowed credentials\n    //\n    // Required. Default: map[string]string{}\n    Users map[string]string\n\n    // Realm is a string to define realm attribute of BasicAuth.\n    // the realm identifies the system to authenticate against\n    // and can be used by clients to save credentials\n    //\n    // Optional. Default: "Restricted".\n    Realm string\n\n    // Authorizer defines a function you can pass\n    // to check the credentials however you want.\n    // It will be called with a username and password\n    // and is expected to return true or false to indicate\n    // that the credentials were approved or not.\n    //\n    // Optional. Default: nil.\n    Authorizer func(string, string) bool\n\n    // Unauthorized defines the response body for unauthorized responses.\n    // By default it will return with a 401 Unauthorized and the correct WWW-Auth header\n    //\n    // Optional. Default: nil\n    Unauthorized fiber.Handler\n\n    // ContextUser is the key to store the username in Locals\n    //\n    // Optional. Default: "username"\n    ContextUsername string\n\n    // ContextPass is the key to store the password in Locals\n    //\n    // Optional. Default: "password"\n    ContextPassword string\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:            nil,\n    Users:           map[string]string{},\n    Realm:           "Restricted",\n    Authorizer:      nil,\n    Unauthorized:    nil,\n    ContextUsername: "username",\n    ContextPassword: "password",\n}\n')))}p.isMDXComponent=!0}}]);