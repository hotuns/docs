"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[57629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={id:"minio",title:"Minio"},a=void 0,s={unversionedId:"minio/minio",id:"version-minio_v0.x.x/minio/minio",title:"Minio",description:"Release",source:"@site/storage_versioned_docs/version-minio_v0.x.x/minio/README.md",sourceDirName:"minio",slug:"/minio/",permalink:"/storage/minio_v0.x.x/minio/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/minio/README.md",tags:[],version:"minio_v0.x.x",lastUpdatedAt:1709538714,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"minio",title:"Minio"},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/storage/minio_v0.x.x/memory/"},next:{title:"MongoDB",permalink:"/storage/minio_v0.x.x/mongodb/"}},l={},c=[{value:"Minio",id:"minio",level:2},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=minio*",alt:"Release"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?label=Tests",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,o.kt)("h2",{id:"minio"},"Minio"),(0,o.kt)("p",null,"A Minio storage driver using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minio/minio-go"},"minio/minio-go"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) CheckBucket() error\nfunc (s *Storage) CreateBucket() error\nfunc (s *Storage) RemoveBucket() error\nfunc (s *Storage) Conn() *minio.Client\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the Minio implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/minio\n")),(0,o.kt)("p",null,"And then run minio on Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart always -p 9000:9000 -p 9001:9001 --name storage-minio --volume=minio:/var/lib/minio -e MINIO_ROOT_USER='minio-user' -e MINIO_ROOT_PASSWORD='minio-password' minio/minio server --console-address \":9001\" /var/lib/minio\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the storage package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/minio"\n')),(0,o.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := minio.New()\n\n// Initialize custom config\nstore := minio.New(minio.Config{\n    Bucket:   "fiber-bucket",\n    Endpoint: "localhost:9000",\n    Credentials: Credentials{\n        AccessKeyID:     "minio-user",\n        SecretAccessKey: "minio-password",\n    },\n})\n')),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for storage.\ntype Config struct {\n    // Bucket\n    // Default fiber-bucket\n    Bucket string\n    \n    // Endpoint is a host name or an IP address\n    Endpoint string\n    \n    // Region Set this value to override region cache\n    // Optional\n    Region string\n    \n    // Token Set this value to provide x-amz-security-token (AWS S3 specific)\n    // Optional, Default is false\n    Token string\n    \n    // Secure If set to true, https is used instead of http.\n    // Default is false\n    Secure bool\n    \n    // Reset clears any existing keys in existing Bucket\n    // Optional. Default is false\n    Reset bool\n    \n    // Credentials Minio access key and Minio secret key.\n    // Need to be defined\n    Credentials Credentials\n    \n    // GetObjectOptions Options for GET requests specifying additional options like encryption, If-Match\n    GetObjectOptions minio.GetObjectOptions\n    \n    // PutObjectOptions\n    // Allows user to set optional custom metadata, content headers, encryption keys and number of threads for multipart upload operation.\n    PutObjectOptions minio.PutObjectOptions\n    \n    // ListObjectsOptions Options per to list objects\n    ListObjectsOptions minio.ListObjectsOptions\n    \n    // RemoveObjectOptions Allows user to set options\n    RemoveObjectOptions minio.RemoveObjectOptions\n}\n")),(0,o.kt)("h3",{id:"default-config"},"Default Config"),(0,o.kt)("p",null,"The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Bucket:              "fiber-bucket",\n    Endpoint:            "",\n    Region:              "",\n    Token:               "",\n    Secure:              false,\n    Reset:               false,\n    Credentials:         Credentials{},\n    GetObjectOptions:    minio.GetObjectOptions{},\n    PutObjectOptions:    minio.PutObjectOptions{},\n    ListObjectsOptions:  minio.ListObjectsOptions{},\n    RemoveObjectOptions: minio.RemoveObjectOptions{},\n}\ntype Credentials struct {\n    AccessKeyID     string\n    SecretAccessKey string\n}\n')))}m.isMDXComponent=!0}}]);