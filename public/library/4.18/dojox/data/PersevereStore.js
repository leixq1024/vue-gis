//>>built
define("dojo dojox require dojox/data/JsonQueryRestStore dojox/rpc/Client dojo/_base/url".split(" "),function(c,b,q){b.json.ref.serializeFunctions=!0;var m=c.declare("dojox.data.PersevereStore",b.data.JsonQueryRestStore,{useFullIdInQueries:!0,jsonQueryPagination:!1});m.getStores=function(d,r){d=d&&(d.match(/\/$/)?d:d+"/")||"/";d.match(/^\w*:\/\//)&&(q("dojox/io/xhrScriptPlugin"),b.io.xhrScriptPlugin(d,"callback",b.io.xhrPlugins.fullHttpAdapter));var t=c.xhr;c.xhr=function(e,g){(g.headers=g.headers||
{})["Server-Methods"]="false";return t.apply(c,arguments)};var h=b.rpc.Rest(d,!0);b.rpc._sync=r;h=h("Class/");var u,v={},y=0;h.addCallback(function(e){function g(a){!a["extends"]||!a["extends"].prototype||a.prototype&&a.prototype.isPrototypeOf(a["extends"].prototype)||(g(a["extends"]),b.rpc.Rest._index[a.prototype.__id]=a.prototype=c.mixin(c.delegate(a["extends"].prototype),a.prototype))}function w(a,n){if(a&&n)for(var k in a)"client"==a[k].runAt||n[k]||(n[k]=function(z){return function(){var x=c.rawXhrPost({url:this.__id,
postData:b.json.ref.toJson({method:z,id:y++,params:c._toArray(arguments)}),handleAs:"json"});x.addCallback(function(p){return p.error?Error(p.error):p.result});return x}}(k))}b.json.ref.resolveJson(e,{index:b.rpc.Rest._index,idPrefix:"/Class/",assignAbsoluteIds:!0});for(var l in e)if("object"==typeof e[l]){var f=e[l];g(f);w(f.methods,f.prototype=f.prototype||{});w(f.staticMethods,f);v[e[l].id]=new b.data.PersevereStore({target:new c._Url(d,e[l].id)+"/",schema:f})}return u=v});c.xhr=t;return r?u:h};
m.addProxy=function(){q("dojox/io/xhrPlugins");b.io.xhrPlugins.addProxy("/proxy/")};return m});