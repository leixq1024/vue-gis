/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import{fixJson as r,clone as e}from"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{a as s}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import{J as p}from"../../chunks/jsonMap.js";import{w as n}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";const l=new p({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let a=class extends s{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(o,r){r.drawingTool=l.toJSON(o)}writePrototype(o,t){t.prototype=r(e(o),!0)}writeThumbnail(o,t){t.thumbnail=r(e(o))}};o([t({json:{write:!0}})],a.prototype,"name",void 0),o([t({json:{write:!0}})],a.prototype,"description",void 0),o([t({json:{read:l.read,write:l.write}})],a.prototype,"drawingTool",void 0),o([n("drawingTool")],a.prototype,"writeDrawingTool",null),o([t({json:{write:!0}})],a.prototype,"prototype",void 0),o([n("prototype")],a.prototype,"writePrototype",null),o([t({json:{write:!0}})],a.prototype,"thumbnail",void 0),o([n("thumbnail")],a.prototype,"writeThumbnail",null),a=o([i("esri.layers.support.FeatureTemplate")],a);var u=a;export default u;
