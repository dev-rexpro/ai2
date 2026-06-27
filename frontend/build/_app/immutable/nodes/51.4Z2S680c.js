import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, k as get, c as child, r as reset, z as sibling, t as template_effect, d as set_text, y as event, f as from_html } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/BLfIdBii.js";
import { c as config, R as REXPRO_NAME } from "../chunks/BJ3rUC-5.js";
var root = from_html(`<div class="absolute w-full h-full flex z-50"><div class="absolute rounded-xl w-full h-full backdrop-blur-sm flex justify-center"><div class="m-auto pb-44 flex flex-col justify-center"><div class="max-w-md"><div class="text-center text-2xl font-medium z-50"> </div> <div class=" mt-4 text-center text-sm w-full"> <br class=" "/> <br class=" "/> <a class=" font-medium underline" href="https://github.com/dev-rexpro/rexpro-ai#how-to-install-" target="_blank"> </a> <a class=" font-medium underline" href="https://discord.gg/5rJgQTnV4s" target="_blank"> </a></div> <div class=" mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition font-medium text-sm text-black"> </button></div></div></div></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    if ($config()) {
      await goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var text_1 = child(div_5);
      var a = sibling(text_1, 5);
      var text_2 = child(a, true);
      reset(a);
      var text_3 = sibling(a);
      var a_1 = sibling(text_3);
      var text_4 = child(a_1, true);
      reset(a_1);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button = child(div_6);
      var text_5 = child(button, true);
      reset(button);
      reset(div_6);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5) => {
          set_text(text, $0);
          set_text(text_1, `${$1 ?? ""} `);
          set_text(text_2, $2);
          set_text(text_3, ` ${$3 ?? ""} `);
          set_text(text_4, $4);
          set_text(text_5, $5);
        },
        [
          () => $i18n().t("{{rexproAIName}} Backend Required", { rexproAIName: $REXPRO_NAME() }),
          () => $i18n().t("Oops! You're using an unsupported method (frontend only). Please serve the rexpro from the backend."),
          () => $i18n().t("See readme.md for instructions"),
          () => $i18n().t("or"),
          () => $i18n().t("join our Discord for help."),
          () => $i18n().t("Check Again")
        ]
      );
      event("click", button, () => {
        location.href = "/";
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
