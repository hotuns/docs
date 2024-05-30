"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74785],{99059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={id:"arangodb",title:"ArangoDB"},a=void 0,o={id:"arangodb/arangodb",title:"ArangoDB",description:"Release",source:"@site/storage_versioned_docs/version-azureblob_v1.x.x/arangodb/README.md",sourceDirName:"arangodb",slug:"/arangodb/",permalink:"/storage/azureblob_v1.x.x/arangodb/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/arangodb/README.md",tags:[],version:"azureblob_v1.x.x",lastUpdatedAt:1717035913e3,frontMatter:{id:"arangodb",title:"ArangoDB"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/storage/azureblob_v1.x.x/"},next:{title:"Azure Blob",permalink:"/storage/azureblob_v1.x.x/azureblob/"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=arangodb*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A ArangoDB storage driver using ",(0,i.jsx)(n.code,{children:"arangodb/go-driver"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/arangodb/go-driver",children:"arangodb/go-driver"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() driver.Client\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["ArangoDB is tested on the 2 last (1.14/1.15) ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the mysql implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/arangodb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/arangodb"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := arangodb.New()\n\n// Initialize custom config\nstore := arangodb.New(arangodb.Config{\n\tHost:       "http://127.0.0.1",\n\tPort:       8529,\n\tDatabase:   "fiber",\n\tCollection: "fiber_storage",\n\tReset:      false,\n\tGCInterval: 10 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// Host name where the DB is hosted\n\t//\n\t// Optional. Default is "http://127.0.0.1"\n\tHost string\n\n\t// Port where the DB is listening on\n\t//\n\t// Optional. Default is 8529\n\tPort int\n\n\t// Server username\n\t//\n\t// Optional. Default is ""\n\tUsername string\n\n\t// Server password\n\t//\n\t// Optional. Default is ""\n\tPassword string\n\n\t// Database name\n\t//\n\t// Optional. Default is "fiber"\n\tDatabase string\n\n\t// Collection name\n\t//\n\t// Optional. Default is "fiber_storage"\n\tCollection string\n\n\t// Reset clears any existing keys in existing collection\n\t//\n\t// Optional. Default is false\n\tReset bool\n\t// Time before deleting expired keys\n\t//\n\t// Optional. Default is 10 * time.Second\n\tGCInterval time.Duration\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.p,{children:"Used only for optional fields"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tHost:       "http://127.0.0.1",\n\tPort:       8529,\n\tDatabase:   "fiber",\n\tCollection: "fiber_storage",\n\tReset:      false,\n\tGCInterval: 10 * time.Second,\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);