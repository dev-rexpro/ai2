import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, l as legacy_pre_effect, k as get, n as legacy_pre_effect_reset, c as child, z as sibling, r as reset, t as template_effect, u as untrack, d as set_text, y as event, w as set, a as append, g as comment, h as first_child, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html, o as onMount, m as deep_read_state, aW as text, v as user_derived, A as tick, aV as mutate } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { k as key } from "./BQGcmJDz.js";
import { e as each, i as index } from "./qTQza25_.js";
import { s as slot } from "./zXynQJya.js";
import { a as set_class, s as set_attribute } from "./B9yCN616.js";
import { c as bind_files } from "./CgeA63xA.js";
import { b as bind_prop } from "./CoY6LkZW.js";
import { b as bind_this } from "./BSYzg88z.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { t as toast } from "./B4Bn1xMI.js";
import { i as channels, m as models, c as config, s as settings, a as mobile } from "./BJ3rUC-5.js";
import { b as getUserPosition, t as getAge, u as getFormattedDate, w as getFormattedTime, x as getCurrentDateTime, y as getUserTimezone, z as getWeekday, A as extractInputVariables, B as convertHeicToJpeg, C as compressImage, v as v4, D as extractCurlyBraceWords } from "./X0cYWxFO.js";
import { g as getSessionUser } from "./C3caEY6s.js";
import { u as uploadFile } from "./BipwcWe2.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { C as Clip, a as Camera, g as getSuggestionRenderer, I as InputVariablesModal, b as CommandSuggestionList, R as RichTextInput } from "./Bv1TNWY0.js";
import { D as Dropdown } from "./8Pg1zo_Z.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { V as VoiceRecording } from "./Bsdbht5u.js";
import { F as FileItem } from "./DDFjerJA.js";
import { I as Image } from "./DR1P1jn4.js";
import { F as FilesOverlay } from "./P-zj8Fyt.js";
import { H as Hashtag, L as Lock } from "./DhMHj2hq.js";
import { s as searchUsers } from "./CP40r8ux.js";
import { S as Skeleton } from "./BO25qH0B.js";
import { X as XMark } from "./DAqPThR3.js";
var root$2 = from_html(`<div slot="content"><div class="w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-999 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition"><button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl" type="button"><!> <div class="line-clamp-1"> </div></button> <button class="select-none flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl" type="button"><!> <div class=" line-clamp-1"> </div></button></div></div>`);
function InputMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let screenCaptureHandler = prop($$props, "screenCaptureHandler", 8);
  let uploadFilesHandler = prop($$props, "uploadFilesHandler", 8);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  const init$1 = async () => {
  };
  legacy_pre_effect(() => get(show), () => {
    if (get(show)) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root$2();
        var div_1 = child(div);
        var button = child(div_1);
        var node_1 = child(button);
        Clip(node_1, {});
        var div_2 = sibling(node_1, 2);
        var text2 = child(div_2, true);
        reset(div_2);
        reset(button);
        var button_1 = sibling(button, 2);
        var node_2 = child(button_1);
        Camera(node_2, {});
        var div_3 = sibling(node_2, 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_1);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1) => {
            set_text(text2, $0);
            set_text(text_1, $1);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Upload Files"))),
            () => ($i18n(), untrack(() => $i18n().t("Capture")))
          ]
        );
        event("click", button, () => {
          uploadFilesHandler()();
          set(show, false);
        });
        event("click", button_1, () => {
          screenCaptureHandler()();
          set(show, false);
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="px-2 text-xs text-gray-500 py-1"><!></div>`);
var root_1$1 = from_html(`<div class=" size-4 justify-center flex items-center mr-0.5"><!></div>`);
var root_2$1 = from_html(`<img class="rounded-full size-5 items-center mr-2"/>`);
var root_3$1 = from_html(`<button type="button"><!> <div class="truncate flex-1 pr-2"> </div> <div class="shrink-0 text-xs text-gray-500"><!></div></button>`);
var root_4$1 = from_html(`<!> <!>`, 1);
var root_5$1 = from_html(`<div class="mention-list text-black dark:text-white rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-72 p-1" id="suggestions-container"><div class="overflow-y-auto scrollbar-thin max-h-60"></div></div>`);
function MentionList($$anchor, $$props) {
  push($$props, false);
  const $channels = () => store_get(channels, "$channels", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const filteredItems = mutable_source();
  const i18n = getContext("i18n");
  let query = prop($$props, "query", 8, "");
  let command = prop($$props, "command", 8);
  let selectedIndex = prop($$props, "selectedIndex", 12, 0);
  prop($$props, "label", 8, "");
  prop($$props, "triggerChar", 8, "@");
  let modelSuggestions = prop($$props, "modelSuggestions", 8, false);
  let userSuggestions = prop($$props, "userSuggestions", 8, false);
  let channelSuggestions = prop($$props, "channelSuggestions", 8, false);
  let _models = mutable_source([]);
  let _users = mutable_source([]);
  let _channels = mutable_source([]);
  const getUserList = async () => {
    const res = await searchUsers(localStorage.token, query()).catch((error) => {
      /* @__PURE__ */ console.error("Error searching users:", error);
      return null;
    });
    if (res) {
      set(_users, [
        ...res.users.map((u) => ({ type: "user", id: u.id, label: u.name }))
      ].sort((a, b) => a.label.localeCompare(b.label)));
    }
  };
  const select = (index2) => {
    const item = get(filteredItems)[index2];
    if (!item) return;
    if (item) command()({
      id: `${item.type === "user" ? "U" : item.type === "model" ? "M" : "C"}:${item.id}|${item.label}`,
      label: item.label
    });
  };
  const onKeyDown = (event2) => {
    if (!["ArrowUp", "ArrowDown", "Enter", "Tab", "Escape"].includes(event2.key)) return false;
    if (event2.key === "ArrowUp") {
      selectedIndex(Math.max(0, selectedIndex() - 1));
      const item = document.querySelector(`[data-selected="true"]`);
      item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      return true;
    }
    if (event2.key === "ArrowDown") {
      selectedIndex(Math.min(selectedIndex() + 1, get(filteredItems).length - 1));
      const item = document.querySelector(`[data-selected="true"]`);
      item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      return true;
    }
    if (event2.key === "Enter" || event2.key === "Tab") {
      select(selectedIndex());
      if (event2.key === "Enter") {
        event2.preventDefault();
      }
      return true;
    }
    if (event2.key === "Escape") {
      return true;
    }
    return false;
  };
  function _onKeyDown(event2) {
    return onKeyDown(event2);
  }
  onMount(() => {
    const keydownListener = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        select(selectedIndex());
      }
    };
    window.addEventListener("keydown", keydownListener);
    if (channelSuggestions()) {
      set(_channels, [
        ...$channels().filter((c) => (c == null ? void 0 : c.type) !== "dm").map((c) => ({ type: "channel", id: c.id, label: c.name, data: c }))
      ]);
    } else {
      if (userSuggestions()) {
        getUserList();
      }
      if (modelSuggestions()) {
        set(_models, [
          ...$models().filter((m) => !(m == null ? void 0 : m.direct)).map((m) => ({ type: "model", id: m.id, label: m.name, data: m }))
        ]);
      }
    }
    return () => {
      window.removeEventListener("keydown", keydownListener);
    };
  });
  const hasPublicReadGrant = (grants) => Array.isArray(grants) && grants.some((grant) => (grant == null ? void 0 : grant.principal_type) === "user" && (grant == null ? void 0 : grant.principal_id) === "*" && (grant == null ? void 0 : grant.permission) === "read");
  const isPublicChannel = (channel) => {
    if ((channel == null ? void 0 : channel.type) === "group") {
      if (typeof (channel == null ? void 0 : channel.is_private) === "boolean") {
        return !channel.is_private;
      }
      return hasPublicReadGrant(channel == null ? void 0 : channel.access_grants);
    }
    return hasPublicReadGrant(channel == null ? void 0 : channel.access_grants);
  };
  legacy_pre_effect(
    () => (get(_users), get(_models), get(_channels), deep_read_state(query())),
    () => {
      set(filteredItems, [...get(_users), ...get(_models), ...get(_channels)].filter((u) => u.label.toLowerCase().includes(query().toLowerCase()) || u.id.toLowerCase().includes(query().toLowerCase())));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(query()), deep_read_state(userSuggestions())),
    () => {
      if (query() !== null && userSuggestions()) {
        getUserList();
      }
    }
  );
  legacy_pre_effect_reset();
  var $$exports = { _onKeyDown };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_11 = ($$anchor2) => {
      var div = root_5$1();
      var div_1 = child(div);
      each(div_1, 5, () => get(filteredItems), index, ($$anchor3, item, i) => {
        var fragment_1 = root_4$1();
        var node_1 = first_child(fragment_1);
        {
          var consequent_3 = ($$anchor4) => {
            var div_2 = root$1();
            var node_2 = child(div_2);
            {
              var consequent = ($$anchor5) => {
                var text$1 = text();
                template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Users")))]);
                append($$anchor5, text$1);
              };
              var consequent_1 = ($$anchor5) => {
                var text_1 = text();
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Models")))]);
                append($$anchor5, text_1);
              };
              var consequent_2 = ($$anchor5) => {
                var text_2 = text();
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Channels")))]);
                append($$anchor5, text_2);
              };
              if_block(node_2, ($$render) => {
                if (get(item), untrack(() => {
                  var _a;
                  return ((_a = get(item)) == null ? void 0 : _a.type) === "user";
                })) $$render(consequent);
                else if (get(item), untrack(() => {
                  var _a;
                  return ((_a = get(item)) == null ? void 0 : _a.type) === "model";
                })) $$render(consequent_1, 1);
                else if (get(item), untrack(() => {
                  var _a;
                  return ((_a = get(item)) == null ? void 0 : _a.type) === "channel";
                })) $$render(consequent_2, 2);
              });
            }
            reset(div_2);
            append($$anchor4, div_2);
          };
          if_block(node_1, ($$render) => {
            if (get(item), get(filteredItems), untrack(() => {
              var _a, _b;
              return i === 0 || ((_a = get(item)) == null ? void 0 : _a.type) !== ((_b = get(filteredItems)[i - 1]) == null ? void 0 : _b.type);
            })) $$render(consequent_3);
          });
        }
        var node_3 = sibling(node_1, 2);
        {
          let $0 = derived_safe_equal(() => (get(item), untrack(() => {
            var _a;
            return (_a = get(item)) == null ? void 0 : _a.id;
          })));
          Tooltip(node_3, {
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var button = root_3$1();
              var node_4 = child(button);
              {
                var consequent_5 = ($$anchor5) => {
                  var div_3 = root_1$1();
                  var node_5 = child(div_3);
                  {
                    var consequent_4 = ($$anchor6) => {
                      Hashtag($$anchor6, { className: "size-3", strokeWidth: "2.5" });
                    };
                    var d = user_derived(() => (get(item), untrack(() => {
                      var _a;
                      return isPublicChannel((_a = get(item)) == null ? void 0 : _a.data);
                    })));
                    var alternate = ($$anchor6) => {
                      Lock($$anchor6, { className: "size-[15px]", strokeWidth: "2" });
                    };
                    if_block(node_5, ($$render) => {
                      if (get(d)) $$render(consequent_4);
                      else $$render(alternate, -1);
                    });
                  }
                  reset(div_3);
                  append($$anchor5, div_3);
                };
                var consequent_6 = ($$anchor5) => {
                  var img = root_2$1();
                  template_effect(() => {
                    set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(item), $i18n(), untrack(() => `${REXPRO_API_BASE_URL}/models/model/profile/image?id=${get(item).id}&lang=${$i18n().language}`)));
                    set_attribute(img, "alt", (get(item), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = get(item)) == null ? void 0 : _a.data) == null ? void 0 : _b.name) ?? get(item).id;
                    })));
                  });
                  event("error", img, (e) => {
                    e.currentTarget.src = "/favicon.png";
                  });
                  append($$anchor5, img);
                };
                var consequent_7 = ($$anchor5) => {
                  var img_1 = root_2$1();
                  template_effect(() => {
                    set_attribute(img_1, "src", (deep_read_state(REXPRO_API_BASE_URL), get(item), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(item).id}/profile/image`)));
                    set_attribute(img_1, "alt", (get(item), untrack(() => {
                      var _a;
                      return ((_a = get(item)) == null ? void 0 : _a.label) ?? get(item).id;
                    })));
                  });
                  event("error", img_1, (e) => {
                    e.currentTarget.src = "/favicon.png";
                  });
                  append($$anchor5, img_1);
                };
                if_block(node_4, ($$render) => {
                  if (get(item), untrack(() => get(item).type === "channel")) $$render(consequent_5);
                  else if (get(item), untrack(() => get(item).type === "model")) $$render(consequent_6, 1);
                  else if (get(item), untrack(() => get(item).type === "user")) $$render(consequent_7, 2);
                });
              }
              var div_4 = sibling(node_4, 2);
              var text_3 = child(div_4, true);
              reset(div_4);
              var div_5 = sibling(div_4, 2);
              var node_6 = child(div_5);
              {
                var consequent_8 = ($$anchor5) => {
                  var text_4 = text();
                  template_effect(($02) => set_text(text_4, $02), [() => ($i18n(), untrack(() => $i18n().t("User")))]);
                  append($$anchor5, text_4);
                };
                var consequent_9 = ($$anchor5) => {
                  var text_5 = text();
                  template_effect(($02) => set_text(text_5, $02), [() => ($i18n(), untrack(() => $i18n().t("Model")))]);
                  append($$anchor5, text_5);
                };
                var consequent_10 = ($$anchor5) => {
                  var text_6 = text();
                  template_effect(($02) => set_text(text_6, $02), [() => ($i18n(), untrack(() => $i18n().t("Channel")))]);
                  append($$anchor5, text_6);
                };
                if_block(node_6, ($$render) => {
                  if (get(item), untrack(() => get(item).type === "user")) $$render(consequent_8);
                  else if (get(item), untrack(() => get(item).type === "model")) $$render(consequent_9, 1);
                  else if (get(item), untrack(() => get(item).type === "channel")) $$render(consequent_10, 2);
                });
              }
              reset(div_5);
              reset(button);
              template_effect(() => {
                set_class(button, 1, `flex items-center justify-between px-2.5 py-1.5 rounded-xl w-full text-left ${i === selectedIndex() ? "bg-gray-50 dark:bg-gray-800 selected-command-option-button" : ""}`);
                set_attribute(button, "data-selected", i === selectedIndex());
                set_text(text_3, (get(item), untrack(() => get(item).label)));
              });
              event("click", button, () => select(i));
              event("mousemove", button, () => {
                selectedIndex(i);
              });
              append($$anchor4, button);
            },
            $$slots: { default: true }
          });
        }
        append($$anchor3, fragment_1);
      });
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(filteredItems), untrack(() => get(filteredItems).length)) $$render(consequent_11);
    });
  }
  append($$anchor, fragment);
  bind_prop($$props, "_onKeyDown", _onKeyDown);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root = from_html(`<input type="file" hidden="" multiple=""/>`);
