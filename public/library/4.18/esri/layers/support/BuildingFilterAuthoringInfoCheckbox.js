// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Collection ./BuildingFilterAuthoringInfo ./BuildingFilterAuthoringInfoBlock".split(" "),function(k,b,e,l,q,r,f,t,m,u,v,w,n,a,p){var c;e=n.ofType(p);
a=c=function(g){function d(){var h=g.apply(this,arguments)||this;h.type="checkbox";return h}k._inheritsLoose(d,g);d.prototype.clone=function(){return new c({filterBlocks:l.clone(this.filterBlocks)})};return d}(a);b.__decorate([f.property({type:["checkbox"]})],a.prototype,"type",void 0);b.__decorate([f.property({type:e,json:{write:!0}})],a.prototype,"filterBlocks",void 0);return a=c=b.__decorate([m.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],a)});