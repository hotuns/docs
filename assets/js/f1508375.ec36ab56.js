"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55892],{32371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(74848),s=i(28453);const o={id:"minio",title:"Minio"},r=void 0,a={id:"minio/minio",title:"Minio",description:"Release",source:"@site/storage_versioned_docs/version-postgres_v3.x.x/minio/README.md",sourceDirName:"minio",slug:"/minio/",permalink:"/storage/postgres_v3.x.x/minio/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/minio/README.md",tags:[],version:"postgres_v3.x.x",lastUpdatedAt:1717658677e3,frontMatter:{id:"minio",title:"Minio"},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/storage/postgres_v3.x.x/memory/"},next:{title:"MongoDB",permalink:"/storage/postgres_v3.x.x/mongodb/"}},l={},c=[{value:"Minio",id:"minio",level:2},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=minio*",alt:"Release"}),"\n",(0,t.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?label=Tests",alt:"Test"}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,t.jsx)(n.h2,{id:"minio",children:"Minio"}),"\n",(0,t.jsxs)(n.p,{children:["A Minio storage driver using ",(0,t.jsx)(n.a,{href:"https://github.com/minio/minio-go",children:"minio/minio-go"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,t.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) CheckBucket() error\nfunc (s *Storage) CreateBucket() error\nfunc (s *Storage) RemoveBucket() error\nfunc (s *Storage) Conn() *minio.Client\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Install the Minio implementation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/minio\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then run minio on Docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -d --restart always -p 9000:9000 -p 9001:9001 --name storage-minio --volume=minio:/var/lib/minio -e MINIO_ROOT_USER='minio-user' -e MINIO_ROOT_PASSWORD='minio-password' minio/minio server --console-address \":9001\" /var/lib/minio\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/minio"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := minio.New()\n\n// Initialize custom config\nstore := minio.New(minio.Config{\n    Bucket:   "fiber-bucket",\n    Endpoint: "localhost:9000",\n    Credentials: Credentials{\n        AccessKeyID:     "minio-user",\n        SecretAccessKey: "minio-password",\n    },\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Config defines the config for storage.\ntype Config struct {\n    // Bucket\n    // Default fiber-bucket\n    Bucket string\n    \n    // Endpoint is a host name or an IP address\n    Endpoint string\n    \n    // Region Set this value to override region cache\n    // Optional\n    Region string\n    \n    // Token Set this value to provide x-amz-security-token (AWS S3 specific)\n    // Optional, Default is false\n    Token string\n    \n    // Secure If set to true, https is used instead of http.\n    // Default is false\n    Secure bool\n    \n    // Reset clears any existing keys in existing Bucket\n    // Optional. Default is false\n    Reset bool\n    \n    // Credentials Minio access key and Minio secret key.\n    // Need to be defined\n    Credentials Credentials\n    \n    // GetObjectOptions Options for GET requests specifying additional options like encryption, If-Match\n    GetObjectOptions minio.GetObjectOptions\n    \n    // PutObjectOptions\n    // Allows user to set optional custom metadata, content headers, encryption keys and number of threads for multipart upload operation.\n    PutObjectOptions minio.PutObjectOptions\n    \n    // ListObjectsOptions Options per to list objects\n    ListObjectsOptions minio.ListObjectsOptions\n    \n    // RemoveObjectOptions Allows user to set options\n    RemoveObjectOptions minio.RemoveObjectOptions\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(n.p,{children:"The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Bucket:              "fiber-bucket",\n    Endpoint:            "",\n    Region:              "",\n    Token:               "",\n    Secure:              false,\n    Reset:               false,\n    Credentials:         Credentials{},\n    GetObjectOptions:    minio.GetObjectOptions{},\n    PutObjectOptions:    minio.PutObjectOptions{},\n    ListObjectsOptions:  minio.ListObjectsOptions{},\n    RemoveObjectOptions: minio.RemoveObjectOptions{},\n}\ntype Credentials struct {\n    AccessKeyID     string\n    SecretAccessKey string\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);