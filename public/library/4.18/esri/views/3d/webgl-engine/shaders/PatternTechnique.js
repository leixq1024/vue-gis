// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../lib/OrderIndependentTransparency ../lib/StencilUtils ../../../../chunks/Pattern.glsl".split(" "),
function(w,n,u,f,c,m,d,x,y,p,q,z,A,l,r,B){m=function(k){function g(){return k.apply(this,arguments)||this}u._inheritsLoose(g,k);var b=g.prototype;b.initializeProgram=function(e){var h=g.shader.get();const a=this.configuration;h=h.build({output:a.output,attributeColor:a.vertexColors,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:a.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,style:a.style,patternSpacing:a.patternSpacing,lineWidth:a.lineWidth,draped:a.draped,OITEnabled:0===
a.transparencyPassType});return new y(e.rctx,h.generateSource("vertex"),h.generateSource("fragment"),x.Default3D)};b.bindPass=function(e,h,a){q.View.bindProjectionMatrix(this.program,a.camera.projectionMatrix);this.program.setUniform4fv("matColor",h.color);this.configuration.draped?(this.program.setUniform1f("worldToScreenRatio",1/a.screenToWorldRatioGlobalWM),this.program.setUniform1f("texelSize",1/a.camera.pixelRatio)):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/a.camera.perScreenPixelRatio);
4===this.configuration.output&&A.OutputHighlight.bindOutputHighlight(e,this.program,a);1===this.configuration.output&&this.program.setUniform2fv("nearFar",a.camera.nearFar)};b.bindDraw=function(e){q.View.bindView(this.program,e);q.View.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix);z.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)};b.setPipelineState=function(e,h){const a=this.configuration,t=3===e,C=2===e;return p.makePipelineState({blending:0===a.output||
7===a.output?a.transparent&&t?l.blendingDefault:l.OITBlending(e):null,culling:(v=>0!==v&&{face:1===v?1028:1029,mode:2305})(a.cullFace),depthTest:{func:l.OITDepthTest(e)},depthWrite:t?a.writeDepth&&p.defaultDepthWriteParams:l.OITDepthWrite(e),colorWrite:p.defaultColorWriteParams,stencilWrite:a.sceneHasOcludees?r.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?h?r.stencilToolMaskBaseParams:r.stencilBaseAllZerosParams:null,polygonOffset:t||C?a.polygonOffset&&D:l.getOITPolygonOffset(a.enableOffset)})};
b.initializePipeline=function(){this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0);return this.setPipelineState(this.configuration.transparencyPassType,!1)};b.getPipelineState=function(e){return e?this._occludeePipelineState:this.pipeline};return g}(m.ShaderTechnique);m.shader=new c.ReloadableShaderModule(B.PatternShader,()=>new Promise(function(k,g){w(["./Pattern.glsl"],k,g)}));const D={factor:1,units:1};c=function(k){function g(){var b=k.apply(this,arguments)||
this;b.output=0;b.cullFace=0;b.slicePlaneEnabled=!1;b.sliceHighlightDisabled=!1;b.vertexColors=!1;b.transparent=!0;b.polygonOffset=!1;b.writeDepth=!0;b.sceneHasOcludees=!1;b.enableOffset=!0;b.transparencyPassType=3;return b}u._inheritsLoose(g,k);return g}(d.ShaderTechniqueConfiguration);f.__decorate([d.parameter({count:8})],c.prototype,"output",void 0);f.__decorate([d.parameter({count:3})],c.prototype,"cullFace",void 0);f.__decorate([d.parameter()],c.prototype,"slicePlaneEnabled",void 0);f.__decorate([d.parameter()],
c.prototype,"sliceHighlightDisabled",void 0);f.__decorate([d.parameter()],c.prototype,"vertexColors",void 0);f.__decorate([d.parameter()],c.prototype,"transparent",void 0);f.__decorate([d.parameter()],c.prototype,"polygonOffset",void 0);f.__decorate([d.parameter()],c.prototype,"writeDepth",void 0);f.__decorate([d.parameter()],c.prototype,"sceneHasOcludees",void 0);f.__decorate([d.parameter({count:6})],c.prototype,"style",void 0);f.__decorate([d.parameter()],c.prototype,"patternSpacing",void 0);f.__decorate([d.parameter()],
c.prototype,"lineWidth",void 0);f.__decorate([d.parameter()],c.prototype,"enableOffset",void 0);f.__decorate([d.parameter()],c.prototype,"draped",void 0);f.__decorate([d.parameter({count:4})],c.prototype,"transparencyPassType",void 0);n.PatternTechnique=m;n.PatternTechniqueConfiguration=c;Object.defineProperty(n,"__esModule",{value:!0})});