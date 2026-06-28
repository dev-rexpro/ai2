import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, aS as createEventDispatcher, i as getContext, c as child, z as sibling, r as reset, t as template_effect, u as untrack, d as set_text, y as event, a as append, g as comment, h as first_child, w as set, k as get, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, j as onDestroy, o as onMount, l as legacy_pre_effect, n as legacy_pre_effect_reset, C as deferred_template_effect, $ as $document, A as tick, m as deep_read_state, aR as next, aW as text } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { s as set_attribute, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { d as dayjs2, r as relativeTime } from "../chunks/BeGenu0j.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { R as REXPRO_NAME, u as user } from "../chunks/BJ3rUC-5.js";
import { s as searchKnowledgeBases, d as deleteKnowledgeById, e as exportKnowledgeById } from "../chunks/BxjVhKR8.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { l as capitalizeFirstLetter } from "../chunks/X0cYWxFO.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { V as ViewSelector } from "../chunks/DU19ZWkD.js";
import { L as Loader } from "../chunks/Cbj8yul_.js";
var root$1 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_1$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_2$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function ItemMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let onExport = prop($$props, "onExport", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    align: "end",
    onOpenChange: (state) => {
      if (state === false) {
        onClose()();
      }
    },
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, ($$anchor4) => {
              var button = root$1();
              var node_1 = child(button);
              EllipsisHorizontal(node_1, { className: "size-5" });
              reset(button);
              template_effect(($02) => set_attribute(button, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("More Options")))]);
              event("click", button, (e) => {
                e.stopPropagation();
                set(show, true);
              });
              append($$anchor4, button);
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_2$1();
        var div_1 = child(div);
        var node_2 = child(div_1);
        {
          var consequent = ($$anchor3) => {
            var button_1 = root_1$1();
            var node_3 = child(button_1);
            Download(node_3, {});
            var div_2 = sibling(node_3, 2);
            var text2 = child(div_2, true);
            reset(div_2);
            reset(button_1);
            template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
            event("click", button_1, () => {
              onExport()();
            });
            append($$anchor3, button_1);
          };
          if_block(node_2, ($$render) => {
            if (onExport()) $$render(consequent);
          });
        }
        var button_2 = sibling(node_2, 2);
        var node_4 = child(button_2);
        GarbageBin(node_4, {});
        var div_3 = sibling(node_4, 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_2);
        reset(div_1);
        reset(div);
        template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
        event("click", button_2, () => {
          dispatch("delete");
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_1 = from_html(`<div><!></div>`);
var root_2 = from_html(`<div class="flex items-center gap-2"><div class=" flex self-center"><!></div></div>`);
var root_3 = from_html(`<div class=" flex items-center gap-2"><div class=" text-sm font-medium line-clamp-1 capitalize"> </div></div>`);
var root_4 = from_html(`<div class=" text-xs text-gray-500 line-clamp-1 hidden sm:block"> </div>`);
var root_5 = from_html(`<button class=" flex space-x-4 cursor-pointer text-left w-full px-3 py-2.5 dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl"><div class=" w-full"><div class=" self-center flex-1 justify-between"><div class="flex items-center justify-between -my-1 h-8"><div class=" flex gap-2 items-center justify-between w-full"><div><!></div> <!></div> <!></div> <div class=" flex items-center gap-1 justify-between px-1.5"><!> <div class="flex items-center gap-2 shrink-0"><!> <div class="text-xs text-gray-500 shrink-0"><!></div></div></div></div></div></button>`);
var root_6 = from_html(`<div class="w-full flex justify-center py-4 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_7 = from_html(`<div class=" my-2 px-3 grid grid-cols-1 lg:grid-cols-2 gap-2"></div> <!>`, 1);
var root_8 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-gray-300 dark:text-gray-600 mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_9 = from_html(`<div class="w-full h-full flex justify-center items-center py-10"><!></div>`);
var root_10 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/knowledge/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div></div> <!></div> <div class=" text-gray-500 text-xs m-2"> </div>`, 1);
var root_11 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Knowledge($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let showDeleteConfirm = mutable_source(false);
  let tagsContainerElement = mutable_source();
  let selectedItem = mutable_source(null);
  let page = 1;
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let viewOption = mutable_source("");
  let items = mutable_source(null);
  let total = mutable_source(null);
  let allItemsLoaded = mutable_source(false);
  let itemsLoading = mutable_source(false);
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
  });
  const reset$1 = () => {
    page = 1;
    set(items, null);
    set(total, null);
    set(allItemsLoaded, false);
    set(itemsLoading, false);
  };
  const loadMoreItems = async () => {
    if (get(allItemsLoaded)) return;
    page += 1;
    await getItemsPage();
  };
  const init$1 = async () => {
    if (!get(loaded)) return;
    reset$1();
    await getItemsPage();
  };
  const getItemsPage = async () => {
    set(itemsLoading, true);
    const res = await searchKnowledgeBases(localStorage.token, get(query), get(viewOption), page).catch(() => {
      return [];
    });
    if (res) {
      /* @__PURE__ */ console.log(res);
      set(total, res.total);
      const pageItems = res.items;
      if ((pageItems ?? []).length === 0) {
        set(allItemsLoaded, true);
      } else {
        set(allItemsLoaded, false);
      }
      if (get(items)) {
        const existingIds = new Set(get(items).map((item) => item.id));
        const newItems = pageItems.filter((item) => !existingIds.has(item.id));
        set(items, [...get(items), ...newItems]);
      } else {
        set(items, pageItems);
      }
    }
    set(itemsLoading, false);
    return res;
  };
  const deleteHandler = async (item) => {
    const res = await deleteKnowledgeById(localStorage.token, item.id).catch((e) => {
      toast.error(`${e}`);
    });
    if (res) {
      toast.success($i18n().t("Knowledge deleted successfully."));
      init$1();
    }
  };
  const exportHandler = async (item) => {
    try {
      const blob = await exportKnowledgeById(localStorage.token, item.id);
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${item.name}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success($i18n().t("Knowledge exported successfully"));
      }
    } catch (e) {
      toast.error(`${e}`);
    }
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    set(loaded, true);
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer)), () => {
    if (get(query) !== void 0) {
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          init$1();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => get(viewOption), () => {
    if (get(viewOption) !== void 0) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("ovc1wm", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Knowledge")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_6 = ($$anchor2) => {
      var fragment_1 = root_10();
      var node_1 = first_child(fragment_1);
      ConfirmDialog(node_1, {
        get show() {
          return get(showDeleteConfirm);
        },
        set show($$value) {
          set(showDeleteConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            deleteHandler(get(selectedItem));
          }
        },
        $$legacy: true
      });
      var div = sibling(node_1, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(div_2);
      var div_5 = sibling(div_2, 2);
      var a_1 = child(div_5);
      var node_2 = child(a_1);
      Plus(node_2, { className: "size-3", strokeWidth: "2.5" });
      var div_6 = sibling(node_2, 2);
      var text_2 = child(div_6, true);
      reset(div_6);
      reset(a_1);
      reset(div_5);
      reset(div_1);
      reset(div);
      var div_7 = sibling(div, 2);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var div_10 = child(div_9);
      var node_3 = child(div_10);
      Search(node_3, { className: "size-3.5" });
      reset(div_10);
      var input = sibling(div_10, 2);
      remove_input_defaults(input);
      var node_4 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var div_11 = root();
          var button = child(div_11);
          var node_5 = child(button);
          XMark(node_5, { className: "size-3", strokeWidth: "2" });
          reset(button);
          reset(div_11);
          template_effect(($0) => set_attribute(button, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button, () => {
            set(query, "");
          });
          append($$anchor3, div_11);
        };
        if_block(node_4, ($$render) => {
          if (get(query)) $$render(consequent);
        });
      }
      reset(div_9);
      reset(div_8);
      var div_12 = sibling(div_8, 2);
      var div_13 = child(div_12);
      var node_6 = child(div_13);
      ViewSelector(node_6, {
        onChange: async (value) => {
          localStorage.workspaceViewOption = value;
          await tick();
        },
        get value() {
          return get(viewOption);
        },
        set value($$value) {
          set(viewOption, $$value);
        },
        $$legacy: true
      });
      reset(div_13);
      bind_this(div_13, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_12);
      var node_7 = sibling(div_12, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_8 = first_child(fragment_2);
          {
            var consequent_4 = ($$anchor4) => {
              var fragment_3 = root_7();
              var div_14 = first_child(fragment_3);
              each(div_14, 5, () => get(items), index, ($$anchor5, item) => {
                var button_1 = root_5();
                var div_15 = child(button_1);
                var div_16 = child(div_15);
                var div_17 = child(div_16);
                var div_18 = child(div_17);
                var div_19 = child(div_18);
                var node_9 = child(div_19);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Collection"))));
                  Badge(node_9, {
                    type: "success",
                    get content() {
                      return get($0);
                    }
                  });
                }
                reset(div_19);
                var node_10 = sibling(div_19, 2);
                {
                  var consequent_1 = ($$anchor6) => {
                    var div_20 = root_1();
                    var node_11 = child(div_20);
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Only"))));
                      Badge(node_11, {
                        type: "muted",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                    reset(div_20);
                    append($$anchor6, div_20);
                  };
                  if_block(node_10, ($$render) => {
                    if (get(item), untrack(() => {
                      var _a;
                      return !((_a = get(item)) == null ? void 0 : _a.write_access);
                    })) $$render(consequent_1);
                  });
                }
                reset(div_18);
                var node_12 = sibling(div_18, 2);
                {
                  var consequent_2 = ($$anchor6) => {
                    var div_21 = root_2();
                    var div_22 = child(div_21);
                    var node_13 = child(div_22);
                    {
                      let $0 = derived_safe_equal(() => ($user(), get(item), untrack(() => $user().role === "admin" ? () => {
                        exportHandler(get(item));
                      } : null)));
                      ItemMenu(node_13, {
                        get onExport() {
                          return get($0);
                        },
                        $$events: {
                          delete: () => {
                            set(selectedItem, get(item));
                            set(showDeleteConfirm, true);
                          }
                        }
                      });
                    }
                    reset(div_22);
                    reset(div_21);
                    append($$anchor6, div_21);
                  };
                  if_block(node_12, ($$render) => {
                    if (get(item), $user(), untrack(() => {
                      var _a, _b;
                      return ((_a = get(item)) == null ? void 0 : _a.write_access) || ((_b = $user()) == null ? void 0 : _b.role) === "admin";
                    })) $$render(consequent_2);
                  });
                }
                reset(div_17);
                var div_23 = sibling(div_17, 2);
                var node_14 = child(div_23);
                {
                  let $0 = derived_safe_equal(() => (get(item), untrack(() => {
                    var _a;
                    return ((_a = get(item)) == null ? void 0 : _a.description) ?? get(item).name;
                  })));
                  Tooltip(node_14, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_24 = root_3();
                      var div_25 = child(div_24);
                      var text_3 = child(div_25, true);
                      reset(div_25);
                      reset(div_24);
                      template_effect(() => set_text(text_3, (get(item), untrack(() => get(item).name))));
                      append($$anchor6, div_24);
                    },
                    $$slots: { default: true }
                  });
                }
                var div_26 = sibling(node_14, 2);
                var node_15 = child(div_26);
                {
                  let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(item), untrack(() => dayjs2(get(item).updated_at * 1e3).format("LLLL"))));
                  Tooltip(node_15, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_27 = root_4();
                      var text_4 = child(div_27);
                      reset(div_27);
                      template_effect(
                        ($02, $1) => set_text(text_4, `${$02 ?? ""}
													${$1 ?? ""}`),
                        [
                          () => ($i18n(), untrack(() => $i18n().t("Updated"))),
                          () => (deep_read_state(dayjs2), get(item), untrack(() => dayjs2(get(item).updated_at * 1e3).fromNow()))
                        ]
                      );
                      append($$anchor6, div_27);
                    },
                    $$slots: { default: true }
                  });
                }
                var div_28 = sibling(node_15, 2);
                var node_16 = child(div_28);
                {
                  let $0 = derived_safe_equal(() => (get(item), $i18n(), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(item)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                  })));
                  Tooltip(node_16, {
                    get content() {
                      return get($0);
                    },
                    className: "flex shrink-0",
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      next();
                      var text_5 = text();
                      template_effect(($02) => set_text(text_5, $02), [
                        () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(item), untrack(() => {
                          var _a, _b, _c, _d;
                          return $i18n().t("By {{name}}", {
                            name: capitalizeFirstLetter(((_b = (_a = get(item)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(item)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                          });
                        }))
                      ]);
                      append($$anchor6, text_5);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_28);
                reset(div_26);
                reset(div_23);
                reset(div_16);
                reset(div_15);
                reset(button_1);
                event("click", button_1, () => {
                  var _a, _b;
                  if ((_b = (_a = get(item)) == null ? void 0 : _a.meta) == null ? void 0 : _b.document) {
                    toast.error($i18n().t("Only collections can be edited, create a new knowledge base to edit/add documents."));
                  } else {
                    goto(`/workspace/knowledge/${get(item).id}`);
                  }
                });
                append($$anchor5, button_1);
              });
              reset(div_14);
              var node_17 = sibling(div_14, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  Loader($$anchor5, {
                    $$events: {
                      visible: (e) => {
                        if (!get(itemsLoading)) {
                          loadMoreItems();
                        }
                      }
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_29 = root_6();
                      var node_18 = child(div_29);
                      Spinner(node_18, { className: " size-4" });
                      var div_30 = sibling(node_18, 2);
                      var text_6 = child(div_30, true);
                      reset(div_30);
                      reset(div_29);
                      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                      append($$anchor6, div_29);
                    },
                    $$slots: { default: true }
                  });
                };
                if_block(node_17, ($$render) => {
                  if (!get(allItemsLoaded)) $$render(consequent_3);
                });
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div_31 = root_8();
              var div_32 = child(div_31);
              var div_33 = sibling(child(div_32), 2);
              var text_7 = child(div_33, true);
              reset(div_33);
              var div_34 = sibling(div_33, 2);
              var text_8 = child(div_34, true);
              reset(div_34);
              reset(div_32);
              reset(div_31);
              template_effect(
                ($0, $1) => {
                  set_text(text_7, $0);
                  set_text(text_8, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("No knowledge found"))),
                  () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
                ]
              );
              append($$anchor4, div_31);
            };
            if_block(node_8, ($$render) => {
              if (get(items), untrack(() => (get(items) ?? []).length !== 0)) $$render(consequent_4);
              else $$render(alternate, -1);
            });
          }
          append($$anchor3, fragment_2);
        };
        var alternate_1 = ($$anchor3) => {
          var div_35 = root_9();
          var node_19 = child(div_35);
          Spinner(node_19, { className: "size-4" });
          reset(div_35);
          append($$anchor3, div_35);
        };
        if_block(node_7, ($$render) => {
          if (get(items) !== null && get(total) !== null) $$render(consequent_5);
          else $$render(alternate_1, -1);
        });
      }
      reset(div_7);
      var div_36 = sibling(div_7, 2);
      var text_9 = child(div_36);
      reset(div_36);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text$1, $0);
          set_text(text_1, get(total));
          set_text(text_2, $1);
          set_attribute(input, "aria-label", $2);
          set_attribute(input, "placeholder", $3);
          set_text(text_9, `ⓘ ${$4 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("New Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("Use '#' in the prompt input to load and include your knowledge.")))
        ]
      );
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_12, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_2 = ($$anchor2) => {
      var div_37 = root_11();
      var node_20 = child(div_37);
      Spinner(node_20, { className: "size-5" });
      reset(div_37);
      append($$anchor2, div_37);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_6);
      else $$render(alternate_2, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Knowledge($$anchor, {});
}
export {
  _page as component
};
