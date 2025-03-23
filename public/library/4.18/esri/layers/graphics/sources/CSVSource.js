// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../geometry/Extent ../../../geometry ../../../core/Loadable ../../../core/workers/workers ../../../tasks/support/FeatureSet".split(" "),
function(l,d,m,n,c,w,e,x,p,y,z,A,q,r,B,t,u,v){c=function(k){function h(a){a=k.call(this,a)||this;a.type="csv";return a}l._inheritsLoose(h,k);var f=h.prototype;f.load=function(a){a=n.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return q.resolve(this)};f.destroy=function(){var a;null==(a=this._connection)?void 0:a.close();this._connection=null};f.openPorts=function(){return this.load().then(()=>this._connection.openPorts())};f.queryFeatures=function(a,b={}){return this.load(b).then(()=>
this._connection.invoke("queryFeatures",a?a.toJSON():null,b)).then(g=>v.fromJSON(g))};f.queryFeaturesJSON=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,b))};f.queryFeatureCount=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatureCount",a?a.toJSON():null,b))};f.queryObjectIds=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,b))};f.queryExtent=function(a,b=
{}){return this.load(b).then(()=>this._connection.invoke("queryExtent",a?a.toJSON():null,b)).then(g=>({count:g.count,extent:r.fromJSON(g.extent)}))};f._startWorker=async function(a){this._connection=await u.open("CSVSourceWorker",{strategy:m("feature-layers-workers")?"dedicated":"local",signal:a});a=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(b=>b.toJSON()),latitudeField:this.latitudeField,longitudeField:this.longitudeField,
spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:a});this.locationInfo=a.locationInfo;this.sourceJSON=a.layerDefinition;this.columnDelimiter=a.columnDelimiter};return h}(t);d.__decorate([e.property()],c.prototype,"type",void 0);d.__decorate([e.property()],c.prototype,"url",void 0);d.__decorate([e.property()],c.prototype,"delimiter",void 0);d.__decorate([e.property()],c.prototype,"fields",void 0);d.__decorate([e.property()],
c.prototype,"latitudeField",void 0);d.__decorate([e.property()],c.prototype,"longitudeField",void 0);d.__decorate([e.property()],c.prototype,"spatialReference",void 0);d.__decorate([e.property()],c.prototype,"timeInfo",void 0);d.__decorate([e.property()],c.prototype,"locationInfo",void 0);d.__decorate([e.property()],c.prototype,"sourceJSON",void 0);d.__decorate([e.property()],c.prototype,"columnDelimiter",void 0);return c=d.__decorate([p.subclass("esri.layers.graphics.sources.CSVSource")],c)});