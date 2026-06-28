import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, aS as createEventDispatcher, c as child, z as sibling, m as deep_read_state, u as untrack, r as reset, t as template_effect, d as set_text, y as event, a as append, k as get, b as pop, x as derived_safe_equal, f as from_html, i as getContext, l as legacy_pre_effect, w as set, n as legacy_pre_effect_reset, s as setup_stores, q as mutable_source, e as store_get, h as first_child, v as user_derived, a6 as update, a_ as remove_textarea_child, o as onMount, C as deferred_template_effect, $ as $document, A as tick } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { a as set_class, d as set_style, s as set_attribute, f as bind_select_value, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { R as REXPRO_NAME, b as showSidebar, a as mobile } from "../chunks/BJ3rUC-5.js";
import { a as REXPRO_API_BASE_URL } from "../chunks/CZpnbXda.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { s as stopPropagation } from "../chunks/CGgk3ROl.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { b as bind_value, a as bind_checked } from "../chunks/CgeA63xA.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { S as Sidebar } from "../chunks/WvwlXjr7.js";
import { S as Select } from "../chunks/B-wfBoQj.js";
import { C as Check } from "../chunks/CmzI29Zf.js";
import { C as ChevronDown } from "../chunks/BAfBE24n.js";
const getCalendars = async (token) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/`, {
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
const createCalendar = async (token, form) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
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
const deleteCalendar = async (token, calendarId) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/${calendarId}/delete`, {
    method: "DELETE",
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
  return (res == null ? void 0 : res.status) ?? false;
};
const getCalendarEvents = async (token, start, end, calendarIds) => {
  let error = null;
  const params = new URLSearchParams();
  params.append("start", start);
  params.append("end", end);
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/events?${params.toString()}`, {
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
const createCalendarEvent = async (token, form) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/events/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
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
const updateCalendarEvent = async (token, eventId, form) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/events/${eventId}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
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
const deleteCalendarEvent = async (token, eventId) => {
  let error = null;
  const res = await fetch(`${REXPRO_API_BASE_URL}/calendars/events/${eventId}/delete`, {
    method: "DELETE",
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
  return (res == null ? void 0 : res.status) ?? false;
};
var root$5 = from_html(`<span class="text-gray-500 dark:text-gray-400"> </span>`);
var root_1$5 = from_html(`<button><span class="shrink-0 size-[7px] rounded-full mt-[5px]"></span> <span class="truncate"><!> </span></button>`);
function CalendarEventChip($$anchor, $$props) {
  push($$props, false);
  let event$1 = prop($$props, "event", 8);
  let calendarColor = prop($$props, "calendarColor", 8, null);
  const dispatch = createEventDispatcher();
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(event$1()), untrack(() => event$1().title)));
    let $1 = derived_safe_equal(() => (deep_read_state(event$1()), untrack(() => event$1().location ? ` · ${event$1().location}` : "")));
    Tooltip($$anchor, {
      get content() {
        return `${get($0) ?? ""}${get($1) ?? ""}`;
      },
      children: ($$anchor2, $$slotProps) => {
        var button = root_1$5();
        var span = child(button);
        var span_1 = sibling(span, 2);
        var node = child(span_1);
        {
          var consequent = ($$anchor3) => {
            var span_2 = root$5();
            var text = child(span_2, true);
            reset(span_2);
            template_effect(($02) => set_text(text, $02), [
              () => (deep_read_state(event$1()), untrack(() => new Date(event$1().start_at / 1e6).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" }).replace(" ", "")))
            ]);
            append($$anchor3, span_2);
          };
          if_block(node, ($$render) => {
            if (deep_read_state(event$1()), untrack(() => !event$1().all_day)) $$render(consequent);
          });
        }
        var text_1 = sibling(node);
        reset(span_1);
        reset(button);
        template_effect(() => {
          set_class(button, 1, `w-full text-left text-xs flex items-start gap-1.5 py-[1px] px-0.5 rounded-md
			${(deep_read_state(event$1()), untrack(() => {
            var _a;
            return ((_a = event$1().meta) == null ? void 0 : _a.automation_id) ? "opacity-60" : "";
          })) ?? ""}
			hover:bg-gray-50 dark:hover:bg-gray-800/50 transition truncate`);
          set_style(span, `background-color: ${(deep_read_state(event$1()), deep_read_state(calendarColor()), untrack(() => event$1().color || calendarColor() || "#3b82f6")) ?? ""};`);
          set_text(text_1, ` ${(deep_read_state(event$1()), untrack(() => event$1().title)) ?? ""}`);
        });
        event("click", button, stopPropagation(() => dispatch("click", event$1())));
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  pop();
}
var root$4 = from_html(`<div class="px-2 py-1.5 text-xs text-gray-400 dark:text-gray-500 text-left truncate"> </div>`);
var root_1$4 = from_html(`<div class="text-[10px] text-gray-400 dark:text-gray-500 px-1 mt-auto hover:text-gray-700 dark:hover:text-gray-200 text-left w-full truncate z-10"> </div>`);
var root_2$4 = from_html(`<button><div class="flex justify-start px-0.5 mb-0.5"><span> </span></div> <div class="flex flex-col gap-0 flex-1 overflow-hidden"><!> <!></div></button>`);
var root_3$3 = from_html(`<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="grid grid-cols-7"></div> <div class="flex-1 grid grid-cols-7 auto-rows-fr min-h-0 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30"></div></div>`);
var root_4$3 = from_html(`<div><div class="text-[11px] text-gray-400 dark:text-gray-500"> </div> <div> </div></div>`);
var root_5$2 = from_html(`<button><div class="flex flex-col gap-0.5 w-full min-h-0"><!> <!></div></button>`);
var root_6$1 = from_html(`<div><div class="text-[10px] text-gray-400 dark:text-gray-500 text-right pr-2 select-none -mt-1.5 z-10"> </div> <!></div>`);
var root_7 = from_html(`<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="flex-1 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30 overflow-hidden relative"><div class="absolute inset-0 overflow-x-auto flex flex-col"><div class="min-w-[700px] flex flex-col flex-1"><div class="grid grid-cols-[52px_repeat(7,1fr)] shrink-0 border-b border-gray-100/30 dark:border-gray-850/30"><div></div> <!></div> <div class="flex-1 overflow-y-auto"></div></div></div></div></div>`);
var root_8 = from_html(`<div><div class="w-14 shrink-0 text-[10px] text-gray-400 dark:text-gray-500 text-right pr-3 mt-1 select-none"> </div> <button class="flex-1 border-l border-gray-100/15 dark:border-gray-850/15 px-1.5 py-0.5
								hover:bg-gray-50/50 dark:hover:bg-gray-850/20 transition cursor-pointer flex flex-col text-left justify-start"><div class="flex flex-col gap-0.5 w-full"></div></button></div>`);
var root_9 = from_html(`<div class="flex-1 flex flex-col min-h-0 px-3 pb-3"><div class="flex-1 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100/30 dark:border-gray-850/30 overflow-y-auto"></div></div>`);
var root_10 = from_html(`<div class="flex flex-col h-full w-full min-h-0 min-w-0"><!></div>`);
function CalendarView($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const calColorMap = mutable_source();
  const filteredEvents = mutable_source();
  const eventsByDay = mutable_source();
  const monthStart = mutable_source();
  const calendarStart = mutable_source();
  const monthDays = mutable_source();
  const weekStart = mutable_source();
  const weekDays = mutable_source();
  const hours = mutable_source();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let events = prop($$props, "events", 24, () => []);
  let calendars = prop($$props, "calendars", 24, () => []);
  let visibleCalendarIds = prop($$props, "visibleCalendarIds", 24, () => /* @__PURE__ */ new Set());
  let view = prop($$props, "view", 12, "month");
  let currentDate = prop($$props, "currentDate", 28, () => /* @__PURE__ */ new Date());
  const NS = 1e6;
  const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function isToday(d) {
    return d.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
  }
  function isCurrentMonth(d) {
    return d.getMonth() === currentDate().getMonth();
  }
  function getEventsForHour(day, hour, eventsList = get(filteredEvents)) {
    const hourStartMs = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour).getTime();
    const hourEndMs = hourStartMs + 36e5;
    return eventsList.filter((e) => {
      const startMs = e.start_at / NS;
      return startMs >= hourStartMs && startMs < hourEndMs;
    });
  }
  function formatHour(h) {
    if (h === 0) return "12 AM";
    if (h < 12) return `${h} AM`;
    if (h === 12) return "12 PM";
    return `${h - 12} PM`;
  }
  function handleDayClick(day) {
    currentDate(day);
    const ms = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 9).getTime();
    dispatch("createEvent", { start_at: ms * NS });
  }
  function goToDayView(day) {
    currentDate(day);
    view("day");
    dispatch("viewChange", view());
    dispatch("navigate", { date: currentDate() });
  }
  function handleHourClick(day, hour) {
    currentDate(day);
    const ms = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour).getTime();
    dispatch("createEvent", { start_at: ms * NS });
  }
  function handleEventClick(event2) {
    dispatch("eventClick", event2);
  }
  legacy_pre_effect(() => deep_read_state(calendars()), () => {
    set(calColorMap, calendars().reduce((acc, c) => ({ ...acc, [c.id]: c.color }), {}));
  });
  legacy_pre_effect(
    () => (deep_read_state(events()), deep_read_state(visibleCalendarIds())),
    () => {
      set(filteredEvents, events().filter((e) => visibleCalendarIds().has(e.calendar_id)));
    }
  );
  legacy_pre_effect(() => get(filteredEvents), () => {
    set(eventsByDay, (() => {
      const map = {};
      for (const e of get(filteredEvents)) {
        const startMs = e.start_at / NS;
        const endMs = (e.end_at || e.start_at) / NS;
        const startDate = new Date(startMs);
        const endDate = new Date(endMs);
        const d = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const last = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
        while (d.getTime() <= last) {
          const key = d.getTime().toString();
          (map[key] ?? (map[key] = [])).push(e);
          d.setDate(d.getDate() + 1);
        }
      }
      return map;
    })());
  });
  legacy_pre_effect(() => deep_read_state(currentDate()), () => {
    set(monthStart, new Date(currentDate().getFullYear(), currentDate().getMonth(), 1));
  });
  legacy_pre_effect(() => get(monthStart), () => {
    set(calendarStart, (() => {
      const d = new Date(get(monthStart));
      d.setDate(d.getDate() - d.getDay());
      return d;
    })());
  });
  legacy_pre_effect(() => get(calendarStart), () => {
    set(monthDays, (() => {
      const days = [];
      const d = new Date(get(calendarStart));
      for (let i = 0; i < 42; i++) {
        days.push(new Date(d));
        d.setDate(d.getDate() + 1);
      }
      return days;
    })());
  });
  legacy_pre_effect(() => deep_read_state(currentDate()), () => {
    set(weekStart, (() => {
      const d = new Date(currentDate());
      d.setDate(d.getDate() - d.getDay());
      d.setHours(0, 0, 0, 0);
      return d;
    })());
  });
  legacy_pre_effect(() => get(weekStart), () => {
    set(weekDays, (() => {
      const days = [];
      const d = new Date(get(weekStart));
      for (let i = 0; i < 7; i++) {
        days.push(new Date(d));
        d.setDate(d.getDate() + 1);
      }
      return days;
    })());
  });
  legacy_pre_effect(() => {
  }, () => {
    set(hours, Array.from({ length: 24 }, (_, i) => i));
  });
  legacy_pre_effect_reset();
  init();
  var div = root_10();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_3$3();
      var div_2 = child(div_1);
      each(div_2, 5, () => DAY_NAMES, index, ($$anchor3, day) => {
        var div_3 = root$4();
        var text = child(div_3, true);
        reset(div_3);
        template_effect(($0) => set_text(text, $0), [
          () => ($i18n(), get(day), untrack(() => $i18n().t(get(day))))
        ]);
        append($$anchor3, div_3);
      });
      reset(div_2);
      var div_4 = sibling(div_2, 2);
      each(div_4, 5, () => get(monthDays), index, ($$anchor3, day, i) => {
        const dayKey = derived_safe_equal(() => (get(day), untrack(() => new Date(get(day).getFullYear(), get(day).getMonth(), get(day).getDate()).getTime().toString())));
        const dayEvents = derived_safe_equal(() => (get(eventsByDay), deep_read_state(get(dayKey)), untrack(() => get(eventsByDay)[get(dayKey)] || [])));
        const col = derived_safe_equal(() => i % 7);
        const row = derived_safe_equal(() => untrack(() => Math.floor(i / 7)));
        var button = root_2$4();
        var div_5 = child(button);
        var span = child(div_5);
        var text_1 = child(span, true);
        reset(span);
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_1 = child(div_6);
        each(
          node_1,
          1,
          () => (deep_read_state(get(dayEvents)), untrack(() => get(dayEvents).slice(0, 3))),
          (evt) => evt.instance_id || evt.id,
          ($$anchor4, evt) => {
            CalendarEventChip($$anchor4, {
              get event() {
                return get(evt);
              },
              get calendarColor() {
                return get(calColorMap), get(evt), untrack(() => get(calColorMap)[get(evt).calendar_id]);
              },
              $$events: { click: () => handleEventClick(get(evt)) }
            });
          }
        );
        var node_2 = sibling(node_1, 2);
        {
          var consequent = ($$anchor4) => {
            var div_7 = root_1$4();
            var text_2 = child(div_7);
            reset(div_7);
            template_effect(() => set_text(text_2, `+${(deep_read_state(get(dayEvents)), untrack(() => get(dayEvents).length - 3)) ?? ""} more`));
            event("click", div_7, stopPropagation(() => goToDayView(get(day))));
            append($$anchor4, div_7);
          };
          if_block(node_2, ($$render) => {
            if (deep_read_state(get(dayEvents)), untrack(() => get(dayEvents).length > 3)) $$render(consequent);
          });
        }
        reset(div_6);
        reset(button);
        template_effect(
          ($0, $1, $2) => {
            set_class(button, 1, `p-1 min-h-0 text-left overflow-hidden transition cursor-pointer flex flex-col
							${$0 ?? ""}
							hover:bg-gray-50/80 dark:hover:bg-gray-850/30
							${get(col) > 0 ? "border-l border-gray-100/20 dark:border-gray-850/20" : ""}
							${get(row) > 0 ? "border-t border-gray-100/20 dark:border-gray-850/20" : ""}`);
            set_class(span, 1, `text-xs w-6 h-6 flex items-center justify-center rounded-full
								${$1 ?? ""}`);
            set_text(text_1, $2);
          },
          [
            () => (get(day), untrack(() => isCurrentMonth(get(day)) ? "" : "opacity-40")),
            () => (get(day), untrack(() => isToday(get(day)) ? "bg-blue-500 text-white" : "text-gray-500 dark:text-gray-400")),
            () => (get(day), untrack(() => get(day).getDate()))
          ]
        );
        event("click", button, () => handleDayClick(get(day)));
        append($$anchor3, button);
      });
      reset(div_4);
      reset(div_1);
      append($$anchor2, div_1);
    };
    var consequent_3 = ($$anchor2) => {
      var div_8 = root_7();
      var div_9 = child(div_8);
      var div_10 = child(div_9);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var node_3 = sibling(child(div_12), 2);
      each(node_3, 1, () => get(weekDays), index, ($$anchor3, day) => {
        var div_13 = root_4$3();
        var div_14 = child(div_13);
        var text_3 = child(div_14, true);
        reset(div_14);
        var div_15 = sibling(div_14, 2);
        var text_4 = child(div_15, true);
        reset(div_15);
        reset(div_13);
        template_effect(
          ($0, $1, $2, $3) => {
            set_class(div_13, 1, `text-center py-2.5 ${$0 ?? ""}`);
            set_text(text_3, $1);
            set_class(div_15, 1, `text-sm mt-0.5 w-7 h-7 flex items-center justify-center mx-auto rounded-full ${$2 ?? ""}`);
            set_text(text_4, $3);
          },
          [
            () => (get(day), untrack(() => get(day).getDay() > 0 ? "border-l border-gray-100/20 dark:border-gray-850/20" : "")),
            () => (get(day), untrack(() => DAY_NAMES[get(day).getDay()])),
            () => (get(day), untrack(() => isToday(get(day)) ? "bg-blue-500 text-white" : "")),
            () => (get(day), untrack(() => get(day).getDate()))
          ]
        );
        append($$anchor3, div_13);
      });
      reset(div_12);
      var div_16 = sibling(div_12, 2);
      each(div_16, 5, () => get(hours), index, ($$anchor3, hour) => {
        var div_17 = root_6$1();
        var div_18 = child(div_17);
        var text_5 = child(div_18, true);
        reset(div_18);
        var node_4 = sibling(div_18, 2);
        each(node_4, 1, () => get(weekDays), index, ($$anchor4, day) => {
          const hourEvents = derived_safe_equal(() => (get(day), get(hour), get(filteredEvents), untrack(() => getEventsForHour(get(day), get(hour), get(filteredEvents)))));
          var button_1 = root_5$2();
          var div_19 = child(button_1);
          var node_5 = child(div_19);
          each(
            node_5,
            1,
            () => (deep_read_state(get(hourEvents)), untrack(() => get(hourEvents).slice(0, 3))),
            (evt) => evt.instance_id || evt.id,
            ($$anchor5, evt) => {
              CalendarEventChip($$anchor5, {
                get event() {
                  return get(evt);
                },
                get calendarColor() {
                  return get(calColorMap), get(evt), untrack(() => get(calColorMap)[get(evt).calendar_id]);
                },
                $$events: { click: () => handleEventClick(get(evt)) }
              });
            }
          );
          var node_6 = sibling(node_5, 2);
          {
            var consequent_2 = ($$anchor5) => {
              var div_20 = root_1$4();
              var text_6 = child(div_20);
              reset(div_20);
              template_effect(() => set_text(text_6, `+${(deep_read_state(get(hourEvents)), untrack(() => get(hourEvents).length - 3)) ?? ""} more`));
              event("click", div_20, stopPropagation(() => goToDayView(get(day))));
              append($$anchor5, div_20);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(get(hourEvents)), untrack(() => get(hourEvents).length > 3)) $$render(consequent_2);
            });
          }
          reset(div_19);
          reset(button_1);
          template_effect(($0) => set_class(button_1, 1, `px-0.5 py-0.5 ${$0 ?? ""} hover:bg-gray-50/50 dark:hover:bg-gray-850/20 transition cursor-pointer min-w-0 flex flex-col`), [
            () => (get(day), untrack(() => get(day).getDay() > 0 ? "border-l border-gray-100/15 dark:border-gray-850/15" : ""))
          ]);
          event("click", button_1, () => handleHourClick(get(day), get(hour)));
          append($$anchor4, button_1);
        });
        reset(div_17);
        template_effect(
          ($0) => {
            set_class(div_17, 1, `grid grid-cols-[52px_repeat(7,1fr)] min-h-[52px] ${get(hour) > 0 ? "border-t border-gray-100/15 dark:border-gray-850/15" : ""}`);
            set_text(text_5, $0);
          },
          [
            () => (get(hour), untrack(() => get(hour) > 0 ? formatHour(get(hour)) : ""))
          ]
        );
        append($$anchor3, div_17);
      });
      reset(div_16);
      reset(div_11);
      reset(div_10);
      reset(div_9);
      reset(div_8);
      append($$anchor2, div_8);
    };
    var alternate = ($$anchor2) => {
      var div_21 = root_9();
      var div_22 = child(div_21);
      each(div_22, 5, () => get(hours), index, ($$anchor3, hour) => {
        const hourEvents = derived_safe_equal(() => (deep_read_state(currentDate()), get(hour), get(filteredEvents), untrack(() => getEventsForHour(currentDate(), get(hour), get(filteredEvents)))));
        var div_23 = root_8();
        var div_24 = child(div_23);
        var text_7 = child(div_24, true);
        reset(div_24);
        var button_2 = sibling(div_24, 2);
        var div_25 = child(button_2);
        each(div_25, 5, () => get(hourEvents), (evt) => evt.instance_id || evt.id, ($$anchor4, evt) => {
          CalendarEventChip($$anchor4, {
            get event() {
              return get(evt);
            },
            get calendarColor() {
              return get(calColorMap), get(evt), untrack(() => get(calColorMap)[get(evt).calendar_id]);
            },
            $$events: { click: () => handleEventClick(get(evt)) }
          });
        });
        reset(div_25);
        reset(button_2);
        reset(div_23);
        template_effect(
          ($0) => {
            set_class(div_23, 1, `flex min-h-[52px] ${get(hour) > 0 ? "border-t border-gray-100/15 dark:border-gray-850/15" : ""}`);
            set_text(text_7, $0);
          },
          [
            () => (get(hour), untrack(() => formatHour(get(hour))))
          ]
        );
        event("click", button_2, () => handleHourClick(currentDate(), get(hour)));
        append($$anchor3, div_23);
      });
      reset(div_22);
      reset(div_21);
      append($$anchor2, div_21);
    };
    if_block(node, ($$render) => {
      if (view() === "month") $$render(consequent_1);
      else if (view() === "week") $$render(consequent_3, 1);
      else $$render(alternate, -1);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div class="py-0.5"> </div>`);
var root_1$3 = from_html(`<button> </button>`);
var root_2$3 = from_html(`<span class="shrink-0 p-0.5 rounded opacity-0 group-hover:opacity-100
								transition-all duration-150" role="button" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></span>`);
var root_3$2 = from_html(`<div class="group flex items-center w-full"><button class="flex items-center gap-2 px-2 py-1 rounded-lg text-xs transition
						hover:bg-gray-50 dark:hover:bg-gray-800/50 flex-1 text-left min-w-0"><span class="shrink-0 size-2.5 rounded-full transition-opacity"></span> <span> </span> <!></button></div>`);
var root_4$2 = from_html(`<!> <div class="flex flex-col gap-4"><div><div class="flex items-center justify-between px-1 mb-1.5 mt-1.5"><div class="text-[11px] font-medium"> </div> <div class="flex items-center gap-0.5"><button class="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <button class="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div></div> <div class="grid grid-cols-7 text-center text-[9px] text-gray-400 dark:text-gray-500 mb-0.5"></div> <div class="grid grid-cols-7 text-center text-[10px]"></div></div> <div><div class="flex items-center justify-between mb-1 px-1"><div class="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider"> </div> <button class="p-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3 text-gray-400 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg></button></div> <!></div></div>`, 1);
function CalendarSidebar($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const miniMonth = mutable_source();
  const miniYear = mutable_source();
  const miniMonthStart = mutable_source();
  const miniCalStart = mutable_source();
  const miniDays = mutable_source();
  const miniMonthNames = mutable_source();
  const i18n = getContext("i18n");
  let calendars = prop($$props, "calendars", 24, () => []);
  let visibleCalendarIds = prop($$props, "visibleCalendarIds", 24, () => /* @__PURE__ */ new Set());
  let currentDate = prop($$props, "currentDate", 24, () => /* @__PURE__ */ new Date());
  let onToggle = prop($$props, "onToggle", 8, () => {
  });
  let onCreateCalendar = prop($$props, "onCreateCalendar", 8, () => {
  });
  let onDeleteCalendar = prop($$props, "onDeleteCalendar", 8, () => {
  });
  let onDateSelect = prop($$props, "onDateSelect", 8, () => {
  });
  let showDeleteConfirm = mutable_source(false);
  let deleteTargetCalendar = mutable_source(null);
  function isDeletable(cal) {
    return !cal.is_default && !cal.is_system;
  }
  function handleDeleteClick(e, cal) {
    e.stopPropagation();
    set(deleteTargetCalendar, cal);
    set(showDeleteConfirm, true);
  }
  function confirmDelete() {
    if (get(deleteTargetCalendar)) {
      onDeleteCalendar()(get(deleteTargetCalendar).id);
    }
    set(deleteTargetCalendar, null);
  }
  function isToday(d) {
    return d.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
  }
  function navigateMini(delta) {
    if (get(miniMonth) + delta > 11) {
      set(miniMonth, 0);
      update(miniYear);
    } else if (get(miniMonth) + delta < 0) {
      set(miniMonth, 11);
      update(miniYear, -1);
    } else {
      set(miniMonth, get(miniMonth) + delta);
    }
  }
  legacy_pre_effect(() => deep_read_state(currentDate()), () => {
    set(miniMonth, currentDate().getMonth());
  });
  legacy_pre_effect(() => deep_read_state(currentDate()), () => {
    set(miniYear, currentDate().getFullYear());
  });
  legacy_pre_effect(() => (get(miniYear), get(miniMonth)), () => {
    set(miniMonthStart, new Date(get(miniYear), get(miniMonth), 1));
  });
  legacy_pre_effect(() => get(miniMonthStart), () => {
    set(miniCalStart, (() => {
      const d = new Date(get(miniMonthStart));
      d.setDate(d.getDate() - d.getDay());
      return d;
    })());
  });
  legacy_pre_effect(() => get(miniCalStart), () => {
    set(miniDays, (() => {
      const days = [];
      const d = new Date(get(miniCalStart));
      for (let i = 0; i < 42; i++) {
        days.push(new Date(d));
        d.setDate(d.getDate() + 1);
      }
      return days;
    })());
  });
  legacy_pre_effect(() => {
  }, () => {
    set(miniMonthNames, [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_4$2();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete Calendar"))));
    let $1 = derived_safe_equal(() => ($i18n(), get(deleteTargetCalendar), untrack(() => {
      var _a;
      return $i18n().t('This will permanently delete the calendar "{{name}}" and all its events. This action cannot be undone.', { name: ((_a = get(deleteTargetCalendar)) == null ? void 0 : _a.name) ?? "" });
    })));
    let $2 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      get confirmLabel() {
        return get($2);
      },
      onConfirm: confirmDelete,
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$legacy: true
    });
  }
  var div = sibling(node, 2);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var text = child(div_3);
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var button = child(div_4);
  var button_1 = sibling(button, 2);
  reset(div_4);
  reset(div_2);
  var div_5 = sibling(div_2, 2);
  each(div_5, 4, () => ["S", "M", "T", "W", "T", "F", "S"], index, ($$anchor2, d) => {
    var div_6 = root$3();
    var text_1 = child(div_6, true);
    reset(div_6);
    template_effect(() => set_text(text_1, d));
    append($$anchor2, div_6);
  });
  reset(div_5);
  var div_7 = sibling(div_5, 2);
  each(div_7, 5, () => get(miniDays), index, ($$anchor2, day) => {
    var button_2 = root_1$3();
    var text_2 = child(button_2, true);
    reset(button_2);
    template_effect(
      ($0, $1, $2, $3, $4) => {
        set_class(button_2, 1, `w-6 h-6 flex items-center justify-center rounded-full transition
						${$0 ?? ""}
						${$1 ?? ""}
						${$2 ?? ""}
						${$3 ?? ""}`);
        set_text(text_2, $4);
      },
      [
        () => (get(day), get(miniMonth), untrack(() => get(day).getMonth() !== get(miniMonth) ? "text-gray-300 dark:text-gray-600" : "")),
        () => (get(day), untrack(() => isToday(get(day)) ? "bg-blue-500 text-white" : "")),
        () => (get(day), deep_read_state(currentDate()), untrack(() => get(day).toDateString() === currentDate().toDateString() && !isToday(get(day)) ? "bg-gray-200 dark:bg-gray-700" : "")),
        () => (get(day), deep_read_state(currentDate()), untrack(() => !isToday(get(day)) && get(day).toDateString() !== currentDate().toDateString() ? "hover:bg-gray-100 dark:hover:bg-gray-800" : "")),
        () => (get(day), untrack(() => get(day).getDate()))
      ]
    );
    event("click", button_2, () => onDateSelect()(get(day)));
    append($$anchor2, button_2);
  });
  reset(div_7);
  reset(div_1);
  var div_8 = sibling(div_1, 2);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var text_3 = child(div_10, true);
  reset(div_10);
  var button_3 = sibling(div_10, 2);
  reset(div_9);
  var node_1 = sibling(div_9, 2);
  each(node_1, 1, calendars, (cal) => cal.id, ($$anchor2, cal) => {
    var div_11 = root_3$2();
    var button_4 = child(div_11);
    var span = child(button_4);
    var span_1 = sibling(span, 2);
    var text_4 = child(span_1, true);
    reset(span_1);
    var node_2 = sibling(span_1, 2);
    {
      var consequent = ($$anchor3) => {
        var span_2 = root_2$3();
        template_effect(($0) => set_attribute(span_2, "title", $0), [
          () => ($i18n(), untrack(() => $i18n().t("Delete calendar")))
        ]);
        event("click", span_2, stopPropagation((e) => handleDeleteClick(e, get(cal))));
        append($$anchor3, span_2);
      };
      var d_1 = user_derived(() => (get(cal), untrack(() => isDeletable(get(cal)))));
      if_block(node_2, ($$render) => {
        if (get(d_1)) $$render(consequent);
      });
    }
    reset(button_4);
    reset(div_11);
    template_effect(
      ($0, $1) => {
        set_style(span, `background-color: ${(get(cal), untrack(() => get(cal).color || "#3b82f6")) ?? ""}; opacity: ${$0 ?? ""};`);
        set_class(span_1, 1, `truncate flex-1 ${$1 ?? ""}`);
        set_text(text_4, (get(cal), untrack(() => get(cal).name)));
      },
      [
        () => (deep_read_state(visibleCalendarIds()), get(cal), untrack(() => visibleCalendarIds().has(get(cal).id) ? "1" : "0.25")),
        () => (deep_read_state(visibleCalendarIds()), get(cal), untrack(() => visibleCalendarIds().has(get(cal).id) ? "" : "text-gray-400 dark:text-gray-500"))
      ]
    );
    event("click", button_4, () => onToggle()(get(cal).id));
    append($$anchor2, div_11);
  });
  reset(div_8);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text, `${(get(miniMonthNames), get(miniMonth), untrack(() => get(miniMonthNames)[get(miniMonth)])) ?? ""} ${get(miniYear) ?? ""}`);
      set_text(text_3, $0);
      set_attribute(button_3, "title", $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Calendars"))),
      () => ($i18n(), untrack(() => $i18n().t("New calendar")))
    ]
  );
  event("click", button, () => navigateMini(-1));
  event("click", button_1, () => navigateMini(1));
  event("click", button_3, function(...$$args) {
    var _a;
    (_a = onCreateCalendar()) == null ? void 0 : _a.apply(this, $$args);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<option> </option>`);
var root_1$2 = from_html(`<input type="time" class="bg-transparent outline-hidden"/> <span class="text-gray-300 dark:text-gray-600">–</span> <input type="time" class="bg-transparent outline-hidden"/>`, 1);
var root_2$2 = from_html(`<button class="px-3 py-1 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button>`);
var root_3$1 = from_html(`<span class="shrink-0"><!></span>`);
var root_4$1 = from_html(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><input class="w-full text-lg bg-transparent outline-hidden font-primary placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"/> <button class="self-center shrink-0 ml-2"><!></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500"> </div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"></select></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex items-center gap-2 text-sm flex-wrap"><input type="date" class="bg-transparent outline-hidden"/> <!> <label class="flex items-center gap-1.5 cursor-pointer text-xs text-gray-400 ml-auto"><input type="checkbox" class="accent-blue-500"/> </label></div></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <input class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"/></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <select class="w-full text-sm bg-transparent outline-hidden cursor-pointer"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <textarea class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none min-h-[4rem]" rows="3"></textarea></div></div> <div class="flex items-center justify-between px-4 pb-3.5 pt-1 gap-2"><div class="flex items-center gap-0.5 flex-1 min-w-0"><!></div> <div class="flex items-center gap-2 shrink-0"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button> <button type="button"> <!></button></div></div></div>`);
var root_5$1 = from_html(`<!> <!>`, 1);
function CalendarEventModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let event$1 = prop($$props, "event", 8, null);
  let calendars = prop($$props, "calendars", 24, () => []);
  let defaultCalendarId = prop($$props, "defaultCalendarId", 8, "");
  let defaultStartAt = prop($$props, "defaultStartAt", 8, null);
  let title = mutable_source("");
  let description = mutable_source("");
  let calendarId = mutable_source("");
  let startDate = mutable_source("");
  let startTime = mutable_source("");
  let endDate = "";
  let endTime = mutable_source("");
  let allDay = mutable_source(false);
  let location = mutable_source("");
  let alertMinutes = mutable_source(10);
  let loading = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  const NS = 1e6;
  function nsToDateStr(ns) {
    return new Date(ns / NS).toISOString().slice(0, 10);
  }
  function nsToTimeStr(ns) {
    return new Date(ns / NS).toTimeString().slice(0, 5);
  }
  function dateTimeToNs(dateStr, timeStr) {
    return (/* @__PURE__ */ new Date(`${dateStr}T${timeStr || "00:00"}`)).getTime() * NS;
  }
  function reset$1() {
    var _a;
    if (event$1()) {
      set(title, event$1().title);
      set(description, event$1().description || "");
      set(calendarId, event$1().calendar_id);
      set(startDate, nsToDateStr(event$1().start_at));
      set(startTime, nsToTimeStr(event$1().start_at));
      endDate = event$1().end_at ? nsToDateStr(event$1().end_at) : "";
      set(endTime, event$1().end_at ? nsToTimeStr(event$1().end_at) : "");
      set(allDay, event$1().all_day);
      set(location, event$1().location || "");
      set(alertMinutes, ((_a = event$1().meta) == null ? void 0 : _a.alert_minutes) ?? 10);
    } else {
      set(title, "");
      set(description, "");
      set(calendarId, defaultCalendarId() || (calendars().length > 0 ? calendars()[0].id : ""));
      if (defaultStartAt()) {
        set(startDate, nsToDateStr(defaultStartAt()));
        set(startTime, nsToTimeStr(defaultStartAt()));
        const endNs = defaultStartAt() + 60 * 60 * 1e3 * NS;
        endDate = nsToDateStr(endNs);
        set(endTime, nsToTimeStr(endNs));
      } else {
        const now = /* @__PURE__ */ new Date();
        set(startDate, now.toISOString().slice(0, 10));
        set(startTime, now.toTimeString().slice(0, 5));
        const later = new Date(now.getTime() + 60 * 60 * 1e3);
        endDate = later.toISOString().slice(0, 10);
        set(endTime, later.toTimeString().slice(0, 5));
      }
      set(allDay, false);
      set(location, "");
      set(alertMinutes, 10);
    }
  }
  const submitHandler = async () => {
    var _a;
    if (!get(title).trim()) {
      toast.error($i18n().t("Title is required"));
      return;
    }
    set(loading, true);
    try {
      const startNs = dateTimeToNs(get(startDate), get(allDay) ? "00:00" : get(startTime));
      const endNs = endDate ? dateTimeToNs(endDate, get(allDay) ? "23:59" : get(endTime)) : void 0;
      if (event$1() && !((_a = event$1().meta) == null ? void 0 : _a.automation_id)) {
        const result = await updateCalendarEvent(localStorage.token, event$1().id, {
          calendar_id: get(calendarId),
          title: get(title).trim(),
          description: get(description).trim() || null,
          start_at: startNs,
          end_at: endNs,
          all_day: get(allDay),
          location: get(location).trim() || null,
          meta: { alert_minutes: get(alertMinutes) }
        });
        if (result) {
          toast.success($i18n().t("Event updated"));
          dispatch("save", result);
          show(false);
        }
      } else {
        const form = {
          calendar_id: get(calendarId),
          title: get(title).trim(),
          description: get(description).trim() || void 0,
          start_at: startNs,
          end_at: endNs,
          all_day: get(allDay),
          location: get(location).trim() || void 0,
          meta: { alert_minutes: get(alertMinutes) }
        };
        const result = await createCalendarEvent(localStorage.token, form);
        if (result) {
          toast.success($i18n().t("Event created"));
          dispatch("save", result);
          show(false);
        }
      }
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      set(loading, false);
    }
  };
  const deleteHandler = async () => {
    var _a;
    if (!event$1() || ((_a = event$1().meta) == null ? void 0 : _a.automation_id)) return;
    set(loading, true);
    try {
      await deleteCalendarEvent(localStorage.token, event$1().id);
      toast.success($i18n().t("Event deleted"));
      dispatch("delete", event$1());
      show(false);
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      set(loading, false);
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) reset$1();
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_5$1();
  var node = first_child(fragment);
  Modal(node, {
    size: "md",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_4$1();
      var div_1 = child(div);
      var input = child(div_1);
      remove_input_defaults(input);
      var button = sibling(input, 2);
      var node_1 = child(button);
      XMark(node_1, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text = child(div_4, true);
      reset(div_4);
      var select = sibling(div_4, 2);
      each(
        select,
        5,
        () => (deep_read_state(calendars()), untrack(() => calendars().filter((c) => c.id !== "__scheduled_tasks__"))),
        (cal) => cal.id,
        ($$anchor3, cal) => {
          var option = root$2();
          var text_1 = child(option, true);
          reset(option);
          var option_value = {};
          template_effect(() => {
            set_text(text_1, (get(cal), untrack(() => get(cal).name)));
            if (option_value !== (option_value = (get(cal), untrack(() => get(cal).id)))) {
              option.value = (option.__value = (get(cal), untrack(() => get(cal).id))) ?? "";
            }
          });
          append($$anchor3, option);
        }
      );
      reset(select);
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      var div_6 = child(div_5);
      var text_2 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var input_1 = child(div_7);
      remove_input_defaults(input_1);
      var node_2 = sibling(input_1, 2);
      {
        var consequent = ($$anchor3) => {
          var fragment_1 = root_1$2();
          var input_2 = first_child(fragment_1);
          remove_input_defaults(input_2);
          var input_3 = sibling(input_2, 4);
          remove_input_defaults(input_3);
          bind_value(input_2, () => get(startTime), ($$value) => set(startTime, $$value));
          bind_value(input_3, () => get(endTime), ($$value) => set(endTime, $$value));
          append($$anchor3, fragment_1);
        };
        if_block(node_2, ($$render) => {
          if (!get(allDay)) $$render(consequent);
        });
      }
      var label = sibling(node_2, 2);
      var input_4 = child(label);
      remove_input_defaults(input_4);
      var text_3 = sibling(input_4);
      reset(label);
      reset(div_7);
      reset(div_5);
      var div_8 = sibling(div_5, 2);
      var div_9 = child(div_8);
      var text_4 = child(div_9, true);
      reset(div_9);
      var input_5 = sibling(div_9, 2);
      remove_input_defaults(input_5);
      reset(div_8);
      var div_10 = sibling(div_8, 2);
      var div_11 = child(div_10);
      var text_5 = child(div_11, true);
      reset(div_11);
      var select_1 = sibling(div_11, 2);
      var option_1 = child(select_1);
      var text_6 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = -1;
      var option_2 = sibling(option_1);
      var text_7 = child(option_2, true);
      reset(option_2);
      option_2.value = option_2.__value = 0;
      var option_3 = sibling(option_2);
      var text_8 = child(option_3, true);
      reset(option_3);
      option_3.value = option_3.__value = 5;
      var option_4 = sibling(option_3);
      var text_9 = child(option_4, true);
      reset(option_4);
      option_4.value = option_4.__value = 10;
      var option_5 = sibling(option_4);
      var text_10 = child(option_5, true);
      reset(option_5);
      option_5.value = option_5.__value = 15;
      var option_6 = sibling(option_5);
      var text_11 = child(option_6, true);
      reset(option_6);
      option_6.value = option_6.__value = 30;
      var option_7 = sibling(option_6);
      var text_12 = child(option_7, true);
      reset(option_7);
      option_7.value = option_7.__value = 60;
      reset(select_1);
      reset(div_10);
      var div_12 = sibling(div_10, 2);
      var div_13 = child(div_12);
      var text_13 = child(div_13, true);
      reset(div_13);
      var textarea = sibling(div_13, 2);
      remove_textarea_child(textarea);
      reset(div_12);
      reset(div_2);
      var div_14 = sibling(div_2, 2);
      var div_15 = child(div_14);
      var node_3 = child(div_15);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root_2$2();
          var text_14 = child(button_1, true);
          reset(button_1);
          template_effect(
            ($0) => {
              button_1.disabled = get(loading);
              set_text(text_14, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Delete")))]
          );
          event("click", button_1, () => set(showDeleteConfirmDialog, true));
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(event$1()), untrack(() => {
            var _a;
            return event$1() && !((_a = event$1().meta) == null ? void 0 : _a.automation_id);
          })) $$render(consequent_1);
        });
      }
      reset(div_15);
      var div_16 = sibling(div_15, 2);
      var button_2 = child(div_16);
      var text_15 = child(button_2, true);
      reset(button_2);
      var button_3 = sibling(button_2, 2);
      var text_16 = child(button_3);
      var node_4 = sibling(text_16);
      {
        var consequent_2 = ($$anchor3) => {
          var span = root_3$1();
          var node_5 = child(span);
          Spinner(node_5, {});
          reset(span);
          append($$anchor3, span);
        };
        if_block(node_4, ($$render) => {
          if (get(loading)) $$render(consequent_2);
        });
      }
      reset(button_3);
      reset(div_16);
      reset(div_14);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) => {
          set_attribute(input, "placeholder", $0);
          set_attribute(button, "aria-label", $1);
          set_text(text, $2);
          set_text(text_2, $3);
          set_text(text_3, ` ${$4 ?? ""}`);
          set_text(text_4, $5);
          set_attribute(input_5, "placeholder", $6);
          set_text(text_5, $7);
          set_text(text_6, $8);
          set_text(text_7, $9);
          set_text(text_8, $10);
          set_text(text_9, $11);
          set_text(text_10, $12);
          set_text(text_11, $13);
          set_text(text_12, $14);
          set_text(text_13, $15);
          set_attribute(textarea, "placeholder", $16);
          set_text(text_15, $17);
          set_class(button_3, 1, `px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${get(loading) ? "cursor-not-allowed" : ""}`);
          button_3.disabled = get(loading);
          set_text(text_16, `${$18 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Event title"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Calendar"))),
          () => ($i18n(), untrack(() => $i18n().t("When"))),
          () => ($i18n(), untrack(() => $i18n().t("All day"))),
          () => ($i18n(), untrack(() => $i18n().t("Location"))),
          () => ($i18n(), untrack(() => $i18n().t("Add location"))),
          () => ($i18n(), untrack(() => $i18n().t("Reminder"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("At time of event"))),
          () => ($i18n(), untrack(() => $i18n().t("5 minutes before"))),
          () => ($i18n(), untrack(() => $i18n().t("10 minutes before"))),
          () => ($i18n(), untrack(() => $i18n().t("15 minutes before"))),
          () => ($i18n(), untrack(() => $i18n().t("30 minutes before"))),
          () => ($i18n(), untrack(() => $i18n().t("1 hour before"))),
          () => ($i18n(), untrack(() => $i18n().t("Description"))),
          () => ($i18n(), untrack(() => $i18n().t("Add description"))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => (deep_read_state(event$1()), $i18n(), untrack(() => {
            var _a;
            return event$1() && !((_a = event$1().meta) == null ? void 0 : _a.automation_id) ? $i18n().t("Save") : $i18n().t("Create");
          }))
        ]
      );
      bind_value(input, () => get(title), ($$value) => set(title, $$value));
      event("click", button, () => show(false));
      bind_select_value(select, () => get(calendarId), ($$value) => set(calendarId, $$value));
      bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
      bind_checked(input_4, () => get(allDay), ($$value) => set(allDay, $$value));
      bind_value(input_5, () => get(location), ($$value) => set(location, $$value));
      bind_select_value(select_1, () => get(alertMinutes), ($$value) => set(alertMinutes, $$value));
      bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
      event("click", button_2, () => show(false));
      event("click", button_3, submitHandler);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_6 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete Event"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This action cannot be undone. Do you wish to continue?"))));
    ConfirmDialog(node_6, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$events: { confirm: deleteHandler },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<button></button>`);
var root_1$1 = from_html(`<span class="shrink-0"><!></span>`);
var root_2$1 = from_html(`<div><div class="flex justify-between items-center dark:text-gray-100 px-5 pt-4 pb-2"><h3 class="text-base font-medium"> </h3> <button class="self-center shrink-0 ml-2"><!></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500"> </div> <input class="w-full text-sm bg-transparent outline-hidden font-primary placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"/></div> <div><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex items-center gap-2 flex-wrap"><!> <label><input type="color" class="opacity-0 w-0 h-0 absolute"/></label></div></div></div> <div class="flex items-center justify-end px-4 pb-3.5 pt-2 gap-2"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button> <button type="button"> <!></button></div></div>`);
function CreateCalendarModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let name = mutable_source("");
  let color = mutable_source("#3b82f6");
  let loading = mutable_source(false);
  const PRESET_COLORS = [
    "#3b82f6",
    // blue
    "#ef4444",
    // red
    "#22c55e",
    // green
    "#f59e0b",
    // amber
    "#8b5cf6",
    // violet
    "#ec4899",
    // pink
    "#06b6d4",
    // cyan
    "#f97316"
    // orange
  ];
  function reset$1() {
    set(name, "");
    set(color, "#3b82f6");
    set(loading, false);
  }
  const submitHandler = async () => {
    if (!get(name).trim()) {
      toast.error($i18n().t("Name is required"));
      return;
    }
    set(loading, true);
    try {
      const result = await createCalendar(localStorage.token, { name: get(name).trim(), color: get(color) });
      if (result) {
        toast.success($i18n().t("Calendar created"));
        dispatch("created", result);
        show(false);
      }
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      set(loading, false);
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) reset$1();
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
      var h3 = child(div_1);
      var text = child(h3, true);
      reset(h3);
      var button = sibling(h3, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text_1 = child(div_4, true);
      reset(div_4);
      var input = sibling(div_4, 2);
      remove_input_defaults(input);
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      var div_6 = child(div_5);
      var text_2 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var node_1 = child(div_7);
      each(node_1, 1, () => PRESET_COLORS, index, ($$anchor3, c) => {
        var button_1 = root$1();
        template_effect(() => {
          set_class(button_1, 1, `size-6 rounded-full transition-all border-2 ${get(color) === get(c) ? "border-gray-800 dark:border-white scale-110" : "border-transparent hover:scale-110"}`);
          set_style(button_1, `background-color: ${get(c) ?? ""};`);
          set_attribute(button_1, "aria-label", get(c));
        });
        event("click", button_1, () => set(color, get(c)));
        append($$anchor3, button_1);
      });
      var label = sibling(node_1, 2);
      var input_1 = child(label);
      remove_input_defaults(input_1);
      reset(label);
      reset(div_7);
      reset(div_5);
      reset(div_2);
      var div_8 = sibling(div_2, 2);
      var button_2 = child(div_8);
      var text_3 = child(button_2, true);
      reset(button_2);
      var button_3 = sibling(button_2, 2);
      var text_4 = child(button_3);
      var node_2 = sibling(text_4);
      {
        var consequent = ($$anchor3) => {
          var span = root_1$1();
          var node_3 = child(span);
          Spinner(node_3, {});
          reset(span);
          append($$anchor3, span);
        };
        if_block(node_2, ($$render) => {
          if (get(loading)) $$render(consequent);
        });
      }
      reset(button_3);
      reset(div_8);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
          set_text(text, $0);
          set_attribute(button, "aria-label", $1);
          set_text(text_1, $2);
          set_attribute(input, "placeholder", $3);
          set_text(text_2, $4);
          set_class(label, 1, `size-6 rounded-full overflow-hidden cursor-pointer border-2 transition-all ${$5 ?? ""}`);
          set_style(label, `background-color: ${get(color) ?? ""};`);
          set_attribute(label, "title", $6);
          set_text(text_3, $7);
          set_class(button_3, 1, `px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${get(loading) ? "cursor-not-allowed" : ""}`);
          button_3.disabled = get(loading);
          set_text(text_4, `${$8 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("New Calendar"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Calendar name"))),
          () => ($i18n(), untrack(() => $i18n().t("Color"))),
          () => (get(color), untrack(() => !PRESET_COLORS.includes(get(color)) ? "border-gray-800 dark:border-white scale-110" : "border-transparent hover:scale-110")),
          () => ($i18n(), untrack(() => $i18n().t("Custom color"))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => ($i18n(), untrack(() => $i18n().t("Create")))
        ]
      );
      event("click", button, () => show(false));
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      event("keydown", input, (e) => {
        if (e.key === "Enter") submitHandler();
      });
      bind_value(input_1, () => get(color), ($$value) => set(color, $$value));
      event("click", button_2, () => show(false));
      event("click", button_3, submitHandler);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<button id="sidebar-toggle-button" class="cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition"><div class="self-center p-1.5"><!></div></button>`);
var root_1 = from_html(`<div><!></div>`);
var root_2 = from_html(`<span class="inline-flex h-input px-0.5 outline-hidden bg-transparent truncate line-clamp-1"> </span> <!>`, 1);
var root_3 = from_html(` <div><!></div>`, 1);
var root_4 = from_html(`<nav class="px-3 pt-2 pb-2 backdrop-blur-xl drag-region select-none shrink-0"><div class="flex items-center gap-1"><!> <div class="flex w-full items-center"><div class="flex items-center gap-0.5 py-1"><span class="min-w-fit px-1 text-sm select-none"> </span> <button class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <button class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div> <div class="ml-auto flex items-center gap-1"><button class="hidden sm:inline text-xs px-2 py-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition text-gray-500 hover:text-gray-700 dark:hover:text-white"> </button> <!> <button class="ml-1 px-2 py-1.5 text-xs gap-1 rounded-xl bg-black text-white dark:bg-white dark:text-black transition text-sm flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> <span class="hidden sm:inline"> </span></button></div></div></div></nav> <div class="flex flex-1 min-h-0"><div class="hidden md:flex flex-col w-56 shrink-0 pr-1.5 pl-3 overflow-y-auto"><!></div> <div class="flex-1 flex flex-col min-h-0"><!></div></div>`, 1);
var root_5 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root_6 = from_html(`<!> <!> <div><!></div>`, 1);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const defaultCalendarId = mutable_source();
  const headerText = mutable_source();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let calendars = mutable_source([]);
  let events = mutable_source([]);
  let visibleCalendarIds = mutable_source(/* @__PURE__ */ new Set());
  let view = mutable_source("month");
  let currentDate = mutable_source(/* @__PURE__ */ new Date());
  let showEventModal = mutable_source(false);
  let editEvent = mutable_source(null);
  let defaultStartAt = mutable_source(null);
  let showCreateCalendarModal = mutable_source(false);
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function getVisibleRange() {
    const d = new Date(get(currentDate));
    let start;
    let end;
    if (get(view) === "month") {
      start = new Date(d.getFullYear(), d.getMonth(), 1);
      start.setDate(start.getDate() - start.getDay());
      end = new Date(start);
      end.setDate(end.getDate() + 42);
    } else if (get(view) === "week") {
      start = new Date(d);
      start.setDate(start.getDate() - start.getDay());
      start.setHours(0, 0, 0, 0);
      end = new Date(start);
      end.setDate(end.getDate() + 7);
    } else {
      start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      end = new Date(start);
      end.setDate(end.getDate() + 1);
    }
    return { start: start.toISOString(), end: end.toISOString() };
  }
  async function loadCalendars() {
    try {
      set(calendars, await getCalendars(localStorage.token) ?? []);
      set(visibleCalendarIds, new Set(get(calendars).map((c) => c.id)));
    } catch (err) {
      /* @__PURE__ */ console.error("loadCalendars", err);
      set(calendars, []);
    }
  }
  async function loadEvents() {
    try {
      const { start, end } = getVisibleRange();
      set(events, await getCalendarEvents(localStorage.token, start, end));
    } catch (err) {
      toast.error(`${err}`);
    }
  }
  async function refresh() {
    await loadEvents();
  }
  function toggleCalendar(id) {
    const next = new Set(get(visibleCalendarIds));
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    set(visibleCalendarIds, next);
  }
  async function handleDeleteCalendar(id) {
    try {
      const result = await deleteCalendar(localStorage.token, id);
      if (result) {
        toast.success($i18n().t("Calendar deleted"));
        await loadCalendars();
        await refresh();
      } else {
        toast.error($i18n().t("Failed to delete calendar"));
      }
    } catch (err) {
      toast.error(`${err}`);
    }
  }
  function handleCreateEvent(e) {
    set(editEvent, null);
    set(defaultStartAt, e.detail.start_at);
    set(showEventModal, true);
  }
  function handleEventClick(e) {
    var _a, _b;
    const evt = e.detail;
    if ((_a = evt.meta) == null ? void 0 : _a.automation_id) {
      if ((_b = evt.meta) == null ? void 0 : _b.chat_id) {
        goto(`/c/${evt.meta.chat_id}`);
      } else {
        goto(`/automations/${evt.meta.automation_id}`);
      }
      return;
    }
    set(editEvent, evt);
    set(defaultStartAt, null);
    set(showEventModal, true);
  }
  async function handleNavigate() {
    await tick();
    refresh();
  }
  async function handleDateSelect(date) {
    set(currentDate, date);
    await tick();
    refresh();
  }
  function handleCreateCalendar() {
    set(showCreateCalendarModal, true);
  }
  async function handleCalendarCreated() {
    await loadCalendars();
    await refresh();
  }
  function handleNewEvent() {
    set(editEvent, null);
    set(defaultStartAt, null);
    set(showEventModal, true);
  }
  function navigateCalendar(delta) {
    const d = new Date(get(currentDate));
    if (get(view) === "month") {
      d.setDate(1);
      d.setMonth(d.getMonth() + delta);
    } else if (get(view) === "week") d.setDate(d.getDate() + delta * 7);
    else d.setDate(d.getDate() + delta);
    set(currentDate, d);
    handleNavigate();
  }
  function goToToday() {
    set(currentDate, /* @__PURE__ */ new Date());
    handleNavigate();
  }
  onMount(async () => {
    await loadCalendars();
    await refresh();
    set(loaded, true);
  });
  legacy_pre_effect(() => get(calendars), () => {
    var _a, _b;
    set(defaultCalendarId, ((_a = get(calendars).find((c) => c.is_default)) == null ? void 0 : _a.id) || ((_b = get(calendars)[0]) == null ? void 0 : _b.id) || "");
  });
  legacy_pre_effect(() => (get(view), get(currentDate)), () => {
    set(headerText, get(view) === "day" ? `${DAY_NAMES[get(currentDate).getDay()]}, ${MONTH_NAMES[get(currentDate).getMonth()]} ${get(currentDate).getDate()}, ${get(currentDate).getFullYear()}` : `${MONTH_NAMES[get(currentDate).getMonth()]} ${get(currentDate).getFullYear()}`);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_6();
  head("1d6n9tu", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Calendar")))]
    );
  });
  var node = first_child(fragment);
  CalendarEventModal(node, {
    get event() {
      return get(editEvent);
    },
    get calendars() {
      return get(calendars);
    },
    get defaultCalendarId() {
      return get(defaultCalendarId);
    },
    get defaultStartAt() {
      return get(defaultStartAt);
    },
    get show() {
      return get(showEventModal);
    },
    set show($$value) {
      set(showEventModal, $$value);
    },
    $$events: { save: () => refresh(), delete: () => refresh() },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  CreateCalendarModal(node_1, {
    get show() {
      return get(showCreateCalendarModal);
    },
    set show($$value) {
      set(showCreateCalendarModal, $$value);
    },
    $$events: { created: handleCalendarCreated },
    $$legacy: true
  });
  var div = sibling(node_1, 2);
  var node_2 = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = root_4();
      var nav = first_child(fragment_1);
      var div_1 = child(nav);
      var node_3 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_1();
          var node_4 = child(div_2);
          {
            let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
            Tooltip(node_4, {
              get content() {
                return get($0);
              },
              interactive: true,
              children: ($$anchor4, $$slotProps) => {
                var button = root();
                var div_3 = child(button);
                var node_5 = child(div_3);
                Sidebar(node_5, {});
                reset(div_3);
                reset(button);
                event("click", button, () => showSidebar.set(!$showSidebar()));
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_2);
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center`));
          append($$anchor3, div_2);
        };
        if_block(node_3, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_3, 2);
      var div_5 = child(div_4);
      var span = child(div_5);
      var text = child(span, true);
      reset(span);
      var button_1 = sibling(span, 2);
      var button_2 = sibling(button_1, 2);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button_3 = child(div_6);
      var text_1 = child(button_3, true);
      reset(button_3);
      var node_6 = sibling(button_3, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: "day", label: $i18n().t("Day") },
          { value: "week", label: $i18n().t("Week") },
          { value: "month", label: $i18n().t("Month") }
        ])));
        Select(node_6, {
          get items() {
            return get($0);
          },
          onChange: () => handleNavigate(),
          triggerClass: "relative flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl text-xs",
          contentClass: "rounded-2xl w-40 p-1 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          align: "end",
          get value() {
            return get(view);
          },
          set value($$value) {
            set(view, $$value);
          },
          $$slots: {
            trigger: ($$anchor3, $$slotProps) => {
              const selectedLabel = derived_safe_equal(() => $$slotProps.selectedLabel);
              var fragment_2 = root_2();
              var span_1 = first_child(fragment_2);
              var text_2 = child(span_1, true);
              reset(span_1);
              var node_7 = sibling(span_1, 2);
              ChevronDown(node_7, { className: "size-3.5", strokeWidth: "2.5" });
              template_effect(() => set_text(text_2, get(selectedLabel)));
              append($$anchor3, fragment_2);
            },
            item: ($$anchor3, $$slotProps) => {
              const item = derived_safe_equal(() => $$slotProps.item);
              const selected = derived_safe_equal(() => $$slotProps.selected);
              var fragment_3 = root_3();
              var text_3 = first_child(fragment_3);
              var div_7 = sibling(text_3);
              var node_8 = child(div_7);
              Check(node_8, {});
              reset(div_7);
              template_effect(() => {
                set_text(text_3, `${(deep_read_state(get(item)), untrack(() => get(item).label)) ?? ""} `);
                set_class(div_7, 1, `ml-auto ${get(selected) ? "" : "invisible"}`);
              });
              append($$anchor3, fragment_3);
            }
          },
          $$legacy: true
        });
      }
      var button_4 = sibling(node_6, 2);
      var span_2 = sibling(child(button_4), 2);
      var text_4 = child(span_2, true);
      reset(span_2);
      reset(button_4);
      reset(div_6);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_8 = sibling(nav, 2);
      var div_9 = child(div_8);
      var node_9 = child(div_9);
      CalendarSidebar(node_9, {
        get calendars() {
          return get(calendars);
        },
        get visibleCalendarIds() {
          return get(visibleCalendarIds);
        },
        get currentDate() {
          return get(currentDate);
        },
        onToggle: toggleCalendar,
        onCreateCalendar: handleCreateCalendar,
        onDeleteCalendar: handleDeleteCalendar,
        onDateSelect: handleDateSelect
      });
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var node_10 = child(div_10);
      CalendarView(node_10, {
        get events() {
          return get(events);
        },
        get calendars() {
          return get(calendars);
        },
        get visibleCalendarIds() {
          return get(visibleCalendarIds);
        },
        get view() {
          return get(view);
        },
        set view($$value) {
          set(view, $$value);
        },
        get currentDate() {
          return get(currentDate);
        },
        set currentDate($$value) {
          set(currentDate, $$value);
        },
        $$events: {
          createEvent: handleCreateEvent,
          eventClick: handleEventClick,
          navigate: handleNavigate,
          viewChange: handleNavigate
        },
        $$legacy: true
      });
      reset(div_10);
      reset(div_8);
      template_effect(
        ($0, $1) => {
          set_text(text, get(headerText));
          set_text(text_1, $0);
          set_text(text_4, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Today"))),
          () => ($i18n(), untrack(() => $i18n().t("New Event")))
        ]
      );
      event("click", button_1, () => navigateCalendar(-1));
      event("click", button_2, () => navigateCalendar(1));
      event("click", button_3, goToToday);
      event("click", button_4, handleNewEvent);
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div_11 = root_5();
      var node_11 = child(div_11);
      Spinner(node_11, { className: "size-5" });
      reset(div_11);
      append($$anchor2, div_11);
    };
    if_block(node_2, ($$render) => {
      if (get(loaded)) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, `flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
