import { defineComponent, unref, withCtx, createVNode, useSSRContext, mergeProps, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5 } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$2 } from "./useDateFormat-0JAl-QSL.js";
import { usePage } from "@inertiajs/vue3";
import { SquareArrowOutUpRight } from "lucide-vue-next";
import { _ as _sfc_main$6 } from "./index-n6Jd8ds3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderLink",
  __ssrInlineRender: true,
  props: {
    orderId: {}
  },
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$2), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a${ssrRenderAttr("href", `${unref(page).props.domain_api_url}/wp-admin/post.php?post=${_ctx.orderId}&action=edit`)} target="_blank"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(SquareArrowOutUpRight), { class: "inline-block size-5 cursor-pointer" }, null, _parent4, _scopeId3));
                        _push4(`</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: `${unref(page).props.domain_api_url}/wp-admin/post.php?post=${_ctx.orderId}&action=edit`,
                            target: "_blank"
                          }, [
                            createVNode(unref(SquareArrowOutUpRight), { class: "inline-block size-5 cursor-pointer" })
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Website Link</p>`);
                      } else {
                        return [
                          createVNode("p", null, "Website Link")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: `${unref(page).props.domain_api_url}/wp-admin/post.php?post=${_ctx.orderId}&action=edit`,
                          target: "_blank"
                        }, [
                          createVNode(unref(SquareArrowOutUpRight), { class: "inline-block size-5 cursor-pointer" })
                        ], 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createVNode("p", null, "Website Link")
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
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: `${unref(page).props.domain_api_url}/wp-admin/post.php?post=${_ctx.orderId}&action=edit`,
                        target: "_blank"
                      }, [
                        createVNode(unref(SquareArrowOutUpRight), { class: "inline-block size-5 cursor-pointer" })
                      ], 8, ["href"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode("p", null, "Website Link")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Order/OrderLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const className = "capitalize";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderStatus",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.status === "failed" || _ctx.status === "cancelled" || _ctx.status === "trash" || _ctx.status === "refunded") {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
          variant: "destructive",
          class: className
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.status)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.status), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (_ctx.status === "completed") {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
          class: ["bg-success text-success-foreground", className]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.status)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.status), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({ class: className }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.status)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.status), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Order/OrderStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
