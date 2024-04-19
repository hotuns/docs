"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[17640],{10632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const i={id:"couchbase",title:"Couchbase"},r=void 0,a={id:"couchbase/couchbase",title:"Couchbase",description:"Release",source:"@site/storage_versioned_docs/version-couchbase_v2.x.x/couchbase/README.md",sourceDirName:"couchbase",slug:"/couchbase/",permalink:"/storage/couchbase_v2.x.x/couchbase/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/couchbase/README.md",tags:[],version:"couchbase_v2.x.x",lastUpdatedAt:1713526866e3,frontMatter:{id:"couchbase",title:"Couchbase"},sidebar:"tutorialSidebar",previous:{title:"Coherence",permalink:"/storage/couchbase_v2.x.x/coherence/"},next:{title:"DynamoDB",permalink:"/storage/couchbase_v2.x.x/dynamodb/"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=couchbase*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A Couchbase storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/couchbase/gocb",children:"couchbase/gocb"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *gocb.Cluster\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Couchbase is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the Couchbase implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/couchbase/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/couchbase/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := couchbase.New()\n\n// Initialize Couchbase storage with custom config\nstore := couchbase.New(couchbase.Config{\n\tHost:      "127.0.0.1:8091",\n\tUsername:  "",\n\tPassword:  "",\n\tBucket:  0,\n\tConnectionTimeout: 3* time.Second,\n\tKVTimeout: 1* time.Second,\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Config struct {\n    // The application username to Connect to the Couchbase cluster\n    Username string\n    // The application password to Connect to the Couchbase cluster\n    Password string\n    // The connection string for the Couchbase cluster\n    Host string\n    // The name of the bucket to Connect to\n    Bucket string\n    // The timeout for connecting to the Couchbase cluster\n    ConnectionTimeout time.Duration\n    // The timeout for performing operations on the Couchbase cluster\n    KVTimeout time.Duration\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Host:              "127.0.0.1:8091",\n    Username:          "admin",\n    Password:          "123456",\n    Bucket:            "fiber_storage",\n    ConnectionTimeout: 3 * time.Second,\n    KVTimeout:         1 * time.Second,\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);