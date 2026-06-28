import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { bd as delegate, p as push, c as child, t as template_effect, k as get, a as append, z as sibling, r as reset, be as delegated, y as event, w as set, b as pop, b3 as state, v as user_derived, h as first_child, g as comment, d as set_text, f as from_html, B as from_svg, a$ as to_array, aW as text, i as getContext, m as deep_read_state, u as untrack, s as setup_stores, e as store_get, l as legacy_pre_effect, n as legacy_pre_effect_reset, q as mutable_source, x as derived_safe_equal, o as onMount, aV as mutate } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { i as init } from "./CUpGYt-B.js";
import { g as goto } from "./vYrFh_lq.js";
import { c as config, m as models, u as user } from "./BJ3rUC-5.js";
import { e as each, i as index } from "./qTQza25_.js";
import { s as set_attribute, a as set_class, c as clsx, d as set_style, f as bind_select_value } from "./B9yCN616.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { g as getGroups } from "./C9ZHzqWY.js";
import { S as Spinner } from "./gJqE84vs.js";
import { C as ChevronUp } from "./BYBmqvkv.js";
import { C as ChevronDown } from "./BAfBE24n.js";
import { p as prop } from "./COqmMDwI.js";
import { d as dayjs2 } from "./BeGenu0j.js";
import { M as Modal } from "./tmhUPuyr.js";
import { M as ModelActivityChart } from "./CDLmY1-T.js";
import { c as calendar } from "./DN4MDugR.js";
import { L as Loader } from "./Cbj8yul_.js";
import { X as XMark } from "./DAqPThR3.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { F as formatNumber } from "./X0cYWxFO.js";
const getModelAnalytics = async (token = "", startDate = null, endDate = null, groupId = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  if (groupId) searchParams.append("group_id", groupId);
  const res = await fetch(`${REXPRO_API_BASE_URL}/analytics/models?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getUserAnalytics = async (token = "", startDate = null, endDate = null, limit = 50, groupId = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  if (limit) searchParams.append("limit", limit.toString());
  if (groupId) searchParams.append("group_id", groupId);
  const res = await fetch(`${REXPRO_API_BASE_URL}/analytics/users?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getSummary = async (token = "", startDate = null, endDate = null, groupId = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  if (groupId) searchParams.append("group_id", groupId);
  const res = await fetch(`${REXPRO_API_BASE_URL}/analytics/summary?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getDailyStats = async (token = "", startDate = null, endDate = null, granularity = "daily", groupId = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  searchParams.append("granularity", granularity);
  if (groupId) searchParams.append("group_id", groupId);
  const res = await fetch(`${REXPRO_API_BASE_URL}/analytics/daily?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getTokenUsage = async (token = "", startDate = null, endDate = null, groupId = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  if (groupId) searchParams.append("group_id", groupId);
  const res = await fetch(`${REXPRO_API_BASE_URL}/analytics/tokens?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelChats = async (token = "", modelId, startDate = null, endDate = null, skip = 0, limit = 50) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (startDate) searchParams.append("start_date", startDate.toString());
  if (endDate) searchParams.append("end_date", endDate.toString());
  if (skip) searchParams.append("skip", skip.toString());
  if (limit) searchParams.append("limit", limit.toString());
  const res = await fetch(
    `${REXPRO_API_BASE_URL}/analytics/models/${encodeURIComponent(modelId)}/chats?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelOverview = async (token = "", modelId, days = 30) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("days", days.toString());
  const res = await fetch(
    `${REXPRO_API_BASE_URL}/analytics/models/${encodeURIComponent(modelId)}/overview?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root$4 = from_svg(`<path fill="none" stroke-width="1.5"></path>`);
var root_1$3 = from_svg(`<circle r="3"></circle>`);
var root_2$3 = from_svg(`<line stroke="#ddd" stroke-width="1"></line><!>`, 1);
var root_3$3 = from_html(`<span> </span>`);
var root_4$3 = from_html(`<div class="flex justify-between px-0.5 text-[10px] text-gray-400"></div>`);
var root_5$3 = from_html(`<div class="flex items-center justify-between gap-2 py-0.5"><span class="min-w-0 truncate text-gray-600 dark:text-gray-300"> </span> <span class="shrink-0 text-gray-900 tabular-nums dark:text-white"> <span class="text-gray-400"> </span></span></div>`);
var root_6$3 = from_html(`<div class="pointer-events-none absolute top-1 text-[11px]"><div class="min-w-[140px] -translate-x-1/2 rounded border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm dark:border-gray-800 dark:bg-gray-900"><div class="mb-1.5 text-[10px] text-gray-400"><!></div> <!></div></div>`);
var root_7$3 = from_html(`<div class="relative w-full"><svg class="h-[calc(100%-20px)] w-full" preserveAspectRatio="none"><!><!></svg> <!> <!></div>`);
function ChartLine($$anchor, $$props) {
  push($$props, true);
  let height = prop($$props, "height", 3, 300), period = prop($$props, "period", 3, "week");
  let hoveredIdx = state(null);
  let mouseX = state(0);
  let colorMap = user_derived(() => new Map($$props.models.map((n, i) => [n, $$props.colors[i % $$props.colors.length]])));
  let maxCount = user_derived(() => Math.max(...$$props.data.flatMap((d) => Object.values(d.models || {})), 1));
  const pad = { t: 8, r: 0, b: 20, l: 0 };
  const w = 1e3;
  let cw = user_derived(() => w - pad.l - pad.r);
  let ch = user_derived(() => height() - pad.t - pad.b);
  const getX = (i) => $$props.data.length <= 1 ? pad.l + get(cw) / 2 : pad.l + i / ($$props.data.length - 1) * get(cw);
  const getY = (v) => pad.t + get(ch) - v / get(maxCount) * get(ch);
  const path = (m) => {
    const pts = $$props.data.map((d, i) => {
      var _a;
      return `${getX(i)},${getY(((_a = d.models) == null ? void 0 : _a[m]) || 0)}`;
    });
    return pts.length > 1 ? `M${pts.join("L")}` : "";
  };
  const onMove = (e) => {
    const svg = e.currentTarget;
    const r = svg.getBoundingClientRect();
    set(mouseX, (e.clientX - r.left) * (w / r.width));
    set(hoveredIdx, Math.max(0, Math.min($$props.data.length - 1, Math.round((get(mouseX) - pad.l) / get(cw) * ($$props.data.length - 1)))), true);
  };
  let hovered = user_derived(() => get(hoveredIdx) !== null ? $$props.data[get(hoveredIdx)] : null);
  var div = root_7$3();
  var svg_1 = child(div);
  var node = child(svg_1);
  each(node, 17, () => $$props.models, index, ($$anchor2, m) => {
    var path_1 = root$4();
    template_effect(
      ($0, $1) => {
        var _a;
        set_attribute(path_1, "d", $0);
        set_attribute(path_1, "stroke", $1);
        set_class(path_1, 0, clsx(get(hovered) && !((_a = get(hovered).models) == null ? void 0 : _a[get(m)]) ? "opacity-20" : ""));
      },
      [() => path(get(m)), () => get(colorMap).get(get(m))]
    );
    append($$anchor2, path_1);
  });
  var node_1 = sibling(node);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = root_2$3();
      var line = first_child(fragment);
      var node_2 = sibling(line);
      each(node_2, 17, () => $$props.models, index, ($$anchor3, m) => {
        const v = user_derived(() => {
          var _a, _b;
          return ((_b = (_a = get(hovered)) == null ? void 0 : _a.models) == null ? void 0 : _b[get(m)]) || 0;
        });
        var fragment_1 = comment();
        var node_3 = first_child(fragment_1);
        {
          var consequent = ($$anchor4) => {
            var circle = root_1$3();
            template_effect(
              ($0, $1, $2) => {
                set_attribute(circle, "cx", $0);
                set_attribute(circle, "cy", $1);
                set_attribute(circle, "fill", $2);
              },
              [
                () => getX(get(hoveredIdx)),
                () => getY(get(v)),
                () => get(colorMap).get(get(m))
              ]
            );
            append($$anchor4, circle);
          };
          if_block(node_3, ($$render) => {
            if (get(v) > 0) $$render(consequent);
          });
        }
        append($$anchor3, fragment_1);
      });
      template_effect(
        ($0, $1) => {
          set_attribute(line, "x1", $0);
          set_attribute(line, "y1", pad.t);
          set_attribute(line, "x2", $1);
          set_attribute(line, "y2", get(ch) + pad.t);
        },
        [() => getX(get(hoveredIdx)), () => getX(get(hoveredIdx))]
      );
      append($$anchor2, fragment);
    };
    if_block(node_1, ($$render) => {
      if (get(hoveredIdx) !== null) $$render(consequent_1);
    });
  }
  reset(svg_1);
  var node_4 = sibling(svg_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      const labelCount = user_derived(() => Math.min(7, $$props.data.length));
      const step = user_derived(() => get(labelCount) > 1 ? Math.floor(($$props.data.length - 1) / (get(labelCount) - 1)) || 1 : 1);
      const isHourly = user_derived(() => {
        var _a, _b;
        return (_b = (_a = $$props.data[0]) == null ? void 0 : _a.date) == null ? void 0 : _b.includes(":");
      });
      const dateFormat = user_derived(() => get(isHourly) ? "h A" : period() === "year" || period() === "all" ? "M/D/YY" : "M/D");
      var div_1 = root_4$3();
      each(div_1, 21, () => Array(get(labelCount)), index, ($$anchor3, _, i) => {
        const idx = user_derived(() => i === get(labelCount) - 1 ? $$props.data.length - 1 : Math.min(i * get(step), $$props.data.length - 1));
        var fragment_2 = comment();
        var node_5 = first_child(fragment_2);
        {
          var consequent_2 = ($$anchor4) => {
            var span = root_3$3();
            var text2 = child(span, true);
            reset(span);
            template_effect(
              ($0) => {
                set_class(span, 1, clsx(i === 0 ? "text-left" : i === get(labelCount) - 1 ? "text-right" : "text-center"));
                set_text(text2, $0);
              },
              [
                () => dayjs2($$props.data[get(idx)].date).format(get(dateFormat))
              ]
            );
            append($$anchor4, span);
          };
          if_block(node_5, ($$render) => {
            if ($$props.data[get(idx)]) $$render(consequent_2);
          });
        }
        append($$anchor3, fragment_2);
      });
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_4, ($$render) => {
      if ($$props.data.length > 1) $$render(consequent_3);
    });
  }
  var node_6 = sibling(node_4, 2);
  {
    var consequent_5 = ($$anchor2) => {
      const total = user_derived(() => Object.values(get(hovered).models || {}).reduce((a, b) => a + b, 0));
      var div_2 = root_6$3();
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var node_7 = child(div_4);
      {
        var consequent_4 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [() => dayjs2(get(hovered).date).format("MMM D, h A")]);
          append($$anchor3, text_1);
        };
        var d_1 = user_derived(() => {
          var _a;
          return (_a = get(hovered).date) == null ? void 0 : _a.includes(":");
        });
        var alternate = ($$anchor3) => {
          var text_2 = text();
          template_effect(($0) => set_text(text_2, $0), [() => dayjs2(get(hovered).date).format("MMM D, YYYY")]);
          append($$anchor3, text_2);
        };
        if_block(node_7, ($$render) => {
          if (get(d_1)) $$render(consequent_4);
          else $$render(alternate, -1);
        });
      }
      reset(div_4);
      var node_8 = sibling(div_4, 2);
      each(node_8, 17, () => Object.entries(get(hovered).models || {}).sort(([, a], [, b]) => b - a).slice(0, 5), index, ($$anchor3, $$item) => {
        var $$array = user_derived(() => to_array(get($$item), 2));
        let n = () => get($$array)[0];
        let c = () => get($$array)[1];
        var div_5 = root_5$3();
        var span_1 = child(div_5);
        var text_3 = child(span_1, true);
        reset(span_1);
        var span_2 = sibling(span_1, 2);
        var text_4 = child(span_2);
        var span_3 = sibling(text_4);
        var text_5 = child(span_3);
        reset(span_3);
        reset(span_2);
        reset(div_5);
        template_effect(
          ($0, $1) => {
            set_text(text_3, n());
            set_text(text_4, `${$0 ?? ""} `);
            set_text(text_5, `(${$1 ?? ""}%)`);
          },
          [
            () => c().toLocaleString(),
            () => get(total) > 0 ? (c() / get(total) * 100).toFixed(0) : 0
          ]
        );
        append($$anchor3, div_5);
      });
      reset(div_3);
      reset(div_2);
      template_effect(($0) => set_style(div_2, `left:${$0 ?? ""}%`), [() => Math.min(Math.max(get(mouseX) / w * 100, 8), 92)]);
      append($$anchor2, div_2);
    };
    if_block(node_6, ($$render) => {
      if (get(hovered)) $$render(consequent_5);
    });
  }
  reset(div);
  template_effect(() => {
    set_style(div, `height:${height() ?? ""}px`);
    set_attribute(svg_1, "viewBox", `0 0 1000 ${height() - 20}`);
  });
  delegated("mousemove", svg_1, onMove);
  event("mouseleave", svg_1, () => set(hoveredIdx, null));
  append($$anchor, div);
  pop();
}
delegate(["mousemove"]);
var root$3 = from_html(`<div class="px-1.5 py-1 w-32"> </div>`);
var root_1$2 = from_html(`<div class="flex text-xs font-medium mb-1.5"><!> <div> </div> <div> </div></div>`);
var root_2$2 = from_html(`<div class="flex justify-center py-8"><!></div>`);
var root_3$2 = from_html(`<div class="text-center text-gray-500 text-sm py-8"> </div>`);
var root_4$2 = from_html(`<div> </div>`);
var root_5$2 = from_html(`<div class="w-32 shrink-0 flex items-center gap-2"><img class="size-5 rounded-full object-cover shrink-0"/> <span class="text-xs text-gray-600 dark:text-gray-400 truncate"> </span></div>`);
var root_6$2 = from_html(`<!> <div class="w-full flex items-center rounded-lg text-sm py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-850"><!> <a><div class="text-ellipsis line-clamp-1 w-full"> </div></a> <div><div class="hidden sm:flex text-gray-500 dark:text-gray-400 text-xs"> </div></div></div>`, 1);
var root_7$2 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div> </div></div>`);
var root_8$2 = from_html(`<!> <!>`, 1);
var root_9$2 = from_html(`<div><!> <div class="max-h-[22rem] overflow-y-scroll"><!></div></div>`);
function ChatList($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(calendar);
  const i18n = getContext("i18n");
  let chatList = prop($$props, "chatList", 8, null);
  let loading = prop($$props, "loading", 8, false);
  let allLoaded = prop($$props, "allLoaded", 8, false);
  let showUserInfo = prop($$props, "showUserInfo", 8, false);
  let shareUrl = prop($$props, "shareUrl", 8, false);
  let emptyMessage = prop($$props, "emptyMessage", 8, "No chats found");
  let onLoadMore = prop($$props, "onLoadMore", 8, null);
  let onChatClick = prop($$props, "onChatClick", 8, null);
  init();
  var div = root_9$2();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_1$2();
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root$3();
          var text2 = child(div_2, true);
          reset(div_2);
          template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("User")))]);
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if (showUserInfo()) $$render(consequent);
        });
      }
      var div_3 = sibling(node_1, 2);
      var text_1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_2 = child(div_4, true);
      reset(div_4);
      reset(div_1);
      template_effect(
        ($0, $1) => {
          set_class(div_3, 1, `px-1.5 py-1 ${showUserInfo() ? "flex-1" : "basis-3/5"}`);
          set_text(text_1, $0);
          set_class(div_4, 1, `px-1.5 py-1 hidden sm:flex ${showUserInfo() ? "w-28" : "basis-2/5"} justify-end`);
          set_text(text_2, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Title"))),
          () => ($i18n(), untrack(() => $i18n().t("Updated at")))
        ]
      );
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(chatList()), untrack(() => chatList() && chatList().length > 0)) $$render(consequent_1);
    });
  }
  var div_5 = sibling(node, 2);
  var node_2 = child(div_5);
  {
    var consequent_2 = ($$anchor2) => {
      var div_6 = root_2$2();
      var node_3 = child(div_6);
      Spinner(node_3, {});
      reset(div_6);
      append($$anchor2, div_6);
    };
    var consequent_3 = ($$anchor2) => {
      var div_7 = root_3$2();
      var text_3 = child(div_7, true);
      reset(div_7);
      template_effect(($0) => set_text(text_3, $0), [
        () => ($i18n(), deep_read_state(emptyMessage()), untrack(() => $i18n().t(emptyMessage())))
      ]);
      append($$anchor2, div_7);
    };
    var alternate = ($$anchor2) => {
      var fragment = root_8$2();
      var node_4 = first_child(fragment);
      each(node_4, 3, chatList, (chat) => chat.id, ($$anchor3, chat, idx) => {
        var fragment_1 = root_6$2();
        var node_5 = first_child(fragment_1);
        {
          var consequent_4 = ($$anchor4) => {
            var div_8 = root_4$2();
            var text_4 = child(div_8, true);
            reset(div_8);
            template_effect(
              ($0) => {
                set_class(div_8, 1, `w-full text-xs text-gray-500 dark:text-gray-500 font-medium ${get(idx) === 0 ? "" : "pt-5"} pb-2 px-2`);
                set_text(text_4, $0);
              },
              [
                () => ($i18n(), get(chat), untrack(() => $i18n().t(get(chat).time_range)))
              ]
            );
            append($$anchor4, div_8);
          };
          if_block(node_5, ($$render) => {
            if (get(chat), deep_read_state(get(idx)), deep_read_state(chatList()), untrack(() => {
              var _a;
              return get(chat).time_range && (get(idx) === 0 || get(chat).time_range !== ((_a = chatList()[get(idx) - 1]) == null ? void 0 : _a.time_range));
            })) $$render(consequent_4);
          });
        }
        var div_9 = sibling(node_5, 2);
        var node_6 = child(div_9);
        {
          var consequent_5 = ($$anchor4) => {
            var div_10 = root_5$2();
            var img = child(div_10);
            var span = sibling(img, 2);
            var text_5 = child(span, true);
            reset(span);
            reset(div_10);
            template_effect(() => {
              set_attribute(img, "src", `${REXPRO_API_BASE_URL ?? ""}/users/${(get(chat), untrack(() => get(chat).user_id)) ?? ""}/profile/image`);
              set_attribute(img, "alt", (get(chat), untrack(() => get(chat).user_name || "User")));
              set_text(text_5, (get(chat), untrack(() => get(chat).user_name || "Unknown")));
            });
            append($$anchor4, div_10);
          };
          if_block(node_6, ($$render) => {
            if (deep_read_state(showUserInfo()), get(chat), untrack(() => showUserInfo() && get(chat).user_id)) $$render(consequent_5);
          });
        }
        var a = sibling(node_6, 2);
        var div_11 = child(a);
        var text_6 = child(div_11, true);
        reset(div_11);
        reset(a);
        var div_12 = sibling(a, 2);
        var div_13 = child(div_12);
        var text_7 = child(div_13, true);
        reset(div_13);
        reset(div_12);
        reset(div_9);
        template_effect(
          ($0, $1) => {
            set_class(a, 1, clsx(showUserInfo() ? "flex-1" : "basis-3/5"));
            set_attribute(a, "href", (deep_read_state(shareUrl()), get(chat), untrack(() => shareUrl() ? `/s/${get(chat).id}` : `/c/${get(chat).id}`)));
            set_text(text_6, $0);
            set_class(div_12, 1, `${showUserInfo() ? "w-28" : "basis-2/5"} flex items-center justify-end`);
            set_text(text_7, $1);
          },
          [
            () => (get(chat), untrack(() => get(chat).title.replace(new RegExp("^\\p{Extended_Pictographic}\\s*", "gu"), "").trim())),
            () => (deep_read_state(dayjs2), get(chat), untrack(() => dayjs2(get(chat).updated_at * 1e3).calendar(null, {
              sameDay: "[Today] h:mm A",
              lastDay: "[Yesterday] h:mm A",
              lastWeek: "MMM D",
              sameElse: "MMM D, YYYY"
            })))
          ]
        );
        event("click", a, () => {
          var _a;
          return (_a = onChatClick()) == null ? void 0 : _a(get(chat).id);
        });
        append($$anchor3, fragment_1);
      });
      var node_7 = sibling(node_4, 2);
      {
        var consequent_6 = ($$anchor3) => {
          Loader($$anchor3, {
            $$events: {
              visible: () => {
                if (!loading()) {
                  onLoadMore()();
                }
              }
            },
            children: ($$anchor4, $$slotProps) => {
              var div_14 = root_7$2();
              var node_8 = child(div_14);
              Spinner(node_8, { className: "size-4" });
              var div_15 = sibling(node_8, 2);
              var text_8 = child(div_15, true);
              reset(div_15);
              reset(div_14);
              template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
              append($$anchor4, div_14);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_7, ($$render) => {
          if (!allLoaded() && onLoadMore()) $$render(consequent_6);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node_2, ($$render) => {
      if (deep_read_state(loading()), deep_read_state(chatList()), untrack(() => loading() && (!chatList() || chatList().length === 0))) $$render(consequent_2);
      else if (deep_read_state(chatList()), untrack(() => !chatList() || chatList().length === 0)) $$render(consequent_3, 1);
      else $$render(alternate, -1);
    });
  }
  reset(div_5);
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<div class="text-lg font-medium self-center line-clamp-1"> </div>`);
var root_1$1 = from_html(`<button> </button>`);
var root_2$1 = from_html(`<div class="text-xs text-gray-500 font-medium uppercase tracking-wide cursor-help"> </div>`);
var root_3$1 = from_html(`<button type="button"> </button>`);
var root_4$1 = from_html(`<span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-xs"> <span class="text-gray-500 font-medium"> </span></span>`);
var root_5$1 = from_html(`<div class="flex flex-wrap gap-1 -mx-1"></div>`);
var root_6$1 = from_html(`<span class="text-gray-500 text-sm">-</span>`);
var root_7$1 = from_html(`<div class="mb-4 mt-3"><div class="flex items-center justify-between mb-2"><!> <div class="inline-flex rounded-full bg-gray-100/80 p-0.5 dark:bg-gray-800/80 backdrop-blur-sm"></div></div> <!></div> <div class="mb-4"><div class="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide"> </div> <!></div>`, 1);
var root_8$1 = from_html(`<div class="mt-3"><!></div>`);
var root_9$1 = from_html(`<div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><!> <button class="self-center" aria-label="Close"><!></button></div> <div class="px-5 border-b border-gray-100 dark:border-gray-850"><div class="flex gap-4"><button> </button> <!></div></div> <div class="px-5 pb-4 dark:text-gray-200"><!> <div class="flex justify-end pt-4"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`, 1);
function AnalyticsModelModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let show = prop($$props, "show", 12, false);
  let model = prop($$props, "model", 8, null);
  let startDate = prop($$props, "startDate", 8, null);
  let endDate = prop($$props, "endDate", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  const i18n = getContext("i18n");
  let selectedTab = mutable_source("overview");
  const TIME_RANGES = [
    { key: "30d", label: "30D", days: 30 },
    { key: "1y", label: "1Y", days: 365 },
    { key: "all", label: "All", days: 0 }
  ];
  let selectedRange = mutable_source("30d");
  let history = mutable_source([]);
  let tags = mutable_source([]);
  let loadingOverview = mutable_source(false);
  let chatList = mutable_source([]);
  let chatListLoading = mutable_source(false);
  let allChatsLoaded = mutable_source(false);
  const PAGE_SIZE = 50;
  const close = () => {
    show(false);
    set(selectedTab, "overview");
    set(chatList, []);
    set(allChatsLoaded, false);
    set(history, []);
    set(tags, []);
    onClose()();
  };
  const loadOverview = async (days) => {
    var _a;
    if (!((_a = model()) == null ? void 0 : _a.id)) return;
    set(loadingOverview, true);
    try {
      const result = await getModelOverview(localStorage.token, model().id, days);
      set(history, (result == null ? void 0 : result.history) ?? []);
      set(tags, (result == null ? void 0 : result.tags) ?? []);
    } catch (err) {
      /* @__PURE__ */ console.error("Failed to load overview:", err);
      set(history, []);
      set(tags, []);
    }
    set(loadingOverview, false);
  };
  const selectRange = (range) => {
    set(selectedRange, range);
    const config2 = TIME_RANGES.find((r) => r.key === range);
    if (config2) {
      loadOverview(config2.days);
    }
  };
  const loadChats = async () => {
    var _a;
    if (!((_a = model()) == null ? void 0 : _a.id)) return;
    set(chatListLoading, true);
    set(chatList, []);
    set(allChatsLoaded, false);
    try {
      const res = await getModelChats(localStorage.token, model().id, startDate(), endDate(), 0, PAGE_SIZE);
      const chats = (res == null ? void 0 : res.chats) ?? [];
      set(chatList, chats.map((c) => ({
        id: c.chat_id,
        title: c.first_message || "No preview",
        updated_at: c.updated_at,
        user_id: c.user_id,
        user_name: c.user_name
      })));
      set(allChatsLoaded, chats.length < PAGE_SIZE);
    } catch (err) {
      /* @__PURE__ */ console.error("Failed to load chats:", err);
      set(chatList, []);
      set(allChatsLoaded, true);
    }
    set(chatListLoading, false);
  };
  const loadMoreChats = async () => {
    var _a;
    if (!((_a = model()) == null ? void 0 : _a.id) || get(chatListLoading) || get(allChatsLoaded)) return;
    set(chatListLoading, true);
    try {
      const skip = get(chatList).length;
      const res = await getModelChats(localStorage.token, model().id, startDate(), endDate(), skip, PAGE_SIZE);
      const chats = (res == null ? void 0 : res.chats) ?? [];
      const newChats = chats.map((c) => ({
        id: c.chat_id,
        title: c.first_message || "No preview",
        updated_at: c.updated_at,
        user_id: c.user_id,
        user_name: c.user_name
      }));
      const existingIds = new Set(get(chatList).map((c) => c.id));
      const uniqueNewChats = newChats.filter((c) => !existingIds.has(c.id));
      set(chatList, [...get(chatList), ...uniqueNewChats]);
      set(allChatsLoaded, chats.length < PAGE_SIZE);
    } catch (err) {
      /* @__PURE__ */ console.error("Failed to load more chats:", err);
    }
    set(chatListLoading, false);
  };
  const selectTab = (tab) => {
    set(selectedTab, tab);
    if (tab === "chats" && get(chatList).length === 0) {
      loadChats();
    }
  };
  legacy_pre_effect(
    () => (deep_read_state(show()), deep_read_state(model()), get(selectedRange)),
    () => {
      var _a;
      if (show() && ((_a = model()) == null ? void 0 : _a.id)) {
        set(selectedTab, "overview");
        set(chatList, []);
        set(allChatsLoaded, false);
        selectRange(get(selectedRange));
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "md",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_2 = root_9$1();
          var div = first_child(fragment_2);
          var node_1 = child(div);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(model()), untrack(() => `${model().name} (${model().id})`)));
            Tooltip(node_1, {
              get content() {
                return get($0);
              },
              placement: "top-start",
              children: ($$anchor4, $$slotProps2) => {
                var div_1 = root$2();
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(() => set_text(text2, (deep_read_state(model()), untrack(() => model().name))));
                append($$anchor4, div_1);
              },
              $$slots: { default: true }
            });
          }
          var button = sibling(node_1, 2);
          var node_2 = child(button);
          XMark(node_2, { className: "size-5" });
          reset(button);
          reset(div);
          var div_2 = sibling(div, 2);
          var div_3 = child(div_2);
          var button_1 = child(div_3);
          var text_1 = child(button_1, true);
          reset(button_1);
          var node_3 = sibling(button_1, 2);
          {
            var consequent = ($$anchor4) => {
              var button_2 = root_1$1();
              var text_2 = child(button_2, true);
              reset(button_2);
              template_effect(
                ($0) => {
                  set_class(button_2, 1, `py-2 text-sm font-medium border-b-2 transition-colors ${get(selectedTab) === "chats" ? "border-black dark:border-white text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`);
                  set_text(text_2, $0);
                },
                [() => ($i18n(), untrack(() => $i18n().t("Chats")))]
              );
              event("click", button_2, () => selectTab("chats"));
              append($$anchor4, button_2);
            };
            if_block(node_3, ($$render) => {
              if ($config(), untrack(() => {
                var _a, _b;
                return (_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_admin_chat_access;
              })) $$render(consequent);
            });
          }
          reset(div_3);
          reset(div_2);
          var div_4 = sibling(div_2, 2);
          var node_4 = child(div_4);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_3 = root_7$1();
              var div_5 = first_child(fragment_3);
              var div_6 = child(div_5);
              var node_5 = child(div_6);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Thumbs up/down ratings from users on model responses"))));
                Tooltip(node_5, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var div_7 = root_2$1();
                    var text_3 = child(div_7, true);
                    reset(div_7);
                    template_effect(($02) => set_text(text_3, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Feedback Activity")))
                    ]);
                    append($$anchor5, div_7);
                  },
                  $$slots: { default: true }
                });
              }
              var div_8 = sibling(node_5, 2);
              each(div_8, 5, () => TIME_RANGES, index, ($$anchor5, range) => {
                var button_3 = root_3$1();
                var text_4 = child(button_3, true);
                reset(button_3);
                template_effect(() => {
                  set_class(button_3, 1, `rounded-full transition-all duration-200 px-2.5 py-0.5 text-xs font-medium ${(get(selectedRange), get(range), untrack(() => get(selectedRange) === get(range).key ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200")) ?? ""}`);
                  set_text(text_4, (get(range), untrack(() => get(range).label)));
                });
                event("click", button_3, () => selectRange(get(range).key));
                append($$anchor5, button_3);
              });
              reset(div_8);
              reset(div_6);
              var node_6 = sibling(div_6, 2);
              {
                let $0 = derived_safe_equal(() => get(selectedRange) === "1y" || get(selectedRange) === "all");
                ModelActivityChart(node_6, {
                  get history() {
                    return get(history);
                  },
                  get loading() {
                    return get(loadingOverview);
                  },
                  get aggregateWeekly() {
                    return get($0);
                  }
                });
              }
              reset(div_5);
              var div_9 = sibling(div_5, 2);
              var div_10 = child(div_9);
              var text_5 = child(div_10, true);
              reset(div_10);
              var node_7 = sibling(div_10, 2);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_11 = root_5$1();
                  each(div_11, 5, () => get(tags), index, ($$anchor6, tagInfo) => {
                    var span = root_4$1();
                    var text_6 = child(span);
                    var span_1 = sibling(text_6);
                    var text_7 = child(span_1, true);
                    reset(span_1);
                    reset(span);
                    template_effect(() => {
                      set_text(text_6, `${(get(tagInfo), untrack(() => get(tagInfo).tag)) ?? ""} `);
                      set_text(text_7, (get(tagInfo), untrack(() => get(tagInfo).count)));
                    });
                    append($$anchor6, span);
                  });
                  reset(div_11);
                  append($$anchor5, div_11);
                };
                var alternate = ($$anchor5) => {
                  var span_2 = root_6$1();
                  append($$anchor5, span_2);
                };
                if_block(node_7, ($$render) => {
                  if (get(tags), untrack(() => get(tags).length)) $$render(consequent_1);
                  else $$render(alternate, -1);
                });
              }
              reset(div_9);
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Tags")))]);
              append($$anchor4, fragment_3);
            };
            var consequent_3 = ($$anchor4) => {
              var div_12 = root_8$1();
              var node_8 = child(div_12);
              ChatList(node_8, {
                get chatList() {
                  return get(chatList);
                },
                get loading() {
                  return get(chatListLoading);
                },
                get allLoaded() {
                  return get(allChatsLoaded);
                },
                showUserInfo: true,
                shareUrl: true,
                onLoadMore: loadMoreChats,
                onChatClick: () => show(false)
              });
              reset(div_12);
              append($$anchor4, div_12);
            };
            if_block(node_4, ($$render) => {
              if (get(selectedTab) === "overview") $$render(consequent_2);
              else if (get(selectedTab) === "chats") $$render(consequent_3, 1);
            });
          }
          var div_13 = sibling(node_4, 2);
          var button_4 = child(div_13);
          var text_8 = child(button_4, true);
          reset(button_4);
          reset(div_13);
          reset(div_4);
          template_effect(
            ($0, $1) => {
              set_class(button_1, 1, `py-2 text-sm font-medium border-b-2 transition-colors ${get(selectedTab) === "overview" ? "border-black dark:border-white text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`);
              set_text(text_1, $0);
              set_text(text_8, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Overview"))),
              () => ($i18n(), untrack(() => $i18n().t("Close")))
            ]
          );
          event("click", button, close);
          event("click", button_1, () => selectTab("overview"));
          event("click", button_4, close);
          append($$anchor3, fragment_2);
        };
        if_block(node, ($$render) => {
          if (model()) $$render(consequent_4);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_html(`<option> </option>`);
var root_1 = from_html(`<select class="w-fit pr-8 rounded-sm px-2 text-xs bg-transparent outline-none text-right"><option> </option><!></select>`);
var root_2 = from_html(`<span class="cursor-help"><span class="font-medium text-gray-900 dark:text-gray-300"> </span> </span>`);
var root_3 = from_html(`<div class="mb-4"><div class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 px-0.5"> </div> <!></div>`);
var root_4 = from_html(`<div class="flex gap-3 text-xs text-gray-500 dark:text-gray-400 px-0.5 pb-2"><span><span class="font-medium text-gray-900 dark:text-gray-300"> </span> </span> <!> <span><span class="font-medium text-gray-900 dark:text-gray-300"> </span> </span> <span><span class="font-medium text-gray-900 dark:text-gray-300"> </span> </span></div> <!>`, 1);
var root_5 = from_html(`<div class="my-10 flex justify-center"><!></div>`);
var root_6 = from_html(`<span class="font-normal"><!></span>`);
var root_7 = from_html(`<span class="invisible"><!></span>`);
var root_8 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"><td class="px-3 py-1 text-gray-400"> </td><td class="px-3 py-1 font-medium text-gray-900 dark:text-white"><div class="flex items-center gap-2"><img class="size-5 rounded-full object-cover shrink-0"/> <span class="truncate max-w-[150px]"> </span></div></td><td class="px-3 py-1 text-right"> </td><td class="px-3 py-1 text-right"> </td><td class="px-3 py-1 text-right text-gray-400"> </td></tr>`);
var root_9 = from_html(`<tr><td colspan="5" class="px-3 py-2 text-center text-gray-400"> </td></tr>`);
var root_10 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs"><td class="px-3 py-1 text-gray-400"> </td><td class="px-3 py-1 font-medium text-gray-900 dark:text-white"><div class="flex items-center gap-2"><img class="size-5 rounded-full object-cover shrink-0"/> <span class="truncate max-w-[150px]"> </span></div></td><td class="px-3 py-1 text-right"> </td><td class="px-3 py-1 text-right"> </td></tr>`);
var root_11 = from_html(`<tr><td colspan="4" class="px-3 py-2 text-center text-gray-400"> </td></tr>`);
var root_12 = from_html(`<div class="grid md:grid-cols-2 gap-4"><div><div class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 px-0.5"> </div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class="border-b-[1.5px] border-gray-50 dark:border-gray-850/30"><th scope="col" class="px-2.5 py-2 w-8">#</th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none text-right"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none text-right"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none text-right w-16"><div class="flex gap-1.5 items-center justify-end">% <!></div></th></tr></thead><tbody><!><!></tbody></table></div></div> <div><div class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 px-0.5"> </div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class="border-b-[1.5px] border-gray-50 dark:border-gray-850/30"><th scope="col" class="px-2.5 py-2 w-8">#</th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none text-right"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none text-right"><div class="flex gap-1.5 items-center justify-end"> <!></div></th></tr></thead><tbody><!><!></tbody></table></div></div></div> <div class="text-gray-500 text-xs mt-1.5 text-right"> </div>`, 1);
var root_13 = from_html(`<div class="pt-0.5 pb-1 gap-1 flex flex-row justify-between items-center sticky top-0 z-10 bg-white dark:bg-gray-900"><div class="text-lg font-medium px-0.5 shrink-0"> </div> <div class="flex items-center gap-2 flex-wrap justify-end min-w-0"><!> <select class="w-fit pr-8 rounded-sm px-2 text-xs bg-transparent outline-none text-right"></select></div></div> <!> <!> <!>`, 1);
function Dashboard($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const periods = mutable_source();
  const sortedModels = mutable_source();
  const sortedUsers = mutable_source();
  const totalModelMessages = mutable_source();
  const i18n = getContext("i18n");
  let selectedPeriod = mutable_source(typeof localStorage !== "undefined" && localStorage.getItem("analyticsPeriod") || "7d");
  let groups = mutable_source([]);
  let selectedGroupId = mutable_source(null);
  const getDateRange = (period) => {
    const now = Math.floor(Date.now() / 1e3);
    const day = 86400;
    switch (period) {
      case "24h":
        return { start: now - day, end: now };
      case "7d":
        return { start: now - 7 * day, end: now };
      case "30d":
        return { start: now - 30 * day, end: now };
      case "90d":
        return { start: now - 90 * day, end: now };
      default:
        return { start: null, end: null };
    }
  };
  let summary = mutable_source({
    total_messages: 0,
    total_chats: 0,
    total_models: 0,
    total_users: 0
  });
  let modelStats = mutable_source([]);
  let userStats = mutable_source([]);
  let dailyStats = mutable_source([]);
  let tokenStats = mutable_source({});
  let totalTokens = mutable_source({ input: 0, output: 0, total: 0 });
  let loading = mutable_source(true);
  let selectedModel = mutable_source(null);
  let showModelModal = mutable_source(false);
  let modelOrderBy = mutable_source("count");
  let modelDirection = mutable_source("desc");
  let userOrderBy = mutable_source("count");
  let userDirection = mutable_source("desc");
  const toggleModelSort = (key) => {
    if (get(modelOrderBy) === key) {
      set(modelDirection, get(modelDirection) === "asc" ? "desc" : "asc");
    } else {
      set(modelOrderBy, key);
      set(modelDirection, key === "name" ? "asc" : "desc");
    }
  };
  const toggleUserSort = (key) => {
    if (get(userOrderBy) === key) {
      set(userDirection, get(userDirection) === "asc" ? "desc" : "asc");
    } else {
      set(userOrderBy, key);
      set(userDirection, key === "user_id" ? "asc" : "desc");
    }
  };
  const loadDashboard = async () => {
    set(loading, true);
    try {
      const { start, end } = getDateRange(get(selectedPeriod));
      const granularity = get(selectedPeriod) === "24h" ? "hourly" : "daily";
      const [summaryRes, modelsRes, usersRes, dailyRes, tokensRes] = await Promise.all([
        getSummary(localStorage.token, start, end, get(selectedGroupId)),
        getModelAnalytics(localStorage.token, start, end, get(selectedGroupId)),
        getUserAnalytics(localStorage.token, start, end, 50, get(selectedGroupId)),
        getDailyStats(localStorage.token, start, end, granularity, get(selectedGroupId)),
        getTokenUsage(localStorage.token, start, end, get(selectedGroupId))
      ]);
      set(summary, summaryRes ?? get(summary));
      const modelsMap = new Map($models().map((m) => [m.id, m.name || m.id]));
      set(modelStats, ((modelsRes == null ? void 0 : modelsRes.models) ?? []).map((entry) => ({
        ...entry,
        name: modelsMap.get(entry.model_id) || entry.model_id
      })));
      set(userStats, (usersRes == null ? void 0 : usersRes.users) ?? []);
      set(dailyStats, (dailyRes == null ? void 0 : dailyRes.data) ?? []);
      if (tokensRes) {
        set(tokenStats, {});
        for (const m of tokensRes.models) {
          mutate(tokenStats, get(tokenStats)[m.model_id] = {
            input_tokens: m.input_tokens,
            output_tokens: m.output_tokens,
            total_tokens: m.total_tokens
          });
        }
        set(totalTokens, {
          input: tokensRes.total_input_tokens,
          output: tokensRes.total_output_tokens,
          total: tokensRes.total_tokens
        });
      }
    } catch (err) {
      /* @__PURE__ */ console.error("Dashboard load failed:", err);
    }
    set(loading, false);
  };
  onMount(async () => {
    try {
      const res = await getGroups(localStorage.token);
      set(groups, res ?? []);
    } catch (e) {
      /* @__PURE__ */ console.error("Failed to load groups:", e);
    }
  });
  onMount(loadDashboard);
  legacy_pre_effect(() => $i18n(), () => {
    set(periods, [
      { value: "24h", label: $i18n().t("Last 24 hours") },
      { value: "7d", label: $i18n().t("Last 7 days") },
      { value: "30d", label: $i18n().t("Last 30 days") },
      { value: "90d", label: $i18n().t("Last 90 days") },
      { value: "all", label: $i18n().t("All time") }
    ]);
  });
  legacy_pre_effect(() => (get(selectedPeriod), get(selectedGroupId)), () => {
    if (get(selectedPeriod) || get(selectedGroupId) !== void 0) {
      loadDashboard();
    }
  });
  legacy_pre_effect(
    () => (get(modelStats), get(modelOrderBy), get(modelDirection), get(tokenStats)),
    () => {
      set(sortedModels, [...get(modelStats)].sort((a, b) => {
        var _a, _b;
        if (get(modelOrderBy) === "name") {
          return get(modelDirection) === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        if (get(modelOrderBy) === "tokens") {
          const aTokens = ((_a = get(tokenStats)[a.model_id]) == null ? void 0 : _a.total_tokens) ?? 0;
          const bTokens = ((_b = get(tokenStats)[b.model_id]) == null ? void 0 : _b.total_tokens) ?? 0;
          return get(modelDirection) === "asc" ? aTokens - bTokens : bTokens - aTokens;
        }
        return get(modelDirection) === "asc" ? a.count - b.count : b.count - a.count;
      }));
    }
  );
  legacy_pre_effect(() => (get(userStats), get(userOrderBy), get(userDirection)), () => {
    set(sortedUsers, [...get(userStats)].sort((a, b) => {
      if (get(userOrderBy) === "name") {
        const nameA = a.name || a.user_id;
        const nameB = b.name || b.user_id;
        return get(userDirection) === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      }
      if (get(userOrderBy) === "tokens") {
        const aTokens = a.total_tokens ?? 0;
        const bTokens = b.total_tokens ?? 0;
        return get(userDirection) === "asc" ? aTokens - bTokens : bTokens - aTokens;
      }
      return get(userDirection) === "asc" ? a.count - b.count : b.count - a.count;
    }));
  });
  legacy_pre_effect(() => get(modelStats), () => {
    set(totalModelMessages, get(modelStats).reduce((sum, m) => sum + m.count, 0));
  });
  legacy_pre_effect(() => get(selectedPeriod), () => {
    if (typeof localStorage !== "undefined" && get(selectedPeriod)) {
      localStorage.setItem("analyticsPeriod", get(selectedPeriod));
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_13();
  var div = first_child(fragment);
  var div_1 = child(div);
  var text2 = child(div_1, true);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node = child(div_2);
  {
    var consequent = ($$anchor2) => {
      var select = root_1();
      var option = child(select);
      var text_1 = child(option, true);
      reset(option);
      option.value = (option.__value = null) ?? "";
      var node_1 = sibling(option);
      each(node_1, 1, () => get(groups), index, ($$anchor3, group) => {
        var option_1 = root$1();
        var text_2 = child(option_1, true);
        reset(option_1);
        var option_1_value = {};
        template_effect(() => {
          set_text(text_2, (get(group), untrack(() => get(group).name)));
          if (option_1_value !== (option_1_value = (get(group), untrack(() => get(group).id)))) {
            option_1.value = (option_1.__value = (get(group), untrack(() => get(group).id))) ?? "";
          }
        });
        append($$anchor3, option_1);
      });
      reset(select);
      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("All Users")))]);
      bind_select_value(select, () => get(selectedGroupId), ($$value) => set(selectedGroupId, $$value));
      append($$anchor2, select);
    };
    if_block(node, ($$render) => {
      if (get(groups), untrack(() => get(groups).length > 0)) $$render(consequent);
    });
  }
  var select_1 = sibling(node, 2);
  each(select_1, 5, () => get(periods), index, ($$anchor2, period) => {
    var option_2 = root$1();
    var text_3 = child(option_2, true);
    reset(option_2);
    var option_2_value = {};
    template_effect(() => {
      set_text(text_3, (get(period), untrack(() => get(period).label)));
      if (option_2_value !== (option_2_value = (get(period), untrack(() => get(period).value)))) {
        option_2.value = (option_2.__value = (get(period), untrack(() => get(period).value))) ?? "";
      }
    });
    append($$anchor2, option_2);
  });
  reset(select_1);
  reset(div_2);
  reset(div);
  var node_2 = sibling(div, 2);
  {
    let $0 = derived_safe_equal(() => (get(selectedPeriod), untrack(() => getDateRange(get(selectedPeriod)).start)));
    let $1 = derived_safe_equal(() => (get(selectedPeriod), untrack(() => getDateRange(get(selectedPeriod)).end)));
    AnalyticsModelModal(node_2, {
      get model() {
        return get(selectedModel);
      },
      get startDate() {
        return get($0);
      },
      get endDate() {
        return get($1);
      },
      get show() {
        return get(showModelModal);
      },
      set show($$value) {
        set(showModelModal, $$value);
      },
      $$legacy: true
    });
  }
  var node_3 = sibling(node_2, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment_1 = root_4();
      var div_3 = first_child(fragment_1);
      var span = child(div_3);
      var span_1 = child(span);
      var text_4 = child(span_1, true);
      reset(span_1);
      var text_5 = sibling(span_1);
      reset(span);
      var node_4 = sibling(span, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Token counts are estimates and may not reflect actual API usage"))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var span_2 = root_2();
            var span_3 = child(span_2);
            var text_6 = child(span_3, true);
            reset(span_3);
            var text_7 = sibling(span_3);
            reset(span_2);
            template_effect(
              ($02, $1) => {
                set_text(text_6, $02);
                set_text(text_7, ` ${$1 ?? ""}`);
              },
              [
                () => (deep_read_state(formatNumber), get(totalTokens), untrack(() => formatNumber(get(totalTokens).total))),
                () => ($i18n(), untrack(() => $i18n().t("tokens")))
              ]
            );
            append($$anchor3, span_2);
          },
          $$slots: { default: true }
        });
      }
      var span_4 = sibling(node_4, 2);
      var span_5 = child(span_4);
      var text_8 = child(span_5, true);
      reset(span_5);
      var text_9 = sibling(span_5);
      reset(span_4);
      var span_6 = sibling(span_4, 2);
      var span_7 = child(span_6);
      var text_10 = child(span_7, true);
      reset(span_7);
      var text_11 = sibling(span_7);
      reset(span_6);
      reset(div_3);
      var node_5 = sibling(div_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          const allModels = derived_safe_equal(() => (get(dailyStats), untrack(() => [
            ...new Set(get(dailyStats).flatMap((d) => Object.keys(d.models || {})))
          ])));
          const topModels = derived_safe_equal(() => (deep_read_state(get(allModels)), untrack(() => get(allModels).slice(0, 8))));
          const chartColors = derived_safe_equal(() => [
            "#3b82f6",
            "#10b981",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6",
            "#ec4899",
            "#06b6d4",
            "#84cc16"
          ]);
          const periodMap = derived_safe_equal(() => ({
            "24h": "hour",
            "7d": "week",
            "30d": "month",
            "90d": "year",
            all: "all"
          }));
          var div_4 = root_3();
          var div_5 = child(div_4);
          var text_12 = child(div_5, true);
          reset(div_5);
          var node_6 = sibling(div_5, 2);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(get(periodMap)), get(selectedPeriod), untrack(() => get(periodMap)[get(selectedPeriod)] || "week")));
            ChartLine(node_6, {
              get data() {
                return get(dailyStats);
              },
              get models() {
                return get(topModels);
              },
              get colors() {
                return get(chartColors);
              },
              height: 200,
              get period() {
                return get($0);
              }
            });
          }
          reset(div_4);
          template_effect(($0) => set_text(text_12, $0), [
            () => (get(selectedPeriod), $i18n(), untrack(() => get(selectedPeriod) === "24h" ? $i18n().t("Hourly Messages") : $i18n().t("Daily Messages")))
          ]);
          append($$anchor3, div_4);
        };
        if_block(node_5, ($$render) => {
          if (get(dailyStats), untrack(() => get(dailyStats).length > 1)) $$render(consequent_1);
        });
      }
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text_4, $0);
          set_text(text_5, ` ${$1 ?? ""}`);
          set_text(text_8, $2);
          set_text(text_9, ` ${$3 ?? ""}`);
          set_text(text_10, (get(summary), untrack(() => get(summary).total_users)));
          set_text(text_11, ` ${$4 ?? ""}`);
        },
        [
          () => (get(summary), untrack(() => get(summary).total_messages.toLocaleString())),
          () => ($i18n(), untrack(() => $i18n().t("messages"))),
          () => (get(summary), untrack(() => get(summary).total_chats.toLocaleString())),
          () => ($i18n(), untrack(() => $i18n().t("chats"))),
          () => ($i18n(), untrack(() => $i18n().t("users")))
        ]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node_3, ($$render) => {
      if (!get(loading)) $$render(consequent_2);
    });
  }
  var node_7 = sibling(node_3, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div_6 = root_5();
      var node_8 = child(div_6);
      Spinner(node_8, { className: "size-5" });
      reset(div_6);
      append($$anchor2, div_6);
    };
    var alternate_14 = ($$anchor2) => {
      var fragment_2 = root_12();
      var div_7 = first_child(fragment_2);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var text_13 = child(div_9, true);
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var table = child(div_10);
      var thead = child(table);
      var tr = child(thead);
      var th = sibling(child(tr));
      var div_11 = child(th);
      var text_14 = child(div_11);
      var node_9 = sibling(text_14);
      {
        var consequent_5 = ($$anchor3) => {
          var span_8 = root_6();
          var node_10 = child(span_8);
          {
            var consequent_4 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_10, ($$render) => {
              if (get(modelDirection) === "asc") $$render(consequent_4);
              else $$render(alternate, -1);
            });
          }
          reset(span_8);
          append($$anchor3, span_8);
        };
        var alternate_1 = ($$anchor3) => {
          var span_9 = root_7();
          var node_11 = child(span_9);
          ChevronUp(node_11, { className: "size-2" });
          reset(span_9);
          append($$anchor3, span_9);
        };
        if_block(node_9, ($$render) => {
          if (get(modelOrderBy) === "name") $$render(consequent_5);
          else $$render(alternate_1, -1);
        });
      }
      reset(div_11);
      reset(th);
      var th_1 = sibling(th);
      var div_12 = child(th_1);
      var text_15 = child(div_12);
      var node_12 = sibling(text_15);
      {
        var consequent_7 = ($$anchor3) => {
          var span_10 = root_6();
          var node_13 = child(span_10);
          {
            var consequent_6 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_2 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_13, ($$render) => {
              if (get(modelDirection) === "asc") $$render(consequent_6);
              else $$render(alternate_2, -1);
            });
          }
          reset(span_10);
          append($$anchor3, span_10);
        };
        var alternate_3 = ($$anchor3) => {
          var span_11 = root_7();
          var node_14 = child(span_11);
          ChevronUp(node_14, { className: "size-2" });
          reset(span_11);
          append($$anchor3, span_11);
        };
        if_block(node_12, ($$render) => {
          if (get(modelOrderBy) === "count") $$render(consequent_7);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_12);
      reset(th_1);
      var th_2 = sibling(th_1);
      var div_13 = child(th_2);
      var text_16 = child(div_13);
      var node_15 = sibling(text_16);
      {
        var consequent_9 = ($$anchor3) => {
          var span_12 = root_6();
          var node_16 = child(span_12);
          {
            var consequent_8 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_4 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_16, ($$render) => {
              if (get(modelDirection) === "asc") $$render(consequent_8);
              else $$render(alternate_4, -1);
            });
          }
          reset(span_12);
          append($$anchor3, span_12);
        };
        var alternate_5 = ($$anchor3) => {
          var span_13 = root_7();
          var node_17 = child(span_13);
          ChevronUp(node_17, { className: "size-2" });
          reset(span_13);
          append($$anchor3, span_13);
        };
        if_block(node_15, ($$render) => {
          if (get(modelOrderBy) === "tokens") $$render(consequent_9);
          else $$render(alternate_5, -1);
        });
      }
      reset(div_13);
      reset(th_2);
      var th_3 = sibling(th_2);
      var div_14 = child(th_3);
      var node_18 = sibling(child(div_14));
      {
        var consequent_11 = ($$anchor3) => {
          var span_14 = root_6();
          var node_19 = child(span_14);
          {
            var consequent_10 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_6 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_19, ($$render) => {
              if (get(modelDirection) === "asc") $$render(consequent_10);
              else $$render(alternate_6, -1);
            });
          }
          reset(span_14);
          append($$anchor3, span_14);
        };
        var alternate_7 = ($$anchor3) => {
          var span_15 = root_7();
          var node_20 = child(span_15);
          ChevronUp(node_20, { className: "size-2" });
          reset(span_15);
          append($$anchor3, span_15);
        };
        if_block(node_18, ($$render) => {
          if (get(modelOrderBy) === "percentage") $$render(consequent_11);
          else $$render(alternate_7, -1);
        });
      }
      reset(div_14);
      reset(th_3);
      reset(tr);
      reset(thead);
      var tbody = sibling(thead);
      var node_21 = child(tbody);
      each(node_21, 3, () => get(sortedModels), (model) => model.model_id, ($$anchor3, model, idx) => {
        var tr_1 = root_8();
        var td = child(tr_1);
        var text_17 = child(td, true);
        reset(td);
        var td_1 = sibling(td);
        var div_15 = child(td_1);
        var img = child(div_15);
        var span_16 = sibling(img, 2);
        var text_18 = child(span_16, true);
        reset(span_16);
        reset(div_15);
        reset(td_1);
        var td_2 = sibling(td_1);
        var text_19 = child(td_2, true);
        reset(td_2);
        var td_3 = sibling(td_2);
        var text_20 = child(td_3, true);
        reset(td_3);
        var td_4 = sibling(td_3);
        var text_21 = child(td_4);
        reset(td_4);
        reset(tr_1);
        template_effect(
          ($0, $1, $2) => {
            set_text(text_17, get(idx) + 1);
            set_attribute(img, "src", `${REXPRO_API_BASE_URL ?? ""}/models/model/profile/image?id=${(get(model), untrack(() => get(model).model_id)) ?? ""}`);
            set_attribute(img, "alt", (get(model), untrack(() => get(model).name)));
            set_text(text_18, (get(model), untrack(() => get(model).name)));
            set_text(text_19, $0);
            set_text(text_20, $1);
            set_text(text_21, `${$2 ?? ""}%`);
          },
          [
            () => (get(model), untrack(() => get(model).count.toLocaleString())),
            () => (deep_read_state(formatNumber), get(tokenStats), get(model), untrack(() => {
              var _a;
              return formatNumber(((_a = get(tokenStats)[get(model).model_id]) == null ? void 0 : _a.total_tokens) ?? 0);
            })),
            () => (get(totalModelMessages), get(model), untrack(() => get(totalModelMessages) > 0 ? (get(model).count / get(totalModelMessages) * 100).toFixed(1) : 0))
          ]
        );
        event("error", img, (e) => {
          e.target.src = "/favicon.png";
        });
        event("click", tr_1, () => {
          set(selectedModel, { id: get(model).model_id, name: get(model).name });
          set(showModelModal, true);
        });
        append($$anchor3, tr_1);
      });
      var node_22 = sibling(node_21);
      {
        var consequent_12 = ($$anchor3) => {
          var tr_2 = root_9();
          var td_5 = child(tr_2);
          var text_22 = child(td_5, true);
          reset(td_5);
          reset(tr_2);
          template_effect(($0) => set_text(text_22, $0), [() => ($i18n(), untrack(() => $i18n().t("No data")))]);
          append($$anchor3, tr_2);
        };
        if_block(node_22, ($$render) => {
          if (get(sortedModels), untrack(() => get(sortedModels).length === 0)) $$render(consequent_12);
        });
      }
      reset(tbody);
      reset(table);
      reset(div_10);
      reset(div_8);
      var div_16 = sibling(div_8, 2);
      var div_17 = child(div_16);
      var text_23 = child(div_17, true);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var table_1 = child(div_18);
      var thead_1 = child(table_1);
      var tr_3 = child(thead_1);
      var th_4 = sibling(child(tr_3));
      var div_19 = child(th_4);
      var text_24 = child(div_19);
      var node_23 = sibling(text_24);
      {
        var consequent_14 = ($$anchor3) => {
          var span_17 = root_6();
          var node_24 = child(span_17);
          {
            var consequent_13 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_8 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_24, ($$render) => {
              if (get(userDirection) === "asc") $$render(consequent_13);
              else $$render(alternate_8, -1);
            });
          }
          reset(span_17);
          append($$anchor3, span_17);
        };
        var alternate_9 = ($$anchor3) => {
          var span_18 = root_7();
          var node_25 = child(span_18);
          ChevronUp(node_25, { className: "size-2" });
          reset(span_18);
          append($$anchor3, span_18);
        };
        if_block(node_23, ($$render) => {
          if (get(userOrderBy) === "name") $$render(consequent_14);
          else $$render(alternate_9, -1);
        });
      }
      reset(div_19);
      reset(th_4);
      var th_5 = sibling(th_4);
      var div_20 = child(th_5);
      var text_25 = child(div_20);
      var node_26 = sibling(text_25);
      {
        var consequent_16 = ($$anchor3) => {
          var span_19 = root_6();
          var node_27 = child(span_19);
          {
            var consequent_15 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_10 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_27, ($$render) => {
              if (get(userDirection) === "asc") $$render(consequent_15);
              else $$render(alternate_10, -1);
            });
          }
          reset(span_19);
          append($$anchor3, span_19);
        };
        var alternate_11 = ($$anchor3) => {
          var span_20 = root_7();
          var node_28 = child(span_20);
          ChevronUp(node_28, { className: "size-2" });
          reset(span_20);
          append($$anchor3, span_20);
        };
        if_block(node_26, ($$render) => {
          if (get(userOrderBy) === "count") $$render(consequent_16);
          else $$render(alternate_11, -1);
        });
      }
      reset(div_20);
      reset(th_5);
      var th_6 = sibling(th_5);
      var div_21 = child(th_6);
      var text_26 = child(div_21);
      var node_29 = sibling(text_26);
      {
        var consequent_18 = ($$anchor3) => {
          var span_21 = root_6();
          var node_30 = child(span_21);
          {
            var consequent_17 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_12 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_30, ($$render) => {
              if (get(userDirection) === "asc") $$render(consequent_17);
              else $$render(alternate_12, -1);
            });
          }
          reset(span_21);
          append($$anchor3, span_21);
        };
        var alternate_13 = ($$anchor3) => {
          var span_22 = root_7();
          var node_31 = child(span_22);
          ChevronUp(node_31, { className: "size-2" });
          reset(span_22);
          append($$anchor3, span_22);
        };
        if_block(node_29, ($$render) => {
          if (get(userOrderBy) === "tokens") $$render(consequent_18);
          else $$render(alternate_13, -1);
        });
      }
      reset(div_21);
      reset(th_6);
      reset(tr_3);
      reset(thead_1);
      var tbody_1 = sibling(thead_1);
      var node_32 = child(tbody_1);
      each(node_32, 3, () => get(sortedUsers), (user2) => user2.user_id, ($$anchor3, user2, idx) => {
        var tr_4 = root_10();
        var td_6 = child(tr_4);
        var text_27 = child(td_6, true);
        reset(td_6);
        var td_7 = sibling(td_6);
        var div_22 = child(td_7);
        var img_1 = child(div_22);
        var span_23 = sibling(img_1, 2);
        var text_28 = child(span_23, true);
        reset(span_23);
        reset(div_22);
        reset(td_7);
        var td_8 = sibling(td_7);
        var text_29 = child(td_8, true);
        reset(td_8);
        var td_9 = sibling(td_8);
        var text_30 = child(td_9, true);
        reset(td_9);
        reset(tr_4);
        template_effect(
          ($0, $1, $2) => {
            set_text(text_27, get(idx) + 1);
            set_attribute(img_1, "src", `${REXPRO_API_BASE_URL ?? ""}/users/${(get(user2), untrack(() => get(user2).user_id)) ?? ""}/profile/image`);
            set_attribute(img_1, "alt", (get(user2), untrack(() => get(user2).name || "User")));
            set_text(text_28, $0);
            set_text(text_29, $1);
            set_text(text_30, $2);
          },
          [
            () => (get(user2), untrack(() => get(user2).name || get(user2).email || get(user2).user_id.substring(0, 8))),
            () => (get(user2), untrack(() => get(user2).count.toLocaleString())),
            () => (deep_read_state(formatNumber), get(user2), untrack(() => formatNumber(get(user2).total_tokens ?? 0)))
          ]
        );
        event("error", img_1, (e) => {
          e.target.src = "/user.png";
        });
        append($$anchor3, tr_4);
      });
      var node_33 = sibling(node_32);
      {
        var consequent_19 = ($$anchor3) => {
          var tr_5 = root_11();
          var td_10 = child(tr_5);
          var text_31 = child(td_10, true);
          reset(td_10);
          reset(tr_5);
          template_effect(($0) => set_text(text_31, $0), [() => ($i18n(), untrack(() => $i18n().t("No data")))]);
          append($$anchor3, tr_5);
        };
        if_block(node_33, ($$render) => {
          if (get(sortedUsers), untrack(() => get(sortedUsers).length === 0)) $$render(consequent_19);
        });
      }
      reset(tbody_1);
      reset(table_1);
      reset(div_18);
      reset(div_16);
      reset(div_7);
      var div_23 = sibling(div_7, 2);
      var text_32 = child(div_23);
      reset(div_23);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
          set_text(text_13, $0);
          set_text(text_14, `${$1 ?? ""} `);
          set_text(text_15, `${$2 ?? ""} `);
          set_text(text_16, `${$3 ?? ""} `);
          set_text(text_23, $4);
          set_text(text_24, `${$5 ?? ""} `);
          set_text(text_25, `${$6 ?? ""} `);
          set_text(text_26, `${$7 ?? ""} `);
          set_text(text_32, `ⓘ ${$8 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Model Usage"))),
          () => ($i18n(), untrack(() => $i18n().t("Model"))),
          () => ($i18n(), untrack(() => $i18n().t("Messages"))),
          () => ($i18n(), untrack(() => $i18n().t("Tokens"))),
          () => ($i18n(), untrack(() => $i18n().t("User Activity"))),
          () => ($i18n(), untrack(() => $i18n().t("User"))),
          () => ($i18n(), untrack(() => $i18n().t("Messages"))),
          () => ($i18n(), untrack(() => $i18n().t("Tokens"))),
          () => ($i18n(), untrack(() => $i18n().t("Message counts are based on assistant responses.")))
        ]
      );
      event("click", th, () => toggleModelSort("name"));
      event("click", th_1, () => toggleModelSort("count"));
      event("click", th_2, () => toggleModelSort("tokens"));
      event("click", th_3, () => toggleModelSort("percentage"));
      event("click", th_4, () => toggleUserSort("name"));
      event("click", th_5, () => toggleUserSort("count"));
      event("click", th_6, () => toggleUserSort("tokens"));
      append($$anchor2, fragment_2);
    };
    if_block(node_7, ($$render) => {
      if (get(loading)) $$render(consequent_3);
      else $$render(alternate_14, -1);
    });
  }
  template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Analytics")))]);
  bind_select_value(select_1, () => get(selectedPeriod), ($$value) => set(selectedPeriod, $$value));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class="w-full h-full pb-2 px-[16px]"><!></div>`);
function Analytics($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var node_1 = child(div);
      Dashboard(node_1, {});
      reset(div);
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
  Analytics as A
};
