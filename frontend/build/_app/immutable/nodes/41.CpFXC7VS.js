import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, c as child, u as untrack, z as sibling, r as reset, t as template_effect, d as set_text, y as event, a as append, g as comment, h as first_child, k as get, w as set, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, o as onMount, j as onDestroy, l as legacy_pre_effect, n as legacy_pre_effect_reset, C as deferred_template_effect, $ as $document, aR as next, A as tick, aV as mutate, m as deep_read_state, b1 as invalidate_inner_signals } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { r as remove_input_defaults, s as set_attribute } from "../chunks/B9yCN616.js";
import { c as bind_files, b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as preventDefault, s as stopPropagation } from "../chunks/CGgk3ROl.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { b as bubble_event } from "../chunks/C46Aw6eG.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { c as config, u as user, R as REXPRO_NAME } from "../chunks/BJ3rUC-5.js";
import { h as getPromptItems, a as getPromptTags, c as createNewPrompt, i as deletePromptById, t as togglePromptById } from "../chunks/DlsG6QUw.js";
import { l as capitalizeFirstLetter, m as copyToClipboard, d as slugify } from "../chunks/X0cYWxFO.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { S as Share } from "../chunks/BOF8D99c.js";
import { D as DocumentDuplicate } from "../chunks/DjWyMeMm.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { C as Clipboard } from "../chunks/2yhs8ruh.js";
import { C as Check } from "../chunks/CmzI29Zf.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { C as ChevronRight } from "../chunks/BaIXj_tA.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { V as ViewSelector } from "../chunks/DU19ZWkD.js";
import { T as TagSelector } from "../chunks/HJCr9QAW.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
import { S as Switch_1 } from "../chunks/l6D7S60E.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
var root$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_1$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl p-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <!> <hr class="border-gray-50 dark:border-gray-850/30 my-1"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function PromptMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let shareHandler = prop($$props, "shareHandler", 8);
  let cloneHandler = prop($$props, "cloneHandler", 8);
  let exportHandler = prop($$props, "exportHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let onClose = prop($$props, "onClose", 8);
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
        var div = root_1$1();
        var div_1 = child(div);
        var node_1 = child(div_1);
        {
          var consequent = ($$anchor3) => {
            var button = root$1();
            var node_2 = child(button);
            Share(node_2, {});
            var div_2 = sibling(node_2, 2);
            var text = child(div_2, true);
            reset(div_2);
            reset(button);
            template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
            event("click", button, () => {
              shareHandler()();
            });
            append($$anchor3, button);
          };
          if_block(node_1, ($$render) => {
            if ($config(), untrack(() => $config().features.enable_community_sharing)) $$render(consequent);
          });
        }
        var button_1 = sibling(node_1, 2);
        var node_3 = child(button_1);
        DocumentDuplicate(node_3, {});
        var div_3 = sibling(node_3, 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_1);
        var node_4 = sibling(button_1, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var button_2 = root$1();
            var node_5 = child(button_2);
            Download(node_5, {});
            var div_4 = sibling(node_5, 2);
            var text_2 = child(div_4, true);
            reset(div_4);
            reset(button_2);
            template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
            event("click", button_2, () => {
              exportHandler()();
            });
            append($$anchor3, button_2);
          };
          if_block(node_4, ($$render) => {
            if ($user(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_export);
            })) $$render(consequent_1);
          });
        }
        var button_3 = sibling(node_4, 4);
        var node_6 = child(button_3);
        GarbageBin(node_6, {});
        var div_5 = sibling(node_6, 2);
        var text_3 = child(div_5, true);
        reset(div_5);
        reset(button_3);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1) => {
            set_text(text_1, $0);
            set_text(text_3, $1);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Clone"))),
            () => ($i18n(), untrack(() => $i18n().t("Delete")))
          ]
        );
        event("click", button_1, () => {
          cloneHandler()();
        });
        event("click", button_3, () => {
          deleteHandler()();
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-medium"> </span>.</div>`);
var root_1 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_2 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_3 = from_html(`<div class="w-full h-full flex justify-center items-center my-16 mb-24"><!></div>`);
var root_4 = from_html(`<div class="shrink-0 text-gray-500"> </div>`);
var root_5 = from_html(`<div class="line-clamp-1"> </div>`);
var root_6 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_7 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_8 = from_html(`<!> <!> <button><!></button>`, 1);
var root_9 = from_html(`<a class=" flex space-x-4 cursor-pointer text-left w-full px-3 py-2.5 dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl"><div class=" flex flex-col flex-1 space-x-4 cursor-pointer w-full pl-1"><div class="flex items-center justify-between w-full mb-0.5"><div class="flex items-center gap-2"><div class="font-medium line-clamp-1 capitalize"> </div> <div class="text-xs overflow-hidden text-ellipsis line-clamp-1 text-gray-500"> </div></div> <!></div> <div class="flex gap-1 text-xs"><!> <div>·</div> <!></div></div> <div class="flex flex-row gap-0.5 self-center"><!></div></a>`);
var root_10 = from_html(`<div class="flex justify-center mt-4 mb-2"><!></div>`);
var root_11 = from_html(`<div class="gap-2 grid my-2 px-3 lg:grid-cols-2"></div> <!>`, 1);
var root_12 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-gray-300 dark:text-gray-600 mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_13 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://rexpro-ai.rexpro.com/prompts" target="_blank"><div class=" self-center"><div class=" font-medium line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_14 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><input id="prompts-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!> <a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/prompts/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!> <!></div></div> <!></div> <!>`, 1);
var root_15 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Prompts($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  let shiftKey = mutable_source(false);
  const i18n = getContext("i18n");
  let promptsImportInputElement = mutable_source();
  let loaded = mutable_source(false);
  let importFiles = mutable_source(null);
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let prompts = mutable_source(null);
  let tags = mutable_source([]);
  let total = mutable_source(null);
  let loading = mutable_source(false);
  let showDeleteConfirm = mutable_source(false);
  let deletePrompt = mutable_source(null);
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let selectedTag = mutable_source("");
  let copiedId = mutable_source(null);
  let page = mutable_source(1);
  const getPromptList = async () => {
    if (!get(loaded)) return;
    set(loading, true);
    try {
      const res = await getPromptItems(localStorage.token, get(query), get(viewOption), get(selectedTag), null, null, get(page)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(prompts, res.items);
        set(total, res.total);
        set(tags, await getPromptTags(localStorage.token).catch((error) => {
          toast.error(`${error}`);
          return [];
        }));
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    } finally {
      set(loading, false);
    }
  };
  const shareHandler = async (prompt) => {
    toast.success($i18n().t("Redirecting you to rexpro-ai Community"));
    const url = "https://rexpro-ai.rexpro.com";
    const tab = await window.open(`${url}/prompts/create`, "_blank");
    window.addEventListener(
      "message",
      (event2) => {
        if (event2.origin !== url) return;
        if (event2.data === "loaded") {
          tab.postMessage(JSON.stringify(prompt), "*");
        }
      },
      false
    );
  };
  const cloneHandler = async (prompt) => {
    const clonedPrompt = { ...prompt };
    clonedPrompt.title = `${clonedPrompt.title} (Clone)`;
    const baseCommand = clonedPrompt.command.startsWith("/") ? clonedPrompt.command.substring(1) : clonedPrompt.command;
    clonedPrompt.command = slugify(`${baseCommand} clone`);
    sessionStorage.prompt = JSON.stringify(clonedPrompt);
    goto("/workspace/prompts/create");
  };
  const exportHandler = async (prompt) => {
    let blob = new Blob([JSON.stringify([prompt])], { type: "application/json" });
    saveAs(blob, `prompt-export-${Date.now()}.json`);
  };
  const copyHandler = async (prompt) => {
    const res = await copyToClipboard(prompt.content);
    if (res) {
      set(copiedId, prompt.command);
      setTimeout(
        () => {
          set(copiedId, null);
        },
        2e3
      );
    }
  };
  const deleteHandler = async (prompt) => {
    const command = prompt.command;
    const res = await deletePromptById(localStorage.token, prompt.id).catch((err) => {
      toast.error(err);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: command }));
    }
    set(page, 1);
    getPromptList();
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    set(loaded, true);
    const onKeyDown = (event2) => {
      if (event2.key === "Shift") {
        set(shiftKey, true);
      }
    };
    const onKeyUp = (event2) => {
      if (event2.key === "Shift") {
        set(shiftKey, false);
      }
    };
    const onBlur = () => {
      set(shiftKey, false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      clearTimeout(get(searchDebounceTimer));
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  });
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer)), () => {
    if (get(query) !== void 0) {
      set(loading, true);
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          set(page, 1);
          getPromptList();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => (get(page), get(selectedTag), get(viewOption)), () => {
    if (get(page) && get(selectedTag) !== void 0 && get(viewOption) !== void 0) {
      getPromptList();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("1jqd4z5", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Prompts")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_12 = ($$anchor2) => {
      var fragment_1 = root_14();
      var node_1 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete prompt?"))));
        ConfirmDialog(node_1, {
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
              deleteHandler(get(deletePrompt));
            }
          },
          children: ($$anchor3, $$slotProps) => {
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
                set_text(text_1, (get(deletePrompt), untrack(() => get(deletePrompt).command)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var div_1 = sibling(node_1, 2);
      var input = child(div_1);
      bind_this(input, ($$value) => set(promptsImportInputElement, $$value), () => get(promptsImportInputElement));
      var div_2 = sibling(input, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text_2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var text_3 = child(div_5, true);
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var node_2 = child(div_6);
      {
        var consequent = ($$anchor3) => {
          var button = root_1();
          var div_7 = child(button);
          var text_4 = child(div_7, true);
          reset(div_7);
          reset(button);
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(promptsImportInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_import);
          })) $$render(consequent);
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root_1();
          var div_8 = child(button_1);
          var text_5 = child(div_8, true);
          reset(div_8);
          reset(button_1);
          template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
          event("click", button_1, async () => {
            let blob = new Blob([JSON.stringify(get(prompts))], { type: "application/json" });
            saveAs(blob, `prompts-export-${Date.now()}.json`);
          });
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (get(total), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(total) && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_export));
          })) $$render(consequent_1);
        });
      }
      var a = sibling(node_3, 2);
      var node_4 = child(a);
      Plus(node_4, { className: "size-3", strokeWidth: "2.5" });
      var div_9 = sibling(node_4, 2);
      var text_6 = child(div_9, true);
      reset(div_9);
      reset(a);
      reset(div_6);
      reset(div_2);
      reset(div_1);
      var div_10 = sibling(div_1, 2);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var div_13 = child(div_12);
      var node_5 = child(div_13);
      Search(node_5, { className: "size-3.5" });
      reset(div_13);
      var input_1 = sibling(div_13, 2);
      remove_input_defaults(input_1);
      var node_6 = sibling(input_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_14 = root_2();
          var button_2 = child(div_14);
          var node_7 = child(button_2);
          XMark(node_7, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_14);
          template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_14);
        };
        if_block(node_6, ($$render) => {
          if (get(query)) $$render(consequent_2);
        });
      }
      reset(div_12);
      reset(div_11);
      var div_15 = sibling(div_11, 2);
      var div_16 = child(div_15);
      var node_8 = child(div_16);
      ViewSelector(node_8, {
        onChange: async (value) => {
          localStorage.workspaceViewOption = value;
          set(page, 1);
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
      var node_9 = sibling(node_8, 2);
      {
        var consequent_3 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => (get(tags), untrack(() => get(tags).map((tag) => ({ value: tag, label: tag })))));
            TagSelector($$anchor3, {
              get items() {
                return get($0);
              },
              get value() {
                return get(selectedTag);
              },
              set value($$value) {
                set(selectedTag, $$value);
              },
              $$legacy: true
            });
          }
        };
        if_block(node_9, ($$render) => {
          if (get(tags), untrack(() => (get(tags) ?? []).length > 0)) $$render(consequent_3);
        });
      }
      reset(div_16);
      bind_this(div_16, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_15);
      var node_10 = sibling(div_15, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_17 = root_3();
          var node_11 = child(div_17);
          Spinner(node_11, { className: "size-5" });
          reset(div_17);
          append($$anchor3, div_17);
        };
        var consequent_10 = ($$anchor3) => {
          var fragment_3 = root_11();
          var div_18 = first_child(fragment_3);
          each(div_18, 5, () => get(prompts), (prompt) => prompt.id, ($$anchor4, prompt, $$index) => {
            var a_1 = root_9();
            var div_19 = child(a_1);
            var div_20 = child(div_19);
            var div_21 = child(div_20);
            var div_22 = child(div_21);
            var text_7 = child(div_22, true);
            reset(div_22);
            var div_23 = sibling(div_22, 2);
            var text_8 = child(div_23);
            reset(div_23);
            reset(div_21);
            var node_12 = sibling(div_21, 2);
            {
              var consequent_5 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Only"))));
                  Badge($$anchor5, {
                    type: "muted",
                    get content() {
                      return get($0);
                    }
                  });
                }
              };
              if_block(node_12, ($$render) => {
                if (get(prompt), untrack(() => !get(prompt).write_access)) $$render(consequent_5);
              });
            }
            reset(div_20);
            var div_24 = sibling(div_20, 2);
            var node_13 = child(div_24);
            {
              let $0 = derived_safe_equal(() => (get(prompt), $i18n(), untrack(() => {
                var _a, _b;
                return ((_b = (_a = get(prompt)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
              })));
              Tooltip(node_13, {
                get content() {
                  return get($0);
                },
                className: "flex shrink-0",
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  var div_25 = root_4();
                  var text_9 = child(div_25, true);
                  reset(div_25);
                  template_effect(($02) => set_text(text_9, $02), [
                    () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(prompt), untrack(() => {
                      var _a, _b, _c, _d;
                      return $i18n().t("By {{name}}", {
                        name: capitalizeFirstLetter(((_b = (_a = get(prompt)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(prompt)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                      });
                    }))
                  ]);
                  append($$anchor5, div_25);
                },
                $$slots: { default: true }
              });
            }
            var node_14 = sibling(node_13, 4);
            {
              var consequent_6 = ($$anchor5) => {
                Tooltip($$anchor5, {
                  get content() {
                    return get(prompt), untrack(() => get(prompt).content);
                  },
                  placement: "top",
                  children: ($$anchor6, $$slotProps) => {
                    var div_26 = root_5();
                    var text_10 = child(div_26, true);
                    reset(div_26);
                    template_effect(() => set_text(text_10, (get(prompt), untrack(() => get(prompt).content))));
                    append($$anchor6, div_26);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_14, ($$render) => {
                if (get(prompt), untrack(() => get(prompt).content)) $$render(consequent_6);
              });
            }
            reset(div_24);
            reset(div_19);
            var div_27 = sibling(div_19, 2);
            var node_15 = child(div_27);
            {
              var consequent_7 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                  Tooltip($$anchor5, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_3 = root_6();
                      var node_16 = child(button_3);
                      GarbageBin(node_16, {});
                      reset(button_3);
                      template_effect(($02) => set_attribute(button_3, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                      event("click", button_3, () => {
                        deleteHandler(get(prompt));
                      });
                      append($$anchor6, button_3);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              var alternate_1 = ($$anchor5) => {
                var fragment_7 = root_8();
                var node_17 = first_child(fragment_7);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy Prompt"))));
                  Tooltip(node_17, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_4 = root_7();
                      var node_18 = child(button_4);
                      {
                        var consequent_8 = ($$anchor7) => {
                          Check($$anchor7, { className: "size-4", strokeWidth: "1.5" });
                        };
                        var alternate = ($$anchor7) => {
                          Clipboard($$anchor7, { className: "size-4", strokeWidth: "1.5" });
                        };
                        if_block(node_18, ($$render) => {
                          if (get(copiedId), get(prompt), untrack(() => get(copiedId) === get(prompt).command)) $$render(consequent_8);
                          else $$render(alternate, -1);
                        });
                      }
                      reset(button_4);
                      template_effect(($02) => set_attribute(button_4, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Copy Prompt")))]);
                      event("click", button_4, (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        copyHandler(get(prompt));
                      });
                      append($$anchor6, button_4);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_19 = sibling(node_17, 2);
                PromptMenu(node_19, {
                  shareHandler: () => {
                    shareHandler(get(prompt));
                  },
                  cloneHandler: () => {
                    cloneHandler(get(prompt));
                  },
                  exportHandler: () => {
                    exportHandler(get(prompt));
                  },
                  deleteHandler: async () => {
                    set(deletePrompt, get(prompt));
                    set(showDeleteConfirm, true);
                  },
                  onClose: () => {
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var button_5 = root_7();
                    var node_20 = child(button_5);
                    EllipsisHorizontal(node_20, { className: "size-5" });
                    reset(button_5);
                    append($$anchor6, button_5);
                  },
                  $$slots: { default: true }
                });
                var button_6 = sibling(node_19, 2);
                var node_21 = child(button_6);
                {
                  let $0 = derived_safe_equal(() => (get(prompt), $i18n(), untrack(() => get(prompt).is_active !== false ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
                  Tooltip(node_21, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      Switch_1($$anchor6, {
                        get state() {
                          return get(prompt).is_active;
                        },
                        set state($$value) {
                          get(prompt).is_active = $$value, invalidate_inner_signals(() => get(prompts));
                        },
                        $$events: {
                          change: async () => {
                            togglePromptById(localStorage.token, get(prompt).id);
                          }
                        },
                        $$legacy: true
                      });
                    },
                    $$slots: { default: true }
                  });
                }
                reset(button_6);
                event("click", button_6, preventDefault(stopPropagation(function($$arg) {
                  bubble_event.call(this, $$props, $$arg);
                })));
                append($$anchor5, fragment_7);
              };
              if_block(node_15, ($$render) => {
                if (get(shiftKey)) $$render(consequent_7);
                else $$render(alternate_1, -1);
              });
            }
            reset(div_27);
            reset(a_1);
            template_effect(() => {
              set_attribute(a_1, "href", (get(prompt), untrack(() => `/workspace/prompts/${get(prompt).id}`)));
              set_text(text_7, (get(prompt), untrack(() => get(prompt).name)));
              set_text(text_8, `/${(get(prompt), untrack(() => get(prompt).command)) ?? ""}`);
            });
            append($$anchor4, a_1);
          });
          reset(div_18);
          var node_22 = sibling(div_18, 2);
          {
            var consequent_9 = ($$anchor4) => {
              var div_28 = root_10();
              var node_23 = child(div_28);
              Pagination_1(node_23, {
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
              reset(div_28);
              append($$anchor4, div_28);
            };
            if_block(node_22, ($$render) => {
              if (get(total) > 30) $$render(consequent_9);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate_2 = ($$anchor3) => {
          var div_29 = root_12();
          var div_30 = child(div_29);
          var div_31 = sibling(child(div_30), 2);
          var text_11 = child(div_31, true);
          reset(div_31);
          var div_32 = sibling(div_31, 2);
          var text_12 = child(div_32, true);
          reset(div_32);
          reset(div_30);
          reset(div_29);
          template_effect(
            ($0, $1) => {
              set_text(text_11, $0);
              set_text(text_12, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No prompts found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_29);
        };
        if_block(node_10, ($$render) => {
          if (get(prompts) === null || get(loading)) $$render(consequent_4);
          else if (get(prompts), untrack(() => (get(prompts) ?? []).length !== 0)) $$render(consequent_10, 1);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_10);
      var node_24 = sibling(div_10, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_33 = root_13();
          var div_34 = child(div_33);
          var text_13 = child(div_34, true);
          reset(div_34);
          var a_2 = sibling(div_34, 2);
          var div_35 = child(a_2);
          var div_36 = child(div_35);
          var text_14 = child(div_36, true);
          reset(div_36);
          var div_37 = sibling(div_36, 2);
          var text_15 = child(div_37, true);
          reset(div_37);
          reset(div_35);
          var div_38 = sibling(div_35, 2);
          var div_39 = child(div_38);
          var node_25 = child(div_39);
          ChevronRight(node_25, {});
          reset(div_39);
          reset(div_38);
          reset(a_2);
          reset(div_33);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_13, $0);
              set_text(text_14, $1);
              set_text(text_15, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by rexpro-ai Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a prompt"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore custom prompts")))
            ]
          );
          append($$anchor3, div_33);
        };
        if_block(node_24, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_11);
        });
      }
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text_2, $0);
          set_text(text_3, get(total) ?? "");
          set_text(text_6, $1);
          set_attribute(input_1, "aria-label", $2);
          set_attribute(input_1, "placeholder", $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Prompts"))),
          () => ($i18n(), untrack(() => $i18n().t("New Prompt"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Prompts"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Prompts")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        /* @__PURE__ */ console.log(get(importFiles));
        if (!get(importFiles) || get(importFiles).length === 0) return;
        const reader = new FileReader();
        reader.onload = async (event2) => {
          const savedPrompts = JSON.parse(event2.target.result);
          /* @__PURE__ */ console.log(savedPrompts);
          try {
            for (const prompt of savedPrompts) {
              await createNewPrompt(localStorage.token, {
                command: prompt.command,
                name: prompt.name,
                content: prompt.content
              }).catch((error) => {
                toast.error(typeof error === "string" ? error : JSON.stringify(error));
                return null;
              });
            }
            set(page, 1);
            await getPromptList();
          } finally {
            set(importFiles, null);
            mutate(promptsImportInputElement, get(promptsImportInputElement).value = "");
          }
        };
        reader.readAsText(get(importFiles)[0]);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_15, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_3 = ($$anchor2) => {
      var div_40 = root_15();
      var node_26 = child(div_40);
      Spinner(node_26, { className: "size-5" });
      reset(div_40);
      append($$anchor2, div_40);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_12);
      else $$render(alternate_3, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Prompts($$anchor, {});
}
export {
  _page as component
};
