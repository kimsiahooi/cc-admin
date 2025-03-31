import { defineComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./OrderDetailsLink-CsxQbUXZ.js";
import { _ as _sfc_main$6 } from "./ProductLink-ehNnNuz7.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$7 } from "./CardTitle-B9BB_gcZ.js";
import { _ as _sfc_main$1, a as _sfc_main$8 } from "./AppLayout-WSUd1wzs.js";
import { u as useDateFormat } from "./useDateFormat-0JAl-QSL.js";
import { Head } from "@inertiajs/vue3";
import "lucide-vue-next";
import "./Button-DbljGXnF.js";
import "clsx";
import "tailwind-merge";
import "radix-vue";
import "class-variance-authority";
import "reka-ui";
import "./Input-DuD_s7Py.js";
import "@vueuse/core";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    var _a, _b;
    const dateFormat = useDateFormat();
    const breadcrumbs = [
      {
        title: "Products",
        href: route("products.index")
      },
      {
        title: ((_a = __props.product) == null ? void 0 : _a.id.toString()) || "",
        href: ((_b = __props.product) == null ? void 0 : _b.id) ? route("products.show", __props.product.id) : "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Product ID ${(_a2 = _ctx.product) == null ? void 0 : _a2.id}`
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { breadcrumbs }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            _push2(`<div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4"${_scopeId}>`);
            if (_ctx.product) {
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
                                _push5(`<span${_scopeId4}>Product ID ${ssrInterpolate(_ctx.product.id)}</span> `);
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  href: _ctx.route("orders.index", { product_id: _ctx.product.id })
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  "product-id": _ctx.product.id
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", null, "Product ID " + toDisplayString(_ctx.product.id), 1),
                                  createTextVNode(),
                                  createVNode(_sfc_main$5, {
                                    href: _ctx.route("orders.index", { product_id: _ctx.product.id })
                                  }, null, 8, ["href"]),
                                  createVNode(_sfc_main$6, {
                                    "product-id": _ctx.product.id
                                  }, null, 8, ["product-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Product ID " + toDisplayString(_ctx.product.id), 1),
                                createTextVNode(),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("orders.index", { product_id: _ctx.product.id })
                                }, null, 8, ["href"]),
                                createVNode(_sfc_main$6, {
                                  "product-id": _ctx.product.id
                                }, null, 8, ["product-id"])
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
                        var _a4, _b3, _c, _d, _e, _f, _g, _h, _i, _j;
                        if (_push4) {
                          _push4(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId3}><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Name:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.name || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Slug:</label><div${_scopeId3}>`);
                          if (_ctx.product.permalink) {
                            _push4(`<a${ssrRenderAttr("href", _ctx.product.permalink)} target="_blank" class="underline"${_scopeId3}>${ssrInterpolate(_ctx.product.slug)}</a>`);
                          } else if (_ctx.product.slug) {
                            _push4(`<p${_scopeId3}>${ssrInterpolate(_ctx.product.slug)}</p>`);
                          } else {
                            _push4(`<p${_scopeId3}>-</p>`);
                          }
                          _push4(`</div></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Created:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.product.date_created) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date Modified:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.product.date_modified) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Type:</label><p class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.product.type || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Status:</label><p class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.product.status || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Featured:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.featured ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Sku:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.sku)}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Price:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.price || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Regular Price:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.regular_price || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Sale Price:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.sale_price || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date On Sale From:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.product.date_on_sale_from) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Date On Sale To:</label><p${_scopeId3}>${ssrInterpolate(unref(dateFormat)(_ctx.product.date_on_sale_to) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>On Sale:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.on_sale === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Purchasable:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.purchasable === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Total Sales:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.total_sales || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Tax Status:</label><p class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.product.tax_status || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Tax Class:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.tax_class || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Manage Stock:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.manage_stock === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Stock Quantity:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.stock_quantity || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Stock Status:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.stock_status === "instock" ? "In Stock" : _ctx.product.stock_status === "outofstock" ? "Out of Stock" : _ctx.product.stock_status === "onbackorder" ? "On Back Order" : _ctx.product.stock_status)}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Backorders:</label><p class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.product.backorders || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Backorders Allowed:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.backorders_allowed === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Backordered:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.backordered === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Sold Individually:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.sold_individually === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Weight:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.weight || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Dimensions:</label><p${_scopeId3}>Length: ${ssrInterpolate(((_a4 = _ctx.product.dimensions) == null ? void 0 : _a4.length) || "-")}</p><p${_scopeId3}>Width: ${ssrInterpolate(((_b3 = _ctx.product.dimensions) == null ? void 0 : _b3.width) || "-")}</p><p${_scopeId3}>Height: ${ssrInterpolate(((_c = _ctx.product.dimensions) == null ? void 0 : _c.height) || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Shipping Required:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.shipping_required === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Shipping Taxable:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.shipping_taxable === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Shipping Class:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.shipping_class || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Reviews Allowed:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.reviews_allowed === true ? "Yes" : "No")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Average Rating:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.average_rating || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Rating Count:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.rating_count || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Purchase Note:</label><p${_scopeId3}>${ssrInterpolate(_ctx.product.purchase_note || "-")}</p></div><div class="space-y-1"${_scopeId3}><label${_scopeId3}>Categories:</label><p${_scopeId3}>${ssrInterpolate(((_d = _ctx.product.categories) == null ? void 0 : _d.length) ? _ctx.product.categories.map((category) => category.name).join(", ") : "-")}</p></div>`);
                          if ((_e = _ctx.product.attributes) == null ? void 0 : _e.length) {
                            _push4(`<!--[-->`);
                            ssrRenderList(_ctx.product.attributes, (attribute, index) => {
                              var _a5;
                              _push4(`<div class="space-y-1"${_scopeId3}><label${_scopeId3}>${ssrInterpolate(attribute.name)}:</label><p${_scopeId3}>${ssrInterpolate((_a5 = attribute.options) == null ? void 0 : _a5.join(", "))}</p></div>`);
                            });
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Name:"),
                                createVNode("p", null, toDisplayString(_ctx.product.name || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Slug:"),
                                createVNode("div", null, [
                                  _ctx.product.permalink ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: _ctx.product.permalink,
                                    target: "_blank",
                                    class: "underline"
                                  }, toDisplayString(_ctx.product.slug), 9, ["href"])) : _ctx.product.slug ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.product.slug), 1)) : (openBlock(), createBlock("p", { key: 2 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_modified) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Type:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.type || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Featured:"),
                                createVNode("p", null, toDisplayString(_ctx.product.featured ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sku:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sku), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Regular Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.regular_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sale Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sale_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale From:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_from) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale To:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_to) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "On Sale:"),
                                createVNode("p", null, toDisplayString(_ctx.product.on_sale === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchasable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchasable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total Sales:"),
                                createVNode("p", null, toDisplayString(_ctx.product.total_sales || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.tax_status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.tax_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Manage Stock:"),
                                createVNode("p", null, toDisplayString(_ctx.product.manage_stock === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Quantity:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_quantity || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Status:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_status === "instock" ? "In Stock" : _ctx.product.stock_status === "outofstock" ? "Out of Stock" : _ctx.product.stock_status === "onbackorder" ? "On Back Order" : _ctx.product.stock_status), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.backorders || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backorders_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backordered:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backordered === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sold Individually:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sold_individually === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Weight:"),
                                createVNode("p", null, toDisplayString(_ctx.product.weight || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Dimensions:"),
                                createVNode("p", null, "Length: " + toDisplayString(((_f = _ctx.product.dimensions) == null ? void 0 : _f.length) || "-"), 1),
                                createVNode("p", null, "Width: " + toDisplayString(((_g = _ctx.product.dimensions) == null ? void 0 : _g.width) || "-"), 1),
                                createVNode("p", null, "Height: " + toDisplayString(((_h = _ctx.product.dimensions) == null ? void 0 : _h.height) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Required:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_required === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Taxable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_taxable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Reviews Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.reviews_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Average Rating:"),
                                createVNode("p", null, toDisplayString(_ctx.product.average_rating || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Rating Count:"),
                                createVNode("p", null, toDisplayString(_ctx.product.rating_count || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchase Note:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchase_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Categories:"),
                                createVNode("p", null, toDisplayString(((_i = _ctx.product.categories) == null ? void 0 : _i.length) ? _ctx.product.categories.map((category) => category.name).join(", ") : "-"), 1)
                              ]),
                              ((_j = _ctx.product.attributes) == null ? void 0 : _j.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.product.attributes, (attribute, index) => {
                                var _a5;
                                return openBlock(), createBlock("div", {
                                  key: attribute.id || index,
                                  class: "space-y-1"
                                }, [
                                  createVNode("label", null, toDisplayString(attribute.name) + ":", 1),
                                  createVNode("p", null, toDisplayString((_a5 = attribute.options) == null ? void 0 : _a5.join(", ")), 1)
                                ]);
                              }), 128)) : createCommentVNode("", true)
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
                              createVNode("span", null, "Product ID " + toDisplayString(_ctx.product.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                href: _ctx.route("orders.index", { product_id: _ctx.product.id })
                              }, null, 8, ["href"]),
                              createVNode(_sfc_main$6, {
                                "product-id": _ctx.product.id
                              }, null, 8, ["product-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a4, _b3, _c, _d, _e;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Name:"),
                                createVNode("p", null, toDisplayString(_ctx.product.name || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Slug:"),
                                createVNode("div", null, [
                                  _ctx.product.permalink ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: _ctx.product.permalink,
                                    target: "_blank",
                                    class: "underline"
                                  }, toDisplayString(_ctx.product.slug), 9, ["href"])) : _ctx.product.slug ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.product.slug), 1)) : (openBlock(), createBlock("p", { key: 2 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_modified) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Type:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.type || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Featured:"),
                                createVNode("p", null, toDisplayString(_ctx.product.featured ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sku:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sku), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Regular Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.regular_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sale Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sale_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale From:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_from) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale To:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_to) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "On Sale:"),
                                createVNode("p", null, toDisplayString(_ctx.product.on_sale === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchasable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchasable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total Sales:"),
                                createVNode("p", null, toDisplayString(_ctx.product.total_sales || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.tax_status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.tax_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Manage Stock:"),
                                createVNode("p", null, toDisplayString(_ctx.product.manage_stock === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Quantity:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_quantity || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Status:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_status === "instock" ? "In Stock" : _ctx.product.stock_status === "outofstock" ? "Out of Stock" : _ctx.product.stock_status === "onbackorder" ? "On Back Order" : _ctx.product.stock_status), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.backorders || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backorders_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backordered:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backordered === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sold Individually:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sold_individually === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Weight:"),
                                createVNode("p", null, toDisplayString(_ctx.product.weight || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Dimensions:"),
                                createVNode("p", null, "Length: " + toDisplayString(((_a4 = _ctx.product.dimensions) == null ? void 0 : _a4.length) || "-"), 1),
                                createVNode("p", null, "Width: " + toDisplayString(((_b3 = _ctx.product.dimensions) == null ? void 0 : _b3.width) || "-"), 1),
                                createVNode("p", null, "Height: " + toDisplayString(((_c = _ctx.product.dimensions) == null ? void 0 : _c.height) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Required:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_required === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Taxable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_taxable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Reviews Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.reviews_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Average Rating:"),
                                createVNode("p", null, toDisplayString(_ctx.product.average_rating || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Rating Count:"),
                                createVNode("p", null, toDisplayString(_ctx.product.rating_count || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchase Note:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchase_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Categories:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.product.categories) == null ? void 0 : _d.length) ? _ctx.product.categories.map((category) => category.name).join(", ") : "-"), 1)
                              ]),
                              ((_e = _ctx.product.attributes) == null ? void 0 : _e.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.product.attributes, (attribute, index) => {
                                var _a5;
                                return openBlock(), createBlock("div", {
                                  key: attribute.id || index,
                                  class: "space-y-1"
                                }, [
                                  createVNode("label", null, toDisplayString(attribute.name) + ":", 1),
                                  createVNode("p", null, toDisplayString((_a5 = attribute.options) == null ? void 0 : _a5.join(", ")), 1)
                                ]);
                              }), 128)) : createCommentVNode("", true)
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
              if ((_a3 = _ctx.product.images) == null ? void 0 : _a3.length) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Images`);
                                } else {
                                  return [
                                    createTextVNode("Images")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Images")
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
                            _push4(`<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"${_scopeId3}><!--[-->`);
                            ssrRenderList(_ctx.product.images, (image, index) => {
                              _push4(`<div${_scopeId3}>`);
                              if (image.src) {
                                _push4(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt || index.toString())} class="aspect-square w-full object-cover"${_scopeId3}>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.product.images, (image, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: image.id || index
                                  }, [
                                    image.src ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: image.src,
                                      alt: image.alt || index.toString(),
                                      class: "aspect-square w-full object-cover"
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
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
                                createTextVNode("Images")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.product.images, (image, index) => {
                                return openBlock(), createBlock("div", {
                                  key: image.id || index
                                }, [
                                  image.src ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: image.src,
                                    alt: image.alt || index.toString(),
                                    class: "aspect-square w-full object-cover"
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.product.short_description) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Short Description`);
                                } else {
                                  return [
                                    createTextVNode("Short Description")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Short Description")
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
                            _push4(`<p${_scopeId3}>${_ctx.product.short_description ?? ""}</p>`);
                          } else {
                            return [
                              createVNode("p", {
                                innerHTML: _ctx.product.short_description
                              }, null, 8, ["innerHTML"])
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
                                createTextVNode("Short Description")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("p", {
                              innerHTML: _ctx.product.short_description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.product.description) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Description`);
                                } else {
                                  return [
                                    createTextVNode("Description")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Description")
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
                            _push4(`<p${_scopeId3}>${_ctx.product.description ?? ""}</p>`);
                          } else {
                            return [
                              createVNode("p", {
                                innerHTML: _ctx.product.description
                              }, null, 8, ["innerHTML"])
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
                                createTextVNode("Description")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("p", {
                              innerHTML: _ctx.product.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-1 flex-col gap-4 rounded-xl p-4" }, [
                _ctx.product ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-5"
                }, [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "space-x-2" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Product ID " + toDisplayString(_ctx.product.id), 1),
                              createTextVNode(),
                              createVNode(_sfc_main$5, {
                                href: _ctx.route("orders.index", { product_id: _ctx.product.id })
                              }, null, 8, ["href"]),
                              createVNode(_sfc_main$6, {
                                "product-id": _ctx.product.id
                              }, null, 8, ["product-id"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => {
                          var _a4, _b3, _c, _d, _e;
                          return [
                            createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Name:"),
                                createVNode("p", null, toDisplayString(_ctx.product.name || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Slug:"),
                                createVNode("div", null, [
                                  _ctx.product.permalink ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: _ctx.product.permalink,
                                    target: "_blank",
                                    class: "underline"
                                  }, toDisplayString(_ctx.product.slug), 9, ["href"])) : _ctx.product.slug ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.product.slug), 1)) : (openBlock(), createBlock("p", { key: 2 }, "-"))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Created:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_created) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date Modified:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_modified) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Type:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.type || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Featured:"),
                                createVNode("p", null, toDisplayString(_ctx.product.featured ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sku:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sku), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Regular Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.regular_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sale Price:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sale_price || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale From:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_from) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Date On Sale To:"),
                                createVNode("p", null, toDisplayString(unref(dateFormat)(_ctx.product.date_on_sale_to) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "On Sale:"),
                                createVNode("p", null, toDisplayString(_ctx.product.on_sale === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchasable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchasable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Total Sales:"),
                                createVNode("p", null, toDisplayString(_ctx.product.total_sales || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Status:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.tax_status || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Tax Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.tax_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Manage Stock:"),
                                createVNode("p", null, toDisplayString(_ctx.product.manage_stock === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Quantity:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_quantity || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Stock Status:"),
                                createVNode("p", null, toDisplayString(_ctx.product.stock_status === "instock" ? "In Stock" : _ctx.product.stock_status === "outofstock" ? "Out of Stock" : _ctx.product.stock_status === "onbackorder" ? "On Back Order" : _ctx.product.stock_status), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders:"),
                                createVNode("p", { class: "capitalize" }, toDisplayString(_ctx.product.backorders || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backorders Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backorders_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Backordered:"),
                                createVNode("p", null, toDisplayString(_ctx.product.backordered === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Sold Individually:"),
                                createVNode("p", null, toDisplayString(_ctx.product.sold_individually === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Weight:"),
                                createVNode("p", null, toDisplayString(_ctx.product.weight || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Dimensions:"),
                                createVNode("p", null, "Length: " + toDisplayString(((_a4 = _ctx.product.dimensions) == null ? void 0 : _a4.length) || "-"), 1),
                                createVNode("p", null, "Width: " + toDisplayString(((_b3 = _ctx.product.dimensions) == null ? void 0 : _b3.width) || "-"), 1),
                                createVNode("p", null, "Height: " + toDisplayString(((_c = _ctx.product.dimensions) == null ? void 0 : _c.height) || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Required:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_required === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Taxable:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_taxable === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Shipping Class:"),
                                createVNode("p", null, toDisplayString(_ctx.product.shipping_class || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Reviews Allowed:"),
                                createVNode("p", null, toDisplayString(_ctx.product.reviews_allowed === true ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Average Rating:"),
                                createVNode("p", null, toDisplayString(_ctx.product.average_rating || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Rating Count:"),
                                createVNode("p", null, toDisplayString(_ctx.product.rating_count || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Purchase Note:"),
                                createVNode("p", null, toDisplayString(_ctx.product.purchase_note || "-"), 1)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("label", null, "Categories:"),
                                createVNode("p", null, toDisplayString(((_d = _ctx.product.categories) == null ? void 0 : _d.length) ? _ctx.product.categories.map((category) => category.name).join(", ") : "-"), 1)
                              ]),
                              ((_e = _ctx.product.attributes) == null ? void 0 : _e.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.product.attributes, (attribute, index) => {
                                var _a5;
                                return openBlock(), createBlock("div", {
                                  key: attribute.id || index,
                                  class: "space-y-1"
                                }, [
                                  createVNode("label", null, toDisplayString(attribute.name) + ":", 1),
                                  createVNode("p", null, toDisplayString((_a5 = attribute.options) == null ? void 0 : _a5.join(", ")), 1)
                                ]);
                              }), 128)) : createCommentVNode("", true)
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  ((_b2 = _ctx.product.images) == null ? void 0 : _b2.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(unref(_sfc_main$8)),
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Images")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.product.images, (image, index) => {
                                return openBlock(), createBlock("div", {
                                  key: image.id || index
                                }, [
                                  image.src ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: image.src,
                                    alt: image.alt || index.toString(),
                                    class: "aspect-square w-full object-cover"
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ], 64)) : createCommentVNode("", true),
                  _ctx.product.short_description ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(unref(_sfc_main$8)),
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Short Description")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("p", {
                              innerHTML: _ctx.product.short_description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 64)) : createCommentVNode("", true),
                  _ctx.product.description ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode(unref(_sfc_main$8)),
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("p", {
                              innerHTML: _ctx.product.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/products/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
