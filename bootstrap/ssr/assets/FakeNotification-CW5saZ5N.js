import { defineComponent, mergeProps, useSSRContext, computed, unref, withCtx, renderSlot, createVNode, createTextVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { c as cn, _ as _sfc_main$b } from "./Button-DbljGXnF.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$a } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$9 } from "./Input-DuD_s7Py.js";
import { _ as _sfc_main$8 } from "./Label-CIcpwQL3.js";
import { useForwardPropsEmits, SwitchRoot, SwitchThumb } from "reka-ui";
import { _ as _sfc_main$3 } from "./AppLayout-WSUd1wzs.js";
import { useForm, Head } from "@inertiajs/vue3";
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "class-variance-authority";
import "@vueuse/core";
import "lucide-vue-next";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ErrorMessage",
  __ssrInlineRender: true,
  props: {
    errorMessage: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.errorMessage) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-red-500" }, _attrs))}>${ssrInterpolate(_ctx.errorMessage)}</p>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Form/ErrorMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SwitchRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwitchThumb), {
              class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "thumb", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "thumb")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwitchThumb), {
                class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5")
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "thumb")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/switch/Switch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FakeNotification",
  __ssrInlineRender: true,
  props: {
    slug: {},
    data: {}
  },
  setup(__props) {
    const breadcrumbs = [
      {
        title: "Fake Notifications",
        href: route("features.index", { feature: "fake-notifications" })
      }
    ];
    const form = useForm({
      total: __props.data.total,
      loop_time: __props.data.loop_time,
      real_data: __props.data.real_data,
      is_active: __props.data.is_active
    });
    const update = () => form.put(route("features.update", { feature: __props.slug }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Fake Notifications" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { breadcrumbs }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4"${_scopeId}><div class="space-y-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fake Notifications`);
                            } else {
                              return [
                                createTextVNode("Fake Notifications")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode("Fake Notifications")
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
                        _push4(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"${_scopeId3}><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Total Orders`);
                            } else {
                              return [
                                createTextVNode("Total Orders")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          placeholder: "Total Orders",
                          modelValue: unref(form).total,
                          "onUpdate:modelValue": ($event) => unref(form).total = $event,
                          disabled: unref(form).processing
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          "error-message": unref(form).errors.total
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Loop Time`);
                            } else {
                              return [
                                createTextVNode("Loop Time")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          placeholder: "Loop Time",
                          modelValue: unref(form).loop_time,
                          "onUpdate:modelValue": ($event) => unref(form).loop_time = $event,
                          disabled: unref(form).processing
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          "error-message": unref(form).errors.loop_time
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Real Data`);
                            } else {
                              return [
                                createTextVNode("Real Data")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex min-h-10 items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$1), {
                          modelValue: unref(form).real_data,
                          "onUpdate:modelValue": ($event) => unref(form).real_data = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          "error-message": unref(form).errors.real_data
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex flex-col space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Is Active`);
                            } else {
                              return [
                                createTextVNode("Is Active")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex min-h-10 items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$1), {
                          modelValue: unref(form).is_active,
                          "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          "error-message": unref(form).errors.is_active
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Total Orders")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                placeholder: "Total Orders",
                                modelValue: unref(form).total,
                                "onUpdate:modelValue": ($event) => unref(form).total = $event,
                                disabled: unref(form).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.total
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Loop Time")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                placeholder: "Loop Time",
                                modelValue: unref(form).loop_time,
                                "onUpdate:modelValue": ($event) => unref(form).loop_time = $event,
                                disabled: unref(form).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.loop_time
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Real Data")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$1), {
                                  modelValue: unref(form).real_data,
                                  "onUpdate:modelValue": ($event) => unref(form).real_data = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.real_data
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Is Active")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$1), {
                                  modelValue: unref(form).is_active,
                                  "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.is_active
                              }, null, 8, ["error-message"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { class: "flex gap-2 px-6 pb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$b), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Submit`);
                            } else {
                              return [
                                createTextVNode("Submit")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$b), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Submit")
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
                      onSubmit: withModifiers(update, ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode("Fake Notifications")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Total Orders")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                placeholder: "Total Orders",
                                modelValue: unref(form).total,
                                "onUpdate:modelValue": ($event) => unref(form).total = $event,
                                disabled: unref(form).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.total
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Loop Time")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                placeholder: "Loop Time",
                                modelValue: unref(form).loop_time,
                                "onUpdate:modelValue": ($event) => unref(form).loop_time = $event,
                                disabled: unref(form).processing
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.loop_time
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Real Data")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$1), {
                                  modelValue: unref(form).real_data,
                                  "onUpdate:modelValue": ($event) => unref(form).real_data = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.real_data
                              }, null, 8, ["error-message"])
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Is Active")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$1), {
                                  modelValue: unref(form).is_active,
                                  "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_sfc_main$2, {
                                "error-message": unref(form).errors.is_active
                              }, null, 8, ["error-message"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$a), { class: "flex gap-2 px-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$b), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Submit")
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-1 flex-col gap-4 rounded-xl p-4" }, [
                createVNode("div", { class: "space-y-5" }, [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(update, ["prevent"])
                      }, [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), null, {
                              default: withCtx(() => [
                                createTextVNode("Fake Notifications")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Total Orders")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), {
                                  placeholder: "Total Orders",
                                  modelValue: unref(form).total,
                                  "onUpdate:modelValue": ($event) => unref(form).total = $event,
                                  disabled: unref(form).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                createVNode(_sfc_main$2, {
                                  "error-message": unref(form).errors.total
                                }, null, 8, ["error-message"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Loop Time")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), {
                                  placeholder: "Loop Time",
                                  modelValue: unref(form).loop_time,
                                  "onUpdate:modelValue": ($event) => unref(form).loop_time = $event,
                                  disabled: unref(form).processing
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                createVNode(_sfc_main$2, {
                                  "error-message": unref(form).errors.loop_time
                                }, null, 8, ["error-message"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Real Data")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                  createVNode(unref(_sfc_main$1), {
                                    modelValue: unref(form).real_data,
                                    "onUpdate:modelValue": ($event) => unref(form).real_data = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_sfc_main$2, {
                                  "error-message": unref(form).errors.real_data
                                }, null, 8, ["error-message"])
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Is Active")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex min-h-10 items-center space-x-2" }, [
                                  createVNode(unref(_sfc_main$1), {
                                    modelValue: unref(form).is_active,
                                    "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_sfc_main$2, {
                                  "error-message": unref(form).errors.is_active
                                }, null, 8, ["error-message"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$a), { class: "flex gap-2 px-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$b), {
                              type: "submit",
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Submit")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/features/FakeNotification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
