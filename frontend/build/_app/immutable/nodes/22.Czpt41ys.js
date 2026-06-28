import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, C as deferred_template_effect, u as untrack, $ as $document, h as first_child, c as child, z as sibling, r as reset, aR as next, t as template_effect, d as set_text, m as deep_read_state, a as append, y as event, a_ as remove_textarea_child, b as pop, e as store_get, s as setup_stores, q as mutable_source, x as derived_safe_equal, f as from_html, B as from_svg, l as legacy_pre_effect, n as legacy_pre_effect_reset, g as comment } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { s as set_attribute, r as remove_input_defaults, a as set_class } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { R as REXPRO_NAME, b as showSidebar, c as config, u as user } from "../chunks/BJ3rUC-5.js";
import { S as ScheduleDropdown, M as ModelDropdown, r as runAutomationById, d as deleteAutomationById, g as getAutomationRuns, u as updateAutomationById, a as getAutomationById } from "../chunks/DYTlah25.js";
import { e as each } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { d as dayjs2, r as relativeTime } from "../chunks/BeGenu0j.js";
import { l as localizedFormat } from "../chunks/Ce8_hHpJ.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { C as ChevronLeft } from "../chunks/D9uL0uGA.js";
var root$1 = from_html(`<div class="text-sm text-gray-500 truncate"> <span> </span>.</div>`);
var root_1 = from_html(`<button class="text-sm p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition" type="button"><!></button>`);
var root_2 = from_html(`<button class="p-2 rounded-full bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-gray-500 hover:text-black dark:hover:text-white transition" type="button"><!></button>`);
var root_3 = from_html(`<button class="px-3 py-1 text-sm bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition flex items-center gap-1.5" type="button"> <!></button>`);
var root_4 = from_html(`<div class="flex justify-center py-4"><!></div>`);
var root_5 = from_html(`<div class="text-xs text-gray-400 py-4 tabular-nums"> </div>`);
var root_6 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3 text-emerald-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
var root_7 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3 text-red-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path></svg>`);
var root_8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3 text-blue-500"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"></path></svg>`);
var root_9 = from_html(`<button type="button"><div class="shrink-0 flex items-center justify-center"><!></div> <div class="flex-1 min-w-0"><div class="text-xs text-gray-800 dark:text-gray-200 truncate"> </div></div> <span class="shrink-0 text-[10px] text-gray-500 font-mono"> </span></button>`);
var root_10 = from_html(`<div class="space-y-0.5 w-full"><!> <!></div>`);
var root_11 = from_html(`<!> <div><div class="flex-1 max-h-full flex flex-col pt-3 pb-1 px-3 md:px-[18px]"><div class="flex items-start justify-between gap-4 shrink-0 mb-0.5"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5 mb-1.5"><!> <input class="text-2xl w-full bg-transparent outline-hidden"/></div></div> <div class="flex items-center gap-2 shrink-0"><!> <!> <button class="px-2.5 py-1 text-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full flex items-center gap-1.5" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3.5"><path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path></svg> <div class="hidden md:block"> </div> <!></button></div></div> <div class="flex flex-col md:flex-row gap-4 flex-1 overflow-hidden pb-2 px-1"><div class="flex-1 flex flex-col min-h-0 overflow-hidden"><div class="flex items-center justify-between mb-2 shrink-0 px-1"><div class="text-gray-500 text-xs"> </div></div> <div class="relative flex-1 min-h-0"><div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100/50 dark:border-gray-850/50 h-full"><textarea class="w-full h-full text-sm bg-transparent outline-hidden resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"></textarea></div></div></div> <div class="hidden md:flex w-full md:w-66 shrink-0 overflow-y-auto px-1 flex-col gap-5"><div><div class="text-gray-500 text-xs mb-3"> </div> <div class="space-y-1"><div class="flex items-center justify-between text-xs"><span class="text-gray-600 dark:text-gray-400"> </span> <!></div> <div class="flex items-center justify-between text-xs"><span class="text-gray-600 dark:text-gray-400"> </span> <!></div></div></div> <div><div class="text-gray-500 text-xs mb-3"> </div> <div class="space-y-2.5"><div class="flex items-center justify-between text-xs"><span class="text-gray-600 dark:text-gray-400"> </span> <span><span></span> </span></div> <div class="flex items-center justify-between text-xs"><span class="text-gray-600 dark:text-gray-400"> </span> <span class=" text-gray-700 dark:text-gray-300"> </span></div> <div class="flex items-center justify-between text-xs"><span class="text-gray-600 dark:text-gray-400"> </span> <span class=" text-gray-700 dark:text-gray-300"> </span></div></div></div> <div class="flex-1 flex flex-col min-h-0 -mx-1"><div class="text-gray-500 text-xs mb-2 mx-1 shrink-0"> </div> <div class="flex-1 overflow-y-auto scrollbar-hidden w-full"><!></div></div></div></div></div></div>`, 1);
function AutomationEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(localizedFormat);
  const i18n = getContext("i18n");
  let automation = prop($$props, "automation", 12);
  let name = mutable_source("");
  let prompt = mutable_source("");
  let model_id = mutable_source("");
  let is_active = mutable_source(true);
  let loading = mutable_source(false);
  let saving = mutable_source(false);
  let showDeleteConfirm = mutable_source(false);
  let runs = mutable_source([]);
  let runsLoading = mutable_source(false);
  let hasMoreRuns = true;
  let runsPage = 0;
  let isDirty = mutable_source(false);
  let scheduleDropdown = mutable_source();
  const formatRunTime = (ts) => {
    const now = Date.now();
    const diff = now - ts / 1e6;
    const seconds = Math.floor(diff / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);
    if (years > 0) return $i18n().t("{{COUNT}}y", { COUNT: years, context: "time_ago" });
    if (weeks > 0) return $i18n().t("{{COUNT}}w", { COUNT: weeks, context: "time_ago" });
    if (days > 0) return $i18n().t("{{COUNT}}d", { COUNT: days, context: "time_ago" });
    if (hours > 0) return $i18n().t("{{COUNT}}h", { COUNT: hours, context: "time_ago" });
    if (minutes > 0) return $i18n().t("{{COUNT}}m", { COUNT: minutes, context: "time_ago" });
    return $i18n().t("1m", { context: "time_ago" });
  };
  const formatNextRun = (ts) => {
    if (!ts) return $i18n().t("Not scheduled");
    const d = dayjs2(ts / 1e6);
    if (d.isSame(dayjs2(), "day")) return `${$i18n().t("Today at")} ${d.format("LT")}`;
    return d.format("L LT");
  };
  const saveHandler = async () => {
    if (!get(name).trim() || !get(prompt).trim() || !get(model_id).trim()) {
      toast.error($i18n().t("Name, prompt, and model are required"));
      return;
    }
    set(saving, true);
    try {
      const form = {
        name: get(name).trim(),
        data: {
          prompt: get(prompt).trim(),
          model_id: get(model_id).trim(),
          rrule: get(scheduleDropdown).buildRrule()
        },
        is_active: get(is_active)
      };
      const updated = await updateAutomationById(localStorage.token, automation().id, form);
      if (updated) {
        automation(updated);
        set(isDirty, false);
        toast.success($i18n().t("Automation updated"));
      }
    } catch (e) {
      toast.error((e == null ? void 0 : e.detail) ?? `${e}` ?? "Failed to save");
    } finally {
      set(saving, false);
    }
  };
  const runNowHandler = async () => {
    set(loading, true);
    const res = await runAutomationById(localStorage.token, automation().id).catch((err) => {
      toast.error(`${err}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Automation triggered"));
      setTimeout(() => loadRuns(false), 2e3);
    }
    set(loading, false);
  };
  const deleteHandler = async () => {
    const res = await deleteAutomationById(localStorage.token, automation().id).catch((err) => {
      toast.error(`${err}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: automation().name }));
      goto("/automations");
    }
  };
  const loadRuns = async (loadMore = false) => {
    if (get(runsLoading) || !hasMoreRuns && loadMore) return;
    set(runsLoading, true);
    if (!loadMore) {
      runsPage = 0;
      hasMoreRuns = true;
    }
    try {
      const fetchedRuns = await getAutomationRuns(localStorage.token, automation().id, runsPage * 50, 50) ?? [];
      if (loadMore) {
        set(runs, [...get(runs), ...fetchedRuns]);
      } else {
        set(runs, fetchedRuns);
      }
      if (fetchedRuns.length < 50) {
        hasMoreRuns = false;
      }
      runsPage++;
    } catch {
      if (!loadMore) set(runs, []);
    }
    set(runsLoading, false);
  };
  const markDirty = () => {
    set(isDirty, true);
  };
  const onScroll = (e) => {
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 50) {
      if (!get(runsLoading) && hasMoreRuns) {
        loadRuns(true);
      }
    }
  };
  onMount(async () => {
    set(name, automation().name);
    set(prompt, automation().data.prompt);
    set(model_id, automation().data.model_id);
    set(is_active, automation().is_active);
    if (get(scheduleDropdown)) {
      get(scheduleDropdown).parseRrule(automation().data.rrule);
    }
    await loadRuns();
  });
  init();
  var fragment = root_11();
  head("12jzsgd", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}`;
      },
      [
        () => (get(name), $i18n(), untrack(() => get(name) || $i18n().t("Automation")))
      ]
    );
  });
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete automation?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: { confirm: deleteHandler },
      children: ($$anchor2, $$slotProps) => {
        var div = root$1();
        var text = child(div);
        var span = sibling(text);
        var text_1 = child(span, true);
        reset(span);
        next();
        reset(div);
        template_effect(
          ($02) => {
            set_text(text, `${$02 ?? ""} `);
            set_text(text_1, (deep_read_state(automation()), untrack(() => automation().name)));
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("This will delete")))
          ]
        );
        append($$anchor2, div);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var div_1 = sibling(node, 2);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var node_1 = child(div_5);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Back"))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button = root_1();
        var node_2 = child(button);
        ChevronLeft(node_2, { strokeWidth: "2.5" });
        reset(button);
        template_effect(($02) => set_attribute(button, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Back")))]);
        event("click", button, () => goto("/automations"));
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  var input = sibling(node_1, 2);
  remove_input_defaults(input);
  reset(div_5);
  reset(div_4);
  var div_6 = sibling(div_4, 2);
  var node_3 = child(div_6);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    Tooltip(node_3, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button_1 = root_2();
        var node_4 = child(button_1);
        GarbageBin(node_4, {});
        reset(button_1);
        event("click", button_1, () => set(showDeleteConfirm, true));
        append($$anchor2, button_1);
      },
      $$slots: { default: true }
    });
  }
  var node_5 = sibling(node_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var button_2 = root_3();
      var text_2 = child(button_2);
      var node_6 = sibling(text_2);
      {
        var consequent = ($$anchor3) => {
          Spinner($$anchor3, { className: "size-3" });
        };
        if_block(node_6, ($$render) => {
          if (get(saving)) $$render(consequent);
        });
      }
      reset(button_2);
      template_effect(
        ($0) => {
          button_2.disabled = get(saving);
          set_text(text_2, `${$0 ?? ""} `);
        },
        [() => ($i18n(), untrack(() => $i18n().t("Save")))]
      );
      event("click", button_2, saveHandler);
      append($$anchor2, button_2);
    };
    if_block(node_5, ($$render) => {
      if (get(isDirty)) $$render(consequent_1);
    });
  }
  var button_3 = sibling(node_5, 2);
  var div_7 = sibling(child(button_3), 2);
  var text_3 = child(div_7, true);
  reset(div_7);
  var node_7 = sibling(div_7, 2);
  {
    var consequent_2 = ($$anchor2) => {
      Spinner($$anchor2, { className: "size-3" });
    };
    if_block(node_7, ($$render) => {
      if (get(loading)) $$render(consequent_2);
    });
  }
  reset(button_3);
  reset(div_6);
  reset(div_3);
  var div_8 = sibling(div_3, 2);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var div_11 = child(div_10);
  var text_4 = child(div_11, true);
  reset(div_11);
  reset(div_10);
  var div_12 = sibling(div_10, 2);
  var div_13 = child(div_12);
  var textarea = child(div_13);
  remove_textarea_child(textarea);
  reset(div_13);
  reset(div_12);
  reset(div_9);
  var div_14 = sibling(div_9, 2);
  var div_15 = child(div_14);
  var div_16 = child(div_15);
  var text_5 = child(div_16, true);
  reset(div_16);
  var div_17 = sibling(div_16, 2);
  var div_18 = child(div_17);
  var span_1 = child(div_18);
  var text_6 = child(span_1, true);
  reset(span_1);
  var node_8 = sibling(span_1, 2);
  bind_this(
    ScheduleDropdown(node_8, {
      side: "bottom",
      align: "end",
      onChange: markDirty,
      $$legacy: true
    }),
    ($$value) => set(scheduleDropdown, $$value),
    () => get(scheduleDropdown)
  );
  reset(div_18);
  var div_19 = sibling(div_18, 2);
  var span_2 = child(div_19);
  var text_7 = child(span_2, true);
  reset(span_2);
  var node_9 = sibling(span_2, 2);
  ModelDropdown(node_9, {
    side: "bottom",
    align: "end",
    onChange: markDirty,
    get model_id() {
      return get(model_id);
    },
    set model_id($$value) {
      set(model_id, $$value);
    },
    $$legacy: true
  });
  reset(div_19);
  reset(div_17);
  reset(div_15);
  var div_20 = sibling(div_15, 2);
  var div_21 = child(div_20);
  var text_8 = child(div_21, true);
  reset(div_21);
  var div_22 = sibling(div_21, 2);
  var div_23 = child(div_22);
  var span_3 = child(div_23);
  var text_9 = child(span_3, true);
  reset(span_3);
  var span_4 = sibling(span_3, 2);
  var span_5 = child(span_4);
  var text_10 = sibling(span_5);
  reset(span_4);
  reset(div_23);
  var div_24 = sibling(div_23, 2);
  var span_6 = child(div_24);
  var text_11 = child(span_6, true);
  reset(span_6);
  var span_7 = sibling(span_6, 2);
  var text_12 = child(span_7, true);
  reset(span_7);
  reset(div_24);
  var div_25 = sibling(div_24, 2);
  var span_8 = child(div_25);
  var text_13 = child(span_8, true);
  reset(span_8);
  var span_9 = sibling(span_8, 2);
  var text_14 = child(span_9, true);
  reset(span_9);
  reset(div_25);
  reset(div_22);
  reset(div_20);
  var div_26 = sibling(div_20, 2);
  var div_27 = child(div_26);
  var text_15 = child(div_27, true);
  reset(div_27);
  var div_28 = sibling(div_27, 2);
  var node_10 = child(div_28);
  {
    var consequent_3 = ($$anchor2) => {
      var div_29 = root_4();
      var node_11 = child(div_29);
      Spinner(node_11, { className: "size-4" });
      reset(div_29);
      append($$anchor2, div_29);
    };
    var consequent_4 = ($$anchor2) => {
      var div_30 = root_5();
      var text_16 = child(div_30, true);
      reset(div_30);
      template_effect(($0) => set_text(text_16, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No execution logs available yet")))
      ]);
      append($$anchor2, div_30);
    };
    var alternate_1 = ($$anchor2) => {
      var div_31 = root_10();
      var node_12 = child(div_31);
      each(node_12, 1, () => get(runs), (run) => run.id, ($$anchor3, run) => {
        var button_4 = root_9();
        var div_32 = child(button_4);
        var node_13 = child(div_32);
        {
          var consequent_5 = ($$anchor4) => {
            var svg = root_6();
            append($$anchor4, svg);
          };
          var consequent_6 = ($$anchor4) => {
            var svg_1 = root_7();
            append($$anchor4, svg_1);
          };
          var alternate = ($$anchor4) => {
            var svg_2 = root_8();
            append($$anchor4, svg_2);
          };
          if_block(node_13, ($$render) => {
            if (get(run), untrack(() => get(run).status === "success")) $$render(consequent_5);
            else if (get(run), untrack(() => get(run).status === "error")) $$render(consequent_6, 1);
            else $$render(alternate, -1);
          });
        }
        reset(div_32);
        var div_33 = sibling(div_32, 2);
        var div_34 = child(div_33);
        var text_17 = child(div_34, true);
        reset(div_34);
        reset(div_33);
        var span_10 = sibling(div_33, 2);
        var text_18 = child(span_10, true);
        reset(span_10);
        reset(button_4);
        template_effect(
          ($0) => {
            set_class(button_4, 1, `w-full text-left flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-850/80 transition-colors ${(get(run), untrack(() => get(run).chat_id ? "cursor-pointer" : "cursor-default")) ?? ""}`);
            set_text(text_17, (deep_read_state(automation()), untrack(() => automation().name)));
            set_text(text_18, $0);
          },
          [
            () => (get(run), untrack(() => formatRunTime(get(run).created_at)))
          ]
        );
        event("click", button_4, () => {
          if (get(run).chat_id) goto(`/c/${get(run).chat_id}`);
        });
        append($$anchor3, button_4);
      });
      var node_14 = sibling(node_12, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_35 = root_4();
          var node_15 = child(div_35);
          Spinner(node_15, { className: "size-4" });
          reset(div_35);
          append($$anchor3, div_35);
        };
        if_block(node_14, ($$render) => {
          if (get(runsLoading), get(runs), untrack(() => get(runsLoading) && get(runs).length > 0)) $$render(consequent_7);
        });
      }
      reset(div_31);
      append($$anchor2, div_31);
    };
    if_block(node_10, ($$render) => {
      if (get(runsLoading), get(runs), untrack(() => get(runsLoading) && get(runs).length === 0)) $$render(consequent_3);
      else if (get(runs), untrack(() => get(runs).length === 0)) $$render(consequent_4, 1);
      else $$render(alternate_1, -1);
    });
  }
  reset(div_28);
  reset(div_26);
  reset(div_14);
  reset(div_8);
  reset(div_2);
  reset(div_1);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) => {
      set_class(div_1, 1, `flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`);
      set_attribute(input, "placeholder", $0);
      button_3.disabled = get(loading);
      set_text(text_3, $1);
      set_text(text_4, $2);
      set_attribute(textarea, "placeholder", $3);
      set_text(text_5, $4);
      set_text(text_6, $5);
      set_text(text_7, $6);
      set_text(text_8, $7);
      set_text(text_9, $8);
      set_class(span_4, 1, `flex items-center gap-1.5 text-xs ${get(is_active) ? "text-emerald-700 dark:text-emerald-400" : "text-gray-600 dark:text-gray-400"}`);
      set_class(span_5, 1, `inline-block size-1.5 rounded-full ${get(is_active) ? "bg-emerald-500" : "bg-gray-400"}`);
      set_text(text_10, ` ${$9 ?? ""}`);
      set_text(text_11, $10);
      set_text(text_12, $11);
      set_text(text_13, $12);
      set_text(text_14, $13);
      set_text(text_15, $14);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Automation Name"))),
      () => ($i18n(), untrack(() => $i18n().t("Run now"))),
      () => ($i18n(), untrack(() => $i18n().t("Instructions"))),
      () => ($i18n(), untrack(() => $i18n().t("Enter the prompt instructions for this automation..."))),
      () => ($i18n(), untrack(() => $i18n().t("Configuration"))),
      () => ($i18n(), untrack(() => $i18n().t("Repeats"))),
      () => ($i18n(), untrack(() => $i18n().t("Model"))),
      () => ($i18n(), untrack(() => $i18n().t("Status"))),
      () => ($i18n(), untrack(() => $i18n().t("State"))),
      () => (get(is_active), $i18n(), untrack(() => get(is_active) ? $i18n().t("Active") : $i18n().t("Paused"))),
      () => ($i18n(), untrack(() => $i18n().t("Next run"))),
      () => (deep_read_state(automation()), untrack(() => {
        var _a;
        return formatNextRun(((_a = automation().next_runs) == null ? void 0 : _a[0]) ?? automation().next_run_at);
      })),
      () => ($i18n(), untrack(() => $i18n().t("Last ran"))),
      () => (deep_read_state(automation()), $i18n(), untrack(() => automation().last_run_at ? formatNextRun(automation().last_run_at) : $i18n().t("Never"))),
      () => ($i18n(), untrack(() => $i18n().t("Execution Logs")))
    ]
  );
  bind_value(input, () => get(name), ($$value) => set(name, $$value));
  event("input", input, markDirty);
  event("click", button_3, runNowHandler);
  bind_value(textarea, () => get(prompt), ($$value) => set(prompt, $$value));
  event("input", textarea, markDirty);
  event("scroll", div_28, onScroll);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div><!></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const automationId = mutable_source();
  getContext("i18n");
  let automation = mutable_source(null);
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f;
    if (!((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_automations) || ((_c = $user()) == null ? void 0 : _c.role) !== "admin" && !(((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.automations) ?? false)) {
      goto("/");
      return;
    }
    if (get(automationId)) {
      const res = await getAutomationById(localStorage.token, get(automationId)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(automation, res);
        set(loaded, true);
      } else {
        goto("/automations");
      }
    } else {
      goto("/automations");
    }
  });
  legacy_pre_effect(() => $page(), () => {
    set(automationId, $page().params.id);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      AutomationEditor($$anchor2, {
        get automation() {
          return get(automation);
        }
      });
    };
    var alternate = ($$anchor2) => {
      var div = root();
      var node_1 = child(div);
      Spinner(node_1, { className: "size-5" });
      reset(div);
      template_effect(() => set_class(div, 1, `w-full h-screen max-h-[100dvh] flex justify-center items-center transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""}`));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded) && get(automation)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
