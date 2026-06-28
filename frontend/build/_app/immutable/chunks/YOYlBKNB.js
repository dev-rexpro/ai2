import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, h as first_child, w as set, k as get, z as sibling, c as child, r as reset, a as append, g as comment, t as template_effect, u as untrack, d as set_text, y as event, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, o as onMount, A as tick, l as legacy_pre_effect, m as deep_read_state, n as legacy_pre_effect_reset, aR as next } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { s as set_attribute, r as remove_input_defaults, a as set_class } from "./B9yCN616.js";
import { b as bind_value, a as bind_checked } from "./CgeA63xA.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { T as Textarea } from "./-oxnKdd2.js";
import { t as toast } from "./B4Bn1xMI.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { A as AccessControlModal, L as LockClosed } from "./BURXHJDK.js";
import { C as Clipboard } from "./2yhs8ruh.js";
import { C as Check } from "./CmzI29Zf.js";
import { u as user } from "./BJ3rUC-5.js";
import { d as slugify, m as copyToClipboard, r as formatDate } from "./X0cYWxFO.js";
import { S as Spinner } from "./gJqE84vs.js";
import { M as Modal } from "./tmhUPuyr.js";
import { X as XMark } from "./DAqPThR3.js";
import { a as getPromptTags, b as updatePromptAccessGrants, d as getPromptHistory, e as updatePromptMetadata, f as deletePromptHistoryVersion, s as setProductionPromptVersion } from "./DlsG6QUw.js";
import { d as dayjs2 } from "./BeGenu0j.js";
import { l as localizedFormat } from "./Ce8_hHpJ.js";
import { s as slot } from "./zXynQJya.js";
import { D as Dropdown } from "./8Pg1zo_Z.js";
import { C as ConfirmDialog } from "./Bt_XG8Gm.js";
import { G as GarbageBin } from "./eobci2cJ.js";
import { E as EllipsisHorizontal } from "./viyHXpU2.js";
import { B as Badge } from "./3f_PWqJi.js";
import { T as Tags } from "./ConglYm-.js";
var root$1 = from_html(`<button class="p-1 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-850 transition"><!></button>`);
var root_1$1 = from_html(`<div class="flex gap-2 items-center px-3 py-1.5 text-sm rounded-xl opacity-40 cursor-not-allowed"><!> <div class="flex items-center"> </div></div>`);
var root_2$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_3$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl p-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!></div></div>`);
var root_4$1 = from_html(`<!> <!>`, 1);
function PromptHistoryMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let isProduction = prop($$props, "isProduction", 8, false);
  let onDelete = prop($$props, "onDelete", 8);
  let onClose = prop($$props, "onClose", 8);
  let show = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  init();
  var fragment = root_4$1();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete Version"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this version? Child versions will be relinked to this version's parent."))));
    let $2 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      get confirmLabel() {
        return get($2);
      },
      onConfirm: () => {
        onDelete()();
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  Dropdown(node_1, {
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
            var node_2 = first_child(fragment_2);
            slot(node_2, $$props, "default", {}, ($$anchor4) => {
              var button = root$1();
              var node_3 = child(button);
              EllipsisHorizontal(node_3, { className: "size-5" });
              reset(button);
              template_effect(($02) => set_attribute(button, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("More Options")))]);
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
        var div = root_3$1();
        var div_1 = child(div);
        var node_4 = child(div_1);
        {
          var consequent = ($$anchor3) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Cannot delete the production version"))));
              Tooltip($$anchor3, {
                get content() {
                  return get($0);
                },
                placement: "top",
                children: ($$anchor4, $$slotProps2) => {
                  var div_2 = root_1$1();
                  var node_5 = child(div_2);
                  GarbageBin(node_5, {});
                  var div_3 = sibling(node_5, 2);
                  var text = child(div_3, true);
                  reset(div_3);
                  reset(div_2);
                  template_effect(($02) => set_text(text, $02), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                  append($$anchor4, div_2);
                },
                $$slots: { default: true }
              });
            }
          };
          var alternate = ($$anchor3) => {
            var button_1 = root_2$1();
            var node_6 = child(button_1);
            GarbageBin(node_6, {});
            var div_4 = sibling(node_6, 2);
            var text_1 = child(div_4, true);
            reset(div_4);
            reset(button_1);
            template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
            event("click", button_1, () => {
              set(show, false);
              set(showDeleteConfirmDialog, true);
            });
            append($$anchor3, button_1);
          };
          if_block(node_4, ($$render) => {
            if (isProduction()) $$render(consequent);
            else $$render(alternate, -1);
          });
        }
        reset(div_1);
        reset(div);
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<img class="size-3 rounded-full mr-0.5"/> <span class="truncate"> </span> <span>•</span>`, 1);
var root_1 = from_html(`<div class="flex"><button><div class="flex items-center gap-2 mb-1"><div class="text-xs text-gray-900 dark:text-white truncate"> </div> <!></div> <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"><!> <span class="shrink-0"> </span></div></button></div>`);
var root_2 = from_html(`<div class="flex justify-center py-2"><!></div>`);
var root_3 = from_html(`<div class="space-y-0 flex-1 overflow-y-auto"><!> <!></div>`);
var root_4 = from_html(`<div class="text-xs text-gray-400 text-center py-6 italic"> </div>`);
var root_5 = from_html(`<div class="flex flex-col h-full"><div class="flex items-center justify-between mb-2 shrink-0"><div class="text-gray-500 text-xs"> </div></div> <!></div>`);
var root_6 = from_html(`<div class="ml-1.5"><!></div>`);
var root_7 = from_html(`<div class="px-5 pt-4 pb-5"><div class="flex justify-between items-center mb-2"><div class="text-lg font-medium"> </div> <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"><!></button></div> <form><div class="my-2"><div class="flex w-full justify-between"><div class="text-gray-500 text-xs"> </div></div> <div class="mt-1"><!></div></div> <div class="my-2"><div class="text-gray-500 text-xs"> </div> <div class="mt-1"><input class="text-sm w-full bg-transparent outline-hidden"/></div></div> <div class="mt-4 flex items-center justify-between"><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="w-4 h-4 rounded border-gray-300 dark:border-gray-600"/> <span class="text-sm text-gray-700 dark:text-gray-300"> </span></label> <div><button type="submit"><div class="font-medium"> </div> <!></button></div></div></form></div>`);
var root_8 = from_html(`<button class="px-4 py-1 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition shadow-xs"> </button> <button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2.5 py-1 rounded-full flex gap-1.5 items-center text-sm border border-gray-100 dark:border-gray-800"><!> </button>`, 1);
var root_9 = from_html(`<span class="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"> </span>`);
var root_10 = from_html(`<button class="text-xs text-gray-500 font-mono px-2 py-1 rounded-lg cursor-pointer hover:underline transition"> </button>`);
var root_11 = from_html(`<span class="text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-800 px-1.5 rounded"> </span>`);
var root_12 = from_html(`<button class="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:underline transition"> </button>`);
var root_13 = from_html(`<div class="flex items-center gap-2"><!> <!></div>`);
var root_14 = from_html(`<div class="flex flex-col w-full h-full max-h-[100dvh]"><div class="flex items-start justify-between gap-4 shrink-0"><div class="min-w-0 flex-1"><input class="text-2xl w-full bg-transparent outline-hidden"/> <div class="flex items-center gap-0.5 text-sm text-gray-500 w-full flex-1"><span>/</span> <input class="bg-transparent outline-hidden"/></div></div> <div><div class="flex items-center gap-2 shrink-0 justify-end"><!></div> <div class="mt-1.5"><!></div></div></div> <div class="mb-2 flex justify-between items-center gap-2"><div class="flex-1 min-w-0"><!></div></div> <div class="flex flex-col md:flex-row gap-4 flex-1 overflow-hidden pb-6"><div class="hidden md:flex md:flex-col w-72 shrink-0 overflow-hidden"><div class="flex-1 overflow-y-auto"><!></div></div> <div class="flex-1 flex flex-col min-h-0 overflow-hidden"><div class="flex items-center justify-between mb-1 shrink-0"><div class="flex items-center gap-2"><div class="text-gray-500 text-xs"> </div> <!></div> <!></div> <div class="relative flex-1 min-h-0"><div class="absolute top-2 right-2 z-10"><button class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"><!></button></div> <div class="bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3 border border-gray-100/50 dark:border-gray-850/50 h-full overflow-y-auto"><pre class="text-xs whitespace-pre-wrap font-mono pr-8"> </pre></div></div></div></div></div>`);
var root_15 = from_html(`<div class="flex flex-col w-full"><div class="flex items-center"><input class="text-2xl w-full bg-transparent outline-hidden" required=""/> <div class="self-center shrink-0"><button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <div class="flex gap-0.5 items-center text-xs text-gray-500"><div>/</div> <input class="w-full bg-transparent outline-hidden" required=""/></div> <div class="mt-1"><!></div></div>`);
var root_16 = from_html(`<div class="w-full max-h-full flex justify-center"><form class="flex flex-col w-full mb-10"><div class="mb-2"><!></div> <div class="my-2"><div class="text-gray-500 text-xs"> </div> <div class="mt-1"><!> <div class="text-xs text-gray-400 dark:text-gray-500"> <span class="font-medium text-gray-600 dark:text-gray-300"> </span> </div></div></div> <div class="my-4 flex justify-end pb-20"><button class="text-sm w-full lg:w-fit px-4 py-2 transition rounded-xl bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black flex w-full justify-center" type="submit"><div class="font-medium"> </div> <!></button></div></form></div>`);
var root_17 = from_html(`<!> <!> <!>`, 1);
function PromptEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const historySection = ($$anchor2) => {
    var div = root_5();
    var div_1 = child(div);
    var div_2 = child(div_1);
    var text = child(div_2, true);
    reset(div_2);
    reset(div_1);
    var node = sibling(div_1, 2);
    {
      var consequent_3 = ($$anchor3) => {
        var div_3 = root_3();
        var node_1 = child(div_3);
        each(node_1, 1, () => get(history), index, ($$anchor4, entry) => {
          var div_4 = root_1();
          var button = child(div_4);
          var div_5 = child(button);
          var div_6 = child(div_5);
          var text_1 = child(div_6, true);
          reset(div_6);
          var node_2 = sibling(div_6, 2);
          {
            var consequent = ($$anchor5) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Live"))));
                Badge($$anchor5, {
                  type: "success",
                  get content() {
                    return get($0);
                  }
                });
              }
            };
            if_block(node_2, ($$render) => {
              if (get(entry), deep_read_state(prompt()), untrack(() => {
                var _a;
                return get(entry).id === ((_a = prompt()) == null ? void 0 : _a.version_id);
              })) $$render(consequent);
            });
          }
          reset(div_5);
          var div_7 = sibling(div_5, 2);
          var node_3 = child(div_7);
          {
            var consequent_1 = ($$anchor5) => {
              var fragment_1 = root();
              var img = first_child(fragment_1);
              var span = sibling(img, 2);
              var text_2 = child(span, true);
              reset(span);
              next(2);
              template_effect(() => {
                set_attribute(img, "src", (get(entry), untrack(() => `/api/v1/users/${get(entry).user.id}/profile/image`)));
                set_attribute(img, "alt", (get(entry), untrack(() => get(entry).user.name)));
                set_text(text_2, (get(entry), untrack(() => get(entry).user.name)));
              });
              event("error", img, (e) => e.target.src = "/user.png");
              append($$anchor5, fragment_1);
            };
            if_block(node_3, ($$render) => {
              if (get(entry), untrack(() => get(entry).user)) $$render(consequent_1);
            });
          }
          var span_1 = sibling(node_3, 2);
          var text_3 = child(span_1, true);
          reset(span_1);
          reset(div_7);
          reset(button);
          reset(div_4);
          template_effect(
            ($0, $1) => {
              set_class(button, 1, `flex-1 text-left px-3.5 py-2 mb-1 rounded-2xl transition group
								${(get(selectedHistoryEntry), get(entry), untrack(() => {
                var _a;
                return ((_a = get(selectedHistoryEntry)) == null ? void 0 : _a.id) === get(entry).id ? "bg-gray-100/50 dark:bg-gray-850/50" : "hover:bg-gray-100/50 dark:hover:bg-gray-850/50";
              })) ?? ""}`);
              set_text(text_1, $0);
              set_text(text_3, $1);
            },
            [
              () => (get(entry), $i18n(), untrack(() => get(entry).commit_message || $i18n().t("Update"))),
              () => (get(entry), untrack(() => renderDate(get(entry).created_at)))
            ]
          );
          event("click", button, () => set(selectedHistoryEntry, get(entry)));
          append($$anchor4, div_4);
        });
        var node_4 = sibling(node_1, 2);
        {
          var consequent_2 = ($$anchor4) => {
            var div_8 = root_2();
            var node_5 = child(div_8);
            Spinner(node_5, { className: "size-3" });
            reset(div_8);
            append($$anchor4, div_8);
          };
          if_block(node_4, ($$render) => {
            if (get(historyLoading)) $$render(consequent_2);
          });
        }
        reset(div_3);
        event("scroll", div_3, handleHistoryScroll);
        append($$anchor3, div_3);
      };
      var consequent_4 = ($$anchor3) => {
        var div_9 = root_4();
        var text_4 = child(div_9, true);
        reset(div_9);
        template_effect(($0) => set_text(text_4, $0), [
          () => ($i18n(), untrack(() => $i18n().t("No history available")))
        ]);
        append($$anchor3, div_9);
      };
      if_block(node, ($$render) => {
        if (get(history), untrack(() => get(history).length > 0)) $$render(consequent_3);
        else if (!get(historyLoading)) $$render(consequent_4, 1);
      });
    }
    reset(div);
    template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("History")))]);
    append($$anchor2, div);
  };
  dayjs2.extend(localizedFormat);
  let onSubmit = prop($$props, "onSubmit", 8);
  let edit = prop($$props, "edit", 8, false);
  let prompt = prop($$props, "prompt", 12, null);
  prop($$props, "clone", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let showEditModal = mutable_source(false);
  let name = mutable_source("");
  let command = mutable_source("");
  let content = mutable_source("");
  let tags = mutable_source([]);
  let commitMessage = mutable_source("");
  let isProduction = mutable_source(true);
  let accessGrants = mutable_source([]);
  let showAccessControlModal = mutable_source(false);
  let hasManualEdit = mutable_source(false);
  let history = mutable_source([]);
  let historyLoading = mutable_source(false);
  let selectedHistoryEntry = mutable_source(null);
  let historyPage = 0;
  let historyHasMore = true;
  let contentCopied = mutable_source(false);
  let originalName = "";
  let originalCommand = "";
  let originalTags = [];
  let debounceTimer = null;
  let suggestionTags = mutable_source([]);
  function handleCommandInput(e) {
    set(hasManualEdit, true);
  }
  const submitHandler = async () => {
    var _a;
    if (disabled()) {
      toast.error($i18n().t("You do not have permission to edit this prompt."));
      return;
    }
    set(loading, true);
    if (validateCommandString(get(command))) {
      try {
        await onSubmit()({
          id: (_a = prompt()) == null ? void 0 : _a.id,
          name: get(name),
          command: get(command),
          content: get(content),
          tags: get(tags).map((tag) => tag.name),
          access_grants: get(accessGrants),
          commit_message: get(commitMessage) || void 0,
          is_production: get(isProduction)
        });
        set(showEditModal, false);
        set(commitMessage, "");
        set(isProduction, true);
        await loadHistory(true);
        if (get(history).length > 0) {
          set(selectedHistoryEntry, get(history)[0]);
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    } else {
      toast.error($i18n().t("Only alphanumeric characters and hyphens are allowed in the command string."));
    }
    set(loading, false);
  };
  const validateCommandString = (inputString) => {
    const regex = /^[a-zA-Z0-9-_]+$/;
    return regex.test(inputString);
  };
  const loadHistory = async (reset2 = false) => {
    var _a;
    if (!((_a = prompt()) == null ? void 0 : _a.id) || !edit()) return;
    if (get(historyLoading)) return;
    if (!reset2 && !historyHasMore) return;
    set(historyLoading, true);
    if (reset2) {
      historyPage = 0;
      historyHasMore = true;
    }
    try {
      const newEntries = await getPromptHistory(localStorage.token, prompt().id, historyPage);
      if (reset2) {
        set(history, newEntries);
      } else {
        set(history, [...get(history), ...newEntries]);
      }
      historyHasMore = newEntries.length > 0;
      historyPage = historyPage + 1;
    } catch (error) {
      /* @__PURE__ */ console.error("Failed to load history:", error);
      if (reset2) {
        set(history, []);
      }
    }
    set(historyLoading, false);
  };
  const handleHistoryScroll = (e) => {
    const target = e.target;
    const nearBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    if (nearBottom && historyHasMore && !get(historyLoading)) {
      loadHistory(false);
    }
  };
  const copyContent = async () => {
    var _a, _b;
    const textToCopy = ((_b = (_a = get(selectedHistoryEntry)) == null ? void 0 : _a.snapshot) == null ? void 0 : _b.content) || get(content);
    const success = await copyToClipboard(textToCopy);
    if (success) {
      set(contentCopied, true);
      setTimeout(
        () => {
          set(contentCopied, false);
        },
        2e3
      );
    }
  };
  const setAsProduction = async (historyEntry) => {
    if (disabled()) {
      toast.error($i18n().t("You do not have permission to edit this prompt."));
      return;
    }
    try {
      await setProductionPromptVersion(localStorage.token, prompt().id, historyEntry.id);
      prompt({ ...prompt(), version_id: historyEntry.id });
      toast.success($i18n().t("Production version updated"));
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  const handleDeleteHistory = async (historyId) => {
    var _a;
    if (disabled()) return;
    try {
      await deletePromptHistoryVersion(localStorage.token, prompt().id, historyId);
      toast.success($i18n().t("Version deleted"));
      await loadHistory(true);
      if (((_a = get(selectedHistoryEntry)) == null ? void 0 : _a.id) === historyId) {
        set(selectedHistoryEntry, get(history).length > 0 ? get(history)[0] : null);
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  const renderDate = (timestamp) => {
    const dateVal = timestamp * 1e3;
    return $i18n().t(formatDate(dateVal), {
      LOCALIZED_TIME: dayjs2(dateVal).format("LT"),
      LOCALIZED_DATE: dayjs2(dateVal).format("L")
    });
  };
  const debouncedSaveMetadata = () => {
    if (disabled() || !edit()) return;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(
      async () => {
        var _a;
        if (!validateCommandString(get(command))) {
          toast.error($i18n().t("Only alphanumeric characters and hyphens are allowed in the command string."));
          set(command, originalCommand);
          return;
        }
        try {
          await updatePromptMetadata(localStorage.token, (_a = prompt()) == null ? void 0 : _a.id, get(name), get(command), get(tags).map((tag) => tag.name));
          originalName = get(name);
          originalCommand = get(command);
          originalTags = get(tags);
          toast.success($i18n().t("Saved"));
        } catch (error) {
          toast.error(`${error}`);
          set(name, originalName);
          set(command, originalCommand);
          set(tags, originalTags);
        }
      },
      500
    );
  };
  onMount(async () => {
    var _a, _b;
    if (prompt()) {
      set(name, prompt().name || "");
      await tick();
      set(command, prompt().command.at(0) === "/" ? prompt().command.slice(1) : prompt().command);
      set(content, prompt().content);
      set(tags, (prompt().tags || []).map((tag) => ({ name: tag })));
      set(accessGrants, ((_a = prompt()) == null ? void 0 : _a.access_grants) === void 0 ? [] : (_b = prompt()) == null ? void 0 : _b.access_grants);
      originalName = get(name);
      originalCommand = get(command);
      originalTags = get(tags);
      if (edit()) {
        await loadHistory();
        if (prompt().version_id && get(history).length > 0) {
          set(selectedHistoryEntry, get(history).find((h) => h.id === prompt().version_id) || get(history)[0]);
        } else if (get(history).length > 0) {
          set(selectedHistoryEntry, get(history)[0]);
        }
      }
    }
    const res = await getPromptTags(localStorage.token);
    if (res) {
      set(suggestionTags, res.map((tag) => ({ name: tag })));
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(edit()), get(hasManualEdit), get(name), slugify),
    () => {
      if (!edit() && !get(hasManualEdit)) {
        set(command, get(name) !== "" ? slugify(get(name)) : "");
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment_2 = root_17();
  var node_6 = first_child(fragment_2);
  {
    let $0 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.prompts) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $1 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_prompts) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $2 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return (((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.access_grants) == null ? void 0 : _c.allow_users) ?? true) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    AccessControlModal(node_6, {
      accessRoles: ["read", "write"],
      get share() {
        return get($0);
      },
      get sharePublic() {
        return get($1);
      },
      get shareUsers() {
        return get($2);
      },
      onChange: async () => {
        var _a;
        if (edit() && ((_a = prompt()) == null ? void 0 : _a.id)) {
          try {
            await updatePromptAccessGrants(localStorage.token, prompt().id, get(accessGrants));
            toast.success($i18n().t("Saved"));
          } catch (error) {
            toast.error(`${error}`);
          }
        }
      },
      get show() {
        return get(showAccessControlModal);
      },
      set show($$value) {
        set(showAccessControlModal, $$value);
      },
      get accessGrants() {
        return get(accessGrants);
      },
      set accessGrants($$value) {
        set(accessGrants, $$value);
      },
      $$legacy: true
    });
  }
  var node_7 = sibling(node_6, 2);
  Modal(node_7, {
    size: "lg",
    get show() {
      return get(showEditModal);
    },
    set show($$value) {
      set(showEditModal, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div_10 = root_7();
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var text_5 = child(div_12, true);
      reset(div_12);
      var button_1 = sibling(div_12, 2);
      var node_8 = child(button_1);
      XMark(node_8, { className: "size-5" });
      reset(button_1);
      reset(div_11);
      var form = sibling(div_11, 2);
      var div_13 = child(form);
      var div_14 = child(div_13);
      var div_15 = child(div_14);
      var text_6 = child(div_15, true);
      reset(div_15);
      reset(div_14);
      var div_16 = sibling(div_14, 2);
      var node_9 = child(div_16);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write a summary in 50 words that summarizes {{topic}}."))));
        let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Prompt Content"))));
        Textarea(node_9, {
          className: "text-sm w-full bg-transparent outline-hidden overflow-y-hidden resize-none",
          get placeholder() {
            return get($0);
          },
          get "aria-label"() {
            return get($1);
          },
          rows: 6,
          required: true,
          get value() {
            return get(content);
          },
          set value($$value) {
            set(content, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_16);
      reset(div_13);
      var div_17 = sibling(div_13, 2);
      var div_18 = child(div_17);
      var text_7 = child(div_18);
      reset(div_18);
      var div_19 = sibling(div_18, 2);
      var input = child(div_19);
      remove_input_defaults(input);
      reset(div_19);
      reset(div_17);
      var div_20 = sibling(div_17, 2);
      var label = child(div_20);
      var input_1 = child(label);
      remove_input_defaults(input_1);
      var span_2 = sibling(input_1, 2);
      var text_8 = child(span_2, true);
      reset(span_2);
      reset(label);
      var div_21 = sibling(label, 2);
      var button_2 = child(div_21);
      var div_22 = child(button_2);
      var text_9 = child(div_22, true);
      reset(div_22);
      var node_10 = sibling(div_22, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_23 = root_6();
          var node_11 = child(div_23);
          Spinner(node_11, {});
          reset(div_23);
          append($$anchor3, div_23);
        };
        if_block(node_10, ($$render) => {
          if (get(loading)) $$render(consequent_5);
        });
      }
      reset(button_2);
      reset(div_21);
      reset(div_20);
      reset(form);
      reset(div_10);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
          set_text(text_5, $0);
          set_attribute(button_1, "aria-label", $1);
          set_text(text_6, $2);
          set_text(text_7, `${$3 ?? ""} (${$4 ?? ""})`);
          set_attribute(input, "placeholder", $5);
          set_attribute(input, "aria-label", $6);
          set_text(text_8, $7);
          set_class(button_2, 1, `text-sm px-4 py-2 transition rounded-full ${get(loading) ? "cursor-not-allowed bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400" : "bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black"} flex justify-center`);
          button_2.disabled = get(loading);
          set_text(text_9, $8);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Edit Prompt"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Prompt Content"))),
          () => ($i18n(), untrack(() => $i18n().t("Commit Message"))),
          () => ($i18n(), untrack(() => $i18n().t("optional"))),
          () => ($i18n(), untrack(() => $i18n().t("Describe what changed..."))),
          () => ($i18n(), untrack(() => $i18n().t("Commit Message"))),
          () => ($i18n(), untrack(() => $i18n().t("Set as Production"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button_1, () => set(showEditModal, false));
      bind_value(input, () => get(commitMessage), ($$value) => set(commitMessage, $$value));
      bind_checked(input_1, () => get(isProduction), ($$value) => set(isProduction, $$value));
      event("submit", form, preventDefault(submitHandler));
      append($$anchor2, div_10);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_12 = sibling(node_7, 2);
  {
    var consequent_11 = ($$anchor2) => {
      var div_24 = root_14();
      var div_25 = child(div_24);
      var div_26 = child(div_25);
      var input_2 = child(div_26);
      remove_input_defaults(input_2);
      var div_27 = sibling(input_2, 2);
      var input_3 = sibling(child(div_27), 2);
      remove_input_defaults(input_3);
      reset(div_27);
      reset(div_26);
      var div_28 = sibling(div_26, 2);
      var div_29 = child(div_28);
      var node_13 = child(div_29);
      {
        var consequent_6 = ($$anchor3) => {
          var fragment_3 = root_8();
          var button_3 = first_child(fragment_3);
          var text_10 = child(button_3, true);
          reset(button_3);
          var button_4 = sibling(button_3, 2);
          var node_14 = child(button_4);
          LockClosed(node_14, { strokeWidth: "2.5", className: "size-3.5" });
          var text_11 = sibling(node_14);
          reset(button_4);
          template_effect(
            ($0, $1) => {
              set_text(text_10, $0);
              set_text(text_11, ` ${$1 ?? ""}`);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Edit"))),
              () => ($i18n(), untrack(() => $i18n().t("Access")))
            ]
          );
          event("click", button_3, () => set(showEditModal, true));
          event("click", button_4, () => set(showAccessControlModal, true));
          append($$anchor3, fragment_3);
        };
        var alternate = ($$anchor3) => {
          var span_3 = root_9();
          var text_12 = child(span_3, true);
          reset(span_3);
          template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Read Only")))]);
          append($$anchor3, span_3);
        };
        if_block(node_13, ($$render) => {
          if (!disabled()) $$render(consequent_6);
          else $$render(alternate, -1);
        });
      }
      reset(div_29);
      var div_30 = sibling(div_29, 2);
      var node_15 = child(div_30);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Click to copy ID"))));
        Tooltip(node_15, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_5 = root_10();
            var text_13 = child(button_5, true);
            reset(button_5);
            template_effect(() => set_text(text_13, (deep_read_state(prompt()), untrack(() => prompt().id))));
            event("click", button_5, () => {
              copyToClipboard(prompt().id);
              toast.success($i18n().t("ID copied to clipboard"));
            });
            append($$anchor3, button_5);
          },
          $$slots: { default: true }
        });
      }
      reset(div_30);
      reset(div_28);
      reset(div_25);
      var div_31 = sibling(div_25, 2);
      var div_32 = child(div_31);
      var node_16 = child(div_32);
      Tags(node_16, {
        get tags() {
          return get(tags);
        },
        get disabled() {
          return disabled();
        },
        get suggestionTags() {
          return get(suggestionTags);
        },
        $$events: {
          add: (e) => {
            set(tags, [...get(tags), { name: e.detail }]);
            debouncedSaveMetadata();
          },
          delete: (e) => {
            set(tags, get(tags).filter((tag) => tag.name !== e.detail));
            debouncedSaveMetadata();
          }
        }
      });
      reset(div_32);
      reset(div_31);
      var div_33 = sibling(div_31, 2);
      var div_34 = child(div_33);
      var div_35 = child(div_34);
      var node_17 = child(div_35);
      historySection(node_17);
      reset(div_35);
      reset(div_34);
      var div_36 = sibling(div_34, 2);
      var div_37 = child(div_36);
      var div_38 = child(div_37);
      var div_39 = child(div_38);
      var text_14 = child(div_39, true);
      reset(div_39);
      var node_18 = sibling(div_39, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var span_4 = root_11();
          var text_15 = child(span_4, true);
          reset(span_4);
          template_effect(($0) => set_text(text_15, $0), [
            () => (get(selectedHistoryEntry), untrack(() => get(selectedHistoryEntry).id.slice(0, 7)))
          ]);
          append($$anchor3, span_4);
        };
        if_block(node_18, ($$render) => {
          if (get(selectedHistoryEntry)) $$render(consequent_7);
        });
      }
      reset(div_38);
      var node_19 = sibling(div_38, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_40 = root_13();
          var node_20 = child(div_40);
          {
            var consequent_8 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Live"))));
                Badge($$anchor4, {
                  type: "success",
                  get content() {
                    return get($0);
                  }
                });
              }
            };
            var alternate_1 = ($$anchor4) => {
              var button_6 = root_12();
              var text_16 = child(button_6, true);
              reset(button_6);
              template_effect(($0) => set_text(text_16, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Set as Production")))
              ]);
              event("click", button_6, () => setAsProduction(get(selectedHistoryEntry)));
              append($$anchor4, button_6);
            };
            if_block(node_20, ($$render) => {
              if (get(selectedHistoryEntry), deep_read_state(prompt()), untrack(() => {
                var _a;
                return get(selectedHistoryEntry).id === ((_a = prompt()) == null ? void 0 : _a.version_id);
              })) $$render(consequent_8);
              else $$render(alternate_1, -1);
            });
          }
          var node_21 = sibling(node_20, 2);
          {
            let $0 = derived_safe_equal(() => (get(selectedHistoryEntry), deep_read_state(prompt()), untrack(() => {
              var _a;
              return get(selectedHistoryEntry).id === ((_a = prompt()) == null ? void 0 : _a.version_id);
            })));
            PromptHistoryMenu(node_21, {
              get isProduction() {
                return get($0);
              },
              onDelete: () => handleDeleteHistory(get(selectedHistoryEntry).id),
              onClose: () => {
              }
            });
          }
          reset(div_40);
          append($$anchor3, div_40);
        };
        if_block(node_19, ($$render) => {
          if (get(selectedHistoryEntry) && !disabled()) $$render(consequent_9);
        });
      }
      reset(div_37);
      var div_41 = sibling(div_37, 2);
      var div_42 = child(div_41);
      var button_7 = child(div_42);
      var node_22 = child(button_7);
      {
        var consequent_10 = ($$anchor3) => {
          Check($$anchor3, { className: "size-4 text-green-500" });
        };
        var alternate_2 = ($$anchor3) => {
          Clipboard($$anchor3, { className: "size-4 text-gray-500" });
        };
        if_block(node_22, ($$render) => {
          if (get(contentCopied)) $$render(consequent_10);
          else $$render(alternate_2, -1);
        });
      }
      reset(button_7);
      reset(div_42);
      var div_43 = sibling(div_42, 2);
      var pre = child(div_43);
      var text_17 = child(pre, true);
      reset(pre);
      reset(div_43);
      reset(div_41);
      reset(div_36);
      reset(div_33);
      reset(div_24);
      template_effect(
        ($0, $1, $2, $3) => {
          set_attribute(input_2, "placeholder", $0);
          input_2.disabled = disabled();
          set_attribute(input_3, "placeholder", $1);
          input_3.disabled = disabled();
          set_text(text_14, $2);
          set_attribute(button_7, "aria-label", $3);
          set_text(text_17, (get(selectedHistoryEntry), get(content), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get(selectedHistoryEntry)) == null ? void 0 : _a.snapshot) == null ? void 0 : _b.content) || get(content);
          })));
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Prompt Name"))),
          () => ($i18n(), untrack(() => $i18n().t("command"))),
          () => ($i18n(), untrack(() => $i18n().t("Prompt Content"))),
          () => ($i18n(), untrack(() => $i18n().t("Copy content")))
        ]
      );
      bind_value(input_2, () => get(name), ($$value) => set(name, $$value));
      event("input", input_2, debouncedSaveMetadata);
      bind_value(input_3, () => get(command), ($$value) => set(command, $$value));
      event("input", input_3, debouncedSaveMetadata);
      event("click", button_7, copyContent);
      append($$anchor2, div_24);
    };
    var alternate_3 = ($$anchor2) => {
      var div_44 = root_16();
      var form_1 = child(div_44);
      var div_45 = child(form_1);
      var node_23 = child(div_45);
      {
        let $0 = derived_safe_equal(() => ($i18n(), get(command), untrack(() => `${$i18n().t("Only alphanumeric characters and hyphens are allowed")} - ${$i18n().t('Activate this command by typing "/{{COMMAND}}" to chat input.', { COMMAND: get(command) })}`)));
        Tooltip(node_23, {
          get content() {
            return get($0);
          },
          placement: "bottom-start",
          children: ($$anchor3, $$slotProps) => {
            var div_46 = root_15();
            var div_47 = child(div_46);
            var input_4 = child(div_47);
            remove_input_defaults(input_4);
            var div_48 = sibling(input_4, 2);
            var button_8 = child(div_48);
            var node_24 = child(button_8);
            LockClosed(node_24, { strokeWidth: "2.5", className: "size-3.5" });
            var div_49 = sibling(node_24, 2);
            var text_18 = child(div_49, true);
            reset(div_49);
            reset(button_8);
            reset(div_48);
            reset(div_47);
            var div_50 = sibling(div_47, 2);
            var input_5 = sibling(child(div_50), 2);
            remove_input_defaults(input_5);
            reset(div_50);
            var div_51 = sibling(div_50, 2);
            var node_25 = child(div_51);
            Tags(node_25, {
              get tags() {
                return get(tags);
              },
              get suggestionTags() {
                return get(suggestionTags);
              },
              $$events: {
                add: (e) => {
                  set(tags, [...get(tags), { name: e.detail }]);
                },
                delete: (e) => {
                  set(tags, get(tags).filter((tag) => tag.name !== e.detail));
                }
              }
            });
            reset(div_51);
            reset(div_46);
            template_effect(
              ($02, $1, $2) => {
                set_attribute(input_4, "placeholder", $02);
                set_text(text_18, $1);
                set_attribute(input_5, "placeholder", $2);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Name"))),
                () => ($i18n(), untrack(() => $i18n().t("Access"))),
                () => ($i18n(), untrack(() => $i18n().t("Command")))
              ]
            );
            bind_value(input_4, () => get(name), ($$value) => set(name, $$value));
            event("click", button_8, () => set(showAccessControlModal, true));
            bind_value(input_5, () => get(command), ($$value) => set(command, $$value));
            event("input", input_5, handleCommandInput);
            append($$anchor3, div_46);
          },
          $$slots: { default: true }
        });
      }
      reset(div_45);
      var div_52 = sibling(div_45, 2);
      var div_53 = child(div_52);
      var text_19 = child(div_53, true);
      reset(div_53);
      var div_54 = sibling(div_53, 2);
      var node_26 = child(div_54);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write a summary in 50 words that summarizes {{topic}}."))));
        Textarea(node_26, {
          className: "text-sm w-full bg-transparent outline-hidden overflow-y-hidden resize-none",
          get placeholder() {
            return get($0);
          },
          rows: 6,
          required: true,
          get value() {
            return get(content);
          },
          set value($$value) {
            set(content, $$value);
          },
          $$legacy: true
        });
      }
      var div_55 = sibling(node_26, 2);
      var text_20 = child(div_55);
      var span_5 = sibling(text_20);
      var text_21 = child(span_5);
      reset(span_5);
      var text_22 = sibling(span_5);
      reset(div_55);
      reset(div_54);
      reset(div_52);
      var div_56 = sibling(div_52, 2);
      var button_9 = child(div_56);
      var div_57 = child(button_9);
      var text_23 = child(div_57, true);
      reset(div_57);
      var node_27 = sibling(div_57, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_58 = root_6();
          var node_28 = child(div_58);
          Spinner(node_28, {});
          reset(div_58);
          append($$anchor3, div_58);
        };
        if_block(node_27, ($$render) => {
          if (get(loading)) $$render(consequent_12);
        });
      }
      reset(button_9);
      reset(div_56);
      reset(form_1);
      reset(div_44);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text_19, $0);
          set_text(text_20, `ⓘ ${$1 ?? ""} `);
          set_text(text_21, `{{${$2 ?? ""}}}`);
          set_text(text_22, ` ${$3 ?? ""}`);
          button_9.disabled = get(loading);
          set_text(text_23, $4);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Prompt Content"))),
          () => ($i18n(), untrack(() => $i18n().t("Use"))),
          () => ($i18n(), untrack(() => $i18n().t("variable"))),
          () => ($i18n(), untrack(() => $i18n().t("for placeholders"))),
          () => ($i18n(), untrack(() => $i18n().t("Save & Create")))
        ]
      );
      event("submit", form_1, preventDefault(submitHandler));
      append($$anchor2, div_44);
    };
    if_block(node_12, ($$render) => {
      if (edit()) $$render(consequent_11);
      else $$render(alternate_3, -1);
    });
  }
  append($$anchor, fragment_2);
  pop();
  $$cleanup();
}
export {
  PromptEditor as P
};
