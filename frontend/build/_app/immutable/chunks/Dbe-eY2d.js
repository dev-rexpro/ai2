import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, p as push, i as getContext, o as onMount, l as legacy_pre_effect, w as set, k as get, m as deep_read_state, n as legacy_pre_effect_reset, h as first_child, c as child, r as reset, z as sibling, u as untrack, y as event, d as set_text, b as pop, e as store_get, s as setup_stores, q as mutable_source, aW as text, x as derived_safe_equal, v as user_derived, f as from_html, a_ as remove_textarea_child, b1 as invalidate_inner_signals } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { s as set_attribute, a as set_class, c as clsx, r as remove_input_defaults, f as bind_select_value } from "./B9yCN616.js";
import { b as bind_value } from "./CgeA63xA.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { t as toast } from "./B4Bn1xMI.js";
import { s as settings } from "./BJ3rUC-5.js";
import { v as verifyOpenAIConnection } from "./drrmQgs3.js";
import { v as verifyOllamaConnection } from "./B37h-1Go.js";
import { M as Modal } from "./tmhUPuyr.js";
import { P as Plus } from "./CKKkwCWl.js";
import { M as Minus } from "./DT4OldyN.js";
import { S as SensitiveInput } from "./CpgwHNSU.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { S as Switch_1 } from "./l6D7S60E.js";
import { C as ConfirmDialog } from "./Bt_XG8Gm.js";
import { T as Tags } from "./ConglYm-.js";
import { S as Spinner } from "./gJqE84vs.js";
import { X as XMark } from "./DAqPThR3.js";
import { T as Textarea } from "./-oxnKdd2.js";
import { b as bind_this } from "./BSYzg88z.js";
import { f as fileSaver } from "./CVH2w_UO.js";
import { b as getToolServerData } from "./CwXWgxvI.js";
import { v as verifyToolServerConnection, r as registerOAuthClient, a as verifyTerminalServerConnection, p as putOrchestratorPolicy } from "./qzNkMDjz.js";
import { A as AccessControlModal, L as LockClosed } from "./BURXHJDK.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { g as getTerminalConfig } from "./D_mSRSNF.js";
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function Cog6($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_html(`<div class="flex gap-2"><div class="flex w-full justify-between items-center"><div class=" text-xs text-gray-500"> </div> <div><button type="button" class=" text-xs text-gray-700 dark:text-gray-300"><!></button></div></div></div>`);
var root_1$3 = from_html(`<datalist id="suggestions"><option></option><option></option><option></option><option></option><option></option><option></option><option></option></datalist>`);
var root_2$3 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
var root_3$3 = from_html(`<option> </option> <option> </option>`, 1);
var root_4$3 = from_html(`<option> </option> <!>`, 1);
var root_5$2 = from_html(`<div> </div>`);
var root_6$2 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="headers-input"> </label> <div class="flex-1"><!></div></div></div>`);
var root_7$2 = from_html(`<input type="text" id="prefix-id-input" autocomplete="off"/>`);
var root_8$2 = from_html(`<div class="flex flex-row justify-between items-center w-full mt-2"><label for="provider-select"> </label> <div><select id="provider-select" class="text-xs text-gray-700 dark:text-gray-300 bg-transparent outline-hidden"><option> </option><option> </option><option> </option></select></div></div>`);
var root_9$2 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="api-version-input"> </label> <div class="flex-1"><input id="api-version-input" type="text" autocomplete="off" required=""/></div></div></div>`);
var root_10$2 = from_html(`<span class=" text-gray-400 dark:text-gray-600"> </span> `, 1);
var root_11$2 = from_html(`<div class="flex flex-row justify-between items-center w-full mt-1"><label for="api-type-toggle"> </label> <div><button type="button" id="api-type-toggle" class=" text-xs text-gray-700 dark:text-gray-300"><!></button></div></div>`);
var root_12$2 = from_html(`<li class=" flex gap-2 w-full justify-between items-center"><div class=" text-sm flex-1 py-1 rounded-lg"> </div> <div class="shrink-0"><button type="button"><!></button></div></li>`);
var root_13$2 = from_html(`<ul class="flex flex-col"></ul>`);
var root_14$1 = from_html(`<div><!></div>`);
var root_15$1 = from_html(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button"> </button>`);
var root_16$1 = from_html(`<span class="shrink-0"><!></span>`);
var root_17$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary"><!></h1> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><!> <div class="flex gap-2 mt-1.5"><div class="flex flex-col w-full"><label for="url-input"> </label> <div class="flex-1"><input id="url-input" type="text" autocomplete="off" required=""/> <!></div></div> <!> <div class="flex flex-col shrink-0 self-end"><label class="sr-only" for="toggle-connection"> </label> <!></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="select-bearer-or-session"> </label> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option><!></select></div> <div class="flex flex-1 items-center"><!></div></div></div></div> <!> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="prefix-id-input"> </label> <div class="flex-1"><!></div></div></div> <!> <!> <!> <div class="flex flex-col w-full mt-2"><div class="mb-1 flex justify-between"><div> </div></div> <!></div> <div class="flex items-center"><label class="sr-only" for="add-model-id-input"> </label> <input id="add-model-id-input"/> <div><button type="button"><!></button></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div> </div> <div class="flex-1 mt-0.5"><!></div></div></div> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div><!></div> <button type="submit"> <!></button></div></form></div></div></div>`);
var root_18$1 = from_html(`<!> <!>`, 1);
function AddConnectionModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const azure = mutable_source();
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let ollama = prop($$props, "ollama", 8, false);
  let direct = prop($$props, "direct", 8, false);
  let connection = prop($$props, "connection", 8, null);
  let url = mutable_source("");
  let key = mutable_source("");
  let auth_type = mutable_source("bearer");
  let connectionType = mutable_source("external");
  let provider = mutable_source("");
  let prefixId = mutable_source("");
  let enable = mutable_source(true);
  let apiVersion = mutable_source("");
  let apiType = mutable_source(
    ""
    // '' = chat completions (default), 'responses' = Responses API
  );
  let headers = mutable_source("");
  let tags = mutable_source([]);
  let modelId = mutable_source("");
  let modelIds = mutable_source([]);
  let loading = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  const verifyOllamaHandler = async () => {
    set(url, get(url).replace(/\/$/, ""));
    const res = await verifyOllamaConnection(localStorage.token, { url: get(url), key: get(key) }).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      toast.success($i18n().t("Server connection verified"));
    }
  };
  const verifyOpenAIHandler = async () => {
    set(url, get(url).replace(/\/$/, ""));
    let _headers = null;
    if (get(headers)) {
      try {
        _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          _headers = null;
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    const res = await verifyOpenAIConnection(
      localStorage.token,
      {
        url: get(url),
        key: get(key),
        config: {
          auth_type: get(auth_type),
          ...get(provider) ? { provider: get(provider) } : {},
          ...get(azure) ? { azure: true } : {},
          api_version: get(apiVersion),
          ..._headers ? { headers: _headers } : {}
        }
      },
      direct()
    ).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      toast.success($i18n().t("Server connection verified"));
    }
  };
  const verifyHandler = () => {
    if (ollama()) {
      verifyOllamaHandler();
    } else {
      verifyOpenAIHandler();
    }
  };
  const addModelHandler = () => {
    if (get(modelId)) {
      set(modelIds, [...get(modelIds), get(modelId)]);
      set(modelId, "");
    }
  };
  const submitHandler = async () => {
    set(loading, true);
    if (!ollama() && !get(url)) {
      set(loading, false);
      toast.error($i18n().t("URL is required"));
      return;
    }
    if (get(azure)) {
      if (!get(apiVersion)) {
        set(loading, false);
        toast.error($i18n().t("API Version is required"));
        return;
      }
      if (!get(key) && !["azure_ad", "microsoft_entra_id"].includes(get(auth_type))) {
        set(loading, false);
        toast.error($i18n().t("Key is required"));
        return;
      }
      if (get(modelIds).length === 0) {
        set(loading, false);
        toast.error($i18n().t("Deployment names are required for Azure OpenAI"));
        return;
      }
    }
    if (get(headers)) {
      try {
        const _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    set(url, get(url).replace(/\/$/, ""));
    const connection2 = {
      url: get(url),
      key: get(key),
      config: {
        enable: get(enable),
        tags: get(tags),
        prefix_id: get(prefixId),
        model_ids: get(modelIds),
        connection_type: get(connectionType),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        ...get(provider) ? { provider: get(provider) } : {},
        ...!ollama() && get(azure) ? { azure: true } : {},
        ...get(azure) ? { api_version: get(apiVersion) } : {},
        ...get(apiType) ? { api_type: get(apiType) } : {}
      }
    };
    await onSubmit()(connection2);
    set(loading, false);
    show(false);
    set(url, "");
    set(key, "");
    set(auth_type, "bearer");
    set(prefixId, "");
    set(tags, []);
    set(modelIds, []);
  };
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    if (connection()) {
      set(url, connection().url);
      set(key, connection().key);
      set(auth_type, connection().config.auth_type ?? "bearer");
      set(headers, ((_a = connection().config) == null ? void 0 : _a.headers) ? JSON.stringify(connection().config.headers, null, 2) : "");
      set(enable, ((_b = connection().config) == null ? void 0 : _b.enable) ?? true);
      set(tags, ((_c = connection().config) == null ? void 0 : _c.tags) ?? []);
      set(prefixId, ((_d = connection().config) == null ? void 0 : _d.prefix_id) ?? "");
      set(modelIds, ((_e = connection().config) == null ? void 0 : _e.model_ids) ?? []);
      if (ollama()) {
        set(connectionType, ((_f = connection().config) == null ? void 0 : _f.connection_type) ?? "local");
      } else {
        set(connectionType, ((_g = connection().config) == null ? void 0 : _g.connection_type) ?? "external");
        set(provider, ((_h = connection().config) == null ? void 0 : _h.provider) ?? (((_i = connection().config) == null ? void 0 : _i.azure) ? "azure" : ""));
        set(apiVersion, ((_j = connection().config) == null ? void 0 : _j.api_version) ?? "");
        set(apiType, ((_k = connection().config) == null ? void 0 : _k.api_type) ?? "");
      }
    }
  };
  onMount(() => {
    init$1();
  });
  legacy_pre_effect(() => (get(provider), get(url), deep_read_state(direct())), () => {
    set(azure, get(provider) === "azure" || (get(url).includes("azure.") || get(url).includes("cognitive.microsoft.com")) && !direct() && get(provider) === "" && !/\/openai\/v1(\/|$)/.test(get(url)));
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_18$1();
  var node = first_child(fragment);
  Modal(node, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_17$1();
      var div_1 = child(div);
      var h1 = child(div_1);
      var node_1 = child(h1);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Connection")))
          ]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Connection")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(h1);
      var button = sibling(h1, 2);
      var node_2 = child(button);
      XMark(node_2, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var form = child(div_3);
      var div_4 = child(form);
      var node_3 = child(div_4);
      {
        var consequent_2 = ($$anchor3) => {
          var div_5 = root$4();
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var text_2 = child(div_7, true);
          reset(div_7);
          var div_8 = sibling(div_7, 2);
          var button_1 = child(div_8);
          var node_4 = child(button_1);
          {
            var consequent_1 = ($$anchor4) => {
              var text_3 = text();
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Local")))]);
              append($$anchor4, text_3);
            };
            var alternate_1 = ($$anchor4) => {
              var text_4 = text();
              template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("External")))]);
              append($$anchor4, text_4);
            };
            if_block(node_4, ($$render) => {
              if (get(connectionType) === "local") $$render(consequent_1);
              else $$render(alternate_1, -1);
            });
          }
          reset(button_1);
          reset(div_8);
          reset(div_6);
          reset(div_5);
          template_effect(($0) => set_text(text_2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Connection Type")))
          ]);
          event("click", button_1, () => {
            set(connectionType, get(connectionType) === "local" ? "external" : "local");
          });
          append($$anchor3, div_5);
        };
        if_block(node_3, ($$render) => {
          if (!direct()) $$render(consequent_2);
        });
      }
      var div_9 = sibling(node_3, 2);
      var div_10 = child(div_9);
      var label = child(div_10);
      var text_5 = child(label, true);
      reset(label);
      var div_11 = sibling(label, 2);
      var input = child(div_11);
      remove_input_defaults(input);
      var node_5 = sibling(input, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var datalist = root_1$3();
          var option = child(datalist);
          option.value = option.__value = "https://api.openai.com/v1";
          var option_1 = sibling(option);
          option_1.value = option_1.__value = "https://api.anthropic.com/v1";
          var option_2 = sibling(option_1);
          option_2.value = option_2.__value = "https://generativelanguage.googleapis.com/v1beta/openai";
          var option_3 = sibling(option_2);
          option_3.value = option_3.__value = "https://api.mistral.ai/v1";
          var option_4 = sibling(option_3);
          option_4.value = option_4.__value = "https://api.groq.com/openai/v1";
          var option_5 = sibling(option_4);
          option_5.value = option_5.__value = "https://openrouter.ai/api/v1";
          var option_6 = sibling(option_5);
          option_6.value = option_6.__value = "https://api.x.ai/v1";
          reset(datalist);
          append($$anchor3, datalist);
        };
        if_block(node_5, ($$render) => {
          if (!ollama()) $$render(consequent_3);
        });
      }
      reset(div_11);
      reset(div_10);
      var node_6 = sibling(div_10, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Verify Connection"))));
        Tooltip(node_6, {
          get content() {
            return get($0);
          },
          className: "self-end -mb-1",
          children: ($$anchor3, $$slotProps2) => {
            var button_2 = root_2$3();
            template_effect(($02) => set_attribute(button_2, "aria-label", $02), [
              () => ($i18n(), untrack(() => $i18n().t("Verify Connection")))
            ]);
            event("click", button_2, () => {
              verifyHandler();
            });
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      var div_12 = sibling(node_6, 2);
      var label_1 = child(div_12);
      var text_6 = child(label_1, true);
      reset(label_1);
      var node_7 = sibling(label_1, 2);
      {
        let $0 = derived_safe_equal(() => (get(enable), $i18n(), untrack(() => get(enable) ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
        Tooltip(node_7, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            Switch_1($$anchor3, {
              id: "toggle-connection",
              get state() {
                return get(enable);
              },
              set state($$value) {
                set(enable, $$value);
              },
              $$legacy: true
            });
          },
          $$slots: { default: true }
        });
      }
      reset(div_12);
      reset(div_9);
      var div_13 = sibling(div_9, 2);
      var div_14 = child(div_13);
      var label_2 = child(div_14);
      var text_7 = child(label_2, true);
      reset(label_2);
      var div_15 = sibling(label_2, 2);
      var div_16 = child(div_15);
      var select = child(div_16);
      var option_7 = child(select);
      var text_8 = child(option_7, true);
      reset(option_7);
      option_7.value = option_7.__value = "none";
      var option_8 = sibling(option_7);
      var text_9 = child(option_8, true);
      reset(option_8);
      option_8.value = option_8.__value = "bearer";
      var node_8 = sibling(option_8);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_6 = root_4$3();
          var option_9 = first_child(fragment_6);
          var text_10 = child(option_9, true);
          reset(option_9);
          option_9.value = option_9.__value = "session";
          var node_9 = sibling(option_9, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var fragment_7 = root_3$3();
              var option_10 = first_child(fragment_7);
              var text_11 = child(option_10, true);
              reset(option_10);
              option_10.value = option_10.__value = "system_oauth";
              var option_11 = sibling(option_10, 2);
              var text_12 = child(option_11, true);
              reset(option_11);
              option_11.value = option_11.__value = "microsoft_entra_id";
              template_effect(
                ($0, $1) => {
                  set_text(text_11, $0);
                  set_text(text_12, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("OAuth"))),
                  () => ($i18n(), untrack(() => $i18n().t("Entra ID")))
                ]
              );
              append($$anchor4, fragment_7);
            };
            if_block(node_9, ($$render) => {
              if (!direct()) $$render(consequent_4);
            });
          }
          template_effect(($0) => set_text(text_10, $0), [() => ($i18n(), untrack(() => $i18n().t("Session")))]);
          append($$anchor3, fragment_6);
        };
        if_block(node_8, ($$render) => {
          if (!ollama()) $$render(consequent_5);
        });
      }
      reset(select);
      reset(div_16);
      var div_17 = sibling(div_16, 2);
      var node_10 = child(div_17);
      {
        var consequent_6 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("API Key"))));
            SensitiveInput($$anchor3, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(key);
              },
              set value($$value) {
                set(key, $$value);
              },
              $$legacy: true
            });
          }
        };
        var consequent_7 = ($$anchor3) => {
          var div_18 = root_5$2();
          var text_13 = child(div_18, true);
          reset(div_18);
          template_effect(
            ($0) => {
              set_class(div_18, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_13, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No authentication")))
            ]
          );
          append($$anchor3, div_18);
        };
        var consequent_8 = ($$anchor3) => {
          var div_19 = root_5$2();
          var text_14 = child(div_19, true);
          reset(div_19);
          template_effect(
            ($0) => {
              set_class(div_19, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_14, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user session credentials to authenticate")))
            ]
          );
          append($$anchor3, div_19);
        };
        var consequent_9 = ($$anchor3) => {
          var div_20 = root_5$2();
          var text_15 = child(div_20, true);
          reset(div_20);
          template_effect(
            ($0) => {
              set_class(div_20, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_15, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user OAuth access token to authenticate")))
            ]
          );
          append($$anchor3, div_20);
        };
        var consequent_10 = ($$anchor3) => {
          var div_21 = root_5$2();
          var text_16 = child(div_21, true);
          reset(div_21);
          template_effect(
            ($0) => {
              set_class(div_21, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_16, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Uses DefaultAzureCredential to authenticate")))
            ]
          );
          append($$anchor3, div_21);
        };
        var d = user_derived(() => (get(auth_type), untrack(() => ["azure_ad", "microsoft_entra_id"].includes(get(auth_type)))));
        if_block(node_10, ($$render) => {
          if (get(auth_type) === "bearer") $$render(consequent_6);
          else if (get(auth_type) === "none") $$render(consequent_7, 1);
          else if (get(auth_type) === "session") $$render(consequent_8, 2);
          else if (get(auth_type) === "system_oauth") $$render(consequent_9, 3);
          else if (get(d)) $$render(consequent_10, 4);
        });
      }
      reset(div_17);
      reset(div_15);
      reset(div_14);
      reset(div_13);
      var node_11 = sibling(div_13, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_22 = root_6$2();
          var div_23 = child(div_22);
          var label_3 = child(div_23);
          var text_17 = child(label_3, true);
          reset(label_3);
          var div_24 = sibling(label_3, 2);
          var node_12 = child(div_24);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('Enter additional headers in JSON format (e.g. {"X-Custom-Header": "value"}'))));
            Tooltip(node_12, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                {
                  let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter additional headers in JSON format"))));
                  Textarea($$anchor4, {
                    className: "w-full text-sm outline-hidden",
                    get placeholder() {
                      return get($02);
                    },
                    required: false,
                    minSize: 30,
                    get value() {
                      return get(headers);
                    },
                    set value($$value) {
                      set(headers, $$value);
                    },
                    $$legacy: true
                  });
                }
              },
              $$slots: { default: true }
            });
          }
          reset(div_24);
          reset(div_23);
          reset(div_22);
          template_effect(
            ($0) => {
              set_class(label_3, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_17, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Headers")))]
          );
          append($$anchor3, div_22);
        };
        if_block(node_11, ($$render) => {
          if (!ollama() && !direct()) $$render(consequent_11);
        });
      }
      var div_25 = sibling(node_11, 2);
      var div_26 = child(div_25);
      var label_4 = child(div_26);
      var text_18 = child(label_4, true);
      reset(label_4);
      var div_27 = sibling(label_4, 2);
      var node_13 = child(div_27);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Prefix ID is used to avoid conflicts with other connections by adding a prefix to the model IDs - leave empty to disable"))));
        Tooltip(node_13, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var input_1 = root_7$2();
            remove_input_defaults(input_1);
            template_effect(
              ($02) => {
                set_class(input_1, 1, ($settings(), untrack(() => {
                  var _a;
                  return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
                })));
                set_attribute(input_1, "placeholder", $02);
              },
              [() => ($i18n(), untrack(() => $i18n().t("Prefix ID")))]
            );
            bind_value(input_1, () => get(prefixId), ($$value) => set(prefixId, $$value));
            append($$anchor3, input_1);
          },
          $$slots: { default: true }
        });
      }
      reset(div_27);
      reset(div_26);
      reset(div_25);
      var node_14 = sibling(div_25, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_28 = root_8$2();
          var label_5 = child(div_28);
          var text_19 = child(label_5, true);
          reset(label_5);
          var div_29 = sibling(label_5, 2);
          var select_1 = child(div_29);
          var option_12 = child(select_1);
          var text_20 = child(option_12, true);
          reset(option_12);
          option_12.value = option_12.__value = "";
          var option_13 = sibling(option_12);
          var text_21 = child(option_13, true);
          reset(option_13);
          option_13.value = option_13.__value = "azure";
          var option_14 = sibling(option_13);
          var text_22 = child(option_14, true);
          reset(option_14);
          option_14.value = option_14.__value = "llama.cpp";
          reset(select_1);
          reset(div_29);
          reset(div_28);
          template_effect(
            ($0, $1, $2, $3) => {
              set_class(label_5, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_19, $0);
              set_text(text_20, $1);
              set_text(text_21, $2);
              set_text(text_22, $3);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Provider"))),
              () => ($i18n(), untrack(() => $i18n().t("Default"))),
              () => ($i18n(), untrack(() => $i18n().t("Azure OpenAI"))),
              () => ($i18n(), untrack(() => $i18n().t("llama.cpp")))
            ]
          );
          bind_select_value(select_1, () => get(provider), ($$value) => set(provider, $$value));
          append($$anchor3, div_28);
        };
        if_block(node_14, ($$render) => {
          if (!ollama() && !direct()) $$render(consequent_12);
        });
      }
      var node_15 = sibling(node_14, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var div_30 = root_9$2();
          var div_31 = child(div_30);
          var label_6 = child(div_31);
          var text_23 = child(label_6, true);
          reset(label_6);
          var div_32 = sibling(label_6, 2);
          var input_2 = child(div_32);
          remove_input_defaults(input_2);
          reset(div_32);
          reset(div_31);
          reset(div_30);
          template_effect(
            ($0, $1) => {
              set_class(label_6, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
										${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_23, $0);
              set_class(input_2, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_2, "placeholder", $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("API Version"))),
              () => ($i18n(), untrack(() => $i18n().t("API Version")))
            ]
          );
          bind_value(input_2, () => get(apiVersion), ($$value) => set(apiVersion, $$value));
          append($$anchor3, div_30);
        };
        if_block(node_15, ($$render) => {
          if (get(azure)) $$render(consequent_13);
        });
      }
      var node_16 = sibling(node_15, 2);
      {
        var consequent_15 = ($$anchor3) => {
          var div_33 = root_11$2();
          var label_7 = child(div_33);
          var text_24 = child(label_7, true);
          reset(label_7);
          var div_34 = sibling(label_7, 2);
          var button_3 = child(div_34);
          var node_17 = child(button_3);
          {
            var consequent_14 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This feature is currently experimental and may not work as expected."))));
                Tooltip($$anchor4, {
                  className: "flex items-center gap-1",
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var fragment_11 = root_10$2();
                    var span = first_child(fragment_11);
                    var text_25 = child(span, true);
                    reset(span);
                    var text_26 = sibling(span);
                    template_effect(
                      ($02, $1) => {
                        set_text(text_25, $02);
                        set_text(text_26, ` ${$1 ?? ""}`);
                      },
                      [
                        () => ($i18n(), untrack(() => $i18n().t("Experimental"))),
                        () => ($i18n(), untrack(() => $i18n().t("Responses")))
                      ]
                    );
                    append($$anchor5, fragment_11);
                  },
                  $$slots: { default: true }
                });
              }
            };
            var alternate_2 = ($$anchor4) => {
              var text_27 = text();
              template_effect(($0) => set_text(text_27, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Chat Completions")))
              ]);
              append($$anchor4, text_27);
            };
            if_block(node_17, ($$render) => {
              if (get(apiType) === "responses") $$render(consequent_14);
              else $$render(alternate_2, -1);
            });
          }
          reset(button_3);
          reset(div_34);
          reset(div_33);
          template_effect(
            ($0) => {
              set_class(label_7, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
							${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_24, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("API Type")))]
          );
          event("click", button_3, () => {
            set(apiType, get(apiType) === "responses" ? "" : "responses");
          });
          append($$anchor3, div_33);
        };
        if_block(node_16, ($$render) => {
          if (!ollama() && !direct()) $$render(consequent_15);
        });
      }
      var div_35 = sibling(node_16, 2);
      var div_36 = child(div_35);
      var div_37 = child(div_36);
      var text_28 = child(div_37, true);
      reset(div_37);
      reset(div_36);
      var node_18 = sibling(div_36, 2);
      {
        var consequent_16 = ($$anchor3) => {
          var ul = root_13$2();
          each(ul, 5, () => get(modelIds), index, ($$anchor4, modelId2, modelIdx, $$array) => {
            var li = root_12$2();
            var div_38 = child(li);
            var text_29 = child(div_38, true);
            reset(div_38);
            var div_39 = sibling(div_38, 2);
            var button_4 = child(div_39);
            var node_19 = child(button_4);
            Minus(node_19, { strokeWidth: "2", className: "size-3.5" });
            reset(button_4);
            reset(div_39);
            reset(li);
            template_effect(
              ($0) => {
                set_text(text_29, get(modelId2));
                set_attribute(button_4, "aria-label", $0);
              },
              [
                () => ($i18n(), get(modelId2), untrack(() => $i18n().t(`Remove {{MODELID}} from list.`, { MODELID: get(modelId2) })))
              ]
            );
            event("click", button_4, () => {
              set(modelIds, get(modelIds).filter((_, idx) => idx !== modelIdx));
            });
            append($$anchor4, li);
          });
          reset(ul);
          append($$anchor3, ul);
        };
        var alternate_4 = ($$anchor3) => {
          var div_40 = root_14$1();
          var node_20 = child(div_40);
          {
            var consequent_17 = ($$anchor4) => {
              var text_30 = text();
              template_effect(($0) => set_text(text_30, $0), [
                () => ($i18n(), get(url), untrack(() => $i18n().t('Leave empty to include all models from "{{url}}/api/tags" endpoint', { url: get(url) })))
              ]);
              append($$anchor4, text_30);
            };
            var consequent_18 = ($$anchor4) => {
              var text_31 = text();
              template_effect(($0) => set_text(text_31, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Deployment names are required for Azure OpenAI")))
              ]);
              append($$anchor4, text_31);
            };
            var alternate_3 = ($$anchor4) => {
              var text_32 = text();
              template_effect(($0) => set_text(text_32, $0), [
                () => ($i18n(), get(url), untrack(() => $i18n().t('Leave empty to include all models from "{{url}}/models" endpoint', { url: get(url) })))
              ]);
              append($$anchor4, text_32);
            };
            if_block(node_20, ($$render) => {
              if (ollama()) $$render(consequent_17);
              else if (get(azure)) $$render(consequent_18, 1);
              else $$render(alternate_3, -1);
            });
          }
          reset(div_40);
          template_effect(() => set_class(div_40, 1, ($settings(), untrack(() => {
            var _a;
            return `text-gray-500 text-xs text-center py-2 px-10
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          }))));
          append($$anchor3, div_40);
        };
        if_block(node_18, ($$render) => {
          if (get(modelIds), untrack(() => get(modelIds).length > 0)) $$render(consequent_16);
          else $$render(alternate_4, -1);
        });
      }
      reset(div_35);
      var div_41 = sibling(div_35, 2);
      var label_8 = child(div_41);
      var text_33 = child(label_8, true);
      reset(label_8);
      var input_3 = sibling(label_8, 2);
      remove_input_defaults(input_3);
      var div_42 = sibling(input_3, 2);
      var button_5 = child(div_42);
      var node_21 = child(button_5);
      Plus(node_21, { className: "size-3.5", strokeWidth: "2" });
      reset(button_5);
      reset(div_42);
      reset(div_41);
      reset(div_4);
      var div_43 = sibling(div_4, 2);
      var div_44 = child(div_43);
      var div_45 = child(div_44);
      var text_34 = child(div_45, true);
      reset(div_45);
      var div_46 = sibling(div_45, 2);
      var node_22 = child(div_46);
      Tags(node_22, {
        get tags() {
          return get(tags);
        },
        set tags($$value) {
          set(tags, $$value);
        },
        $$events: {
          add: (e) => {
            set(tags, [...get(tags), { name: e.detail }]);
          },
          delete: (e) => {
            set(tags, get(tags).filter((tag) => tag.name !== e.detail));
          }
        },
        $$legacy: true
      });
      reset(div_46);
      reset(div_44);
      reset(div_43);
      var div_47 = sibling(div_43, 2);
      var div_48 = child(div_47);
      var node_23 = child(div_48);
      {
        var consequent_19 = ($$anchor3) => {
          var button_6 = root_15$1();
          var text_35 = child(button_6, true);
          reset(button_6);
          template_effect(($0) => set_text(text_35, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_6, () => {
            set(showDeleteConfirmDialog, true);
          });
          append($$anchor3, button_6);
        };
        if_block(node_23, ($$render) => {
          if (edit()) $$render(consequent_19);
        });
      }
      reset(div_48);
      var button_7 = sibling(div_48, 2);
      var text_36 = child(button_7);
      var node_24 = sibling(text_36);
      {
        var consequent_20 = ($$anchor3) => {
          var span_1 = root_16$1();
          var node_25 = child(span_1);
          Spinner(node_25, {});
          reset(span_1);
          append($$anchor3, span_1);
        };
        if_block(node_24, ($$render) => {
          if (get(loading)) $$render(consequent_20);
        });
      }
      reset(button_7);
      reset(div_47);
      reset(form);
      reset(div_3);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) => {
          set_attribute(button, "aria-label", $0);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_5, $1);
          set_class(input, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input, "placeholder", $2);
          set_attribute(input, "list", ollama() ? void 0 : "suggestions");
          set_text(text_6, $3);
          set_class(label_2, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_7, $4);
          set_class(select, 1, ($settings(), untrack(() => {
            var _a;
            return `dark:bg-gray-900 w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_8, $5);
          set_text(text_9, $6);
          set_class(label_4, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_18, $7);
          set_class(div_37, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_28, $8);
          set_text(text_33, $9);
          set_class(input_3, 1, `w-full py-1 text-sm rounded-lg bg-transparent ${get(modelId) ? "" : "text-gray-500"} ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:placeholder:text-gray-100 placeholder:text-gray-700" : "placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden";
          })) ?? ""}`);
          set_attribute(input_3, "placeholder", $10);
          set_attribute(button_5, "aria-label", $11);
          set_class(div_45, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_34, $12);
          set_class(button_7, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_7.disabled = get(loading);
          set_text(text_36, `${$13 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("API Base URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Toggle whether current connection is active."))),
          () => ($i18n(), untrack(() => $i18n().t("Auth"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("Bearer"))),
          () => ($i18n(), untrack(() => $i18n().t("Prefix ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Model IDs"))),
          () => ($i18n(), untrack(() => $i18n().t("Add a model ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Add a model ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Add"))),
          () => ($i18n(), untrack(() => $i18n().t("Tags"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(url), ($$value) => set(url, $$value));
      bind_select_value(select, () => get(auth_type), ($$value) => set(auth_type, $$value));
      bind_value(input_3, () => get(modelId), ($$value) => set(modelId, $$value));
      event("click", button_5, () => {
        addModelHandler();
      });
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_26 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this connection? This action cannot be undone."))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node_26, {
      get message() {
        return get($0);
      },
      get confirmLabel() {
        return get($1);
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$events: {
        confirm: () => {
          onDelete()();
          show(false);
        }
      },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$3 = from_html(` <span class="text-gray-500"> </span>`, 1);
var root_1$2 = from_html(`<button type="button" class=" text-xs text-gray-700 dark:text-gray-300"><!></button>`);
var root_2$2 = from_html(`<div class="text-xs text-gray-700 dark:text-gray-300"> </div>`);
var root_3$2 = from_html(`<span class="opacity-50"> </span>`);
var root_4$2 = from_html(`<div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="enter-id"> <!></label></div> <div class="flex flex-1 items-center"><input id="enter-id" type="text" placeholder="auto" autocomplete="off"/></div></div>`);
var root_5$1 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
var root_6$1 = from_html(`<button class=" text-xs underline dark:text-gray-500 dark:hover:text-gray-200 text-gray-700 hover:text-gray-900 transition" type="button"> </button>`);
var root_7$1 = from_html(`<div class="text-xs font-medium px-1.5 rounded-md bg-yellow-500/20 text-yellow-700 dark:text-yellow-200"> </div>`);
var root_8$1 = from_html(`<div class="text-xs font-medium px-1.5 rounded-md bg-green-500/20 text-green-700 dark:text-green-200"> </div>`);
var root_9$1 = from_html(`<div class="flex items-center gap-2"><div class="flex flex-col justify-end items-center shrink-0"><!></div> <!></div>`);
var root_10$1 = from_html(`<option> </option> <option> </option>`, 1);
var root_11$1 = from_html(`<option> </option> <!>`, 1);
var root_12$1 = from_html(`<div> </div>`);
var root_13$1 = from_html(`<div class="flex flex-col gap-1.5 w-full mt-0.5"><!> <!> <div class="flex flex-1 items-center"><input type="text" autocomplete="off"/></div></div>`);
var root_14 = from_html(`<button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 object-cover rounded-full flex gap-1 items-center mt-2" type="button"><!> <div class="text-xs font-medium shrink-0"> </div></button>`);
var root_15 = from_html(`<div class="flex-1 flex items-center"><label for="url-or-path" class="sr-only"> </label> <input type="text" id="url-or-path" autocomplete="off" required=""/></div>`);
var root_16 = from_html(`<div><label for="url-or-path" class="sr-only"> </label> <textarea autocomplete="off" required="" rows="5"></textarea></div>`);
var root_17 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center mb-0.5"><div class="flex gap-2 items-center"><div for="select-bearer-or-session"> </div></div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option></select></div> <div class="flex flex-1 items-center"><!></div></div> <!></div></div>`);
var root_18 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="headers-input"> </label> <div class="flex-1"><!></div></div></div>`);
var root_19 = from_html(`<!> <!>`, 1);
var root_20 = from_html(`<hr class=" border-gray-100/50 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex flex-col w-full mt-2"><label for="function-name-filter-list"> </label> <div class="flex-1"><input id="function-name-filter-list" type="text" autocomplete="off"/></div></div>`, 1);
var root_21 = from_html(`<div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-2xl text-xs px-4 py-3 mb-2 mt-1"><span class="font-medium"> </span> <a class="font-medium underline" href="https://docs.openrexpro.com/" target="_blank"> </a></div>`);
var root_22 = from_html(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button"> </button>`);
var root_23 = from_html(`<span class="shrink-0"><!></span>`);
var root_24 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><h1 class=" text-lg font-medium self-center font-primary"><!></h1> <div class="flex items-center gap-3"><div class="flex gap-1.5 text-xs justify-end"><button class=" hover:underline" type="button"> </button> <button class=" hover:underline" type="button"> </button></div> <button class="self-center"><!></button></div></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><input type="file" hidden="" accept=".json"/> <form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2 mb-1.5"><div class="flex w-full justify-between items-center"><div class=" text-xs text-gray-500"> </div> <div><!></div></div></div> <div class="flex gap-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="enter-name"> </label></div> <div class="flex flex-1 items-center"><input id="enter-name" type="text" autocomplete="off"/></div></div> <!></div> <div class="flex flex-col w-full mt-1 mb-1.5"><label for="description"> </label> <div class="flex-1"><input id="description" type="text" autocomplete="off"/></div></div> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label for="api-base-url"> </label></div> <div class="flex flex-1 items-center"><input id="api-base-url" type="text" autocomplete="off" required=""/> <!> <!></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center"><div class="flex gap-2 items-center"><div for="select-bearer-or-session"> </div></div> <!></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option><option> </option><!></select></div> <div class="flex flex-1 items-center"><!></div></div></div></div> <div class="flex items-center justify-between"><button type="button" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg> </button> <!></div> <!> <!></div> <!> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div><!></div> <button type="submit"> <!></button></div></form></div></div></div>`);
var root_25 = from_html(`<!> <!> <!>`, 1);
function AddToolServerModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let direct = prop($$props, "direct", 8, false);
  let connection = prop($$props, "connection", 8, null);
  let inputElement = mutable_source(null);
  let type = mutable_source(
    "openapi"
    // 'openapi', 'mcp'
  );
  let url = mutable_source("");
  let spec_type = mutable_source(
    "url"
    // 'url', 'json'
  );
  let spec = mutable_source(
    ""
    // used when spec_type is 'json'
  );
  let path = mutable_source("openapi.json");
  let auth_type = mutable_source("bearer");
  let key = mutable_source("");
  let headers = mutable_source("");
  let functionNameFilterList = mutable_source("");
  let accessGrants = mutable_source([]);
  let id = mutable_source("");
  let name = mutable_source("");
  let description = mutable_source("");
  let oauthClientInfo = mutable_source(null);
  let oauthClientId = mutable_source("");
  let oauthClientSecret = mutable_source("");
  let oauthServerUrl = mutable_source("");
  let enable = mutable_source(true);
  let loading = mutable_source(false);
  let showAdvanced = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  const registerOAuthClientHandler = async () => {
    if (get(url) === "") {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    if (get(id) === "") {
      toast.error($i18n().t("Please enter a valid ID"));
      return;
    }
    if (get(auth_type) === "oauth_2.1_static" && (!get(oauthClientId) || !get(oauthClientSecret))) {
      toast.error($i18n().t("Please enter Client ID and Client Secret"));
      return;
    }
    const formData = {
      url: get(url),
      client_id: get(id),
      ...get(auth_type) === "oauth_2.1_static" ? {
        client_secret: get(oauthClientSecret),
        oauth_server_url: get(oauthServerUrl)
      } : {}
    };
    const res = await registerOAuthClient(localStorage.token, formData, "mcp").catch((err) => {
      toast.error($i18n().t("Registration failed"));
      return null;
    });
    if (res) {
      toast.warning($i18n().t("Please save the connection to persist the OAuth client information and do not change the ID"));
      toast.success($i18n().t("Registration successful"));
      /* @__PURE__ */ console.debug("Registration successful", res);
      set(oauthClientInfo, (res == null ? void 0 : res.oauth_client_info) ?? null);
    }
  };
  const verifyHandler = async () => {
    if (get(url) === "") {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    if (["openapi", ""].includes(get(type))) {
      if (get(spec_type) === "json" && get(spec) === "") {
        toast.error($i18n().t("Please enter a valid JSON spec"));
        return;
      }
      if (get(spec_type) === "url" && get(path) === "") {
        toast.error($i18n().t("Please enter a valid path"));
        return;
      }
    }
    if (get(headers)) {
      try {
        let _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          _headers = null;
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    if (direct()) {
      const res = await getToolServerData(get(auth_type) === "bearer" ? get(key) : localStorage.token, get(path).includes("://") ? get(path) : `${get(url)}${get(path).startsWith("/") ? "" : "/"}${get(path)}`).catch((err) => {
        toast.error($i18n().t("Connection failed"));
      });
      if (res) {
        toast.success($i18n().t("Connection successful"));
        /* @__PURE__ */ console.debug("Connection successful", res);
      }
    } else {
      const res = await verifyToolServerConnection(localStorage.token, {
        url: get(url),
        path: get(path),
        type: get(type),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        key: get(key),
        config: { enable: get(enable), access_grants: get(accessGrants) },
        info: {
          id: get(id),
          name: get(name),
          description: get(description)
        }
      }).catch((err) => {
        toast.error($i18n().t("Connection failed"));
      });
      if (res) {
        toast.success($i18n().t("Connection successful"));
        /* @__PURE__ */ console.debug("Connection successful", res);
      }
    }
  };
  const importHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event2) => {
      const json = event2.target.result;
      /* @__PURE__ */ console.log("importHandler", json);
      try {
        let data = JSON.parse(json);
        if (Array.isArray(data)) {
          if (data.length === 0) {
            toast.error($i18n().t("Please select a valid JSON file"));
            return;
          }
          data = data[0];
        }
        if (data.type) set(type, data.type);
        if (data.url) set(url, data.url);
        if (data.spec_type) set(spec_type, data.spec_type);
        if (data.spec) set(spec, data.spec);
        if (data.path) set(path, data.path);
        if (data.auth_type) set(auth_type, data.auth_type);
        if (data.headers) set(headers, JSON.stringify(data.headers, null, 2));
        if (data.key) set(key, data.key);
        if (data.info) {
          set(id, data.info.id ?? "");
          set(name, data.info.name ?? "");
          set(description, data.info.description ?? "");
        }
        if (data.config) {
          set(enable, data.config.enable ?? true);
          set(accessGrants, data.config.access_grants ?? []);
        }
        toast.success($i18n().t("Import successful"));
      } catch (error) {
        toast.error($i18n().t("Please select a valid JSON file"));
      }
    };
    reader.readAsText(file);
  };
  const exportHandler = async () => {
    const json = JSON.stringify([
      {
        type: get(type),
        url: get(url),
        spec_type: get(spec_type),
        spec: get(spec),
        path: get(path),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        key: get(key),
        info: {
          id: get(id),
          name: get(name),
          description: get(description)
        }
      }
    ]);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, `tool-server-${get(id) || get(name) || "export"}.json`);
  };
  const submitHandler = async () => {
    set(loading, true);
    if (get(type) !== "mcp") {
      set(url, get(url).replace(/\/$/, ""));
    }
    if (get(id).includes(":") || get(id).includes("|")) {
      toast.error($i18n().t('ID cannot contain ":" or "|" characters'));
      set(loading, false);
      return;
    }
    if (get(type) === "mcp" && ["oauth_2.1", "oauth_2.1_static"].includes(get(auth_type)) && !get(oauthClientInfo)) {
      toast.error($i18n().t("Please register the OAuth client"));
      set(loading, false);
      return;
    }
    if (get(spec_type) === "json") {
      try {
        const specJSON = JSON.parse(get(spec));
        set(spec, JSON.stringify(specJSON, null, 2));
      } catch (e) {
        toast.error($i18n().t("Please enter a valid JSON spec"));
        set(loading, false);
        return;
      }
    }
    if (get(headers)) {
      try {
        const _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        set(loading, false);
        return;
      }
    }
    const connection2 = {
      type: get(type),
      url: get(url),
      spec_type: get(spec_type),
      spec: get(spec),
      path: get(path),
      auth_type: get(auth_type),
      headers: get(headers) ? JSON.parse(get(headers)) : void 0,
      key: get(key),
      config: {
        enable: get(enable),
        function_name_filter_list: get(functionNameFilterList),
        access_grants: get(accessGrants)
      },
      info: {
        id: get(id),
        name: get(name),
        description: get(description),
        ...get(oauthClientInfo) ? { oauth_client_info: get(oauthClientInfo) } : {},
        ...get(auth_type) === "oauth_2.1_static" ? {
          oauth_client_id: get(oauthClientId),
          oauth_client_secret: get(oauthClientSecret),
          oauth_server_url: get(oauthServerUrl)
        } : {}
      }
    };
    await onSubmit()(connection2);
    set(loading, false);
    show(false);
    set(type, "openapi");
    set(url, "");
    set(spec_type, "url");
    set(spec, "");
    set(path, "openapi.json");
    set(key, "");
    set(auth_type, "bearer");
    set(id, "");
    set(name, "");
    set(description, "");
    set(oauthClientInfo, null);
    set(oauthClientId, "");
    set(oauthClientSecret, "");
    set(oauthServerUrl, "");
    set(enable, true);
    set(functionNameFilterList, "");
    set(accessGrants, []);
  };
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    if (connection()) {
      set(type, ((_a = connection()) == null ? void 0 : _a.type) ?? "openapi");
      set(url, connection().url);
      set(spec_type, ((_b = connection()) == null ? void 0 : _b.spec_type) ?? "url");
      set(spec, ((_c = connection()) == null ? void 0 : _c.spec) ?? "");
      set(path, ((_d = connection()) == null ? void 0 : _d.path) ?? "openapi.json");
      set(auth_type, ((_e = connection()) == null ? void 0 : _e.auth_type) ?? "bearer");
      set(headers, ((_f = connection()) == null ? void 0 : _f.headers) ? JSON.stringify(connection().headers, null, 2) : "");
      set(key, ((_g = connection()) == null ? void 0 : _g.key) ?? "");
      set(id, ((_h = connection().info) == null ? void 0 : _h.id) ?? "");
      set(name, ((_i = connection().info) == null ? void 0 : _i.name) ?? "");
      set(description, ((_j = connection().info) == null ? void 0 : _j.description) ?? "");
      set(oauthClientInfo, ((_k = connection().info) == null ? void 0 : _k.oauth_client_info) ?? null);
      set(oauthClientId, ((_l = connection().info) == null ? void 0 : _l.oauth_client_id) ?? "");
      set(oauthClientSecret, ((_m = connection().info) == null ? void 0 : _m.oauth_client_secret) ?? "");
      set(oauthServerUrl, ((_n = connection().info) == null ? void 0 : _n.oauth_server_url) ?? "");
      set(enable, ((_o = connection().config) == null ? void 0 : _o.enable) ?? true);
      set(functionNameFilterList, ((_p = connection().config) == null ? void 0 : _p.function_name_filter_list) ?? "");
      set(accessGrants, ((_q = connection().config) == null ? void 0 : _q.access_grants) ?? []);
    }
  };
  onMount(() => {
    init$1();
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_25();
  var node = first_child(fragment);
  Modal(node, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_24();
      var div_1 = child(div);
      var h1 = child(div_1);
      var node_1 = child(h1);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Connection")))
          ]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Connection")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(h1);
      var div_2 = sibling(h1, 2);
      var div_3 = child(div_2);
      var button = child(div_3);
      var text_2 = child(button, true);
      reset(button);
      var button_1 = sibling(button, 2);
      var text_3 = child(button_1, true);
      reset(button_1);
      reset(div_3);
      var button_2 = sibling(div_3, 2);
      var node_2 = child(button_2);
      XMark(node_2, { className: "size-5" });
      reset(button_2);
      reset(div_2);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var div_5 = child(div_4);
      var input = child(div_5);
      bind_this(input, ($$value) => set(inputElement, $$value), () => get(inputElement));
      var form = sibling(input, 2);
      var div_6 = child(form);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var text_4 = child(div_9, true);
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var node_3 = child(div_10);
      {
        var consequent_3 = ($$anchor3) => {
          var button_3 = root_1$2();
          var node_4 = child(button_3);
          {
            var consequent_1 = ($$anchor4) => {
              var text_5 = text();
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("OpenAPI")))]);
              append($$anchor4, text_5);
            };
            var d = user_derived(() => (get(type), untrack(() => ["", "openapi"].includes(get(type)))));
            var consequent_2 = ($$anchor4) => {
              var fragment_4 = root$3();
              var text_6 = first_child(fragment_4);
              var span = sibling(text_6);
              var text_7 = child(span, true);
              reset(span);
              template_effect(
                ($0, $1) => {
                  set_text(text_6, `${$0 ?? ""} `);
                  set_text(text_7, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("MCP"))),
                  () => ($i18n(), untrack(() => $i18n().t("Streamable HTTP")))
                ]
              );
              append($$anchor4, fragment_4);
            };
            if_block(node_4, ($$render) => {
              if (get(d)) $$render(consequent_1);
              else if (get(type) === "mcp") $$render(consequent_2, 1);
            });
          }
          reset(button_3);
          event("click", button_3, () => {
            set(type, ["", "openapi"].includes(get(type)) ? "mcp" : "openapi");
          });
          append($$anchor3, button_3);
        };
        var alternate_1 = ($$anchor3) => {
          var div_11 = root_2$2();
          var text_8 = child(div_11, true);
          reset(div_11);
          template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("OpenAPI")))]);
          append($$anchor3, div_11);
        };
        if_block(node_3, ($$render) => {
          if (!direct()) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      reset(div_10);
      reset(div_8);
      reset(div_7);
      var div_12 = sibling(div_7, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var label = child(div_14);
      var text_9 = child(label, true);
      reset(label);
      reset(div_14);
      var div_15 = sibling(div_14, 2);
      var input_1 = child(div_15);
      remove_input_defaults(input_1);
      reset(div_15);
      reset(div_13);
      var node_5 = sibling(div_13, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_16 = root_4$2();
          var div_17 = child(div_16);
          var label_1 = child(div_17);
          var text_10 = child(label_1);
          var node_6 = sibling(text_10);
          {
            var consequent_4 = ($$anchor4) => {
              var span_1 = root_3$2();
              var text_11 = child(span_1);
              reset(span_1);
              template_effect(($0) => set_text(text_11, `(${$0 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("optional")))]);
              append($$anchor4, span_1);
            };
            if_block(node_6, ($$render) => {
              if (get(type) !== "mcp") $$render(consequent_4);
            });
          }
          reset(label_1);
          reset(div_17);
          var div_18 = sibling(div_17, 2);
          var input_2 = child(div_18);
          remove_input_defaults(input_2);
          reset(div_18);
          reset(div_16);
          template_effect(
            ($0) => {
              set_class(label_1, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_10, `${$0 ?? ""} `);
              set_class(input_2, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              input_2.required = get(type) === "mcp";
            },
            [() => ($i18n(), untrack(() => $i18n().t("ID")))]
          );
          bind_value(input_2, () => get(id), ($$value) => set(id, $$value));
          append($$anchor3, div_16);
        };
        if_block(node_5, ($$render) => {
          if (!direct()) $$render(consequent_5);
        });
      }
      reset(div_12);
      var div_19 = sibling(div_12, 2);
      var label_2 = child(div_19);
      var text_12 = child(label_2, true);
      reset(label_2);
      var div_20 = sibling(label_2, 2);
      var input_3 = child(div_20);
      remove_input_defaults(input_3);
      reset(div_20);
      reset(div_19);
      var div_21 = sibling(div_19, 2);
      var div_22 = child(div_21);
      var div_23 = child(div_22);
      var label_3 = child(div_23);
      var text_13 = child(label_3, true);
      reset(label_3);
      reset(div_23);
      var div_24 = sibling(div_23, 2);
      var input_4 = child(div_24);
      remove_input_defaults(input_4);
      var node_7 = sibling(input_4, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Verify Connection"))));
        Tooltip(node_7, {
          get content() {
            return get($0);
          },
          className: "shrink-0 flex items-center mr-1",
          children: ($$anchor3, $$slotProps2) => {
            var button_4 = root_5$1();
            template_effect(($02) => set_attribute(button_4, "aria-label", $02), [
              () => ($i18n(), untrack(() => $i18n().t("Verify Connection")))
            ]);
            event("click", button_4, () => {
              verifyHandler();
            });
            append($$anchor3, button_4);
          },
          $$slots: { default: true }
        });
      }
      var node_8 = sibling(node_7, 2);
      {
        let $0 = derived_safe_equal(() => (get(enable), $i18n(), untrack(() => get(enable) ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
        Tooltip(node_8, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            Switch_1($$anchor3, {
              get state() {
                return get(enable);
              },
              set state($$value) {
                set(enable, $$value);
              },
              $$legacy: true
            });
          },
          $$slots: { default: true }
        });
      }
      reset(div_24);
      reset(div_22);
      reset(div_21);
      var div_25 = sibling(div_21, 2);
      var div_26 = child(div_25);
      var div_27 = child(div_26);
      var div_28 = child(div_27);
      var div_29 = child(div_28);
      var text_14 = child(div_29, true);
      reset(div_29);
      reset(div_28);
      var node_9 = sibling(div_28, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_30 = root_9$1();
          var div_31 = child(div_30);
          var node_10 = child(div_31);
          {
            let $0 = derived_safe_equal(() => (get(oauthClientInfo), $i18n(), untrack(() => get(oauthClientInfo) ? $i18n().t("Register Again") : $i18n().t("Register Client"))));
            Tooltip(node_10, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_5 = root_6$1();
                var text_15 = child(button_5, true);
                reset(button_5);
                template_effect(($02) => set_text(text_15, $02), [
                  () => ($i18n(), untrack(() => $i18n().t("Register Client")))
                ]);
                event("click", button_5, () => {
                  registerOAuthClientHandler();
                });
                append($$anchor4, button_5);
              },
              $$slots: { default: true }
            });
          }
          reset(div_31);
          var node_11 = sibling(div_31, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_32 = root_7$1();
              var text_16 = child(div_32, true);
              reset(div_32);
              template_effect(($0) => set_text(text_16, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Not Registered")))
              ]);
              append($$anchor4, div_32);
            };
            var alternate_2 = ($$anchor4) => {
              var div_33 = root_8$1();
              var text_17 = child(div_33, true);
              reset(div_33);
              template_effect(($0) => set_text(text_17, $0), [() => ($i18n(), untrack(() => $i18n().t("Registered")))]);
              append($$anchor4, div_33);
            };
            if_block(node_11, ($$render) => {
              if (!get(oauthClientInfo)) $$render(consequent_6);
              else $$render(alternate_2, -1);
            });
          }
          reset(div_30);
          append($$anchor3, div_30);
        };
        var d_1 = user_derived(() => (get(auth_type), untrack(() => ["oauth_2.1", "oauth_2.1_static"].includes(get(auth_type)))));
        if_block(node_9, ($$render) => {
          if (get(d_1)) $$render(consequent_7);
        });
      }
      reset(div_27);
      var div_34 = sibling(div_27, 2);
      var div_35 = child(div_34);
      var select = child(div_35);
      var option = child(select);
      var text_18 = child(option, true);
      reset(option);
      option.value = option.__value = "none";
      var option_1 = sibling(option);
      var text_19 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = "bearer";
      var option_2 = sibling(option_1);
      var text_20 = child(option_2, true);
      reset(option_2);
      option_2.value = option_2.__value = "session";
      var node_12 = sibling(option_2);
      {
        var consequent_9 = ($$anchor3) => {
          var fragment_6 = root_11$1();
          var option_3 = first_child(fragment_6);
          var text_21 = child(option_3, true);
          reset(option_3);
          option_3.value = option_3.__value = "system_oauth";
          var node_13 = sibling(option_3, 2);
          {
            var consequent_8 = ($$anchor4) => {
              var fragment_7 = root_10$1();
              var option_4 = first_child(fragment_7);
              var text_22 = child(option_4, true);
              reset(option_4);
              option_4.value = option_4.__value = "oauth_2.1";
              var option_5 = sibling(option_4, 2);
              var text_23 = child(option_5, true);
              reset(option_5);
              option_5.value = option_5.__value = "oauth_2.1_static";
              template_effect(
                ($0, $1) => {
                  set_text(text_22, $0);
                  set_text(text_23, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("OAuth 2.1"))),
                  () => ($i18n(), untrack(() => $i18n().t("OAuth 2.1 (Static)")))
                ]
              );
              append($$anchor4, fragment_7);
            };
            if_block(node_13, ($$render) => {
              if (get(type) === "mcp") $$render(consequent_8);
            });
          }
          template_effect(($0) => set_text(text_21, $0), [() => ($i18n(), untrack(() => $i18n().t("OAuth")))]);
          append($$anchor3, fragment_6);
        };
        if_block(node_12, ($$render) => {
          if (!direct()) $$render(consequent_9);
        });
      }
      reset(select);
      reset(div_35);
      var div_36 = sibling(div_35, 2);
      var node_14 = child(div_36);
      {
        var consequent_10 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("API Key"))));
            SensitiveInput($$anchor3, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(key);
              },
              set value($$value) {
                set(key, $$value);
              },
              $$legacy: true
            });
          }
        };
        var consequent_11 = ($$anchor3) => {
          var div_37 = root_12$1();
          var text_24 = child(div_37, true);
          reset(div_37);
          template_effect(
            ($0) => {
              set_class(div_37, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_24, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No authentication")))
            ]
          );
          append($$anchor3, div_37);
        };
        var consequent_12 = ($$anchor3) => {
          var div_38 = root_12$1();
          var text_25 = child(div_38, true);
          reset(div_38);
          template_effect(
            ($0) => {
              set_class(div_38, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_25, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user session credentials to authenticate")))
            ]
          );
          append($$anchor3, div_38);
        };
        var consequent_13 = ($$anchor3) => {
          var div_39 = root_12$1();
          var text_26 = child(div_39, true);
          reset(div_39);
          template_effect(
            ($0) => {
              set_class(div_39, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_26, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user OAuth access token to authenticate")))
            ]
          );
          append($$anchor3, div_39);
        };
        var consequent_14 = ($$anchor3) => {
          var div_40 = root_12$1();
          var text_27 = child(div_40, true);
          reset(div_40);
          template_effect(
            ($0) => {
              set_class(div_40, 1, ($settings(), untrack(() => {
                var _a;
                return `flex items-center text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_27, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Uses OAuth 2.1 Dynamic Client Registration")))
            ]
          );
          append($$anchor3, div_40);
        };
        var consequent_15 = ($$anchor3) => {
          var div_41 = root_13$1();
          var node_15 = child(div_41);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Client ID"))));
            SensitiveInput(node_15, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(oauthClientId);
              },
              set value($$value) {
                set(oauthClientId, $$value);
              },
              $$legacy: true
            });
          }
          var node_16 = sibling(node_15, 2);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Client Secret"))));
            SensitiveInput(node_16, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(oauthClientSecret);
              },
              set value($$value) {
                set(oauthClientSecret, $$value);
              },
              $$legacy: true
            });
          }
          var div_42 = sibling(node_16, 2);
          var input_5 = child(div_42);
          remove_input_defaults(input_5);
          reset(div_42);
          reset(div_41);
          template_effect(
            ($0) => {
              set_class(input_5, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_5, "placeholder", $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("OAuth Server URL")))
            ]
          );
          bind_value(input_5, () => get(oauthServerUrl), ($$value) => set(oauthServerUrl, $$value));
          append($$anchor3, div_41);
        };
        if_block(node_14, ($$render) => {
          if (get(auth_type) === "bearer") $$render(consequent_10);
          else if (get(auth_type) === "none") $$render(consequent_11, 1);
          else if (get(auth_type) === "session") $$render(consequent_12, 2);
          else if (get(auth_type) === "system_oauth") $$render(consequent_13, 3);
          else if (get(auth_type) === "oauth_2.1") $$render(consequent_14, 4);
          else if (get(auth_type) === "oauth_2.1_static") $$render(consequent_15, 5);
        });
      }
      reset(div_36);
      reset(div_34);
      reset(div_26);
      reset(div_25);
      var div_43 = sibling(div_25, 2);
      var button_6 = child(div_43);
      var svg = child(button_6);
      var text_28 = sibling(svg);
      reset(button_6);
      var node_17 = sibling(button_6, 2);
      {
        var consequent_16 = ($$anchor3) => {
          var button_7 = root_14();
          var node_18 = child(button_7);
          LockClosed(node_18, { strokeWidth: "2.5", className: "size-3.5 shrink-0" });
          var div_44 = sibling(node_18, 2);
          var text_29 = child(div_44, true);
          reset(div_44);
          reset(button_7);
          template_effect(($0) => set_text(text_29, $0), [() => ($i18n(), untrack(() => $i18n().t("Access")))]);
          event("click", button_7, () => {
            set(showAccessControlModal, true);
          });
          append($$anchor3, button_7);
        };
        if_block(node_17, ($$render) => {
          if (!direct()) $$render(consequent_16);
        });
      }
      reset(div_43);
      var node_19 = sibling(div_43, 2);
      {
        var consequent_22 = ($$anchor3) => {
          var fragment_9 = root_19();
          var node_20 = first_child(fragment_9);
          {
            var consequent_20 = ($$anchor4) => {
              var div_45 = root_17();
              var div_46 = child(div_45);
              var div_47 = child(div_46);
              var div_48 = child(div_47);
              var div_49 = child(div_48);
              var text_30 = child(div_49, true);
              reset(div_49);
              reset(div_48);
              reset(div_47);
              var div_50 = sibling(div_47, 2);
              var div_51 = child(div_50);
              var select_1 = child(div_51);
              var option_6 = child(select_1);
              var text_31 = child(option_6, true);
              reset(option_6);
              option_6.value = option_6.__value = "url";
              var option_7 = sibling(option_6);
              var text_32 = child(option_7, true);
              reset(option_7);
              option_7.value = option_7.__value = "json";
              reset(select_1);
              reset(div_51);
              var div_52 = sibling(div_51, 2);
              var node_21 = child(div_52);
              {
                var consequent_17 = ($$anchor5) => {
                  var div_53 = root_15();
                  var label_4 = child(div_53);
                  var text_33 = child(label_4, true);
                  reset(label_4);
                  var input_6 = sibling(label_4, 2);
                  remove_input_defaults(input_6);
                  reset(div_53);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_33, $0);
                      set_class(input_6, 1, ($settings(), untrack(() => {
                        var _a;
                        return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
                      })));
                      set_attribute(input_6, "placeholder", $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path"))),
                      () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path")))
                    ]
                  );
                  bind_value(input_6, () => get(path), ($$value) => set(path, $$value));
                  append($$anchor5, div_53);
                };
                var consequent_18 = ($$anchor5) => {
                  var div_54 = root_16();
                  var label_5 = child(div_54);
                  var text_34 = child(label_5, true);
                  reset(label_5);
                  var textarea = sibling(label_5, 2);
                  remove_textarea_child(textarea);
                  reset(div_54);
                  template_effect(
                    ($0, $1) => {
                      set_class(div_54, 1, ($settings(), untrack(() => {
                        var _a;
                        return `text-xs w-full self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                      })));
                      set_text(text_34, $0);
                      set_class(textarea, 1, ($settings(), untrack(() => {
                        var _a;
                        return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 text-black dark:text-white"}`;
                      })));
                      set_attribute(textarea, "placeholder", $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("JSON Spec"))),
                      () => ($i18n(), untrack(() => $i18n().t("JSON Spec")))
                    ]
                  );
                  bind_value(textarea, () => get(spec), ($$value) => set(spec, $$value));
                  append($$anchor5, div_54);
                };
                if_block(node_21, ($$render) => {
                  if (get(spec_type) === "url") $$render(consequent_17);
                  else if (get(spec_type) === "json") $$render(consequent_18, 1);
                });
              }
              reset(div_52);
              reset(div_50);
              var node_22 = sibling(div_50, 2);
              {
                var consequent_19 = ($$anchor5) => {
                  var div_55 = root_12$1();
                  var text_35 = child(div_55, true);
                  reset(div_55);
                  template_effect(
                    ($0) => {
                      set_class(div_55, 1, ($settings(), untrack(() => {
                        var _a;
                        return `text-xs mt-1 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                      })));
                      set_text(text_35, $0);
                    },
                    [
                      () => ($i18n(), get(path), get(url), untrack(() => $i18n().t(`rexpro will make requests to "{{url}}"`, {
                        url: get(path).includes("://") ? get(path) : `${get(url)}${get(path).startsWith("/") ? "" : "/"}${get(path)}`
                      })))
                    ]
                  );
                  append($$anchor5, div_55);
                };
                var d_2 = user_derived(() => (get(spec_type), untrack(() => ["", "url"].includes(get(spec_type)))));
                if_block(node_22, ($$render) => {
                  if (get(d_2)) $$render(consequent_19);
                });
              }
              reset(div_46);
              reset(div_45);
              template_effect(
                ($0, $1, $2) => {
                  set_class(div_49, 1, ($settings(), untrack(() => {
                    var _a;
                    return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                  })));
                  set_text(text_30, $0);
                  set_class(select_1, 1, ($settings(), untrack(() => {
                    var _a;
                    return `dark:bg-gray-900 w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
                  })));
                  set_text(text_31, $1);
                  set_text(text_32, $2);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("OpenAPI Spec"))),
                  () => ($i18n(), untrack(() => $i18n().t("URL"))),
                  () => ($i18n(), untrack(() => $i18n().t("JSON")))
                ]
              );
              bind_select_value(select_1, () => get(spec_type), ($$value) => set(spec_type, $$value));
              append($$anchor4, div_45);
            };
            var d_3 = user_derived(() => (get(type), untrack(() => ["", "openapi"].includes(get(type)))));
            if_block(node_20, ($$render) => {
              if (get(d_3)) $$render(consequent_20);
            });
          }
          var node_23 = sibling(node_20, 2);
          {
            var consequent_21 = ($$anchor4) => {
              var div_56 = root_18();
              var div_57 = child(div_56);
              var label_6 = child(div_57);
              var text_36 = child(label_6, true);
              reset(label_6);
              var div_58 = sibling(label_6, 2);
              var node_24 = child(div_58);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('Enter additional headers in JSON format (e.g. {"X-Custom-Header": "value"}'))));
                Tooltip(node_24, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    {
                      let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter additional headers in JSON format"))));
                      Textarea($$anchor5, {
                        className: "w-full text-sm outline-hidden",
                        get placeholder() {
                          return get($02);
                        },
                        required: false,
                        minSize: 30,
                        get value() {
                          return get(headers);
                        },
                        set value($$value) {
                          set(headers, $$value);
                        },
                        $$legacy: true
                      });
                    }
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_58);
              reset(div_57);
              reset(div_56);
              template_effect(
                ($0) => {
                  set_class(label_6, 1, ($settings(), untrack(() => {
                    var _a;
                    return `mb-0.5 text-xs text-gray-500
									${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
                  })));
                  set_text(text_36, $0);
                },
                [() => ($i18n(), untrack(() => $i18n().t("Headers")))]
              );
              append($$anchor4, div_56);
            };
            if_block(node_23, ($$render) => {
              if (!direct()) $$render(consequent_21);
            });
          }
          append($$anchor3, fragment_9);
        };
        if_block(node_19, ($$render) => {
          if (get(showAdvanced)) $$render(consequent_22);
        });
      }
      var node_25 = sibling(node_19, 2);
      {
        var consequent_23 = ($$anchor3) => {
          var fragment_11 = root_20();
          var div_59 = sibling(first_child(fragment_11), 2);
          var label_7 = child(div_59);
          var text_37 = child(label_7, true);
          reset(label_7);
          var div_60 = sibling(label_7, 2);
          var input_7 = child(div_60);
          remove_input_defaults(input_7);
          reset(div_60);
          reset(div_59);
          template_effect(
            ($0, $1) => {
              set_class(label_7, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-1 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100 placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 text-gray-500"}`;
              })));
              set_text(text_37, $0);
              set_class(input_7, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_7, "placeholder", $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Function Name Filter List"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter function name filter list (e.g. func1, !func2)")))
            ]
          );
          bind_value(input_7, () => get(functionNameFilterList), ($$value) => set(functionNameFilterList, $$value));
          append($$anchor3, fragment_11);
        };
        if_block(node_25, ($$render) => {
          if (!direct()) $$render(consequent_23);
        });
      }
      reset(div_6);
      var node_26 = sibling(div_6, 2);
      {
        var consequent_24 = ($$anchor3) => {
          var div_61 = root_21();
          var span_2 = child(div_61);
          var text_38 = child(span_2);
          reset(span_2);
          var text_39 = sibling(span_2);
          var a = sibling(text_39);
          var text_40 = child(a, true);
          reset(a);
          reset(div_61);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_38, `${$0 ?? ""}:`);
              set_text(text_39, ` ${$1 ?? ""} `);
              set_text(text_40, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Warning"))),
              () => ($i18n(), untrack(() => $i18n().t("MCP support is experimental and its specification changes often, which can lead to incompatibilities. OpenAPI specification support is directly maintained by the rexpro-ai team, making it the more reliable option for compatibility."))),
              () => ($i18n(), untrack(() => $i18n().t("Read more →")))
            ]
          );
          append($$anchor3, div_61);
        };
        if_block(node_26, ($$render) => {
          if (get(type) === "mcp") $$render(consequent_24);
        });
      }
      var div_62 = sibling(node_26, 2);
      var div_63 = child(div_62);
      var node_27 = child(div_63);
      {
        var consequent_25 = ($$anchor3) => {
          var button_8 = root_22();
          var text_41 = child(button_8, true);
          reset(button_8);
          template_effect(($0) => set_text(text_41, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_8, () => {
            set(showDeleteConfirmDialog, true);
          });
          append($$anchor3, button_8);
        };
        if_block(node_27, ($$render) => {
          if (edit()) $$render(consequent_25);
        });
      }
      reset(div_63);
      var button_9 = sibling(div_63, 2);
      var text_42 = child(button_9);
      var node_28 = sibling(text_42);
      {
        var consequent_26 = ($$anchor3) => {
          var span_3 = root_23();
          var node_29 = child(span_3);
          Spinner(node_29, {});
          reset(span_3);
          append($$anchor3, span_3);
        };
        if_block(node_28, ($$render) => {
          if (get(loading)) $$render(consequent_26);
        });
      }
      reset(button_9);
      reset(div_62);
      reset(form);
      reset(div_5);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) => {
          set_text(text_2, $0);
          set_text(text_3, $1);
          set_attribute(button_2, "aria-label", $2);
          set_text(text_4, $3);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_9, $4);
          set_class(input_1, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input_1, "placeholder", $5);
          set_class(label_2, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_12, $6);
          set_class(input_3, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input_3, "placeholder", $7);
          set_class(label_3, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_13, $8);
          set_class(input_4, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input_4, "placeholder", $9);
          set_class(div_29, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_14, $10);
          set_class(select, 1, ($settings(), untrack(() => {
            var _a;
            return `dark:bg-gray-900 w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_18, $11);
          set_text(text_19, $12);
          set_text(text_20, $13);
          set_class(svg, 0, `w-3 h-3 transition-transform ${get(showAdvanced) ? "rotate-90" : ""}`);
          set_text(text_28, ` ${$14 ?? ""}`);
          set_class(button_9, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_9.disabled = get(loading);
          set_text(text_42, `${$15 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import"))),
          () => ($i18n(), untrack(() => $i18n().t("Export"))),
          () => ($i18n(), untrack(() => $i18n().t("Close Configure Connection Modal"))),
          () => ($i18n(), untrack(() => $i18n().t("Type"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter name"))),
          () => ($i18n(), untrack(() => $i18n().t("Description"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter description"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("API Base URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Auth"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("Bearer"))),
          () => ($i18n(), untrack(() => $i18n().t("Session"))),
          () => ($i18n(), untrack(() => $i18n().t("Advanced"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        var _a;
        (_a = get(inputElement)) == null ? void 0 : _a.click();
      });
      event("click", button_1, exportHandler);
      event("click", button_2, () => {
        show(false);
      });
      event("change", input, (e) => {
        importHandler(e);
      });
      bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
      bind_value(input_3, () => get(description), ($$value) => set(description, $$value));
      bind_value(input_4, () => get(url), ($$value) => set(url, $$value));
      bind_select_value(select, () => get(auth_type), ($$value) => set(auth_type, $$value));
      event("click", button_6, () => set(showAdvanced, !get(showAdvanced)));
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_30 = sibling(node, 2);
  AccessControlModal(node_30, {
    get show() {
      return get(showAccessControlModal);
    },
    set show($$value) {
      set(showAccessControlModal, $$value);
    },
    get accessGrants() {
      return get(accessGrants);
    },
    set accessGrants($$value) {
      set(accessGrants, $$value);
    },
    $$legacy: true
  });
  var node_31 = sibling(node_30, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this connection? This action cannot be undone."))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node_31, {
      get message() {
        return get($0);
      },
      get confirmLabel() {
        return get($1);
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$events: {
        confirm: () => {
          onDelete()();
          show(false);
        }
      },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$2 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function WrenchAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$1 = from_html(`<div class=" capitalize outline-hidden w-full bg-transparent"> <span class="text-gray-500"> </span></div>`);
var root_1$1 = from_html(`<div> </div>`);
var root_2$1 = from_html(`<div class="flex w-full"><div><!> <!></div></div>`);
var root_3$1 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"><!></button>`);
var root_4$1 = from_html(`<!> <div class="flex w-full gap-2 items-center"><!> <div class="flex gap-1 items-center"><!> <!></div></div>`, 1);
function Connection($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let connection = prop($$props, "connection", 12, null);
  let direct = prop($$props, "direct", 8, false);
  let showConfigModal = mutable_source(false);
  init();
  var fragment = root_4$1();
  var node = first_child(fragment);
  AddToolServerModal(node, {
    edit: true,
    get direct() {
      return direct();
    },
    get connection() {
      return connection();
    },
    onDelete: () => {
      onDelete()();
      set(showConfigModal, false);
    },
    onSubmit: (c) => {
      connection(c);
      onSubmit()(c);
    },
    get show() {
      return get(showConfigModal);
    },
    set show($$value) {
      set(showConfigModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Tooltip(node_1, {
    className: "w-full relative",
    content: "",
    placement: "top-start",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_2$1();
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(connection()), $i18n(), untrack(() => {
          var _a;
          return ((_a = connection()) == null ? void 0 : _a.type) === "mcp" ? $i18n().t("MCP") : $i18n().t("OpenAPI");
        })));
        Tooltip(node_2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            WrenchAlt($$anchor3, {});
          },
          $$slots: { default: true }
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent = ($$anchor3) => {
          var div_3 = root$1();
          var text2 = child(div_3);
          var span = sibling(text2);
          var text_1 = child(span, true);
          reset(span);
          reset(div_3);
          template_effect(() => {
            set_text(text2, `${(deep_read_state(connection()), untrack(() => {
              var _a, _b, _c;
              return ((_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.name) ?? ((_c = connection()) == null ? void 0 : _c.url);
            })) ?? ""} `);
            set_text(text_1, (deep_read_state(connection()), untrack(() => {
              var _a, _b;
              return ((_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.id) ?? "";
            })));
          });
          append($$anchor3, div_3);
        };
        var alternate = ($$anchor3) => {
          var div_4 = root_1$1();
          var text_2 = child(div_4, true);
          reset(div_4);
          template_effect(() => set_text(text_2, (deep_read_state(connection()), untrack(() => {
            var _a;
            return (_a = connection()) == null ? void 0 : _a.url;
          }))));
          append($$anchor3, div_4);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(connection()), untrack(() => {
            var _a, _b;
            return (_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.name;
          })) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(div_2);
      reset(div_1);
      template_effect(() => set_class(div_2, 1, `flex-1 relative flex gap-1.5 items-center ${(deep_read_state(connection()), untrack(() => {
        var _a, _b;
        return !(((_b = (_a = connection()) == null ? void 0 : _a.config) == null ? void 0 : _b.enable) ?? true) ? "opacity-50" : "";
      })) ?? ""}`));
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  var div_5 = sibling(node_1, 2);
  var node_4 = child(div_5);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Configure"))));
    Tooltip(node_4, {
      get content() {
        return get($0);
      },
      className: "self-start",
      children: ($$anchor2, $$slotProps) => {
        var button = root_3$1();
        var node_5 = child(button);
        Cog6(node_5, {});
        reset(button);
        event("click", button, () => {
          set(showConfigModal, true);
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  var node_6 = sibling(node_4, 2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(connection()), $i18n(), untrack(() => {
      var _a, _b;
      return ((_b = (_a = connection()) == null ? void 0 : _a.config) == null ? void 0 : _b.enable) ?? true ? $i18n().t("Enabled") : $i18n().t("Disabled");
    })));
    Tooltip(node_6, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        {
          let $02 = derived_safe_equal(() => (deep_read_state(connection()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = connection()) == null ? void 0 : _a.config) == null ? void 0 : _b.enable) ?? true;
          })));
          Switch_1($$anchor2, {
            get state() {
              return get($02);
            },
            $$events: {
              change: () => {
                var _a, _b;
                if (!connection().config) connection(connection().config = {}, true);
                connection(connection().config.enable = !(((_b = (_a = connection()) == null ? void 0 : _a.config) == null ? void 0 : _b.enable) ?? true), true);
                onSubmit()(connection());
              }
            }
          });
        }
      },
      $$slots: { default: true }
    });
  }
  reset(div_5);
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="terminal-id"> <span class="opacity-50"> </span></label></div> <div class="flex flex-1 items-center"><input id="terminal-id" type="text" placeholder="auto" autocomplete="off"/></div></div>`);
var root_1 = from_svg(`<svg class="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>`);
var root_2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg>`);
var root_3 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"><!></button>`);
var root_4 = from_html(`<div class="flex flex-1 items-center"><input id="policy-storage-size" type="text" placeholder="5Gi" autocomplete="off"/></div>`);
var root_5 = from_html(`<div class="flex gap-1.5 mb-1"><input type="text" placeholder="KEY"/> <input type="text" placeholder="value"/> <button type="button" class="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition px-1"><!></button></div>`);
var root_6 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div> </div></div> <div class="flex flex-1 items-center"><input id="policy-id" type="text" placeholder="python-ds" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div> <span class="opacity-50"> </span></div></div> <div class="flex flex-1 items-center"><input id="policy-image" type="text" placeholder="ghcr.io/rexpro-ai/open-terminal:latest" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div> </div></div> <div class="flex flex-1 items-center"><input id="policy-cpu" type="text" placeholder="1" autocomplete="off"/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div> </div></div> <div class="flex flex-1 items-center"><input id="policy-memory" type="text" placeholder="1Gi" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div> </div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select><option> </option><option> </option></select></div> <!></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div> <span class="opacity-50"> </span></div></div> <div class="flex flex-1 items-center"><input id="idle-timeout" type="number" min="0" placeholder="30" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center mb-0.5"><div> </div> <button type="button" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"> </button></div> <!></div></div>`, 1);
var root_7 = from_html(`<button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 object-cover rounded-full flex gap-1 items-center mt-2" type="button"><!> <div class="text-xs font-medium shrink-0"> </div></button>`);
var root_8 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center mb-0.5"><div class="flex gap-2 items-center"><div> </div></div></div> <div class="flex gap-2"><div class="flex flex-1 items-center"><div class="flex-1 flex items-center"><label for="openapi-path" class="sr-only"> </label> <input type="text" id="openapi-path" autocomplete="off" required=""/></div></div></div> <div> </div></div></div>`);
var root_9 = from_html(`<option> </option> <option> </option>`, 1);
var root_10 = from_html(`<div> </div>`);
var root_11 = from_html(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button"> </button>`);
var root_12 = from_html(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><h1 class="text-lg font-medium self-center font-primary"><!></h1> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="terminal-name"> </label></div> <div class="flex flex-1 items-center"><input id="terminal-name" type="text" autocomplete="off"/></div></div> <!></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label for="terminal-url"> </label></div> <div class="flex flex-1 items-center"><input id="terminal-url" type="text" placeholder="http://localhost:9900" required="" autocomplete="off"/></div></div> <!></div> <!> <div class="flex items-center justify-between"><button type="button" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg> </button> <!></div> <!> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center"><div class="flex gap-2 items-center"><div> </div></div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select><option> </option><option> </option><!></select></div> <div class="flex flex-1 items-center"><!></div></div></div></div> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div><!></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="submit"> </button></div></div></form></div></div></div>`);
var root_13 = from_html(`<!> <!> <!>`, 1);
function AddTerminalServerModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let direct = prop($$props, "direct", 8, false);
  let connection = prop($$props, "connection", 8, null);
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let url = mutable_source("");
  let key = mutable_source("");
  let name = mutable_source("");
  let id = mutable_source("");
  let auth_type = mutable_source("bearer");
  let path = mutable_source("/openapi.json");
  let enabled = false;
  let showAdvanced = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  let accessGrants = mutable_source([]);
  let serverType = mutable_source(null);
  let verifying = mutable_source(false);
  let policyId = mutable_source("");
  let policyImage = mutable_source("");
  let policyEnvPairs = mutable_source([]);
  let policyCpu = mutable_source("1");
  let policyMemory = mutable_source("1Gi");
  let policyStorage = mutable_source("ephemeral");
  let policyStorageSize = mutable_source("5Gi");
  let policyIdleTimeout = mutable_source(30);
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    if (connection()) {
      set(id, ((_a = connection()) == null ? void 0 : _a.id) ?? "");
      set(url, connection().url);
      set(key, ((_b = connection()) == null ? void 0 : _b.key) ?? "");
      set(name, ((_c = connection()) == null ? void 0 : _c.name) ?? "");
      set(auth_type, ((_d = connection()) == null ? void 0 : _d.auth_type) ?? "bearer");
      set(path, ((_e = connection()) == null ? void 0 : _e.path) ?? "/openapi.json");
      enabled = ((_f = connection()) == null ? void 0 : _f.enabled) ?? true;
      set(accessGrants, ((_h = (_g = connection()) == null ? void 0 : _g.config) == null ? void 0 : _h.access_grants) ?? []);
      set(serverType, ((_i = connection()) == null ? void 0 : _i.server_type) ?? null);
      set(policyId, ((_j = connection()) == null ? void 0 : _j.policy_id) ?? "");
      const p = ((_k = connection()) == null ? void 0 : _k.policy) ?? {};
      set(policyImage, p.image ?? "");
      set(policyIdleTimeout, p.idle_timeout_minutes ?? 30);
      set(policyStorage, p.storage ? "persistent" : "ephemeral");
      set(policyStorageSize, p.storage ?? "5Gi");
      const env = p.env ?? {};
      set(policyEnvPairs, Object.entries(env).map(([k, v]) => ({ key: k, value: v })));
      set(policyCpu, p.cpu_limit ?? "1");
      set(policyMemory, p.memory_limit ?? "1Gi");
    } else {
      set(id, "");
      set(url, "");
      set(key, "");
      set(name, "");
      set(auth_type, "bearer");
      set(path, "/openapi.json");
      enabled = false;
      set(accessGrants, []);
      set(serverType, null);
      set(policyId, "");
      set(policyImage, "");
      set(policyEnvPairs, []);
      set(policyCpu, "1");
      set(policyMemory, "1Gi");
      set(policyStorage, "ephemeral");
      set(policyStorageSize, "5Gi");
      set(policyIdleTimeout, 30);
    }
  };
  const verifyHandler = async () => {
    const _url = get(url).replace(/\/$/, "");
    if (!_url) {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    set(verifying, true);
    try {
      if (!direct()) {
        const result = await verifyTerminalServerConnection(localStorage.token, { url: _url, key: get(key), auth_type: get(auth_type) });
        const type = (result == null ? void 0 : result.type) ?? null;
        if (type) {
          set(serverType, type);
          toast.success($i18n().t("Connected ({{type}})", { type: type === "orchestrator" ? "Orchestrator" : "Terminal" }));
          if (type === "orchestrator" && !get(policyId)) {
            set(policyId, get(id) || get(name).toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "default");
          }
        } else {
          set(serverType, null);
          toast.error($i18n().t("Server connection failed"));
        }
      } else {
        const res = await getTerminalConfig(_url, get(key));
        if (res) {
          toast.success($i18n().t("Server connection verified"));
        } else {
          toast.error($i18n().t("Server connection failed"));
        }
      }
    } catch {
      set(serverType, null);
      toast.error($i18n().t("Server connection failed"));
    } finally {
      set(verifying, false);
    }
  };
  const buildPolicyData = () => {
    const data = {};
    if (get(policyImage)) data.image = get(policyImage);
    if (get(policyCpu)) data.cpu_limit = get(policyCpu);
    if (get(policyMemory)) data.memory_limit = get(policyMemory);
    if (get(policyStorage) === "persistent") {
      data.storage = get(policyStorageSize);
    }
    if (get(policyIdleTimeout) > 0) {
      data.idle_timeout_minutes = get(policyIdleTimeout);
    }
    const env = {};
    for (const pair of get(policyEnvPairs)) {
      if (pair.key.trim()) {
        env[pair.key.trim()] = pair.value;
      }
    }
    if (Object.keys(env).length > 0) {
      data.env = env;
    }
    return data;
  };
  const submitHandler = async () => {
    if (get(url) === "") {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    set(url, get(url).replace(/\/$/, ""));
    if (get(serverType) === "orchestrator" && !direct() && get(policyId)) {
      try {
        await putOrchestratorPolicy(localStorage.token, get(url), get(key), get(policyId), buildPolicyData());
      } catch (err) {
        toast.error($i18n().t("Failed to save policy: {{error}}", { error: err }));
        return;
      }
    }
    const result = {
      ...!direct() && get(id).trim() ? { id: get(id).trim() } : {},
      url: get(url),
      key: get(key),
      name: get(name),
      path: get(path),
      auth_type: get(auth_type),
      enabled,
      config: { ...!direct() ? { access_grants: get(accessGrants) } : {} },
      // Policy fields
      ...get(serverType) ? { server_type: get(serverType) } : {},
      ...get(serverType) === "orchestrator" && get(policyId) ? { policy_id: get(policyId) } : {},
      ...get(serverType) === "orchestrator" ? { policy: buildPolicyData() } : {}
    };
    onSubmit()(result);
    show(false);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_13();
  var node = first_child(fragment);
  Modal(node, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_12();
      var div_1 = child(div);
      var h1 = child(div_1);
      var node_1 = child(h1);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Terminal Connection")))
          ]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Terminal Connection")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(h1);
      var button = sibling(h1, 2);
      var node_2 = child(button);
      XMark(node_2, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var form = child(div_3);
      var div_4 = child(form);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var label = child(div_7);
      var text_2 = child(label, true);
      reset(label);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var input = child(div_8);
      remove_input_defaults(input);
      reset(div_8);
      reset(div_6);
      var node_3 = sibling(div_6, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_9 = root();
          var div_10 = child(div_9);
          var label_1 = child(div_10);
          var text_3 = child(label_1);
          var span = sibling(text_3);
          var text_4 = child(span);
          reset(span);
          reset(label_1);
          reset(div_10);
          var div_11 = sibling(div_10, 2);
          var input_1 = child(div_11);
          remove_input_defaults(input_1);
          reset(div_11);
          reset(div_9);
          template_effect(
            ($0, $1) => {
              set_class(label_1, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_3, `${$0 ?? ""} `);
              set_text(text_4, `(${$1 ?? ""})`);
              set_class(input_1, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("ID"))),
              () => ($i18n(), untrack(() => $i18n().t("optional")))
            ]
          );
          bind_value(input_1, () => get(id), ($$value) => set(id, $$value));
          append($$anchor3, div_9);
        };
        if_block(node_3, ($$render) => {
          if (!direct()) $$render(consequent_1);
        });
      }
      reset(div_5);
      var div_12 = sibling(div_5, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var label_2 = child(div_14);
      var text_5 = child(label_2, true);
      reset(label_2);
      reset(div_14);
      var div_15 = sibling(div_14, 2);
      var input_2 = child(div_15);
      remove_input_defaults(input_2);
      reset(div_15);
      reset(div_13);
      var node_4 = sibling(div_13, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Verify Connection"))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          className: "self-end -mb-1",
          children: ($$anchor3, $$slotProps2) => {
            var button_1 = root_3();
            var node_5 = child(button_1);
            {
              var consequent_2 = ($$anchor4) => {
                var svg = root_1();
                append($$anchor4, svg);
              };
              var alternate_1 = ($$anchor4) => {
                var svg_1 = root_2();
                append($$anchor4, svg_1);
              };
              if_block(node_5, ($$render) => {
                if (get(verifying)) $$render(consequent_2);
                else $$render(alternate_1, -1);
              });
            }
            reset(button_1);
            template_effect(
              ($02) => {
                button_1.disabled = get(verifying);
                set_attribute(button_1, "aria-label", $02);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Verify Connection")))
              ]
            );
            event("click", button_1, () => {
              verifyHandler();
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
      reset(div_12);
      var node_6 = sibling(div_12, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_3 = root_6();
          var div_16 = first_child(fragment_3);
          var div_17 = child(div_16);
          var div_18 = child(div_17);
          var div_19 = child(div_18);
          var text_6 = child(div_19, true);
          reset(div_19);
          reset(div_18);
          var div_20 = sibling(div_18, 2);
          var input_3 = child(div_20);
          remove_input_defaults(input_3);
          reset(div_20);
          reset(div_17);
          reset(div_16);
          var div_21 = sibling(div_16, 2);
          var div_22 = child(div_21);
          var div_23 = child(div_22);
          var div_24 = child(div_23);
          var text_7 = child(div_24);
          var span_1 = sibling(text_7);
          var text_8 = child(span_1);
          reset(span_1);
          reset(div_24);
          reset(div_23);
          var div_25 = sibling(div_23, 2);
          var input_4 = child(div_25);
          remove_input_defaults(input_4);
          reset(div_25);
          reset(div_22);
          reset(div_21);
          var div_26 = sibling(div_21, 2);
          var div_27 = child(div_26);
          var div_28 = child(div_27);
          var div_29 = child(div_28);
          var text_9 = child(div_29, true);
          reset(div_29);
          reset(div_28);
          var div_30 = sibling(div_28, 2);
          var input_5 = child(div_30);
          remove_input_defaults(input_5);
          reset(div_30);
          reset(div_27);
          var div_31 = sibling(div_27, 2);
          var div_32 = child(div_31);
          var div_33 = child(div_32);
          var text_10 = child(div_33, true);
          reset(div_33);
          reset(div_32);
          var div_34 = sibling(div_32, 2);
          var input_6 = child(div_34);
          remove_input_defaults(input_6);
          reset(div_34);
          reset(div_31);
          reset(div_26);
          var div_35 = sibling(div_26, 2);
          var div_36 = child(div_35);
          var div_37 = child(div_36);
          var div_38 = child(div_37);
          var text_11 = child(div_38, true);
          reset(div_38);
          reset(div_37);
          var div_39 = sibling(div_37, 2);
          var div_40 = child(div_39);
          var select = child(div_40);
          var option = child(select);
          var text_12 = child(option, true);
          reset(option);
          option.value = option.__value = "ephemeral";
          var option_1 = sibling(option);
          var text_13 = child(option_1, true);
          reset(option_1);
          option_1.value = option_1.__value = "persistent";
          reset(select);
          reset(div_40);
          var node_7 = sibling(div_40, 2);
          {
            var consequent_3 = ($$anchor4) => {
              var div_41 = root_4();
              var input_7 = child(div_41);
              remove_input_defaults(input_7);
              reset(div_41);
              template_effect(() => set_class(input_7, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              }))));
              bind_value(input_7, () => get(policyStorageSize), ($$value) => set(policyStorageSize, $$value));
              append($$anchor4, div_41);
            };
            if_block(node_7, ($$render) => {
              if (get(policyStorage) === "persistent") $$render(consequent_3);
            });
          }
          reset(div_39);
          reset(div_36);
          var div_42 = sibling(div_36, 2);
          var div_43 = child(div_42);
          var div_44 = child(div_43);
          var text_14 = child(div_44);
          var span_2 = sibling(text_14);
          var text_15 = child(span_2);
          reset(span_2);
          reset(div_44);
          reset(div_43);
          var div_45 = sibling(div_43, 2);
          var input_8 = child(div_45);
          remove_input_defaults(input_8);
          reset(div_45);
          reset(div_42);
          reset(div_35);
          var div_46 = sibling(div_35, 2);
          var div_47 = child(div_46);
          var div_48 = child(div_47);
          var div_49 = child(div_48);
          var text_16 = child(div_49, true);
          reset(div_49);
          var button_2 = sibling(div_49, 2);
          var text_17 = child(button_2);
          reset(button_2);
          reset(div_48);
          var node_8 = sibling(div_48, 2);
          each(node_8, 1, () => get(policyEnvPairs), index, ($$anchor4, pair, idx) => {
            var div_50 = root_5();
            var input_9 = child(div_50);
            remove_input_defaults(input_9);
            var input_10 = sibling(input_9, 2);
            remove_input_defaults(input_10);
            var button_3 = sibling(input_10, 2);
            var node_9 = child(button_3);
            XMark(node_9, { className: "size-3" });
            reset(button_3);
            reset(div_50);
            template_effect(() => {
              set_class(input_9, 1, ($settings(), untrack(() => {
                var _a;
                return `flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_class(input_10, 1, ($settings(), untrack(() => {
                var _a;
                return `flex-[2] text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
            });
            bind_value(input_9, () => get(pair).key, ($$value) => (get(pair).key = $$value, invalidate_inner_signals(() => get(policyEnvPairs))));
            bind_value(input_10, () => get(pair).value, ($$value) => (get(pair).value = $$value, invalidate_inner_signals(() => get(policyEnvPairs))));
            event("click", button_3, () => set(policyEnvPairs, get(policyEnvPairs).filter((_, i) => i !== idx)));
            append($$anchor4, div_50);
          });
          reset(div_47);
          reset(div_46);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) => {
              set_class(div_19, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_6, $0);
              set_class(input_3, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              input_3.disabled = (deep_read_state(edit()), deep_read_state(connection()), untrack(() => {
                var _a;
                return edit() && !!((_a = connection()) == null ? void 0 : _a.policy_id);
              }));
              set_class(div_24, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_7, `${$1 ?? ""} `);
              set_text(text_8, `(${$2 ?? ""})`);
              set_class(input_4, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_class(div_29, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_9, $3);
              set_class(input_5, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_class(div_33, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_10, $4);
              set_class(input_6, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_class(div_38, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_11, $5);
              set_class(select, 1, ($settings(), untrack(() => {
                var _a;
                return `dark:bg-gray-900 w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_text(text_12, $6);
              set_text(text_13, $7);
              set_class(div_44, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_14, `${$8 ?? ""} `);
              set_text(text_15, `(${$9 ?? ""})`);
              set_class(input_8, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full flex-1 text-sm bg-transparent font-mono ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_class(div_49, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_16, $10);
              set_text(text_17, `+ ${$11 ?? ""}`);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Policy ID"))),
              () => ($i18n(), untrack(() => $i18n().t("Image"))),
              () => ($i18n(), untrack(() => $i18n().t("optional"))),
              () => ($i18n(), untrack(() => $i18n().t("CPU"))),
              () => ($i18n(), untrack(() => $i18n().t("Memory"))),
              () => ($i18n(), untrack(() => $i18n().t("Storage"))),
              () => ($i18n(), untrack(() => $i18n().t("Ephemeral"))),
              () => ($i18n(), untrack(() => $i18n().t("Persistent"))),
              () => ($i18n(), untrack(() => $i18n().t("Idle Timeout"))),
              () => ($i18n(), untrack(() => $i18n().t("min"))),
              () => ($i18n(), untrack(() => $i18n().t("Environment Variables"))),
              () => ($i18n(), untrack(() => $i18n().t("Add")))
            ]
          );
          bind_value(input_3, () => get(policyId), ($$value) => set(policyId, $$value));
          bind_value(input_4, () => get(policyImage), ($$value) => set(policyImage, $$value));
          bind_value(input_5, () => get(policyCpu), ($$value) => set(policyCpu, $$value));
          bind_value(input_6, () => get(policyMemory), ($$value) => set(policyMemory, $$value));
          bind_select_value(select, () => get(policyStorage), ($$value) => set(policyStorage, $$value));
          bind_value(input_8, () => get(policyIdleTimeout), ($$value) => set(policyIdleTimeout, $$value));
          event("click", button_2, () => set(policyEnvPairs, [...get(policyEnvPairs), { key: "", value: "" }]));
          append($$anchor3, fragment_3);
        };
        if_block(node_6, ($$render) => {
          if (get(serverType) === "orchestrator" && !direct()) $$render(consequent_4);
        });
      }
      var div_51 = sibling(node_6, 2);
      var button_4 = child(div_51);
      var svg_2 = child(button_4);
      var text_18 = sibling(svg_2);
      reset(button_4);
      var node_10 = sibling(button_4, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var button_5 = root_7();
          var node_11 = child(button_5);
          LockClosed(node_11, { strokeWidth: "2.5", className: "size-3.5 shrink-0" });
          var div_52 = sibling(node_11, 2);
          var text_19 = child(div_52, true);
          reset(div_52);
          reset(button_5);
          template_effect(($0) => set_text(text_19, $0), [() => ($i18n(), untrack(() => $i18n().t("Access")))]);
          event("click", button_5, () => {
            set(showAccessControlModal, true);
          });
          append($$anchor3, button_5);
        };
        if_block(node_10, ($$render) => {
          if (!direct()) $$render(consequent_5);
        });
      }
      reset(div_51);
      var node_12 = sibling(div_51, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_53 = root_8();
          var div_54 = child(div_53);
          var div_55 = child(div_54);
          var div_56 = child(div_55);
          var div_57 = child(div_56);
          var text_20 = child(div_57, true);
          reset(div_57);
          reset(div_56);
          reset(div_55);
          var div_58 = sibling(div_55, 2);
          var div_59 = child(div_58);
          var div_60 = child(div_59);
          var label_3 = child(div_60);
          var text_21 = child(label_3, true);
          reset(label_3);
          var input_11 = sibling(label_3, 2);
          remove_input_defaults(input_11);
          reset(div_60);
          reset(div_59);
          reset(div_58);
          var div_61 = sibling(div_58, 2);
          var text_22 = child(div_61, true);
          reset(div_61);
          reset(div_54);
          reset(div_53);
          template_effect(
            ($0, $1, $2, $3) => {
              set_class(div_57, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_20, $0);
              set_text(text_21, $1);
              set_class(input_11, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_11, "placeholder", $2);
              set_class(div_61, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs mt-1 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_22, $3);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("OpenAPI Spec"))),
              () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path"))),
              () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path"))),
              () => ($i18n(), get(path), get(url), untrack(() => $i18n().t(`rexpro will make requests to "{{url}}"`, {
                url: get(path).includes("://") ? get(path) : `${get(url)}${get(path).startsWith("/") ? "" : "/"}${get(path)}`
              })))
            ]
          );
          bind_value(input_11, () => get(path), ($$value) => set(path, $$value));
          append($$anchor3, div_53);
        };
        if_block(node_12, ($$render) => {
          if (get(showAdvanced)) $$render(consequent_6);
        });
      }
      var div_62 = sibling(node_12, 2);
      var div_63 = child(div_62);
      var div_64 = child(div_63);
      var div_65 = child(div_64);
      var div_66 = child(div_65);
      var text_23 = child(div_66, true);
      reset(div_66);
      reset(div_65);
      reset(div_64);
      var div_67 = sibling(div_64, 2);
      var div_68 = child(div_67);
      var select_1 = child(div_68);
      var option_2 = child(select_1);
      var text_24 = child(option_2, true);
      reset(option_2);
      option_2.value = option_2.__value = "none";
      var option_3 = sibling(option_2);
      var text_25 = child(option_3, true);
      reset(option_3);
      option_3.value = option_3.__value = "bearer";
      var node_13 = sibling(option_3);
      {
        var consequent_7 = ($$anchor3) => {
          var fragment_4 = root_9();
          var option_4 = first_child(fragment_4);
          var text_26 = child(option_4, true);
          reset(option_4);
          option_4.value = option_4.__value = "session";
          var option_5 = sibling(option_4, 2);
          var text_27 = child(option_5, true);
          reset(option_5);
          option_5.value = option_5.__value = "system_oauth";
          template_effect(
            ($0, $1) => {
              set_text(text_26, $0);
              set_text(text_27, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Session"))),
              () => ($i18n(), untrack(() => $i18n().t("OAuth")))
            ]
          );
          append($$anchor3, fragment_4);
        };
        if_block(node_13, ($$render) => {
          if (!direct()) $$render(consequent_7);
        });
      }
      reset(select_1);
      reset(div_68);
      var div_69 = sibling(div_68, 2);
      var node_14 = child(div_69);
      {
        var consequent_8 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("API Key"))));
            SensitiveInput($$anchor3, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(key);
              },
              set value($$value) {
                set(key, $$value);
              },
              $$legacy: true
            });
          }
        };
        var consequent_9 = ($$anchor3) => {
          var div_70 = root_10();
          var text_28 = child(div_70, true);
          reset(div_70);
          template_effect(
            ($0) => {
              set_class(div_70, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_28, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No authentication")))
            ]
          );
          append($$anchor3, div_70);
        };
        var consequent_10 = ($$anchor3) => {
          var div_71 = root_10();
          var text_29 = child(div_71, true);
          reset(div_71);
          template_effect(
            ($0) => {
              set_class(div_71, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_29, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user session credentials to authenticate")))
            ]
          );
          append($$anchor3, div_71);
        };
        var consequent_11 = ($$anchor3) => {
          var div_72 = root_10();
          var text_30 = child(div_72, true);
          reset(div_72);
          template_effect(
            ($0) => {
              set_class(div_72, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_30, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Forwards system user OAuth access token to authenticate")))
            ]
          );
          append($$anchor3, div_72);
        };
        if_block(node_14, ($$render) => {
          if (get(auth_type) === "bearer") $$render(consequent_8);
          else if (get(auth_type) === "none") $$render(consequent_9, 1);
          else if (get(auth_type) === "session") $$render(consequent_10, 2);
          else if (get(auth_type) === "system_oauth") $$render(consequent_11, 3);
        });
      }
      reset(div_69);
      reset(div_67);
      reset(div_63);
      reset(div_62);
      var div_73 = sibling(div_62, 2);
      var div_74 = child(div_73);
      var node_15 = child(div_74);
      {
        var consequent_12 = ($$anchor3) => {
          var button_6 = root_11();
          var text_31 = child(button_6, true);
          reset(button_6);
          template_effect(($0) => set_text(text_31, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_6, () => {
            set(showDeleteConfirmDialog, true);
          });
          append($$anchor3, button_6);
        };
        if_block(node_15, ($$render) => {
          if (edit()) $$render(consequent_12);
        });
      }
      reset(div_74);
      var button_7 = sibling(div_74, 2);
      var text_32 = child(button_7, true);
      reset(button_7);
      reset(div_73);
      reset(div_4);
      reset(form);
      reset(div_3);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
          set_attribute(button, "aria-label", $0);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_2, $1);
          set_class(input, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input, "placeholder", $2);
          set_class(label_2, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_5, $3);
          set_class(input_2, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_class(svg_2, 0, `w-3 h-3 transition-transform ${get(showAdvanced) ? "rotate-90" : ""}`);
          set_text(text_18, ` ${$4 ?? ""}`);
          set_class(div_66, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_23, $5);
          set_class(select_1, 1, ($settings(), untrack(() => {
            var _a;
            return `dark:bg-gray-900 w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_24, $6);
          set_text(text_25, $7);
          set_text(text_32, $8);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("My Terminal"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Advanced"))),
          () => ($i18n(), untrack(() => $i18n().t("Auth"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("Bearer"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      bind_value(input_2, () => get(url), ($$value) => set(url, $$value));
      event("click", button_4, () => set(showAdvanced, !get(showAdvanced)));
      bind_select_value(select_1, () => get(auth_type), ($$value) => set(auth_type, $$value));
      event("submit", form, preventDefault(submitHandler));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_16 = sibling(node, 2);
  AccessControlModal(node_16, {
    get show() {
      return get(showAccessControlModal);
    },
    set show($$value) {
      set(showAccessControlModal, $$value);
    },
    get accessGrants() {
      return get(accessGrants);
    },
    set accessGrants($$value) {
      set(accessGrants, $$value);
    },
    $$legacy: true
  });
  var node_17 = sibling(node_16, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this connection? This action cannot be undone."))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node_17, {
      get message() {
        return get($0);
      },
      get confirmLabel() {
        return get($1);
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$events: {
        confirm: () => {
          onDelete()();
          show(false);
        }
      },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  AddConnectionModal as A,
  Cog6 as C,
  WrenchAlt as W,
  AddToolServerModal as a,
  AddTerminalServerModal as b,
  Connection as c
};
