import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores, C as deferred_template_effect, q as mutable_source, $ as $document, k as get, c as child, z as sibling, r as reset, t as template_effect, d as set_text, f as from_html, y as event, x as derived_safe_equal } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { a as set_class } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { u as user, R as REXPRO_NAME, a as mobile, c as config, b as showSidebar } from "../chunks/BJ3rUC-5.js";
import { p as page } from "../chunks/B35obKje.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { S as Sidebar } from "../chunks/WvwlXjr7.js";
var root = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_1 = from_html(`<div><!></div>`);
var root_2 = from_html(`<a draggable="false" href="/admin/analytics"> </a>`);
var root_3 = from_html(`<div><nav class="   px-2.5 pt-1.5 backdrop-blur-xl drag-region select-none"><div class=" flex items-center gap-1"><!> <div class=" flex w-full"><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent pt-1"><a draggable="false" href="/admin"> </a> <!> <a draggable="false" href="/admin/evaluations"> </a> <a draggable="false" href="/admin/functions"> </a> <a draggable="false" href="/admin/settings"> </a></div></div></div></nav> <div class="  pb-1 flex-1 max-h-full overflow-y-auto"><!></div></div>`);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  head("1ig8eow", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Admin Panel")]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_3();
      var nav = child(div);
      var div_1 = child(nav);
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_1();
          var node_2 = child(div_2);
          {
            let $0 = derived_safe_equal(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"));
            Tooltip(node_2, {
              get content() {
                return get($0);
              },
              interactive: true,
              children: ($$anchor4, $$slotProps) => {
                var button = root();
                var div_3 = child(button);
                var node_3 = child(div_3);
                Sidebar(node_3, {});
                reset(div_3);
                reset(button);
                event("click", button, () => {
                  showSidebar.set(!$showSidebar());
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_2);
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center self-end`));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var div_5 = child(div_4);
      var a = child(div_5);
      var text = child(a, true);
      reset(a);
      var node_4 = sibling(a, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var a_1 = root_2();
          var text_1 = child(a_1, true);
          reset(a_1);
          template_effect(
            ($0, $1) => {
              set_class(a_1, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition select-none`);
              set_text(text_1, $1);
            },
            [
              () => $page().url.pathname.includes("/admin/analytics") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
              () => $i18n().t("Analytics")
            ]
          );
          append($$anchor3, a_1);
        };
        if_block(node_4, ($$render) => {
          var _a;
          if (((_a = $config()) == null ? void 0 : _a.features.enable_admin_analytics) ?? true) $$render(consequent_1);
        });
      }
      var a_2 = sibling(node_4, 2);
      var text_2 = child(a_2, true);
      reset(a_2);
      var a_3 = sibling(a_2, 2);
      var text_3 = child(a_3, true);
      reset(a_3);
      var a_4 = sibling(a_3, 2);
      var text_4 = child(a_4, true);
      reset(a_4);
      reset(div_5);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_6 = sibling(nav, 2);
      var node_5 = child(div_6);
      slot(node_5, $$props, "default", {}, null);
      reset(div_6);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7) => {
          set_class(div, 1, ` flex flex-col h-screen max-h-[100dvh] flex-1 transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : " md:max-w-[calc(100%-49px)]"}  w-full max-w-full`);
          set_class(a, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition select-none`);
          set_text(text, $1);
          set_class(a_2, 1, `min-w-fit p-1.5 ${$2 ?? ""} transition select-none`);
          set_text(text_2, $3);
          set_class(a_3, 1, `min-w-fit p-1.5 ${$4 ?? ""} transition select-none`);
          set_text(text_3, $5);
          set_class(a_4, 1, `min-w-fit p-1.5 ${$6 ?? ""} transition select-none`);
          set_text(text_4, $7);
        },
        [
          () => $page().url.pathname.includes("/admin/users") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Users"),
          () => $page().url.pathname.includes("/admin/evaluations") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Evaluations"),
          () => $page().url.pathname.includes("/admin/functions") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Functions"),
          () => $page().url.pathname.includes("/admin/settings") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Settings")
        ]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
