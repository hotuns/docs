"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[23065],{55896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),s=n(28453);const o={id:"dynamodb",title:"DynamoDB"},a=void 0,r={id:"dynamodb/dynamodb",title:"DynamoDB",description:"Release",source:"@site/storage_versioned_docs/version-rueidis_v1.x.x/dynamodb/README.md",sourceDirName:"dynamodb",slug:"/dynamodb/",permalink:"/storage/rueidis_v1.x.x/dynamodb/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/dynamodb/README.md",tags:[],version:"rueidis_v1.x.x",lastUpdatedAt:1718889343e3,frontMatter:{id:"dynamodb",title:"DynamoDB"},sidebar:"tutorialSidebar",previous:{title:"Couchbase",permalink:"/storage/rueidis_v1.x.x/couchbase/"},next:{title:"Etcd",permalink:"/storage/rueidis_v1.x.x/etcd/"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=dynamodb*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["A DynamoDB storage driver using ",(0,i.jsx)(t.a,{href:"https://github.com/aws/aws-sdk-go-v2",children:"aws/aws-sdk-go-v2"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: ",(0,i.jsx)(t.a,{href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials",children:"specifying credentials"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config Config) Storage\n\n\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *awsdynamodb.Client\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["DynamoDB is tested on the 2 last ",(0,i.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then install the dynamodb implementation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/dynamodb/v2\n"})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/dynamodb/v2"\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Initialize dynamodb\nstore := dynamodb.New(dynamodb.Config{\n\t\n})\n"})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'type Config struct {\n\t// Region of the DynamoDB service you want to use.\n\t// Valid values: https://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region.\n\t// E.g. "us-west-2".\n\t// Optional (read from shared config file or environment variable if not set).\n\t// Environment variable: "AWS_REGION".\n\tRegion string\n\n\t// Name of the DynamoDB table.\n\t// Optional ("fiber_storage" by default).\n\tTable string\n\n\t// CustomEndpoint allows you to set a custom DynamoDB service endpoint.\n\t// This is especially useful if you\'re running a "DynamoDB local" Docker container for local testing.\n\t// Typical value for the Docker container: "http://localhost:8000".\n\t// See https://hub.docker.com/r/amazon/dynamodb-local/.\n\t// Optional ("" by default)\n\tEndpoint string\n\n\t// Credentials overrides AWS access key and AWS secret access key. Not recommended.\n\t//\n\t// Optional. Default is Credentials{}\n\tCredentials Credentials\n\n\t// The maximum number of times requests that encounter retryable failures should be attempted.\n\t//\n\t// Optional. Default is 3\n\tMaxAttempts int\n\n\t// Reset clears any existing keys in existing Bucket\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// ReadCapacityUnits of the table.\n\t// Only required when the table doesn\'t exist yet and is created by gokv.\n\t// Optional (5 by default, which is the same default value as when creating a table in the web console)\n\t// 25 RCUs are included in the free tier (across all tables).\n\t// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n\t// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n\tReadCapacityUnits int64\n\n\t// ReadCapacityUnits of the table.\n\t// Only required when the table doesn\'t exist yet and is created by gokv.\n\t// Optional (5 by default, which is the same default value as when creating a table in the web console)\n\t// 25 RCUs are included in the free tier (across all tables).\n\t// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n\t// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n\tWriteCapacityUnits int64\n\n\t// If the table doesn\'t exist yet, gokv creates it.\n\t// If WaitForTableCreation is true, gokv will block until the table is created, with a timeout of 15 seconds.\n\t// If the table still doesn\'t exist after 15 seconds, an error is returned.\n\t// If WaitForTableCreation is false, gokv returns the client immediately.\n\t// In the latter case you need to make sure that you don\'t read from or write to the table before it\'s created,\n\t// because otherwise you will get ResourceNotFoundException errors.\n\t// Optional (true by default).\n\tWaitForTableCreation *bool\n}\n\ntype Credentials struct {\n\tAccessKey       string\n\tSecretAccessKey string\n}\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tTable:                "fiber_storage",\n\tCredentials:          Credentials{},\n\tMaxAttempts:          3,\n\tReset:                false,\n\tReadCapacityUnits:    5,\n\tWriteCapacityUnits:   5,\n\tWaitForTableCreation: aws.Bool(true),\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);