import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, b as pop, s as setup_stores, z as sibling, w as set, k as get, t as template_effect, u as untrack, d as set_text, y as event, a as append, c as child, f as from_html, q as mutable_source, e as store_get, r as reset, o as onMount, l as legacy_pre_effect, n as legacy_pre_effect_reset, h as first_child, m as deep_read_state, v as user_derived, x as derived_safe_equal, aW as text, B as from_svg, g as comment } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { i as init_select, e as select_option, s as set_attribute } from "./B9yCN616.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { g as getGroups, a as getGroupInfoById } from "./C9ZHzqWY.js";
import { g as getUserInfoById } from "./CP40r8ux.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { X as XMark } from "./DAqPThR3.js";
import { B as Badge } from "./3f_PWqJi.js";
import { P as Plus } from "./CKKkwCWl.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { M as Modal } from "./tmhUPuyr.js";
import { M as MemberSelector } from "./fbMEVKf7.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { S as Switch_1 } from "./l6D7S60E.js";
var root$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0"> </div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2"><!></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="submit"> </button></div></form></div></div></div>`);
function AddAccessModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let shareUsers = prop($$props, "shareUsers", 8, true);
  let onAdd = prop($$props, "onAdd", 8, (payload) => {
  });
  let userIds = mutable_source([]);
  let groupIds = mutable_source([]);
  const submitHandler = () => {
    onAdd()({ userIds: get(userIds), groupIds: get(groupIds) });
    show(false);
    set(userIds, []);
    set(groupIds, []);
  };
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
      var div = root$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text2 = child(div_3, true);
      reset(div_3);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var div_5 = child(div_4);
      var form = child(div_5);
      var div_6 = child(form);
      var node_1 = child(div_6);
      MemberSelector(node_1, {
        includeGroups: true,
        get includeUsers() {
          return shareUsers();
        },
        includeSessionUser: true,
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
      var text_1 = child(button_1, true);
      reset(button_1);
      reset(div_7);
      reset(form);
      reset(div_5);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_text(text2, $0);
          set_text(text_1, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add Access"))),
          () => ($i18n(), untrack(() => $i18n().t("Add")))
        ]
      );
      event("click", button, () => {
        show(false);
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
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>`);
var root_1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg>`);
var root_2 = from_html(`<option class=" text-gray-700"> </option>`);
var root_3 = from_html(`<select id="models" class="outline-none bg-transparent text-sm font-medium block w-fit pr-10 max-w-full placeholder-gray-400"><option class=" text-gray-700"> </option><!></select>`);
var root_4 = from_html(`<div class="flex w-full justify-between mt-2 ml-0.5"><div class="self-center text-xs"> </div> <!></div>`);
var root_5 = from_html(`<div class="flex items-center gap-3 justify-between text-sm w-full transition pb-1"><div class="flex items-center gap-2 w-full flex-1"><div class="size-5 rounded-full bg-gray-100 dark:bg-gray-850 flex items-center justify-center text-xs"> </div> <div class="truncate text-sm flex items-center gap-2"> <span class="text-xs text-gray-400 font-normal"> </span></div></div> <div class="w-full flex justify-end items-center gap-2"><button type="button"><!></button> <button class=" rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition" type="button"><!></button></div></div>`);
var root_6 = from_html(`<div class="truncate text-sm"> </div>`);
var root_7 = from_html(`<div class="flex items-center gap-3 justify-between text-sm w-full transition border-b border-gray-50 dark:border-gray-850 pb-2 last:border-0"><div class="flex items-center gap-2 w-full flex-1"><img class="rounded-full size-5 object-cover"/> <div class="w-full"><!></div></div> <div class="w-full flex justify-end items-center gap-2"><button type="button"><!></button> <button class=" rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition" type="button"><!></button></div></div>`);
var root_8 = from_html(`<div class="text-xs text-gray-500 text-center py-4"> </div>`);
var root_9 = from_html(`<div class="flex items-center justify-between text-xs font-medium text-gray-500 my-1"><div> </div> <div class="flex gap-1"><button class="px-2 py-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-xs font-medium flex items-center gap-1" type="button"><!> </button></div></div> <div class="flex flex-col gap-2"><!> <!> <!></div>`, 1);
var root_10 = from_html(`<!> <div class=" rounded-lg flex flex-col gap-1"><div class="py-2"><div class="flex gap-2.5 items-center"><div><div class=" p-2 bg-black/5 dark:bg-white/5 rounded-full"><!></div></div> <div><!> <div class=" text-xs text-gray-400 font-medium"><!></div></div></div> <!></div> <!></div>`, 1);
function AccessControl($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const readGroupIds = mutable_source();
  const writeGroupIds = mutable_source();
  const readUserIds = mutable_source();
  const writeUserIds = mutable_source();
  const selectedUserIds = mutable_source();
  const selectedUsers = mutable_source();
  const accessGroups = mutable_source();
  const i18n = getContext("i18n");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let accessRoles = prop($$props, "accessRoles", 24, () => ["read"]);
  let accessGrants = prop($$props, "accessGrants", 28, () => []);
  let accessControl = prop($$props, "accessControl", 12, void 0);
  let share = prop($$props, "share", 8, true);
  let sharePublic = prop($$props, "sharePublic", 8, true);
  let shareUsers = prop($$props, "shareUsers", 8, true);
  let groups = mutable_source([]);
  const resolvingGroupIds = /* @__PURE__ */ new Set();
  let userById = mutable_source({});
  const resolvingUserIds = /* @__PURE__ */ new Set();
  let showAddAccessModal = mutable_source(false);
  const dedupeAccessGrants = (grants) => {
    if (!Array.isArray(grants)) return [];
    const map = /* @__PURE__ */ new Map();
    for (const grant of grants) {
      if (!grant) continue;
      const key = `${grant.principal_type}:${grant.principal_id}:${grant.permission}`;
      if (!grant.principal_type || !grant.principal_id || !grant.permission) continue;
      map.set(key, {
        id: grant.id,
        principal_type: grant.principal_type,
        principal_id: grant.principal_id,
        permission: grant.permission
      });
    }
    return Array.from(map.values());
  };
  const legacyAccessControlToGrants = (accessControl2) => {
    if (accessControl2 === null) {
      return [
        {
          principal_type: "user",
          principal_id: "*",
          permission: "read"
        }
      ];
    }
    if (!accessControl2 || typeof accessControl2 !== "object") {
      return [];
    }
    const grants = [];
    for (const permission of ["read", "write"]) {
      const entry = (accessControl2 == null ? void 0 : accessControl2[permission]) ?? {};
      for (const groupId of (entry == null ? void 0 : entry.group_ids) ?? []) {
        grants.push({ principal_type: "group", principal_id: groupId, permission });
      }
      for (const userId of (entry == null ? void 0 : entry.user_ids) ?? []) {
        grants.push({ principal_type: "user", principal_id: userId, permission });
      }
    }
    return dedupeAccessGrants(grants);
  };
  const grantsToLegacyAccessControl = (grants) => {
    const normalized = dedupeAccessGrants(grants);
    if (hasPublicReadGrant(normalized)) {
      return null;
    }
    const result = {
      read: { group_ids: [], user_ids: [] },
      write: { group_ids: [], user_ids: [] }
    };
    for (const grant of normalized) {
      if (!["read", "write"].includes(grant.permission)) {
        continue;
      }
      if (grant.principal_type === "group") {
        if (!result[grant.permission].group_ids.includes(grant.principal_id)) {
          result[grant.permission].group_ids = [...result[grant.permission].group_ids, grant.principal_id];
        }
      } else if (grant.principal_type === "user" && grant.principal_id !== "*") {
        if (!result[grant.permission].user_ids.includes(grant.principal_id)) {
          result[grant.permission].user_ids = [...result[grant.permission].user_ids, grant.principal_id];
        }
      }
    }
    return result;
  };
  const normalizeInputToGrants = (value) => {
    if (value === null) {
      return legacyAccessControlToGrants(null);
    }
    if (Array.isArray(value)) {
      return dedupeAccessGrants(value);
    }
    if (value && typeof value === "object" && ("read" in value || "write" in value)) {
      return legacyAccessControlToGrants(value);
    }
    return [];
  };
  const stableStringify = (value) => {
    try {
      return JSON.stringify(value ?? null);
    } catch {
      return "";
    }
  };
  const hasPublicReadGrant = (grants) => grants.some((grant) => grant.principal_type === "user" && grant.principal_id === "*" && grant.permission === "read");
  const hasPublicWriteGrant = (grants) => grants.some((grant) => grant.principal_type === "user" && grant.principal_id === "*" && grant.permission === "write");
  const currentGrants = () => Array.isArray(accessGrants()) ? accessGrants() : [];
  const getPrincipalIdsByPermission = (principalType, permission) => Array.from(new Set(currentGrants().filter((grant) => grant.principal_type === principalType && grant.permission === permission).map((grant) => grant.principal_id)));
  const hasPrincipalGrant = (principalType, principalId, permission) => currentGrants().some((grant) => grant.principal_type === principalType && grant.principal_id === principalId && grant.permission === permission);
  const commitAccessGrants = (nextGrants) => {
    accessGrants(dedupeAccessGrants(nextGrants));
    onChange()(accessGrants());
  };
  const setPublic = (isPublic) => {
    const filtered = currentGrants().filter((grant) => !(grant.principal_type === "user" && grant.principal_id === "*"));
    if (isPublic) {
      filtered.push({
        principal_type: "user",
        principal_id: "*",
        permission: "read"
      });
    }
    commitAccessGrants(filtered);
  };
  const togglePublicWrite = () => {
    let next = [...currentGrants()];
    if (hasPublicWriteGrant(next)) {
      next = next.filter((grant) => !(grant.principal_type === "user" && grant.principal_id === "*" && grant.permission === "write"));
    } else {
      next = upsertPrincipalGrant("user", "*", "write", next);
    }
    commitAccessGrants(next);
  };
  const upsertPrincipalGrant = (principalType, principalId, permission, grants) => {
    if (grants.some((grant) => grant.principal_type === principalType && grant.principal_id === principalId && grant.permission === permission)) {
      return grants;
    }
    return [
      ...grants,
      {
        principal_type: principalType,
        principal_id: principalId,
        permission
      }
    ];
  };
  const removePrincipalGrant = (principalType, principalId, permission, grants) => grants.filter((grant) => !(grant.principal_type === principalType && grant.principal_id === principalId && grant.permission === permission));
  const removePrincipal = (principalType, principalId) => {
    let next = [...currentGrants()];
    next = removePrincipalGrant(principalType, principalId, "read", next);
    next = removePrincipalGrant(principalType, principalId, "write", next);
    commitAccessGrants(next);
  };
  const togglePrincipalWrite = (principalType, principalId) => {
    let next = [...currentGrants()];
    const hasWrite = hasPrincipalGrant(principalType, principalId, "write");
    if (hasWrite) {
      next = removePrincipalGrant(principalType, principalId, "write", next);
    } else {
      next = upsertPrincipalGrant(principalType, principalId, "read", next);
      next = upsertPrincipalGrant(principalType, principalId, "write", next);
    }
    commitAccessGrants(next);
  };
  const ensureUsersByIds = async (userIds) => {
    var _a;
    const pendingIds = userIds.filter((id) => !get(userById)[id] && !resolvingUserIds.has(id));
    if (!pendingIds.length) return;
    for (const id of pendingIds) {
      resolvingUserIds.add(id);
    }
    const fetched = await Promise.all(pendingIds.map(async (id) => {
      const user = await getUserInfoById(localStorage.token, id).catch((error) => {
        /* @__PURE__ */ console.error(error);
        return null;
      });
      return { id, user };
    }));
    const nextUserById = { ...get(userById) };
    for (const item of fetched) {
      if ((_a = item.user) == null ? void 0 : _a.id) {
        nextUserById[item.id] = item.user;
      }
      resolvingUserIds.delete(item.id);
    }
    set(userById, nextUserById);
  };
  const handleAddAccess = ({ userIds, groupIds }) => {
    let next = [...currentGrants()];
    for (const groupId of groupIds) {
      next = upsertPrincipalGrant("group", groupId, "read", next);
    }
    for (const userId of userIds) {
      next = upsertPrincipalGrant("user", userId, "read", next);
    }
    commitAccessGrants(next);
  };
  const ensureGroupsByIds = async (groupIds) => {
    const pendingIds = groupIds.filter((id) => !get(groups).find((g) => g.id === id) && !resolvingGroupIds.has(id));
    if (!pendingIds.length) return;
    for (const id of pendingIds) {
      resolvingGroupIds.add(id);
    }
    const fetched = await Promise.all(pendingIds.map(async (id) => {
      const group = await getGroupInfoById(localStorage.token, id).catch((error) => {
        /* @__PURE__ */ console.error(error);
        return null;
      });
      return group;
    }));
    const newGroups = fetched.filter((g) => g);
    if (newGroups.length > 0) {
      set(groups, [...get(groups), ...newGroups].filter((g, index2, self) => index2 === self.findIndex((t) => t.id === g.id)));
    }
    for (const id of pendingIds) {
      resolvingGroupIds.delete(id);
    }
  };
  onMount(async () => {
    /* @__PURE__ */ console.log("AccessControl mounted", { accessGrants: accessGrants(), accessControl: accessControl() });
    const res = await getGroups(localStorage.token, true).catch((error) => {
      /* @__PURE__ */ console.error(error);
      return [];
    });
    /* @__PURE__ */ console.log("getGroups res", res);
    set(groups, [...get(groups), ...res].filter((g, index2, self) => index2 === self.findIndex((t) => t.id === g.id)));
  });
  legacy_pre_effect(
    () => (deep_read_state(accessGrants()), deep_read_state(accessControl())),
    () => {
      const normalizedGrants = normalizeInputToGrants(accessGrants());
      if (stableStringify(normalizedGrants) !== stableStringify(accessGrants())) {
        accessGrants(normalizedGrants);
      }
      if (accessControl() !== void 0) {
        const nextAccessControl = grantsToLegacyAccessControl(normalizedGrants);
        if (stableStringify(nextAccessControl) !== stableStringify(accessControl())) {
          accessControl(nextAccessControl);
        }
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(accessControl()), deep_read_state(accessGrants())),
    () => {
      if (accessControl() !== void 0) {
        const normalizedGrants = normalizeInputToGrants(accessControl());
        if (stableStringify(normalizedGrants) !== stableStringify(accessGrants())) {
          accessGrants(normalizedGrants);
        }
      }
    }
  );
  legacy_pre_effect(() => deep_read_state(accessGrants()), () => {
    set(readGroupIds, (accessGrants(), getPrincipalIdsByPermission("group", "read")));
  });
  legacy_pre_effect(() => deep_read_state(accessGrants()), () => {
    set(writeGroupIds, (accessGrants(), getPrincipalIdsByPermission("group", "write")));
  });
  legacy_pre_effect(() => (get(readGroupIds), get(writeGroupIds)), () => {
    if (get(readGroupIds).length > 0 || get(writeGroupIds).length > 0) {
      void ensureGroupsByIds([...get(readGroupIds), ...get(writeGroupIds)]);
    }
  });
  legacy_pre_effect(() => deep_read_state(accessGrants()), () => {
    set(readUserIds, (accessGrants(), getPrincipalIdsByPermission("user", "read").filter((id) => id !== "*")));
  });
  legacy_pre_effect(() => deep_read_state(accessGrants()), () => {
    set(writeUserIds, (accessGrants(), getPrincipalIdsByPermission("user", "write").filter((id) => id !== "*")));
  });
  legacy_pre_effect(() => (get(readUserIds), get(writeUserIds)), () => {
    set(selectedUserIds, Array.from(/* @__PURE__ */ new Set([...get(readUserIds), ...get(writeUserIds)])));
  });
  legacy_pre_effect(() => (get(selectedUserIds), get(userById)), () => {
    set(selectedUsers, get(selectedUserIds).map((id) => {
      return get(userById)[id] ?? { id, name: id, email: "" };
    }).sort((a, b) => a.name.localeCompare(b.name)));
  });
  legacy_pre_effect(() => (get(groups), get(readGroupIds), get(writeGroupIds)), () => {
    set(accessGroups, get(groups).filter((group) => get(readGroupIds).includes(group.id) || get(writeGroupIds).includes(group.id)).sort((a, b) => a.name.localeCompare(b.name)));
  });
  legacy_pre_effect(() => get(selectedUserIds), () => {
    if (get(selectedUserIds).length > 0) {
      void ensureUsersByIds(get(selectedUserIds));
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(accessGrants()), get(readGroupIds), get(writeGroupIds), get(selectedUserIds), get(groups), get(accessGroups), get(selectedUsers)),
    () => {
      /* @__PURE__ */ console.log("AccessControl state", {
        accessGrants: accessGrants(),
        readGroupIds: get(readGroupIds),
        writeGroupIds: get(writeGroupIds),
        selectedUserIds: get(selectedUserIds),
        groups: get(groups),
        accessGroups: get(accessGroups),
        selectedUsers: get(selectedUsers)
      });
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root_10();
  var node = first_child(fragment);
  AddAccessModal(node, {
    get shareUsers() {
      return shareUsers();
    },
    onAdd: handleAddAccess,
    get show() {
      return get(showAddAccessModal);
    },
    set show($$value) {
      set(showAddAccessModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var node_1 = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var svg = root();
      append($$anchor2, svg);
    };
    var d = user_derived(() => (deep_read_state(accessGrants()), untrack(() => !hasPublicReadGrant(accessGrants() ?? []))));
    var alternate = ($$anchor2) => {
      var svg_1 = root_1();
      append($$anchor2, svg_1);
    };
    if_block(node_1, ($$render) => {
      if (get(d)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_4);
  reset(div_3);
  var div_5 = sibling(div_3, 2);
  var node_2 = child(div_5);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(share()), deep_read_state(sharePublic()), deep_read_state(accessGrants()), $i18n(), untrack(() => !(share() && sharePublic()) && !hasPublicReadGrant(accessGrants() ?? []) ? $i18n().t("You do not have permission to make this public") : "")));
    Tooltip(node_2, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var select = root_3();
        var option = child(select);
        var text2 = child(option, true);
        reset(option);
        option.value = option.__value = "private";
        var node_3 = sibling(option);
        {
          var consequent_1 = ($$anchor3) => {
            var option_1 = root_2();
            var text_1 = child(option_1, true);
            reset(option_1);
            option_1.value = option_1.__value = "public";
            template_effect(($02) => set_text(text_1, $02), [() => ($i18n(), untrack(() => $i18n().t("Public")))]);
            append($$anchor3, option_1);
          };
          var d_1 = user_derived(() => (deep_read_state(share()), deep_read_state(sharePublic()), deep_read_state(accessGrants()), untrack(() => share() && sharePublic() || hasPublicReadGrant(accessGrants() ?? []))));
          if_block(node_3, ($$render) => {
            if (get(d_1)) $$render(consequent_1);
          });
        }
        reset(select);
        var select_value;
        init_select(select);
        template_effect(
          ($02, $1) => {
            set_text(text2, $02);
            if (select_value !== (select_value = $1)) {
              select.value = (select.__value = $1) ?? "", select_option(select, $1);
            }
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Private"))),
            () => (deep_read_state(accessGrants()), untrack(() => !hasPublicReadGrant(accessGrants() ?? []) ? "private" : "public"))
          ]
        );
        event("change", select, (e) => {
          setPublic(e.target.value === "public");
        });
        append($$anchor2, select);
      },
      $$slots: { default: true }
    });
  }
  var div_6 = sibling(node_2, 2);
  var node_4 = child(div_6);
  {
    var consequent_2 = ($$anchor2) => {
      var text_2 = text();
      template_effect(($0) => set_text(text_2, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Only select users and groups with permission can access")))
      ]);
      append($$anchor2, text_2);
    };
    var d_2 = user_derived(() => (deep_read_state(accessGrants()), untrack(() => !hasPublicReadGrant(accessGrants() ?? []))));
    var alternate_1 = ($$anchor2) => {
      var text_3 = text();
      template_effect(($0) => set_text(text_3, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Accessible to all users")))
      ]);
      append($$anchor2, text_3);
    };
    if_block(node_4, ($$render) => {
      if (get(d_2)) $$render(consequent_2);
      else $$render(alternate_1, -1);
    });
  }
  reset(div_6);
  reset(div_5);
  reset(div_2);
  var node_5 = sibling(div_2, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div_7 = root_4();
      var div_8 = child(div_7);
      var text_4 = child(div_8, true);
      reset(div_8);
      var node_6 = sibling(div_8, 2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(accessGrants()), untrack(() => hasPublicWriteGrant(accessGrants() ?? []))));
        Switch_1(node_6, {
          get state() {
            return get($0);
          },
          $$events: {
            change: () => {
              togglePublicWrite();
            }
          }
        });
      }
      reset(div_7);
      template_effect(($0) => set_text(text_4, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Allow public write access")))
      ]);
      append($$anchor2, div_7);
    };
    var d_3 = user_derived(() => (deep_read_state(accessGrants()), deep_read_state(accessRoles()), untrack(() => hasPublicReadGrant(accessGrants() ?? []) && accessRoles().includes("write"))));
    if_block(node_5, ($$render) => {
      if (get(d_3)) $$render(consequent_3);
    });
  }
  reset(div_1);
  var node_7 = sibling(div_1, 2);
  {
    var consequent_8 = ($$anchor2) => {
      var fragment_3 = root_9();
      var div_9 = first_child(fragment_3);
      var div_10 = child(div_9);
      var text_5 = child(div_10, true);
      reset(div_10);
      var div_11 = sibling(div_10, 2);
      var button = child(div_11);
      var node_8 = child(button);
      Plus(node_8, { className: "size-3" });
      var text_6 = sibling(node_8);
      reset(button);
      reset(div_11);
      reset(div_9);
      var div_12 = sibling(div_9, 2);
      var node_9 = child(div_12);
      each(node_9, 1, () => get(accessGroups), index, ($$anchor3, group) => {
        var div_13 = root_5();
        var div_14 = child(div_13);
        var div_15 = child(div_14);
        var text_7 = child(div_15, true);
        reset(div_15);
        var div_16 = sibling(div_15, 2);
        var text_8 = child(div_16);
        var span = sibling(text_8);
        var text_9 = child(span);
        reset(span);
        reset(div_16);
        reset(div_14);
        var div_17 = sibling(div_14, 2);
        var button_1 = child(div_17);
        var node_10 = child(button_1);
        {
          var consequent_4 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write"))));
              Badge($$anchor4, {
                type: "success",
                get content() {
                  return get($0);
                }
              });
            }
          };
          var d_4 = user_derived(() => (get(writeGroupIds), get(group), untrack(() => get(writeGroupIds).includes(get(group).id))));
          var alternate_2 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read"))));
              Badge($$anchor4, {
                type: "info",
                get content() {
                  return get($0);
                }
              });
            }
          };
          if_block(node_10, ($$render) => {
            if (get(d_4)) $$render(consequent_4);
            else $$render(alternate_2, -1);
          });
        }
        reset(button_1);
        var button_2 = sibling(button_1, 2);
        var node_11 = child(button_2);
        XMark(node_11, { className: "size-4" });
        reset(button_2);
        reset(div_17);
        reset(div_13);
        template_effect(
          ($0, $1) => {
            set_text(text_7, $0);
            set_text(text_8, `${(get(group), untrack(() => get(group).name)) ?? ""} `);
            set_text(text_9, `${(get(group), untrack(() => {
              var _a;
              return (_a = get(group)) == null ? void 0 : _a.member_count;
            })) ?? ""} ${$1 ?? ""}`);
          },
          [
            () => (get(group), untrack(() => get(group).name.charAt(0).toUpperCase())),
            () => ($i18n(), untrack(() => $i18n().t("members")))
          ]
        );
        event("click", button_1, () => {
          if (accessRoles().includes("write")) {
            togglePrincipalWrite("group", get(group).id);
          }
        });
        event("click", button_2, () => {
          removePrincipal("group", get(group).id);
        });
        append($$anchor3, div_13);
      });
      var node_12 = sibling(node_9, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var fragment_6 = comment();
          var node_13 = first_child(fragment_6);
          each(node_13, 1, () => get(selectedUsers), index, ($$anchor4, user) => {
            var div_18 = root_7();
            var div_19 = child(div_18);
            var img = child(div_19);
            var div_20 = sibling(img, 2);
            var node_14 = child(div_20);
            Tooltip(node_14, {
              get content() {
                return get(user), untrack(() => get(user).email);
              },
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var div_21 = root_6();
                var text_10 = child(div_21, true);
                reset(div_21);
                template_effect(() => set_text(text_10, (get(user), untrack(() => get(user).name ?? get(user).id))));
                append($$anchor5, div_21);
              },
              $$slots: { default: true }
            });
            reset(div_20);
            reset(div_19);
            var div_22 = sibling(div_19, 2);
            var button_3 = child(div_22);
            var node_15 = child(button_3);
            {
              var consequent_5 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write"))));
                  Badge($$anchor5, {
                    type: "success",
                    get content() {
                      return get($0);
                    }
                  });
                }
              };
              var d_5 = user_derived(() => (get(writeUserIds), get(user), untrack(() => get(writeUserIds).includes(get(user).id))));
              var alternate_3 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read"))));
                  Badge($$anchor5, {
                    type: "info",
                    get content() {
                      return get($0);
                    }
                  });
                }
              };
              if_block(node_15, ($$render) => {
                if (get(d_5)) $$render(consequent_5);
                else $$render(alternate_3, -1);
              });
            }
            reset(button_3);
            var button_4 = sibling(button_3, 2);
            var node_16 = child(button_4);
            XMark(node_16, { className: "size-4" });
            reset(button_4);
            reset(div_22);
            reset(div_18);
            template_effect(() => {
              set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), get(user), untrack(() => `${REXPRO_API_BASE_URL}/users/${get(user).id}/profile/image`)));
              set_attribute(img, "alt", (get(user), untrack(() => get(user).name ?? get(user).id)));
            });
            event("click", button_3, () => {
              if (accessRoles().includes("write")) {
                togglePrincipalWrite("user", get(user).id);
              }
            });
            event("click", button_4, () => {
              removePrincipal("user", get(user).id);
            });
            append($$anchor4, div_18);
          });
          append($$anchor3, fragment_6);
        };
        if_block(node_12, ($$render) => {
          if (shareUsers()) $$render(consequent_6);
        });
      }
      var node_17 = sibling(node_12, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_23 = root_8();
          var text_11 = child(div_23, true);
          reset(div_23);
          template_effect(($0) => set_text(text_11, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No access grants. Private to you.")))
          ]);
          append($$anchor3, div_23);
        };
        var d_6 = user_derived(() => (deep_read_state(accessGrants()), get(accessGroups), get(selectedUsers), untrack(() => !hasPublicReadGrant(accessGrants() ?? []) && get(accessGroups).length === 0 && get(selectedUsers).length === 0)));
        if_block(node_17, ($$render) => {
          if (get(d_6)) $$render(consequent_7);
        });
      }
      reset(div_12);
      template_effect(
        ($0, $1) => {
          set_text(text_5, $0);
          set_text(text_6, ` ${$1 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Access List"))),
          () => ($i18n(), untrack(() => $i18n().t("Add Access")))
        ]
      );
      event("click", button, () => {
        set(showAddAccessModal, true);
      });
      append($$anchor2, fragment_3);
    };
    if_block(node_7, ($$render) => {
      if (share()) $$render(consequent_8);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  AccessControl as A
};
