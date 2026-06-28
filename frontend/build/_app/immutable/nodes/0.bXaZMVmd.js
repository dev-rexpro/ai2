import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { b0 as writable, g as comment, h as first_child, a as append, B as from_svg, p as push, c as child, r as reset, t as template_effect, b as pop, f as from_html, q as mutable_source, o as onMount, w as set, k as get, l as legacy_pre_effect, m as deep_read_state, bE as store_unsub, n as legacy_pre_effect_reset, u as untrack, z as sibling, y as event, e as store_get, s as setup_stores, A as tick, d as set_text, aW as text, j as onDestroy, x as derived_safe_equal, aS as createEventDispatcher, b3 as state, i as getContext, bF as setContext, C as deferred_template_effect, $ as $document } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { s as slot } from "../chunks/zXynQJya.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { s as set_attribute, c as clsx, a as set_class, d as set_style, h as attribute_effect, S as STYLE, r as remove_input_defaults, j as set_checked } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { l as lookup } from "../chunks/NqFOSRpV.js";
import { r as raf, l as loop } from "../chunks/CDUneY82.js";
import { W as WorkerWrapper } from "../chunks/Cp0hgoLI.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as prop, l as legacy_rest_props, s as spread_props } from "../chunks/COqmMDwI.js";
import { u as useEffect, c as cn, a as toastState, t as toast } from "../chunks/B4Bn1xMI.js";
import { c as component } from "../chunks/DAsw9G0E.js";
import { q as playingNotificationSound, s as settings, r as isLastActiveTab, v as isApp, w as appInfo, x as theme, a as mobile, u as user, c as config, R as REXPRO_NAME, k as socket, y as REXPRO_DEPLOYMENT_ID, z as REXPRO_VERSION, A as socketConnected, B as currentChatPage, C as chats, D as tags, i as channels, E as desktopEvent, g as chatId, F as pyodideWorker, G as showFileNavDir, H as temporaryChatEnabled, o as channelId, I as toolServers, J as terminalServers, K as showControls, L as showFileNavPath } from "../chunks/BJ3rUC-5.js";
import { a as getFileContentById } from "../chunks/BipwcWe2.js";
import { s as stores, u as updated$2, b as beforeNavigate, g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { a as initI18n, g as getLanguages, c as changeLanguage, i as i18n } from "../chunks/yR_88dR1.js";
import { d as getVersion, a as getBackendConfig, g as getModels, e as executeToolServer } from "../chunks/CwXWgxvI.js";
import { g as getSessionUser, a as updateUserTimezone, c as userSignOut } from "../chunks/C3caEY6s.js";
import { f as exportSingleChatStats, h as exportChatStats, i as downloadChatStats, j as getChatList, k as getAllTags } from "../chunks/DwAGGfMc.js";
import { b as getOpenAIConfig, u as updateOpenAIConfig, c as chatCompletion } from "../chunks/drrmQgs3.js";
import { b as getTerminalServerConnections, s as setTerminalServerConnections } from "../chunks/qzNkMDjz.js";
import { b as REXPRO_BASE_URL, a as REXPRO_API_BASE_URL } from "../chunks/CZpnbXda.js";
import { L as bestMatchingLanguage, y as getUserTimezone, M as displayFileHandler } from "../chunks/X0cYWxFO.js";
import { s as setTextScale } from "../chunks/DFbogwOv.js";
import { h as html } from "../chunks/BAc5ZjUQ.js";
import { s as stopPropagation, p as preventDefault } from "../chunks/CGgk3ROl.js";
import { b as bubble_event } from "../chunks/C46Aw6eG.js";
import purify from "../chunks/C5m5pE-D.js";
import { m as marked } from "../chunks/zFu7_FHZ.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { a as getUserSettings } from "../chunks/CP40r8ux.js";
import { d as dayjs2 } from "../chunks/BeGenu0j.js";
import { k as getChannels } from "../chunks/BJCfc4ks.js";
const ssr = false;
const trailingSlash = "ignore";
const _layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ssr,
  trailingSlash
}, Symbol.toStringTag, { value: "Module" }));
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => (
        // @ts-ignore
        tick_spring(ctx, last_value[i], current_value[i], target_value[i])
      )
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = (
    /** @type {T} */
    value
  );
  let target_value = (
    /** @type {T | undefined} */
    value
  );
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set2(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = raf.now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = raf.now();
      cancel_task = false;
      task = loop((now) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const elapsed = Math.min(now - last_time, 1e3 / 30);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: elapsed * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now;
        last_value = /** @type {T} */
        value;
        store.set(value = /** @type {T} */
        next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set: set2,
    update: (fn, opts2) => set2(fn(
      /** @type {T} */
      target_value,
      /** @type {T} */
      value
    ), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var root$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
var root_1$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
var root_2$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
var root_3$3 = from_svg(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
function Icon($$anchor, $$props) {
  let type = prop($$props, "type", 8, "success");
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var svg = root$8();
      append($$anchor2, svg);
    };
    var consequent_1 = ($$anchor2) => {
      var svg_1 = root_1$8();
      append($$anchor2, svg_1);
    };
    var consequent_2 = ($$anchor2) => {
      var svg_2 = root_2$4();
      append($$anchor2, svg_2);
    };
    var consequent_3 = ($$anchor2) => {
      var svg_3 = root_3$3();
      append($$anchor2, svg_3);
    };
    var alternate = ($$anchor2) => {
    };
    if_block(node, ($$render) => {
      if (type() === "success") $$render(consequent);
      else if (type() === "error") $$render(consequent_1, 1);
      else if (type() === "info") $$render(consequent_2, 2);
      else if (type() === "warning") $$render(consequent_3, 3);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
}
var root$7 = from_html(`<div class="sonner-loading-bar"></div>`);
var root_1$7 = from_html(`<div class="sonner-loading-wrapper"><div class="sonner-spinner"></div></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  let visible = prop($$props, "visible", 8);
  const bars = Array(12).fill(0);
  init();
  var div = root_1$7();
  var div_1 = child(div);
  each(div_1, 5, () => bars, index, ($$anchor2, _) => {
    var div_2 = root$7();
    append($$anchor2, div_2);
  });
  reset(div_1);
  reset(div);
  template_effect(() => set_attribute(div, "data-visible", visible()));
  append($$anchor, div);
  pop();
}
var root$6 = from_html(`<button aria-label="Close toast" data-close-button=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>`);
var root_1$6 = from_html(`<div data-icon=""><!> <!></div>`);
var root_2$3 = from_html(`<div data-title=""><!></div>`);
var root_3$2 = from_html(`<div data-description=""><!></div>`);
var root_4$2 = from_html(`<button data-button="" data-cancel=""> </button>`);
var root_5$1 = from_html(`<button data-button=""> </button>`);
var root_6$1 = from_html(`<!> <div data-content=""><!> <!></div> <!> <!>`, 1);
var root_7$1 = from_html(`<li aria-atomic="true" role="status" data-sonner-toast=""><!> <!></li>`);
function Toast($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const $effect = () => store_get(get(effect), "$effect", $$stores);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isFront = mutable_source(void 0, true);
  const isVisible = mutable_source(void 0, true);
  const toastTitle = mutable_source(void 0, true);
  const toastDescription = mutable_source(void 0, true);
  const toastType = mutable_source(void 0, true);
  const toastClass = mutable_source(void 0, true);
  const toastDescriptionClass = mutable_source(void 0, true);
  const heightIndex = mutable_source(void 0, true);
  const coords = mutable_source(void 0, true);
  const toastsHeightBefore = mutable_source(void 0, true);
  const disabled = mutable_source(void 0, true);
  const isPromiseLoadingOrInfiniteDuration = mutable_source(void 0, true);
  const TOAST_LIFETIME = 4e3;
  const GAP = 14;
  const SWIPE_TRESHOLD = 20;
  const TIME_BEFORE_UNMOUNT = 200;
  const SCALE_MULTIPLIER = 0.05;
  const defaultClasses = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: ""
  };
  const { toasts, heights, removeHeight, setHeight, remove } = toastState;
  let toast2 = prop($$props, "toast", 9);
  let index2 = prop($$props, "index", 9);
  let expanded = prop($$props, "expanded", 9);
  let invert = prop($$props, "invert", 13);
  let position = prop($$props, "position", 9);
  let visibleToasts = prop($$props, "visibleToasts", 9);
  let expandByDefault = prop($$props, "expandByDefault", 9);
  let closeButton = prop($$props, "closeButton", 9);
  let interacting = prop($$props, "interacting", 9);
  let cancelButtonStyle = prop($$props, "cancelButtonStyle", 9, "");
  let actionButtonStyle = prop($$props, "actionButtonStyle", 9, "");
  let duration = prop($$props, "duration", 9, 4e3);
  let descriptionClass = prop($$props, "descriptionClass", 9, "");
  let classes = prop($$props, "classes", 29, () => ({}));
  let unstyled = prop($$props, "unstyled", 9, false);
  let mounted = mutable_source(false, true);
  let removed = mutable_source(false, true);
  let swiping = mutable_source(false, true);
  let swipeOut = mutable_source(false, true);
  let offsetBeforeRemove = mutable_source(0, true);
  let initialHeight = mutable_source(0, true);
  let toastRef = mutable_source(void 0, true);
  let offset = mutable_source(0, true);
  let closeTimerStartTimeRef = 0;
  let lastCloseTimerStartTimeRef = 0;
  let pointerStartRef = null;
  async function updateHeights() {
    if (!get(mounted)) {
      return;
    }
    await tick();
    let scale;
    if (expanded() || expandByDefault()) {
      scale = 1;
    } else {
      scale = 1 - index2() * SCALE_MULTIPLIER;
    }
    get(toastRef).style.setProperty("height", "auto");
    const offsetHeight = get(toastRef).offsetHeight;
    const rectHeight = get(toastRef).getBoundingClientRect().height;
    const scaledRectHeight = Math.round((rectHeight / scale + Number.EPSILON) * 100) / 100;
    get(toastRef).style.removeProperty("height");
    let finalHeight;
    if (Math.abs(scaledRectHeight - offsetHeight) < 1) {
      finalHeight = scaledRectHeight;
    } else {
      finalHeight = offsetHeight;
    }
    set(initialHeight, finalHeight);
    setHeight({ toastId: toast2().id, height: finalHeight });
  }
  function deleteToast() {
    set(removed, true);
    set(offsetBeforeRemove, get(offset));
    removeHeight(toast2().id);
    setTimeout(
      () => {
        remove(toast2().id);
      },
      TIME_BEFORE_UNMOUNT
    );
  }
  let timeoutId = mutable_source(void 0, true);
  let remainingTime = mutable_source(toast2().duration || duration() || TOAST_LIFETIME, true);
  function pauseTimer() {
    if (lastCloseTimerStartTimeRef < closeTimerStartTimeRef) {
      const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef;
      set(remainingTime, get(remainingTime) - elapsedTime);
    }
    lastCloseTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
  }
  function startTimer() {
    closeTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
    set(timeoutId, setTimeout(
      () => {
        var _a, _b;
        (_b = (_a = toast2()).onAutoClose) == null ? void 0 : _b.call(_a, toast2());
        deleteToast();
      },
      get(remainingTime)
    ));
  }
  let effect = mutable_source(void 0, true);
  onMount(() => {
    set(mounted, true);
    const height = get(toastRef).getBoundingClientRect().height;
    set(initialHeight, height);
    setHeight({ toastId: toast2().id, height });
    return () => removeHeight(toast2().id);
  });
  function onPointerDown(event2) {
    if (get(disabled)) {
      return;
    }
    set(offsetBeforeRemove, get(offset));
    const target = event2.target;
    target.setPointerCapture(event2.pointerId);
    if (target.tagName === "BUTTON") {
      return;
    }
    set(swiping, true);
    pointerStartRef = { x: event2.clientX, y: event2.clientY };
  }
  function onPointerUp() {
    var _a, _b, _c;
    if (get(swipeOut)) {
      return;
    }
    pointerStartRef = null;
    const swipeAmount = Number(((_a = get(toastRef)) == null ? void 0 : _a.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0);
    if (Math.abs(swipeAmount) >= SWIPE_TRESHOLD) {
      set(offsetBeforeRemove, get(offset));
      (_c = (_b = toast2()).onDismiss) == null ? void 0 : _c.call(_b, toast2());
      deleteToast();
      set(swipeOut, true);
      return;
    }
    get(toastRef).style.setProperty("--swipe-amount", "0px");
    set(swiping, false);
  }
  function onPointerMove(event2) {
    if (!pointerStartRef) {
      return;
    }
    const yPosition = event2.clientY - pointerStartRef.y;
    const xPosition = event2.clientX - pointerStartRef.x;
    const clamp = get(coords)[0] === "top" ? Math.min : Math.max;
    const clampedY = clamp(0, yPosition);
    const swipeStartThreshold = event2.pointerType === "touch" ? 10 : 2;
    const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;
    if (isAllowedToSwipe) {
      get(toastRef).style.setProperty("--swipe-amount", `${yPosition}px`);
    } else if (Math.abs(xPosition) > swipeStartThreshold) {
      pointerStartRef = null;
    }
  }
  legacy_pre_effect(() => deep_read_state(classes()), () => {
    classes({ ...defaultClasses, ...classes() });
  });
  legacy_pre_effect(() => deep_read_state(index2()), () => {
    set(isFront, index2() === 0);
  });
  legacy_pre_effect(
    () => (deep_read_state(index2()), deep_read_state(visibleToasts())),
    () => {
      set(isVisible, index2() + 1 <= visibleToasts());
    }
  );
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    set(toastTitle, toast2().title);
  });
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    set(toastDescription, toast2().description);
  });
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    set(toastType, toast2().type);
  });
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    set(toastClass, toast2().class || "");
  });
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    set(toastDescriptionClass, toast2().descriptionClass || "");
  });
  legacy_pre_effect(() => ($heights(), deep_read_state(toast2())), () => {
    set(heightIndex, $heights().findIndex((height) => height.toastId === toast2().id) || 0);
  });
  legacy_pre_effect(() => deep_read_state(position()), () => {
    set(coords, position().split("-"));
  });
  legacy_pre_effect(() => ($heights(), get(heightIndex)), () => {
    set(toastsHeightBefore, $heights().reduce(
      (prev, curr, reducerIndex) => {
        if (reducerIndex >= get(heightIndex)) return prev;
        return prev + curr.height;
      },
      0
    ));
  });
  legacy_pre_effect(() => (deep_read_state(invert()), deep_read_state(toast2())), () => {
    invert(toast2().invert || invert());
  });
  legacy_pre_effect(() => get(toastType), () => {
    set(disabled, get(toastType) === "loading");
  });
  legacy_pre_effect(() => (get(heightIndex), get(toastsHeightBefore)), () => {
    set(offset, Math.round(get(heightIndex) * GAP + get(toastsHeightBefore)));
  });
  legacy_pre_effect(() => (get(toastTitle), get(toastDescription)), () => {
    get(toastTitle), get(toastDescription), updateHeights();
  });
  legacy_pre_effect(
    () => (deep_read_state(toast2()), get(timeoutId), deep_read_state(duration())),
    () => {
      if (toast2().updated) {
        clearTimeout(get(timeoutId));
        set(remainingTime, toast2().duration || duration() || TOAST_LIFETIME);
        startTimer();
      }
    }
  );
  legacy_pre_effect(() => (deep_read_state(toast2()), get(toastType)), () => {
    set(isPromiseLoadingOrInfiniteDuration, toast2().promise && get(toastType) === "loading" || toast2().duration === Number.POSITIVE_INFINITY);
  });
  legacy_pre_effect(
    () => (get(isPromiseLoadingOrInfiniteDuration), deep_read_state(expanded()), deep_read_state(interacting()), get(timeoutId)),
    () => {
      store_unsub(
        set(effect, useEffect(() => {
          if (!get(isPromiseLoadingOrInfiniteDuration)) {
            if (expanded() || interacting()) {
              pauseTimer();
            } else {
              startTimer();
            }
          }
          return () => clearTimeout(get(timeoutId));
        })),
        "$effect",
        $$stores
      );
    }
  );
  legacy_pre_effect(() => $effect(), () => {
    $effect();
  });
  legacy_pre_effect(() => deep_read_state(toast2()), () => {
    if (toast2().delete) {
      deleteToast();
    }
  });
  legacy_pre_effect_reset();
  init(true);
  var li = root_7$1();
  set_attribute(li, "tabindex", 0);
  let styles;
  var node = child(li);
  {
    var consequent = ($$anchor2) => {
      var button = root$6();
      template_effect(
        ($0) => {
          set_attribute(button, "data-disabled", get(disabled));
          set_class(button, 1, $0);
        },
        [
          () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast2()), untrack(() => {
            var _a, _b, _c;
            return cn((_a = classes()) == null ? void 0 : _a.closeButton, (_c = (_b = toast2()) == null ? void 0 : _b.classes) == null ? void 0 : _c.closeButton);
          })))
        ]
      );
      event("click", button, function(...$$args) {
        var _a;
        (_a = get(disabled) ? void 0 : () => {
          var _a2, _b;
          deleteToast();
          (_b = (_a2 = toast2()).onDismiss) == null ? void 0 : _b.call(_a2, toast2());
        }) == null ? void 0 : _a.apply(this, $$args);
      });
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(closeButton()), deep_read_state(toast2()), untrack(() => closeButton() && !toast2().component)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      component(node_2, () => toast2().component, ($$anchor3, $$component) => {
        $$component($$anchor3, spread_props(() => toast2().componentProps, { $$events: { closeToast: deleteToast } }));
      });
      append($$anchor2, fragment);
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_1 = root_6$1();
      var node_3 = first_child(fragment_1);
      {
        var consequent_8 = ($$anchor3) => {
          var div = root_1$6();
          var node_4 = child(div);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_2 = comment();
              var node_5 = first_child(fragment_2);
              slot(node_5, $$props, "loading-icon", {}, null);
              append($$anchor4, fragment_2);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(toast2()), get(toastType), untrack(() => (toast2().promise || get(toastType) === "loading") && !toast2().icon)) $$render(consequent_2);
            });
          }
          var node_6 = sibling(node_4, 2);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_7 = first_child(fragment_3);
              component(node_7, () => toast2().icon, ($$anchor5, $$component) => {
                $$component($$anchor5, {});
              });
              append($$anchor4, fragment_3);
            };
            var consequent_4 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_8 = first_child(fragment_4);
              slot(node_8, $$props, "success-icon", {}, null);
              append($$anchor4, fragment_4);
            };
            var consequent_5 = ($$anchor4) => {
              var fragment_5 = comment();
              var node_9 = first_child(fragment_5);
              slot(node_9, $$props, "error-icon", {}, null);
              append($$anchor4, fragment_5);
            };
            var consequent_6 = ($$anchor4) => {
              var fragment_6 = comment();
              var node_10 = first_child(fragment_6);
              slot(node_10, $$props, "warning-icon", {}, null);
              append($$anchor4, fragment_6);
            };
            var consequent_7 = ($$anchor4) => {
              var fragment_7 = comment();
              var node_11 = first_child(fragment_7);
              slot(node_11, $$props, "info-icon", {}, null);
              append($$anchor4, fragment_7);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(toast2()), untrack(() => toast2().icon)) $$render(consequent_3);
              else if (get(toastType) === "success") $$render(consequent_4, 1);
              else if (get(toastType) === "error") $$render(consequent_5, 2);
              else if (get(toastType) === "warning") $$render(consequent_6, 3);
              else if (get(toastType) === "info") $$render(consequent_7, 4);
            });
          }
          reset(div);
          append($$anchor3, div);
        };
        if_block(node_3, ($$render) => {
          if (get(toastType), deep_read_state(toast2()), untrack(() => get(toastType) !== "default" || toast2().icon || toast2().promise)) $$render(consequent_8);
        });
      }
      var div_1 = sibling(node_3, 2);
      var node_12 = child(div_1);
      {
        var consequent_10 = ($$anchor3) => {
          var div_2 = root_2$3();
          var node_13 = child(div_2);
          {
            var consequent_9 = ($$anchor4) => {
              var fragment_8 = comment();
              var node_14 = first_child(fragment_8);
              component(node_14, () => toast2().title, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast2().componentProps));
              });
              append($$anchor4, fragment_8);
            };
            var alternate = ($$anchor4) => {
              var text$1 = text();
              template_effect(() => set_text(text$1, (deep_read_state(toast2()), untrack(() => toast2().title))));
              append($$anchor4, text$1);
            };
            if_block(node_13, ($$render) => {
              if (deep_read_state(toast2()), untrack(() => typeof toast2().title !== "string")) $$render(consequent_9);
              else $$render(alternate, -1);
            });
          }
          reset(div_2);
          template_effect(($0) => set_class(div_2, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast2()), untrack(() => {
              var _a, _b, _c;
              return cn((_a = classes()) == null ? void 0 : _a.title, (_c = (_b = toast2()) == null ? void 0 : _b.classes) == null ? void 0 : _c.title);
            })))
          ]);
          append($$anchor3, div_2);
        };
        if_block(node_12, ($$render) => {
          if (deep_read_state(toast2()), untrack(() => toast2().title)) $$render(consequent_10);
        });
      }
      var node_15 = sibling(node_12, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_3 = root_3$2();
          var node_16 = child(div_3);
          {
            var consequent_11 = ($$anchor4) => {
              var fragment_10 = comment();
              var node_17 = first_child(fragment_10);
              component(node_17, () => toast2().description, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast2().componentProps));
              });
              append($$anchor4, fragment_10);
            };
            var alternate_1 = ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, (deep_read_state(toast2()), untrack(() => toast2().description))));
              append($$anchor4, text_1);
            };
            if_block(node_16, ($$render) => {
              if (deep_read_state(toast2()), untrack(() => typeof toast2().description !== "string")) $$render(consequent_11);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_3);
          template_effect(($0) => set_class(div_3, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(descriptionClass()), get(toastDescriptionClass), deep_read_state(classes()), deep_read_state(toast2()), untrack(() => {
              var _a, _b;
              return cn(descriptionClass(), get(toastDescriptionClass), (_a = classes()) == null ? void 0 : _a.description, (_b = toast2().classes) == null ? void 0 : _b.description);
            })))
          ]);
          append($$anchor3, div_3);
        };
        if_block(node_15, ($$render) => {
          if (deep_read_state(toast2()), untrack(() => toast2().description)) $$render(consequent_12);
        });
      }
      reset(div_1);
      var node_18 = sibling(div_1, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var button_1 = root_4$2();
          var text_2 = child(button_1, true);
          reset(button_1);
          template_effect(
            ($0) => {
              set_style(button_1, cancelButtonStyle());
              set_class(button_1, 1, $0);
              set_text(text_2, (deep_read_state(toast2()), untrack(() => toast2().cancel.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast2()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.cancelButton, (_c = (_b = toast2()) == null ? void 0 : _b.classes) == null ? void 0 : _c.cancelButton);
              })))
            ]
          );
          event("click", button_1, () => {
            var _a;
            deleteToast();
            if ((_a = toast2().cancel) == null ? void 0 : _a.onClick) {
              toast2().cancel.onClick();
            }
          });
          append($$anchor3, button_1);
        };
        if_block(node_18, ($$render) => {
          if (deep_read_state(toast2()), untrack(() => toast2().cancel)) $$render(consequent_13);
        });
      }
      var node_19 = sibling(node_18, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var button_2 = root_5$1();
          var text_3 = child(button_2, true);
          reset(button_2);
          template_effect(
            ($0) => {
              set_style(button_2, actionButtonStyle());
              set_class(button_2, 1, $0);
              set_text(text_3, (deep_read_state(toast2()), untrack(() => toast2().action.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast2()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.actionButton, (_c = (_b = toast2()) == null ? void 0 : _b.classes) == null ? void 0 : _c.actionButton);
              })))
            ]
          );
          event("click", button_2, (event2) => {
            var _a;
            (_a = toast2().action) == null ? void 0 : _a.onClick(event2);
            if (event2.defaultPrevented) return;
            deleteToast();
          });
          append($$anchor3, button_2);
        };
        if_block(node_19, ($$render) => {
          if (deep_read_state(toast2()), untrack(() => toast2().action)) $$render(consequent_14);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(toast2()), untrack(() => toast2().component)) $$render(consequent_1);
      else $$render(alternate_2, -1);
    });
  }
  reset(li);
  bind_this(li, ($$value) => set(toastRef, $$value), () => get(toastRef));
  template_effect(
    ($0, $1, $2) => {
      set_attribute(li, "aria-live", (deep_read_state(toast2()), untrack(() => toast2().important ? "assertive" : "polite")));
      set_class(li, 1, $0);
      set_attribute(li, "data-styled", (deep_read_state(toast2()), deep_read_state(unstyled()), untrack(() => {
        var _a;
        return !(toast2().component || ((_a = toast2()) == null ? void 0 : _a.unstyled) || unstyled());
      })));
      set_attribute(li, "data-mounted", get(mounted));
      set_attribute(li, "data-promise", $1);
      set_attribute(li, "data-removed", get(removed));
      set_attribute(li, "data-visible", get(isVisible));
      set_attribute(li, "data-y-position", (get(coords), untrack(() => get(coords)[0])));
      set_attribute(li, "data-x-position", (get(coords), untrack(() => get(coords)[1])));
      set_attribute(li, "data-index", index2());
      set_attribute(li, "data-front", get(isFront));
      set_attribute(li, "data-swiping", get(swiping));
      set_attribute(li, "data-type", get(toastType));
      set_attribute(li, "data-invert", invert());
      set_attribute(li, "data-swipe-out", get(swipeOut));
      set_attribute(li, "data-expanded", $2);
      styles = set_style(
        li,
        (deep_read_state($$sanitized_props), deep_read_state(toast2()), untrack(() => `${$$sanitized_props.style} ${toast2().style}`)),
        styles,
        {
          "--index": index2(),
          "--toasts-before": index2(),
          "--z-index": ($toasts(), deep_read_state(index2()), untrack(() => $toasts().length - index2())),
          "--offset": `${get(removed) ? get(offsetBeforeRemove) : get(offset)}px`,
          "--initial-height": `${get(initialHeight)}px`
        }
      );
    },
    [
      () => clsx((deep_read_state(cn), deep_read_state($$sanitized_props), get(toastClass), deep_read_state(classes()), deep_read_state(toast2()), get(toastType), untrack(() => {
        var _a, _b, _c, _d, _e, _f;
        return cn($$sanitized_props.class, get(toastClass), (_a = classes()) == null ? void 0 : _a.toast, (_c = (_b = toast2()) == null ? void 0 : _b.classes) == null ? void 0 : _c.toast, (_d = classes()) == null ? void 0 : _d[get(toastType)], (_f = (_e = toast2()) == null ? void 0 : _e.classes) == null ? void 0 : _f[get(toastType)]);
      }))),
      () => (deep_read_state(toast2()), untrack(() => Boolean(toast2().promise))),
      () => (deep_read_state(expanded()), deep_read_state(expandByDefault()), get(mounted), untrack(() => Boolean(expanded() || expandByDefault() && get(mounted))))
    ]
  );
  event("pointerdown", li, onPointerDown);
  event("pointerup", li, onPointerUp);
  event("pointermove", li, onPointerMove);
  append($$anchor, li);
  pop();
  $$cleanup();
}
var root$5 = from_html(`<ol></ol>`);
var root_1$5 = from_html(`<section class="svelte-nbs0zk"></section>`);
function Toaster($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "invert",
    "theme",
    "position",
    "hotkey",
    "containerAriaLabel",
    "richColors",
    "expand",
    "duration",
    "visibleToasts",
    "closeButton",
    "toastOptions",
    "offset",
    "dir"
  ]);
  push($$props, false);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const possiblePositions = mutable_source();
  const hotkeyLabel = mutable_source();
  const VISIBLE_TOASTS_AMOUNT = 3;
  const VIEWPORT_OFFSET = "32px";
  const TOAST_WIDTH = 356;
  const GAP = 14;
  const DARK = "dark";
  const LIGHT = "light";
  function getInitialTheme(t) {
    if (t !== "system") {
      return t;
    }
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK;
      }
      return LIGHT;
    }
    return LIGHT;
  }
  function getDocumentDirection() {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
  }
  let invert = prop($$props, "invert", 8, false);
  let theme2 = prop($$props, "theme", 8, "light");
  let position = prop($$props, "position", 8, "bottom-right");
  let hotkey = prop($$props, "hotkey", 24, () => ["altKey", "KeyT"]);
  let containerAriaLabel = prop($$props, "containerAriaLabel", 8, "Notifications");
  let richColors = prop($$props, "richColors", 8, false);
  let expand = prop($$props, "expand", 8, false);
  let duration = prop($$props, "duration", 8, 4e3);
  let visibleToasts = prop($$props, "visibleToasts", 8, VISIBLE_TOASTS_AMOUNT);
  let closeButton = prop($$props, "closeButton", 8, false);
  let toastOptions = prop($$props, "toastOptions", 24, () => ({}));
  let offset = prop($$props, "offset", 8, null);
  let dir = prop($$props, "dir", 24, getDocumentDirection);
  const { toasts, heights, reset: reset$1 } = toastState;
  let expanded = mutable_source(false);
  let interacting = mutable_source(false);
  let actualTheme = mutable_source(getInitialTheme(theme2()));
  let listRef = mutable_source();
  let lastFocusedElementRef = null;
  let isFocusWithinRef = false;
  onDestroy(() => {
    if (get(listRef) && lastFocusedElementRef) {
      lastFocusedElementRef.focus({ preventScroll: true });
      lastFocusedElementRef = null;
      isFocusWithinRef = false;
    }
  });
  onMount(() => {
    reset$1();
    const handleKeydown = (event2) => {
      var _a, _b;
      const isHotkeyPressed = hotkey().every((key) => event2[key] || event2.code === key);
      if (isHotkeyPressed) {
        set(expanded, true);
        (_a = get(listRef)) == null ? void 0 : _a.focus();
      }
      if (event2.code === "Escape" && (document.activeElement === get(listRef) || ((_b = get(listRef)) == null ? void 0 : _b.contains(document.activeElement)))) {
        set(expanded, false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
  function handleBlur(event2) {
    if (isFocusWithinRef && !event2.currentTarget.contains(event2.relatedTarget)) {
      isFocusWithinRef = false;
      if (lastFocusedElementRef) {
        lastFocusedElementRef.focus({ preventScroll: true });
        lastFocusedElementRef = null;
      }
    }
  }
  function handleFocus(event2) {
    if (!isFocusWithinRef) {
      isFocusWithinRef = true;
      lastFocusedElementRef = event2.relatedTarget;
    }
  }
  legacy_pre_effect(() => (deep_read_state(position()), $toasts()), () => {
    set(possiblePositions, Array.from(new Set([
      position(),
      ...$toasts().filter((toast2) => toast2.position).map((toast2) => toast2.position)
    ].filter(Boolean))));
  });
  legacy_pre_effect(() => deep_read_state(hotkey()), () => {
    set(hotkeyLabel, hotkey().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  });
  legacy_pre_effect(() => $toasts(), () => {
    if ($toasts().length <= 1) {
      set(expanded, false);
    }
  });
  legacy_pre_effect(() => $toasts(), () => {
    const toastsToDismiss = $toasts().filter((toast2) => toast2.dismiss && !toast2.delete);
    if (toastsToDismiss.length > 0) {
      const updatedToasts = $toasts().map((toast2) => {
        const matchingToast = toastsToDismiss.find((dismissToast) => dismissToast.id === toast2.id);
        if (matchingToast) {
          return { ...toast2, delete: true };
        }
        return toast2;
      });
      toasts.set(updatedToasts);
    }
  });
  legacy_pre_effect(() => deep_read_state(theme2()), () => {
    if (theme2() !== "system") {
      set(actualTheme, theme2());
    }
    if (typeof window !== "undefined") {
      if (theme2() === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          set(actualTheme, DARK);
        } else {
          set(actualTheme, LIGHT);
        }
      }
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      const changeHandler = ({ matches }) => {
        set(actualTheme, matches ? DARK : LIGHT);
      };
      if ("addEventListener" in mediaQueryList) {
        mediaQueryList.addEventListener("change", changeHandler);
      } else {
        mediaQueryList.addListener(changeHandler);
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var section = root_1$5();
      set_attribute(section, "tabindex", -1);
      each(section, 5, () => get(possiblePositions), index, ($$anchor3, position2, index2, $$array) => {
        var ol = root$5();
        attribute_effect(
          ol,
          ($0, $1, $2) => ({
            tabIndex: -1,
            class: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.class)),
            "data-sonner-toaster": true,
            "data-theme": get(actualTheme),
            "data-rich-colors": richColors(),
            dir: $0,
            "data-y-position": $1,
            "data-x-position": $2,
            style: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.style)),
            ...$$restProps,
            [STYLE]: {
              "--front-toast-height": ($heights(), untrack(() => {
                var _a;
                return `${(_a = $heights()[0]) == null ? void 0 : _a.height}px`;
              })),
              "--offset": typeof offset() === "number" ? `${offset()}px` : offset() || VIEWPORT_OFFSET,
              "--width": `${TOAST_WIDTH}px`,
              "--gap": `${GAP}px`
            }
          }),
          [
            () => (deep_read_state(dir()), untrack(() => dir() === "auto" ? getDocumentDirection() : dir())),
            () => (get(position2), untrack(() => get(position2).split("-")[0])),
            () => (get(position2), untrack(() => get(position2).split("-")[1]))
          ],
          void 0,
          void 0,
          "svelte-nbs0zk"
        );
        each(
          ol,
          7,
          () => ($toasts(), get(position2), untrack(() => $toasts().filter((toast2) => !toast2.position && index2 === 0 || toast2.position === get(position2)))),
          (toast2) => toast2.id,
          ($$anchor4, toast2, index3, $$array_1) => {
            {
              let $0 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.actionButtonStyle) || "";
              })));
              let $1 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.cancelButtonStyle) || "";
              })));
              let $2 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.class) || "";
              })));
              let $3 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.descriptionClass) || "";
              })));
              let $4 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().classes || {})));
              let $5 = derived_safe_equal(() => (deep_read_state(toastOptions()), deep_read_state(duration()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.duration) ?? duration();
              })));
              let $6 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().unstyled || false)));
              Toast($$anchor4, {
                get index() {
                  return get(index3);
                },
                get toast() {
                  return get(toast2);
                },
                get invert() {
                  return invert();
                },
                get visibleToasts() {
                  return visibleToasts();
                },
                get closeButton() {
                  return closeButton();
                },
                get interacting() {
                  return get(interacting);
                },
                get position() {
                  return get(position2);
                },
                get expandByDefault() {
                  return expand();
                },
                get expanded() {
                  return get(expanded);
                },
                get actionButtonStyle() {
                  return get($0);
                },
                get cancelButtonStyle() {
                  return get($1);
                },
                get class() {
                  return get($2);
                },
                get descriptionClass() {
                  return get($3);
                },
                get classes() {
                  return get($4);
                },
                get duration() {
                  return get($5);
                },
                get unstyled() {
                  return get($6);
                },
                $$slots: {
                  "loading-icon": ($$anchor5, $$slotProps) => {
                    var fragment_2 = comment();
                    var node_1 = first_child(fragment_2);
                    slot(node_1, $$props, "loading-icon", {}, ($$anchor6) => {
                      {
                        let $02 = derived_safe_equal(() => (get(toast2), untrack(() => get(toast2).type === "loading")));
                        Loader($$anchor6, {
                          get visible() {
                            return get($02);
                          }
                        });
                      }
                    });
                    append($$anchor5, fragment_2);
                  },
                  "success-icon": ($$anchor5, $$slotProps) => {
                    var fragment_4 = comment();
                    var node_2 = first_child(fragment_4);
                    slot(node_2, $$props, "success-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "success" });
                    });
                    append($$anchor5, fragment_4);
                  },
                  "error-icon": ($$anchor5, $$slotProps) => {
                    var fragment_6 = comment();
                    var node_3 = first_child(fragment_6);
                    slot(node_3, $$props, "error-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "error" });
                    });
                    append($$anchor5, fragment_6);
                  },
                  "warning-icon": ($$anchor5, $$slotProps) => {
                    var fragment_8 = comment();
                    var node_4 = first_child(fragment_8);
                    slot(node_4, $$props, "warning-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "warning" });
                    });
                    append($$anchor5, fragment_8);
                  },
                  "info-icon": ($$anchor5, $$slotProps) => {
                    var fragment_10 = comment();
                    var node_5 = first_child(fragment_10);
                    slot(node_5, $$props, "info-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "info" });
                    });
                    append($$anchor5, fragment_10);
                  }
                }
              });
            }
          }
        );
        reset(ol);
        bind_this(ol, ($$value) => set(listRef, $$value), () => get(listRef));
        template_effect(() => ol.dir = ol.dir);
        event("blur", ol, handleBlur);
        event("focus", ol, handleFocus);
        event("mouseenter", ol, () => set(expanded, true));
        event("mousemove", ol, () => set(expanded, true));
        event("mouseleave", ol, () => {
          if (!get(interacting)) {
            set(expanded, false);
          }
        });
        event("pointerdown", ol, () => set(interacting, true));
        event("pointerup", ol, () => set(interacting, false));
        append($$anchor3, ol);
      });
      reset(section);
      template_effect(() => set_attribute(section, "aria-label", `${containerAriaLabel()} ${get(hotkeyLabel)}`));
      append($$anchor2, section);
    };
    if_block(node, ($$render) => {
      if ($toasts(), untrack(() => $toasts().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
const updated$1 = {
  get current() {
    return updated$2.current;
  },
  check: stores.updated.check
};
const updated = updated$1;
const addOpenAIConnection = async (token, connection) => {
  const current = await getOpenAIConfig(token);
  const urls = (current == null ? void 0 : current.OPENAI_API_BASE_URLS) ?? [];
  const keys = (current == null ? void 0 : current.OPENAI_API_KEYS) ?? [];
  const configs = (current == null ? void 0 : current.OPENAI_API_CONFIGS) ?? {};
  const normalizedUrl = connection.url.replace(/\/$/, "");
  if (urls.map((u) => u.replace(/\/$/, "")).includes(normalizedUrl)) {
    return current;
  }
  urls.push(normalizedUrl);
  keys.push(connection.key ?? "");
  if (connection.config) {
    configs[(urls.length - 1).toString()] = connection.config;
  }
  return await updateOpenAIConfig(token, {
    ENABLE_OPENAI_API: (current == null ? void 0 : current.ENABLE_OPENAI_API) ?? true,
    OPENAI_API_BASE_URLS: urls,
    OPENAI_API_KEYS: keys,
    OPENAI_API_CONFIGS: configs
  });
};
const removeOpenAIConnection = async (token, url) => {
  const current = await getOpenAIConfig(token);
  const urls = (current == null ? void 0 : current.OPENAI_API_BASE_URLS) ?? [];
  const keys = (current == null ? void 0 : current.OPENAI_API_KEYS) ?? [];
  const configs = (current == null ? void 0 : current.OPENAI_API_CONFIGS) ?? {};
  const normalizedUrl = url.replace(/\/$/, "");
  const idx = urls.findIndex((u) => u.replace(/\/$/, "") === normalizedUrl);
  if (idx === -1) return current;
  const newUrls = urls.filter((_, i) => i !== idx);
  const newKeys = keys.filter((_, i) => i !== idx);
  const newConfigs = {};
  newUrls.forEach((_, newIdx) => {
    newConfigs[newIdx] = configs[newIdx < idx ? newIdx : newIdx + 1];
  });
  return await updateOpenAIConfig(token, {
    ENABLE_OPENAI_API: (current == null ? void 0 : current.ENABLE_OPENAI_API) ?? true,
    OPENAI_API_BASE_URLS: newUrls,
    OPENAI_API_KEYS: newKeys,
    OPENAI_API_CONFIGS: newConfigs
  });
};
const addTerminalConnection = async (token, connection) => {
  const current = await getTerminalServerConnections(token);
  const servers = (current == null ? void 0 : current.TERMINAL_SERVER_CONNECTIONS) ?? [];
  if (servers.find((s) => s.url === connection.url)) {
    return current;
  }
  servers.push({
    url: connection.url,
    key: connection.key ?? "",
    auth_type: connection.auth_type ?? "bearer",
    name: connection.name ?? "Open Terminal",
    enabled: true
  });
  return await setTerminalServerConnections(token, {
    TERMINAL_SERVER_CONNECTIONS: servers
  });
};
const removeTerminalConnection = async (token, url) => {
  const current = await getTerminalServerConnections(token);
  const servers = (current == null ? void 0 : current.TERMINAL_SERVER_CONNECTIONS) ?? [];
  const filtered = servers.filter((s) => s.url !== url);
  if (filtered.length === servers.length) return current;
  return await setTerminalServerConnections(token, {
    TERMINAL_SERVER_CONNECTIONS: filtered
  });
};
var root$4 = from_html(`<div class=" text-[13px] font-medium mb-0.5 line-clamp-1"> </div>`);
var root_1$4 = from_html(`<div role="status" aria-live="polite" class="group relative flex gap-2.5 text-left min-w-[var(--width)] w-full dark:bg-gray-850 dark:text-white bg-white text-black border border-gray-100 dark:border-gray-800 rounded-3xl px-4 py-3.5 cursor-pointer select-none"><button class="absolute -top-0.5 -left-0.5 p-0.5 rounded-full opacity-0 group-hover:opacity-100 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-opacity z-10" aria-label="Dismiss notification"><!></button> <div class="shrink-0 self-top -translate-y-0.5"><img alt="favicon" class="size-6 rounded-full"/></div> <div><!> <div class=" line-clamp-2 text-xs self-center dark:text-gray-300 font-normal"></div></div></div>`);
function NotificationToast($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $playingNotificationSound = () => store_get(playingNotificationSound, "$playingNotificationSound", $$stores);
  const $isLastActiveTab = () => store_get(isLastActiveTab, "$isLastActiveTab", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  let onClick = prop($$props, "onClick", 8, () => {
  });
  let title = prop($$props, "title", 8, "HI");
  let content = prop($$props, "content", 8);
  let startX = 0;
  let startY = 0;
  let moved = mutable_source(false);
  let closeButtonElement = mutable_source();
  const DRAG_THRESHOLD_PX = 6;
  const clickHandler = () => {
    onClick()();
    dispatch("closeToast");
  };
  const closeHandler = () => {
    dispatch("closeToast");
  };
  function onPointerDown(e) {
    var _a, _b;
    startX = e.clientX;
    startY = e.clientY;
    set(moved, false);
    (_b = (_a = e.currentTarget).setPointerCapture) == null ? void 0 : _b.call(_a, e.pointerId);
  }
  function onPointerMove(e) {
    if (get(moved)) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (dx * dx + dy * dy > DRAG_THRESHOLD_PX * DRAG_THRESHOLD_PX) {
      set(moved, true);
    }
  }
  function onPointerUp(e) {
    var _a, _b;
    (_b = (_a = e.currentTarget).releasePointerCapture) == null ? void 0 : _b.call(_a, e.pointerId);
    if (get(closeButtonElement) && (e.target === get(closeButtonElement) || get(closeButtonElement).contains(e.target))) {
      return;
    }
    if (!get(moved)) {
      clickHandler();
    }
  }
  onMount(() => {
    var _a;
    if (!navigator.userActivation.hasBeenActive) {
      return;
    }
    if (((_a = $settings()) == null ? void 0 : _a.notificationSound) ?? true) {
      if (!$playingNotificationSound() && $isLastActiveTab()) {
        playingNotificationSound.set(true);
        const audio = new Audio(`/audio/notification.mp3`);
        audio.play().finally(() => {
          playingNotificationSound.set(false);
        });
      }
    }
  });
  init();
  var div = root_1$4();
  var button = child(div);
  var node = child(button);
  XMark(node, { className: "size-3" });
  reset(button);
  bind_this(button, ($$value) => set(closeButtonElement, $$value), () => get(closeButtonElement));
  var div_1 = sibling(button, 2);
  var img = child(div_1);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  {
    var consequent = ($$anchor2) => {
      var div_3 = root$4();
      var text2 = child(div_3, true);
      reset(div_3);
      template_effect(() => set_text(text2, title()));
      append($$anchor2, div_3);
    };
    if_block(node_1, ($$render) => {
      if (title()) $$render(consequent);
    });
  }
  var div_4 = sibling(node_1, 2);
  html(
    div_4,
    () => (deep_read_state(purify), deep_read_state(marked), deep_read_state(content()), untrack(() => purify.sanitize(marked(purify.sanitize(content(), { ALLOWED_TAGS: [] }))))),
    true
  );
  reset(div_4);
  reset(div_2);
  reset(div);
  template_effect(() => set_attribute(img, "src", `${REXPRO_BASE_URL}/static/favicon.png`));
  event("click", button, stopPropagation(closeHandler));
  event("dragstart", div, preventDefault(function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  }));
  event("pointerdown", div, onPointerDown);
  event("pointermove", div, onPointerMove);
  event("pointerup", div, onPointerUp);
  event("pointercancel", div, () => set(moved, true));
  event("keydown", div, (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      clickHandler();
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div class="absolute top-0 left-0 flex h-full"><div class="my-auto rounded-r-lg w-1 h-8 bg-black dark:bg-white"></div></div>`);
var root_1$3 = from_html(`<button aria-label="Home"><img class="size-11 dark:invert p-0.5" alt="logo" draggable="false"/></button>`);
var root_2$2 = from_html(`<nav aria-label="App navigation" class="min-w-[4.5rem] bg-gray-50 dark:bg-gray-950 flex gap-2.5 flex-col pt-8"><div class="flex justify-center relative"><!> <!></div> <div class=" -mt-1 border-[1.5px] border-gray-100 dark:border-gray-900 mx-4"></div> <div class="flex justify-center relative group"><!> <button aria-label="Chat" class=" cursor-pointer bg-transparent"><img alt="logo" draggable="false"/></button></div></nav>`);
function AppSidebar($$anchor) {
  let selected = mutable_source("");
  var nav = root_2$2();
  var div = child(nav);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root$3();
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get(selected) === "home") $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  Tooltip(node_1, {
    content: "Home",
    placement: "right",
    children: ($$anchor2, $$slotProps) => {
      var button = root_1$3();
      var img = child(button);
      reset(button);
      template_effect(() => {
        set_class(button, 1, ` cursor-pointer ${get(selected) === "home" ? "rounded-2xl" : "rounded-full"}`);
        set_attribute(img, "src", `${REXPRO_BASE_URL}/static/splash.png`);
      });
      event("click", button, () => {
        set(selected, "home");
        if (window.electronAPI) {
          window.electronAPI.load("home");
        }
      });
      append($$anchor2, button);
    },
    $$slots: { default: true }
  });
  reset(div);
  var div_2 = sibling(div, 4);
  var node_2 = child(div_2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_3 = root$3();
      append($$anchor2, div_3);
    };
    if_block(node_2, ($$render) => {
      if (get(selected) === "") $$render(consequent_1);
    });
  }
  var button_1 = sibling(node_2, 2);
  var img_1 = child(button_1);
  reset(button_1);
  reset(div_2);
  reset(nav);
  template_effect(() => {
    set_attribute(img_1, "src", `${REXPRO_BASE_URL}/static/favicon.png`);
    set_class(img_1, 1, `size-10 ${get(selected) === "" ? "rounded-2xl" : "rounded-full"}`);
  });
  event("click", button_1, () => {
    set(selected, "");
  });
  append($$anchor, nav);
}
var root$2 = from_html(`<div class="confetti svelte-rtt661"></div>`);
var root_1$2 = from_html(`<div></div>`);
function Confetti($$anchor, $$props) {
  push($$props, true);
  const size = prop($$props, "size", 3, 10), x = prop($$props, "x", 19, () => [-0.5, 0.5]), y = prop($$props, "y", 19, () => [0.25, 1]), duration = prop($$props, "duration", 3, 2e3), infinite = prop($$props, "infinite", 3, false), delay = prop($$props, "delay", 19, () => [0, 50]), colorRange = prop($$props, "colorRange", 19, () => [0, 360]), colorArray = prop($$props, "colorArray", 19, () => []), amount = prop($$props, "amount", 3, 50), iterationCount = prop($$props, "iterationCount", 3, 1), fallDistance = prop($$props, "fallDistance", 3, "100px"), rounded = prop($$props, "rounded", 3, false), cone = prop($$props, "cone", 3, false), noGravity = prop($$props, "noGravity", 3, false), xSpread = prop($$props, "xSpread", 3, 0.15), destroyOnComplete = prop($$props, "destroyOnComplete", 3, true), disableForReducedMotion = prop($$props, "disableForReducedMotion", 3, false);
  let complete = state(false);
  onMount(() => {
    if (!destroyOnComplete() || infinite() || typeof iterationCount() === "string") return;
    setTimeout(() => set(complete, true), (duration() + delay()[1]) * iterationCount());
  });
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getColor() {
    if (colorArray().length) return colorArray()[Math.round(Math.random() * (colorArray().length - 1))];
    else return `hsl(${Math.round(randomBetween(colorRange()[0], colorRange()[1]))}, 75%, 50%)`;
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$2();
      let classes;
      each(div, 21, () => ({ length: amount() }), index, ($$anchor3, _) => {
        var div_1 = root$2();
        template_effect(
          ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) => set_style(div_1, `
        --color: ${$0 ?? ""};
        --skew: ${$1 ?? ""}deg,${$2 ?? ""}deg;
        --rotation-xyz: ${$3 ?? ""}, ${$4 ?? ""}, ${$5 ?? ""};
        --rotation-deg: ${$6 ?? ""}deg;
        --translate-y-multiplier: ${$7 ?? ""};
        --translate-x-multiplier: ${$8 ?? ""};
        --scale: ${$9 ?? ""};
        --transition-delay: ${$10 ?? ""}ms;
        --transition-duration: ${infinite() ? `calc(${duration()}ms * var(--scale))` : `${duration()}ms`};`),
          [
            () => getColor(),
            () => randomBetween(-45, 45),
            () => randomBetween(-45, 45),
            () => randomBetween(-10, 10),
            () => randomBetween(-10, 10),
            () => randomBetween(-10, 10),
            () => randomBetween(0, 360),
            () => randomBetween(y()[0], y()[1]),
            () => randomBetween(x()[0], x()[1]),
            () => 0.1 * randomBetween(2, 10),
            () => randomBetween(delay()[0], delay()[1])
          ]
        );
        append($$anchor3, div_1);
      });
      reset(div);
      template_effect(() => {
        classes = set_class(div, 1, "confetti-holder svelte-rtt661", null, classes, {
          rounded: rounded(),
          cone: cone(),
          "no-gravity": noGravity(),
          "reduced-motion": disableForReducedMotion()
        });
        set_style(div, `
    --fall-distance: ${fallDistance() ?? ""};
    --size: ${size() ?? ""}px;
    --x-spread: ${1 - xSpread()};
    --transition-iteration-count: ${(infinite() ? "infinite" : iterationCount()) ?? ""};`);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (!get(complete)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root$1 = from_html(`<div class="px-5.5 py-5"><div class="mb-1 text-xl font-medium"> </div> <div class="mb-3 text-xs text-gray-500"> </div> <!> <div class="flex justify-end"><button class="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"> </button></div></div>`);
var root_1$1 = from_html(`<div class="px-5.5 py-5"><div class="mb-1 text-xl font-medium"> </div> <div class="mb-3 text-xs text-gray-500"> </div> <div class="flex justify-end"><button class="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"> </button></div></div>`);
var root_2$1 = from_html(`<label class="flex items-center gap-2 text-xs cursor-pointer"><input type="checkbox" class="w-4 h-4 rounded border-gray-300 dark:border-gray-600"/> <span class="text-gray-700 dark:text-gray-300"> </span></label>`);
var root_3$1 = from_html(`<div class="mt-3"><!></div>`);
var root_4$1 = from_html(`<div class="bg-gray-900 dark:bg-gray-100 h-1.5 rounded-full transition-all duration-300"></div>`);
var root_5 = from_html(`<div class="bg-gray-900 dark:bg-gray-100 h-1.5 w-0 rounded-full animate-pulse"></div>`);
var root_6 = from_html(`<div class="mt-3 mx-1.5"><div class="text-xs text-gray-500 mb-1 flex justify-between"><div> </div> <div><!></div></div> <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 overflow-hidden"><!></div></div>`);
var root_7 = from_html(`<div class="flex items-center gap-2"><!> <span> </span></div>`);
var root_8 = from_html(`<div class="flex justify-between px-5 pt-4 pb-0.5"><div class="text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="px-5 pt-2 pb-5"><div class="text-sm text-gray-500 dark:text-gray-400"> </div> <div class="mt-2 text-xs text-gray-500"> </div> <div class="mt-3 text-xs text-gray-500"><div class="font-medium text-gray-900 dark:text-gray-100 mb-1"> </div> <ul class="list-disc list-inside space-y-0.5 ml-1 mb-2"><li> </li> <li> </li> <li> </li> <li> </li> <li> </li></ul> <div class="font-medium text-gray-900 dark:text-gray-100 mb-1"> </div> <ul class="list-disc list-inside space-y-0.5 ml-1"><li> </li> <li> </li> <li> </li></ul></div> <!> <!> <div class="mt-5 flex justify-between items-center gap-2"><div class="text-xs text-gray-400 text-center mr-auto"><button class="hover:underline px-2" type="button"> </button></div> <button class="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 transition disabled:cursor-not-allowed"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors rounded-full"><!></button></div></div>`, 1);
var root_9 = from_html(`<div class="w-full"><!></div>`);
function SyncStatsModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const progressPercent = mutable_source();
  const i18n2 = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let eventData = prop($$props, "eventData", 8, null);
  const handleMessage = async (event2) => {
    var _a, _b, _c, _d;
    const chatId2 = ((_b = (_a = event2.data) == null ? void 0 : _a.data) == null ? void 0 : _b.id) ?? ((_c = event2.data) == null ? void 0 : _c.id);
    if (((_d = event2.data) == null ? void 0 : _d.type) === "verify:chat" && chatId2) {
      try {
        const res = await exportSingleChatStats(localStorage.token, chatId2);
        if (res && window.opener) {
          window.opener.postMessage(
            {
              type: "verify:chat:response",
              data: res,
              chatId: chatId2,
              requestId: event2.data.requestId ?? null
            },
            "*"
          );
        }
      } catch (err) {
        /* @__PURE__ */ console.error("Failed to verify chat:", err);
        if (window.opener) {
          window.opener.postMessage(
            {
              type: "verify:chat:error",
              error: (err == null ? void 0 : err.detail) || (err == null ? void 0 : err.message) || "Failed to verify chat",
              chatId: chatId2,
              requestId: event2.data.requestId ?? null
            },
            "*"
          );
        }
      }
    }
  };
  onMount(() => {
    window.addEventListener("message", handleMessage);
  });
  onDestroy(() => {
    window.removeEventListener("message", handleMessage);
  });
  let syncing = mutable_source(false);
  let downloading = mutable_source(false);
  let completed = mutable_source(false);
  let error = mutable_source(false);
  let errorMessage = mutable_source("");
  let processedItemsCount = mutable_source(0);
  let total = mutable_source(0);
  let downloadController = null;
  let syncMode = mutable_source("incremental");
  const postToOpener = (message) => {
    var _a;
    if (window.opener) {
      window.opener.postMessage({ ...message, requestId: ((_a = eventData()) == null ? void 0 : _a.requestId) ?? null }, "*");
    }
  };
  const resetState = () => {
    set(syncing, false);
    set(downloading, false);
    set(completed, false);
    set(error, false);
    set(errorMessage, "");
    set(processedItemsCount, 0);
    set(total, 0);
    downloadController = null;
  };
  const handleError = (message) => {
    /* @__PURE__ */ console.error("Sync error:", message);
    set(errorMessage, message);
    set(error, true);
    set(syncing, false);
    set(downloading, false);
    postToOpener({ type: "sync:error", error: message });
  };
  const cancelOperation = () => {
    if (downloadController) {
      downloadController.abort();
      downloadController = null;
    }
    set(syncing, false);
    set(downloading, false);
    postToOpener({ type: "sync:error", error: "User cancelled the operation" });
  };
  const syncStats = async () => {
    var _a, _b;
    if (window.opener) {
      window.opener.focus();
    }
    postToOpener({ type: "sync:start" });
    set(syncing, true);
    set(error, false);
    set(errorMessage, "");
    set(processedItemsCount, 0);
    set(total, 0);
    try {
      const versionRes = await getVersion(localStorage.token).catch((err) => {
        /* @__PURE__ */ console.error("Failed to get version:", err);
        return null;
      });
      if (versionRes) {
        postToOpener({ type: "sync:version", data: versionRes });
      }
      let page2 = 1;
      let allItemsLoaded = false;
      while (!allItemsLoaded) {
        const searchParams = { ...((_a = eventData()) == null ? void 0 : _a.searchParams) ?? {} };
        if (get(syncMode) === "incremental" && ((_b = eventData()) == null ? void 0 : _b.lastSyncedChatUpdatedAt)) {
          searchParams.updated_at = eventData().lastSyncedChatUpdatedAt;
        }
        const res = await exportChatStats(localStorage.token, page2, searchParams).catch((err) => {
          throw new Error((err == null ? void 0 : err.detail) || (err == null ? void 0 : err.message) || "Failed to export chat stats");
        });
        if (!res) {
          throw new Error("Failed to fetch stats data");
        }
        set(processedItemsCount, get(processedItemsCount) + res.items.length);
        set(total, res.total);
        await tick();
        if (window.opener && res.items.length > 0) {
          postToOpener({ type: "sync:stats:chats", data: res });
        }
        if (get(processedItemsCount) >= get(total) || res.items.length === 0) {
          allItemsLoaded = true;
        } else {
          page2 += 1;
        }
      }
      postToOpener({ type: "sync:complete" });
      set(syncing, false);
      set(completed, true);
    } catch (err) {
      handleError((err == null ? void 0 : err.message) || "An unexpected error occurred");
    }
  };
  const downloadHandler = async () => {
    var _a, _b;
    if (get(downloading)) {
      cancelOperation();
      return;
    }
    set(downloading, true);
    set(syncing, true);
    set(error, false);
    set(errorMessage, "");
    set(processedItemsCount, 0);
    set(total, 0);
    try {
      const initialRes = await exportChatStats(localStorage.token, 1, {}).catch(() => null);
      if (initialRes == null ? void 0 : initialRes.total) {
        set(total, initialRes.total);
      }
      await tick();
      const versionRes = await getVersion(localStorage.token).catch(() => null);
      const version = (versionRes == null ? void 0 : versionRes.version) ?? "0.0.0";
      const filename = `rexpro-ai-stats-${version}-${Date.now()}.json`;
      const searchParams = ((_a = eventData()) == null ? void 0 : _a.searchParams) ?? {};
      const [res, controller] = await downloadChatStats(localStorage.token, searchParams.updated_at).catch((err) => {
        throw new Error((err == null ? void 0 : err.detail) || "Failed to connect to the server. Please check your connection.");
      });
      if (!res) {
        throw new Error("Failed to start download. The server may be unavailable.");
      }
      downloadController = controller;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const items = [];
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (line.trim() !== "") {
            try {
              items.push(JSON.parse(line));
              set(processedItemsCount, get(processedItemsCount) + 1);
            } catch (e) {
              /* @__PURE__ */ console.error("Error parsing line:", e);
            }
          }
        }
        await tick();
      }
      if (buffer.trim() !== "") {
        try {
          items.push(JSON.parse(buffer));
          set(processedItemsCount, get(processedItemsCount) + 1);
        } catch (e) {
          /* @__PURE__ */ console.error("Error parsing buffer:", e);
        }
      }
      if (get(downloading)) {
        const blob = new Blob([JSON.stringify(items)], { type: "application/json" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      if ((err == null ? void 0 : err.name) === "AbortError" || ((_b = err == null ? void 0 : err.message) == null ? void 0 : _b.includes("aborted"))) ;
      else {
        handleError((err == null ? void 0 : err.message) || "Download failed. Please try again.");
        toast.error(get(errorMessage));
      }
    } finally {
      set(downloading, false);
      set(syncing, false);
      downloadController = null;
    }
  };
  const closeModal = () => {
    show(false);
    resetState();
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show() && window.opener) {
      window.opener.postMessage("loaded", "*");
    }
  });
  legacy_pre_effect(() => (get(total), get(processedItemsCount)), () => {
    set(progressPercent, get(total) > 0 ? Math.min(Math.round(get(processedItemsCount) / get(total) * 100), 100) : 0);
  });
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
      var div = root_9();
      var node = child(div);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root$1();
          var div_2 = child(div_1);
          var text2 = child(div_2, true);
          reset(div_2);
          var div_3 = sibling(div_2, 2);
          var text_1 = child(div_3, true);
          reset(div_3);
          var node_1 = sibling(div_3, 2);
          Confetti(node_1, { x: [-0.5, 0.5], y: [0.25, 1] });
          var div_4 = sibling(node_1, 2);
          var button = child(div_4);
          var text_2 = child(button, true);
          reset(button);
          reset(div_4);
          reset(div_1);
          template_effect(
            ($0, $1, $2) => {
              set_text(text2, $0);
              set_text(text_1, $1);
              set_text(text_2, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Sync Complete!"))),
              () => ($i18n(), untrack(() => $i18n().t("Your usage stats have been successfully synced."))),
              () => ($i18n(), untrack(() => $i18n().t("Done")))
            ]
          );
          event("click", button, closeModal);
          append($$anchor3, div_1);
        };
        var consequent_1 = ($$anchor3) => {
          var div_5 = root_1$1();
          var div_6 = child(div_5);
          var text_3 = child(div_6, true);
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var text_4 = child(div_7, true);
          reset(div_7);
          var div_8 = sibling(div_7, 2);
          var button_1 = child(div_8);
          var text_5 = child(button_1, true);
          reset(button_1);
          reset(div_8);
          reset(div_5);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_3, $0);
              set_text(text_4, $1);
              set_text(text_5, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Sync Failed"))),
              () => (get(errorMessage), $i18n(), untrack(() => get(errorMessage) || $i18n().t("There was an error syncing your stats. Please try again."))),
              () => ($i18n(), untrack(() => $i18n().t("Try Again")))
            ]
          );
          event("click", button_1, () => {
            set(error, false);
            set(errorMessage, "");
          });
          append($$anchor3, div_5);
        };
        var alternate_2 = ($$anchor3) => {
          var fragment_1 = root_8();
          var div_9 = first_child(fragment_1);
          var div_10 = child(div_9);
          var text_6 = child(div_10, true);
          reset(div_10);
          var button_2 = sibling(div_10, 2);
          var node_2 = child(button_2);
          XMark(node_2, { className: "size-5" });
          reset(button_2);
          reset(div_9);
          var div_11 = sibling(div_9, 2);
          var div_12 = child(div_11);
          var text_7 = child(div_12, true);
          reset(div_12);
          var div_13 = sibling(div_12, 2);
          var text_8 = child(div_13, true);
          reset(div_13);
          var div_14 = sibling(div_13, 2);
          var div_15 = child(div_14);
          var text_9 = child(div_15, true);
          reset(div_15);
          var ul = sibling(div_15, 2);
          var li = child(ul);
          var text_10 = child(li, true);
          reset(li);
          var li_1 = sibling(li, 2);
          var text_11 = child(li_1, true);
          reset(li_1);
          var li_2 = sibling(li_1, 2);
          var text_12 = child(li_2, true);
          reset(li_2);
          var li_3 = sibling(li_2, 2);
          var text_13 = child(li_3, true);
          reset(li_3);
          var li_4 = sibling(li_3, 2);
          var text_14 = child(li_4, true);
          reset(li_4);
          reset(ul);
          var div_16 = sibling(ul, 2);
          var text_15 = child(div_16, true);
          reset(div_16);
          var ul_1 = sibling(div_16, 2);
          var li_5 = child(ul_1);
          var text_16 = child(li_5, true);
          reset(li_5);
          var li_6 = sibling(li_5, 2);
          var text_17 = child(li_6, true);
          reset(li_6);
          var li_7 = sibling(li_6, 2);
          var text_18 = child(li_7, true);
          reset(li_7);
          reset(ul_1);
          reset(div_14);
          var node_3 = sibling(div_14, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_17 = root_3$1();
              var node_4 = child(div_17);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Syncs only chats with updates after your last sync timestamp. Disable to re-sync all chats."))));
                Tooltip(node_4, {
                  get content() {
                    return get($0);
                  },
                  placement: "top-start",
                  children: ($$anchor5, $$slotProps2) => {
                    var label = root_2$1();
                    var input = child(label);
                    remove_input_defaults(input);
                    var span = sibling(input, 2);
                    var text_19 = child(span, true);
                    reset(span);
                    reset(label);
                    template_effect(
                      ($02) => {
                        set_checked(input, get(syncMode) === "incremental");
                        input.disabled = get(syncing);
                        set_text(text_19, $02);
                      },
                      [
                        () => ($i18n(), untrack(() => $i18n().t("Only sync new/updated chats")))
                      ]
                    );
                    event("change", input, (e) => set(syncMode, e.target.checked ? "incremental" : "full"));
                    append($$anchor5, label);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_17);
              append($$anchor4, div_17);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(eventData()), untrack(() => {
                var _a;
                return (_a = eventData()) == null ? void 0 : _a.lastSyncedChatUpdatedAt;
              })) $$render(consequent_2);
            });
          }
          var node_5 = sibling(node_3, 2);
          {
            var consequent_5 = ($$anchor4) => {
              var div_18 = root_6();
              var div_19 = child(div_18);
              var div_20 = child(div_19);
              var text_20 = child(div_20, true);
              reset(div_20);
              var div_21 = sibling(div_20, 2);
              var node_6 = child(div_21);
              {
                var consequent_3 = ($$anchor5) => {
                  var text_21 = text();
                  template_effect(() => set_text(text_21, `${get(processedItemsCount) ?? ""}/${get(total) ?? ""}`));
                  append($$anchor5, text_21);
                };
                if_block(node_6, ($$render) => {
                  if (get(total) > 0) $$render(consequent_3);
                });
              }
              reset(div_21);
              reset(div_19);
              var div_22 = sibling(div_19, 2);
              var node_7 = child(div_22);
              {
                var consequent_4 = ($$anchor5) => {
                  var div_23 = root_4$1();
                  template_effect(() => set_style(div_23, `width: ${get(progressPercent) ?? ""}%`));
                  append($$anchor5, div_23);
                };
                var alternate = ($$anchor5) => {
                  var div_24 = root_5();
                  append($$anchor5, div_24);
                };
                if_block(node_7, ($$render) => {
                  if (get(total) > 0) $$render(consequent_4);
                  else $$render(alternate, -1);
                });
              }
              reset(div_22);
              reset(div_18);
              template_effect(($0) => set_text(text_20, $0), [
                () => (get(downloading), $i18n(), untrack(() => get(downloading) ? $i18n().t("Downloading stats...") : $i18n().t("Syncing stats...")))
              ]);
              append($$anchor4, div_18);
            };
            if_block(node_5, ($$render) => {
              if (get(syncing)) $$render(consequent_5);
            });
          }
          var div_25 = sibling(node_5, 2);
          var div_26 = child(div_25);
          var button_3 = child(div_26);
          var text_22 = child(button_3, true);
          reset(button_3);
          reset(div_26);
          var button_4 = sibling(div_26, 2);
          var text_23 = child(button_4, true);
          reset(button_4);
          var button_5 = sibling(button_4, 2);
          var node_8 = child(button_5);
          {
            var consequent_6 = ($$anchor4) => {
              var div_27 = root_7();
              var node_9 = child(div_27);
              Spinner(node_9, { className: "size-3" });
              var span_1 = sibling(node_9, 2);
              var text_24 = child(span_1, true);
              reset(span_1);
              reset(div_27);
              template_effect(($0) => set_text(text_24, $0), [() => ($i18n(), untrack(() => $i18n().t("Syncing...")))]);
              append($$anchor4, div_27);
            };
            var alternate_1 = ($$anchor4) => {
              var text_25 = text();
              template_effect(($0) => set_text(text_25, $0), [() => ($i18n(), untrack(() => $i18n().t("Sync")))]);
              append($$anchor4, text_25);
            };
            if_block(node_8, ($$render) => {
              if (get(syncing) && !get(downloading)) $$render(consequent_6);
              else $$render(alternate_1, -1);
            });
          }
          reset(button_5);
          reset(div_25);
          reset(div_11);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) => {
              set_text(text_6, $0);
              set_attribute(button_2, "aria-label", $1);
              button_2.disabled = get(syncing);
              set_text(text_7, $2);
              set_text(text_8, $3);
              set_text(text_9, $4);
              set_text(text_10, $5);
              set_text(text_11, $6);
              set_text(text_12, $7);
              set_text(text_13, $8);
              set_text(text_14, $9);
              set_text(text_15, $10);
              set_text(text_16, $11);
              set_text(text_17, $12);
              set_text(text_18, $13);
              button_3.disabled = get(syncing) && !get(downloading);
              set_text(text_22, $14);
              set_text(text_23, $15);
              button_5.disabled = get(syncing);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Sync Usage Stats"))),
              () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
              () => ($i18n(), untrack(() => $i18n().t("Do you want to sync your usage stats with rexpro-ai Community?"))),
              () => ($i18n(), untrack(() => $i18n().t("Participate in community leaderboards and evaluations! Syncing aggregated usage stats helps drive research and improvements to rexpro-ai. Your privacy is paramount: no message content is ever shared."))),
              () => ($i18n(), untrack(() => $i18n().t("What is shared:"))),
              () => ($i18n(), untrack(() => $i18n().t("rexpro-ai version"))),
              () => ($i18n(), untrack(() => $i18n().t("Model names and usage frequency"))),
              () => ($i18n(), untrack(() => $i18n().t("Message counts and response timestamps"))),
              () => ($i18n(), untrack(() => $i18n().t("Content lengths (character counts only)"))),
              () => ($i18n(), untrack(() => $i18n().t("User ratings (thumbs up/down)"))),
              () => ($i18n(), untrack(() => $i18n().t("What is NOT shared:"))),
              () => ($i18n(), untrack(() => $i18n().t("Your message text or inputs"))),
              () => ($i18n(), untrack(() => $i18n().t("Model responses or outputs"))),
              () => ($i18n(), untrack(() => $i18n().t("Uploaded files or images"))),
              () => (get(downloading), $i18n(), untrack(() => get(downloading) ? $i18n().t("Stop Download") : $i18n().t("Download as JSON"))),
              () => ($i18n(), untrack(() => $i18n().t("Cancel")))
            ]
          );
          event("click", button_2, () => {
            show(false);
          });
          event("click", button_3, downloadHandler);
          event("click", button_4, () => {
            if (get(syncing)) {
              cancelOperation();
            } else {
              show(false);
            }
          });
          event("click", button_5, syncStats);
          append($$anchor3, fragment_1);
        };
        if_block(node, ($$render) => {
          if (get(completed)) $$render(consequent);
          else if (get(error)) $$render(consequent_1, 1);
          else $$render(alternate_2, -1);
        });
      }
      reset(div);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<link crossorigin="anonymous" rel="icon"/> <meta name="apple-mobile-web-app-title"/> <meta name="description"/> <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" crossorigin="use-credentials"/>`, 1);
var root_1 = from_html(`<div class="bg-red-500 text-white text-center py-2 text-xs font-semibold z-[9999] relative flex items-center justify-center gap-2"><span class="size-2 rounded-full bg-white animate-pulse"></span> Backend offline. Reconnecting...</div>`);
var root_2 = from_html(`<div class=" py-5"><!></div>`);
var root_3 = from_html(`<div class="flex flex-row h-screen"><!> <div class="w-full flex-1 max-w-[calc(100%-4.5rem)]"><!></div></div>`);
var root_4 = from_html(`<!> <!> <!> <!> <!>`, 1);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_VERSION = () => store_get(REXPRO_VERSION, "$REXPRO_VERSION", $$stores);
  const $REXPRO_DEPLOYMENT_ID = () => store_get(REXPRO_DEPLOYMENT_ID, "$REXPRO_DEPLOYMENT_ID", $$stores);
  const $pyodideWorker = () => store_get(pyodideWorker, "$pyodideWorker", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $toolServers = () => store_get(toolServers, "$toolServers", $$stores);
  const $terminalServers = () => store_get(terminalServers, "$terminalServers", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $isLastActiveTab = () => store_get(isLastActiveTab, "$isLastActiveTab", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $currentChatPage = () => store_get(currentChatPage, "$currentChatPage", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $channels = () => store_get(channels, "$channels", $$stores);
  const $channelId = () => store_get(channelId, "$channelId", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const $isApp = () => store_get(isApp, "$isApp", $$stores);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let loadingProgress = spring(0, { stiffness: 0.05 });
  const unregisterServiceWorkers = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((r) => r.unregister()));
        return true;
      } catch (error) {
        /* @__PURE__ */ console.error("Error unregistering service workers:", error);
        return false;
      }
    }
    return false;
  };
  beforeNavigate(async ({ willUnload, to }) => {
    if (updated.current && !willUnload && (to == null ? void 0 : to.url)) {
      await unregisterServiceWorkers();
      location.href = to.url.href;
    }
  });
  setContext("i18n", i18n);
  const bc = new BroadcastChannel("active-tab-channel");
  let loaded = mutable_source(false);
  let tokenTimer = null;
  let reconnectInterval = null;
  let backendOffline = mutable_source(false);
  let showRefresh = mutable_source(false);
  let showSyncStatsModal = mutable_source(false);
  let syncStatsEventData = mutable_source(null);
  let heartbeatInterval = null;
  let disconnectToastTimer = null;
  let disconnectWarningShown = false;
  const BREAKPOINT = 768;
  const DISCONNECT_TOAST_DELAY_MS = 2e3;
  const setupSocket = async (enableWebsocket) => {
    const _socket = lookup(`${REXPRO_BASE_URL}` || void 0, {
      reconnection: true,
      reconnectionDelay: 1e3,
      reconnectionDelayMax: 5e3,
      randomizationFactor: 0.5,
      path: "/ws/socket.io",
      transports: enableWebsocket ? ["websocket", "polling"] : ["polling"],
      auth: { token: localStorage.token }
    });
    await socket.set(_socket);
    _socket.on("connect_error", (err) => {
      /* @__PURE__ */ console.log("connect_error", err);
    });
    let hasConnectedOnce = false;
    _socket.on("connect", async () => {
      /* @__PURE__ */ console.log("connected", _socket.id);
      if (disconnectToastTimer) {
        clearTimeout(disconnectToastTimer);
        disconnectToastTimer = null;
      }
      if (hasConnectedOnce) {
        socketConnected.set(true);
        if (disconnectWarningShown) {
          toast.success($i18n().t("Reconnected"));
          disconnectWarningShown = false;
        }
      }
      hasConnectedOnce = true;
      const res = await getVersion(localStorage.token);
      const deploymentId = (res == null ? void 0 : res.deployment_id) ?? null;
      const version = (res == null ? void 0 : res.version) ?? null;
      if (version !== null || deploymentId !== null) {
        if ($REXPRO_VERSION() !== null && version !== $REXPRO_VERSION() || $REXPRO_DEPLOYMENT_ID() !== null && deploymentId !== $REXPRO_DEPLOYMENT_ID()) {
          await unregisterServiceWorkers();
          location.href = location.href;
          return;
        }
      }
      heartbeatInterval = setInterval(
        () => {
          if (_socket.connected) {
            /* @__PURE__ */ console.log("Sending heartbeat");
            _socket.emit("heartbeat", {});
          }
        },
        3e4
      );
      if (deploymentId !== null) {
        REXPRO_DEPLOYMENT_ID.set(deploymentId);
      }
      if (version !== null) {
        REXPRO_VERSION.set(version);
        window.REXPRO_VERSION = version;
      }
      /* @__PURE__ */ console.log("version", version);
      if (localStorage.getItem("token")) {
        _socket.emit("user-join", { auth: { token: localStorage.token } });
      } else {
        console.warn("No token found in localStorage, user-join event not emitted");
      }
    });
    _socket.on("reconnect_attempt", (attempt) => {
      /* @__PURE__ */ console.log("reconnect_attempt", attempt);
    });
    _socket.on("reconnect_failed", () => {
      /* @__PURE__ */ console.log("reconnect_failed");
    });
    _socket.on("disconnect", (reason, details) => {
      /* @__PURE__ */ console.log(`Socket ${_socket.id} disconnected due to ${reason}`);
      socketConnected.set(false);
      if (disconnectToastTimer) {
        clearTimeout(disconnectToastTimer);
      }
      disconnectWarningShown = false;
      disconnectToastTimer = setTimeout(
        () => {
          disconnectToastTimer = null;
          disconnectWarningShown = true;
          toast.warning($i18n().t("Connection lost. Reconnecting..."));
        },
        DISCONNECT_TOAST_DELAY_MS
      );
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }
      if (details) {
        /* @__PURE__ */ console.log("Additional details:", details);
      }
    });
  };
  const getOrCreateWorker = () => {
    let worker = $pyodideWorker();
    if (!worker) {
      worker = new WorkerWrapper();
      pyodideWorker.set(worker);
    }
    return worker;
  };
  const executePythonAsWorker = async (id, code, cb, files = []) => {
    let result = null;
    let stdout = null;
    let stderr = null;
    let executing = true;
    let packages = [
      /\bimport\s+requests\b|\bfrom\s+requests\b/.test(code) ? "requests" : null,
      /\bimport\s+bs4\b|\bfrom\s+bs4\b/.test(code) ? "beautifulsoup4" : null,
      /\bimport\s+numpy\b|\bfrom\s+numpy\b/.test(code) ? "numpy" : null,
      /\bimport\s+pandas\b|\bfrom\s+pandas\b/.test(code) ? "pandas" : null,
      /\bimport\s+matplotlib\b|\bfrom\s+matplotlib\b/.test(code) ? "matplotlib" : null,
      /\bimport\s+seaborn\b|\bfrom\s+seaborn\b/.test(code) ? "seaborn" : null,
      /\bimport\s+sklearn\b|\bfrom\s+sklearn\b/.test(code) ? "scikit-learn" : null,
      /\bimport\s+scipy\b|\bfrom\s+scipy\b/.test(code) ? "scipy" : null,
      /\bimport\s+re\b|\bfrom\s+re\b/.test(code) ? "regex" : null,
      /\bimport\s+seaborn\b|\bfrom\s+seaborn\b/.test(code) ? "seaborn" : null,
      /\bimport\s+sympy\b|\bfrom\s+sympy\b/.test(code) ? "sympy" : null,
      /\bimport\s+tiktoken\b|\bfrom\s+tiktoken\b/.test(code) ? "tiktoken" : null,
      /\bimport\s+pytz\b|\bfrom\s+pytz\b/.test(code) ? "pytz" : null
    ].filter(Boolean);
    const worker = getOrCreateWorker();
    let filePayloads = [];
    if (files && files.length > 0) {
      for (const file of files) {
        try {
          const fileId = file == null ? void 0 : file.id;
          const fileName = (file == null ? void 0 : file.filename) || (file == null ? void 0 : file.name) || "file";
          if (fileId) {
            const content = await getFileContentById(fileId);
            if (content) {
              filePayloads.push({ name: fileName, data: content });
            }
          }
        } catch (e) {
          /* @__PURE__ */ console.error("Failed to fetch file for Pyodide:", e);
        }
      }
    }
    worker.postMessage({
      type: "execute",
      id,
      code,
      packages,
      files: filePayloads.length > 0 ? filePayloads : void 0
    });
    let timeoutId = setTimeout(
      () => {
        if (executing) {
          executing = false;
          stderr = "Execution Time Limit Exceeded";
          worker.terminate();
          pyodideWorker.set(null);
          if (cb) {
            cb(JSON.parse(JSON.stringify({ stdout, stderr, result }, (_key, value) => typeof value === "bigint" ? value.toString() : value)));
          }
        }
      },
      6e4
    );
    const onMessage = (event2) => {
      const { id: eventId, ...data } = event2.data;
      if (eventId !== id) return;
      if (data.type && data.type.startsWith("fs:")) return;
      /* @__PURE__ */ console.log("pyodideWorker.onmessage", event2);
      clearTimeout(timeoutId);
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onError);
      data["stdout"] && (stdout = data["stdout"]);
      data["stderr"] && (stderr = data["stderr"]);
      data["result"] && (result = data["result"]);
      if (cb) {
        cb(JSON.parse(JSON.stringify({ stdout, stderr, result }, (_key, value) => typeof value === "bigint" ? value.toString() : value)));
      }
      executing = false;
    };
    const onError = (event2) => {
      /* @__PURE__ */ console.log("pyodideWorker.onerror", event2);
      clearTimeout(timeoutId);
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onError);
      if (cb) {
        cb(JSON.parse(JSON.stringify({ stdout, stderr, result }, (_key, value) => typeof value === "bigint" ? value.toString() : value)));
      }
      executing = false;
    };
    worker.addEventListener("message", onMessage);
    worker.addEventListener("error", onError);
  };
  const resolveToolServer = (serverUrl) => {
    var _a, _b, _c, _d, _e;
    let toolServer = (_b = (_a = $settings()) == null ? void 0 : _a.toolServers) == null ? void 0 : _b.find((server) => server.url === serverUrl);
    if (!toolServer) {
      const terminalServer = (((_c = $settings()) == null ? void 0 : _c.terminalServers) ?? []).find((server) => server.url === serverUrl);
      if (terminalServer) {
        toolServer = {
          url: terminalServer.url,
          auth_type: terminalServer.auth_type ?? "bearer",
          key: terminalServer.key ?? "",
          path: terminalServer.path ?? "/openapi.json"
        };
      }
    }
    let toolServerData = ((_d = $toolServers()) == null ? void 0 : _d.find((server) => server.url === serverUrl)) ?? ((_e = $terminalServers()) == null ? void 0 : _e.find((server) => server.url === serverUrl));
    let token = null;
    if (toolServer) {
      const auth_type = (toolServer == null ? void 0 : toolServer.auth_type) ?? "bearer";
      if (auth_type === "bearer") token = toolServer == null ? void 0 : toolServer.key;
      else if (auth_type === "session") token = localStorage.token;
    }
    return { toolServer, toolServerData, token };
  };
  const executeTool = async (data, cb, chatId2) => {
    var _a, _b, _c;
    const { toolServer, toolServerData, token } = resolveToolServer((_a = data.server) == null ? void 0 : _a.url);
    /* @__PURE__ */ console.log("executeTool", data, toolServer);
    if (toolServer) {
      const res = await executeToolServer(token, toolServer.url, data == null ? void 0 : data.name, data == null ? void 0 : data.params, toolServerData, chatId2);
      /* @__PURE__ */ console.log("executeToolServer", res);
      if ((data == null ? void 0 : data.name) === "display_file" && ((_b = data == null ? void 0 : data.params) == null ? void 0 : _b.path)) {
        if ((res == null ? void 0 : res.exists) !== false) {
          displayFileHandler(data.params.path, { showControls, showFileNavPath });
        }
      }
      if (["write_file"].includes(data == null ? void 0 : data.name) && ((_c = data == null ? void 0 : data.params) == null ? void 0 : _c.path)) {
        showFileNavDir.set((res == null ? void 0 : res.path) ?? data.params.path);
      }
      if (cb) {
        cb(structuredClone(res));
      }
    } else {
      if (cb) {
        cb({ error: "Tool Server Not Found" });
      }
    }
  };
  const chatEventHandler = async (event2, cb) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    $page().url.pathname.includes(`/c/${event2.chat_id}`);
    const isTemporaryChat = (_a = event2.chat_id) == null ? void 0 : _a.startsWith("local:");
    if (isTemporaryChat && event2.chat_id !== $chatId()) {
      return;
    }
    let isInBackground = document.visibilityState !== "visible";
    if (window.electronAPI) {
      const res = await window.electronAPI.send({ type: "window:isFocused" });
      if (res) {
        isInBackground = !res.isFocused;
      }
    }
    await tick();
    const type = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.type) ?? null;
    const data = ((_c = event2 == null ? void 0 : event2.data) == null ? void 0 : _c.data) ?? null;
    if (type === "calendar:alert" && data) {
      const timeStr = data.minutes_until <= 0 ? $i18n().t("Starting now") : data.minutes_until === 1 ? $i18n().t("Starting in 1 minute") : $i18n().t("Starting in {{count}} minutes", { count: data.minutes_until });
      toast.custom(NotificationToast, {
        componentProps: {
          onClick: () => {
            goto("/calendar");
          },
          title: data.title,
          content: timeStr
        },
        duration: 3e4,
        unstyled: true
      });
      if ($isLastActiveTab()) {
        if (((_d = $settings()) == null ? void 0 : _d.notificationEnabled) ?? false) {
          new Notification(`${data.title} • rexpro-ai`, { body: timeStr, icon: `${REXPRO_BASE_URL}/static/favicon.png` });
        }
      }
      return;
    }
    if ((data == null ? void 0 : data.session_id) === $socket().id) {
      if (type === "execute:python") {
        /* @__PURE__ */ console.log("execute:python", data);
        executePythonAsWorker(data.id, data.code, cb, data.files || []);
        return;
      } else if (type === "execute:tool") {
        /* @__PURE__ */ console.log("execute:tool", data);
        executeTool(data, cb, event2.chat_id);
        return;
      } else if (type === "request:chat:completion") {
        /* @__PURE__ */ console.log(data, $socket().id);
        const { session_id, channel, form_data, model } = data;
        try {
          const directConnections = ((_e = $settings()) == null ? void 0 : _e.directConnections) ?? {};
          if (directConnections) {
            const urlIdx = model == null ? void 0 : model.urlIdx;
            const OPENAI_API_URL = directConnections.OPENAI_API_BASE_URLS[urlIdx];
            const OPENAI_API_KEY = directConnections.OPENAI_API_KEYS[urlIdx];
            const API_CONFIG = directConnections.OPENAI_API_CONFIGS[urlIdx];
            try {
              if (API_CONFIG == null ? void 0 : API_CONFIG.prefix_id) {
                const prefixId = API_CONFIG.prefix_id;
                form_data["model"] = form_data["model"].replace(`${prefixId}.`, ``);
              }
              const [res, controller] = await chatCompletion(OPENAI_API_KEY, form_data, OPENAI_API_URL);
              if (res) {
                if (!res.ok) {
                  throw await res.json();
                }
                if ((form_data == null ? void 0 : form_data.stream) ?? false) {
                  cb({ status: true });
                  /* @__PURE__ */ console.log({ status: true });
                  const reader = res.body.getReader();
                  const decoder = new TextDecoder();
                  const processStream = async () => {
                    var _a2;
                    while (true) {
                      const { done, value } = await reader.read();
                      if (done) {
                        break;
                      }
                      const chunk = decoder.decode(value, { stream: true });
                      const lines = chunk.split("\n").filter((line) => line.trim() !== "");
                      for (const line of lines) {
                        /* @__PURE__ */ console.log(line);
                        (_a2 = $socket()) == null ? void 0 : _a2.emit(channel, line);
                      }
                    }
                  };
                  await processStream();
                } else {
                  const data2 = await res.json();
                  cb(data2);
                }
              } else {
                throw new Error("An error occurred while fetching the completion");
              }
            } catch (error) {
              /* @__PURE__ */ console.error("chatCompletion", error);
              cb(error);
            }
          }
        } catch (error) {
          /* @__PURE__ */ console.error("chatCompletion", error);
          cb(error);
        } finally {
          $socket().emit(channel, { done: true });
        }
        return;
      }
    }
    if (event2.chat_id !== $chatId() && !$temporaryChatEnabled() || isInBackground) {
      if (type === "chat:completion") {
        const { done, content, title } = data;
        const displayTitle = title || $i18n().t("New Chat");
        if (done) {
          if ((((_f = $settings()) == null ? void 0 : _f.notificationSound) ?? true) && (((_g = $settings()) == null ? void 0 : _g.notificationSoundAlways) ?? false)) {
            playingNotificationSound.set(true);
            const audio = new Audio(`/audio/notification.mp3`);
            audio.play().finally(() => {
              playingNotificationSound.set(false);
            });
          }
          if ($isLastActiveTab()) {
            if (((_h = $settings()) == null ? void 0 : _h.notificationEnabled) ?? false) {
              new Notification(`${displayTitle} • rexpro-ai`, { body: content, icon: `${REXPRO_BASE_URL}/static/favicon.png` });
            }
          }
          toast.custom(NotificationToast, {
            componentProps: {
              onClick: () => {
                goto(`/c/${event2.chat_id}`);
              },
              content,
              title: displayTitle
            },
            duration: 15e3,
            unstyled: true
          });
        }
      } else if (type === "chat:title") {
        currentChatPage.set(1);
        await chats.set(await getChatList(localStorage.token, $currentChatPage()));
      } else if (type === "chat:tags") {
        tags.set(await getAllTags(localStorage.token));
      }
    }
  };
  const channelEventHandler = async (event2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    /* @__PURE__ */ console.log("channelEventHandler", event2);
    if (((_a = event2.data) == null ? void 0 : _a.type) === "typing") {
      return;
    }
    if (((_b = event2.data) == null ? void 0 : _b.type) === "channel:created") {
      const res = await getChannels(localStorage.token).catch(async (error) => {
        return null;
      });
      if (res) {
        await channels.set(res.sort((a, b) => ["", null, "group", "dm"].indexOf(a.type) - ["", null, "group", "dm"].indexOf(b.type)));
      }
      return;
    }
    const channel = $page().url.pathname.includes(`/channels/${event2.channel_id}`);
    let isInBackground = document.visibilityState !== "visible";
    if (window.electronAPI) {
      const res = await window.electronAPI.send({ type: "window:isFocused" });
      if (res) {
        isInBackground = !res.isFocused;
      }
    }
    if ((!channel || isInBackground) && ((_c = event2 == null ? void 0 : event2.user) == null ? void 0 : _c.id) !== ((_d = $user()) == null ? void 0 : _d.id)) {
      await tick();
      const type = ((_e = event2 == null ? void 0 : event2.data) == null ? void 0 : _e.type) ?? null;
      const data = ((_f = event2 == null ? void 0 : event2.data) == null ? void 0 : _f.data) ?? null;
      if ($channels()) {
        if ($channels().find((ch) => ch.id === event2.channel_id) && $channelId() !== event2.channel_id) {
          channels.set($channels().map((ch) => {
            if (ch.id === event2.channel_id) {
              if (type === "message") {
                return {
                  ...ch,
                  unread_count: (ch.unread_count ?? 0) + 1,
                  last_message_at: event2.created_at
                };
              }
            }
            return ch;
          }));
        } else {
          const res = await getChannels(localStorage.token).catch(async (error) => {
            return null;
          });
          if (res) {
            await channels.set(res.sort((a, b) => ["", null, "group", "dm"].indexOf(a.type) - ["", null, "group", "dm"].indexOf(b.type)));
          }
        }
      }
      if (type === "message") {
        const title = `${(_g = data == null ? void 0 : data.user) == null ? void 0 : _g.name}${((_h = event2 == null ? void 0 : event2.channel) == null ? void 0 : _h.type) !== "dm" ? ` (#${(_i = event2 == null ? void 0 : event2.channel) == null ? void 0 : _i.name})` : ""}`;
        if ($isLastActiveTab()) {
          if (((_j = $settings()) == null ? void 0 : _j.notificationEnabled) ?? false) {
            new Notification(`${title} • rexpro-ai`, {
              body: data == null ? void 0 : data.content,
              icon: `${REXPRO_API_BASE_URL}/users/${(_k = data == null ? void 0 : data.user) == null ? void 0 : _k.id}/profile/image`
            });
          }
        }
        toast.custom(NotificationToast, {
          componentProps: {
            onClick: () => {
              goto(`/channels/${event2.channel_id}`);
            },
            content: data == null ? void 0 : data.content,
            title: `${title}`
          },
          duration: 15e3,
          unstyled: true
        });
      }
    }
  };
  const TOKEN_EXPIRY_BUFFER = 60;
  const checkTokenExpiry = async () => {
    var _a;
    const exp = (_a = $user()) == null ? void 0 : _a.expires_at;
    const now = Math.floor(Date.now() / 1e3);
    if (!exp) {
      return;
    }
    if (now >= exp - TOKEN_EXPIRY_BUFFER) {
      const res = await userSignOut();
      user.set(null);
      localStorage.removeItem("token");
      location.href = (res == null ? void 0 : res.redirect_url) ?? "/auth";
    }
  };
  const desktopEventHandler = async (event2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (event2.type === "page:reload") {
      location.reload();
      return;
    }
    if (event2.type === "page:navigate" && ((_a = event2.data) == null ? void 0 : _a.path)) {
      await goto(event2.data.path);
      return;
    }
    if (event2.type === "query" && (((_b = event2.data) == null ? void 0 : _b.query) || ((_d = (_c = event2.data) == null ? void 0 : _c.files) == null ? void 0 : _d.length))) {
      desktopEvent.set(event2);
      await goto("/");
      return;
    }
    if (event2.type === "call") {
      desktopEvent.set(event2);
      await goto("/");
      return;
    }
    if (event2.type === "theme:update" && ((_e = event2.data) == null ? void 0 : _e.theme)) {
      const newTheme = event2.data.theme;
      localStorage.setItem("theme", newTheme);
      theme.set(newTheme);
      const themes = ["dark", "light", "oled-dark"];
      let themeToApply = newTheme === "oled-dark" ? "dark" : newTheme === "her" ? "light" : newTheme;
      if (newTheme === "system") {
        themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      themes.filter((e) => e !== themeToApply).forEach((e) => {
        e.split(" ").forEach((cls) => document.documentElement.classList.remove(cls));
      });
      themeToApply.split(" ").forEach((cls) => document.documentElement.classList.add(cls));
      return;
    }
    if (event2.type === "models:refresh") {
      const token2 = localStorage.token;
      if (token2) {
        models.set(await getModels(token2, ((_g = (_f = $config()) == null ? void 0 : _f.features) == null ? void 0 : _g.enable_direct_connections) ? ((_h = $settings()) == null ? void 0 : _h.directConnections) ?? null : null));
      }
      return;
    }
    const token = localStorage.token;
    if (!token) return;
    if (((_i = $user()) == null ? void 0 : _i.role) !== "admin") return;
    try {
      if (event2.type === "connections:terminal") {
        if (event2.data.action === "add") {
          await addTerminalConnection(token, {
            url: event2.data.url,
            key: event2.data.key,
            name: "Local Open Terminal"
          });
        } else if (event2.data.action === "remove") {
          await removeTerminalConnection(token, event2.data.url);
        }
      } else if (event2.type === "connections:openai") {
        if (event2.data.action === "add") {
          await addOpenAIConnection(token, {
            url: event2.data.url,
            key: event2.data.key,
            config: event2.data.config
          });
        } else if (event2.data.action === "remove") {
          await removeOpenAIConnection(token, event2.data.url);
        }
      }
    } catch (e) {
      /* @__PURE__ */ console.error("Desktop connection update failed:", e);
    }
  };
  const windowMessageEventHandler = async (event2) => {
    var _a;
    if (![
      "https://rexpro-ai.rexpro.com",
      "https://www.openrexpro.com",
      "http://localhost:9999"
    ].includes(event2.origin)) {
      return;
    }
    if (event2.data === "export:stats" || ((_a = event2.data) == null ? void 0 : _a.type) === "export:stats") {
      set(syncStatsEventData, event2.data);
      set(showSyncStatsModal, true);
    }
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f;
    window.addEventListener("message", windowMessageEventHandler);
    let touchstartY = 0;
    function isNavOrDescendant(el) {
      const nav = document.querySelector("nav");
      return nav && (el === nav || nav.contains(el));
    }
    const touchstartHandler = (e) => {
      if (!isNavOrDescendant(e.target)) return;
      touchstartY = e.touches[0].clientY;
    };
    const touchmoveHandler = (e) => {
      if (!isNavOrDescendant(e.target)) return;
      const touchY = e.touches[0].clientY;
      const touchDiff = touchY - touchstartY;
      if (touchDiff > 50 && window.scrollY === 0) {
        set(showRefresh, true);
        e.preventDefault();
      }
    };
    const touchendHandler = (e) => {
      if (!isNavOrDescendant(e.target)) return;
      if (get(showRefresh)) {
        set(showRefresh, false);
        location.reload();
      }
    };
    document.addEventListener("touchstart", touchstartHandler);
    document.addEventListener("touchmove", touchmoveHandler, { passive: false });
    document.addEventListener("touchend", touchendHandler);
    if (typeof window !== "undefined") {
      if (window.applyTheme) {
        window.applyTheme();
      }
    }
    if (window == null ? void 0 : window.electronAPI) {
      const info = await window.electronAPI.send({ type: "app:info" });
      if (info) {
        isApp.set(true);
        appInfo.set(info);
        const data = await window.electronAPI.send({ type: "app:data" });
        if (data) {
          appData.set(data);
        }
      }
      if (window.electronAPI.onEvent) {
        window.electronAPI.onEvent(desktopEventHandler);
      }
    }
    bc.onmessage = (event2) => {
      if (event2.data === "active") {
        isLastActiveTab.set(false);
      }
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        isLastActiveTab.set(true);
        bc.postMessage("active");
        checkTokenExpiry();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    handleVisibilityChange();
    theme.set(localStorage.theme);
    mobile.set(window.innerWidth < BREAKPOINT);
    const onResize = () => {
      if (window.innerWidth < BREAKPOINT) {
        mobile.set(true);
      } else {
        mobile.set(false);
      }
    };
    window.addEventListener("resize", onResize);
    user.subscribe(async (value) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g;
      if (value) {
        (_a2 = $socket()) == null ? void 0 : _a2.off("events", chatEventHandler);
        (_b2 = $socket()) == null ? void 0 : _b2.off("events:channel", channelEventHandler);
        (_c2 = $socket()) == null ? void 0 : _c2.on("events", chatEventHandler);
        (_d2 = $socket()) == null ? void 0 : _d2.on("events:channel", channelEventHandler);
        const userSettings = await getUserSettings(localStorage.token);
        if (userSettings) {
          settings.set(userSettings.ui);
        } else {
          try {
            settings.set(JSON.parse(localStorage.getItem("settings") ?? "{}"));
          } catch {
            settings.set({});
          }
        }
        setTextScale(((_e2 = $settings()) == null ? void 0 : _e2.textScale) ?? 1);
        if (tokenTimer) {
          clearInterval(tokenTimer);
        }
        tokenTimer = setInterval(checkTokenExpiry, 15e3);
      } else {
        (_f2 = $socket()) == null ? void 0 : _f2.off("events", chatEventHandler);
        (_g = $socket()) == null ? void 0 : _g.off("events:channel", channelEventHandler);
      }
    });
    let backendConfig = null;
    try {
      backendConfig = await getBackendConfig();
      /* @__PURE__ */ console.log("Backend config:", backendConfig);
    } catch (error) {
      if (error == null ? void 0 : error.authRedirect) {
        window.location.href = "/";
        return;
      }
      /* @__PURE__ */ console.error("Error loading backend config:", error);
    }
    if (!backendConfig) {
      set(backendOffline, true);
      backendConfig = {
        name: "rexpro-ai",
        features: {
          auth: true,
          enable_login_form: true,
          enable_signup: false,
          enable_ldap: false,
          enable_websocket: false,
          enable_community_sharing: false
        },
        oauth: { providers: {} }
      };
      reconnectInterval = setInterval(
        async () => {
          try {
            const configData = await getBackendConfig();
            if (configData) {
              clearInterval(reconnectInterval);
              window.location.reload();
            }
          } catch (e) {
          }
        },
        3e3
      );
    }
    initI18n(localStorage == null ? void 0 : localStorage.locale);
    if (!localStorage.locale) {
      const languages = await getLanguages();
      const browserLanguages = navigator.languages ? navigator.languages : [navigator.language || navigator.userLanguage];
      const lang = (backendConfig == null ? void 0 : backendConfig.default_locale) ? backendConfig.default_locale : bestMatchingLanguage(languages, browserLanguages, "en-US");
      changeLanguage(lang);
      dayjs2.locale(lang);
    }
    if (backendConfig) {
      await config.set(backendConfig);
      await REXPRO_NAME.set(backendConfig.name);
      if ($config()) {
        await setupSocket(((_a = $config().features) == null ? void 0 : _a.enable_websocket) ?? true);
        const currentUrl = `${window.location.pathname}${window.location.search}`;
        const encodedUrl = encodeURIComponent(currentUrl);
        if (localStorage.token && !get(backendOffline)) {
          const sessionUser = await getSessionUser(localStorage.token).catch((error) => {
            toast.error(`${error}`);
            return null;
          });
          if (sessionUser) {
            await user.set(sessionUser);
            try {
              await config.set(await getBackendConfig());
            } catch (error) {
              /* @__PURE__ */ console.error("Error refreshing backend config:", error);
            }
            const timezone = getUserTimezone();
            if (timezone) {
              updateUserTimezone(localStorage.token, timezone);
            }
            if ((_b = window.electronAPI) == null ? void 0 : _b.send) {
              window.electronAPI.send({ type: "token:update", token: localStorage.token }).catch(() => {
              });
            }
          } else {
            localStorage.removeItem("token");
            await goto(`/auth?redirect=${encodedUrl}`);
          }
        } else {
          if ($page().url.pathname !== "/auth") {
            await goto(`/auth?redirect=${encodedUrl}`);
          }
        }
      }
    }
    await tick();
    if (document.documentElement.classList.contains("her") && document.getElementById("progress-bar")) {
      loadingProgress.subscribe((value) => {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
          progressBar.style.width = `${value}%`;
        }
      });
      await loadingProgress.set(100);
      (_c = document.getElementById("splash-screen")) == null ? void 0 : _c.remove();
      const audio = new Audio(`/audio/greeting.mp3`);
      const playAudio = () => {
        audio.play();
        document.removeEventListener("click", playAudio);
      };
      document.addEventListener("click", playAudio);
      set(loaded, true);
    } else {
      (_d = document.getElementById("splash-screen")) == null ? void 0 : _d.remove();
      set(loaded, true);
    }
    if ((window.opener ?? false) && $page().url.searchParams.get("sync") === "true" && (((_f = (_e = $config()) == null ? void 0 : _e.features) == null ? void 0 : _f.enable_community_sharing) ?? false)) {
      set(showSyncStatsModal, true);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("message", windowMessageEventHandler);
      document.removeEventListener("touchstart", touchstartHandler);
      document.removeEventListener("touchmove", touchmoveHandler);
      document.removeEventListener("touchend", touchendHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (reconnectInterval) {
        clearInterval(reconnectInterval);
      }
    };
  });
  onDestroy(() => {
    bc.close();
  });
  init();
  var fragment_1 = root_4();
  head("12qhfyh", ($$anchor2) => {
    var fragment = root();
    var link = first_child(fragment);
    var meta = sibling(link, 2);
    var meta_1 = sibling(meta, 2);
    var link_1 = sibling(meta_1, 2);
    template_effect(() => {
      set_attribute(link, "href", `${REXPRO_BASE_URL}/static/favicon.png`);
      set_attribute(meta, "content", $REXPRO_NAME());
      set_attribute(meta_1, "content", $REXPRO_NAME());
      set_attribute(link_1, "title", $REXPRO_NAME());
    });
    deferred_template_effect(() => {
      $document.title = $REXPRO_NAME() ?? "";
    });
    append($$anchor2, fragment);
  });
  var node = first_child(fragment_1);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(backendOffline)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_2();
      var node_2 = child(div_1);
      Spinner(node_2, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (get(showRefresh)) $$render(consequent_1);
    });
  }
  var node_3 = sibling(node_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_4 = first_child(fragment_2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_2 = root_3();
          var node_5 = child(div_2);
          AppSidebar(node_5);
          var div_3 = sibling(node_5, 2);
          var node_6 = child(div_3);
          slot(node_6, $$props, "default", {}, null);
          reset(div_3);
          reset(div_2);
          append($$anchor3, div_2);
        };
        var alternate = ($$anchor3) => {
          var fragment_3 = comment();
          var node_7 = first_child(fragment_3);
          slot(node_7, $$props, "default", {}, null);
          append($$anchor3, fragment_3);
        };
        if_block(node_4, ($$render) => {
          if ($isApp()) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_3, ($$render) => {
      if (get(loaded)) $$render(consequent_3);
    });
  }
  var node_8 = sibling(node_3, 2);
  {
    var consequent_4 = ($$anchor2) => {
      SyncStatsModal($$anchor2, {
        get eventData() {
          return get(syncStatsEventData);
        },
        get show() {
          return get(showSyncStatsModal);
        },
        set show($$value) {
          set(showSyncStatsModal, $$value);
        },
        $$legacy: true
      });
    };
    if_block(node_8, ($$render) => {
      var _a;
      if ((_a = $config()) == null ? void 0 : _a.features.enable_community_sharing) $$render(consequent_4);
    });
  }
  var node_9 = sibling(node_8, 2);
  {
    let $0 = derived_safe_equal(() => $theme().includes("dark") ? "dark" : $theme() === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light");
    Toaster(node_9, {
      get theme() {
        return get($0);
      },
      richColors: true,
      position: "top-right",
      closeButton: true
    });
  }
  append($$anchor, fragment_1);
  pop();
  $$cleanup();
}
export {
  _layout as component,
  _layout$1 as universal
};
