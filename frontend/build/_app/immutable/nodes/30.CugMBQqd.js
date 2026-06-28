import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, aV as mutate, k as get, c as child, r as reset, z as sibling, a_ as remove_textarea_child, w as set, t as template_effect, m as deep_read_state, u as untrack, d as set_text, y as event, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, l as legacy_pre_effect, n as legacy_pre_effect_reset, h as first_child, x as derived_safe_equal, v as user_derived, A as tick, aW as text } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { s as set_attribute, f as bind_select_value, a as set_class } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { b as REXPRO_BASE_URL } from "../chunks/CZpnbXda.js";
import { u as user, s as settings, c as config, m as models } from "../chunks/BJ3rUC-5.js";
import { c as chatCompletion } from "../chunks/drrmQgs3.js";
import { s as splitStream } from "../chunks/X0cYWxFO.js";
import { C as Collapsible } from "../chunks/I2tEDoYD.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { D as DropdownSub } from "../chunks/CjRHBgDX.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { A as AdvancedParams } from "../chunks/Di5xMM68.js";
import { C as ChevronUp } from "../chunks/BYBmqvkv.js";
import { P as Pencil } from "../chunks/Bga8-tII.js";
import { A as AdjustmentsHorizontal } from "../chunks/lVdf4dVj.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
var root$2 = from_html(`<div class="flex gap-2 group"><div class="flex items-start pt-1"><div class="px-2 py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition"> </div></div> <div class="flex-1"><textarea class="w-full bg-transparent outline-hidden rounded-lg p-2 text-sm resize-none overflow-hidden" rows="1"></textarea></div> <div class=" pt-1"><button class=" group-hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></button></div></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let message = prop($$props, "message", 12);
  let idx = prop($$props, "idx", 8);
  let onDelete = prop($$props, "onDelete", 8);
  let textAreaElement = mutable_source();
  onMount(() => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  init();
  var div = root$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var textarea = child(div_3);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textAreaElement, $$value), () => get(textAreaElement));
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var button = child(div_4);
  reset(div_4);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_attribute(textarea, "id", `${(deep_read_state(message()), untrack(() => message().role)) ?? ""}-${idx() ?? ""}-textarea`);
      set_attribute(textarea, "placeholder", $1);
    },
    [
      () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(message().role))),
      () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(`Enter {{role}} message here`, {
        role: message().role === "user" ? $i18n().t("a user") : $i18n().t("an assistant")
      })))
    ]
  );
  event("input", textarea, (e) => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  event("focus", textarea, (e) => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  bind_value(textarea, () => message().content, ($$value) => message(message().content = $$value, true));
  event("click", button, () => {
    onDelete()();
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="py-3 space-y-3"></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let messages = prop($$props, "messages", 28, () => []);
  init();
  var div = root$1();
  each(div, 5, messages, index, ($$anchor2, message, idx) => {
    Message($$anchor2, {
      get message() {
        return get(message);
      },
      idx,
      onDelete: () => {
        messages(messages().filter((message2, messageIdx) => messageIdx !== idx));
      }
    });
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root = from_html(`<div class="text-gray-700 dark:text-gray-100"><div class="flex justify-between px-4.5 pt-4.5 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="px-4.5 pb-5 overflow-y-auto max-h-[70vh]"><!></div></div>`);
var root_1 = from_html(`<div class=" flex-1 text-gray-500 line-clamp-1"> </div>`);
var root_2 = from_html(`<div class="flex gap-2 justify-between items-center"><div class=" shrink-0 font-medium ml-1.5"> </div> <!> <div class="shrink-0"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"><!></button></div></div>`);
var root_3 = from_html(`<div slot="content"><div class="pt-1 px-1.5"><textarea class="w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="4"></textarea></div></div>`);
var root_4 = from_html(`<button class="p-1.5 text-sm font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition rounded-lg"><!></button>`);
var root_5 = from_html(`<button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><div class="flex items-center line-clamp-1"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><div class="flex items-center line-clamp-1"> </div></button>`, 1);
var root_6 = from_html(`<button slot="trigger" class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full"><!> <div class="flex items-center"> </div></button>`);
var root_7 = from_html(`<div slot="content"><div class="min-w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!></div></div>`);
var root_8 = from_html(`<option class="bg-gray-50 dark:bg-gray-700"> </option>`);
var root_9 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium disabled:bg-gray-50 dark:disabled:hover:bg-gray-850 disabled:cursor-not-allowed bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg"> </button>`, 1);
var root_10 = from_html(`<button class="px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg"> </button>`);
var root_11 = from_html(`<!> <div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full relative"><div class=" flex flex-col h-full px-3.5"><div class="flex w-full items-center gap-1.5"><!> <!></div> <div class=" pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1 p-1"><!></div></div></div> <div class="pb-3"><div class="border border-gray-100/30 dark:border-gray-850/30 w-full px-3 py-2.5 rounded-xl"><div class="py-0.5"><textarea class=" w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="2"></textarea></div> <div class="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"><div class="shrink-0"><button type="button"><!></button></div> <div class="flex items-center justify-between gap-2 w-full sm:w-auto"><div class="flex-1"><select class=" bg-transparent border border-gray-100/30 dark:border-gray-850/30 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full"></select></div> <button id="playground-controls-toggle"><!></button> <div class="flex gap-2 shrink-0"><!></div></div></div></div></div></div></div></div>`, 1);
function Chat($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let selectedModelId = mutable_source("");
  let loading = mutable_source(false);
  let stopResponseFlag = false;
  let systemTextareaElement = mutable_source();
  let messagesContainerElement = mutable_source();
  let showSystem = mutable_source(false);
  let showControls = mutable_source(false);
  let params = mutable_source({});
  let system = mutable_source("");
  let role = mutable_source("user");
  let message = mutable_source("");
  let messages = mutable_source([]);
  const scrollToBottom = () => {
    const element = get(messagesContainerElement);
    if (element) {
      element.scrollTop = element == null ? void 0 : element.scrollHeight;
    }
  };
  const stopResponse = () => {
    stopResponseFlag = true;
    /* @__PURE__ */ console.log("stopResponse");
  };
  const resizeSystemTextarea = async () => {
    await tick();
    if (get(systemTextareaElement)) {
      mutate(systemTextareaElement, get(systemTextareaElement).style.height = "");
      mutate(systemTextareaElement, get(systemTextareaElement).style.height = Math.min(get(systemTextareaElement).scrollHeight, 555) + "px");
    }
  };
  const chatCompletionHandler = async () => {
    var _a;
    if (get(selectedModelId) === "") {
      toast.error($i18n().t("Please select a model."));
      return;
    }
    const model = $models().find((model2) => model2.id === get(selectedModelId));
    if (!model) {
      set(selectedModelId, "");
      return;
    }
    const activeParams = Object.fromEntries(Object.entries(get(params)).filter(([_, v]) => v !== null && v !== void 0));
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: [
          get(system) ? { role: "system", content: get(system) } : void 0,
          ...get(messages)
        ].filter((message2) => message2),
        ...Object.keys(activeParams).length > 0 ? activeParams : {}
      },
      `${REXPRO_BASE_URL}/api`
    );
    let responseMessage;
    if (((_a = get(messages).at(-1)) == null ? void 0 : _a.role) === "assistant") {
      responseMessage = get(messages).at(-1);
    } else {
      responseMessage = { role: "assistant", content: "" };
      get(messages).push(responseMessage);
      set(messages, get(messages));
    }
    await tick();
    const textareaElement = document.getElementById(`assistant-${get(messages).length - 1}-textarea`);
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
              /* @__PURE__ */ console.log(line);
              if (line === "data: [DONE]") {
                set(messages, get(messages));
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                /* @__PURE__ */ console.log(data);
                if (responseMessage.content == "" && data.choices[0].delta.content == "\n") {
                  continue;
                } else {
                  textareaElement.style.height = textareaElement.scrollHeight + "px";
                  responseMessage.content += data.choices[0].delta.content ?? "";
                  set(messages, get(messages));
                  textareaElement.style.height = textareaElement.scrollHeight + "px";
                  await tick();
                }
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
  const addHandler = async () => {
    if (get(message)) {
      get(messages).push({ role: get(role), content: get(message) });
      set(messages, get(messages));
      set(message, "");
      await tick();
      scrollToBottom();
    }
  };
  const submitHandler = async () => {
    if (get(selectedModelId)) {
      await addHandler();
      set(loading, true);
      await chatCompletionHandler();
      set(loading, false);
      stopResponseFlag = false;
    }
  };
  const exportToJson = () => {
    const now = Math.floor(Date.now() / 1e3);
    const messagesMap = {};
    let currentId = null;
    let parentId = null;
    if (get(system)) {
      const systemId = crypto.randomUUID();
      messagesMap[systemId] = {
        id: systemId,
        parentId: null,
        childrenIds: [],
        role: "system",
        content: get(system),
        timestamp: now
      };
      parentId = systemId;
    }
    for (const msg of get(messages)) {
      const msgId = crypto.randomUUID();
      if (parentId && messagesMap[parentId]) {
        messagesMap[parentId].childrenIds.push(msgId);
      }
      messagesMap[msgId] = {
        id: msgId,
        parentId,
        childrenIds: [],
        role: msg.role,
        content: msg.content,
        timestamp: now,
        ...msg.role === "assistant" && get(selectedModelId) ? { model: get(selectedModelId) } : {}
      };
      currentId = msgId;
      parentId = msgId;
    }
    const exportData = {
      chat: {
        title: "Playground Chat",
        models: [get(selectedModelId)],
        params: get(system) ? { system: get(system) } : {},
        history: { messages: messagesMap, currentId }
      },
      meta: {},
      pinned: false,
      created_at: now,
      updated_at: now
    };
    const blob = new Blob([JSON.stringify([exportData], null, 2)], { type: "application/json" });
    saveAs(blob, `playground-chat-${Date.now()}.json`);
    toast.success($i18n().t("Chat exported successfully"));
  };
  const downloadTxt = () => {
    let chatText = "";
    if (get(system)) {
      chatText += `### SYSTEM
${get(system)}

`;
    }
    for (const msg of get(messages)) {
      chatText += `### ${msg.role.toUpperCase()}
${msg.content}

`;
    }
    const blob = new Blob([chatText.trim()], { type: "text/plain" });
    saveAs(blob, `playground-chat-${Date.now()}.txt`);
    toast.success($i18n().t("Chat exported successfully"));
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
  legacy_pre_effect(() => get(showSystem), () => {
    if (get(showSystem)) {
      resizeSystemTextarea();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_11();
  var node = first_child(fragment);
  Modal(node, {
    size: "sm",
    get show() {
      return get(showControls);
    },
    set show($$value) {
      set(showControls, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_1 = child(button);
      XMark(node_1, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var node_2 = child(div_3);
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a;
          return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
        })));
        AdvancedParams(node_2, {
          get admin() {
            return get($0);
          },
          custom: true,
          get params() {
            return get(params);
          },
          set params($$value) {
            set(params, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_text(text2, $0);
          set_attribute(button, "aria-label", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Controls"))),
          () => ($i18n(), untrack(() => $i18n().t("Close")))
        ]
      );
      event("click", button, () => {
        set(showControls, false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var div_4 = sibling(node, 2);
  var div_5 = child(div_4);
  var div_6 = child(div_5);
  var div_7 = child(div_6);
  var node_3 = child(div_7);
  Collapsible(node_3, {
    className: "w-full flex-1",
    buttonClassName: "w-full rounded-lg text-sm border border-gray-100/30 dark:border-gray-850/30 w-full py-1 px-1.5",
    grow: true,
    get open() {
      return get(showSystem);
    },
    set open($$value) {
      set(showSystem, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div_8 = root_2();
      var div_9 = child(div_8);
      var text_1 = child(div_9, true);
      reset(div_9);
      var node_4 = sibling(div_9, 2);
      {
        var consequent = ($$anchor3) => {
          var div_10 = root_1();
          var text_2 = child(div_10, true);
          reset(div_10);
          template_effect(() => set_text(text_2, get(system)));
          append($$anchor3, div_10);
        };
        var d = user_derived(() => (get(showSystem), get(system), untrack(() => !get(showSystem) && get(system).trim())));
        if_block(node_4, ($$render) => {
          if (get(d)) $$render(consequent);
        });
      }
      var div_11 = sibling(node_4, 2);
      var button_1 = child(div_11);
      var node_5 = child(button_1);
      {
        var consequent_1 = ($$anchor3) => {
          ChevronUp($$anchor3, { className: "size-3.5" });
        };
        var alternate = ($$anchor3) => {
          Pencil($$anchor3, { className: "size-3.5" });
        };
        if_block(node_5, ($$render) => {
          if (get(showSystem)) $$render(consequent_1);
          else $$render(alternate, -1);
        });
      }
      reset(button_1);
      reset(div_11);
      reset(div_8);
      template_effect(($0) => set_text(text_1, $0), [
        () => ($i18n(), untrack(() => $i18n().t("System Instructions")))
      ]);
      append($$anchor2, div_8);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_12 = root_3();
        var div_13 = child(div_12);
        var textarea = child(div_13);
        remove_textarea_child(textarea);
        bind_this(textarea, ($$value) => set(systemTextareaElement, $$value), () => get(systemTextareaElement));
        reset(div_13);
        reset(div_12);
        template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
          () => ($i18n(), untrack(() => $i18n().t("You're a helpful assistant.")))
        ]);
        bind_value(textarea, () => get(system), ($$value) => set(system, $$value));
        event("input", textarea, () => {
          resizeSystemTextarea();
        });
        append($$anchor2, div_12);
      }
    },
    $$legacy: true
  });
  var node_6 = sibling(node_3, 2);
  Dropdown(node_6, {
    children: ($$anchor2, $$slotProps) => {
      var button_2 = root_4();
      var node_7 = child(button_2);
      EllipsisHorizontal(node_7, { className: "size-4" });
      reset(button_2);
      template_effect(($0) => set_attribute(button_2, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("More options")))]);
      append($$anchor2, button_2);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_14 = root_7();
        var div_15 = child(div_14);
        var node_8 = child(div_15);
        DropdownSub(node_8, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_5();
            var button_3 = first_child(fragment_3);
            var div_16 = child(button_3);
            var text_3 = child(div_16, true);
            reset(div_16);
            reset(button_3);
            var button_4 = sibling(button_3, 2);
            var div_17 = child(button_4);
            var text_4 = child(div_17, true);
            reset(div_17);
            reset(button_4);
            template_effect(
              ($0, $1) => {
                button_3.disabled = (get(messages), untrack(() => get(messages).length === 0));
                set_text(text_3, $0);
                button_4.disabled = (get(messages), untrack(() => get(messages).length === 0));
                set_text(text_4, $1);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Export chat (.json)"))),
                () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)")))
              ]
            );
            event("click", button_3, () => {
              exportToJson();
            });
            event("click", button_4, () => {
              downloadTxt();
            });
            append($$anchor3, fragment_3);
          },
          $$slots: {
            default: true,
            trigger: ($$anchor3, $$slotProps2) => {
              var button_5 = root_6();
              var node_9 = child(button_5);
              Download(node_9, { strokeWidth: "1.5" });
              var div_18 = sibling(node_9, 2);
              var text_5 = child(div_18, true);
              reset(div_18);
              reset(button_5);
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
              append($$anchor3, button_5);
            }
          }
        });
        reset(div_15);
        reset(div_14);
        append($$anchor2, div_14);
      }
    }
  });
  reset(div_7);
  var div_19 = sibling(div_7, 2);
  var div_20 = child(div_19);
  var div_21 = child(div_20);
  var node_10 = child(div_21);
  Messages(node_10, {
    get messages() {
      return get(messages);
    },
    set messages($$value) {
      set(messages, $$value);
    },
    $$legacy: true
  });
  reset(div_21);
  reset(div_20);
  reset(div_19);
  bind_this(div_19, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
  var div_22 = sibling(div_19, 2);
  var div_23 = child(div_22);
  var div_24 = child(div_23);
  var textarea_1 = child(div_24);
  remove_textarea_child(textarea_1);
  reset(div_24);
  var div_25 = sibling(div_24, 2);
  var div_26 = child(div_25);
  var button_6 = child(div_26);
  var node_11 = child(button_6);
  {
    var consequent_2 = ($$anchor2) => {
      var text_6 = text();
      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("User")))]);
      append($$anchor2, text_6);
    };
    var alternate_1 = ($$anchor2) => {
      var text_7 = text();
      template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Assistant")))]);
      append($$anchor2, text_7);
    };
    if_block(node_11, ($$render) => {
      if (get(role) === "user") $$render(consequent_2);
      else $$render(alternate_1, -1);
    });
  }
  reset(button_6);
  reset(div_26);
  var div_27 = sibling(div_26, 2);
  var div_28 = child(div_27);
  var select = child(div_28);
  each(select, 5, $models, index, ($$anchor2, model) => {
    var option = root_8();
    var text_8 = child(option, true);
    reset(option);
    var option_value = {};
    template_effect(() => {
      set_text(text_8, (get(model), untrack(() => get(model).name)));
      if (option_value !== (option_value = (get(model), untrack(() => get(model).id)))) {
        option.value = (option.__value = (get(model), untrack(() => get(model).id))) ?? "";
      }
    });
    append($$anchor2, option);
  });
  reset(select);
  reset(div_28);
  var button_7 = sibling(div_28, 2);
  var node_12 = child(button_7);
  AdjustmentsHorizontal(node_12, { className: "size-4" });
  reset(button_7);
  var div_29 = sibling(button_7, 2);
  var node_13 = child(div_29);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_6 = root_9();
      var button_8 = first_child(fragment_6);
      var text_9 = child(button_8, true);
      reset(button_8);
      var button_9 = sibling(button_8, 2);
      var text_10 = child(button_9, true);
      reset(button_9);
      template_effect(
        ($0, $1) => {
          button_8.disabled = get(message) === "";
          set_text(text_9, $0);
          set_text(text_10, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add"))),
          () => ($i18n(), untrack(() => $i18n().t("Run")))
        ]
      );
      event("click", button_8, () => {
        addHandler();
        set(role, get(role) === "user" ? "assistant" : "user");
      });
      event("click", button_9, () => {
        submitHandler();
      });
      append($$anchor2, fragment_6);
    };
    var alternate_2 = ($$anchor2) => {
      var button_10 = root_10();
      var text_11 = child(button_10, true);
      reset(button_10);
      template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("Cancel")))]);
      event("click", button_10, () => {
        stopResponse();
      });
      append($$anchor2, button_10);
    };
    if_block(node_13, ($$render) => {
      if (!get(loading)) $$render(consequent_3);
      else $$render(alternate_2, -1);
    });
  }
  reset(div_29);
  reset(div_27);
  reset(div_25);
  reset(div_23);
  reset(div_22);
  reset(div_6);
  reset(div_5);
  reset(div_4);
  template_effect(
    ($0, $1, $2) => {
      set_attribute(textarea_1, "placeholder", $0);
      set_class(button_6, 1, `px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg shrink-0 ${($settings(), untrack(() => {
        var _a;
        return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden";
      })) ?? ""}`);
      set_attribute(button_6, "aria-pressed", get(role) === "assistant");
      set_attribute(button_6, "aria-label", $1);
      set_class(button_7, 1, `p-1.5 text-sm font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg ${get(showControls) ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`);
      set_attribute(button_7, "aria-label", $2);
    },
    [
      () => ($i18n(), get(role), untrack(() => $i18n().t(`Enter {{role}} message here`, {
        role: get(role) === "user" ? $i18n().t("a user") : $i18n().t("an assistant")
      }))),
      () => ($i18n(), get(role), untrack(() => $i18n().t(get(role) === "user" ? "Switch to Assistant role" : "Switch to User role"))),
      () => ($i18n(), untrack(() => $i18n().t("Controls")))
    ]
  );
  bind_value(textarea_1, () => get(message), ($$value) => set(message, $$value));
  event("input", textarea_1, (e) => {
    e.target.style.height = "";
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  });
  event("focus", textarea_1, (e) => {
    e.target.style.height = "";
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  });
  event("click", button_6, () => {
    set(role, get(role) === "user" ? "assistant" : "user");
  });
  bind_select_value(select, () => get(selectedModelId), ($$value) => set(selectedModelId, $$value));
  event("click", button_7, () => {
    set(showControls, !get(showControls));
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Chat($$anchor, {});
}
export {
  _page as component
};
