import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop, e as store_get, s as setup_stores } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { d as dayjs2 } from "../chunks/BeGenu0j.js";
import "../chunks/B3L560rQ.js";
import { c as createNoteHandler } from "../chunks/rnYvrP1L.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    const title = $page().url.searchParams.get("title") ?? dayjs2().format("YYYY-MM-DD");
    const content = $page().url.searchParams.get("content") ?? "";
    const res = await createNoteHandler(title, content);
    if (res) {
      goto(`/notes/${res.id}`);
    }
  });
  init();
  pop();
  $$cleanup();
}
export {
  _page as component
};
