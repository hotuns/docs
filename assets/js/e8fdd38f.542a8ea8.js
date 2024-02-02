"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"paseto"},o="Paseto",l={unversionedId:"paseto/paseto",id:"version-jwt_v1.x.x/paseto/paseto",title:"Paseto",description:"Release",source:"@site/contrib_versioned_docs/version-jwt_v1.x.x/paseto/README.md",sourceDirName:"paseto",slug:"/paseto/",permalink:"/contrib/jwt_v1.x.x/paseto/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/paseto/README.md",tags:[],version:"jwt_v1.x.x",lastUpdatedAt:1706864260,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"paseto"},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/contrib/jwt_v1.x.x/otelfiber/example/"},next:{title:"Swagger",permalink:"/contrib/jwt_v1.x.x/swagger/"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Examples",id:"examples",level:2},{value:"SymmetricKey",id:"symmetrickey",level:3},{value:"Test it",id:"test-it",level:4},{value:"SymmetricKey + Custom Validator callback",id:"symmetrickey--custom-validator-callback",level:3},{value:"Test it",id:"test-it-1",level:4},{value:"PublicPrivate Key",id:"publicprivate-key",level:3},{value:"Test it",id:"test-it-2",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"paseto"},"Paseto"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=paseto*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"PASETO returns a Web Token (PASETO) auth middleware."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For valid token, it sets the payload data in Ctx.Locals and calls next handler."),(0,a.kt)("li",{parentName:"ul"},'For invalid token, it returns "401 - Unauthorized" error.'),(0,a.kt)("li",{parentName:"ul"},'For missing token, it returns "400 - BadRequest" error.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/paseto\ngo get -u github.com/o1egl/paseto\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"pasetoware.New(config ...pasetoware.Config) func(*fiber.Ctx) error\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines a function to skip middleware"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler defines a function which is executed for a valid token."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"c.Next()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, error) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler defines a function which is executed for an invalid token."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"401 Invalid or expired PASETO"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Validate"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"PayloadValidator")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines a function to validate if payload is valid. Optional. In case payload used is created using ",(0,a.kt)("inlineCode",{parentName:"td"},"CreateToken")," function. If token is created using another function, this function must be provided."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SymmetricKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret key to encrypt token. If present the middleware will generate local tokens."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PrivateKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ed25519.PrivateKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret key to sign the tokens. If present (along with its ",(0,a.kt)("inlineCode",{parentName:"td"},"PublicKey"),") the middleware will generate public tokens."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PublicKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"crypto.PublicKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Public key to verify the tokens. If present (along with ",(0,a.kt)("inlineCode",{parentName:"td"},"PrivateKey"),") the middleware will generate public tokens."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ContextKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Context key to store user information from the token into context."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"auth-token"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TokenLookup"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[2]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"TokenLookup is a string slice with size 2, that is used to extract token from the request"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'["header","Authorization"]'))))),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"When using this middleware, and creating a token for authentication, you can use the function pasetoware.CreateToken,\nthat will create a token, encrypt or sign it and returns the PASETO token."),(0,a.kt)("p",null,"Passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"SymmetricKey")," in the Config results in a local (encrypted) token, while passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"PublicKey"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateKey")," results in a public (signed) token."),(0,a.kt)("p",null,"In case you want to use your own data structure, is needed to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"Validate")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"paseware.Config"),", that\nwill return the data stored in the token, and a error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Below have a list of some examples that can help you start to use this middleware. In case of any additional example\nthat doesn't show here, please take a look at the test file."),(0,a.kt)("h3",{id:"symmetrickey"},"SymmetricKey"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "time"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/o1egl/paseto"\n\n    pasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst secretSymmetricKey = "symmetric-secret-key (size = 32)"\n\nfunc main() {\n\n    app := fiber.New()\n\n    // Login route\n    app.Post("/login", login)\n\n    // Unauthenticated route\n    app.Get("/", accessible)\n\n    // Paseto Middleware with local (encrypted) token\n    apiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n        SymmetricKey: []byte(secretSymmetricKey),\n        TokenPrefix:  "Bearer",\n    }))\n\n    // Restricted Routes\n    apiGroup.Get("/restricted", restricted)\n\n    err := app.Listen(":8088")\n    if err != nil {\n        return\n    }\n}\n\nfunc login(c *fiber.Ctx) error {\n    user := c.FormValue("user")\n    pass := c.FormValue("pass")\n\n    // Throws Unauthorized error\n    if user != "john" || pass != "doe" {\n        return c.SendStatus(fiber.StatusUnauthorized)\n    }\n\n    // Create token and encrypt it\n    encryptedToken, err := pasetoware.CreateToken([]byte(secretSymmetricKey), user, 12*time.Hour, pasetoware.PurposeLocal)\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n    return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n    payload := c.Locals(pasetoware.DefaultContextKey).(string)\n    return c.SendString("Welcome " + payload)\n}\n\n')),(0,a.kt)("h4",{id:"test-it"},"Test it"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Login using username and password to retrieve a token.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --data "user=john&pass=doe" http://localhost:8088/login\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "v2.local.eY7o9YAJ7Uqyo0JdyfHXKVARj3HgBhqIHckPgNIJOU6u489CXYL6bpOXbEtTB_nNM7nTFpcRVi7YAtJToxbxkkraHmE39pqjnBgkca-URgE-jhZGuhGu7ablmK-8tVoe5iY8mQqWFuJHAznTASUHh4AG55AMUcIALi6pEG28lAgVfw2azvnvbg4JOVZnjutcOVswd-ErsAuGtuEZkTmX7BfaLaO9ZvEX9cHahYPajuRjwU2TQrcpqITg-eYMNA1NuO8OVdnGf0mkUk6ElJUTZqhx4CSSylNXr7IlOwzTbUotEDAQTcNP7IRZI3VfpnRgnmtnZ5s.bnVsbAY"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Request a restricted resource using the token in Authorization request header.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.local.eY7o9YAJ7Uqyo0JdyfHXKVARj3HgBhqIHckPgNIJOU6u489CXYL6bpOXbEtTB_nNM7nTFpcRVi7YAtJToxbxkkraHmE39pqjnBgkca-URgE-jhZGuhGu7ablmK-8tVoe5iY8mQqWFuJHAznTASUHh4AG55AMUcIALi6pEG28lAgVfw2azvnvbg4JOVZnjutcOVswd-ErsAuGtuEZkTmX7BfaLaO9ZvEX9cHahYPajuRjwU2TQrcpqITg-eYMNA1NuO8OVdnGf0mkUk6ElJUTZqhx4CSSylNXr7IlOwzTbUotEDAQTcNP7IRZI3VfpnRgnmtnZ5s.bnVsbA"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome john\n")),(0,a.kt)("h3",{id:"symmetrickey--custom-validator-callback"},"SymmetricKey + Custom Validator callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "encoding/json"\n    "time"\n\n    "github.com/o1egl/paseto"\n\n    pasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst secretSymmetricKey = "symmetric-secret-key (size = 32)"\n\ntype customPayloadStruct struct {\n    Name      string    `json:"name"`\n    ExpiresAt time.Time `json:"expiresAt"`\n}\n\nfunc main() {\n\n    app := fiber.New()\n\n    // Login route\n    app.Post("/login", login)\n\n    // Unauthenticated route\n    app.Get("/", accessible)\n\n    // Paseto Middleware with local (encrypted) token\n    apiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n        SymmetricKey: []byte(secretSymmetricKey),\n        TokenPrefix:  "Bearer",\n        Validate: func(decrypted []byte) (any, error) {\n            var payload customPayloadStruct\n            err := json.Unmarshal(decrypted, &payload)\n            return payload, err\n        },\n    }))\n\n    // Restricted Routes\n    apiGroup.Get("/restricted", restricted)\n\n    err := app.Listen(":8088")\n    if err != nil {\n        return\n    }\n}\n\nfunc login(c *fiber.Ctx) error {\n    user := c.FormValue("user")\n    pass := c.FormValue("pass")\n\n    // Throws Unauthorized error\n    if user != "john" || pass != "doe" {\n        return c.SendStatus(fiber.StatusUnauthorized)\n    }\n\n    // Create the payload\n    payload := customPayloadStruct{\n        Name:      "John Doe",\n        ExpiresAt: time.Now().Add(12 * time.Hour),\n    }\n\n    // Create token and encrypt it\n    encryptedToken, err := paseto.NewV2().Encrypt([]byte(secretSymmetricKey), payload, nil)\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n    return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n    payload := c.Locals(pasetoware.DefaultContextKey).(customPayloadStruct)\n    return c.SendString("Welcome " + payload.Name)\n}\n\n')),(0,a.kt)("h4",{id:"test-it-1"},"Test it"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Login using username and password to retrieve a token.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --data "user=john&pass=doe" http://localhost:8088/login\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "v2.local.OSnDEMUndq8JpRdCD8yX-mr-Z0-Mi85Jw0ftxseiNLCbRc44Mxl5dnn-SV9Qew1n9Y44wXZwm_FG279cILJk7lYc_B_IoMCRBudJE7qMgctkD9UBM-ZRZgCX9ekJh3S1Oo6Erp7bO-omPra5.bnVsbA"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Request a restricted resource using the token in Authorization request header.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.local.OSnDEMUndq8JpRdCD8yX-mr-Z0-Mi85Jw0ftxseiNLCbRc44Mxl5dnn-SV9Qew1n9Y44wXZwm_FG279cILJk7lYc_B_IoMCRBudJE7qMgctkD9UBM-ZRZgCX9ekJh3S1Oo6Erp7bO-omPra5.bnVsbA"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome John Doe\n")),(0,a.kt)("h3",{id:"publicprivate-key"},"PublicPrivate Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/ed25519"\n    "encoding/hex"\n    "time"\n\n    "github.com/gofiber/fiber/v2"\n\n    pasetoware "github.com/gofiber/contrib/paseto"\n)\n\nconst privateKeySeed = "e9c67fe2433aa4110caf029eba70df2c822cad226b6300ead3dcae443ac3810f"\n\nvar seed, _ = hex.DecodeString(privateKeySeed)\nvar privateKey = ed25519.NewKeyFromSeed(seed)\n\ntype customPayloadStruct struct {\n    Name      string    `json:"name"`\n    ExpiresAt time.Time `json:"expiresAt"`\n}\n\nfunc main() {\n\n    app := fiber.New()\n\n    // Login route\n    app.Post("/login", login)\n\n    // Unauthenticated route\n    app.Get("/", accessible)\n\n    // Paseto Middleware with local (encrypted) token\n    apiGroup := app.Group("api", pasetoware.New(pasetoware.Config{\n        TokenPrefix: "Bearer",\n        PrivateKey:  privateKey,\n        PublicKey:   privateKey.Public(),\n    }))\n\n    // Restricted Routes\n    apiGroup.Get("/restricted", restricted)\n\n    err := app.Listen(":8088")\n    if err != nil {\n        return\n    }\n}\n\nfunc login(c *fiber.Ctx) error {\n    user := c.FormValue("user")\n    pass := c.FormValue("pass")\n\n    // Throws Unauthorized error\n    if user != "john" || pass != "doe" {\n        return c.SendStatus(fiber.StatusUnauthorized)\n    }\n\n    // Create token and encrypt it\n    encryptedToken, err := pasetoware.CreateToken(privateKey, user, 12*time.Hour, pasetoware.PurposePublic)\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return c.JSON(fiber.Map{"token": encryptedToken})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n    return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n    payload := c.Locals(pasetoware.DefaultContextKey).(string)\n    return c.SendString("Welcome " + payload)\n}\n\n')),(0,a.kt)("h4",{id:"test-it-2"},"Test it"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Login using username and password to retrieve a token.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --data "user=john&pass=doe" http://localhost:8088/login\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "v2.public.eyJhdWQiOiJnb2ZpYmVyLmdvcGhlcnMiLCJkYXRhIjoiam9obiIsImV4cCI6IjIwMjMtMDctMTNUMDg6NDk6MzctMDM6MDAiLCJpYXQiOiIyMDIzLTA3LTEyVDIwOjQ5OjM3LTAzOjAwIiwianRpIjoiMjIzYjM0MjQtNWNkZS00NDFhLWJiZWEtZjBjYWFhYTdiYWFlIiwibmJmIjoiMjAyMy0wNy0xMlQyMDo0OTozNy0wMzowMCIsInN1YiI6InVzZXItdG9rZW4ifWiqK_yg0eJbIs2hnup4NuBYg7v4lxh33zEhEljsH7QUaZXAdtbCPK7cN-NSfSxrw68owwgo-dOlPrD7lc5M_AU.bnVsbA"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Request a restricted resource using the token in Authorization request header.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost:8088/api/restricted -H "Authorization: Bearer v2.public.eyJhdWQiOiJnb2ZpYmVyLmdvcGhlcnMiLCJkYXRhIjoiam9obiIsImV4cCI6IjIwMjMtMDctMTNUMDg6NDk6MzctMDM6MDAiLCJpYXQiOiIyMDIzLTA3LTEyVDIwOjQ5OjM3LTAzOjAwIiwianRpIjoiMjIzYjM0MjQtNWNkZS00NDFhLWJiZWEtZjBjYWFhYTdiYWFlIiwibmJmIjoiMjAyMy0wNy0xMlQyMDo0OTozNy0wMzowMCIsInN1YiI6InVzZXItdG9rZW4ifWiqK_yg0eJbIs2hnup4NuBYg7v4lxh33zEhEljsH7QUaZXAdtbCPK7cN-NSfSxrw68owwgo-dOlPrD7lc5M_AU.bnVsbA"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome John Doe\n")))}u.isMDXComponent=!0}}]);