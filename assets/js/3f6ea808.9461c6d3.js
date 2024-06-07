"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50352],{87434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(74848),o=t(28453);const s={id:"hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response proccess of Fiber client.",sidebar_position:4},i=void 0,c={id:"client/hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response proccess of Fiber client.",source:"@site/docs/core/client/hooks.md",sourceDirName:"client",slug:"/client/hooks",permalink:"/next/client/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/client/hooks.md",tags:[],version:"current",lastUpdatedAt:1717772537e3,sidebarPosition:4,frontMatter:{id:"hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response proccess of Fiber client.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce5 Response",permalink:"/next/client/response"},next:{title:"\ud83c\udf73 Examples",permalink:"/next/client/examples"}},l={},a=[{value:"Request Hooks",id:"request-hooks",level:2},{value:"Response Hooks",id:"response-hooks",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"With hooks, you can manipulate the client on before request/after response stages or more complex logging/tracing cases."}),"\n",(0,r.jsx)(n.p,{children:"There are 2 kinds of hooks:"}),"\n",(0,r.jsx)(n.h2,{id:"request-hooks",children:"Request Hooks"}),"\n",(0,r.jsx)(n.p,{children:"They are called before the HTTP request has been sent. You can use them make changes on Request object."}),"\n",(0,r.jsxs)(n.p,{children:["You need to use ",(0,r.jsx)(n.code,{children:"RequestHook func(*Client, *Request) error"})," function signature while creating the hooks. You can use request hooks to change host URL, log request properties etc. Here is an example about how to create request hooks:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type Repository struct {\n\tName        string `json:"name"`\n\tFullName    string `json:"full_name"`\n\tDescription string `json:"description"`\n\tHomepage    string `json:"homepage"`\n\n\tOwner struct {\n\t\tLogin string `json:"login"`\n\t} `json:"owner"`\n}\n\nfunc main() {\n\tcc := client.New()\n\n\tcc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n\t\tr.SetURL("https://api.github.com/" + r.URL())\n\n\t\treturn nil\n\t})\n\n\tresp, err := cc.Get("repos/gofiber/fiber")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tvar repo Repository\n\tif err := resp.JSON(&repo); err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Printf("Status code: %d\\n", resp.StatusCode())\n\n\tfmt.Printf("Repository: %s\\n", repo.FullName)\n\tfmt.Printf("Description: %s\\n", repo.Description)\n\tfmt.Printf("Homepage: %s\\n", repo.Homepage)\n\tfmt.Printf("Owner: %s\\n", repo.Owner.Login)\n\tfmt.Printf("Name: %s\\n", repo.Name)\n\tfmt.Printf("Full Name: %s\\n", repo.FullName)\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Status code: 200\nRepository: gofiber/fiber\nDescription: \u26a1\ufe0f Express inspired web framework written in Go\nHomepage: https://gofiber.io\nOwner: gofiber\nName: fiber\nFull Name: gofiber/fiber\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"There are also some builtin request hooks provide some functionalities for Fiber client. Here is a list of them:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L62",children:"parserRequestURL"}),": parserRequestURL customizes the URL according to the path params and query params. It's necessary for ",(0,r.jsx)(n.code,{children:"PathParam"})," and ",(0,r.jsx)(n.code,{children:"QueryParam"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L113",children:"parserRequestHeader"}),": parserRequestHeader sets request headers, cookies, body type, referer, user agent according to client and request proeprties. It's necessary to make request header and cookiejar methods functional."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L178",children:"parserRequestBody"}),": parserRequestBody serializes the body automatically. It is useful for XML, JSON, form, file bodies."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If any error returns from request hook execution, it will interrupt the request and return the error."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tcc := client.New()\n\n\tcc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n\t\tfmt.Println("Hook 1")\n\t\treturn errors.New("error")\n\t})\n\n\tcc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n\t\tfmt.Println("Hook 2")\n\t\treturn nil\n\t})\n\n\t_, err := cc.Get("https://example.com/")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Hook 1.\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:25 +0xaa\nexit status 2\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"response-hooks",children:"Response Hooks"}),"\n",(0,r.jsx)(n.p,{children:"They are called after the HTTP response has been completed. You can use them to get some information about response and request."}),"\n",(0,r.jsxs)(n.p,{children:["You need to use ",(0,r.jsx)(n.code,{children:"ResponseHook func(*Client, *Response, *Request) error"})," function signature while creating the hooks. You can use response hook for logging, tracing etc. Here is an example about how to create response hooks:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tcc := client.New()\n\n\tcc.AddResponseHook(func(c *client.Client, resp *client.Response, req *client.Request) error {\n\t\tfmt.Printf("Response Status Code: %d\\n", resp.StatusCode())\n\t\tfmt.Printf("HTTP protocol: %s\\n\\n", resp.Protocol())\n\n\t\tfmt.Println("Response Headers:")\n\t\tresp.RawResponse.Header.VisitAll(func(key, value []byte) {\n\t\t\tfmt.Printf("%s: %s\\n", key, value)\n\t\t})\n\n\t\treturn nil\n\t})\n\n\t_, err := cc.Get("https://example.com/")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'Response Status Code: 200\nHTTP protocol: HTTP/1.1\n\nResponse Headers:\nContent-Length: 1256\nContent-Type: text/html; charset=UTF-8\nServer: ECAcc (dcd/7D5A)\nAge: 216114\nCache-Control: max-age=604800\nDate: Fri, 10 May 2024 10:49:10 GMT\nEtag: "3147526947+gzip+ident"\nExpires: Fri, 17 May 2024 10:49:10 GMT\nLast-Modified: Thu, 17 Oct 2019 07:18:26 GMT\nVary: Accept-Encoding\nX-Cache: HIT\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"There are also some builtin request hooks provide some functionalities for Fiber client. Here is a list of them:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L293",children:"parserResponseCookie"}),": parserResponseCookie parses cookies and saves into the response objects and cookiejar if it's exists."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L319",children:"logger"}),": logger prints some RawRequest and RawResponse information. It uses ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/log/log.go#L49",children:"log.CommonLogger"})," interface for logging."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If any error is returned from executing the response hook, it will return the error without executing other response hooks."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tcc := client.New()\n\n\tcc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n\t\tfmt.Println("Hook 1")\n\t\treturn nil\n\t})\n\n\tcc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n\t\tfmt.Println("Hook 2")\n\t\treturn errors.New("error")\n\t})\n\n\tcc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n\t\tfmt.Println("Hook 3")\n\t\treturn nil\n\t})\n\n\t_, err := cc.Get("https://example.com/")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Hook 1\nHook 2\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:30 +0xd6\nexit status 2\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Hooks work as FIFO (first-in-first-out). You need to check the order while adding the hooks."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tcc := client.New()\n\n\tcc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n\t\tfmt.Println("Hook 1")\n\t\treturn nil\n\t})\n\n\tcc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n\t\tfmt.Println("Hook 2")\n\t\treturn nil\n\t})\n\n\t_, err := cc.Get("https://example.com/")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Hook 1\nHook 2\n"})})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);