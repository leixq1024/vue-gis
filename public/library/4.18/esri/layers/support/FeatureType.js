// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ./CodedValueDomain ./InheritedDomain ./RangeDomain ./domains ./FeatureTemplate".split(" "),
function(p,e,b,q,y,z,g,A,l,r,m,B,C,D,t,u,v,w,E,x){b=function(n){function k(a){a=n.call(this,a)||this;a.id=null;a.name=null;a.domains=null;a.templates=null;return a}p._inheritsLoose(k,n);var h=k.prototype;h.readDomains=function(a){const d={};for(const c in a)if(a.hasOwnProperty(c)){const f=a[c];switch(f.type){case "range":d[c]=w.fromJSON(f);break;case "codedValue":d[c]=u.fromJSON(f);break;case "inherited":d[c]=v.fromJSON(f)}}return d};h.writeDomains=function(a,d){const c={};for(const f in a)a.hasOwnProperty(f)&&
(c[f]=a[f]&&a[f].toJSON());q.fixJson(c);d.domains=c};h.readTemplates=function(a){return a&&a.map(d=>new x(d))};h.writeTemplates=function(a,d){d.templates=a&&a.map(c=>c.toJSON())};return k}(t.JSONSupport);e.__decorate([g.property({json:{write:!0}})],b.prototype,"id",void 0);e.__decorate([g.property({json:{write:!0}})],b.prototype,"name",void 0);e.__decorate([g.property({json:{write:!0}})],b.prototype,"domains",void 0);e.__decorate([l.reader("domains")],b.prototype,"readDomains",null);e.__decorate([m.writer("domains")],
b.prototype,"writeDomains",null);e.__decorate([g.property({json:{write:!0}})],b.prototype,"templates",void 0);e.__decorate([l.reader("templates")],b.prototype,"readTemplates",null);e.__decorate([m.writer("templates")],b.prototype,"writeTemplates",null);return b=e.__decorate([r.subclass("esri.layers.support.FeatureType")],b)});