import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, c as child, r as reset, z as sibling, t as template_effect, u as untrack, d as set_text, y as event, a as append, b as pop, e as store_get, s as setup_stores, f as from_html, B as from_svg } from "./B-Kw_l3V.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { M as Modal } from "./tmhUPuyr.js";
import { A as AccessControl } from "./CLBCwB6U.js";
import { X as XMark } from "./DAqPThR3.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
var root$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-3 pb-1"><div class=" text-lg font-medium self-center font-primary"> </div> <button class="self-center"><!></button></div> <div class="w-full px-5 pb-4 dark:text-white"><!></div></div>`);
function AccessControlModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let accessGrants = prop($$props, "accessGrants", 28, () => []);
  let accessControl = prop($$props, "accessControl", 12, void 0);
  let accessRoles = prop($$props, "accessRoles", 24, () => ["read"]);
  let share = prop($$props, "share", 8, true);
  let sharePublic = prop($$props, "sharePublic", 8, true);
  let shareUsers = prop($$props, "shareUsers", 8, true);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var node_1 = child(div_3);
      AccessControl(node_1, {
        get onChange() {
          return onChange();
        },
        get accessRoles() {
          return accessRoles();
        },
        get share() {
          return share();
        },
        get sharePublic() {
          return sharePublic();
        },
        get shareUsers() {
          return shareUsers();
        },
        get accessGrants() {
          return accessGrants();
        },
        set accessGrants($$value) {
          accessGrants($$value);
        },
        get accessControl() {
          return accessControl();
        },
        set accessControl($$value) {
          accessControl($$value);
        },
        $$legacy: true
      });
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Access Control")))
      ]);
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>`);
function LockClosed($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  AccessControlModal as A,
  LockClosed as L
};
