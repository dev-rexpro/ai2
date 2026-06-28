import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, j as onDestroy, k as get, o as onMount, w as set, aV as mutate, l as legacy_pre_effect, n as legacy_pre_effect_reset, a as append, b as pop, s as setup_stores, q as mutable_source, f as from_html, c as child, r as reset, h as first_child, m as deep_read_state, u as untrack, z as sibling, t as template_effect, e as store_get, g as comment, d as set_text, y as event, x as derived_safe_equal } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { r as remove_input_defaults, s as set_attribute } from "./B9yCN616.js";
import { b as bind_value } from "./CgeA63xA.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { t as toast } from "./B4Bn1xMI.js";
import { u as user } from "./BJ3rUC-5.js";
import { g as getUserInfoById, s as searchUsers } from "./CP40r8ux.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { X as XMark } from "./DAqPThR3.js";
import { C as Checkbox, P as ProfilePreview } from "./CuSe9V-c.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { S as Spinner } from "./gJqE84vs.js";
import { g as getGroups } from "./C9ZHzqWY.js";
var root = from_html(`<div class="my-10"><!></div>`);
var root_1 = from_html(`<button type="button" class="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100/50 dark:bg-gray-850 rounded-lg text-xs"><div> <span class="text-xs text-gray-500"> </span></div> <div><!></div></button>`);
var root_2 = from_html(`<div class="mx-1 mb-1.5"><div class="text-xs text-gray-500 mx-0.5 mb-1"> </div> <div class="flex gap-1 flex-wrap"></div></div>`);
var root_3 = from_html(`<button type="button" class="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100/50 dark:bg-gray-850 rounded-lg text-xs"><div> </div> <div><!></div></button>`);
var root_4 = from_html(`<div class="font-medium truncate flex items-center gap-1"> <span class="text-gray-500"> </span></div>`);
var root_5 = from_html(`<button class=" dark:border-gray-850 text-xs flex items-center justify-between w-full" type="button"><div class="px-3 py-1.5 font-medium text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2"><!></div></div> <div class="px-3 py-1"><div class=" translate-y-0.5"><!></div></div></button>`);
var root_6 = from_html(`<div class="text-xs text-gray-500 mb-1 mx-1"> </div> <div class="mb-3"></div>`, 1);
var root_7 = from_html(`<img class="rounded-2xl w-6 h-6 object-cover flex-shrink-0" alt="user"/>`);
var root_8 = from_html(`<div class="font-medium truncate"> </div>`);
var root_9 = from_html(`<div><span class="relative flex size-1.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-1.5 rounded-full bg-green-500"></span></span></div>`);
var root_10 = from_html(`<button class=" dark:border-gray-850 text-xs flex items-center justify-between w-full" type="button"><div class="px-3 py-1.5 font-medium text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2"><!> <!> <!></div></div> <div class="px-3 py-1"><div class=" translate-y-0.5"><!></div></div></button>`);
var root_11 = from_html(`<div class="text-xs text-gray-500 mb-1 mx-1"> </div> <div></div>`, 1);
var root_12 = from_html(`<div class="scrollbar-hidden relative whitespace-nowrap w-full max-w-full"><div class=" text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full"><div class="w-full max-h-96 overflow-y-auto rounded-lg"><!> <!></div></div></div>`);
var root_13 = from_html(`<div class="text-gray-500 text-xs text-center py-5 px-10"> </div>`);
var root_14 = from_html(`<!> <!> <div class="flex gap-1 mb-1"><div class=" flex w-full space-x-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div></div> <!>`, 1);
var root_15 = from_html(`<div><!></div>`);
function MemberSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $_user = () => store_get(user, "$_user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let includeGroups = prop($$props, "includeGroups", 8, true);
  let includeUsers = prop($$props, "includeUsers", 8, true);
  prop($$props, "pagination", 8, false);
  let includeSessionUser = prop($$props, "includeSessionUser", 8, false);
  let groupIds = prop($$props, "groupIds", 28, () => []);
  let userIds = prop($$props, "userIds", 28, () => []);
  let groups = mutable_source(null);
  let filteredGroups = mutable_source([]);
  let selectedGroup = mutable_source({});
  let selectedUsers = mutable_source({});
  let page = 1;
  let users = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let orderBy = "name";
  let direction = "asc";
  const getUserList = async () => {
    try {
      const res = await searchUsers(localStorage.token, get(query), orderBy, direction, page).catch((error) => {
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
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
  });
  onMount(async () => {
    set(groups, await getGroups(localStorage.token, true).catch((error) => {
      /* @__PURE__ */ console.error(error);
      return [];
    }));
    if (userIds().length > 0) {
      userIds().forEach(async (id) => {
        const res = await getUserInfoById(localStorage.token, id).catch((error) => {
          /* @__PURE__ */ console.error(error);
          return null;
        });
        if (res) {
          mutate(selectedUsers, get(selectedUsers)[id] = res);
        }
      });
    }
  });
  legacy_pre_effect(() => (get(groups), get(query)), () => {
    set(filteredGroups, get(groups) ? get(groups).filter((group) => group.name.toLowerCase().includes(get(query).toLowerCase())) : []);
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer)), () => {
    if (get(query) !== void 0) {
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          getUserList();
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => {
  }, () => {
    {
      getUserList();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root_15();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root();
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var alternate_1 = ($$anchor2) => {
      var fragment = root_14();
      var node_2 = first_child(fragment);
      {
        var consequent_2 = ($$anchor3) => {
          var div_2 = root_2();
          var div_3 = child(div_2);
          var text = child(div_3);
          reset(div_3);
          var div_4 = sibling(div_3, 2);
          each(div_4, 5, groupIds, index, ($$anchor4, id) => {
            var fragment_1 = comment();
            var node_3 = first_child(fragment_1);
            {
              var consequent_1 = ($$anchor5) => {
                var button = root_1();
                var div_5 = child(button);
                var text_1 = child(div_5);
                var span = sibling(text_1);
                var text_2 = child(span, true);
                reset(span);
                reset(div_5);
                var div_6 = sibling(div_5, 2);
                var node_4 = child(div_6);
                XMark(node_4, { className: "size-3" });
                reset(div_6);
                reset(button);
                template_effect(() => {
                  set_text(text_1, `${(get(selectedGroup), get(id), untrack(() => get(selectedGroup)[get(id)].name)) ?? ""} `);
                  set_text(text_2, (get(selectedGroup), get(id), untrack(() => get(selectedGroup)[get(id)].member_count)));
                });
                event("click", button, () => {
                  groupIds(groupIds().filter((gid) => gid !== get(id)));
                  delete get(selectedGroup)[get(id)];
                });
                append($$anchor5, button);
              };
              if_block(node_3, ($$render) => {
                if (get(selectedGroup), get(id), untrack(() => get(selectedGroup)[get(id)])) $$render(consequent_1);
              });
            }
            append($$anchor4, fragment_1);
          });
          reset(div_4);
          reset(div_2);
          template_effect(
            ($0) => set_text(text, `${(deep_read_state(groupIds()), untrack(() => groupIds().length)) ?? ""}
					${$0 ?? ""}`),
            [() => ($i18n(), untrack(() => $i18n().t("groups")))]
          );
          append($$anchor3, div_2);
        };
        if_block(node_2, ($$render) => {
          if (deep_read_state(groupIds()), untrack(() => groupIds().length > 0)) $$render(consequent_2);
        });
      }
      var node_5 = sibling(node_2, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_7 = root_2();
          var div_8 = child(div_7);
          var text_3 = child(div_8);
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          each(div_9, 5, userIds, index, ($$anchor4, id) => {
            var fragment_2 = comment();
            var node_6 = first_child(fragment_2);
            {
              var consequent_3 = ($$anchor5) => {
                var button_1 = root_3();
                var div_10 = child(button_1);
                var text_4 = child(div_10, true);
                reset(div_10);
                var div_11 = sibling(div_10, 2);
                var node_7 = child(div_11);
                XMark(node_7, { className: "size-3" });
                reset(div_11);
                reset(button_1);
                template_effect(() => set_text(text_4, (get(selectedUsers), get(id), untrack(() => get(selectedUsers)[get(id)].name))));
                event("click", button_1, () => {
                  userIds(userIds().filter((uid) => uid !== get(id)));
                  delete get(selectedUsers)[get(id)];
                });
                append($$anchor5, button_1);
              };
              if_block(node_6, ($$render) => {
                if (get(selectedUsers), get(id), untrack(() => get(selectedUsers)[get(id)])) $$render(consequent_3);
              });
            }
            append($$anchor4, fragment_2);
          });
          reset(div_9);
          reset(div_7);
          template_effect(
            ($0) => set_text(text_3, `${(deep_read_state(userIds()), untrack(() => userIds().length)) ?? ""}
					${$0 ?? ""}`),
            [() => ($i18n(), untrack(() => $i18n().t("users")))]
          );
          append($$anchor3, div_7);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(userIds()), untrack(() => userIds().length > 0)) $$render(consequent_4);
        });
      }
      var div_12 = sibling(node_5, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var input = sibling(child(div_14), 2);
      remove_input_defaults(input);
      reset(div_14);
      reset(div_13);
      reset(div_12);
      var node_8 = sibling(div_12, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_15 = root_12();
          var div_16 = child(div_15);
          var div_17 = child(div_16);
          var node_9 = child(div_17);
          {
            var consequent_5 = ($$anchor4) => {
              var fragment_3 = root_6();
              var div_18 = first_child(fragment_3);
              var text_5 = child(div_18, true);
              reset(div_18);
              var div_19 = sibling(div_18, 2);
              each(div_19, 7, () => get(filteredGroups), (group) => group.id, ($$anchor5, group) => {
                var button_2 = root_5();
                var div_20 = child(button_2);
                var div_21 = child(div_20);
                var node_10 = child(div_21);
                Tooltip(node_10, {
                  get content() {
                    return get(group), untrack(() => get(group).name);
                  },
                  placement: "top-start",
                  children: ($$anchor6, $$slotProps) => {
                    var div_22 = root_4();
                    var text_6 = child(div_22);
                    var span_1 = sibling(text_6);
                    var text_7 = child(span_1, true);
                    reset(span_1);
                    reset(div_22);
                    template_effect(() => {
                      set_text(text_6, `${(get(group), untrack(() => get(group).name)) ?? ""} `);
                      set_text(text_7, (get(group), untrack(() => get(group).member_count)));
                    });
                    append($$anchor6, div_22);
                  },
                  $$slots: { default: true }
                });
                reset(div_21);
                reset(div_20);
                var div_23 = sibling(div_20, 2);
                var div_24 = child(div_23);
                var node_11 = child(div_24);
                {
                  let $0 = derived_safe_equal(() => (deep_read_state(groupIds()), get(group), untrack(() => (groupIds() ?? []).includes(get(group).id) ? "checked" : "unchecked")));
                  Checkbox(node_11, {
                    get state() {
                      return get($0);
                    }
                  });
                }
                reset(div_24);
                reset(div_23);
                reset(button_2);
                event("click", button_2, () => {
                  if ((groupIds() ?? []).includes(get(group).id)) {
                    groupIds(groupIds().filter((id) => id !== get(group).id));
                    delete get(selectedGroup)[get(group).id];
                  } else {
                    groupIds([...groupIds(), get(group).id]);
                    mutate(selectedGroup, get(selectedGroup)[get(group).id] = get(group));
                  }
                });
                append($$anchor5, button_2);
              });
              reset(div_19);
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Groups")))]);
              append($$anchor4, fragment_3);
            };
            if_block(node_9, ($$render) => {
              if (deep_read_state(includeGroups()), get(filteredGroups), untrack(() => includeGroups() && get(filteredGroups).length > 0)) $$render(consequent_5);
            });
          }
          var node_12 = sibling(node_9, 2);
          {
            var consequent_8 = ($$anchor4) => {
              var fragment_4 = root_11();
              var div_25 = first_child(fragment_4);
              var text_8 = child(div_25, true);
              reset(div_25);
              var div_26 = sibling(div_25, 2);
              each(div_26, 7, () => get(users), (user2) => user2.id, ($$anchor5, user2) => {
                var fragment_5 = comment();
                var node_13 = first_child(fragment_5);
                {
                  var consequent_7 = ($$anchor6) => {
                    var button_3 = root_10();
                    var div_27 = child(button_3);
                    var div_28 = child(div_27);
                    var node_14 = child(div_28);
                    ProfilePreview(node_14, {
                      get user() {
                        return get(user2);
                      },
                      side: "right",
                      align: "center",
                      sideOffset: 6,
                      children: ($$anchor7, $$slotProps) => {
                        var img = root_7();
                        template_effect(() => set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(user2), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(user2).id}/profile/image`))));
                        append($$anchor7, img);
                      },
                      $$slots: { default: true }
                    });
                    var node_15 = sibling(node_14, 2);
                    Tooltip(node_15, {
                      get content() {
                        return get(user2), untrack(() => get(user2).email);
                      },
                      placement: "top-start",
                      children: ($$anchor7, $$slotProps) => {
                        var div_29 = root_8();
                        var text_9 = child(div_29, true);
                        reset(div_29);
                        template_effect(() => set_text(text_9, (get(user2), untrack(() => get(user2).name))));
                        append($$anchor7, div_29);
                      },
                      $$slots: { default: true }
                    });
                    var node_16 = sibling(node_15, 2);
                    {
                      var consequent_6 = ($$anchor7) => {
                        var div_30 = root_9();
                        append($$anchor7, div_30);
                      };
                      if_block(node_16, ($$render) => {
                        if (get(user2), untrack(() => {
                          var _a;
                          return (_a = get(user2)) == null ? void 0 : _a.is_active;
                        })) $$render(consequent_6);
                      });
                    }
                    reset(div_28);
                    reset(div_27);
                    var div_31 = sibling(div_27, 2);
                    var div_32 = child(div_31);
                    var node_17 = child(div_32);
                    {
                      let $0 = derived_safe_equal(() => (deep_read_state(userIds()), get(user2), untrack(() => (userIds() ?? []).includes(get(user2).id) ? "checked" : "unchecked")));
                      Checkbox(node_17, {
                        get state() {
                          return get($0);
                        }
                      });
                    }
                    reset(div_32);
                    reset(div_31);
                    reset(button_3);
                    event("click", button_3, () => {
                      if ((userIds() ?? []).includes(get(user2).id)) {
                        userIds(userIds().filter((id) => id !== get(user2).id));
                        delete get(selectedUsers)[get(user2).id];
                      } else {
                        userIds([...userIds(), get(user2).id]);
                        mutate(selectedUsers, get(selectedUsers)[get(user2).id] = get(user2));
                      }
                    });
                    append($$anchor6, button_3);
                  };
                  if_block(node_13, ($$render) => {
                    if (deep_read_state(includeSessionUser()), get(user2), $_user(), untrack(() => {
                      var _a, _b;
                      return includeSessionUser() || ((_a = get(user2)) == null ? void 0 : _a.id) !== ((_b = $_user()) == null ? void 0 : _b.id);
                    })) $$render(consequent_7);
                  });
                }
                append($$anchor5, fragment_5);
              });
              reset(div_26);
              template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Users")))]);
              append($$anchor4, fragment_4);
            };
            if_block(node_12, ($$render) => {
              if (includeUsers()) $$render(consequent_8);
            });
          }
          reset(div_17);
          reset(div_16);
          reset(div_15);
          append($$anchor3, div_15);
        };
        var alternate = ($$anchor3) => {
          var div_33 = root_13();
          var text_10 = child(div_33, true);
          reset(div_33);
          template_effect(($0) => set_text(text_10, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No users were found.")))
          ]);
          append($$anchor3, div_33);
        };
        if_block(node_8, ($$render) => {
          if (get(users), get(filteredGroups), untrack(() => get(users).length > 0 || get(filteredGroups).length > 0)) $$render(consequent_9);
          else $$render(alternate, -1);
        });
      }
      template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
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
export {
  MemberSelector as M
};
