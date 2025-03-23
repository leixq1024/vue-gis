/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{E as o}from"../../chunks/Evented.js";import i from"../../core/Collection.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../chunks/resourceExtension.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import r from"../../core/Handles.js";import{init as a,on as l,watch as m}from"../../core/watchUtils.js";import"../../core/HandleOwner.js";import"../../chunks/ActionSlider.js";import{b as n}from"../../chunks/layerListUtils.js";import c from"./ListItem.js";const p="map",d="tables",h="layer-list-mode",u=i.ofType(c);let j=class extends o.EventedAccessor{constructor(t){super(t),this._handles=new r,this.listItemCreatedFunction=null,this.tableItems=new u,this.map=null}initialize(){this._handles.add([a(this,["map","map.loaded"],(()=>this._mapHandles()))],p)}destroy(){this._handles.destroy(),this._handles=null,this.map=null,this.tableItems.removeAll()}get state(){var t;const s=null==(t=this.map)?void 0:t.loadStatus;return"string"==typeof s?"loaded"===s?"ready":"loading"===s?"loading":"disabled":"ready"}triggerAction(t,s){t&&!t.disabled&&this.emit("trigger-action",{action:t,item:s})}_mapHandles(){const{_handles:t,map:s}=this;t.remove(d),this._compileList(),s&&t.add([l(this,"map.tables","change",(()=>this._compileList())),a(this,"map.tables",(()=>this._compileList())),a(this,"listItemCreatedFunction",(()=>this._compileList()))],d)}_modifyListItem(t){if("function"==typeof this.listItemCreatedFunction){const s={item:t};this.listItemCreatedFunction.call(null,s)}}_removeAllItems(){this.tableItems.removeAll()}_getViewableTables(t){if(t)return t.filter((t=>"hide"!==n(t)))}_watchTablesListMode(t){const{_handles:s}=this;s.remove(h),t&&t.forEach((t=>{s.add(m(t,"listMode",(()=>this._compileList())),h)}))}_compileList(){var t;const s=null==(t=this.map)?void 0:t.tables;this._watchTablesListMode(s);const e=this._getViewableTables(s);e&&e.length?(this._createNewItems(e),this._modifyOrRemoveItems(e),this._sortItems(e)):this._removeAllItems()}_createNewItems(t){const{tableItems:s}=this;t.forEach((t=>{s.find((s=>s.layer===t))||s.add(new c({layer:t}))}))}_modifyOrRemoveItems(t){const{tableItems:s}=this;s.forEach((e=>{if(!e)return;t&&t.find((t=>e.layer===t))?this._modifyListItem(e):s.remove(e)}))}_sortItems(t){const{tableItems:s}=this;s.sort(((s,e)=>{const o=t.indexOf(s.layer),i=t.indexOf(e.layer);return o>i?-1:o<i?1:0}))}};t([s()],j.prototype,"listItemCreatedFunction",void 0),t([s({type:u})],j.prototype,"tableItems",void 0),t([s()],j.prototype,"map",void 0),t([s({dependsOn:["map","map.loadStatus"],readOnly:!0})],j.prototype,"state",null),j=t([e("esri.widgets.TableList.TableListViewModel")],j);var f=j;export default f;
