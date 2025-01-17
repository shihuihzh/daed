import{r as F,g as w}from"./codemirror.es2-ad56cfe0.js";function G(A,_){for(var u=0;u<_.length;u++){const C=_[u];if(typeof C!="string"&&!Array.isArray(C)){for(const s in C)if(s!=="default"&&!(s in A)){const r=Object.getOwnPropertyDescriptor(C,s);r&&Object.defineProperty(A,s,r.get?r:{enumerable:!0,get:()=>C[s]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var H={exports:{}};(function(A,_){(function(u){u(F())})(function(u){var C={},s=/[^\s\u00a0]/,r=u.Pos,z=u.cmpPos;function D(t){var l=t.search(s);return l==-1?0:l}u.commands.toggleComment=function(t){t.toggleComment()},u.defineExtension("toggleComment",function(t){t||(t=C);for(var l=this,n=1/0,e=this.listSelections(),f=null,m=e.length-1;m>=0;m--){var a=e[m].from(),i=e[m].to();a.line>=n||(i.line>=n&&(i=r(n,0)),n=a.line,f==null?l.uncomment(a,i,t)?f="un":(l.lineComment(a,i,t),f="line"):f=="un"?l.uncomment(a,i,t):l.lineComment(a,i,t))}});function B(t,l,n){return/\bstring\b/.test(t.getTokenTypeAt(r(l.line,0)))&&!/^[\'\"\`]/.test(n)}function M(t,l){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(l)}u.defineExtension("lineComment",function(t,l,n){n||(n=C);var e=this,f=M(e,t),m=e.getLine(t.line);if(!(m==null||B(e,t,m))){var a=n.lineComment||f.lineComment;if(!a){(n.blockCommentStart||f.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,l,n));return}var i=Math.min(l.ch!=0||l.line==t.line?l.line+1:l.line,e.lastLine()+1),k=n.padding==null?" ":n.padding,g=n.commentBlankLines||t.line==l.line;e.operation(function(){if(n.indent){for(var d=null,c=t.line;c<i;++c){var v=e.getLine(c),h=v.slice(0,D(v));(d==null||d.length>h.length)&&(d=h)}for(var c=t.line;c<i;++c){var v=e.getLine(c),o=d.length;!g&&!s.test(v)||(v.slice(0,o)!=d&&(o=D(v)),e.replaceRange(d+a+k,r(c,0),r(c,o)))}}else for(var c=t.line;c<i;++c)(g||s.test(e.getLine(c)))&&e.replaceRange(a+k,r(c,0))})}}),u.defineExtension("blockComment",function(t,l,n){n||(n=C);var e=this,f=M(e,t),m=n.blockCommentStart||f.blockCommentStart,a=n.blockCommentEnd||f.blockCommentEnd;if(!m||!a){(n.lineComment||f.lineComment)&&n.fullLines!=!1&&e.lineComment(t,l,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(r(t.line,0)))){var i=Math.min(l.line,e.lastLine());i!=t.line&&l.ch==0&&s.test(e.getLine(i))&&--i;var k=n.padding==null?" ":n.padding;t.line>i||e.operation(function(){if(n.fullLines!=!1){var g=s.test(e.getLine(i));e.replaceRange(k+a,r(i)),e.replaceRange(m+k,r(t.line,0));var d=n.blockCommentLead||f.blockCommentLead;if(d!=null)for(var c=t.line+1;c<=i;++c)(c!=i||g)&&e.replaceRange(d+k,r(c,0))}else{var v=z(e.getCursor("to"),l)==0,h=!e.somethingSelected();e.replaceRange(a,l),v&&e.setSelection(h?l:e.getCursor("from"),l),e.replaceRange(m,t)}})}}),u.defineExtension("uncomment",function(t,l,n){n||(n=C);var e=this,f=M(e,t),m=Math.min(l.ch!=0||l.line==t.line?l.line:l.line-1,e.lastLine()),a=Math.min(t.line,m),i=n.lineComment||f.lineComment,k=[],g=n.padding==null?" ":n.padding,d;e:{if(!i)break e;for(var c=a;c<=m;++c){var v=e.getLine(c),h=v.indexOf(i);if(h>-1&&!/comment/.test(e.getTokenTypeAt(r(c,h+1)))&&(h=-1),h==-1&&s.test(v)||h>-1&&s.test(v.slice(0,h)))break e;k.push(v)}if(e.operation(function(){for(var b=a;b<=m;++b){var x=k[b-a],p=x.indexOf(i),L=p+i.length;p<0||(x.slice(L,L+g.length)==g&&(L+=g.length),d=!0,e.replaceRange("",r(b,p),r(b,L)))}}),d)return!0}var o=n.blockCommentStart||f.blockCommentStart,S=n.blockCommentEnd||f.blockCommentEnd;if(!o||!S)return!1;var P=n.blockCommentLead||f.blockCommentLead,T=e.getLine(a),E=T.indexOf(o);if(E==-1)return!1;var j=m==a?T:e.getLine(m),O=j.indexOf(S,m==a?E+o.length:0),N=r(a,E+1),W=r(m,O+1);if(O==-1||!/comment/.test(e.getTokenTypeAt(N))||!/comment/.test(e.getTokenTypeAt(W))||e.getRange(N,W,`
`).indexOf(S)>-1)return!1;var y=T.lastIndexOf(o,t.ch),R=y==-1?-1:T.slice(0,t.ch).indexOf(S,y+o.length);if(y!=-1&&R!=-1&&R+S.length!=t.ch)return!1;R=j.indexOf(S,l.ch);var $=j.slice(l.ch).lastIndexOf(o,R-l.ch);return y=R==-1||$==-1?-1:l.ch+$,R!=-1&&y!=-1&&y!=l.ch?!1:(e.operation(function(){e.replaceRange("",r(m,O-(g&&j.slice(O-g.length,O)==g?g.length:0)),r(m,O+S.length));var b=E+o.length;if(g&&T.slice(b,b+g.length)==g&&(b+=g.length),e.replaceRange("",r(a,E),r(a,b)),P)for(var x=a+1;x<=m;++x){var p=e.getLine(x),L=p.indexOf(P);if(!(L==-1||s.test(p.slice(0,L)))){var I=L+P.length;g&&p.slice(I,I+g.length)==g&&(I+=g.length),e.replaceRange("",r(x,L),r(x,I))}}}),!0)})})})();var q=H.exports;const J=w(q),Q=G({__proto__:null,default:J},[q]);export{Q as c};
