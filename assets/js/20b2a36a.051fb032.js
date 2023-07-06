"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6050],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7606:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"paseto",title:"Paseto"},o=void 0,l={unversionedId:"paseto/paseto",id:"paseto/paseto",title:"Paseto",description:"Release",source:"@site/docs/contrib/paseto/README.md",sourceDirName:"paseto",slug:"/paseto/",permalink:"/contrib/paseto/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/paseto/README.md",tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1688653574,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"paseto",title:"Paseto"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber Example",permalink:"/contrib/otelfiber/example/"},next:{title:"Swagger",permalink:"/contrib/swagger/"}},p={},d=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Instructions",id:"instructions",level:3}],s={toc:d},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=paseto*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,r.kt)("p",null,"PASETO returns a Web Token (PASETO) auth middleware."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For valid token, it sets the payload data in Ctx.Locals and calls next handler."),(0,r.kt)("li",{parentName:"ul"},'For invalid token, it returns "401 - Unauthorized" error.'),(0,r.kt)("li",{parentName:"ul"},'For missing token, it returns "400 - BadRequest" error.')),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("p",null,"This middleware supports Fiber v2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/paseto\ngo get -u github.com/o1egl/paseto\n")),(0,r.kt)("h3",{id:"signature"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"pasetoware.New(config ...pasetoware.Config) func(*fiber.Ctx) error\n")),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a function to skip middleware"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler defines a function which is executed for a valid token."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"c.Next()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, error) error")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler defines a function which is executed for an invalid token."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"401 Invalid or expired PASETO"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Validate"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PayloadValidator")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a function to validate if payload is valid. Optional. In case payload used is created using ",(0,r.kt)("inlineCode",{parentName:"td"},"CreateToken")," function. If token is created using another function, this function must be provided."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SymmetricKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secret key to encrypt token. If present the middleware will generate local tokens."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PrivateKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ed25519.PrivateKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secret key to sign the tokens. If present (along with its ",(0,r.kt)("inlineCode",{parentName:"td"},"PublicKey"),") the middleware will generate public tokens."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PublicKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crypto.PublicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key to verify the tokens. If present (along with ",(0,r.kt)("inlineCode",{parentName:"td"},"PrivateKey"),") the middleware will generate public tokens."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContextKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Context key to store user information from the token into context."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"auth-token"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TokenLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[2]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TokenLookup is a string slice with size 2, that is used to extract token from the request"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'["header","Authorization"]'))))),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"When using this middleware, and creating a token for authentication, you can use the function pasetoware.CreateToken, that will create a token, encrypt or sign it and returns the PASETO token."),(0,r.kt)("p",null,"Passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"SymmetricKey")," in the Config results in a local (encrypted) token, while passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateKey")," results in a public (signed) token."),(0,r.kt)("p",null,"In case you want to use your own data structure, is needed to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"Validate")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"paseware.Config"),", that will return the data stored in the token, and a error."))}m.isMDXComponent=!0}}]);