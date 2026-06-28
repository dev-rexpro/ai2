import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, b as pop, s as setup_stores, e as store_get } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { p as page } from "../chunks/B35obKje.js";
import { C as Chat } from "../chunks/CqCKfQDI.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  Chat($$anchor, {
    get chatIdProp() {
      return $page().params.id;
    }
  });
  pop();
  $$cleanup();
}
export {
  _page as component
};
