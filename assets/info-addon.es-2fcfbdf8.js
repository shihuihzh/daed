import{C as i}from"./codemirror.es-f896a2e9.js";import"./codemirror.es2-ad56cfe0.js";i.defineOption("info",!1,(e,t,n)=>{if(n&&n!==i.Init){const o=e.state.info.onMouseOver;i.off(e.getWrapperElement(),"mouseover",o),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(t){const o=e.state.info=v(t);o.onMouseOver=T.bind(null,e),i.on(e.getWrapperElement(),"mouseover",o.onMouseOver)}});function v(e){return{options:e instanceof Function?{render:e}:e===!0?{}:e}}function g(e){const{options:t}=e.state.info;return(t==null?void 0:t.hoverTime)||500}function T(e,t){const n=e.state.info,o=t.target||t.srcElement;if(!(o instanceof HTMLElement)||o.nodeName!=="SPAN"||n.hoverTimeout!==void 0)return;const u=o.getBoundingClientRect(),r=function(){clearTimeout(n.hoverTimeout),n.hoverTimeout=setTimeout(p,f)},s=function(){i.off(document,"mousemove",r),i.off(e.getWrapperElement(),"mouseout",s),clearTimeout(n.hoverTimeout),n.hoverTimeout=void 0},p=function(){i.off(document,"mousemove",r),i.off(e.getWrapperElement(),"mouseout",s),n.hoverTimeout=void 0,h(e,u)},f=g(e);n.hoverTimeout=setTimeout(p,f),i.on(document,"mousemove",r),i.on(e.getWrapperElement(),"mouseout",s)}function h(e,t){const n=e.coordsChar({left:(t.left+t.right)/2,top:(t.top+t.bottom)/2},"window"),o=e.state.info,{options:u}=o,r=u.render||e.getHelper(n,"info");if(r){const s=e.getTokenAt(n,!0);if(s){const p=r(s,u,e,n);p&&M(e,t,p)}}}function M(e,t,n){const o=document.createElement("div");o.className="CodeMirror-info",o.append(n),document.body.append(o);const u=o.getBoundingClientRect(),r=window.getComputedStyle(o),s=u.right-u.left+parseFloat(r.marginLeft)+parseFloat(r.marginRight),p=u.bottom-u.top+parseFloat(r.marginTop)+parseFloat(r.marginBottom);let f=t.bottom;p>window.innerHeight-t.bottom-15&&t.top>window.innerHeight-t.bottom&&(f=t.top-p),f<0&&(f=t.bottom);let m=Math.max(0,window.innerWidth-s-15);m>t.left&&(m=t.left),o.style.opacity="1",o.style.top=f+"px",o.style.left=m+"px";let l;const c=function(){clearTimeout(l)},a=function(){clearTimeout(l),l=setTimeout(d,200)},d=function(){i.off(o,"mouseover",c),i.off(o,"mouseout",a),i.off(e.getWrapperElement(),"mouseout",a),o.style.opacity?(o.style.opacity="0",setTimeout(()=>{o.parentNode&&o.remove()},600)):o.parentNode&&o.remove()};i.on(o,"mouseover",c),i.on(o,"mouseout",a),i.on(e.getWrapperElement(),"mouseout",a)}
