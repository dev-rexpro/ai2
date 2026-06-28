import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, p as push, i as getContext, o as onMount, h as first_child, w as set, k as get, z as sibling, b as pop, s as setup_stores, q as mutable_source, x as derived_safe_equal, u as untrack, c as child, m as deep_read_state, r as reset, y as event, f as from_html, e as store_get, d as set_text, g as comment, aW as text, v as user_derived, aR as next, A as tick, l as legacy_pre_effect, n as legacy_pre_effect_reset, j as onDestroy, aV as mutate, C as deferred_template_effect, $ as $document } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { p as page } from "../chunks/B35obKje.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { a as set_class, c as clsx, s as set_attribute, d as set_style, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { P as Pane_group, c as Pane, d as Pane_resizer } from "../chunks/Bv1TNWY0.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { u as user, s as settings, a as mobile, b as showSidebar, h as showArchivedChats, k as socket, g as chatId, o as channelId, i as channels } from "../chunks/BJ3rUC-5.js";
import { g as getMessageData, r as removeReaction, a as addReaction, p as pinMessage, u as updateMessage, d as deleteMessage, b as getChannelMembersById, c as addMembersById, e as removeMembersById, f as getChannelPinnedMessages, h as getChannelThreadMessages, s as sendMessage, i as getChannelById, j as getChannelMessages } from "../chunks/BJCfc4ks.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { d as dayjs2, r as relativeTime } from "../chunks/BeGenu0j.js";
import { J as isToday, K as isYesterday, r as formatDate, v as v4 } from "../chunks/X0cYWxFO.js";
import { l as localizedFormat } from "../chunks/Ce8_hHpJ.js";
import { a as REXPRO_API_BASE_URL } from "../chunks/CZpnbXda.js";
import { M as Markdown, I as Image } from "../chunks/DR1P1jn4.js";
import { N as Name, P as ProfileImage } from "../chunks/SNW_B0gM.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { P as Pencil } from "../chunks/Bga8-tII.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { T as Textarea } from "../chunks/-oxnKdd2.js";
import { F as FileItem, C as ChatBubble } from "../chunks/DDFjerJA.js";
import { P as ProfilePreview } from "../chunks/CuSe9V-c.js";
import { E as EmojiPicker, F as FaceSmile } from "../chunks/Ki4gtWzN.js";
import { C as ChevronRight } from "../chunks/BaIXj_tA.js";
import { E as Emoji } from "../chunks/Bl_QxWr9.js";
import { S as Skeleton } from "../chunks/BO25qH0B.js";
import { P as PinSlash, a as Pin } from "../chunks/BFblSxUV.js";
import { L as Loader } from "../chunks/Cbj8yul_.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { M as MessageInput } from "../chunks/wcPzbA5r.js";
import { U as UserMenu } from "../chunks/BmWiF3A2.js";
import { S as Sidebar } from "../chunks/WvwlXjr7.js";
import { H as Hashtag, L as Lock } from "../chunks/DhMHj2hq.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
import { B as Badge } from "../chunks/3f_PWqJi.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { M as MemberSelector } from "../chunks/fbMEVKf7.js";
import { U as Users } from "../chunks/CH1aa5BW.js";
import { D as Drawer } from "../chunks/BIADelUi.js";
import { i as i18n } from "../chunks/yR_88dR1.js";
var root$a = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.25 4.75L6.75 8.25L10.25 11.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.75 8.25L12.75 8.25C14.9591 8.25 16.75 10.0409 16.75 12.25V19.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function ArrowUpLeftAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$a();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$9 = from_html(`<div class="swipe-reply-indicator svelte-s6wdik"><div><!></div></div>`);
var root_1$8 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik"><!></button>`);
var root_2$6 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-0.5 svelte-s6wdik"><!></button>`);
var root_3$6 = from_html(`<!> <!>`, 1);
var root_4$5 = from_html(`<div><div class="flex gap-1 rounded-lg bg-white dark:bg-gray-850 shadow-md p-0.5 border border-gray-100/30 dark:border-gray-850/30 svelte-s6wdik"><!> <!> <!> <!> <!></div></div>`);
var root_5$5 = from_html(`<div><div class="ml-8.5 flex items-center gap-1 px-1 rounded-full text-xs svelte-s6wdik"><!> <span class="text-gray-500 svelte-s6wdik"> </span></div></div>`);
var root_6$4 = from_html(`<img class="size-4 ml-0.5 rounded-full object-cover svelte-s6wdik"/>`);
var root_7$3 = from_html(`<div class="relative text-xs mb-1 svelte-s6wdik"><div class="absolute h-3 w-7 left-[18px] top-2 rounded-tl-lg border-t-[1.5px] border-l-[1.5px] border-gray-200 dark:border-gray-700 z-0 svelte-s6wdik"></div> <button class="ml-12 flex items-center space-x-2 relative z-0 svelte-s6wdik"><!> <div class="shrink-0 svelte-s6wdik"> </div> <div class="italic text-sm text-gray-500 dark:text-gray-400 line-clamp-1 w-full flex-1 svelte-s6wdik"><!></div></button></div>`);
var root_8$2 = from_html(`<img class="size-8 translate-y-1 ml-0.5 object-cover rounded-full svelte-s6wdik"/>`);
var root_9$2 = from_html(`<div class="mt-1.5 flex shrink-0 items-center text-xs self-center invisible group-hover:visible text-gray-500 font-medium first-letter:capitalize svelte-s6wdik"><!></div>`);
var root_10$2 = from_html(`<span class="line-clamp-1 svelte-s6wdik"><!></span>`);
var root_11$2 = from_html(`<div class=" self-center text-xs text-gray-400 font-medium first-letter:capitalize ml-0.5 translate-y-[1px] svelte-s6wdik"><!></div>`);
var root_12$1 = from_html(`<div class=" self-end text-base shrink-0 font-medium truncate svelte-s6wdik"><!></div> <!>`, 1);
var root_13 = from_html(`<div class=" my-2 svelte-s6wdik"><!></div>`);
var root_14 = from_html(`<video controls="" class=" max-h-96 rounded-lg svelte-s6wdik"></video>`, 2);
var root_15 = from_html(`<div class="svelte-s6wdik"><!></div>`);
var root_16 = from_html(`<div class="my-2.5 w-full flex overflow-x-auto gap-2 flex-wrap svelte-s6wdik"></div>`);
var root_17 = from_html(`<div class="py-2 svelte-s6wdik"><!> <div class=" mt-2 mb-1 flex justify-end text-sm font-medium svelte-s6wdik"><div class="flex space-x-1.5 svelte-s6wdik"><button id="close-edit-message-button" class="px-3.5 py-1.5 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl svelte-s6wdik"> </button> <button id="confirm-edit-message-button" class="px-3.5 py-1.5 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl svelte-s6wdik"> </button></div></div></div>`);
var root_18 = from_html(`<span class="text-gray-500 text-[10px] pl-1 self-center svelte-s6wdik"> </span>`);
var root_19 = from_html(`<!><!>`, 1);
var root_20 = from_html(`<div class="text-xs font-medium text-gray-500 dark:text-gray-400 svelte-s6wdik"> </div>`);
var root_21 = from_html(`<button><!> <!></button>`);
var root_22 = from_html(`<div class="flex items-center gap-1.5 bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1 transition rounded-xl px-1 py-1 cursor-pointer text-gray-500 dark:text-gray-400 svelte-s6wdik"><!></div>`);
var root_23 = from_html(`<div class="svelte-s6wdik"><div class="flex items-center flex-wrap gap-y-1.5 gap-1 mt-1 mb-2 svelte-s6wdik"><!> <!></div></div>`);
var root_24 = from_html(`<div class="flex items-center gap-1.5 -mt-0.5 mb-1.5 svelte-s6wdik"><button class="flex items-center text-xs py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition svelte-s6wdik"><span class="font-medium mr-1 svelte-s6wdik"> </span><span class="svelte-s6wdik"> </span> <span class="ml-1 svelte-s6wdik"><!></span></button></div>`);
var root_25 = from_html(`<div><!></div> <!> <!>`, 1);
var root_26 = from_html(`<div class="swipe-reply-wrapper relative svelte-s6wdik"><!> <div><!> <!> <!> <div><div><!></div> <div class="flex-auto w-0 pl-2 svelte-s6wdik"><!> <!> <!></div></div></div></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(isToday);
  dayjs2.extend(isYesterday);
  dayjs2.extend(localizedFormat);
  const i18n2 = getContext("i18n");
  let className = prop($$props, "className", 8, "");
  let message = prop($$props, "message", 12);
  let channel = prop($$props, "channel", 8);
  let showUserProfile = prop($$props, "showUserProfile", 8, true);
  let thread = prop($$props, "thread", 8, false);
  let replyToMessage = prop($$props, "replyToMessage", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let pending = prop($$props, "pending", 8, false);
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onEdit = prop($$props, "onEdit", 8, () => {
  });
  let onReply = prop($$props, "onReply", 8, () => {
  });
  let onPin = prop($$props, "onPin", 8, () => {
  });
  let onThread = prop($$props, "onThread", 8, () => {
  });
  let onReaction = prop($$props, "onReaction", 8, () => {
  });
  let showButtons = mutable_source(false);
  let edit = mutable_source(false);
  let editedContent = mutable_source(null);
  let showDeleteConfirmDialog = mutable_source(false);
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeOffsetX = mutable_source(0);
  let isSwiping = false;
  let swipeLocked = false;
  const SWIPE_THRESHOLD = 60;
  const SWIPE_MAX = 100;
  const SWIPE_DEAD_ZONE = 10;
  const handleTouchStart = (e) => {
    if (disabled() || get(edit) || !onReply()) return;
    const touch = e.touches[0];
    swipeStartX = touch.clientX;
    swipeStartY = touch.clientY;
    set(swipeOffsetX, 0);
    isSwiping = false;
    swipeLocked = false;
  };
  const handleTouchMove = (e) => {
    if (disabled() || get(edit) || !onReply()) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - swipeStartX;
    const deltaY = touch.clientY - swipeStartY;
    if (!swipeLocked && (Math.abs(deltaX) > SWIPE_DEAD_ZONE || Math.abs(deltaY) > SWIPE_DEAD_ZONE)) {
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        isSwiping = false;
        swipeLocked = true;
        return;
      }
      swipeLocked = true;
      isSwiping = true;
    }
    if (!isSwiping) return;
    const clampedX = Math.max(0, deltaX);
    set(swipeOffsetX, clampedX <= SWIPE_THRESHOLD ? clampedX : SWIPE_THRESHOLD + (clampedX - SWIPE_THRESHOLD) * 0.3);
    set(swipeOffsetX, Math.min(get(swipeOffsetX), SWIPE_MAX));
  };
  const handleTouchEnd = () => {
    if (isSwiping && get(swipeOffsetX) >= SWIPE_THRESHOLD && onReply()) {
      onReply()(message());
    }
    set(swipeOffsetX, 0);
    isSwiping = false;
    swipeLocked = false;
  };
  const loadMessageData = async () => {
    var _a, _b;
    if (message() && ((_a = message()) == null ? void 0 : _a.data) === true) {
      const res = await getMessageData(localStorage.token, (_b = channel()) == null ? void 0 : _b.id, message().id);
      if (res) {
        message(message().data = res, true);
      }
    }
  };
  onMount(async () => {
    var _a;
    if (message() && ((_a = message()) == null ? void 0 : _a.data) === true) {
      await loadMessageData();
    }
  });
  init();
  var fragment = root_3$6();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete Message"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this message?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      onConfirm: async () => {
        await onDelete()();
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_31 = ($$anchor2) => {
      var div = root_26();
      var node_2 = child(div);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root$9();
          var div_2 = child(div_1);
          let classes;
          var node_3 = child(div_2);
          ArrowUpLeftAlt(node_3, { className: "size-5" });
          reset(div_2);
          reset(div_1);
          template_effect(
            ($0, $1) => {
              set_style(div_1, `opacity: ${$0 ?? ""}; transform: scale(${$1 ?? ""});`);
              classes = set_class(div_2, 1, "swipe-reply-icon svelte-s6wdik", null, classes, {
                "swipe-reply-icon--active": get(swipeOffsetX) >= SWIPE_THRESHOLD
              });
            },
            [
              () => (get(swipeOffsetX), untrack(() => Math.min(get(swipeOffsetX) / SWIPE_THRESHOLD, 1))),
              () => (get(swipeOffsetX), untrack(() => 0.5 + Math.min(get(swipeOffsetX) / SWIPE_THRESHOLD, 1) * 0.5))
            ]
          );
          append($$anchor3, div_1);
        };
        if_block(node_2, ($$render) => {
          if (get(swipeOffsetX) > 0) $$render(consequent);
        });
      }
      var div_3 = sibling(node_2, 2);
      var node_4 = child(div_3);
      {
        var consequent_8 = ($$anchor3) => {
          var div_4 = root_4$5();
          var div_5 = child(div_4);
          var node_5 = child(div_5);
          {
            var consequent_1 = ($$anchor4) => {
              EmojiPicker($$anchor4, {
                onClose: () => set(showButtons, false),
                onSubmit: (name) => {
                  set(showButtons, false);
                  onReaction()(name);
                },
                children: ($$anchor5, $$slotProps) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Reaction"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps2) => {
                        var button = root_1$8();
                        var node_6 = child(button);
                        FaceSmile(node_6, {});
                        reset(button);
                        event("click", button, () => {
                          set(showButtons, true);
                        });
                        append($$anchor6, button);
                      },
                      $$slots: { default: true }
                    });
                  }
                },
                $$slots: { default: true }
              });
            };
            if_block(node_5, ($$render) => {
              if (onReaction()) $$render(consequent_1);
            });
          }
          var node_7 = sibling(node_5, 2);
          {
            var consequent_2 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reply"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_1 = root_2$6();
                    var node_8 = child(button_1);
                    ArrowUpLeftAlt(node_8, { className: "size-5" });
                    reset(button_1);
                    event("click", button_1, () => {
                      onReply()(message());
                    });
                    append($$anchor5, button_1);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_7, ($$render) => {
              if (onReply()) $$render(consequent_2);
            });
          }
          var node_9 = sibling(node_7, 2);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(message()), $i18n(), untrack(() => {
              var _a;
              return ((_a = message()) == null ? void 0 : _a.is_pinned) ? $i18n().t("Unpin") : $i18n().t("Pin");
            })));
            Tooltip(node_9, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button_2 = root_1$8();
                var node_10 = child(button_2);
                {
                  var consequent_3 = ($$anchor5) => {
                    PinSlash($$anchor5, { className: "size-4" });
                  };
                  var alternate = ($$anchor5) => {
                    Pin($$anchor5, { className: "size-4" });
                  };
                  if_block(node_10, ($$render) => {
                    if (deep_read_state(message()), untrack(() => {
                      var _a;
                      return (_a = message()) == null ? void 0 : _a.is_pinned;
                    })) $$render(consequent_3);
                    else $$render(alternate, -1);
                  });
                }
                reset(button_2);
                event("click", button_2, () => {
                  onPin()(message());
                });
                append($$anchor4, button_2);
              },
              $$slots: { default: true }
            });
          }
          var node_11 = sibling(node_9, 2);
          {
            var consequent_4 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reply in Thread"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_3 = root_1$8();
                    var node_12 = child(button_3);
                    ChatBubble(node_12, {});
                    reset(button_3);
                    event("click", button_3, () => {
                      onThread()(message().id);
                    });
                    append($$anchor5, button_3);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_11, ($$render) => {
              if (!thread() && onThread()) $$render(consequent_4);
            });
          }
          var node_13 = sibling(node_11, 2);
          {
            var consequent_7 = ($$anchor4) => {
              var fragment_7 = root_3$6();
              var node_14 = first_child(fragment_7);
              {
                var consequent_5 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps) => {
                        var button_4 = root_1$8();
                        var node_15 = child(button_4);
                        Pencil(node_15, {});
                        reset(button_4);
                        event("click", button_4, () => {
                          set(edit, true);
                          set(editedContent, message().content);
                        });
                        append($$anchor6, button_4);
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                if_block(node_14, ($$render) => {
                  if (onEdit()) $$render(consequent_5);
                });
              }
              var node_16 = sibling(node_14, 2);
              {
                var consequent_6 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps) => {
                        var button_5 = root_1$8();
                        var node_17 = child(button_5);
                        GarbageBin(node_17, {});
                        reset(button_5);
                        event("click", button_5, () => set(showDeleteConfirmDialog, true));
                        append($$anchor6, button_5);
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                if_block(node_16, ($$render) => {
                  if (onDelete()) $$render(consequent_6);
                });
              }
              append($$anchor4, fragment_7);
            };
            if_block(node_13, ($$render) => {
              if (deep_read_state(message()), $user(), untrack(() => {
                var _a, _b;
                return message().user_id === ((_a = $user()) == null ? void 0 : _a.id) || ((_b = $user()) == null ? void 0 : _b.role) === "admin";
              })) $$render(consequent_7);
            });
          }
          reset(div_5);
          reset(div_4);
          template_effect(() => set_class(div_4, 1, ` absolute ${get(showButtons) ? "" : "invisible group-hover:visible"} right-1 -top-2 z-10`, "svelte-s6wdik"));
          append($$anchor3, div_4);
        };
        if_block(node_4, ($$render) => {
          if (!get(edit) && !disabled()) $$render(consequent_8);
        });
      }
      var node_18 = sibling(node_4, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_6 = root_5$5();
          var div_7 = child(div_6);
          var node_19 = child(div_7);
          Pin(node_19, { className: "size-3 text-yellow-500 dark:text-yellow-300" });
          var span = sibling(node_19, 2);
          var text2 = child(span, true);
          reset(span);
          reset(div_7);
          reset(div_6);
          template_effect(
            ($0) => {
              set_class(div_6, 1, `flex ${showUserProfile() ? "mb-0.5" : "mt-0.5"}`, "svelte-s6wdik");
              set_text(text2, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Pinned")))]
          );
          append($$anchor3, div_6);
        };
        if_block(node_18, ($$render) => {
          if (deep_read_state(message()), untrack(() => {
            var _a;
            return (_a = message()) == null ? void 0 : _a.is_pinned;
          })) $$render(consequent_9);
        });
      }
      var node_20 = sibling(node_18, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_8 = root_7$3();
          var button_6 = sibling(child(div_8), 2);
          var node_21 = child(button_6);
          {
            var consequent_10 = ($$anchor4) => {
              var img = root_6$4();
              template_effect(() => {
                set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(message()), untrack(() => `${REXPRO_API_BASE_URL}/models/model/profile/image?id=${message().reply_to_message.meta.model_id}`)));
                set_attribute(img, "alt", (deep_read_state(message()), untrack(() => message().reply_to_message.meta.model_name ?? message().reply_to_message.meta.model_id)));
              });
              event("error", img, (e) => {
                e.currentTarget.src = "/favicon.png";
              });
              append($$anchor4, img);
            };
            var alternate_1 = ($$anchor4) => {
              var img_1 = root_6$4();
              template_effect(
                ($0) => {
                  set_attribute(img_1, "src", (deep_read_state(message()), deep_read_state(REXPRO_API_BASE_URL), untrack(() => {
                    var _a, _b, _c;
                    return ((_a = message().reply_to_message.user) == null ? void 0 : _a.role) === "webhook" ? `${REXPRO_API_BASE_URL}/channels/webhooks/${(_b = message().reply_to_message.user) == null ? void 0 : _b.id}/profile/image` : `${REXPRO_API_BASE_URL}/users/${(_c = message().reply_to_message.user) == null ? void 0 : _c.id}/profile/image`;
                  })));
                  set_attribute(img_1, "alt", $0);
                },
                [
                  () => (deep_read_state(message()), $i18n(), untrack(() => {
                    var _a;
                    return ((_a = message().reply_to_message.user) == null ? void 0 : _a.name) ?? $i18n().t("Unknown User");
                  }))
                ]
              );
              append($$anchor4, img_1);
            };
            if_block(node_21, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a, _b, _c;
                return (_c = (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id;
              })) $$render(consequent_10);
              else $$render(alternate_1, -1);
            });
          }
          var div_9 = sibling(node_21, 2);
          var text_1 = child(div_9, true);
          reset(div_9);
          var div_10 = sibling(div_9, 2);
          var node_22 = child(div_10);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(message()), untrack(() => `${message().id}-reply-to`)));
            let $1 = derived_safe_equal(() => (deep_read_state(message()), untrack(() => {
              var _a, _b;
              return (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.content;
            })));
            Markdown(node_22, {
              get id() {
                return get($0);
              },
              get content() {
                return get($1);
              },
              allowEmbeds: false
            });
          }
          reset(div_10);
          reset(button_6);
          reset(div_8);
          template_effect(($0) => set_text(text_1, $0), [
            () => (deep_read_state(message()), $i18n(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_b = (_a = message()) == null ? void 0 : _a.reply_to_message.meta) == null ? void 0 : _b.model_name) ?? ((_d = (_c = message()) == null ? void 0 : _c.reply_to_message.user) == null ? void 0 : _d.name) ?? $i18n().t("Unknown User");
            }))
          ]);
          event("click", button_6, () => {
            const messageElement = document.getElementById(`message-${message().reply_to_message.id}`);
            if (messageElement) {
              messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
              messageElement.classList.add("highlight");
              setTimeout(
                () => {
                  messageElement.classList.remove("highlight");
                },
                2e3
              );
              return;
            }
          });
          append($$anchor3, div_8);
        };
        if_block(node_20, ($$render) => {
          if (deep_read_state(message()), untrack(() => {
            var _a, _b;
            return (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.user;
          })) $$render(consequent_11);
        });
      }
      var div_11 = sibling(node_20, 2);
      var div_12 = child(div_11);
      set_class(div_12, 1, `shrink-0 mr-1 w-9`, "svelte-s6wdik");
      var node_23 = child(div_12);
      {
        var consequent_14 = ($$anchor3) => {
          var fragment_10 = comment();
          var node_24 = first_child(fragment_10);
          {
            var consequent_12 = ($$anchor4) => {
              var img_2 = root_8$2();
              template_effect(() => {
                set_attribute(img_2, "src", (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(message()), untrack(() => `${REXPRO_API_BASE_URL}/models/model/profile/image?id=${message().meta.model_id}`)));
                set_attribute(img_2, "alt", (deep_read_state(message()), untrack(() => message().meta.model_name ?? message().meta.model_id)));
              });
              event("error", img_2, (e) => {
                e.currentTarget.src = "/favicon.png";
              });
              append($$anchor4, img_2);
            };
            var consequent_13 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(message()), untrack(() => {
                  var _a;
                  return `${REXPRO_API_BASE_URL}/channels/webhooks/${(_a = message().user) == null ? void 0 : _a.id}/profile/image`;
                })));
                ProfileImage($$anchor4, {
                  get src() {
                    return get($0);
                  },
                  className: "size-8 ml-0.5"
                });
              }
            };
            var alternate_2 = ($$anchor4) => {
              ProfilePreview($$anchor4, {
                get user() {
                  return deep_read_state(message()), untrack(() => message().user);
                },
                children: ($$anchor5, $$slotProps) => {
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(message()), untrack(() => {
                      var _a;
                      return `${REXPRO_API_BASE_URL}/users/${(_a = message().user) == null ? void 0 : _a.id}/profile/image`;
                    })));
                    ProfileImage($$anchor5, {
                      get src() {
                        return get($0);
                      },
                      className: "size-8 ml-0.5"
                    });
                  }
                },
                $$slots: { default: true }
              });
            };
            if_block(node_24, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a, _b;
                return (_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id;
              })) $$render(consequent_12);
              else if (deep_read_state(message()), untrack(() => {
                var _a;
                return ((_a = message().user) == null ? void 0 : _a.role) === "webhook";
              })) $$render(consequent_13, 1);
              else $$render(alternate_2, -1);
            });
          }
          append($$anchor3, fragment_10);
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_14 = comment();
          var node_25 = first_child(fragment_14);
          {
            var consequent_15 = ($$anchor4) => {
              var div_13 = root_9$2();
              var node_26 = child(div_13);
              {
                let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("LLLL"))));
                Tooltip(node_26, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    next();
                    var text_2 = text();
                    template_effect(($02) => set_text(text_2, $02), [
                      () => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("HH:mm")))
                    ]);
                    append($$anchor5, text_2);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_13);
              append($$anchor4, div_13);
            };
            if_block(node_25, ($$render) => {
              if (deep_read_state(message()), untrack(() => message().created_at)) $$render(consequent_15);
            });
          }
          append($$anchor3, fragment_14);
        };
        if_block(node_23, ($$render) => {
          if (showUserProfile()) $$render(consequent_14);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_12);
      var div_14 = sibling(div_12, 2);
      var node_27 = child(div_14);
      {
        var consequent_19 = ($$anchor3) => {
          Name($$anchor3, {
            children: ($$anchor4, $$slotProps) => {
              var fragment_17 = root_12$1();
              var div_15 = first_child(fragment_17);
              var node_28 = child(div_15);
              {
                var consequent_16 = ($$anchor5) => {
                  var text_3 = text();
                  template_effect(() => set_text(text_3, (deep_read_state(message()), untrack(() => {
                    var _a, _b, _c, _d;
                    return ((_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_name) ?? ((_d = (_c = message()) == null ? void 0 : _c.meta) == null ? void 0 : _d.model_id);
                  }))));
                  append($$anchor5, text_3);
                };
                var alternate_4 = ($$anchor5) => {
                  var text_4 = text();
                  template_effect(() => set_text(text_4, (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = message()) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
                  }))));
                  append($$anchor5, text_4);
                };
                if_block(node_28, ($$render) => {
                  if (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id;
                  })) $$render(consequent_16);
                  else $$render(alternate_4, -1);
                });
              }
              reset(div_15);
              var node_29 = sibling(div_15, 2);
              {
                var consequent_18 = ($$anchor5) => {
                  var div_16 = root_11$2();
                  var node_30 = child(div_16);
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("LLLL"))));
                    Tooltip(node_30, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps2) => {
                        var span_1 = root_10$2();
                        var node_31 = child(span_1);
                        {
                          var consequent_17 = ($$anchor7) => {
                            var text_5 = text();
                            template_effect(($02) => set_text(text_5, $02), [
                              () => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("LT")))
                            ]);
                            append($$anchor7, text_5);
                          };
                          var d = user_derived(() => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).isToday())));
                          var alternate_5 = ($$anchor7) => {
                            var text_6 = text();
                            template_effect(($02) => set_text(text_6, $02), [
                              () => ($i18n(), deep_read_state(formatDate), deep_read_state(message()), deep_read_state(dayjs2), untrack(() => $i18n().t(formatDate(message().created_at / 1e6), {
                                LOCALIZED_TIME: dayjs2(message().created_at / 1e6).format("LT"),
                                LOCALIZED_DATE: dayjs2(message().created_at / 1e6).format("L")
                              })))
                            ]);
                            append($$anchor7, text_6);
                          };
                          if_block(node_31, ($$render) => {
                            if (get(d)) $$render(consequent_17);
                            else $$render(alternate_5, -1);
                          });
                        }
                        reset(span_1);
                        append($$anchor6, span_1);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_16);
                  append($$anchor5, div_16);
                };
                if_block(node_29, ($$render) => {
                  if (deep_read_state(message()), untrack(() => message().created_at)) $$render(consequent_18);
                });
              }
              append($$anchor4, fragment_17);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_27, ($$render) => {
          if (showUserProfile()) $$render(consequent_19);
        });
      }
      var node_32 = sibling(node_27, 2);
      {
        var consequent_20 = ($$anchor3) => {
          var div_17 = root_13();
          var node_33 = child(div_17);
          Skeleton(node_33, {});
          reset(div_17);
          append($$anchor3, div_17);
        };
        var consequent_23 = ($$anchor3) => {
          var div_18 = root_16();
          each(
            div_18,
            5,
            () => (deep_read_state(message()), untrack(() => {
              var _a, _b;
              return (_b = (_a = message()) == null ? void 0 : _a.data) == null ? void 0 : _b.files;
            })),
            index,
            ($$anchor4, file) => {
              const fileUrl = derived_safe_equal(() => (get(file), deep_read_state(REXPRO_API_BASE_URL), untrack(() => {
                var _a;
                return get(file).url.startsWith("data") || get(file).url.startsWith("http") ? get(file).url : `${REXPRO_API_BASE_URL}/files/${get(file).url}${((_a = get(file)) == null ? void 0 : _a.content_type) ? "/content" : ""}`;
              })));
              var div_19 = root_15();
              var node_34 = child(div_19);
              {
                var consequent_21 = ($$anchor5) => {
                  Image($$anchor5, {
                    get src() {
                      return get(fileUrl);
                    },
                    get alt() {
                      return get(file), untrack(() => get(file).name);
                    },
                    imageClassName: " max-h-96 rounded-lg"
                  });
                };
                var d_1 = user_derived(() => (get(file), untrack(() => {
                  var _a;
                  return get(file).type === "image" || (((_a = get(file)) == null ? void 0 : _a.content_type) ?? "").startsWith("image/");
                })));
                var consequent_22 = ($$anchor5) => {
                  var video = root_14();
                  template_effect(() => set_attribute(video, "src", get(fileUrl)));
                  append($$anchor5, video);
                };
                var d_2 = user_derived(() => (get(file), untrack(() => {
                  var _a;
                  return get(file).type === "video" || (((_a = get(file)) == null ? void 0 : _a.content_type) ?? "").startsWith("video/");
                })));
                var alternate_6 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => (get(file), untrack(() => {
                      var _a;
                      return (_a = get(file)) == null ? void 0 : _a.size;
                    })));
                    FileItem($$anchor5, {
                      get item() {
                        return get(file);
                      },
                      get url() {
                        return get(file), untrack(() => get(file).url);
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
                      small: true
                    });
                  }
                };
                if_block(node_34, ($$render) => {
                  if (get(d_1)) $$render(consequent_21);
                  else if (get(d_2)) $$render(consequent_22, 1);
                  else $$render(alternate_6, -1);
                });
              }
              reset(div_19);
              append($$anchor4, div_19);
            }
          );
          reset(div_18);
          template_effect(() => {
            set_attribute(div_18, "dir", ($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.chatDirection) ?? "auto";
            })));
            div_18.dir = div_18.dir;
          });
          append($$anchor3, div_18);
        };
        if_block(node_32, ($$render) => {
          if (deep_read_state(message()), untrack(() => {
            var _a;
            return ((_a = message()) == null ? void 0 : _a.data) === true;
          })) $$render(consequent_20);
          else if (deep_read_state(message()), untrack(() => {
            var _a, _b;
            return (((_b = (_a = message()) == null ? void 0 : _a.data) == null ? void 0 : _b.files) ?? []).length > 0;
          })) $$render(consequent_23, 1);
        });
      }
      var node_35 = sibling(node_32, 2);
      {
        var consequent_24 = ($$anchor3) => {
          var div_20 = root_17();
          var node_36 = child(div_20);
          Textarea(node_36, {
            className: " bg-transparent outline-hidden w-full resize-none",
            onKeydown: (e) => {
              var _a, _b;
              if (e.key === "Escape") {
                (_a = document.getElementById("close-edit-message-button")) == null ? void 0 : _a.click();
              }
              const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;
              const isEnterPressed = e.key === "Enter";
              if (isCmdOrCtrlPressed && isEnterPressed) {
                (_b = document.getElementById("confirm-edit-message-button")) == null ? void 0 : _b.click();
              }
            },
            get value() {
              return get(editedContent);
            },
            set value($$value) {
              set(editedContent, $$value);
            },
            $$legacy: true
          });
          var div_21 = sibling(node_36, 2);
          var div_22 = child(div_21);
          var button_7 = child(div_22);
          var text_7 = child(button_7, true);
          reset(button_7);
          var button_8 = sibling(button_7, 2);
          var text_8 = child(button_8, true);
          reset(button_8);
          reset(div_22);
          reset(div_21);
          reset(div_20);
          template_effect(
            ($0, $1) => {
              set_text(text_7, $0);
              set_text(text_8, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
              () => ($i18n(), untrack(() => $i18n().t("Save")))
            ]
          );
          event("click", button_7, () => {
            set(edit, false);
            set(editedContent, null);
          });
          event("click", button_8, async () => {
            onEdit()(get(editedContent));
            set(edit, false);
            set(editedContent, null);
          });
          append($$anchor3, div_20);
        };
        var alternate_8 = ($$anchor3) => {
          var fragment_24 = root_25();
          var div_23 = first_child(fragment_24);
          var node_37 = child(div_23);
          {
            var consequent_25 = ($$anchor4) => {
              Skeleton($$anchor4, {});
            };
            var d_3 = user_derived(() => (deep_read_state(message()), untrack(() => {
              var _a, _b, _c;
              return (((_a = message()) == null ? void 0 : _a.content) ?? "").trim() === "" && ((_c = (_b = message()) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id);
            })));
            var alternate_7 = ($$anchor4) => {
              var fragment_26 = root_19();
              var node_38 = first_child(fragment_26);
              {
                let $0 = derived_safe_equal(() => (deep_read_state(message()), untrack(() => {
                  var _a, _b;
                  return !!((_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id);
                })));
                Markdown(node_38, {
                  get id() {
                    return deep_read_state(message()), untrack(() => message().id);
                  },
                  get content() {
                    return deep_read_state(message()), untrack(() => message().content);
                  },
                  paragraphTag: "span",
                  get allowEmbeds() {
                    return get($0);
                  }
                });
              }
              var node_39 = sibling(node_38);
              {
                var consequent_26 = ($$anchor5) => {
                  var span_2 = root_18();
                  var text_9 = child(span_2);
                  reset(span_2);
                  template_effect(($0) => set_text(text_9, `(${$0 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("edited")))]);
                  append($$anchor5, span_2);
                };
                if_block(node_39, ($$render) => {
                  if (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return message().created_at !== message().updated_at && (((_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id) ?? null) === null;
                  })) $$render(consequent_26);
                });
              }
              append($$anchor4, fragment_26);
            };
            if_block(node_37, ($$render) => {
              if (get(d_3)) $$render(consequent_25);
              else $$render(alternate_7, -1);
            });
          }
          reset(div_23);
          var node_40 = sibling(div_23, 2);
          {
            var consequent_29 = ($$anchor4) => {
              var div_24 = root_23();
              var div_25 = child(div_24);
              var node_41 = child(div_25);
              each(
                node_41,
                1,
                () => (deep_read_state(message()), untrack(() => message().reactions)),
                index,
                ($$anchor5, reaction) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), get(reaction), $user(), untrack(() => $i18n().t("{{NAMES}} reacted with {{REACTION}}", {
                      NAMES: get(reaction).users.reduce(
                        (acc, u, idx) => {
                          var _a;
                          const name = u.id === ((_a = $user()) == null ? void 0 : _a.id) ? $i18n().t("You") : u.name;
                          const total = get(reaction).users.length;
                          if (idx < 3) {
                            const separator = idx === 0 ? "" : idx === Math.min(2, total - 1) ? ` ${$i18n().t("and")} ` : ", ";
                            return `${acc}${separator}${name}`;
                          }
                          if (idx === 3 && total > 4) {
                            return acc + ` ${$i18n().t("and {{COUNT}} others", { COUNT: total - 3 })}`;
                          }
                          return acc;
                        },
                        ""
                      ).trim(),
                      REACTION: `:${get(reaction).name}:`
                    }))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps) => {
                        var button_9 = root_21();
                        var node_42 = child(button_9);
                        Emoji(node_42, {
                          get shortCode() {
                            return get(reaction), untrack(() => get(reaction).name);
                          }
                        });
                        var node_43 = sibling(node_42, 2);
                        {
                          var consequent_27 = ($$anchor7) => {
                            var div_26 = root_20();
                            var text_10 = child(div_26, true);
                            reset(div_26);
                            template_effect(() => set_text(text_10, (get(reaction), untrack(() => {
                              var _a;
                              return (_a = get(reaction).users) == null ? void 0 : _a.length;
                            }))));
                            append($$anchor7, div_26);
                          };
                          if_block(node_43, ($$render) => {
                            if (get(reaction), untrack(() => get(reaction).users.length > 0)) $$render(consequent_27);
                          });
                        }
                        reset(button_9);
                        template_effect(($02) => set_class(button_9, 1, `flex items-center gap-1.5 transition rounded-xl px-2 py-1 cursor-pointer ${$02 ?? ""}`, "svelte-s6wdik"), [
                          () => (get(reaction), $user(), untrack(() => {
                            var _a;
                            return get(reaction).users.map((u) => u.id).includes((_a = $user()) == null ? void 0 : _a.id) ? " bg-blue-300/10 outline outline-blue-500/50 outline-1" : "bg-gray-300/10 dark:bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1";
                          }))
                        ]);
                        event("click", button_9, () => {
                          if (onReaction()) {
                            onReaction()(get(reaction).name);
                          }
                        });
                        append($$anchor6, button_9);
                      },
                      $$slots: { default: true }
                    });
                  }
                }
              );
              var node_44 = sibling(node_41, 2);
              {
                var consequent_28 = ($$anchor5) => {
                  EmojiPicker($$anchor5, {
                    onSubmit: (name) => {
                      onReaction()(name);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      {
                        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Reaction"))));
                        Tooltip($$anchor6, {
                          get content() {
                            return get($0);
                          },
                          children: ($$anchor7, $$slotProps2) => {
                            var div_27 = root_22();
                            var node_45 = child(div_27);
                            FaceSmile(node_45, {});
                            reset(div_27);
                            append($$anchor7, div_27);
                          },
                          $$slots: { default: true }
                        });
                      }
                    },
                    $$slots: { default: true }
                  });
                };
                if_block(node_44, ($$render) => {
                  if (onReaction()) $$render(consequent_28);
                });
              }
              reset(div_25);
              reset(div_24);
              append($$anchor4, div_24);
            };
            if_block(node_40, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a;
                return (((_a = message()) == null ? void 0 : _a.reactions) ?? []).length > 0;
              })) $$render(consequent_29);
            });
          }
          var node_46 = sibling(node_40, 2);
          {
            var consequent_30 = ($$anchor4) => {
              var div_28 = root_24();
              var button_10 = child(div_28);
              var span_3 = child(button_10);
              var text_11 = child(span_3, true);
              reset(span_3);
              var span_4 = sibling(span_3);
              var text_12 = child(span_4);
              reset(span_4);
              var span_5 = sibling(span_4, 2);
              var node_47 = child(span_5);
              ChevronRight(node_47, { className: "size-2.5", strokeWidth: "3" });
              reset(span_5);
              reset(button_10);
              reset(div_28);
              template_effect(
                ($0, $1, $2) => {
                  set_text(text_11, $0);
                  set_text(text_12, ` - ${$1 ?? ""}
										${$2 ?? ""}`);
                },
                [
                  () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t("{{COUNT}} Replies", { COUNT: message().reply_count }))),
                  () => ($i18n(), untrack(() => $i18n().t("Last reply"))),
                  () => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2.unix(message().latest_reply_at / 1e9).fromNow()))
                ]
              );
              event("click", button_10, () => {
                onThread()(message().id);
              });
              append($$anchor4, div_28);
            };
            if_block(node_46, ($$render) => {
              if (deep_read_state(thread()), deep_read_state(message()), untrack(() => !thread() && message().reply_count > 0)) $$render(consequent_30);
            });
          }
          template_effect(() => set_class(div_23, 1, ` min-w-full markdown-prose ${pending() ? "opacity-50" : ""}`, "svelte-s6wdik"));
          append($$anchor3, fragment_24);
        };
        if_block(node_35, ($$render) => {
          if (get(edit)) $$render(consequent_24);
          else $$render(alternate_8, -1);
        });
      }
      reset(div_14);
      reset(div_11);
      reset(div_3);
      reset(div);
      template_effect(() => {
        set_attribute(div_3, "id", `message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`);
        set_class(
          div_3,
          1,
          `flex flex-col justify-between w-full max-w-full mx-auto group hover:bg-gray-300/5 dark:hover:bg-gray-700/5 relative ${(deep_read_state(className()), deep_read_state(replyToMessage()), deep_read_state(message()), $user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f, _g;
            return className() ? className() : `px-5 ${replyToMessage() ? "border-l-4 border-blue-500 bg-blue-100/10 dark:bg-blue-100/5 pl-4" : ""} ${(((_c = (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id) ?? ((_e = (_d = message()) == null ? void 0 : _d.reply_to_message) == null ? void 0 : _e.user_id)) === ((_f = $user()) == null ? void 0 : _f.id) ? "border-l-4 border-orange-500 bg-orange-100/10 dark:bg-orange-100/5 pl-4" : ""} ${((_g = message()) == null ? void 0 : _g.is_pinned) ? "bg-yellow-100/20 dark:bg-yellow-100/5" : ""}`;
          })) ?? ""} ${showUserProfile() ? "pt-1.5 pb-0.5" : ""}`,
          "svelte-s6wdik"
        );
        set_style(div_3, `transform: translateX(${get(swipeOffsetX) ?? ""}px); ${get(swipeOffsetX) > 0 ? "" : "transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);"}`);
        set_class(div_11, 1, ` flex w-full message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""} `, "svelte-s6wdik");
        set_attribute(div_11, "id", `message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`);
        set_attribute(div_11, "dir", ($settings(), untrack(() => $settings().chatDirection)));
        div_11.dir = div_11.dir;
      });
      event("touchstart", div, handleTouchStart);
      event("touchmove", div, handleTouchMove);
      event("touchend", div, handleTouchEnd);
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (message()) $$render(consequent_31);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$8 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_1$7 = from_html(`<img/>`);
var root_2$5 = from_html(`<div class="flex ml-[1px] mr-0.5"></div>`);
var root_3$5 = from_html(`<div class="flex flex-col gap-1.5 pb-5 pt-10"><!> <div class="text-2xl font-medium capitalize"><!></div> <div class=" text-gray-500"> </div></div>`);
var root_4$4 = from_html(`<div class="flex justify-center text-xs items-center gap-2 py-5"><div class=" "> </div></div>`);
var root_5$4 = from_html(`<hr class=" border-gray-50 dark:border-gray-700/20 py-2.5 w-full"/>`);
var root_6$3 = from_html(`<div class="px-5 max-w-full mx-auto"><!> <!></div>`);
var root_7$2 = from_html(`<div><!> <!> <div class="pb-6"></div></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(isToday);
  dayjs2.extend(isYesterday);
  const i18n2 = getContext("i18n");
  let id = prop($$props, "id", 8, null);
  let channel = prop($$props, "channel", 8, null);
  let messages = prop($$props, "messages", 28, () => []);
  let replyToMessage = prop($$props, "replyToMessage", 8, null);
  let top = prop($$props, "top", 8, false);
  let thread = prop($$props, "thread", 8, false);
  let onLoad = prop($$props, "onLoad", 8, () => {
  });
  let onReply = prop($$props, "onReply", 8, () => {
  });
  let onThread = prop($$props, "onThread", 8, () => {
  });
  let messagesLoading = mutable_source(false);
  const loadMoreMessages = async () => {
    const element = document.getElementById("messages-container");
    element.scrollTop = element.scrollTop + 100;
    set(messagesLoading, true);
    await onLoad()();
    await tick();
    set(messagesLoading, false);
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_6 = ($$anchor2) => {
      const messageList = derived_safe_equal(() => (deep_read_state(messages()), untrack(() => messages().slice().reverse())));
      var div = root_7$2();
      var node_1 = child(div);
      {
        var consequent = ($$anchor3) => {
          Loader($$anchor3, {
            $$events: {
              visible: (e) => {
                console.info("visible");
                if (!get(messagesLoading)) {
                  loadMoreMessages();
                }
              }
            },
            children: ($$anchor4, $$slotProps) => {
              var div_1 = root$8();
              var node_2 = child(div_1);
              Spinner(node_2, { className: " size-4" });
              var div_2 = sibling(node_2, 2);
              var text2 = child(div_2, true);
              reset(div_2);
              reset(div_1);
              template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
              append($$anchor4, div_1);
            },
            $$slots: { default: true }
          });
        };
        var consequent_5 = ($$anchor3) => {
          var div_3 = root_6$3();
          var node_3 = child(div_3);
          {
            var consequent_3 = ($$anchor4) => {
              var div_4 = root_3$5();
              var node_4 = child(div_4);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_5 = root_2$5();
                  each(
                    div_5,
                    5,
                    () => (deep_read_state(channel()), $user(), untrack(() => channel().users.filter((u) => {
                      var _a;
                      return u.id !== ((_a = $user()) == null ? void 0 : _a.id);
                    }).slice(0, 2))),
                    index,
                    ($$anchor6, u, index2) => {
                      var img = root_1$7();
                      set_class(img, 1, ` size-7.5 rounded-full border-2 border-white dark:border-gray-900 ${index2 === 1 ? "-ml-2.5" : ""}`);
                      template_effect(() => {
                        set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(u), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(u).id}/profile/image`)));
                        set_attribute(img, "alt", (get(u), untrack(() => get(u).name)));
                      });
                      append($$anchor6, img);
                    }
                  );
                  reset(div_5);
                  append($$anchor5, div_5);
                };
                if_block(node_4, ($$render) => {
                  if (deep_read_state(channel()), untrack(() => {
                    var _a;
                    return ((_a = channel()) == null ? void 0 : _a.type) === "dm";
                  })) $$render(consequent_1);
                });
              }
              var div_6 = sibling(node_4, 2);
              var node_5 = child(div_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var text_1 = text();
                  template_effect(() => set_text(text_1, (deep_read_state(channel()), untrack(() => channel().name))));
                  append($$anchor5, text_1);
                };
                var alternate = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(($0) => set_text(text_2, $0), [
                    () => (deep_read_state(channel()), $user(), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = channel()) == null ? void 0 : _a.users) == null ? void 0 : _b.filter((u) => {
                        var _a2;
                        return u.id !== ((_a2 = $user()) == null ? void 0 : _a2.id);
                      }).map((u) => u.name).join(", ");
                    }))
                  ]);
                  append($$anchor5, text_2);
                };
                if_block(node_5, ($$render) => {
                  if (deep_read_state(channel()), untrack(() => {
                    var _a;
                    return (_a = channel()) == null ? void 0 : _a.name;
                  })) $$render(consequent_2);
                  else $$render(alternate, -1);
                });
              }
              reset(div_6);
              var div_7 = sibling(div_6, 2);
              var text_3 = child(div_7, true);
              reset(div_7);
              reset(div_4);
              template_effect(($0) => set_text(text_3, $0), [
                () => ($i18n(), deep_read_state(dayjs2), deep_read_state(channel()), untrack(() => $i18n().t("This channel was created on {{createdAt}}. This is the very beginning of the {{channelName}} channel.", {
                  createdAt: dayjs2(channel().created_at / 1e6).format("MMMM D, YYYY"),
                  channelName: channel().name
                })))
              ]);
              append($$anchor4, div_4);
            };
            var alternate_1 = ($$anchor4) => {
              var div_8 = root_4$4();
              var div_9 = child(div_8);
              var text_4 = child(div_9, true);
              reset(div_9);
              reset(div_8);
              template_effect(($0) => set_text(text_4, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Start of the channel")))
              ]);
              append($$anchor4, div_8);
            };
            if_block(node_3, ($$render) => {
              if (channel()) $$render(consequent_3);
              else $$render(alternate_1, -1);
            });
          }
          var node_6 = sibling(node_3, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var hr = root_5$4();
              append($$anchor4, hr);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(get(messageList)), untrack(() => get(messageList).length > 0)) $$render(consequent_4);
            });
          }
          reset(div_3);
          append($$anchor3, div_3);
        };
        if_block(node_1, ($$render) => {
          if (!top()) $$render(consequent);
          else if (!thread()) $$render(consequent_5, 1);
        });
      }
      var node_7 = sibling(node_1, 2);
      each(node_7, 3, () => get(messageList), (message) => id() ? `${id()}-${message.id}` : message.id, ($$anchor3, message, messageIdx) => {
        {
          let $0 = derived_safe_equal(() => (deep_read_state(replyToMessage()), get(message), untrack(() => {
            var _a;
            return ((_a = replyToMessage()) == null ? void 0 : _a.id) === get(message).id;
          })));
          let $1 = derived_safe_equal(() => (deep_read_state(channel()), get(message), untrack(() => {
            var _a, _b;
            return !((_a = channel()) == null ? void 0 : _a.write_access) || ((_b = get(message)) == null ? void 0 : _b.temp_id);
          })));
          let $2 = derived_safe_equal(() => (get(message), untrack(() => {
            var _a;
            return !!((_a = get(message)) == null ? void 0 : _a.temp_id);
          })));
          let $3 = derived_safe_equal(() => (deep_read_state(get(messageIdx)), deep_read_state(get(messageList)), get(message), untrack(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            return get(messageIdx) === 0 || ((_a = get(messageList).at(get(messageIdx) - 1)) == null ? void 0 : _a.user_id) !== get(message).user_id || ((_c = (_b = get(messageList).at(get(messageIdx) - 1)) == null ? void 0 : _b.user) == null ? void 0 : _c.id) !== ((_d = get(message).user) == null ? void 0 : _d.id) || ((_f = (_e = get(messageList).at(get(messageIdx) - 1)) == null ? void 0 : _e.meta) == null ? void 0 : _f.model_id) !== ((_h = (_g = get(message)) == null ? void 0 : _g.meta) == null ? void 0 : _h.model_id) || ((_i = get(message)) == null ? void 0 : _i.reply_to_message) !== null;
          })));
          Message($$anchor3, {
            get message() {
              return get(message);
            },
            get channel() {
              return channel();
            },
            get thread() {
              return thread();
            },
            get replyToMessage() {
              return get($0);
            },
            get disabled() {
              return get($1);
            },
            get pending() {
              return get($2);
            },
            get showUserProfile() {
              return get($3);
            },
            onDelete: () => {
              messages(messages().filter((m) => m.id !== get(message).id));
              deleteMessage(localStorage.token, get(message).channel_id, get(message).id).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            },
            onEdit: (content) => {
              messages(messages().map((m) => {
                if (m.id === get(message).id) {
                  m.content = content;
                }
                return m;
              }));
              updateMessage(localStorage.token, get(message).channel_id, get(message).id, { content }).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            },
            onReply: (message2) => {
              onReply()(message2);
            },
            onPin: async (message2) => {
              messages(messages().map((m) => {
                var _a;
                if (m.id === message2.id) {
                  m.is_pinned = !m.is_pinned;
                  m.pinned_by = !m.is_pinned ? null : (_a = $user()) == null ? void 0 : _a.id;
                  m.pinned_at = !m.is_pinned ? null : Date.now() * 1e6;
                }
                return m;
              }));
              await pinMessage(localStorage.token, message2.channel_id, message2.id, message2.is_pinned).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            },
            onThread: (id2) => {
              onThread()(id2);
            },
            onReaction: (name) => {
              var _a, _b, _c;
              if (((_c = (_b = (((_a = get(message)) == null ? void 0 : _a.reactions) ?? []).find((reaction) => reaction.name === name)) == null ? void 0 : _b.users) == null ? void 0 : _c.some((u) => {
                var _a2;
                return u.id === ((_a2 = $user()) == null ? void 0 : _a2.id);
              })) ?? false) {
                messages(messages().map((m) => {
                  if (m.id === get(message).id) {
                    const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                    if (reaction) {
                      reaction.users = reaction.users.filter((u) => {
                        var _a2;
                        return u.id !== ((_a2 = $user()) == null ? void 0 : _a2.id);
                      });
                      reaction.count = reaction.users.length;
                      if (reaction.count === 0) {
                        m.reactions = m.reactions.filter((r) => r.name !== name);
                      }
                    }
                  }
                  return m;
                }));
                removeReaction(localStorage.token, get(message).channel_id, get(message).id, name).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              } else {
                messages(messages().map((m) => {
                  var _a2, _b2, _c2, _d;
                  if (m.id === get(message).id) {
                    if (m.reactions) {
                      const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                      if (reaction) {
                        reaction.users.push({ id: (_a2 = $user()) == null ? void 0 : _a2.id, name: (_b2 = $user()) == null ? void 0 : _b2.name });
                        reaction.count = reaction.users.length;
                      } else {
                        m.reactions.push({
                          name,
                          users: [{ id: (_c2 = $user()) == null ? void 0 : _c2.id, name: (_d = $user()) == null ? void 0 : _d.name }],
                          count: 1
                        });
                      }
                    }
                  }
                  return m;
                }));
                addReaction(localStorage.token, get(message).channel_id, get(message).id, name).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            }
          });
        }
      });
      next(2);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (messages()) $$render(consequent_6);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$7 = from_svg(`<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function UserAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$6 = from_html(`<div class="my-10"><!></div>`);
var root_1$6 = from_html(`<div><button type="button" class=" px-3 py-1.5 gap-1 rounded-xl bg-gray-100/50 dark:text-white dark:bg-gray-850/50 text-black transition font-medium text-xs flex items-center justify-center"><!> <span> </span></button></div>`);
var root_2$4 = from_html(`<div class="flex gap-1 px-1 mb-1"><div class=" flex w-full space-x-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div></div>`);
var root_3$4 = from_html(`<img class="rounded-2xl w-6 h-6 object-cover flex-shrink-0" alt="user"/>`);
var root_4$3 = from_html(`<div class="font-medium truncate"> </div>`);
var root_5$3 = from_html(`<div><span class="relative flex size-1.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-1.5 rounded-full bg-green-500"></span></span></div>`);
var root_6$2 = from_html(`<div><button class=" rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition disabled:opacity-50 disabled:cursor-not-allowed" type="button"><!></button></div>`);
var root_7$1 = from_html(`<div class=" dark:border-gray-850 text-xs flex items-center justify-between"><div class="px-2 py-1.5 font-medium text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2"><!> <!> <!></div></div> <div class="px-2 py-1 flex items-center gap-1 translate-y-0.5"><div class=" "><!></div> <!></div></div>`);
var root_8$1 = from_html(`<div class="scrollbar-hidden relative whitespace-nowrap w-full max-w-full"><div class=" text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full"><div class="w-full"></div></div></div> <!>`, 1);
var root_9$1 = from_html(`<div class="text-gray-500 text-xs text-center py-5 px-10"> </div>`);
var root_10$1 = from_html(`<div class="flex items-center justify-between px-2 mb-1"><div class="flex gap-1 items-center"><span class="text-sm"> </span> <span class="text-sm text-gray-500"> </span></div> <!></div> <!> <!>`, 1);
var root_11$1 = from_html(`<div class="flex flex-col justify-center"><!></div>`);
function UserList($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $_user = () => store_get(user, "$_user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(localizedFormat);
  const i18n2 = getContext("i18n");
  let channel = prop($$props, "channel", 8, null);
  let onAdd = prop($$props, "onAdd", 8, null);
  let onRemove = prop($$props, "onRemove", 8, null);
  let search = prop($$props, "search", 8, true);
  prop($$props, "sort", 8, true);
  let page2 = mutable_source(1);
  let users = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let debounceTimer = mutable_source(null);
  let orderBy = mutable_source(
    "name"
    // default sort key
  );
  let direction = mutable_source(
    "asc"
    // default sort order
  );
  const getUserList = async () => {
    try {
      const res = await getChannelMembersById(localStorage.token, channel().id, get(query), get(orderBy), get(direction), get(page2)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(users, res.users);
        set(total, res.total);
      }
    } catch (err) {
      /* @__PURE__ */ console.error(err);
    }
  };
  legacy_pre_effect(
    () => (get(query), deep_read_state(channel()), get(debounceTimer)),
    () => {
      if (get(query) !== void 0 && channel() !== null) {
        clearTimeout(get(debounceTimer));
        set(debounceTimer, setTimeout(
          () => {
            getUserList();
          },
          300
        ));
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(channel()), get(page2), get(orderBy), get(direction)),
    () => {
      if (channel() !== null && get(page2) && get(orderBy) && get(direction)) {
        getUserList();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root_11$1();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root$6();
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var alternate_1 = ($$anchor2) => {
      var fragment = root_10$1();
      var div_2 = first_child(fragment);
      var div_3 = child(div_2);
      var span = child(div_3);
      var text2 = child(span, true);
      reset(span);
      var span_1 = sibling(span, 2);
      var text_1 = child(span_1, true);
      reset(span_1);
      reset(div_3);
      var node_2 = sibling(div_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_4 = root_1$6();
          var button = child(div_4);
          var node_3 = child(button);
          Plus(node_3, { className: "size-3.5 " });
          var span_2 = sibling(node_3, 2);
          var text_2 = child(span_2, true);
          reset(span_2);
          reset(button);
          reset(div_4);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Add Member")))]);
          event("click", button, function(...$$args) {
            var _a;
            (_a = onAdd()) == null ? void 0 : _a.apply(this, $$args);
          });
          append($$anchor3, div_4);
        };
        if_block(node_2, ($$render) => {
          if (onAdd()) $$render(consequent_1);
        });
      }
      reset(div_2);
      var node_4 = sibling(div_2, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_5 = root_2$4();
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var input = sibling(child(div_7), 2);
          remove_input_defaults(input);
          reset(div_7);
          reset(div_6);
          reset(div_5);
          template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
          bind_value(input, () => get(query), ($$value) => set(query, $$value));
          append($$anchor3, div_5);
        };
        if_block(node_4, ($$render) => {
          if (search()) $$render(consequent_2);
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var fragment_1 = root_8$1();
          var div_8 = first_child(fragment_1);
          var div_9 = child(div_8);
          var div_10 = child(div_9);
          each(div_10, 7, () => get(users), (user2) => user2.id, ($$anchor4, user2) => {
            var div_11 = root_7$1();
            var div_12 = child(div_11);
            var div_13 = child(div_12);
            var node_6 = child(div_13);
            ProfilePreview(node_6, {
              get user() {
                return get(user2);
              },
              side: "right",
              align: "center",
              sideOffset: 6,
              children: ($$anchor5, $$slotProps) => {
                var img = root_3$4();
                template_effect(() => set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(user2), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(user2).id}/profile/image`))));
                append($$anchor5, img);
              },
              $$slots: { default: true }
            });
            var node_7 = sibling(node_6, 2);
            Tooltip(node_7, {
              get content() {
                return get(user2), untrack(() => get(user2).email);
              },
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var div_14 = root_4$3();
                var text_3 = child(div_14, true);
                reset(div_14);
                template_effect(() => set_text(text_3, (get(user2), untrack(() => get(user2).name))));
                append($$anchor5, div_14);
              },
              $$slots: { default: true }
            });
            var node_8 = sibling(node_7, 2);
            {
              var consequent_3 = ($$anchor5) => {
                var div_15 = root_5$3();
                append($$anchor5, div_15);
              };
              if_block(node_8, ($$render) => {
                if (get(user2), untrack(() => {
                  var _a;
                  return (_a = get(user2)) == null ? void 0 : _a.is_active;
                })) $$render(consequent_3);
              });
            }
            reset(div_13);
            reset(div_12);
            var div_16 = sibling(div_12, 2);
            var div_17 = child(div_16);
            var node_9 = child(div_17);
            {
              let $0 = derived_safe_equal(() => (get(user2), untrack(() => get(user2).role === "admin" ? "info" : get(user2).role === "user" ? "success" : "muted")));
              let $1 = derived_safe_equal(() => ($i18n(), get(user2), untrack(() => $i18n().t(get(user2).role))));
              Badge(node_9, {
                get type() {
                  return get($0);
                },
                get content() {
                  return get($1);
                }
              });
            }
            reset(div_17);
            var node_10 = sibling(div_17, 2);
            {
              var consequent_4 = ($$anchor5) => {
                var div_18 = root_6$2();
                var button_1 = child(div_18);
                var node_11 = child(button_1);
                XMark(node_11, {});
                reset(button_1);
                reset(div_18);
                template_effect(() => button_1.disabled = (get(user2), $_user(), untrack(() => {
                  var _a;
                  return get(user2).id === ((_a = $_user()) == null ? void 0 : _a.id);
                })));
                event("click", button_1, () => {
                  onRemove()(get(user2).id);
                });
                append($$anchor5, div_18);
              };
              if_block(node_10, ($$render) => {
                if (onRemove()) $$render(consequent_4);
              });
            }
            reset(div_16);
            reset(div_11);
            append($$anchor4, div_11);
          });
          reset(div_10);
          reset(div_9);
          reset(div_8);
          var node_12 = sibling(div_8, 2);
          {
            var consequent_5 = ($$anchor4) => {
              Pagination_1($$anchor4, {
                get count() {
                  return get(total);
                },
                perPage: 30,
                get page() {
                  return get(page2);
                },
                set page($$value) {
                  set(page2, $$value);
                },
                $$legacy: true
              });
            };
            if_block(node_12, ($$render) => {
              if (get(total) > 30) $$render(consequent_5);
            });
          }
          append($$anchor3, fragment_1);
        };
        var alternate = ($$anchor3) => {
          var div_19 = root_9$1();
          var text_4 = child(div_19, true);
          reset(div_19);
          template_effect(($0) => set_text(text_4, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No users were found.")))
          ]);
          append($$anchor3, div_19);
        };
        if_block(node_5, ($$render) => {
          if (get(users), untrack(() => get(users).length > 0)) $$render(consequent_6);
          else $$render(alternate, -1);
        });
      }
      template_effect(
        ($0) => {
          set_text(text2, $0);
          set_text(text_1, get(total));
        },
        [() => ($i18n(), untrack(() => $i18n().t("Members")))]
      );
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(users) === null || get(total) === null) $$render(consequent);
      else $$render(alternate_1, -1);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$5 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$5 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0"> </div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2"><!></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button type="submit"> <!></button></div></form></div></div></div>`);
function AddMembersModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let channel = prop($$props, "channel", 8, null);
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let groupIds = mutable_source([]);
  let userIds = mutable_source([]);
  let loading = mutable_source(false);
  const submitHandler = async () => {
    const res = await addMembersById(localStorage.token, channel().id, { user_ids: get(userIds), group_ids: get(groupIds) }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Members added successfully"));
      onUpdate()();
      show(false);
    } else {
      toast.error($i18n().t("Failed to add members"));
    }
  };
  const reset$1 = () => {
    set(userIds, []);
    set(groupIds, []);
    set(loading, false);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (!show()) {
      reset$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      Modal($$anchor2, {
        size: "sm",
        get show() {
          return show();
        },
        set show($$value) {
          show($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var div = root_1$5();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var text2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_1 = child(button);
          XMark(node_1, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_4 = sibling(div_1, 2);
          var div_5 = child(div_4);
          var form = child(div_5);
          var div_6 = child(form);
          var node_2 = child(div_6);
          MemberSelector(node_2, {
            includeGroups: true,
            get userIds() {
              return get(userIds);
            },
            set userIds($$value) {
              set(userIds, $$value);
            },
            get groupIds() {
              return get(groupIds);
            },
            set groupIds($$value) {
              set(groupIds, $$value);
            },
            $$legacy: true
          });
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var button_1 = child(div_7);
          var text_1 = child(button_1);
          var node_3 = sibling(text_1);
          {
            var consequent = ($$anchor4) => {
              var div_8 = root$5();
              var node_4 = child(div_8);
              Spinner(node_4, {});
              reset(div_8);
              append($$anchor4, div_8);
            };
            if_block(node_3, ($$render) => {
              if (get(loading)) $$render(consequent);
            });
          }
          reset(button_1);
          reset(div_7);
          reset(form);
          reset(div_5);
          reset(div_4);
          reset(div);
          template_effect(
            ($0, $1) => {
              set_text(text2, $0);
              set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
              button_1.disabled = get(loading);
              set_text(text_1, `${$1 ?? ""} `);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Add Members"))),
              () => ($i18n(), untrack(() => $i18n().t("Add")))
            ]
          );
          event("click", button, () => {
            show(false);
          });
          event("submit", form, (e) => {
            e.preventDefault();
            submitHandler();
          });
          append($$anchor3, div);
        },
        $$slots: { default: true },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$4 = from_html(`<div class=" text-left self-center overflow-hidden w-full line-clamp-1 flex-1"> </div>`);
var root_1$4 = from_html(`<div class=" size-4 justify-center flex items-center"><!></div> <div class=" text-left self-center overflow-hidden w-full line-clamp-1 flex-1"> </div>`, 1);
var root_2$3 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0"><!></div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2"><!></div></form></div></div></div>`);
var root_3$3 = from_html(`<!> <!>`, 1);
function ChannelInfoModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let channel = prop($$props, "channel", 8, null);
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let showAddMembersModal = mutable_source(false);
  const submitHandler = async () => {
  };
  const hasPublicReadGrant = (grants) => Array.isArray(grants) && grants.some((grant) => (grant == null ? void 0 : grant.principal_type) === "user" && (grant == null ? void 0 : grant.principal_id) === "*" && (grant == null ? void 0 : grant.permission) === "read");
  const isPublicChannel = (channel2) => {
    if ((channel2 == null ? void 0 : channel2.type) === "group") {
      if (typeof (channel2 == null ? void 0 : channel2.is_private) === "boolean") {
        return !channel2.is_private;
      }
      return hasPublicReadGrant(channel2 == null ? void 0 : channel2.access_grants);
    }
    return hasPublicReadGrant(channel2 == null ? void 0 : channel2.access_grants);
  };
  const removeMemberHandler = async (userId) => {
    const res = await removeMembersById(localStorage.token, channel().id, { user_ids: [userId] }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Member removed successfully"));
      onUpdate()();
    } else {
      toast.error($i18n().t("Failed to remove member"));
    }
  };
  onMount(() => {
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) ;
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment_1 = root_3$3();
      var node_1 = first_child(fragment_1);
      AddMembersModal(node_1, {
        get channel() {
          return channel();
        },
        get onUpdate() {
          return onUpdate();
        },
        get show() {
          return get(showAddMembersModal);
        },
        set show($$value) {
          set(showAddMembersModal, $$value);
        },
        $$legacy: true
      });
      var node_2 = sibling(node_1, 2);
      Modal(node_2, {
        size: "sm",
        get show() {
          return show();
        },
        set show($$value) {
          show($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var div = root_2$3();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var node_3 = child(div_3);
          {
            var consequent = ($$anchor4) => {
              var div_4 = root$4();
              var text2 = child(div_4, true);
              reset(div_4);
              template_effect(($0) => set_text(text2, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Direct Message")))
              ]);
              append($$anchor4, div_4);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_2 = root_1$4();
              var div_5 = first_child(fragment_2);
              var node_4 = child(div_5);
              {
                var consequent_1 = ($$anchor5) => {
                  Hashtag($$anchor5, { className: "size-3.5", strokeWidth: "2.5" });
                };
                var d = user_derived(() => (deep_read_state(channel()), untrack(() => isPublicChannel(channel()))));
                var alternate = ($$anchor5) => {
                  Lock($$anchor5, { className: "size-5.5", strokeWidth: "2" });
                };
                if_block(node_4, ($$render) => {
                  if (get(d)) $$render(consequent_1);
                  else $$render(alternate, -1);
                });
              }
              reset(div_5);
              var div_6 = sibling(div_5, 2);
              var text_1 = child(div_6, true);
              reset(div_6);
              template_effect(() => set_text(text_1, (deep_read_state(channel()), untrack(() => channel().name))));
              append($$anchor4, fragment_2);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(channel()), untrack(() => {
                var _a;
                return ((_a = channel()) == null ? void 0 : _a.type) === "dm";
              })) $$render(consequent);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_3);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_5 = child(button);
          XMark(node_5, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_7 = sibling(div_1, 2);
          var div_8 = child(div_7);
          var form = child(div_8);
          var div_9 = child(form);
          var node_6 = child(div_9);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(channel()), get(showAddMembersModal), untrack(() => {
              var _a, _b;
              return ((_a = channel()) == null ? void 0 : _a.type) === "group" && ((_b = channel()) == null ? void 0 : _b.is_manager) ? () => {
                set(showAddMembersModal, true);
              } : null;
            })));
            let $1 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
              var _a, _b;
              return ((_a = channel()) == null ? void 0 : _a.type) === "group" && ((_b = channel()) == null ? void 0 : _b.is_manager) ? (userId) => {
                removeMemberHandler(userId);
              } : null;
            })));
            let $2 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
              var _a;
              return ((_a = channel()) == null ? void 0 : _a.type) !== "dm";
            })));
            let $3 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
              var _a;
              return ((_a = channel()) == null ? void 0 : _a.type) !== "dm";
            })));
            UserList(node_6, {
              get channel() {
                return channel();
              },
              get onAdd() {
                return get($0);
              },
              get onRemove() {
                return get($1);
              },
              get search() {
                return get($2);
              },
              get sort() {
                return get($3);
              }
            });
          }
          reset(div_9);
          reset(form);
          reset(div_8);
          reset(div_7);
          reset(div);
          event("click", button, () => {
            show(false);
          });
          event("submit", form, (e) => {
            e.preventDefault();
            submitHandler();
          });
          append($$anchor3, div);
        },
        $$slots: { default: true },
        $$legacy: true
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div class="my-10"><!></div>`);
var root_1$3 = from_html(`<div class=" text-center text-xs text-gray-500 dark:text-gray-400 py-6"> </div>`);
var root_2$2 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_3$2 = from_html(`<!> <!>`, 1);
var root_4$2 = from_html(`<div class="flex flex-col gap-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent py-2"><!></div>`);
var root_5$2 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0"> </div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class="flex flex-col w-full h-full pb-2 gap-1"><!></div></div></div></div>`);
function PinnedMessagesModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let channel = prop($$props, "channel", 8, null);
  let onPin = prop($$props, "onPin", 8, (messageId, pinned) => {
  });
  let page2 = mutable_source(1);
  let pinnedMessages = mutable_source(null);
  let allItemsLoaded = mutable_source(false);
  let loading = mutable_source(false);
  const getPinnedMessages = async () => {
    if (!channel()) return;
    if (get(allItemsLoaded)) return;
    set(loading, true);
    try {
      const res = await getChannelPinnedMessages(localStorage.token, channel().id, get(page2)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(pinnedMessages, [...get(pinnedMessages) ?? [], ...res]);
        if (res.length === 0) {
          set(allItemsLoaded, true);
        }
      }
    } catch (error) {
      /* @__PURE__ */ console.error("Error fetching pinned messages:", error);
    } finally {
      set(loading, false);
    }
  };
  const init$1 = () => {
    set(page2, 1);
    set(pinnedMessages, null);
    set(allItemsLoaded, false);
    getPinnedMessages();
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
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      Modal($$anchor2, {
        size: "sm",
        get show() {
          return show();
        },
        set show($$value) {
          show($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var div = root_5$2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var text2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_1 = child(button);
          XMark(node_1, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_4 = sibling(div_1, 2);
          var div_5 = child(div_4);
          var div_6 = child(div_5);
          var node_2 = child(div_6);
          {
            var consequent = ($$anchor4) => {
              var div_7 = root$3();
              var node_3 = child(div_7);
              Spinner(node_3, { className: "size-5" });
              reset(div_7);
              append($$anchor4, div_7);
            };
            var alternate_1 = ($$anchor4) => {
              var div_8 = root_4$2();
              var node_4 = child(div_8);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_9 = root_1$3();
                  var text_1 = child(div_9, true);
                  reset(div_9);
                  template_effect(($0) => set_text(text_1, $0), [
                    () => ($i18n(), untrack(() => $i18n().t("No pinned messages")))
                  ]);
                  append($$anchor5, div_9);
                };
                var alternate = ($$anchor5) => {
                  var fragment_2 = comment();
                  var node_5 = first_child(fragment_2);
                  each(node_5, 3, () => get(pinnedMessages), (message) => message.id, ($$anchor6, message, messageIdx) => {
                    var fragment_3 = root_3$2();
                    var node_6 = first_child(fragment_3);
                    Message(node_6, {
                      className: "rounded-xl px-2",
                      get message() {
                        return get(message);
                      },
                      get channel() {
                        return channel();
                      },
                      onPin: async (message2) => {
                        set(pinnedMessages, get(pinnedMessages).filter((m) => m.id !== message2.id));
                        onPin()(message2.id, !message2.is_pinned);
                        await pinMessage(localStorage.token, message2.channel_id, message2.id, !message2.is_pinned).catch((error) => {
                          toast.error(`${error}`);
                          return null;
                        });
                        init$1();
                      },
                      onReaction: false,
                      onThread: false,
                      onReply: false,
                      onEdit: false,
                      onDelete: false
                    });
                    var node_7 = sibling(node_6, 2);
                    {
                      var consequent_2 = ($$anchor7) => {
                        Loader($$anchor7, {
                          $$events: {
                            visible: (e) => {
                              /* @__PURE__ */ console.log("visible");
                              if (!get(loading)) {
                                set(page2, get(page2) + 1);
                                getPinnedMessages();
                              }
                            }
                          },
                          children: ($$anchor8, $$slotProps2) => {
                            var div_10 = root_2$2();
                            var node_8 = child(div_10);
                            Spinner(node_8, { className: " size-4" });
                            var div_11 = sibling(node_8, 2);
                            var text_2 = child(div_11, true);
                            reset(div_11);
                            reset(div_10);
                            template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                            append($$anchor8, div_10);
                          },
                          $$slots: { default: true }
                        });
                      };
                      if_block(node_7, ($$render) => {
                        if (deep_read_state(get(messageIdx)), get(pinnedMessages), get(allItemsLoaded), untrack(() => get(messageIdx) === get(pinnedMessages).length - 1 && !get(allItemsLoaded))) $$render(consequent_2);
                      });
                    }
                    append($$anchor6, fragment_3);
                  });
                  append($$anchor5, fragment_2);
                };
                if_block(node_4, ($$render) => {
                  if (get(pinnedMessages), untrack(() => get(pinnedMessages).length === 0)) $$render(consequent_1);
                  else $$render(alternate, -1);
                });
              }
              reset(div_8);
              append($$anchor4, div_8);
            };
            if_block(node_2, ($$render) => {
              if (get(pinnedMessages) === null) $$render(consequent);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_6);
          reset(div_5);
          reset(div_4);
          reset(div);
          template_effect(($0) => set_text(text2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Pinned Messages")))
          ]);
          event("click", button, () => {
            show(false);
          });
          append($$anchor3, div);
        },
        $$slots: { default: true },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_1$2 = from_html(`<div><!></div>`);
var root_2$1 = from_html(`<img/>`);
var root_3$1 = from_html(`<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>`);
var root_4$1 = from_html(`<div class="absolute bottom-0 right-0"><span class="relative flex size-2"><!> <span></span></span></div>`);
var root_5$1 = from_html(`<div class="flex mr-1.5 relative"><!> <!></div>`);
var root_6$1 = from_html(`<div class=" size-4.5 justify-center flex items-center"><!></div>`);
var root_7 = from_html(`<div class="flex items-center gap-0.5 shrink-0"><!> <div class=" text-left self-center overflow-hidden w-full line-clamp-1 flex-1"><!></div></div>`);
var root_8 = from_html(`<button class=" flex cursor-pointer py-1.5 px-1.5 border dark:border-gray-850 border-gray-50 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Pinned Messages" type="button"><div class=" flex items-center gap-0.5 m-auto self-center shrink-0"><!></div></button>`);
var root_9 = from_html(`<button class=" flex cursor-pointer shrink-0 py-1 px-1.5 border dark:border-gray-850 border-gray-50 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Count" type="button"><div class=" flex items-center gap-0.5 m-auto self-center shrink-0"><!> <div class="text-sm shrink-0"> </div></div></button>`);
var root_10 = from_html(`<!> <!>`, 1);
var root_11 = from_html(`<button class="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Menu"><div class=" self-center"><img class="size-6 object-cover rounded-full" alt="User profile" draggable="false"/></div></button>`);
var root_12 = from_html(`<!> <!> <nav class="sticky top-0 z-30 w-full px-1.5 py-1 -mb-8 flex items-center drag-region flex flex-col"><div id="navbar-bg-gradient-to-b" class=" bg-linear-to-b via-50% from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent pointer-events-none absolute inset-0 -bottom-7 z-[-1]"></div> <div class=" flex max-w-full w-full mx-auto px-1 pt-0.5 bg-transparent"><div class="flex items-center w-full max-w-full"><!> <div><!></div> <div class="self-start flex flex-none items-center text-gray-600 dark:text-gray-400 gap-1 shrink-0"><!> <!></div></div></div></nav>`, 1);
function Navbar($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let showChannelPinnedMessagesModal = mutable_source(false);
  let showChannelInfoModal = mutable_source(false);
  const hasPublicReadGrant = (grants) => Array.isArray(grants) && grants.some((grant) => (grant == null ? void 0 : grant.principal_type) === "user" && (grant == null ? void 0 : grant.principal_id) === "*" && (grant == null ? void 0 : grant.permission) === "read");
  const isPublicChannel = (channel2) => {
    if ((channel2 == null ? void 0 : channel2.type) === "group") {
      if (typeof (channel2 == null ? void 0 : channel2.is_private) === "boolean") {
        return !channel2.is_private;
      }
      return hasPublicReadGrant(channel2 == null ? void 0 : channel2.access_grants);
    }
    return hasPublicReadGrant(channel2 == null ? void 0 : channel2.access_grants);
  };
  let channel = prop($$props, "channel", 8);
  let onPin = prop($$props, "onPin", 8, (messageId, pinned) => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  init();
  var fragment = root_12();
  var node = first_child(fragment);
  PinnedMessagesModal(node, {
    get channel() {
      return channel();
    },
    get onPin() {
      return onPin();
    },
    get show() {
      return get(showChannelPinnedMessagesModal);
    },
    set show($$value) {
      set(showChannelPinnedMessagesModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  ChannelInfoModal(node_1, {
    get channel() {
      return channel();
    },
    get onUpdate() {
      return onUpdate();
    },
    get show() {
      return get(showChannelInfoModal);
    },
    set show($$value) {
      set(showChannelInfoModal, $$value);
    },
    $$legacy: true
  });
  var nav = sibling(node_1, 2);
  var div = sibling(child(nav), 2);
  var div_1 = child(div);
  var node_2 = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1$2();
      var node_3 = child(div_2);
      {
        let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
        Tooltip(node_3, {
          get content() {
            return get($0);
          },
          interactive: true,
          children: ($$anchor3, $$slotProps) => {
            var button = root$2();
            var div_3 = child(button);
            var node_4 = child(div_3);
            Sidebar(node_4, {});
            reset(div_3);
            reset(button);
            event("click", button, () => {
              showSidebar.set(!$showSidebar());
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_2);
      template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} mr-1.5 mt-0.5 self-start flex flex-none items-center text-gray-600 dark:text-gray-400`));
      append($$anchor2, div_2);
    };
    if_block(node_2, ($$render) => {
      if ($mobile()) $$render(consequent);
    });
  }
  var div_4 = sibling(node_2, 2);
  var node_5 = child(div_4);
  {
    var consequent_7 = ($$anchor2) => {
      var div_5 = root_7();
      var node_6 = child(div_5);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_1 = comment();
          var node_7 = first_child(fragment_1);
          {
            var consequent_3 = ($$anchor4) => {
              const channelMembers = derived_safe_equal(() => (deep_read_state(channel()), $user(), untrack(() => channel().users.filter((u) => {
                var _a;
                return u.id !== ((_a = $user()) == null ? void 0 : _a.id);
              }))));
              var div_6 = root_5$1();
              var node_8 = child(div_6);
              each(
                node_8,
                1,
                () => (deep_read_state(get(channelMembers)), untrack(() => get(channelMembers).slice(0, 2))),
                index,
                ($$anchor5, u, index2) => {
                  var img = root_2$1();
                  set_class(img, 1, ` size-6.5 rounded-full border-2 border-white dark:border-gray-900 ${index2 === 1 ? "-ml-3" : ""}`);
                  template_effect(() => {
                    set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(u), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(u).id}/profile/image`)));
                    set_attribute(img, "alt", (get(u), untrack(() => get(u).name)));
                  });
                  append($$anchor5, img);
                }
              );
              var node_9 = sibling(node_8, 2);
              {
                var consequent_2 = ($$anchor5) => {
                  var div_7 = root_4$1();
                  var span = child(div_7);
                  var node_10 = child(span);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var span_1 = root_3$1();
                      append($$anchor6, span_1);
                    };
                    if_block(node_10, ($$render) => {
                      if (deep_read_state(get(channelMembers)), untrack(() => {
                        var _a;
                        return (_a = get(channelMembers)[0]) == null ? void 0 : _a.is_active;
                      })) $$render(consequent_1);
                    });
                  }
                  var span_2 = sibling(node_10, 2);
                  reset(span);
                  reset(div_7);
                  template_effect(() => set_class(span_2, 1, `relative inline-flex size-2 rounded-full ${(deep_read_state(get(channelMembers)), untrack(() => {
                    var _a;
                    return ((_a = get(channelMembers)[0]) == null ? void 0 : _a.is_active) ? "bg-green-500" : "bg-gray-300 dark:bg-gray-700";
                  })) ?? ""} border-[1.5px] border-white dark:border-gray-900`));
                  append($$anchor5, div_7);
                };
                if_block(node_9, ($$render) => {
                  if (deep_read_state(get(channelMembers)), untrack(() => get(channelMembers).length === 1)) $$render(consequent_2);
                });
              }
              reset(div_6);
              append($$anchor4, div_6);
            };
            var alternate = ($$anchor4) => {
              Users($$anchor4, { className: "size-4 ml-1 mr-0.5", strokeWidth: "2" });
            };
            if_block(node_7, ($$render) => {
              if (deep_read_state(channel()), untrack(() => {
                var _a;
                return (_a = channel()) == null ? void 0 : _a.users;
              })) $$render(consequent_3);
              else $$render(alternate, -1);
            });
          }
          append($$anchor3, fragment_1);
        };
        var alternate_2 = ($$anchor3) => {
          var div_8 = root_6$1();
          var node_11 = child(div_8);
          {
            var consequent_5 = ($$anchor4) => {
              Hashtag($$anchor4, { className: "size-3.5", strokeWidth: "2.5" });
            };
            var d = user_derived(() => (deep_read_state(channel()), untrack(() => isPublicChannel(channel()))));
            var alternate_1 = ($$anchor4) => {
              Lock($$anchor4, { className: "size-5", strokeWidth: "2" });
            };
            if_block(node_11, ($$render) => {
              if (get(d)) $$render(consequent_5);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_8);
          append($$anchor3, div_8);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(channel()), untrack(() => {
            var _a;
            return ((_a = channel()) == null ? void 0 : _a.type) === "dm";
          })) $$render(consequent_4);
          else $$render(alternate_2, -1);
        });
      }
      var div_9 = sibling(node_6, 2);
      var node_12 = child(div_9);
      {
        var consequent_6 = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, (deep_read_state(channel()), untrack(() => channel().name))));
          append($$anchor3, text$1);
        };
        var alternate_3 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => (deep_read_state(channel()), $user(), untrack(() => {
              var _a, _b;
              return (_b = (_a = channel()) == null ? void 0 : _a.users) == null ? void 0 : _b.filter((u) => {
                var _a2;
                return u.id !== ((_a2 = $user()) == null ? void 0 : _a2.id);
              }).map((u) => u.name).join(", ");
            }))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_12, ($$render) => {
          if (deep_read_state(channel()), untrack(() => {
            var _a;
            return (_a = channel()) == null ? void 0 : _a.name;
          })) $$render(consequent_6);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_9);
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node_5, ($$render) => {
      if (channel()) $$render(consequent_7);
    });
  }
  reset(div_4);
  var div_10 = sibling(div_4, 2);
  var node_13 = child(div_10);
  {
    var consequent_9 = ($$anchor2) => {
      var fragment_7 = root_10();
      var node_14 = first_child(fragment_7);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Pinned Messages"))));
        Tooltip(node_14, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_1 = root_8();
            var div_11 = child(button_1);
            var node_15 = child(div_11);
            Pin(node_15, { className: " size-4", strokeWidth: "1.5" });
            reset(div_11);
            reset(button_1);
            event("click", button_1, () => {
              set(showChannelPinnedMessagesModal, true);
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
      var node_16 = sibling(node_14, 2);
      {
        var consequent_8 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Users"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button_2 = root_9();
                var div_12 = child(button_2);
                var node_17 = child(div_12);
                UserAlt(node_17, { className: " size-4", strokeWidth: "1.5" });
                var div_13 = sibling(node_17, 2);
                var text_2 = child(div_13, true);
                reset(div_13);
                reset(div_12);
                reset(button_2);
                template_effect(() => set_text(text_2, (deep_read_state(channel()), untrack(() => channel().user_count))));
                event("click", button_2, () => {
                  set(showChannelInfoModal, true);
                });
                append($$anchor4, button_2);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_16, ($$render) => {
          if (deep_read_state(channel()), untrack(() => {
            var _a;
            return ((_a = channel()) == null ? void 0 : _a.user_count) !== void 0;
          })) $$render(consequent_8);
        });
      }
      append($$anchor2, fragment_7);
    };
    if_block(node_13, ($$render) => {
      if (channel()) $$render(consequent_9);
    });
  }
  var node_18 = sibling(node_13, 2);
  {
    var consequent_10 = ($$anchor2) => {
      var div_14 = root_1$2();
      var node_19 = child(div_14);
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a;
          return (_a = $user()) == null ? void 0 : _a.role;
        })));
        UserMenu(node_19, {
          className: "w-[240px]",
          get role() {
            return get($0);
          },
          help: true,
          $$events: {
            show: (e) => {
              if (e.detail === "archived-chat") {
                showArchivedChats.set(true);
              }
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var button_3 = root_11();
            var div_15 = child(button_3);
            var img_1 = child(div_15);
            reset(div_15);
            reset(button_3);
            template_effect(() => set_attribute(img_1, "src", (deep_read_state(REXPRO_API_BASE_URL), $user(), untrack(() => {
              var _a;
              return `${REXPRO_API_BASE_URL}/users/${(_a = $user()) == null ? void 0 : _a.id}/profile/image`;
            }))));
            append($$anchor3, button_3);
          },
          $$slots: { default: true }
        });
      }
      reset(div_14);
      append($$anchor2, div_14);
    };
    if_block(node_18, ($$render) => {
      if ($user() !== void 0) $$render(consequent_10);
    });
  }
  reset(div_10);
  reset(div_1);
  reset(div);
  reset(nav);
  template_effect(() => set_class(div_4, 1, `flex-1 overflow-hidden max-w-full py-0.5 flex items-center
			${$showSidebar() ? "ml-1" : ""}
			`));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="w-full flex justify-center pt-5 pb-10"><!></div>`);
var root_1$1 = from_html(`<div class="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-850"><div class="sticky top-0 flex items-center justify-between px-3.5 py-3"><div class=" font-medium text-lg"> </div> <div><button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-2"><!></button></div></div> <div class=" max-h-full w-full overflow-y-auto"><!> <div class=" pb-[1rem] px-2.5 w-full"><!></div></div></div>`);
function Thread($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let threadId = prop($$props, "threadId", 8, null);
  let channel = prop($$props, "channel", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let messages = mutable_source(null);
  let top = mutable_source(false);
  let messagesContainerElement = mutable_source(null);
  let chatInputElement = mutable_source(null);
  let replyToMessage = mutable_source(null);
  let typingUsers = mutable_source([]);
  let typingUsersTimeout = {};
  const scrollToBottom = () => {
    if (get(messagesContainerElement)) {
      mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
    }
  };
  const initHandler = async () => {
    set(messages, null);
    set(top, false);
    set(typingUsers, []);
    typingUsersTimeout = {};
    if (channel()) {
      set(messages, await getChannelThreadMessages(localStorage.token, channel().id, threadId()));
      if (get(messages).length < 50) {
        set(top, true);
      }
      await tick();
      scrollToBottom();
    } else {
      goto("/");
    }
  };
  const channelEventHandler = async (event2) => {
    var _a, _b, _c;
    /* @__PURE__ */ console.debug(event2);
    if (event2.channel_id === channel().id) {
      const type = ((_a = event2 == null ? void 0 : event2.data) == null ? void 0 : _a.type) ?? null;
      const data = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.data) ?? null;
      if (type === "message") {
        if (((data == null ? void 0 : data.parent_id) ?? null) === threadId()) {
          if (get(messages)) {
            set(messages, [data, ...get(messages)]);
            if (get(typingUsers).find((user2) => user2.id === event2.user.id)) {
              set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
            }
          }
        }
      } else if (type === "message:update") {
        if (get(messages)) {
          const idx = get(messages).findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            mutate(messages, get(messages)[idx] = data);
          }
        }
      } else if (type === "message:delete") {
        if (data.id === threadId()) {
          onClose()();
        }
        if (get(messages)) {
          set(messages, get(messages).filter((message) => message.id !== data.id));
        }
      } else if (type.includes("message:reaction")) {
        if (get(messages)) {
          const idx = get(messages).findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            mutate(messages, get(messages)[idx] = data);
          }
        }
      } else if (type === "typing" && event2.message_id === threadId()) {
        if (event2.user.id === ((_c = $user()) == null ? void 0 : _c.id)) {
          return;
        }
        set(typingUsers, data.typing ? [
          ...get(typingUsers),
          ...get(typingUsers).find((user2) => user2.id === event2.user.id) ? [] : [{ id: event2.user.id, name: event2.user.name }]
        ] : get(typingUsers).filter((user2) => user2.id !== event2.user.id));
        if (typingUsersTimeout[event2.user.id]) {
          clearTimeout(typingUsersTimeout[event2.user.id]);
        }
        typingUsersTimeout[event2.user.id] = setTimeout(
          () => {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          },
          5e3
        );
      }
    }
  };
  const submitHandler = async ({ content, data }) => {
    var _a;
    if (!content && ((data == null ? void 0 : data.files) ?? []).length === 0) {
      return;
    }
    await sendMessage(localStorage.token, channel().id, {
      parent_id: threadId(),
      reply_to_id: ((_a = get(replyToMessage)) == null ? void 0 : _a.id) ?? null,
      content,
      data
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    set(replyToMessage, null);
  };
  const onChange = async () => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.emit("events:channel", {
      channel_id: channel().id,
      message_id: threadId(),
      data: { type: "typing", data: { typing: true } }
    });
  };
  onMount(() => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.on("events:channel", channelEventHandler);
  });
  onDestroy(() => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.off("events:channel", channelEventHandler);
  });
  legacy_pre_effect(() => deep_read_state(threadId()), () => {
    if (threadId()) {
      initHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var button = child(div_3);
      var node_1 = child(button);
      XMark(node_1, {});
      reset(button);
      reset(div_3);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var node_2 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          Messages($$anchor3, {
            get id() {
              return threadId();
            },
            get channel() {
              return channel();
            },
            get top() {
              return get(top);
            },
            get messages() {
              return get(messages);
            },
            get replyToMessage() {
              return get(replyToMessage);
            },
            thread: true,
            onReply: async (message) => {
              var _a;
              set(replyToMessage, message);
              await tick();
              (_a = get(chatInputElement)) == null ? void 0 : _a.focus();
            },
            onLoad: async () => {
              const newMessages = await getChannelThreadMessages(localStorage.token, channel().id, threadId(), get(messages).length);
              set(messages, [...get(messages), ...newMessages]);
              if (newMessages.length < 50) {
                set(top, true);
                return;
              }
            }
          });
        };
        var alternate = ($$anchor3) => {
          var div_5 = root$1();
          var node_3 = child(div_5);
          Spinner(node_3, {});
          reset(div_5);
          append($$anchor3, div_5);
        };
        if_block(node_2, ($$render) => {
          if (get(messages) !== null) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var div_6 = sibling(node_2, 2);
      var node_4 = child(div_6);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
          var _a;
          return !((_a = channel()) == null ? void 0 : _a.write_access);
        })));
        let $1 = derived_safe_equal(() => (deep_read_state(channel()), $i18n(), untrack(() => {
          var _a;
          return !((_a = channel()) == null ? void 0 : _a.write_access) ? $i18n().t("You do not have permission to send messages in this thread.") : $i18n().t("Reply to thread...");
        })));
        MessageInput(node_4, {
          get id() {
            return threadId();
          },
          get channel() {
            return channel();
          },
          get disabled() {
            return get($0);
          },
          get placeholder() {
            return get($1);
          },
          typingUsersClassName: "from-gray-50 dark:from-gray-850",
          get typingUsers() {
            return get(typingUsers);
          },
          userSuggestions: true,
          channelSuggestions: true,
          onChange,
          onSubmit: submitHandler,
          get replyToMessage() {
            return get(replyToMessage);
          },
          set replyToMessage($$value) {
            set(replyToMessage, $$value);
          },
          get chatInputElement() {
            return get(chatInputElement);
          },
          set chatInputElement($$value) {
            set(chatInputElement, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_6);
      reset(div_4);
      bind_this(div_4, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
      reset(div);
      template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Thread")))]);
      event("click", button, () => {
        onClose()();
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class="flex-1 overflow-y-auto"><div class=" pb-2.5 max-w-full z-10 scrollbar-hidden w-full h-full pt-6 flex-1 flex flex-col-reverse overflow-auto" id="messages-container"><!></div></div> <div class=" pb-[1rem] px-2.5"><!></div>`, 1);
var root_1 = from_html(`<div class=" flex items-center justify-center h-full w-full"><div class="m-auto"><!></div></div>`);
var root_2 = from_html(`<!> <!>`, 1);
var root_3 = from_html(`<div><!></div>`);
var root_4 = from_html(`<div class=" absolute -left-1.5 -right-1.5 -top-0 -bottom-0 z-20 cursor-col-resize bg-transparent"></div>`);
var root_5 = from_html(`<div class="h-full w-full shadow-xl"><!></div>`);
var root_6 = from_html(`<div id="channel-container"><!></div>`);
function Channel($$anchor, $$props) {
  push($$props, false);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $channels = () => store_get(channels, "$channels", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let id = prop($$props, "id", 8, "");
  let currentId = null;
  let scrollEnd = mutable_source(true);
  let messagesContainerElement = mutable_source(null);
  let chatInputElement = mutable_source(null);
  let top = mutable_source(false);
  let channel = mutable_source(null);
  let messages = mutable_source(null);
  let replyToMessage = mutable_source(null);
  let threadId = mutable_source(null);
  let typingUsers = mutable_source([]);
  let typingUsersTimeout = {};
  const scrollToBottom = () => {
    if (get(messagesContainerElement)) {
      mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
    }
  };
  const updateLastReadAt = async (channelId2) => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.emit("events:channel", {
      channel_id: channelId2,
      message_id: null,
      data: { type: "last_read_at" }
    });
    channels.set($channels().map((channel2) => {
      if (channel2.id === channelId2) {
        return { ...channel2, unread_count: 0 };
      }
      return channel2;
    }));
  };
  const initHandler = async () => {
    if (currentId) {
      updateLastReadAt(currentId);
    }
    currentId = id();
    updateLastReadAt(id());
    channelId.set(id());
    set(top, false);
    set(messages, null);
    set(channel, null);
    set(threadId, null);
    set(typingUsers, []);
    typingUsersTimeout = {};
    set(channel, await getChannelById(localStorage.token, id()).catch((error) => {
      return null;
    }));
    if (get(channel)) {
      set(messages, await getChannelMessages(localStorage.token, id(), 0));
      if (get(messages)) {
        scrollToBottom();
        if (get(messages).length < 50) {
          set(top, true);
        }
      }
    } else {
      goto("/");
    }
  };
  const channelEventHandler = async (event2) => {
    var _a, _b, _c;
    if (event2.channel_id === id()) {
      const type = ((_a = event2 == null ? void 0 : event2.data) == null ? void 0 : _a.type) ?? null;
      const data = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.data) ?? null;
      if (type === "message") {
        if (((data == null ? void 0 : data.parent_id) ?? null) === null) {
          const tempId = (data == null ? void 0 : data.temp_id) ?? null;
          set(messages, [
            { ...data, temp_id: null },
            ...get(messages).filter((m) => !tempId || (m == null ? void 0 : m.temp_id) !== tempId)
          ]);
          if (get(typingUsers).find((user2) => user2.id === event2.user.id)) {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          }
          await tick();
          if (get(scrollEnd)) {
            scrollToBottom();
          }
        }
      } else if (type === "message:update") {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type === "message:delete") {
        set(messages, get(messages).filter((message) => message.id !== data.id));
        if (get(threadId) === data.id) {
          set(threadId, null);
        }
      } else if (type === "message:reply") {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type.includes("message:reaction")) {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type === "typing" && event2.message_id === null) {
        if (event2.user.id === ((_c = $user()) == null ? void 0 : _c.id)) {
          return;
        }
        set(typingUsers, data.typing ? [
          ...get(typingUsers),
          ...get(typingUsers).find((user2) => user2.id === event2.user.id) ? [] : [{ id: event2.user.id, name: event2.user.name }]
        ] : get(typingUsers).filter((user2) => user2.id !== event2.user.id));
        if (typingUsersTimeout[event2.user.id]) {
          clearTimeout(typingUsersTimeout[event2.user.id]);
        }
        typingUsersTimeout[event2.user.id] = setTimeout(
          () => {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          },
          5e3
        );
      }
    }
  };
  const submitHandler = async ({ content, data }) => {
    var _a, _b;
    if (!content && ((data == null ? void 0 : data.files) ?? []).length === 0) {
      return;
    }
    const tempId = v4();
    const message = {
      temp_id: tempId,
      content,
      data,
      reply_to_id: ((_a = get(replyToMessage)) == null ? void 0 : _a.id) ?? null
    };
    const ts = Date.now() * 1e6;
    set(messages, [
      {
        ...message,
        id: tempId,
        user_id: (_b = $user()) == null ? void 0 : _b.id,
        user: $user(),
        reply_to_message: get(replyToMessage) ?? null,
        created_at: ts,
        updated_at: ts
      },
      ...get(messages)
    ]);
    const res = await sendMessage(localStorage.token, id(), message).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
    }
    set(replyToMessage, null);
  };
  const onChange = async () => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.emit("events:channel", {
      channel_id: id(),
      message_id: null,
      data: { type: "typing", data: { typing: true } }
    });
    updateLastReadAt(id());
  };
  let mediaQuery;
  let largeScreen = mutable_source(false);
  onMount(() => {
    var _a;
    if ($chatId()) {
      chatId.set("");
    }
    (_a = $socket()) == null ? void 0 : _a.on("events:channel", channelEventHandler);
    mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQuery = async (e) => {
      if (e.matches) {
        set(largeScreen, true);
      } else {
        set(largeScreen, false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
  });
  onDestroy(() => {
    var _a;
    updateLastReadAt(id());
    channelId.set(null);
    (_a = $socket()) == null ? void 0 : _a.off("events:channel", channelEventHandler);
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      initHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root_6();
  head("l5reg3", ($$anchor2) => {
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor3) => {
        deferred_template_effect(
          ($0) => {
            $document.title = `${$0 ?? ""} • rexpro-ai`;
          },
          [
            () => (get(channel), $user(), untrack(() => {
              var _a, _b;
              return ((_a = get(channel)) == null ? void 0 : _a.name.trim()) || ((_b = get(channel)) == null ? void 0 : _b.users.reduce(
                (a, e, i, arr) => {
                  var _a2;
                  if (e.id === ((_a2 = $user()) == null ? void 0 : _a2.id)) {
                    return a;
                  }
                  if (a) {
                    return `${a}, ${e.name}`;
                  } else {
                    return e.name;
                  }
                },
                ""
              ));
            }))
          ]
        );
      };
      var alternate = ($$anchor3) => {
        deferred_template_effect(() => {
          $document.title = `#${(get(channel), untrack(() => {
            var _a;
            return ((_a = get(channel)) == null ? void 0 : _a.name) ?? "Channel";
          })) ?? ""} • rexpro-ai`;
        });
      };
      if_block(node, ($$render) => {
        if (get(channel), untrack(() => {
          var _a;
          return ((_a = get(channel)) == null ? void 0 : _a.type) === "dm";
        })) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    append($$anchor2, fragment);
  });
  var node_1 = child(div);
  Pane_group(node_1, {
    direction: "horizontal",
    class: "w-full h-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_2 = first_child(fragment_1);
      Pane(node_2, {
        defaultSize: 50,
        minSize: 50,
        class: "h-full flex flex-col w-full relative",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2();
          var node_3 = first_child(fragment_2);
          Navbar(node_3, {
            get channel() {
              return get(channel);
            },
            onPin: (messageId, pinned) => {
              set(messages, get(messages).map((message) => {
                if (message.id === messageId) {
                  return { ...message, is_pinned: pinned };
                }
                return message;
              }));
            },
            onUpdate: async () => {
              set(channel, await getChannelById(localStorage.token, id()).catch((error) => {
                return null;
              }));
            }
          });
          var node_4 = sibling(node_3, 2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root();
              var div_1 = first_child(fragment_3);
              var div_2 = child(div_1);
              var node_5 = child(div_2);
              key(node_5, id, ($$anchor5) => {
                Messages($$anchor5, {
                  get channel() {
                    return get(channel);
                  },
                  get top() {
                    return get(top);
                  },
                  get messages() {
                    return get(messages);
                  },
                  get replyToMessage() {
                    return get(replyToMessage);
                  },
                  onReply: async (message) => {
                    var _a;
                    set(replyToMessage, message);
                    await tick();
                    (_a = get(chatInputElement)) == null ? void 0 : _a.focus();
                  },
                  onThread: (id2) => {
                    set(threadId, id2);
                  },
                  onLoad: async () => {
                    const newMessages = await getChannelMessages(localStorage.token, id(), get(messages).length);
                    set(messages, [...get(messages), ...newMessages]);
                    if (newMessages.length < 50) {
                      set(top, true);
                      return;
                    }
                  }
                });
              });
              reset(div_2);
              bind_this(div_2, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
              reset(div_1);
              var div_3 = sibling(div_1, 2);
              var node_6 = child(div_3);
              {
                let $0 = derived_safe_equal(() => (get(channel), untrack(() => {
                  var _a;
                  return !((_a = get(channel)) == null ? void 0 : _a.write_access);
                })));
                let $1 = derived_safe_equal(() => (get(channel), $i18n(), untrack(() => {
                  var _a;
                  return !((_a = get(channel)) == null ? void 0 : _a.write_access) ? $i18n().t("You do not have permission to send messages in this channel.") : $i18n().t("Type here...");
                })));
                MessageInput(node_6, {
                  id: "root",
                  get typingUsers() {
                    return get(typingUsers);
                  },
                  get channel() {
                    return get(channel);
                  },
                  userSuggestions: true,
                  channelSuggestions: true,
                  get disabled() {
                    return get($0);
                  },
                  get placeholder() {
                    return get($1);
                  },
                  onChange,
                  onSubmit: submitHandler,
                  scrollToBottom,
                  get scrollEnd() {
                    return get(scrollEnd);
                  },
                  get chatInputElement() {
                    return get(chatInputElement);
                  },
                  set chatInputElement($$value) {
                    set(chatInputElement, $$value);
                  },
                  get replyToMessage() {
                    return get(replyToMessage);
                  },
                  set replyToMessage($$value) {
                    set(replyToMessage, $$value);
                  },
                  $$legacy: true
                });
              }
              reset(div_3);
              event("scroll", div_2, (e) => {
                set(scrollEnd, Math.abs(get(messagesContainerElement).scrollTop) <= 50);
              });
              append($$anchor4, fragment_3);
            };
            var alternate_1 = ($$anchor4) => {
              var div_4 = root_1();
              var div_5 = child(div_4);
              var node_7 = child(div_5);
              Spinner(node_7, { className: "size-5" });
              reset(div_5);
              reset(div_4);
              append($$anchor4, div_4);
            };
            if_block(node_4, ($$render) => {
              if (get(channel) && get(messages) !== null) $$render(consequent_1);
              else $$render(alternate_1, -1);
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_8 = sibling(node_2, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_5 = comment();
          var node_9 = first_child(fragment_5);
          {
            var consequent_2 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => get(threadId) !== null);
                Drawer($$anchor4, {
                  get show() {
                    return get($0);
                  },
                  onClose: () => {
                    set(threadId, null);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var div_6 = root_3();
                    var node_10 = child(div_6);
                    Thread(node_10, {
                      get threadId() {
                        return get(threadId);
                      },
                      get channel() {
                        return get(channel);
                      },
                      onClose: () => {
                        set(threadId, null);
                      }
                    });
                    reset(div_6);
                    template_effect(() => set_class(div_6, 1, ` ${get(threadId) !== null ? " h-screen  w-full" : "px-6 py-4"} h-full`));
                    append($$anchor5, div_6);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_9, ($$render) => {
              if (get(threadId) !== null) $$render(consequent_2);
            });
          }
          append($$anchor3, fragment_5);
        };
        var consequent_4 = ($$anchor3) => {
          var fragment_7 = root_2();
          var node_11 = first_child(fragment_7);
          Pane_resizer(node_11, {
            class: "relative flex items-center justify-center group border-l border-gray-50 dark:border-gray-850/30 hover:border-gray-200 dark:hover:border-gray-800  transition z-20",
            id: "controls-resizer",
            children: ($$anchor4, $$slotProps2) => {
              var div_7 = root_4();
              append($$anchor4, div_7);
            },
            $$slots: { default: true }
          });
          var node_12 = sibling(node_11, 2);
          Pane(node_12, {
            defaultSize: 50,
            minSize: 30,
            class: "h-full w-full",
            children: ($$anchor4, $$slotProps2) => {
              var div_8 = root_5();
              var node_13 = child(div_8);
              Thread(node_13, {
                get threadId() {
                  return get(threadId);
                },
                get channel() {
                  return get(channel);
                },
                onClose: () => {
                  set(threadId, null);
                }
              });
              reset(div_8);
              append($$anchor4, div_8);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_7);
        };
        if_block(node_8, ($$render) => {
          if (!get(largeScreen)) $$render(consequent_3);
          else if (get(threadId) !== null) $$render(consequent_4, 1);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  template_effect(() => set_class(div, 1, `h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} w-full max-w-full flex flex-col`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  Channel($$anchor, {
    get id() {
      return $page().params.id;
    }
  });
  pop();
  $$cleanup();
}
export {
  _page as component
};
