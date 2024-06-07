"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52075],{14591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const r={id:"rueidis",title:"Rueidis"},o=void 0,a={id:"rueidis/rueidis",title:"Rueidis",description:"Release",source:"@site/storage_versioned_docs/version-etcd_v2.x.x/rueidis/README.md",sourceDirName:"rueidis",slug:"/rueidis/",permalink:"/storage/etcd_v2.x.x/rueidis/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/rueidis/README.md",tags:[],version:"etcd_v2.x.x",lastUpdatedAt:1717772537e3,frontMatter:{id:"rueidis",title:"Rueidis"},sidebar:"tutorialSidebar",previous:{title:"Ristretto",permalink:"/storage/etcd_v2.x.x/ristretto/"},next:{title:"S3",permalink:"/storage/etcd_v2.x.x/s3/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=rueidis*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A fast Redis Storage that does auto pipelining and supports client side caching. ",(0,i.jsx)(n.a,{href:"https://github.com/redis/rueidis",children:"redis/rueidis"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: Requires Go 1.20 and above"})}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() rueidis.Client\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Rueidis is tested on the latest ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go version"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the rueidis implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/rueidis\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/rueidis"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the one of the following options to create a Rueidis Storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config (localhost:6379)\nstore := rueidis.New()\n\n// Initialize custom config \nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "",\n    Password:       "",\n    Database:       0,\n    Reset:          false,\n    TLSConfig:      nil,\n})\n\n// Initialize using Rueidis URL\nstore := rueidis.New(rueidis.Config{\n    URL:    "redis://localhost:6379",\n})\n\n// Initialize Rueidis Cluster Client\nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n\tlog.Println(err)\n\treturn\n}\ntlsCfg := &tls.Config{\n\tMinVersion:            tls.VersionTLS12,\n\tInsecureSkipVerify:    true,\n\tCertificates:          []tls.Certificate{cer},\n}\nstore = rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "<user>",\n    Password:       "<password>",\n    SelectDB:       0,\n    TLSConfig:      tlsCfg,\n})\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// Server username\n\t//\n\t// Optional. Default is ""\n\tUsername string\n\n\t// Server password\n\t//\n\t// Optional. Default is ""\n\tPassword string\n\n\t// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n\t//\n\t// Optional. Default is ""\n\tClientName string\n\n\t// URL standard format Redis URL. If this is set all other config options, InitAddress, Username, Password, ClientName, and SelectDB have no effect.\n\t//\n\t// Example: redis://<user>:<pass>@localhost:6379/<db>\n\t// Optional. Default is ""\n\tURL string\n\n\t// SelectDB to be selected after connecting to the server.\n\t//\n\t// Optional. Default is 0\n\tSelectDB int\n\n\t// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n\t//\n\t// Optional. Default is []string{"127.0.0.1:6379"}\n\tInitAddress []string\n\n\t// TLS Config to use. When set TLS will be negotiated.\n\t//\n\t// Optional. Default is nil\n\tTLSConfig *tls.Config\n\n\t// CacheSizeEachConn is redis client side cache size that bind to each TCP connection to a single redis instance.\n\t//\n\t// Optional. The default is DefaultCacheBytes: 128 * (1 << 20)\n\tCacheSizeEachConn int\n\n\t// RingScaleEachConn sets the size of the ring buffer in each connection to (2 ^ RingScaleEachConn).\n\t//\n\t// Optional. The default is RingScaleEachConn, which results into having a ring of size 2^10 for each connection.\n\tRingScaleEachConn int\n\n\t// ReadBufferEachConn is the size of the bufio.NewReaderSize for each connection, default to DefaultReadBuffer (0.5 MiB).\n\t//\n\t// Optional. The default is DefaultReadBuffer: 1 << 19\n\tReadBufferEachConn int\n\n\t// WriteBufferEachConn is the size of the bufio.NewWriterSize for each connection, default to DefaultWriteBuffer (0.5 MiB).\n\t//\n\t// Optional. The default is DefaultWriteBuffer: 1 << 19\n\tWriteBufferEachConn int\n\n\t// BlockingPoolSize is the size of the connection pool shared by blocking commands (ex BLPOP, XREAD with BLOCK).\n\t//\n\t// Optional. The default is DefaultPoolSize: 1000\n\tBlockingPoolSize int\n\n\t// PipelineMultiplex determines how many tcp connections used to pipeline commands to one redis instance.\n\t//\n\t// Optional. The default for single and sentinel clients is 2, which means 4 connections (2^2).\n\tPipelineMultiplex int\n\n\t// DisableRetry disables retrying read-only commands under network errors\n\t//\n\t// Optional. The default is False\n\tDisableRetry bool\n\n\t// DisableCache falls back Client.DoCache/Client.DoMultiCache to Client.Do/Client.DoMulti\n\t//\n\t// Optional. The default is false\n\tDisableCache bool\n\n\t// AlwaysPipelining makes rueidis.Client always pipeline redis commands even if they are not issued concurrently.\n\t//\n\t// Optional. The default is true\n\tAlwaysPipelining bool\n\n\t// Reset clears any existing keys in existing Collection\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// CacheTTL TTL\n\t//\n\t// Optional. Default is time.Minute\n\tCacheTTL time.Duration\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tUsername:            "",\n\tPassword:            "",\n\tClientName:          "",\n\tSelectDB:            0,\n\tInitAddress:         []string{"127.0.0.1:6379"},\n\tTLSConfig:           nil,\n\tCacheSizeEachConn:   rueidis.DefaultCacheBytes,\n\tRingScaleEachConn:   rueidis.DefaultRingScale,\n\tReadBufferEachConn:  rueidis.DefaultReadBuffer,\n\tWriteBufferEachConn: rueidis.DefaultWriteBuffer,\n\tBlockingPoolSize:    rueidis.DefaultPoolSize,\n\tPipelineMultiplex:   2,\n\tDisableRetry:        false,\n\tDisableCache:        false,\n\tAlwaysPipelining:    true,\n\tReset:               false,\n\tCacheTTL:            time.Minute,\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);