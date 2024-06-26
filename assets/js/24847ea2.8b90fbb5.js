"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[21648],{68271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),o=t(28453),a=t(11470),s=t(19365);const i={id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:6},u=void 0,l={id:"guide/hooks",title:"\ud83c\udfa3 Hooks",description:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:",source:"@site/versioned_docs/version-v2.x/guide/hooks.md",sourceDirName:"guide",slug:"/guide/hooks",permalink:"/guide/hooks",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719410638e3,sidebarPosition:6,frontMatter:{id:"hooks",title:"\ud83c\udfa3 Hooks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validation",permalink:"/guide/validation"},next:{title:"\u26a1 Make Fiber Faster",permalink:"/guide/faster-fiber"}},c={},d=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onroute",children:"OnRoute"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onname",children:"OnName"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ongroup",children:"OnGroup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ongroupname",children:"OnGroupName"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onlisten",children:"OnListen"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onfork",children:"OnFork"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onshutdown",children:"OnShutdown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#onmount",children:"OnMount"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func(ListenData) error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = func() error\ntype OnMountHandler = func(*App) error\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onroute",children:"OnRoute"}),"\n",(0,r.jsxs)(n.p,{children:["OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,r.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnRoute(handler ...OnRouteHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onname",children:"OnName"}),"\n",(0,r.jsxs)(n.p,{children:["OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,r.jsx)(n.strong,{children:"route"})," parameter."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"OnName only works with naming routes, not groups."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnName(handler ...OnNameHandler)\n"})}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(s.A,{value:"onname-example",label:"OnName Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\treturn c.SendString(c.Route().Name)\n\t}).Name("index")\n\n\tapp.Hooks().OnName(func(r fiber.Route) error {\n\t\tfmt.Print("Name: " + r.Name + ", ")\n\n\t\treturn nil\n\t})\n\n\tapp.Hooks().OnName(func(r fiber.Route) error {\n\t\tfmt.Print("Method: " + r.Method + "\\n")\n\n\t\treturn nil\n\t})\n\n\tapp.Get("/add/user", func(c *fiber.Ctx) error {\n\t\treturn c.SendString(c.Route().Name)\n\t}).Name("addUser")\n\n\tapp.Delete("/destroy/user", func(c *fiber.Ctx) error {\n\t\treturn c.SendString(c.Route().Name)\n\t}).Name("destroyUser")\n\n\tapp.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"ongroup",children:"OnGroup"}),"\n",(0,r.jsxs)(n.p,{children:["OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,r.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroup(handler ...OnGroupHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ongroupname",children:"OnGroupName"}),"\n",(0,r.jsxs)(n.p,{children:["OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,r.jsx)(n.strong,{children:"group"})," parameter."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"OnGroupName only works with naming groups, not routes."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnGroupName(handler ...OnGroupNameHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onlisten",children:"OnListen"}),"\n",(0,r.jsx)(n.p,{children:"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnListen(handler ...OnListenHandler)\n"})}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(s.A,{value:"onlisten-example",label:"OnListen Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app := fiber.New(fiber.Config{\n  DisableStartupMessage: true,\n})\n\napp.Hooks().OnListen(func(listenData fiber.ListenData) error {\n  if fiber.IsChild() {\n\t  return nil\n  }\n  scheme := "http"\n  if data.TLS {\n    scheme = "https"\n  }\n  log.Println(scheme + "://" + listenData.Host + ":" + listenData.Port)\n  return nil\n})\n\napp.Listen(":5000")\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"onfork",children:"OnFork"}),"\n",(0,r.jsx)(n.p,{children:"OnFork is a hook to execute user functions on Fork."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnFork(handler ...OnForkHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onshutdown",children:"OnShutdown"}),"\n",(0,r.jsx)(n.p,{children:"OnShutdown is a hook to execute user functions after Shutdown."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnShutdown(handler ...OnShutdownHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onmount",children:"OnMount"}),"\n",(0,r.jsx)(n.p,{children:"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (h *Hooks) OnMount(handler ...OnMountHandler) \n"})}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(s.A,{value:"onmount-example",label:"OnMount Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n\tapp := New()\n\tapp.Get("/", testSimpleHandler).Name("x")\n\n\tsubApp := New()\n\tsubApp.Get("/test", testSimpleHandler)\n\n\tsubApp.Hooks().OnMount(func(parent *fiber.App) error {\n\t\tfmt.Print("Mount path of parent app: "+parent.MountPath())\n\t\t// ...\n\n\t\treturn nil\n\t})\n\n\tapp.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n'})})})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app and you mount it; paths of routes and groups will start with mount prefix."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),o=t(34164),a=t(23104),s=t(56347),i=t(205),u=t(57485),l=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=m({queryString:t,groupId:o}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),x=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&u(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),o=i[t].value;o!==r&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function O(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,b.jsx)(O,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);