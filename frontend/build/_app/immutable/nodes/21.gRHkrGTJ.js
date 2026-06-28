import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, aS as createEventDispatcher, l as legacy_pre_effect, n as legacy_pre_effect_reset, b as pop, s as setup_stores, m as deep_read_state, w as set, k as get, t as template_effect, u as untrack, d as set_text, y as event, a as append, c as child, z as sibling, f as from_html, q as mutable_source, e as store_get, r as reset, a_ as remove_textarea_child, g as comment, h as first_child, x as derived_safe_equal, o as onMount, j as onDestroy, C as deferred_template_effect, $ as $document, aR as next, b1 as invalidate_inner_signals } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { s as set_attribute, a as set_class, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { c as config, u as user, R as REXPRO_NAME, b as showSidebar, a as mobile } from "../chunks/BJ3rUC-5.js";
import { S as ScheduleDropdown, M as ModelDropdown, u as updateAutomationById, c as createAutomation, b as getAutomationItems, d as deleteAutomationById, t as toggleAutomationById, r as runAutomationById } from "../chunks/DYTlah25.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { S as Switch_1 } from "../chunks/l6D7S60E.js";
import { S as Sidebar } from "../chunks/WvwlXjr7.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { S as Select } from "../chunks/B-wfBoQj.js";
import { C as ChevronDown } from "../chunks/BAfBE24n.js";
import { C as Check } from "../chunks/CmzI29Zf.js";
import { C as CheckCircle } from "../chunks/DUvT6w05.js";
import { M as Minus } from "../chunks/DT4OldyN.js";
var root$2 = from_html(`<span class="shrink-0"><!></span>`);
var root_1$1 = from_html(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><input class="w-full text-lg font-medium bg-transparent outline-hidden font-primary placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"/> <button class="self-center shrink-0 ml-2"><!></button></div> <div class="px-5 pb-2"><div class="mb-1 text-xs text-gray-500"> </div> <textarea class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none min-h-[12rem]"></textarea></div> <div class="flex items-center justify-between px-4 pb-3.5 pt-1 gap-2"><div class="flex items-center gap-0.5 flex-wrap flex-1 min-w-0"><!> <!></div> <div class="flex items-center gap-2 shrink-0"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button> <button type="button"> <!></button></div></div></div>`);
function AutomationModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let automation = prop($$props, "automation", 8, null);
  let name = mutable_source("");
  let prompt = mutable_source("");
  let model_id = mutable_source("");
  let is_active = true;
  let loading = mutable_source(false);
  let scheduleDropdown = mutable_source();
  const submitHandler = async () => {
    var _a;
    if (!get(name).trim() || !get(prompt).trim() || !get(model_id).trim()) {
      toast.error($i18n().t("Name, prompt, and model are required"));
      return;
    }
    if (((_a = get(scheduleDropdown)) == null ? void 0 : _a.frequency) === "ONCE") {
      const scheduled = /* @__PURE__ */ new Date(`${get(scheduleDropdown).onceDate}T${get(scheduleDropdown).onceTime}`);
      if (scheduled <= /* @__PURE__ */ new Date()) {
        toast.error($i18n().t("Scheduled time must be in the future"));
        return;
      }
    }
    set(loading, true);
    try {
      const form = {
        name: get(name).trim(),
        data: {
          prompt: get(prompt).trim(),
          model_id: get(model_id).trim(),
          rrule: get(scheduleDropdown).buildRrule()
        },
        is_active
      };
      if (automation()) {
        await updateAutomationById(localStorage.token, automation().id, form);
        toast.success($i18n().t("Automation updated"));
        show(false);
        dispatch("save", { id: automation().id });
      } else {
        const created = await createAutomation(localStorage.token, form);
        toast.success($i18n().t("Automation created"));
        show(false);
        dispatch("save", { id: created == null ? void 0 : created.id });
      }
    } catch (e) {
      toast.error((e == null ? void 0 : e.detail) ?? `${e}` ?? "Failed to save");
    } finally {
      set(loading, false);
    }
  };
  const init$1 = async () => {
    if (automation()) {
      set(name, automation().name);
      set(prompt, automation().data.prompt);
      set(model_id, automation().data.model_id);
      is_active = automation().is_active;
      if (get(scheduleDropdown)) {
        get(scheduleDropdown).parseRrule(automation().data.rrule);
      }
    } else {
      set(name, "");
      set(prompt, "");
      set(model_id, "");
      is_active = true;
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
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
      var div = root_1$1();
      var div_1 = child(div);
      var input = child(div_1);
      remove_input_defaults(input);
      var button = sibling(input, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var text = child(div_3, true);
      reset(div_3);
      var textarea = sibling(div_3, 2);
      remove_textarea_child(textarea);
      set_attribute(textarea, "rows", 8);
      reset(div_2);
      var div_4 = sibling(div_2, 2);
      var div_5 = child(div_4);
      var node_1 = child(div_5);
      bind_this(ScheduleDropdown(node_1, { side: "top", align: "start", $$legacy: true }), ($$value) => set(scheduleDropdown, $$value), () => get(scheduleDropdown));
      var node_2 = sibling(node_1, 2);
      ModelDropdown(node_2, {
        side: "top",
        align: "start",
        get model_id() {
          return get(model_id);
        },
        set model_id($$value) {
          set(model_id, $$value);
        },
        $$legacy: true
      });
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button_1 = child(div_6);
      var text_1 = child(button_1, true);
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      var text_2 = child(button_2);
      var node_3 = sibling(text_2);
      {
        var consequent = ($$anchor3) => {
          var span = root$2();
          var node_4 = child(span);
          Spinner(node_4, {});
          reset(span);
          append($$anchor3, span);
        };
        if_block(node_3, ($$render) => {
          if (get(loading)) $$render(consequent);
        });
      }
      reset(button_2);
      reset(div_6);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5) => {
          set_attribute(input, "placeholder", $0);
          set_attribute(button, "aria-label", $1);
          set_text(text, $2);
          set_attribute(textarea, "placeholder", $3);
          set_text(text_1, $4);
          set_class(button_2, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${get(loading) ? "cursor-not-allowed" : ""}`);
          button_2.disabled = get(loading);
          set_text(text_2, `${$5 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Automation title"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Instructions"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter prompt here."))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => (deep_read_state(automation()), $i18n(), untrack(() => automation() ? $i18n().t("Save") : $i18n().t("Create")))
        ]
      );
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      event("click", button, () => show(false));
      bind_value(textarea, () => get(prompt), ($$value) => set(prompt, $$value));
      event("click", button_1, () => show(false));
      event("click", button_2, submitHandler);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg> <div class="flex items-center"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"></path></svg> <div class="flex items-center"> </div></button> <hr class="border-gray-50 dark:border-gray-850/30 my-1"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><!> <div class="flex items-center"> </div></button></div></div>`);
function AutomationMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let editHandler = prop($$props, "editHandler", 8);
  let runHandler = prop($$props, "runHandler", 8, () => {
  });
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
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
        var div = root$1();
        var div_1 = child(div);
        var button = child(div_1);
        var div_2 = sibling(child(button), 2);
        var text = child(div_2, true);
        reset(div_2);
        reset(button);
        var button_1 = sibling(button, 2);
        var div_3 = sibling(child(button_1), 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_1);
        var button_2 = sibling(button_1, 4);
        var node_1 = child(button_2);
        GarbageBin(node_1, {});
        var div_4 = sibling(node_1, 2);
        var text_2 = child(div_4, true);
        reset(div_4);
        reset(button_2);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1, $2) => {
            set_text(text, $0);
            set_text(text_1, $1);
            set_text(text_2, $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Edit"))),
            () => ($i18n(), untrack(() => $i18n().t("Run Now"))),
            () => ($i18n(), untrack(() => $i18n().t("Delete")))
          ]
        );
        event("click", button, () => {
          editHandler()();
          set(show, false);
        });
        event("click", button_1, () => {
          runHandler()();
          set(show, false);
        });
        event("click", button_2, () => {
          deleteHandler()();
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
var root = from_html(`<div class="text-sm text-gray-500 truncate"> <span class="font-medium"> </span>.</div>`);
var root_1 = from_html(`<button id="sidebar-toggle-button" class="cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition"><div class="self-center p-1.5"><!></div></button>`);
var root_2 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_3 = from_html(`<span class="inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden"> </span> <!>`, 1);
var root_4 = from_html(` <div><!></div>`, 1);
var root_5 = from_html(`<button class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition" type="button"><!></button>`);
var root_6 = from_html(`<div slot="content"><div class="w-[170px] rounded-xl p-1 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 dark:text-white shadow-sm"><button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> </button> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> </button></div></div>`);
var root_7 = from_html(`<div class="w-full h-full flex justify-center items-center my-16 mb-24"><!></div>`);
var root_8 = from_html(`<div class="w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class="text-3xl mb-3">⚡</div> <div class="text-lg font-medium mb-1"> </div> <div class="text-gray-500 text-center text-xs"> </div></div></div>`);
var root_9 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_10 = from_html(`<a class="flex space-x-4 text-left w-full px-3 py-2.5 dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl"><div class="flex-1"><div class="line-clamp-1 text-sm"> </div> <div class="text-xs text-gray-500 line-clamp-1"> </div></div> <div class="flex flex-row gap-0.5 self-center"><!> <button><!></button></div></a>`);
var root_11 = from_html(`<div class="flex justify-center mt-4 mb-2"><!></div>`);
var root_12 = from_html(`<div class="gap-2 grid my-2 px-3"></div> <!>`, 1);
var root_13 = from_html(`<div class="pb-1 px-3 md:px-[18px] pt-2"><div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><!> <div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><button class="px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center"><!> <div class="hidden md:block md:ml-1 text-xs"> </div></button></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1 items-center"><div class="self-center ml-1 mr-3"><!></div> <input class="w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent" maxlength="500"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div> <div class="flex-1"></div> <!></div> <!></div></div>`);
var root_14 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root_15 = from_html(`<!> <!> <div><div class="flex-1 max-h-full overflow-y-auto"><!></div></div>`, 1);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let automations = mutable_source(null);
  let total = mutable_source(null);
  let loading = mutable_source(false);
  let showCreateModal = mutable_source(false);
  let showDeleteConfirm = mutable_source(false);
  let deleteTarget = mutable_source(null);
  let query = mutable_source("");
  let statusFilter = mutable_source("all");
  let searchDebounceTimer = mutable_source();
  let page = mutable_source(1);
  const getAutomationList = async () => {
    if (!get(loaded)) return;
    set(loading, true);
    try {
      const res = await getAutomationItems(localStorage.token, get(query), get(statusFilter), get(page)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(automations, res.items);
        set(total, res.total);
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    } finally {
      set(loading, false);
    }
  };
  const toggleHandler = async (automation) => {
    const res = await toggleAutomationById(localStorage.token, automation.id).catch((err) => {
      toast.error(`${err}`);
      return null;
    });
    if (res) {
      set(automations, (get(automations) ?? []).map((a) => a.id === res.id ? res : a));
    }
  };
  const bulkToggleHandler = async (enable) => {
    const targets = (get(automations) ?? []).filter((a) => a.is_active !== enable);
    if (targets.length === 0) return;
    set(automations, (get(automations) ?? []).map((a) => targets.some((t) => t.id === a.id) ? { ...a, is_active: enable } : a));
    try {
      await Promise.all(targets.map((a) => toggleAutomationById(localStorage.token, a.id)));
    } catch (err) {
      toast.error(`${err}`);
      await getAutomationList();
    }
  };
  const runNowHandler = async (automation) => {
    const res = await runAutomationById(localStorage.token, automation.id).catch((err) => {
      toast.error(`${err}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Automation triggered"));
    }
  };
  const deleteHandler = async (automation) => {
    const res = await deleteAutomationById(localStorage.token, automation.id).catch((err) => {
      toast.error(`${err}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: automation.name }));
    }
    set(page, 1);
    getAutomationList();
  };
  const formatRRule = (rrule) => {
    if (rrule.includes("COUNT=1")) {
      const match = rrule.match(/DTSTART:(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})/);
      if (match) {
        const d = /* @__PURE__ */ new Date(`${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}`);
        return `Once · ${d.toLocaleDateString(void 0, { month: "short", day: "numeric" })} ${d.toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" })}`;
      }
      return "Once";
    }
    const parts = {};
    rrule.replace("RRULE:", "").split(";").forEach((p) => {
      const [k, v] = p.split("=");
      if (k && v) parts[k] = v;
    });
    const freq = parts.FREQ || "";
    const hour = parseInt(parts.BYHOUR || "0");
    const min = (parts.BYMINUTE || "0").padStart(2, "0");
    const iv = parseInt(parts.INTERVAL || "1");
    const ampm = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12;
    const time = `${h12}:${min} ${ampm}`;
    if (freq === "MINUTELY") return iv === 1 ? "Every minute" : `Every ${iv} minutes`;
    if (freq === "HOURLY") return iv === 1 ? "Hourly" : `Every ${iv} hours`;
    if (freq === "DAILY") return `Daily at ${time}`;
    if (freq === "WEEKLY") {
      const days = parts.BYDAY || "";
      return days ? `${days} at ${time}` : `Weekly at ${time}`;
    }
    if (freq === "MONTHLY") return `Monthly on the ${parts.BYMONTHDAY || "1"}${ordinal(parts.BYMONTHDAY || "1")} at ${time}`;
    return rrule;
  };
  const ordinal = (n) => {
    const num = parseInt(n);
    if (num % 10 === 1 && num !== 11) return "st";
    if (num % 10 === 2 && num !== 12) return "nd";
    if (num % 10 === 3 && num !== 13) return "rd";
    return "th";
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f;
    if (!((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_automations) || ((_c = $user()) == null ? void 0 : _c.role) !== "admin" && !(((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.automations) ?? false)) {
      goto("/");
      return;
    }
    set(loaded, true);
    await getAutomationList();
    return () => {
      clearTimeout(get(searchDebounceTimer));
    };
  });
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
  });
  legacy_pre_effect(() => (get(loaded), get(query), get(searchDebounceTimer)), () => {
    if (get(loaded) && get(query) !== void 0) {
      set(loading, true);
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          set(page, 1);
          getAutomationList();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => (get(loaded), get(page), get(statusFilter)), () => {
    if (get(loaded) && get(page) && get(statusFilter) !== void 0) {
      getAutomationList();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_15();
  head("19omgnu", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Automations")))]
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
      $$events: {
        confirm: () => {
          if (get(deleteTarget)) deleteHandler(get(deleteTarget));
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var div = root();
        var text = child(div);
        var span = sibling(text);
        var text_1 = child(span, true);
        reset(span);
        next();
        reset(div);
        template_effect(
          ($02) => {
            set_text(text, `${$02 ?? ""} `);
            set_text(text_1, (get(deleteTarget), untrack(() => {
              var _a;
              return (_a = get(deleteTarget)) == null ? void 0 : _a.name;
            })));
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
  var node_1 = sibling(node, 2);
  AutomationModal(node_1, {
    automation: null,
    get show() {
      return get(showCreateModal);
    },
    set show($$value) {
      set(showCreateModal, $$value);
    },
    $$events: {
      save: (e) => {
        var _a;
        getAutomationList();
        if ((_a = e.detail) == null ? void 0 : _a.id) {
          goto(`/automations/${e.detail.id}`);
        }
      }
    },
    $$legacy: true
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_2 = child(div_2);
  {
    var consequent_5 = ($$anchor2) => {
      var div_3 = root_13();
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var node_3 = child(div_6);
      {
        var consequent = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button = root_1();
                var div_7 = child(button);
                var node_4 = child(div_7);
                Sidebar(node_4, {});
                reset(div_7);
                reset(button);
                event("click", button, () => {
                  showSidebar.set(!$showSidebar());
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_3, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_8 = sibling(node_3, 2);
      var text_2 = child(div_8, true);
      reset(div_8);
      var div_9 = sibling(div_8, 2);
      var text_3 = child(div_9, true);
      reset(div_9);
      reset(div_6);
      var div_10 = sibling(div_6, 2);
      var button_1 = child(div_10);
      var node_5 = child(button_1);
      Plus(node_5, { className: "size-3", strokeWidth: "2.5" });
      var div_11 = sibling(node_5, 2);
      var text_4 = child(div_11, true);
      reset(div_11);
      reset(button_1);
      reset(div_10);
      reset(div_5);
      reset(div_4);
      var div_12 = sibling(div_4, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var div_15 = child(div_14);
      var node_6 = child(div_15);
      Search(node_6, { className: "size-3.5" });
      reset(div_15);
      var input = sibling(div_15, 2);
      remove_input_defaults(input);
      var node_7 = sibling(input, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_16 = root_2();
          var button_2 = child(div_16);
          var node_8 = child(button_2);
          XMark(node_8, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_16);
          template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_16);
        };
        if_block(node_7, ($$render) => {
          if (get(query)) $$render(consequent_1);
        });
      }
      reset(div_14);
      reset(div_13);
      var div_17 = sibling(div_13, 2);
      var div_18 = child(div_17);
      var node_9 = child(div_18);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: "all", label: $i18n().t("All") },
          { value: "active", label: $i18n().t("Active") },
          { value: "paused", label: $i18n().t("Paused") }
        ])));
        Select(node_9, {
          get items() {
            return get($0);
          },
          onChange: () => {
            set(page, 1);
          },
          triggerClass: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl",
          get value() {
            return get(statusFilter);
          },
          set value($$value) {
            set(statusFilter, $$value);
          },
          $$slots: {
            trigger: ($$anchor3, $$slotProps) => {
              const selectedLabel = derived_safe_equal(() => $$slotProps.selectedLabel);
              var fragment_2 = root_3();
              var span_1 = first_child(fragment_2);
              var text_5 = child(span_1, true);
              reset(span_1);
              var node_10 = sibling(span_1, 2);
              ChevronDown(node_10, { className: "size-3.5", strokeWidth: "2.5" });
              template_effect(() => set_text(text_5, get(selectedLabel)));
              append($$anchor3, fragment_2);
            },
            item: ($$anchor3, $$slotProps) => {
              const item = derived_safe_equal(() => $$slotProps.item);
              const selected = derived_safe_equal(() => $$slotProps.selected);
              var fragment_3 = root_4();
              var text_6 = first_child(fragment_3);
              var div_19 = sibling(text_6);
              var node_11 = child(div_19);
              Check(node_11, {});
              reset(div_19);
              template_effect(() => {
                set_text(text_6, `${(deep_read_state(get(item)), untrack(() => get(item).label)) ?? ""} `);
                set_class(div_19, 1, `ml-auto ${get(selected) ? "" : "invisible"}`);
              });
              append($$anchor3, fragment_3);
            }
          },
          $$legacy: true
        });
      }
      reset(div_18);
      var node_12 = sibling(div_18, 4);
      Dropdown(node_12, {
        align: "end",
        children: ($$anchor3, $$slotProps) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Actions"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_3 = root_5();
                var node_13 = child(button_3);
                EllipsisHorizontal(node_13, { className: "size-4" });
                reset(button_3);
                template_effect(($02) => set_attribute(button_3, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Actions")))]);
                append($$anchor4, button_3);
              },
              $$slots: { default: true }
            });
          }
        },
        $$slots: {
          default: true,
          content: ($$anchor3, $$slotProps) => {
            var div_20 = root_6();
            var div_21 = child(div_20);
            var button_4 = child(div_21);
            var node_14 = child(button_4);
            CheckCircle(node_14, { className: "size-4" });
            var text_7 = sibling(node_14);
            reset(button_4);
            var button_5 = sibling(button_4, 2);
            var node_15 = child(button_5);
            Minus(node_15, { className: "size-4" });
            var text_8 = sibling(node_15);
            reset(button_5);
            reset(div_21);
            reset(div_20);
            template_effect(
              ($0, $1) => {
                set_text(text_7, ` ${$0 ?? ""}`);
                set_text(text_8, ` ${$1 ?? ""}`);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Enable All"))),
                () => ($i18n(), untrack(() => $i18n().t("Disable All")))
              ]
            );
            event("click", button_4, () => bulkToggleHandler(true));
            event("click", button_5, () => bulkToggleHandler(false));
            append($$anchor3, div_20);
          }
        }
      });
      reset(div_17);
      var node_16 = sibling(div_17, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_22 = root_7();
          var node_17 = child(div_22);
          Spinner(node_17, { className: "size-5" });
          reset(div_22);
          append($$anchor3, div_22);
        };
        var consequent_3 = ($$anchor3) => {
          var div_23 = root_8();
          var div_24 = child(div_23);
          var div_25 = sibling(child(div_24), 2);
          var text_9 = child(div_25, true);
          reset(div_25);
          var div_26 = sibling(div_25, 2);
          var text_10 = child(div_26, true);
          reset(div_26);
          reset(div_24);
          reset(div_23);
          template_effect(
            ($0, $1) => {
              set_text(text_9, $0);
              set_text(text_10, $1);
            },
            [
              () => (get(query), $i18n(), untrack(() => get(query) ? $i18n().t("No results found") : $i18n().t("No automations found"))),
              () => (get(query), $i18n(), untrack(() => get(query) ? $i18n().t("Try adjusting your search or filter to find what you are looking for.") : $i18n().t("Create scheduled prompts that run automatically on a recurring basis.")))
            ]
          );
          append($$anchor3, div_23);
        };
        var alternate = ($$anchor3) => {
          var fragment_5 = root_12();
          var div_27 = first_child(fragment_5);
          each(div_27, 5, () => get(automations), (automation) => automation.id, ($$anchor4, automation, $$index) => {
            var a_1 = root_10();
            var div_28 = child(a_1);
            var div_29 = child(div_28);
            var text_11 = child(div_29, true);
            reset(div_29);
            var div_30 = sibling(div_29, 2);
            var text_12 = child(div_30, true);
            reset(div_30);
            reset(div_28);
            var div_31 = sibling(div_28, 2);
            var node_18 = child(div_31);
            AutomationMenu(node_18, {
              editHandler: () => {
                goto(`/automations/${get(automation).id}`);
              },
              runHandler: () => {
                runNowHandler(get(automation));
              },
              deleteHandler: () => {
                set(deleteTarget, get(automation));
                set(showDeleteConfirm, true);
              },
              children: ($$anchor5, $$slotProps) => {
                var button_6 = root_9();
                var node_19 = child(button_6);
                EllipsisHorizontal(node_19, { className: "size-5" });
                reset(button_6);
                append($$anchor5, button_6);
              },
              $$slots: { default: true }
            });
            var button_7 = sibling(node_18, 2);
            var node_20 = child(button_7);
            {
              let $0 = derived_safe_equal(() => (get(automation), $i18n(), untrack(() => get(automation).is_active ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
              Tooltip(node_20, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  Switch_1($$anchor5, {
                    get state() {
                      return get(automation).is_active;
                    },
                    set state($$value) {
                      get(automation).is_active = $$value, invalidate_inner_signals(() => get(automations));
                    },
                    $$events: {
                      change: () => {
                        toggleHandler(get(automation));
                      }
                    },
                    $$legacy: true
                  });
                },
                $$slots: { default: true }
              });
            }
            reset(button_7);
            reset(div_31);
            reset(a_1);
            template_effect(
              ($0) => {
                set_attribute(a_1, "href", (get(automation), untrack(() => `/automations/${get(automation).id}`)));
                set_text(text_11, (get(automation), untrack(() => get(automation).name)));
                set_text(text_12, $0);
              },
              [
                () => (get(automation), untrack(() => formatRRule(get(automation).data.rrule)))
              ]
            );
            event("click", button_7, (e) => {
              e.stopPropagation();
              e.preventDefault();
            });
            append($$anchor4, a_1);
          });
          reset(div_27);
          var node_21 = sibling(div_27, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var div_32 = root_11();
              var node_22 = child(div_32);
              Pagination_1(node_22, {
                get count() {
                  return get(total);
                },
                perPage: 30,
                get page() {
                  return get(page);
                },
                set page($$value) {
                  set(page, $$value);
                },
                $$legacy: true
              });
              reset(div_32);
              append($$anchor4, div_32);
            };
            if_block(node_21, ($$render) => {
              if (get(total) > 30) $$render(consequent_4);
            });
          }
          append($$anchor3, fragment_5);
        };
        if_block(node_16, ($$render) => {
          if (get(automations) === null || get(loading)) $$render(consequent_2);
          else if (get(automations), untrack(() => (get(automations) ?? []).length === 0)) $$render(consequent_3, 1);
          else $$render(alternate, -1);
        });
      }
      reset(div_12);
      reset(div_3);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text_2, $0);
          set_text(text_3, get(total) ?? "");
          set_text(text_4, $1);
          set_attribute(input, "aria-label", $2);
          set_attribute(input, "placeholder", $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Automations"))),
          () => ($i18n(), untrack(() => $i18n().t("New Automation"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Automations"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Automations")))
        ]
      );
      event("click", button_1, () => {
        set(showCreateModal, true);
      });
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      append($$anchor2, div_3);
    };
    var alternate_1 = ($$anchor2) => {
      var div_33 = root_14();
      var node_23 = child(div_33);
      Spinner(node_23, { className: "size-5" });
      reset(div_33);
      append($$anchor2, div_33);
    };
    if_block(node_2, ($$render) => {
      if (get(loaded)) $$render(consequent_5);
      else $$render(alternate_1, -1);
    });
  }
  reset(div_2);
  reset(div_1);
  template_effect(() => set_class(div_1, 1, `flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
