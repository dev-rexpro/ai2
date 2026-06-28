import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, x as derived_safe_equal, e as store_get } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { c as createNewTool, g as getTools } from "../chunks/BjHnuYj-.js";
import { T as ToolkitEditor } from "../chunks/BqX3BTbS.js";
import { R as REXPRO_VERSION } from "../chunks/CZpnbXda.js";
import { t as tools } from "../chunks/BJ3rUC-5.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/X0cYWxFO.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let mounted = mutable_source(false);
  let clone = mutable_source(false);
  let tool = mutable_source(null);
  const saveHandler = async (data) => {
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
    const res = await createNewTool(localStorage.token, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content,
      access_grants: data.access_grants
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Tool created successfully"));
      tools.set(await getTools(localStorage.token));
      await goto("/workspace/tools");
    }
  };
  onMount(() => {
    window.addEventListener("message", async (event) => {
      if (![
        "https://rexpro-ai.rexpro.com",
        "https://www.openrexpro.com",
        "http://localhost:9999"
      ].includes(event.origin)) return;
      set(tool, JSON.parse(event.data));
      /* @__PURE__ */ console.log(get(tool));
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.tool) {
      set(tool, JSON.parse(sessionStorage.tool));
      sessionStorage.removeItem("tool");
      /* @__PURE__ */ console.log(get(tool));
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
        return (_a = get(tool)) == null ? void 0 : _a.content;
      }, ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(tool)) == null ? void 0 : _a.id) ?? "";
          });
          let $1 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(tool)) == null ? void 0 : _a.name) ?? "";
          });
          let $2 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(tool)) == null ? void 0 : _a.meta) ?? { description: "" };
          });
          let $3 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(tool)) == null ? void 0 : _a.content) ?? "";
          });
          let $4 = derived_safe_equal(() => {
            var _a;
            return ((_a = get(tool)) == null ? void 0 : _a.access_grants) !== void 0 ? get(tool).access_grants : [];
          });
          ToolkitEditor($$anchor3, {
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
            get accessGrants() {
              return get($4);
            },
            get clone() {
              return get(clone);
            },
            onSave: (value) => {
              saveHandler(value);
            }
          });
        }
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
