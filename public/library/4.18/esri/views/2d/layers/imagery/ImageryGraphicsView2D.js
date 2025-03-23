// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/decorators/enumeration ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../geometry/Extent ../../../../core/screenUtils ../../../../Graphic ../../../../support/GraphicsCollection ../../../layers/LayerView ../../engine/Container ../graphics/GraphicsView2D ../LayerView2D".split(" "),
function(r,k,g,u,G,n,v,w,H,I,J,p,x,y,z,A,B,C,D,E){const F=u.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");g=function(t){function q(){var a=t.apply(this,arguments)||this;a.container=new C.Container;a._graphicsView=null;a.type="Graphics";a._graphics=new A["default"];a._updateGraphics=p.debounce(async(c,d)=>{if(c.stationary){var b=c.state,h=new x({xmin:b.extent.xmin,ymin:b.extent.ymin,xmax:b.extent.xmax,ymax:b.extent.ymax,spatialReference:b.spatialReference}),l=c.state.size[0],m=c.state.size[1];
b={};b.timeExtent=a.timeExtent;b.requestAsImageElement=!1;b.signal=d;d=a._getVectorFieldExportParams({extent:h,width:l,height:m});b=await a.layer.fetchImage(d.extent,d.width,d.height,b);h=a.layer.renderer;if("vector-field"===h.type){a._pixelData={extent:d.extent,pixelBlock:b.pixelData.pixelBlock};const f=await h.getGraphicsFromPixelData(b.pixelData,"vector-uv"===a.layer.rasterInfo.dataType);a._graphicsView.update(c);await p.after(0).then(()=>{a._graphics.set("items",f)})}}});return a}r._inheritsLoose(q,
t);var e=q.prototype;e.update=function(a){this._updateGraphics(a).catch(c=>{p.isAbortError(c)||F.error(c)})};e.hitTest=function(a,c){if(this.suspended)return p.resolve(null);a=this.view.toMap(y.createScreenPoint(a,c));return p.resolve(new z({attributes:{},geometry:a,layer:this.layer}))};e.attach=function(){this._graphicsView=new D({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate()})};e.detach=function(){this._graphics.destroy();this._graphicsView.destroy();this.container.removeChild(this._graphicsView.container);
this._graphicsView=null};e.moveStart=function(){};e.viewChange=function(){};e.moveEnd=function(){};e.install=function(a){this.container.addChild(this._graphicsView.container);a.addChild(this.container)};e.uninstall=function(a){this.container.removeChild(this._graphicsView.container);a.removeChild(this.container)};e.isUpdating=function(){return this._graphicsView.updating||this.updateRequested};e.getPixelData=function(){return this.updating?null:this._pixelData};e.redraw=function(){};e._getVectorFieldExportParams=
function(a){var c,d;let {extent:b,width:h,height:l}=a;const m=this.layer;a=null==(c=m.fullExtent)?void 0:c.xmin;c=null==(d=m.fullExtent)?void 0:d.ymax;if("vector-field"===m.renderer.type)var f=m.renderer.symbolTileSize;f=Math.max(f||0,30);h=Math.ceil(1/f*h);l=Math.ceil(1/f*l);d=(b.xmax-b.xmin)/h;f=(b.ymax-b.ymin)/l;b.xmin=a+Math.floor((b.xmin-a)/d)*d;b.xmax=a+Math.ceil((b.xmax-a)/d)*d;b.ymin=c+Math.floor((b.ymin-c)/f)*f;b.ymax=c+Math.ceil((b.ymax-c)/f)*f;return{extent:b,width:h,height:l}};r._createClass(q,
[{key:"updating",get:function(){var a;return null==(a=this._graphicsView)?void 0:a.updating}}]);return q}(E.LayerView2DMixin(B));k.__decorate([n.property()],g.prototype,"container",void 0);k.__decorate([n.property()],g.prototype,"layer",void 0);k.__decorate([n.property()],g.prototype,"timeExtent",void 0);k.__decorate([n.property({dependsOn:["_graphicsView.updating"]})],g.prototype,"updating",null);k.__decorate([n.property()],g.prototype,"_graphicsView",void 0);k.__decorate([v.enumeration({graphics:"Graphics"})],
g.prototype,"type",void 0);return g=k.__decorate([w.subclass("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],g)});