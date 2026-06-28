import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, c as child, z as sibling, r as reset, u as untrack, t as template_effect, d as set_text, y as event, a as append, g as comment, h as first_child, k as get, w as set, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, o as onMount, j as onDestroy, l as legacy_pre_effect, n as legacy_pre_effect_reset, C as deferred_template_effect, $ as $document, A as tick, aR as next, aV as mutate, aW as text, m as deep_read_state, b1 as invalidate_inner_signals } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { r as remove_input_defaults, s as set_attribute, a as set_class } from "../chunks/B9yCN616.js";
import { c as bind_files, b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as preventDefault, s as stopPropagation } from "../chunks/CGgk3ROl.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { b as bubble_event } from "../chunks/C46Aw6eG.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { u as user, R as REXPRO_NAME, e as skills } from "../chunks/BJ3rUC-5.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { d as getSkillItems, c as createNewSkill, g as getSkills, e as deleteSkillById, f as exportSkills, t as toggleSkillById, a as getSkillById } from "../chunks/DRvubTJA.js";
import { p as parseFrontmatter, f as formatSkillName, l as capitalizeFirstLetter } from "../chunks/X0cYWxFO.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { V as ViewSelector } from "../chunks/DU19ZWkD.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
import { S as Switch_1 } from "../chunks/l6D7S60E.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { D as DocumentDuplicate } from "../chunks/DjWyMeMm.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
var root$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_1$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg> <div class="flex items-center"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <!> <hr class="border-gray-50 dark:border-gray-850/30 my-1"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function SkillMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let editHandler = prop($$props, "editHandler", 8);
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
        var button_1 = sibling(button, 2);
        var node_1 = child(button_1);
        DocumentDuplicate(node_1, {});
        var div_3 = sibling(node_1, 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_1);
        var node_2 = sibling(button_1, 2);
        {
          var consequent = ($$anchor3) => {
            var button_2 = root$1();
            var node_3 = child(button_2);
            Download(node_3, {});
            var div_4 = sibling(node_3, 2);
            var text_2 = child(div_4, true);
            reset(div_4);
            reset(button_2);
            template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
            event("click", button_2, () => {
              exportHandler()();
            });
            append($$anchor3, button_2);
          };
          if_block(node_2, ($$render) => {
            if ($user(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.skills);
            })) $$render(consequent);
          });
        }
        var button_3 = sibling(node_2, 4);
        var node_4 = child(button_3);
        GarbageBin(node_4, {});
        var div_5 = sibling(node_4, 2);
        var text_3 = child(div_5, true);
        reset(div_5);
        reset(button_3);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1, $2) => {
            set_text(text2, $0);
            set_text(text_1, $1);
            set_text(text_3, $2);
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
var root = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_1 = from_html(`<a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/skills/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a>`);
var root_2 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_3 = from_html(`<div class="w-full h-full flex justify-center items-center my-16 mb-24"><!></div>`);
var root_4 = from_html(`<div class="flex items-center gap-2"><div class="line-clamp-1 text-sm"> </div> <!></div>`);
var root_5 = from_html(`<a class=" flex flex-1 space-x-3.5 cursor-pointer w-full"><div class="flex items-center text-left"><div class=" flex-1 self-center"><!> <div class="px-0.5"><div class="text-xs text-gray-500 shrink-0"><!></div></div></div></div></a>`);
var root_6 = from_html(`<div class=" flex flex-1 space-x-3.5 w-full"><div class="flex items-center text-left w-full"><div class="flex-1 self-center w-full"><div class="flex items-center justify-between w-full gap-2"><!> <!></div> <div class="px-0.5"><div class="text-xs text-gray-500 shrink-0"><!></div></div></div></div></div>`);
var root_7 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_8 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_9 = from_html(`<div class="flex flex-row gap-0.5 self-center"><!> <button><!></button></div>`);
var root_10 = from_html(`<div><!> <!></div>`);
var root_11 = from_html(`<div class="flex justify-center mt-4 mb-2"><!></div>`);
var root_12 = from_html(`<div class=" my-2 gap-2 grid px-3 lg:grid-cols-2"></div> <!>`, 1);
var root_13 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-gray-300 dark:text-gray-600 mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_14 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-medium"> </span>.</div>`);
var root_15 = from_html(`<div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><input type="file" accept=".md,.json" hidden=""/> <!> <!> <!></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div></div> <!></div> <!>`, 1);
var root_16 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Skills($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let shiftKey = mutable_source(false);
  let loaded = mutable_source(false);
  let importFiles = mutable_source();
  let importInputElement = mutable_source();
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let selectedSkill = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let filteredItems = mutable_source(null);
  let total = mutable_source(null);
  let loading = mutable_source(false);
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let page = mutable_source(1);
  const loadSkillItems = async () => {
    if (!get(loaded)) return;
    set(loading, true);
    try {
      const res = await getSkillItems(localStorage.token, get(query), get(viewOption), get(page)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(filteredItems, res.items);
        set(total, res.total);
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    } finally {
      set(loading, false);
    }
  };
  const cloneHandler = async (skill) => {
    const _skill = await getSkillById(localStorage.token, skill.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_skill) {
      sessionStorage.skill = JSON.stringify({
        ..._skill,
        id: `${_skill.id}_clone`,
        name: `${_skill.name} (Clone)`
      });
      goto("/workspace/skills/create");
    }
  };
  const exportHandler = async (skill) => {
    const _skill = await getSkillById(localStorage.token, skill.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_skill) {
      let blob = new Blob([JSON.stringify([_skill])], { type: "application/json" });
      saveAs(blob, `skill-${_skill.id}-export-${Date.now()}.json`);
    }
  };
  const deleteHandler = async (skill) => {
    const res = await deleteSkillById(localStorage.token, skill.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Skill deleted successfully"));
    }
    set(page, 1);
    loadSkillItems();
    await skills.set(await getSkills(localStorage.token));
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
          loadSkillItems();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => (get(page), get(viewOption)), () => {
    if (get(page) && get(viewOption) !== void 0) {
      loadSkillItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("1n7k4b0", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Skills")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_12 = ($$anchor2) => {
      var fragment_1 = root_15();
      var div = first_child(fragment_1);
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
      var input = child(div_5);
      bind_this(input, ($$value) => set(importInputElement, $$value), () => get(importInputElement));
      var node_1 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var button = root();
          var div_6 = child(button);
          var text_2 = child(div_6, true);
          reset(div_6);
          reset(button);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(importInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_1, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.skills);
          })) $$render(consequent);
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root();
          var div_7 = child(button_1);
          var text_3 = child(div_7, true);
          reset(div_7);
          reset(button_1);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
          event("click", button_1, async () => {
            const _skills = await exportSkills(localStorage.token).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
            if (_skills) {
              let blob = new Blob([JSON.stringify(_skills)], { type: "application/json" });
              saveAs(blob, `skills-export-${Date.now()}.json`);
            }
          });
          append($$anchor3, button_1);
        };
        if_block(node_2, ($$render) => {
          if (get(total), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(total) && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.skills));
          })) $$render(consequent_1);
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_1();
          var node_4 = child(a);
          Plus(node_4, { className: "size-3", strokeWidth: "2.5" });
          var div_8 = sibling(node_4, 2);
          var text_4 = child(div_8, true);
          reset(div_8);
          reset(a);
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("New Skill")))]);
          append($$anchor3, a);
        };
        if_block(node_3, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.skills);
          })) $$render(consequent_2);
        });
      }
      reset(div_5);
      reset(div_1);
      reset(div);
      var div_9 = sibling(div, 2);
      var div_10 = child(div_9);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var node_5 = child(div_12);
      Search(node_5, { className: "size-3.5" });
      reset(div_12);
      var input_1 = sibling(div_12, 2);
      remove_input_defaults(input_1);
      var node_6 = sibling(input_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_13 = root_2();
          var button_2 = child(div_13);
          var node_7 = child(button_2);
          XMark(node_7, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_13);
          template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_13);
        };
        if_block(node_6, ($$render) => {
          if (get(query)) $$render(consequent_3);
        });
      }
      reset(div_11);
      reset(div_10);
      var div_14 = sibling(div_10, 2);
      var div_15 = child(div_14);
      var node_8 = child(div_15);
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
      reset(div_15);
      bind_this(div_15, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_14);
      var node_9 = sibling(div_14, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_16 = root_3();
          var node_10 = child(div_16);
          Spinner(node_10, { className: "size-5" });
          reset(div_16);
          append($$anchor3, div_16);
        };
        var consequent_11 = ($$anchor3) => {
          var fragment_2 = root_12();
          var div_17 = first_child(fragment_2);
          each(div_17, 5, () => get(filteredItems), index, ($$anchor4, skill, $$index) => {
            {
              let $0 = derived_safe_equal(() => (get(skill), untrack(() => {
                var _a, _b;
                return ((_a = get(skill)) == null ? void 0 : _a.description) ?? ((_b = get(skill)) == null ? void 0 : _b.id);
              })));
              Tooltip($$anchor4, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var div_18 = root_10();
                  var node_11 = child(div_18);
                  {
                    var consequent_6 = ($$anchor6) => {
                      var a_1 = root_5();
                      var div_19 = child(a_1);
                      var div_20 = child(div_19);
                      var node_12 = child(div_20);
                      Tooltip(node_12, {
                        get content() {
                          return get(skill), untrack(() => get(skill).id);
                        },
                        placement: "top-start",
                        children: ($$anchor7, $$slotProps2) => {
                          var div_21 = root_4();
                          var div_22 = child(div_21);
                          var text_5 = child(div_22, true);
                          reset(div_22);
                          var node_13 = sibling(div_22, 2);
                          {
                            var consequent_5 = ($$anchor8) => {
                              {
                                let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Inactive"))));
                                Badge($$anchor8, {
                                  type: "muted",
                                  get content() {
                                    return get($02);
                                  }
                                });
                              }
                            };
                            if_block(node_13, ($$render) => {
                              if (get(skill), untrack(() => !get(skill).is_active)) $$render(consequent_5);
                            });
                          }
                          reset(div_21);
                          template_effect(() => set_text(text_5, (get(skill), untrack(() => get(skill).name))));
                          append($$anchor7, div_21);
                        },
                        $$slots: { default: true }
                      });
                      var div_23 = sibling(node_12, 2);
                      var div_24 = child(div_23);
                      var node_14 = child(div_24);
                      {
                        let $02 = derived_safe_equal(() => (get(skill), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(skill)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_14, {
                          get content() {
                            return get($02);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor7, $$slotProps2) => {
                            next();
                            var text_6 = text();
                            template_effect(($03) => set_text(text_6, $03), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(skill), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(skill)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(skill)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor7, text_6);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_24);
                      reset(div_23);
                      reset(div_20);
                      reset(div_19);
                      reset(a_1);
                      template_effect(($02) => set_attribute(a_1, "href", $02), [
                        () => (get(skill), untrack(() => `/workspace/skills/edit?id=${encodeURIComponent(get(skill).id)}`))
                      ]);
                      append($$anchor6, a_1);
                    };
                    var alternate = ($$anchor6) => {
                      var div_25 = root_6();
                      var div_26 = child(div_25);
                      var div_27 = child(div_26);
                      var div_28 = child(div_27);
                      var node_15 = child(div_28);
                      Tooltip(node_15, {
                        get content() {
                          return get(skill), untrack(() => get(skill).id);
                        },
                        placement: "top-start",
                        children: ($$anchor7, $$slotProps2) => {
                          var div_29 = root_4();
                          var div_30 = child(div_29);
                          var text_7 = child(div_30, true);
                          reset(div_30);
                          var node_16 = sibling(div_30, 2);
                          {
                            var consequent_7 = ($$anchor8) => {
                              {
                                let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Inactive"))));
                                Badge($$anchor8, {
                                  type: "muted",
                                  get content() {
                                    return get($02);
                                  }
                                });
                              }
                            };
                            if_block(node_16, ($$render) => {
                              if (get(skill), untrack(() => !get(skill).is_active)) $$render(consequent_7);
                            });
                          }
                          reset(div_29);
                          template_effect(() => set_text(text_7, (get(skill), untrack(() => get(skill).name))));
                          append($$anchor7, div_29);
                        },
                        $$slots: { default: true }
                      });
                      var node_17 = sibling(node_15, 2);
                      {
                        let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Only"))));
                        Badge(node_17, {
                          type: "muted",
                          get content() {
                            return get($02);
                          }
                        });
                      }
                      reset(div_28);
                      var div_31 = sibling(div_28, 2);
                      var div_32 = child(div_31);
                      var node_18 = child(div_32);
                      {
                        let $02 = derived_safe_equal(() => (get(skill), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(skill)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_18, {
                          get content() {
                            return get($02);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor7, $$slotProps2) => {
                            next();
                            var text_8 = text();
                            template_effect(($03) => set_text(text_8, $03), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(skill), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(skill)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(skill)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor7, text_8);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_32);
                      reset(div_31);
                      reset(div_27);
                      reset(div_26);
                      reset(div_25);
                      append($$anchor6, div_25);
                    };
                    if_block(node_11, ($$render) => {
                      if (get(skill), untrack(() => get(skill).write_access)) $$render(consequent_6);
                      else $$render(alternate, -1);
                    });
                  }
                  var node_19 = sibling(node_11, 2);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var div_33 = root_9();
                      var node_20 = child(div_33);
                      {
                        var consequent_8 = ($$anchor7) => {
                          {
                            let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                            Tooltip($$anchor7, {
                              get content() {
                                return get($02);
                              },
                              children: ($$anchor8, $$slotProps2) => {
                                var button_3 = root_7();
                                var node_21 = child(button_3);
                                GarbageBin(node_21, {});
                                reset(button_3);
                                template_effect(($03) => set_attribute(button_3, "aria-label", $03), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                                event("click", button_3, () => {
                                  deleteHandler(get(skill));
                                });
                                append($$anchor8, button_3);
                              },
                              $$slots: { default: true }
                            });
                          }
                        };
                        var alternate_1 = ($$anchor7) => {
                          SkillMenu($$anchor7, {
                            editHandler: () => {
                              goto(`/workspace/skills/edit?id=${encodeURIComponent(get(skill).id)}`);
                            },
                            cloneHandler: () => {
                              cloneHandler(get(skill));
                            },
                            exportHandler: () => {
                              exportHandler(get(skill));
                            },
                            deleteHandler: async () => {
                              set(selectedSkill, get(skill));
                              set(showDeleteConfirm, true);
                            },
                            onClose: () => {
                            },
                            children: ($$anchor8, $$slotProps2) => {
                              var button_4 = root_8();
                              var node_22 = child(button_4);
                              EllipsisHorizontal(node_22, { className: "size-5" });
                              reset(button_4);
                              append($$anchor8, button_4);
                            },
                            $$slots: { default: true }
                          });
                        };
                        if_block(node_20, ($$render) => {
                          if (get(shiftKey)) $$render(consequent_8);
                          else $$render(alternate_1, -1);
                        });
                      }
                      var button_5 = sibling(node_20, 2);
                      var node_23 = child(button_5);
                      {
                        let $02 = derived_safe_equal(() => (get(skill), $i18n(), untrack(() => get(skill).is_active ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
                        Tooltip(node_23, {
                          get content() {
                            return get($02);
                          },
                          children: ($$anchor7, $$slotProps2) => {
                            Switch_1($$anchor7, {
                              get state() {
                                return get(skill).is_active;
                              },
                              set state($$value) {
                                get(skill).is_active = $$value, invalidate_inner_signals(() => get(filteredItems));
                              },
                              $$events: {
                                change: async () => {
                                  toggleSkillById(localStorage.token, get(skill).id);
                                }
                              },
                              $$legacy: true
                            });
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(button_5);
                      reset(div_33);
                      event("click", button_5, preventDefault(stopPropagation(function($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      })));
                      append($$anchor6, div_33);
                    };
                    if_block(node_19, ($$render) => {
                      if (get(skill), untrack(() => get(skill).write_access)) $$render(consequent_9);
                    });
                  }
                  reset(div_18);
                  template_effect(() => set_class(div_18, 1, ` flex space-x-4 text-left w-full px-3 py-2.5 transition rounded-2xl ${(get(skill), untrack(() => get(skill).write_access ? "cursor-pointer dark:hover:bg-gray-850/50 hover:bg-gray-50" : "cursor-not-allowed opacity-60")) ?? ""}`));
                  append($$anchor5, div_18);
                },
                $$slots: { default: true }
              });
            }
          });
          reset(div_17);
          var node_24 = sibling(div_17, 2);
          {
            var consequent_10 = ($$anchor4) => {
              var div_34 = root_11();
              var node_25 = child(div_34);
              Pagination_1(node_25, {
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
              reset(div_34);
              append($$anchor4, div_34);
            };
            if_block(node_24, ($$render) => {
              if (get(total) > 30) $$render(consequent_10);
            });
          }
          append($$anchor3, fragment_2);
        };
        var alternate_2 = ($$anchor3) => {
          var div_35 = root_13();
          var div_36 = child(div_35);
          var div_37 = sibling(child(div_36), 2);
          var text_9 = child(div_37, true);
          reset(div_37);
          var div_38 = sibling(div_37, 2);
          var text_10 = child(div_38, true);
          reset(div_38);
          reset(div_36);
          reset(div_35);
          template_effect(
            ($0, $1) => {
              set_text(text_9, $0);
              set_text(text_10, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No skills found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_35);
        };
        if_block(node_9, ($$render) => {
          if (get(filteredItems) === null || get(loading)) $$render(consequent_4);
          else if (get(filteredItems), untrack(() => (get(filteredItems) ?? []).length !== 0)) $$render(consequent_11, 1);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_9);
      var node_26 = sibling(div_9, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete skill?"))));
        ConfirmDialog(node_26, {
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
              deleteHandler(get(selectedSkill));
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_39 = root_14();
            var text_11 = child(div_39);
            var span = sibling(text_11);
            var text_12 = child(span, true);
            reset(span);
            next();
            reset(div_39);
            template_effect(
              ($02) => {
                set_text(text_11, `${$02 ?? ""} `);
                set_text(text_12, (get(selectedSkill), untrack(() => get(selectedSkill).name)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div_39);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      template_effect(
        ($0, $1, $2) => {
          set_text(text$1, $0);
          set_text(text_1, get(total) ?? "");
          set_attribute(input_1, "aria-label", $1);
          set_attribute(input_1, "placeholder", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Skills"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Skills"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Skills")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        var _a;
        if (get(importFiles) && get(importFiles).length > 0) {
          const file = get(importFiles)[0];
          const ext = (_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase();
          if (ext === "json") {
            const reader = new FileReader();
            reader.onload = async (event2) => {
              var _a2;
              try {
                const content = (_a2 = event2.target) == null ? void 0 : _a2.result;
                if (typeof content !== "string") return;
                const parsedSkills = JSON.parse(content);
                const items = Array.isArray(parsedSkills) ? parsedSkills : [parsedSkills];
                for (const skill of items) {
                  await createNewSkill(localStorage.token, skill).catch((error) => {
                    toast.error(`${error}`);
                  });
                }
                toast.success($i18n().t("Skill imported successfully"));
                set(page, 1);
                loadSkillItems();
                skills.set(await getSkills(localStorage.token));
              } catch (e) {
                toast.error($i18n().t("Invalid JSON file"));
              }
            };
            reader.readAsText(file);
          } else {
            const reader = new FileReader();
            reader.onload = (event2) => {
              var _a2;
              const mdContent = (_a2 = event2.target) == null ? void 0 : _a2.result;
              if (typeof mdContent === "string") {
                const fm = parseFrontmatter(mdContent);
                const fileName = file.name.replace(/\.md$/, "");
                const rawName = fm.name || fileName;
                const displayName = formatSkillName(rawName);
                sessionStorage.skill = JSON.stringify({
                  name: displayName,
                  id: fm.name || "",
                  description: fm.description || "",
                  content: mdContent,
                  is_active: true,
                  access_grants: []
                });
                goto("/workspace/skills/create");
              }
            };
            reader.readAsText(file);
          }
          mutate(importInputElement, get(importInputElement).value = "");
        }
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_14, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_3 = ($$anchor2) => {
      var div_40 = root_16();
      var node_27 = child(div_40);
      Spinner(node_27, { className: "size-5" });
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
  Skills($$anchor, {});
}
export {
  _page as component
};
