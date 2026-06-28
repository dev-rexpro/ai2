import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, g as comment, h as first_child, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, c as child, r as reset, x as derived_safe_equal, f as from_html } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { a as getToolById, b as updateToolById, g as getTools } from "../chunks/BjHnuYj-.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { T as ToolkitEditor } from "../chunks/BqX3BTbS.js";
import { R as REXPRO_VERSION } from "../chunks/CZpnbXda.js";
import { t as tools } from "../chunks/BJ3rUC-5.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/X0cYWxFO.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
var root = from_html(`<div class="flex items-center justify-center h-full"><div class=" pb-16"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
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
    const res = await updateToolById(localStorage.token, get(tool).id, {
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
      toast.success($i18n().t("Tool updated successfully"));
      tools.set(await getTools(localStorage.token));
    }
  };
  onMount(async () => {
    /* @__PURE__ */ console.log("mounted");
    const id = $page().url.searchParams.get("id");
    if (id) {
      const res = await getToolById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        goto("/workspace/tools");
        return null;
      });
      if (res && !res.write_access) {
        toast.error($i18n().t("You do not have permission to edit this tool"));
        goto("/workspace/tools");
        return;
      }
      if (res) {
        set(tool, res);
        /* @__PURE__ */ console.log(get(tool));
      }
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => get(tool).access_grants ?? []);
        ToolkitEditor($$anchor2, {
          edit: true,
          get id() {
            return get(tool).id;
          },
          get name() {
            return get(tool).name;
          },
          get meta() {
            return get(tool).meta;
          },
          get content() {
            return get(tool).content;
          },
          get accessGrants() {
            return get($0);
          },
          onSave: (value) => {
            saveHandler(value);
          }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(tool)) $$render(consequent);
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
