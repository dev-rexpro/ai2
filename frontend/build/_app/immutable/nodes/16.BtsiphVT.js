import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, c as child, r as reset, f as from_html } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { f as functions, m as models, c as config, s as settings } from "../chunks/BJ3rUC-5.js";
import { a as getFunctionById, u as updateFunctionById, g as getFunctions } from "../chunks/Bw_Wh1To.js";
import { F as FunctionEditor } from "../chunks/CrvCsPL_.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/X0cYWxFO.js";
import { R as REXPRO_VERSION } from "../chunks/CZpnbXda.js";
var root = from_html(`<div class="px-[16px] h-full"><!></div>`);
var root_1 = from_html(`<div class="flex items-center justify-center h-full"><div class=" pb-16"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let func = mutable_source(null);
  const saveHandler = async (data) => {
    var _a, _b, _c;
    /* @__PURE__ */ console.log(data);
    const manifest = extractFrontmatter(data.content);
    if (compareVersion((manifest == null ? void 0 : manifest.required_open_rexpro_version) ?? "0.0.0", REXPRO_VERSION)) {
      /* @__PURE__ */ console.log("Version is lower than required");
      toast.error($i18n().t("rexpro-ai version (v{{OPEN_REXPRO_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})", {
        OPEN_REXPRO_VERSION: REXPRO_VERSION,
        REQUIRED_VERSION: (manifest == null ? void 0 : manifest.required_open_rexpro_version) ?? "0.0.0"
      }));
      return;
    }
    const res = await updateFunctionById(localStorage.token, get(func).id, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Function updated successfully"));
      functions.set(await getFunctions(localStorage.token));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
    }
  };
  onMount(async () => {
    /* @__PURE__ */ console.log("mounted");
    const id = $page().url.searchParams.get("id");
    if (id) {
      set(func, await getFunctionById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        goto("/admin/functions");
        return null;
      }));
      /* @__PURE__ */ console.log(get(func));
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var node_1 = child(div);
      FunctionEditor(node_1, {
        edit: true,
        get id() {
          return get(func).id;
        },
        get name() {
          return get(func).name;
        },
        get meta() {
          return get(func).meta;
        },
        get content() {
          return get(func).content;
        },
        onSave: (value) => {
          saveHandler(value);
        }
      });
      reset(div);
      append($$anchor2, div);
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_1();
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      Spinner(node_2, { className: "size-5" });
      reset(div_2);
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get(func)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
