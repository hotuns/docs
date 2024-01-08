"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[60681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,k=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"encryptcookie"},i="Encrypt Cookie",l={unversionedId:"api/middleware/encryptcookie",id:"api/middleware/encryptcookie",title:"Encrypt Cookie",description:"Encrypt Cookie is a middleware for Fiber that secures your cookie values through encryption.",source:"@site/docs/core/api/middleware/encryptcookie.md",sourceDirName:"api/middleware",slug:"/api/middleware/encryptcookie",permalink:"/next/api/middleware/encryptcookie",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/encryptcookie.md",tags:[],version:"current",lastUpdatedAt:1704725601,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"encryptcookie"},sidebar:"tutorialSidebar",previous:{title:"EarlyData",permalink:"/next/api/middleware/earlydata"},next:{title:"EnvVar",permalink:"/next/api/middleware/envvar"}},c={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Usage With Other Middlewares That Reads Or Modify Cookies",id:"usage-with-other-middlewares-that-reads-or-modify-cookies",level:2}],d={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encrypt-cookie"},"Encrypt Cookie"),(0,a.kt)("p",null,"Encrypt Cookie is a middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that secures your cookie values through encryption. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This middleware encrypts cookie values and not the cookie names.")),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Intitializes the middleware\nfunc New(config ...Config) fiber.Handler\n\n// Returns a random 32 character long string\nfunc GenerateKey() string\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To use the Encrypt Cookie middleware, first, import the middleware package as part of the Fiber web framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/encryptcookie"\n)\n')),(0,a.kt)("p",null,"Once you've imported the middleware package, you can use it inside your Fiber app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal configuration\napp.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n}))\n\n// Retrieve the encrypted cookie value\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("value=" + c.Cookies("test"))\n})\n\n// Create an encrypted cookie\napp.Post("/", func(c *fiber.Ctx) error {\n    c.Cookie(&fiber.Cookie{\n        Name:  "test",\n        Value: "SomeThing",\n    })\n    return nil\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Key")," must be a 32 character string. It's used to encrypt the values, so make sure it is random and keep it secret.\nYou can run ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl rand -base64 32")," or call ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptcookie.GenerateKey()")," to create a random key for you.\nMake sure not to set ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptcookie.GenerateKey()")," because that will create a new key every run.")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Except"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Array of cookie keys that should not be encrypted."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A base64-encoded unique key to encode & decode cookies. Required. Key length should be 32 characters."),(0,a.kt)("td",{parentName:"tr",align:"left"},"(No default, required field)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Encryptor"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(decryptedString, key string) (string, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A custom function to encrypt cookies."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"EncryptCookie"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Decryptor"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(encryptedString, key string) (string, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A custom function to decrypt cookies."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DecryptCookie"))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:      nil,\n    Except:    []string{},\n    Key:       "",\n    Encryptor: EncryptCookie,\n    Decryptor: DecryptCookie,\n}\n')),(0,a.kt)("h2",{id:"usage-with-other-middlewares-that-reads-or-modify-cookies"},"Usage With Other Middlewares That Reads Or Modify Cookies"),(0,a.kt)("p",null,"Place the encryptcookie middleware before any other middleware that reads or modifies cookies. For example, if you are using the CSRF middleware, ensure that the encryptcookie middleware is placed before it. Failure to do so may prevent the CSRF middleware from reading the encrypted cookie."),(0,a.kt)("p",null,"You may also choose to exclude certain cookies from encryption. For instance, if you are using the CSRF middleware with a frontend framework like Angular, and the framework reads the token from a cookie, you should exclude that cookie from encryption. This can be achieved by adding the cookie name to the Except array in the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(encryptcookie.New(encryptcookie.Config{\n    Key:    "secret-thirty-2-character-string",\n    Except: []string{csrf.ConfigDefault.CookieName}, // exclude CSRF cookie\n}))\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:" + csrf.HeaderName,\n    CookieSameSite: "Lax",\n    CookieSecure:   true,\n    CookieHTTPOnly: false,\n}))\n')))}m.isMDXComponent=!0}}]);