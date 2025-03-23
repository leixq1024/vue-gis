// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(r,p){let t;t=Array.prototype.find?(h,e)=>h.find(e):(h,e)=>h.filter(e)[0];const w=(h,e)=>{let d=h;e.forEach(k=>{d=d&&d.children?t(d.children,f=>f.domNode===k):void 0});return d},x=(h,e,d)=>{const k=function(f){d("domEvent",f);var c=e();{var g=f.currentTarget;var n=c.domNode;const m=[];for(;g!==n;)m.push(g),g=g.parentNode;g=m}g.reverse();c=w(c.getLastRender(),g);h.scheduleRender();let l;c&&(l=c.properties[`on${f.type}`].apply(c.properties.bind||this,arguments));d("domEventProcessed",
f);return l};return()=>k};r.createProjector=h=>{let e;const d=p.applyDefaultProjectionOptions(h),k=d.performanceLogger;let f=!0,c,g=!1;const n=[],l=[],m=(b,a,u)=>{let q;d.eventHandlerInterceptor=x(e,()=>q,k);q=b(a,u(),d);n.push(q);l.push(u)},v=()=>{c=void 0;if(f){f=!1;k("renderStart",void 0);for(let b=0;b<n.length;b++){const a=l[b]();k("rendered",void 0);n[b].update(a);k("patched",void 0)}k("renderDone",void 0);f=!0}};return e={renderNow:v,scheduleRender:()=>{c||g||(c=requestAnimationFrame(v))},stop:()=>
{c&&(cancelAnimationFrame(c),c=void 0);g=!0},resume:()=>{g=!1;f=!0;e.scheduleRender()},append:(b,a)=>{m(p.dom.append,b,a)},insertBefore:(b,a)=>{m(p.dom.insertBefore,b,a)},merge:(b,a)=>{m(p.dom.merge,b,a)},replace:(b,a)=>{m(p.dom.replace,b,a)},detach:b=>{for(let a=0;a<l.length;a++)if(l[a]===b)return l.splice(a,1),n.splice(a,1)[0];throw Error("renderFunction was not found");}}};Object.defineProperty(r,"__esModule",{value:!0})});