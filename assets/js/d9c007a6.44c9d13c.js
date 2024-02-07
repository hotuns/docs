"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[60681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},95404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"encryptcookie"},a="Encrypt Cookie",c={unversionedId:"api/middleware/encryptcookie",id:"api/middleware/encryptcookie",title:"Encrypt Cookie",description:"Encrypt middleware for Fiber which encrypts cookie values. Note: this middleware does not encrypt cookie names.",source:"@site/docs/core/api/middleware/encryptcookie.md",sourceDirName:"api/middleware",slug:"/api/middleware/encryptcookie",permalink:"/next/api/middleware/encryptcookie",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/encryptcookie.md",tags:[],version:"current",lastUpdatedAt:1707310911,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"encryptcookie"},sidebar:"tutorialSidebar",previous:{title:"EarlyData",permalink:"/next/api/middleware/earlydata"},next:{title:"EnvVar",permalink:"/next/api/middleware/envvar"}},p={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Usage of CSRF and Encryptcookie Middlewares with Custom Cookie Names",id:"usage-of-csrf-and-encryptcookie-middlewares-with-custom-cookie-names",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encrypt-cookie"},"Encrypt Cookie"),(0,o.kt)("p",null,"Encrypt middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," which encrypts cookie values. Note: this middleware does not encrypt cookie names."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Intitializes the middleware\nfunc New(config ...Config) fiber.Handler\n\n// Returns a random 32 character long string\nfunc GenerateKey() string\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/encryptcookie"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\n// `Key` must be a 32 character string. It\'s used to encrypt the values, so make sure it is random and keep it secret.\n// You can run `openssl rand -base64 32` or call `encryptcookie.GenerateKey()` to create a random key for you.\n// Make sure not to set `Key` to `encryptcookie.GenerateKey()` because that will create a new key every run.\napp.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n}))\n\n// Get / reading out the encrypted cookie\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("value=" + c.Cookies("test"))\n})\n\n// Post / create the encrypted cookie\napp.Post("/", func(c fiber.Ctx) error {\n    c.Cookie(&fiber.Cookie{\n        Name:  "test",\n        Value: "SomeThing",\n    })\n    return nil\n})\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"<<<<<<< HEAD:middleware/encryptcookie/README.md"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c fiber.Ctx) bool\n\n    // Array of cookie keys that should not be encrypted.\n    //\n    // Optional. Default: ["csrf_"]\n    Except []string\n\n    // Base64 encoded unique key to encode & decode cookies.\n    //\n    // Required. The key should be 32 bytes of random data in base64-encoded form.\n    // You may run `openssl rand -base64 32` or use `encryptcookie.GenerateKey()` to generate a new key.\n    Key string\n\n    // Custom function to encrypt cookies.\n    //\n    // Optional. Default: EncryptCookie\n    Encryptor func(decryptedString, key string) (string, error)\n\n    // Custom function to decrypt cookies.\n    //\n    // Optional. Default: DecryptCookie\n    Decryptor func(encryptedString, key string) (string, error)\n}\n')),(0,o.kt)("p",null,"=======\n| Property  | Type                                                | Description                                                                                         | Default                      |\n|:----------|:----------------------------------------------------|:----------------------------------------------------------------------------------------------------|:-----------------------------|\n| Next      | ",(0,o.kt)("inlineCode",{parentName:"p"},"func(fiber.Ctx) bool"),"                             | Next defines a function to skip this middleware when returned true.                                 | ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"                        |\n| Except    | ",(0,o.kt)("inlineCode",{parentName:"p"},"[]string"),"                                          | Array of cookie keys that should not be encrypted.                                                  | ",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),"                         |\n| Key       | ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"                                            | Base64 encoded unique key to encode & decode cookies. Required. Key length should be 32 characters. | (No default, required field) |\n| Encryptor | ",(0,o.kt)("inlineCode",{parentName:"p"},"func(decryptedString, key string) (string, error)")," | Custom function to encrypt cookies.                                                                 | ",(0,o.kt)("inlineCode",{parentName:"p"},"EncryptCookie"),"              |\n| Decryptor | ",(0,o.kt)("inlineCode",{parentName:"p"},"func(encryptedString, key string) (string, error)")," | Custom function to decrypt cookies.                                                                 | ",(0,o.kt)("inlineCode",{parentName:"p"},"DecryptCookie"),"              |"),(0,o.kt)("blockquote",null,(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"origin/master:docs/api/middleware/encryptcookie.md")))))))),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:      nil,\n    Except:    []string{"csrf_"},\n    Key:       "",\n    Encryptor: EncryptCookie,\n    Decryptor: DecryptCookie,\n}\n')),(0,o.kt)("h2",{id:"usage-of-csrf-and-encryptcookie-middlewares-with-custom-cookie-names"},"Usage of CSRF and Encryptcookie Middlewares with Custom Cookie Names"),(0,o.kt)("p",null,"Normally, encryptcookie middleware skips ",(0,o.kt)("inlineCode",{parentName:"p"},"csrf_")," cookies. However, it won't work when you use custom cookie names for CSRF. You should update ",(0,o.kt)("inlineCode",{parentName:"p"},"Except")," config to avoid this problem. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n    Except: []string{"csrf_1"}, // exclude CSRF cookie\n}))\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "form:test",\n    CookieName:     "csrf_1", \n    CookieHTTPOnly: true,\n}))\n')))}d.isMDXComponent=!0}}]);