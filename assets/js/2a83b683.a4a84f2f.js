"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[39801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,u=m["".concat(l,".").concat(c)]||m[c]||f[c]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"session"},o="Session",s={unversionedId:"api/middleware/session",id:"api/middleware/session",title:"Session",description:"Session middleware for Fiber.",source:"@site/docs/core/api/middleware/session.md",sourceDirName:"api/middleware",slug:"/api/middleware/session",permalink:"/next/api/middleware/session",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/session.md",tags:[],version:"current",lastUpdatedAt:1710833590,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{id:"session"},sidebar:"tutorialSidebar",previous:{title:"Rewrite",permalink:"/next/api/middleware/rewrite"},next:{title:"Skip",permalink:"/next/api/middleware/skip"}},l={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"session"},"Session"),(0,r.kt)("p",null,"Session middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) *Store\nfunc (s *Store) RegisterType(i any)\nfunc (s *Store) Get(c fiber.Ctx) (*Session, error)\nfunc (s *Store) Delete(id string) error\nfunc (s *Store) Reset() error\n\nfunc (s *Session) Get(key string) any\nfunc (s *Session) Set(key string, val any)\nfunc (s *Session) Delete(key string)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Reset() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Save() error\nfunc (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Keys() []string\nfunc (s *Session) SetExpiry(exp time.Duration)\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Storing ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," values are limited to built-ins Go types.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/session"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\n// This stores all of your app\'s sessions\nstore := session.New()\n\napp.Get("/", func(c fiber.Ctx) error {\n    // Get session from storage\n    sess, err := store.Get(c)\n    if err != nil {\n        panic(err)\n    }\n\n    // Get value\n    name := sess.Get("name")\n\n    // Set key/value\n    sess.Set("name", "john")\n\n    // Get all Keys\n    keys := sess.Keys()\n\n    // Delete key\n    sess.Delete("name")\n\n    // Destroy session\n    if err := sess.Destroy(); err != nil {\n        panic(err)\n    }\n\n    // Sets a specific expiration for this session\n    sess.SetExpiry(time.Second * 2)\n\n    // Save session\n    if err := sess.Save(); err != nil {\n        panic(err)\n    }\n\n    return c.SendString(fmt.Sprintf("Welcome %v", name))\n})\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed session duration."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"24 * time.Hour"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage interface to store the session data."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"memory.New()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'KeyLookup is a string in the form of "',(0,r.kt)("inlineCode",{parentName:"td"},"<source>:<name>"),'" that is used to extract session id from the request.'),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"cookie:session_id"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieDomain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain of the cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookiePath"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSecure"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if cookie is secure."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieHTTPOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if cookie is HTTP only."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSameSite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value of SameSite cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Lax"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSessionOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Decides whether cookie should last for only the browser session. Ignores Expiration if set to true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func() string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator generates the session key."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"utils.UUIDv4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieName (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Please use KeyLookup. The session name."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Expiration:   24 * time.Hour,\n    KeyLookup:    "cookie:session_id",\n    KeyGenerator: utils.UUIDv4,\n    source:       "cookie",\n    sessionName:  "session_id",\n}\n')),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    SourceCookie   Source = "cookie"\n    SourceHeader   Source = "header"\n    SourceURLQuery Source = "query"\n)\n')),(0,r.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,r.kt)("p",null,"You can use any storage from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\nstore := session.New(session.Config{\n    Storage: storage,\n})\n")),(0,r.kt)("p",null,"To use the store, see the ",(0,r.kt)("a",{parentName:"p",href:"#examples"},"Examples"),"."))}f.isMDXComponent=!0}}]);