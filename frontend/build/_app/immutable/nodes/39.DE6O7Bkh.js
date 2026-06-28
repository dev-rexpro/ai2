import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, k as get, e as store_get } from "../chunks/B-Kw_l3V.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { m as models, c as config, s as settings } from "../chunks/BJ3rUC-5.js";
import { b as REXPRO_BASE_URL } from "../chunks/CZpnbXda.js";
import { c as createNewModel } from "../chunks/CVPpQuuG.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { M as ModelEditor } from "../chunks/4bCio9y3.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    if ($models().find((m) => m.id === modelInfo.id)) {
      toast.error($i18n().t("Error: A model with the ID '{{modelId}}' already exists. Please select a different ID to proceed.", { modelId: modelInfo.id }));
      return;
    }
    if (modelInfo.id === "") {
      toast.error($i18n().t("Error: Model ID cannot be empty. Please enter a valid ID to proceed."));
      return;
    }
    if (modelInfo) {
      const res = await createNewModel(localStorage.token, {
        ...modelInfo,
        meta: {
          ...modelInfo.meta,
          profile_image_url: modelInfo.meta.profile_image_url ?? `${REXPRO_BASE_URL}/static/favicon.png`,
          suggestion_prompts: modelInfo.meta.suggestion_prompts ? modelInfo.meta.suggestion_prompts.filter((prompt) => prompt.content !== "") : null
        },
        params: { ...modelInfo.params }
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
        toast.success($i18n().t("Model created successfully!"));
        await goto("/workspace/models");
      }
    }
  };
  let model = mutable_source(null);
  onMount(() => {
    const handleMessageEvent = async (event) => {
      if (![
        "https://rexpro-ai.rexpro.com",
        "https://www.openrexpro.com",
        "http://localhost:9999"
      ].includes(event.origin)) {
        return;
      }
      try {
        let data = JSON.parse(event.data);
        if (data == null ? void 0 : data.info) {
          data = data.info;
        }
        set(model, data);
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to parse message data:", e);
      }
    };
    window.addEventListener("message", handleMessageEvent);
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.model) {
      set(model, JSON.parse(sessionStorage.model));
      sessionStorage.removeItem("model");
    }
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(model), ($$anchor2) => {
    ModelEditor($$anchor2, {
      get model() {
        return get(model);
      },
      onSubmit
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
