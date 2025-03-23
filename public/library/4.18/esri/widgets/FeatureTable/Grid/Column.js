// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Evented ../../../core/watchUtils ../../../core/HandleOwner ../../support/widgetUtils ./support/ButtonMenu".split(" "),function(n,
e,d,A,B,f,C,u,D,E,F,v,w,x,y,z){d=function(r){function p(c){var a=r.call(this,c)||this;a._menuContainer=null;a.activeRowIndex=null;a.autoWidth=!1;a.cellValueFormatFunction=({value:b})=>y.renderingSanitizer.sanitize(b);a.flexGrow=1;a.footerRenderFunction=null;a.frozen=!1;a.grid=null;a.header=null;a.headerRenderFunction=b=>{const {root:g}=b,{header:h,headerMenuEnabled:l,path:m,sortable:q}=n._assertThisInitialized(a);a.removeCellContent(g);q?(a.headerSorterRenderFunction(b),l&&a.headerMenuRenderFunction(b)):
(l&&a.headerMenuRenderFunction(b),b=h||m,g.innerHTML!==b&&(g.innerHTML=b))};a.headerMenuRenderFunction=({root:b})=>{var g,h;(null==(g=a.menu)?0:null==(h=g.items)?0:h.length)&&b.appendChild(a._menuContainer)};a.headerSorterRenderFunction=({root:b})=>{var g;const {header:h,path:l,sortElement:m}=n._assertThisInitialized(a),q=h||l;m?(m.setAttribute("innerHTML",q),b.appendChild(m),b=null==(g=a.grid)?void 0:g.getSlotElementByName(b.slot),(g=null==b?void 0:b.parentElement)&&!g.onkeydown&&(g.onkeydown=({key:t})=>
{"Enter"!==t&&"Spacebar"!==t||m.click()})):b.innerHTML=q};a.hidden=!1;a.headerMenuEnabled=!0;a.menu=null;a.menuConfig=null;a.messages=null;a.messagesCommon=null;a.renderFunction=({root:b,column:g,rowData:h})=>{const l=a.getCellValue(g,h);g=a.cellValueFormatFunction({column:g,rowData:h,value:l});b.innerHTML!==g&&(b.innerHTML=g)};a.resizable=!0;a.sortable=!0;a.sortElement=null;a.textAlign="start";a.width=200;return a}n._inheritsLoose(p,r);var k=p.prototype;k.initialize=function(){const {path:c}=this;
this._set("sortElement",this.createSortElement());this.sortElement.setAttribute("path",c);this._menuContainer=document.createElement("div");this._menuContainer.classList.add("esri-column__menu-container");this.menu=new z({iconClass:"esri-icon-handle-horizontal",...this.menuConfig});this.menu.container=this._menuContainer;this.menu.set("items",this.getMenuItems());this.handles.add([w.watch(this,"hidden",()=>{var a;return null==(a=this.menu)?void 0:a.set("open",!1)})])};k.destroy=function(){var c;null==
(c=this.menu)?void 0:c.destroy()};k.getMenuItems=function(){const {menuConfig:c,sortable:a}=this,b=null==c?void 0:c.items,g=this.getSortMenuItems(),h=[];a&&h.push(...g);(null==b?0:b.length)&&h.push(...b);return h.length?h:null};k.getSortMenuItems=function(){const {messages:c}=this;return[{selected:"asc"===this.direction,iconClass:"esri-icon-arrow-up",label:null==c?void 0:c.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","asc"!==this.direction?"asc":null)},{selected:"desc"===this.direction,
iconClass:"esri-icon-arrow-down",label:null==c?void 0:c.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","desc"!==this.direction?"desc":null)}]};k.getCellValue=function(c,a){var b;return null!=(b=null==a?void 0:a.item[null==c?void 0:c.path])?b:""};k.createSortElement=function(){const {direction:c,header:a,path:b}=this,g=a||b,h=document.createElement("vaadin-grid-sorter");h.classList.add("esri-column__sorter");h.setAttribute("path",b);c&&h.setAttribute("direction",c);h.innerHTML=g;
return h};k.removeCellContent=function(c){if(c)for(;c.firstChild;)try{c.removeChild(c.firstChild)}catch(a){}};n._createClass(p,[{key:"direction",set:function(c){if(this.sortable){if(c){var a;null==(a=this.sortElement)?void 0:a.setAttribute("direction",c)}else{var b;null==(b=this.sortElement)?void 0:b.removeAttribute("direction")}this._set("direction",c)}}},{key:"path",set:function(c){var a;null==(a=this.sortElement)?void 0:a.setAttribute("path",c);this._set("path",c)}}]);return p}(x.HandleOwnerMixin(v.EventedAccessor));
e.__decorate([f.property()],d.prototype,"activeRowIndex",void 0);e.__decorate([f.property()],d.prototype,"autoWidth",void 0);e.__decorate([f.property()],d.prototype,"cellValueFormatFunction",void 0);e.__decorate([f.property()],d.prototype,"direction",null);e.__decorate([f.property()],d.prototype,"flexGrow",void 0);e.__decorate([f.property()],d.prototype,"footerRenderFunction",void 0);e.__decorate([f.property()],d.prototype,"frozen",void 0);e.__decorate([f.property()],d.prototype,"grid",void 0);e.__decorate([f.property()],
d.prototype,"header",void 0);e.__decorate([f.property()],d.prototype,"headerRenderFunction",void 0);e.__decorate([f.property()],d.prototype,"headerMenuRenderFunction",void 0);e.__decorate([f.property()],d.prototype,"headerSorterRenderFunction",void 0);e.__decorate([f.property()],d.prototype,"hidden",void 0);e.__decorate([f.property()],d.prototype,"headerMenuEnabled",void 0);e.__decorate([f.property()],d.prototype,"menu",void 0);e.__decorate([f.property()],d.prototype,"menuConfig",void 0);e.__decorate([f.property()],
d.prototype,"messages",void 0);e.__decorate([f.property()],d.prototype,"messagesCommon",void 0);e.__decorate([f.property()],d.prototype,"path",null);e.__decorate([f.property()],d.prototype,"renderFunction",void 0);e.__decorate([f.property()],d.prototype,"resizable",void 0);e.__decorate([f.property()],d.prototype,"sortable",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"sortElement",void 0);e.__decorate([f.property()],d.prototype,"textAlign",void 0);e.__decorate([f.property()],d.prototype,
"width",void 0);return d=e.__decorate([u.subclass("esri.widgets.FeatureTable.Grid.Column")],d)});