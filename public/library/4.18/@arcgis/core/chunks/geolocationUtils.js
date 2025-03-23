/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{h as t}from"./object.js";import e from"../config.js";import{L as r}from"./Logger.js";import{create as o,resolve as i}from"../core/promiseUtils.js";import s from"../core/Error.js";import"../core/urlUtils.js";import"../request.js";import"../geometry/Geometry.js";import n from"../geometry/Point.js";import{geographicToWebMercator as u}from"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import a from"../portal/Portal.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";import"../geometry.js";import m from"../tasks/support/ProjectParameters.js";import{p as c}from"./trimExtend.js";import"../tasks/support/GeneralizeParameters.js";import"../tasks/support/LengthsParameters.js";import"../tasks/support/OffsetParameters.js";import"../tasks/support/RelationParameters.js";import"../tasks/support/TrimExtendParameters.js";const p=r.getLogger("esri.widgets.support.geolocationUtils"),l={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};function g(){return function(){const e=t("esri-geolocation");return e||p.warn("geolocation-unsupported","Geolocation unsupported."),e}()&&function(){const e=t("esri-secure-context");return e||p.warn("insecure-context","Geolocation requires a secure origin."),e}()}function f(t){return t||(t=l),o(((e,r)=>{setTimeout((()=>r(new s("geolocation:timeout","getting the current geolocation position timed out"))),15e3),navigator.geolocation.getCurrentPosition(e,r,t)}))}function d(t,r){const{position:o,view:p}=t;return function(t,r,o){if(!r)return i(t);const n=r.spatialReference;if(n.isWGS84)return i(t);if(n.isWebMercator)return i(u(t));return function(t){if(e.geometryServiceUrl)return i(e.geometryServiceUrl);const r=a.getDefault();return r.load(t).catch((()=>{})).then((()=>r.get("helperServices.geometry.url")))}(o).then((e=>{if(!e)throw new s("geometry-service:missing-url","Geometry service URL is missing");const r=new m({geometries:[t],outSR:n});return c(e,r,o).then((t=>t[0]))}))}(function(t){const e=t&&t.coords;if(!e)return null;return new n({longitude:e.longitude,latitude:e.latitude,z:e.altitude||null,spatialReference:{wkid:4326}})}(function(t){const e=t&&t.coords||{},r={accuracy:e.accuracy,altitude:e.altitude,altitudeAccuracy:e.altitudeAccuracy,heading:e.heading,latitude:e.latitude,longitude:e.longitude,speed:e.speed};return t?{coords:r,timestamp:t.timestamp}:t}(o)),p,r)}export{f as g,d as p,g as s};
