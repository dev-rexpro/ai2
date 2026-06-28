import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, k as get, w as set, l as legacy_pre_effect, n as legacy_pre_effect_reset, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, e as store_get } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { g as getPromptById, u as updatePromptById } from "../chunks/DlsG6QUw.js";
import { p as page } from "../chunks/B35obKje.js";
import { P as PromptEditor } from "../chunks/YOYlBKNB.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const promptId = mutable_source();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  let disabled = mutable_source(false);
  const onSubmit = async (_prompt) => {
    /* @__PURE__ */ console.log(_prompt);
    const updatedPrompt = await updatePromptById(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (updatedPrompt) {
      toast.success($i18n().t("Prompt updated successfully"));
      set(prompt, {
        id: updatedPrompt.id,
        name: updatedPrompt.name,
        command: updatedPrompt.command,
        content: updatedPrompt.content,
        version_id: updatedPrompt.version_id,
        tags: updatedPrompt.tags,
        access_grants: (updatedPrompt == null ? void 0 : updatedPrompt.access_grants) === void 0 ? [] : updatedPrompt == null ? void 0 : updatedPrompt.access_grants
      });
    }
  };
  onMount(async () => {
    if (get(promptId)) {
      const _prompt = await getPromptById(localStorage.token, get(promptId)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (_prompt) {
        set(disabled, !_prompt.write_access);
        set(prompt, {
          id: _prompt.id,
          name: _prompt.name,
          command: _prompt.command,
          content: _prompt.content,
          version_id: _prompt.version_id,
          tags: _prompt.tags,
          access_grants: (_prompt == null ? void 0 : _prompt.access_grants) === void 0 ? [] : _prompt == null ? void 0 : _prompt.access_grants
        });
      } else {
        goto("/workspace/prompts");
      }
    } else {
      goto("/workspace/prompts");
    }
  });
  legacy_pre_effect(() => $page(), () => {
    set(promptId, $page().params.id);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      PromptEditor($$anchor2, {
        get prompt() {
          return get(prompt);
        },
        onSubmit,
        get disabled() {
          return get(disabled);
        },
        edit: true
      });
    };
    if_block(node, ($$render) => {
      if (get(prompt)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
