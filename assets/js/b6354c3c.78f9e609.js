"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},39925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"memcache",title:"Memcache"},i=void 0,l={unversionedId:"memcache/memcache",id:"version-pebble_v2.x.x/memcache/memcache",title:"Memcache",description:"Release",source:"@site/storage_versioned_docs/version-pebble_v2.x.x/memcache/README.md",sourceDirName:"memcache",slug:"/memcache/",permalink:"/storage/pebble_v2.x.x/memcache/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/memcache/README.md",tags:[],version:"pebble_v2.x.x",lastUpdatedAt:1713161311,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{id:"memcache",title:"Memcache"},sidebar:"tutorialSidebar",previous:{title:"Etcd",permalink:"/storage/pebble_v2.x.x/etcd/"},next:{title:"Memory",permalink:"/storage/pebble_v2.x.x/memory/"}},s={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=memcache*",alt:"Release"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?label=Tests",alt:"Test"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,n.kt)("p",null,"A Memcache storage driver using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bradfitz/gomemcache"},(0,n.kt)("inlineCode",{parentName:"a"},"bradfitz/gomemcache")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,n.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,n.kt)("h3",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *mc.Client\n")),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Memory is tested on the 2 last ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,n.kt)("p",null,"And then install the memory implementation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/memory/v2\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the storage package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/memcache"\n')),(0,n.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := memcache.New()\n\n// Initialize custom config\nstore := memcache.New(memcache.Config{\n    Servers: "localhost:11211",\n})\n')),(0,n.kt)("h3",{id:"config"},"Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Server list divided by ,\n    // i.e. server1:11211, server2:11212\n    //\n    // Optional. Default is "127.0.0.1:11211"\n    Servers string\n\n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n}\n')),(0,n.kt)("h3",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Servers:      "127.0.0.1:11211",\n}\n')))}u.isMDXComponent=!0}}]);