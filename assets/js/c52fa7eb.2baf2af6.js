"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[26570],{54795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),i=t(11470),s=t(19365);const l={id:"examples",title:"\ud83c\udf73 Examples",description:"Client usage examples.",sidebar_position:5},o=void 0,c={id:"client/examples",title:"\ud83c\udf73 Examples",description:"Client usage examples.",source:"@site/docs/core/client/examples.md",sourceDirName:"client",slug:"/client/examples",permalink:"/next/client/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/client/examples.md",tags:[],version:"current",lastUpdatedAt:1718889343e3,sidebarPosition:5,frontMatter:{id:"examples",title:"\ud83c\udf73 Examples",description:"Client usage examples.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfa3 Hooks",permalink:"/next/client/hooks"},next:{title:"\ud83d\udcd6 Guide",permalink:"/next/category/-guide"}},u={},d=[{value:"Basic Auth",id:"basic-auth",level:2},{value:"TLS",id:"tls",level:2},{value:"Cookiejar",id:"cookiejar",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Response 2",id:"response-2",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"basic-auth",children:"Basic Auth"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"client",label:"Client",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/base64"\n\t"fmt"\n\n\t"github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n\tcc := client.New()\n\n\tout := base64.StdEncoding.EncodeToString([]byte("john:doe"))\n\tresp, err := cc.Get("http://localhost:3000", client.Config{\n\t\tHeader: map[string]string{\n\t\t\t"Authorization": "Basic " + out,\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Print(string(resp.Body()))\n}\n'})})}),(0,r.jsx)(s.A,{value:"server",label:"Server",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/basicauth"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\tapp.Use(\n\t\tbasicauth.New(basicauth.Config{\n\t\t\tUsers: map[string]string{\n\t\t\t\t"john": "doe",\n\t\t\t},\n\t\t}),\n\t)\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Hello, World!")\n\t})\n\n\tapp.Listen(":3000")\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"tls",children:"TLS"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"client",label:"Client",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/tls"\n\t"crypto/x509"\n\t"fmt"\n\t"os"\n\n\t"github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n\tcc := client.New()\n\n\tcertPool, err := x509.SystemCertPool()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tcert, err := os.ReadFile("ssl.cert")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tcertPool.AppendCertsFromPEM(cert)\n\tcc.SetTLSConfig(&tls.Config{\n\t\tRootCAs: certPool,\n\t})\n\n\tresp, err := cc.Get("https://localhost:3000")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Print(string(resp.Body()))\n}\n'})})}),(0,r.jsx)(s.A,{value:"server",label:"Server",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/", func(c fiber.Ctx) error {\n\t\treturn c.SendString("Hello, World!")\n\t})\n\n\terr := app.Listen(":3000", fiber.ListenConfig{\n\t\tCertFile:    "ssl.cert",\n\t\tCertKeyFile: "ssl.key",\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"cookiejar",children:"Cookiejar"}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tjar := client.AcquireCookieJar()\n\tdefer client.ReleaseCookieJar(jar)\n\n\tcc := client.New()\n\tcc.SetCookieJar(jar)\n\n\tjar.SetKeyValueBytes("httpbin.org", []byte("john"), []byte("doe"))\n\n\tresp, err := cc.Get("https://httpbin.org/cookies")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Println(string(resp.Body()))\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tjar := client.AcquireCookieJar()\n\tdefer client.ReleaseCookieJar(jar)\n\n\tcc := client.New()\n\tcc.SetCookieJar(jar)\n\n\t_, err := cc.Get("https://httpbin.org/cookies/set/john/doe")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\turi := fasthttp.AcquireURI()\n\tdefer fasthttp.ReleaseURI(uri)\n\n\turi.SetHost("httpbin.org")\n\turi.SetPath("/cookies")\n\tfmt.Println(jar.Get(uri))\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"[john=doe; path=/]\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-2",children:"Response 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n\tjar := client.AcquireCookieJar()\n\tdefer client.ReleaseCookieJar(jar)\n\n\tcc := client.New()\n\tcc.SetCookieJar(jar)\n\n\t_, err := cc.Get("https://httpbin.org/cookies/set/john/doe")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tresp, err := cc.Get("https://httpbin.org/cookies")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Println(resp.String())\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);