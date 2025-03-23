// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Collection ../../intl/locale ../../intl ../../core/Handles ../../core/watchUtils ./support/ActiveLayerInfo".split(" "),function(t,m,h,E,F,n,G,
y,H,I,J,z,u,A,K,B,l,v){const w=u.ofType(v),C="esri.layers.BuildingSceneLayer esri.layers.CSVLayer esri.layers.FeatureLayer esri.layers.GeoJSONLayer esri.layers.GeoRSSLayer esri.layers.GroupLayer esri.layers.HeatmapLayer esri.layers.ImageryLayer esri.layers.ImageryTileLayer esri.layers.MapImageLayer esri.layers.OGCFeatureLayer esri.layers.PointCloudLayer esri.layers.StreamLayer esri.layers.SceneLayer esri.layers.TileLayer esri.layers.WMSLayer esri.layers.WMTSLayer esri.layers.WCSLayer".split(" "),
D=["view.basemapView.baseLayerViews","view.groundView.layerViews","view.layerViews","view.basemapView.referenceLayerViews"];h=function(x){function r(a){a=x.call(this,a)||this;a._handles=new B;a._layerViewByLayerId={};a._layerInfosByLayerViewId={};a._activeLayerInfosByLayerViewId={};a._activeLayerInfosWithNoParent=new u;a.activeLayerInfos=new w;a.basemapLegendVisible=!1;a.groundLegendVisible=!1;a.keepCacheOnDestroy=!1;a.respectLayerVisibility=!0;a.layerInfos=[];a.view=null;return a}t._inheritsLoose(r,
x);var e=r.prototype;e.initialize=function(){this._handles.add(l.init(this,"view",this._viewHandles),"view");this._handles.add(A.onLocaleChange(()=>this._refresh()))};e.destroy=function(){this._destroyViewActiveLayerInfos();this._handles.destroy();this.view=this._handles=null};e._viewHandles=function(){this._handles.remove("state");this.view&&this._handles.add(l.init(this,"state",this._stateHandles),"state")};e._stateHandles=function(){this._resetAll();"ready"===this.state&&this._watchPropertiesAndAllLayerViews()};
e._resetAll=function(){this._handles.remove(["all-layer-views","legend-properties"]);this._destroyViewActiveLayerInfos();this.activeLayerInfos.removeAll()};e._destroyViewActiveLayerInfos=function(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)};e._destroyViewActiveLayerInfo=function(a){this._handles.remove(a);const b=this._activeLayerInfosByLayerViewId[a];delete this._activeLayerInfosByLayerViewId[a];b&&b.parent&&b.parent.children.remove(b)};e._watchPropertiesAndAllLayerViews=
function(){const {allLayerViews:a}=this.view;a.length&&this._refresh();this._handles.add(a.on("change",this._allLayerViewsChangeHandle.bind(this)),"all-layer-views");this._handles.add(l.watch(this,"layerInfos, basemapLegendVisible, groundLegendVisible",this._propertiesChangeHandle.bind(this)),"legend-properties")};e._allLayerViewsChangeHandle=function(a){a.removed.forEach(b=>this._destroyViewActiveLayerInfo(b.uid));this._refresh()};e._propertiesChangeHandle=function(){this._destroyViewActiveLayerInfos();
this._refresh()};e._refresh=function(){this._layerInfosByLayerViewId={};this.activeLayerInfos.removeAll();this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this);this._sortActiveLayerInfos(this.activeLayerInfos)};e._sortActiveLayerInfos=function(a){if(!(2>a.length)){var b=[];a.forEach(f=>{if(!f.parent){var c=f.layer.parent;(c=(c=c&&"uid"in c&&this._layerViewByLayerId[c.uid])&&this._activeLayerInfosByLayerViewId[c.uid])&&
-1!==a.indexOf(c)&&(b.push(f),f.parent=c,c.children.add(f),this._sortActiveLayerInfos(c.children))}});a.removeMany(b);var d={};this.view.allLayerViews.forEach((f,c)=>d[f.layer.uid]=c);a.sort((f,c)=>(d[c.layer.uid]||0)-(d[f.layer.uid]||0))}};e._generateLayerViews=function(){const a=[];D.filter(this._filterLayerViews,this).map(this.get,this).filter(b=>null!=b).forEach(this._collectLayerViews("layerViews",a));return a};e._filterLayerViews=function(a){const b=!this.groundLegendVisible&&"view.groundView.layerViews"===
a;return!(!this.basemapLegendVisible&&("view.basemapView.baseLayerViews"===a||"view.basemapView.referenceLayerViews"===a))&&!b};e._collectLayerViews=function(a,b){const d=f=>{f&&f.forEach(c=>{b.push(c);d(c[a])});return b};return d};e._filterLayerViewsByLayerInfos=function(a){const b=this.layerInfos;return b&&b.length?b.some(d=>this._hasLayerInfo(d,a)):!0};e._hasLayerInfo=function(a,b){const d=this._isLayerUIDMatching(a.layer,b.layer.uid);d&&(this._layerInfosByLayerViewId[b.uid]=a);return d};e._isLayerUIDMatching=
function(a,b){return a&&(a.uid===b||this._hasLayerUID(a.layers,b))};e._hasLayerUID=function(a,b){return a&&a.some(d=>this._isLayerUIDMatching(d,b))};e._isLayerViewSupported=function(a){return-1<C.indexOf(a.layer.declaredClass)?(this._layerViewByLayerId[a.layer.uid]=a,!0):!1};e._generateActiveLayerInfo=function(a){this._isLayerActive(a)?this._buildActiveLayerInfo(a):(this._handles.remove(a.uid),this._handles.add(l.watch(a,"legendEnabled, layer.legendEnabled",()=>this._layerActiveHandle(a)),a.uid))};
e._layerActiveHandle=function(a){this._isLayerActive(a)&&(this._handles.remove(a.uid),this._buildActiveLayerInfo(a))};e._isLayerActive=function(a){return this.respectLayerVisibility?a.legendEnabled&&a.get("layer.legendEnabled"):!0};e._buildActiveLayerInfo=function(a){var b,d=a.layer;const f=a.uid;var c=this._layerInfosByLayerViewId[f];let g=this._activeLayerInfosByLayerViewId[f];g||(g=new v({layer:d,layerView:a,title:c&&void 0!==c.title&&c.layer.uid===d.uid?c.title:d.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,
keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:c&&c.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[f]=g);c=d.parent&&"uid"in d.parent&&this._layerViewByLayerId[null==(b=d.parent)?void 0:b.uid];g.parent=this._activeLayerInfosByLayerViewId[null==c?void 0:c.uid];if(!this._handles.has(f)){b=l.watch(d,"title",q=>this._titleHandle(q,g));c=l.watch(d,"renderer?, opacity, pointSymbol?, lineSymbol?, polygonSymbol?",()=>this._constructLegendElements(g));const p=l.whenTrue(this.view,"stationary",
()=>this._scaleHandle(g)),k=l.watch(a,"_effectiveRenderer",()=>this._constructLegendElements(g));b=[b,c,p,k];this.respectLayerVisibility&&(a=l.watch(a,"legendEnabled",q=>this._legendEnabledHandle(q,g)),d=l.watch(d,"legendEnabled",q=>this._legendEnabledHandle(q,g)),b.push(a,d));this._handles.add(b,f)}g.isScaleDriven||this._constructLegendElements(g);this._addActiveLayerInfo(g)};e._titleHandle=function(a,b){b.title=a;this._constructLegendElements(b)};e._legendEnabledHandle=function(a,b){a?this._addActiveLayerInfo(b):
this._removeActiveLayerInfo(b)};e._scaleHandle=function(a){a.isScaleDriven&&this._constructLegendElements(a)};e._addActiveLayerInfo=function(a){const {layerView:b,layer:d}=a;if(this._isLayerActive(b)&&-1===this.activeLayerInfos.indexOf(a)){var f=a.parent;if(f)-1===f.children.indexOf(a)&&f.children.push(a),this._sortActiveLayerInfos(f.children);else{var c;f=null==(c=this.layerInfos)?void 0:c.some(g=>g.layer.uid===d.uid);d.parent&&"uid"in d.parent&&!f?this._activeLayerInfosWithNoParent.add(a):(this.activeLayerInfos.add(a),
this._sortActiveLayerInfos(this.activeLayerInfos))}if(this._activeLayerInfosWithNoParent.length){const g=[];this._activeLayerInfosWithNoParent.forEach(p=>{var k=p.layer.parent;k=k&&"uid"in k&&this._layerViewByLayerId[null==k?void 0:k.uid];if(k=this._activeLayerInfosByLayerViewId[null==k?void 0:k.uid])g.push(p),p.parent=k});g.length&&(this._activeLayerInfosWithNoParent.removeMany(g),g.forEach(p=>this._addActiveLayerInfo(p)))}}};e._removeActiveLayerInfo=function(a){const b=a.parent;b?b.children.remove(a):
this.activeLayerInfos.remove(a)};e._constructLegendElements=function(a){const b=a.layer;"featureCollections"in b&&b.featureCollections?a.buildLegendElementsForFeatureCollections(b.featureCollections):"renderer"in b&&b.renderer?a.buildLegendElementsForRenderer(b.renderer):"url"in b&&b.url?a.buildLegendElementsForTools():a.children.forEach(d=>this._constructLegendElements(d))};t._createClass(r,[{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}}]);return r}(z);m.__decorate([n.property({type:w})],
h.prototype,"activeLayerInfos",void 0);m.__decorate([n.property()],h.prototype,"basemapLegendVisible",void 0);m.__decorate([n.property()],h.prototype,"groundLegendVisible",void 0);m.__decorate([n.property()],h.prototype,"keepCacheOnDestroy",void 0);m.__decorate([n.property()],h.prototype,"respectLayerVisibility",void 0);m.__decorate([n.property()],h.prototype,"layerInfos",void 0);m.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],h.prototype,"state",null);m.__decorate([n.property()],
h.prototype,"view",void 0);return h=m.__decorate([y.subclass("esri.widgets.Legend.LegendViewModel")],h)});