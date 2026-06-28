import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, c as child, z as sibling, r as reset, u as untrack, t as template_effect, d as set_text, y as event, a as append, g as comment, h as first_child, k as get, w as set, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, o as onMount, j as onDestroy, l as legacy_pre_effect, n as legacy_pre_effect_reset, C as deferred_template_effect, $ as $document, A as tick, aR as next, aV as mutate, aW as text, m as deep_read_state } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { r as remove_input_defaults, s as set_attribute, a as set_class } from "../chunks/B9yCN616.js";
import { c as bind_files, b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { c as config, u as user, t as tools, R as REXPRO_NAME } from "../chunks/BJ3rUC-5.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { k as getToolList, g as getTools, l as loadToolByUrl, c as createNewTool, m as deleteToolById, n as exportTools, a as getToolById } from "../chunks/BjHnuYj-.js";
import { l as capitalizeFirstLetter } from "../chunks/X0cYWxFO.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { S as Share } from "../chunks/BOF8D99c.js";
import { D as DocumentDuplicate } from "../chunks/DjWyMeMm.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { V as ValvesModal, H as Heart } from "../chunks/BEWbf6Xv.js";
import { I as ImportModal, M as ManifestModal } from "../chunks/Cr8AdAnY.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { C as ChevronRight } from "../chunks/BaIXj_tA.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { P as Pencil } from "../chunks/Bga8-tII.js";
import { L as Link } from "../chunks/-zozyKl_.js";
import { V as ViewSelector } from "../chunks/DU19ZWkD.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
var root$2 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><!> <div class="flex items-center"> </div></button>`);
var root_1$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg> <div class="flex items-center"> </div></button> <!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><!> <div class="flex items-center"> </div></button> <!> <hr class="border-gray-50 dark:border-gray-850/30 my-1"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" draggable="false"><!> <div class="flex items-center"> </div></button></div></div>`);
function ToolMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let editHandler = prop($$props, "editHandler", 8);
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
        var button = child(div_1);
        var div_2 = sibling(child(button), 2);
        var text2 = child(div_2, true);
        reset(div_2);
        reset(button);
        var node_1 = sibling(button, 2);
        {
          var consequent = ($$anchor3) => {
            var button_1 = root$2();
            var node_2 = child(button_1);
            Share(node_2, {});
            var div_3 = sibling(node_2, 2);
            var text_1 = child(div_3, true);
            reset(div_3);
            reset(button_1);
            template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
            event("click", button_1, () => {
              shareHandler()();
            });
            append($$anchor3, button_1);
          };
          if_block(node_1, ($$render) => {
            if ($config(), untrack(() => $config().features.enable_community_sharing)) $$render(consequent);
          });
        }
        var button_2 = sibling(node_1, 2);
        var node_3 = child(button_2);
        DocumentDuplicate(node_3, {});
        var div_4 = sibling(node_3, 2);
        var text_2 = child(div_4, true);
        reset(div_4);
        reset(button_2);
        var node_4 = sibling(button_2, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var button_3 = root$2();
            var node_5 = child(button_3);
            Download(node_5, {});
            var div_5 = sibling(node_5, 2);
            var text_3 = child(div_5, true);
            reset(div_5);
            reset(button_3);
            template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
            event("click", button_3, () => {
              exportHandler()();
            });
            append($$anchor3, button_3);
          };
          if_block(node_4, ($$render) => {
            if ($user(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.tools_export);
            })) $$render(consequent_1);
          });
        }
        var button_4 = sibling(node_4, 4);
        var node_6 = child(button_4);
        GarbageBin(node_6, {});
        var div_6 = sibling(node_6, 2);
        var text_4 = child(div_6, true);
        reset(div_6);
        reset(button_4);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1, $2) => {
            set_text(text2, $0);
            set_text(text_2, $1);
            set_text(text_4, $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Edit"))),
            () => ($i18n(), untrack(() => $i18n().t("Clone"))),
            () => ($i18n(), untrack(() => $i18n().t("Delete")))
          ]
        );
        event("click", button, () => {
          editHandler()();
        });
        event("click", button_2, () => {
          cloneHandler()();
        });
        event("click", button_4, () => {
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
var root$1 = from_html(`<div slot="content"><div class="min-w-[190px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button></div></div>`);
function AddToolMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let createHandler = prop($$props, "createHandler", 8);
  let importFromLinkHandler = prop($$props, "importFromLinkHandler", 8);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    sideOffset: 6,
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
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create"))));
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
        var div_2 = child(button);
        var node_1 = child(div_2);
        Pencil(node_1, {});
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var text2 = child(div_3, true);
        reset(div_3);
        reset(button);
        var button_1 = sibling(button, 2);
        var div_4 = child(button_1);
        var node_2 = child(div_4);
        Link(node_2, {});
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var text_1 = child(div_5, true);
        reset(div_5);
        reset(button_1);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1) => {
            set_text(text2, $0);
            set_text(text_1, $1);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("New Tool"))),
            () => ($i18n(), untrack(() => $i18n().t("Import From Link")))
          ]
        );
        event("click", button, async () => {
          createHandler()();
          set(show, false);
        });
        event("click", button_1, async () => {
          importFromLinkHandler()();
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
var root = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_1 = from_html(`<div class="cursor-pointer px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></div>`);
var root_2 = from_html(`<a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/tools/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a>`);
var root_3 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_4 = from_html(`<div class=" text-gray-500 text-xs font-medium shrink-0"> </div>`);
var root_5 = from_html(`<div class="flex items-center gap-2"><div class="line-clamp-1 text-sm"> </div> <!></div>`);
var root_6 = from_html(`<a class=" flex flex-1 space-x-3.5 cursor-pointer w-full"><div class="flex items-center text-left"><div class=" flex-1 self-center"><!> <div class="px-0.5"><div class="text-xs text-gray-500 shrink-0"><!></div></div></div></div></a>`);
var root_7 = from_html(`<div class=" flex flex-1 space-x-3.5 w-full"><div class="flex items-center text-left w-full"><div class="flex-1 self-center w-full"><div class="flex items-center justify-between w-full gap-2"><!> <!></div> <div class="px-0.5"><div class="text-xs text-gray-500 shrink-0"><!></div></div></div></div></div>`);
var root_8 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_9 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></button>`);
var root_10 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_11 = from_html(`<!> <!> <!>`, 1);
var root_12 = from_html(`<div class="flex flex-row gap-0.5 self-center"><!></div>`);
var root_13 = from_html(`<div><!> <!></div>`);
var root_14 = from_html(`<div class=" my-2 gap-2 grid px-3 lg:grid-cols-2"></div>`);
var root_15 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-gray-300 dark:text-gray-600 mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_16 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://rexpro-ai.rexpro.com/tools" target="_blank"><div class=" self-center"><div class=" font-medium line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_17 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-medium"> </span>.</div>`);
var root_18 = from_html(`<div class="text-sm text-gray-500"><div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"><div> </div> <ul class=" mt-1 list-disc pl-4 text-xs"><li> </li> <li> </li></ul></div> <div class="my-3"> </div></div>`);
var root_19 = from_html(`<div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><input id="documents-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!> <!></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div></div> <!></div> <!> <!> <!> <!> <!>`, 1);
var root_20 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root_21 = from_html(`<!> <!>`, 1);
function Tools($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let shiftKey = mutable_source(false);
  let loaded = mutable_source(false);
  let toolsImportInputElement = mutable_source();
  let importFiles = mutable_source();
  let showConfirm = mutable_source(false);
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let showManifestModal = mutable_source(false);
  let showValvesModal = mutable_source(false);
  let selectedTool = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let tools$1 = mutable_source([]);
  let filteredItems = mutable_source([]);
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let showImportModal = mutable_source(false);
  const setFilteredItems = () => {
    set(filteredItems, get(tools$1).filter((t) => {
      var _a, _b, _c, _d;
      if (get(query) === "" && get(viewOption) === "") return true;
      const lowerQuery = get(query).toLowerCase();
      return ((t.name || "").toLowerCase().includes(lowerQuery) || (t.id || "").toLowerCase().includes(lowerQuery) || (((_a = t.user) == null ? void 0 : _a.name) || "").toLowerCase().includes(lowerQuery) || // Search by user name
      (((_b = t.user) == null ? void 0 : _b.email) || "").toLowerCase().includes(lowerQuery)) && // Search by user email
      (get(viewOption) === "" || get(viewOption) === "created" && t.user_id === ((_c = $user()) == null ? void 0 : _c.id) || get(viewOption) === "shared" && t.user_id !== ((_d = $user()) == null ? void 0 : _d.id));
    }));
  };
  const shareHandler = async (tool) => {
    const item = await getToolById(localStorage.token, tool.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    toast.success($i18n().t("Redirecting you to rexpro-ai Community"));
    const url = "https://rexpro-ai.rexpro.com";
    const tab = await window.open(`${url}/tools/create`, "_blank");
    const messageHandler = (event2) => {
      if (event2.origin !== url) return;
      if (event2.data === "loaded") {
        tab.postMessage(JSON.stringify(item), "*");
        window.removeEventListener("message", messageHandler);
      }
    };
    window.addEventListener("message", messageHandler, false);
    /* @__PURE__ */ console.log(item);
  };
  const cloneHandler = async (tool) => {
    const _tool = await getToolById(localStorage.token, tool.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_tool) {
      sessionStorage.tool = JSON.stringify({
        ..._tool,
        id: `${_tool.id}_clone`,
        name: `${_tool.name} (Clone)`
      });
      goto("/workspace/tools/create");
    }
  };
  const exportHandler = async (tool) => {
    const _tool = await getToolById(localStorage.token, tool.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_tool) {
      let blob = new Blob([JSON.stringify([_tool])], { type: "application/json" });
      saveAs(blob, `tool-${_tool.id}-export-${Date.now()}.json`);
    }
  };
  const deleteHandler = async (tool) => {
    const res = await deleteToolById(localStorage.token, tool.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Tool deleted successfully"));
      await init$1();
    }
  };
  const init$1 = async () => {
    set(tools$1, await getToolList(localStorage.token));
    tools.set(await getTools(localStorage.token));
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    await init$1();
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
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          setFilteredItems();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => (get(tools$1), get(viewOption)), () => {
    if (get(tools$1) && get(viewOption) !== void 0) {
      setFilteredItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_21();
  head("kq2jg5", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Tools")))]
    );
  });
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Tool imported successfully"))));
    ImportModal(node, {
      onImport: (tool) => {
        sessionStorage.tool = JSON.stringify({ ...tool });
        goto("/workspace/tools/create");
      },
      loadUrlHandler: async (url) => {
        return await loadToolByUrl(localStorage.token, url);
      },
      get successMessage() {
        return get($0);
      },
      get show() {
        return get(showImportModal);
      },
      set show($$value) {
        set(showImportModal, $$value);
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_12 = ($$anchor2) => {
      var fragment_1 = root_19();
      var div = first_child(fragment_1);
      var input = child(div);
      bind_this(input, ($$value) => set(toolsImportInputElement, $$value), () => get(toolsImportInputElement));
      var div_1 = sibling(input, 2);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(div_2);
      var div_5 = sibling(div_2, 2);
      var node_2 = child(div_5);
      {
        var consequent = ($$anchor3) => {
          var button = root();
          var div_6 = child(button);
          var text_2 = child(div_6, true);
          reset(div_6);
          reset(button);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(toolsImportInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.tools_import);
          })) $$render(consequent);
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root();
          var div_7 = child(button_1);
          var text_3 = child(div_7, true);
          reset(div_7);
          reset(button_1);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
          event("click", button_1, async () => {
            const _tools = await exportTools(localStorage.token).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
            if (_tools) {
              let blob = new Blob([JSON.stringify(_tools)], { type: "application/json" });
              saveAs(blob, `tools-export-${Date.now()}.json`);
            }
          });
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (get(tools$1), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(tools$1).length && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.tools_export));
          })) $$render(consequent_1);
        });
      }
      var node_4 = sibling(node_3, 2);
      {
        var consequent_2 = ($$anchor3) => {
          AddToolMenu($$anchor3, {
            createHandler: () => {
              goto("/workspace/tools/create");
            },
            importFromLinkHandler: () => {
              set(showImportModal, true);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_8 = root_1();
              var node_5 = child(div_8);
              Plus(node_5, { className: "size-3", strokeWidth: "2.5" });
              var div_9 = sibling(node_5, 2);
              var text_4 = child(div_9, true);
              reset(div_9);
              reset(div_8);
              template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("New Tool")))]);
              append($$anchor4, div_8);
            },
            $$slots: { default: true }
          });
        };
        var alternate = ($$anchor3) => {
          var a = root_2();
          var node_6 = child(a);
          Plus(node_6, { className: "size-3", strokeWidth: "2.5" });
          var div_10 = sibling(node_6, 2);
          var text_5 = child(div_10, true);
          reset(div_10);
          reset(a);
          template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("New Tool")))]);
          append($$anchor3, a);
        };
        if_block(node_4, ($$render) => {
          if ($user(), untrack(() => {
            var _a;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
          })) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      reset(div_5);
      reset(div_1);
      reset(div);
      var div_11 = sibling(div, 2);
      var div_12 = child(div_11);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var node_7 = child(div_14);
      Search(node_7, { className: "size-3.5" });
      reset(div_14);
      var input_1 = sibling(div_14, 2);
      remove_input_defaults(input_1);
      var node_8 = sibling(input_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_15 = root_3();
          var button_2 = child(div_15);
          var node_9 = child(button_2);
          XMark(node_9, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_15);
          template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_15);
        };
        if_block(node_8, ($$render) => {
          if (get(query)) $$render(consequent_3);
        });
      }
      reset(div_13);
      reset(div_12);
      var div_16 = sibling(div_12, 2);
      var div_17 = child(div_16);
      var node_10 = child(div_17);
      ViewSelector(node_10, {
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
      reset(div_17);
      bind_this(div_17, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_16);
      var node_11 = sibling(div_16, 2);
      {
        var consequent_10 = ($$anchor3) => {
          var div_18 = root_14();
          each(div_18, 5, () => get(filteredItems), index, ($$anchor4, tool) => {
            {
              let $0 = derived_safe_equal(() => (get(tool), untrack(() => {
                var _a, _b, _c;
                return ((_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? ((_c = get(tool)) == null ? void 0 : _c.id);
              })));
              Tooltip($$anchor4, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var div_19 = root_13();
                  var node_12 = child(div_19);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var a_1 = root_6();
                      var div_20 = child(a_1);
                      var div_21 = child(div_20);
                      var node_13 = child(div_21);
                      Tooltip(node_13, {
                        get content() {
                          return get(tool), untrack(() => get(tool).id);
                        },
                        placement: "top-start",
                        children: ($$anchor7, $$slotProps2) => {
                          var div_22 = root_5();
                          var div_23 = child(div_22);
                          var text_6 = child(div_23, true);
                          reset(div_23);
                          var node_14 = sibling(div_23, 2);
                          {
                            var consequent_4 = ($$anchor8) => {
                              var div_24 = root_4();
                              var text_7 = child(div_24);
                              reset(div_24);
                              template_effect(() => set_text(text_7, `v${(get(tool), untrack(() => {
                                var _a, _b, _c;
                                return ((_c = (_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version) ?? "";
                              })) ?? ""}`));
                              append($$anchor8, div_24);
                            };
                            if_block(node_14, ($$render) => {
                              if (get(tool), untrack(() => {
                                var _a, _b, _c;
                                return (_c = (_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version;
                              })) $$render(consequent_4);
                            });
                          }
                          reset(div_22);
                          template_effect(() => set_text(text_6, (get(tool), untrack(() => get(tool).name))));
                          append($$anchor7, div_22);
                        },
                        $$slots: { default: true }
                      });
                      var div_25 = sibling(node_13, 2);
                      var div_26 = child(div_25);
                      var node_15 = child(div_26);
                      {
                        let $02 = derived_safe_equal(() => (get(tool), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(tool)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_15, {
                          get content() {
                            return get($02);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor7, $$slotProps2) => {
                            next();
                            var text_8 = text();
                            template_effect(($03) => set_text(text_8, $03), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(tool), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(tool)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(tool)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor7, text_8);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_26);
                      reset(div_25);
                      reset(div_21);
                      reset(div_20);
                      reset(a_1);
                      template_effect(($02) => set_attribute(a_1, "href", $02), [
                        () => (get(tool), untrack(() => `/workspace/tools/edit?id=${encodeURIComponent(get(tool).id)}`))
                      ]);
                      append($$anchor6, a_1);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var div_27 = root_7();
                      var div_28 = child(div_27);
                      var div_29 = child(div_28);
                      var div_30 = child(div_29);
                      var node_16 = child(div_30);
                      Tooltip(node_16, {
                        get content() {
                          return get(tool), untrack(() => get(tool).id);
                        },
                        placement: "top-start",
                        children: ($$anchor7, $$slotProps2) => {
                          var div_31 = root_5();
                          var div_32 = child(div_31);
                          var text_9 = child(div_32, true);
                          reset(div_32);
                          var node_17 = sibling(div_32, 2);
                          {
                            var consequent_6 = ($$anchor8) => {
                              var div_33 = root_4();
                              var text_10 = child(div_33);
                              reset(div_33);
                              template_effect(() => set_text(text_10, `v${(get(tool), untrack(() => {
                                var _a, _b, _c;
                                return ((_c = (_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version) ?? "";
                              })) ?? ""}`));
                              append($$anchor8, div_33);
                            };
                            if_block(node_17, ($$render) => {
                              if (get(tool), untrack(() => {
                                var _a, _b, _c;
                                return (_c = (_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version;
                              })) $$render(consequent_6);
                            });
                          }
                          reset(div_31);
                          template_effect(() => set_text(text_9, (get(tool), untrack(() => get(tool).name))));
                          append($$anchor7, div_31);
                        },
                        $$slots: { default: true }
                      });
                      var node_18 = sibling(node_16, 2);
                      {
                        let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Only"))));
                        Badge(node_18, {
                          type: "muted",
                          get content() {
                            return get($02);
                          }
                        });
                      }
                      reset(div_30);
                      var div_34 = sibling(div_30, 2);
                      var div_35 = child(div_34);
                      var node_19 = child(div_35);
                      {
                        let $02 = derived_safe_equal(() => (get(tool), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(tool)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_19, {
                          get content() {
                            return get($02);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor7, $$slotProps2) => {
                            next();
                            var text_11 = text();
                            template_effect(($03) => set_text(text_11, $03), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(tool), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(tool)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(tool)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor7, text_11);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_35);
                      reset(div_34);
                      reset(div_29);
                      reset(div_28);
                      reset(div_27);
                      append($$anchor6, div_27);
                    };
                    if_block(node_12, ($$render) => {
                      if (get(tool), untrack(() => get(tool).write_access)) $$render(consequent_5);
                      else $$render(alternate_1, -1);
                    });
                  }
                  var node_20 = sibling(node_12, 2);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var div_36 = root_12();
                      var node_21 = child(div_36);
                      {
                        var consequent_7 = ($$anchor7) => {
                          {
                            let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                            Tooltip($$anchor7, {
                              get content() {
                                return get($02);
                              },
                              children: ($$anchor8, $$slotProps2) => {
                                var button_3 = root_8();
                                var node_22 = child(button_3);
                                GarbageBin(node_22, {});
                                reset(button_3);
                                template_effect(($03) => set_attribute(button_3, "aria-label", $03), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                                event("click", button_3, () => {
                                  deleteHandler(get(tool));
                                });
                                append($$anchor8, button_3);
                              },
                              $$slots: { default: true }
                            });
                          }
                        };
                        var alternate_2 = ($$anchor7) => {
                          var fragment_7 = root_11();
                          var node_23 = first_child(fragment_7);
                          {
                            var consequent_8 = ($$anchor8) => {
                              Tooltip($$anchor8, {
                                content: "Support",
                                children: ($$anchor9, $$slotProps2) => {
                                  var button_4 = root_8();
                                  var node_24 = child(button_4);
                                  Heart(node_24, {});
                                  reset(button_4);
                                  template_effect(($02) => set_attribute(button_4, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Support")))]);
                                  event("click", button_4, () => {
                                    set(selectedTool, get(tool));
                                    set(showManifestModal, true);
                                  });
                                  append($$anchor9, button_4);
                                },
                                $$slots: { default: true }
                              });
                            };
                            if_block(node_23, ($$render) => {
                              if (get(tool), untrack(() => {
                                var _a, _b, _c;
                                return ((_c = (_b = (_a = get(tool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.funding_url) ?? false;
                              })) $$render(consequent_8);
                            });
                          }
                          var node_25 = sibling(node_23, 2);
                          {
                            let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Valves"))));
                            Tooltip(node_25, {
                              get content() {
                                return get($02);
                              },
                              children: ($$anchor8, $$slotProps2) => {
                                var button_5 = root_9();
                                template_effect(($03) => set_attribute(button_5, "aria-label", $03), [() => ($i18n(), untrack(() => $i18n().t("Valves")))]);
                                event("click", button_5, () => {
                                  set(selectedTool, get(tool));
                                  set(showValvesModal, true);
                                });
                                append($$anchor8, button_5);
                              },
                              $$slots: { default: true }
                            });
                          }
                          var node_26 = sibling(node_25, 2);
                          ToolMenu(node_26, {
                            editHandler: () => {
                              goto(`/workspace/tools/edit?id=${encodeURIComponent(get(tool).id)}`);
                            },
                            shareHandler: () => {
                              shareHandler(get(tool));
                            },
                            cloneHandler: () => {
                              cloneHandler(get(tool));
                            },
                            exportHandler: () => {
                              exportHandler(get(tool));
                            },
                            deleteHandler: async () => {
                              set(selectedTool, get(tool));
                              set(showDeleteConfirm, true);
                            },
                            onClose: () => {
                            },
                            children: ($$anchor8, $$slotProps2) => {
                              var button_6 = root_10();
                              var node_27 = child(button_6);
                              EllipsisHorizontal(node_27, { className: "size-5" });
                              reset(button_6);
                              append($$anchor8, button_6);
                            },
                            $$slots: { default: true }
                          });
                          append($$anchor7, fragment_7);
                        };
                        if_block(node_21, ($$render) => {
                          if (get(shiftKey)) $$render(consequent_7);
                          else $$render(alternate_2, -1);
                        });
                      }
                      reset(div_36);
                      append($$anchor6, div_36);
                    };
                    if_block(node_20, ($$render) => {
                      if (get(tool), untrack(() => get(tool).write_access)) $$render(consequent_9);
                    });
                  }
                  reset(div_19);
                  template_effect(() => set_class(div_19, 1, ` flex space-x-4 text-left w-full px-3 py-2.5 transition rounded-2xl ${(get(tool), untrack(() => get(tool).write_access ? "cursor-pointer dark:hover:bg-gray-850/50 hover:bg-gray-50" : "cursor-not-allowed opacity-60")) ?? ""}`));
                  append($$anchor5, div_19);
                },
                $$slots: { default: true }
              });
            }
          });
          reset(div_18);
          append($$anchor3, div_18);
        };
        var alternate_3 = ($$anchor3) => {
          var div_37 = root_15();
          var div_38 = child(div_37);
          var div_39 = sibling(child(div_38), 2);
          var text_12 = child(div_39, true);
          reset(div_39);
          var div_40 = sibling(div_39, 2);
          var text_13 = child(div_40, true);
          reset(div_40);
          reset(div_38);
          reset(div_37);
          template_effect(
            ($0, $1) => {
              set_text(text_12, $0);
              set_text(text_13, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No tools found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_37);
        };
        if_block(node_11, ($$render) => {
          if (get(filteredItems), untrack(() => (get(filteredItems) ?? []).length !== 0)) $$render(consequent_10);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_11);
      var node_28 = sibling(div_11, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_41 = root_16();
          var div_42 = child(div_41);
          var text_14 = child(div_42, true);
          reset(div_42);
          var a_2 = sibling(div_42, 2);
          var div_43 = child(a_2);
          var div_44 = child(div_43);
          var text_15 = child(div_44, true);
          reset(div_44);
          var div_45 = sibling(div_44, 2);
          var text_16 = child(div_45, true);
          reset(div_45);
          reset(div_43);
          var div_46 = sibling(div_43, 2);
          var div_47 = child(div_46);
          var node_29 = child(div_47);
          ChevronRight(node_29, {});
          reset(div_47);
          reset(div_46);
          reset(a_2);
          reset(div_41);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_14, $0);
              set_text(text_15, $1);
              set_text(text_16, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by rexpro-ai Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a tool"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore custom tools")))
            ]
          );
          append($$anchor3, div_41);
        };
        if_block(node_28, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_11);
        });
      }
      var node_30 = sibling(node_28, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete tool?"))));
        ConfirmDialog(node_30, {
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
              deleteHandler(get(selectedTool));
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_48 = root_17();
            var text_17 = child(div_48);
            var span = sibling(text_17);
            var text_18 = child(span, true);
            reset(span);
            next();
            reset(div_48);
            template_effect(
              ($02) => {
                set_text(text_17, `${$02 ?? ""} `);
                set_text(text_18, (get(selectedTool), untrack(() => get(selectedTool).name)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div_48);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var node_31 = sibling(node_30, 2);
      {
        let $0 = derived_safe_equal(() => (get(selectedTool), untrack(() => {
          var _a;
          return ((_a = get(selectedTool)) == null ? void 0 : _a.id) ?? null;
        })));
        ValvesModal(node_31, {
          type: "tool",
          get id() {
            return get($0);
          },
          get show() {
            return get(showValvesModal);
          },
          set show($$value) {
            set(showValvesModal, $$value);
          },
          $$legacy: true
        });
      }
      var node_32 = sibling(node_31, 2);
      {
        let $0 = derived_safe_equal(() => (get(selectedTool), untrack(() => {
          var _a, _b;
          return ((_b = (_a = get(selectedTool)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) ?? {};
        })));
        ManifestModal(node_32, {
          get manifest() {
            return get($0);
          },
          get show() {
            return get(showManifestModal);
          },
          set show($$value) {
            set(showManifestModal, $$value);
          },
          $$legacy: true
        });
      }
      var node_33 = sibling(node_32, 2);
      ConfirmDialog(node_33, {
        get show() {
          return get(showConfirm);
        },
        set show($$value) {
          set(showConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            const reader = new FileReader();
            reader.onload = async (event2) => {
              const _tools = JSON.parse(event2.target.result);
              /* @__PURE__ */ console.log(_tools);
              for (const tool of _tools) {
                await createNewTool(localStorage.token, tool).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
              toast.success($i18n().t("Tool imported successfully"));
              await init$1();
              set(importFiles, null);
              mutate(toolsImportInputElement, get(toolsImportInputElement).value = "");
            };
            reader.readAsText(get(importFiles)[0]);
          }
        },
        children: ($$anchor3, $$slotProps) => {
          var div_49 = root_18();
          var div_50 = child(div_49);
          var div_51 = child(div_50);
          var text_19 = child(div_51, true);
          reset(div_51);
          var ul = sibling(div_51, 2);
          var li = child(ul);
          var text_20 = child(li);
          reset(li);
          var li_1 = sibling(li, 2);
          var text_21 = child(li_1, true);
          reset(li_1);
          reset(ul);
          reset(div_50);
          var div_52 = sibling(div_50, 2);
          var text_22 = child(div_52, true);
          reset(div_52);
          reset(div_49);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text_19, $0);
              set_text(text_20, `${$1 ?? ""}.`);
              set_text(text_21, $2);
              set_text(text_22, $3);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Please carefully review the following warnings:"))),
              () => ($i18n(), untrack(() => $i18n().t("Tools have a function calling system that allows arbitrary code execution."))),
              () => ($i18n(), untrack(() => $i18n().t("Do not install tools from sources you do not fully trust."))),
              () => ($i18n(), untrack(() => $i18n().t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")))
            ]
          );
          append($$anchor3, div_49);
        },
        $$slots: { default: true },
        $$legacy: true
      });
      template_effect(
        ($0, $1, $2) => {
          set_text(text$1, $0);
          set_text(text_1, (get(filteredItems), untrack(() => get(filteredItems).length)));
          set_attribute(input_1, "aria-label", $1);
          set_attribute(input_1, "placeholder", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Tools"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Tools"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Tools")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        /* @__PURE__ */ console.log(get(importFiles));
        set(showConfirm, true);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_16, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_4 = ($$anchor2) => {
      var div_53 = root_20();
      var node_34 = child(div_53);
      Spinner(node_34, { className: "size-5" });
      reset(div_53);
      append($$anchor2, div_53);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_12);
      else $$render(alternate_4, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Tools($$anchor, {});
}
export {
  _page as component
};
