//>>built
define(["dojo/_base/declare","dojo/_base/lang","./getPlainValue","./EditStoreRefController","./ListController"],function(b,f,g,c,d){return b("dojox.mvc.EditStoreRefListController",[c,d],{commitCurrent:function(){for(var e=this.cursor[this.idProperty],a=0;a<this.originalModel.length;a++)if(this.originalModel[a][this.idProperty]==e){this.originalModel.set(a,this.cloneModel(this.cursor));break}this.store.put(this.cursor)}})});