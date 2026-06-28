import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, c as child, r as reset, x as derived_safe_equal, f as from_html, e as store_get } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { f as functions, m as models, c as config, s as settings } from "../chunks/BJ3rUC-5.js";
import { c as createNewFunction, g as getFunctions } from "../chunks/Bw_Wh1To.js";
import { F as FunctionEditor } from "../chunks/CrvCsPL_.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/X0cYWxFO.js";
import { R as REXPRO_VERSION } from "../chunks/CZpnbXda.js";
var root = from_html(`<div class="px-[16px] h-full"><!></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let mounted = mutable_source(false);
  let clone = mutable_source(false);
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
    const res = await createNewFunction(localStorage.token, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Function created successfully"));
      functions.set(await getFunctions(localStorage.token));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
      await goto("/admin/functions");
    }
  };
  onMount(() => {
    window.addEventListener("message", async (event) => {
      if (![
        "https://rexpro-ai.rexpro.com",
        "https://www.openrexpro.com",
        "http://localhost:9999"
      ].includes(event.origin)) return;
      set(func, JSON.parse(event.data));
      /* @__PURE__ */ console.log(get(func));
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.function) {
      set(func, JSON.parse(sessionStorage.function));
      sessionStorage.removeItem("function");
      /* @__PURE__ */ console.log(get(func));
      set(clone, true);
    }
    set(mounted, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      key(node_1, () => {
        var _a;
        return (_a = get(func)) == null ? void 0 : _a.content;
      }, ($$anchor3) => {
        var div = root();
        var node_2 = child(div);
        {
          let $0 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(func)) == null ? void 0 : _a.id) ?? "";
          });
          let $1 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(func)) == null ? void 0 : _a.name) ?? "";
          });
          let $2 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(func)) == null ? void 0 : _a.meta) ?? { description: "" };
          });
          let $3 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(func)) == null ? void 0 : _a.content) ?? "";
          });
          FunctionEditor(node_2, {
            get id() {
              return get($0);
            },
            get name() {
              return get($1);
            },
            get meta() {
              return get($2);
            },
            get content() {
              return get($3);
            },
            get clone() {
              return get(clone);
            },
            onSave: (value) => {
              saveHandler(value);
            }
          });
        }
        reset(div);
        append($$anchor3, div);
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(mounted)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
