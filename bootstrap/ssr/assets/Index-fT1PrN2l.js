import { defineComponent, unref, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$p } from "./OrderDetailsLink-CsxQbUXZ.js";
import { a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c, f as _sfc_main$d, _ as _sfc_main$o } from "./SelectValue-JRowzdw5.js";
import { _ as _sfc_main$q } from "./ProductLink-ehNnNuz7.js";
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
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "class-variance-authority";
import "@vueuse/core";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: {},
    filter_config: {}
  },
  setup(__props) {
    const dateFormat = useDateFormat();
    const searchForm = useForm({
      entries: +__props.filter_config.entries,
      page: +__props.filter_config.page,
      orderby: __props.filter_config.orderby,
      product_id: __props.filter_config.product_id,
      status: __props.filter_config.status,
      type: __props.filter_config.type,
      sku: __props.filter_config.sku,
      featured: __props.filter_config.featured,
      category: __props.filter_config.category,
      on_sale: __props.filter_config.on_sale,
      min_price: __props.filter_config.min_price,
      max_price: __props.filter_config.max_price,
      stock_status: __props.filter_config.stock_status
    });
    const breadcrumbs = [
      {
        title: "Products",
        href: route("products.index")
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
      router.visit(route("products.index"));
    };
    const submit = () => {
      searchForm.get(route("products.index"), {
        preserveState: true,
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Products" }, null, _parent));
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
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"${_scopeId3}><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
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
                          id: "product_id",
                          placeholder: "Product ID",
                          modelValue: unref(searchForm).product_id,
                          "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
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
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Status" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Status" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "draft" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Draft`);
                                              } else {
                                                return [
                                                  createTextVNode("Draft")
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "private" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Private`);
                                              } else {
                                                return [
                                                  createTextVNode("Private")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "publish" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Publish`);
                                              } else {
                                                return [
                                                  createTextVNode("Publish")
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
                                            createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Draft")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Pending")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "private" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Private")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Publish")
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
                                          createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Draft")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "private" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Private")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Publish")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Status" })
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
                                        createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Draft")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Pending")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "private" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Private")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Publish")
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
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Type`);
                            } else {
                              return [
                                createTextVNode("Type")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).type,
                          "onUpdate:modelValue": ($event) => unref(searchForm).type = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Type" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Type" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "simple" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Simple`);
                                              } else {
                                                return [
                                                  createTextVNode("Simple")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "grouped" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Grouped`);
                                              } else {
                                                return [
                                                  createTextVNode("Grouped")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "external" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`External`);
                                              } else {
                                                return [
                                                  createTextVNode("External")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "variable" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Variable`);
                                              } else {
                                                return [
                                                  createTextVNode("Variable")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Simple")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Grouped")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "external" }, {
                                              default: withCtx(() => [
                                                createTextVNode("External")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Variable")
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
                                          createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Simple")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Grouped")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "external" }, {
                                            default: withCtx(() => [
                                              createTextVNode("External")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Variable")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Type" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Simple")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Grouped")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "external" }, {
                                          default: withCtx(() => [
                                            createTextVNode("External")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Variable")
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
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Sku`);
                            } else {
                              return [
                                createTextVNode("Sku")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Sku",
                          modelValue: unref(searchForm).sku,
                          "onUpdate:modelValue": ($event) => unref(searchForm).sku = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Featured`);
                            } else {
                              return [
                                createTextVNode("Featured")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).featured,
                          "onUpdate:modelValue": ($event) => unref(searchForm).featured = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Featured" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Featured" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Yes`);
                                              } else {
                                                return [
                                                  createTextVNode("Yes")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`No`);
                                              } else {
                                                return [
                                                  createTextVNode("No")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("No")
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
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Featured" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "0" }, {
                                          default: withCtx(() => [
                                            createTextVNode("No")
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
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Category ID`);
                            } else {
                              return [
                                createTextVNode("Category ID")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Category ID",
                          modelValue: unref(searchForm).category,
                          "onUpdate:modelValue": ($event) => unref(searchForm).category = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`On Sale`);
                            } else {
                              return [
                                createTextVNode("On Sale")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).on_sale,
                          "onUpdate:modelValue": ($event) => unref(searchForm).on_sale = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select On Sale" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select On Sale" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Yes`);
                                              } else {
                                                return [
                                                  createTextVNode("Yes")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`No`);
                                              } else {
                                                return [
                                                  createTextVNode("No")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("No")
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
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select On Sale" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "0" }, {
                                          default: withCtx(() => [
                                            createTextVNode("No")
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
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Min. Price`);
                            } else {
                              return [
                                createTextVNode("Min. Price")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Min. Price",
                          modelValue: unref(searchForm).min_price,
                          "onUpdate:modelValue": ($event) => unref(searchForm).min_price = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Max. Price`);
                            } else {
                              return [
                                createTextVNode("Max. Price")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          placeholder: "Max. Price",
                          modelValue: unref(searchForm).max_price,
                          "onUpdate:modelValue": ($event) => unref(searchForm).max_price = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Stock Status`);
                            } else {
                              return [
                                createTextVNode("Stock Status")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).stock_status,
                          "onUpdate:modelValue": ($event) => unref(searchForm).stock_status = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Stock Status" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Stock Status" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "instock" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`In Stock`);
                                              } else {
                                                return [
                                                  createTextVNode("In Stock")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "outofstock" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Out of Stock`);
                                              } else {
                                                return [
                                                  createTextVNode("Out of Stock")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "onbackorder" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`On Back Order`);
                                              } else {
                                                return [
                                                  createTextVNode("On Back Order")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                              default: withCtx(() => [
                                                createTextVNode("In Stock")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Out of Stock")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                              default: withCtx(() => [
                                                createTextVNode("On Back Order")
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
                                          createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("In Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Out of Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Back Order")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Stock Status" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                          default: withCtx(() => [
                                            createTextVNode("In Stock")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Out of Stock")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                          default: withCtx(() => [
                                            createTextVNode("On Back Order")
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
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Order By:`);
                            } else {
                              return [
                                createTextVNode("Order By:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(searchForm).orderby,
                          "onUpdate:modelValue": ($event) => unref(searchForm).orderby = $event,
                          disabled: unref(searchForm).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { class: "min-w-20" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { placeholder: "Select Order By" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Order By" })
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "date" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Date`);
                                              } else {
                                                return [
                                                  createTextVNode("Date")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "modified" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Modified`);
                                              } else {
                                                return [
                                                  createTextVNode("Modified")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "id" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`ID`);
                                              } else {
                                                return [
                                                  createTextVNode("ID")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "title" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Title`);
                                              } else {
                                                return [
                                                  createTextVNode("Title")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "slug" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Slug`);
                                              } else {
                                                return [
                                                  createTextVNode("Slug")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "price" }, {
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "popularity" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Popularity`);
                                              } else {
                                                return [
                                                  createTextVNode("Popularity")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "rating" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Rating`);
                                              } else {
                                                return [
                                                  createTextVNode("Rating")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$d), { value: "menu_order" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Menu Order`);
                                              } else {
                                                return [
                                                  createTextVNode("Menu Order")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), { value: "date" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Date")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Modified")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "id" }, {
                                              default: withCtx(() => [
                                                createTextVNode("ID")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "title" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Title")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Slug")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "price" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Price")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Popularity")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Rating")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Menu Order")
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
                                          createVNode(unref(_sfc_main$d), { value: "date" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Date")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Modified")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "id" }, {
                                            default: withCtx(() => [
                                              createTextVNode("ID")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "title" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Title")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Slug")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "price" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Popularity")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Rating")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Menu Order")
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
                                    createVNode(unref(_sfc_main$a), { placeholder: "Select Order By" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { value: "date" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Date")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Modified")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "id" }, {
                                          default: withCtx(() => [
                                            createTextVNode("ID")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "title" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Title")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Slug")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "price" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Price")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Popularity")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Rating")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Menu Order")
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
                                  createTextVNode("Product ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "product_id",
                                placeholder: "Product ID",
                                modelValue: unref(searchForm).product_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
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
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Status" })
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
                                          createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Draft")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "private" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Private")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Publish")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Type")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).type,
                                "onUpdate:modelValue": ($event) => unref(searchForm).type = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Type" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Simple")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Grouped")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "external" }, {
                                            default: withCtx(() => [
                                              createTextVNode("External")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Variable")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Sku")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Sku",
                                modelValue: unref(searchForm).sku,
                                "onUpdate:modelValue": ($event) => unref(searchForm).sku = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Featured")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).featured,
                                "onUpdate:modelValue": ($event) => unref(searchForm).featured = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Featured" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Category ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Category ID",
                                modelValue: unref(searchForm).category,
                                "onUpdate:modelValue": ($event) => unref(searchForm).category = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("On Sale")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).on_sale,
                                "onUpdate:modelValue": ($event) => unref(searchForm).on_sale = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select On Sale" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Min. Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Min. Price",
                                modelValue: unref(searchForm).min_price,
                                "onUpdate:modelValue": ($event) => unref(searchForm).min_price = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Max. Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Max. Price",
                                modelValue: unref(searchForm).max_price,
                                "onUpdate:modelValue": ($event) => unref(searchForm).max_price = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Stock Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).stock_status,
                                "onUpdate:modelValue": ($event) => unref(searchForm).stock_status = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Stock Status" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("In Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Out of Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Back Order")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Order By:")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).orderby,
                                "onUpdate:modelValue": ($event) => unref(searchForm).orderby = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Order By" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "date" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Date")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Modified")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "id" }, {
                                            default: withCtx(() => [
                                              createTextVNode("ID")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "title" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Title")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Slug")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "price" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Popularity")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Rating")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Menu Order")
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
                              createTextVNode("Products")
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
                                  createTextVNode("Product ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "product_id",
                                placeholder: "Product ID",
                                modelValue: unref(searchForm).product_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
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
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Status" })
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
                                          createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Draft")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "private" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Private")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Publish")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Type")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).type,
                                "onUpdate:modelValue": ($event) => unref(searchForm).type = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Type" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Simple")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Grouped")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "external" }, {
                                            default: withCtx(() => [
                                              createTextVNode("External")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Variable")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Sku")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Sku",
                                modelValue: unref(searchForm).sku,
                                "onUpdate:modelValue": ($event) => unref(searchForm).sku = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Featured")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).featured,
                                "onUpdate:modelValue": ($event) => unref(searchForm).featured = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Featured" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Category ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Category ID",
                                modelValue: unref(searchForm).category,
                                "onUpdate:modelValue": ($event) => unref(searchForm).category = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("On Sale")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).on_sale,
                                "onUpdate:modelValue": ($event) => unref(searchForm).on_sale = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select On Sale" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("No")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Min. Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Min. Price",
                                modelValue: unref(searchForm).min_price,
                                "onUpdate:modelValue": ($event) => unref(searchForm).min_price = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Max. Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                placeholder: "Max. Price",
                                modelValue: unref(searchForm).max_price,
                                "onUpdate:modelValue": ($event) => unref(searchForm).max_price = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Stock Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).stock_status,
                                "onUpdate:modelValue": ($event) => unref(searchForm).stock_status = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Stock Status" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("In Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Out of Stock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                            default: withCtx(() => [
                                              createTextVNode("On Back Order")
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
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Order By:")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: unref(searchForm).orderby,
                                "onUpdate:modelValue": ($event) => unref(searchForm).orderby = $event,
                                disabled: unref(searchForm).processing
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { placeholder: "Select Order By" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { value: "date" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Date")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Modified")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "id" }, {
                                            default: withCtx(() => [
                                              createTextVNode("ID")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "title" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Title")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Slug")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "price" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Popularity")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Rating")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Menu Order")
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
                        _push4(`${ssrInterpolate(((_a = _ctx.products) == null ? void 0 : _a.length) ? "A list of your recent products." : "No product found.")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b = _ctx.products) == null ? void 0 : _b.length) ? "A list of your recent products." : "No product found."), 1)
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
                                    _push6(`Image`);
                                  } else {
                                    return [
                                      createTextVNode("Image")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Name`);
                                  } else {
                                    return [
                                      createTextVNode("Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Type`);
                                  } else {
                                    return [
                                      createTextVNode("Type")
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
                                    _push6(`Price`);
                                  } else {
                                    return [
                                      createTextVNode("Price")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`On Sale`);
                                  } else {
                                    return [
                                      createTextVNode("On Sale")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Stock Status`);
                                  } else {
                                    return [
                                      createTextVNode("Stock Status")
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
                                    createTextVNode("Image")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Type")
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
                                    createTextVNode("Price")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("On Sale")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Stock Status")
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
                                  createTextVNode("Image")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Type")
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
                                  createTextVNode("Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("On Sale")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Stock Status")
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
                        ssrRenderList(_ctx.products, (product) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$k), {
                            key: product.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.id)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.id), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b;
                                    if (_push6) {
                                      if (((_a = product.images) == null ? void 0 : _a.length) && product.images[0].src) {
                                        _push6(`<img${ssrRenderAttr("src", product.images[0].src)}${ssrRenderAttr("alt", product.name || product.id.toString())} class="inline-block size-8 object-cover"${_scopeId5}>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        ((_b = product.images) == null ? void 0 : _b.length) && product.images[0].src ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product.images[0].src,
                                          alt: product.name || product.id.toString(),
                                          class: "inline-block size-8 object-cover"
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="capitalize"${_scopeId5}>${ssrInterpolate(product.type)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "capitalize" }, toDisplayString(product.type), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="capitalize"${_scopeId5}>${ssrInterpolate(product.status)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "capitalize" }, toDisplayString(product.status), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.price)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.price), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.on_sale ? "Yes" : "No")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.on_sale ? "Yes" : "No"), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(dateFormat)(product.date_created))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(dateFormat)(product.date_created)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-x-3"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_sfc_main$o, {
                                        href: _ctx.route("products.show", product.id)
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_sfc_main$p, {
                                        href: _ctx.route("orders.index", { product_id: product.id })
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_sfc_main$q, {
                                        "product-id": product.id
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-x-3" }, [
                                          createVNode(_sfc_main$o, {
                                            href: _ctx.route("products.show", product.id)
                                          }, null, 8, ["href"]),
                                          createVNode(_sfc_main$p, {
                                            href: _ctx.route("orders.index", { product_id: product.id })
                                          }, null, 8, ["href"]),
                                          createVNode(_sfc_main$q, {
                                            "product-id": product.id
                                          }, null, 8, ["product-id"])
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
                                      createTextVNode(toDisplayString(product.id), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        ((_a = product.images) == null ? void 0 : _a.length) && product.images[0].src ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: product.images[0].src,
                                          alt: product.name || product.id.toString(),
                                          class: "inline-block size-8 object-cover"
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "capitalize" }, toDisplayString(product.type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "capitalize" }, toDisplayString(product.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.price), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.on_sale ? "Yes" : "No"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(dateFormat)(product.date_created)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-x-3" }, [
                                        createVNode(_sfc_main$o, {
                                          href: _ctx.route("products.show", product.id)
                                        }, null, 8, ["href"]),
                                        createVNode(_sfc_main$p, {
                                          href: _ctx.route("orders.index", { product_id: product.id })
                                        }, null, 8, ["href"]),
                                        createVNode(_sfc_main$q, {
                                          "product-id": product.id
                                        }, null, 8, ["product-id"])
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
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products, (product) => {
                            return openBlock(), createBlock(unref(_sfc_main$k), {
                              key: product.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      ((_a = product.images) == null ? void 0 : _a.length) && product.images[0].src ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: product.images[0].src,
                                        alt: product.name || product.id.toString(),
                                        class: "inline-block size-8 object-cover"
                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "capitalize" }, toDisplayString(product.type), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "capitalize" }, toDisplayString(product.status), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.price), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.on_sale ? "Yes" : "No"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(product.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$o, {
                                        href: _ctx.route("products.show", product.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$p, {
                                        href: _ctx.route("orders.index", { product_id: product.id })
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$q, {
                                        "product-id": product.id
                                      }, null, 8, ["product-id"])
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
                          createTextVNode(toDisplayString(((_a = _ctx.products) == null ? void 0 : _a.length) ? "A list of your recent products." : "No product found."), 1)
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
                                createTextVNode("Image")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Name")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Type")
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
                                createTextVNode("Price")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("On Sale")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Stock Status")
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
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products, (product) => {
                          return openBlock(), createBlock(unref(_sfc_main$k), {
                            key: product.id
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    ((_a = product.images) == null ? void 0 : _a.length) && product.images[0].src ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: product.images[0].src,
                                      alt: product.name || product.id.toString(),
                                      class: "inline-block size-8 object-cover"
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "capitalize" }, toDisplayString(product.type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "capitalize" }, toDisplayString(product.status), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.price), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.on_sale ? "Yes" : "No"), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(dateFormat)(product.date_created)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-x-3" }, [
                                    createVNode(_sfc_main$o, {
                                      href: _ctx.route("products.show", product.id)
                                    }, null, 8, ["href"]),
                                    createVNode(_sfc_main$p, {
                                      href: _ctx.route("orders.index", { product_id: product.id })
                                    }, null, 8, ["href"]),
                                    createVNode(_sfc_main$q, {
                                      "product-id": product.id
                                    }, null, 8, ["product-id"])
                                  ])
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
                                createTextVNode("Products")
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
                                    createTextVNode("Product ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  id: "product_id",
                                  placeholder: "Product ID",
                                  modelValue: unref(searchForm).product_id,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).product_id = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
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
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Status" })
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
                                            createVNode(unref(_sfc_main$d), { value: "draft" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Draft")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "pending" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Pending")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "private" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Private")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "publish" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Publish")
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
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Type")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).type,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).type = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Type" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "simple" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Simple")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "grouped" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Grouped")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "external" }, {
                                              default: withCtx(() => [
                                                createTextVNode("External")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "variable" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Variable")
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
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Sku")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Sku",
                                  modelValue: unref(searchForm).sku,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).sku = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Featured")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).featured,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).featured = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Featured" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("No")
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
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Category ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Category ID",
                                  modelValue: unref(searchForm).category,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).category = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("On Sale")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).on_sale,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).on_sale = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select On Sale" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("No")
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
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Min. Price")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Min. Price",
                                  modelValue: unref(searchForm).min_price,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).min_price = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Max. Price")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  placeholder: "Max. Price",
                                  modelValue: unref(searchForm).max_price,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).max_price = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Stock Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).stock_status,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).stock_status = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Stock Status" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "instock" }, {
                                              default: withCtx(() => [
                                                createTextVNode("In Stock")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "outofstock" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Out of Stock")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "onbackorder" }, {
                                              default: withCtx(() => [
                                                createTextVNode("On Back Order")
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
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Order By:")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(searchForm).orderby,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).orderby = $event,
                                  disabled: unref(searchForm).processing
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { class: "min-w-20" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { placeholder: "Select Order By" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { value: "date" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Date")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "modified" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Modified")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "id" }, {
                                              default: withCtx(() => [
                                                createTextVNode("ID")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "title" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Title")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "slug" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Slug")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "price" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Price")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "popularity" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Popularity")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "rating" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Rating")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$d), { value: "menu_order" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Menu Order")
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
                            createTextVNode(toDisplayString(((_a = _ctx.products) == null ? void 0 : _a.length) ? "A list of your recent products." : "No product found."), 1)
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
                                  createTextVNode("Image")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Type")
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
                                  createTextVNode("Price")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("On Sale")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$l), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Stock Status")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products, (product) => {
                            return openBlock(), createBlock(unref(_sfc_main$k), {
                              key: product.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      ((_a = product.images) == null ? void 0 : _a.length) && product.images[0].src ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: product.images[0].src,
                                        alt: product.name || product.id.toString(),
                                        class: "inline-block size-8 object-cover"
                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "capitalize" }, toDisplayString(product.type), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "capitalize" }, toDisplayString(product.status), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.price), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.on_sale ? "Yes" : "No"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.stock_status === "instock" ? "In Stock" : product.stock_status === "outofstock" ? "Out of Stock" : product.stock_status === "onbackorder" ? "On Back Order" : product.stock_status), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(product.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$n), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$o, {
                                        href: _ctx.route("products.show", product.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$p, {
                                        href: _ctx.route("orders.index", { product_id: product.id })
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$q, {
                                        "product-id": product.id
                                      }, null, 8, ["product-id"])
                                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
