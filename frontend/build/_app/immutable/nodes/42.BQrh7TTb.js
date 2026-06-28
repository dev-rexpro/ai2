import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, k as get, e as store_get } from "../chunks/B-Kw_l3V.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { c as createNewPrompt } from "../chunks/DlsG6QUw.js";
import { P as PromptEditor } from "../chunks/YOYlBKNB.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  let clone = mutable_source(false);
  const onSubmit = async (_prompt) => {
    const res = await createNewPrompt(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Prompt created successfully"));
      await goto("/workspace/prompts");
    }
  };
  onMount(async () => {
    window.addEventListener("message", async (event) => {
      /* @__PURE__ */ console.log(event);
      if (![
        "https://rexpro-ai.rexpro.com",
        "https://www.openrexpro.com",
        "http://localhost:9999"
      ].includes(event.origin)) return;
      const _prompt = JSON.parse(event.data);
      /* @__PURE__ */ console.log("Received prompt via window message:", _prompt);
      set(clone, true);
      set(prompt, {
        name: _prompt.name || _prompt.title || "Prompt",
        command: _prompt.command,
        content: _prompt.content,
        tags: _prompt.tags || [],
        access_grants: _prompt.access_grants !== void 0 ? _prompt.access_grants : []
      });
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.prompt) {
      const _prompt = JSON.parse(sessionStorage.prompt);
      sessionStorage.removeItem("prompt");
      /* @__PURE__ */ console.log("Received prompt via sessionStorage:", _prompt);
      set(clone, true);
      set(prompt, {
        name: _prompt.name || _prompt.title || "Prompt",
        command: _prompt.command,
        content: _prompt.content,
        tags: _prompt.tags || [],
        access_grants: _prompt.access_grants !== void 0 ? _prompt.access_grants : []
      });
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(prompt), ($$anchor2) => {
    PromptEditor($$anchor2, {
      get prompt() {
        return get(prompt);
      },
      onSubmit,
      get clone() {
        return get(clone);
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
