import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, l as legacy_pre_effect, k as get, m as deep_read_state, w as set, n as legacy_pre_effect_reset, g as comment, h as first_child, a as append, c as child, r as reset, t as template_effect, d as set_text, u as untrack, z as sibling, y as event, b as pop, e as store_get, s as setup_stores, q as mutable_source, x as derived_safe_equal, f as from_html, aW as text, aS as createEventDispatcher, o as onMount, aR as next, v as user_derived } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { a as set_class, r as remove_input_defaults, s as set_attribute } from "./B9yCN616.js";
import { i as init } from "./CUpGYt-B.js";
import "./vYrFh_lq.js";
import { p as page } from "./B35obKje.js";
import { e as each, i as index } from "./qTQza25_.js";
import { b as bind_value } from "./CgeA63xA.js";
import { m as models } from "./BJ3rUC-5.js";
import { g as getModelHistory, a as getLeaderboard, b as getFeedbackById, c as getFeedbackItems, d as getFeedbackModelIds, e as exportAllFeedbacks, f as deleteFeedbackById } from "./DFCIMrex.js";
import { p as prop } from "./COqmMDwI.js";
import { M as Modal } from "./tmhUPuyr.js";
import { M as ModelActivityChart } from "./CDLmY1-T.js";
import { X as XMark } from "./DAqPThR3.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { S as Spinner } from "./gJqE84vs.js";
import { S as Search } from "./C6CynPzh.js";
import { C as ChevronUp } from "./BYBmqvkv.js";
import { C as ChevronDown } from "./BAfBE24n.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { t as toast } from "./B4Bn1xMI.js";
import { f as fileSaver } from "./CVH2w_UO.js";
import { d as dayjs2, r as relativeTime } from "./BeGenu0j.js";
import { B as Badge } from "./3f_PWqJi.js";
import { P as Pagination_1 } from "./3QixqFIZ.js";
import { s as slot } from "./zXynQJya.js";
import { D as Dropdown } from "./8Pg1zo_Z.js";
import { G as GarbageBin } from "./eobci2cJ.js";
import { E as EllipsisHorizontal } from "./viyHXpU2.js";
import { S as Select } from "./B-wfBoQj.js";
import { C as Check } from "./CmzI29Zf.js";
var root$5 = from_html(`<div class="text-lg font-medium self-center line-clamp-1"> </div>`);
var root_1$3 = from_html(`<button type="button"> </button>`);
var root_2$3 = from_html(`<span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-xs"> <span class="text-gray-500 font-medium"> </span></span>`);
var root_3$3 = from_html(`<div class="flex flex-wrap gap-1 -mx-1"></div>`);
var root_4$3 = from_html(`<span class="text-gray-500 text-sm">-</span>`);
var root_5$3 = from_html(`<div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><!> <button class="self-center" aria-label="Close"><!></button></div> <div class="px-5 pb-4 dark:text-gray-200"><div class="mb-4"><div class="flex items-center justify-between mb-2"><div class="text-xs text-gray-500 font-medium uppercase tracking-wide"> </div> <div class="inline-flex rounded-full bg-gray-100/80 p-0.5 dark:bg-gray-800/80 backdrop-blur-sm"></div></div> <!></div> <div class="mb-4"><div class="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide"> </div> <!></div> <div class="flex justify-end pt-2"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`, 1);
function LeaderboardModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const topTags = mutable_source();
  let show = prop($$props, "show", 12, false);
  let model = prop($$props, "model", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  const i18n = getContext("i18n");
  const TIME_RANGES = [
    { key: "30d", label: "30D", days: 30 },
    { key: "1y", label: "1Y", days: 365 },
    { key: "all", label: "All", days: 0 }
    // 0 = all time, starts from first feedback
  ];
  let selectedRange = mutable_source("30d");
  let history = mutable_source([]);
  let loadingHistory = mutable_source(false);
  const close = () => {
    show(false);
    onClose()();
  };
  const loadHistory = async (days) => {
    var _a;
    if (!((_a = model()) == null ? void 0 : _a.id)) return;
    set(loadingHistory, true);
    try {
      const result = await getModelHistory(localStorage.token, model().id, days);
      set(history, (result == null ? void 0 : result.history) ?? []);
    } catch (err) {
      /* @__PURE__ */ console.error("Failed to load model history:", err);
      set(history, []);
    }
    set(loadingHistory, false);
  };
  const selectRange = (range) => {
    set(selectedRange, range);
    const config = TIME_RANGES.find((r) => r.key === range);
    if (config) {
      loadHistory(config.days);
    }
  };
  legacy_pre_effect(
    () => (deep_read_state(show()), deep_read_state(model()), get(selectedRange)),
    () => {
      var _a;
      if (show() && ((_a = model()) == null ? void 0 : _a.id)) {
        selectRange(get(selectedRange));
      }
    }
  );
  legacy_pre_effect(() => deep_read_state(model()), () => {
    var _a;
    set(topTags, ((_a = model()) == null ? void 0 : _a.top_tags) ?? []);
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "md",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_2 = root_5$3();
          var div = first_child(fragment_2);
          var node_1 = child(div);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(model()), untrack(() => `${model().name} (${model().id})`)));
            Tooltip(node_1, {
              get content() {
                return get($0);
              },
              placement: "top-start",
              children: ($$anchor4, $$slotProps2) => {
                var div_1 = root$5();
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(() => set_text(text2, (deep_read_state(model()), untrack(() => model().name))));
                append($$anchor4, div_1);
              },
              $$slots: { default: true }
            });
          }
          var button = sibling(node_1, 2);
          var node_2 = child(button);
          XMark(node_2, { className: "size-5" });
          reset(button);
          reset(div);
          var div_2 = sibling(div, 2);
          var div_3 = child(div_2);
          var div_4 = child(div_3);
          var div_5 = child(div_4);
          var text_1 = child(div_5, true);
          reset(div_5);
          var div_6 = sibling(div_5, 2);
          each(div_6, 5, () => TIME_RANGES, index, ($$anchor4, range) => {
            var button_1 = root_1$3();
            var text_2 = child(button_1, true);
            reset(button_1);
            template_effect(() => {
              set_class(button_1, 1, `rounded-full transition-all duration-200 px-2.5 py-0.5 text-xs font-medium ${(get(selectedRange), get(range), untrack(() => get(selectedRange) === get(range).key ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200")) ?? ""}`);
              set_text(text_2, (get(range), untrack(() => get(range).label)));
            });
            event("click", button_1, () => selectRange(get(range).key));
            append($$anchor4, button_1);
          });
          reset(div_6);
          reset(div_4);
          var node_3 = sibling(div_4, 2);
          {
            let $0 = derived_safe_equal(() => get(selectedRange) === "1y" || get(selectedRange) === "all");
            ModelActivityChart(node_3, {
              get history() {
                return get(history);
              },
              get loading() {
                return get(loadingHistory);
              },
              get aggregateWeekly() {
                return get($0);
              }
            });
          }
          reset(div_3);
          var div_7 = sibling(div_3, 2);
          var div_8 = child(div_7);
          var text_3 = child(div_8, true);
          reset(div_8);
          var node_4 = sibling(div_8, 2);
          {
            var consequent = ($$anchor4) => {
              var div_9 = root_3$3();
              each(div_9, 5, () => get(topTags), index, ($$anchor5, tagInfo) => {
                var span = root_2$3();
                var text_4 = child(span);
                var span_1 = sibling(text_4);
                var text_5 = child(span_1, true);
                reset(span_1);
                reset(span);
                template_effect(() => {
                  set_text(text_4, `${(get(tagInfo), untrack(() => get(tagInfo).tag)) ?? ""} `);
                  set_text(text_5, (get(tagInfo), untrack(() => get(tagInfo).count)));
                });
                append($$anchor5, span);
              });
              reset(div_9);
              append($$anchor4, div_9);
            };
            var alternate = ($$anchor4) => {
              var span_2 = root_4$3();
              append($$anchor4, span_2);
            };
            if_block(node_4, ($$render) => {
              if (get(topTags), untrack(() => get(topTags).length)) $$render(consequent);
              else $$render(alternate, -1);
            });
          }
          reset(div_7);
          var div_10 = sibling(div_7, 2);
          var button_2 = child(div_10);
          var text_6 = child(button_2, true);
          reset(button_2);
          reset(div_10);
          reset(div_2);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_1, $0);
              set_text(text_3, $1);
              set_text(text_6, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Activity"))),
              () => ($i18n(), untrack(() => $i18n().t("Tags"))),
              () => ($i18n(), untrack(() => $i18n().t("Close")))
            ]
          );
          event("click", button, close);
          event("click", button_2, close);
          append($$anchor3, fragment_2);
        };
        if_block(node, ($$render) => {
          if (model()) $$render(consequent_1);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$4 = from_html(`<div class="flex flex-1"><!> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div>`);
var root_1$2 = from_html(`<div class="absolute inset-0 flex items-center justify-center z-10 bg-white/50 dark:bg-gray-900/50"><!></div>`);
var root_2$2 = from_html(`<div class="text-center text-xs text-gray-500 py-1"> </div>`);
var root_3$2 = from_html(`<span class="invisible"><!></span>`);
var root_4$2 = from_html(`<th scope="col"><div> <!></div></th>`);
var root_5$2 = from_html(`<span class="font-medium text-gray-800 dark:text-gray-200 line-clamp-1"> </span>`);
var root_6$2 = from_html(`<span class="hidden group-hover:inline"> </span> <span class="group-hover:hidden"> </span>`, 1);
var root_7$2 = from_html(`<tr class="bg-white dark:bg-gray-900 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"><td class="px-3 py-1.5 font-medium text-gray-900 dark:text-white"> </td><td class="px-3 py-1.5"><div class="flex items-center gap-2"><img class="size-5 rounded-full object-cover shrink-0"/> <!></div></td><td class="px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white"> </td><td class="px-3 py-1.5 text-right font-medium text-green-500 w-10"><!></td><td class="px-3 py-1.5 text-right font-medium text-red-500 w-10"><!></td></tr>`);
var root_8$1 = from_html(`<table><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class="border-b-[1.5px] border-gray-50 dark:border-gray-850/30"></tr></thead><tbody></tbody></table>`);
var root_9$1 = from_html(`<!> <div class="pt-0.5 pb-1 gap-1 flex flex-col md:flex-row justify-between sticky top-0 z-10 bg-white dark:bg-gray-900"><div class="flex items-center text-xl font-medium px-0.5 gap-2 shrink-0"> <span class="text-lg text-gray-500"> </span></div> <!></div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm min-h-[100px]"><!> <!></div> <div class="text-gray-500 text-xs mt-1.5 w-full flex justify-end"><div class="text-right"><div class="line-clamp-1"> </div> </div></div>`, 1);
function Leaderboard($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const sortedModels = mutable_source();
  const i18n = getContext("i18n");
  let rankedModels = mutable_source([]);
  let query = mutable_source("");
  let loading = mutable_source(true);
  let debounceTimer;
  let orderBy = mutable_source("rating");
  let direction = mutable_source("desc");
  let showModal = mutable_source(false);
  let selectedModel = mutable_source(null);
  const toggleSort = (key) => {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, key === "name" ? "asc" : "desc");
    }
  };
  const openModal = (model) => {
    set(selectedModel, model);
    set(showModal, true);
  };
  const closeModal = () => {
    set(selectedModel, null);
    set(showModal, false);
  };
  const loadLeaderboard = async (searchQuery = "") => {
    set(loading, true);
    try {
      const result = await getLeaderboard(localStorage.token, searchQuery);
      const statsMap = new Map(((result == null ? void 0 : result.entries) ?? []).map((e) => [e.model_id, e]));
      set(rankedModels, $models().filter((m) => {
        var _a, _b;
        return (m == null ? void 0 : m.owned_by) !== "arena" && !((_b = (_a = m == null ? void 0 : m.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden);
      }).map((model) => {
        var _a, _b;
        const s = statsMap.get(model.id);
        return {
          ...model,
          rating: (s == null ? void 0 : s.rating) ?? "-",
          stats: {
            count: s ? s.won + s.lost : 0,
            won: ((_a = s == null ? void 0 : s.won) == null ? void 0 : _a.toString()) ?? "-",
            lost: ((_b = s == null ? void 0 : s.lost) == null ? void 0 : _b.toString()) ?? "-"
          },
          top_tags: (s == null ? void 0 : s.top_tags) ?? []
        };
      }).sort((a, b) => {
        if (a.rating === "-") return 1;
        if (b.rating === "-") return -1;
        return b.rating - a.rating;
      }));
    } catch (err) {
      /* @__PURE__ */ console.error("Leaderboard load failed:", err);
    }
    set(loading, false);
  };
  const debouncedLoad = () => {
    set(loading, true);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => loadLeaderboard(get(query)), 500);
  };
  legacy_pre_effect(() => get(query), () => {
    if (get(query) !== null) {
      debouncedLoad();
    }
  });
  legacy_pre_effect(() => (get(rankedModels), get(orderBy), get(direction)), () => {
    set(sortedModels, [...get(rankedModels)].sort((a, b) => {
      const getValue = (m, key) => {
        if (key === "name") return m.name ?? m.id ?? "";
        if (key === "rating") return m.rating === "-" ? -Infinity : m.rating;
        if (key === "won" || key === "lost") {
          const v = m.stats[key];
          return v === "-" ? -Infinity : Number(v);
        }
        return 0;
      };
      const aVal = getValue(a, get(orderBy));
      const bVal = getValue(b, get(orderBy));
      if (get(orderBy) === "name") {
        return get(direction) === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return get(direction) === "asc" ? aVal - bVal : bVal - aVal;
    }));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_9$1();
  var node = first_child(fragment);
  LeaderboardModal(node, {
    get model() {
      return get(selectedModel);
    },
    onClose: closeModal,
    get show() {
      return get(showModal);
    },
    set show($$value) {
      set(showModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var div_1 = child(div);
  var text$1 = child(div_1);
  var span = sibling(text$1);
  var text_1 = child(span, true);
  reset(span);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Re-rank models by topic similarity"))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var div_2 = root$4();
        var node_2 = child(div_2);
        Search(node_2, { className: "size-3 ml-1 mr-3 self-center" });
        var input = sibling(node_2, 2);
        remove_input_defaults(input);
        reset(div_2);
        template_effect(($02) => set_attribute(input, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
        bind_value(input, () => get(query), ($$value) => set(query, $$value));
        append($$anchor2, div_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div);
  var div_3 = sibling(div, 2);
  var node_3 = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_1$2();
      var node_4 = child(div_4);
      Spinner(node_4, { className: "size-5" });
      reset(div_4);
      append($$anchor2, div_4);
    };
    if_block(node_3, ($$render) => {
      if (get(loading)) $$render(consequent);
    });
  }
  var node_5 = sibling(node_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_2$2();
      var text_2 = child(div_5, true);
      reset(div_5);
      template_effect(($0) => set_text(text_2, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No models found")))
      ]);
      append($$anchor2, div_5);
    };
    var consequent_6 = ($$anchor2) => {
      var table = root_8$1();
      var thead = child(table);
      var tr = child(thead);
      each(
        tr,
        4,
        () => [
          { key: "rating", label: "RK", class: "w-3" },
          { key: "name", label: "Model", class: "" },
          { key: "rating", label: "Rating", class: "text-right w-fit" },
          { key: "won", label: "Won", class: "text-right w-5" },
          { key: "lost", label: "Lost", class: "text-right w-5" }
        ],
        index,
        ($$anchor3, col) => {
          var th = root_4$2();
          var div_6 = child(th);
          var text_3 = child(div_6);
          var node_6 = sibling(text_3);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_1 = comment();
              var node_7 = first_child(fragment_1);
              {
                var consequent_2 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_7, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_2);
                  else $$render(alternate, -1);
                });
              }
              append($$anchor4, fragment_1);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_3$2();
              var node_8 = child(span_1);
              ChevronUp(node_8, { className: "size-2" });
              reset(span_1);
              append($$anchor4, span_1);
            };
            if_block(node_6, ($$render) => {
              if (get(orderBy), untrack(() => get(orderBy) === col.key)) $$render(consequent_3);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_6);
          reset(th);
          template_effect(
            ($0, $1) => {
              set_class(th, 1, `px-2.5 py-2 cursor-pointer select-none ${untrack(() => col.class) ?? ""}`);
              set_class(div_6, 1, `flex gap-1.5 items-center ${$0 ?? ""}`);
              set_text(text_3, `${$1 ?? ""} `);
            },
            [
              () => untrack(() => col.class.includes("right") ? "justify-end" : ""),
              () => ($i18n(), untrack(() => $i18n().t(col.label)))
            ]
          );
          event("click", th, () => toggleSort(col.key));
          append($$anchor3, th);
        }
      );
      reset(tr);
      reset(thead);
      var tbody = sibling(thead);
      each(tbody, 7, () => get(sortedModels), (model) => model.id, ($$anchor3, model, idx) => {
        var tr_1 = root_7$2();
        var td = child(tr_1);
        var text_4 = child(td, true);
        reset(td);
        var td_1 = sibling(td);
        var div_7 = child(td_1);
        var img = child(div_7);
        var node_9 = sibling(img, 2);
        {
          let $0 = derived_safe_equal(() => (get(model), untrack(() => `${get(model).name} (${get(model).id})`)));
          Tooltip(node_9, {
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var span_2 = root_5$2();
              var text_5 = child(span_2, true);
              reset(span_2);
              template_effect(() => set_text(text_5, (get(model), untrack(() => get(model).name))));
              append($$anchor4, span_2);
            },
            $$slots: { default: true }
          });
        }
        reset(div_7);
        reset(td_1);
        var td_2 = sibling(td_1);
        var text_6 = child(td_2, true);
        reset(td_2);
        var td_3 = sibling(td_2);
        var node_10 = child(td_3);
        {
          var consequent_4 = ($$anchor4) => {
            var text_7 = text("-");
            append($$anchor4, text_7);
          };
          var alternate_2 = ($$anchor4) => {
            var fragment_4 = root_6$2();
            var span_3 = first_child(fragment_4);
            var text_8 = child(span_3);
            reset(span_3);
            var span_4 = sibling(span_3, 2);
            var text_9 = child(span_4, true);
            reset(span_4);
            template_effect(
              ($0) => {
                set_text(text_8, `${$0 ?? ""}%`);
                set_text(text_9, (get(model), untrack(() => get(model).stats.won)));
              },
              [
                () => (get(model), untrack(() => (Number(get(model).stats.won) / get(model).stats.count * 100).toFixed(1)))
              ]
            );
            append($$anchor4, fragment_4);
          };
          if_block(node_10, ($$render) => {
            if (get(model), untrack(() => get(model).stats.won === "-")) $$render(consequent_4);
            else $$render(alternate_2, -1);
          });
        }
        reset(td_3);
        var td_4 = sibling(td_3);
        var node_11 = child(td_4);
        {
          var consequent_5 = ($$anchor4) => {
            var text_10 = text("-");
            append($$anchor4, text_10);
          };
          var alternate_3 = ($$anchor4) => {
            var fragment_5 = root_6$2();
            var span_5 = first_child(fragment_5);
            var text_11 = child(span_5);
            reset(span_5);
            var span_6 = sibling(span_5, 2);
            var text_12 = child(span_6, true);
            reset(span_6);
            template_effect(
              ($0) => {
                set_text(text_11, `${$0 ?? ""}%`);
                set_text(text_12, (get(model), untrack(() => get(model).stats.lost)));
              },
              [
                () => (get(model), untrack(() => (Number(get(model).stats.lost) / get(model).stats.count * 100).toFixed(1)))
              ]
            );
            append($$anchor4, fragment_5);
          };
          if_block(node_11, ($$render) => {
            if (get(model), untrack(() => get(model).stats.lost === "-")) $$render(consequent_5);
            else $$render(alternate_3, -1);
          });
        }
        reset(td_4);
        reset(tr_1);
        template_effect(() => {
          set_text(text_4, (get(model), deep_read_state(get(idx)), untrack(() => get(model).rating !== "-" ? get(idx) + 1 : "-")));
          set_attribute(img, "src", `${REXPRO_API_BASE_URL ?? ""}/models/model/profile/image?id=${(get(model), untrack(() => get(model).id)) ?? ""}`);
          set_attribute(img, "alt", (get(model), untrack(() => get(model).name)));
          set_text(text_6, (get(model), untrack(() => get(model).rating)));
        });
        event("error", img, (e) => {
          e.target.src = "/favicon.png";
        });
        event("click", tr_1, () => openModal(get(model)));
        append($$anchor3, tr_1);
      });
      reset(tbody);
      reset(table);
      template_effect(() => set_class(table, 1, `w-full text-sm text-left text-gray-500 dark:text-gray-400 ${get(loading) ? "opacity-20" : ""}`));
      append($$anchor2, table);
    };
    if_block(node_5, ($$render) => {
      if (get(rankedModels), get(loading), untrack(() => !get(rankedModels).length && !get(loading))) $$render(consequent_1);
      else if (get(rankedModels), untrack(() => get(rankedModels).length)) $$render(consequent_6, 1);
    });
  }
  reset(div_3);
  var div_8 = sibling(div_3, 2);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var text_13 = child(div_10);
  reset(div_10);
  var text_14 = sibling(div_10);
  reset(div_9);
  reset(div_8);
  template_effect(
    ($0, $1, $2) => {
      set_text(text$1, `${$0 ?? ""} `);
      set_text(text_1, (get(rankedModels), untrack(() => get(rankedModels).length)));
      set_text(text_13, `ⓘ ${$1 ?? ""}`);
      set_text(text_14, ` ${$2 ?? ""}`);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Leaderboard"))),
      () => ($i18n(), untrack(() => $i18n().t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time."))),
      () => ($i18n(), untrack(() => $i18n().t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")))
    ]
  );
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div slot="content"><div class="min-w-[150px] rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function FeedbackMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => $i18n().t("More"));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root$3();
        var div_1 = child(div);
        var button = child(div_1);
        var node_1 = child(button);
        GarbageBin(node_1, { strokeWidth: "2" });
        var div_2 = sibling(node_1, 2);
        var text2 = child(div_2, true);
        reset(div_2);
        reset(button);
        reset(div_1);
        reset(div);
        template_effect(($0) => set_text(text2, $0), [() => $i18n().t("Delete")]);
        event("click", button, () => {
          dispatch("delete");
          set(show, false);
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$2 = from_html(`<div class="flex flex-col w-full mb-2"><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs whitespace-pre-line break-words"><span> </span></div></div>`);
var root_1$1 = from_html(`<div class="flex flex-col w-full mb-2"><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs whitespace-pre-line break-words max-h-32 overflow-y-auto"><span> </span></div></div>`);
var root_2$1 = from_html(`<!> <!>`, 1);
var root_3$1 = from_html(`<span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-[9px]"> </span>`);
var root_4$1 = from_html(`<div class="mb-2 -mx-1"><div class="flex flex-wrap gap-1 mt-1"></div></div>`);
var root_5$1 = from_html(`<div class="flex flex-col w-full"><div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><a class=" hover:underline" target="_blank"><span> </span></a></div></div> <!> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <!> <div class="flex justify-end pt-2"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`);
var root_6$1 = from_html(`<div class="flex items-center justify-center w-full h-32"><!></div>`);
var root_7$1 = from_html(`<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center" aria-label="Close"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><!></div></div>`);
function FeedbackModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let selectedFeedback = prop($$props, "selectedFeedback", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let loaded = mutable_source(false);
  let feedbackData = mutable_source(null);
  const close = () => {
    show(false);
    onClose()();
  };
  const init$1 = async () => {
    set(loaded, false);
    set(feedbackData, null);
    if (selectedFeedback()) {
      set(feedbackData, await getFeedbackById(localStorage.token, selectedFeedback().id).catch((err) => {
        return null;
      }));
      /* @__PURE__ */ console.log("Feedback Data:", selectedFeedback(), get(feedbackData));
    }
    set(loaded, true);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent_5 = ($$anchor3) => {
          var div = root_7$1();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var text2 = child(div_2, true);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_1 = child(button);
          XMark(node_1, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_3 = sibling(div_1, 2);
          var node_2 = child(div_3);
          {
            var consequent_4 = ($$anchor4) => {
              var div_4 = root_5$1();
              var div_5 = child(div_4);
              var div_6 = child(div_5);
              var text_1 = child(div_6, true);
              reset(div_6);
              var div_7 = sibling(div_6, 2);
              var a = child(div_7);
              var span = child(a);
              var text_2 = child(span, true);
              reset(span);
              reset(a);
              reset(div_7);
              reset(div_5);
              var node_3 = sibling(div_5, 2);
              {
                var consequent_2 = ($$anchor5) => {
                  const messageId = derived_safe_equal(() => (get(feedbackData), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = get(feedbackData)) == null ? void 0 : _a.meta) == null ? void 0 : _b.message_id;
                  })));
                  const messages = derived_safe_equal(() => (get(feedbackData), untrack(() => {
                    var _a, _b, _c, _d;
                    return (_d = (_c = (_b = (_a = get(feedbackData)) == null ? void 0 : _a.snapshot) == null ? void 0 : _b.chat) == null ? void 0 : _c.chat) == null ? void 0 : _d.history.messages;
                  })));
                  var fragment_2 = root_2$1();
                  var node_4 = first_child(fragment_2);
                  {
                    var consequent = ($$anchor6) => {
                      var div_8 = root$2();
                      var div_9 = child(div_8);
                      var text_3 = child(div_9, true);
                      reset(div_9);
                      var div_10 = sibling(div_9, 2);
                      var span_1 = child(div_10);
                      var text_4 = child(span_1, true);
                      reset(span_1);
                      reset(div_10);
                      reset(div_8);
                      template_effect(
                        ($0) => {
                          set_text(text_3, $0);
                          set_text(text_4, (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                            var _a, _b;
                            return ((_b = get(messages)[(_a = get(messages)[get(messageId)]) == null ? void 0 : _a.parentId]) == null ? void 0 : _b.content) || "-";
                          })));
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Prompt")))]
                      );
                      append($$anchor6, div_8);
                    };
                    if_block(node_4, ($$render) => {
                      if (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                        var _a;
                        return get(messages)[(_a = get(messages)[get(messageId)]) == null ? void 0 : _a.parentId];
                      })) $$render(consequent);
                    });
                  }
                  var node_5 = sibling(node_4, 2);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var div_11 = root_1$1();
                      var div_12 = child(div_11);
                      var text_5 = child(div_12, true);
                      reset(div_12);
                      var div_13 = sibling(div_12, 2);
                      var span_2 = child(div_13);
                      var text_6 = child(span_2, true);
                      reset(span_2);
                      reset(div_13);
                      reset(div_11);
                      template_effect(
                        ($0) => {
                          set_text(text_5, $0);
                          set_text(text_6, (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                            var _a;
                            return ((_a = get(messages)[get(messageId)]) == null ? void 0 : _a.content) || "-";
                          })));
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Response")))]
                      );
                      append($$anchor6, div_11);
                    };
                    if_block(node_5, ($$render) => {
                      if (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => get(messages)[get(messageId)])) $$render(consequent_1);
                    });
                  }
                  append($$anchor5, fragment_2);
                };
                if_block(node_3, ($$render) => {
                  if (get(feedbackData)) $$render(consequent_2);
                });
              }
              var div_14 = sibling(node_3, 2);
              var div_15 = child(div_14);
              var text_7 = child(div_15, true);
              reset(div_15);
              var div_16 = sibling(div_15, 2);
              var span_3 = child(div_16);
              var text_8 = child(span_3, true);
              reset(span_3);
              reset(div_16);
              reset(div_14);
              var div_17 = sibling(div_14, 2);
              var div_18 = child(div_17);
              var text_9 = child(div_18, true);
              reset(div_18);
              var div_19 = sibling(div_18, 2);
              var span_4 = child(div_19);
              var text_10 = child(span_4, true);
              reset(span_4);
              reset(div_19);
              reset(div_17);
              var div_20 = sibling(div_17, 2);
              var div_21 = child(div_20);
              var text_11 = child(div_21, true);
              reset(div_21);
              var div_22 = sibling(div_21, 2);
              var span_5 = child(div_22);
              var text_12 = child(span_5, true);
              reset(span_5);
              reset(div_22);
              reset(div_20);
              var node_6 = sibling(div_20, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_23 = root_4$1();
                  var div_24 = child(div_23);
                  each(
                    div_24,
                    5,
                    () => (deep_read_state(selectedFeedback()), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.tags;
                    })),
                    index,
                    ($$anchor6, tag) => {
                      var span_6 = root_3$1();
                      var text_13 = child(span_6, true);
                      reset(span_6);
                      template_effect(() => set_text(text_13, get(tag)));
                      append($$anchor6, span_6);
                    }
                  );
                  reset(div_24);
                  reset(div_23);
                  append($$anchor5, div_23);
                };
                if_block(node_6, ($$render) => {
                  if (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b, _c, _d;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.tags) && ((_d = (_c = selectedFeedback()) == null ? void 0 : _c.data) == null ? void 0 : _d.tags.length);
                  })) $$render(consequent_3);
                });
              }
              var div_25 = sibling(node_6, 2);
              var button_1 = child(div_25);
              var text_14 = child(button_1, true);
              reset(button_1);
              reset(div_25);
              reset(div_4);
              template_effect(
                ($0, $1, $2, $3, $4) => {
                  set_text(text_1, $0);
                  set_attribute(a, "href", (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return `/s/${(_b = (_a = selectedFeedback()) == null ? void 0 : _a.meta) == null ? void 0 : _b.chat_id}`;
                  })));
                  set_text(text_2, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.meta) == null ? void 0 : _b.chat_id) ?? "-";
                  })));
                  set_text(text_7, $1);
                  set_text(text_8, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b, _c;
                    return ((_c = (_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.details) == null ? void 0 : _c.rating) ?? "-";
                  })));
                  set_text(text_9, $2);
                  set_text(text_10, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.reason) || "-";
                  })));
                  set_text(text_11, $3);
                  set_text(text_12, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.comment) || "-";
                  })));
                  set_text(text_14, $4);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Chat ID"))),
                  () => ($i18n(), untrack(() => $i18n().t("Rating"))),
                  () => ($i18n(), untrack(() => $i18n().t("Reason"))),
                  () => ($i18n(), untrack(() => $i18n().t("Comment"))),
                  () => ($i18n(), untrack(() => $i18n().t("Close")))
                ]
              );
              event("click", button_1, close);
              append($$anchor4, div_4);
            };
            var alternate = ($$anchor4) => {
              var div_26 = root_6$1();
              var node_7 = child(div_26);
              Spinner(node_7, { className: "size-5" });
              reset(div_26);
              append($$anchor4, div_26);
            };
            if_block(node_2, ($$render) => {
              if (get(loaded)) $$render(consequent_4);
              else $$render(alternate, -1);
            });
          }
          reset(div_3);
          reset(div);
          template_effect(($0) => set_text(text2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Feedback Details")))
          ]);
          event("click", button, close);
          append($$anchor3, div);
        };
        if_block(node, ($$render) => {
          if (selectedFeedback()) $$render(consequent_5);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="my-10"><!></div>`);
var root_1 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class="self-center font-medium line-clamp-1"> </div> <!></button>`);
var root_2 = from_html(`<div slot="content"><div class="w-[170px] rounded-2xl p-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl" type="button"> </button> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl" type="button"> </button></div></div>`);
var root_3 = from_html(`<span class="inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden"> </span> <!>`, 1);
var root_4 = from_html(` <div><!></div>`, 1);
var root_5 = from_html(`<div class="px-2.5 flex w-full bg-transparent overflow-x-auto scrollbar-none mb-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent whitespace-nowrap"><!></div></div>`);
var root_6 = from_html(`<div class="w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class="text-3xl mb-3">😕</div> <div class="text-lg font-medium mb-1"> </div> <div class="text-gray-500 text-center text-xs"> </div></div></div>`);
var root_7 = from_html(`<span class="font-normal"><!></span>`);
var root_8 = from_html(`<span class="invisible"><!></span>`);
var root_9 = from_html(`<div class="shrink-0"><img class="size-5 rounded-full object-cover shrink-0"/></div>`);
var root_10 = from_html(`<div class="font-medium text-gray-600 dark:text-gray-400 flex-1 line-clamp-1"> </div>`);
var root_11 = from_html(`<div class=" text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1"><!></div>`);
var root_12 = from_html(`<!> <!>`, 1);
var root_13 = from_html(`<div class="text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5 line-clamp-1"> </div>`);
var root_14 = from_html(`<td class="px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max"><div class=" flex justify-end"><!></div></td>`);
var root_15 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><!></button>`);
var root_16 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition rounded-xl"><td class=" py-0.5 text-right font-medium"><div class="flex justify-center"><!></div></td><td class=" py-1 pl-3 flex flex-col"><div class="flex flex-col items-start gap-0.5 h-full"><div class="flex flex-col h-full"><!></div></div></td><!><td class=" px-3 py-1 text-right font-medium"> </td><td class=" px-3 py-1 text-right font-medium"><!></td></tr>`);
var root_17 = from_html(`<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full px-2"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class=" border-b-[1.5px] border-gray-50 dark:border-gray-850/30"><th scope="col" class="px-2.5 py-2 cursor-pointer select-none w-3"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-fit"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-0"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-0"></th></tr></thead><tbody></tbody></table>`);
var root_18 = from_html(`<div class="flex flex-col gap-1 mt-0.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><!> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full px-2"><!></div> <!></div>`, 1);
function Feedbacks($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let page2 = mutable_source(1);
  let items = mutable_source(null);
  let total = mutable_source(null);
  let orderBy = mutable_source("updated_at");
  let direction = mutable_source("desc");
  let selectedModelId = mutable_source("");
  let modelIds = mutable_source([]);
  const setSortKey = (key) => {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, "asc");
    }
  };
  let showFeedbackModal = mutable_source(false);
  let selectedFeedback = mutable_source(null);
  const openFeedbackModal = (feedback) => {
    set(showFeedbackModal, true);
    set(selectedFeedback, feedback);
  };
  const closeFeedbackModal = () => {
    set(showFeedbackModal, false);
    set(selectedFeedback, null);
  };
  const getFeedbacks = async () => {
    try {
      const res = await getFeedbackItems(localStorage.token, get(orderBy), get(direction), get(page2), get(selectedModelId)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(items, res.items);
        set(total, res.total);
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    }
  };
  const loadModelIds = async () => {
    try {
      const res = await getFeedbackModelIds(localStorage.token);
      if (res) {
        set(modelIds, res);
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    }
  };
  const deleteFeedbackHandler = async (feedbackId) => {
    const response = await deleteFeedbackById(localStorage.token, feedbackId).catch((err) => {
      toast.error(err);
      return null;
    });
    if (response) {
      toast.success($i18n().t("Feedback deleted successfully"));
      set(page2, 1);
      getFeedbacks();
    }
  };
  const feedbacksToCsv = (feedbacks) => {
    const rows = feedbacks.map((f) => {
      const { data, ...rest } = f;
      return {
        id: rest.id,
        user_id: rest.user_id,
        chat_id: (data == null ? void 0 : data.chat_id) ?? "",
        model_id: (data == null ? void 0 : data.model_id) ?? "",
        sibling_model_ids: ((data == null ? void 0 : data.sibling_model_ids) ?? []).join(";"),
        rating: (data == null ? void 0 : data.rating) ?? "",
        reason: (data == null ? void 0 : data.reason) ?? "",
        comment: (data == null ? void 0 : data.comment) ?? "",
        created_at: rest.created_at,
        updated_at: rest.updated_at
      };
    });
    if (rows.length === 0) return "";
    const headers = Object.keys(rows[0]);
    const escape = (val) => {
      const s = String(val ?? "");
      return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
    };
    return [
      headers.join(","),
      ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))
    ].join("\n");
  };
  const exportHandler = async (format = "json") => {
    const _feedbacks = await exportAllFeedbacks(localStorage.token, get(selectedModelId)).catch((err) => {
      toast.error(err);
      return null;
    });
    if (_feedbacks) {
      if (format === "csv") {
        const csv = feedbacksToCsv(_feedbacks);
        let blob = new Blob([csv], { type: "text/csv" });
        saveAs(blob, `feedback-history-export-${Date.now()}.csv`);
      } else {
        let blob = new Blob([JSON.stringify(_feedbacks)], { type: "application/json" });
        saveAs(blob, `feedback-history-export-${Date.now()}.json`);
      }
    }
  };
  onMount(() => {
    loadModelIds();
  });
  legacy_pre_effect(() => (get(orderBy), get(direction), get(page2)), () => {
    if (get(orderBy) && get(direction) && get(page2) !== void 0) {
      getFeedbacks();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_12();
  var node = first_child(fragment);
  FeedbackModal(node, {
    get selectedFeedback() {
      return get(selectedFeedback);
    },
    onClose: closeFeedbackModal,
    get show() {
      return get(showFeedbackModal);
    },
    set show($$value) {
      set(showFeedbackModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var div = root$1();
      var node_2 = child(div);
      Spinner(node_2, { className: "size-5" });
      reset(div);
      append($$anchor2, div);
    };
    var alternate_11 = ($$anchor2) => {
      var fragment_1 = root_18();
      var div_1 = first_child(fragment_1);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text$1 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var text_1 = child(div_5, true);
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var node_3 = child(div_6);
      {
        var consequent_1 = ($$anchor3) => {
          Dropdown($$anchor3, {
            align: "end",
            children: ($$anchor4, $$slotProps) => {
              var button = root_1();
              var div_7 = child(button);
              var text_2 = child(div_7, true);
              reset(div_7);
              var node_4 = sibling(div_7, 2);
              ChevronDown(node_4, { className: "size-3", strokeWidth: "2.5" });
              reset(button);
              template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
              append($$anchor4, button);
            },
            $$slots: {
              default: true,
              content: ($$anchor4, $$slotProps) => {
                var div_8 = root_2();
                var div_9 = child(div_8);
                var button_1 = child(div_9);
                var text_3 = child(button_1, true);
                reset(button_1);
                var button_2 = sibling(button_1, 2);
                var text_4 = child(button_2, true);
                reset(button_2);
                reset(div_9);
                reset(div_8);
                template_effect(
                  ($0, $1) => {
                    set_text(text_3, $0);
                    set_text(text_4, $1);
                  },
                  [
                    () => ($i18n(), untrack(() => $i18n().t("Export as JSON"))),
                    () => ($i18n(), untrack(() => $i18n().t("Export as CSV")))
                  ]
                );
                event("click", button_1, () => exportHandler("json"));
                event("click", button_2, () => exportHandler("csv"));
                append($$anchor4, div_8);
              }
            }
          });
        };
        if_block(node_3, ($$render) => {
          if (get(total) > 0) $$render(consequent_1);
        });
      }
      reset(div_6);
      reset(div_2);
      reset(div_1);
      var div_10 = sibling(div_1, 2);
      var node_5 = child(div_10);
      {
        var consequent_2 = ($$anchor3) => {
          var div_11 = root_5();
          var div_12 = child(div_11);
          var node_6 = child(div_12);
          {
            let $0 = derived_safe_equal(() => ($i18n(), get(modelIds), untrack(() => [
              { value: "", label: $i18n().t("All") },
              ...get(modelIds).map((mid) => ({ value: mid, label: mid }))
            ])));
            let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("All"))));
            Select(node_6, {
              get items() {
                return get($0);
              },
              get placeholder() {
                return get($1);
              },
              triggerClass: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl",
              onChange: () => {
                set(page2, 1);
                getFeedbacks();
              },
              get value() {
                return get(selectedModelId);
              },
              set value($$value) {
                set(selectedModelId, $$value);
              },
              $$slots: {
                trigger: ($$anchor4, $$slotProps) => {
                  const selectedLabel = derived_safe_equal(() => $$slotProps.selectedLabel);
                  var fragment_3 = root_3();
                  var span = first_child(fragment_3);
                  var text_5 = child(span, true);
                  reset(span);
                  var node_7 = sibling(span, 2);
                  ChevronDown(node_7, { className: "size-3.5", strokeWidth: "2.5" });
                  template_effect(() => set_text(text_5, get(selectedLabel)));
                  append($$anchor4, fragment_3);
                },
                item: ($$anchor4, $$slotProps) => {
                  const item = derived_safe_equal(() => $$slotProps.item);
                  const selected = derived_safe_equal(() => $$slotProps.selected);
                  var fragment_4 = root_4();
                  var text_6 = first_child(fragment_4);
                  var div_13 = sibling(text_6);
                  var node_8 = child(div_13);
                  Check(node_8, {});
                  reset(div_13);
                  template_effect(() => {
                    set_text(text_6, `${(deep_read_state(get(item)), untrack(() => get(item).label)) ?? ""} `);
                    set_class(div_13, 1, `ml-auto ${get(selected) ? "" : "invisible"}`);
                  });
                  append($$anchor4, fragment_4);
                }
              },
              $$legacy: true
            });
          }
          reset(div_12);
          reset(div_11);
          event("wheel", div_11, (e) => {
            if (e.deltaY !== 0) {
              e.preventDefault();
              e.currentTarget.scrollLeft += e.deltaY;
            }
          });
          append($$anchor3, div_11);
        };
        if_block(node_5, ($$render) => {
          if (get(modelIds), untrack(() => get(modelIds).length > 0)) $$render(consequent_2);
        });
      }
      var div_14 = sibling(node_5, 2);
      var node_9 = child(div_14);
      {
        var consequent_3 = ($$anchor3) => {
          var div_15 = root_6();
          var div_16 = child(div_15);
          var div_17 = sibling(child(div_16), 2);
          var text_7 = child(div_17, true);
          reset(div_17);
          var div_18 = sibling(div_17, 2);
          var text_8 = child(div_18, true);
          reset(div_18);
          reset(div_16);
          reset(div_15);
          template_effect(
            ($0, $1) => {
              set_text(text_7, $0);
              set_text(text_8, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No feedback found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_15);
        };
        var alternate_10 = ($$anchor3) => {
          var table = root_17();
          var thead = child(table);
          var tr = child(thead);
          var th = child(tr);
          var div_19 = child(th);
          var text_9 = child(div_19);
          var node_10 = sibling(text_9);
          {
            var consequent_5 = ($$anchor4) => {
              var span_1 = root_7();
              var node_11 = child(span_1);
              {
                var consequent_4 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_11, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_4);
                  else $$render(alternate, -1);
                });
              }
              reset(span_1);
              append($$anchor4, span_1);
            };
            var alternate_1 = ($$anchor4) => {
              var span_2 = root_8();
              var node_12 = child(span_2);
              ChevronUp(node_12, { className: "size-2" });
              reset(span_2);
              append($$anchor4, span_2);
            };
            if_block(node_10, ($$render) => {
              if (get(orderBy) === "user") $$render(consequent_5);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_19);
          reset(th);
          var th_1 = sibling(th);
          var div_20 = child(th_1);
          var text_10 = child(div_20);
          var node_13 = sibling(text_10);
          {
            var consequent_7 = ($$anchor4) => {
              var span_3 = root_7();
              var node_14 = child(span_3);
              {
                var consequent_6 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_2 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_14, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_6);
                  else $$render(alternate_2, -1);
                });
              }
              reset(span_3);
              append($$anchor4, span_3);
            };
            var alternate_3 = ($$anchor4) => {
              var span_4 = root_8();
              var node_15 = child(span_4);
              ChevronUp(node_15, { className: "size-2" });
              reset(span_4);
              append($$anchor4, span_4);
            };
            if_block(node_13, ($$render) => {
              if (get(orderBy) === "model_id") $$render(consequent_7);
              else $$render(alternate_3, -1);
            });
          }
          reset(div_20);
          reset(th_1);
          var th_2 = sibling(th_1);
          var div_21 = child(th_2);
          var text_11 = child(div_21);
          var node_16 = sibling(text_11);
          {
            var consequent_9 = ($$anchor4) => {
              var span_5 = root_7();
              var node_17 = child(span_5);
              {
                var consequent_8 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_4 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_17, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_8);
                  else $$render(alternate_4, -1);
                });
              }
              reset(span_5);
              append($$anchor4, span_5);
            };
            var alternate_5 = ($$anchor4) => {
              var span_6 = root_8();
              var node_18 = child(span_6);
              ChevronUp(node_18, { className: "size-2" });
              reset(span_6);
              append($$anchor4, span_6);
            };
            if_block(node_16, ($$render) => {
              if (get(orderBy) === "rating") $$render(consequent_9);
              else $$render(alternate_5, -1);
            });
          }
          reset(div_21);
          reset(th_2);
          var th_3 = sibling(th_2);
          var div_22 = child(th_3);
          var text_12 = child(div_22);
          var node_19 = sibling(text_12);
          {
            var consequent_11 = ($$anchor4) => {
              var span_7 = root_7();
              var node_20 = child(span_7);
              {
                var consequent_10 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_6 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_20, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_10);
                  else $$render(alternate_6, -1);
                });
              }
              reset(span_7);
              append($$anchor4, span_7);
            };
            var alternate_7 = ($$anchor4) => {
              var span_8 = root_8();
              var node_21 = child(span_8);
              ChevronUp(node_21, { className: "size-2" });
              reset(span_8);
              append($$anchor4, span_8);
            };
            if_block(node_19, ($$render) => {
              if (get(orderBy) === "updated_at") $$render(consequent_11);
              else $$render(alternate_7, -1);
            });
          }
          reset(div_22);
          reset(th_3);
          next();
          reset(tr);
          reset(thead);
          var tbody = sibling(thead);
          each(tbody, 5, () => get(items), (feedback) => feedback.id, ($$anchor4, feedback) => {
            var tr_1 = root_16();
            var td = child(tr_1);
            var div_23 = child(td);
            var node_22 = child(div_23);
            {
              let $0 = derived_safe_equal(() => (get(feedback), untrack(() => {
                var _a, _b;
                return (_b = (_a = get(feedback)) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
              })));
              Tooltip(node_22, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var div_24 = root_9();
                  var img = child(div_24);
                  reset(div_24);
                  template_effect(() => {
                    set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(feedback), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(feedback).user.id}/profile/image`)));
                    set_attribute(img, "alt", (get(feedback), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = get(feedback)) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
                    })));
                  });
                  append($$anchor5, div_24);
                },
                $$slots: { default: true }
              });
            }
            reset(div_23);
            reset(td);
            var td_1 = sibling(td);
            var div_25 = child(td_1);
            var div_26 = child(div_25);
            var node_23 = child(div_26);
            {
              var consequent_13 = ($$anchor5) => {
                var fragment_13 = root_12();
                var node_24 = first_child(fragment_13);
                {
                  let $0 = derived_safe_equal(() => (get(feedback), untrack(() => {
                    var _a;
                    return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                  })));
                  Tooltip(node_24, {
                    get content() {
                      return get($0);
                    },
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      var div_27 = root_10();
                      var text_13 = child(div_27, true);
                      reset(div_27);
                      template_effect(() => set_text(text_13, (get(feedback), untrack(() => {
                        var _a;
                        return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                      }))));
                      append($$anchor6, div_27);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_25 = sibling(node_24, 2);
                {
                  let $0 = derived_safe_equal(() => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.join(", "))));
                  Tooltip(node_25, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_28 = root_11();
                      var node_26 = child(div_28);
                      {
                        var consequent_12 = ($$anchor7) => {
                          var text_14 = text();
                          template_effect(($02, $1) => set_text(text_14, `${$02 ?? ""}, ${$1 ?? ""}`), [
                            () => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.slice(0, 2).join(", "))),
                            () => ($i18n(), get(feedback), untrack(() => $i18n().t("and {{COUNT}} more", { COUNT: get(feedback).data.sibling_model_ids.length - 2 })))
                          ]);
                          append($$anchor7, text_14);
                        };
                        var alternate_8 = ($$anchor7) => {
                          var text_15 = text();
                          template_effect(($02) => set_text(text_15, $02), [
                            () => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.join(", ")))
                          ]);
                          append($$anchor7, text_15);
                        };
                        if_block(node_26, ($$render) => {
                          if (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.length > 2)) $$render(consequent_12);
                          else $$render(alternate_8, -1);
                        });
                      }
                      reset(div_28);
                      append($$anchor6, div_28);
                    },
                    $$slots: { default: true }
                  });
                }
                append($$anchor5, fragment_13);
              };
              var alternate_9 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => (get(feedback), untrack(() => {
                    var _a;
                    return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                  })));
                  Tooltip($$anchor5, {
                    get content() {
                      return get($0);
                    },
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      var div_29 = root_13();
                      var text_16 = child(div_29, true);
                      reset(div_29);
                      template_effect(() => set_text(text_16, (get(feedback), untrack(() => {
                        var _a;
                        return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                      }))));
                      append($$anchor6, div_29);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_23, ($$render) => {
                if (get(feedback), untrack(() => {
                  var _a;
                  return (_a = get(feedback).data) == null ? void 0 : _a.sibling_model_ids;
                })) $$render(consequent_13);
                else $$render(alternate_9, -1);
              });
            }
            reset(div_26);
            reset(div_25);
            reset(td_1);
            var node_27 = sibling(td_1);
            {
              var consequent_17 = ($$anchor5) => {
                var td_2 = root_14();
                var div_30 = child(td_2);
                var node_28 = child(div_30);
                {
                  var consequent_14 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Won"))));
                      Badge($$anchor6, {
                        type: "info",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  var d = user_derived(() => (get(feedback), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "1";
                  })));
                  var consequent_15 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Draw"))));
                      Badge($$anchor6, {
                        type: "muted",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  var d_1 = user_derived(() => (get(feedback), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "0";
                  })));
                  var consequent_16 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Lost"))));
                      Badge($$anchor6, {
                        type: "error",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  var d_2 = user_derived(() => (get(feedback), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "-1";
                  })));
                  if_block(node_28, ($$render) => {
                    if (get(d)) $$render(consequent_14);
                    else if (get(d_1)) $$render(consequent_15, 1);
                    else if (get(d_2)) $$render(consequent_16, 2);
                  });
                }
                reset(div_30);
                reset(td_2);
                append($$anchor5, td_2);
              };
              if_block(node_27, ($$render) => {
                if (get(feedback), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating;
                })) $$render(consequent_17);
              });
            }
            var td_3 = sibling(node_27);
            var text_17 = child(td_3, true);
            reset(td_3);
            var td_4 = sibling(td_3);
            var node_29 = child(td_4);
            FeedbackMenu(node_29, {
              $$events: {
                delete: (e) => {
                  deleteFeedbackHandler(get(feedback).id);
                }
              },
              children: ($$anchor5, $$slotProps) => {
                var button_3 = root_15();
                var node_30 = child(button_3);
                EllipsisHorizontal(node_30, {});
                reset(button_3);
                append($$anchor5, button_3);
              },
              $$slots: { default: true }
            });
            reset(td_4);
            reset(tr_1);
            template_effect(($0) => set_text(text_17, $0), [
              () => (deep_read_state(dayjs2), get(feedback), untrack(() => dayjs2(get(feedback).updated_at * 1e3).fromNow()))
            ]);
            event("click", td_4, (e) => e.stopPropagation());
            event("click", tr_1, () => openFeedbackModal(get(feedback)));
            append($$anchor4, tr_1);
          });
          reset(tbody);
          reset(table);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text_9, `${$0 ?? ""} `);
              set_text(text_10, `${$1 ?? ""} `);
              set_text(text_11, `${$2 ?? ""} `);
              set_text(text_12, `${$3 ?? ""} `);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("User"))),
              () => ($i18n(), untrack(() => $i18n().t("Models"))),
              () => ($i18n(), untrack(() => $i18n().t("Result"))),
              () => ($i18n(), untrack(() => $i18n().t("Updated At")))
            ]
          );
          event("click", th, () => setSortKey("user"));
          event("click", th_1, () => setSortKey("model_id"));
          event("click", th_2, () => setSortKey("rating"));
          event("click", th_3, () => setSortKey("updated_at"));
          append($$anchor3, table);
        };
        if_block(node_9, ($$render) => {
          if (get(items), untrack(() => (get(items) ?? []).length === 0)) $$render(consequent_3);
          else $$render(alternate_10, -1);
        });
      }
      reset(div_14);
      var node_31 = sibling(div_14, 2);
      {
        var consequent_18 = ($$anchor3) => {
          Pagination_1($$anchor3, {
            get count() {
              return get(total);
            },
            perPage: 30,
            get page() {
              return get(page2);
            },
            set page($$value) {
              set(page2, $$value);
            },
            $$legacy: true
          });
        };
        if_block(node_31, ($$render) => {
          if (get(total) > 30) $$render(consequent_18);
        });
      }
      reset(div_10);
      template_effect(
        ($0) => {
          set_text(text$1, $0);
          set_text(text_1, get(total));
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Feedback History")))
        ]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (get(items) === null || get(total) === null) $$render(consequent);
      else $$render(alternate_11, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="users-tabs-container" class="tabs mx-[16px] lg:mx-0 lg:px-[16px] flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-50 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><a id="leaderboard" href="/admin/evaluations/leaderboard" draggable="false"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center"> </div></a> <a id="feedback" href="/admin/evaluations/feedback" draggable="false"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center"> </div></a></div> <div class="flex-1 mt-1 lg:mt-0 px-[16px] lg:pr-[16px] lg:pl-0 overflow-y-scroll"><!></div></div>`);
function Evaluations($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let selectedTab = mutable_source();
  const scrollToTab = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };
  let loaded = mutable_source(false);
  onMount(async () => {
    set(loaded, true);
    const containerElement = document.getElementById("users-tabs-container");
    if (containerElement) {
      containerElement.addEventListener("wheel", function(event2) {
        if (event2.deltaY !== 0) {
          containerElement.scrollLeft += event2.deltaY;
        }
      });
    }
    scrollToTab(get(selectedTab));
  });
  legacy_pre_effect(() => $page(), () => {
    const pathParts = $page().url.pathname.split("/");
    const tabFromPath = pathParts[pathParts.length - 1];
    set(selectedTab, ["leaderboard", "feedback"].includes(tabFromPath) ? tabFromPath : "leaderboard");
  });
  legacy_pre_effect(() => get(selectedTab), () => {
    if (get(selectedTab)) {
      scrollToTab(get(selectedTab));
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var a = child(div_1);
      var div_2 = sibling(child(a), 2);
      var text2 = child(div_2, true);
      reset(div_2);
      reset(a);
      var a_1 = sibling(a, 2);
      var div_3 = sibling(child(a_1), 2);
      var text_1 = child(div_3, true);
      reset(div_3);
      reset(a_1);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var node_1 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          Leaderboard($$anchor3, {});
        };
        var consequent_1 = ($$anchor3) => {
          Feedbacks($$anchor3, {});
        };
        if_block(node_1, ($$render) => {
          if (get(selectedTab) === "leaderboard") $$render(consequent);
          else if (get(selectedTab) === "feedback") $$render(consequent_1, 1);
        });
      }
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_class(a, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition select-none ${get(selectedTab) === "leaderboard" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
          set_text(text2, $0);
          set_class(a_1, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition select-none ${get(selectedTab) === "feedback" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
          set_text(text_1, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Leaderboard"))),
          () => ($i18n(), untrack(() => $i18n().t("Feedback")))
        ]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Evaluations as E
};
