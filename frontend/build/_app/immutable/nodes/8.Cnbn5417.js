import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop, e as store_get, s as setup_stores } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { C as Chat } from "../chunks/CqCKfQDI.js";
import { p as page } from "../chunks/B35obKje.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    if ($page().url.searchParams.get("error")) {
      toast.error($page().url.searchParams.get("error") || "An unknown error occurred.");
    }
  });
  init();
  Chat($$anchor, {});
  pop();
  $$cleanup();
}
export {
  _page as component
};
