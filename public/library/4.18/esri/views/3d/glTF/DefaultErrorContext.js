// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Logger","../../../core/Error"],function(e,d,f){const h=d.getLogger("esri.views.3d.glTF");d=function(){function g(){}var b=g.prototype;b.error=function(a){throw new f("gltf-loader-error",a);};b.errorUnsupported=function(a){throw new f("gltf-loader-unsupported-feature",a);};b.errorUnsupportedIf=function(a,c){a&&this.errorUnsupported(c)};b.assert=function(a,c){a||this.error(c)};b.warn=function(a){h.warn(a)};b.warnUnsupported=function(a){this.warn("[Unsupported Feature] "+
a)};b.warnUnsupportedIf=function(a,c){a&&this.warnUnsupported(c)};return g}();e.DefaultErrorContext=d;Object.defineProperty(e,"__esModule",{value:!0})});