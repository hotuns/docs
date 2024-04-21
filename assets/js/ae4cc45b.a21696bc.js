"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[68010],{47844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(74848),i=n(28453);const a={id:"keyauth"},l="Keyauth",s={id:"middleware/keyauth",title:"Keyauth",description:"Key auth middleware provides a key based authentication.",source:"@site/docs/core/middleware/keyauth.md",sourceDirName:"middleware",slug:"/middleware/keyauth",permalink:"/next/middleware/keyauth",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/keyauth.md",tags:[],version:"current",lastUpdatedAt:1713704843e3,frontMatter:{id:"keyauth"},sidebar:"tutorialSidebar",previous:{title:"Idempotency",permalink:"/next/middleware/idempotency"},next:{title:"Limiter",permalink:"/next/middleware/limiter"}},c={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Authenticate only certain endpoints",id:"authenticate-only-certain-endpoints",level:3},{value:"Specifying middleware in the handler",id:"specifying-middleware-in-the-handler",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"keyauth",children:"Keyauth"}),"\n",(0,r.jsx)(t.p,{children:"Key auth middleware provides a key based authentication."}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\nfunc TokenFromContext(c fiber.Ctx) string\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/sha256"\n\t"crypto/subtle"\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nvar (\n\tapiKey = "correct horse battery staple"\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n\thashedAPIKey := sha256.Sum256([]byte(apiKey))\n\thashedKey := sha256.Sum256([]byte(key))\n\n\tif subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n\t\treturn true, nil\n\t}\n\treturn false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc main() {\n\tapp := fiber.New()\n\n\t// note that the keyauth middleware needs to be defined before the routes are defined!\n\tapp.Use(keyauth.New(keyauth.Config{\n\t\tKeyLookup:  "cookie:access_token",\n\t\tValidator:  validateAPIKey,\n\t}))\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Successfully authenticated!")\n\t})\n\n\tapp.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Test:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# No api-key specified -> 400 missing \ncurl http://localhost:3000\n#> missing or malformed API Key\n\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000\n#> Successfully authenticated!\n\ncurl --cookie "access_token=Clearly A Wrong Key" http://localhost:3000\n#>  missing or malformed API Key\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For a more detailed example, see also the ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes",children:(0,r.jsx)(t.code,{children:"github.com/gofiber/recipes"})})," repository and specifically the ",(0,r.jsx)(t.code,{children:"fiber-envoy-extauthz"})," repository and the ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/blob/master/fiber-envoy-extauthz/authz/main.go",children:(0,r.jsx)(t.code,{children:"keyauth example"})})," code."]}),"\n",(0,r.jsx)(t.h3,{id:"authenticate-only-certain-endpoints",children:"Authenticate only certain endpoints"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to authenticate only certain endpoints, you can use the ",(0,r.jsx)(t.code,{children:"Config"})," of keyauth and apply a filter function (eg. ",(0,r.jsx)(t.code,{children:"authFilter"}),") like so"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/sha256"\n\t"crypto/subtle"\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/keyauth"\n\t"regexp"\n\t"strings"\n)\n\nvar (\n\tapiKey        = "correct horse battery staple"\n\tprotectedURLs = []*regexp.Regexp{\n\t\tregexp.MustCompile("^/authenticated$"),\n\t\tregexp.MustCompile("^/auth2$"),\n\t}\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n\thashedAPIKey := sha256.Sum256([]byte(apiKey))\n\thashedKey := sha256.Sum256([]byte(key))\n\n\tif subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n\t\treturn true, nil\n\t}\n\treturn false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc authFilter(c fiber.Ctx) bool {\n\toriginalURL := strings.ToLower(c.OriginalURL())\n\n\tfor _, pattern := range protectedURLs {\n\t\tif pattern.MatchString(originalURL) {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Use(keyauth.New(keyauth.Config{\n\t\tNext:    authFilter,\n\t\tKeyLookup: "cookie:access_token",\n\t\tValidator: validateAPIKey,\n\t}))\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Welcome")\n\t})\n\tapp.Get("/authenticated", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Successfully authenticated!")\n\t})\n\tapp.Get("/auth2", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Successfully authenticated 2!")\n\t})\n\n\tapp.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Which results in this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /authenticated needs to be authenticated\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/authenticated\n#> Successfully authenticated!\n\n# /auth2 needs to be authenticated too\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/auth2\n#> Successfully authenticated 2!\n'})}),"\n",(0,r.jsx)(t.h3,{id:"specifying-middleware-in-the-handler",children:"Specifying middleware in the handler"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/sha256"\n\t"crypto/subtle"\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nconst (\n  apiKey = "my-super-secret-key"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tauthMiddleware := keyauth.New(keyauth.Config{\n\t\tValidator:  func(c fiber.Ctx, key string) (bool, error) {\n\t\t\thashedAPIKey := sha256.Sum256([]byte(apiKey))\n\t\t\thashedKey := sha256.Sum256([]byte(key))\n\n\t\t\tif subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n\t\t\t\treturn true, nil\n\t\t\t}\n\t\t\treturn false, keyauth.ErrMissingOrMalformedAPIKey\n\t\t},\n\t})\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Welcome")\n\t})\n\n\tapp.Get("/allowed",  authMiddleware, func(c fiber.Ctx) error {\n\t\treturn c.SendString("Successfully authenticated!")\n\t})\n\n\tapp.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Which results in this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /allowed needs to be authenticated too\ncurl --header "Authorization: Bearer my-super-secret-key"  http://localhost:3000/allowed\n#> Successfully authenticated!\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Handler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler defines a function which is executed for a valid key."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.ErrorHandler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler defines a function which is executed for an invalid key."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"401 Invalid or expired key"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyLookup"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:['KeyLookup is a string in the form of "',(0,r.jsx)(t.code,{children:"<source>:<name>"}),'" that is used to extract key from the request.']}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:['"header',":Authorization",'"']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AuthScheme"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AuthScheme to be used in the Authorization header."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'"Bearer"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Validator"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx, string) (bool, error)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Validator is a function to validate the key."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A function for key validation"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tSuccessHandler: func(c fiber.Ctx) error {\n\t\treturn c.Next()\n\t},\n\tErrorHandler: func(c fiber.Ctx, err error) error {\n\t\tif err == ErrMissingOrMalformedAPIKey {\n\t\t\treturn c.Status(fiber.StatusUnauthorized).SendString(err.Error())\n\t\t}\n\t\treturn c.Status(fiber.StatusUnauthorized).SendString("Invalid or expired API Key")\n\t},\n\tKeyLookup:  "header:" + fiber.HeaderAuthorization,\n\tAuthScheme: "Bearer",\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);