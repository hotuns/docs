"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[29002],{38150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var s=n(74848),i=n(28453);const o={id:"postgres",title:"Postgres"},r=void 0,l={id:"postgres/postgres",title:"Postgres",description:"Release",source:"@site/storage_versioned_docs/version-nats_v1.x.x/postgres/README.md",sourceDirName:"postgres",slug:"/postgres/",permalink:"/storage/nats_v1.x.x/postgres/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/postgres/README.md",tags:[],version:"nats_v1.x.x",lastUpdatedAt:171379028e4,frontMatter:{id:"postgres",title:"Postgres"},sidebar:"tutorialSidebar",previous:{title:"Pebble",permalink:"/storage/nats_v1.x.x/pebble/"},next:{title:"Redis",permalink:"/storage/nats_v1.x.x/redis/"}},a={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=postgres*",alt:"Release"}),"\n",(0,s.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(t.p,{children:["A Postgres storage driver using ",(0,s.jsx)(t.a,{href:"https://github.com/jackc/pgx",children:"jackc/pgx"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,s.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *pgxpool.Pool\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Postgres is tested on the 2 last ",(0,s.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then install the postgres implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/postgres/v3\n"})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/postgres/v3"\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Initialize default config\nstore := postgres.New()\n\n// Initialize custom config\nstore := postgres.New(postgres.Config{\n\tDB:              dbPool,\n\tTable:           "fiber_storage",\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n})\n'})}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Config defines the config for storage.\ntype Config struct {\n\t// DB pgxpool.Pool object will override connection uri and other connection fields\n\t//\n\t// Optional. Default is nil\n\tDB *pgxpool.Pool\n\n\t// Connection string to use for DB. Will override all other authentication values if used\n\t//\n\t// Optional. Default is ""\n\tConnectionURI string\n\n\t// Host name where the DB is hosted\n\t//\n\t// Optional. Default is "127.0.0.1"\n\tHost string\n\n\t// Port where the DB is listening on\n\t//\n\t// Optional. Default is 5432\n\tPort int\n\n\t// Server username\n\t//\n\t// Optional. Default is ""\n\tUsername string\n\n\t// Server password\n\t//\n\t// Optional. Default is ""\n\tPassword string\n\n\t// Database name\n\t//\n\t// Optional. Default is "fiber"\n\tDatabase string\n\n\t// Table name\n\t//\n\t// Optional. Default is "fiber_storage"\n\tTable string\n\n\t// The SSL mode for the connection\n\t//\n\t// Optional. Default is "disable"\n\tSSLMode string\n\n\t// Reset clears any existing keys in existing Table\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// Time before deleting expired keys\n\t//\n\t// Optional. Default is 10 * time.Second\n\tGCInterval time.Duration\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n\tConnectionURI: "",\n\tHost:          "127.0.0.1",\n\tPort:          5432,\n\tDatabase:      "fiber",\n\tTable:         "fiber_storage",\n\tSSLMode:       "disable",\n\tReset:         false,\n\tGCInterval:    10 * time.Second,\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);