// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/promiseUtils ../../../core/mathUtils ../../../request ../../../core/Handles ../../../core/watchUtils ../../webgl/Program ../../webgl/BufferObject ../../webgl/Texture ../../webgl/VertexArrayObject ../../webgl/Renderbuffer ../../webgl/FramebufferObject ../../webgl/ProgramCache ../../webgl/RenderingContext ../../webgl/ShaderCompiler ../engine/DisplayObject ../../magnifier/resources ../engine/webgl/enums ../engine/webgl/shaders/MagnifierPrograms".split(" "),
function(t,f,u,v,w,B,C,I,D,p,E,J,K,L,M,N,F,G,H,x){return function(y){function n(){var a=y.call(this)||this;a._handles=new B;a._resourcePixelRatio=1;a.visible=!1;return a}t._inheritsLoose(n,y);var l=n.prototype;l.destroy=function(){this._handles.destroy();this._handles=null;this._disposeRenderResources();this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)};l.doRender=function(a){const b=a.context;if(!this._resourcesTask)this._reloadResources();else if(a.drawPhase===H.WGLDrawPhase.MAP&&
this._canRender()){this._updateResources(a);var c=this._magnifier;if(!f.isNone(c.position)){var h=a.pixelRatio,k=c.size*h,d=Math.ceil(1/c.factor*k);this._readbackTexture.resize(d,d);var {size:e}=a.state;a=h*e[0];e=h*e[1];var g=.5*d,m=.5*d,z=v.clamp(h*c.position.x,g,a-g-1),A=v.clamp(e-h*c.position.y,m,e-m-1);g=z-g;m=A-m;var q=this._readbackTexture;b.bindTexture(q,0);b.gl.copyTexImage2D(q.descriptor.target,0,q.descriptor.pixelFormat,g,m,d,d,0);var r=(d=null==(r=this.background)?void 0:r.color)?[d.a*
d.r/255,d.a*d.g/255,d.a*d.b/255,d.a]:[1,1,1,1];d=-1+(z+c.offsetX*h)/a*2;h=-1+(A-c.offsetY*h)/e*2;a=k/a*2;k=k/e*2;e=this._program;b.bindVAO(this._vertexArrayObject);b.bindTexture(this._overlayTexture,6);b.bindTexture(this._maskTexture,7);b.bindProgram(e);e.setUniform4fv("u_background",r);e.setUniform1i("u_readbackTexture",0);e.setUniform1i("u_overlayTexture",6);e.setUniform1i("u_maskTexture",7);e.setUniform4f("u_drawPos",d,h,a,k);e.setUniform1i("u_maskEnabled",c.maskEnabled?1:0);e.setUniform1i("u_overlayEnabled",
c.overlayEnabled?1:0);b.setStencilTestEnabled(!1);b.drawArrays(5,0,4);b.bindVAO()}}};l._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier};l._reloadResources=function(){this._resourcesTask&&this._resourcesTask.abort();const a=f.isSome(this._magnifier)?this._magnifier.mask:null,b=f.isSome(this._magnifier)?this._magnifier.overlay:null;this._resourcesTask=u.createTask(async c=>{const h=f.isNone(a)||f.isNone(b)?G.loadMagnifierResources(c):null,k=f.isSome(a)?w(a,{responseType:"image",
signal:c}).then(g=>g.data):h.then(g=>g.mask);c=f.isSome(b)?w(b,{responseType:"image",signal:c}).then(g=>g.data):h.then(g=>g.overlay);const [d,e]=await u.all([k,c]);this.mask=d;this.overlay=e;this._disposeRenderResources();this.requestRender()})};l._disposeRenderResources=function(){this._readbackTexture=f.disposeMaybe(this._readbackTexture);this._overlayTexture=f.disposeMaybe(this._overlayTexture);this._maskTexture=f.disposeMaybe(this._maskTexture);this._vertexArrayObject=f.disposeMaybe(this._vertexArrayObject);
this._program=f.disposeMaybe(this._program)};l._updateResources=function(a){a.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources();if(!this._readbackTexture){var b=a.context;this._resourcePixelRatio=a.pixelRatio;a=Math.ceil(this._magnifier.size*a.pixelRatio);this._program=x.createMagnifierProgram(b);var c=new Uint16Array([0,1,0,0,1,1,1,0]);this._vertexArrayObject=new E(b,x.magnifierProgramTemplate.attributes,{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,
divisor:0}]},{geometry:D.createVertex(b,35044,c)});this.overlay.width=a;this.overlay.height=a;this._overlayTexture=new p(b,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay);this.mask.width=a;this.mask.height=a;this._maskTexture=new p(b,{target:3553,pixelFormat:6406,internalFormat:6406,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask);c=1/this._magnifier.factor;this._readbackTexture=new p(b,{target:3553,pixelFormat:6408,
internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.ceil(c*a),height:Math.ceil(c*a)})}};t._createClass(n,[{key:"background",get:function(){return this._background},set:function(a){this._background=a;this.requestRender()}},{key:"magnifier",get:function(){return this._magnifier},set:function(a){this._magnifier=a;this._handles.removeAll();this._handles.add([C.init(a,"version",()=>{this.visible=a.visible&&f.isSome(a.position)&&0<a.size;this.requestRender()}),a.watch(["mask",
"overlay"],()=>this._reloadResources()),a.watch("size",()=>{this._disposeRenderResources();this.requestRender()})])}}]);return n}(F.DisplayObject)});