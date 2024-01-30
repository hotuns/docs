"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[54971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"jwt"},o="JWT",l={unversionedId:"jwt/jwt",id:"version-fgprof_v1.x.x/jwt/jwt",title:"JWT",description:"Release",source:"@site/contrib_versioned_docs/version-fgprof_v1.x.x/jwt/README.md",sourceDirName:"jwt",slug:"/jwt/",permalink:"/contrib/fgprof_v1.x.x/jwt/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/jwt/README.md",tags:[],version:"fgprof_v1.x.x",lastUpdatedAt:1706604776,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"jwt"},sidebar:"tutorialSidebar",previous:{title:"Fiberzerolog",permalink:"/contrib/fgprof_v1.x.x/fiberzerolog/"},next:{title:"Opafiber",permalink:"/contrib/fgprof_v1.x.x/opafiber/"}},s={},p=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"HS256 Example",id:"hs256-example",level:2},{value:"HS256 Test",id:"hs256-test",level:2},{value:"RS256 Example",id:"rs256-example",level:2},{value:"RS256 Test",id:"rs256-test",level:2},{value:"JWK Set Test",id:"jwk-set-test",level:2},{value:"Custom KeyFunc example",id:"custom-keyfunc-example",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jwt"},"JWT"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=jwt*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,'JWT returns a JSON Web Token (JWT) auth middleware.\nFor valid token, it sets the user in Ctx.Locals and calls next handler.\nFor invalid token, it returns "401 - Unauthorized" error.\nFor missing token, it returns "400 - Bad Request" error.'),(0,a.kt)("p",null,"Special thanks and credits to ",(0,a.kt)("a",{parentName:"p",href:"https://echo.labstack.com/middleware/jwt"},"Echo")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v1 & v2, install accordingly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/jwt\ngo get -u github.com/golang-jwt/jwt/v5\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"jwtware.New(config ...jwtware.Config) func(*fiber.Ctx) error\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines a function to skip middleware"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler defines a function which is executed for a valid token."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, error) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler defines a function which is executed for an invalid token."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"401 Invalid or expired JWT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SigningKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"interface{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Signing key to validate token. Used as fallback if SigningKeys has length 0."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SigningKeys"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"map[string]interface{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Map of signing keys to validate token with kid field usage."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ContextKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Context key to store user information from the token into context."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"user"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Claims"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"jwt.Claim")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Claims are extendable claims data defining token content."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"jwt.MapClaims{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TokenLookup"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"TokenLookup is a string in the form of ",(0,a.kt)("inlineCode",{parentName:"td"},"<source>:<name>")," that is used"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"header:Authorization"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AuthScheme"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AuthScheme to be used in the Authorization header. The default value (",(0,a.kt)("inlineCode",{parentName:"td"},'"Bearer"'),") will only be used in conjuction with the default ",(0,a.kt)("inlineCode",{parentName:"td"},"TokenLookup")," value."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"Bearer"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"KeyFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func() jwt.Keyfunc")),(0,a.kt)("td",{parentName:"tr",align:"left"},"KeyFunc defines a user-defined function that supplies the public key for a token validation."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"jwtKeyFunc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"JWKSetURLs"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A slice of unique JSON Web Key (JWK) Set URLs to used to parse JWTs."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,a.kt)("h2",{id:"hs256-example"},"HS256 Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "time"\n\n    "github.com/gofiber/fiber/v2"\n\n    jwtware "github.com/gofiber/contrib/jwt"\n    "github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Login route\n    app.Post("/login", login)\n\n    // Unauthenticated route\n    app.Get("/", accessible)\n\n    // JWT Middleware\n    app.Use(jwtware.New(jwtware.Config{\n        SigningKey: jwtware.SigningKey{Key: []byte("secret")},\n    }))\n\n    // Restricted Routes\n    app.Get("/restricted", restricted)\n\n    app.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n    user := c.FormValue("user")\n    pass := c.FormValue("pass")\n\n    // Throws Unauthorized error\n    if user != "john" || pass != "doe" {\n        return c.SendStatus(fiber.StatusUnauthorized)\n    }\n\n    // Create the Claims\n    claims := jwt.MapClaims{\n        "name":  "John Doe",\n        "admin": true,\n        "exp":   time.Now().Add(time.Hour * 72).Unix(),\n    }\n\n    // Create token\n    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n\n    // Generate encoded token and send it as response.\n    t, err := token.SignedString([]byte("secret"))\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n    return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n    user := c.Locals("user").(*jwt.Token)\n    claims := user.Claims.(jwt.MapClaims)\n    name := claims["name"].(string)\n    return c.SendString("Welcome " + name)\n}\n\n')),(0,a.kt)("h2",{id:"hs256-test"},"HS256 Test"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Login using username and password to retrieve a token.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --data "user=john&pass=doe" http://localhost:3000/login\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Request a restricted resource using the token in Authorization request header.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost:3000/restricted -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome John Doe\n")),(0,a.kt)("h2",{id:"rs256-example"},"RS256 Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/rand"\n    "crypto/rsa"\n    "log"\n    "time"\n\n    "github.com/gofiber/fiber/v2"\n\n    "github.com/golang-jwt/jwt/v5"\n\n    jwtware "github.com/gofiber/contrib/jwt"\n)\n\nvar (\n    // Obviously, this is just a test example. Do not do this in production.\n    // In production, you would have the private key and public key pair generated\n    // in advance. NEVER add a private key to any GitHub repo.\n    privateKey *rsa.PrivateKey\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Just as a demo, generate a new private/public key pair on each run. See note above.\n    rng := rand.Reader\n    var err error\n    privateKey, err = rsa.GenerateKey(rng, 2048)\n    if err != nil {\n        log.Fatalf("rsa.GenerateKey: %v", err)\n    }\n\n    // Login route\n    app.Post("/login", login)\n\n    // Unauthenticated route\n    app.Get("/", accessible)\n\n    // JWT Middleware\n    app.Use(jwtware.New(jwtware.Config{\n        SigningKey: jwtware.SigningKey{\n            JWTAlg: jwtware.RS256,\n            Key:    privateKey.Public(),\n        },\n    }))\n\n    // Restricted Routes\n    app.Get("/restricted", restricted)\n\n    app.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n    user := c.FormValue("user")\n    pass := c.FormValue("pass")\n\n    // Throws Unauthorized error\n    if user != "john" || pass != "doe" {\n        return c.SendStatus(fiber.StatusUnauthorized)\n    }\n\n    // Create the Claims\n    claims := jwt.MapClaims{\n        "name":  "John Doe",\n        "admin": true,\n        "exp":   time.Now().Add(time.Hour * 72).Unix(),\n    }\n\n    // Create token\n    token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)\n\n    // Generate encoded token and send it as response.\n    t, err := token.SignedString(privateKey)\n    if err != nil {\n        log.Printf("token.SignedString: %v", err)\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n    return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n    user := c.Locals("user").(*jwt.Token)\n    claims := user.Claims.(jwt.MapClaims)\n    name := claims["name"].(string)\n    return c.SendString("Welcome " + name)\n}\n')),(0,a.kt)("h2",{id:"rs256-test"},"RS256 Test"),(0,a.kt)("p",null,"The RS256 is actually identical to the HS256 test above."),(0,a.kt)("h2",{id:"jwk-set-test"},"JWK Set Test"),(0,a.kt)("p",null,"The tests are identical to basic ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," tests above, with exception that ",(0,a.kt)("inlineCode",{parentName:"p"},"JWKSetURLs")," to valid public keys collection in JSON Web Key (JWK) Set format should be supplied. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"RFC 7517"),"."),(0,a.kt)("h2",{id:"custom-keyfunc-example"},"Custom KeyFunc example"),(0,a.kt)("p",null,"KeyFunc defines a user-defined function that supplies the public key for a token validation.\nThe function shall take care of verifying the signing algorithm and selecting the proper key.\nA user-defined KeyFunc can be useful if tokens are issued by an external party."),(0,a.kt)("p",null,"When a user-defined KeyFunc is provided, SigningKey, SigningKeys, and SigningMethod are ignored.\nThis is one of the three options to provide a token validation key.\nThe order of precedence is a user-defined KeyFunc, SigningKeys and SigningKey.\nRequired if neither SigningKeys nor SigningKey is provided.\nDefault to an internal implementation verifying the signing algorithm and selecting the proper key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n  "github.com/gofiber/fiber/v2"\n\n  jwtware "github.com/gofiber/contrib/jwt"\n  "github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(jwtware.New(jwtware.Config{\n        KeyFunc: customKeyFunc(),\n    }))\n\n    app.Get("/ok", func(c *fiber.Ctx) error {\n        return c.SendString("OK")\n    })\n}\n\nfunc customKeyFunc() jwt.Keyfunc {\n    return func(t *jwt.Token) (interface{}, error) {\n        // Always check the signing method\n        if t.Method.Alg() != jwtware.HS256 {\n            return nil, fmt.Errorf("Unexpected jwt signing method=%v", t.Header["alg"])\n        }\n\n        // TODO custom implementation of loading signing key like from a database\n    signingKey := "secret"\n\n        return []byte(signingKey), nil\n    }\n}\n')))}u.isMDXComponent=!0}}]);