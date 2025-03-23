//>>built
define(["dojo/_base/kernel","dojo/_base/lang","../_base","dojo/_base/array"],function(p,f,g,q){var c=f.getObject("contrib.data",!0,g),k=!0;c._BoundItem=f.extend(function(a,b){this.item=a;this.store=b},{get:function(a){var b=this.store,d=this.item;if("getLabel"==a)return b.getLabel(d);if("getAttributes"==a)return b.getAttributes(d);if("getIdentity"==a)return b.getIdentity?b.getIdentity(d):"Store has no identity API";if(!b.hasAttribute(d,a)&&("s"==a.slice(-1)&&(k&&(k=!1,p.deprecated("You no longer need an extra s to call getValues, it can be figured out automatically")),
a=a.slice(0,-1)),!b.hasAttribute(d,a)))return;if(a=b.getValues(d,a)){if(!f.isArray(a))return new c._BoundItem(a,b);a=q.map(a,function(e){return f.isObject(e)&&b.isItem(e)?new c._BoundItem(e,b):e});a.get=c._get;return a}}});c._BoundItem.prototype.get.safe=!0;c.BindDataNode=f.extend(function(a,b,d,e){this.items=a&&new g._Filter(a);this.query=b&&new g._Filter(b);this.store=new g._Filter(d);this.alias=e},{render:function(a,b){var d=this.items&&this.items.resolve(a),e=this.query&&this.query.resolve(a),
h=this.store.resolve(a);if(!h||!h.getFeatures)throw Error("data_bind didn't receive a store");if(e){var l=!1;h.fetch({query:e,sync:!0,scope:this,onComplete:function(r){l=!0;d=r}});if(!l)throw Error("The bind_data tag only works with a query if the store executed synchronously");}e=[];if(d)for(var m=0,n;n=d[m];m++)e.push(new c._BoundItem(n,h));a[this.alias]=e;return b},unrender:function(a,b){return b},clone:function(){return this}});f.mixin(c,{_get:function(a){if(this.length)return this[0]instanceof
c._BoundItem?this[0].get(a):this[0][a]},bind_data:function(a,b){a=b.contents.split();if("to"!=a[2]||"as"!=a[4]||!a[5])throw Error("data_bind expects the format: 'data_bind items to store as varName'");return new c.BindDataNode(a[1],null,a[3],a[5])},bind_query:function(a,b){a=b.contents.split();if("to"!=a[2]||"as"!=a[4]||!a[5])throw Error("data_bind expects the format: 'bind_query query to store as varName'");return new c.BindDataNode(null,a[1],a[3],a[5])}});c._get.safe=!0;g.register.tags("dojox.dtl.contrib",
{data:["bind_data","bind_query"]});return c});