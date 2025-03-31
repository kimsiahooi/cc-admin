import { defineComponent, unref, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c, f as _sfc_main$d, _ as _sfc_main$p } from "./SelectValue-JRowzdw5.js";
import { _ as _sfc_main$o, a as _sfc_main$q } from "./OrderStatus-CnV41tVV.js";
import { _ as _sfc_main$f } from "./Button-DbljGXnF.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$e } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$7 } from "./Input-DuD_s7Py.js";
import { _ as _sfc_main$6 } from "./Label-CIcpwQL3.js";
import { _ as _sfc_main$1, a as _sfc_main$g } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$h, a as _sfc_main$i, b as _sfc_main$j, c as _sfc_main$k, d as _sfc_main$l, e as _sfc_main$m, f as _sfc_main$n } from "./TableHeader-DRWA9O97.js";
import { u as useDateFormat } from "./useDateFormat-0JAl-QSL.js";
import { useForm, Head, router } from "@inertiajs/vue3";
import "lucide-vue-next";
import "reka-ui";
import "./index-n6Jd8ds3.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "@vueuse/core";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    orders: {},
    filter_config: {}
  },
  setup(__props) {
    const dateFormat = useDateFormat();
    const searchForm = useForm({
      entries: +__props.filter_config.entries,
      page: +__props.filter_config.page,
      order_id: __props.filter_config.order_id,
      customer_id: __props.filter_config.customer_id,
      product_id: __props.filter_config.product_id,
      status: __props.filter_config.status
    });
    const breadcrumbs = [
      {
        title: "Orders",
        href: route("orders.index")
      }
    ];
    const entriesHandler = () => {
      resetPage();
      submit();
    };
    const prevHandler = () => {
      if (searchForm.page > 1) {
        searchForm.page--;
      }
      submit();
    };
    const nextHandler = () => {
      searchForm.page++;
      submit();
    };
    const resetPage = () => {
      searchForm.page = 1;
    };
    const filter = () => {
      resetPage();
      submit();
    };
    const reset = () => {
      router.visit(route("orders.index"));
    };
    const submit = () => {
      searchForm.get(route("orders.index"), {
        preserveState: true,
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Orders" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { breadcrumbs }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Orders`);
                            } else {
                              return [
                                createTextVNode("Orders")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Orders")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"${_scopeId3}><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Order ID`);
                            } else {
                              return [
                                createTextVNode("Order ID")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Enter Order ID",
                          modelValue: unref(searchForm).order_id,
                          "onUpdate:modelValue": ($event) => unref(searchForm).order_id = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Customer ID`);
                            } else {
                              return [
                                createTextVNode("Customer ID")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Enter Customer ID",
                          modelValue: unref(searchForm).customer_id,
                          "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Product ID`);
                            } else {
                              return [
                                createTextVNode("Product ID")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Enter Product ID",
                          modelValue: unref(searchForm).product_id,
                          "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "status" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Status`);
                            } else {
                              return [
                                createTextVNode("Status")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).status,
                          "onUpdate:modelValue": ($event) => unref(searchForm).status = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Entries" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$c), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "any" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Any`);
                                              } else {
                                                return [
                                                  createTextVNode("Any")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Pending`);
                                              } else {
                                                return [
                                                  createTextVNode("Pending")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "processing" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Processing`);
                                              } else {
                                                return [
                                                  createTextVNode("Processing")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "on-hold" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`On Hold`);
                                              } else {
                                                return [
                                                  createTextVNode("On Hold")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "completed" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Completed`);
                                              } else {
                                                return [
                                                  createTextVNode("Completed")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "cancelled" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Cancelled`);
                                              } else {
                                                return [
                                                  createTextVNode("Cancelled")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "refunded" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Refunded`);
                                              } else {
                                                return [
                                                  createTextVNode("Refunded")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "failed" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Failed`);
                                              } else {
                                                return [
                                                  createTextVNode("Failed")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "trash" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Trash`);
                                              } else {
                                                return [
                                                  createTextVNode("Trash")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "any" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Any")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Pending")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Processing")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                              default: withCtx(() => [
                                                createTextVNode("On Hold")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Completed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Cancelled")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Refunded")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Failed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Trash")
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
                                          createVNode(unref(_sfc_main$d), { value: "any" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Any")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Processing")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Hold")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Cancelled")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Refunded")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Failed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Trash")
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
                            } else {
                              return [
                                createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "any" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Any")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Pending")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Processing")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("On Hold")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Completed")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Cancelled")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Refunded")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Failed")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Trash")
                                          ]),
                                          _: 1
                                        })
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
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Order ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Order ID",
                                modelValue: unref(searchForm).order_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).order_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Customer ID",
                                modelValue: unref(searchForm).customer_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Product ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Product ID",
                                modelValue: unref(searchForm).product_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "status" }, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).status,
                                "onUpdate:modelValue": ($event) => unref(searchForm).status = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "any" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Any")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Processing")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Hold")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Cancelled")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Refunded")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Failed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Trash")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$e), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          type: "button",
                          onClick: reset,
                          disabled: unref(searchForm).processing,
                          variant: "outline"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Reset`);
                            } else {
                              return [
                                createTextVNode("Reset")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          type: "submit",
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Filter`);
                            } else {
                              return [
                                createTextVNode("Filter")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$f), {
                            type: "button",
                            onClick: reset,
                            disabled: unref(searchForm).processing,
                            variant: "outline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Reset")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$f), {
                            type: "submit",
                            disabled: unref(searchForm).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Filter")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(filter, ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Orders")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Order ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Order ID",
                                modelValue: unref(searchForm).order_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).order_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Customer ID",
                                modelValue: unref(searchForm).customer_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Product ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Enter Product ID",
                                modelValue: unref(searchForm).product_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "status" }, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).status,
                                "onUpdate:modelValue": ($event) => unref(searchForm).status = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "any" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Any")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Processing")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Hold")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Cancelled")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Refunded")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Failed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Trash")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$e), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$f), {
                            type: "button",
                            onClick: reset,
                            disabled: unref(searchForm).processing,
                            variant: "outline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Reset")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$f), {
                            type: "submit",
                            disabled: unref(searchForm).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Filter")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$g), { class: "my-2" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$h), { class: "min-w-max" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$i), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate(((_a = _ctx.orders) == null ? void 0 : _a.length) ? "A list of your recent orders." : "No order found.")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b = _ctx.orders) == null ? void 0 : _b.length) ? "A list of your recent orders." : "No order found."), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$j), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$k), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ID`);
                                  } else {
                                    return [
                                      createTextVNode("ID")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Status`);
                                  } else {
                                    return [
                                      createTextVNode("Status")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Coupon Used`);
                                  } else {
                                    return [
                                      createTextVNode("Coupon Used")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Discount`);
                                  } else {
                                    return [
                                      createTextVNode("Discount")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Shipping`);
                                  } else {
                                    return [
                                      createTextVNode("Shipping")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tax`);
                                  } else {
                                    return [
                                      createTextVNode("Tax")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Total`);
                                  } else {
                                    return [
                                      createTextVNode("Total")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Payment Method`);
                                  } else {
                                    return [
                                      createTextVNode("Payment Method")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Date Created`);
                                  } else {
                                    return [
                                      createTextVNode("Date Created")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Actions`);
                                  } else {
                                    return [
                                      createTextVNode("Actions")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Coupon Used")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Discount")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Shipping")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Tax")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Total")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Payment Method")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date Created")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Actions")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Coupon Used")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Discount")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Shipping")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Tax")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Total")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Payment Method")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date Created")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Actions")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$m), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.orders, (order) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$k), {
                            key: order.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.id)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.id), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$o, {
                                        status: order.status
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$o, {
                                          status: order.status
                                        }, null, 8, ["status"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b;
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(((_a = order.coupon_lines) == null ? void 0 : _a.length) ? "Yes" : "No")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(((_b = order.coupon_lines) == null ? void 0 : _b.length) ? "Yes" : "No"), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.discount_total)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.discount_total), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.shipping_total)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.shipping_total), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.total_tax)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.total_tax), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center font-black" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.total)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.total), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(order.payment_method)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(order.payment_method), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(dateFormat)(order.date_created))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(dateFormat)(order.date_created)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-x-3"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_sfc_main$p, {
                                        href: _ctx.route("orders.show", order.id)
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_sfc_main$q, {
                                        "order-id": order.id
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-x-3" }, [
                                          createVNode(_sfc_main$p, {
                                            href: _ctx.route("orders.show", order.id)
                                          }, null, 8, ["href"]),
                                          createVNode(_sfc_main$q, {
                                            "order-id": order.id
                                          }, null, 8, ["order-id"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.id), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$o, {
                                        status: order.status
                                      }, null, 8, ["status"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = order.coupon_lines) == null ? void 0 : _a.length) ? "Yes" : "No"), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.discount_total), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.shipping_total), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.total_tax), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center font-black" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.total), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(order.payment_method), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(dateFormat)(order.date_created)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-x-3" }, [
                                        createVNode(_sfc_main$p, {
                                          href: _ctx.route("orders.show", order.id)
                                        }, null, 8, ["href"]),
                                        createVNode(_sfc_main$q, {
                                          "order-id": order.id
                                        }, null, 8, ["order-id"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.orders, (order) => {
                            return openBlock(), createBlock(unref(_sfc_main$k), {
                              key: order.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$o, {
                                      status: order.status
                                    }, null, 8, ["status"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = order.coupon_lines) == null ? void 0 : _a.length) ? "Yes" : "No"), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.discount_total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.shipping_total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.total_tax), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center font-black" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.payment_method), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(order.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$p, {
                                        href: _ctx.route("orders.show", order.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$q, {
                                        "order-id": order.id
                                      }, null, 8, ["order-id"])
                                    ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$i), null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(((_a = _ctx.orders) == null ? void 0 : _a.length) ? "A list of your recent orders." : "No order found."), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$j), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$k), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("ID")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Status")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Coupon Used")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Discount")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Shipping")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Tax")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Total")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Payment Method")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Date Created")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Actions")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$m), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.orders, (order) => {
                          return openBlock(), createBlock(unref(_sfc_main$k), {
                            key: order.id
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$o, {
                                    status: order.status
                                  }, null, 8, ["status"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createTextVNode(toDisplayString(((_a = order.coupon_lines) == null ? void 0 : _a.length) ? "Yes" : "No"), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.discount_total), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.shipping_total), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.total_tax), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center font-black" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.total), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.payment_method), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(dateFormat)(order.date_created)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-x-3" }, [
                                    createVNode(_sfc_main$p, {
                                      href: _ctx.route("orders.show", order.id)
                                    }, null, 8, ["href"]),
                                    createVNode(_sfc_main$q, {
                                      "order-id": order.id
                                    }, null, 8, ["order-id"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="flex items-center gap-2"${_scopeId}> Show `);
            _push2(ssrRenderComponent(unref(_sfc_main$8), {
              modelValue: unref(searchForm).entries,
              "onUpdate:modelValue": [($event) => unref(searchForm).entries = $event, entriesHandler],
              disabled: unref(searchForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Entries" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$d), { value: 10 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`10`);
                                  } else {
                                    return [
                                      createTextVNode("10")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$d), { value: 25 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`25`);
                                  } else {
                                    return [
                                      createTextVNode("25")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$d), { value: 50 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`50`);
                                  } else {
                                    return [
                                      createTextVNode("50")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$d), { value: 100 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`100`);
                                  } else {
                                    return [
                                      createTextVNode("100")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$d), { value: 10 }, {
                                  default: withCtx(() => [
                                    createTextVNode("10")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$d), { value: 25 }, {
                                  default: withCtx(() => [
                                    createTextVNode("25")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$d), { value: 50 }, {
                                  default: withCtx(() => [
                                    createTextVNode("50")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$d), { value: 100 }, {
                                  default: withCtx(() => [
                                    createTextVNode("100")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$d), { value: 10 }, {
                                default: withCtx(() => [
                                  createTextVNode("10")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$d), { value: 25 }, {
                                default: withCtx(() => [
                                  createTextVNode("25")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$d), { value: 50 }, {
                                default: withCtx(() => [
                                  createTextVNode("50")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$d), { value: 100 }, {
                                default: withCtx(() => [
                                  createTextVNode("100")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$d), { value: 10 }, {
                              default: withCtx(() => [
                                createTextVNode("10")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$d), { value: 25 }, {
                              default: withCtx(() => [
                                createTextVNode("25")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$d), { value: 50 }, {
                              default: withCtx(() => [
                                createTextVNode("50")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$d), { value: 100 }, {
                              default: withCtx(() => [
                                createTextVNode("100")
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(` Entries </p></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$f), {
              onClick: prevHandler,
              disabled: unref(searchForm).page <= 1 || unref(searchForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Previous`);
                } else {
                  return [
                    createTextVNode("Previous")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$f), {
              onClick: nextHandler,
              disabled: unref(searchForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Next`);
                } else {
                  return [
                    createTextVNode("Next")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-1 flex-col gap-4 rounded-xl p-4" }, [
                createVNode("div", null, [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(filter, ["prevent"])
                      }, [
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Orders")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Order ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Enter Order ID",
                                  modelValue: unref(searchForm).order_id,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).order_id = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Customer ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Enter Customer ID",
                                  modelValue: unref(searchForm).customer_id,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Product ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Enter Product ID",
                                  modelValue: unref(searchForm).product_id,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "status" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).status,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).status = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "any" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Any")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Pending")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "processing" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Processing")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "on-hold" }, {
                                              default: withCtx(() => [
                                                createTextVNode("On Hold")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "completed" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Completed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "cancelled" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Cancelled")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "refunded" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Refunded")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "failed" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Failed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "trash" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Trash")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$e), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), {
                              type: "button",
                              onClick: reset,
                              disabled: unref(searchForm).processing,
                              variant: "outline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Reset")
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            createVNode(unref(_sfc_main$f), {
                              type: "submit",
                              disabled: unref(searchForm).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Filter")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ], 32)
                    ]),
                    _: 1
                  })
                ]),
                createVNode(unref(_sfc_main$g), { class: "my-2" }),
                createVNode("div", null, [
                  createVNode(unref(_sfc_main$h), { class: "min-w-max" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$i), null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = _ctx.orders) == null ? void 0 : _a.length) ? "A list of your recent orders." : "No order found."), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Coupon Used")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Discount")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Shipping")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Tax")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Total")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Payment Method")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date Created")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Actions")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$m), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.orders, (order) => {
                            return openBlock(), createBlock(unref(_sfc_main$k), {
                              key: order.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$o, {
                                      status: order.status
                                    }, null, 8, ["status"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = order.coupon_lines) == null ? void 0 : _a.length) ? "Yes" : "No"), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.discount_total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.shipping_total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.total_tax), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center font-black" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.total), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(order.payment_method), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(order.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$p, {
                                        href: _ctx.route("orders.show", order.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$q, {
                                        "order-id": order.id
                                      }, null, 8, ["order-id"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "flex items-center gap-2" }, [
                      createTextVNode(" Show "),
                      createVNode(unref(_sfc_main$8), {
                        modelValue: unref(searchForm).entries,
                        "onUpdate:modelValue": [($event) => unref(searchForm).entries = $event, entriesHandler],
                        disabled: unref(searchForm).processing
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$a), { placeholder: "Select Entries" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$c), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$d), { value: 10 }, {
                                    default: withCtx(() => [
                                      createTextVNode("10")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$d), { value: 25 }, {
                                    default: withCtx(() => [
                                      createTextVNode("25")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$d), { value: 50 }, {
                                    default: withCtx(() => [
                                      createTextVNode("50")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$d), { value: 100 }, {
                                    default: withCtx(() => [
                                      createTextVNode("100")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createTextVNode(" Entries ")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(_sfc_main$f), {
                      onClick: prevHandler,
                      disabled: unref(searchForm).page <= 1 || unref(searchForm).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Previous")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(unref(_sfc_main$f), {
                      onClick: nextHandler,
                      disabled: unref(searchForm).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Next")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/orders/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
