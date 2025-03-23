/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import"../core/lang.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{resolve as s}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import i from"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"./uid.js";import e from"../Graphic.js";import"../core/Handles.js";import"./LegendOptions.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./diffUtils.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./utils3.js";import"./LRUCache.js";import"./timeUtils.js";import"../TimeExtent.js";import"../core/watchUtils.js";import"./fieldType.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./mat3.js";import"./vec2.js";import"../layers/support/Field.js";import"./defaultsJSON.js";import"./defaults.js";import"../layers/support/FieldsIndex.js";import"./DataLayerSource.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"./OptimizedGeometry.js";import"./featureConversionUtils.js";import"./Queue.js";import"./json.js";import"./projectionSupport.js";import"./TileKey.js";import"./definitions.js";import"./capabilities2.js";import"./quantizationUtils.js";import"./BidiText.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2f32.js";import"./number2.js";import"./Rect.js";import"./BidiEngine.js";import"./MD5.js";import"./clusterUtils2.js";import"./vec2f64.js";import"./mat3f32.js";import"./TileInfoView.js";import"./Program.js";import"./isWebGL2Context.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import"./RenderingContext.js";import"./callExpressionWithFeature.js";import"./vec4f32.js";import"./config.js";import"./DisplayObject.js";import"./TiledDisplayObject.js";import"./rasterUtils.js";import p from"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as m}from"./LayerView2D.js";import"./brushes.js";import"./visualVariablesUtils.js";import"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./WGLContainer.js";import"./TurboLine.js";import"./CIMSymbolHelper.js";import"./graphicsUtils.js";import"./util2.js";import"./centroid.js";import"./FeatureSetReader.js";import"./quickselect.js";import"./rbush.js";import"./TileStore.js";import"./CircularArray.js";import"./visualVariablesUtils2.js";import"./TileClipper.js";import"./cimAnalyzer.js";import"./WGLMeshFactory.js";import"./FeatureContainer.js";import"./VertexBuffer.js";import"./schemaUtils.js";import{G as a}from"./GraphicsView2D.js";import"./TileContainer.js";import"./GraphicsView.js";const l={remove(){},pause(){},resume(){}};let j=class extends(m(p)){initialize(){this.graphicsView=new a({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(t,o){return this.suspended||!this.graphicsView?s(null):this.graphicsView.hitTest(t,o)}async fetchPopupFeatures(t){if(this.graphicsView)return this.graphicsView.searchFeatures(t).then((t=>t.filter((t=>!!t.popupTemplate))))}update(t){this.graphicsView.processUpdate(t)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let o;return"number"==typeof t?o=[t]:t instanceof e?o=[t.uid]:Array.isArray(t)&&t.length>0?o="number"==typeof t[0]?t:t.map((t=>t&&t.uid)):i.isCollection(t)&&(o=t.map((t=>t&&t.uid)).toArray()),o=o.filter((t=>null!=t)),o.length?(this.graphicsView.addHighlight(o),{remove:()=>this.graphicsView.removeHighlight(o)}):l}queryGraphics(){return s(this.graphicsView.graphics)}};t([o()],j.prototype,"graphicsView",void 0),t([o({dependsOn:["graphicsView.updating"]})],j.prototype,"updating",void 0),j=t([r("esri.views.2d.layers.GraphicsLayerView2D")],j);var n=j;export default n;
