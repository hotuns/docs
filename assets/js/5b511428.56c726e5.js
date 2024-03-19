"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[63167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"etcd",title:"Etcd"},i=void 0,l={unversionedId:"etcd/etcd",id:"version-couchbase_v2.x.x/etcd/etcd",title:"Etcd",description:"Release",source:"@site/storage_versioned_docs/version-couchbase_v2.x.x/etcd/README.md",sourceDirName:"etcd",slug:"/etcd/",permalink:"/storage/couchbase_v2.x.x/etcd/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/etcd/README.md",tags:[],version:"couchbase_v2.x.x",lastUpdatedAt:1710833590,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{id:"etcd",title:"Etcd"},sidebar:"tutorialSidebar",previous:{title:"DynamoDB",permalink:"/storage/couchbase_v2.x.x/dynamodb/"},next:{title:"Memcache",permalink:"/storage/couchbase_v2.x.x/memcache/"}},s={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=etcd*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?label=Tests",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,r.kt)("p",null,"A Etcd storage driver using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},(0,r.kt)("inlineCode",{parentName:"a"},"etcd-io/etcd")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) *Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *clientv3.Client\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Etcd is tested on the 2 last ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,r.kt)("p",null,"And then install the etcd implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/etcd/v2\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/etcd/v2"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := etcd.New()\n\n// Initialize custom config\nstore := etcd.New(Config{\n    Endpoints: []string{"localhost:2379"},\n})\n\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    // Endpoints is a list of URLs.\n    Endpoints   []string\n    // DialTimeout is the timeout for failing to establish a connection.\n    DialTimeout time.Duration\n    // Username is a username for authentication.\n    Username    string\n    // Password is a password for authentication.\n    Password    string\n    // TLS holds the client secure credentials, if any.\n    TLS *tls.Config\n}\n")),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Endpoints:   []string{"localhost:2379"},\n    DialTimeout: 2 * time.Second,\n    Username:    "",\n    Password:    "",\n    TLS:         nil,\n}\n')))}g.isMDXComponent=!0}}]);