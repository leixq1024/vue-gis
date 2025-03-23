// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../webgl/mesh/templates/util","../webgl/TurboLine","./BaseBucket"],function(r,B,t,q,v){const u=1/3.8,w=b=>a=>{a.entry0=b._lineVertexBuffer.index;b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.prevNormal.x,a.prevNormal.y,0,-1,a.distance,b._ddValues);a.entry2=b._lineVertexBuffer.index;b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.prevNormal.x,-a.prevNormal.y,0,1,a.distance,b._ddValues);a.exit0=
b._lineVertexBuffer.index;b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.nextNormal.x,a.nextNormal.y,0,-1,a.distance,b._ddValues);a.exit2=b._lineVertexBuffer.index;b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.nextNormal.x,-a.nextNormal.y,0,1,a.distance,b._ddValues)},x=b=>a=>{b._lineIndexBuffer.add(a.leftExit0,a.rightEntry0,a.leftExit2);b._lineIndexBuffer.add(a.rightEntry0,a.rightEntry2,a.leftExit2)},z=b=>a=>{var k=2===b._joinType?b._miterLimitCosine:b._roundLimitCosine,
d=a.isCap&&0!==b._capType,c=!1;.97<a.cosine?(a.exit0=a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.bisector.x/a.cosine,a.bisector.y/a.cosine,0,-1,a.distance,b._ddValues),a.exit2=a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.bisector.x/a.cosine,-a.bisector.y/a.cosine,0,1,a.distance,b._ddValues)):a.cosine<1-.97?(a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,
a.prevNormal.x,a.prevNormal.y,0,-1,a.distance,b._ddValues),a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.prevNormal.x,-a.prevNormal.y,0,1,a.distance,b._ddValues),a.exit0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.nextNormal.x,a.nextNormal.y,0,-1,a.distance,b._ddValues),a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.nextNormal.x,-a.nextNormal.y,0,1,a.distance,
b._ddValues)):a.canSplit?(q.splitVertex(),0<a.sign?(a.splitInner?(a.exit0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.leftInner.x,a.leftInner.y,0,-1,a.distance,b._ddValues),a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.rightInner.x,a.rightInner.y,0,-1,a.distance,b._ddValues)):(a.exit0=a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.bisector.x/a.cosine,a.bisector.y/
a.cosine,0,-1,a.distance,b._ddValues)),a.cosine<k?(c=!a.isCap,a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.prevNormal.x,-a.prevNormal.y,0,1,a.distance,b._ddValues),a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.nextNormal.x,-a.nextNormal.y,0,1,a.distance,b._ddValues)):a.splitOuter?(c=c||a.gapOuter,a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.leftOuter.x,
-a.leftOuter.y,0,1,a.distance,b._ddValues),a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.rightOuter.x,-a.rightOuter.y,0,1,a.distance,b._ddValues)):(a.entry2=a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.bisector.x/a.cosine,-a.bisector.y/a.cosine,0,1,a.distance,b._ddValues))):(a.splitInner?(a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.leftInner.x,
-a.leftInner.y,0,1,a.distance,b._ddValues),a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.rightInner.x,-a.rightInner.y,0,1,a.distance,b._ddValues)):(a.exit2=a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.bisector.x/a.cosine,-a.bisector.y/a.cosine,0,1,a.distance,b._ddValues)),a.cosine<k?(c=!a.isCap,a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.prevNormal.x,
a.prevNormal.y,0,-1,a.distance,b._ddValues),a.exit0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.nextNormal.x,a.nextNormal.y,0,-1,a.distance,b._ddValues)):a.splitOuter?(c=c||a.gapOuter,a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.leftOuter.x,a.leftOuter.y,0,-1,a.distance,b._ddValues),a.exit0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.rightOuter.x,a.rightOuter.y,
0,-1,a.distance,b._ddValues)):(a.exit0=a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.bisector.x/a.cosine,a.bisector.y/a.cosine,0,-1,a.distance,b._ddValues)))):0<a.sign?(a.exit0=a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.bisector.x/a.cosine,a.bisector.y/a.cosine,0,-1,a.distance,b._ddValues),a.cosine<k?(c=!a.isCap,a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,
-a.prevNormal.x,-a.prevNormal.y,0,1,a.distance,b._ddValues),a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.nextNormal.x,-a.nextNormal.y,0,1,a.distance,b._ddValues)):(a.entry2=a.exit2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.bisector.x/a.cosine,-a.bisector.y/a.cosine,0,1,a.distance,b._ddValues))):(a.exit2=a.entry2=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.bisector.x/
a.cosine,-a.bisector.y/a.cosine,0,1,a.distance,b._ddValues),a.cosine<k?(c=!a.isCap,a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.prevNormal.x,a.prevNormal.y,0,-1,a.distance,b._ddValues),a.exit0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.nextNormal.x,a.nextNormal.y,0,-1,a.distance,b._ddValues)):(a.exit0=a.entry0=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.bisector.x/
a.cosine,a.bisector.y/a.cosine,0,-1,a.distance,b._ddValues)));a.canSplit&&(a.splitInner||a.splitOuter)||c||d?(k=a.entry1=a.exit1=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,0,0,0,0,a.distance,b._ddValues)):k=a.entry1=a.exit1=null;if(c&&1!==b._joinType)b._lineIndexBuffer.add(k,0<a.sign?a.exit2:a.entry0,0<a.sign?a.entry2:a.exit0);else if(d&&1===b._capType||c&&1===b._joinType){let m,n;if(a.isCap){c=Math.PI;d=Math.ceil(c/.8);var f=c/d;if(a.isFirstVertex){var e=
a.prevNormal.x;var h=a.prevNormal.y;m=a.entry0;n=a.entry2}else a.isLastVertex&&(e=-a.nextNormal.x,h=-a.nextNormal.y,m=a.exit2,n=a.exit0)}else e=2*Math.acos(a.cosine),d=Math.ceil(e/.8),f=e/d,e=0<a.sign?-a.prevNormal.x:a.nextNormal.x,h=0<a.sign?-a.prevNormal.y:a.nextNormal.y,m=0<a.sign?a.entry2:a.exit0,n=0<a.sign?a.exit2:a.entry0;c=Math.cos(f);f=Math.sin(f);var l=f*e+c*h;e=c*e-f*h;h=l;for(l=0;l<d;++l){var p=g;if(l<d-1)if(a.isCap){const y=a.isFirstVertex?-1:1;var g=b._lineVertexBuffer.index;b._lineVertexBuffer.add(a.currentVertex.x,
a.currentVertex.y,e,h,y,0,a.distance,b._ddValues)}else g=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,e,h,0,a.sign,a.distance,b._ddValues);b._lineIndexBuffer.add(0===l?m:p,k,l===d-1?n:g);p=f*e+c*h;e=c*e-f*h;h=p}}else d&&2===b._capType&&(g=a.isFirstVertex?1:-1,b._hasPattern?(e=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.prevNormal.x-g*a.inbound.x,a.prevNormal.y-g*a.inbound.y,-g,-1,a.distance,b._ddValues),h=b._lineVertexBuffer.index,
b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.prevNormal.x-g*a.inbound.x,-a.prevNormal.y-g*a.inbound.y,-g,1,a.distance,b._ddValues)):(e=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,a.prevNormal.x-g*a.inbound.x,a.prevNormal.y-g*a.inbound.y,0,-1,a.distance,b._ddValues),h=b._lineVertexBuffer.index,b._lineVertexBuffer.add(a.currentVertex.x,a.currentVertex.y,-a.prevNormal.x-g*a.inbound.x,-a.prevNormal.y-g*a.inbound.y,0,1,a.distance,b._ddValues)),
0<g?(b._lineIndexBuffer.add(k,a.entry2,h),b._lineIndexBuffer.add(k,h,e),b._lineIndexBuffer.add(k,e,a.entry0)):(b._lineIndexBuffer.add(k,h,a.exit2),b._lineIndexBuffer.add(k,e,h),b._lineIndexBuffer.add(k,a.exit0,e)))},A=b=>a=>{b._lineIndexBuffer.add(a.leftExit0,a.rightEntry0,null!=a.leftExit1?a.leftExit1:a.leftExit2);b._lineIndexBuffer.add(a.rightEntry0,null!=a.rightEntry1?a.rightEntry1:a.rightEntry2,null!=a.leftExit1?a.leftExit1:a.leftExit2);null!=a.leftExit1&&null!=a.rightEntry1?(b._lineIndexBuffer.add(a.leftExit1,
a.rightEntry1,a.leftExit2),b._lineIndexBuffer.add(a.rightEntry1,a.rightEntry2,a.leftExit2)):null!=a.leftExit1?b._lineIndexBuffer.add(a.leftExit1,a.rightEntry2,a.leftExit2):null!=a.rightEntry1&&b._lineIndexBuffer.add(a.rightEntry1,a.rightEntry2,a.leftExit2)};return function(b){function a(d,c,f,e){c=b.call(this,d,c)||this;c.type=2;c._tessellationOptions={};c.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_hasPattern:null,_ddValues:null,_capType:null,_joinType:null,_miterLimitCosine:null,
_roundLimitCosine:null};if(d.hasDataDrivenLine!==f.isDataDriven())throw Error("incompatible line buffer");c.tessellationProperties._lineVertexBuffer=f;c.tessellationProperties._lineIndexBuffer=e;c.tessellationProperties._hasPattern=d.getPaintValue("line-pattern",c.zoom)||0<d.getPaintValue("line-dasharray",c.zoom).length;c._isThinLine=d.isThinLine;c._tessellationCallbacks=c._isThinLine?{vertex:w(c.tessellationProperties),bridge:x(c.tessellationProperties)}:{vertex:z(c.tessellationProperties),bridge:A(c.tessellationProperties)};
return c}r._inheritsLoose(a,b);var k=a.prototype;k.processFeatures=function(d){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index;this._lineIndexCount=0;const c=this.layer,f=this.zoom,e=c.hasDataDrivenLine;d&&d.setExtent(this.layerExtent);let h=[1,1,1,1],l=1,p=1;for(const g of this._features){!this.tessellationProperties._hasPattern&&c.hasDataDrivenColor&&(h=c.getPaintValue("line-color",f,g));c.hasDataDrivenOpacity&&(l=c.getPaintValue("line-opacity",f,g));c.hasDataDrivenWidth&&
(p=c.getPaintValue("line-width",f,g));let m;if(e&&(m={color:h,opacity:l,size:Math.max(Math.min(p,256),0)},0>=m.size||0>=m.opacity||0>=m.color[3]))continue;this.tessellationProperties._capType=c.getLayoutValue("line-cap",f,g);this.tessellationProperties._joinType=c.getLayoutValue("line-join",f,g);this.tessellationProperties._miterLimitCosine=t.getLimitCosine(c.getLayoutValue("line-miter-limit",f,g));this.tessellationProperties._roundLimitCosine=t.getLimitCosine(c.getLayoutValue("line-round-limit",
f,g));const n=g.getGeometry(d);this._processFeature(n,m)}q.cleanup()};k.serialize=function(){var d=7+this.layerUIDs.length;d+=this.tessellationProperties._lineVertexBuffer.array.length;d+=this.tessellationProperties._lineIndexBuffer.array.length;let c=0;d=new Uint32Array(d);var f=new Int32Array(d.buffer);d[c++]=this.type;d[c++]=this.layerUIDs.length;for(var e=0;e<this.layerUIDs.length;e++)d[c++]=this.layerUIDs[e];d[c++]=this._lineIndexStart;d[c++]=this._lineIndexCount;d[c++]=this.tessellationProperties._lineVertexBuffer.isDataDriven()?
1:0;d[c++]=this.tessellationProperties._lineVertexBuffer.array.length;for(e=0;e<this.tessellationProperties._lineVertexBuffer.array.length;e++)f[c++]=this.tessellationProperties._lineVertexBuffer.array[e];d[c++]=this.tessellationProperties._lineIndexBuffer.array.length;for(f=0;f<this.tessellationProperties._lineIndexBuffer.array.length;f++)d[c++]=this.tessellationProperties._lineIndexBuffer.array[f];return d.buffer};k._processFeature=function(d,c){if(d){var f=d.length;for(let e=0;e<f;e++)this._processGeometry(d[e],
c)}};k._processGeometry=function(d,c){if(!(2>d.length)){for(var f=d[0],e=1,h,l;e<d.length;)h=d[e].x-f.x,l=d[e].y-f.y,1E-6>h*h+l*l?d.splice(e,1):(f=d[e],++e);2>d.length||(f=3*this.tessellationProperties._lineIndexBuffer.index,this._tessellationOptions.trackDistance=this.tessellationProperties._hasPattern,this._tessellationOptions.initialDistance=0,this._tessellationOptions.thin=this._isThinLine,this._tessellationOptions.wrapDistance=65535,this._tessellationOptions.outerBisectorAutoSplitThreshold=u,
this._tessellationOptions.enableOuterBisectorSplit=this.tessellationProperties._hasPattern,this._tessellationOptions.innerBisectorAutoSplitThreshold=u,this._tessellationOptions.enableInnerBisectorSplit=this.tessellationProperties._hasPattern,this.tessellationProperties._ddValues=c,q.tessellate(d,this._tessellationOptions,this._tessellationCallbacks),this._lineIndexCount+=3*this.tessellationProperties._lineIndexBuffer.index-f)}};r._createClass(a,[{key:"lineIndexStart",get:function(){return this._lineIndexStart}},
{key:"lineIndexCount",get:function(){return this._lineIndexCount}}]);return a}(v)});