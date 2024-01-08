"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[92331],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(87462),a=t(67294),o=t(86010),l=t(12466),i=t(16550),s=t(91980),u=t(67392),c=t(50012);function d(e){return function(e){var r;return(null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function h(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[s,u]=m({queryString:t,groupId:n}),[d,h]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),b=(()=>{const e=s??d;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:r,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const r=e.currentTarget,t=c.indexOf(r),n=u[t].value;n!==i&&(d(r),s(n))},f=e=>{var r;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},u.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===r})}),t??r)})))}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function k(e){const r=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,n.Z)({},e,r)),a.createElement(y,(0,n.Z)({},e,r)))}function E(e){const r=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(r)},e))}},35943:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(74866),l=t(85162);const i={id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},s=void 0,u={unversionedId:"guide/error-handling",id:"version-v1.x/guide/error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",source:"@site/versioned_docs/version-v1.x/guide/error-handling.md",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/v1.x/guide/error-handling",draft:!1,tags:[],version:"v1.x",lastUpdatedAt:1704726600,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:5,frontMatter:{id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validating",permalink:"/v1.x/guide/validating"},next:{title:"Misc",permalink:"/v1.x/category/misc"}},c={},d=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}],p={toc:d},f="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"catching-errors"},"Catching Errors"),(0,a.kt)("p",null,"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) {\n    err := c.SendFile("file-does-not-exist")\n\n    if err != nil {\n        c.Next(err) // Pass error to Fiber\n    }\n})\n')))),(0,a.kt)("p",null,"Fiber does not handle ",(0,a.kt)("a",{parentName:"p",href:"https://blog.golang.org/defer-panic-and-recover"},"panics")," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Recover")," middleware below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/fiber/middleware"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(middleware.Recover())\n\n    app.Get("/", func(c *fiber.Ctx) {\n        panic("This panic is catched by the ErrorHandler")\n    })\n\n    log.Fatal(app.Listen(3000))\n}\n')),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.Next()")," accepts an ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," interface, you could use Fiber's custom error struct to pass an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"status code")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber.NewError()"),". It's optional to pass a message; if this is left empty, it will default to the status code message ","(",(0,a.kt)("inlineCode",{parentName:"p"},"404")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"Not Found"),")","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Get("/", func(c *fiber.Ctx) {\n    err := fiber.NewError(503)\n    c.Next(err) // 503 Service Unavailable\n\n    err := fiber.NewError(404, "Sorry, not found!")\n    c.Next(err) // 404 Sorry, not found!\n})\n')),(0,a.kt)("h2",{id:"default-error-handler"},"Default Error Handler"),(0,a.kt)("p",null,"Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,a.kt)("strong",{parentName:"p"},"500 Internal Server Error"),". If error is of type ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/gofiber/fiber#Error"},"fiber","*","Error"),", response is sent with the provided status code and message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"// Default error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Check if it's an fiber.Error type\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Return HTTP response\n    ctx.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n    ctx.Status(code).SendString(err.Error())\n}\n")),(0,a.kt)("h2",{id:"custom-error-handler"},"Custom Error Handler"),(0,a.kt)("p",null,"A custom error handler can be set via ",(0,a.kt)("inlineCode",{parentName:"p"},"app.Settings.ErrorHandler")),(0,a.kt)("p",null,"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."),(0,a.kt)("p",null,"The following example shows how to display error pages for different types of errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app := fiber.New()\n\n// Custom error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom statuscode if it\'s an fiber.*Error\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Send custom error page\n    err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n    if err != nil {\n        ctx.Status(500).SendString("Internal Server Error")\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Special thanks to the ",(0,a.kt)("a",{parentName:"p",href:"https://echo.labstack.com/"},"Echo")," & ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," framework for inspiration regarding error handling.")))}m.isMDXComponent=!0}}]);