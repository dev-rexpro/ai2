import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, c as child, r as reset, z as sibling, m as deep_read_state, u as untrack, t as template_effect, d as set_text, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, aV as mutate, k as get, x as derived_safe_equal, f as from_html, l as legacy_pre_effect, n as legacy_pre_effect_reset, v as user_derived, g as comment, h as first_child, aR as next, aW as text, y as event, b1 as invalidate_inner_signals, a_ as remove_textarea_child, A as tick } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { r as remove_input_defaults, s as set_attribute, f as bind_select_value, a as set_class, b as set_value } from "./B9yCN616.js";
import { b as bind_value, c as bind_files } from "./CgeA63xA.js";
import { b as bind_this } from "./BSYzg88z.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { t as toast } from "./B4Bn1xMI.js";
import { t as tools, f as functions, m as models, u as user } from "./BJ3rUC-5.js";
import { D as DEFAULT_CAPABILITIES, b as REXPRO_BASE_URL } from "./CZpnbXda.js";
import { g as getTools } from "./BjHnuYj-.js";
import { g as getSkills } from "./DRvubTJA.js";
import { g as getFunctions } from "./Bw_Wh1To.js";
import { g as getModelsDefaults } from "./qzNkMDjz.js";
import { A as AdvancedParams } from "./Di5xMM68.js";
import { T as Tags } from "./ConglYm-.js";
import { a as getTerminalServers, K as Knowledge } from "./D_mSRSNF.js";
import { C as Checkbox } from "./CuSe9V-c.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { m as marked } from "./zFu7_FHZ.js";
import { T as Textarea } from "./-oxnKdd2.js";
import "./X0cYWxFO.js";
import "./tmhUPuyr.js";
import "./vYrFh_lq.js";
import "./C5m5pE-D.js";
import { S as Spinner } from "./gJqE84vs.js";
import { F as FileSaver_minExports } from "./CVH2w_UO.js";
import { P as Plus } from "./CKKkwCWl.js";
import { A as AccessControlModal, L as LockClosed } from "./BURXHJDK.js";
import { e as updateModelAccessGrants } from "./CVPpQuuG.js";
var root$a = from_html(`<div class=" py-0.5 text-sm w-full capitalize font-medium"> </div>`);
var root_1$a = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <!></div>`);
var root_2$4 = from_html(`<div class=" flex items-center flex-wrap"></div>`);
var root_3$3 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col mb-1"><!></div> <div class=" text-xs dark:text-gray-700"> </div></div>`);
function ToolsSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let tools2 = prop($$props, "tools", 24, () => []);
  let _tools = mutable_source({});
  let selectedToolIds = prop($$props, "selectedToolIds", 28, () => []);
  const i18n = getContext("i18n");
  onMount(() => {
    set(_tools, tools2().reduce(
      (acc, tool) => {
        acc[tool.id] = { ...tool, selected: selectedToolIds().includes(tool.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var div = root_3$3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var node = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_2$4();
      each(div_4, 5, () => (get(_tools), untrack(() => Object.keys(get(_tools)))), index, ($$anchor3, tool) => {
        var div_5 = root_1$a();
        var div_6 = child(div_5);
        var node_1 = child(div_6);
        {
          let $0 = derived_safe_equal(() => (get(_tools), get(tool), untrack(() => get(_tools)[get(tool)].selected ? "checked" : "unchecked")));
          Checkbox(node_1, {
            get state() {
              return get($0);
            },
            $$events: {
              change: (e) => {
                mutate(_tools, get(_tools)[get(tool)].selected = e.detail === "checked");
                selectedToolIds(Object.keys(get(_tools)).filter((t) => get(_tools)[t].selected));
              }
            }
          });
        }
        reset(div_6);
        var node_2 = sibling(div_6, 2);
        {
          let $0 = derived_safe_equal(() => (get(_tools), get(tool), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get(_tools)[get(tool)]) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? get(_tools)[get(tool)].id;
          })));
          Tooltip(node_2, {
            get content() {
              return get($0);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_7 = root$a();
              var text_1 = child(div_7, true);
              reset(div_7);
              template_effect(() => set_text(text_1, (get(_tools), get(tool), untrack(() => get(_tools)[get(tool)].name))));
              append($$anchor4, div_7);
            },
            $$slots: { default: true }
          });
        }
        reset(div_5);
        append($$anchor3, div_5);
      });
      reset(div_4);
      append($$anchor2, div_4);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(tools2()), untrack(() => tools2().length > 0)) $$render(consequent);
    });
  }
  reset(div_3);
  var div_8 = sibling(div_3, 2);
  var text_2 = child(div_8, true);
  reset(div_8);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_2, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Tools"))),
      () => ($i18n(), untrack(() => $i18n().t('To select toolkits here, add them to the "Tools" workspace first.')))
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$9 = from_html(`<div class="mb-2"><input class="w-full text-sm bg-transparent outline-none border border-gray-100 dark:border-gray-800 rounded-lg px-3 py-1.5 placeholder-gray-400" type="text"/></div>`);
var root_1$9 = from_html(`<div class=" py-0.5 text-sm w-full capitalize font-medium"> </div>`);
var root_2$3 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <!></div>`);
var root_3$2 = from_html(`<div class=" flex items-center flex-wrap"></div>`);
var root_4$2 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <!> <div class="flex flex-col mb-1"><!></div> <div class=" text-xs dark:text-gray-700"> </div></div>`);
function SkillsSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const filteredSkillKeys = mutable_source();
  let skills = prop($$props, "skills", 24, () => []);
  let _skills = mutable_source({});
  let searchQuery = mutable_source("");
  let selectedSkillIds = prop($$props, "selectedSkillIds", 28, () => []);
  const i18n = getContext("i18n");
  onMount(() => {
    set(_skills, skills().reduce(
      (acc, skill) => {
        acc[skill.id] = { ...skill, selected: selectedSkillIds().includes(skill.id) };
        return acc;
      },
      {}
    ));
  });
  legacy_pre_effect(() => (get(_skills), get(searchQuery)), () => {
    set(filteredSkillKeys, Object.keys(get(_skills)).filter((id) => {
      var _a, _b;
      if (!get(searchQuery).trim()) return true;
      const q = get(searchQuery).toLowerCase();
      return ((_a = get(_skills)[id].name) == null ? void 0 : _a.toLowerCase().includes(q)) || ((_b = get(_skills)[id].id) == null ? void 0 : _b.toLowerCase().includes(q));
    }));
  });
  legacy_pre_effect_reset();
  init();
  var div = root_4$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var node = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var div_3 = root$9();
      var input = child(div_3);
      remove_input_defaults(input);
      reset(div_3);
      template_effect(($0) => set_attribute(input, "placeholder", $0), [
        () => ($i18n(), untrack(() => $i18n().t("Search skills...")))
      ]);
      bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
      append($$anchor2, div_3);
    };
    var d = user_derived(() => (get(_skills), untrack(() => Object.keys(get(_skills)).length > 10)));
    if_block(node, ($$render) => {
      if (get(d)) $$render(consequent);
    });
  }
  var div_4 = sibling(node, 2);
  var node_1 = child(div_4);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_3$2();
      each(div_5, 5, () => get(filteredSkillKeys), index, ($$anchor3, skill) => {
        var div_6 = root_2$3();
        var div_7 = child(div_6);
        var node_2 = child(div_7);
        {
          let $0 = derived_safe_equal(() => (get(_skills), get(skill), untrack(() => get(_skills)[get(skill)].selected ? "checked" : "unchecked")));
          Checkbox(node_2, {
            get state() {
              return get($0);
            },
            $$events: {
              change: (e) => {
                mutate(_skills, get(_skills)[get(skill)].selected = e.detail === "checked");
                selectedSkillIds(Object.keys(get(_skills)).filter((s) => get(_skills)[s].selected));
              }
            }
          });
        }
        reset(div_7);
        var node_3 = sibling(div_7, 2);
        {
          let $0 = derived_safe_equal(() => (get(_skills), get(skill), untrack(() => {
            var _a;
            return ((_a = get(_skills)[get(skill)]) == null ? void 0 : _a.description) ?? get(_skills)[get(skill)].id;
          })));
          Tooltip(node_3, {
            get content() {
              return get($0);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_8 = root_1$9();
              var text_1 = child(div_8, true);
              reset(div_8);
              template_effect(() => set_text(text_1, (get(_skills), get(skill), untrack(() => get(_skills)[get(skill)].name))));
              append($$anchor4, div_8);
            },
            $$slots: { default: true }
          });
        }
        reset(div_6);
        append($$anchor3, div_6);
      });
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(skills()), untrack(() => skills().length > 0)) $$render(consequent_1);
    });
  }
  reset(div_4);
  var div_9 = sibling(div_4, 2);
  var text_2 = child(div_9, true);
  reset(div_9);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_2, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Skills"))),
      () => ($i18n(), untrack(() => $i18n().t('To select skills here, add them to the "Skills" workspace first.')))
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$8 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$8 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>`);
function FiltersSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let filters = prop($$props, "filters", 24, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$8();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text$1 = child(div_2, true);
      reset(div_2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      each(div_4, 5, filters, index, ($$anchor3, filter) => {
        const isSelected = derived_safe_equal(() => (get(filter), deep_read_state(selectedFilterIds()), untrack(() => get(filter).is_global || selectedFilterIds().includes(get(filter).id))));
        var div_5 = root$8();
        var div_6 = child(div_5);
        var node_1 = child(div_6);
        {
          let $0 = derived_safe_equal(() => get(isSelected) ? "checked" : "unchecked");
          Checkbox(node_1, {
            get state() {
              return get($0);
            },
            get disabled() {
              return get(filter), untrack(() => get(filter).is_global);
            },
            $$events: {
              change: (e) => {
                if (get(filter).is_global) return;
                if (e.detail === "checked") {
                  if (!selectedFilterIds().includes(get(filter).id)) {
                    selectedFilterIds([...selectedFilterIds(), get(filter).id]);
                  }
                } else {
                  selectedFilterIds(selectedFilterIds().filter((id) => id !== get(filter).id));
                }
              }
            }
          });
        }
        reset(div_6);
        var div_7 = sibling(div_6, 2);
        var node_2 = child(div_7);
        Tooltip(node_2, {
          get content() {
            return get(filter), untrack(() => get(filter).meta.description);
          },
          children: ($$anchor4, $$slotProps) => {
            next();
            var text_1 = text();
            template_effect(() => set_text(text_1, (get(filter), untrack(() => get(filter).name))));
            append($$anchor4, text_1);
          },
          $$slots: { default: true }
        });
        reset(div_7);
        reset(div_5);
        append($$anchor3, div_5);
      });
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Filters")))]);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filters()), untrack(() => filters().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$7 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$7 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>`);
function ActionsSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let actions = prop($$props, "actions", 24, () => []);
  let selectedActionIds = prop($$props, "selectedActionIds", 28, () => []);
  let _actions = mutable_source({});
  onMount(() => {
    set(_actions, actions().reduce(
      (acc, action) => {
        acc[action.id] = { ...action, selected: selectedActionIds().includes(action.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$7();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text$1 = child(div_2, true);
      reset(div_2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      each(
        div_4,
        5,
        () => (get(_actions), untrack(() => Object.keys(get(_actions)))),
        index,
        ($$anchor3, action) => {
          var div_5 = root$7();
          var div_6 = child(div_5);
          var node_1 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (get(_actions), get(action), untrack(() => get(_actions)[get(action)].is_global ? "checked" : get(_actions)[get(action)].selected ? "checked" : "unchecked")));
            Checkbox(node_1, {
              get state() {
                return get($0);
              },
              get disabled() {
                return get(_actions), get(action), untrack(() => get(_actions)[get(action)].is_global);
              },
              $$events: {
                change: (e) => {
                  if (!get(_actions)[get(action)].is_global) {
                    mutate(_actions, get(_actions)[get(action)].selected = e.detail === "checked");
                    selectedActionIds(Object.keys(get(_actions)).filter((t) => get(_actions)[t].selected));
                  }
                }
              }
            });
          }
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var node_2 = child(div_7);
          Tooltip(node_2, {
            get content() {
              return get(_actions), get(action), untrack(() => get(_actions)[get(action)].meta.description);
            },
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_1 = text();
              template_effect(() => set_text(text_1, (get(_actions), get(action), untrack(() => get(_actions)[get(action)].name))));
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(div_7);
          reset(div_5);
          append($$anchor3, div_5);
        }
      );
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Actions")))]);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(actions()), untrack(() => actions().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$6 = from_html(`<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>`);
var root_1$6 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>`);
function Capabilities($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const visibleCapabilities = mutable_source();
  const i18n = getContext("i18n");
  const capabilityLabels = {
    vision: {
      label: $i18n().t("Vision"),
      description: $i18n().t("Model accepts image inputs")
    },
    file_upload: {
      label: $i18n().t("File Upload"),
      description: $i18n().t("Model accepts file inputs")
    },
    file_context: {
      label: $i18n().t("File Context"),
      description: $i18n().t("Inject file content into conversation context")
    },
    web_search: {
      label: $i18n().t("Web Search"),
      description: $i18n().t("Model can search the web for information")
    },
    image_generation: {
      label: $i18n().t("Image Generation"),
      description: $i18n().t("Model can generate images based on text prompts")
    },
    code_interpreter: {
      label: $i18n().t("Code Interpreter"),
      description: $i18n().t("Model can execute code and perform calculations")
    },
    terminal: {
      label: $i18n().t("Terminal"),
      description: $i18n().t("Model can access Open Terminal for command execution and file management")
    },
    usage: {
      label: $i18n().t("Usage"),
      description: $i18n().t("Sends `stream_options: { include_usage: true }` in the request.\nSupported providers will return token usage information in the response when set.")
    },
    citations: {
      label: $i18n().t("Citations"),
      description: $i18n().t("Displays citations in the response")
    },
    status_updates: {
      label: $i18n().t("Status Updates"),
      description: $i18n().t("Displays status updates (e.g., web search progress) in the response")
    },
    builtin_tools: {
      label: $i18n().t("Builtin Tools"),
      description: $i18n().t("Automatically inject system tools in native function calling mode (e.g., timestamps, memory, chat history, notes, etc.)")
    }
  };
  let capabilities = prop($$props, "capabilities", 28, () => ({}));
  legacy_pre_effect(() => deep_read_state(capabilities()), () => {
    set(visibleCapabilities, Object.keys(capabilityLabels).filter((cap) => {
      if (cap === "file_context" && !capabilities().file_upload) {
        return false;
      }
      return true;
    }));
  });
  legacy_pre_effect_reset();
  init();
  var div = root_1$6();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  each(div_3, 5, () => get(visibleCapabilities), index, ($$anchor2, capability) => {
    var div_4 = root$6();
    var node = child(div_4);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(capabilities()), get(capability), untrack(() => capabilities()[get(capability)] ? "checked" : "unchecked")));
      Checkbox(node, {
        get state() {
          return get($0);
        },
        $$events: {
          change: (e) => {
            capabilities(capabilities()[get(capability)] = e.detail === "checked", true);
          }
        }
      });
    }
    var div_5 = sibling(node, 2);
    var node_1 = child(div_5);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(marked), get(capability), untrack(() => marked.parse(capabilityLabels[get(capability)].description))));
      Tooltip(node_1, {
        get content() {
          return get($0);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text();
          template_effect(($02) => set_text(text_1, $02), [
            () => ($i18n(), get(capability), untrack(() => $i18n().t(capabilityLabels[get(capability)].label)))
          ]);
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    }
    reset(div_5);
    reset(div_4);
    append($$anchor2, div_4);
  });
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Capabilities")))]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$5 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$5 = from_html(`<div class=" flex items-center flex-wrap"></div>`);
var root_2$2 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs text-gray-500 font-medium"> </div></div> <div class="flex flex-col"><!></div></div>`);
function DefaultFiltersSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let filters = prop($$props, "filters", 24, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  init();
  var div = root_2$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var node = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_1$5();
      each(div_4, 5, filters, index, ($$anchor3, filter) => {
        const isSelected = derived_safe_equal(() => (deep_read_state(selectedFilterIds()), get(filter), untrack(() => selectedFilterIds().includes(get(filter).id))));
        var div_5 = root$5();
        var div_6 = child(div_5);
        var node_1 = child(div_6);
        {
          let $0 = derived_safe_equal(() => get(isSelected) ? "checked" : "unchecked");
          Checkbox(node_1, {
            get state() {
              return get($0);
            },
            $$events: {
              change: (e) => {
                if (e.detail === "checked") {
                  if (!selectedFilterIds().includes(get(filter).id)) {
                    selectedFilterIds([...selectedFilterIds(), get(filter).id]);
                  }
                } else {
                  selectedFilterIds(selectedFilterIds().filter((id) => id !== get(filter).id));
                }
              }
            }
          });
        }
        reset(div_6);
        var div_7 = sibling(div_6, 2);
        var node_2 = child(div_7);
        Tooltip(node_2, {
          get content() {
            return get(filter), untrack(() => get(filter).meta.description);
          },
          children: ($$anchor4, $$slotProps) => {
            next();
            var text_1 = text();
            template_effect(() => set_text(text_1, (get(filter), untrack(() => get(filter).name))));
            append($$anchor4, text_1);
          },
          $$slots: { default: true }
        });
        reset(div_7);
        reset(div_5);
        append($$anchor3, div_5);
      });
      reset(div_4);
      append($$anchor2, div_4);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filters()), untrack(() => filters().length > 0)) $$render(consequent);
    });
  }
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [
    () => ($i18n(), untrack(() => $i18n().t("Default Filters")))
  ]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$4 = from_html(`<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>`);
var root_1$4 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>`);
function DefaultFeatures($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const featureLabels = {
    web_search: {
      label: $i18n().t("Web Search"),
      description: $i18n().t("Model can search the web for information")
    },
    image_generation: {
      label: $i18n().t("Image Generation"),
      description: $i18n().t("Model can generate images based on text prompts")
    },
    code_interpreter: {
      label: $i18n().t("Code Interpreter"),
      description: $i18n().t("Model can execute code and perform calculations")
    }
  };
  let availableFeatures = prop($$props, "availableFeatures", 24, () => ["web_search", "image_generation", "code_interpreter"]);
  let featureIds = prop($$props, "featureIds", 28, () => []);
  init();
  var div = root_1$4();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  each(div_3, 5, availableFeatures, index, ($$anchor2, feature) => {
    var div_4 = root$4();
    var node = child(div_4);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(featureIds()), get(feature), untrack(() => featureIds().includes(get(feature)) ? "checked" : "unchecked")));
      Checkbox(node, {
        get state() {
          return get($0);
        },
        $$events: {
          change: (e) => {
            if (e.detail === "checked") {
              featureIds([...featureIds(), get(feature)]);
            } else {
              featureIds(featureIds().filter((id) => id !== get(feature)));
            }
          }
        }
      });
    }
    var div_5 = sibling(node, 2);
    var node_1 = child(div_5);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(marked), get(feature), untrack(() => marked.parse(featureLabels[get(feature)].description))));
      Tooltip(node_1, {
        get content() {
          return get($0);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text();
          template_effect(($02) => set_text(text_1, $02), [
            () => ($i18n(), get(feature), untrack(() => $i18n().t(featureLabels[get(feature)].label)))
          ]);
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    }
    reset(div_5);
    reset(div_4);
    append($$anchor2, div_4);
  });
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [
    () => ($i18n(), untrack(() => $i18n().t("Default Features")))
  ]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div class="flex items-center gap-2 mr-3"><!> <div class="py-0.5 text-sm"><!></div></div>`);
var root_1$3 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>`);
function BuiltinTools($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const toolLabels = {
    time: {
      label: $i18n().t("Time & Calculation"),
      description: $i18n().t("Get current time and perform date/time calculations")
    },
    memory: {
      label: $i18n().t("Memory"),
      description: $i18n().t("Search and manage user memories")
    },
    chats: {
      label: $i18n().t("Chat History"),
      description: $i18n().t("Search and view user chat history")
    },
    notes: {
      label: $i18n().t("Notes"),
      description: $i18n().t("Search, view, and manage user notes")
    },
    knowledge: {
      label: $i18n().t("Knowledge Base"),
      description: $i18n().t("Browse and query knowledge bases")
    },
    channels: {
      label: $i18n().t("Channels"),
      description: $i18n().t("Search channels and channel messages")
    },
    web_search: {
      label: $i18n().t("Web Search"),
      description: $i18n().t("Search the web and fetch URLs")
    },
    image_generation: {
      label: $i18n().t("Image Generation"),
      description: $i18n().t("Generate and edit images")
    },
    code_interpreter: {
      label: $i18n().t("Code Interpreter"),
      description: $i18n().t("Execute code")
    },
    tasks: {
      label: $i18n().t("Task Management"),
      description: $i18n().t("Break down complex requests into trackable steps")
    },
    automations: {
      label: $i18n().t("Automations"),
      description: $i18n().t("Create and manage scheduled automations")
    },
    calendar: {
      label: $i18n().t("Calendar"),
      description: $i18n().t("List calendars, search, create, update, and delete calendar events")
    }
  };
  const allTools = Object.keys(toolLabels);
  let builtinTools = prop($$props, "builtinTools", 28, () => ({}));
  init();
  var div = root_1$3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  each(div_3, 5, () => allTools, index, ($$anchor2, tool) => {
    var div_4 = root$3();
    var node = child(div_4);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(builtinTools()), get(tool), untrack(() => builtinTools()[get(tool)] !== false ? "checked" : "unchecked")));
      Checkbox(node, {
        get state() {
          return get($0);
        },
        $$events: {
          change: (e) => {
            if (e.detail === "checked") {
              delete builtinTools()[get(tool)];
            } else {
              builtinTools(builtinTools()[get(tool)] = false, true);
            }
            builtinTools(builtinTools());
          }
        }
      });
    }
    var div_5 = sibling(node, 2);
    var node_1 = child(div_5);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(marked), get(tool), untrack(() => marked.parse(toolLabels[get(tool)].description))));
      Tooltip(node_1, {
        get content() {
          return get($0);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text();
          template_effect(($02) => set_text(text_1, $02), [
            () => ($i18n(), get(tool), untrack(() => $i18n().t(toolLabels[get(tool)].label)))
          ]);
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    }
    reset(div_5);
    reset(div_4);
    append($$anchor2, div_4);
  });
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Builtin Tools")))]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<button class="flex text-xs items-center space-x-1 py-1 rounded-xl bg-transparent dark:text-gray-200 transition" type="button"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_1$2 = from_html(`<input class="text-sm w-full bg-transparent outline-hidden"/>`);
var root_2$1 = from_html(`<input class="text-sm w-full bg-transparent outline-hidden text-gray-600 dark:text-gray-400"/>`);
var root_3$1 = from_html(`<textarea class="text-sm w-full bg-transparent outline-hidden resize-none" rows="2"></textarea>`);
var root_4$1 = from_html(`<div class=" flex border rounded-2xl border-gray-100/30 dark:border-gray-850/30 bg-transparent p-2"><div class="flex flex-col md:flex-row w-full gap-1 md:gap-2 px-2"><div class="gap-0.5 min-w-60"><!> <!></div> <!></div> <button class="p-1 self-start" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div>`);
var root_5$1 = from_html(`<div class="flex flex-col gap-2"></div>`);
var root_6$1 = from_html(`<div class="text-xs text-center w-full text-gray-500 mb-1.5"> </div>`);
var root_7$1 = from_html(`<div class=" space-y-3"><div class="flex w-full justify-between mb-1.5"><div class=" self-center text-xs flex-1 shrink-0 w-full"> </div> <div class="flex justify-end gap-2"><input id="prompt-suggestions-import-input" type="file" accept=".json" hidden=""/> <button class="flex text-xs items-center space-x-1 py-1 rounded-xl bg-transparent dark:text-gray-200 transition" type="button"><div class=" self-center font-medium line-clamp-1"> </div></button> <!> <button class=" px-1.5 rounded-xl transition font-medium text-sm flex items-center" type="button"><!></button></div></div> <!></div>`);
function PromptSuggestions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let promptSuggestions = prop($$props, "promptSuggestions", 28, () => []);
  let _promptSuggestions = mutable_source([]);
  const setPromptSuggestions = () => {
    set(_promptSuggestions, promptSuggestions().map((s) => {
      if (typeof s.title === "string") {
        s.title = [s.title, ""];
      } else if (!Array.isArray(s.title)) {
        s.title = ["", ""];
      }
      return s;
    }));
  };
  legacy_pre_effect(() => deep_read_state(promptSuggestions()), () => {
    if (promptSuggestions()) {
      setPromptSuggestions();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root_7$1();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var input_1 = child(div_3);
  var button = sibling(input_1, 2);
  var div_4 = child(button);
  var text_1 = child(div_4, true);
  reset(div_4);
  reset(button);
  var node = sibling(button, 2);
  {
    var consequent = ($$anchor2) => {
      var button_1 = root$2();
      var div_5 = child(button_1);
      var text_2 = child(div_5, true);
      reset(div_5);
      reset(button_1);
      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
      event("click", button_1, async () => {
        let blob = new Blob([JSON.stringify(promptSuggestions())], { type: "application/json" });
        FileSaver_minExports.saveAs(blob, `prompt-suggestions-export-${Date.now()}.json`);
      });
      append($$anchor2, button_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(promptSuggestions()), untrack(() => promptSuggestions().length)) $$render(consequent);
    });
  }
  var button_2 = sibling(node, 2);
  var node_1 = child(button_2);
  Plus(node_1, { className: "size-3", strokeWidth: "2.5" });
  reset(button_2);
  reset(div_3);
  reset(div_1);
  var node_2 = sibling(div_1, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_6 = root_5$1();
      each(div_6, 5, () => get(_promptSuggestions), index, ($$anchor3, prompt, promptIdx) => {
        var div_7 = root_4$1();
        var div_8 = child(div_7);
        var div_9 = child(div_8);
        var node_3 = child(div_9);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. Tell me a fun fact"))));
          Tooltip(node_3, {
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var input_2 = root_1$2();
              remove_input_defaults(input_2);
              template_effect(($02) => set_attribute(input_2, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Title")))]);
              bind_value(input_2, () => get(prompt).title[0], ($$value) => (get(prompt).title[0] = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
              append($$anchor4, input_2);
            },
            $$slots: { default: true }
          });
        }
        var node_4 = sibling(node_3, 2);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. about the Roman Empire"))));
          Tooltip(node_4, {
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var input_3 = root_2$1();
              remove_input_defaults(input_3);
              template_effect(($02) => set_attribute(input_3, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Subtitle")))]);
              bind_value(input_3, () => get(prompt).title[1], ($$value) => (get(prompt).title[1] = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
              append($$anchor4, input_3);
            },
            $$slots: { default: true }
          });
        }
        reset(div_9);
        var node_5 = sibling(div_9, 2);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. Tell me a fun fact about the Roman Empire"))));
          Tooltip(node_5, {
            className: "w-full self-center items-center flex",
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var textarea = root_3$1();
              remove_textarea_child(textarea);
              template_effect(($02) => set_attribute(textarea, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Prompt")))]);
              bind_value(textarea, () => get(prompt).content, ($$value) => (get(prompt).content = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
              append($$anchor4, textarea);
            },
            $$slots: { default: true }
          });
        }
        reset(div_8);
        var button_3 = sibling(div_8, 2);
        reset(div_7);
        event("click", button_3, () => {
          promptSuggestions().splice(promptIdx, 1);
          promptSuggestions(promptSuggestions());
        });
        append($$anchor3, div_7);
      });
      reset(div_6);
      append($$anchor2, div_6);
    };
    var alternate = ($$anchor2) => {
      var div_10 = root_6$1();
      var text_3 = child(div_10, true);
      reset(div_10);
      template_effect(($0) => set_text(text_3, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No suggestion prompts")))
      ]);
      append($$anchor2, div_10);
    };
    if_block(node_2, ($$render) => {
      if (get(_promptSuggestions), untrack(() => get(_promptSuggestions).length > 0)) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_1, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Default Prompt Suggestions"))),
      () => ($i18n(), untrack(() => $i18n().t("Import")))
    ]
  );
  event("change", input_1, (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    /* @__PURE__ */ console.log(files);
    let reader = new FileReader();
    reader.onload = async (event2) => {
      try {
        let suggestions = JSON.parse(event2.target.result);
        suggestions = suggestions.map((s) => {
          if (typeof s.title === "string") {
            s.title = [s.title, ""];
          } else if (!Array.isArray(s.title)) {
            s.title = ["", ""];
          }
          return s;
        });
        promptSuggestions([...promptSuggestions(), ...suggestions]);
      } catch (error) {
        toast.error($i18n().t("Invalid JSON file"));
        return;
      }
    };
    reader.readAsText(files[0]);
    e.target.value = "";
  });
  event("click", button, () => {
    const input = document.getElementById("prompt-suggestions-import-input");
    if (input) {
      input.click();
    }
  });
  event("click", button_2, () => {
    if (promptSuggestions().length === 0 || promptSuggestions().at(-1).content !== "") {
      promptSuggestions([...promptSuggestions(), { content: "", title: ["", ""] }]);
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<option> </option>`);
var root_1$1 = from_html(`<div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"><option> </option><!></select>`, 1);
function TerminalSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let terminalId = prop($$props, "terminalId", 12, "");
  let terminals = mutable_source([]);
  onMount(async () => {
    set(terminals, await getTerminalServers(localStorage.token));
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = root_1$1();
      var div = first_child(fragment_1);
      var div_1 = child(div);
      var text2 = child(div_1, true);
      reset(div_1);
      reset(div);
      var select = sibling(div, 2);
      var option = child(select);
      var text_1 = child(option, true);
      reset(option);
      option.value = option.__value = "";
      var node_1 = sibling(option);
      each(node_1, 1, () => get(terminals), (terminal) => terminal.id, ($$anchor3, terminal) => {
        var option_1 = root$1();
        var text_2 = child(option_1, true);
        reset(option_1);
        var option_1_value = {};
        template_effect(() => {
          set_text(text_2, (get(terminal), untrack(() => get(terminal).name || get(terminal).id)));
          if (option_1_value !== (option_1_value = (get(terminal), untrack(() => get(terminal).id)))) {
            option_1.value = (option_1.__value = (get(terminal), untrack(() => get(terminal).id))) ?? "";
          }
        });
        append($$anchor3, option_1);
      });
      reset(select);
      template_effect(
        ($0, $1) => {
          set_text(text2, $0);
          set_text(text_1, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Terminal"))),
          () => ($i18n(), untrack(() => $i18n().t("None")))
        ]
      );
      bind_select_value(select, terminalId);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(terminals), untrack(() => get(terminals).length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<button class="flex space-x-1"><div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>`);
var root_1 = from_html(`<img alt="model profile" class="rounded-xl size-20 md:size-48 object-cover shrink-0"/>`);
var root_2 = from_html(`<img alt="model profile" class=" rounded-xl size-20 md:size-48 object-cover shrink-0"/>`);
var root_3 = from_html(`<option class=" text-gray-900"> </option>`);
var root_4 = from_html(`<div class="mb-1"><div class=" text-xs font-medium mb-1 text-gray-500"> </div> <div><select class="text-sm w-full bg-transparent outline-hidden" required=""><option class=" text-gray-900"> </option><!></select></div></div>`);
var root_5 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_6 = from_html(`<div class="my-2"><!></div>`);
var root_7 = from_html(`<div class="my-4"><!></div>`);
var root_8 = from_html(`<div class="my-4"><!></div> <!>`, 1);
var root_9 = from_html(`<hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <!> <!>`, 1);
var root_10 = from_html(`<div class="ml-1.5 self-center"><!></div>`);
var root_11 = from_html(`<div><textarea class="text-sm w-full bg-transparent outline-hidden resize-none" rows="10" disabled="" readonly=""></textarea></div>`);
var root_12 = from_html(`<form class="flex flex-col md:flex-row w-full gap-3 md:gap-6"><div class="w-full px-1"><div class="flex flex-row gap-4 md:gap-6 w-full"><div class="self-start flex justify-center my-2 shrink-0"><div class="self-center"><button type="button"><!> <div class="absolute bottom-0 right-0 z-10"><div class="m-1.5"><div class="shadow-xl p-1 rounded-full border-2 border-white bg-gray-800 text-white group-hover:bg-gray-600 transition dark:border-black dark:bg-white dark:group-hover:bg-gray-200 dark:text-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg></div></div></div> <div class="absolute top-0 bottom-0 left-0 right-0 bg-white dark:bg-black rounded-lg opacity-0 group-hover:opacity-20 transition"></div></button> <div class="flex w-full mt-1 justify-end"><button class="px-2 py-1 text-gray-500 rounded-lg text-xs" type="button"> </button></div></div></div> <div class="flex flex-col w-full flex-1"><div class="flex justify-between items-start my-2"><div class=" flex flex-col w-full"><div class="flex-1 w-full"><input class="text-3xl w-full bg-transparent outline-hidden" required=""/></div> <div class="flex-1 w-full"><div><input class="text-xs w-full bg-transparent outline-hidden" required=""/></div></div></div> <div class="shrink-0"><button class="bg-gray-50 shrink-0 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <!> <div class="mb-1"><div class="mb-1 flex w-full justify-between items-center"><div class=" self-center text-xs font-medium text-gray-500"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div> <div class="w-full mb-1 max-w-full"><div><!></div></div></div></div> <div class="my-2"><div class="flex w-full justify-between"><div class=" self-center text-xs font-medium text-gray-500"> </div></div> <div class="mt-2"><div class="my-1"><div class=" text-xs font-medium mb-2"> </div> <div><!></div></div> <div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div></div> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-2"/> <div class="my-2"><div class="flex w-full justify-between items-center"><div class="flex w-full justify-between items-center"><div class=" self-center text-xs font-medium text-gray-500"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div></div> <!></div> <div class="my-4"><!></div> <div class="my-4"><!></div> <div class="my-4"><!></div> <!> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <div class="my-4"><!></div> <!> <!> <!> <div class="my-4"><div class="flex w-full justify-between mb-1"><div class="self-center text-xs font-medium text-gray-500"> </div></div> <input class="w-full text-sm bg-transparent outline-hidden" type="text"/></div> <hr class=" border-gray-100/30 dark:border-gray-850/30 my-4"/> <div class="my-2 flex justify-end"><button type="submit"><div class=" self-center font-medium"><!></div> <!></button></div> <div class="my-2 text-gray-300 dark:text-gray-700 pb-20"><div class="flex w-full justify-between mb-2"><div class=" self-center text-sm font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div></div></form>`);
var root_13 = from_html(`<!> <!> <div class="w-full max-h-full flex justify-center"><input type="file" hidden="" accept="image/*"/> <!></div>`, 1);
function ModelEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $tools = () => store_get(tools, "$tools", $$stores);
  const $functions = () => store_get(functions, "$functions", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8);
  let onBack = prop($$props, "onBack", 8, null);
  let model = prop($$props, "model", 12, null);
  let edit = prop($$props, "edit", 8, false);
  let preset = prop($$props, "preset", 8, true);
  let loading = mutable_source(false);
  let filesInputElement = mutable_source();
  let inputFiles = mutable_source();
  let showAdvanced = mutable_source(false);
  let showPreview = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let loaded = mutable_source(false);
  let id = mutable_source("");
  let name = mutable_source("");
  let enableDescription = mutable_source(true);
  let system = mutable_source("");
  let info = mutable_source({
    id: "",
    base_model_id: null,
    name: "",
    meta: {
      profile_image_url: `${REXPRO_BASE_URL}/static/favicon.png`,
      description: "",
      suggestion_prompts: null,
      tags: []
    },
    params: { system: "" }
  });
  let params = mutable_source({ system: "" });
  let knowledge = mutable_source([]);
  let toolIds = mutable_source([]);
  let skillIds = mutable_source([]);
  let skillsList = mutable_source([]);
  let filterIds = mutable_source([]);
  let defaultFilterIds = mutable_source([]);
  let capabilities = mutable_source({ ...DEFAULT_CAPABILITIES });
  let defaultFeatureIds = mutable_source([]);
  let builtinTools = mutable_source({});
  let actionIds = mutable_source([]);
  let accessGrants = mutable_source([]);
  let terminalId = mutable_source("");
  let tts = mutable_source({ voice: "" });
  const submitHandler = async () => {
    var _a;
    set(loading, true);
    mutate(info, get(info).id = get(id)), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    mutate(info, get(info).name = get(name)), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    if (get(id) === "") {
      toast.error($i18n().t("Model ID is required."));
      set(loading, false);
      return;
    }
    if (get(name) === "") {
      toast.error($i18n().t("Model Name is required."));
      set(loading, false);
      return;
    }
    if (get(knowledge).some((item) => item.status === "uploading")) {
      toast.error($i18n().t("Please wait until all files are uploaded."));
      set(loading, false);
      return;
    }
    mutate(info, get(info).params = { ...get(info).params, ...get(params) }), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    mutate(info, get(info).access_grants = get(accessGrants)), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    mutate(info, get(info).meta.capabilities = get(capabilities)), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    if (get(enableDescription)) {
      mutate(info, get(info).meta.description = get(info).meta.description.trim() === "" ? null : get(info).meta.description), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      mutate(info, get(info).meta.description = null), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    }
    if (get(knowledge).length > 0) {
      mutate(info, get(info).meta.knowledge = get(knowledge)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.knowledge) {
        delete get(info).meta.knowledge;
      }
    }
    if (get(toolIds).length > 0) {
      mutate(info, get(info).meta.toolIds = get(toolIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.toolIds) {
        delete get(info).meta.toolIds;
      }
    }
    if (get(skillIds).length > 0) {
      mutate(info, get(info).meta.skillIds = get(skillIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.skillIds) {
        delete get(info).meta.skillIds;
      }
    }
    if (get(filterIds).length > 0) {
      mutate(info, get(info).meta.filterIds = get(filterIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.filterIds) {
        delete get(info).meta.filterIds;
      }
    }
    if (get(defaultFilterIds).length > 0) {
      mutate(info, get(info).meta.defaultFilterIds = get(defaultFilterIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.defaultFilterIds) {
        delete get(info).meta.defaultFilterIds;
      }
    }
    if (get(actionIds).length > 0) {
      mutate(info, get(info).meta.actionIds = get(actionIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.actionIds) {
        delete get(info).meta.actionIds;
      }
    }
    if (get(defaultFeatureIds).length > 0) {
      mutate(info, get(info).meta.defaultFeatureIds = get(defaultFeatureIds)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.defaultFeatureIds) {
        delete get(info).meta.defaultFeatureIds;
      }
    }
    if (Object.keys(get(builtinTools)).length > 0) {
      mutate(info, get(info).meta.builtinTools = get(builtinTools)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.builtinTools) {
        delete get(info).meta.builtinTools;
      }
    }
    if (get(terminalId)) {
      mutate(info, get(info).meta.terminalId = get(terminalId)), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if (get(info).meta.terminalId) {
        delete get(info).meta.terminalId;
      }
    }
    if (get(tts).voice !== "") {
      if (!get(info).meta.tts) mutate(info, get(info).meta.tts = {}), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
      mutate(info, get(info).meta.tts.voice = get(tts).voice), invalidate_inner_signals(() => {
        $i18n();
        $models();
        model();
      });
    } else {
      if ((_a = get(info).meta.tts) == null ? void 0 : _a.voice) {
        delete get(info).meta.tts.voice;
        if (Object.keys(get(info).meta.tts).length === 0) {
          delete get(info).meta.tts;
        }
      }
    }
    mutate(info, get(info).params.system = get(system).trim() === "" ? null : get(system)), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    mutate(info, get(info).params.stop = get(params).stop ? (typeof get(params).stop === "string" ? get(params).stop.split(",") : get(params).stop).filter((s) => s.trim()) : null), invalidate_inner_signals(() => {
      $i18n();
      $models();
      model();
    });
    Object.keys(get(info).params).forEach((key) => {
      if (get(info).params[key] === "" || get(info).params[key] === null) {
        delete get(info).params[key];
      }
    });
    await onSubmit()(get(info));
    set(loading, false);
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E;
    await tools.set(await getTools(localStorage.token));
    set(skillsList, await getSkills(localStorage.token).catch(() => null) ?? []);
    await functions.set(await getFunctions(localStorage.token));
    const modelsConfig = await getModelsDefaults(localStorage.token).catch(() => null);
    const defaultMeta = (modelsConfig == null ? void 0 : modelsConfig.DEFAULT_MODEL_METADATA) ?? {};
    set(capabilities, { ...DEFAULT_CAPABILITIES, ...defaultMeta.capabilities ?? {} });
    set(defaultFeatureIds, defaultMeta.defaultFeatureIds ?? []);
    set(builtinTools, defaultMeta.builtinTools ?? {});
    const workspaceContainer = document.getElementById("workspace-container");
    if (workspaceContainer) {
      workspaceContainer.scrollTop = 0;
    }
    if (model()) {
      set(name, model().name);
      await tick();
      set(id, model().id);
      set(enableDescription, ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) !== null);
      if (model().base_model_id) {
        const base_model = $models().filter((m) => !(m == null ? void 0 : m.preset) && !((m == null ? void 0 : m.arena) ?? false)).find((m) => [model().base_model_id, `${model().base_model_id}:latest`].includes(m.id));
        /* @__PURE__ */ console.log("base_model", base_model);
        if (base_model) {
          model(model().base_model_id = base_model.id, true);
        } else {
          model(model().base_model_id = null, true);
        }
      }
      set(system, ((_d = (_c = model()) == null ? void 0 : _c.params) == null ? void 0 : _d.system) ?? "");
      set(params, { ...get(params), ...(_e = model()) == null ? void 0 : _e.params });
      mutate(params, get(params).stop = ((_f = get(params)) == null ? void 0 : _f.stop) ? (typeof get(params).stop === "string" ? get(params).stop.split(",") : ((_g = get(params)) == null ? void 0 : _g.stop) ?? []).join(",") : null);
      set(knowledge, (((_i = (_h = model()) == null ? void 0 : _h.meta) == null ? void 0 : _i.knowledge) ?? []).map((item) => {
        if ((item == null ? void 0 : item.collection_name) && (item == null ? void 0 : item.type) !== "file") {
          return { id: item.collection_name, name: item.name, legacy: true };
        } else if (item == null ? void 0 : item.collection_names) {
          return {
            name: item.name,
            type: "collection",
            collection_names: item.collection_names,
            legacy: true
          };
        } else {
          return item;
        }
      }));
      set(toolIds, ((_k = (_j = model()) == null ? void 0 : _j.meta) == null ? void 0 : _k.toolIds) ?? []);
      set(skillIds, ((_m = (_l = model()) == null ? void 0 : _l.meta) == null ? void 0 : _m.skillIds) ?? []);
      set(filterIds, ((_o = (_n = model()) == null ? void 0 : _n.meta) == null ? void 0 : _o.filterIds) ?? []);
      set(defaultFilterIds, ((_q = (_p = model()) == null ? void 0 : _p.meta) == null ? void 0 : _q.defaultFilterIds) ?? []);
      set(actionIds, ((_s = (_r = model()) == null ? void 0 : _r.meta) == null ? void 0 : _s.actionIds) ?? []);
      set(capabilities, { ...get(capabilities), ...((_u = (_t = model()) == null ? void 0 : _t.meta) == null ? void 0 : _u.capabilities) ?? {} });
      set(defaultFeatureIds, ((_w = (_v = model()) == null ? void 0 : _v.meta) == null ? void 0 : _w.defaultFeatureIds) ?? get(defaultFeatureIds));
      set(builtinTools, ((_y = (_x = model()) == null ? void 0 : _x.meta) == null ? void 0 : _y.builtinTools) ?? get(builtinTools));
      set(terminalId, ((_A = (_z = model()) == null ? void 0 : _z.meta) == null ? void 0 : _A.terminalId) ?? "");
      set(tts, { voice: ((_D = (_C = (_B = model()) == null ? void 0 : _B.meta) == null ? void 0 : _C.tts) == null ? void 0 : _D.voice) ?? "" });
      set(accessGrants, ((_E = model()) == null ? void 0 : _E.access_grants) ?? []);
      set(info, {
        ...get(info),
        ...JSON.parse(JSON.stringify(model() ? model() : { id: model().id, name: model().name }))
      });
      /* @__PURE__ */ console.log(model());
    }
    set(loaded, true);
  });
  legacy_pre_effect(() => (deep_read_state(edit()), get(name)), () => {
    if (!edit()) {
      if (get(name)) {
        set(id, get(name).replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase());
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_22 = ($$anchor2) => {
      var fragment_1 = root_13();
      var node_1 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => preset() ? ["read", "write"] : ["read"]);
        let $1 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.models) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        let $2 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_models) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        let $3 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return (((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.access_grants) == null ? void 0 : _c.allow_users) ?? true) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        AccessControlModal(node_1, {
          get accessRoles() {
            return get($0);
          },
          get share() {
            return get($1);
          },
          get sharePublic() {
            return get($2);
          },
          get shareUsers() {
            return get($3);
          },
          onChange: async () => {
            var _a;
            if (edit() && ((_a = model()) == null ? void 0 : _a.id)) {
              try {
                await updateModelAccessGrants(localStorage.token, model().id, model().name ?? get(name), get(accessGrants));
                toast.success($i18n().t("Saved"));
              } catch (error) {
                toast.error((error == null ? void 0 : error.detail) ?? `${error}`);
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
      var node_2 = sibling(node_1, 2);
      {
        var consequent = ($$anchor3) => {
          var button = root();
          var div = sibling(child(button), 2);
          var text2 = child(div, true);
          reset(div);
          reset(button);
          template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Back")))]);
          event("click", button, () => {
            onBack()();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if (onBack()) $$render(consequent);
        });
      }
      var div_1 = sibling(node_2, 2);
      var input = child(div_1);
      bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
      var node_3 = sibling(input, 2);
      {
        var consequent_21 = ($$anchor3) => {
          var form = root_12();
          var div_2 = child(form);
          var div_3 = child(div_2);
          var div_4 = child(div_3);
          var div_5 = child(div_4);
          var button_1 = child(div_5);
          var node_4 = child(button_1);
          {
            var consequent_1 = ($$anchor4) => {
              var img_1 = root_1();
              template_effect(() => set_attribute(img_1, "src", (get(info), untrack(() => get(info).meta.profile_image_url))));
              append($$anchor4, img_1);
            };
            var alternate = ($$anchor4) => {
              var img_2 = root_2();
              template_effect(() => set_attribute(img_2, "src", `${REXPRO_BASE_URL}/static/favicon.png`));
              append($$anchor4, img_2);
            };
            if_block(node_4, ($$render) => {
              if (get(info), untrack(() => get(info).meta.profile_image_url)) $$render(consequent_1);
              else $$render(alternate, -1);
            });
          }
          next(4);
          reset(button_1);
          var div_6 = sibling(button_1, 2);
          var button_2 = child(div_6);
          var text_1 = child(button_2, true);
          reset(button_2);
          reset(div_6);
          reset(div_5);
          reset(div_4);
          var div_7 = sibling(div_4, 2);
          var div_8 = child(div_7);
          var div_9 = child(div_8);
          var div_10 = child(div_9);
          var input_1 = child(div_10);
          remove_input_defaults(input_1);
          reset(div_10);
          var div_11 = sibling(div_10, 2);
          var div_12 = child(div_11);
          var input_2 = child(div_12);
          remove_input_defaults(input_2);
          reset(div_12);
          reset(div_11);
          reset(div_9);
          var div_13 = sibling(div_9, 2);
          var button_3 = child(div_13);
          var node_5 = child(button_3);
          LockClosed(node_5, { strokeWidth: "2.5", className: "size-3.5 shrink-0" });
          var div_14 = sibling(node_5, 2);
          var text_2 = child(div_14, true);
          reset(div_14);
          reset(button_3);
          reset(div_13);
          reset(div_8);
          var node_6 = sibling(div_8, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_15 = root_4();
              var div_16 = child(div_15);
              var text_3 = child(div_16, true);
              reset(div_16);
              var div_17 = sibling(div_16, 2);
              var select = child(div_17);
              var option = child(select);
              var text_4 = child(option, true);
              reset(option);
              option.value = (option.__value = null) ?? "";
              var node_7 = sibling(option);
              each(
                node_7,
                1,
                () => ($models(), deep_read_state(model()), untrack(() => $models().filter((m) => (model() ? m.id !== model().id : true) && !(m == null ? void 0 : m.preset) && (m == null ? void 0 : m.owned_by) !== "arena" && !((m == null ? void 0 : m.direct) ?? false)))),
                index,
                ($$anchor5, model2, $$index, $$array) => {
                  var option_1 = root_3();
                  var text_5 = child(option_1, true);
                  reset(option_1);
                  var option_1_value = {};
                  template_effect(() => {
                    set_text(text_5, (get(model2), untrack(() => get(model2).name)));
                    if (option_1_value !== (option_1_value = (get(model2), untrack(() => get(model2).id)))) {
                      option_1.value = (option_1.__value = (get(model2), untrack(() => get(model2).id))) ?? "";
                    }
                  });
                  append($$anchor5, option_1);
                }
              );
              reset(select);
              reset(div_17);
              reset(div_15);
              template_effect(
                ($0, $1, $2) => {
                  set_text(text_3, $0);
                  set_attribute(select, "placeholder", $1);
                  set_text(text_4, $2);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Base Model (From)"))),
                  () => ($i18n(), untrack(() => $i18n().t("Select a base model (e.g. llama3, gpt-4o)"))),
                  () => ($i18n(), untrack(() => $i18n().t("Select a base model")))
                ]
              );
              bind_select_value(select, () => get(info).base_model_id, ($$value) => (mutate(info, get(info).base_model_id = $$value), invalidate_inner_signals(() => {
                $i18n();
                $models();
                model();
              })));
              append($$anchor4, div_15);
            };
            if_block(node_6, ($$render) => {
              if (preset()) $$render(consequent_2);
            });
          }
          var div_18 = sibling(node_6, 2);
          var div_19 = child(div_18);
          var div_20 = child(div_19);
          var text_6 = child(div_20, true);
          reset(div_20);
          var button_4 = sibling(div_20, 2);
          var node_8 = child(button_4);
          {
            var consequent_3 = ($$anchor4) => {
              var span = root_5();
              var text_7 = child(span, true);
              reset(span);
              template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
              append($$anchor4, span);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_5();
              var text_8 = child(span_1, true);
              reset(span_1);
              template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
              append($$anchor4, span_1);
            };
            if_block(node_8, ($$render) => {
              if (!get(enableDescription)) $$render(consequent_3);
              else $$render(alternate_1, -1);
            });
          }
          reset(button_4);
          reset(div_19);
          var node_9 = sibling(div_19, 2);
          {
            var consequent_4 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add a short description about what this model does"))));
                Textarea($$anchor4, {
                  className: " text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ",
                  get placeholder() {
                    return get($0);
                  },
                  get value() {
                    return get(info).meta.description;
                  },
                  set value($$value) {
                    mutate(info, get(info).meta.description = $$value), invalidate_inner_signals(() => {
                      $i18n();
                      $models();
                      model();
                    });
                  },
                  $$legacy: true
                });
              }
            };
            if_block(node_9, ($$render) => {
              if (get(enableDescription)) $$render(consequent_4);
            });
          }
          reset(div_18);
          var div_21 = sibling(div_18, 2);
          var div_22 = child(div_21);
          var node_10 = child(div_22);
          {
            let $0 = derived_safe_equal(() => (get(info), untrack(() => {
              var _a, _b;
              return ((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.tags) ?? [];
            })));
            Tags(node_10, {
              get tags() {
                return get($0);
              },
              $$events: {
                delete: (e) => {
                  const tagName = e.detail;
                  mutate(info, get(info).meta.tags = get(info).meta.tags.filter((tag) => tag.name !== tagName)), invalidate_inner_signals(() => {
                    $i18n();
                    $models();
                    model();
                  });
                },
                add: (e) => {
                  var _a, _b;
                  const tagName = e.detail;
                  if (!(((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.tags) ?? null)) {
                    mutate(info, get(info).meta.tags = [{ name: tagName }]), invalidate_inner_signals(() => {
                      $i18n();
                      $models();
                      model();
                    });
                  } else {
                    mutate(info, get(info).meta.tags = [...get(info).meta.tags, { name: tagName }]), invalidate_inner_signals(() => {
                      $i18n();
                      $models();
                      model();
                    });
                  }
                }
              }
            });
          }
          reset(div_22);
          reset(div_21);
          reset(div_7);
          reset(div_3);
          var div_23 = sibling(div_3, 2);
          var div_24 = child(div_23);
          var div_25 = child(div_24);
          var text_9 = child(div_25, true);
          reset(div_25);
          reset(div_24);
          var div_26 = sibling(div_24, 2);
          var div_27 = child(div_26);
          var div_28 = child(div_27);
          var text_10 = child(div_28, true);
          reset(div_28);
          var div_29 = sibling(div_28, 2);
          var node_11 = child(div_29);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write your model system prompt content here\ne.g.) You are Mario from Super Mario Bros, acting as an assistant."))));
            Textarea(node_11, {
              className: " text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ",
              get placeholder() {
                return get($0);
              },
              rows: 4,
              get value() {
                return get(system);
              },
              set value($$value) {
                set(system, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_29);
          reset(div_27);
          var div_30 = sibling(div_27, 2);
          var div_31 = child(div_30);
          var text_11 = child(div_31, true);
          reset(div_31);
          var button_5 = sibling(div_31, 2);
          var node_12 = child(button_5);
          {
            var consequent_5 = ($$anchor4) => {
              var span_2 = root_5();
              var text_12 = child(span_2, true);
              reset(span_2);
              template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide")))]);
              append($$anchor4, span_2);
            };
            var alternate_2 = ($$anchor4) => {
              var span_3 = root_5();
              var text_13 = child(span_3, true);
              reset(span_3);
              template_effect(($0) => set_text(text_13, $0), [() => ($i18n(), untrack(() => $i18n().t("Show")))]);
              append($$anchor4, span_3);
            };
            if_block(node_12, ($$render) => {
              if (get(showAdvanced)) $$render(consequent_5);
              else $$render(alternate_2, -1);
            });
          }
          reset(button_5);
          reset(div_30);
          var node_13 = sibling(div_30, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_32 = root_6();
              var node_14 = child(div_32);
              AdvancedParams(node_14, {
                admin: true,
                custom: true,
                get params() {
                  return get(params);
                },
                set params($$value) {
                  set(params, $$value);
                },
                $$legacy: true
              });
              reset(div_32);
              append($$anchor4, div_32);
            };
            if_block(node_13, ($$render) => {
              if (get(showAdvanced)) $$render(consequent_6);
            });
          }
          reset(div_26);
          reset(div_23);
          var div_33 = sibling(div_23, 4);
          var div_34 = child(div_33);
          var div_35 = child(div_34);
          var div_36 = child(div_35);
          var text_14 = child(div_36, true);
          reset(div_36);
          var button_6 = sibling(div_36, 2);
          var node_15 = child(button_6);
          {
            var consequent_7 = ($$anchor4) => {
              var span_4 = root_5();
              var text_15 = child(span_4, true);
              reset(span_4);
              template_effect(($0) => set_text(text_15, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
              append($$anchor4, span_4);
            };
            var alternate_3 = ($$anchor4) => {
              var span_5 = root_5();
              var text_16 = child(span_5, true);
              reset(span_5);
              template_effect(($0) => set_text(text_16, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
              append($$anchor4, span_5);
            };
            if_block(node_15, ($$render) => {
              if (get(info), untrack(() => {
                var _a, _b;
                return (((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts) ?? null) === null;
              })) $$render(consequent_7);
              else $$render(alternate_3, -1);
            });
          }
          reset(button_6);
          reset(div_35);
          reset(div_34);
          var node_16 = sibling(div_34, 2);
          {
            var consequent_8 = ($$anchor4) => {
              PromptSuggestions($$anchor4, {
                get promptSuggestions() {
                  return get(info).meta.suggestion_prompts;
                },
                set promptSuggestions($$value) {
                  mutate(info, get(info).meta.suggestion_prompts = $$value), invalidate_inner_signals(() => {
                    $i18n();
                    $models();
                    model();
                  });
                },
                $$legacy: true
              });
            };
            if_block(node_16, ($$render) => {
              if (get(info), untrack(() => {
                var _a, _b;
                return (_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts;
              })) $$render(consequent_8);
            });
          }
          reset(div_33);
          var div_37 = sibling(div_33, 2);
          var node_17 = child(div_37);
          Knowledge(node_17, {
            get selectedItems() {
              return get(knowledge);
            },
            set selectedItems($$value) {
              set(knowledge, $$value);
            },
            $$legacy: true
          });
          reset(div_37);
          var div_38 = sibling(div_37, 2);
          var node_18 = child(div_38);
          {
            let $0 = derived_safe_equal(() => $tools() ?? []);
            ToolsSelector(node_18, {
              get tools() {
                return get($0);
              },
              get selectedToolIds() {
                return get(toolIds);
              },
              set selectedToolIds($$value) {
                set(toolIds, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_38);
          var div_39 = sibling(div_38, 2);
          var node_19 = child(div_39);
          SkillsSelector(node_19, {
            get skills() {
              return get(skillsList);
            },
            get selectedSkillIds() {
              return get(skillIds);
            },
            set selectedSkillIds($$value) {
              set(skillIds, $$value);
            },
            $$legacy: true
          });
          reset(div_39);
          var node_20 = sibling(div_39, 2);
          {
            var consequent_12 = ($$anchor4) => {
              var fragment_4 = root_9();
              var node_21 = sibling(first_child(fragment_4), 2);
              {
                var consequent_10 = ($$anchor5) => {
                  const toggleableFilters = derived_safe_equal(() => ($functions(), get(filterIds), untrack(() => $functions().filter((func) => {
                    var _a;
                    return func.type === "filter" && (get(filterIds).includes(func.id) || (func == null ? void 0 : func.is_global)) && ((_a = func == null ? void 0 : func.meta) == null ? void 0 : _a.toggle);
                  }))));
                  var fragment_5 = root_8();
                  var div_40 = first_child(fragment_5);
                  var node_22 = child(div_40);
                  {
                    let $0 = derived_safe_equal(() => ($functions(), untrack(() => ($functions() ?? []).filter((func) => func.type === "filter"))));
                    FiltersSelector(node_22, {
                      get filters() {
                        return get($0);
                      },
                      get selectedFilterIds() {
                        return get(filterIds);
                      },
                      set selectedFilterIds($$value) {
                        set(filterIds, $$value);
                      },
                      $$legacy: true
                    });
                  }
                  reset(div_40);
                  var node_23 = sibling(div_40, 2);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var div_41 = root_7();
                      var node_24 = child(div_41);
                      DefaultFiltersSelector(node_24, {
                        get filters() {
                          return get(toggleableFilters);
                        },
                        get selectedFilterIds() {
                          return get(defaultFilterIds);
                        },
                        set selectedFilterIds($$value) {
                          set(defaultFilterIds, $$value);
                        },
                        $$legacy: true
                      });
                      reset(div_41);
                      append($$anchor6, div_41);
                    };
                    if_block(node_23, ($$render) => {
                      if (deep_read_state(get(toggleableFilters)), untrack(() => get(toggleableFilters).length > 0)) $$render(consequent_9);
                    });
                  }
                  append($$anchor5, fragment_5);
                };
                var d = user_derived(() => ($functions(), untrack(() => ($functions() ?? []).filter((func) => func.type === "filter").length > 0)));
                if_block(node_21, ($$render) => {
                  if (get(d)) $$render(consequent_10);
                });
              }
              var node_25 = sibling(node_21, 2);
              {
                var consequent_11 = ($$anchor5) => {
                  var div_42 = root_7();
                  var node_26 = child(div_42);
                  {
                    let $0 = derived_safe_equal(() => ($functions(), untrack(() => ($functions() ?? []).filter((func) => func.type === "action"))));
                    ActionsSelector(node_26, {
                      get actions() {
                        return get($0);
                      },
                      get selectedActionIds() {
                        return get(actionIds);
                      },
                      set selectedActionIds($$value) {
                        set(actionIds, $$value);
                      },
                      $$legacy: true
                    });
                  }
                  reset(div_42);
                  append($$anchor5, div_42);
                };
                var d_1 = user_derived(() => ($functions(), untrack(() => ($functions() ?? []).filter((func) => func.type === "action").length > 0)));
                if_block(node_25, ($$render) => {
                  if (get(d_1)) $$render(consequent_11);
                });
              }
              append($$anchor4, fragment_4);
            };
            var d_2 = user_derived(() => ($functions(), untrack(() => ($functions() ?? []).filter((func) => func.type === "filter").length > 0 || ($functions() ?? []).filter((func) => func.type === "action").length > 0)));
            if_block(node_20, ($$render) => {
              if (get(d_2)) $$render(consequent_12);
            });
          }
          var div_43 = sibling(node_20, 4);
          var node_27 = child(div_43);
          Capabilities(node_27, {
            get capabilities() {
              return get(capabilities);
            },
            set capabilities($$value) {
              set(capabilities, $$value);
            },
            $$legacy: true
          });
          reset(div_43);
          var node_28 = sibling(div_43, 2);
          {
            var consequent_14 = ($$anchor4) => {
              const availableFeatures = derived_safe_equal(() => (get(capabilities), untrack(() => Object.entries(get(capabilities)).filter(([key, value]) => value && ["web_search", "code_interpreter", "image_generation"].includes(key)).map(([key, value]) => key))));
              var fragment_6 = comment();
              var node_29 = first_child(fragment_6);
              {
                var consequent_13 = ($$anchor5) => {
                  var div_44 = root_7();
                  var node_30 = child(div_44);
                  DefaultFeatures(node_30, {
                    get availableFeatures() {
                      return get(availableFeatures);
                    },
                    get featureIds() {
                      return get(defaultFeatureIds);
                    },
                    set featureIds($$value) {
                      set(defaultFeatureIds, $$value);
                    },
                    $$legacy: true
                  });
                  reset(div_44);
                  append($$anchor5, div_44);
                };
                if_block(node_29, ($$render) => {
                  if (deep_read_state(get(availableFeatures)), untrack(() => get(availableFeatures).length > 0)) $$render(consequent_13);
                });
              }
              append($$anchor4, fragment_6);
            };
            var d_3 = user_derived(() => (get(capabilities), untrack(() => Object.keys(get(capabilities)).filter((key) => get(capabilities)[key]).length > 0)));
            if_block(node_28, ($$render) => {
              if (get(d_3)) $$render(consequent_14);
            });
          }
          var node_31 = sibling(node_28, 2);
          {
            var consequent_15 = ($$anchor4) => {
              var div_45 = root_7();
              var node_32 = child(div_45);
              BuiltinTools(node_32, {
                get builtinTools() {
                  return get(builtinTools);
                },
                set builtinTools($$value) {
                  set(builtinTools, $$value);
                },
                $$legacy: true
              });
              reset(div_45);
              append($$anchor4, div_45);
            };
            if_block(node_31, ($$render) => {
              if (get(capabilities), untrack(() => get(capabilities).builtin_tools)) $$render(consequent_15);
            });
          }
          var node_33 = sibling(node_31, 2);
          {
            var consequent_16 = ($$anchor4) => {
              var div_46 = root_7();
              var node_34 = child(div_46);
              TerminalSelector(node_34, {
                get terminalId() {
                  return get(terminalId);
                },
                set terminalId($$value) {
                  set(terminalId, $$value);
                },
                $$legacy: true
              });
              reset(div_46);
              append($$anchor4, div_46);
            };
            if_block(node_33, ($$render) => {
              if (get(capabilities), untrack(() => get(capabilities).terminal)) $$render(consequent_16);
            });
          }
          var div_47 = sibling(node_33, 2);
          var div_48 = child(div_47);
          var div_49 = child(div_48);
          var text_17 = child(div_49, true);
          reset(div_49);
          reset(div_48);
          var input_3 = sibling(div_48, 2);
          remove_input_defaults(input_3);
          reset(div_47);
          var div_50 = sibling(div_47, 4);
          var button_7 = child(div_50);
          var div_51 = child(button_7);
          var node_35 = child(div_51);
          {
            var consequent_17 = ($$anchor4) => {
              var text_18 = text();
              template_effect(($0) => set_text(text_18, $0), [() => ($i18n(), untrack(() => $i18n().t("Save & Update")))]);
              append($$anchor4, text_18);
            };
            var alternate_4 = ($$anchor4) => {
              var text_19 = text();
              template_effect(($0) => set_text(text_19, $0), [() => ($i18n(), untrack(() => $i18n().t("Save & Create")))]);
              append($$anchor4, text_19);
            };
            if_block(node_35, ($$render) => {
              if (edit()) $$render(consequent_17);
              else $$render(alternate_4, -1);
            });
          }
          reset(div_51);
          var node_36 = sibling(div_51, 2);
          {
            var consequent_18 = ($$anchor4) => {
              var div_52 = root_10();
              var node_37 = child(div_52);
              Spinner(node_37, {});
              reset(div_52);
              append($$anchor4, div_52);
            };
            if_block(node_36, ($$render) => {
              if (get(loading)) $$render(consequent_18);
            });
          }
          reset(button_7);
          reset(div_50);
          var div_53 = sibling(div_50, 2);
          var div_54 = child(div_53);
          var div_55 = child(div_54);
          var text_20 = child(div_55, true);
          reset(div_55);
          var button_8 = sibling(div_55, 2);
          var node_38 = child(button_8);
          {
            var consequent_19 = ($$anchor4) => {
              var span_6 = root_5();
              var text_21 = child(span_6, true);
              reset(span_6);
              template_effect(($0) => set_text(text_21, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide")))]);
              append($$anchor4, span_6);
            };
            var alternate_5 = ($$anchor4) => {
              var span_7 = root_5();
              var text_22 = child(span_7, true);
              reset(span_7);
              template_effect(($0) => set_text(text_22, $0), [() => ($i18n(), untrack(() => $i18n().t("Show")))]);
              append($$anchor4, span_7);
            };
            if_block(node_38, ($$render) => {
              if (get(showPreview)) $$render(consequent_19);
              else $$render(alternate_5, -1);
            });
          }
          reset(button_8);
          reset(div_54);
          var node_39 = sibling(div_54, 2);
          {
            var consequent_20 = ($$anchor4) => {
              var div_56 = root_11();
              var textarea = child(div_56);
              remove_textarea_child(textarea);
              reset(div_56);
              template_effect(($0) => set_value(textarea, $0), [
                () => (get(info), untrack(() => JSON.stringify(get(info), null, 2)))
              ]);
              append($$anchor4, div_56);
            };
            if_block(node_39, ($$render) => {
              if (get(showPreview)) $$render(consequent_20);
            });
          }
          reset(div_53);
          reset(div_2);
          reset(form);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) => {
              set_class(button_1, 1, `rounded-2xl flex shrink-0 items-center ${(get(info), deep_read_state(REXPRO_BASE_URL), untrack(() => get(info).meta.profile_image_url !== `${REXPRO_BASE_URL}/static/favicon.png` ? "bg-transparent" : "bg-white")) ?? ""} shadow-xl group relative`);
              set_attribute(button_1, "aria-label", $0);
              set_text(text_1, $1);
              set_attribute(input_1, "placeholder", $2);
              set_attribute(input_2, "placeholder", $3);
              input_2.disabled = edit();
              set_text(text_2, $4);
              set_text(text_6, $5);
              set_attribute(button_4, "aria-pressed", get(enableDescription) ? "true" : "false");
              set_attribute(button_4, "aria-label", $6);
              set_text(text_9, $7);
              set_text(text_10, $8);
              set_text(text_11, $9);
              set_text(text_14, $10);
              set_text(text_17, $11);
              set_attribute(input_3, "placeholder", $12);
              set_class(button_7, 1, ` text-sm px-3 py-2 transition rounded-lg ${get(loading) ? " cursor-not-allowed bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black" : "bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black"} flex w-full justify-center`);
              button_7.disabled = get(loading);
              set_text(text_20, $13);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Upload profile image"))),
              () => ($i18n(), untrack(() => $i18n().t("Reset Image"))),
              () => ($i18n(), untrack(() => $i18n().t("Model Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Model ID"))),
              () => ($i18n(), untrack(() => $i18n().t("Access"))),
              () => ($i18n(), untrack(() => $i18n().t("Description"))),
              () => (get(enableDescription), $i18n(), untrack(() => get(enableDescription) ? $i18n().t("Custom description enabled") : $i18n().t("Default description enabled"))),
              () => ($i18n(), untrack(() => $i18n().t("Model Params"))),
              () => ($i18n(), untrack(() => $i18n().t("System Prompt"))),
              () => ($i18n(), untrack(() => $i18n().t("Advanced Params"))),
              () => ($i18n(), untrack(() => $i18n().t("Prompts"))),
              () => ($i18n(), untrack(() => $i18n().t("TTS Voice"))),
              () => ($i18n(), untrack(() => $i18n().t("e.g. alloy, echo, shimmer"))),
              () => ($i18n(), untrack(() => $i18n().t("JSON Preview")))
            ]
          );
          event("click", button_1, () => {
            get(filesInputElement).click();
          });
          event("click", button_2, () => {
            mutate(info, get(info).meta.profile_image_url = `${REXPRO_BASE_URL}/static/favicon.png`), invalidate_inner_signals(() => {
              $i18n();
              $models();
              model();
            });
          });
          bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
          bind_value(input_2, () => get(id), ($$value) => set(id, $$value));
          event("click", button_3, () => {
            set(showAccessControlModal, true);
          });
          event("click", button_4, () => {
            set(enableDescription, !get(enableDescription));
          });
          event("click", button_5, () => {
            set(showAdvanced, !get(showAdvanced));
          });
          event("click", button_6, () => {
            var _a, _b;
            if ((((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts) ?? null) === null) {
              mutate(info, get(info).meta.suggestion_prompts = [{ content: "", title: ["", ""] }]), invalidate_inner_signals(() => {
                $i18n();
                $models();
                model();
              });
            } else {
              mutate(info, get(info).meta.suggestion_prompts = null), invalidate_inner_signals(() => {
                $i18n();
                $models();
                model();
              });
            }
          });
          bind_value(input_3, () => get(tts).voice, ($$value) => mutate(tts, get(tts).voice = $$value));
          event("click", button_8, () => {
            set(showPreview, !get(showPreview));
          });
          event("submit", form, preventDefault(() => {
            submitHandler();
          }));
          append($$anchor3, form);
        };
        if_block(node_3, ($$render) => {
          if (!edit() || edit() && model()) $$render(consequent_21);
        });
      }
      reset(div_1);
      bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
      event("change", input, () => {
        var _a, _b;
        let reader = new FileReader();
        reader.onload = (event2) => {
          var _a2, _b2;
          let originalImageUrl = `${(_a2 = event2.target) == null ? void 0 : _a2.result}`;
          const fileType = (_b2 = get(inputFiles)[0]) == null ? void 0 : _b2["type"];
          if (fileType === "image/gif" || fileType === "image/webp") {
            mutate(info, get(info).meta.profile_image_url = originalImageUrl), invalidate_inner_signals(() => {
              $i18n();
              $models();
              model();
            });
            set(inputFiles, null);
            mutate(filesInputElement, get(filesInputElement).value = "");
            return;
          }
          const img = new Image();
          img.src = originalImageUrl;
          img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const aspectRatio = img.width / img.height;
            let newWidth, newHeight;
            if (aspectRatio > 1) {
              newWidth = 250 * aspectRatio;
              newHeight = 250;
            } else {
              newWidth = 250;
              newHeight = 250 / aspectRatio;
            }
            canvas.width = 250;
            canvas.height = 250;
            const offsetX = (250 - newWidth) / 2;
            const offsetY = (250 - newHeight) / 2;
            ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            const compressedSrc = canvas.toDataURL("image/webp", 0.8);
            mutate(info, get(info).meta.profile_image_url = compressedSrc), invalidate_inner_signals(() => {
              $i18n();
              $models();
              model();
            });
            set(inputFiles, null);
            mutate(filesInputElement, get(filesInputElement).value = "");
          };
        };
        if (get(inputFiles) && get(inputFiles).length > 0 && [
          "image/gif",
          "image/webp",
          "image/jpeg",
          "image/png",
          "image/svg+xml"
        ].includes((_a = get(inputFiles)[0]) == null ? void 0 : _a["type"])) {
          reader.readAsDataURL(get(inputFiles)[0]);
        } else {
          /* @__PURE__ */ console.log(`Unsupported File Type '${(_b = get(inputFiles)[0]) == null ? void 0 : _b["type"]}'.`);
          set(inputFiles, null);
        }
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_22);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  BuiltinTools as B,
  Capabilities as C,
  DefaultFeatures as D,
  ModelEditor as M,
  PromptSuggestions as P
};
