// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(k,l,e,m,t,u,p,v,q,w,x,y,r){e=function(n){function f(b){return n.call(this,
b)||this}k._inheritsLoose(f,n);f.prototype.setValue=function(b,a){const {max:g,min:h,values:d}=this;var c=d[b];a=this.toPrecision(a);c===a||a>g||a<h||(this.primaryHandleEnabled&&(c=this.values[1],0===b&&a>c?a=c:2===b&&a<c&&(a=c)),b=this.getStopChanges(b,a),this.updateStops(b),this.notifyChange("values"),this.notifyChange("labels"))};k._createClass(f,[{key:"stops",set:function(b){if(b&&b.length){const a=b.map(c=>c.value),{max:g,min:h}=this,d={};m.isSome(h)&&a.some(c=>c<h)&&(d.min=Math.min(...a));m.isSome(g)&&
a.some(c=>c>g)&&(d.max=Math.max(...a));this.set({...d})}this._set("stops",b)}}]);return f}(r);l.__decorate([p.property()],e.prototype,"stops",null);return e=l.__decorate([q.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],e)});