import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, t as template_effect, k as get, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, c as child, z as sibling, f as from_html, a_ as remove_textarea_child, r as reset, d as set_text, y as event } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { f as bind_select_value, s as set_attribute } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { b as REXPRO_BASE_URL } from "../chunks/CZpnbXda.js";
import { u as user, s as settings, c as config, m as models } from "../chunks/BJ3rUC-5.js";
import { c as chatCompletion } from "../chunks/drrmQgs3.js";
import { s as splitStream } from "../chunks/X0cYWxFO.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
var root = from_html(`<option class="bg-gray-50 dark:bg-gray-700"> </option>`);
var root_1 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg"> </button>`);
var root_2 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg flex items-center gap-2"><!> </button>`);
var root_3 = from_html(`<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><div class=" flex flex-col h-full px-4"><div class=" pt-0.5 pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1"><textarea id="text-completion-textarea" class="w-full h-full p-3 bg-transparent border border-gray-100/30 dark:border-gray-850/30 outline-hidden resize-none rounded-lg text-sm"></textarea></div></div></div> <div class="pb-3 flex justify-between items-center"><div class="flex-1"><select class="bg-transparent border border-gray-100/30 dark:border-gray-850/30 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full"></select></div> <div class="flex gap-2 shrink-0 ml-2"><!></div></div></div></div></div>`);
function Completions($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let text = mutable_source("");
  let selectedModelId = mutable_source("");
  let loading = mutable_source(false);
  let stopResponseFlag = false;
  let textCompletionAreaElement = mutable_source();
  const scrollToBottom = () => {
    const element = get(textCompletionAreaElement);
    if (element) {
      element.scrollTop = element == null ? void 0 : element.scrollHeight;
    }
  };
  const stopResponse = () => {
    stopResponseFlag = true;
    /* @__PURE__ */ console.log("stopResponse");
  };
  const textCompletionHandler = async () => {
    const model = $models().find((model2) => model2.id === get(selectedModelId));
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: [{ role: "assistant", content: get(text) }]
      },
      `${REXPRO_BASE_URL}/api`
    );
    if (res && res.ok) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done || stopResponseFlag) {
          if (stopResponseFlag) {
            controller.abort("User: Stop Response");
          }
          break;
        }
        try {
          let lines = value.split("\n");
          for (const line of lines) {
            if (line !== "") {
              if (line.includes("[DONE]")) {
                /* @__PURE__ */ console.log("done");
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                /* @__PURE__ */ console.log(data);
                set(text, get(text) + (data.choices[0].delta.content ?? ""));
              }
            }
          }
        } catch (error) {
          /* @__PURE__ */ console.log(error);
        }
        scrollToBottom();
      }
    }
  };
  const submitHandler = async () => {
    if (get(selectedModelId)) {
      set(loading, true);
      await textCompletionHandler();
      set(loading, false);
      stopResponseFlag = false;
    }
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    if ((_b = $settings()) == null ? void 0 : _b.models) {
      set(selectedModelId, (_c = $settings()) == null ? void 0 : _c.models[0]);
    } else if ((_d = $config()) == null ? void 0 : _d.default_models) {
      set(selectedModelId, (_e = $config()) == null ? void 0 : _e.default_models.split(",")[0]);
    } else {
      set(selectedModelId, "");
    }
  });
  init();
  var div = root_3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var textarea = child(div_5);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textCompletionAreaElement, $$value), () => get(textCompletionAreaElement));
  reset(div_5);
  reset(div_4);
  reset(div_3);
  var div_6 = sibling(div_3, 2);
  var div_7 = child(div_6);
  var select = child(div_7);
  each(select, 5, $models, index, ($$anchor2, model) => {
    var option = root();
    var text_1 = child(option, true);
    reset(option);
    var option_value = {};
    template_effect(() => {
      set_text(text_1, get(model).name);
      if (option_value !== (option_value = get(model).id)) {
        option.value = (option.__value = get(model).id) ?? "";
      }
    });
    append($$anchor2, option);
  });
  reset(select);
  reset(div_7);
  var div_8 = sibling(div_7, 2);
  var node = child(div_8);
  {
    var consequent = ($$anchor2) => {
      var button = root_1();
      var text_2 = child(button, true);
      reset(button);
      template_effect(($0) => set_text(text_2, $0), [() => $i18n().t("Run")]);
      event("click", button, () => {
        submitHandler();
      });
      append($$anchor2, button);
    };
    var alternate = ($$anchor2) => {
      var button_1 = root_2();
      var node_1 = child(button_1);
      Spinner(node_1, { className: "size-4" });
      var text_3 = sibling(node_1);
      reset(button_1);
      template_effect(($0) => set_text(text_3, ` ${$0 ?? ""}`), [() => $i18n().t("Cancel")]);
      event("click", button_1, () => {
        stopResponse();
      });
      append($$anchor2, button_1);
    };
    if_block(node, ($$render) => {
      if (!get(loading)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_8);
  reset(div_6);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(($0) => set_attribute(textarea, "placeholder", $0), [() => $i18n().t("You're a helpful assistant.")]);
  bind_value(textarea, () => get(text), ($$value) => set(text, $$value));
  bind_select_value(select, () => get(selectedModelId), ($$value) => set(selectedModelId, $$value));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Completions($$anchor, {});
}
export {
  _page as component
};
