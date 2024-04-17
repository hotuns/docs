"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[90513,87554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var f=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162),i=n(36074);const s={id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},p=void 0,u={unversionedId:"guide/routing",id:"version-v2.x/guide/routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",source:"@site/versioned_docs/version-v2.x/guide/routing.md",sourceDirName:"guide",slug:"/guide/routing",permalink:"/v2.x/guide/routing",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1713347896,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:1,frontMatter:{id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/v2.x/category/guide"},next:{title:"\ud83c\udfad Grouping",permalink:"/v2.x/guide/grouping"}},c={},d=[{value:"Handlers",id:"handlers",level:2},{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Middleware",id:"middleware",level:2},{value:"Constraints on Adding Routes Dynamically",id:"constraints-on-adding-routes-dynamically",level:3},{value:"Grouping",id:"grouping",level:2}],m={toc:d},h="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"handlers"},"Handlers"),(0,r.kt)(i.default,{mdxType:"RoutingHandler"}),(0,r.kt)("h2",{id:"paths"},"Paths"),(0,r.kt)("p",null,"Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,r.kt)("strong",{parentName:"p"},"strings")," or ",(0,r.kt)("strong",{parentName:"p"},"string patterns"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples of route paths based on strings")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) error {\n      return c.SendString("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) error {\n    return c.SendString("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) error {\n    return c.SendString("random.txt")\n})\n')),(0,r.kt)("p",null,"As with the expressJs framework, the order of the route declaration plays a role.\nWhen a request is received, the routes are checked in the order in which they are declared."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"So please be careful to write routes with variable parameters after the routes that contain fixed parts, so that these variable parts do not match instead and unexpected behavior occurs.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Route parameters are dynamic elements in the route, which are ",(0,r.kt)("strong",{parentName:"p"},"named")," or ",(0,r.kt)("strong",{parentName:"p"},"not named segments"),". This segments that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,r.kt)("a",{parentName:"p",href:"https://fiber.wiki/context#params"},"Params")," function, with the name of the route parameter specified in the path as their respective keys or for unnamed parameters the character","(","*",", +",")"," and the counter of this."),(0,r.kt)("p",null,"The characters :, +, and ","*"," are characters that introduce a parameter."),(0,r.kt)("p",null,"Greedy parameters are indicated by wildcard","(","*",")"," or plus","(","+",")"," signs."),(0,r.kt)("p",null,'The routing also offers the possibility to use optional parameters, for the named parameters these are marked with a final "?", unlike the plus sign which is not optional, you can use the wildcard character for a parameter range which is optional and greedy.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of define routes with route parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s\\n", c.Params("name"))\n    fmt.Fprintf(c, "%s\\n", c.Params("title"))\n    return nil\n})\n// Plus - greedy - not optional\napp.Get("/user/+", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("+"))\n})\n\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("name"))\n})\n\n// Wildcard - greedy - optional\napp.Get("/user/*", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("*"))\n})\n\n// This route path will match requests to "/v1/some/resource/name:customVerb", since the parameter character is escaped\napp.Get(`/v1/some/resource/name\\:customVerb`, func(c *fiber.Ctx) error {\n    return c.SendString("Hello, Community")\n})\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the hyphen ","(",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")"," and the dot ","(",(0,r.kt)("inlineCode",{parentName:"p"},"."),")"," are interpreted literally, they can be used along with route parameters for useful purposes.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All special parameter characters can also be escaped with ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\\\"')," and lose their value, so you can use them in the route if you want, like in the custom methods of the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/apis/design/custom_methods"},"google api design guide"),". It's recommended to use backticks ",(0,r.kt)("inlineCode",{parentName:"p"},"`")," because in go's regex documentation, they always use backticks to make sure it is unambiguous and the escape character doesn't interfere with regex patterns in an unexpected way.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s.%s\\n", c.Params("genus"), c.Params("species"))\n    return nil // prunus.persica\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s-%s\\n", c.Params("from"), c.Params("to"))\n    return nil // LAX-SFO\n})\n')),(0,r.kt)("p",null,"Our intelligent router recognizes that the introductory parameter characters should be part of the request route in this case and can process them as such."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/shop/product/color:blue/size:xs\napp.Get("/shop/product/color::color/size::size", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s:%s\\n", c.Params("color"), c.Params("size"))\n    return nil // blue:xs\n})\n')),(0,r.kt)("p",null,"In addition, several parameters in a row and several unnamed parameter characters in the route, such as the wildcard or plus character, are possible, which greatly expands the possibilities of the router for the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET /@v1\n// Params: "sign" -> "@", "param" -> "v1"\napp.Get("/:sign:param", handler)\n\n// GET /api-v1\n// Params: "name" -> "v1" \napp.Get("/api-:name", handler)\n\n// GET /customer/v1/cart/proxy\n// Params: "*1" -> "customer/", "*2" -> "/cart"\napp.Get("/*v1*/proxy", handler)\n\n// GET /v1/brand/4/shop/blue/xs\n// Params: "*1" -> "brand/4", "*2" -> "blue/xs"\napp.Get("/v1/*/shop/*", handler)\n')),(0,r.kt)("p",null,"We have adapted the routing strongly to the express routing, but currently without the possibility of the regular expressions, because they are quite slow. The possibilities can be tested with version 0.1.7 ","(","express 4",")"," in the online ",(0,r.kt)("a",{parentName:"p",href:"http://forbeslindesay.github.io/express-route-tester/"},"Express route tester"),"."),(0,r.kt)("h3",{id:"constraints"},"Constraints"),(0,r.kt)("p",null,"Route constraints execute when a match has occurred to the incoming URL and the URL path is tokenized into route values by parameters. The feature was intorduced in ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.37.0")," and inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-6.0#route-constraints"},".NET Core"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Constraints aren't validation for parameters. If constraints aren't valid for a parameter value, Fiber returns ",(0,r.kt)("strong",{parentName:"p"},"404 handler"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constraint"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},":id<int",">"),(0,r.kt)("td",{parentName:"tr",align:null},"123456789, -123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},":active<bool",">"),(0,r.kt)("td",{parentName:"tr",align:null},"true,false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guid"),(0,r.kt)("td",{parentName:"tr",align:null},":id<guid",">"),(0,r.kt)("td",{parentName:"tr",align:null},"CD2C1638-1638-72D5-1638-DEADBEEF1638")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},":weight<float",">"),(0,r.kt)("td",{parentName:"tr",align:null},"1.234, -1,001.01e8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLen(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":username<minLen(4)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Test (must be at least 4 characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLen(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":filename<maxLen(8)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"MyFile (must be no more than 8 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"len(length)"),(0,r.kt)("td",{parentName:"tr",align:null},":filename<len(12)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"somefile.txt (exactly 12 characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<min(18)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"19 (Integer value must be at least 18)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<max(120)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"91 (Integer value must be no more than 120)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range(min,max)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<range(18,120)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"91 (Integer value must be at least 18 but no more than 120)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},":name<alpha",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Rick (String must consist of one or more alphabetical characters, a-z and case-insensitive)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},":dob<datetime(2006","\\","\\","-01","\\","\\","-02)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"2005-11-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex(expression)"),(0,r.kt)("td",{parentName:"tr",align:null},":date<regex(","\\","d{4}-","\\","d{2}-","\\","d{2})",">"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-08-27 (Must match regular expression)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"single-constraint",label:"Single Constraint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:test<min(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/12\n// 12\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n'))),(0,r.kt)(l.Z,{value:"multiple-constraints",label:"Multiple Constraints",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," for multiple constraints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:test<min(100);maxLen(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/120000\n// Cannot GET /120000\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n\n// curl -X GET http://localhost:3000/250\n// 250\n'))),(0,r.kt)(l.Z,{value:"regex-constraint",label:"Regex Constraint",mdxType:"TabItem"},(0,r.kt)("p",null,"Fiber precompiles regex query when to register routes. So there're no performance overhead for regex constraint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get(`/:date<regex(\\d{4}-\\d{2}-\\d{2})>`, func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("date"))\n})\n\n// curl -X GET http://localhost:3000/125\n// Cannot GET /125\n\n// curl -X GET http://localhost:3000/test\n// Cannot GET /test\n\n// curl -X GET http://localhost:3000/2022-08-27\n// 2022-08-27\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," before routing-specific characters when to use datetime constraint (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},";"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"("),", ",(0,r.kt)("inlineCode",{parentName:"p"},")"),"), to avoid wrong parsing.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional Parameter Example")),(0,r.kt)("p",null,"You can impose constraints on optional parameters as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:test<int>?", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n// curl -X GET http://localhost:3000/42\n// 42\n// curl -X GET http://localhost:3000/\n//\n// curl -X GET http://localhost:3000/7.0\n// Cannot GET /7.0\n')),(0,r.kt)("h2",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"Functions that are designed to make changes to the request or response are called ",(0,r.kt)("strong",{parentName:"p"},"middleware functions"),". The ",(0,r.kt)("a",{parentName:"p",href:"/v2.x/api/ctx#next"},"Next")," is a ",(0,r.kt)("strong",{parentName:"p"},"Fiber")," router function, when called, executes the ",(0,r.kt)("strong",{parentName:"p"},"next")," function that ",(0,r.kt)("strong",{parentName:"p"},"matches")," the current route."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of a middleware function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(func(c *fiber.Ctx) error {\n  // Set a custom header on all responses:\n  c.Set("X-Custom-Header", "Hello, World")\n\n  // Go to next middleware:\n  return c.Next()\n})\n\napp.Get("/", func(c *fiber.Ctx) error {\n  return c.SendString("Hello, World!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Use")," method path is a ",(0,r.kt)("strong",{parentName:"p"},"mount"),", or ",(0,r.kt)("strong",{parentName:"p"},"prefix")," path, and limits middleware to only apply to any paths requested that begin with it."),(0,r.kt)("h3",{id:"constraints-on-adding-routes-dynamically"},"Constraints on Adding Routes Dynamically"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Adding routes dynamically after the application has started is not supported due to design and performance considerations. Make sure to define all your routes before the application starts.")),(0,r.kt)("h2",{id:"grouping"},"Grouping"),(0,r.kt)("p",null,"If you have many endpoints, you can organize your routes using ",(0,r.kt)("inlineCode",{parentName:"p"},"Group"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("p",null,"More information about this in our ",(0,r.kt)("a",{parentName:"p",href:"/v2.x/guide/grouping"},"Grouping Guide")))}g.isMDXComponent=!0},36074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"route-handlers",title:"Route Handlers"},l=void 0,i={unversionedId:"partials/routing/route-handlers",id:"version-v2.x/partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/versioned_docs/version-v2.x/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/v2.x/partials/routing/route-handlers",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1713347896,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"route-handlers",title:"Route Handlers"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Registers a route bound to a specific ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signatures"',title:'"Signatures"'},"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use")," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"/john")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"/john/doe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/johnnnnn")," etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Use(args ...interface{}) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n')))}d.isMDXComponent=!0}}]);