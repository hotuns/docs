"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50940],{71951:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>n,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=t(74848),o=t(28453);const i={title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},a=void 0,l={id:"README",title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",source:"@site/storage_versioned_docs/version-arangodb_v2.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/storage/arangodb_v2.x.x/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/README.md",tags:[],version:"arangodb_v2.x.x",lastUpdatedAt:1718889343e3,sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"ArangoDB",permalink:"/storage/arangodb_v2.x.x/arangodb/"}},n={},g=[{value:"\ud83d\udcd1 Storage Implementations",id:"-storage-implementations",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{align:"center",children:[(0,r.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,r.jsx)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://pkg.go.dev/github.com/gofiber/storage?tab=doc",children:(0,r.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})}),(0,r.jsx)("a",{href:"https://goreportcard.com/report/github.com/gofiber/storage",children:(0,r.jsx)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})}),(0,r.jsx)("a",{href:"https://gofiber.io/discord",children:(0,r.jsx)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"})})]}),"\n",(0,r.jsxs)(s.p,{children:["Premade storage drivers that implement the ",(0,r.jsx)(s.a,{href:"https://github.com/gofiber/storage/blob/main/storage.go",children:(0,r.jsx)(s.code,{children:"Storage"})})," interface, designed to be used with various ",(0,r.jsx)(s.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware",children:"Fiber middlewares"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:"// Storage interface for communicating with different database/key-value\n// providers. Visit https://github.com/gofiber/storage for more info.\ntype Storage interface {\n\t// Get gets the value for the given key.\n\t// `nil, nil` is returned when the key does not exist\n\tGet(key string) ([]byte, error)\n\n\t// Set stores the given value for the given key along\n\t// with an expiration value, 0 means no expiration.\n\t// Empty key or value will be ignored without an error.\n\tSet(key string, val []byte, exp time.Duration) error\n\n\t// Delete deletes the value for the given key.\n\t// It returns no error if the storage does not contain the key,\n\tDelete(key string) error\n\n\t// Reset resets the storage and delete all keys.\n\tReset() error\n\n\t// Close closes the storage and will stop any running garbage\n\t// collectors and open connections.\n\tClose() error\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"-storage-implementations",children:"\ud83d\udcd1 Storage Implementations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/arangodb/",children:"ArangoDB"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/azureblob/",children:"AzureBlob"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/badger/",children:"Badger"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"./bbolt",children:"Bbolt"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/coherence/",children:"Coherence"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Coherence%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-coherence.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/couchbase/",children:"Couchbase"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/dynamodb/",children:"DynamoDB"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/etcd/",children:"Etcd"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/memcache/",children:"Memcache"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/memory/",children:"Memory"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/minio/",children:"Minio"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Minio%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/mongodb/",children:"MongoDB"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/mssql/",children:"MSSQL"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/mysql/",children:"MySQL"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/nats/",children:"NATS"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests%20Nats%20Driver%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/pebble/",children:"Pebble"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/postgres/",children:"Postgres"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/redis/",children:"Redis"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/rueidis/",children:"Rueidis"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+rueidis%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/s3/",children:"S3"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/scylladb/",children:"ScyllaDB"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+scylladb%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/storage/arangodb_v2.x.x/sqlite3/",children:"SQLite3"})," ",(0,r.jsxs)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22",children:[" ",(0,r.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "]})]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const o={},i=r.createContext(o);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);