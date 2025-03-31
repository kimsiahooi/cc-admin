import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$4 } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$1 } from "./useDateFormat-0JAl-QSL.js";
import { Link } from "@inertiajs/vue3";
import { Package2 } from "lucide-vue-next";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderDetailsLink",
  __ssrInlineRender: true,
  props: {
    href: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Link), { href: _ctx.href }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Package2), { class: "inline-block size-5 cursor-pointer" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Package2), { class: "inline-block size-5 cursor-pointer" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Link), { href: _ctx.href }, {
                            default: withCtx(() => [
                              createVNode(unref(Package2), { class: "inline-block size-5 cursor-pointer" })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Show Orders</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Show Orders")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), { href: _ctx.href }, {
                          default: withCtx(() => [
                            createVNode(unref(Package2), { class: "inline-block size-5 cursor-pointer" })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode("p", null, "Show Orders")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), { href: _ctx.href }, {
                        default: withCtx(() => [
                          createVNode(unref(Package2), { class: "inline-block size-5 cursor-pointer" })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode("p", null, "Show Orders")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Customer/OrderDetailsLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