var root_1 = from_html(`<div class=" absolute -top-12 left-0 right-0 flex justify-center z-30 pointer-events-none"><button class=" bg-white border border-gray-100 dark:border-none dark:bg-white/20 p-1.5 rounded-full pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd"></path></svg></button></div>`);
var root_2 = from_html(`<div><div class=" text-xs px-1 mt-1.5 flex items-center gap-1.5"><!> <div><span class=" font-normal text-black dark:text-white"> </span> </div></div></div>`);
var root_3 = from_html(`<div class="px-3 pt-3 text-left w-full flex flex-col z-10"><div class="flex items-center justify-between w-full"><div class="pl-[1px] flex items-center gap-2 text-sm"><div class="translate-y-[0.5px]"><span> </span></div></div> <div><button class="flex items-center dark:text-gray-500"><!></button></div></div></div>`);
var root_4 = from_html(`<div class=" relative group"><div class="relative"><!></div> <div class=" absolute -top-1 -right-1"><button class=" bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_5 = from_html(`<div class="mx-2 mt-2.5 -mb-1 flex flex-wrap gap-2"></div>`);
var root_6 = from_html(`<button id="input-menu-button" class="bg-transparent hover:bg-white/80 text-gray-800 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-1.5 outline-hidden focus:outline-hidden" type="button" aria-label="More"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path></svg></button>`);
var root_7 = from_html(`<button id="voice-input-button" class=" text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition rounded-full p-1.5 mr-0.5 self-center" type="button" aria-label="Voice Input"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 translate-y-[0.5px]"><path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z"></path><path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z"></path></svg></button>`);
var root_8 = from_html(`<button class="bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z" clip-rule="evenodd"></path></svg></button>`);
var root_9 = from_html(`<div class=" flex items-center"><!></div>`);
var root_10 = from_html(`<button id="send-message-button" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button>`);
var root_11 = from_html(`<form class="w-full flex gap-1.5"><div id="message-input-container" class="flex-1 flex flex-col relative w-full shadow-lg rounded-3xl border border-gray-50 dark:border-gray-850/30 hover:border-gray-100 focus-within:border-gray-100 hover:dark:border-gray-800 focus-within:dark:border-gray-800 transition px-1 bg-white/90 dark:bg-gray-400/5 dark:text-gray-100"><!> <!> <div class="px-2.5"><div class="scrollbar-hidden rtl:text-right ltr:text-left bg-transparent dark:text-gray-100 outline-hidden w-full pt-2.5 pb-[5px] px-1 resize-none h-fit max-h-96 overflow-auto"><!></div></div> <div class=" flex justify-between mb-2.5 mx-0.5"><div class="ml-1 self-end flex space-x-1 flex-1"><!></div> <div class="self-end flex space-x-1 mr-1"><!> <div class=" flex items-center"><!></div></div></div></div></form>`);
var root_12 = from_html(`<!> <!> <!> <div class="bg-transparent"><div class="max-w-full mx-auto inset-x-0 relative"><div class="absolute top-0 left-0 right-0 mx-auto inset-x-0 bg-transparent flex justify-center"><div class="flex flex-col px-3 w-full"><div class="relative"><!></div> <!></div></div> <div><!></div></div></div>`, 1);
function MessageInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Type here..."));
  let chatInputElement = prop($$props, "chatInputElement", 12);
  prop($$props, "id", 8, null);
  let channel = prop($$props, "channel", 8, null);
  let typingUsers = prop($$props, "typingUsers", 24, () => []);
  let inputLoading = prop($$props, "inputLoading", 8, false);
  let onSubmit = prop($$props, "onSubmit", 8, (e) => {
  });
  let onChange = prop($$props, "onChange", 8, (e) => {
  });
  let onStop = prop($$props, "onStop", 8, (e) => {
  });
  let scrollEnd = prop($$props, "scrollEnd", 12, true);
  let scrollToBottom = prop($$props, "scrollToBottom", 8, () => {
  });
  let disabled = prop($$props, "disabled", 8, false);
  let acceptFiles = prop($$props, "acceptFiles", 8, true);
  prop($$props, "showFormattingToolbar", 8, true);
  let userSuggestions = prop($$props, "userSuggestions", 8, false);
  let channelSuggestions = prop($$props, "channelSuggestions", 8, false);
  let replyToMessage = prop($$props, "replyToMessage", 12, null);
  let typingUsersClassName = prop($$props, "typingUsersClassName", 8, "from-white dark:from-gray-900");
  let loaded = mutable_source(false);
  let draggedOver = mutable_source(false);
  let recording = mutable_source(false);
  let content = mutable_source("");
  let files = mutable_source([]);
  let filesInputElement = mutable_source();
  let inputFiles = mutable_source();
  let showInputVariablesModal = mutable_source(false);
  let inputVariablesModalCallback = mutable_source();
  let inputVariables = mutable_source({});
  let inputVariableValues = {};
  const inputVariableHandler = async (text2) => {
    set(inputVariables, extractInputVariables(text2));
    if (Object.keys(get(inputVariables)).length === 0) {
      return text2;
    }
    set(showInputVariablesModal, true);
    return await new Promise((resolve) => {
      set(inputVariablesModalCallback, (variableValues) => {
        inputVariableValues = { ...inputVariableValues, ...variableValues };
        replaceVariables(inputVariableValues);
        set(showInputVariablesModal, false);
        resolve(text2);
      });
    });
  };
  const textVariableHandler = async (text2) => {
    if (text2.includes("{{CLIPBOARD}}")) {
      const clipboardText = await navigator.clipboard.readText().catch((err) => {
        toast.error($i18n().t("Failed to read clipboard contents"));
        return "{{CLIPBOARD}}";
      });
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        for (const type of item.types) {
          if (type.startsWith("image/")) {
            const blob = await item.getType(type);
            const file = new File([blob], `clipboard-image.${type.split("/")[1]}`, { type });
            inputFilesHandler([file]);
          }
        }
      }
      text2 = text2.replaceAll("{{CLIPBOARD}}", clipboardText.replaceAll("\r\n", "\n"));
    }
    if (text2.includes("{{USER_LOCATION}}")) {
      let location;
      try {
        location = await getUserPosition();
      } catch (error) {
        toast.error($i18n().t("Location access not allowed"));
        location = "LOCATION_UNKNOWN";
      }
      text2 = text2.replaceAll("{{USER_LOCATION}}", String(location));
    }
    const sessionUser = await getSessionUser(localStorage.token);
    if (text2.includes("{{USER_NAME}}")) {
      const name = (sessionUser == null ? void 0 : sessionUser.name) || "User";
      text2 = text2.replaceAll("{{USER_NAME}}", name);
    }
    if (text2.includes("{{USER_EMAIL}}")) {
      const email = (sessionUser == null ? void 0 : sessionUser.email) || "";
      if (email) {
        text2 = text2.replaceAll("{{USER_EMAIL}}", email);
      }
    }
    if (text2.includes("{{USER_BIO}}")) {
      const bio = (sessionUser == null ? void 0 : sessionUser.bio) || "";
      if (bio) {
        text2 = text2.replaceAll("{{USER_BIO}}", bio);
      }
    }
    if (text2.includes("{{USER_GENDER}}")) {
      const gender = (sessionUser == null ? void 0 : sessionUser.gender) || "";
      if (gender) {
        text2 = text2.replaceAll("{{USER_GENDER}}", gender);
      }
    }
    if (text2.includes("{{USER_BIRTH_DATE}}")) {
      const birthDate = (sessionUser == null ? void 0 : sessionUser.date_of_birth) || "";
      if (birthDate) {
        text2 = text2.replaceAll("{{USER_BIRTH_DATE}}", birthDate);
      }
    }
    if (text2.includes("{{USER_AGE}}")) {
      const birthDate = (sessionUser == null ? void 0 : sessionUser.date_of_birth) || "";
      if (birthDate) {
        const age = getAge(birthDate);
        text2 = text2.replaceAll("{{USER_AGE}}", age);
      }
    }
    if (text2.includes("{{USER_LANGUAGE}}")) {
      const language = localStorage.getItem("locale") || "en-US";
      text2 = text2.replaceAll("{{USER_LANGUAGE}}", language);
    }
    if (text2.includes("{{CURRENT_DATE}}")) {
      const date = getFormattedDate();
      text2 = text2.replaceAll("{{CURRENT_DATE}}", date);
    }
    if (text2.includes("{{CURRENT_TIME}}")) {
      const time = getFormattedTime();
      text2 = text2.replaceAll("{{CURRENT_TIME}}", time);
    }
    if (text2.includes("{{CURRENT_DATETIME}}")) {
      const dateTime = getCurrentDateTime();
      text2 = text2.replaceAll("{{CURRENT_DATETIME}}", dateTime);
    }
    if (text2.includes("{{CURRENT_TIMEZONE}}")) {
      const timezone = getUserTimezone();
      text2 = text2.replaceAll("{{CURRENT_TIMEZONE}}", timezone);
    }
    if (text2.includes("{{CURRENT_WEEKDAY}}")) {
      const weekday = getWeekday();
      text2 = text2.replaceAll("{{CURRENT_WEEKDAY}}", weekday);
    }
    return text2;
  };
  const replaceVariables = (variables) => {
    /* @__PURE__ */ console.log("Replacing variables:", variables);
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
      chatInputElement().replaceVariables(variables);
      chatInputElement().focus();
    }
  };
  const setText = async (text2, cb) => {
    var _a, _b;
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
      if (text2 !== "") {
        text2 = await textVariableHandler(text2 || "");
      }
      (_a = chatInputElement()) == null ? void 0 : _a.setText(text2);
      (_b = chatInputElement()) == null ? void 0 : _b.focus();
      if (text2 !== "") {
        text2 = await inputVariableHandler(text2);
      }
      await tick();
      if (cb) await cb(text2);
    }
  };
  const getCommand = () => {
    var _a;
    const chatInput = document.getElementById("chat-input");
    let word = "";
    if (chatInput) {
      word = (_a = chatInputElement()) == null ? void 0 : _a.getWordAtDocPos();
    }
    return word;
  };
  const replaceCommandWithText = (text2) => {
    var _a;
    const chatInput = document.getElementById("chat-input");
    if (!chatInput) return;
    (_a = chatInputElement()) == null ? void 0 : _a.replaceCommandWithText(text2);
  };
  const insertTextAtCursor = async (text2) => {
    var _a;
    const chatInput = document.getElementById("chat-input");
    if (!chatInput) return;
    text2 = await textVariableHandler(text2);
    if (get(command)) {
      replaceCommandWithText(text2);
    } else {
      (_a = chatInputElement()) == null ? void 0 : _a.insertContent(text2);
    }
    await tick();
    text2 = await inputVariableHandler(text2);
    await tick();
    const chatInputContainer = document.getElementById("chat-input-container");
    if (chatInputContainer) {
      chatInputContainer.scrollTop = chatInputContainer.scrollHeight;
    }
    await tick();
    if (chatInput) {
      chatInput.focus();
      chatInput.dispatchEvent(new Event("input"));
      const words = extractCurlyBraceWords(prompt);
      if (words.length > 0) {
        words.at(0);
        await tick();
      } else {
        chatInput.scrollTop = chatInput.scrollHeight;
      }
    }
  };
  let command = mutable_source("");
  let showCommands = prop($$props, "showCommands", 12, false);
  let suggestions = mutable_source(null);
  const screenCaptureHandler = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "never" }, audio: false });
      const video = document.createElement("video");
      video.srcObject = mediaStream;
      await video.play();
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      mediaStream.getTracks().forEach((track) => track.stop());
      window.focus();
      const imageUrl = canvas.toDataURL("image/png");
      const blob = await (await fetch(imageUrl)).blob();
      const file = new File([blob], `screen-capture-${Date.now()}.png`, { type: "image/png" });
      inputFilesHandler([file]);
      video.srcObject = null;
    } catch (error) {
      /* @__PURE__ */ console.error("Error capturing screen:", error);
    }
  };
  const inputFilesHandler = async (inputFiles2) => {
    inputFiles2.forEach(async (file) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      console.info("Processing file:", {
        name: file.name,
        type: file.type,
        size: file.size,
        extension: file.name.split(".").at(-1)
      });
      if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
        /* @__PURE__ */ console.error("File exceeds max size limit:", {
          fileSize: file.size,
          maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
        });
        toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
        return;
      }
      if (file["type"].startsWith("image/")) {
        const compressImageHandler = async (imageUrl, settings2 = {}, config2 = {}) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          const settingsCompression = ((settings2 == null ? void 0 : settings2.imageCompression) && (settings2 == null ? void 0 : settings2.imageCompressionInChannels)) ?? false;
          const configWidth = ((_b2 = (_a2 = config2 == null ? void 0 : config2.file) == null ? void 0 : _a2.image_compression) == null ? void 0 : _b2.width) ?? null;
          const configHeight = ((_d2 = (_c2 = config2 == null ? void 0 : config2.file) == null ? void 0 : _c2.image_compression) == null ? void 0 : _d2.height) ?? null;
          if (!settingsCompression && !configWidth && !configHeight) {
            return imageUrl;
          }
          let width = null;
          let height = null;
          if (settingsCompression) {
            width = ((_e2 = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _e2.width) ?? null;
            height = ((_f2 = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _f2.height) ?? null;
          }
          if (configWidth && (width === null || width > configWidth)) {
            width = configWidth;
          }
          if (configHeight && (height === null || height > configHeight)) {
            height = configHeight;
          }
          if (width || height) {
            return await compressImage(imageUrl, width, height);
          }
          return imageUrl;
        };
        let reader = new FileReader();
        reader.onload = async (event2) => {
          let imageUrl = event2.target.result;
          imageUrl = await compressImageHandler(imageUrl, $settings(), $config());
          const blob = await (await fetch(imageUrl)).blob();
          const compressedFile = new File([blob], file.name, { type: file.type });
          uploadFileHandler(compressedFile, false);
        };
        reader.readAsDataURL(file["type"] === "image/heic" ? await convertHeicToJpeg(file) : file);
      } else {
        uploadFileHandler(file);
      }
    });
  };
  const uploadFileHandler = async (file, process = true) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    set(files, [...get(files), fileItem]);
    try {
      let metadata = {
        channel_id: channel().id,
        // If the file is an audio file, provide the language for STT.
        ...(file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_c = (_b = (_a = $settings()) == null ? void 0 : _a.audio) == null ? void 0 : _b.stt) == null ? void 0 : _c.language) ? { language: (_f = (_e = (_d = $settings()) == null ? void 0 : _d.audio) == null ? void 0 : _e.stt) == null ? void 0 : _f.language } : {}
      };
      const uploadedFile = await uploadFile(localStorage.token, file, metadata, process);
      if (uploadedFile) {
        console.info("File upload completed:", {
          id: uploadedFile.id,
          name: fileItem.name,
          collection: (_g = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _g.collection_name
        });
        if (uploadedFile.error) {
          /* @__PURE__ */ console.error("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
        }
        fileItem.status = "uploaded";
        fileItem.file = uploadedFile;
        fileItem.id = uploadedFile.id;
        fileItem.collection_name = ((_h = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _h.collection_name) || (uploadedFile == null ? void 0 : uploadedFile.collection_name);
        fileItem.content_type = ((_i = uploadedFile.meta) == null ? void 0 : _i.content_type) || uploadedFile.content_type;
        fileItem.url = `${uploadedFile.id}`;
        set(files, get(files));
      } else {
        set(files, get(files).filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
      }
    } catch (e) {
      toast.error(`${e}`);
      set(files, get(files).filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
    }
  };
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      set(draggedOver, false);
    }
  };
  const onDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) {
      set(draggedOver, true);
    } else {
      set(draggedOver, false);
    }
  };
  const onDragLeave = () => {
    set(draggedOver, false);
  };
  const onDrop = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (((_a = e.dataTransfer) == null ? void 0 : _a.files) && acceptFiles()) {
      const inputFiles2 = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles2 && inputFiles2.length > 0) {
        /* @__PURE__ */ console.log(inputFiles2);
        inputFilesHandler(inputFiles2);
      }
    }
    set(draggedOver, false);
  };
  const submitHandler = async () => {
    var _a;
    if (get(content) === "" && get(files).length === 0) {
      return;
    }
    onSubmit()({ content: get(content), data: { files: get(files) } });
    set(content, "");
    set(files, []);
    if (chatInputElement()) {
      (_a = chatInputElement()) == null ? void 0 : _a.setText("");
      await tick();
      chatInputElement().focus();
    }
  };
  onMount(() => {
    set(suggestions, [
      {
        char: "@",
        render: getSuggestionRenderer(MentionList, {
          i18n,
          triggerChar: "@",
          modelSuggestions: true,
          userSuggestions: userSuggestions()
        })
      },
      ...channelSuggestions() ? [
        {
          char: "#",
          render: getSuggestionRenderer(MentionList, {
            i18n,
            triggerChar: "#",
            channelSuggestions: channelSuggestions()
          })
        }
      ] : [],
      {
        char: "/",
        render: getSuggestionRenderer(CommandSuggestionList, {
          i18n,
          onSelect: (e) => {
            var _a;
            const { type, data } = e;
            if (type === "model") {
              /* @__PURE__ */ console.log("Selected model:", data);
            }
            (_a = document.getElementById("chat-input")) == null ? void 0 : _a.focus();
          },
          insertTextHandler: insertTextAtCursor,
          onUpload: (e) => {
            const { type, data } = e;
            if (type === "file") {
              if (get(files).find((f) => f.id === data.id)) {
                return;
              }
              set(files, [...get(files), { ...data, status: "processed" }]);
            }
          }
        })
      },
      {
        char: ":",
        allowSpaces: false,
        command: ({ editor, range, props }) => {
          const codepoint = props.id;
          const emoji = String.fromCodePoint(parseInt(codepoint, 16));
          editor.chain().focus().deleteRange(range).insertContent(emoji).run();
        },
        render: getSuggestionRenderer(CommandSuggestionList, {
          i18n,
          onSelect: (e) => {
            var _a;
            (_a = document.getElementById("chat-input")) == null ? void 0 : _a.focus();
          },
          insertTextHandler: insertTextAtCursor,
          onUpload: () => {
          }
        })
      }
    ]);
    set(loaded, true);
    window.setTimeout(
      () => {
        if (chatInputElement()) {
          chatInputElement().focus();
        }
      },
      100
    );
    window.addEventListener("keydown", handleKeyDown);
    let isDestroyed = false;
    let dropzoneElement = null;
    const initialize = async () => {
      await tick();
      if (isDestroyed) return;
      dropzoneElement = document.getElementById("channel-container");
      if (dropzoneElement) {
        dropzoneElement.addEventListener("dragover", onDragOver);
        dropzoneElement.addEventListener("drop", onDrop);
        dropzoneElement.addEventListener("dragleave", onDragLeave);
      }
    };
    initialize();
    return () => {
      isDestroyed = true;
      window.removeEventListener("keydown", handleKeyDown);
      if (dropzoneElement) {
        dropzoneElement.removeEventListener("dragover", onDragOver);
        dropzoneElement.removeEventListener("drop", onDrop);
        dropzoneElement.removeEventListener("dragleave", onDragLeave);
      }
    };
  });
  legacy_pre_effect(() => get(command), () => {
    var _a;
    showCommands(["/"].includes((_a = get(command)) == null ? void 0 : _a.charAt(0)));
  });
  legacy_pre_effect(() => (get(content), deep_read_state(onChange())), () => {
    if (get(content)) {
      onChange()();
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { setText };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_10 = ($$anchor2) => {
      var fragment_1 = root_12();
      var node_1 = first_child(fragment_1);
      FilesOverlay(node_1, {
        get show() {
          return get(draggedOver);
        }
      });
      var node_2 = sibling(node_1, 2);
      {
        var consequent = ($$anchor3) => {
          var input = root();
          bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
          bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
          event("change", input, async () => {
            if (get(inputFiles) && get(inputFiles).length > 0) {
              inputFilesHandler(Array.from(get(inputFiles)));
            } else {
              toast.error($i18n().t(`File not found.`));
            }
            mutate(filesInputElement, get(filesInputElement).value = "");
          });
          append($$anchor3, input);
        };
        if_block(node_2, ($$render) => {
          if (acceptFiles()) $$render(consequent);
        });
      }
      var node_3 = sibling(node_2, 2);
      InputVariablesModal(node_3, {
        get variables() {
          return get(inputVariables);
        },
        get onSave() {
          return get(inputVariablesModalCallback);
        },
        get show() {
          return get(showInputVariablesModal);
        },
        set show($$value) {
          set(showInputVariablesModal, $$value);
        },
        $$legacy: true
      });
      var div = sibling(node_3, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var node_4 = child(div_4);
      {
        var consequent_1 = ($$anchor3) => {
          var div_5 = root_1();
          var button = child(div_5);
          reset(div_5);
          event("click", button, () => {
            scrollEnd(true);
            scrollToBottom()();
          });
          append($$anchor3, div_5);
        };
        if_block(node_4, ($$render) => {
          if (scrollEnd() === false) $$render(consequent_1);
        });
      }
      reset(div_4);
      var node_5 = sibling(div_4, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_6 = root_2();
          var div_7 = child(div_6);
          var node_6 = child(div_7);
          Skeleton(node_6, { size: "xs" });
          var div_8 = sibling(node_6, 2);
          var span = child(div_8);
          var text_1 = child(span, true);
          reset(span);
          var text_2 = sibling(span);
          reset(div_8);
          reset(div_7);
          reset(div_6);
          template_effect(
            ($0, $1) => {
              set_class(div_6, 1, ` -mt-7 pb-2.5 bg-gradient-to-t to-transparent ${typingUsersClassName() ?? ""} pointer-events-none select-none`);
              set_text(text_1, $0);
              set_text(text_2, ` ${$1 ?? ""}`);
            },
            [
              () => (deep_read_state(typingUsers()), untrack(() => typingUsers().map((user) => user.name).join(", "))),
              () => ($i18n(), untrack(() => $i18n().t("is typing...")))
            ]
          );
          append($$anchor3, div_6);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(typingUsers()), untrack(() => typingUsers().length > 0)) $$render(consequent_2);
        });
      }
      reset(div_3);
      reset(div_2);
      var div_9 = sibling(div_2, 2);
      var node_7 = child(div_9);
      {
        var consequent_3 = ($$anchor3) => {
          VoiceRecording($$anchor3, {
            onCancel: async () => {
              set(recording, false);
              await tick();
              if (chatInputElement()) {
                chatInputElement().focus();
              }
            },
            onConfirm: async (data) => {
              const { text: text2, filename } = data;
              set(recording, false);
              await tick();
              insertTextAtCursor(text2);
              await tick();
              if (chatInputElement()) {
                chatInputElement().focus();
              }
            },
            get recording() {
              return get(recording);
            },
            set recording($$value) {
              set(recording, $$value);
            },
            $$legacy: true
          });
        };
        var alternate_2 = ($$anchor3) => {
          var form = root_11();
          var div_10 = child(form);
          var node_8 = child(div_10);
          {
            var consequent_4 = ($$anchor4) => {
              var div_11 = root_3();
              var div_12 = child(div_11);
              var div_13 = child(div_12);
              var div_14 = child(div_13);
              var span_1 = child(div_14);
              var text_3 = child(span_1, true);
              reset(span_1);
              reset(div_14);
              reset(div_13);
              var div_15 = sibling(div_13, 2);
              var button_1 = child(div_15);
              var node_9 = child(button_1);
              XMark(node_9, {});
              reset(button_1);
              reset(div_15);
              reset(div_12);
              reset(div_11);
              template_effect(($0) => set_text(text_3, $0), [
                () => ($i18n(), deep_read_state(replyToMessage()), untrack(() => {
                  var _a, _b;
                  return $i18n().t("Replying to {{NAME}}", {
                    NAME: ((_b = (_a = replyToMessage()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_name) ?? replyToMessage().user.name
                  });
                }))
              ]);
              event("click", button_1, () => {
                replyToMessage(null);
              });
              append($$anchor4, div_11);
            };
            if_block(node_8, ($$render) => {
              if (replyToMessage() !== null) $$render(consequent_4);
            });
          }
          var node_10 = sibling(node_8, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_16 = root_5();
              each(div_16, 5, () => get(files), index, ($$anchor5, file, fileIdx) => {
                var fragment_3 = comment();
                var node_11 = first_child(fragment_3);
                {
                  var consequent_5 = ($$anchor6) => {
                    const fileUrl = derived_safe_equal(() => (get(file), deep_read_state(REXPRO_API_BASE_URL), untrack(() => {
                      var _a;
                      return get(file).url.startsWith("data") || get(file).url.startsWith("http") ? get(file).url : `${REXPRO_API_BASE_URL}/files/${get(file).url}${((_a = get(file)) == null ? void 0 : _a.content_type) ? "/content" : ""}`;
                    })));
                    var div_17 = root_4();
                    var div_18 = child(div_17);
                    var node_12 = child(div_18);
                    Image(node_12, {
                      get src() {
                        return get(fileUrl);
                      },
                      alt: "",
                      imageClassName: " size-10 rounded-xl object-cover"
                    });
                    reset(div_18);
                    var div_19 = sibling(div_18, 2);
                    var button_2 = child(div_19);
                    reset(div_19);
                    reset(div_17);
                    event("click", button_2, () => {
                      get(files).splice(fileIdx, 1);
                      set(files, get(files));
                    });
                    append($$anchor6, div_17);
                  };
                  var d = user_derived(() => (get(file), untrack(() => {
                    var _a;
                    return get(file).type === "image" || (((_a = get(file)) == null ? void 0 : _a.content_type) ?? "").startsWith("image/");
                  })));
                  var alternate = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => (get(file), untrack(() => {
                        var _a;
                        return (_a = get(file)) == null ? void 0 : _a.size;
                      })));
                      let $1 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
                      FileItem($$anchor6, {
                        get item() {
                          return get(file);
                        },
                        get name() {
                          return get(file), untrack(() => get(file).name);
                        },
                        get type() {
                          return get(file), untrack(() => get(file).type);
                        },
                        get size() {
                          return get($0);
                        },
                        small: true,
                        get loading() {
                          return get($1);
                        },
                        dismissible: true,
                        edit: true,
                        $$events: {
                          dismiss: () => {
                            get(files).splice(fileIdx, 1);
                            set(files, get(files));
                          },
                          click: () => {
                            /* @__PURE__ */ console.log(get(file));
                          }
                        }
                      });
                    }
                  };
                  if_block(node_11, ($$render) => {
                    if (get(d)) $$render(consequent_5);
                    else $$render(alternate, -1);
                  });
                }
                append($$anchor5, fragment_3);
              });
              reset(div_16);
              append($$anchor4, div_16);
            };
            if_block(node_10, ($$render) => {
              if (get(files), untrack(() => get(files).length > 0)) $$render(consequent_6);
            });
          }
          var div_20 = sibling(node_10, 2);
          var div_21 = child(div_20);
          var node_13 = child(div_21);
          key(
            node_13,
            () => ($settings(), untrack(() => {
              var _a, _b;
              return ((_a = $settings()) == null ? void 0 : _a.richTextInput) && ((_b = $settings()) == null ? void 0 : _b.showFormattingToolbar);
            })),
            ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => !disabled());
                let $1 = derived_safe_equal(() => ($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.richTextInput) ?? true;
                })));
                let $2 = derived_safe_equal(() => ($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.showFormattingToolbar) ?? false;
                })));
                let $3 = derived_safe_equal(() => ($settings(), $mobile(), untrack(() => {
                  var _a;
                  return !(((_a = $settings()) == null ? void 0 : _a.ctrlEnterToSend) ?? false) && !$mobile() && !("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
                })));
                let $4 = derived_safe_equal(() => ($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.largeTextAsFile) ?? false;
                })));
                bind_this(
                  RichTextInput($$anchor4, {
                    id: "chat-input",
                    json: true,
                    messageInput: true,
                    get editable() {
                      return get($0);
                    },
                    get placeholder() {
                      return placeholder();
                    },
                    get richText() {
                      return get($1);
                    },
                    get showFormattingToolbar() {
                      return get($2);
                    },
                    get shiftEnter() {
                      return get($3);
                    },
                    get largeTextAsFile() {
                      return get($4);
                    },
                    floatingMenuPlacement: "top-start",
                    get suggestions() {
                      return get(suggestions);
                    },
                    onChange: (e) => {
                      const { md } = e;
                      set(content, md);
                      set(command, getCommand());
                    },
                    $$events: {
                      keydown: async (e) => {
                        e = e.detail.event;
                        e.ctrlKey || e.metaKey;
                        const suggestionsContainerElement = document.getElementById("suggestions-container");
                        if (!suggestionsContainerElement) {
                          if (!$mobile() || !("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
                            if (e.keyCode === 13 && !e.shiftKey) {
                              e.preventDefault();
                            }
                            if ((get(content) !== "" || get(files).length > 0) && e.keyCode === 13 && !e.shiftKey) {
                              submitHandler();
                            }
                          }
                        }
                        if (e.key === "Escape") {
                          console.info("Escape");
                          replyToMessage(null);
                        }
                      },
                      paste: async (e) => {
                        e = e.detail.event;
                        /* @__PURE__ */ console.log(e);
                        const clipboardData = e.clipboardData || window.clipboardData;
                        if (clipboardData && clipboardData.items) {
                          for (const item of clipboardData.items) {
                            const file = item.getAsFile();
                            if (file) {
                              await inputFilesHandler([file]);
                              e.preventDefault();
                            }
                          }
                        }
                      }
                    },
                    $$legacy: true
                  }),
                  ($$value) => chatInputElement($$value),
                  () => chatInputElement()
                );
              }
            }
          );
          reset(div_21);
          reset(div_20);
          var div_22 = sibling(div_20, 2);
          var div_23 = child(div_22);
          var node_14 = child(div_23);
          slot(node_14, $$props, "menu", {}, ($$anchor4) => {
            var fragment_6 = comment();
            var node_15 = first_child(fragment_6);
            {
              var consequent_7 = ($$anchor5) => {
                InputMenu($$anchor5, {
                  screenCaptureHandler,
                  uploadFilesHandler: () => {
                    get(filesInputElement).click();
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var button_3 = root_6();
                    append($$anchor6, button_3);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_15, ($$render) => {
                if (acceptFiles()) $$render(consequent_7);
              });
            }
            append($$anchor4, fragment_6);
          });
          reset(div_23);
          var div_24 = sibling(div_23, 2);
          var node_16 = child(div_24);
          {
            var consequent_8 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Record voice"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_4 = root_7();
                    event("click", button_4, async () => {
                      try {
                        let stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(function(err) {
                          toast.error($i18n().t(`Permission denied when accessing microphone: {{error}}`, { error: err }));
                          return null;
                        });
                        if (stream) {
                          set(recording, true);
                          const tracks = stream.getTracks();
                          tracks.forEach((track) => track.stop());
                        }
                        stream = null;
                      } catch {
                        toast.error($i18n().t("Permission denied when accessing microphone"));
                      }
                    });
                    append($$anchor5, button_4);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_16, ($$render) => {
              if (get(content) === "") $$render(consequent_8);
            });
          }
          var div_25 = sibling(node_16, 2);
          var node_17 = child(div_25);
          {
            var consequent_9 = ($$anchor4) => {
              var div_26 = root_9();
              var node_18 = child(div_26);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Stop"))));
                Tooltip(node_18, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_5 = root_8();
                    event("click", button_5, () => {
                      onStop()();
                    });
                    append($$anchor5, button_5);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_26);
              append($$anchor4, div_26);
            };
            var alternate_1 = ($$anchor4) => {
              var div_27 = root_9();
              var node_19 = child(div_27);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Send message"))));
                Tooltip(node_19, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_6 = root_10();
                    template_effect(() => {
                      set_class(button_6, 1, `${(get(content), get(files), untrack(() => get(content) !== "" || get(files).length !== 0 ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled")) ?? ""} transition rounded-full p-1.5 self-center`);
                      button_6.disabled = (get(content), get(files), untrack(() => get(content) === "" && get(files).length === 0));
                    });
                    append($$anchor5, button_6);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_27);
              append($$anchor4, div_27);
            };
            if_block(node_17, ($$render) => {
              if (inputLoading() && onStop()) $$render(consequent_9);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_25);
          reset(div_24);
          reset(div_22);
          reset(div_10);
          reset(form);
          template_effect(() => {
            set_attribute(div_10, "dir", ($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.chatDirection) ?? "auto";
            })));
            div_10.dir = div_10.dir;
          });
          event("submit", form, preventDefault(() => {
            submitHandler();
          }));
          append($$anchor3, form);
        };
        if_block(node_7, ($$render) => {
          if (get(recording)) $$render(consequent_3);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_9);
      reset(div_1);
      reset(div);
      template_effect(() => set_class(div_9, 1, `${disabled() ? "opacity-50 pointer-events-none cursor-not-allowed" : ""} relative z-20`));
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_10);
    });
  }
  append($$anchor, fragment);
  bind_prop($$props, "setText", setText);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
export {
  MessageInput as M
};
