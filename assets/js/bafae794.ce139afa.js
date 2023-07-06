"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1856],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||s;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={id:"session",title:"Session"},a=void 0,i={unversionedId:"api/middleware/session",id:"version-v2.x/api/middleware/session",title:"Session",description:"Session middleware for Fiber.",source:"@site/versioned_docs/version-v2.x/api/middleware/session.md",sourceDirName:"api/middleware",slug:"/api/middleware/session",permalink:"/api/middleware/session",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1688638075,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"session",title:"Session"},sidebar:"tutorialSidebar",previous:{title:"Rewrite",permalink:"/api/middleware/rewrite"},next:{title:"Skip",permalink:"/api/middleware/skip"}},l={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Session middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) *Store\nfunc (s *Store) RegisterType(i interface{})\nfunc (s *Store) Get(c *fiber.Ctx) (*Session, error)\nfunc (s *Store) Reset() error\n\nfunc (s *Session) Get(key string) interface{}\nfunc (s *Session) Set(key string, val interface{})\nfunc (s *Session) Delete(key string)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Save() error\nfunc (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Keys() []string\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Storing ",(0,o.kt)("inlineCode",{parentName:"p"},"interface{}")," values are limited to built-ins Go types.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/session"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\n// This stores all of your app\'s sessions\nstore := session.New()\n\napp.Get("/", func(c *fiber.Ctx) error {\n    // Get session from storage\n    sess, err := store.Get(c)\n    if err != nil {\n        panic(err)\n    }\n\n    // Get value\n    name := sess.Get("name")\n\n    // Set key/value\n    sess.Set("name", "john")\n\n    // Get all Keys\n    keys := sess.Keys()\n\n    // Delete key\n    sess.Delete("name")\n\n    // Destroy session\n    if err := sess.Destroy(); err != nil {\n        panic(err)\n    }\n\n    // Sets a specific expiration for this session\n    sess.SetExpiry(time.Second * 2)\n\n    // Save session\n    if err := sess.Save(); err != nil {\n        panic(err)\n    }\n\n    return c.SendString(fmt.Sprintf("Welcome %v", name))\n})\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Allowed session duration\n    // Optional. Default value 24 * time.Hour\n    Expiration time.Duration\n\n    // Storage interface to store the session data\n    // Optional. Default value memory.New()\n    Storage fiber.Storage\n\n    // KeyLookup is a string in the form of "<source>:<name>" that is used\n    // to extract session id from the request.\n    // Possible values: "header:<name>", "query:<name>" or "cookie:<name>"\n    // Optional. Default value "cookie:session_id".\n    KeyLookup string\n\n    // Domain of the CSRF cookie.\n    // Optional. Default value "".\n    CookieDomain string\n\n    // Path of the CSRF cookie.\n    // Optional. Default value "".\n    CookiePath string\n\n    // Indicates if CSRF cookie is secure.\n    // Optional. Default value false.\n    CookieSecure bool\n\n    // Indicates if CSRF cookie is HTTP only.\n    // Optional. Default value false.\n    CookieHTTPOnly bool\n\n    // Value of SameSite cookie.\n    // Optional. Default value "Lax".\n    CookieSameSite string\n\n    // Decides whether cookie should last for only the browser sesison.\n    // Ignores Expiration if set to true\n    // Optional. Default value false.\n    CookieSessionOnly bool\n\n    // KeyGenerator generates the session key.\n    // Optional. Default value utils.UUIDv4\n    KeyGenerator func() string\n\n    // Deprecated: Please use KeyLookup\n    CookieName string\n\n    // Source defines where to obtain the session id\n    source Source\n\n    // The session name\n    sessionName string\n}\n')),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Expiration:   24 * time.Hour,\n    KeyLookup:    "cookie:session_id",\n    KeyGenerator: utils.UUIDv4,\n    source:       "cookie",\n    sessionName:  "session_id",\n}\n')),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    SourceCookie   Source = "cookie"\n    SourceHeader   Source = "header"\n    SourceURLQuery Source = "query"\n)\n')),(0,o.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,o.kt)("p",null,"You can use any storage from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\nstore := session.New(session.Config{\n    Storage: storage,\n})\n")),(0,o.kt)("p",null,"To use the store, see the ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"Examples"),"."))}f.isMDXComponent=!0}}]);