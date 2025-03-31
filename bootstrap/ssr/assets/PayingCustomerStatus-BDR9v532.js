import { defineComponent, unref, withCtx, createVNode, useSSRContext, mergeProps, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5 } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$2 } from "./useDateFormat-0JAl-QSL.js";
import { usePage } from "@inertiajs/vue3";
import { SquareArrowOutUpRight } from "lucide-vue-next";
import { _ as _sfc_main$6 } from "./index-n6Jd8ds3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomerLink",
  __ssrInlineRender: true,
  props: {
    customerId: {}
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
                        _push4(`<a${ssrRenderAttr("href", `${unref(page).props.domain_api_url}/wp-admin/user-edit.php?user_id=${_ctx.customerId}`)} target="_blank"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(SquareArrowOutUpRight), { class: "inline-block size-5 cursor-pointer" }, null, _parent4, _scopeId3));
                        _push4(`</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: `${unref(page).props.domain_api_url}/wp-admin/user-edit.php?user_id=${_ctx.customerId}`,
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
                          href: `${unref(page).props.domain_api_url}/wp-admin/user-edit.php?user_id=${_ctx.customerId}`,
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
                        href: `${unref(page).props.domain_api_url}/wp-admin/user-edit.php?user_id=${_ctx.customerId}`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Customer/CustomerLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const className = "capitalize";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PayingCustomerStatus",
  __ssrInlineRender: true,
  props: {
    IsPayingCustomer: { type: [Boolean, null] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.IsPayingCustomer) {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
          class: ["bg-success text-success-foreground", className]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Yes`);
            } else {
              return [
                createTextVNode("Yes")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
          class: className,
          variant: "destructive"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`No`);
            } else {
              return [
                createTextVNode("No")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Customer/PayingCustomerStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
