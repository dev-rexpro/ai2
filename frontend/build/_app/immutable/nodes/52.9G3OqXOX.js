import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, l as legacy_pre_effect, n as legacy_pre_effect_reset, g as comment, h as first_child, a as append, b as pop, s as setup_stores, k as get, C as deferred_template_effect, q as mutable_source, e as store_get, w as set, A as tick, u as untrack, $ as $document, aV as mutate, c as child, r as reset, z as sibling, t as template_effect, m as deep_read_state, d as set_text, y as event, f as from_html, x as derived_safe_equal } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { a as set_class, s as set_attribute } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { d as dayjs2 } from "../chunks/BeGenu0j.js";
import { s as settings, m as models, g as chatId, R as REXPRO_NAME, c as config } from "../chunks/BJ3rUC-5.js";
import { h as createMessagesList, i as convertMessagesToHistory } from "../chunks/X0cYWxFO.js";
import { g as getChatByShareId, c as cloneSharedChatById } from "../chunks/DwAGGfMc.js";
import { M as Messages } from "../chunks/ChRx1Fkl.js";
import { a as getUserSettings, g as getUserInfoById } from "../chunks/CP40r8ux.js";
import { g as getModels } from "../chunks/CwXWgxvI.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { l as localizedFormat } from "../chunks/Ce8_hHpJ.js";
var root = from_html(`<div class="h-screen max-h-[100dvh] w-full flex flex-col text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900"><div class="flex flex-col flex-auto justify-center relative"><div class=" flex flex-col w-full flex-auto overflow-auto h-0" id="messages-container"><div><div class="px-3"><h1 class=" text-2xl font-medium line-clamp-1 m-0"> </h1> <div class="flex text-sm justify-between items-center mt-1"><time class="text-gray-400"> </time></div></div></div> <div class=" h-full w-full flex flex-col py-2" role="main"><div class="w-full"><!></div></div></div> <div class="absolute bottom-0 right-0 left-0 flex justify-center w-full bg-linear-to-b from-transparent to-white dark:to-gray-900"><div class="pb-5"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div></div></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(localizedFormat);
  let loaded = mutable_source(false);
  let autoScroll = mutable_source(true);
  let processing = "";
  let selectedModels = mutable_source([""]);
  let chat = mutable_source(null);
  let user = mutable_source(null);
  let title = mutable_source("");
  let files = [];
  let messages = mutable_source([]);
  let history = mutable_source({ messages: {}, currentId: null });
  const loadSharedChat = async () => {
    var _a, _b, _c, _d, _e, _f;
    const userSettings = await getUserSettings(localStorage.token).catch((error) => {
      /* @__PURE__ */ console.error(error);
      return null;
    });
    if (userSettings) {
      settings.set(userSettings.ui);
    } else {
      let localStorageSettings = {};
      try {
        localStorageSettings = JSON.parse(localStorage.getItem("settings") ?? "{}");
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to parse settings from localStorage", e);
      }
      settings.set(localStorageSettings);
    }
    await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
    await chatId.set($page().params.id);
    set(chat, await getChatByShareId(localStorage.token, $chatId()).catch(async (error) => {
      await goto("/");
      return null;
    }));
    if (get(chat)) {
      set(user, await getUserInfoById(localStorage.token, get(chat).user_id).catch((error) => {
        /* @__PURE__ */ console.error(error);
        return null;
      }));
      const chatContent = get(chat).chat;
      if (chatContent) {
        /* @__PURE__ */ console.log(chatContent);
        set(selectedModels, ((chatContent == null ? void 0 : chatContent.models) ?? void 0) !== void 0 ? chatContent.models : [chatContent.models ?? ""]);
        set(history, ((chatContent == null ? void 0 : chatContent.history) ?? void 0) !== void 0 ? chatContent.history : convertMessagesToHistory(chatContent.messages));
        set(title, chatContent.title);
        set(autoScroll, true);
        await tick();
        if (get(messages).length > 0 && ((_d = get(messages).at(-1)) == null ? void 0 : _d.id) && ((_e = get(messages).at(-1)) == null ? void 0 : _e.id) in get(history).messages) {
          mutate(history, get(history).messages[(_f = get(messages).at(-1)) == null ? void 0 : _f.id].done = true);
        }
        await tick();
        return true;
      } else {
        return null;
      }
    }
  };
  const cloneSharedChat = async () => {
    if (!get(chat)) return;
    const res = await cloneSharedChatById(localStorage.token, get(chat).id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      goto(`/c/${res.id}`);
    }
  };
  legacy_pre_effect(() => get(history), () => {
    set(messages, createMessagesList(get(history), get(history).currentId));
  });
  legacy_pre_effect(() => ($page(), goto), () => {
    if ($page().params.id) {
      (async () => {
        if (await loadSharedChat()) {
          await tick();
          set(loaded, true);
        } else {
          await goto("/");
        }
      })();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("hrl0ku", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""}
	`;
      },
      [
        () => (get(title), $REXPRO_NAME(), untrack(() => get(title) ? `${get(title).length > 30 ? `${get(title).slice(0, 30)}...` : get(title)} • ${$REXPRO_NAME()}` : `${$REXPRO_NAME()}`))
      ]
    );
  });
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var h1 = child(div_4);
      var text = child(h1, true);
      reset(h1);
      var div_5 = sibling(h1, 2);
      var time = child(div_5);
      var text_1 = child(time, true);
      reset(time);
      reset(div_5);
      reset(div_4);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var div_7 = child(div_6);
      var node_1 = child(div_7);
      {
        let $0 = derived_safe_equal(() => untrack(() => files.length > 0));
        Messages(node_1, {
          className: "h-full flex pt-4 pb-8 ",
          get user() {
            return get(user);
          },
          get chatId() {
            return $chatId();
          },
          readOnly: true,
          get selectedModels() {
            return get(selectedModels);
          },
          processing,
          get bottomPadding() {
            return get($0);
          },
          sendMessage: () => {
          },
          continueResponse: () => {
          },
          regenerateResponse: () => {
          },
          get history() {
            return get(history);
          },
          set history($$value) {
            set(history, $$value);
          },
          get messages() {
            return get(messages);
          },
          set messages($$value) {
            set(messages, $$value);
          },
          get autoScroll() {
            return get(autoScroll);
          },
          set autoScroll($$value) {
            set(autoScroll, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_7);
      reset(div_6);
      reset(div_2);
      var div_8 = sibling(div_2, 2);
      var div_9 = child(div_8);
      var button = child(div_9);
      var text_2 = child(button, true);
      reset(button);
      reset(div_9);
      reset(div_8);
      reset(div_1);
      reset(div);
      template_effect(
        ($0, $1, $2) => {
          set_class(div_3, 1, `pt-5 px-2 w-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.widescreenMode) ?? null ? "max-w-full" : "max-w-5xl";
          })) ?? ""} mx-auto`);
          set_text(text, get(title));
          set_attribute(time, "datetime", $0);
          set_text(text_1, $1);
          set_text(text_2, $2);
        },
        [
          () => (get(chat), untrack(() => {
            var _a, _b;
            return new Date(((_b = (_a = get(chat)) == null ? void 0 : _a.chat) == null ? void 0 : _b.timestamp) || Date.now()).toISOString();
          })),
          () => (deep_read_state(dayjs2), get(chat), untrack(() => dayjs2(get(chat).chat.timestamp).format("LLL"))),
          () => ($i18n(), untrack(() => $i18n().t("Clone Chat")))
        ]
      );
      event("click", button, cloneSharedChat);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
