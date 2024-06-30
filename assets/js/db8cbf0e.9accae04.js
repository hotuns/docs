"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[40599],{59117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const o={id:"etcd",title:"Etcd"},r=void 0,l={id:"etcd/etcd",title:"Etcd",description:"Release",source:"@site/storage_versioned_docs/version-pebble_v1.x.x/etcd/README.md",sourceDirName:"etcd",slug:"/etcd/",permalink:"/storage/pebble_v1.x.x/etcd/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/etcd/README.md",tags:[],version:"pebble_v1.x.x",lastUpdatedAt:1719776394e3,frontMatter:{id:"etcd",title:"Etcd"},sidebar:"tutorialSidebar",previous:{title:"DynamoDB",permalink:"/storage/pebble_v1.x.x/dynamodb/"},next:{title:"Memcache",permalink:"/storage/pebble_v1.x.x/memcache/"}},a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=etcd*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["A Etcd storage driver using ",(0,i.jsx)(t.a,{href:"https://github.com/etcd-io/etcd",children:(0,i.jsx)(t.code,{children:"etcd-io/etcd"})}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) *Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *clientv3.Client\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["Etcd is tested on the 2 last ",(0,i.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then install the etcd implementation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/etcd\n"})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/etcd"\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\nstore := etcd.New()\n\n// Initialize custom config\nstore := etcd.New(Config{\n    Endpoints: []string{"localhost:2379"},\n})\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type Config struct {\n    // Endpoints is a list of URLs.\n    Endpoints   []string\n    // DialTimeout is the timeout for failing to establish a connection.\n    DialTimeout time.Duration\n    // Username is a username for authentication.\n    Username    string\n    // Password is a password for authentication.\n    Password    string\n\t// TLS holds the client secure credentials, if any.\n\tTLS *tls.Config\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Endpoints:   []string{"localhost:2379"},\n    DialTimeout: 2 * time.Second,\n    Username:    "",\n    Password:    "",\n    TLS:         nil,\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);