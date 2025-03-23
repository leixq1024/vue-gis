/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{i as e}from"./Logger.js";import{c as t}from"./vec3f64.js";import{b as n,a as o}from"../geometry/Polygon.js";import{projectPointToVector as r}from"../geometry/projection.js";import{I as a}from"./quatf64.js";import{n as s}from"./aaBoundingBox.js";import{m as i}from"./dehydratedFeatures.js";import{c}from"./ColorMaterial.js";import{O as l}from"./Object3D.js";import{d as p,b as m}from"./elevationAlignmentUtils.js";const u=t();function f(t,n,o,i,c,m,f,d,g,h,j){const y=o?o.length:0,v=t.clippingExtent;if(r(n,u,t.elevationProvider.spatialReference),e(v)&&!s(v,u))return null;const x=t.renderCoordsHelper.spatialReference;r(n,u,x);const w=t.localOriginFactory.getOrigin(u),E=new l({castShadow:!1,metadata:{layerUid:g,graphicUid:h,usesVerticalDistanceToGround:!0},idHint:d});for(let e=0;e<y;e++){const t=c?c[e]:a;E.addGeometry(o[e],i[e],t,m,w,j)}return{object:E,sampledElevation:p(E,n,t.elevationProvider,t.renderCoordsHelper,f)}}function d(e,t,n){const o=e.elevationContext,a=n.spatialReference;r(t,u,a),o.centerPointInElevationSR=i(u[0],u[1],t.hasZ?u[2]:0,a)}function g(e){switch(e.type){case"point":return e;case"polygon":case"extent":return c(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=n(t,o(t)/2);return i(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.extent.center}return null}function h(e,t,n,o,r){const a=new Float64Array(3*e.length),s=new Float64Array(a.length);e.forEach(((e,t)=>{a[3*t+0]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));const i=m(a,t,0,s,0,a,0,a.length/3,n,o,r),c=null!=i;return{numVertices:e.length,position:a,mapPosition:s,projectionSuccess:c,sampledElevation:i}}function j(e,t,n,o,r){return e[0]=t,e[1]=n,e[2]=o,e[3]=r,e}function y(e,t){const n=Math.sin(t),o=Math.cos(t);return e[0]=o,e[1]=n,e[2]=-n,e[3]=o,e}function v(){return[1,0,0,1]}export{v as a,f as c,d as e,y as f,h as g,g as p,j as s};
