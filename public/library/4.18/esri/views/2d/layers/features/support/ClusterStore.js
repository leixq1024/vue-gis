// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../../../../../core/maybe ../../../../../geometry/support/spatialReferenceUtils ../../../../../geometry/SpatialReference ../../../../../geometry/support/Ellipsoid ../../../../../geometry ../../../../../core/Evented ../../../../../core/accessorSupport/diffUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/featureConversionUtils ../../../../../geohash/geohashUtils ./FeatureSetReaderJSON ../../../../../geohash/GeohashTree ../../../../../layers/graphics/data/projectionSupport ../../../engine/webgl/definitions ../Store2D".split(" "),
function(H,I,K,x,R,C,y,L,S,M,N,T,O,D,U,V,E,p,W){let P=function(z){function r(a,b,c,d,e){b=new T([],[b,c]);a=z.call(this,b,d,null,a)||this;a.geohashBoundsInfo=e;return a}I._inheritsLoose(r,z);r.create=function(a,b,c,d,e,f,l,m){b=new r(b,c,d,f,l);b.displayId=a.createDisplayId(!0);b.referenceId=m;b.tileLevel=e;return b};var g=r.prototype;g.update=function(a,b,c,d,e,f){this.geometry.coords[0]=a;this.geometry.coords[1]=b;this.tileLevel=c;this.attributes=d;this.geohashBoundsInfo=e;this.referenceId=null;
this.referenceId=f;return this};g.toJSON=function(){return{objectId:this.objectId,referenceId:1===this.attributes.cluster_count?this.referenceId:null,attributes:{...this.attributes,clusterId:this.objectId},geometry:{x:this.geometry.coords[0],y:this.geometry.coords[1]}}};I._createClass(r,[{key:"count",get:function(){return this.attributes.cluster_count}}]);return r}(N);L=function(z){function r(a,b,c){var d=z.call(this,a,c)||this;d.events=new S;d._geohashLevel=0;d._aggregateValueRanges={};d._aggregateValueRangesChanged=
!1;d._geohashBuf=[];d._clusters=new Map;d._tiles=new Map;d.geometryInfo=a.geometryInfo;d._spatialReference=b;d._projectionSupportCheck=E.checkProjectionSupport(b,C.WGS84);d._bitsets.geohash=c.getBitset(c.createBitset());d._bitsets.inserted=c.getBitset(c.createBitset());return d}I._inheritsLoose(r,z);var g=r.prototype;g.updateSchema=async function(a,b){var c=this._schema;try{await z.prototype.updateSchema.call(this,a,b),await this._projectionSupportCheck}catch(d){}c=M.diff(c,b);a.mesh&&(a.targets.aggregate=
!0);if(b&&(!x.isNone(c)||a.source||a.storage.filters)){if(M.hasDiff(c,"params.fields")||!this._tree||a.source)this._tree=new V.GeohashTree(this._statisticFields),this._rebuildTree(),K("esri-2d-update-debug")&&console.debug("Aggregate mesh needs update due to tree changing");K("esri-2d-update-debug")&&console.debug("Applying Update - ClusterStore:",c);a.mesh=!0;a.targets[b.name]=!0;this._aggregateValueRanges={}}};g.sweepFeatures=function(a,b){this._bitsets.inserted.forEachSet(c=>{a.has(c)||(c=b.lookupByDisplayIdUnsafe(c),
this._remove(c))})};g.sweepClusters=function(a,b,c){this._clusters.forEach((d,e)=>{d&&d.tileLevel!==c&&(a.releaseDisplayId(d.displayId),b.unsetAttributeData(d.displayId),this._clusters.delete(e))})};g.onTileData=function(a,b,c,d,e){if(!this._schema||x.isNone(b.addOrUpdate))return b;var f=this._tree,l=this._getTransforms(a,this._spatialReference);{const m=b.addOrUpdate.getCursor();for(;m.next();)this._update(m,d,f)}if(!e)return b;d=[];this._getClustersForTile(d,a,this._schema.params.clusterRadius,
c,f,l);b.type="replace"===b.type?"replace":"update";b.addOrUpdate=U.FeatureSetReaderJSON.fromOptimizedFeatures(d,"esriGeometryPoint");b.addOrUpdate._storage=c;for(f=b.addOrUpdate.getCursor();f.next();)l=f.getDisplayId(),this._bitsets.computed.unset(l),this.setComputedAttributes(c,f,l,a.scale);this._aggregateValueRangesChanged&&b.end&&(this.events.emit("valueRangesChanged",{valueRanges:this._aggregateValueRanges}),this._aggregateValueRangesChanged=!1);return b};g.onTileUpdate=function({added:a,removed:b}){a.length&&
this._setGeohashLevel(a[0].level);if(this._schema){var c=this._schema.params.clusterRadius;b.forEach(d=>{this._tiles.delete(d.key.id);this._markTileClustersForDeletion(d,c)})}};g.getAggregate=function(a){let b=null;this._clusters.forEach(c=>{c&&c.displayId===a&&(b=c.toJSON())});return b};g.getDisplayId=function(a){return(a=this._clusters.get(a))?a.displayId:null};g.getFeatureDisplayIdsForAggregate=function(a){a=this._clusters.get(a);if(!a)return[];a=a.geohashBoundsInfo;return this._tree.getRegionDisplayIds(a.xLL,
a.yLL,a.xTR,a.yTR,a.level)};g.getDisplayIdForReferenceId=function(a){let b;this._clusters.forEach(c=>{c&&c.referenceId===a&&(b=c.displayId)});return b};g.getAggregateValueRanges=function(){return this._aggregateValueRanges};g.forEach=function(a){this._clusters.forEach((b,c)=>{b&&a(b,c)})};g.size=function(){let a=0;this.forEach(b=>a++);return a};g._rebuildTree=function(){this._bitsets.computed.clear();this._bitsets.inserted.clear();this._bitsets.geohash.clear();this._tree&&this._tree.clear()};g._remove=
function(a){const b=a.getDisplayId(),c=a.getXHydrate(),d=a.getYHydrate(),e=this._geohashBuf[2*b],f=this._geohashBuf[2*b+1];this._bitsets.inserted.has(b)&&(this._bitsets.inserted.unset(b),this._tree.removeCursor(a,c,d,e,f,this._geohashLevel))};g._update=function(a,b,c){const d=a.getDisplayId(),e=this._bitsets.inserted;b=b.isVisible(d);var f=e.has(d);b!==f&&(b?(b=a.getXHydrate(),f=a.getYHydrate(),this._setGeohash(d,b,f)&&(c.insertCursor(a,d,b,f,this._geohashBuf[2*d],this._geohashBuf[2*d+1],this._geohashLevel),
e.set(d))):this._remove(a))};g._setGeohash=function(a,b,c){if(this._bitsets.geohash.has(a))return!0;const d=this._geohashBuf;if(this._spatialReference.isWebMercator)b=b/y.earth.radius*57.29577951308232,D.setGeohashBuf(d,a,57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*c/y.earth.radius))),b-360*Math.floor((b+180)/360),12);else{c=E.project({x:b,y:c},this._spatialReference,C.WGS84);if(!c)return!1;D.setGeohashBuf(d,a,c.y,c.x,12)}this._bitsets.geohash.set(a);return!0};g._getClustersForTile=function(a,
b,c,d,e,f,l=!0){var m=this._schema.params.clusterPixelBuffer,q=2*c;c=this._getGeohashLevel(b.key.level);const A=Math.ceil(Math.pow(2,b.key.level)*p.TILE_SIZE/q);var u=Math.ceil(m/q)+0,t=Math.ceil(p.TILE_SIZE/q);const {row:F,col:v}=b.key;var h=Math.floor(v*p.TILE_SIZE/q)-u;q=Math.floor(F*p.TILE_SIZE/q)-u;m=h+t+2*u;u=q+t+2*u;for(t=b.tileInfoView.getLODInfoAt(b.key.level);h<=m;h++)for(let B=q;B<=u;B++){var k=h;t.wrap&&(k=0>h?h+A:h%A);const J=t.wrap&&0>h,G=t.wrap&&h%A!==h;k=this._lookupCluster(d,t,b.key.level,
k,B,c,e);if(x.isSome(k)){var n=x.andThen(f,w=>J?w.left:G?w.right:w.tile);if((!l||!x.isNone(n))&&k.count&&x.isSome(n)&&l){const w=k.geometry.clone();let Q=k.attributes;w.coords[0]=O.quantizeX(n,w.coords[0]);w.coords[1]=O.quantizeY(n,w.coords[1]);1===k.count&&x.isSome(k.referenceId)&&(Q={...k.attributes,referenceId:k.referenceId});n=new N(w,Q);n.displayId=k.displayId;a.push(n)}}}};g._getGeohashLevel=function(a){return Math.min(Math.ceil(a/2+2),12)};g._setGeohashLevel=function(a){a=this._getGeohashLevel(a);
a=1*(Math.floor(a/1)+1)-1;this._geohashLevel!==a&&(this._geohashLevel=a,this._rebuildTree())};g._getTransforms=function(a,b){const c={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};b=R.getInfo(b);if(!b)return{tile:c,left:null,right:null};const [d,e]=b.valid;return{tile:c,left:{...c,translate:[e,a.bounds[3]]},right:{...c,translate:[d-e+a.bounds[0],a.bounds[3]]}}};g._getClusterId=function(a,b,c){return(a&15)<<28|(b&16383)<<14|c&16383};g._markForDeletion=
function(a,b,c){a=this._getClusterId(a,b,c);this._clusters.delete(a)};g._getClusterBounds=function(a,b,c){var d=this._schema.params.clusterRadius,e=2*d;b=c%2?b*e:b*e-d;const f=c*e;d=b+e;c=Math.pow(2,a.level)*p.TILE_SIZE;a.wrap&&0>b&&(b=0);a.wrap&&d>c&&(d=c);c=f/p.TILE_SIZE;d/=p.TILE_SIZE;e=(f-e)/p.TILE_SIZE;b=a.getXForColumn(b/p.TILE_SIZE);c=a.getYForRow(c);d=a.getXForColumn(d);a=a.getYForRow(e);return[b,c,d,a]};g._lookupCluster=function(a,b,c,d,e,f,l){const m=this._getClusterId(c,d,e),q=this._clusters.get(m),
[A,u,t,F]=this._getClusterBounds(b,d,e);var v={x:A,y:u};e={x:t,y:F};var h=d=b=0,k=0;if(this._spatialReference.isWebMercator)b=v.x/y.earth.radius*57.29577951308232,b-=360*Math.floor((b+180)/360),d=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*v.y/y.earth.radius))),h=e.x/y.earth.radius*57.29577951308232,h-=360*Math.floor((h+180)/360),k=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*e.y/y.earth.radius)));else{d=E.project(v,this._spatialReference,C.WGS84);e=E.project(e,this._spatialReference,
C.WGS84);if(!d||!e)return null;b=d.x;d=d.y;h=e.x;k=e.y}v={geohashX:0,geohashY:0};e={geohashX:0,geohashY:0};D.setGeohashXY(v,d,b,f);D.setGeohashXY(e,k,h,f);d=v.geohashX;h=v.geohashY;k=e.geohashX;e=e.geohashY;b={xLL:d,yLL:h,xTR:k,yTR:e,level:f};d=l.getRegionStatistics(d,h,k,e,f);const {count:n,xTotal:B,yTotal:J,referenceId:G}=d;f=n?B/n:0;l=n?J/n:0;if(0===n)return this._clusters.set(m,null),null;d={cluster_count:n,...d.attributes};a=x.isSome(q)?q.update(f,l,c,d,b,G):P.create(a,m,f,l,c,d,b,G);0===n&&
(a.geometry.coords[0]=(A+t)/2,a.geometry.coords[1]=(u+F)/2);this._clusters.set(m,a);this._updateAggregateValueRangeForCluster(a,a.tileLevel);return a};g._updateAggregateValueRangeForCluster=function(a,b){const c=this._aggregateValueRanges[b]||{minValue:Infinity,maxValue:0},d=c.minValue,e=c.maxValue;c.minValue=Math.min(d,a.count);c.maxValue=Math.max(e,a.count);this._aggregateValueRanges[b]=c;if(d!==c.minValue||e!==c.maxValue)this._aggregateValueRangesChanged=!0};g._markTileClustersForDeletion=function(a,
b){var c=2*b;b=Math.ceil(p.TILE_SIZE/c);const {row:d,col:e}=a.key,f=Math.floor(e*p.TILE_SIZE/c);c=Math.floor(d*p.TILE_SIZE/c);for(let l=f;l<f+b;l++)for(let m=c;m<c+b;m++)this._markForDeletion(a.key.level,l,m)};return r}(W.Store2D);H.ClusterInfo=P;H.ClusterStore=L;Object.defineProperty(H,"__esModule",{value:!0})});