import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, p as push, i as getContext, o as onMount, c as child, m as deep_read_state, u as untrack, r as reset, z as sibling, k as get, d as set_text, b as pop, s as setup_stores, aR as next, aW as text, f as from_html, e as store_get, x as derived_safe_equal, w as set, l as legacy_pre_effect, n as legacy_pre_effect_reset, h as first_child, y as event, v as user_derived, a$ as to_array, q as mutable_source, A as tick, aS as createEventDispatcher, aU as $window, bB as store_set, bC as mark_store_binding, g as comment } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { s as slot } from "./zXynQJya.js";
import { s as set_attribute, a as set_class, c as clsx, r as remove_input_defaults } from "./B9yCN616.js";
import { p as preventDefault, s as stopPropagation } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { g as goto } from "./vYrFh_lq.js";
import { c as getUsage } from "./CwXWgxvI.js";
import { g as getSessionUser, c as userSignOut } from "./C3caEY6s.js";
import { s as settings, u as user, l as showShortcuts, n as showSettings, b as showSidebar, c as config, a as mobile } from "./BJ3rUC-5.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { D as Dropdown } from "./8Pg1zo_Z.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { A as ArchiveBox, N as Note } from "./CAeMOevO.js";
import { e as each, i as index } from "./qTQza25_.js";
import { M as Modal } from "./tmhUPuyr.js";
import { X as XMark } from "./DAqPThR3.js";
import { E as EmojiPicker, F as FaceSmile } from "./Ki4gtWzN.js";
import { b as bind_value } from "./CgeA63xA.js";
import { t as toast } from "./B4Bn1xMI.js";
import { b as updateUserStatus, u as updateUserSettings } from "./CP40r8ux.js";
import { S as Spinner } from "./gJqE84vs.js";
import { E as Emoji } from "./Bl_QxWr9.js";
import { P as PinSlash, a as Pin } from "./BFblSxUV.js";
var root$9 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path></svg>`);
function QuestionMarkCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$9();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$8 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z"></path><path d="M8 14L12 10L16 14" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Keyboard($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$8();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var Shortcut = /* @__PURE__ */ ((Shortcut2) => {
  Shortcut2["NEW_CHAT"] = "newChat";
  Shortcut2["NEW_TEMPORARY_CHAT"] = "newTemporaryChat";
  Shortcut2["DELETE_CHAT"] = "deleteChat";
  Shortcut2["OPEN_MODEL_SELECTOR"] = "openModelSelector";
  Shortcut2["TOGGLE_DICTATION"] = "toggleDictation";
  Shortcut2["SEARCH"] = "search";
  Shortcut2["OPEN_SETTINGS"] = "openSettings";
  Shortcut2["SHOW_SHORTCUTS"] = "showShortcuts";
  Shortcut2["TOGGLE_SIDEBAR"] = "toggleSidebar";
  Shortcut2["CLOSE_MODAL"] = "closeModal";
  Shortcut2["FOCUS_INPUT"] = "focusInput";
  Shortcut2["ACCEPT_AUTOCOMPLETE"] = "acceptAutocomplete";
  Shortcut2["PREVENT_FILE_CREATION"] = "preventFileCreation";
  Shortcut2["NAVIGATE_PROMPT_HISTORY_UP"] = "navigatePromptHistoryUp";
  Shortcut2["ATTACH_FILE"] = "attachFile";
  Shortcut2["ADD_PROMPT"] = "addPrompt";
  Shortcut2["TALK_TO_MODEL"] = "talkToModel";
  Shortcut2["GENERATE_MESSAGE_PAIR"] = "generateMessagePair";
  Shortcut2["REGENERATE_RESPONSE"] = "regenerateResponse";
  Shortcut2["COPY_LAST_CODE_BLOCK"] = "copyLastCodeBlock";
  Shortcut2["COPY_LAST_RESPONSE"] = "copyLastResponse";
  Shortcut2["STOP_GENERATING"] = "stopGenerating";
  Shortcut2["TOGGLE_MUTE"] = "toggleMute";
  return Shortcut2;
})(Shortcut || {});
const shortcuts = {
  //Chat
  [
    "newChat"
    /* NEW_CHAT */
  ]: {
    name: "New Chat",
    keys: ["mod", "shift", "O"],
    category: "Chat"
  },
  [
    "newTemporaryChat"
    /* NEW_TEMPORARY_CHAT */
  ]: {
    name: "New Temporary Chat",
    keys: ["mod", "shift", `'`],
    category: "Chat"
  },
  [
    "deleteChat"
    /* DELETE_CHAT */
  ]: {
    name: "Delete Chat",
    keys: ["mod", "shift", "Backspace", "Delete"],
    category: "Chat"
  },
  [
    "openModelSelector"
    /* OPEN_MODEL_SELECTOR */
  ]: {
    name: "Open Model Selector",
    keys: ["mod", "shift", "M"],
    category: "Chat"
  },
  [
    "toggleDictation"
    /* TOGGLE_DICTATION */
  ]: {
    name: "Toggle Dictation",
    keys: ["mod", "shift", "L"],
    category: "Chat"
  },
  //Global
  [
    "search"
    /* SEARCH */
  ]: {
    name: "Search",
    keys: ["mod", "K"],
    category: "Global"
  },
  [
    "openSettings"
    /* OPEN_SETTINGS */
  ]: {
    name: "Open Settings",
    keys: ["mod", "."],
    category: "Global"
  },
  [
    "showShortcuts"
    /* SHOW_SHORTCUTS */
  ]: {
    name: "Show Shortcuts",
    keys: ["mod", "/"],
    category: "Global"
  },
  [
    "toggleSidebar"
    /* TOGGLE_SIDEBAR */
  ]: {
    name: "Toggle Sidebar",
    keys: ["mod", "shift", "S"],
    category: "Global"
  },
  [
    "closeModal"
    /* CLOSE_MODAL */
  ]: {
    name: "Close Modal",
    keys: ["Escape"],
    category: "Global"
  },
  //Input
  [
    "focusInput"
    /* FOCUS_INPUT */
  ]: {
    name: "Focus Chat Input",
    keys: ["shift", "Escape"],
    category: "Input"
  },
  [
    "acceptAutocomplete"
    /* ACCEPT_AUTOCOMPLETE */
  ]: {
    name: "Accept Autocomplete Generation\nJump to Prompt Variable",
    keys: ["Tab"],
    category: "Input"
  },
  [
    "preventFileCreation"
    /* PREVENT_FILE_CREATION */
  ]: {
    name: "Prevent File Creation",
    keys: ["mod", "shift", "V"],
    category: "Input",
    tooltip: 'Only active when "Paste Large Text as File" setting is toggled on.'
  },
  [
    "attachFile"
    /* ATTACH_FILE */
  ]: {
    name: "Attach File From Knowledge",
    keys: ["#"],
    category: "Input"
  },
  [
    "addPrompt"
    /* ADD_PROMPT */
  ]: {
    name: "Add Custom Prompt",
    keys: ["/"],
    category: "Input"
  },
  [
    "talkToModel"
    /* TALK_TO_MODEL */
  ]: {
    name: "Talk to Model",
    keys: ["@"],
    category: "Input"
  },
  //Message
  [
    "generateMessagePair"
    /* GENERATE_MESSAGE_PAIR */
  ]: {
    name: "Generate Message Pair",
    keys: ["mod", "shift", "Enter"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus."
  },
  [
    "regenerateResponse"
    /* REGENERATE_RESPONSE */
  ]: {
    name: "Regenerate Response",
    keys: ["mod", "R"],
    category: "Message"
  },
  [
    "stopGenerating"
    /* STOP_GENERATING */
  ]: {
    name: "Stop Generating",
    keys: ["Escape"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus and an LLM is generating a response."
  },
  [
    "navigatePromptHistoryUp"
    /* NAVIGATE_PROMPT_HISTORY_UP */
  ]: {
    name: "Edit Last Message",
    keys: ["ArrowUp"],
    category: "Message",
    tooltip: "Only can be triggered when the chat input is in focus."
  },
  [
    "copyLastResponse"
    /* COPY_LAST_RESPONSE */
  ]: {
    name: "Copy Last Response",
    keys: ["mod", "shift", "C"],
    category: "Message"
  },
  [
    "copyLastCodeBlock"
    /* COPY_LAST_CODE_BLOCK */
  ]: {
    name: "Copy Last Code Block",
    keys: ["mod", "shift", ";"],
    category: "Message"
  },
  //Voice
  [
    "toggleMute"
    /* TOGGLE_MUTE */
  ]: {
    name: "Toggle Mute",
    keys: ["M"],
    category: "Voice",
    tooltip: "Only active during Voice Mode."
  }
};
var root$7 = from_html(`<span class="whitespace-nowrap"> <span class="text-xs">&nbsp;*</span></span>`);
var root_1$3 = from_html(`<div class="h-fit px-1 py-0.5 flex items-start justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300"> </div>`);
var root_2$3 = from_html(`<div class="w-full flex justify-between"><div class="text-sm whitespace-pre-line"><!></div> <div class="flex-shrink-0 flex justify-end self-start h-full space-x-1 text-xs"></div></div>`);
function ShortcutItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let shortcut = prop($$props, "shortcut", 8);
  let isMac = prop($$props, "isMac", 8);
  const i18n = getContext("i18n");
  let keyboardLayoutMap;
  onMount(async () => {
    if (navigator.keyboard && "getLayoutMap" in navigator.keyboard) {
      try {
        keyboardLayoutMap = await navigator.keyboard.getLayoutMap();
      } catch (error) {
        /* @__PURE__ */ console.error("Failed to get keyboard layout map:", error);
      }
    }
  });
  function formatKey(key) {
    switch (key) {
      case "mod":
        return isMac() ? "⌘" : "Ctrl";
      case "shift":
        return isMac() ? "⇧" : "Shift";
      case "alt":
        return isMac() ? "⌥" : "Alt";
    }
    if (keyboardLayoutMap && keyboardLayoutMap.has(key)) {
      const mappedKey = keyboardLayoutMap.get(key) ?? key;
      return mappedKey.length === 1 ? mappedKey.toUpperCase() : mappedKey;
    }
    const lowerKey = key.toLowerCase();
    switch (lowerKey) {
      case "backspace":
      case "delete":
        return isMac() ? "⌫" : "Delete";
      case "escape":
        return "Esc";
      case "enter":
        return isMac() ? "↩" : "Enter";
      case "tab":
        return isMac() ? "⇥" : "Tab";
      case "arrowup":
        return "↑";
      case "arrowdown":
        return "↓";
      case "quote":
        return "'";
      case "period":
        return ".";
      case "slash":
        return "/";
      case "semicolon":
        return ";";
      default:
        if (lowerKey.startsWith("key") || lowerKey.startsWith("digit")) {
          return key.slice(-1).toUpperCase();
        }
        return key.toUpperCase();
    }
  }
  init();
  var div = root_2$3();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().tooltip))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var span = root$7();
            var text2 = child(span, true);
            next();
            reset(span);
            template_effect(($02) => set_text(text2, $02), [
              () => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().name)))
            ]);
            append($$anchor3, span);
          },
          $$slots: { default: true }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [
        () => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().name)))
      ]);
      append($$anchor2, text_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(shortcut()), untrack(() => shortcut().tooltip)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(
    div_2,
    5,
    () => (deep_read_state(shortcut()), untrack(() => shortcut().keys.filter((key) => !(key.toLowerCase() === "delete" && shortcut().keys.includes("Backspace"))))),
    index,
    ($$anchor2, key) => {
      var div_3 = root_1$3();
      var text_2 = child(div_3, true);
      reset(div_3);
      template_effect(($0) => set_text(text_2, $0), [() => (get(key), untrack(() => formatKey(get(key))))]);
      append($$anchor2, div_3);
    }
  );
  reset(div_2);
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$6 = from_html(`<div class="py-3"><div class="w-full border-t dark:border-gray-850 border-gray-50"></div></div>`);
var root_1$2 = from_html(`<div class="col-span-1 flex items-start"><!></div>`);
var root_2$2 = from_html(`<!> <div class="flex justify-between dark:text-gray-300 pb-2"><div class="text-base self-center"> </div></div> <div class="flex flex-col md:flex-row w-full md:space-x-2 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class=" grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-4 w-full"></div></div></div>`, 1);
var root_3$1 = from_html(`<div class="text-gray-700 dark:text-gray-100 px-5 py-4"><div class="flex justify-between dark:text-gray-300 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <!></div>`);
function ShortcutsModal($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let categorizedShortcuts = mutable_source({});
  let isMac = mutable_source(false);
  onMount(() => {
    set(isMac, /Mac/i.test(navigator.userAgent));
  });
  legacy_pre_effect(() => $settings(), () => {
    const allShortcuts = Object.values(shortcuts).filter((shortcut) => {
      if (!shortcut.setting) {
        return true;
      }
      return $settings()[shortcut.setting.id] === shortcut.setting.value;
    });
    set(categorizedShortcuts, allShortcuts.reduce(
      (acc, shortcut) => {
        const category = shortcut.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(shortcut);
        return acc;
      },
      {}
    ));
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_3$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var node_1 = sibling(div_1, 2);
      each(
        node_1,
        1,
        () => (get(categorizedShortcuts), untrack(() => Object.entries(get(categorizedShortcuts)))),
        index,
        ($$anchor3, $$item, categoryIndex) => {
          var $$array = user_derived(() => to_array(get($$item), 2));
          let category = () => get($$array)[0];
          let items = () => get($$array)[1];
          var fragment_1 = root_2$2();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var div_3 = root$6();
              append($$anchor4, div_3);
            };
            if_block(node_2, ($$render) => {
              if (categoryIndex > 0) $$render(consequent);
            });
          }
          var div_4 = sibling(node_2, 2);
          var div_5 = child(div_4);
          var text_1 = child(div_5, true);
          reset(div_5);
          reset(div_4);
          var div_6 = sibling(div_4, 2);
          var div_7 = child(div_6);
          var div_8 = child(div_7);
          each(div_8, 5, items, index, ($$anchor4, shortcut) => {
            var div_9 = root_1$2();
            var node_3 = child(div_9);
            ShortcutItem(node_3, {
              get shortcut() {
                return get(shortcut);
              },
              get isMac() {
                return get(isMac);
              }
            });
            reset(div_9);
            append($$anchor4, div_9);
          });
          reset(div_8);
          reset(div_7);
          reset(div_6);
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), category(), untrack(() => $i18n().t(category())))
          ]);
          append($$anchor3, fragment_1);
        }
      );
      reset(div);
      template_effect(
        ($0, $1) => {
          set_text(text2, $0);
          set_attribute(button, "aria-label", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Keyboard Shortcuts"))),
          () => ($i18n(), untrack(() => $i18n().t("Close")))
        ]
      );
      event("click", button, () => show(false));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
function Settings($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg>`);
function Code($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
function UserGroup($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" aria-hidden="true"></path><path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd"></path></svg>`);
function SignOut($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root$1 = from_html(`<div class=" flex items-center"><!></div>`);
var root_1$1 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_2$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div><div class="text-xs text-gray-500 mb-1.5"> </div> <div class="flex items-center px-2.5 py-2 gap-3 border border-gray-100/50 dark:border-gray-850/50 rounded-xl"><!> <input id="status-message" type="text" autocomplete="off" required=""/> <button type="button"><!></button></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button type="submit"> <!></button></div></form></div></div></div>`);
function UserStatusModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let emoji = mutable_source("");
  let message = mutable_source("");
  let loading = mutable_source(false);
  const submitHandler = async () => {
    set(loading, true);
    const res = await updateUserStatus(localStorage.token, { status_emoji: get(emoji), status_message: get(message) }).catch((error) => {
      toast.error(`${error}`);
      set(loading, false);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Status updated successfully"));
      onSave()();
    } else {
      toast.error($i18n().t("Failed to update status"));
    }
    show(false);
    set(loading, false);
  };
  const init$1 = async () => {
    var _a, _b;
    set(emoji, ((_a = $user()) == null ? void 0 : _a.status_emoji) || "");
    set(message, ((_b = $user()) == null ? void 0 : _b.status_message) || "");
    await tick();
    const input = document.getElementById("status-message");
    if (input) {
      input.focus();
      input.select();
    }
  };
  const resetHandler = () => {
    set(emoji, "");
    set(message, "");
    set(loading, false);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    } else {
      resetHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_2$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var text_1 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var node_1 = child(div_7);
      EmojiPicker(node_1, {
        onClose: () => {
        },
        onSubmit: (name) => {
          /* @__PURE__ */ console.log(name);
          set(emoji, name);
        },
        children: ($$anchor3, $$slotProps2) => {
          var div_8 = root$1();
          var node_2 = child(div_8);
          {
            var consequent = ($$anchor4) => {
              Emoji($$anchor4, {
                get shortCode() {
                  return get(emoji);
                }
              });
            };
            var alternate = ($$anchor4) => {
              FaceSmile($$anchor4, {});
            };
            if_block(node_2, ($$render) => {
              if (get(emoji)) $$render(consequent);
              else $$render(alternate, -1);
            });
          }
          reset(div_8);
          append($$anchor3, div_8);
        },
        $$slots: { default: true }
      });
      var input_1 = sibling(node_1, 2);
      remove_input_defaults(input_1);
      var button_1 = sibling(input_1, 2);
      var node_3 = child(button_1);
      XMark(node_3, {});
      reset(button_1);
      reset(div_7);
      reset(div_5);
      var div_9 = sibling(div_5, 2);
      var button_2 = child(div_9);
      var text_2 = child(button_2);
      var node_4 = sibling(text_2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_10 = root_1$1();
          var node_5 = child(div_10);
          Spinner(node_5, {});
          reset(div_10);
          append($$anchor3, div_10);
        };
        if_block(node_4, ($$render) => {
          if (get(loading)) $$render(consequent_1);
        });
      }
      reset(button_2);
      reset(div_9);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_text(text_1, $1);
          set_class(input_1, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input_1, "placeholder", $2);
          set_class(button_2, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_2.disabled = get(loading);
          set_text(text_2, `${$3 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Set your status"))),
          () => ($i18n(), untrack(() => $i18n().t("Status"))),
          () => ($i18n(), untrack(() => $i18n().t("What's on your mind?"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input_1, () => get(message), ($$value) => set(message, $$value));
      event("click", button_1, () => {
        set(emoji, "");
        set(message, "");
      });
      event("submit", form, preventDefault(() => {
        submitHandler();
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<div><span class="relative flex size-2"><span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_1 = from_html(`<div><span class="relative flex size-2"><span class="relative inline-flex rounded-full size-2 bg-gray-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_2 = from_html(`<div class=" self-center shrink-0"><!></div>`);
var root_3 = from_html(`<button type="button"><!></button>`);
var root_4 = from_html(`<div class="mx-1"><button class="mb-1 w-full gap-2 px-2.5 py-1.5 rounded-xl bg-gray-50 dark:text-white dark:bg-gray-900/50 text-black transition text-xs flex items-center" type="button"><!> <!> <div class="self-start"><!></div></button></div>`);
var root_5 = from_html(`<div class="mx-1"><button class="mb-1 w-full px-3 py-1.5 gap-1 rounded-xl bg-gray-50 dark:text-white dark:bg-gray-900/50 text-black transition text-xs flex items-center justify-center" type="button"><div class=" self-center"><!></div> <div class=" self-center truncate"> </div></button></div>`);
var root_6 = from_html(`<div class=" flex gap-3.5 w-full p-2.5 items-center"><div class=" items-center flex shrink-0"><img class=" size-10 object-cover rounded-full" alt="profile"/></div> <div class=" flex flex-col w-full flex-1"><div class="font-medium line-clamp-1 pr-2"> </div> <div class=" flex items-center gap-2"><!></div></div></div> <!> <hr class=" border-gray-50/30 dark:border-gray-800/30 my-1.5 p-0"/>`, 1);
var root_7 = from_html(`<a href="/admin" draggable="false" class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></a>`);
var root_8 = from_html(`<button type="button" class="p-1 mr-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"><!></button>`);
var root_9 = from_html(`<div class="flex items-center w-full"><a href="/workspace" draggable="false" class="flex flex-1 rounded-xl py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class="self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg></div> <div class="self-center truncate"> </div></a> <!></div>`);
var root_10 = from_html(`<div class="flex items-center w-full"><a href="/notes" draggable="false" class="flex flex-1 rounded-xl py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class="self-center mr-3"><!></div> <div class="self-center truncate"> </div></a> <!></div>`);
var root_11 = from_html(`<div class="flex items-center w-full"><a href="/calendar" draggable="false" class="flex flex-1 rounded-xl py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class="self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path></svg></div> <div class="self-center truncate"> </div></a> <!></div>`);
var root_12 = from_html(`<div class="flex items-center w-full"><a href="/automations" draggable="false" class="flex flex-1 rounded-xl py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class="self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div> <div class="self-center truncate"> </div></a> <!></div>`);
var root_13 = from_html(`<div class="flex items-center w-full"><a href="/playground" draggable="false" class="flex flex-1 rounded-xl py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none"><div class="self-center mr-3"><!></div> <div class="self-center truncate"> </div></a> <!></div>`);
var root_14 = from_html(`<a href="https://docs.openrexpro.com" target="_blank" draggable="false" class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none" id="chat-share-button"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></a>`);
var root_15 = from_html(`<hr class=" border-gray-50/30 dark:border-gray-800/30 my-1 p-0"/> <!> <button class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none" type="button" id="chat-share-button"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></button>`, 1);
var root_16 = from_html(`<div slot="content"><div><!> <button class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none" type="button"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></button> <!> <button class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none" type="button"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></button> <hr class=" border-gray-50/30 dark:border-gray-800/30 my-1 p-0"/> <!> <!> <!> <!> <!> <!> <hr class=" border-gray-50/30 dark:border-gray-800/30 my-1 p-0"/> <button class="flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer select-none" type="button"><div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div></button></div></div>`);
var root_17 = from_html(`<!> <!> <!>`, 1);
function UserMenu($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $showShortcuts = () => store_get(showShortcuts, "$showShortcuts", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const pinnedItems = mutable_source();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let role = prop($$props, "role", 8, "");
  let profile = prop($$props, "profile", 8, false);
  let help = prop($$props, "help", 8, false);
  let className = prop($$props, "className", 8, "w-[240px]");
  let align = prop($$props, "align", 8, "end");
  prop($$props, "showActiveUsers", 8, true);
  let showUserStatusModal = mutable_source(false);
  let shiftKey = mutable_source(false);
  const dispatch = createEventDispatcher();
  const DEFAULT_PINNED_ITEMS = ["notes", "workspace"];
  const isPinned = (id) => {
    return get(pinnedItems).includes(id);
  };
  const togglePin = async (id) => {
    let updated;
    if (isPinned(id)) {
      updated = get(pinnedItems).filter((item) => item !== id);
    } else {
      updated = [...get(pinnedItems), id];
    }
    await settings.set({ ...$settings(), pinnedMenuItems: updated });
    await updateUserSettings(localStorage.token, { ui: $settings() });
  };
  const getUsageInfo = async () => {
    await getUsage(localStorage.token).catch((error) => {
      /* @__PURE__ */ console.error("Error fetching usage info:", error);
    });
  };
  const handleDropdownChange = (state) => {
    var _a, _b;
    dispatch("change", state);
    if (state && (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_public_active_users_count) || role() === "admin")) {
      getUsageInfo();
    }
  };
  legacy_pre_effect(() => $settings(), () => {
    var _a;
    set(pinnedItems, ((_a = $settings()) == null ? void 0 : _a.pinnedMenuItems) ?? DEFAULT_PINNED_ITEMS);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_17();
  event("keydown", $window, (e) => {
    if (e.key === "Shift") set(shiftKey, true);
  });
  event("keyup", $window, (e) => {
    if (e.key === "Shift") set(shiftKey, false);
  });
  var node = first_child(fragment);
  ShortcutsModal(node, {
    get show() {
      mark_store_binding();
      return $showShortcuts();
    },
    set show($$value) {
      store_set(showShortcuts, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  UserStatusModal(node_1, {
    onSave: async () => {
      user.set(await getSessionUser(localStorage.token));
    },
    get show() {
      return get(showUserStatusModal);
    },
    set show($$value) {
      set(showUserStatusModal, $$value);
    },
    $$legacy: true
  });
  var node_2 = sibling(node_1, 2);
  Dropdown(node_2, {
    onOpenChange: handleDropdownChange,
    get align() {
      return align();
    },
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      slot(node_3, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_16();
        var div_1 = child(div);
        var node_4 = child(div_1);
        {
          var consequent_3 = ($$anchor3) => {
            var fragment_2 = root_6();
            var div_2 = first_child(fragment_2);
            var div_3 = child(div_2);
            var img = child(div_3);
            reset(div_3);
            var div_4 = sibling(div_3, 2);
            var div_5 = child(div_4);
            var text$1 = child(div_5, true);
            reset(div_5);
            var div_6 = sibling(div_5, 2);
            var node_5 = child(div_6);
            {
              var consequent = ($$anchor4) => {
                var fragment_3 = root();
                var span = sibling(first_child(fragment_3), 2);
                var text_1 = child(span, true);
                reset(span);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Active")))]);
                append($$anchor4, fragment_3);
              };
              var alternate = ($$anchor4) => {
                var fragment_4 = root_1();
                var span_1 = sibling(first_child(fragment_4), 2);
                var text_2 = child(span_1, true);
                reset(span_1);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Away")))]);
                append($$anchor4, fragment_4);
              };
              if_block(node_5, ($$render) => {
                if ($user(), untrack(() => {
                  var _a;
                  return ((_a = $user()) == null ? void 0 : _a.is_active) ?? true;
                })) $$render(consequent);
                else $$render(alternate, -1);
              });
            }
            reset(div_6);
            reset(div_4);
            reset(div_2);
            var node_6 = sibling(div_2, 2);
            {
              var consequent_2 = ($$anchor4) => {
                var div_7 = root_4();
                var button = child(div_7);
                var node_7 = child(button);
                {
                  var consequent_1 = ($$anchor5) => {
                    var div_8 = root_2();
                    var node_8 = child(div_8);
                    {
                      let $0 = derived_safe_equal(() => ($user(), untrack(() => {
                        var _a;
                        return (_a = $user()) == null ? void 0 : _a.status_emoji;
                      })));
                      Emoji(node_8, {
                        className: "size-4",
                        get shortCode() {
                          return get($0);
                        }
                      });
                    }
                    reset(div_8);
                    append($$anchor5, div_8);
                  };
                  if_block(node_7, ($$render) => {
                    if ($user(), untrack(() => {
                      var _a;
                      return (_a = $user()) == null ? void 0 : _a.status_emoji;
                    })) $$render(consequent_1);
                  });
                }
                var node_9 = sibling(node_7, 2);
                {
                  let $0 = derived_safe_equal(() => ($user(), untrack(() => {
                    var _a;
                    return (_a = $user()) == null ? void 0 : _a.status_message;
                  })));
                  Tooltip(node_9, {
                    get content() {
                      return get($0);
                    },
                    className: " self-center line-clamp-2 flex-1 text-left",
                    children: ($$anchor5, $$slotProps2) => {
                      next();
                      var text_3 = text();
                      template_effect(() => set_text(text_3, ($user(), untrack(() => {
                        var _a;
                        return (_a = $user()) == null ? void 0 : _a.status_message;
                      }))));
                      append($$anchor5, text_3);
                    },
                    $$slots: { default: true }
                  });
                }
                var div_9 = sibling(node_9, 2);
                var node_10 = child(div_9);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Clear status"))));
                  Tooltip(node_10, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_1 = root_3();
                      var node_11 = child(button_1);
                      XMark(node_11, { className: "size-4 opacity-50", strokeWidth: "2" });
                      reset(button_1);
                      event("click", button_1, async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        const res = await updateUserStatus(localStorage.token, { status_emoji: "", status_message: "" });
                        if (res) {
                          toast.success($i18n().t("Status cleared successfully"));
                          user.set(await getSessionUser(localStorage.token));
                        } else {
                          toast.error($i18n().t("Failed to clear status"));
                        }
                      });
                      append($$anchor5, button_1);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_9);
                reset(button);
                reset(div_7);
                event("click", button, () => {
                  show(false);
                  set(showUserStatusModal, true);
                });
                append($$anchor4, div_7);
              };
              var alternate_1 = ($$anchor4) => {
                var div_10 = root_5();
                var button_2 = child(div_10);
                var div_11 = child(button_2);
                var node_12 = child(div_11);
                FaceSmile(node_12, { className: "size-4", strokeWidth: "1.5" });
                reset(div_11);
                var div_12 = sibling(div_11, 2);
                var text_4 = child(div_12, true);
                reset(div_12);
                reset(button_2);
                reset(div_10);
                template_effect(($0) => set_text(text_4, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Update your status")))
                ]);
                event("click", button_2, () => {
                  show(false);
                  set(showUserStatusModal, true);
                });
                append($$anchor4, div_10);
              };
              if_block(node_6, ($$render) => {
                if ($user(), untrack(() => {
                  var _a, _b;
                  return ((_a = $user()) == null ? void 0 : _a.status_emoji) || ((_b = $user()) == null ? void 0 : _b.status_message);
                })) $$render(consequent_2);
                else $$render(alternate_1, -1);
              });
            }
            next(2);
            template_effect(() => {
              set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), $user(), untrack(() => {
                var _a;
                return `${REXPRO_API_BASE_URL}/users/${(_a = $user()) == null ? void 0 : _a.id}/profile/image`;
              })));
              set_text(text$1, ($user(), untrack(() => $user().name)));
            });
            append($$anchor3, fragment_2);
          };
          if_block(node_4, ($$render) => {
            if (profile()) $$render(consequent_3);
          });
        }
        var button_3 = sibling(node_4, 2);
        var div_13 = child(button_3);
        var node_13 = child(div_13);
        Settings(node_13, { className: "w-5 h-5", strokeWidth: "1.5" });
        reset(div_13);
        var div_14 = sibling(div_13, 2);
        var text_5 = child(div_14, true);
        reset(div_14);
        reset(button_3);
        var node_14 = sibling(button_3, 2);
        {
          var consequent_4 = ($$anchor3) => {
            var a = root_7();
            var div_15 = child(a);
            var node_15 = child(div_15);
            UserGroup(node_15, { className: "w-5 h-5", strokeWidth: "1.5" });
            reset(div_15);
            var div_16 = sibling(div_15, 2);
            var text_6 = child(div_16, true);
            reset(div_16);
            reset(a);
            template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Admin Panel")))]);
            event("click", a, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) {
                return;
              }
              e.preventDefault();
              show(false);
              goto("/admin");
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, a);
          };
          if_block(node_14, ($$render) => {
            if (role() === "admin") $$render(consequent_4);
          });
        }
        var button_4 = sibling(node_14, 2);
        var div_17 = child(button_4);
        var node_16 = child(div_17);
        ArchiveBox(node_16, { className: "size-5", strokeWidth: "1.5" });
        reset(div_17);
        var div_18 = sibling(div_17, 2);
        var text_7 = child(div_18, true);
        reset(div_18);
        reset(button_4);
        var node_17 = sibling(button_4, 4);
        {
          var consequent_7 = ($$anchor3) => {
            var div_19 = root_9();
            var a_1 = child(div_19);
            var div_20 = sibling(child(a_1), 2);
            var text_8 = child(div_20, true);
            reset(div_20);
            reset(a_1);
            var node_18 = sibling(a_1, 2);
            {
              var consequent_6 = ($$anchor4) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => isPinned("workspace") ? $i18n().t("Unpin from Sidebar") : $i18n().t("Pin to Sidebar"))));
                  Tooltip($$anchor4, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_5 = root_8();
                      var node_19 = child(button_5);
                      {
                        var consequent_5 = ($$anchor6) => {
                          PinSlash($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        var d = user_derived(() => untrack(() => isPinned("workspace")));
                        var alternate_2 = ($$anchor6) => {
                          Pin($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        if_block(node_19, ($$render) => {
                          if (get(d)) $$render(consequent_5);
                          else $$render(alternate_2, -1);
                        });
                      }
                      reset(button_5);
                      event("click", button_5, preventDefault(stopPropagation(() => togglePin("workspace"))));
                      append($$anchor5, button_5);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_18, ($$render) => {
                if (get(shiftKey)) $$render(consequent_6);
              });
            }
            reset(div_19);
            template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Workspace")))]);
            event("click", a_1, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              show(false);
              goto("/workspace");
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, div_19);
          };
          if_block(node_17, ($$render) => {
            if ($user(), untrack(() => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
              return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models) || ((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.workspace) == null ? void 0 : _g.knowledge) || ((_j = (_i = (_h = $user()) == null ? void 0 : _h.permissions) == null ? void 0 : _i.workspace) == null ? void 0 : _j.prompts) || ((_m = (_l = (_k = $user()) == null ? void 0 : _k.permissions) == null ? void 0 : _l.workspace) == null ? void 0 : _m.tools);
            })) $$render(consequent_7);
          });
        }
        var node_20 = sibling(node_17, 2);
        {
          var consequent_10 = ($$anchor3) => {
            var div_21 = root_10();
            var a_2 = child(div_21);
            var div_22 = child(a_2);
            var node_21 = child(div_22);
            Note(node_21, { className: "size-5", strokeWidth: "1.5" });
            reset(div_22);
            var div_23 = sibling(div_22, 2);
            var text_9 = child(div_23, true);
            reset(div_23);
            reset(a_2);
            var node_22 = sibling(a_2, 2);
            {
              var consequent_9 = ($$anchor4) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => isPinned("notes") ? $i18n().t("Unpin from Sidebar") : $i18n().t("Pin to Sidebar"))));
                  Tooltip($$anchor4, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_6 = root_8();
                      var node_23 = child(button_6);
                      {
                        var consequent_8 = ($$anchor6) => {
                          PinSlash($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        var d_1 = user_derived(() => untrack(() => isPinned("notes")));
                        var alternate_3 = ($$anchor6) => {
                          Pin($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        if_block(node_23, ($$render) => {
                          if (get(d_1)) $$render(consequent_8);
                          else $$render(alternate_3, -1);
                        });
                      }
                      reset(button_6);
                      event("click", button_6, preventDefault(stopPropagation(() => togglePin("notes"))));
                      append($$anchor5, button_6);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_22, ($$render) => {
                if (get(shiftKey)) $$render(consequent_9);
              });
            }
            reset(div_21);
            template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Notes")))]);
            event("click", a_2, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              show(false);
              goto("/notes");
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, div_21);
          };
          if_block(node_20, ($$render) => {
            if ($config(), $user(), untrack(() => {
              var _a, _b, _c, _d, _e, _f;
              return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true));
            })) $$render(consequent_10);
          });
        }
        var node_24 = sibling(node_20, 2);
        {
          var consequent_13 = ($$anchor3) => {
            var div_24 = root_11();
            var a_3 = child(div_24);
            var div_25 = sibling(child(a_3), 2);
            var text_10 = child(div_25, true);
            reset(div_25);
            reset(a_3);
            var node_25 = sibling(a_3, 2);
            {
              var consequent_12 = ($$anchor4) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => isPinned("calendar") ? $i18n().t("Unpin from Sidebar") : $i18n().t("Pin to Sidebar"))));
                  Tooltip($$anchor4, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_7 = root_8();
                      var node_26 = child(button_7);
                      {
                        var consequent_11 = ($$anchor6) => {
                          PinSlash($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        var d_2 = user_derived(() => untrack(() => isPinned("calendar")));
                        var alternate_4 = ($$anchor6) => {
                          Pin($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        if_block(node_26, ($$render) => {
                          if (get(d_2)) $$render(consequent_11);
                          else $$render(alternate_4, -1);
                        });
                      }
                      reset(button_7);
                      event("click", button_7, preventDefault(stopPropagation(() => togglePin("calendar"))));
                      append($$anchor5, button_7);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_25, ($$render) => {
                if (get(shiftKey)) $$render(consequent_12);
              });
            }
            reset(div_24);
            template_effect(($0) => set_text(text_10, $0), [() => ($i18n(), untrack(() => $i18n().t("Calendar")))]);
            event("click", a_3, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              show(false);
              goto("/calendar");
            });
            append($$anchor3, div_24);
          };
          if_block(node_24, ($$render) => {
            if ($config(), $user(), untrack(() => {
              var _a, _b, _c, _d, _e, _f;
              return ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_calendar) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || ((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.calendar));
            })) $$render(consequent_13);
          });
        }
        var node_27 = sibling(node_24, 2);
        {
          var consequent_16 = ($$anchor3) => {
            var div_26 = root_12();
            var a_4 = child(div_26);
            var div_27 = sibling(child(a_4), 2);
            var text_11 = child(div_27, true);
            reset(div_27);
            reset(a_4);
            var node_28 = sibling(a_4, 2);
            {
              var consequent_15 = ($$anchor4) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => isPinned("automations") ? $i18n().t("Unpin from Sidebar") : $i18n().t("Pin to Sidebar"))));
                  Tooltip($$anchor4, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_8 = root_8();
                      var node_29 = child(button_8);
                      {
                        var consequent_14 = ($$anchor6) => {
                          PinSlash($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        var d_3 = user_derived(() => untrack(() => isPinned("automations")));
                        var alternate_5 = ($$anchor6) => {
                          Pin($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        if_block(node_29, ($$render) => {
                          if (get(d_3)) $$render(consequent_14);
                          else $$render(alternate_5, -1);
                        });
                      }
                      reset(button_8);
                      event("click", button_8, preventDefault(stopPropagation(() => togglePin("automations"))));
                      append($$anchor5, button_8);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_28, ($$render) => {
                if (get(shiftKey)) $$render(consequent_15);
              });
            }
            reset(div_26);
            template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("Automations")))]);
            event("click", a_4, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              show(false);
              goto("/automations");
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, div_26);
          };
          if_block(node_27, ($$render) => {
            if ($config(), $user(), untrack(() => {
              var _a, _b, _c, _d, _e, _f;
              return ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_automations) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || ((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.automations));
            })) $$render(consequent_16);
          });
        }
        var node_30 = sibling(node_27, 2);
        {
          var consequent_19 = ($$anchor3) => {
            var div_28 = root_13();
            var a_5 = child(div_28);
            var div_29 = child(a_5);
            var node_31 = child(div_29);
            Code(node_31, { className: "size-5", strokeWidth: "1.5" });
            reset(div_29);
            var div_30 = sibling(div_29, 2);
            var text_12 = child(div_30, true);
            reset(div_30);
            reset(a_5);
            var node_32 = sibling(a_5, 2);
            {
              var consequent_18 = ($$anchor4) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => isPinned("playground") ? $i18n().t("Unpin from Sidebar") : $i18n().t("Pin to Sidebar"))));
                  Tooltip($$anchor4, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var button_9 = root_8();
                      var node_33 = child(button_9);
                      {
                        var consequent_17 = ($$anchor6) => {
                          PinSlash($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        var d_4 = user_derived(() => untrack(() => isPinned("playground")));
                        var alternate_6 = ($$anchor6) => {
                          Pin($$anchor6, { className: "size-3.5", strokeWidth: "1.5" });
                        };
                        if_block(node_33, ($$render) => {
                          if (get(d_4)) $$render(consequent_17);
                          else $$render(alternate_6, -1);
                        });
                      }
                      reset(button_9);
                      event("click", button_9, preventDefault(stopPropagation(() => togglePin("playground"))));
                      append($$anchor5, button_9);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              if_block(node_32, ($$render) => {
                if (get(shiftKey)) $$render(consequent_18);
              });
            }
            reset(div_28);
            template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Playground")))]);
            event("click", a_5, async (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              show(false);
              goto("/playground");
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, div_28);
          };
          if_block(node_30, ($$render) => {
            if (role() === "admin") $$render(consequent_19);
          });
        }
        var node_34 = sibling(node_30, 2);
        {
          var consequent_21 = ($$anchor3) => {
            var fragment_21 = root_15();
            var node_35 = sibling(first_child(fragment_21), 2);
            {
              var consequent_20 = ($$anchor4) => {
                var a_6 = root_14();
                var div_31 = child(a_6);
                var node_36 = child(div_31);
                QuestionMarkCircle(node_36, { className: "size-5" });
                reset(div_31);
                var div_32 = sibling(div_31, 2);
                var text_13 = child(div_32, true);
                reset(div_32);
                reset(a_6);
                template_effect(($0) => set_text(text_13, $0), [() => ($i18n(), untrack(() => $i18n().t("Documentation")))]);
                event("click", a_6, () => {
                  show(false);
                });
                append($$anchor4, a_6);
              };
              if_block(node_35, ($$render) => {
                if ($user(), untrack(() => {
                  var _a;
                  return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
                })) $$render(consequent_20);
              });
            }
            var button_10 = sibling(node_35, 2);
            var div_33 = child(button_10);
            var node_37 = child(div_33);
            Keyboard(node_37, { className: "size-5" });
            reset(div_33);
            var div_34 = sibling(div_33, 2);
            var text_14 = child(div_34, true);
            reset(div_34);
            reset(button_10);
            template_effect(($0) => set_text(text_14, $0), [
              () => ($i18n(), untrack(() => $i18n().t("Keyboard shortcuts")))
            ]);
            event("click", button_10, async () => {
              show(false);
              showShortcuts.set(!$showShortcuts());
              if ($mobile()) {
                await tick();
                showSidebar.set(false);
              }
            });
            append($$anchor3, fragment_21);
          };
          if_block(node_34, ($$render) => {
            if (help()) $$render(consequent_21);
          });
        }
        var button_11 = sibling(node_34, 4);
        var div_35 = child(button_11);
        var node_38 = child(div_35);
        SignOut(node_38, { className: "w-5 h-5", strokeWidth: "1.5" });
        reset(div_35);
        var div_36 = sibling(div_35, 2);
        var text_15 = child(div_36, true);
        reset(div_36);
        reset(button_11);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1, $2) => {
            set_class(div_1, 1, `${className() ?? ""} rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg text-sm`);
            set_text(text_5, $0);
            set_text(text_7, $1);
            set_text(text_15, $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Settings"))),
            () => ($i18n(), untrack(() => $i18n().t("Archived Chats"))),
            () => ($i18n(), untrack(() => $i18n().t("Sign Out")))
          ]
        );
        event("click", button_3, async () => {
          show(false);
          await showSettings.set(true);
          if ($mobile()) {
            await tick();
            showSidebar.set(false);
          }
        });
        event("click", button_4, async () => {
          show(false);
          dispatch("show", "archived-chat");
          if ($mobile()) {
            await tick();
            showSidebar.set(false);
          }
        });
        event("click", button_11, async () => {
          const res = await userSignOut();
          user.set(null);
          localStorage.removeItem("token");
          location.href = (res == null ? void 0 : res.redirect_url) ?? "/auth";
          show(false);
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Code as C,
  Shortcut as S,
  UserMenu as U,
  shortcuts as s
};
