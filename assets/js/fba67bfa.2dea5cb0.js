"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[38754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"encryptcookie"},i="Encrypt Cookie",l={unversionedId:"api/middleware/encryptcookie",id:"version-v2.x/api/middleware/encryptcookie",title:"Encrypt Cookie",description:"Encrypt middleware for Fiber which encrypts cookie values. Note: this middleware does not encrypt cookie names.",source:"@site/versioned_docs/version-v2.x/api/middleware/encryptcookie.md",sourceDirName:"api/middleware",slug:"/api/middleware/encryptcookie",permalink:"/api/middleware/encryptcookie",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1704366986,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"encryptcookie"},sidebar:"tutorialSidebar",previous:{title:"EarlyData",permalink:"/api/middleware/earlydata"},next:{title:"EnvVar",permalink:"/api/middleware/envvar"}},c={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Usage of CSRF and Encryptcookie Middlewares with Custom Cookie Names",id:"usage-of-csrf-and-encryptcookie-middlewares-with-custom-cookie-names",level:2}],d={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encrypt-cookie"},"Encrypt Cookie"),(0,a.kt)("p",null,"Encrypt middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," which encrypts cookie values. Note: this middleware does not encrypt cookie names."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Intitializes the middleware\nfunc New(config ...Config) fiber.Handler\n\n// Returns a random 32 character long string\nfunc GenerateKey() string\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/encryptcookie"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\n// `Key` must be a 32 character string. It\'s used to encrypt the values, so make sure it is random and keep it secret.\n// You can run `openssl rand -base64 32` or call `encryptcookie.GenerateKey()` to create a random key for you.\n// Make sure not to set `Key` to `encryptcookie.GenerateKey()` because that will create a new key every run.\napp.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n}))\n\n// Get / reading out the encrypted cookie\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("value=" + c.Cookies("test"))\n})\n\n// Post / create the encrypted cookie\napp.Post("/", func(c *fiber.Ctx) error {\n    c.Cookie(&fiber.Cookie{\n        Name:  "test",\n        Value: "SomeThing",\n    })\n    return nil\n})\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Except"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Array of cookie keys that should not be encrypted."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Base64 encoded unique key to encode & decode cookies. Required. Key length should be 32 characters."),(0,a.kt)("td",{parentName:"tr",align:"left"},"(No default, required field)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Encryptor"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(decryptedString, key string) (string, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom function to encrypt cookies."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"EncryptCookie"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Decryptor"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(encryptedString, key string) (string, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom function to decrypt cookies."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DecryptCookie"))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:      nil,\n    Except:    []string{"csrf_"},\n    Key:       "",\n    Encryptor: EncryptCookie,\n    Decryptor: DecryptCookie,\n}\n')),(0,a.kt)("h2",{id:"usage-of-csrf-and-encryptcookie-middlewares-with-custom-cookie-names"},"Usage of CSRF and Encryptcookie Middlewares with Custom Cookie Names"),(0,a.kt)("p",null,"Normally, encryptcookie middleware skips ",(0,a.kt)("inlineCode",{parentName:"p"},"csrf_")," cookies. However, it won't work when you use custom cookie names for CSRF. You should update ",(0,a.kt)("inlineCode",{parentName:"p"},"Except")," config to avoid this problem. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n    Except: []string{"csrf_1"}, // exclude CSRF cookie\n}))\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "form:test",\n    CookieName:     "csrf_1", \n    CookieHTTPOnly: true,\n}))\n')))}m.isMDXComponent=!0}}]);