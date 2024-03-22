"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[92342],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},43552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const i={id:"validating",title:"\ud83d\udd0e Validating",sidebar_position:4},o=void 0,l={unversionedId:"guide/validating",id:"version-v1.x/guide/validating",title:"\ud83d\udd0e Validating",description:"Validator package",source:"@site/versioned_docs/version-v1.x/guide/validating.md",sourceDirName:"guide",slug:"/guide/validating",permalink:"/v1.x/guide/validating",draft:!1,tags:[],version:"v1.x",lastUpdatedAt:1711106349,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:4,frontMatter:{id:"validating",title:"\ud83d\udd0e Validating",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Templates",permalink:"/v1.x/guide/templates"},next:{title:"\ud83d\udc1b Error Handling",permalink:"/v1.x/guide/error-handling"}},s={},d=[{value:"Validator package",id:"validator-package",level:2}],u={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validator-package"},"Validator package"),(0,a.kt)("p",null,"Fiber can make ",(0,a.kt)("em",{parentName:"p"},"great")," use of the validator package to ensure correct validation of data to store."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-playground/validator"},"Official validator Github page ","(","Installation, use, examples..",")","."))),(0,a.kt)("p",null,"You can find the detailed descriptions of the ",(0,a.kt)("em",{parentName:"p"},"validations")," used in the fields contained on the structs below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc"},"Detailed docs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Validation Example"',title:'"Validation','Example"':!0},'type Job struct{\n    Type          string `validate:"required,min=3,max=32"`\n    Salary        int    `validate:"required,number"`\n}\n\ntype User struct{\n    Name          string  `validate:"required,min=3,max=32"`\n    IsActive      bool    `validate:"required,eq=True|eq=False"`\n    Email         string  `validate:"required,email,min=6,max=32"`\n    Job           Job     `validate:"dive"`\n}\n\ntype ErrorResponse struct {\n    FailedField string\n    Tag         string\n    Value       string\n}\n\nfunc ValidateStruct(user User) []*ErrorResponse {\n    var errors []*ErrorResponse\n    validate = validator.New()\n    err := validate.Struct(user)\n    if err != nil {\n        for _, err := range err.(validator.ValidationErrors) {\n            var element ErrorResponse\n            element.FailedField = err.StructNamespace()\n            element.Tag = err.Tag()\n            element.Value = err.Param()\n            errors = append(errors, &element)\n        }\n    }\n    return errors\n}\n\nfunc AddUser(c *fiber.Ctx) {\n    //Connect to database\n    user := new(User)\n    if err := c.BodyParser(user); err != nil {\n        errors := ValidateStruct()\n    if errors != nil {\n        c.JSON(errors)\n        return\n    }\n    }\n    //Do something else here\n\n  //Return user\n    c.JSON(user)\n}\n\n// Running a test with the following curl commands\n\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"isactive\\":\\"True\\"}" http://localhost:8080/register/user\n\n// Results in \n\n// [{"FailedField":"User.Email","Tag":"required","Value":""},{"FailedField":"User.Job.Salary","Tag":"required","Value":""},{"FailedField":"User.Job.Type","Tag":"required","Value":""}]\u23ce\n')))}p.isMDXComponent=!0}}]);