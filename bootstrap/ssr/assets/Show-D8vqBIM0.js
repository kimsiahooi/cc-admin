import { defineComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { a as _sfc_main$6, _ as _sfc_main$8 } from "./PayingCustomerStatus-BDR9v532.js";
import { _ as _sfc_main$5 } from "./OrderDetailsLink-CsxQbUXZ.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$7 } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$1, a as _sfc_main$9 } from "./AppLayout-WSUd1wzs.js";
import { u as useDateFormat } from "./useDateFormat-0JAl-QSL.js";
import { Head } from "@inertiajs/vue3";
import "lucide-vue-next";
import "./index-n6Jd8ds3.js";
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
    customer: {}
  },
  setup(__props) {
    var _a, _b;
    const dateFormat = useDateFormat();
    const breadcrumbs = [
      {
        title: "Customers",
        href: route("customers.index")
      },
      {
        title: ((_a = __props.customer) == null ? void 0 : _a.id.toString()) || "",
        href: ((_b = __props.customer) == null ? void 0 : _b.id) ? route("customers.show", __props.customer.id) : "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Customer ID ${(_a2 = _ctx.customer) == null ? void 0 : _a2.id}`
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { breadcrumbs }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4"${_scopeId}>`);
            if (_ctx.customer) {
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
                                _push5(`<span${_scopeId4}>Customer ID ${ssrInterpolate(_ctx.customer.id)}</span> `);
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  href: _ctx.route("orders.index", { customer_id: _ctx.customer.id })
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  class: "ml-2",
                                  "customer-id": _ctx.customer.id
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", null, "Customer ID " + toDisplayString(_ctx.customer.id), 1),
                                  createTextVNode(),
                                  createVNode(_sfc_main$5, {
                                    href: _ctx.route("orders.index", { customer_id: _ctx.customer.id })
                                  }, null, 8, ["href"]),
                                  createVNode(_sfc_main$6, {
                                    class: "ml-2",
                                    "customer-id": _ctx.customer.id
                                  }, null, 8, ["customer-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Customer ID " + toDisplayString(_ctx.customer.id), 1),
                                createTextVNode(),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("orders.index", { customer_id: _ctx.customer.id })
                                }, null, 8, ["href"]),
                                createVNode(_sfc_main$6, {
                                  class: "ml-2",
                                  "customer-id": _ctx.customer.id
                                }, null, 8, ["customer-id"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Avatar:</label><div${_scopeId3}>`);
                          if (_ctx.customer.avatar_url) {
                            _push4(`<img${ssrRenderAttr("src", _ctx.customer.avatar_url)}${ssrRenderAttr("alt", _ctx.customer.username || _ctx.customer.id.toString())} class="inline-block size-10 rounded-full object-cover"${_scopeId3}>`);
                          } else {
                            _push4(`<p${_scopeId3}>-</p>`);
                          }
                          _push4(`</div></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>First Name:</label><p${_scopeId3}>${ssrInterpolate(_ctx.customer.first_name || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Last Name:</label><p${_scopeId3}>${ssrInterpolate(_ctx.customer.last_name || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Username:</label><p${_scopeId3}>${ssrInterpolate(_ctx.customer.username || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Is Paying Customer:</label><p${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$8, {
                            "-is-paying-customer": _ctx.customer.is_paying_customer
                          }, null, _parent4, _scopeId3));
                          _push4(`</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Email:</label><p${_scopeId3}>${ssrInterpolate(_ctx.customer.email || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Created:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.customer.date_created) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Modified:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.customer.date_modified) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Avatar:"),
                                createVNode("div", null, [
                                  _ctx.customer.avatar_url ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: _ctx.customer.avatar_url,
                                    alt: _ctx.customer.username || _ctx.customer.id.toString(),
                                    class: "inline-block size-10 rounded-full object-cover"
                                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(_ctx.customer.first_name || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(_ctx.customer.last_name || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Username:"),
                                createVNode("p", null, toDisplayString(_ctx.customer.username || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Is Paying Customer:"),
                                createVNode("p", null, [
                                  createVNode(_sfc_main$8, {
                                    "-is-paying-customer": _ctx.customer.is_paying_customer
                                  }, null, 8, ["-is-paying-customer"])
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(_ctx.customer.email || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_modified) || "-"), 1)
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
                              createVNode("span", null, "Customer ID " + toDisplayString(_ctx.customer.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                href: _ctx.route("orders.index", { customer_id: _ctx.customer.id })
                              }, null, 8, ["href"]),
                              createVNode(_sfc_main$6, {
                                class: "ml-2",
                                "customer-id": _ctx.customer.id
                              }, null, 8, ["customer-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Avatar:"),
                              createVNode("div", null, [
                                _ctx.customer.avatar_url ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _ctx.customer.avatar_url,
                                  alt: _ctx.customer.username || _ctx.customer.id.toString(),
                                  class: "inline-block size-10 rounded-full object-cover"
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "First Name:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.first_name || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Last Name:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.last_name || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Username:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.username || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Is Paying Customer:"),
                              createVNode("p", null, [
                                createVNode(_sfc_main$8, {
                                  "-is-paying-customer": _ctx.customer.is_paying_customer
                                }, null, 8, ["-is-paying-customer"])
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Email:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.email || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Date Created:"),
                              createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_created) || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Date Modified:"),
                              createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_modified) || "-"), 1)
                            ])
                          ])
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
                    _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>First Name:</label><p${_scopeId3}>${ssrInterpolate(((_a3 = _ctx.customer.billing) == null ? void 0 : _a3.first_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Last Name:</label><p${_scopeId3}>${ssrInterpolate(((_b2 = _ctx.customer.billing) == null ? void 0 : _b2.last_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Company:</label><p${_scopeId3}>${ssrInterpolate(((_c = _ctx.customer.billing) == null ? void 0 : _c.company) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 1:</label><p${_scopeId3}>${ssrInterpolate(((_d = _ctx.customer.billing) == null ? void 0 : _d.address_1) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 2:</label><p${_scopeId3}>${ssrInterpolate(((_e = _ctx.customer.billing) == null ? void 0 : _e.address_2) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>City:</label><p${_scopeId3}>${ssrInterpolate(((_f = _ctx.customer.billing) == null ? void 0 : _f.city) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>State:</label><p${_scopeId3}>${ssrInterpolate(((_g = _ctx.customer.billing) == null ? void 0 : _g.state) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Postcode:</label><p${_scopeId3}>${ssrInterpolate(((_h = _ctx.customer.billing) == null ? void 0 : _h.postcode) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Country:</label><p${_scopeId3}>${ssrInterpolate(((_i = _ctx.customer.billing) == null ? void 0 : _i.country) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Email:</label><p${_scopeId3}>${ssrInterpolate(((_j = _ctx.customer.billing) == null ? void 0 : _j.email) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Phone:</label><p${_scopeId3}>${ssrInterpolate(((_k = _ctx.customer.billing) == null ? void 0 : _k.phone) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_l = _ctx.customer.billing) == null ? void 0 : _l.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_m = _ctx.customer.billing) == null ? void 0 : _m.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_n = _ctx.customer.billing) == null ? void 0 : _n.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_o = _ctx.customer.billing) == null ? void 0 : _o.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_p = _ctx.customer.billing) == null ? void 0 : _p.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_q = _ctx.customer.billing) == null ? void 0 : _q.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_r = _ctx.customer.billing) == null ? void 0 : _r.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_s = _ctx.customer.billing) == null ? void 0 : _s.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_t = _ctx.customer.billing) == null ? void 0 : _t.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_u = _ctx.customer.billing) == null ? void 0 : _u.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_v = _ctx.customer.billing) == null ? void 0 : _v.phone) || "-"), 1)
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
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.customer.billing) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.customer.billing) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.customer.billing) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.customer.billing) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.customer.billing) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.customer.billing) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.customer.billing) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.customer.billing) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.customer.billing) == null ? void 0 : _i.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.customer.billing) == null ? void 0 : _j.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.customer.billing) == null ? void 0 : _k.phone) || "-"), 1)
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
                    _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>First Name:</label><p${_scopeId3}>${ssrInterpolate(((_a3 = _ctx.customer.shipping) == null ? void 0 : _a3.first_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Last Name:</label><p${_scopeId3}>${ssrInterpolate(((_b2 = _ctx.customer.shipping) == null ? void 0 : _b2.last_name) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Company:</label><p${_scopeId3}>${ssrInterpolate(((_c = _ctx.customer.shipping) == null ? void 0 : _c.company) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 1:</label><p${_scopeId3}>${ssrInterpolate(((_d = _ctx.customer.shipping) == null ? void 0 : _d.address_1) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Address 2:</label><p${_scopeId3}>${ssrInterpolate(((_e = _ctx.customer.shipping) == null ? void 0 : _e.address_2) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>City:</label><p${_scopeId3}>${ssrInterpolate(((_f = _ctx.customer.shipping) == null ? void 0 : _f.city) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>State:</label><p${_scopeId3}>${ssrInterpolate(((_g = _ctx.customer.shipping) == null ? void 0 : _g.state) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Postcode:</label><p${_scopeId3}>${ssrInterpolate(((_h = _ctx.customer.shipping) == null ? void 0 : _h.postcode) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Country:</label><p${_scopeId3}>${ssrInterpolate(((_i = _ctx.customer.shipping) == null ? void 0 : _i.country) || "-")}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.customer.shipping) == null ? void 0 : _j.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.customer.shipping) == null ? void 0 : _k.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_l = _ctx.customer.shipping) == null ? void 0 : _l.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_m = _ctx.customer.shipping) == null ? void 0 : _m.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_n = _ctx.customer.shipping) == null ? void 0 : _n.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_o = _ctx.customer.shipping) == null ? void 0 : _o.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_p = _ctx.customer.shipping) == null ? void 0 : _p.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_q = _ctx.customer.shipping) == null ? void 0 : _q.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_r = _ctx.customer.shipping) == null ? void 0 : _r.country) || "-"), 1)
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
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.customer.shipping) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.customer.shipping) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.customer.shipping) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.customer.shipping) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.customer.shipping) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.customer.shipping) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.customer.shipping) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.customer.shipping) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.customer.shipping) == null ? void 0 : _i.country) || "-"), 1)
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
                _ctx.customer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-5"
                }, [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Customer ID " + toDisplayString(_ctx.customer.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                href: _ctx.route("orders.index", { customer_id: _ctx.customer.id })
                              }, null, 8, ["href"]),
                              createVNode(_sfc_main$6, {
                                class: "ml-2",
                                "customer-id": _ctx.customer.id
                              }, null, 8, ["customer-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Avatar:"),
                              createVNode("div", null, [
                                _ctx.customer.avatar_url ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _ctx.customer.avatar_url,
                                  alt: _ctx.customer.username || _ctx.customer.id.toString(),
                                  class: "inline-block size-10 rounded-full object-cover"
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("p", { key: 1 }, "-"))
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "First Name:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.first_name || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Last Name:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.last_name || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Username:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.username || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Is Paying Customer:"),
                              createVNode("p", null, [
                                createVNode(_sfc_main$8, {
                                  "-is-paying-customer": _ctx.customer.is_paying_customer
                                }, null, 8, ["-is-paying-customer"])
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Email:"),
                              createVNode("p", null, toDisplayString(_ctx.customer.email || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Date Created:"),
                              createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_created) || "-"), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", null, "Date Modified:"),
                              createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.customer.date_modified) || "-"), 1)
                            ])
                          ])
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
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.customer.billing) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.customer.billing) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.customer.billing) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.customer.billing) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.customer.billing) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.customer.billing) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.customer.billing) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.customer.billing) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.customer.billing) == null ? void 0 : _i.country) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Email:"),
                                createVNode("p", null, toDisplayString(((_j = _ctx.customer.billing) == null ? void 0 : _j.email) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Phone:"),
                                createVNode("p", null, toDisplayString(((_k = _ctx.customer.billing) == null ? void 0 : _k.phone) || "-"), 1)
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
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "First Name:"),
                                createVNode("p", null, toDisplayString(((_a3 = _ctx.customer.shipping) == null ? void 0 : _a3.first_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Last Name:"),
                                createVNode("p", null, toDisplayString(((_b2 = _ctx.customer.shipping) == null ? void 0 : _b2.last_name) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Company:"),
                                createVNode("p", null, toDisplayString(((_c = _ctx.customer.shipping) == null ? void 0 : _c.company) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 1:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.customer.shipping) == null ? void 0 : _d.address_1) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Address 2:"),
                                createVNode("p", null, toDisplayString(((_e = _ctx.customer.shipping) == null ? void 0 : _e.address_2) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "City:"),
                                createVNode("p", null, toDisplayString(((_f = _ctx.customer.shipping) == null ? void 0 : _f.city) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "State:"),
                                createVNode("p", null, toDisplayString(((_g = _ctx.customer.shipping) == null ? void 0 : _g.state) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Postcode:"),
                                createVNode("p", null, toDisplayString(((_h = _ctx.customer.shipping) == null ? void 0 : _h.postcode) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Country:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.customer.shipping) == null ? void 0 : _i.country) || "-"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/customers/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
