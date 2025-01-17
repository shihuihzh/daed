import{C as Q}from"./codemirror.es-f896a2e9.js";import{X as $,Y as I,Z as q,_ as v,a6 as C}from"./index-255a24fc.js";import"./codemirror.es2-ad56cfe0.js";function M(e){l=e,N=e.length,i=c=k=-1,s(),E();const n=j();return d("EOF"),n}let l,N,i,c,k,r,u;function j(){const e=i,n=[];if(d("{"),!w("}")){do n.push(_());while(w(","));d("}")}return{kind:"Object",start:e,end:k,members:n}}function _(){const e=i,n=u==="String"?B():null;d("String"),d(":");const t=L();return{kind:"Member",start:e,end:k,key:n,value:t}}function D(){const e=i,n=[];if(d("["),!w("]")){do n.push(L());while(w(","));d("]")}return{kind:"Array",start:e,end:k,values:n}}function L(){switch(u){case"[":return D();case"{":return j();case"String":case"Number":case"Boolean":case"Null":const e=B();return E(),e}d("Value")}function B(){return{kind:u,start:i,end:c,value:JSON.parse(l.slice(i,c))}}function d(e){if(u===e){E();return}let n;if(u==="EOF")n="[end of file]";else if(c-i>1)n="`"+l.slice(i,c)+"`";else{const t=l.slice(i).match(/^.+?\b/);n="`"+(t?t[0]:l[i])+"`"}throw h(`Expected ${e} but found ${n}.`)}class V extends Error{constructor(n,t){super(n),this.position=t}}function h(e){return new V(e,{start:i,end:c})}function w(e){if(u===e)return E(),!0}function s(){return c<N&&(c++,r=c===N?0:l.charCodeAt(c)),r}function E(){for(k=c;r===9||r===10||r===13||r===32;)s();if(r===0){u="EOF";return}switch(i=c,r){case 34:return u="String",H();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return u="Number",J();case 102:if(l.slice(i,i+5)!=="false")break;c+=4,s(),u="Boolean";return;case 110:if(l.slice(i,i+4)!=="null")break;c+=3,s(),u="Null";return;case 116:if(l.slice(i,i+4)!=="true")break;c+=3,s(),u="Boolean";return}u=l[i],s()}function H(){for(s();r!==34&&r>31;)if(r===92)switch(r=s(),r){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:s();break;case 117:s(),g(),g(),g(),g();break;default:throw h("Bad character escape sequence.")}else{if(c===N)throw h("Unterminated string.");s()}if(r===34){s();return}throw h("Unterminated string.")}function g(){if(r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102)return s();throw h("Expected hexadecimal digit.")}function J(){r===45&&s(),r===48?s():y(),r===46&&(s(),y()),(r===69||r===101)&&(r=s(),(r===43||r===45)&&s(),y())}function y(){if(r<48||r>57)throw h("Expected decimal digit.");do s();while(r>=48&&r<=57)}Q.registerHelper("lint","graphql-variables",(e,n,t)=>{if(!e)return[];let f;try{f=M(e)}catch(o){if(o instanceof V)return[O(t,o.position,o.message)];throw o}const{variableToType:a}=n;return a?U(t,a,f):[]});function U(e,n,t){var f;const a=[];for(const o of t.members)if(o){const p=(f=o.key)===null||f===void 0?void 0:f.value,m=n[p];if(m)for(const[x,G]of b(m,o.value))a.push(O(e,x,G));else a.push(O(e,o.key,`Variable "$${p}" does not appear in any GraphQL query.`))}return a}function b(e,n){if(!e||!n)return[];if(e instanceof $)return n.kind==="Null"?[[n,`Type "${e}" is non-nullable and cannot be null.`]]:b(e.ofType,n);if(n.kind==="Null")return[];if(e instanceof I){const t=e.ofType;if(n.kind==="Array"){const f=n.values||[];return F(f,a=>b(t,a))}return b(t,n)}if(e instanceof q){if(n.kind!=="Object")return[[n,`Type "${e}" must be an Object.`]];const t=Object.create(null),f=F(n.members,a=>{var o;const p=(o=a==null?void 0:a.key)===null||o===void 0?void 0:o.value;t[p]=!0;const m=e.getFields()[p];if(!m)return[[a.key,`Type "${e}" does not have a field "${p}".`]];const x=m?m.type:void 0;return b(x,a.value)});for(const a of Object.keys(e.getFields())){const o=e.getFields()[a];!t[a]&&o.type instanceof $&&!o.defaultValue&&f.push([n,`Object of type "${e}" is missing required field "${a}".`])}return f}return e.name==="Boolean"&&n.kind!=="Boolean"||e.name==="String"&&n.kind!=="String"||e.name==="ID"&&n.kind!=="Number"&&n.kind!=="String"||e.name==="Float"&&n.kind!=="Number"||e.name==="Int"&&(n.kind!=="Number"||(n.value|0)!==n.value)?[[n,`Expected value of type "${e}".`]]:(e instanceof v||e instanceof C)&&(n.kind!=="String"&&n.kind!=="Number"&&n.kind!=="Boolean"&&n.kind!=="Null"||P(e.parseValue(n.value)))?[[n,`Expected value of type "${e}".`]]:[]}function O(e,n,t){return{message:t,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function P(e){return e==null||e!==e}function F(e,n){return Array.prototype.concat.apply([],e.map(n))}
