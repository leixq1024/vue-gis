// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(b,c,d,e,f){b.createRenderer=async function(a){a=await f.processRasterRendererParameters(a);a=e.createColormapRenderer(a.layer.rasterInfo);if(!c.isSome(a))throw new d("raster-colormap-renderer:not-supported","Only single band data with colormap is supported");return{renderer:a}};Object.defineProperty(b,"__esModule",{value:!0})});