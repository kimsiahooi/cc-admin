import { defineComponent, unref, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$i, a as _sfc_main$l } from "./PayingCustomerStatus-BDR9v532.js";
import { _ as _sfc_main$k } from "./OrderDetailsLink-CsxQbUXZ.js";
import { _ as _sfc_main$j, a as _sfc_main$m, b as _sfc_main$n, c as _sfc_main$o, d as _sfc_main$p, e as _sfc_main$q, f as _sfc_main$r } from "./SelectValue-JRowzdw5.js";
import { _ as _sfc_main$9 } from "./Button-DbljGXnF.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$8 } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$7 } from "./Input-DuD_s7Py.js";
import { _ as _sfc_main$6 } from "./Label-CIcpwQL3.js";
import { _ as _sfc_main$1, a as _sfc_main$a } from "./AppLayout-WSUd1wzs.js";
import { _ as _sfc_main$b, a as _sfc_main$c, b as _sfc_main$d, c as _sfc_main$e, d as _sfc_main$f, e as _sfc_main$g, f as _sfc_main$h } from "./TableHeader-DRWA9O97.js";
import { u as useDateFormat } from "./useDateFormat-0JAl-QSL.js";
import { useForm, Head, router } from "@inertiajs/vue3";
import "lucide-vue-next";
import "./index-n6Jd8ds3.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "@vueuse/core";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    customers: {},
    filter_config: {}
  },
  setup(__props) {
    const dateFormat = useDateFormat();
    const searchForm = useForm({
      entries: +__props.filter_config.entries,
      page: +__props.filter_config.page,
      customer_id: __props.filter_config.customer_id,
      customer_email: __props.filter_config.customer_email
    });
    const breadcrumbs = [
      {
        title: "Customers",
        href: route("customers.index")
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
      router.visit(route("customers.index"));
    };
    const submit = () => {
      searchForm.get(route("customers.index"), {
        preserveState: true,
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Customers" }, null, _parent));
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
                              _push5(`Customers`);
                            } else {
                              return [
                                createTextVNode("Customers")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Customers")
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
                          id: "customer_id",
                          placeholder: "Customer ID",
                          modelValue: unref(searchForm).customer_id,
                          "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { for: "search" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Customer Email`);
                            } else {
                              return [
                                createTextVNode("Customer Email")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          id: "customer_email",
                          placeholder: "Customer Email",
                          modelValue: unref(searchForm).customer_email,
                          "onUpdate:modelValue": ($event) => unref(searchForm).customer_email = $event,
                          disabled: unref(searchForm).processing
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "customer_id",
                                placeholder: "Customer ID",
                                modelValue: unref(searchForm).customer_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "customer_email",
                                placeholder: "Customer Email",
                                modelValue: unref(searchForm).customer_email,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_email = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
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
                          createVNode(unref(_sfc_main$9), {
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
                          createVNode(unref(_sfc_main$9), {
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
                              createTextVNode("Customers")
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
                                  createTextVNode("Customer ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "customer_id",
                                placeholder: "Customer ID",
                                modelValue: unref(searchForm).customer_id,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$6), { for: "search" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                id: "customer_email",
                                placeholder: "Customer Email",
                                modelValue: unref(searchForm).customer_email,
                                "onUpdate:modelValue": ($event) => unref(searchForm).customer_email = $event,
                                disabled: unref(searchForm).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), {
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
                          createVNode(unref(_sfc_main$9), {
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
            _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "my-2" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$b), { class: "min-w-max" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$c), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate(((_a = _ctx.customers) == null ? void 0 : _a.length) ? "A list of your recent customers." : "No customer found.")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b = _ctx.customers) == null ? void 0 : _b.length) ? "A list of your recent customers." : "No customer found."), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$d), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Avatar`);
                                  } else {
                                    return [
                                      createTextVNode("Avatar")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Email`);
                                  } else {
                                    return [
                                      createTextVNode("Email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Is Paying Customer`);
                                  } else {
                                    return [
                                      createTextVNode("Is Paying Customer")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$f), { class: "text-center" }, {
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
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Avatar")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Is Paying Customer")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date Created")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), { class: "text-center" }, {
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
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Avatar")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Is Paying Customer")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date Created")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$g), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.customers, (customer) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            key: customer.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(customer.id)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(customer.id), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (customer.avatar_url) {
                                        _push6(`<img${ssrRenderAttr("src", customer.avatar_url)}${ssrRenderAttr("alt", customer.username || customer.id.toString())} class="inline-block size-8 rounded-full object-cover"${_scopeId5}>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        customer.avatar_url ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: customer.avatar_url,
                                          alt: customer.username || customer.id.toString(),
                                          class: "inline-block size-8 rounded-full object-cover"
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(customer.first_name)} ${ssrInterpolate(customer.last_name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(customer.first_name) + " " + toDisplayString(customer.last_name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(customer.email)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(customer.email), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$i, {
                                        "-is-paying-customer": customer.is_paying_customer
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$i, {
                                          "-is-paying-customer": customer.is_paying_customer
                                        }, null, 8, ["-is-paying-customer"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(dateFormat)(customer.date_created))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(dateFormat)(customer.date_created)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-x-3"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_sfc_main$j, {
                                        href: _ctx.route("customers.show", customer.id)
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_sfc_main$k, {
                                        href: _ctx.route("orders.index", { customer_id: customer.id })
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_sfc_main$l, {
                                        "customer-id": customer.id
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-x-3" }, [
                                          createVNode(_sfc_main$j, {
                                            href: _ctx.route("customers.show", customer.id)
                                          }, null, 8, ["href"]),
                                          createVNode(_sfc_main$k, {
                                            href: _ctx.route("orders.index", { customer_id: customer.id })
                                          }, null, 8, ["href"]),
                                          createVNode(_sfc_main$l, {
                                            "customer-id": customer.id
                                          }, null, 8, ["customer-id"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(customer.id), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      customer.avatar_url ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: customer.avatar_url,
                                        alt: customer.username || customer.id.toString(),
                                        class: "inline-block size-8 rounded-full object-cover"
                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(customer.first_name) + " " + toDisplayString(customer.last_name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(customer.email), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$i, {
                                        "-is-paying-customer": customer.is_paying_customer
                                      }, null, 8, ["-is-paying-customer"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(dateFormat)(customer.date_created)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-x-3" }, [
                                        createVNode(_sfc_main$j, {
                                          href: _ctx.route("customers.show", customer.id)
                                        }, null, 8, ["href"]),
                                        createVNode(_sfc_main$k, {
                                          href: _ctx.route("orders.index", { customer_id: customer.id })
                                        }, null, 8, ["href"]),
                                        createVNode(_sfc_main$l, {
                                          "customer-id": customer.id
                                        }, null, 8, ["customer-id"])
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
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.customers, (customer) => {
                            return openBlock(), createBlock(unref(_sfc_main$e), {
                              key: customer.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    customer.avatar_url ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: customer.avatar_url,
                                      alt: customer.username || customer.id.toString(),
                                      class: "inline-block size-8 rounded-full object-cover"
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.first_name) + " " + toDisplayString(customer.last_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.email), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$i, {
                                      "-is-paying-customer": customer.is_paying_customer
                                    }, null, 8, ["-is-paying-customer"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(customer.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$j, {
                                        href: _ctx.route("customers.show", customer.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$k, {
                                        href: _ctx.route("orders.index", { customer_id: customer.id })
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$l, {
                                        "customer-id": customer.id
                                      }, null, 8, ["customer-id"])
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
                    createVNode(unref(_sfc_main$c), null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(((_a = _ctx.customers) == null ? void 0 : _a.length) ? "A list of your recent customers." : "No customer found."), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$d), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("ID")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Avatar")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Name")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Is Paying Customer")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Date Created")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), { class: "text-center" }, {
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
                    createVNode(unref(_sfc_main$g), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.customers, (customer) => {
                          return openBlock(), createBlock(unref(_sfc_main$e), {
                            key: customer.id
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  customer.avatar_url ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: customer.avatar_url,
                                    alt: customer.username || customer.id.toString(),
                                    class: "inline-block size-8 rounded-full object-cover"
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.first_name) + " " + toDisplayString(customer.last_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.email), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$i, {
                                    "-is-paying-customer": customer.is_paying_customer
                                  }, null, 8, ["-is-paying-customer"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(dateFormat)(customer.date_created)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-x-3" }, [
                                    createVNode(_sfc_main$j, {
                                      href: _ctx.route("customers.show", customer.id)
                                    }, null, 8, ["href"]),
                                    createVNode(_sfc_main$k, {
                                      href: _ctx.route("orders.index", { customer_id: customer.id })
                                    }, null, 8, ["href"]),
                                    createVNode(_sfc_main$l, {
                                      "customer-id": customer.id
                                    }, null, 8, ["customer-id"])
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
            _push2(ssrRenderComponent(unref(_sfc_main$m), {
              modelValue: unref(searchForm).entries,
              "onUpdate:modelValue": [($event) => unref(searchForm).entries = $event, entriesHandler],
              disabled: unref(searchForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$n), { class: "min-w-20" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$o), { placeholder: "Select Entries" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$o), { placeholder: "Select Entries" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$q), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$r), { value: 10 }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$r), { value: 25 }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$r), { value: 50 }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$r), { value: 100 }, {
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
                                createVNode(unref(_sfc_main$r), { value: 10 }, {
                                  default: withCtx(() => [
                                    createTextVNode("10")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$r), { value: 25 }, {
                                  default: withCtx(() => [
                                    createTextVNode("25")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$r), { value: 50 }, {
                                  default: withCtx(() => [
                                    createTextVNode("50")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$r), { value: 100 }, {
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
                          createVNode(unref(_sfc_main$q), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$r), { value: 10 }, {
                                default: withCtx(() => [
                                  createTextVNode("10")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$r), { value: 25 }, {
                                default: withCtx(() => [
                                  createTextVNode("25")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$r), { value: 50 }, {
                                default: withCtx(() => [
                                  createTextVNode("50")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$r), { value: 100 }, {
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
                    createVNode(unref(_sfc_main$n), { class: "min-w-20" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$o), { placeholder: "Select Entries" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$p), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$q), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$r), { value: 10 }, {
                              default: withCtx(() => [
                                createTextVNode("10")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$r), { value: 25 }, {
                              default: withCtx(() => [
                                createTextVNode("25")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$r), { value: 50 }, {
                              default: withCtx(() => [
                                createTextVNode("50")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$r), { value: 100 }, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
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
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
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
                                createTextVNode("Customers")
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
                                    createTextVNode("Customer ID")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  id: "customer_id",
                                  placeholder: "Customer ID",
                                  modelValue: unref(searchForm).customer_id,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).customer_id = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$6), { for: "search" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Customer Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  id: "customer_email",
                                  placeholder: "Customer Email",
                                  modelValue: unref(searchForm).customer_email,
                                  "onUpdate:modelValue": ($event) => unref(searchForm).customer_email = $event,
                                  disabled: unref(searchForm).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "flex justify-end gap-2 px-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$9), {
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
                            createVNode(unref(_sfc_main$9), {
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
                createVNode(unref(_sfc_main$a), { class: "my-2" }),
                createVNode("div", null, [
                  createVNode(unref(_sfc_main$b), { class: "min-w-max" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = _ctx.customers) == null ? void 0 : _a.length) ? "A list of your recent customers." : "No customer found."), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("ID")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Avatar")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Is Paying Customer")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date Created")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), { class: "text-center" }, {
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
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.customers, (customer) => {
                            return openBlock(), createBlock(unref(_sfc_main$e), {
                              key: customer.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    customer.avatar_url ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: customer.avatar_url,
                                      alt: customer.username || customer.id.toString(),
                                      class: "inline-block size-8 rounded-full object-cover"
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.first_name) + " " + toDisplayString(customer.last_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(customer.email), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$i, {
                                      "-is-paying-customer": customer.is_paying_customer
                                    }, null, 8, ["-is-paying-customer"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(dateFormat)(customer.date_created)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$h), { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-x-3" }, [
                                      createVNode(_sfc_main$j, {
                                        href: _ctx.route("customers.show", customer.id)
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$k, {
                                        href: _ctx.route("orders.index", { customer_id: customer.id })
                                      }, null, 8, ["href"]),
                                      createVNode(_sfc_main$l, {
                                        "customer-id": customer.id
                                      }, null, 8, ["customer-id"])
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
                      createVNode(unref(_sfc_main$m), {
                        modelValue: unref(searchForm).entries,
                        "onUpdate:modelValue": [($event) => unref(searchForm).entries = $event, entriesHandler],
                        disabled: unref(searchForm).processing
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$n), { class: "min-w-20" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$o), { placeholder: "Select Entries" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$q), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$r), { value: 10 }, {
                                    default: withCtx(() => [
                                      createTextVNode("10")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$r), { value: 25 }, {
                                    default: withCtx(() => [
                                      createTextVNode("25")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$r), { value: 50 }, {
                                    default: withCtx(() => [
                                      createTextVNode("50")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$r), { value: 100 }, {
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
                    createVNode(unref(_sfc_main$9), {
                      onClick: prevHandler,
                      disabled: unref(searchForm).page <= 1 || unref(searchForm).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Previous")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(unref(_sfc_main$9), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/customers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
