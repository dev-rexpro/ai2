import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("v")) {
      const videoId = params.get("v");
      goto(`/?youtube=${encodeURIComponent(videoId)}`);
    } else {
      goto("/");
    }
  });
  init();
  pop();
}
export {
  _page as component
};
