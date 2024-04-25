"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52350],{92468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const r={id:"redis",title:"Redis"},a=void 0,o={id:"redis/redis",title:"Redis",description:"Release",source:"@site/storage_versioned_docs/version-redis_v2.x.x/redis/README.md",sourceDirName:"redis",slug:"/redis/",permalink:"/storage/redis_v2.x.x/redis/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/redis/README.md",tags:[],version:"redis_v2.x.x",lastUpdatedAt:1714033726e3,frontMatter:{id:"redis",title:"Redis"},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/storage/redis_v2.x.x/postgres/"},next:{title:"Ristretto",permalink:"/storage/redis_v2.x.x/ristretto/"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=redis*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsxs)(n.p,{children:["A Redis storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/go-redis/redis",children:"go-redis/redis"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() redis.UniversalClient\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Redis is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the redis implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/redis/v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/redis/v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the one of the following options to create a Redis Storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := redis.New()\n\n// Initialize custom config\nstore := redis.New(redis.Config{\n\tHost:      "127.0.0.1",\n\tPort:      6379,\n\tUsername:  "",\n\tPassword:  "",\n\tDatabase:  0,\n\tReset:     false,\n\tTLSConfig: nil,\n\tPoolSize:  10 * runtime.GOMAXPROCS(0),\n})\n\n// Initialize Redis Failover Client\nstore := redis.New(redis.Config{\n\tMasterName:       "master-name",\n\tAddrs:            []string{":6379"},\n})\n\n// Initialize Redis Cluster Client\nstore := redis.New(redis.Config{\n\tAddrs:            []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n\tlog.Println(err)\n\treturn\n}\ntlsCfg := &tls.Config{\n\tMinVersion:               tls.VersionTLS12,\n\tInsecureSkipVerify:       true,\n\tCertificates:             []tls.Certificate{cer},\n}\nstore = redis.New(redis.Config{\n    URL:     \t"redis://<user>:<pass>@127.0.0.1:6379/<db>",\n\tTLSConfig: \ttlsCfg,\n    Reset:    \tfalse,\n})\n\n// Create a client with a Redis URL with all information.\nstore = redis.New(redis.Config{\n    URL:     "redis://<user>:<pass>@127.0.0.1:6379/<db>",\n    Reset:    false,\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// Host name where the DB is hosted\n\t//\n\t// Optional. Default is "127.0.0.1"\n\tHost string\n\n\t// Port where the DB is listening on\n\t//\n\t// Optional. Default is 6379\n\tPort int\n\n\t// Server username\n\t//\n\t// Optional. Default is ""\n\tUsername string\n\n\t// Server password\n\t//\n\t// Optional. Default is ""\n\tPassword string\n\n\t// Database to be selected after connecting to the server.\n\t//\n\t// Optional. Default is 0\n\tDatabase int\n\n\t// URL standard format Redis URL. If this is set all other config options, Host, Port, Username, Password, Database have no effect.\n\t//\n\t// Example: redis://<user>:<pass>@localhost:6379/<db>\n\t// Optional. Default is ""\n\tURL string\n\n\t// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n\t//\n\t// Optional. Default is []string{}\n\tAddrs []string\n\n\t// MasterName is the sentinel master\'s name\n\t//\n\t// Optional. Default is ""\n\tMasterName string\n\n\t// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n\t//\n\t// Optional. Default is ""\n\tClientName string\n\n\t// SentinelUsername\n\t//\n\t// Optional. Default is ""\n\tSentinelUsername string\n\n\t// SentinelPassword\n\t//\n\t// Optional. Default is ""\n\tSentinelPassword string\n\n\t// Reset clears any existing keys in existing Collection\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// TLS Config to use. When set TLS will be negotiated.\n\t//\n\t// Optional. Default is nil\n\tTLSConfig *tls.Config\n\n\t// Maximum number of socket connections.\n\t//\n\t// Optional. Default is 10 connections per every available CPU as reported by runtime.GOMAXPROCS.\n\tPoolSize int\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tHost:                  "127.0.0.1",\n\tPort:                  6379,\n\tUsername:              "",\n\tPassword:              "",\n\tURL:                   "",\n\tDatabase:              0,\n\tReset:                 false,\n\tTLSConfig:             nil,\n\tPoolSize:              10 * runtime.GOMAXPROCS(0),\n\tAddrs:                 []string{},\n\tMasterName:            "",\n\tClientName:            "",\n\tSentinelUsername:      "",\n\tSentinelPassword:      "",\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);