"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[15967],{83236:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),a=n(28453);const i={id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},s=void 0,o={id:"guide/validation",title:"\ud83d\udd0e Validation",description:"Validator package",source:"@site/versioned_docs/version-v2.x/guide/validation.md",sourceDirName:"guide",slug:"/guide/validation",permalink:"/guide/validation",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1713526866e3,sidebarPosition:5,frontMatter:{id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"},next:{title:"\ud83c\udfa3 Hooks",permalink:"/guide/hooks"}},l={},d=[{value:"Validator package",id:"validator-package",level:2}];function c(t){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"validator-package",children:"Validator package"}),"\n",(0,r.jsxs)(e.p,{children:["Fiber can make ",(0,r.jsx)(e.em,{children:"great"})," use of the validator package to ensure correct validation of data to store."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/go-playground/validator",children:"Official validator Github page (Installation, use, examples..)."})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["You can find the detailed descriptions of the ",(0,r.jsx)(e.em,{children:"validations"})," used in the fields contained on the structs below:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc",children:"Detailed docs"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="Validation Example"',children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"strings"\n\n\t"github.com/go-playground/validator/v10"\n\t"github.com/gofiber/fiber/v2"\n)\n\ntype (\n\tUser struct {\n\t\tName string `validate:"required,min=5,max=20"` // Required field, min 5 char long max 20\n\t\tAge  int    `validate:"required,teener"`       // Required field, and client needs to implement our \'teener\' tag format which we\'ll see later\n\t}\n\n\tErrorResponse struct {\n\t\tError       bool\n\t\tFailedField string\n\t\tTag         string\n\t\tValue       interface{}\n\t}\n\n\tXValidator struct {\n\t\tvalidator *validator.Validate\n\t}\n\n\tGlobalErrorHandlerResp struct {\n\t\tSuccess bool   `json:"success"`\n\t\tMessage string `json:"message"`\n\t}\n)\n\n// This is the validator instance\n// for more information see: https://github.com/go-playground/validator\nvar validate = validator.New()\n\nfunc (v XValidator) Validate(data interface{}) []ErrorResponse {\n\tvalidationErrors := []ErrorResponse{}\n\n\terrs := validate.Struct(data)\n\tif errs != nil {\n\t\tfor _, err := range errs.(validator.ValidationErrors) {\n\t\t\t// In this case data object is actually holding the User struct\n\t\t\tvar elem ErrorResponse\n\n\t\t\telem.FailedField = err.Field() // Export struct field name\n\t\t\telem.Tag = err.Tag()           // Export struct tag\n\t\t\telem.Value = err.Value()       // Export field value\n\t\t\telem.Error = true\n\n\t\t\tvalidationErrors = append(validationErrors, elem)\n\t\t}\n\t}\n\n\treturn validationErrors\n}\n\nfunc main() {\n\tmyValidator := &XValidator{\n\t\tvalidator: validate,\n\t}\n\n\tapp := fiber.New(fiber.Config{\n\t\t// Global custom error handler\n\t\tErrorHandler: func(c *fiber.Ctx, err error) error {\n\t\t\treturn c.Status(fiber.StatusBadRequest).JSON(GlobalErrorHandlerResp{\n\t\t\t\tSuccess: false,\n\t\t\t\tMessage: err.Error(),\n\t\t\t})\n\t\t},\n\t})\n\n\t// Custom struct validation tag format\n\tmyValidator.validator.RegisterValidation("teener", func(fl validator.FieldLevel) bool {\n\t\t// User.Age needs to fit our needs, 12-18 years old.\n\t\treturn fl.Field().Int() >= 12 && fl.Field().Int() <= 18\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\tuser := &User{\n\t\t\tName: c.Query("name"),\n\t\t\tAge:  c.QueryInt("age"),\n\t\t}\n\n\t\t// Validation\n\t\tif errs := myValidator.Validate(user); len(errs) > 0 && errs[0].Error {\n\t\t\terrMsgs := make([]string, 0)\n\n\t\t\tfor _, err := range errs {\n\t\t\t\terrMsgs = append(errMsgs, fmt.Sprintf(\n\t\t\t\t\t"[%s]: \'%v\' | Needs to implement \'%s\'",\n\t\t\t\t\terr.FailedField,\n\t\t\t\t\terr.Value,\n\t\t\t\t\terr.Tag,\n\t\t\t\t))\n\t\t\t}\n\n\t\t\treturn &fiber.Error{\n\t\t\t\tCode:    fiber.ErrBadRequest.Code,\n\t\t\t\tMessage: strings.Join(errMsgs, " and "),\n\t\t\t}\n\t\t}\n\n\t\t// Logic, validated with success\n\t\treturn c.SendString("Hello, World!")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n/**\nOUTPUT\n\n[1]\nRequest:\n\nGET http://127.0.0.1:3000/\n\nResponse:\n\n{"success":false,"message":"[Name]: \'\' | Needs to implement \'required\' and [Age]: \'0\' | Needs to implement \'required\'"}\n\n[2]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=9\n\nResponse:\n{"success":false,"message":"[Age]: \'9\' | Needs to implement \'teener\'"}\n\n[3]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=\n\nResponse:\n{"success":false,"message":"[Age]: \'0\' | Needs to implement \'required\'"}\n\n[4]\nRequest:\n\nGET http://127.0.0.1:3000/?name=efdal&age=18\n\nResponse:\nHello, World!\n\n**/\n\n'})})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);