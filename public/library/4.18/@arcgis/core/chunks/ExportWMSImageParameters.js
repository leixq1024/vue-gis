/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import { _ as e } from './tslib.es6.js'
import './object.js'
import './Logger.js'
import { property as s } from '../core/accessorSupport/decorators/property.js'
import t from '../core/Accessor.js'
import './ensureType.js'
import { subclass as r } from '../core/accessorSupport/decorators/subclass.js'
import '../core/urlUtils.js'
import './resourceExtension.js'
import a from '../core/Handles.js'
import { c as l } from './commonProperties2.js'
import { c as i } from './wmsUtils.js'
const n = { visible: 'visibleSublayers' },
  o = [102100, 3857, 102113, 900913],
  p = [3395, 54004]
let c = class extends t {
  constructor() {
    super(...arguments), (this._layerHandles = new a()), (this.extent = null), (this._scale = null), (this.view = null)
  }
  set layer(e) {
    this._get('layer') !== e &&
      (this._set('layer', e),
      this._layerHandles && (this._layerHandles.removeAll(), (this._layerHandles = null)),
      e &&
        (this._layerHandles || (this._layerHandles = new a()),
        this._layerHandles.add([
          e.sublayers.on('change', () => this.notifyChange('visibleSublayers')),
          e.on('wms-sublayer-update', (e) => this.notifyChange(n[e.propertyName])),
        ])))
  }
  get layers() {
    const { visibleSublayers: e } = this
    return e
      .filter((e) => e.name)
      .map((e) => e.name)
      .join(',')
  }
  get scale() {
    return null != this._scale ? this._scale : (this.view && this.view.scale) || 0
  }
  set scale(e) {
    this.view || ((this._scale = e), this.notifyChange('scale'))
  }
  get version() {
    return (this._get('version') || 0) + 1
  }
  get visibleSublayers() {
    const { layer: e, scale: s } = this,
      { sublayers: t } = e,
      r = [],
      a = (e) => {
        const { minScale: t, maxScale: l, sublayers: i, visible: n } = e
        n && (0 === s || ((0 === t || s <= t) && (0 === l || s >= l))) && (i ? i.forEach(a) : r.unshift(e))
      }
    return null == t || t.forEach(a), r
  }
  get wkid() {
    const { extent: e, layer: s } = this,
      t = s.spatialReferences
    let r = e.spatialReference && e.spatialReference.wkid
    t && -1 === t.indexOf(r) && e.spatialReference.latestWkid && (r = e.spatialReference.latestWkid)
    const a = o.some((e) => e === r)
    if (!t) return r
    if (a) {
      const e = []
      t.forEach((s) => {
        o.indexOf(s) > -1 && e.push(s)
      }),
        e.length ||
          t.forEach((s) => {
            p.indexOf(s) > -1 && e.push(s)
          }),
        (r = e.length > 0 ? e[0] : o[0])
    }
    return r
  }
  toJSON() {
    const { extent: e, layer: s, layers: t } = this,
      { imageFormat: r, imageTransparency: a, spatialReferences: l, version: n } = s
    let { wkid: o } = this
    l && -1 === l.indexOf(o) && e.spatialReference.latestWkid && (o = e.spatialReference.latestWkid)
    const { xmin: p, ymin: c, xmax: y, ymax: u } = e,
      m = {
        bbox: '1.3.0' === s.version && i(o) ? `${c},${p},${u},${y}` : `${p},${c},${y},${u}`,
        format: r,
        request: 'GetMap',
        service: 'WMS',
        styles: '',
        transparent: a,
        version: n,
      }
    return isNaN(o) || ('1.3.0' === n ? (m.crs = 'EPSG:' + o) : (m.srs = 'EPSG:' + o)), { ...m, layers: t }
  }
}
e([s()], c.prototype, 'extent', void 0),
  e([s()], c.prototype, 'layer', null),
  e([s({ readOnly: !0, dependsOn: ['visibleSublayers'] })], c.prototype, 'layers', null),
  e([s({ type: Number, dependsOn: ['view.scale'] })], c.prototype, 'scale', null),
  e([s(l)], c.prototype, 'timeExtent', void 0),
  e(
    [s({ type: Number, dependsOn: ['layers', 'layer.imageTransparency', 'timeExtent'], readOnly: !0 })],
    c.prototype,
    'version',
    null
  ),
  e([s()], c.prototype, 'view', void 0),
  e([s({ readOnly: !0, dependsOn: ['layer.sublayers', 'scale'] })], c.prototype, 'visibleSublayers', null),
  e([s({ dependsOn: [], autoTracked: !1 })], c.prototype, 'wkid', null),
  (c = e([r('esri.layers.support.ExportWMSImageParameters')], c))
var y = c
export { y as E }
