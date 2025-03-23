// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define('../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Handles ./commonProperties ./wmsUtils'.split(
  ' '
), function (v, g, d, F, G, k, H, z, I, J, K, A, w, B, C) {
  const D = { visible: 'visibleSublayers' },
    t = [102100, 3857, 102113, 900913],
    E = [3395, 54004]
  d = (function (x) {
    function p() {
      var a = x.apply(this, arguments) || this
      a._layerHandles = new w()
      a.extent = null
      a._scale = null
      a.view = null
      return a
    }
    v._inheritsLoose(p, x)
    p.prototype.toJSON = function () {
      const { extent: a, layer: b, layers: h } = this,
        { imageFormat: e, imageTransparency: m, spatialReferences: c, version: f } = b
      let { wkid: l } = this
      c && -1 === c.indexOf(l) && a.spatialReference.latestWkid && (l = a.spatialReference.latestWkid)
      const { xmin: n, ymin: q, xmax: r, ymax: y } = a,
        u = {
          bbox: '1.3.0' === b.version && C.coordsReversed(l) ? `${q},${n},${y},${r}` : `${n},${q},${r},${y}`,
          format: e,
          request: 'GetMap',
          service: 'WMS',
          styles: '',
          transparent: m,
          version: f,
        }
      isNaN(l) || ('1.3.0' === f ? (u.crs = 'EPSG:0') : (u.srs = 'EPSG:0'))
      return { ...u, layers: h }
    }
    v._createClass(p, [
      {
        key: 'layer',
        set: function (a) {
          this._get('layer') !== a &&
            (this._set('layer', a),
            this._layerHandles && (this._layerHandles.removeAll(), (this._layerHandles = null)),
            a &&
              (this._layerHandles || (this._layerHandles = new w()),
              this._layerHandles.add([
                a.sublayers.on('change', () => this.notifyChange('visibleSublayers')),
                a.on('wms-sublayer-update', (b) => this.notifyChange(D[b.propertyName])),
              ])))
        },
      },
      {
        key: 'layers',
        get: function () {
          const { visibleSublayers: a } = this
          return a
            .filter((b) => b.name)
            .map((b) => b.name)
            .join(',')
        },
      },
      {
        key: 'scale',
        get: function () {
          return null != this._scale ? this._scale : (this.view && this.view.scale) || 0
        },
        set: function (a) {
          this.view || ((this._scale = a), this.notifyChange('scale'))
        },
      },
      {
        key: 'version',
        get: function () {
          return (this._get('version') || 0) + 1
        },
      },
      {
        key: 'visibleSublayers',
        get: function () {
          const { layer: a, scale: b } = this,
            { sublayers: h } = a,
            e = [],
            m = (c) => {
              const { minScale: f, maxScale: l, sublayers: n, visible: q } = c,
                r = 0 === b || ((0 === f || b <= f) && (0 === l || b >= l))
              q && r && (n ? n.forEach(m) : e.unshift(c))
            }
          null == h ? void 0 : h.forEach(m)
          return e
        },
      },
      {
        key: 'wkid',
        get: function () {
          const { extent: a, layer: b } = this,
            h = b.spatialReferences
          let e = a.spatialReference && a.spatialReference.wkid
          h && -1 === h.indexOf(e) && a.spatialReference.latestWkid && (e = a.spatialReference.latestWkid)
          const m = t.some((c) => c === e)
          if (!h) return e
          if (m) {
            const c = []
            h.forEach((f) => {
              ;-1 < t.indexOf(f) && c.push(f)
            })
            c.length ||
              h.forEach((f) => {
                ;-1 < E.indexOf(f) && c.push(f)
              })
            e = 0 < c.length ? c[0] : t[0]
          }
          return e
        },
      },
    ])
    return p
  })(A)
  g.__decorate([k.property()], d.prototype, 'extent', void 0)
  g.__decorate([k.property()], d.prototype, 'layer', null)
  g.__decorate([k.property({ readOnly: !0, dependsOn: ['visibleSublayers'] })], d.prototype, 'layers', null)
  g.__decorate([k.property({ type: Number, dependsOn: ['view.scale'] })], d.prototype, 'scale', null)
  g.__decorate([k.property(B.combinedViewLayerTimeExtentProperty)], d.prototype, 'timeExtent', void 0)
  g.__decorate(
    [k.property({ type: Number, dependsOn: ['layers', 'layer.imageTransparency', 'timeExtent'], readOnly: !0 })],
    d.prototype,
    'version',
    null
  )
  g.__decorate([k.property()], d.prototype, 'view', void 0)
  g.__decorate(
    [k.property({ readOnly: !0, dependsOn: ['layer.sublayers', 'scale'] })],
    d.prototype,
    'visibleSublayers',
    null
  )
  g.__decorate([k.property({ dependsOn: [], autoTracked: !1 })], d.prototype, 'wkid', null)
  return (d = g.__decorate([z.subclass('esri.layers.support.ExportWMSImageParameters')], d))
})
