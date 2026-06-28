import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, A as tick, l as legacy_pre_effect, k as get, m as deep_read_state, n as legacy_pre_effect_reset, h as first_child, z as sibling, c as child, r as reset, t as template_effect, u as untrack, y as event, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, x as derived_safe_equal, d as set_text, a_ as remove_textarea_child, f as from_html } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { s as set_attribute, r as remove_input_defaults } from "./B9yCN616.js";
import { b as bind_value } from "./CgeA63xA.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { t as toast } from "./B4Bn1xMI.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { A as AccessControlModal, L as LockClosed } from "./BURXHJDK.js";
import { C as ChevronLeft } from "./D9uL0uGA.js";
import { u as user } from "./BJ3rUC-5.js";
import { d as slugify, p as parseFrontmatter, f as formatSkillName } from "./X0cYWxFO.js";
import { S as Spinner } from "./gJqE84vs.js";
import { u as updateSkillAccessGrants } from "./DRvubTJA.js";
import { g as goto } from "./vYrFh_lq.js";
var root = from_html(`<button class="w-full text-left text-sm py-1.5 px-1 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850" type="button"><!></button>`);
var root_1 = from_html(`<input class="w-full text-2xl bg-transparent outline-hidden" type="text" required=""/>`);
var root_2 = from_html(`<button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button>`);
var root_3 = from_html(`<span class="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"> </span>`);
var root_4 = from_html(`<div class="text-sm text-gray-500 shrink-0"> </div>`);
var root_5 = from_html(`<input class="w-full text-sm disabled:text-gray-500 bg-transparent outline-hidden" type="text" required=""/>`);
var root_6 = from_html(`<input class="w-full text-sm bg-transparent outline-hidden" type="text"/>`);
var root_7 = from_html(`<div class="px-4 py-3 overflow-y-auto flex-1"><pre class="text-xs whitespace-pre-wrap font-mono"> </pre></div>`);
var root_8 = from_html(`<textarea class="w-full flex-1 text-xs bg-transparent outline-hidden resize-none font-mono px-4 py-3" required=""></textarea>`);
var root_9 = from_html(`<span class="shrink-0"><!></span>`);
var root_10 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap" type="submit"> <!></button>`);
var root_11 = from_html(`<!> <div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><form class=" flex flex-col max-h-[100dvh] h-full"><div class="flex flex-col flex-1 overflow-auto h-0 rounded-lg"><div class="w-full mb-2 flex flex-col gap-0.5"><div class="flex w-full items-center"><div class=" shrink-0 mr-2"><!></div> <div class="flex-1"><!></div> <div class="self-center shrink-0"><!></div></div> <div class=" flex gap-2 px-1 items-center"><!> <!></div></div> <div class="mb-2 flex-1 overflow-auto h-0 rounded-lg"><div class="h-full flex flex-col"><div class="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100/50 dark:border-gray-850/50 flex-1 min-h-0 overflow-hidden flex flex-col"><!></div></div></div> <div class="pb-3 flex justify-end"><!></div></div></form></div></div>`, 1);
function SkillEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let onSubmit = prop($$props, "onSubmit", 8);
  let edit = prop($$props, "edit", 8, false);
  let skill = prop($$props, "skill", 8, null);
  let clone = prop($$props, "clone", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let name = mutable_source("");
  let id = mutable_source("");
  let description = mutable_source("");
  let content = mutable_source("");
  let accessGrants = mutable_source([]);
  let showAccessControlModal = mutable_source(false);
  const handleContentInput = () => {
    if (edit()) return;
    const fm = parseFrontmatter(get(content));
    if (fm.name && !get(name)) {
      set(name, formatSkillName(fm.name));
      set(id, fm.name);
    }
    if (fm.description && !get(description)) {
      set(description, fm.description);
    }
  };
  const submitHandler = async () => {
    if (disabled()) {
      toast.error($i18n().t("You do not have permission to edit this skill."));
      return;
    }
    set(loading, true);
    await onSubmit()({
      id: get(id),
      name: get(name),
      description: get(description),
      content: get(content),
      is_active: true,
      meta: { tags: [] },
      access_grants: get(accessGrants)
    });
    set(loading, false);
  };
  onMount(async () => {
    var _a, _b;
    if (skill()) {
      set(name, skill().name || "");
      await tick();
      set(id, skill().id || "");
      set(description, skill().description || "");
      set(content, skill().content || "");
      set(accessGrants, ((_a = skill()) == null ? void 0 : _a.access_grants) === void 0 ? [] : (_b = skill()) == null ? void 0 : _b.access_grants);
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(edit()), deep_read_state(clone()), get(name), slugify),
    () => {
      if (!edit() && !clone() && get(name)) {
        set(id, slugify(get(name)));
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root_11();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.skills) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $1 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_skills) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $2 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return (((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.access_grants) == null ? void 0 : _c.allow_users) ?? true) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    AccessControlModal(node, {
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
        if (edit() && ((_a = skill()) == null ? void 0 : _a.id)) {
          try {
            await updateSkillAccessGrants(localStorage.token, skill().id, get(accessGrants));
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
  var div = sibling(node, 2);
  var div_1 = child(div);
  var form = child(div_1);
  var div_2 = child(form);
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
        var button = root();
        var node_2 = child(button);
        ChevronLeft(node_2, { strokeWidth: "2.5" });
        reset(button);
        template_effect(($02) => set_attribute(button, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Back")))]);
        event("click", button, () => {
          goto("/workspace/skills");
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node_3 = child(div_6);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. Code Review Guidelines"))));
    Tooltip(node_3, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input = root_1();
        remove_input_defaults(input);
        template_effect(
          ($02, $1) => {
            set_attribute(input, "placeholder", $02);
            set_attribute(input, "aria-label", $1);
            input.disabled = disabled();
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Skill Name"))),
            () => ($i18n(), untrack(() => $i18n().t("Skill Name")))
          ]
        );
        bind_value(input, () => get(name), ($$value) => set(name, $$value));
        append($$anchor2, input);
      },
      $$slots: { default: true }
    });
  }
  reset(div_6);
  var div_7 = sibling(div_6, 2);
  var node_4 = child(div_7);
  {
    var consequent = ($$anchor2) => {
      var button_1 = root_2();
      var node_5 = child(button_1);
      LockClosed(node_5, { strokeWidth: "2.5", className: "size-3.5" });
      var div_8 = sibling(node_5, 2);
      var text = child(div_8, true);
      reset(div_8);
      reset(button_1);
      template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Access")))]);
      event("click", button_1, () => set(showAccessControlModal, true));
      append($$anchor2, button_1);
    };
    var alternate = ($$anchor2) => {
      var span = root_3();
      var text_1 = child(span, true);
      reset(span);
      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Read Only")))]);
      append($$anchor2, span);
    };
    if_block(node_4, ($$render) => {
      if (!disabled()) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_7);
  reset(div_4);
  var div_9 = sibling(div_4, 2);
  var node_6 = child(div_9);
  {
    var consequent_1 = ($$anchor2) => {
      var div_10 = root_4();
      var text_2 = child(div_10, true);
      reset(div_10);
      template_effect(() => set_text(text_2, get(id)));
      append($$anchor2, div_10);
    };
    var alternate_1 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. code-review-guidelines"))));
        Tooltip($$anchor2, {
          className: "w-full",
          get content() {
            return get($0);
          },
          placement: "top-start",
          children: ($$anchor3, $$slotProps) => {
            var input_1 = root_5();
            remove_input_defaults(input_1);
            template_effect(
              ($02, $1) => {
                set_attribute(input_1, "placeholder", $02);
                set_attribute(input_1, "aria-label", $1);
                input_1.disabled = edit();
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Skill ID"))),
                () => ($i18n(), untrack(() => $i18n().t("Skill ID")))
              ]
            );
            bind_value(input_1, () => get(id), ($$value) => set(id, $$value));
            append($$anchor3, input_1);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_6, ($$render) => {
      if (edit()) $$render(consequent_1);
      else $$render(alternate_1, -1);
    });
  }
  var node_7 = sibling(node_6, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. Step-by-step instructions for code reviews"))));
    Tooltip(node_7, {
      className: "w-full self-center items-center flex",
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input_2 = root_6();
        remove_input_defaults(input_2);
        template_effect(
          ($02, $1) => {
            set_attribute(input_2, "placeholder", $02);
            set_attribute(input_2, "aria-label", $1);
            input_2.disabled = disabled();
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Skill Description"))),
            () => ($i18n(), untrack(() => $i18n().t("Skill Description")))
          ]
        );
        bind_value(input_2, () => get(description), ($$value) => set(description, $$value));
        append($$anchor2, input_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_9);
  reset(div_3);
  var div_11 = sibling(div_3, 2);
  var div_12 = child(div_11);
  var div_13 = child(div_12);
  var node_8 = child(div_13);
  {
    var consequent_2 = ($$anchor2) => {
      var div_14 = root_7();
      var pre = child(div_14);
      var text_3 = child(pre, true);
      reset(pre);
      reset(div_14);
      template_effect(() => set_text(text_3, get(content)));
      append($$anchor2, div_14);
    };
    var alternate_2 = ($$anchor2) => {
      var textarea = root_8();
      remove_textarea_child(textarea);
      template_effect(
        ($0, $1) => {
          set_attribute(textarea, "placeholder", $0);
          set_attribute(textarea, "aria-label", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Enter skill instructions in markdown..."))),
          () => ($i18n(), untrack(() => $i18n().t("Skill Instructions")))
        ]
      );
      bind_value(textarea, () => get(content), ($$value) => set(content, $$value));
      event("input", textarea, handleContentInput);
      append($$anchor2, textarea);
    };
    if_block(node_8, ($$render) => {
      if (disabled()) $$render(consequent_2);
      else $$render(alternate_2, -1);
    });
  }
  reset(div_13);
  reset(div_12);
  reset(div_11);
  var div_15 = sibling(div_11, 2);
  var node_9 = child(div_15);
  {
    var consequent_4 = ($$anchor2) => {
      var button_2 = root_10();
      var text_4 = child(button_2);
      var node_10 = sibling(text_4);
      {
        var consequent_3 = ($$anchor3) => {
          var span_1 = root_9();
          var node_11 = child(span_1);
          Spinner(node_11, {});
          reset(span_1);
          append($$anchor3, span_1);
        };
        if_block(node_10, ($$render) => {
          if (get(loading)) $$render(consequent_3);
        });
      }
      reset(button_2);
      template_effect(
        ($0) => {
          button_2.disabled = get(loading);
          set_text(text_4, `${$0 ?? ""} `);
        },
        [
          () => ($i18n(), deep_read_state(edit()), untrack(() => $i18n().t(edit() ? "Save" : "Save & Create")))
        ]
      );
      append($$anchor2, button_2);
    };
    if_block(node_9, ($$render) => {
      if (!disabled()) $$render(consequent_4);
    });
  }
  reset(div_15);
  reset(div_2);
  reset(form);
  reset(div_1);
  reset(div);
  event("submit", form, preventDefault(submitHandler));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  SkillEditor as S
};
