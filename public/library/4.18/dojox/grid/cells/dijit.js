//>>built
define("dojo/_base/kernel ../../main dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/json dojo/_base/connect dojo/_base/sniff dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-style dojo/dom-geometry dojo/data/ItemFileReadStore dijit/form/DateTextBox dijit/form/TimeTextBox dijit/form/ComboBox dijit/form/CheckBox dijit/form/TextBox dijit/form/NumberSpinner dijit/form/NumberTextBox dijit/form/CurrencyTextBox dijit/form/HorizontalSlider dijit/form/_TextBoxMixin dijit/Editor ../util ./_base".split(" "),
function(q,g,h,w,d,r,D,t,x,k,y,z,E,A,l,F,m,n,B,G,H,I,J,C,p,u,v){g={};var e=g._Widget=h("dojox.grid.cells._Widget",v,{widgetClass:B,constructor:function(a){this.widget=null;"string"==typeof this.widgetClass&&(q.deprecated("Passing a string to widgetClass is deprecated","pass the widget class object instead","2.0"),this.widgetClass=d.getObject(this.widgetClass))},formatEditing:function(a,b){this.needFormatNode(a,b);return"\x3cdiv\x3e\x3c/div\x3e"},getValue:function(a){return this.widget.get("value")},
_unescapeHTML:function(a){return a&&a.replace&&this.grid.escapeHTMLInData?a.replace(/&lt;/g,"\x3c").replace(/&amp;/g,"\x26"):a},setValue:function(a,b){if(this.widget&&this.widget.set)if(b=this._unescapeHTML(b),this.widget.onLoadDeferred){var c=this;this.widget.onLoadDeferred.addCallback(function(){c.widget.set("value",null===b?"":b)})}else this.widget.set("value",b);else this.inherited(arguments)},getWidgetProps:function(a){return d.mixin({dir:this.dir,lang:this.lang},this.widgetProps||{},{constraints:d.mixin({},
this.constraint)||{},required:(this.constraint||{}).required,value:this._unescapeHTML(a)})},createWidget:function(a,b,c){return new this.widgetClass(this.getWidgetProps(b),a)},attachWidget:function(a,b,c){a.appendChild(this.widget.domNode);this.setValue(c,b)},formatNode:function(a,b,c){if(!this.widgetClass)return b;this.widget?this.attachWidget.apply(this,arguments):this.widget=this.createWidget.apply(this,arguments);this.sizeWidget.apply(this,arguments);this.grid.views.renormalizeRow(c);this.grid.scroller.rowHeightChanged(c,
!0);this.focus()},sizeWidget:function(a,b,c){a=this.getNode(c);q.marginBox(this.widget.domNode,{w:z.get(a,"width")})},focus:function(a,b){this.widget&&setTimeout(d.hitch(this.widget,function(){u.fire(this,"focus");this.focusNode&&"INPUT"===this.focusNode.tagName&&C.selectInputText(this.focusNode)}),0)},_finish:function(a){this.inherited(arguments);u.removeNode(this.widget.domNode);t("ie")&&x.setSelectable(this.widget.domNode,!0)}});e.markupFactory=function(a,b){v.markupFactory(a,b);var c=d.trim(k.get(a,
"widgetProps")||""),f=d.trim(k.get(a,"constraint")||"");a=d.trim(k.get(a,"widgetClass")||"");c&&(b.widgetProps=r.fromJson(c));f&&(b.constraint=r.fromJson(f));a&&(b.widgetClass=d.getObject(a))};m=g.ComboBox=h("dojox.grid.cells.ComboBox",e,{widgetClass:m,getWidgetProps:function(a){var b=[];w.forEach(this.options,function(f){b.push({name:f,value:f})});var c=new A({data:{identifier:"name",items:b}});return d.mixin({},this.widgetProps||{},{value:a,store:c})},getValue:function(){var a=this.widget;a.set("displayedValue",
a.get("displayedValue"));return a.get("value")}});m.markupFactory=function(a,b){e.markupFactory(a,b);if(a=d.trim(k.get(a,"options")||"")){var c=a.split(",");c[0]!=a&&(b.options=c)}};l=g.DateTextBox=h("dojox.grid.cells.DateTextBox",e,{widgetClass:l,setValue:function(a,b){this.widget?this.widget.set("value",new Date(b)):this.inherited(arguments)},getWidgetProps:function(a){return d.mixin(this.inherited(arguments),{value:new Date(a)})}});l.markupFactory=function(a,b){e.markupFactory(a,b)};n=g.CheckBox=
h("dojox.grid.cells.CheckBox",e,{widgetClass:n,getValue:function(){return this.widget.checked},setValue:function(a,b){this.widget&&this.widget.attributeMap.checked?this.widget.set("checked",b):this.inherited(arguments)},sizeWidget:function(a,b,c){}});n.markupFactory=function(a,b){e.markupFactory(a,b)};p=g.Editor=h("dojox.grid.cells.Editor",e,{widgetClass:p,getWidgetProps:function(a){return d.mixin({},this.widgetProps||{},{height:this.widgetHeight||"100px"})},createWidget:function(a,b,c){a=new this.widgetClass(this.getWidgetProps(b),
a);a.onLoadDeferred.then(d.hitch(this,"populateEditor"));return a},formatNode:function(a,b,c){this.content=b;this.inherited(arguments);if(t("mozilla")){var f=this.widget;f.open();this.widgetToolbar&&y.place(f.toolbar.domNode,f.editingArea,"before")}},populateEditor:function(){this.widget.set("value",this.content);this.widget.placeCursorAtEnd()}});p.markupFactory=function(a,b){e.markupFactory(a,b);if(a=d.trim(k.get(a,"widgetHeight")||""))"auto"!=a&&"em"!=a.substr(-2)&&(a=parseInt(a,10)+"px"),b.widgetHeight=
a};return g});