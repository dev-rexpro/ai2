import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { m as models, c as config, s as settings } from "../chunks/BJ3rUC-5.js";
import { g as getModelById, u as updateModelById } from "../chunks/CVPpQuuG.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { M as ModelEditor } from "../chunks/4bCio9y3.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let model = mutable_source(null);
  onMount(async () => {
    var _a;
    const _id = $page().url.searchParams.get("id");
    if (_id) {
      set(model, await getModelById(localStorage.token, _id).catch((e) => {
        return null;
      }));
      if (!get(model)) {
        goto("/workspace/models");
      }
      if (!((_a = get(model)) == null ? void 0 : _a.write_access)) {
        toast.error($i18n().t("You do not have permission to edit this model"));
        goto("/workspace/models");
      }
    } else {
      goto("/workspace/models");
    }
  });
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    const res = await updateModelById(localStorage.token, modelInfo.id, modelInfo);
    if (res) {
      await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      toast.success($i18n().t("Model updated successfully"));
      await goto("/workspace/models");
    }
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      ModelEditor($$anchor2, {
        edit: true,
        get model() {
          return get(model);
        },
        onSubmit
      });
    };
    if_block(node, ($$render) => {
      if (get(model)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
