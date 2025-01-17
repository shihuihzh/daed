import{C as i}from"./codemirror.es-f896a2e9.js";import{W as o,a7 as e,a8 as l,a9 as n,aa as t}from"./index-255a24fc.js";import{i as c}from"./mode-indent.es-d007c062.js";import"./codemirror.es2-ad56cfe0.js";i.defineMode("graphql-variables",a=>{const r=o({eatWhitespace:u=>u.eatSpace(),lexRules:b,parseRules:d,editorConfig:{tabSize:a.tabSize}});return{config:a,startState:r.startState,token:r.token,indent:c,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const b={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},d={Document:[e("{"),l("Variable",n(e(","))),e("}")],Variable:[s("variable"),e(":"),"Value"],Value(a){switch(a.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(a.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(a.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[t("Number","number")],StringValue:[t("String","string")],BooleanValue:[t("Keyword","builtin")],NullValue:[t("Keyword","keyword")],ListValue:[e("["),l("Value",n(e(","))),e("]")],ObjectValue:[e("{"),l("ObjectField",n(e(","))),e("}")],ObjectField:[s("attribute"),e(":"),"Value"]};function s(a){return{style:a,match:r=>r.kind==="String",update(r,u){r.name=u.value.slice(1,-1)}}}
