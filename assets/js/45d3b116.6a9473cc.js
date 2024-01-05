"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,f=d["".concat(l,".").concat(p)]||d[p]||g[p]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={id:"redis",title:"Redis"},s=void 0,o={unversionedId:"redis/redis",id:"version-couchbase_v1.x.x/redis/redis",title:"Redis",description:"Release",source:"@site/storage_versioned_docs/version-couchbase_v1.x.x/redis/README.md",sourceDirName:"redis",slug:"/redis/",permalink:"/storage/couchbase_v1.x.x/redis/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/redis/README.md",tags:[],version:"couchbase_v1.x.x",lastUpdatedAt:1704461823,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{id:"redis",title:"Redis"},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/storage/couchbase_v1.x.x/postgres/"},next:{title:"Ristretto",permalink:"/storage/couchbase_v1.x.x/ristretto/"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],c={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=redis*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?label=Tests",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,i.kt)("p",null,"A Redis storage driver using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-redis/redis"},"go-redis/redis"),"."),(0,i.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,i.kt)("h3",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() redis.UniversalClient\n")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Redis is tested on the 2 last ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,i.kt)("p",null,"And then install the redis implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/redis/v2\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the storage package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/redis/v2"\n')),(0,i.kt)("p",null,"You can use the one of the following options to create a Redis Storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := redis.New()\n\n// Initialize custom config\nstore := redis.New(redis.Config{\n    Host:      "127.0.0.1",\n    Port:      6379,\n    Username:  "",\n    Password:  "",\n    Database:  0,\n    Reset:     false,\n    TLSConfig: nil,\n    PoolSize:  10 * runtime.GOMAXPROCS(0),\n})\n\n// Initialize Redis Failover Client\nstore := redis.New(redis.Config{\n    MasterName:       "master-name",\n    Addrs:            []string{":6379"},\n})\n\n// Initialize Redis Cluster Client\nstore := redis.New(redis.Config{\n    Addrs:            []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n    log.Println(err)\n    return\n}\ntlsCfg := &tls.Config{\n    MinVersion:               tls.VersionTLS12,\n    InsecureSkipVerify:       true,\n    Certificates:             []tls.Certificate{cer},\n}\nstore = redis.New(redis.Config{\n    URL:        "redis://<user>:<pass>@127.0.0.1:6379/<db>",\n    TLSConfig:  tlsCfg,\n    Reset:      false,\n})\n\n// Create a client with a Redis URL with all information.\nstore = redis.New(redis.Config{\n    URL:     "redis://<user>:<pass>@127.0.0.1:6379/<db>",\n    Reset:    false,\n})\n')),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Host name where the DB is hosted\n    //\n    // Optional. Default is "127.0.0.1"\n    Host string\n\n    // Port where the DB is listening on\n    //\n    // Optional. Default is 6379\n    Port int\n\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Database to be selected after connecting to the server.\n    //\n    // Optional. Default is 0\n    Database int\n\n    // URL standard format Redis URL. If this is set all other config options, Host, Port, Username, Password, Database have no effect.\n    //\n    // Example: redis://<user>:<pass>@localhost:6379/<db>\n    // Optional. Default is ""\n    URL string\n\n    // Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n    //\n    // Optional. Default is []string{}\n    Addrs []string\n\n    // MasterName is the sentinel master\'s name\n    //\n    // Optional. Default is ""\n    MasterName string\n\n    // ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n    //\n    // Optional. Default is ""\n    ClientName string\n\n    // SentinelUsername\n    //\n    // Optional. Default is ""\n    SentinelUsername string\n\n    // SentinelPassword\n    //\n    // Optional. Default is ""\n    SentinelPassword string\n\n    // Reset clears any existing keys in existing Collection\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // TLS Config to use. When set TLS will be negotiated.\n    //\n    // Optional. Default is nil\n    TLSConfig *tls.Config\n\n    // Maximum number of socket connections.\n    //\n    // Optional. Default is 10 connections per every available CPU as reported by runtime.GOMAXPROCS.\n    PoolSize int\n}\n')),(0,i.kt)("h3",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Host:                  "127.0.0.1",\n    Port:                  6379,\n    Username:              "",\n    Password:              "",\n    URL:                   "",\n    Database:              0,\n    Reset:                 false,\n    TLSConfig:             nil,\n    PoolSize:              10 * runtime.GOMAXPROCS(0),\n    Addrs:                 []string{},\n    MasterName:            "",\n    ClientName:            "",\n    SentinelUsername:      "",\n    SentinelPassword:      "",\n}\n')))}g.isMDXComponent=!0}}]);