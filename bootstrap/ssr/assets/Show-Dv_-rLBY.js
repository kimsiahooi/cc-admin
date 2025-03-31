import { defineComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { a as _sfc_main$5, _ as _sfc_main$7 } from "./OrderStatus-CnV41tVV.js";
import { _ as _sfc_main$8 } from "./index-n6Jd8ds3.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$6 } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$1, a as _sfc_main$9 } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$c, d as _sfc_main$d, e as _sfc_main$e, f as _sfc_main$f } from "./TableHeader-DRWA9O97.js";
import { u as useDateFormat } from "./useDateFormat-0JAl-QSL.js";
import { Head, Link } from "@inertiajs/vue3";
import "lucide-vue-next";
import "class-variance-authority";
import "./Button-DbljGXnF.js";
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "reka-ui";
import "./Input-DuD_s7Py.js";
import "@vueuse/core";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    var _a, _b;
    const dateFormat = useDateFormat();
    const breadcrumbs = [
      {
        title: "Orders",
        href: route("orders.index")
      },
      {
        title: ((_a = __props.order) == null ? void 0 : _a.id.toString()) || "",
        href: ((_b = __props.order) == null ? void 0 : _b.id) ? route("orders.show", __props.order.id) : "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Order ID ${(_a2 = _ctx.order) == null ? void 0 : _a2.id}`
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { breadcrumbs }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4"${_scopeId}>`);
            if (_ctx.order) {
              _push2(`<div class="space-y-5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "space-x-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>Order ID ${ssrInterpolate(_ctx.order.id)}</span> `);
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  class: "ml-2",
                                  "order-id": _ctx.order.id
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", null, "Order ID " + toDisplayString(_ctx.order.id), 1),
                                  createTextVNode(),
                                  createVNode(_sfc_main$5, {
                                    class: "ml-2",
                                    "order-id": _ctx.order.id
                                  }, null, 8, ["order-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Order ID " + toDisplayString(_ctx.order.id), 1),
                                createTextVNode(),
                                createVNode(_sfc_main$5, {
                                  class: "ml-2",
                                  "order-id": _ctx.order.id
                                }, null, 8, ["order-id"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Status:</label><p${_scopeId3}>`);
                          if (_ctx.order.status) {
                            _push4(ssrRenderComponent(_sfc_main$7, {
                              status: _ctx.order.status
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<span${_scopeId3}>-</span>`);
                          }
                          _push4(`</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Currency:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.currency || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Created:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.order.date_created) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Modified:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.order.date_modified) || "-")}</p></div>`);
                          if ((_a3 = _ctx.order.coupon_lines) == null ? void 0 : _a3.length) {
                            _push4(`<div class="space-y-1"${_scopeId3}><label${_scopeId3}>Coupon(s):</label><div class="flex flex-wrap items-center gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(_ctx.order.coupon_lines, (coupon) => {
                              _push4(ssrRenderComponent(unref(_sfc_main$8), {
                                key: coupon.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(coupon.code)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(coupon.code), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="space-y-1"${_scopeId3}><label${_scopeId3}>Discount:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.discount_total || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Shipping:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.shipping_total || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Tax:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.total_tax || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Total:</label><p${_scopeId3}><strong${_scopeId3}>${ssrInterpolate(_ctx.order.total || "-")}</strong></p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Customer ID:</label><div${_scopeId3}>`);
                          if (_ctx.order.customer_id) {
                            _push4(ssrRenderComponent(unref(Link), {
                              href: _ctx.route("customers.show", _ctx.order.customer_id),
                              class: "underline"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(_ctx.order.customer_id)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(_ctx.order.customer_id), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<p${_scopeId3}>-</p>`);
                          }
                          _push4(`</div></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Customer Note:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.customer_note || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Payment Method:</label><p${_scopeId3}>${ssrInterpolate(_ctx.order.payment_method_title || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Paid:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.order.date_paid) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Completed:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.order.date_completed) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", null, [
                                  _ctx.order.status ? (openBlock(), createBlock(_sfc_main$7, {
                                    key: 0,
                                    status: _ctx.order.status
                                  }, null, 8, ["status"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Currency:"),
                                createVNode("p", null, toDisplayString(_ctx.order.currency || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_modified) || "-"), 1)
                              ]),
                              ((_b2 = _ctx.order.coupon_lines) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-1"
                              }, [
                                createVNode("label", null, "Coupon(s):"),
                                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.coupon_lines, (coupon) => {
                                    return openBlock(), createBlock(unref(_sfc_main$8), {
                                      key: coupon.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(coupon.code), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Discount:"),
                                createVNode("p", null, toDisplayString(_ctx.order.discount_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping:"),
                                createVNode("p", null, toDisplayString(_ctx.order.shipping_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax:"),
                                createVNode("p", null, toDisplayString(_ctx.order.total_tax || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total:"),
                                createVNode("p", null, [
                                  createVNode("strong", null, toDisplayString(_ctx.order.total || "-"), 1)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer ID:"),
                                createVNode("div", null, [
                                  _ctx.order.customer_id ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("customers.show", _ctx.order.customer_id),
                                    class: "underline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.order.customer_id), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer Note:"),
                                createVNode("p", null, toDisplayString(_ctx.order.customer_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Payment Method:"),
                                createVNode("p", null, toDisplayString(_ctx.order.payment_method_title || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Paid:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_paid) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Completed:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_completed) || "-"), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Order ID " + toDisplayString(_ctx.order.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                class: "ml-2",
                                "order-id": _ctx.order.id
                              }, null, 8, ["order-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", null, [
                                  _ctx.order.status ? (openBlock(), createBlock(_sfc_main$7, {
                                    key: 0,
                                    status: _ctx.order.status
                                  }, null, 8, ["status"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Currency:"),
                                createVNode("p", null, toDisplayString(_ctx.order.currency || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_modified) || "-"), 1)
                              ]),
                              ((_a3 = _ctx.order.coupon_lines) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-1"
                              }, [
                                createVNode("label", null, "Coupon(s):"),
                                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.coupon_lines, (coupon) => {
                                    return openBlock(), createBlock(unref(_sfc_main$8), {
                                      key: coupon.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(coupon.code), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Discount:"),
                                createVNode("p", null, toDisplayString(_ctx.order.discount_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping:"),
                                createVNode("p", null, toDisplayString(_ctx.order.shipping_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax:"),
                                createVNode("p", null, toDisplayString(_ctx.order.total_tax || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total:"),
                                createVNode("p", null, [
                                  createVNode("strong", null, toDisplayString(_ctx.order.total || "-"), 1)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer ID:"),
                                createVNode("div", null, [
                                  _ctx.order.customer_id ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("customers.show", _ctx.order.customer_id),
                                    class: "underline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.order.customer_id), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer Note:"),
                                createVNode("p", null, toDisplayString(_ctx.order.customer_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Payment Method:"),
                                createVNode("p", null, toDisplayString(_ctx.order.payment_method_title || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Paid:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_paid) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Completed:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_completed) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Products`);
                              } else {
                                return [
                                  createTextVNode("Products")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Products")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "min-w-max" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$b), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$c), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Product ID`);
                                                } else {
                                                  return [
                                                    createTextVNode("Product ID")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Name`);
                                                } else {
                                                  return [
                                                    createTextVNode("Name")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Quantity`);
                                                } else {
                                                  return [
                                                    createTextVNode("Quantity")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Price`);
                                                } else {
                                                  return [
                                                    createTextVNode("Price")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Tax`);
                                                } else {
                                                  return [
                                                    createTextVNode("Tax")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Total (After Discount)`);
                                                } else {
                                                  return [
                                                    createTextVNode("Total (After Discount)")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Product ID")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Quantity")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Price")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tax")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Total (After Discount)")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Product ID")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Quantity")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Price")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tax")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Total (After Discount)")
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$e), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(_ctx.order.line_items, (product) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$c), {
                                          key: product.id
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(product.product_id)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(product.product_id), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  var _a3, _b2, _c, _d;
                                                  if (_push8) {
                                                    _push8(`<div class="inline-flex items-center justify-center gap-4"${_scopeId7}>`);
                                                    if ((_a3 = product.image) == null ? void 0 : _a3.src) {
                                                      _push8(`<img${ssrRenderAttr("src", product.image.src)}${ssrRenderAttr("alt", product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()))} class="inline-block size-8 object-cover"${_scopeId7}>`);
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(`<span${_scopeId7}>${ssrInterpolate(product.name)}</span></div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                        ((_c = product.image) == null ? void 0 : _c.src) ? (openBlock(), createBlock("img", {
                                                          key: 0,
                                                          src: product.image.src,
                                                          alt: product.name || ((_d = product.id) == null ? void 0 : _d.toString()),
                                                          class: "inline-block size-8 object-cover"
                                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                        createVNode("span", null, toDisplayString(product.name), 1)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(product.quantity)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(product.quantity), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(product.price)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(product.price), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(product.total_tax)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(product.total_tax), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(product.total)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(product.total), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(product.product_id), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => {
                                                    var _a3, _b2;
                                                    return [
                                                      createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                        ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                          key: 0,
                                                          src: product.image.src,
                                                          alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                          class: "inline-block size-8 object-cover"
                                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                        createVNode("span", null, toDisplayString(product.name), 1)
                                                      ])
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(product.quantity), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(product.price), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(product.total_tax), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(product.total), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.line_items, (product) => {
                                          return openBlock(), createBlock(unref(_sfc_main$c), {
                                            key: product.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(product.product_id), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => {
                                                  var _a3, _b2;
                                                  return [
                                                    createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                      ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                        key: 0,
                                                        src: product.image.src,
                                                        alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                        class: "inline-block size-8 object-cover"
                                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                      createVNode("span", null, toDisplayString(product.name), 1)
                                                    ])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(product.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(product.price), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(product.total_tax), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(product.total), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Product ID")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Quantity")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tax")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Total (After Discount)")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$e), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.line_items, (product) => {
                                        return openBlock(), createBlock(unref(_sfc_main$c), {
                                          key: product.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(product.product_id), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => {
                                                var _a3, _b2;
                                                return [
                                                  createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                    ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                      key: 0,
                                                      src: product.image.src,
                                                      alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                      class: "inline-block size-8 object-cover"
                                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                    createVNode("span", null, toDisplayString(product.name), 1)
                                                  ])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(product.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(product.price), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(product.total_tax), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(product.total), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$a), { class: "min-w-max" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Product ID")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Quantity")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Price")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tax")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Total (After Discount)")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$e), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.line_items, (product) => {
                                      return openBlock(), createBlock(unref(_sfc_main$c), {
                                        key: product.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(product.product_id), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a3, _b2;
                                              return [
                                                createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                  ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                    key: 0,
                                                    src: product.image.src,
                                                    alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                    class: "inline-block size-8 object-cover"
                                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                  createVNode("span", null, toDisplayString(product.name), 1)
                                                ])
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(product.quantity), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(product.price), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(product.total_tax), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(product.total), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Products")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "min-w-max" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$c), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Product ID")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Quantity")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Price")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tax")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Total (After Discount)")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$e), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.line_items, (product) => {
                                    return openBlock(), createBlock(unref(_sfc_main$c), {
                                      key: product.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.product_id), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a3, _b2;
                                            return [
                                              createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: product.image.src,
                                                  alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                  class: "inline-block size-8 object-cover"
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                createVNode("span", null, toDisplayString(product.name), 1)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.price), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.total_tax), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.total), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Billing`);
                              } else {
                                return [
                                  createTextVNode("Billing")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Billing")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>First Name:</label><p${_scopeId3}>${ssrInterpolate(((_a3 = _ctx.order.billing) == null ? void 0 : _a3.first_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Last Name:</label><p${_scopeId3}>${ssrInterpolate(((_b2 = _ctx.order.billing) == null ? void 0 : _b2.last_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Company:</label><p${_scopeId3}>${ssrInterpolate(((_c = _ctx.order.billing) == null ? void 0 : _c.company) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 1:</label><p${_scopeId3}>${ssrInterpolate(((_d = _ctx.order.billing) == null ? void 0 : _d.address_1) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 2:</label><p${_scopeId3}>${ssrInterpolate(((_e = _ctx.order.billing) == null ? void 0 : _e.address_2) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>City:</label><p${_scopeId3}>${ssrInterpolate(((_f = _ctx.order.billing) == null ? void 0 : _f.city) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>State:</label><p${_scopeId3}>${ssrInterpolate(((_g = _ctx.order.billing) == null ? void 0 : _g.state) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Postcode:</label><p${_scopeId3}>${ssrInterpolate(((_h = _ctx.order.billing) == null ? void 0 : _h.postcode) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Country:</label><p${_scopeId3}>${ssrInterpolate(((_i = _ctx.order.billing) == null ? void 0 : _i.country) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Email:</label><p${_scopeId3}>${ssrInterpolate(((_j = _ctx.order.billing) == null ? void 0 : _j.email) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Phone:</label><p${_scopeId3}>${ssrInterpolate(((_k = _ctx.order.billing) == null ? void 0 : _k.phone) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_l = _ctx.order.billing) == null ? void 0 : _l.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_m = _ctx.order.billing) == null ? void 0 : _m.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_n = _ctx.order.billing) == null ? void 0 : _n.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_o = _ctx.order.billing) == null ? void 0 : _o.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_p = _ctx.order.billing) == null ? void 0 : _p.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_q = _ctx.order.billing) == null ? void 0 : _q.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_r = _ctx.order.billing) == null ? void 0 : _r.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_s = _ctx.order.billing) == null ? void 0 : _s.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_t = _ctx.order.billing) == null ? void 0 : _t.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_u = _ctx.order.billing) == null ? void 0 : _u.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_v = _ctx.order.billing) == null ? void 0 : _v.phone) || "-"), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Billing")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.order.billing) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.order.billing) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.order.billing) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.order.billing) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.order.billing) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.order.billing) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.order.billing) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.order.billing) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.order.billing) == null ? void 0 : _i.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.order.billing) == null ? void 0 : _j.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.order.billing) == null ? void 0 : _k.phone) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Shipping`);
                              } else {
                                return [
                                  createTextVNode("Shipping")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Shipping")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>First Name:</label><p${_scopeId3}>${ssrInterpolate(((_a3 = _ctx.order.shipping) == null ? void 0 : _a3.first_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Last Name:</label><p${_scopeId3}>${ssrInterpolate(((_b2 = _ctx.order.shipping) == null ? void 0 : _b2.last_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Company:</label><p${_scopeId3}>${ssrInterpolate(((_c = _ctx.order.shipping) == null ? void 0 : _c.company) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 1:</label><p${_scopeId3}>${ssrInterpolate(((_d = _ctx.order.shipping) == null ? void 0 : _d.address_1) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 2:</label><p${_scopeId3}>${ssrInterpolate(((_e = _ctx.order.shipping) == null ? void 0 : _e.address_2) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>City:</label><p${_scopeId3}>${ssrInterpolate(((_f = _ctx.order.shipping) == null ? void 0 : _f.city) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>State:</label><p${_scopeId3}>${ssrInterpolate(((_g = _ctx.order.shipping) == null ? void 0 : _g.state) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Postcode:</label><p${_scopeId3}>${ssrInterpolate(((_h = _ctx.order.shipping) == null ? void 0 : _h.postcode) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Country:</label><p${_scopeId3}>${ssrInterpolate(((_i = _ctx.order.shipping) == null ? void 0 : _i.country) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.order.shipping) == null ? void 0 : _j.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.order.shipping) == null ? void 0 : _k.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_l = _ctx.order.shipping) == null ? void 0 : _l.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_m = _ctx.order.shipping) == null ? void 0 : _m.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_n = _ctx.order.shipping) == null ? void 0 : _n.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_o = _ctx.order.shipping) == null ? void 0 : _o.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_p = _ctx.order.shipping) == null ? void 0 : _p.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_q = _ctx.order.shipping) == null ? void 0 : _q.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_r = _ctx.order.shipping) == null ? void 0 : _r.country) || "-"), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Shipping")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.order.shipping) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.order.shipping) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.order.shipping) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.order.shipping) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.order.shipping) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.order.shipping) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.order.shipping) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.order.shipping) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.order.shipping) == null ? void 0 : _i.country) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-1 flex-col gap-4 rounded-xl p-4" }, [
                _ctx.order ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-5"
                }, [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Order ID " + toDisplayString(_ctx.order.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                class: "ml-2",
                                "order-id": _ctx.order.id
                              }, null, 8, ["order-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", null, [
                                  _ctx.order.status ? (openBlock(), createBlock(_sfc_main$7, {
                                    key: 0,
                                    status: _ctx.order.status
                                  }, null, 8, ["status"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Currency:"),
                                createVNode("p", null, toDisplayString(_ctx.order.currency || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_modified) || "-"), 1)
                              ]),
                              ((_a3 = _ctx.order.coupon_lines) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-1"
                              }, [
                                createVNode("label", null, "Coupon(s):"),
                                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.coupon_lines, (coupon) => {
                                    return openBlock(), createBlock(unref(_sfc_main$8), {
                                      key: coupon.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(coupon.code), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Discount:"),
                                createVNode("p", null, toDisplayString(_ctx.order.discount_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping:"),
                                createVNode("p", null, toDisplayString(_ctx.order.shipping_total || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax:"),
                                createVNode("p", null, toDisplayString(_ctx.order.total_tax || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total:"),
                                createVNode("p", null, [
                                  createVNode("strong", null, toDisplayString(_ctx.order.total || "-"), 1)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer ID:"),
                                createVNode("div", null, [
                                  _ctx.order.customer_id ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("customers.show", _ctx.order.customer_id),
                                    class: "underline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.order.customer_id), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Customer Note:"),
                                createVNode("p", null, toDisplayString(_ctx.order.customer_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Payment Method:"),
                                createVNode("p", null, toDisplayString(_ctx.order.payment_method_title || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Paid:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_paid) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Completed:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.order.date_completed) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$9)),
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Products")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "min-w-max" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$c), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Product ID")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Quantity")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Price")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tax")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$d), { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Total (After Discount)")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$e), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.line_items, (product) => {
                                    return openBlock(), createBlock(unref(_sfc_main$c), {
                                      key: product.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.product_id), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a3, _b2;
                                            return [
                                              createVNode("div", { class: "inline-flex items-center justify-center gap-4" }, [
                                                ((_a3 = product.image) == null ? void 0 : _a3.src) ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: product.image.src,
                                                  alt: product.name || ((_b2 = product.id) == null ? void 0 : _b2.toString()),
                                                  class: "inline-block size-8 object-cover"
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                createVNode("span", null, toDisplayString(product.name), 1)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.price), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.total_tax), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.total), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$9)),
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Billing")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.order.billing) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.order.billing) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.order.billing) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.order.billing) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.order.billing) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.order.billing) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.order.billing) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.order.billing) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.order.billing) == null ? void 0 : _i.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.order.billing) == null ? void 0 : _j.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.order.billing) == null ? void 0 : _k.phone) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$9)),
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Shipping")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.order.shipping) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.order.shipping) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.order.shipping) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.order.shipping) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.order.shipping) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.order.shipping) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.order.shipping) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.order.shipping) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.order.shipping) == null ? void 0 : _i.country) || "-"), 1)
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/orders/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
