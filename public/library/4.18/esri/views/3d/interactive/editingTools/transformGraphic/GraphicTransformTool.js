// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/handleUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Evented ../../../../../chunks/common ../../../../../core/Handles ../../../../../support/elevationInfoUtils ../../../../interactive/InteractiveToolBase ../../manipulatorUtils ../manipulatorUtils ../../../layers/graphics/GraphicState ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ./GraphicScaleRotateTransform".split(" "),
function(b,k,d,F,g,G,H,p,e,I,q,J,K,L,r,t,u,v,w,x,l,y,z,A,m,B){b.GraphicTransformTool=function(n){function h(a){a=n.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.type="transform-3d";a.handles=new u;a.scaleRotate=null;return a}k._inheritsLoose(h,n);var c=h.prototype;c.initialize=function(){this.graphicState=new y.GraphicState({graphic:this.graphic});this.moveManipulation=new m.MoveManipulation({tool:this,view:this.view,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,
zAvailable:this.enableZ&&l.canMoveZ(this.graphic),radius:m.MoveManipulation.radiusForSymbol(this.graphic.symbol)});this.moveManipulation.forEachManipulator(a=>this.handles.add(a.events.on("immediate-click",f=>f.stopPropagation())));this.moveManipulation.elevationInfo=v.getGraphicEffectiveElevationInfo(this.graphic);this.moveManipulation.createGraphicDragPipeline(this.graphicState,a=>{const {action:f,graphic:C,dxScreen:D,dyScreen:E}=a;a={graphic:C,dxScreen:D,dyScreen:E};switch(f){case "start":this.emit("graphic-translate-start",
a);break;case "update":this.emit("graphic-translate",a);break;case "end":this.emit("graphic-translate-stop",a)}});this.moveManipulation.angle=this.symbolRotationAngle;if(this.enableScaling||this.enableRotation)this.scaleRotate=new B.GraphicScaleRotateTransform({tool:this,mode:this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate"}),this.handles.add(this.scaleRotate.events.on("scale-changed",()=>this.onScaleChanged()));this.handles.add([z.createVisualElements({view:this.view,
graphic:this.graphic,forEachManipulator:a=>this.forEachManipulator(a),onManipulatorsChanged:()=>p.makeHandle()}),this.graphic.watch("symbol",()=>this.updateMoveAngle()),this.graphicState.on("changed",()=>this.onGeometryChanged()),this.hideManipulatorsForGraphicState(),this.view.watch("scale",()=>this.updateMoveAngle())]);this.handles.add(this.view.trackGraphicState(this.graphicState));this.onGeometryChanged()};c.forEachManipulator=function(a){this.moveManipulation.forEachManipulator(a);g.isSome(this.scaleRotate)&&
this.scaleRotate.forEachManipulator(a)};c.hideManipulatorsForGraphicState=function(){return this.graphicState.watch("displaying",a=>{this.forEachManipulator(f=>f.available=a);this.moveManipulation.zManipulation.available=a&&this.enableZ&&l.canMoveZ(this.graphic)})};c.destroy=function(){this.handles.destroy();this.moveManipulation.destroy();g.isSome(this.scaleRotate)&&(this.scaleRotate.destroy(),this.scaleRotate=null);this._set("view",null);this._set("graphic",null)};c.reset=function(){};c.onDetach=
function(){g.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};c.onHide=function(){g.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};c.onScaleChanged=function(){if(!g.isNone(this.scaleRotate)){var a=this.scaleRotate.getScale();this.moveManipulation.displayScale=a}};c.updateMoveAngle=function(){this.moveManipulation.angle="local"===this.view.viewingMode||this.view.scale<A.ALIGN_ARROWS_SCALE_THRESHOLD?this.symbolRotationAngle:0};c.onGeometryChanged=function(){x.placeAtGraphic(this.view,
this.moveManipulation,this.graphic)};k._createClass(h,[{key:"snapToScene",set:function(a){this.moveManipulation&&(this.moveManipulation.snapToScene=a);this._set("snapToScene",a)}},{key:"symbolRotationAngle",get:function(){var a=this.graphic.symbol;return a?(a=a.symbolLayers.find(f=>"object"===f.type),t.toRadian(-(a&&a.heading||0))):0}},{key:"test",get:function(){return{discManipulator:this.moveManipulation.xyManipulation.test.discManipulator,ringManipulator:g.isSome(this.scaleRotate)?this.scaleRotate.test.ringManipulator:
null,arrowManipulators:this.moveManipulation.xyAxisManipulation.test.arrowManipulators}}}]);return h}(r.EventedMixin(w.InteractiveToolBase));d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],b.GraphicTransformTool.prototype,"view",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],b.GraphicTransformTool.prototype,"graphic",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],b.GraphicTransformTool.prototype,"enableZ",void 0);d.__decorate([e.property()],
b.GraphicTransformTool.prototype,"enableRotation",void 0);d.__decorate([e.property()],b.GraphicTransformTool.prototype,"enableScaling",void 0);d.__decorate([e.property({value:!1})],b.GraphicTransformTool.prototype,"snapToScene",null);d.__decorate([e.property({readOnly:!0})],b.GraphicTransformTool.prototype,"type",void 0);b.GraphicTransformTool=d.__decorate([q.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],b.GraphicTransformTool);Object.defineProperty(b,
"__esModule",{value:!0})});