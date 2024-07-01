"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74848],{29143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(74848),r=n(28453);const i={id:"ristretto",title:"Ristretto"},o=void 0,l={id:"ristretto/ristretto",title:"Ristretto",description:"Release",source:"@site/storage_versioned_docs/version-mongodb_v1.x.x/ristretto/README.md",sourceDirName:"ristretto",slug:"/ristretto/",permalink:"/storage/mongodb_v1.x.x/ristretto/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/ristretto/README.md",tags:[],version:"mongodb_v1.x.x",lastUpdatedAt:1719838081e3,frontMatter:{id:"ristretto",title:"Ristretto"},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/storage/mongodb_v1.x.x/redis/"},next:{title:"S3",permalink:"/storage/mongodb_v1.x.x/s3/"}},a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=ristretto*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-ristretto.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(t.p,{children:["A Memory-bound storage driver using ",(0,s.jsx)(t.a,{href:"https://github.com/dgraph-io/ristretto",children:(0,s.jsx)(t.code,{children:"dgraph-io/ristretto"})}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *ristretto.Cache\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Ristretto is tested on the 2 last ",(0,s.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then install the ristretto implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/ristretto\n"})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/ristretto"\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// Initialize default config\nstore := ristretto.New()\n\n// Initialize custom config\nstore := ristretto.New(ristretto.Config{\n  NumCounters: 1e7, // number of keys to track frequency of (10M).\n  MaxCost:     1 << 30, // maximum cost of cache (1GB).\n  BufferItems: 64, // number of keys per Get buffer.\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"type Config struct {\n  // NumCounters number of keys to track frequency of (10M).\n  NumCounters int64\n\n  // MaxCost maximum cost of cache (1GB).\n  MaxCost     int64\n\n  // BufferItems number of keys per Get buffer.\n  BufferItems int64\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n  NumCounters: 1e7,\n  MaxCost:     1 << 30,\n  BufferItems: 64,\n  DefaultCost: 1,\n}\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);