"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[99887],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),p=a,g=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[f]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={id:"rueidis",title:"Rueidis"},o=void 0,s={unversionedId:"rueidis/rueidis",id:"version-azureblob_v2.x.x/rueidis/rueidis",title:"Rueidis",description:"Release",source:"@site/storage_versioned_docs/version-azureblob_v2.x.x/rueidis/README.md",sourceDirName:"rueidis",slug:"/rueidis/",permalink:"/storage/azureblob_v2.x.x/rueidis/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/rueidis/README.md",tags:[],version:"azureblob_v2.x.x",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"rueidis",title:"Rueidis"},sidebar:"tutorialSidebar",previous:{title:"Ristretto",permalink:"/storage/azureblob_v2.x.x/ristretto/"},next:{title:"S3",permalink:"/storage/azureblob_v2.x.x/s3/"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],c={toc:u},f="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=rueidis*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?label=Tests",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,a.kt)("p",null,"A fast Redis Storage that does auto pipelining and supports client side caching. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis/rueidis"},"redis/rueidis"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.20 and above")),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() rueidis.Client\n")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Rueidis is tested on the latest ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go version")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,a.kt)("p",null,"And then install the rueidis implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/rueidis\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the storage package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/rueidis"\n')),(0,a.kt)("p",null,"You can use the one of the following options to create a Rueidis Storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config (localhost:6379)\nstore := rueidis.New()\n\n// Initialize custom config \nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "",\n    Password:       "",\n    Database:       0,\n    Reset:          false,\n    TLSConfig:      nil,\n})\n\n// Initialize using Rueidis URL\nstore := rueidis.New(rueidis.Config{\n    URL:    "redis://localhost:6379",\n})\n\n// Initialize Rueidis Cluster Client\nstore := rueidis.New(rueidis.Config{\n    InitAddress:    []string{":6379", ":6380"},\n})\n\n// Create a client with support for TLS\ncer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")\nif err != nil {\n    log.Println(err)\n    return\n}\ntlsCfg := &tls.Config{\n    MinVersion:            tls.VersionTLS12,\n    InsecureSkipVerify:    true,\n    Certificates:          []tls.Certificate{cer},\n}\nstore = rueidis.New(rueidis.Config{\n    InitAddress:    []string{"localhost:6380"},\n    Username:       "<user>",\n    Password:       "<password>",\n    SelectDB:       0,\n    TLSConfig:      tlsCfg,\n})\n\n')),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.\n    //\n    // Optional. Default is ""\n    ClientName string\n\n    // URL standard format Redis URL. If this is set all other config options, InitAddress, Username, Password, ClientName, and SelectDB have no effect.\n    //\n    // Example: redis://<user>:<pass>@localhost:6379/<db>\n    // Optional. Default is ""\n    URL string\n\n    // SelectDB to be selected after connecting to the server.\n    //\n    // Optional. Default is 0\n    SelectDB int\n\n    // Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient\n    //\n    // Optional. Default is []string{"127.0.0.1:6379"}\n    InitAddress []string\n\n    // TLS Config to use. When set TLS will be negotiated.\n    //\n    // Optional. Default is nil\n    TLSConfig *tls.Config\n\n    // CacheSizeEachConn is redis client side cache size that bind to each TCP connection to a single redis instance.\n    //\n    // Optional. The default is DefaultCacheBytes: 128 * (1 << 20)\n    CacheSizeEachConn int\n\n    // RingScaleEachConn sets the size of the ring buffer in each connection to (2 ^ RingScaleEachConn).\n    //\n    // Optional. The default is RingScaleEachConn, which results into having a ring of size 2^10 for each connection.\n    RingScaleEachConn int\n\n    // ReadBufferEachConn is the size of the bufio.NewReaderSize for each connection, default to DefaultReadBuffer (0.5 MiB).\n    //\n    // Optional. The default is DefaultReadBuffer: 1 << 19\n    ReadBufferEachConn int\n\n    // WriteBufferEachConn is the size of the bufio.NewWriterSize for each connection, default to DefaultWriteBuffer (0.5 MiB).\n    //\n    // Optional. The default is DefaultWriteBuffer: 1 << 19\n    WriteBufferEachConn int\n\n    // BlockingPoolSize is the size of the connection pool shared by blocking commands (ex BLPOP, XREAD with BLOCK).\n    //\n    // Optional. The default is DefaultPoolSize: 1000\n    BlockingPoolSize int\n\n    // PipelineMultiplex determines how many tcp connections used to pipeline commands to one redis instance.\n    //\n    // Optional. The default for single and sentinel clients is 2, which means 4 connections (2^2).\n    PipelineMultiplex int\n\n    // DisableRetry disables retrying read-only commands under network errors\n    //\n    // Optional. The default is False\n    DisableRetry bool\n\n    // DisableCache falls back Client.DoCache/Client.DoMultiCache to Client.Do/Client.DoMulti\n    //\n    // Optional. The default is false\n    DisableCache bool\n\n    // AlwaysPipelining makes rueidis.Client always pipeline redis commands even if they are not issued concurrently.\n    //\n    // Optional. The default is true\n    AlwaysPipelining bool\n\n    // Reset clears any existing keys in existing Collection\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // CacheTTL TTL\n    //\n    // Optional. Default is time.Minute\n    CacheTTL time.Duration\n}\n')),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Username:            "",\n    Password:            "",\n    ClientName:          "",\n    SelectDB:            0,\n    InitAddress:         []string{"127.0.0.1:6379"},\n    TLSConfig:           nil,\n    CacheSizeEachConn:   rueidis.DefaultCacheBytes,\n    RingScaleEachConn:   rueidis.DefaultRingScale,\n    ReadBufferEachConn:  rueidis.DefaultReadBuffer,\n    WriteBufferEachConn: rueidis.DefaultWriteBuffer,\n    BlockingPoolSize:    rueidis.DefaultPoolSize,\n    PipelineMultiplex:   2,\n    DisableRetry:        false,\n    DisableCache:        false,\n    AlwaysPipelining:    true,\n    Reset:               false,\n    CacheTTL:            time.Minute,\n}\n')))}d.isMDXComponent=!0}}]);