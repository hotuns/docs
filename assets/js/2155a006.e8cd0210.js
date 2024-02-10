"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[11426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(d,".").concat(f)]||p[f]||s[f]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"keyauth"},o="Keyauth",l={unversionedId:"api/middleware/keyauth",id:"version-v2.x/api/middleware/keyauth",title:"Keyauth",description:"Key auth middleware provides a key based authentication.",source:"@site/versioned_docs/version-v2.x/api/middleware/keyauth.md",sourceDirName:"api/middleware",slug:"/api/middleware/keyauth",permalink:"/api/middleware/keyauth",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1707525206,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"keyauth"},sidebar:"tutorialSidebar",previous:{title:"Idempotency",permalink:"/api/middleware/idempotency"},next:{title:"Limiter",permalink:"/api/middleware/limiter"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Authenticate only certain endpoints",id:"authenticate-only-certain-endpoints",level:3},{value:"Specifying middleware in the handler",id:"specifying-middleware-in-the-handler",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],u={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyauth"},"Keyauth"),(0,r.kt)("p",null,"Key auth middleware provides a key based authentication."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n)\n\nvar (\n    apiKey = "correct horse battery staple"\n)\n\nfunc validateAPIKey(c *fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc main() {\n    app := fiber.New()\n\n    // note that the keyauth middleware needs to be defined before the routes are defined!\n    app.Use(keyauth.New(keyauth.Config{\n        KeyLookup:  "cookie:access_token",\n        Validator:  validateAPIKey,\n    }))\n\n        app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# No api-key specified -> 400 missing \ncurl http://localhost:3000\n#> missing or malformed API Key\n\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000\n#> Successfully authenticated!\n\ncurl --cookie "access_token=Clearly A Wrong Key" http://localhost:3000\n#>  missing or malformed API Key\n')),(0,r.kt)("p",null,"For a more detailed example, see also the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes"},(0,r.kt)("inlineCode",{parentName:"a"},"github.com/gofiber/recipes"))," repository and specifically the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber-envoy-extauthz")," repository and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes/blob/master/fiber-envoy-extauthz/authz/main.go"},(0,r.kt)("inlineCode",{parentName:"a"},"keyauth example"))," code."),(0,r.kt)("h3",{id:"authenticate-only-certain-endpoints"},"Authenticate only certain endpoints"),(0,r.kt)("p",null,"If you want to authenticate only certain endpoints, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config")," of keyauth and apply a filter function (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"authFilter"),") like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n    "regexp"\n    "strings"\n)\n\nvar (\n    apiKey        = "correct horse battery staple"\n    protectedURLs = []*regexp.Regexp{\n        regexp.MustCompile("^/authenticated$"),\n        regexp.MustCompile("^/auth2$"),\n    }\n)\n\nfunc validateAPIKey(c *fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc authFilter(c *fiber.Ctx) bool {\n    originalURL := strings.ToLower(c.OriginalURL())\n\n    for _, pattern := range protectedURLs {\n        if pattern.MatchString(originalURL) {\n            return false\n        }\n    }\n    return true\n}\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(keyauth.New(keyauth.Config{\n        Next:    authFilter,\n        KeyLookup: "cookie:access_token",\n        Validator: validateAPIKey,\n    }))\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n    app.Get("/authenticated", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n    app.Get("/auth2", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated 2!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("p",null,"Which results in this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /authenticated needs to be authenticated\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/authenticated\n#> Successfully authenticated!\n\n# /auth2 needs to be authenticated too\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/auth2\n#> Successfully authenticated 2!\n')),(0,r.kt)("h3",{id:"specifying-middleware-in-the-handler"},"Specifying middleware in the handler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n)\n\nconst (\n  apiKey = "my-super-secret-key"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    authMiddleware := keyauth.New(keyauth.Config{\n        Validator:  func(c *fiber.Ctx, key string) (bool, error) {\n            hashedAPIKey := sha256.Sum256([]byte(apiKey))\n            hashedKey := sha256.Sum256([]byte(key))\n\n            if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n                return true, nil\n            }\n            return false, keyauth.ErrMissingOrMalformedAPIKey\n        },\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n\n    app.Get("/allowed",  authMiddleware, func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("p",null,"Which results in this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /allowed needs to be authenticated too\ncurl --header "Authorization: Bearer my-super-secret-key"  http://localhost:3000/allowed\n#> Successfully authenticated!\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler defines a function which is executed for a valid key."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.ErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler defines a function which is executed for an invalid key."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"401 Invalid or expired key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'KeyLookup is a string in the form of "',(0,r.kt)("inlineCode",{parentName:"td"},"<source>:<name>"),'" that is used to extract key from the request.'),(0,r.kt)("td",{parentName:"tr",align:"left"},'"header:Authorization"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AuthScheme"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"AuthScheme to be used in the Authorization header."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Bearer"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Validator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, string) (bool, error)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Validator is a function to validate the key."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function for key validation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContextKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interface{}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Context key to store the bearer token from the token into context."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"token"')))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    SuccessHandler: func(c *fiber.Ctx) error {\n        return c.Next()\n    },\n    ErrorHandler: func(c *fiber.Ctx, err error) error {\n        if err == ErrMissingOrMalformedAPIKey {\n            return c.Status(fiber.StatusUnauthorized).SendString(err.Error())\n        }\n        return c.Status(fiber.StatusUnauthorized).SendString("Invalid or expired API Key")\n    },\n    KeyLookup:  "header:" + fiber.HeaderAuthorization,\n    AuthScheme: "Bearer",\n    ContextKey: "token",\n}\n')))}s.isMDXComponent=!0}}]);