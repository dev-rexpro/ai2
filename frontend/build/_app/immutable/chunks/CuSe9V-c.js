import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, aS as createEventDispatcher, l as legacy_pre_effect, w as set, m as deep_read_state, n as legacy_pre_effect_reset, c as child, k as get, r as reset, t as template_effect, y as event, a as append, b as pop, q as mutable_source, f as from_html, B as from_svg, i as getContext, h as first_child, z as sibling, x as derived_safe_equal, u as untrack } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { a as set_class } from "./B9yCN616.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { s as slot } from "./zXynQJya.js";
import "./BJ3rUC-5.js";
import "./vYrFh_lq.js";
import "./C5m5pE-D.js";
import { L as Link_preview, a as Link_preview_trigger, U as UserStatusLinkPreview } from "./C1RNAtjy.js";
var root$1 = from_svg(`<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 12 4.7 4.5 9.3-9"></path></svg>`);
var root_1$1 = from_svg(`<svg class="w-3 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14"></path></svg>`);
var root_2 = from_html(`<button type="button"><div class="top-0 left-0 absolute w-full flex justify-center"><!></div></button>`);
function Checkbox($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let state = prop($$props, "state", 8, "unchecked");
  let indeterminate = prop($$props, "indeterminate", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let disabledClassName = prop($$props, "disabledClassName", 8, "opacity-50 cursor-not-allowed");
  let _state = mutable_source("unchecked");
  legacy_pre_effect(() => deep_read_state(state()), () => {
    set(_state, state());
  });
  legacy_pre_effect_reset();
  init();
  var button = root_2();
  var div = child(button);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var svg = root$1();
      append($$anchor2, svg);
    };
    var consequent_1 = ($$anchor2) => {
      var svg_1 = root_1$1();
      append($$anchor2, svg_1);
    };
    if_block(node, ($$render) => {
      if (get(_state) === "checked") $$render(consequent);
      else if (indeterminate()) $$render(consequent_1, 1);
    });
  }
  reset(div);
  reset(button);
  template_effect(() => {
    set_class(button, 1, ` outline -outline-offset-1 outline-[1.5px] outline-gray-200 dark:outline-gray-600 ${state() !== "unchecked" ? "bg-black outline-black " : "hover:outline-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"} text-white transition-all rounded-sm inline-block w-3.5 h-3.5 relative ${(disabled() ? disabledClassName() : "") ?? ""}`);
    button.disabled = disabled();
  });
  event("click", button, () => {
    if (disabled()) return;
    if (get(_state) === "unchecked") {
      set(_state, "checked");
      dispatch("change", get(_state));
    } else if (get(_state) === "checked") {
      set(_state, "unchecked");
      if (!indeterminate()) {
        dispatch("change", get(_state));
      }
    } else if (indeterminate()) {
      set(_state, "checked");
      dispatch("change", get(_state));
    }
  });
  append($$anchor, button);
  pop();
}
var root = from_html(`<button type="button" class=" cursor-pointer no-underline! font-normal!"><!></button>`);
var root_1 = from_html(`<!> <!>`, 1);
function ProfilePreview($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let user = prop($$props, "user", 8, null);
  let align = prop($$props, "align", 8, "center");
  let side = prop($$props, "side", 8, "right");
  let sideOffset = prop($$props, "sideOffset", 8, 8);
  let openPreview = mutable_source(false);
  init();
  Link_preview($$anchor, {
    openDelay: 0,
    closeDelay: 200,
    get open() {
      return get(openPreview);
    },
    set open($$value) {
      set(openPreview, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Link_preview_trigger(node, {
        class: "flex items-center",
        children: ($$anchor3, $$slotProps2) => {
          var button = root();
          var node_1 = child(button);
          slot(node_1, $$props, "default", {}, null);
          reset(button);
          event("click", button, () => {
            set(openPreview, !get(openPreview));
          });
          append($$anchor3, button);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(user()), untrack(() => {
          var _a;
          return (_a = user()) == null ? void 0 : _a.id;
        })));
        UserStatusLinkPreview(node_2, {
          get id() {
            return get($0);
          },
          get side() {
            return side();
          },
          get align() {
            return align();
          },
          get sideOffset() {
            return sideOffset();
          }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
}
export {
  Checkbox as C,
  ProfilePreview as P
};
