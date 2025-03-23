// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/watchUtils ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/renderable ../chunks/index ./Widget ./Attribution/AttributionViewModel".split(" "),
function(p,d,c,A,B,f,t,C,u,D,E,F,v,G,w,x,g,h,y,q){c=function(r){function k(a,b){a=r.call(this,a,b)||this;a._isOpen=!1;a._attributionTextOverflowed=!1;a._prevSourceNodeHeight=0;a.iconClass="esri-icon-description";a.itemDelimiter=" | ";a.label=void 0;a.messages=null;a.view=null;a.viewModel=new q;return a}p._inheritsLoose(k,r);var e=k.prototype;e.initialize=function(){this.own(v.on(this,"viewModel.items","change",()=>this.scheduleRender()))};e.render=function(){return h.jsx("div",{bind:this,class:this.classes("esri-attribution esri-widget",
{["esri-attribution--open"]:this._isOpen}),onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())};e.renderPoweredBy=function(){return h.jsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",h.jsx("a",{class:this.classes("esri-attribution__link","esri-widget__anchor"),href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))};e.renderSourcesNode=function(){const a=this._isOpen,b=this._isInteractive(),l=b?0:-1,{attributionText:m}=
this,n=b?"button":void 0;return h.jsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes("esri-attribution__sources",{["esri-attribution__sources--open"]:a,["esri-interactive"]:b}),innerHTML:m,role:n,tabIndex:l})};e._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth};e._afterSourcesNodeUpdate=function(a){let b=!1;const {clientHeight:l,clientWidth:m,scrollWidth:n}=a;a=n>=m;const z=this._attributionTextOverflowed!==
a;this._attributionTextOverflowed=a;z&&(b=!0);this._isOpen&&(a=l<this._prevSourceNodeHeight,this._prevSourceNodeHeight=l,a&&(this._isOpen=!1,b=!0));b&&this.scheduleRender()};e._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)};e._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed};p._createClass(k,[{key:"attributionText",get:function(){return this.viewModel.items.reduce((a,b)=>{-1===a.indexOf(b.text)&&a.push(b.text);return a},[]).join(this.itemDelimiter)}}]);
return k}(y);d.__decorate([f.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0,autoTracked:!1}),g.renderable()],c.prototype,"attributionText",null);d.__decorate([f.property()],c.prototype,"iconClass",void 0);d.__decorate([f.property(),g.renderable()],c.prototype,"itemDelimiter",void 0);d.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([f.property(),g.renderable(),x.messageBundle("esri/widgets/Attribution/t9n/Attribution")],
c.prototype,"messages",void 0);d.__decorate([t.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([f.property({type:q}),g.renderable(["state","view.size"])],c.prototype,"viewModel",void 0);d.__decorate([w.accessibleHandler()],c.prototype,"_toggleState",null);return c=d.__decorate([u.subclass("esri.widgets.Attribution")],c)});