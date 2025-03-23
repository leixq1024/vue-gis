// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define('../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../geometry/Extent ../../layers/RefreshableLayerView ../../../layers/support/ExportWMSImageParameters ../../layers/LayerView ../../layers/WMSLayerView ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy'.split(
  ' '
), function (A, l, f, B, O, r, P, C, D, Q, R, S, t, E, F, G, H, I, J, K, L) {
  const M = B.getLogger('esri.views.2d.layers.WMSLayerView2D')
  f = (function (u) {
    function m() {
      return u.apply(this, arguments) || this
    }
    A._inheritsLoose(m, u)
    var b = m.prototype
    b.initialize = function () {
      const { layer: a, view: c } = this
      a.supportsSpatialReference(c.spatialReference) ||
        this.addResolvingPromise(
          t.reject(
            new D(
              'layerview:spatial-reference-incompatible',
              'The spatial references supported by this WMS layer are incompatible with the spatial reference of the view',
              { layer: a }
            )
          )
        )
    }
    b.hitTest = function () {
      return null
    }
    b.update = function (a) {
      this.strategy.update(a).catch((c) => {
        t.isAbortError(c) || M.error(c)
      })
    }
    b.attach = function () {
      const { layer: a, view: c } = this,
        { imageMaxHeight: g, imageMaxWidth: d } = a
      this._bitmapContainer = new J.BitmapContainer()
      this.container.addChild(this._bitmapContainer)
      this.strategy = new L({
        container: this._bitmapContainer,
        fetchSource: this.fetchImage.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
        imageMaxHeight: g,
        imageMaxWidth: d,
        imageRotationSupported: !1,
        imageNormalizationSupported: !1,
        hidpi: !1,
      })
      this._exportWMSImageParameters = new G({ layer: a, view: c })
      this.handles.add(
        this._exportWMSImageParameters.watch('version', (e) => {
          this._exportImageVersion !== e && ((this._exportImageVersion = e), this.requestUpdate())
        }),
        'wms'
      )
    }
    b.detach = function () {
      this.handles.remove('wms')
      this.strategy.destroy()
      this._exportWMSImageParameters.layer = null
      this._exportWMSImageParameters.destroy()
      this._exportWMSImageParameters = null
      this.container.removeChild(this._bitmapContainer)
      this._bitmapContainer.removeAllChildren()
    }
    b.moveStart = function () {}
    b.viewChange = function () {}
    b.moveEnd = function () {
      this.requestUpdate()
    }
    b.createFetchPopupFeaturesQuery = function (a) {
      const { view: c } = this,
        g = this._bitmapContainer,
        { x: d, y: e } = a,
        { spatialReference: N } = c
      let h = null,
        n = 0,
        v = 0
      g.children.some((k) => {
        const { width: w, height: x, resolution: y, x: p, y: q } = k
        k = p + y * w
        const z = q - y * x
        return d >= p && d <= k && e <= q && e >= z
          ? ((h = new E({ xmin: p, ymin: z, xmax: k, ymax: q, spatialReference: N })), (n = w), (v = x), !0)
          : !1
      })
      a = h.width / n
      return { extent: h, width: n, height: v, x: Math.round((d - h.xmin) / a), y: Math.round((h.ymax - e) / a) }
    }
    b.doRefresh = async function () {
      this.requestUpdate()
    }
    b.isUpdating = function () {
      return this.strategy.updating || this.updateRequested
    }
    b.fetchImage = function (a, c, g, d) {
      return this.layer.fetchImage(a, c, g, {
        timeExtent: this._exportWMSImageParameters.timeExtent,
        timestamp: this.refreshTimestamp,
        ...d,
      })
    }
    return m
  })(I.WMSLayerView(F.RefreshableLayerView(K.LayerView2DMixin(H))))
  l.__decorate([r.property()], f.prototype, 'strategy', void 0)
  l.__decorate([r.property({ dependsOn: ['strategy.updating'] })], f.prototype, 'updating', void 0)
  return (f = l.__decorate([C.subclass('esri.views.2d.layers.WMSLayerView2D')], f))
})
