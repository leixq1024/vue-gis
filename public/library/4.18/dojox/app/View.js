//>>built
define("require dojo/when dojo/on dojo/_base/declare dojo/_base/lang dojo/Deferred dijit/Destroyable dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./ViewBase ./utils/nls".split(" "),function(k,g,m,n,e,l,p,q,r,t,u){return n("dojox.app.View",[q,r,p,t],{constructor:function(b){},connect:function(b,d,a){return this.own(m(b,d,e.hitch(this,a)))[0]},_loadTemplate:function(){if(this.templateString)return!0;var b=this.template,d=this.dependencies?this.dependencies:[];b&&(0==b.indexOf("./")&&(b="app/"+
b),d=d.concat(["dojo/text!"+b]));var a=new l;if(0<d.length)try{var c=k.on?k.on("error",e.hitch(this,function(f){!a.isResolved()&&!a.isRejected()&&f.info[0]&&0<=f.info[0].indexOf(this.template)&&(a.resolve(!1),c&&c.remove())})):null;k(d,function(){a.resolve.call(a,arguments);c&&c.remove()})}catch(f){a.resolve(!1),c&&c.remove()}else a.resolve(!0);var h=new l;g(a,e.hitch(this,function(f){this.templateString=this.template?f[f.length-1]:"\x3cdiv\x3e\x3c/div\x3e";h.resolve(this)}));return h},load:function(){var b=
new l,d=this.inherited(arguments),a=u(this);g(d,e.hitch(this,function(){g(a,e.hitch(this,function(c){this.nls=e.mixin({},this.parent.nls);c&&e.mixin(this.nls,c);g(this._loadTemplate(),function(h){b.resolve(h)})}))}));return b},_startup:function(){this.buildRendering();this.inherited(arguments)}})});