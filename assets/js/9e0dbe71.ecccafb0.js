"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[98330],{41787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={id:"nats",title:"Nats"},a=void 0,r={id:"nats/nats",title:"Nats",description:"Release",source:"@site/docs/storage/nats/README.md",sourceDirName:"nats",slug:"/nats/",permalink:"/storage/next/nats/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/nats/README.md",tags:[],version:"current",lastUpdatedAt:171385321e4,frontMatter:{id:"nats",title:"Nats"},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/storage/next/mysql/"},next:{title:"Pebble",permalink:"/storage/next/pebble/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=nats*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsx)(n.p,{children:"A NATS Key/Value storage driver."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.20 and above"})}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() (*nats.Conn, jetstream.KeyValue)\nfunc (s *Storage) Keys() ([]string, error)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-concepts/jetstream/key-value-store",children:"NATS Key/Value Store"})," driver is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the nats implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/nats\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/nats"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := nats.New()\n\n// Initialize custom config\nstore := nats.New(Config{\n URLs: "nats://127.0.0.1:4443",\n NatsOptions: []nats.Option{\n  nats.MaxReconnects(2),\n  // Enable TLS by specifying RootCAs\n  nats.RootCAs("./testdata/certs/ca.pem"),\n },\n KeyValueConfig: jetstream.KeyValueConfig{\n  Bucket:  "test",\n  Storage: jetstream.MemoryStorage,\n },\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n // Nats URLs, default "nats://127.0.0.1:4222". Can be comma separated list for multiple servers\n URLs string\n // Nats connection options. See nats_test.go for an example of how to use this.\n NatsOptions []nats.Option\n // Nats connection name\n ClientName string\n // Nats context\n Context context.Context\n // Nats key value config\n KeyValueConfig jetstream.KeyValueConfig\n // Logger. Using Fiber AllLogger interface for adapting the various log libraries.\n Logger log.AllLogger\n // Use the Logger for nats events, default: false\n Verbose bool\n // Wait for connection to be established, default: 100ms\n WaitForConnection time.Duration\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n URLs:       nats.DefaultURL,\n Context:    context.Background(),\n ClientName: "fiber_storage",\n KeyValueConfig: jetstream.KeyValueConfig{\n  Bucket: "fiber_storage",\n },\n WaitForConnection: 100 * time.Millisecond,\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);