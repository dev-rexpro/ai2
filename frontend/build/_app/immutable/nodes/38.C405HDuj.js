import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, c as child, z as sibling, k as get, r as reset, m as deep_read_state, u as untrack, t as template_effect, d as set_text, y as event, a as append, w as set, v as user_derived, aW as text, h as first_child, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, B as from_svg, o as onMount, A as tick, l as legacy_pre_effect, n as legacy_pre_effect_reset, g as comment, C as deferred_template_effect, $ as $document, b1 as invalidate_inner_signals } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { s as settings, u as user, c as config, R as REXPRO_NAME, m as models } from "../chunks/BJ3rUC-5.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { e as each } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { r as remove_input_defaults, s as set_attribute, a as set_class } from "../chunks/B9yCN616.js";
import { c as bind_files, b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { m as marked } from "../chunks/zFu7_FHZ.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import "../chunks/Blls-5_I.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { a as REXPRO_API_BASE_URL } from "../chunks/CZpnbXda.js";
import { a as getModelItems, b as getModelTags, u as updateModelById, c as createNewModel, d as deleteModelById, t as toggleModelById } from "../chunks/CVPpQuuG.js";
import { g as getGroups } from "../chunks/C9ZHzqWY.js";
import { u as updateUserSettings } from "../chunks/CP40r8ux.js";
import { l as capitalizeFirstLetter, m as copyToClipboard } from "../chunks/X0cYWxFO.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { C as CheckCircle } from "../chunks/DUvT6w05.js";
import { M as Minus } from "../chunks/DT4OldyN.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { P as Pencil } from "../chunks/Bga8-tII.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { S as Share } from "../chunks/BOF8D99c.js";
import { D as DocumentDuplicate } from "../chunks/DjWyMeMm.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { P as PinSlash, a as Pin } from "../chunks/BFblSxUV.js";
import { L as Link } from "../chunks/-zozyKl_.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { C as ChevronRight } from "../chunks/BaIXj_tA.js";
import { S as Switch_1 } from "../chunks/l6D7S60E.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { E as EyeSlash } from "../chunks/YGEVJtFy.js";
import { E as Eye } from "../chunks/D8sytCng.js";
import { V as ViewSelector } from "../chunks/DU19ZWkD.js";
import { T as TagSelector } from "../chunks/HJCr9QAW.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
var root$1 = from_html(`<button><!></button>`);
var root_1$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_2$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);
var root_3$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
var root_4$1 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"><!></div></button>`);
var root_5$1 = from_html(`<hr class="border-gray-50/30 dark:border-gray-800/30 my-1"/>`);
var root_6$1 = from_html(`<hr class="border-gray-50/30 dark:border-gray-800/30 my-1"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`, 1);
var root_7$1 = from_html(`<div slot="content"><div class="min-w-[170px] rounded-2xl p-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!> <!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"><!></div></button> <!> <!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <!> <!> <!></div></div>`);
function ModelMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $currentUser = () => store_get(user, "$currentUser", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  prop($$props, "user", 8);
  let model = prop($$props, "model", 8);
  let editHandler = prop($$props, "editHandler", 8);
  let shareHandler = prop($$props, "shareHandler", 8);
  let cloneHandler = prop($$props, "cloneHandler", 8);
  let exportHandler = prop($$props, "exportHandler", 8);
  let copyLinkHandler = prop($$props, "copyLinkHandler", 8);
  let hideHandler = prop($$props, "hideHandler", 8);
  let pinModelHandler = prop($$props, "pinModelHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let onClose = prop($$props, "onClose", 8);
  let writeAccess = prop($$props, "writeAccess", 8, true);
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
            var button = root$1();
            var node = child(button);
            slot(node, $$props, "default", {}, null);
            reset(button);
            event("click", button, (e) => {
              e.stopPropagation();
              set(show, !get(show));
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_7$1();
        var div_1 = child(div);
        var node_1 = child(div_1);
        {
          var consequent = ($$anchor3) => {
            var button_1 = root_1$1();
            var node_2 = child(button_1);
            Pencil(node_2, {});
            var div_2 = sibling(node_2, 2);
            var text2 = child(div_2, true);
            reset(div_2);
            reset(button_1);
            template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit")))]);
            event("click", button_1, () => {
              editHandler()();
            });
            append($$anchor3, button_1);
          };
          if_block(node_1, ($$render) => {
            if (writeAccess()) $$render(consequent);
          });
        }
        var node_3 = sibling(node_1, 2);
        {
          var consequent_3 = ($$anchor3) => {
            var button_2 = root_4$1();
            var node_4 = child(button_2);
            {
              var consequent_1 = ($$anchor4) => {
                var svg = root_2$1();
                append($$anchor4, svg);
              };
              var alternate = ($$anchor4) => {
                var svg_1 = root_3$1();
                append($$anchor4, svg_1);
              };
              if_block(node_4, ($$render) => {
                if (deep_read_state(model()), untrack(() => {
                  var _a, _b;
                  return ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false;
                })) $$render(consequent_1);
                else $$render(alternate, -1);
              });
            }
            var div_3 = sibling(node_4, 2);
            var node_5 = child(div_3);
            {
              var consequent_2 = ($$anchor4) => {
                var text_1 = text();
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Show Model")))]);
                append($$anchor4, text_1);
              };
              var alternate_1 = ($$anchor4) => {
                var text_2 = text();
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide Model")))]);
                append($$anchor4, text_2);
              };
              if_block(node_5, ($$render) => {
                if (deep_read_state(model()), untrack(() => {
                  var _a, _b;
                  return ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false;
                })) $$render(consequent_2);
                else $$render(alternate_1, -1);
              });
            }
            reset(div_3);
            reset(button_2);
            event("click", button_2, () => {
              hideHandler()();
            });
            append($$anchor3, button_2);
          };
          if_block(node_3, ($$render) => {
            if (writeAccess()) $$render(consequent_3);
          });
        }
        var button_3 = sibling(node_3, 2);
        var node_6 = child(button_3);
        {
          var consequent_4 = ($$anchor3) => {
            PinSlash($$anchor3, {});
          };
          var d = user_derived(() => ($settings(), deep_read_state(model()), untrack(() => {
            var _a, _b;
            return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes((_b = model()) == null ? void 0 : _b.id);
          })));
          var alternate_2 = ($$anchor3) => {
            Pin($$anchor3, {});
          };
          if_block(node_6, ($$render) => {
            if (get(d)) $$render(consequent_4);
            else $$render(alternate_2, -1);
          });
        }
        var div_4 = sibling(node_6, 2);
        var node_7 = child(div_4);
        {
          var consequent_5 = ($$anchor3) => {
            var text_3 = text();
            template_effect(($0) => set_text(text_3, $0), [
              () => ($i18n(), untrack(() => $i18n().t("Hide from Sidebar")))
            ]);
            append($$anchor3, text_3);
          };
          var d_1 = user_derived(() => ($settings(), deep_read_state(model()), untrack(() => {
            var _a, _b;
            return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes((_b = model()) == null ? void 0 : _b.id);
          })));
          var alternate_3 = ($$anchor3) => {
            var text_4 = text();
            template_effect(($0) => set_text(text_4, $0), [
              () => ($i18n(), untrack(() => $i18n().t("Keep in Sidebar")))
            ]);
            append($$anchor3, text_4);
          };
          if_block(node_7, ($$render) => {
            if (get(d_1)) $$render(consequent_5);
            else $$render(alternate_3, -1);
          });
        }
        reset(div_4);
        reset(button_3);
        var node_8 = sibling(button_3, 2);
        {
          var consequent_6 = ($$anchor3) => {
            var button_4 = root_1$1();
            var node_9 = child(button_4);
            DocumentDuplicate(node_9, {});
            var div_5 = sibling(node_9, 2);
            var text_5 = child(div_5, true);
            reset(div_5);
            reset(button_4);
            template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
            event("click", button_4, () => {
              cloneHandler()();
            });
            append($$anchor3, button_4);
          };
          if_block(node_8, ($$render) => {
            if (writeAccess()) $$render(consequent_6);
          });
        }
        var node_10 = sibling(node_8, 2);
        {
          var consequent_7 = ($$anchor3) => {
            var hr = root_5$1();
            append($$anchor3, hr);
          };
          if_block(node_10, ($$render) => {
            if (writeAccess()) $$render(consequent_7);
          });
        }
        var button_5 = sibling(node_10, 2);
        var node_11 = child(button_5);
        Link(node_11, {});
        var div_6 = sibling(node_11, 2);
        var text_6 = child(div_6, true);
        reset(div_6);
        reset(button_5);
        var node_12 = sibling(button_5, 2);
        {
          var consequent_8 = ($$anchor3) => {
            var button_6 = root_1$1();
            var node_13 = child(button_6);
            Download(node_13, {});
            var div_7 = sibling(node_13, 2);
            var text_7 = child(div_7, true);
            reset(div_7);
            reset(button_6);
            template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
            event("click", button_6, () => {
              exportHandler()();
            });
            append($$anchor3, button_6);
          };
          if_block(node_12, ($$render) => {
            if (deep_read_state(writeAccess()), $currentUser(), untrack(() => {
              var _a, _b, _c, _d;
              return writeAccess() && (((_a = $currentUser()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $currentUser()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_export));
            })) $$render(consequent_8);
          });
        }
        var node_14 = sibling(node_12, 2);
        {
          var consequent_9 = ($$anchor3) => {
            var button_7 = root_1$1();
            var node_15 = child(button_7);
            Share(node_15, {});
            var div_8 = sibling(node_15, 2);
            var text_8 = child(div_8, true);
            reset(div_8);
            reset(button_7);
            template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
            event("click", button_7, () => {
              shareHandler()();
            });
            append($$anchor3, button_7);
          };
          if_block(node_14, ($$render) => {
            if (deep_read_state(writeAccess()), $config(), untrack(() => {
              var _a;
              return writeAccess() && ((_a = $config()) == null ? void 0 : _a.features.enable_community_sharing);
            })) $$render(consequent_9);
          });
        }
        var node_16 = sibling(node_14, 2);
        {
          var consequent_10 = ($$anchor3) => {
            var fragment_8 = root_6$1();
            var button_8 = sibling(first_child(fragment_8), 2);
            var node_17 = child(button_8);
            GarbageBin(node_17, {});
            var div_9 = sibling(node_17, 2);
            var text_9 = child(div_9, true);
            reset(div_9);
            reset(button_8);
            template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
            event("click", button_8, () => {
              deleteHandler()();
            });
            append($$anchor3, fragment_8);
          };
          if_block(node_16, ($$render) => {
            if (writeAccess()) $$render(consequent_10);
          });
        }
        reset(div_1);
        reset(div);
        template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy Link")))]);
        event("click", button_3, () => {
          var _a;
          pinModelHandler()((_a = model()) == null ? void 0 : _a.id);
        });
        event("click", button_5, () => {
          copyLinkHandler()();
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
var root_1 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_2 = from_html(`<button class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition" type="button"><!></button>`);
var root_3 = from_html(`<div slot="content"><div class="w-[170px] rounded-xl p-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-sm"><button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> <div class="flex items-center"> </div></button> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> <div class="flex items-center"> </div></button> <hr class="border-gray-100 dark:border-gray-800 my-1"/> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> <div class="flex items-center"> </div></button> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md" type="button"><!> <div class="flex items-center"> </div></button></div></div>`);
var root_4 = from_html(`<a class=" font-medium line-clamp-1 hover:underline capitalize"> </a>`);
var root_5 = from_html(`<div><!></div>`);
var root_6 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_7 = from_html(`<!> <!>`, 1);
var root_8 = from_html(`<div class="self-center w-fit p-1 text-sm dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><!></div>`);
var root_9 = from_html(`<button><!></button>`);
var root_10 = from_html(`<div class="shrink-0 text-gray-500 text-xs"> </div>`);
var root_11 = from_html(`<div class="flex gap-1 text-xs overflow-hidden"><div class="line-clamp-1"><!></div></div>`);
var root_12 = from_html(`<div><div class="flex group/item gap-3.5 w-full"><div class="self-center pl-0.5"><div class="flex bg-white rounded-2xl"><div><img alt="modelfile profile" class=" rounded-2xl size-12 object-cover" loading="lazy" decoding="async"/></div></div></div> <div class=" shrink-0 flex w-full min-w-0 flex-1 pr-1 self-center"><div class="flex h-full w-full flex-1 flex-col justify-start self-center group"><div class="flex-1 w-full"><div class="flex items-center justify-between w-full"><!> <div class="flex items-center gap-1"><!> <div><div class="flex items-center gap-0.5"><!></div></div> <!></div></div> <div class=" flex gap-1 pr-2 -mt-1 items-center"><!> <div>·</div> <!></div></div></div></div></div></div>`);
var root_13 = from_html(`<div class=" px-3 my-2 gap-1 lg:gap-2 grid lg:grid-cols-2" id="model-list"></div> <!>`, 1);
var root_14 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-gray-300 dark:text-gray-600 mb-3"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_15 = from_html(`<div class="w-full h-full flex justify-center items-center py-10"><!></div>`);
var root_16 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://rexpro-ai.rexpro.com/models" target="_blank"><div class=" self-center"><div class=" font-medium line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_17 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><input id="models-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!> <a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/models/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent" maxlength="500"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-0.5 whitespace-nowrap"><!> <!></div> <div class="flex-1"></div> <!></div> <!></div> <!>`, 1);
var root_18 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Models($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $_models = () => store_get(models, "$_models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let shiftKey = mutable_source(false);
  let importFiles = mutable_source();
  let modelsImportInputElement = mutable_source();
  let tagsContainerElement = mutable_source();
  let loaded = mutable_source(false);
  let showModelDeleteConfirm = mutable_source(false);
  let selectedModel = mutable_source(null);
  let tags = mutable_source([]);
  let selectedTag = mutable_source("");
  let query = mutable_source("");
  let viewOption = mutable_source("");
  let page = mutable_source(1);
  let models$1 = mutable_source(null);
  let total = mutable_source(null);
  let searchDebounceTimer = mutable_source();
  const getModelList = async () => {
    if (!get(loaded)) return;
    try {
      const res = await getModelItems(localStorage.token, get(query), get(viewOption), get(selectedTag), null, null, get(page)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(models$1, res.items);
        set(total, res.total);
        set(tags, await getModelTags(localStorage.token).catch((error) => {
          toast.error(`${error}`);
          return [];
        }));
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    }
  };
  const deleteModelHandler = async (model) => {
    var _a, _b, _c;
    const res = await deleteModelById(localStorage.token, model.id).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: model.id }));
      set(page, 1);
      getModelList();
    }
    await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
  };
  const cloneModelHandler = async (model) => {
    sessionStorage.model = JSON.stringify({
      ...model,
      id: `${model.id}-clone`,
      name: `${model.name} (Clone)`
    });
    goto("/workspace/models/create");
  };
  const shareModelHandler = async (model) => {
    toast.success($i18n().t("Redirecting you to rexpro-ai Community"));
    const url = "https://rexpro-ai.rexpro.com";
    const tab = await window.open(`${url}/models/create`, "_blank");
    const messageHandler = (event2) => {
      if (event2.origin !== url) return;
      if (event2.data === "loaded") {
        tab.postMessage(JSON.stringify(model), "*");
        window.removeEventListener("message", messageHandler);
      }
    };
    window.addEventListener("message", messageHandler, false);
  };
  const hideModelHandler = async (model) => {
    var _a, _b, _c, _d;
    model.meta = { ...model.meta, hidden: !(((_a = model == null ? void 0 : model.meta) == null ? void 0 : _a.hidden) ?? false) };
    /* @__PURE__ */ console.log(model);
    const res = await updateModelById(localStorage.token, model.id, model);
    if (res) {
      toast.success($i18n().t(`Model {{name}} is now {{status}}`, {
        name: model.id,
        status: model.meta.hidden ? "hidden" : "visible"
      }));
      set(page, 1);
      getModelList();
    }
    await models.set(await getModels(localStorage.token, ((_c = (_b = $config()) == null ? void 0 : _b.features) == null ? void 0 : _c.enable_direct_connections) && (((_d = $settings()) == null ? void 0 : _d.directConnections) ?? null)));
  };
  const copyLinkHandler = async (model) => {
    const baseUrl = window.location.origin;
    const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
    if (res) {
      toast.success($i18n().t("Copied link to clipboard"));
    } else {
      toast.error($i18n().t("Failed to copy link"));
    }
  };
  const downloadModels = async (models2) => {
    let blob = new Blob([JSON.stringify(models2)], { type: "application/json" });
    saveAs(blob, `models-export-${Date.now()}.json`);
  };
  const exportModelHandler = async (model) => {
    let blob = new Blob([JSON.stringify([model])], { type: "application/json" });
    saveAs(blob, `${model.id}-${Date.now()}.json`);
  };
  const pinModelHandler = async (modelId) => {
    var _a;
    let pinnedModels = ((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? [];
    if (pinnedModels.includes(modelId)) {
      pinnedModels = pinnedModels.filter((id) => id !== modelId);
    } else {
      pinnedModels = [.../* @__PURE__ */ new Set([...pinnedModels, modelId])];
    }
    settings.set({ ...$settings(), pinnedModels });
    await updateUserSettings(localStorage.token, { ui: $settings() });
  };
  const enableAllHandler = async () => {
    const modelsToEnable = (get(models$1) ?? []).filter((m) => !(m.is_active ?? true));
    modelsToEnable.forEach((m) => m.is_active = true);
    set(models$1, get(models$1));
    await Promise.all(modelsToEnable.map((model) => toggleModelById(localStorage.token, model.id)));
  };
  const disableAllHandler = async () => {
    const modelsToDisable = (get(models$1) ?? []).filter((m) => m.is_active ?? true);
    modelsToDisable.forEach((m) => m.is_active = false);
    set(models$1, get(models$1));
    await Promise.all(modelsToDisable.map((model) => toggleModelById(localStorage.token, model.id)));
  };
  const showAllHandler = async () => {
    const modelsToShow = (get(models$1) ?? []).filter((m) => {
      var _a;
      return ((_a = m == null ? void 0 : m.meta) == null ? void 0 : _a.hidden) === true;
    });
    modelsToShow.forEach((m) => {
      m.meta = { ...m.meta, hidden: false };
    });
    set(models$1, get(models$1));
    await Promise.all(modelsToShow.map((model) => updateModelById(localStorage.token, model.id, model)));
    toast.success($i18n().t("All models are now visible"));
  };
  const hideAllHandler = async () => {
    const modelsToHide = (get(models$1) ?? []).filter((m) => {
      var _a;
      return !(((_a = m == null ? void 0 : m.meta) == null ? void 0 : _a.hidden) ?? false);
    });
    modelsToHide.forEach((m) => {
      m.meta = { ...m.meta, hidden: true };
    });
    set(models$1, get(models$1));
    await Promise.all(modelsToHide.map((model) => updateModelById(localStorage.token, model.id, model)));
    toast.success($i18n().t("All models are now hidden"));
  };
  onMount(async () => {
    set(viewOption, localStorage.workspaceViewOption ?? "");
    set(page, 1);
    let groups = await getGroups(localStorage.token);
    groups.map((group) => group.id);
    await tick();
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
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  });
  legacy_pre_effect(
    () => (get(loaded), get(page), get(selectedTag), get(viewOption)),
    () => {
      if (get(loaded) && get(page) !== void 0 && get(selectedTag) !== void 0 && get(viewOption) !== void 0) {
        getModelList();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("91cwg4", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Models")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_13 = ($$anchor2) => {
      var fragment_1 = root_17();
      var node_1 = first_child(fragment_1);
      ConfirmDialog(node_1, {
        get show() {
          return get(showModelDeleteConfirm);
        },
        set show($$value) {
          set(showModelDeleteConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            deleteModelHandler(get(selectedModel));
          }
        },
        $$legacy: true
      });
      var div = sibling(node_1, 2);
      var input = child(div);
      bind_this(input, ($$value) => set(modelsImportInputElement, $$value), () => get(modelsImportInputElement));
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
            get(modelsImportInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_import);
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
            downloadModels(get(models$1));
          });
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (get(total), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(total) && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_export));
          })) $$render(consequent_1);
        });
      }
      var a = sibling(node_3, 2);
      var node_4 = child(a);
      Plus(node_4, { className: "size-3", strokeWidth: "2.5" });
      var div_8 = sibling(node_4, 2);
      var text_4 = child(div_8, true);
      reset(div_8);
      reset(a);
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
        var consequent_2 = ($$anchor3) => {
          var div_13 = root_1();
          var button_2 = child(div_13);
          var node_7 = child(button_2);
          XMark(node_7, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_13);
          template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Clear search")))]);
          event("click", button_2, () => {
            set(query, "");
            getModelList();
          });
          append($$anchor3, div_13);
        };
        if_block(node_6, ($$render) => {
          if (get(query)) $$render(consequent_2);
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
            let $0 = derived_safe_equal(() => (get(tags), untrack(() => get(tags).map((tag) => {
              return { value: tag, label: tag };
            }))));
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
      reset(div_15);
      bind_this(div_15, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      var node_10 = sibling(div_15, 4);
      Dropdown(node_10, {
        children: ($$anchor3, $$slotProps) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Actions"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_3 = root_2();
                var node_11 = child(button_3);
                EllipsisHorizontal(node_11, { className: "size-4" });
                reset(button_3);
                append($$anchor4, button_3);
              },
              $$slots: { default: true }
            });
          }
        },
        $$slots: {
          default: true,
          content: ($$anchor3, $$slotProps) => {
            var div_16 = root_3();
            var div_17 = child(div_16);
            var button_4 = child(div_17);
            var node_12 = child(button_4);
            CheckCircle(node_12, { className: "size-4" });
            var div_18 = sibling(node_12, 2);
            var text_5 = child(div_18, true);
            reset(div_18);
            reset(button_4);
            var button_5 = sibling(button_4, 2);
            var node_13 = child(button_5);
            Minus(node_13, { className: "size-4" });
            var div_19 = sibling(node_13, 2);
            var text_6 = child(div_19, true);
            reset(div_19);
            reset(button_5);
            var button_6 = sibling(button_5, 4);
            var node_14 = child(button_6);
            Eye(node_14, { className: "size-4" });
            var div_20 = sibling(node_14, 2);
            var text_7 = child(div_20, true);
            reset(div_20);
            reset(button_6);
            var button_7 = sibling(button_6, 2);
            var node_15 = child(button_7);
            EyeSlash(node_15, { className: "size-4" });
            var div_21 = sibling(node_15, 2);
            var text_8 = child(div_21, true);
            reset(div_21);
            reset(button_7);
            reset(div_17);
            reset(div_16);
            template_effect(
              ($0, $1, $2, $3) => {
                set_text(text_5, $0);
                set_text(text_6, $1);
                set_text(text_7, $2);
                set_text(text_8, $3);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Enable All"))),
                () => ($i18n(), untrack(() => $i18n().t("Disable All"))),
                () => ($i18n(), untrack(() => $i18n().t("Show All"))),
                () => ($i18n(), untrack(() => $i18n().t("Hide All")))
              ]
            );
            event("click", button_4, () => {
              enableAllHandler();
            });
            event("click", button_5, () => {
              disableAllHandler();
            });
            event("click", button_6, () => {
              showAllHandler();
            });
            event("click", button_7, () => {
              hideAllHandler();
            });
            append($$anchor3, div_16);
          }
        }
      });
      reset(div_14);
      var node_16 = sibling(div_14, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var fragment_4 = comment();
          var node_17 = first_child(fragment_4);
          {
            var consequent_10 = ($$anchor4) => {
              var fragment_5 = root_13();
              var div_22 = first_child(fragment_5);
              each(div_22, 5, () => get(models$1), (model) => model.id, ($$anchor5, model, $$index) => {
                var div_23 = root_12();
                var div_24 = child(div_23);
                var div_25 = child(div_24);
                var div_26 = child(div_25);
                var div_27 = child(div_26);
                var img = child(div_27);
                reset(div_27);
                reset(div_26);
                reset(div_25);
                var div_28 = sibling(div_25, 2);
                var div_29 = child(div_28);
                var div_30 = child(div_29);
                var div_31 = child(div_30);
                var node_18 = child(div_31);
                Tooltip(node_18, {
                  get content() {
                    return get(model), untrack(() => get(model).name);
                  },
                  className: " w-fit",
                  placement: "top-start",
                  children: ($$anchor6, $$slotProps) => {
                    var a_1 = root_4();
                    var text_9 = child(a_1, true);
                    reset(a_1);
                    template_effect(
                      ($0) => {
                        set_attribute(a_1, "href", $0);
                        set_text(text_9, (get(model), untrack(() => get(model).name)));
                      },
                      [
                        () => (get(model), untrack(() => `/?models=${encodeURIComponent(get(model).id)}`))
                      ]
                    );
                    append($$anchor6, a_1);
                  },
                  $$slots: { default: true }
                });
                var div_32 = sibling(node_18, 2);
                var node_19 = child(div_32);
                {
                  var consequent_4 = ($$anchor6) => {
                    var div_33 = root_5();
                    var node_20 = child(div_33);
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Only"))));
                      Badge(node_20, {
                        type: "muted",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                    reset(div_33);
                    append($$anchor6, div_33);
                  };
                  if_block(node_19, ($$render) => {
                    if (get(model), untrack(() => !get(model).write_access)) $$render(consequent_4);
                  });
                }
                var div_34 = sibling(node_19, 2);
                var div_35 = child(div_34);
                var node_21 = child(div_35);
                {
                  var consequent_6 = ($$anchor6) => {
                    var fragment_6 = root_7();
                    var node_22 = first_child(fragment_6);
                    {
                      let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => {
                        var _a, _b;
                        return ((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ? $i18n().t("Show") : $i18n().t("Hide");
                      })));
                      Tooltip(node_22, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          var button_8 = root_6();
                          var node_23 = child(button_8);
                          {
                            var consequent_5 = ($$anchor8) => {
                              EyeSlash($$anchor8, {});
                            };
                            var alternate = ($$anchor8) => {
                              Eye($$anchor8, {});
                            };
                            if_block(node_23, ($$render) => {
                              if (get(model), untrack(() => {
                                var _a, _b;
                                return (_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden;
                              })) $$render(consequent_5);
                              else $$render(alternate, -1);
                            });
                          }
                          reset(button_8);
                          template_effect(($02) => set_attribute(button_8, "aria-label", $02), [
                            () => (get(model), $i18n(), untrack(() => {
                              var _a, _b;
                              return ((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ? $i18n().t("Show") : $i18n().t("Hide");
                            }))
                          ]);
                          event("click", button_8, (e) => {
                            e.stopPropagation();
                            hideModelHandler(get(model));
                          });
                          append($$anchor7, button_8);
                        },
                        $$slots: { default: true }
                      });
                    }
                    var node_24 = sibling(node_22, 2);
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                      Tooltip(node_24, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          var button_9 = root_6();
                          var node_25 = child(button_9);
                          GarbageBin(node_25, {});
                          reset(button_9);
                          template_effect(($02) => set_attribute(button_9, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                          event("click", button_9, (e) => {
                            e.stopPropagation();
                            deleteModelHandler(get(model));
                          });
                          append($$anchor7, button_9);
                        },
                        $$slots: { default: true }
                      });
                    }
                    append($$anchor6, fragment_6);
                  };
                  var alternate_1 = ($$anchor6) => {
                    ModelMenu($$anchor6, {
                      get user() {
                        return $user();
                      },
                      get model() {
                        return get(model);
                      },
                      get writeAccess() {
                        return get(model), untrack(() => get(model).write_access);
                      },
                      editHandler: () => {
                        goto(`/workspace/models/edit?id=${encodeURIComponent(get(model).id)}`);
                      },
                      shareHandler: () => {
                        shareModelHandler(get(model));
                      },
                      cloneHandler: () => {
                        cloneModelHandler(get(model));
                      },
                      exportHandler: () => {
                        exportModelHandler(get(model));
                      },
                      hideHandler: () => {
                        hideModelHandler(get(model));
                      },
                      pinModelHandler: () => {
                        pinModelHandler(get(model).id);
                      },
                      copyLinkHandler: () => {
                        copyLinkHandler(get(model));
                      },
                      deleteHandler: () => {
                        set(selectedModel, get(model));
                        set(showModelDeleteConfirm, true);
                      },
                      onClose: () => {
                      },
                      children: ($$anchor7, $$slotProps) => {
                        var div_36 = root_8();
                        var node_26 = child(div_36);
                        EllipsisHorizontal(node_26, { className: "size-5" });
                        reset(div_36);
                        append($$anchor7, div_36);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_21, ($$render) => {
                    if (get(shiftKey), get(model), untrack(() => get(shiftKey) && get(model).write_access)) $$render(consequent_6);
                    else $$render(alternate_1, -1);
                  });
                }
                reset(div_35);
                reset(div_34);
                var node_27 = sibling(div_34, 2);
                {
                  var consequent_7 = ($$anchor6) => {
                    var button_10 = root_9();
                    var node_28 = child(button_10);
                    {
                      let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => get(model).is_active ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
                      Tooltip(node_28, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          Switch_1($$anchor7, {
                            get state() {
                              return get(model).is_active;
                            },
                            set state($$value) {
                              get(model).is_active = $$value, invalidate_inner_signals(() => get(models$1));
                            },
                            $$events: {
                              change: async () => {
                                var _a, _b, _c;
                                toggleModelById(localStorage.token, get(model).id);
                                models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
                              }
                            },
                            $$legacy: true
                          });
                        },
                        $$slots: { default: true }
                      });
                    }
                    reset(button_10);
                    event("click", button_10, (e) => {
                      e.stopPropagation();
                    });
                    append($$anchor6, button_10);
                  };
                  if_block(node_27, ($$render) => {
                    if (get(model), untrack(() => get(model).write_access)) $$render(consequent_7);
                  });
                }
                reset(div_32);
                reset(div_31);
                var div_37 = sibling(div_31, 2);
                var node_29 = child(div_37);
                {
                  let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(model)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                  })));
                  Tooltip(node_29, {
                    get content() {
                      return get($0);
                    },
                    className: "flex shrink-0",
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      var div_38 = root_10();
                      var text_10 = child(div_38, true);
                      reset(div_38);
                      template_effect(($02) => set_text(text_10, $02), [
                        () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(model), untrack(() => {
                          var _a, _b, _c, _d;
                          return $i18n().t("By {{name}}", {
                            name: capitalizeFirstLetter(((_b = (_a = get(model)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(model)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                          });
                        }))
                      ]);
                      append($$anchor6, div_38);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_30 = sibling(node_29, 4);
                {
                  let $0 = derived_safe_equal(() => (deep_read_state(marked), get(model), untrack(() => {
                    var _a, _b;
                    return marked.parse(((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? get(model).id);
                  })));
                  Tooltip(node_30, {
                    get content() {
                      return get($0);
                    },
                    className: " w-fit text-left",
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      var div_39 = root_11();
                      var div_40 = child(div_39);
                      var node_31 = child(div_40);
                      {
                        var consequent_8 = ($$anchor7) => {
                          var text_11 = text();
                          template_effect(() => set_text(text_11, (get(model), untrack(() => {
                            var _a, _b;
                            return (_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description;
                          }))));
                          append($$anchor7, text_11);
                        };
                        var d = user_derived(() => (get(model), untrack(() => {
                          var _a, _b;
                          return (((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? "").trim();
                        })));
                        var alternate_2 = ($$anchor7) => {
                          var text_12 = text();
                          template_effect(() => set_text(text_12, (get(model), untrack(() => get(model).id))));
                          append($$anchor7, text_12);
                        };
                        if_block(node_31, ($$render) => {
                          if (get(d)) $$render(consequent_8);
                          else $$render(alternate_2, -1);
                        });
                      }
                      reset(div_40);
                      reset(div_39);
                      append($$anchor6, div_39);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_37);
                reset(div_30);
                reset(div_29);
                reset(div_28);
                reset(div_24);
                reset(div_23);
                template_effect(() => {
                  set_class(div_23, 1, `flex transition rounded-2xl w-full p-2.5 ${(get(model), untrack(() => get(model).write_access ? "cursor-pointer dark:hover:bg-gray-850/50 hover:bg-gray-50" : "dark:hover:bg-gray-850/50 hover:bg-gray-50")) ?? ""}`);
                  set_attribute(div_23, "id", `model-item-${(get(model), untrack(() => get(model).id)) ?? ""}`);
                  set_class(div_27, 1, `${(get(model), untrack(() => get(model).is_active ? "" : "opacity-50 dark:opacity-50")) ?? ""} bg-transparent rounded-2xl`);
                  set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(model), $i18n(), untrack(() => `${REXPRO_API_BASE_URL}/models/model/profile/image?id=${get(model).id}&lang=${$i18n().language}`)));
                  set_class(div_34, 1, `flex ${(get(model), untrack(() => get(model).is_active ? "" : "text-gray-500")) ?? ""}`);
                });
                event("error", img, (e) => {
                  e.target.src = "/favicon.png";
                });
                event("click", div_23, () => {
                  if (get(model).write_access) {
                    goto(`/workspace/models/edit?id=${encodeURIComponent(get(model).id)}`);
                  }
                });
                append($$anchor5, div_23);
              });
              reset(div_22);
              var node_32 = sibling(div_22, 2);
              {
                var consequent_9 = ($$anchor5) => {
                  Pagination_1($$anchor5, {
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
                };
                if_block(node_32, ($$render) => {
                  if (get(total) > 30) $$render(consequent_9);
                });
              }
              append($$anchor4, fragment_5);
            };
            var alternate_3 = ($$anchor4) => {
              var div_41 = root_14();
              var div_42 = child(div_41);
              var div_43 = sibling(child(div_42), 2);
              var text_13 = child(div_43, true);
              reset(div_43);
              var div_44 = sibling(div_43, 2);
              var text_14 = child(div_44, true);
              reset(div_44);
              reset(div_42);
              reset(div_41);
              template_effect(
                ($0, $1) => {
                  set_text(text_13, $0);
                  set_text(text_14, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("No models found"))),
                  () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
                ]
              );
              append($$anchor4, div_41);
            };
            if_block(node_17, ($$render) => {
              if (get(models$1), untrack(() => (get(models$1) ?? []).length !== 0)) $$render(consequent_10);
              else $$render(alternate_3, -1);
            });
          }
          append($$anchor3, fragment_4);
        };
        var alternate_4 = ($$anchor3) => {
          var div_45 = root_15();
          var node_33 = child(div_45);
          Spinner(node_33, { className: "size-4" });
          reset(div_45);
          append($$anchor3, div_45);
        };
        if_block(node_16, ($$render) => {
          if (get(models$1) !== null) $$render(consequent_11);
          else $$render(alternate_4, -1);
        });
      }
      reset(div_9);
      var node_34 = sibling(div_9, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_46 = root_16();
          var div_47 = child(div_46);
          var text_15 = child(div_47, true);
          reset(div_47);
          var a_2 = sibling(div_47, 2);
          var div_48 = child(a_2);
          var div_49 = child(div_48);
          var text_16 = child(div_49, true);
          reset(div_49);
          var div_50 = sibling(div_49, 2);
          var text_17 = child(div_50, true);
          reset(div_50);
          reset(div_48);
          var div_51 = sibling(div_48, 2);
          var div_52 = child(div_51);
          var node_35 = child(div_52);
          ChevronRight(node_35, {});
          reset(div_52);
          reset(div_51);
          reset(a_2);
          reset(div_46);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_15, $0);
              set_text(text_16, $1);
              set_text(text_17, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by rexpro-ai Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a model"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore model presets")))
            ]
          );
          append($$anchor3, div_46);
        };
        if_block(node_34, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_12);
        });
      }
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text$1, $0);
          set_text(text_1, get(total));
          set_text(text_4, $1);
          set_attribute(input_1, "aria-label", $2);
          set_attribute(input_1, "placeholder", $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Models"))),
          () => ($i18n(), untrack(() => $i18n().t("New Model"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Models"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Models")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        /* @__PURE__ */ console.log(get(importFiles));
        let reader = new FileReader();
        reader.onload = async (event2) => {
          var _a, _b, _c;
          let savedModels = [];
          try {
            savedModels = JSON.parse(event2.target.result);
            /* @__PURE__ */ console.log(savedModels);
          } catch (e) {
            toast.error($i18n().t("Invalid JSON file"));
            return;
          }
          for (const model of savedModels) {
            if ((model == null ? void 0 : model.info) ?? false) {
              if ($_models().find((m) => m.id === model.id)) {
                await updateModelById(localStorage.token, model.id, model.info).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              } else {
                await createNewModel(localStorage.token, model.info).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            } else {
              if ((model == null ? void 0 : model.id) && (model == null ? void 0 : model.name)) {
                await createNewModel(localStorage.token, model).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            }
          }
          await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
          set(page, 1);
          getModelList();
        };
        reader.readAsText(get(importFiles)[0]);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("input", input_1, () => {
        clearTimeout(get(searchDebounceTimer));
        set(searchDebounceTimer, setTimeout(
          () => {
            getModelList();
          },
          300
        ));
      });
      event("wheel", div_14, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_5 = ($$anchor2) => {
      var div_53 = root_18();
      var node_36 = child(div_53);
      Spinner(node_36, { className: "size-5" });
      reset(div_53);
      append($$anchor2, div_53);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_13);
      else $$render(alternate_5, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    await Promise.all([
      (async () => {
        var _a, _b, _c;
        models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      })()
    ]);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Models($$anchor2, {});
    };
    if_block(node, ($$render) => {
      if ($models() !== null) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
