"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1426],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={id:"keyauth",title:"Keyauth"},o=void 0,l={unversionedId:"api/middleware/keyauth",id:"version-v2.x/api/middleware/keyauth",title:"Keyauth",description:"Key auth middleware provides a key based authentication.",source:"@site/versioned_docs/version-v2.x/api/middleware/keyauth.md",sourceDirName:"api/middleware",slug:"/api/middleware/keyauth",permalink:"/api/middleware/keyauth",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1688653574,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"keyauth",title:"Keyauth"},sidebar:"tutorialSidebar",previous:{title:"Idempotency",permalink:"/api/middleware/idempotency"},next:{title:"Limiter",permalink:"/api/middleware/limiter"}},u={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Authenticate only certain endpoints",id:"authenticate-only-certain-endpoints",level:3},{value:"Specifying middleware in the handler",id:"specifying-middleware-in-the-handler",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],s={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Key auth middleware provides a key based authentication."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n)\n\nvar (\n    apiKey = "correct horse battery staple"\n)\n\nfunc validateAPIKey(c *fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc main() {\n    app := fiber.New()\n\n    // note that the keyauth middleware needs to be defined before the routes are defined!\n    app.Use(keyauth.New(keyauth.Config{\n        KeyLookup:  "cookie:access_token",\n        Validator:  validateAPIKey,\n    }))\n\n        app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# No api-key specified -> 400 missing \ncurl http://localhost:3000\n#> missing or malformed API Key\n\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000\n#> Successfully authenticated!\n\ncurl --cookie "access_token=Clearly A Wrong Key" http://localhost:3000\n#>  missing or malformed API Key\n')),(0,a.kt)("p",null,"For a more detailed example, see also the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes"},(0,a.kt)("inlineCode",{parentName:"a"},"github.com/gofiber/recipes"))," repository and specifically the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber-envoy-extauthz")," repository and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes/blob/master/fiber-envoy-extauthz/authz/main.go"},(0,a.kt)("inlineCode",{parentName:"a"},"keyauth example"))," code."),(0,a.kt)("h3",{id:"authenticate-only-certain-endpoints"},"Authenticate only certain endpoints"),(0,a.kt)("p",null,"If you want to authenticate only certain endpoints, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," of keyauth and apply a filter function (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"authFilter"),") like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n    "regexp"\n    "strings"\n)\n\nvar (\n    apiKey        = "correct horse battery staple"\n    protectedURLs = []*regexp.Regexp{\n        regexp.MustCompile("^/authenticated$"),\n        regexp.MustCompile("^/auth2$"),\n    }\n)\n\nfunc validateAPIKey(c *fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc authFilter(c *fiber.Ctx) bool {\n    originalURL := strings.ToLower(c.OriginalURL())\n\n    for _, pattern := range protectedURLs {\n        if pattern.MatchString(originalURL) {\n            return false\n        }\n    }\n    return true\n}\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(keyauth.New(keyauth.Config{\n        Next:    authFilter,\n        KeyLookup: "cookie:access_token",\n        Validator: validateAPIKey,\n    }))\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n    app.Get("/authenticated", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n    app.Get("/auth2", func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated 2!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,"Which results in this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /authenticated needs to be authenticated\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/authenticated\n#> Successfully authenticated!\n\n# /auth2 needs to be authenticated too\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/auth2\n#> Successfully authenticated 2!\n')),(0,a.kt)("h3",{id:"specifying-middleware-in-the-handler"},"Specifying middleware in the handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/keyauth"\n)\n\nconst (\n  apiKey = "my-super-secret-key"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    authMiddleware := keyauth.New(keyauth.Config{\n        Validator:  func(c *fiber.Ctx, key string) (bool, error) {\n            hashedAPIKey := sha256.Sum256([]byte(apiKey))\n            hashedKey := sha256.Sum256([]byte(key))\n\n            if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n                return true, nil\n            }\n            return false, keyauth.ErrMissingOrMalformedAPIKey\n        },\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n\n    app.Get("/allowed",  authMiddleware, func(c *fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,"Which results in this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /allowed needs to be authenticated too\ncurl --header "Authorization: Bearer my-super-secret-key"  http://localhost:3000/allowed\n#> Successfully authenticated!\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip middleware.\n    // Optional. Default: nil\n    Next func(*fiber.Ctx) bool\n\n    // SuccessHandler defines a function which is executed for a valid key.\n    // Optional. Default: nil\n    SuccessHandler fiber.Handler\n\n    // ErrorHandler defines a function which is executed for an invalid key.\n    // It may be used to define a custom error.\n    // Optional. Default: 401 Invalid or expired key\n    ErrorHandler fiber.ErrorHandler\n\n    // KeyLookup is a string in the form of "<source>:<name>" that is used\n    // to extract key from the request.\n    // Optional. Default value "header:Authorization".\n    // Possible values:\n    // - "header:<name>"\n    // - "query:<name>"\n    // - "form:<name>"\n    // - "param:<name>"\n    // - "cookie:<name>"\n    KeyLookup string\n\n    // AuthScheme to be used in the Authorization header.\n    // Optional. Default value "Bearer".\n    AuthScheme string\n\n    // Validator is a function to validate key.\n    Validator func(*fiber.Ctx, string) (bool, error)\n\n    // Context key to store the bearertoken from the token into context.\n    // Optional. Default: "token".\n    ContextKey string\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    SuccessHandler: func(c *fiber.Ctx) error {\n        return c.Next()\n    },\n    ErrorHandler: func(c *fiber.Ctx, err error) error {\n        if err == ErrMissingOrMalformedAPIKey {\n            return c.Status(fiber.StatusUnauthorized).SendString(err.Error())\n        }\n        return c.Status(fiber.StatusUnauthorized).SendString("Invalid or expired API Key")\n    },\n    KeyLookup:  "header:" + fiber.HeaderAuthorization,\n    AuthScheme: "Bearer",\n    ContextKey: "token",\n}\n')))}p.isMDXComponent=!0}}]);