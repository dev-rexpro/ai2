import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { c as config } from "../chunks/BJ3rUC-5.js";
import { A as Analytics } from "../chunks/Bbad2dIk.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    var _a;
    if (!(((_a = $config()) == null ? void 0 : _a.features.enable_admin_analytics) ?? true)) {
      goto("/admin");
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Analytics($$anchor2, {});
    };
    if_block(node, ($$render) => {
      var _a;
      if (((_a = $config()) == null ? void 0 : _a.features.enable_admin_analytics) ?? true) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
