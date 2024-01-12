"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[34796],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=o.createContext({}),g=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=g(t.components);return o.createElement(l.Provider,{value:e},t.children)},m="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,c=n(t,["components","mdxType","originalType","parentName"]),m=g(r),h=a,f=m["".concat(l,".").concat(h)]||m[h]||b[h]||s;return r?o.createElement(f,i(i({ref:e},c),{},{components:r})):o.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,i=new Array(s);i[0]=h;var n={};for(var l in e)hasOwnProperty.call(e,l)&&(n[l]=e[l]);n.originalType=t,n[m]="string"==typeof t?t:a,i[1]=n;for(var g=2;g<s;g++)i[g]=r[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83678:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>n,toc:()=>g});var o=r(87462),a=(r(67294),r(3905));const s={title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},i=void 0,n={unversionedId:"README",id:"version-arangodb_v1.x.x/README",title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",source:"@site/storage_versioned_docs/version-arangodb_v1.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/storage/arangodb_v1.x.x/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/README.md",tags:[],version:"arangodb_v1.x.x",lastUpdatedAt:1705052378,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"ArangoDB",permalink:"/storage/arangodb_v1.x.x/arangodb/"}},l={},g=[{value:"\ud83d\udcd1 Storage Implementations",id:"-storage-implementations",level:2}],c={toc:g},m="wrapper";function b(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,a.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only"}),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://pkg.go.dev/github.com/gofiber/storage?tab=doc"},(0,a.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})),(0,a.kt)("a",{href:"https://goreportcard.com/report/github.com/gofiber/storage"},(0,a.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})),(0,a.kt)("a",{href:"https://gofiber.io/discord"},(0,a.kt)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"}))),(0,a.kt)("p",null,"Premade storage drivers that implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/blob/main/storage.go"},(0,a.kt)("inlineCode",{parentName:"a"},"Storage"))," interface, designed to be used with various ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/middleware"},"Fiber middlewares"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Storage interface for communicating with different database/key-value\n// providers. Visit https://github.com/gofiber/storage for more info.\ntype Storage interface {\n    // Get gets the value for the given key.\n    // `nil, nil` is returned when the key does not exist\n    Get(key string) ([]byte, error)\n\n    // Set stores the given value for the given key along\n    // with an expiration value, 0 means no expiration.\n    // Empty key or value will be ignored without an error.\n    Set(key string, val []byte, exp time.Duration) error\n\n    // Delete deletes the value for the given key.\n    // It returns no error if the storage does not contain the key,\n    Delete(key string) error\n\n    // Reset resets the storage and delete all keys.\n    Reset() error\n\n    // Close closes the storage and will stop any running garbage\n    // collectors and open connections.\n    Close() error\n}\n")),(0,a.kt)("h2",{id:"-storage-implementations"},"\ud83d\udcd1 Storage Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/arangodb/"},"ArangoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/azureblob/"},"AzureBlob")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/badger/"},"Badger")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./bbolt"},"Bbolt")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/couchbase/"},"Couchbase")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/dynamodb/"},"DynamoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/etcd/"},"Etcd")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/memcache/"},"Memcache")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/memory/"},"Memory")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/mongodb/"},"MongoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/mssql/"},"MSSQL")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/mysql/"},"MySQL")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/pebble/"},"Pebble")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/postgres/"},"Postgres")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/redis/"},"Redis")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/s3/"},"S3")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/arangodb_v1.x.x/sqlite3/"},"SQLite3")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}b.isMDXComponent=!0}}]);