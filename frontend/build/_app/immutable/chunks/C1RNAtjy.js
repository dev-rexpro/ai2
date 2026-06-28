var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __superGet = (cls, obj, key2) => __reflectGet(__getProtoOf(cls), key2, obj);
var _sources, _version, _size, _update_version, _SvelteMap_instances, source_fn, read_all_fn, _size2, _observed, _options, _node, _window, _width, _height, _subscribe, _root, _opts, _currentFrame, _observer, _runId, _AnimationsComplete_instances, cleanup_fn, executeCallback_fn, _opts2, _enabled, _afterAnimations, _shouldRender, _transitionStatus, _hasMounted, _transitionFrame, _PresenceManager_instances, clearTransitionFrame_fn, _interactOutsideProp, _behaviorType, _interceptedEvents, _isResponsibleLayer, _isFocusInsideDOMTree, _documentObj, _onFocusOutside, _unsubClickListener, _handleFocus, _DismissibleLayerState_instances, addEventListeners_fn, _handleDismiss, _handleInteractOutside, _markInterceptedEvent, _markNonInterceptedEvent, _markResponsibleLayer, _isTargetWithinLayer, _resetState, isAnyEventIntercepted_fn, _onfocuscapture, _onblurcapture, _addEventListener, _onkeydown, _scopeStack, _focusHistory, _preFocusHistory, _paused, _container, _manager, _cleanupFns, _opts3, _FocusScope_instances, cleanup_fn2, handleOpenAutoFocus_fn, handleCloseAutoFocus_fn, setupEventListeners_fn, getTabbables_fn, getFirstTabbable_fn, getAllFocusables_fn, _unsubSelectionLock, _enabledSnapshot, _onPointerDownSnapshot, _onPointerUpSnapshot, _TextSelectionLayerState_instances, addEventListeners_fn2, _pointerupUserHandler, _pointerdown, _resetSelectionLock, _factory, _subscribers, _state, _scope, _SharedState_instances, dispose_fn, _id, _initialState, _restoreScrollDelay, _countState, _transformedStyle, _updatePositionStrategy, _arrowSize, _arrowWidth, _arrowHeight, _desiredPlacement, _boundary, _hasExplicitBoundaries, _detectOverflowOptions, _availableWidth, _availableHeight, _anchorWidth, _anchorHeight, _middleware, _placedSide, _placedAlign, _arrowX, _arrowY, _cannotCenterArrow, _contentZIndex, _arrowBaseSide, _wrapperProps, _props, _arrowStyle, _opts4, _buffer, _transitIntentTimeout, _exitPoint, _exitTarget, _transitTargets, _trackedTriggerNode, _leaveFallbackRafId, _transitIntentTimeoutId, _SafePolygon_instances, cancelLeaveFallback_fn, scheduleLeaveFallback_fn, cancelTransitIntentTimeout_fn, scheduleTransitIntentTimeout_fn, onPointerMove_fn, clearTracking_fn, getCorridorPolygon_fn, getSafePolygon_fn, flipSide_fn, _hasSelection, _isPointerDownOnContent, _containsSelection, _contentNode, _contentMounted, _triggerNode, _props2, _snippetProps, _props3;
import "./DKem_M_z.js";
import { b3 as state, bN as update_version, Z as source, k as get$2, w as set, bO as increment, v as user_derived, bG as createSubscriber, al as user_effect, u as untrack, A as tick, g as comment, h as first_child, b8 as noop, a as append, p as push, bP as getAllContexts, b as pop, E as mount, H as unmount, bH as on, bQ as effect_root, a3 as proxy, o as onMount, z as sibling, f as from_html, bA as props_id, c as child, r as reset, t as template_effect, B as from_svg, i as getContext, s as setup_stores, m as deep_read_state, d as set_text, e as store_get, y as event, x as derived_safe_equal, q as mutable_source } from "./B-Kw_l3V.js";
import { q as defaultWindow, r as isObject, i as boxWith, w as watch, j as snippet, C as Context, f as createBitsAttrs, n as noop$1, t as executeCallbacks, u as ESCAPE, v as simpleBox, x as composeHandlers, y as boxFrom, a as attachRef, z as cssToStyleObj, s as styleToString, m as mergeProps, B as getDataOpenClosed, c as boolToStr, D as getDataTransitionAttrs, h as createId } from "./C10pJ7Zz.js";
import { c as component } from "./DAsw9G0E.js";
import { p as prop, s as spread_props, r as rest_props } from "./COqmMDwI.js";
import { i as if_block } from "./DWHK2A9K.js";
import { h as attribute_effect, s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import "./DwLkIEu4.js";
import { i as init } from "./CUpGYt-B.js";
import { g as getUserInfoById } from "./CP40r8ux.js";
import { e as each, i as index } from "./qTQza25_.js";
import { u as user } from "./BJ3rUC-5.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { x as getDMChannelByUserId } from "./BJCfc4ks.js";
import { g as goto } from "./vYrFh_lq.js";
import { E as Emoji } from "./Bl_QxWr9.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { k as key } from "./BQGcmJDz.js";
import { u as useId } from "./BAtiHJio.js";
import { t as tabbable, a as focusable, i as isFocusable } from "./GVdwQ4e6.js";
const _SvelteMap = class _SvelteMap extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteMap_instances);
    /** @type {Map<K, Source<number>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, state(0));
    __privateAdd(this, _size, state(0));
    __privateAdd(this, _update_version, update_version || -1);
    if (value) {
      for (var [key2, v] of value) {
        super.set(key2, v);
      }
      __privateGet(this, _size).v = super.size;
    }
  }
  /** @param {K} key */
  has(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    if (s === void 0) {
      if (super.has(key2)) {
        s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      } else {
        get$2(__privateGet(this, _version));
        return false;
      }
    }
    get$2(s);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    if (s === void 0) {
      if (super.has(key2)) {
        s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      } else {
        get$2(__privateGet(this, _version));
        return void 0;
      }
    }
    get$2(s);
    return super.get(key2);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key2, value) {
    var _a;
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    var prev_res = super.get(key2);
    var res = super.set(key2, value);
    var version = __privateGet(this, _version);
    if (s === void 0) {
      s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
      sources.set(key2, s);
      set(__privateGet(this, _size), super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !((_a = s.reactions) == null ? void 0 : _a.every(
        (r) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r)
        )
      ));
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    var res = super.delete(key2);
    if (s !== void 0) {
      sources.delete(key2);
      set(s, -1);
    }
    if (res) {
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    set(__privateGet(this, _size), 0);
    for (var s of sources.values()) {
      set(s, -1);
    }
    increment(__privateGet(this, _version));
    sources.clear();
  }
  keys() {
    get$2(__privateGet(this, _version));
    return super.keys();
  }
  values() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.values();
  }
  entries() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get$2(__privateGet(this, _size));
    return super.size;
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_update_version = new WeakMap();
_SvelteMap_instances = new WeakSet();
/**
 * If the source is being created inside the same reaction as the SvelteMap instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
source_fn = function(value) {
  return update_version === __privateGet(this, _update_version) ? state(value) : source(value);
};
read_all_fn = function() {
  get$2(__privateGet(this, _version));
  var sources = __privateGet(this, _sources);
  if (__privateGet(this, _size).v !== sources.size) {
    for (var key2 of __superGet(_SvelteMap.prototype, this, "keys").call(this)) {
      if (!sources.has(key2)) {
        var s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      }
    }
  }
  for ([, s] of __privateGet(this, _sources)) {
    get$2(s);
  }
};
let SvelteMap = _SvelteMap;
function isFunction(value) {
  return typeof value === "function";
}
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  constructor(node, options = { box: "border-box" }) {
    // no need to use `$state` here since we are using createSubscriber
    __privateAdd(this, _size2, { width: 0, height: 0 });
    __privateAdd(this, _observed, false);
    __privateAdd(this, _options);
    __privateAdd(this, _node);
    __privateAdd(this, _window);
    // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
    // which we would get if we would just use a getter since the version of the subscriber will be changing
    __privateAdd(this, _width, user_derived(() => {
      var _a;
      (_a = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a();
      return this.getSize().width;
    }));
    // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
    // which we would get if we would just use a getter since the version of the subscriber will be changing
    __privateAdd(this, _height, user_derived(() => {
      var _a;
      (_a = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a();
      return this.getSize().height;
    }));
    // we need to use a derived here because the class will be created before the node is bound to the ref
    __privateAdd(this, _subscribe, user_derived(() => {
      const node$ = get$1(__privateGet(this, _node));
      if (!node$) return;
      return createSubscriber((update) => {
        if (!__privateGet(this, _window)) return;
        const observer = new (__privateGet(this, _window)).ResizeObserver((entries) => {
          __privateSet(this, _observed, true);
          for (const entry of entries) {
            const boxSize = __privateGet(this, _options).box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
            const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
            __privateGet(this, _size2).width = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.inlineSize), 0);
            __privateGet(this, _size2).height = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.blockSize), 0);
          }
          update();
        });
        observer.observe(node$);
        return () => {
          __privateSet(this, _observed, false);
          observer.disconnect();
        };
      });
    }));
    __privateSet(this, _window, options.window ?? defaultWindow);
    __privateSet(this, _options, options);
    __privateSet(this, _node, node);
    __privateSet(this, _size2, { width: 0, height: 0 });
  }
  calculateSize() {
    const element = get$1(__privateGet(this, _node));
    if (!element || !__privateGet(this, _window)) {
      return;
    }
    const offsetWidth = element.offsetWidth;
    const offsetHeight = element.offsetHeight;
    if (__privateGet(this, _options).box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = __privateGet(this, _window).getComputedStyle(element);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return __privateGet(this, _observed) ? __privateGet(this, _size2) : this.calculateSize() ?? __privateGet(this, _size2);
  }
  get current() {
    var _a;
    (_a = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a();
    return this.getSize();
  }
  get width() {
    return get$2(__privateGet(this, _width));
  }
  get height() {
    return get$2(__privateGet(this, _height));
  }
}
_size2 = new WeakMap();
_observed = new WeakMap();
_options = new WeakMap();
_node = new WeakMap();
_window = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_subscribe = new WeakMap();
function onDestroyEffect(fn) {
  user_effect(() => {
    return () => {
      fn();
    };
  });
}
function onMountEffect(fn) {
  user_effect(() => {
    const cleanup = untrack(() => fn());
    return cleanup;
  });
}
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(node) {
  return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  var _a;
  return isObject(node) && ((_a = node.constructor) == null ? void 0 : _a.name) === "VisualViewport";
}
function isNode$1(node) {
  return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot$1(node) {
  return isNode$1(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child2) {
  var _a;
  if (!parent || !child2)
    return false;
  if (!isHTMLElement$2(parent) || !isHTMLElement$2(child2))
    return false;
  const rootNode = (_a = child2.getRootNode) == null ? void 0 : _a.call(child2);
  if (parent === child2)
    return true;
  if (parent.contains(child2))
    return true;
  if (rootNode && isShadowRoot$1(rootNode)) {
    let next = child2;
    while (next) {
      if (parent === next)
        return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return (node == null ? void 0 : node.ownerDocument) ?? document;
}
function getWindow$1(node) {
  var _a;
  if (isShadowRoot$1(node))
    return getWindow$1(node.host);
  if (isDocument(node))
    return node.defaultView ?? window;
  if (isHTMLElement$2(node))
    return ((_a = node.ownerDocument) == null ? void 0 : _a.defaultView) ?? window;
  return window;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  constructor(element) {
    __publicField(this, "element");
    __privateAdd(this, _root, user_derived(() => {
      if (!this.element.current) return document;
      const rootNode = this.element.current.getRootNode() ?? document;
      return rootNode;
    }));
    __publicField(this, "getDocument", () => {
      return getDocument(this.root);
    });
    __publicField(this, "getWindow", () => {
      return this.getDocument().defaultView ?? window;
    });
    __publicField(this, "getActiveElement", () => {
      return getActiveElement(this.root);
    });
    __publicField(this, "isActiveElement", (node) => {
      return node === this.getActiveElement();
    });
    __publicField(this, "querySelector", (selector) => {
      if (!this.root) return null;
      return this.root.querySelector(selector);
    });
    __publicField(this, "querySelectorAll", (selector) => {
      if (!this.root) return [];
      return this.root.querySelectorAll(selector);
    });
    __publicField(this, "setTimeout", (callback, delay) => {
      return this.getWindow().setTimeout(callback, delay);
    });
    __publicField(this, "clearTimeout", (timeoutId) => {
      return this.getWindow().clearTimeout(timeoutId);
    });
    if (typeof element === "function") {
      this.element = boxWith(element);
    } else {
      this.element = element;
    }
  }
  get root() {
    return get$2(__privateGet(this, _root));
  }
  set root(value) {
    set(__privateGet(this, _root), value);
  }
  getElementById(id) {
    return this.root.getElementById(id);
  }
}
_root = new WeakMap();
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isBrowser && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function isHTMLElement$1(element) {
  return element instanceof HTMLElement;
}
function isElement$1(element) {
  return element instanceof Element;
}
function isElementOrSVGElement(element) {
  return element instanceof Element || element instanceof SVGElement;
}
function isTouch(e) {
  return e.pointerType === "touch";
}
function isFocusVisible(element) {
  return element.matches(":focus-visible");
}
function isNotNull(value) {
  return value !== null;
}
class AnimationsComplete {
  constructor(opts) {
    __privateAdd(this, _AnimationsComplete_instances);
    __privateAdd(this, _opts);
    __privateAdd(this, _currentFrame, null);
    __privateAdd(this, _observer, null);
    __privateAdd(this, _runId, 0);
    __privateSet(this, _opts, opts);
    onDestroyEffect(() => __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this));
  }
  run(fn) {
    __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this);
    const node = __privateGet(this, _opts).ref.current;
    if (!node)
      return;
    if (typeof node.getAnimations !== "function") {
      __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
      return;
    }
    const runId = __privateGet(this, _runId);
    const executeIfCurrent = () => {
      if (runId !== __privateGet(this, _runId))
        return;
      __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
    };
    const waitForAnimations = () => {
      if (runId !== __privateGet(this, _runId))
        return;
      const animations = node.getAnimations();
      if (animations.length === 0) {
        executeIfCurrent();
        return;
      }
      Promise.all(animations.map((animation) => animation.finished)).then(() => {
        executeIfCurrent();
      }).catch(() => {
        if (runId !== __privateGet(this, _runId))
          return;
        const currentAnimations = node.getAnimations();
        const hasRunningAnimations = currentAnimations.some((animation) => animation.pending || animation.playState !== "finished");
        if (hasRunningAnimations) {
          waitForAnimations();
          return;
        }
        executeIfCurrent();
      });
    };
    const requestWaitForAnimations = () => {
      __privateSet(this, _currentFrame, window.requestAnimationFrame(() => {
        __privateSet(this, _currentFrame, null);
        waitForAnimations();
      }));
    };
    if (!__privateGet(this, _opts).afterTick.current) {
      requestWaitForAnimations();
      return;
    }
    __privateSet(this, _currentFrame, window.requestAnimationFrame(() => {
      __privateSet(this, _currentFrame, null);
      const startingStyleAttr = "data-starting-style";
      if (!node.hasAttribute(startingStyleAttr)) {
        requestWaitForAnimations();
        return;
      }
      __privateSet(this, _observer, new MutationObserver(() => {
        var _a;
        if (runId !== __privateGet(this, _runId))
          return;
        if (node.hasAttribute(startingStyleAttr))
          return;
        (_a = __privateGet(this, _observer)) == null ? void 0 : _a.disconnect();
        __privateSet(this, _observer, null);
        requestWaitForAnimations();
      }));
      __privateGet(this, _observer).observe(node, {
        attributes: true,
        attributeFilter: [startingStyleAttr]
      });
    }));
  }
}
_opts = new WeakMap();
_currentFrame = new WeakMap();
_observer = new WeakMap();
_runId = new WeakMap();
_AnimationsComplete_instances = new WeakSet();
cleanup_fn = function() {
  var _a;
  if (__privateGet(this, _currentFrame) !== null) {
    window.cancelAnimationFrame(__privateGet(this, _currentFrame));
    __privateSet(this, _currentFrame, null);
  }
  (_a = __privateGet(this, _observer)) == null ? void 0 : _a.disconnect();
  __privateSet(this, _observer, null);
  __privateWrapper(this, _runId)._++;
};
executeCallback_fn = function(fn) {
  const execute = () => {
    fn();
  };
  if (__privateGet(this, _opts).afterTick) {
    afterTick(execute);
  } else {
    execute();
  }
};
class PresenceManager {
  constructor(opts) {
    __privateAdd(this, _PresenceManager_instances);
    __privateAdd(this, _opts2);
    __privateAdd(this, _enabled);
    __privateAdd(this, _afterAnimations);
    __privateAdd(this, _shouldRender, state(false));
    __privateAdd(this, _transitionStatus, state(void 0));
    __privateAdd(this, _hasMounted, false);
    __privateAdd(this, _transitionFrame, null);
    __privateSet(this, _opts2, opts);
    set(__privateGet(this, _shouldRender), opts.open.current, true);
    __privateSet(this, _enabled, opts.enabled ?? true);
    __privateSet(this, _afterAnimations, new AnimationsComplete({ ref: __privateGet(this, _opts2).ref, afterTick: __privateGet(this, _opts2).open }));
    onDestroyEffect(() => __privateMethod(this, _PresenceManager_instances, clearTransitionFrame_fn).call(this));
    watch(() => __privateGet(this, _opts2).open.current, (isOpen) => {
      var _a, _b, _c, _d, _e, _f;
      if (!__privateGet(this, _hasMounted)) {
        __privateSet(this, _hasMounted, true);
        return;
      }
      __privateMethod(this, _PresenceManager_instances, clearTransitionFrame_fn).call(this);
      if (!isOpen && ((_b = (_a = __privateGet(this, _opts2)).shouldSkipExitAnimation) == null ? void 0 : _b.call(_a))) {
        set(__privateGet(this, _shouldRender), false);
        set(__privateGet(this, _transitionStatus), void 0);
        (_d = (_c = __privateGet(this, _opts2)).onComplete) == null ? void 0 : _d.call(_c);
        return;
      }
      if (isOpen) set(__privateGet(this, _shouldRender), true);
      set(__privateGet(this, _transitionStatus), isOpen ? "starting" : "ending", true);
      if (isOpen) {
        __privateSet(this, _transitionFrame, window.requestAnimationFrame(() => {
          __privateSet(this, _transitionFrame, null);
          if (__privateGet(this, _opts2).open.current) {
            set(__privateGet(this, _transitionStatus), void 0);
          }
        }));
      }
      if (!__privateGet(this, _enabled)) {
        if (!isOpen) {
          set(__privateGet(this, _shouldRender), false);
        }
        set(__privateGet(this, _transitionStatus), void 0);
        (_f = (_e = __privateGet(this, _opts2)).onComplete) == null ? void 0 : _f.call(_e);
        return;
      }
      __privateGet(this, _afterAnimations).run(() => {
        var _a2, _b2;
        if (isOpen === __privateGet(this, _opts2).open.current) {
          if (!__privateGet(this, _opts2).open.current) {
            set(__privateGet(this, _shouldRender), false);
          }
          set(__privateGet(this, _transitionStatus), void 0);
          (_b2 = (_a2 = __privateGet(this, _opts2)).onComplete) == null ? void 0 : _b2.call(_a2);
        }
      });
    });
  }
  get shouldRender() {
    return get$2(__privateGet(this, _shouldRender));
  }
  get transitionStatus() {
    return get$2(__privateGet(this, _transitionStatus));
  }
}
_opts2 = new WeakMap();
_enabled = new WeakMap();
_afterAnimations = new WeakMap();
_shouldRender = new WeakMap();
_transitionStatus = new WeakMap();
_hasMounted = new WeakMap();
_transitionFrame = new WeakMap();
_PresenceManager_instances = new WeakSet();
clearTransitionFrame_fn = function() {
  if (__privateGet(this, _transitionFrame) === null) return;
  window.cancelAnimationFrame(__privateGet(this, _transitionFrame));
  __privateSet(this, _transitionFrame, null);
};
function Portal_consumer($$anchor, $$props) {
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children ?? noop);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
  const fallback = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback).opts;
}
class BitsConfigState {
  constructor(parent, opts) {
    __publicField(this, "opts");
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = boxWith(() => {
      var _a, _b;
      const value = (_a = getter(currentOpts)) == null ? void 0 : _a.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return (_b = getter(parent.opts)) == null ? void 0 : _b.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback) {
  return (getProp) => {
    const config = getBitsConfig();
    return boxWith(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$anchor, $$props) {
  push($$props, true);
  const to = resolvePortalToProp(() => $$props.to);
  const context = getAllContexts();
  let target = user_derived(getTarget);
  function getTarget() {
    if (!isBrowser || $$props.disabled) return null;
    let localTarget = null;
    if (typeof to.current === "string") {
      const target2 = document.querySelector(to.current);
      localTarget = target2;
    } else {
      localTarget = to.current;
    }
    return localTarget;
  }
  let instance;
  function unmountInstance() {
    if (instance) {
      unmount(instance);
      instance = null;
    }
  }
  watch([() => get$2(target), () => $$props.disabled], ([target2, disabled]) => {
    if (!target2 || disabled) {
      unmountInstance();
      return;
    }
    instance = mount(Portal_consumer, { target: target2, props: { children: $$props.children }, context });
    return () => {
      unmountInstance();
    };
  });
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($$props.disabled) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return (el == null ? void 0 : el.ownerDocument) ?? document;
}
function isClickTrulyOutside(event2, contentNode) {
  const { clientX, clientY } = event2;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
function getTabbableCandidates(container) {
  const nodes = [];
  const doc = getDocument(container);
  const walker = doc.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    // oxlint-disable-next-line no-explicit-any
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
const CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
const CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
const _DismissibleLayerState = class _DismissibleLayerState {
  constructor(opts) {
    __privateAdd(this, _DismissibleLayerState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _interactOutsideProp);
    __privateAdd(this, _behaviorType);
    __privateAdd(this, _interceptedEvents, { pointerdown: false });
    __privateAdd(this, _isResponsibleLayer, false);
    __privateAdd(this, _isFocusInsideDOMTree, false);
    __privateAdd(this, _documentObj);
    __privateAdd(this, _onFocusOutside);
    __privateAdd(this, _unsubClickListener, noop$1);
    __privateAdd(this, _handleFocus, (event2) => {
      if (event2.defaultPrevented) return;
      if (!this.opts.ref.current) return;
      afterTick(() => {
        var _a, _b;
        if (!this.opts.ref.current || __privateGet(this, _isTargetWithinLayer).call(this, event2.target)) return;
        if (event2.target && !__privateGet(this, _isFocusInsideDOMTree)) {
          (_b = (_a = __privateGet(this, _onFocusOutside)).current) == null ? void 0 : _b.call(_a, event2);
        }
      });
    });
    __privateAdd(this, _handleDismiss, (e) => {
      let event2 = e;
      if (event2.defaultPrevented) {
        event2 = createWrappedEvent(e);
      }
      __privateGet(this, _interactOutsideProp).current(e);
    });
    __privateAdd(this, _handleInteractOutside, debounce(
      (e) => {
        if (!this.opts.ref.current) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
        if (!__privateGet(this, _isResponsibleLayer) || __privateMethod(this, _DismissibleLayerState_instances, isAnyEventIntercepted_fn).call(this) || !isEventValid) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        let event2 = e;
        if (event2.defaultPrevented) {
          event2 = createWrappedEvent(event2);
        }
        if (__privateGet(this, _behaviorType).current !== "close" && __privateGet(this, _behaviorType).current !== "defer-otherwise-close") {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        if (e.pointerType === "touch") {
          __privateGet(this, _unsubClickListener).call(this);
          __privateSet(this, _unsubClickListener, on(__privateGet(this, _documentObj), "click", __privateGet(this, _handleDismiss), { once: true }));
        } else {
          __privateGet(this, _interactOutsideProp).current(event2);
        }
      },
      10
    ));
    __privateAdd(this, _markInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = true;
    });
    __privateAdd(this, _markNonInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = false;
    });
    __privateAdd(this, _markResponsibleLayer, () => {
      if (!this.opts.ref.current) return;
      __privateSet(this, _isResponsibleLayer, isResponsibleLayer(this.opts.ref.current));
    });
    __privateAdd(this, _isTargetWithinLayer, (target) => {
      if (!this.opts.ref.current) return false;
      return isOrContainsTarget(this.opts.ref.current, target);
    });
    __privateAdd(this, _resetState, debounce(
      () => {
        for (const eventType in __privateGet(this, _interceptedEvents)) {
          __privateGet(this, _interceptedEvents)[eventType] = false;
        }
        __privateSet(this, _isResponsibleLayer, false);
      },
      20
    ));
    __privateAdd(this, _onfocuscapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, true);
    });
    __privateAdd(this, _onblurcapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, false);
    });
    __publicField(this, "props", {
      onfocuscapture: __privateGet(this, _onfocuscapture),
      onblurcapture: __privateGet(this, _onblurcapture)
    });
    this.opts = opts;
    __privateSet(this, _behaviorType, opts.interactOutsideBehavior);
    __privateSet(this, _interactOutsideProp, opts.onInteractOutside);
    __privateSet(this, _onFocusOutside, opts.onFocusOutside);
    user_effect(() => {
      __privateSet(this, _documentObj, getOwnerDocument(this.opts.ref.current));
    });
    let unsubEvents = noop$1;
    const cleanup = () => {
      __privateGet(this, _resetState).call(this);
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      unsubEvents();
    };
    watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!this.opts.enabled.current || !this.opts.ref.current) return;
      afterSleep(1, () => {
        if (!this.opts.ref.current) return;
        globalThis.bitsDismissableLayers.set(this, __privateGet(this, _behaviorType));
        unsubEvents();
        unsubEvents = __privateMethod(this, _DismissibleLayerState_instances, addEventListeners_fn).call(this);
      });
      return cleanup;
    });
    onDestroyEffect(() => {
      __privateGet(this, _resetState).destroy();
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      __privateGet(this, _unsubClickListener).call(this);
      unsubEvents();
    });
  }
  static create(opts) {
    return new _DismissibleLayerState(opts);
  }
};
_interactOutsideProp = new WeakMap();
_behaviorType = new WeakMap();
_interceptedEvents = new WeakMap();
_isResponsibleLayer = new WeakMap();
_isFocusInsideDOMTree = new WeakMap();
_documentObj = new WeakMap();
_onFocusOutside = new WeakMap();
_unsubClickListener = new WeakMap();
_handleFocus = new WeakMap();
_DismissibleLayerState_instances = new WeakSet();
addEventListeners_fn = function() {
  return executeCallbacks(
    /**
     * CAPTURE INTERACTION START
     * mark interaction-start event as intercepted.
     * mark responsible layer during interaction start
     * to avoid checking if is responsible layer during interaction end
     * when a new floating element may have been opened.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markInterceptedEvent), __privateGet(this, _markResponsibleLayer)), { capture: true }),
    /**
     * BUBBLE INTERACTION START
     * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
     * to avoid prematurely checking if other events were intercepted.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markNonInterceptedEvent), __privateGet(this, _handleInteractOutside))),
    /**
     * HANDLE FOCUS OUTSIDE
     */
    on(__privateGet(this, _documentObj), "focusin", __privateGet(this, _handleFocus))
  );
};
_handleDismiss = new WeakMap();
_handleInteractOutside = new WeakMap();
_markInterceptedEvent = new WeakMap();
_markNonInterceptedEvent = new WeakMap();
_markResponsibleLayer = new WeakMap();
_isTargetWithinLayer = new WeakMap();
_resetState = new WeakMap();
isAnyEventIntercepted_fn = function() {
  const i = Object.values(__privateGet(this, _interceptedEvents)).some(Boolean);
  return i;
};
_onfocuscapture = new WeakMap();
_onblurcapture = new WeakMap();
let DismissibleLayerState = _DismissibleLayerState;
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostDismissableLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  const target = e.target;
  if (!isElementOrSVGElement(target)) return false;
  const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
  const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
  if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
  if ("button" in e && e.button === 0 && targetIsContextMenuTrigger && nodeIsContextMenu) {
    return true;
  }
  if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop2) => {
      if (prop2 === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop2 === "target") {
        return capturedTarget;
      }
      if (prop2 === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop2 === "defaultPrevented") {
        return isPrevented;
      }
      if (prop2 in target) {
        return target[prop2];
      }
      return e[prop2];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$1), onFocusOutside = prop($$props, "onFocusOutside", 3, noop$1), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false);
  const dismissibleLayerState = DismissibleLayerState.create({
    id: boxWith(() => $$props.id),
    interactOutsideBehavior: boxWith(() => interactOutsideBehavior()),
    onInteractOutside: boxWith(() => onInteractOutside()),
    enabled: boxWith(() => $$props.enabled),
    onFocusOutside: boxWith(() => onFocusOutside()),
    isValidEvent: boxWith(() => isValidEvent2()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop, () => ({ props: dismissibleLayerState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
const _EscapeLayerState = class _EscapeLayerState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _addEventListener, () => {
      return on(this.domContext.getDocument(), "keydown", __privateGet(this, _onkeydown), { passive: false });
    });
    __privateAdd(this, _onkeydown, (e) => {
      if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
      const clonedEvent = new KeyboardEvent(e.type, e);
      e.preventDefault();
      const behaviorType = this.opts.escapeKeydownBehavior.current;
      if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
      this.opts.onEscapeKeydown.current(clonedEvent);
    });
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop$1;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = __privateGet(this, _addEventListener).call(this);
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  static create(opts) {
    return new _EscapeLayerState(opts);
  }
};
_addEventListener = new WeakMap();
_onkeydown = new WeakMap();
let EscapeLayerState = _EscapeLayerState;
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$anchor, $$props) {
  push($$props, true);
  let escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "close"), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$1);
  EscapeLayerState.create({
    escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior()),
    onEscapeKeydown: boxWith(() => onEscapeKeydown()),
    enabled: boxWith(() => $$props.enabled),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop);
  append($$anchor, fragment);
  pop();
}
const _FocusScopeManager = class _FocusScopeManager {
  constructor() {
    __privateAdd(this, _scopeStack, simpleBox([]));
    __privateAdd(this, _focusHistory, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _preFocusHistory, /* @__PURE__ */ new WeakMap());
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new _FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      __privateGet(this, _preFocusHistory).set(scope, activeElement);
    }
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    __privateGet(this, _scopeStack).current.unshift(scope);
  }
  unregister(scope) {
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    const next = this.getActive();
    if (next) {
      next.resume();
    }
  }
  getActive() {
    return __privateGet(this, _scopeStack).current[0];
  }
  setFocusMemory(scope, element) {
    __privateGet(this, _focusHistory).set(scope, element);
  }
  getFocusMemory(scope) {
    return __privateGet(this, _focusHistory).get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
  setPreFocusMemory(scope, element) {
    __privateGet(this, _preFocusHistory).set(scope, element);
  }
  getPreFocusMemory(scope) {
    return __privateGet(this, _preFocusHistory).get(scope);
  }
  clearPreFocusMemory(scope) {
    __privateGet(this, _preFocusHistory).delete(scope);
  }
};
_scopeStack = new WeakMap();
_focusHistory = new WeakMap();
_preFocusHistory = new WeakMap();
__publicField(_FocusScopeManager, "instance");
let FocusScopeManager = _FocusScopeManager;
const _FocusScope = class _FocusScope {
  constructor(opts) {
    __privateAdd(this, _FocusScope_instances);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _container, null);
    __privateAdd(this, _manager, FocusScopeManager.getInstance());
    __privateAdd(this, _cleanupFns, []);
    __privateAdd(this, _opts3);
    __privateSet(this, _opts3, opts);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  pause() {
    __privateSet(this, _paused, true);
  }
  resume() {
    __privateSet(this, _paused, false);
  }
  mount(container) {
    if (__privateGet(this, _container)) {
      this.unmount();
    }
    __privateSet(this, _container, container);
    __privateGet(this, _manager).register(this);
    __privateMethod(this, _FocusScope_instances, setupEventListeners_fn).call(this);
    __privateMethod(this, _FocusScope_instances, handleOpenAutoFocus_fn).call(this);
  }
  unmount() {
    if (!__privateGet(this, _container)) return;
    __privateMethod(this, _FocusScope_instances, cleanup_fn2).call(this);
    __privateMethod(this, _FocusScope_instances, handleCloseAutoFocus_fn).call(this);
    __privateGet(this, _manager).unregister(this);
    __privateGet(this, _manager).clearPreFocusMemory(this);
    __privateSet(this, _container, null);
  }
  static use(opts) {
    let scope = null;
    watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
      if (ref && enabled) {
        if (!scope) {
          scope = new _FocusScope(opts);
        }
        scope.mount(ref);
      } else if (scope) {
        scope.unmount();
        scope = null;
      }
    });
    onDestroyEffect(() => {
      scope == null ? void 0 : scope.unmount();
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
};
_paused = new WeakMap();
_container = new WeakMap();
_manager = new WeakMap();
_cleanupFns = new WeakMap();
_opts3 = new WeakMap();
_FocusScope_instances = new WeakSet();
cleanup_fn2 = function() {
  for (const fn of __privateGet(this, _cleanupFns)) {
    fn();
  }
  __privateSet(this, _cleanupFns, []);
};
handleOpenAutoFocus_fn = function() {
  if (!__privateGet(this, _container)) return;
  const event2 = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _opts3).onOpenAutoFocus.current(event2);
  if (!event2.defaultPrevented) {
    requestAnimationFrame(() => {
      if (!__privateGet(this, _container)) return;
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      if (firstTabbable) {
        firstTabbable.focus();
        __privateGet(this, _manager).setFocusMemory(this, firstTabbable);
      } else {
        __privateGet(this, _container).focus();
      }
    });
  }
};
handleCloseAutoFocus_fn = function() {
  var _a, _b;
  const event2 = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
  (_b = (_a = __privateGet(this, _opts3).onCloseAutoFocus).current) == null ? void 0 : _b.call(_a, event2);
  if (!event2.defaultPrevented) {
    const preFocusedElement = __privateGet(this, _manager).getPreFocusMemory(this);
    if (preFocusedElement && document.contains(preFocusedElement)) {
      try {
        preFocusedElement.focus();
      } catch {
        document.body.focus();
      }
    }
  }
};
setupEventListeners_fn = function() {
  if (!__privateGet(this, _container) || !__privateGet(this, _opts3).trap.current) return;
  const container = __privateGet(this, _container);
  const doc = container.ownerDocument;
  const handleFocus = (e) => {
    if (__privateGet(this, _paused) || !__privateGet(this, _manager).isActiveScope(this)) return;
    const target = e.target;
    if (!target) return;
    const isInside = container.contains(target);
    if (isInside) {
      __privateGet(this, _manager).setFocusMemory(this, target);
    } else {
      const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
      if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
        e.preventDefault();
        lastFocused.focus();
      } else {
        const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
        const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
        (firstTabbable || firstFocusable || container).focus();
      }
    }
  };
  const handleKeydown = (e) => {
    if (!__privateGet(this, _opts3).loop || __privateGet(this, _paused) || e.key !== "Tab") return;
    if (!__privateGet(this, _manager).isActiveScope(this)) return;
    const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
    if (tabbables.length === 0) return;
    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    if (!e.shiftKey && doc.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && doc.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };
  __privateGet(this, _cleanupFns).push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
  const observer = new MutationObserver(() => {
    const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
    if (lastFocused && !container.contains(lastFocused)) {
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
      const elementToFocus = firstTabbable || firstFocusable;
      if (elementToFocus) {
        elementToFocus.focus();
        __privateGet(this, _manager).setFocusMemory(this, elementToFocus);
      } else {
        container.focus();
      }
    }
  });
  observer.observe(container, { childList: true, subtree: true });
  __privateGet(this, _cleanupFns).push(() => observer.disconnect());
};
getTabbables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return tabbable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
getFirstTabbable_fn = function() {
  const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
  return tabbables[0] || null;
};
getAllFocusables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return focusable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
let FocusScope = _FocusScope;
function Focus_scope($$anchor, $$props) {
  push($$props, true);
  let enabled = prop($$props, "enabled", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), loop = prop($$props, "loop", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop$1), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop$1);
  const focusScopeState = FocusScope.use({
    enabled: boxWith(() => enabled()),
    trap: boxWith(() => trapFocus()),
    loop: loop(),
    onCloseAutoFocus: boxWith(() => onCloseAutoFocus()),
    onOpenAutoFocus: boxWith(() => onOpenAutoFocus()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.focusScope ?? noop, () => ({ props: focusScopeState.props }));
  append($$anchor, fragment);
  pop();
}
const noopPointer = () => {
};
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
const _TextSelectionLayerState = class _TextSelectionLayerState {
  constructor(opts) {
    __privateAdd(this, _TextSelectionLayerState_instances);
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _unsubSelectionLock, noop$1);
    __privateAdd(this, _enabledSnapshot, false);
    __privateAdd(this, _onPointerDownSnapshot, noopPointer);
    __privateAdd(this, _onPointerUpSnapshot, noopPointer);
    __privateAdd(this, _pointerupUserHandler, (e) => {
      __privateGet(this, _onPointerUpSnapshot).call(this, e);
    });
    __privateAdd(this, _pointerdown, (e) => {
      const node = this.opts.ref.current;
      const target = e.target;
      if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !__privateGet(this, _enabledSnapshot)) return;
      if (!isHighestLayer(this) || !contains(node, target)) return;
      __privateGet(this, _onPointerDownSnapshot).call(this, e);
      if (e.defaultPrevented) return;
      __privateSet(this, _unsubSelectionLock, preventTextSelectionOverflow(node, this.domContext.getDocument().body));
    });
    __privateAdd(this, _resetSelectionLock, () => {
      __privateGet(this, _unsubSelectionLock).call(this);
      __privateSet(this, _unsubSelectionLock, noop$1);
    });
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop$1;
    watch(
      () => [
        this.opts.enabled.current,
        this.opts.onPointerDown.current,
        this.opts.onPointerUp.current
      ],
      ([enabled, onPointerDown, onPointerUp]) => {
        __privateSet(this, _enabledSnapshot, enabled);
        __privateSet(this, _onPointerDownSnapshot, onPointerDown);
        __privateSet(this, _onPointerUpSnapshot, onPointerUp);
        if (enabled) {
          globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
          unsubEvents();
          unsubEvents = __privateMethod(this, _TextSelectionLayerState_instances, addEventListeners_fn2).call(this);
        }
        return () => {
          __privateSet(this, _enabledSnapshot, false);
          unsubEvents();
          __privateGet(this, _resetSelectionLock).call(this);
          globalThis.bitsTextSelectionLayers.delete(this);
        };
      }
    );
  }
  static create(opts) {
    return new _TextSelectionLayerState(opts);
  }
};
_unsubSelectionLock = new WeakMap();
_enabledSnapshot = new WeakMap();
_onPointerDownSnapshot = new WeakMap();
_onPointerUpSnapshot = new WeakMap();
_TextSelectionLayerState_instances = new WeakSet();
addEventListeners_fn2 = function() {
  return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", __privateGet(this, _pointerdown)), on(this.domContext.getDocument(), "pointerup", composeHandlers(__privateGet(this, _resetSelectionLock), __privateGet(this, _pointerupUserHandler))));
};
_pointerupUserHandler = new WeakMap();
_pointerdown = new WeakMap();
_resetSelectionLock = new WeakMap();
let TextSelectionLayerState = _TextSelectionLayerState;
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$anchor, $$props) {
  push($$props, true);
  let preventOverflowTextSelection = prop($$props, "preventOverflowTextSelection", 3, true), onPointerDown = prop($$props, "onPointerDown", 3, noop$1), onPointerUp = prop($$props, "onPointerUp", 3, noop$1);
  TextSelectionLayerState.create({
    id: boxWith(() => $$props.id),
    onPointerDown: boxWith(() => onPointerDown()),
    onPointerUp: boxWith(() => onPointerUp()),
    enabled: boxWith(() => $$props.enabled && preventOverflowTextSelection()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop);
  append($$anchor, fragment);
  pop();
}
class SharedState {
  constructor(factory) {
    __privateAdd(this, _SharedState_instances);
    __privateAdd(this, _factory);
    __privateAdd(this, _subscribers, 0);
    __privateAdd(this, _state, state());
    __privateAdd(this, _scope);
    __privateSet(this, _factory, factory);
  }
  get(...args) {
    __privateSet(this, _subscribers, __privateGet(this, _subscribers) + 1);
    if (get$2(__privateGet(this, _state)) === void 0) {
      __privateSet(this, _scope, effect_root(() => {
        set(__privateGet(this, _state), __privateGet(this, _factory).call(this, ...args), true);
      }));
    }
    user_effect(() => {
      return () => {
        __privateMethod(this, _SharedState_instances, dispose_fn).call(this);
      };
    });
    return get$2(__privateGet(this, _state));
  }
}
_factory = new WeakMap();
_subscribers = new WeakMap();
_state = new WeakMap();
_scope = new WeakMap();
_SharedState_instances = new WeakSet();
dispose_fn = function() {
  __privateSet(this, _subscribers, __privateGet(this, _subscribers) - 1);
  if (__privateGet(this, _scope) && __privateGet(this, _subscribers) <= 0) {
    __privateGet(this, _scope).call(this);
    set(__privateGet(this, _state), void 0);
    __privateSet(this, _scope, void 0);
  }
};
const lockMap = new SvelteMap();
let initialBodyStyle = state(null);
let stopTouchMoveListener = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = boxWith(() => {
  for (const value of lockMap.values()) {
    if (value) return true;
  }
  return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
  function resetBodyStyle() {
    document.body.setAttribute("style", get$2(initialBodyStyle) ?? "");
    document.body.style.removeProperty("--scrollbar-width");
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    set(initialBodyStyle, null);
  }
  function cancelPendingCleanup() {
    if (cleanupTimeoutId === null) return;
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }
  function scheduleCleanupIfNoNewLocks(delay, callback) {
    cancelPendingCleanup();
    isInCleanupTransition = true;
    cleanupScheduledAt = Date.now();
    const currentCleanupId = cleanupScheduledAt;
    const cleanupFn = () => {
      cleanupTimeoutId = null;
      if (cleanupScheduledAt !== currentCleanupId) return;
      if (!isAnyLocked(lockMap)) {
        isInCleanupTransition = false;
        callback();
      } else {
        isInCleanupTransition = false;
      }
    };
    const actualDelay = delay === null ? 24 : delay;
    cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
  }
  function ensureInitialStyleCaptured() {
    if (get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition) {
      set(initialBodyStyle, document.body.getAttribute("style"), true);
    }
  }
  watch(() => anyLocked.current, () => {
    var _a, _b;
    if (!anyLocked.current) return;
    ensureInitialStyleCaptured();
    isInCleanupTransition = false;
    const htmlStyle = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(document.body);
    const hasStableGutter = ((_a = htmlStyle.scrollbarGutter) == null ? void 0 : _a.includes("stable")) || ((_b = bodyStyle.scrollbarGutter) == null ? void 0 : _b.includes("stable"));
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0 && !hasStableGutter) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
    }
    document.body.style.overflow = "hidden";
    if (isIOS) {
      stopTouchMoveListener = on(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  onDestroyEffect(() => {
    return () => {
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    };
  });
  return {
    get lockMap() {
      return lockMap;
    },
    resetBodyStyle,
    scheduleCleanupIfNoNewLocks,
    cancelPendingCleanup,
    ensureInitialStyleCaptured
  };
});
class BodyScrollLock {
  constructor(initialState, restoreScrollDelay = () => null) {
    __privateAdd(this, _id, useId());
    __privateAdd(this, _initialState);
    __privateAdd(this, _restoreScrollDelay, () => null);
    __privateAdd(this, _countState);
    __publicField(this, "locked");
    __privateSet(this, _initialState, initialState);
    __privateSet(this, _restoreScrollDelay, restoreScrollDelay);
    __privateSet(this, _countState, bodyLockStackCount.get());
    if (!__privateGet(this, _countState)) return;
    __privateGet(this, _countState).cancelPendingCleanup();
    __privateGet(this, _countState).ensureInitialStyleCaptured();
    __privateGet(this, _countState).lockMap.set(__privateGet(this, _id), __privateGet(this, _initialState) ?? false);
    this.locked = boxWith(() => __privateGet(this, _countState).lockMap.get(__privateGet(this, _id)) ?? false, (v) => __privateGet(this, _countState).lockMap.set(__privateGet(this, _id), v));
    onDestroyEffect(() => {
      __privateGet(this, _countState).lockMap.delete(__privateGet(this, _id));
      if (isAnyLocked(__privateGet(this, _countState).lockMap)) return;
      const restoreScrollDelay2 = __privateGet(this, _restoreScrollDelay).call(this);
      __privateGet(this, _countState).scheduleCleanupIfNoNewLocks(restoreScrollDelay2, () => {
        __privateGet(this, _countState).resetBodyStyle();
      });
    });
  }
}
_id = new WeakMap();
_initialState = new WeakMap();
_restoreScrollDelay = new WeakMap();
_countState = new WeakMap();
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$anchor, $$props) {
  push($$props, true);
  let preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null);
  if (preventScroll()) {
    new BodyScrollLock(preventScroll(), () => restoreScrollDelay());
  }
  pop();
}
const sides = ["top", "right", "bottom", "left"];
const alignments = ["start", "end"];
const placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide$1(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide$1(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide$1(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide$1(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state2, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state2;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state2);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const MAX_RESET_COUNT = 50;
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
    ...platform2,
    detectOverflow
  };
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset: reset2
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset2 && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset2 === "object") {
        if (reset2.placement) {
          statefulPlacement = reset2.placement;
        }
        if (reset2.rects) {
          rects = reset2.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset2.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state2) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state2;
    const {
      element,
      padding = 0
    } = evaluate(options, state2) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide$1(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state2) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state2;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide$1(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map((d) => {
        const alignment2 = getAlignment(d.placement);
        return [d.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d[0]) ? 2 : 3
      ).every((v) => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state2) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state2);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide$1(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide$1(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state2) {
      const {
        rects,
        platform: platform2
      } = state2;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state2);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform2.detectOverflow(state2, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform2.detectOverflow(state2, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
const inline$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state2) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state2;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state2);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide$1(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide$1(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state2, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state2;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide$1(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state2);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state2) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state2;
      const diffCoords = await convertValueToCoords(state2, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state2) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide$1(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state2,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state2) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state2;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state2);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide$1(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state2) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state2;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const side = getSide$1(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state2.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state2.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state2.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state2,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = (value) => !!value && value !== "none";
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const autoPlacement = autoPlacement$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const inline = inline$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
  if (typeof window === "undefined") return 1;
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = user_derived(() => get(options.open) ?? true);
  const middlewareOption = user_derived(() => get(options.middleware));
  const transformOption = user_derived(() => get(options.transform) ?? true);
  const placementOption = user_derived(() => get(options.placement) ?? "bottom");
  const strategyOption = user_derived(() => get(options.strategy) ?? "absolute");
  const sideOffsetOption = user_derived(() => get(options.sideOffset) ?? 0);
  const alignOffsetOption = user_derived(() => get(options.alignOffset) ?? 0);
  const reference = options.reference;
  let x = state(0);
  let y = state(0);
  const floating = simpleBox(null);
  let strategy = state(proxy(get$2(strategyOption)));
  let placement = state(proxy(get$2(placementOption)));
  let middlewareData = state(proxy({}));
  let isPositioned = state(false);
  let hasWhileMountedPosition = false;
  let updateRequestId = 0;
  const floatingStyles = user_derived(() => {
    const xVal = floating.current ? roundByDPR(floating.current, get$2(x)) : get$2(x);
    const yVal = floating.current ? roundByDPR(floating.current, get$2(y)) : get$2(y);
    if (get$2(transformOption)) {
      return {
        position: get$2(strategy),
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return {
      position: get$2(strategy),
      left: `${xVal}px`,
      top: `${yVal}px`
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (reference.current === null || floating.current === null) return;
    const referenceNode = reference.current;
    const floatingNode = floating.current;
    const requestId = ++updateRequestId;
    computePosition(referenceNode, floatingNode, {
      middleware: get$2(middlewareOption),
      placement: get$2(placementOption),
      strategy: get$2(strategyOption)
    }).then((position) => {
      if (requestId !== updateRequestId) return;
      if (reference.current !== referenceNode || floating.current !== floatingNode) return;
      const referenceHidden = isReferenceHidden(referenceNode);
      if (referenceHidden) {
        set(
          middlewareData,
          {
            ...get$2(middlewareData),
            hide: {
              // oxlint-disable-next-line no-explicit-any
              ...get$2(middlewareData).hide,
              referenceHidden: true
            }
          },
          true
        );
        return;
      }
      if (!get$2(openOption) && get$2(x) !== 0 && get$2(y) !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(get$2(sideOffsetOption)), Math.abs(get$2(alignOffsetOption)), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      set(x, position.x, true);
      set(y, position.y, true);
      set(strategy, position.strategy, true);
      set(placement, position.placement, true);
      set(middlewareData, position.middlewareData, true);
      set(isPositioned, true);
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
    updateRequestId++;
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (!get$2(openOption)) return;
    if (reference.current === null || floating.current === null) return;
    whileElementsMountedCleanup = whileElementsMountedOption(reference.current, floating.current, update);
  }
  function reset2() {
    if (!get$2(openOption) && floating.current === null) {
      set(isPositioned, false);
    }
  }
  function trackWhileMountedDeps() {
    return [
      get$2(middlewareOption),
      get$2(placementOption),
      get$2(strategyOption),
      get$2(sideOffsetOption),
      get$2(alignOffsetOption),
      get$2(openOption)
    ];
  }
  user_effect(() => {
    if (whileElementsMountedOption !== void 0) return;
    if (!get$2(openOption)) return;
    update();
  });
  user_effect(attach);
  user_effect(() => {
    if (whileElementsMountedOption === void 0) return;
    trackWhileMountedDeps();
    if (!get$2(openOption)) {
      hasWhileMountedPosition = false;
      return;
    }
    if (!get$2(isPositioned)) {
      hasWhileMountedPosition = false;
      return;
    }
    if (!hasWhileMountedPosition) {
      hasWhileMountedPosition = true;
      return;
    }
    update();
  });
  user_effect(reset2);
  user_effect(() => cleanup);
  return {
    floating,
    reference,
    get strategy() {
      return get$2(strategy);
    },
    get placement() {
      return get$2(placement);
    },
    get middlewareData() {
      return get$2(middlewareData);
    },
    get isPositioned() {
      return get$2(isPositioned);
    },
    get floatingStyles() {
      return get$2(floatingStyles);
    },
    get update() {
      return update;
    }
  };
}
function isReferenceHidden(node) {
  if (!(node instanceof Element)) return false;
  if (!node.isConnected) return true;
  if (node instanceof HTMLElement && node.hidden) return true;
  return node.getClientRects().length === 0;
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
  constructor() {
    __publicField(this, "anchorNode", simpleBox(null));
    __publicField(this, "customAnchorNode", simpleBox(null));
    __publicField(this, "triggerNode", simpleBox(null));
    user_effect(() => {
      if (this.customAnchorNode.current) {
        if (typeof this.customAnchorNode.current === "string") {
          this.anchorNode.current = document.querySelector(this.customAnchorNode.current);
        } else {
          this.anchorNode.current = this.customAnchorNode.current;
        }
      } else {
        this.anchorNode.current = this.triggerNode.current;
      }
    });
  }
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
}
const _FloatingContentState = class _FloatingContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    // nodes
    __publicField(this, "contentRef", simpleBox(null));
    __publicField(this, "wrapperRef", simpleBox(null));
    __publicField(this, "arrowRef", simpleBox(null));
    __publicField(this, "contentAttachment", attachRef(this.contentRef));
    __publicField(this, "wrapperAttachment", attachRef(this.wrapperRef));
    __publicField(this, "arrowAttachment", attachRef(this.arrowRef));
    // ids
    __publicField(this, "arrowId", simpleBox(useId()));
    __privateAdd(this, _transformedStyle, user_derived(() => {
      if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _updatePositionStrategy);
    __privateAdd(this, _arrowSize, new ElementSize(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _arrowWidth, user_derived(() => {
      var _a;
      return ((_a = __privateGet(this, _arrowSize)) == null ? void 0 : _a.width) ?? 0;
    }));
    __privateAdd(this, _arrowHeight, user_derived(() => {
      var _a;
      return ((_a = __privateGet(this, _arrowSize)) == null ? void 0 : _a.height) ?? 0;
    }));
    __privateAdd(this, _desiredPlacement, user_derived(() => {
      var _a;
      return ((_a = this.opts.side) == null ? void 0 : _a.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _boundary, user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _hasExplicitBoundaries, user_derived(() => get$2(__privateGet(this, _boundary)).length > 0));
    __privateAdd(this, _detectOverflowOptions, user_derived(() => ({
      padding: this.opts.collisionPadding.current,
      boundary: get$2(__privateGet(this, _boundary)).filter(isNotNull),
      altBoundary: this.hasExplicitBoundaries
    })));
    __privateAdd(this, _availableWidth, state(void 0));
    __privateAdd(this, _availableHeight, state(void 0));
    __privateAdd(this, _anchorWidth, state(void 0));
    __privateAdd(this, _anchorHeight, state(void 0));
    __privateAdd(this, _middleware, user_derived(() => [
      offset({
        mainAxis: this.opts.sideOffset.current + get$2(__privateGet(this, _arrowHeight)),
        alignmentAxis: this.opts.alignOffset.current
      }),
      this.opts.avoidCollisions.current && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
        ...this.detectOverflowOptions
      }),
      this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
      size({
        ...this.detectOverflowOptions,
        apply: ({ rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          set(__privateGet(this, _availableWidth), availableWidth, true);
          set(__privateGet(this, _availableHeight), availableHeight, true);
          set(__privateGet(this, _anchorWidth), anchorWidth, true);
          set(__privateGet(this, _anchorHeight), anchorHeight, true);
        }
      }),
      this.arrowRef.current && arrow({
        element: this.arrowRef.current,
        padding: this.opts.arrowPadding.current
      }),
      transformOrigin({
        arrowWidth: get$2(__privateGet(this, _arrowWidth)),
        arrowHeight: get$2(__privateGet(this, _arrowHeight))
      }),
      this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
    ].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _placedSide, user_derived(() => getSideFromPlacement(this.floating.placement)));
    __privateAdd(this, _placedAlign, user_derived(() => getAlignFromPlacement(this.floating.placement)));
    __privateAdd(this, _arrowX, user_derived(() => {
      var _a;
      return ((_a = this.floating.middlewareData.arrow) == null ? void 0 : _a.x) ?? 0;
    }));
    __privateAdd(this, _arrowY, user_derived(() => {
      var _a;
      return ((_a = this.floating.middlewareData.arrow) == null ? void 0 : _a.y) ?? 0;
    }));
    __privateAdd(this, _cannotCenterArrow, user_derived(() => {
      var _a;
      return ((_a = this.floating.middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
    }));
    __privateAdd(this, _contentZIndex, state());
    __privateAdd(this, _arrowBaseSide, user_derived(() => OPPOSITE_SIDE[this.placedSide]));
    __privateAdd(this, _wrapperProps, user_derived(() => {
      var _a, _b, _c;
      return {
        id: this.opts.wrapperId.current,
        "data-bits-floating-content-wrapper": "",
        style: {
          ...this.floating.floatingStyles,
          transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: this.contentZIndex,
          "--bits-floating-transform-origin": `${(_a = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a.x} ${(_b = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b.y}`,
          "--bits-floating-available-width": `${get$2(__privateGet(this, _availableWidth))}px`,
          "--bits-floating-available-height": `${get$2(__privateGet(this, _availableHeight))}px`,
          "--bits-floating-anchor-width": `${get$2(__privateGet(this, _anchorWidth))}px`,
          "--bits-floating-anchor-height": `${get$2(__privateGet(this, _anchorHeight))}px`,
          ...((_c = this.floating.middlewareData.hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", "pointer-events": "none" },
          ...get$2(__privateGet(this, _transformedStyle))
        },
        dir: this.opts.dir.current,
        ...this.wrapperAttachment
      };
    }));
    __privateAdd(this, _props, user_derived(() => ({
      "data-side": this.placedSide,
      "data-align": this.placedAlign,
      style: styleToString({ ...get$2(__privateGet(this, _transformedStyle)) }),
      ...this.contentAttachment
    })));
    __privateAdd(this, _arrowStyle, user_derived(() => ({
      position: "absolute",
      left: this.arrowX ? `${this.arrowX}px` : void 0,
      top: this.arrowY ? `${this.arrowY}px` : void 0,
      [this.arrowBaseSide]: 0,
      "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[this.placedSide],
      visibility: this.cannotCenterArrow ? "hidden" : void 0
    })));
    this.opts = opts;
    this.root = root2;
    __privateSet(this, _updatePositionStrategy, opts.updatePositionStrategy);
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => get$2(__privateGet(this, _desiredPlacement)),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...args) => {
        var _a;
        const cleanup = autoUpdate(...args, {
          animationFrame: ((_a = __privateGet(this, _updatePositionStrategy)) == null ? void 0 : _a.current) === "always"
        });
        return cleanup;
      },
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    user_effect(() => {
      var _a;
      if (!this.floating.isPositioned) return;
      (_a = this.opts.onPlaced) == null ? void 0 : _a.current();
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode || !this.opts.enabled.current) return;
      const win = getWindow$1(contentNode);
      const rafId = win.requestAnimationFrame(() => {
        if (this.contentRef.current !== contentNode || !this.opts.enabled.current) return;
        const zIndex = win.getComputedStyle(contentNode).zIndex;
        if (zIndex !== this.contentZIndex) {
          this.contentZIndex = zIndex;
        }
      });
      return () => {
        win.cancelAnimationFrame(rafId);
      };
    });
    user_effect(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new _FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new _FloatingContentState(opts, FloatingRootContext.get()));
  }
  get hasExplicitBoundaries() {
    return get$2(__privateGet(this, _hasExplicitBoundaries));
  }
  set hasExplicitBoundaries(value) {
    set(__privateGet(this, _hasExplicitBoundaries), value);
  }
  get detectOverflowOptions() {
    return get$2(__privateGet(this, _detectOverflowOptions));
  }
  set detectOverflowOptions(value) {
    set(__privateGet(this, _detectOverflowOptions), value);
  }
  get middleware() {
    return get$2(__privateGet(this, _middleware));
  }
  set middleware(value) {
    set(__privateGet(this, _middleware), value);
  }
  get placedSide() {
    return get$2(__privateGet(this, _placedSide));
  }
  set placedSide(value) {
    set(__privateGet(this, _placedSide), value);
  }
  get placedAlign() {
    return get$2(__privateGet(this, _placedAlign));
  }
  set placedAlign(value) {
    set(__privateGet(this, _placedAlign), value);
  }
  get arrowX() {
    return get$2(__privateGet(this, _arrowX));
  }
  set arrowX(value) {
    set(__privateGet(this, _arrowX), value);
  }
  get arrowY() {
    return get$2(__privateGet(this, _arrowY));
  }
  set arrowY(value) {
    set(__privateGet(this, _arrowY), value);
  }
  get cannotCenterArrow() {
    return get$2(__privateGet(this, _cannotCenterArrow));
  }
  set cannotCenterArrow(value) {
    set(__privateGet(this, _cannotCenterArrow), value);
  }
  get contentZIndex() {
    return get$2(__privateGet(this, _contentZIndex));
  }
  set contentZIndex(value) {
    set(__privateGet(this, _contentZIndex), value, true);
  }
  get arrowBaseSide() {
    return get$2(__privateGet(this, _arrowBaseSide));
  }
  set arrowBaseSide(value) {
    set(__privateGet(this, _arrowBaseSide), value);
  }
  get wrapperProps() {
    return get$2(__privateGet(this, _wrapperProps));
  }
  set wrapperProps(value) {
    set(__privateGet(this, _wrapperProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
  get arrowStyle() {
    return get$2(__privateGet(this, _arrowStyle));
  }
  set arrowStyle(value) {
    set(__privateGet(this, _arrowStyle), value);
  }
};
_transformedStyle = new WeakMap();
_updatePositionStrategy = new WeakMap();
_arrowSize = new WeakMap();
_arrowWidth = new WeakMap();
_arrowHeight = new WeakMap();
_desiredPlacement = new WeakMap();
_boundary = new WeakMap();
_hasExplicitBoundaries = new WeakMap();
_detectOverflowOptions = new WeakMap();
_availableWidth = new WeakMap();
_availableHeight = new WeakMap();
_anchorWidth = new WeakMap();
_anchorHeight = new WeakMap();
_middleware = new WeakMap();
_placedSide = new WeakMap();
_placedAlign = new WeakMap();
_arrowX = new WeakMap();
_arrowY = new WeakMap();
_cannotCenterArrow = new WeakMap();
_contentZIndex = new WeakMap();
_arrowBaseSide = new WeakMap();
_wrapperProps = new WeakMap();
_props = new WeakMap();
_arrowStyle = new WeakMap();
let FloatingContentState = _FloatingContentState;
class FloatingAnchorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    this.opts = opts;
    this.root = root2;
    if (opts.virtualEl && opts.virtualEl.current) {
      root2.triggerNode = boxFrom(opts.virtualEl.current);
    } else {
      root2.triggerNode = opts.ref;
    }
  }
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      var _a, _b, _c;
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
      const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingRootState.create(tooltip());
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_anchor($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingAnchorState.create(
    {
      id: boxWith(() => $$props.id),
      virtualEl: boxWith(() => $$props.virtualEl),
      ref: $$props.ref
    },
    tooltip()
  );
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content($$anchor, $$props) {
  push($$props, true);
  let side = prop($$props, "side", 3, "bottom"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), alignOffset = prop($$props, "alignOffset", 3, 0), arrowPadding = prop($$props, "arrowPadding", 3, 0), avoidCollisions = prop($$props, "avoidCollisions", 3, true), collisionBoundary = prop($$props, "collisionBoundary", 19, () => []), collisionPadding = prop($$props, "collisionPadding", 3, 0), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), onPlaced = prop($$props, "onPlaced", 3, () => {
  }), sticky = prop($$props, "sticky", 3, "partial"), updatePositionStrategy = prop($$props, "updatePositionStrategy", 3, "optimized"), strategy = prop($$props, "strategy", 3, "fixed"), dir = prop($$props, "dir", 3, "ltr"), style = prop($$props, "style", 19, () => ({})), wrapperId = prop($$props, "wrapperId", 19, useId), customAnchor = prop($$props, "customAnchor", 3, null), tooltip = prop($$props, "tooltip", 3, false);
  const contentState = FloatingContentState.create(
    {
      side: boxWith(() => side()),
      sideOffset: boxWith(() => sideOffset()),
      align: boxWith(() => align()),
      alignOffset: boxWith(() => alignOffset()),
      id: boxWith(() => $$props.id),
      arrowPadding: boxWith(() => arrowPadding()),
      avoidCollisions: boxWith(() => avoidCollisions()),
      collisionBoundary: boxWith(() => collisionBoundary()),
      collisionPadding: boxWith(() => collisionPadding()),
      hideWhenDetached: boxWith(() => hideWhenDetached()),
      onPlaced: boxWith(() => onPlaced()),
      sticky: boxWith(() => sticky()),
      updatePositionStrategy: boxWith(() => updatePositionStrategy()),
      strategy: boxWith(() => strategy()),
      dir: boxWith(() => dir()),
      style: boxWith(() => style()),
      enabled: boxWith(() => $$props.enabled),
      wrapperId: boxWith(() => wrapperId()),
      customAnchor: boxWith(() => customAnchor())
    },
    tooltip()
  );
  const mergedProps = user_derived(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop, () => ({ props: contentState.props, wrapperProps: get$2(mergedProps) }));
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content_static($$anchor, $$props) {
  push($$props, true);
  onMount(() => {
    var _a;
    (_a = $$props.onPlaced) == null ? void 0 : _a.call($$props);
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop, () => ({ props: {}, wrapperProps: {} }));
  append($$anchor, fragment);
  pop();
}
var rest_excludes$5 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "content",
  "isStatic",
  "onPlaced"
]);
function Popper_content($$anchor, $$props) {
  let isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$5);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Floating_layer_content_static($$anchor2, {
        get content() {
          return $$props.content;
        },
        get onPlaced() {
          return $$props.onPlaced;
        }
      });
    };
    var alternate = ($$anchor2) => {
      Floating_layer_content($$anchor2, spread_props(
        {
          get content() {
            return $$props.content;
          },
          get onPlaced() {
            return $$props.onPlaced;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if (isStatic()) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
}
var rest_excludes$4 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "popper",
  "onEscapeKeydown",
  "escapeKeydownBehavior",
  "preventOverflowTextSelection",
  "id",
  "onPointerDown",
  "onPointerUp",
  "side",
  "sideOffset",
  "align",
  "alignOffset",
  "arrowPadding",
  "avoidCollisions",
  "collisionBoundary",
  "collisionPadding",
  "sticky",
  "hideWhenDetached",
  "updatePositionStrategy",
  "strategy",
  "dir",
  "preventScroll",
  "wrapperId",
  "style",
  "onPlaced",
  "onInteractOutside",
  "onCloseAutoFocus",
  "onOpenAutoFocus",
  "onFocusOutside",
  "interactOutsideBehavior",
  "loop",
  "trapFocus",
  "isValidEvent",
  "customAnchor",
  "isStatic",
  "enabled",
  "ref",
  "tooltip",
  "contentPointerEvents"
]);
var root$4 = from_html(`<!> <!>`, 1);
function Popper_layer_inner($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), tooltip = prop($$props, "tooltip", 3, false), contentPointerEvents = prop($$props, "contentPointerEvents", 3, "auto"), restProps = rest_props($$props, rest_excludes$4);
  const resolvedPreventScroll = user_derived(() => $$props.preventScroll ?? true);
  const effectiveStrategy = user_derived(() => $$props.strategy ?? (get$2(resolvedPreventScroll) ? "fixed" : "absolute"));
  {
    const content = ($$anchor2, $$arg0) => {
      let floatingProps = () => ($$arg0 == null ? void 0 : $$arg0()).props;
      let wrapperProps = () => ($$arg0 == null ? void 0 : $$arg0()).wrapperProps;
      var fragment_1 = root$4();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          Scroll_lock($$anchor3, {
            get preventScroll() {
              return get$2(resolvedPreventScroll);
            }
          });
        };
        var consequent_1 = ($$anchor3) => {
          Scroll_lock($$anchor3, {
            get preventScroll() {
              return get$2(resolvedPreventScroll);
            }
          });
        };
        if_block(node, ($$render) => {
          if ($$props.forceMount && $$props.enabled) $$render(consequent);
          else if (!$$props.forceMount) $$render(consequent_1, 1);
        });
      }
      var node_1 = sibling(node, 2);
      {
        const focusScope = ($$anchor3, $$arg02) => {
          let focusScopeProps = () => ($$arg02 == null ? void 0 : $$arg02()).props;
          Escape_layer($$anchor3, {
            get onEscapeKeydown() {
              return $$props.onEscapeKeydown;
            },
            get escapeKeydownBehavior() {
              return $$props.escapeKeydownBehavior;
            },
            get enabled() {
              return $$props.enabled;
            },
            get ref() {
              return $$props.ref;
            },
            children: ($$anchor4, $$slotProps) => {
              {
                const children = ($$anchor5, $$arg03) => {
                  let dismissibleProps = () => ($$arg03 == null ? void 0 : $$arg03()).props;
                  Text_selection_layer($$anchor5, {
                    get id() {
                      return $$props.id;
                    },
                    get preventOverflowTextSelection() {
                      return $$props.preventOverflowTextSelection;
                    },
                    get onPointerDown() {
                      return $$props.onPointerDown;
                    },
                    get onPointerUp() {
                      return $$props.onPointerUp;
                    },
                    get enabled() {
                      return $$props.enabled;
                    },
                    get ref() {
                      return $$props.ref;
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var fragment_7 = comment();
                      var node_2 = first_child(fragment_7);
                      {
                        let $0 = user_derived(() => ({
                          props: mergeProps(restProps, floatingProps(), dismissibleProps(), focusScopeProps(), { style: { pointerEvents: contentPointerEvents() } }),
                          wrapperProps: wrapperProps()
                        }));
                        snippet(node_2, () => $$props.popper ?? noop, () => get$2($0));
                      }
                      append($$anchor6, fragment_7);
                    },
                    $$slots: { default: true }
                  });
                };
                Dismissible_layer($$anchor4, {
                  get id() {
                    return $$props.id;
                  },
                  get onInteractOutside() {
                    return $$props.onInteractOutside;
                  },
                  get onFocusOutside() {
                    return $$props.onFocusOutside;
                  },
                  get interactOutsideBehavior() {
                    return interactOutsideBehavior();
                  },
                  get isValidEvent() {
                    return isValidEvent2();
                  },
                  get enabled() {
                    return $$props.enabled;
                  },
                  get ref() {
                    return $$props.ref;
                  },
                  children,
                  $$slots: { default: true }
                });
              }
            },
            $$slots: { default: true }
          });
        };
        Focus_scope(node_1, {
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get loop() {
            return $$props.loop;
          },
          get enabled() {
            return $$props.enabled;
          },
          get trapFocus() {
            return trapFocus();
          },
          get forceMount() {
            return $$props.forceMount;
          },
          get ref() {
            return $$props.ref;
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
      append($$anchor2, fragment_1);
    };
    Popper_content($$anchor, {
      get isStatic() {
        return isStatic();
      },
      get id() {
        return $$props.id;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return get$2(effectiveStrategy);
      },
      get dir() {
        return $$props.dir;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get enabled() {
        return $$props.enabled;
      },
      get tooltip() {
        return tooltip();
      },
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
var rest_excludes$3 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "popper",
  "open",
  "onEscapeKeydown",
  "escapeKeydownBehavior",
  "preventOverflowTextSelection",
  "id",
  "onPointerDown",
  "onPointerUp",
  "side",
  "sideOffset",
  "align",
  "alignOffset",
  "arrowPadding",
  "avoidCollisions",
  "collisionBoundary",
  "collisionPadding",
  "sticky",
  "hideWhenDetached",
  "updatePositionStrategy",
  "strategy",
  "dir",
  "preventScroll",
  "wrapperId",
  "style",
  "onPlaced",
  "onInteractOutside",
  "onCloseAutoFocus",
  "onOpenAutoFocus",
  "onFocusOutside",
  "interactOutsideBehavior",
  "loop",
  "trapFocus",
  "isValidEvent",
  "customAnchor",
  "isStatic",
  "ref",
  "shouldRender"
]);
function Popper_layer($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$3);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Popper_layer_inner($$anchor2, spread_props(
        {
          get popper() {
            return $$props.popper;
          },
          get onEscapeKeydown() {
            return $$props.onEscapeKeydown;
          },
          get escapeKeydownBehavior() {
            return $$props.escapeKeydownBehavior;
          },
          get preventOverflowTextSelection() {
            return $$props.preventOverflowTextSelection;
          },
          get id() {
            return $$props.id;
          },
          get onPointerDown() {
            return $$props.onPointerDown;
          },
          get onPointerUp() {
            return $$props.onPointerUp;
          },
          get side() {
            return $$props.side;
          },
          get sideOffset() {
            return $$props.sideOffset;
          },
          get align() {
            return $$props.align;
          },
          get alignOffset() {
            return $$props.alignOffset;
          },
          get arrowPadding() {
            return $$props.arrowPadding;
          },
          get avoidCollisions() {
            return $$props.avoidCollisions;
          },
          get collisionBoundary() {
            return $$props.collisionBoundary;
          },
          get collisionPadding() {
            return $$props.collisionPadding;
          },
          get sticky() {
            return $$props.sticky;
          },
          get hideWhenDetached() {
            return $$props.hideWhenDetached;
          },
          get updatePositionStrategy() {
            return $$props.updatePositionStrategy;
          },
          get strategy() {
            return $$props.strategy;
          },
          get dir() {
            return $$props.dir;
          },
          get preventScroll() {
            return $$props.preventScroll;
          },
          get wrapperId() {
            return $$props.wrapperId;
          },
          get style() {
            return $$props.style;
          },
          get onPlaced() {
            return $$props.onPlaced;
          },
          get customAnchor() {
            return customAnchor();
          },
          get isStatic() {
            return isStatic();
          },
          get enabled() {
            return $$props.open;
          },
          get onInteractOutside() {
            return $$props.onInteractOutside;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get interactOutsideBehavior() {
            return interactOutsideBehavior();
          },
          get loop() {
            return $$props.loop;
          },
          get trapFocus() {
            return trapFocus();
          },
          get isValidEvent() {
            return isValidEvent2();
          },
          get onFocusOutside() {
            return $$props.onFocusOutside;
          },
          forceMount: false,
          get ref() {
            return $$props.ref;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if ($$props.shouldRender) $$render(consequent);
    });
  }
  append($$anchor, fragment);
}
var rest_excludes$2 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "popper",
  "onEscapeKeydown",
  "escapeKeydownBehavior",
  "preventOverflowTextSelection",
  "id",
  "onPointerDown",
  "onPointerUp",
  "side",
  "sideOffset",
  "align",
  "alignOffset",
  "arrowPadding",
  "avoidCollisions",
  "collisionBoundary",
  "collisionPadding",
  "sticky",
  "hideWhenDetached",
  "updatePositionStrategy",
  "strategy",
  "dir",
  "preventScroll",
  "wrapperId",
  "style",
  "onPlaced",
  "onInteractOutside",
  "onCloseAutoFocus",
  "onOpenAutoFocus",
  "onFocusOutside",
  "interactOutsideBehavior",
  "loop",
  "trapFocus",
  "isValidEvent",
  "customAnchor",
  "isStatic",
  "enabled"
]);
function Popper_layer_force_mount($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$2);
  Popper_layer_inner($$anchor, spread_props(
    {
      get popper() {
        return $$props.popper;
      },
      get onEscapeKeydown() {
        return $$props.onEscapeKeydown;
      },
      get escapeKeydownBehavior() {
        return $$props.escapeKeydownBehavior;
      },
      get preventOverflowTextSelection() {
        return $$props.preventOverflowTextSelection;
      },
      get id() {
        return $$props.id;
      },
      get onPointerDown() {
        return $$props.onPointerDown;
      },
      get onPointerUp() {
        return $$props.onPointerUp;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get preventScroll() {
        return $$props.preventScroll;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get isStatic() {
        return isStatic();
      },
      get enabled() {
        return $$props.enabled;
      },
      get onInteractOutside() {
        return $$props.onInteractOutside;
      },
      get onCloseAutoFocus() {
        return $$props.onCloseAutoFocus;
      },
      get onOpenAutoFocus() {
        return $$props.onOpenAutoFocus;
      },
      get interactOutsideBehavior() {
        return interactOutsideBehavior();
      },
      get loop() {
        return $$props.loop;
      },
      get trapFocus() {
        return trapFocus();
      },
      get isValidEvent() {
        return isValidEvent2();
      },
      get onFocusOutside() {
        return $$props.onFocusOutside;
      }
    },
    () => restProps,
    { forceMount: true }
  ));
}
function Mounted($$anchor, $$props) {
  push($$props, true);
  let mounted = prop($$props, "mounted", 15, false), onMountedChange = prop($$props, "onMountedChange", 3, noop$1);
  onMountEffect(() => {
    mounted(true);
    onMountedChange()(true);
    return () => {
      mounted(false);
      onMountedChange()(false);
    };
  });
  pop();
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] ?? [0, 0];
    const [xj, yj] = polygon[j] ?? [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInsideRect(point, rect) {
  return point[0] >= rect.left && point[0] <= rect.right && point[1] >= rect.top && point[1] <= rect.bottom;
}
function getSide(triggerRect, contentRect) {
  const triggerCenterX = triggerRect.left + triggerRect.width / 2;
  const triggerCenterY = triggerRect.top + triggerRect.height / 2;
  const contentCenterX = contentRect.left + contentRect.width / 2;
  const contentCenterY = contentRect.top + contentRect.height / 2;
  const deltaX = contentCenterX - triggerCenterX;
  const deltaY = contentCenterY - triggerCenterY;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX > 0 ? "right" : "left";
  }
  return deltaY > 0 ? "bottom" : "top";
}
class SafePolygon {
  constructor(opts) {
    __privateAdd(this, _SafePolygon_instances);
    __privateAdd(this, _opts4);
    __privateAdd(this, _buffer);
    __privateAdd(this, _transitIntentTimeout);
    // tracks the cursor position when leaving trigger or content
    __privateAdd(this, _exitPoint, null);
    // tracks what we're moving toward: "content" when leaving trigger, "trigger" when leaving content
    __privateAdd(this, _exitTarget, null);
    __privateAdd(this, _transitTargets, []);
    __privateAdd(this, _trackedTriggerNode, null);
    __privateAdd(this, _leaveFallbackRafId, null);
    __privateAdd(this, _transitIntentTimeoutId, null);
    __privateSet(this, _opts4, opts);
    __privateSet(this, _buffer, opts.buffer ?? 1);
    const transitIntentTimeout = opts.transitIntentTimeout;
    __privateSet(this, _transitIntentTimeout, typeof transitIntentTimeout === "number" && transitIntentTimeout > 0 ? transitIntentTimeout : null);
    watch([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled]) => {
      if (!triggerNode || !contentNode || !enabled) {
        __privateSet(this, _trackedTriggerNode, null);
        __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
        return;
      }
      if (__privateGet(this, _trackedTriggerNode) && __privateGet(this, _trackedTriggerNode) !== triggerNode) {
        __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
      }
      __privateSet(this, _trackedTriggerNode, triggerNode);
      const doc = getDocument(triggerNode);
      const handlePointerMove = (e) => {
        __privateMethod(this, _SafePolygon_instances, onPointerMove_fn).call(this, [e.clientX, e.clientY], triggerNode, contentNode);
      };
      const handleTriggerLeave = (e) => {
        var _a, _b;
        const target = e.relatedTarget;
        if (isElement$1(target) && contentNode.contains(target)) {
          return;
        }
        const ignoredTargets = ((_b = (_a = __privateGet(this, _opts4)).ignoredTargets) == null ? void 0 : _b.call(_a)) ?? [];
        if (isElement$1(target) && ignoredTargets.some((n) => n === target || n.contains(target))) {
          return;
        }
        __privateSet(this, _transitTargets, isElement$1(target) && ignoredTargets.length > 0 ? ignoredTargets.filter((n) => target.contains(n)) : []);
        __privateSet(this, _exitPoint, [e.clientX, e.clientY]);
        __privateSet(this, _exitTarget, "content");
        __privateMethod(this, _SafePolygon_instances, scheduleLeaveFallback_fn).call(this);
      };
      const handleTriggerEnter = () => {
        __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
      };
      const handleContentEnter = () => {
        __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
      };
      const handleContentLeave = (e) => {
        const target = e.relatedTarget;
        if (isElement$1(target) && triggerNode.contains(target)) {
          return;
        }
        __privateSet(this, _exitPoint, [e.clientX, e.clientY]);
        __privateSet(this, _exitTarget, "trigger");
        __privateMethod(this, _SafePolygon_instances, scheduleLeaveFallback_fn).call(this);
      };
      return [
        on(doc, "pointermove", handlePointerMove),
        on(triggerNode, "pointerleave", handleTriggerLeave),
        on(triggerNode, "pointerenter", handleTriggerEnter),
        on(contentNode, "pointerenter", handleContentEnter),
        on(contentNode, "pointerleave", handleContentLeave)
      ].reduce(
        (acc, cleanup) => () => {
          acc();
          cleanup();
        },
        () => {
        }
      );
    });
  }
}
_opts4 = new WeakMap();
_buffer = new WeakMap();
_transitIntentTimeout = new WeakMap();
_exitPoint = new WeakMap();
_exitTarget = new WeakMap();
_transitTargets = new WeakMap();
_trackedTriggerNode = new WeakMap();
_leaveFallbackRafId = new WeakMap();
_transitIntentTimeoutId = new WeakMap();
_SafePolygon_instances = new WeakSet();
cancelLeaveFallback_fn = function() {
  if (__privateGet(this, _leaveFallbackRafId) !== null) {
    cancelAnimationFrame(__privateGet(this, _leaveFallbackRafId));
    __privateSet(this, _leaveFallbackRafId, null);
  }
};
scheduleLeaveFallback_fn = function() {
  __privateMethod(this, _SafePolygon_instances, cancelLeaveFallback_fn).call(this);
  __privateSet(this, _leaveFallbackRafId, requestAnimationFrame(() => {
    __privateSet(this, _leaveFallbackRafId, null);
    if (!__privateGet(this, _exitPoint) || !__privateGet(this, _exitTarget)) return;
    __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
    __privateGet(this, _opts4).onPointerExit();
  }));
};
cancelTransitIntentTimeout_fn = function() {
  if (__privateGet(this, _transitIntentTimeoutId) !== null) {
    clearTimeout(__privateGet(this, _transitIntentTimeoutId));
    __privateSet(this, _transitIntentTimeoutId, null);
  }
};
scheduleTransitIntentTimeout_fn = function() {
  if (__privateGet(this, _transitIntentTimeout) === null) return;
  __privateMethod(this, _SafePolygon_instances, cancelTransitIntentTimeout_fn).call(this);
  __privateSet(this, _transitIntentTimeoutId, window.setTimeout(
    () => {
      __privateSet(this, _transitIntentTimeoutId, null);
      if (!__privateGet(this, _exitPoint) || !__privateGet(this, _exitTarget)) return;
      __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
      __privateGet(this, _opts4).onPointerExit();
    },
    __privateGet(this, _transitIntentTimeout)
  ));
};
onPointerMove_fn = function(clientPoint, triggerNode, contentNode) {
  if (!__privateGet(this, _exitPoint) || !__privateGet(this, _exitTarget)) return;
  __privateMethod(this, _SafePolygon_instances, cancelLeaveFallback_fn).call(this);
  __privateMethod(this, _SafePolygon_instances, scheduleTransitIntentTimeout_fn).call(this);
  const triggerRect = triggerNode.getBoundingClientRect();
  const contentRect = contentNode.getBoundingClientRect();
  if (__privateGet(this, _exitTarget) === "content" && isInsideRect(clientPoint, contentRect)) {
    __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
    return;
  }
  if (__privateGet(this, _exitTarget) === "trigger" && isInsideRect(clientPoint, triggerRect)) {
    __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
    return;
  }
  if (__privateGet(this, _exitTarget) === "content" && __privateGet(this, _transitTargets).length > 0) {
    for (const transitTarget of __privateGet(this, _transitTargets)) {
      const transitRect = transitTarget.getBoundingClientRect();
      if (isInsideRect(clientPoint, transitRect)) return;
      const transitSide = getSide(triggerRect, transitRect);
      const transitCorridor = __privateMethod(this, _SafePolygon_instances, getCorridorPolygon_fn).call(this, triggerRect, transitRect, transitSide);
      if (transitCorridor && isPointInPolygon(clientPoint, transitCorridor)) return;
    }
  }
  const side = getSide(triggerRect, contentRect);
  const corridorPoly = __privateMethod(this, _SafePolygon_instances, getCorridorPolygon_fn).call(this, triggerRect, contentRect, side);
  if (corridorPoly && isPointInPolygon(clientPoint, corridorPoly)) {
    return;
  }
  const targetRect = __privateGet(this, _exitTarget) === "content" ? contentRect : triggerRect;
  const safePoly = __privateMethod(this, _SafePolygon_instances, getSafePolygon_fn).call(this, __privateGet(this, _exitPoint), targetRect, side, __privateGet(this, _exitTarget));
  if (isPointInPolygon(clientPoint, safePoly)) {
    return;
  }
  __privateMethod(this, _SafePolygon_instances, clearTracking_fn).call(this);
  __privateGet(this, _opts4).onPointerExit();
};
clearTracking_fn = function() {
  __privateSet(this, _exitPoint, null);
  __privateSet(this, _exitTarget, null);
  __privateSet(this, _transitTargets, []);
  __privateMethod(this, _SafePolygon_instances, cancelLeaveFallback_fn).call(this);
  __privateMethod(this, _SafePolygon_instances, cancelTransitIntentTimeout_fn).call(this);
};
/**
 * Creates a rectangular corridor between trigger and content
 * This prevents closing when cursor is in the gap between them
 */
getCorridorPolygon_fn = function(triggerRect, contentRect, side) {
  const buffer = __privateGet(this, _buffer);
  switch (side) {
    case "top":
      return [
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          triggerRect.top
        ],
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          contentRect.bottom
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          contentRect.bottom
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          triggerRect.top
        ]
      ];
    case "bottom":
      return [
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          triggerRect.bottom
        ],
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          contentRect.top
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          contentRect.top
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          triggerRect.bottom
        ]
      ];
    case "left":
      return [
        [
          triggerRect.left,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.right,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.right,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ],
        [
          triggerRect.left,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ]
      ];
    case "right":
      return [
        [
          triggerRect.right,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.left,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.left,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ],
        [
          triggerRect.right,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ]
      ];
  }
};
/**
 * Creates a triangular/trapezoidal safe zone from the exit point to the target
 */
getSafePolygon_fn = function(exitPoint, targetRect, side, exitTarget) {
  const buffer = __privateGet(this, _buffer) * 4;
  const [x, y] = exitPoint;
  const effectiveSide = exitTarget === "trigger" ? __privateMethod(this, _SafePolygon_instances, flipSide_fn).call(this, side) : side;
  switch (effectiveSide) {
    case "top":
      return [
        [x - buffer, y + buffer],
        [x + buffer, y + buffer],
        [targetRect.right + buffer, targetRect.bottom],
        [targetRect.right + buffer, targetRect.top],
        [targetRect.left - buffer, targetRect.top],
        [targetRect.left - buffer, targetRect.bottom]
      ];
    case "bottom":
      return [
        [x - buffer, y - buffer],
        [x + buffer, y - buffer],
        [targetRect.right + buffer, targetRect.top],
        [targetRect.right + buffer, targetRect.bottom],
        [targetRect.left - buffer, targetRect.bottom],
        [targetRect.left - buffer, targetRect.top]
      ];
    case "left":
      return [
        [x + buffer, y - buffer],
        [x + buffer, y + buffer],
        [targetRect.right, targetRect.bottom + buffer],
        [targetRect.left, targetRect.bottom + buffer],
        [targetRect.left, targetRect.top - buffer],
        [targetRect.right, targetRect.top - buffer]
      ];
    case "right":
      return [
        [x - buffer, y - buffer],
        [x - buffer, y + buffer],
        [targetRect.left, targetRect.bottom + buffer],
        [targetRect.right, targetRect.bottom + buffer],
        [targetRect.right, targetRect.top - buffer],
        [targetRect.left, targetRect.top - buffer]
      ];
  }
};
flipSide_fn = function(side) {
  switch (side) {
    case "top":
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left";
  }
};
const linkPreviewAttrs = createBitsAttrs({ component: "link-preview", parts: ["content", "trigger"] });
const LinkPreviewRootContext = new Context("LinkPreview.Root");
const _LinkPreviewRootState = class _LinkPreviewRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _hasSelection, state(false));
    __privateAdd(this, _isPointerDownOnContent, state(false));
    __privateAdd(this, _containsSelection, state(false));
    __publicField(this, "timeout", null);
    __privateAdd(this, _contentNode, state(null));
    __privateAdd(this, _contentMounted, state(false));
    __publicField(this, "contentPresence");
    __privateAdd(this, _triggerNode, state(null));
    __publicField(this, "isOpening", false);
    __publicField(this, "domContext", new DOMContext(() => null));
    this.opts = opts;
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    watch(() => this.opts.open.current, (isOpen) => {
      if (!isOpen) {
        this.hasSelection = false;
        return;
      }
      if (!this.domContext) return;
      const handlePointerUp = () => {
        this.containsSelection = false;
        this.isPointerDownOnContent = false;
        afterSleep(1, () => {
          var _a;
          const isSelection = ((_a = this.domContext.getDocument().getSelection()) == null ? void 0 : _a.toString()) !== "";
          if (isSelection) {
            this.hasSelection = true;
          } else {
            this.hasSelection = false;
          }
        });
      };
      const unsubListener = on(this.domContext.getDocument(), "pointerup", handlePointerUp);
      if (!this.contentNode) return;
      const tabCandidates = getTabbableCandidates(this.contentNode);
      for (const candidate of tabCandidates) {
        candidate.setAttribute("tabindex", "-1");
      }
      return () => {
        unsubListener();
        this.hasSelection = false;
        this.isPointerDownOnContent = false;
      };
    });
  }
  static create(opts) {
    return LinkPreviewRootContext.set(new _LinkPreviewRootState(opts));
  }
  get hasSelection() {
    return get$2(__privateGet(this, _hasSelection));
  }
  set hasSelection(value) {
    set(__privateGet(this, _hasSelection), value, true);
  }
  get isPointerDownOnContent() {
    return get$2(__privateGet(this, _isPointerDownOnContent));
  }
  set isPointerDownOnContent(value) {
    set(__privateGet(this, _isPointerDownOnContent), value, true);
  }
  get containsSelection() {
    return get$2(__privateGet(this, _containsSelection));
  }
  set containsSelection(value) {
    set(__privateGet(this, _containsSelection), value, true);
  }
  get contentNode() {
    return get$2(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode), value, true);
  }
  get contentMounted() {
    return get$2(__privateGet(this, _contentMounted));
  }
  set contentMounted(value) {
    set(__privateGet(this, _contentMounted), value, true);
  }
  get triggerNode() {
    return get$2(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode), value, true);
  }
  clearTimeout() {
    if (this.timeout) {
      this.domContext.clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  handleOpen() {
    this.clearTimeout();
    if (this.opts.open.current || this.opts.disabled.current) return;
    this.isOpening = true;
    this.timeout = this.domContext.setTimeout(
      () => {
        if (this.isOpening) {
          this.opts.open.current = true;
          this.isOpening = false;
        }
      },
      this.opts.openDelay.current
    );
  }
  immediateClose() {
    this.clearTimeout();
    this.isOpening = false;
    this.opts.open.current = false;
  }
  handleClose() {
    this.isOpening = false;
    this.clearTimeout();
    if (!this.isPointerDownOnContent && !this.hasSelection) {
      this.timeout = this.domContext.setTimeout(
        () => {
          this.opts.open.current = false;
        },
        this.opts.closeDelay.current
      );
    }
  }
};
_hasSelection = new WeakMap();
_isPointerDownOnContent = new WeakMap();
_containsSelection = new WeakMap();
_contentNode = new WeakMap();
_contentMounted = new WeakMap();
_triggerNode = new WeakMap();
let LinkPreviewRootState = _LinkPreviewRootState;
const _LinkPreviewTriggerState = class _LinkPreviewTriggerState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props2, user_derived(() => {
      var _a;
      return {
        id: this.opts.id.current,
        "aria-haspopup": "dialog",
        "aria-expanded": boolToStr(this.root.opts.open.current),
        "data-state": getDataOpenClosed(this.root.opts.open.current),
        "aria-controls": (_a = this.root.contentNode) == null ? void 0 : _a.id,
        role: "button",
        [linkPreviewAttrs.trigger]: "",
        onpointerenter: this.onpointerenter,
        onfocus: this.onfocus,
        onblur: this.onblur,
        onpointerleave: this.onpointerleave,
        ...this.attachment
      };
    }));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
    this.root.domContext = new DOMContext(opts.ref);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
  }
  static create(opts) {
    return new _LinkPreviewTriggerState(opts, LinkPreviewRootContext.get());
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onpointerleave(e) {
    if (isTouch(e)) return;
    if (!this.root.contentMounted || !this.root.opts.open.current) {
      this.root.immediateClose();
    }
  }
  onfocus(e) {
    if (!isFocusVisible(e.currentTarget)) return;
    this.root.handleOpen();
  }
  onblur(_) {
    this.root.handleClose();
  }
  get props() {
    return get$2(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
};
_props2 = new WeakMap();
let LinkPreviewTriggerState = _LinkPreviewTriggerState;
const _LinkPreviewContentState = class _LinkPreviewContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __publicField(this, "onInteractOutside", (e) => {
      this.opts.onInteractOutside.current(e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onEscapeKeydown", (e) => {
      var _a, _b;
      (_b = (_a = this.opts.onEscapeKeydown).current) == null ? void 0 : _b.call(_a, e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onOpenAutoFocus", (e) => {
      e.preventDefault();
    });
    __publicField(this, "onCloseAutoFocus", (e) => {
      e.preventDefault();
    });
    __privateAdd(this, _snippetProps, user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props3, user_derived(() => ({
      id: this.opts.id.current,
      tabindex: -1,
      "data-state": getDataOpenClosed(this.root.opts.open.current),
      ...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
      [linkPreviewAttrs.content]: "",
      onpointerdown: this.onpointerdown,
      onpointerenter: this.onpointerenter,
      onfocusout: this.onfocusout,
      ...this.attachment
    })));
    __publicField(this, "popperProps", {
      onInteractOutside: this.onInteractOutside,
      onEscapeKeydown: this.onEscapeKeydown,
      onOpenAutoFocus: this.onOpenAutoFocus,
      onCloseAutoFocus: this.onCloseAutoFocus
    });
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
    this.root.domContext = new DOMContext(opts.ref);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onfocusout = this.onfocusout.bind(this);
    new SafePolygon({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.opts.ref.current,
      enabled: () => this.root.opts.open.current,
      onPointerExit: () => {
        this.root.handleClose();
      }
    });
    onDestroyEffect(() => {
      this.root.clearTimeout();
    });
  }
  static create(opts) {
    return new _LinkPreviewContentState(opts, LinkPreviewRootContext.get());
  }
  onpointerdown(e) {
    const target = e.target;
    if (!isElement$1(target)) return;
    if (e.currentTarget.contains(target)) {
      this.root.containsSelection = true;
    }
    this.root.hasSelection = true;
    this.root.isPointerDownOnContent = true;
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onfocusout(e) {
    e.preventDefault();
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
};
_snippetProps = new WeakMap();
_props3 = new WeakMap();
let LinkPreviewContentState = _LinkPreviewContentState;
function Link_preview($$anchor, $$props) {
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop$1), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop$1), openDelay = prop($$props, "openDelay", 3, 700), closeDelay = prop($$props, "closeDelay", 3, 300);
  LinkPreviewRootState.create({
    disabled: boxWith(() => disabled()),
    open: boxWith(() => open(), (v) => {
      open(v);
      onOpenChange()(v);
    }),
    openDelay: boxWith(() => openDelay()),
    closeDelay: boxWith(() => closeDelay()),
    onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
  });
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Floating_layer, ($$anchor2, FloatingLayer_Root) => {
    FloatingLayer_Root($$anchor2, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        snippet(node_1, () => $$props.children ?? noop);
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
var rest_excludes$1 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "children",
  "child",
  "id",
  "ref",
  "side",
  "sideOffset",
  "align",
  "avoidCollisions",
  "arrowPadding",
  "sticky",
  "hideWhenDetached",
  "collisionPadding",
  "onInteractOutside",
  "onEscapeKeydown",
  "forceMount",
  "style"
]);
var root$3 = from_html(`<div><div><!></div></div>`);
var root_1$1 = from_html(`<!> <!>`, 1);
function Link_preview_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), side = prop($$props, "side", 3, "top"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), avoidCollisions = prop($$props, "avoidCollisions", 3, true), arrowPadding = prop($$props, "arrowPadding", 3, 0), sticky = prop($$props, "sticky", 3, "partial"), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), collisionPadding = prop($$props, "collisionPadding", 3, 0), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$1), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$1), forceMount = prop($$props, "forceMount", 3, false), restProps = rest_props($$props, rest_excludes$1);
  const contentState = LinkPreviewContentState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    onInteractOutside: boxWith(() => onInteractOutside()),
    onEscapeKeydown: boxWith(() => onEscapeKeydown())
  });
  const floatingProps = user_derived(() => ({
    side: side(),
    sideOffset: sideOffset(),
    align: align(),
    avoidCollisions: avoidCollisions(),
    arrowPadding: arrowPadding(),
    sticky: sticky(),
    hideWhenDetached: hideWhenDetached(),
    collisionPadding: collisionPadding()
  }));
  const mergedProps = user_derived(() => mergeProps(restProps, get$2(floatingProps), contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => ($$arg0 == null ? void 0 : $$arg0()).props;
          let wrapperProps = () => ($$arg0 == null ? void 0 : $$arg0()).wrapperProps;
          const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("link-preview") }, { style: $$props.style }));
          var fragment_2 = root_1$1();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $0 = user_derived(() => ({
                  props: get$2(finalProps),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$2($0));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root$3();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, -1);
            });
          }
          var node_4 = sibling(node_1, 2);
          Mounted(node_4, {
            get mounted() {
              return contentState.root.contentMounted;
            },
            set mounted($$value) {
              contentState.root.contentMounted = $$value;
            }
          });
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
          get ref() {
            return contentState.opts.ref;
          },
          get enabled() {
            return contentState.root.opts.open.current;
          },
          get id() {
            return id();
          },
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: true,
          get shouldRender() {
            return contentState.shouldRender;
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var consequent_3 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => ($$arg0 == null ? void 0 : $$arg0()).props;
          let wrapperProps = () => ($$arg0 == null ? void 0 : $$arg0()).wrapperProps;
          const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("link-preview") }, { style: $$props.style }));
          var fragment_5 = root_1$1();
          var node_5 = first_child(fragment_5);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_6 = comment();
              var node_6 = first_child(fragment_6);
              {
                let $0 = user_derived(() => ({
                  props: get$2(finalProps),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_6, () => $$props.child, () => get$2($0));
              }
              append($$anchor4, fragment_6);
            };
            var alternate_1 = ($$anchor4) => {
              var div_2 = root$3();
              attribute_effect(div_2, () => ({ ...wrapperProps() }));
              var div_3 = child(div_2);
              attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
              var node_7 = child(div_3);
              snippet(node_7, () => $$props.children ?? noop);
              reset(div_3);
              reset(div_2);
              append($$anchor4, div_2);
            };
            if_block(node_5, ($$render) => {
              if ($$props.child) $$render(consequent_2);
              else $$render(alternate_1, -1);
            });
          }
          var node_8 = sibling(node_5, 2);
          Mounted(node_8, {
            get mounted() {
              return contentState.root.contentMounted;
            },
            set mounted($$value) {
              contentState.root.contentMounted = $$value;
            }
          });
          append($$anchor3, fragment_5);
        };
        Popper_layer($$anchor2, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
          get ref() {
            return contentState.opts.ref;
          },
          get open() {
            return contentState.root.opts.open.current;
          },
          get id() {
            return id();
          },
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: false,
          get shouldRender() {
            return contentState.shouldRender;
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else if (!forceMount()) $$render(consequent_3, 1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var rest_excludes = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "ref",
  "id",
  "child",
  "children"
]);
var root$2 = from_html(`<a><!></a>`);
function Link_preview_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), restProps = rest_props($$props, rest_excludes);
  const triggerState = LinkPreviewTriggerState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props));
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Floating_layer_anchor, ($$anchor2, FloatingLayer_Anchor) => {
    FloatingLayer_Anchor($$anchor2, {
      get id() {
        return id();
      },
      get ref() {
        return triggerState.opts.ref;
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        {
          var consequent = ($$anchor4) => {
            var fragment_2 = comment();
            var node_2 = first_child(fragment_2);
            snippet(node_2, () => $$props.child, () => ({ props: get$2(mergedProps) }));
            append($$anchor4, fragment_2);
          };
          var alternate = ($$anchor4) => {
            var a = root$2();
            attribute_effect(a, () => ({ ...get$2(mergedProps) }));
            var node_3 = child(a);
            snippet(node_3, () => $$props.children ?? noop);
            reset(a);
            append($$anchor4, a);
          };
          if_block(node_1, ($$render) => {
            if ($$props.child) $$render(consequent);
            else $$render(alternate, -1);
          });
        }
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
var root$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"></path></svg>`);
function ChatBubbleOval($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root = from_html(`<div><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_1 = from_html(`<div><span class="relative flex size-2"><span class="relative inline-flex rounded-full size-2 bg-gray-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_2 = from_html(`<div class=" self-center shrink-0"><!></div>`);
var root_3 = from_html(`<div class="w-full gap-2 px-2.5 py-1.5 rounded-xl bg-gray-50 dark:text-white dark:bg-gray-900/50 text-black transition text-xs flex items-center"><!> <div class=" self-center line-clamp-2 flex-1 text-left"> </div></div>`);
var root_4 = from_html(`<div class="mx-2 mt-2"><!></div>`);
var root_5 = from_html(`<div class=" self-center line-clamp-3 flex-1 text-left text-xs"> </div>`);
var root_6 = from_html(`<div class="mx-3.5 mt-2"><!></div>`);
var root_7 = from_html(`<div class="px-1.5 py-0.5 rounded-lg bg-gray-50 dark:text-white dark:bg-gray-900/50 text-black transition text-xs"> </div>`);
var root_8 = from_html(`<div class="mx-3.5 mt-2 flex flex-wrap gap-0.5 max-h-20 overflow-y-auto"></div>`);
var root_9 = from_html(`<hr class="border-gray-100/50 dark:border-gray-800/50 my-2.5"/> <div class=" flex flex-col w-full px-2.5 items-center"><button class="w-full text-left px-3 py-1.5 rounded-xl border border-gray-100/50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-850 transition flex items-center gap-2 text-sm" type="button"><div><!></div> <div class="font-medium"> </div></button></div>`, 1);
var root_10 = from_html(`<div class="py-3"><div class=" flex gap-3.5 w-full px-3 items-center"><div class=" items-center flex shrink-0"><img class=" size-14 object-cover rounded-xl" alt="profile"/></div> <div class=" flex flex-col w-full flex-1"><div class="mb-0.5 font-medium line-clamp-1 pr-2"> </div> <div class=" flex items-center gap-2"><!></div></div></div> <!> <!> <!> <!></div>`);
function UserStatus($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $_user = () => store_get(user, "$_user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let user$1 = prop($$props, "user", 8, null);
  const directMessageHandler = async () => {
    if (!user$1()) {
      return;
    }
    const res = await getDMChannelByUserId(localStorage.token, user$1().id).catch((error) => {
      /* @__PURE__ */ console.error("Error fetching DM channel:", error);
      return null;
    });
    if (res) {
      goto(`/channels/${res.id}`);
    }
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_6 = ($$anchor2) => {
      var div = root_10();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var img = child(div_2);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var div_4 = child(div_3);
      var text = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var node_1 = child(div_5);
      {
        var consequent = ($$anchor3) => {
          var fragment_1 = root();
          var span = sibling(first_child(fragment_1), 2);
          var text_1 = child(span, true);
          reset(span);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Active")))]);
          append($$anchor3, fragment_1);
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = root_1();
          var span_1 = sibling(first_child(fragment_2), 2);
          var text_2 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Away")))]);
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(user$1()), untrack(() => {
            var _a;
            return (_a = user$1()) == null ? void 0 : _a.is_active;
          })) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(div_5);
      reset(div_3);
      reset(div_1);
      var node_2 = sibling(div_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_6 = root_4();
          var node_3 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(user$1()), untrack(() => {
              var _a;
              return (_a = user$1()) == null ? void 0 : _a.status_message;
            })));
            Tooltip(node_3, {
              get content() {
                return get$2($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var div_7 = root_3();
                var node_4 = child(div_7);
                {
                  var consequent_1 = ($$anchor5) => {
                    var div_8 = root_2();
                    var node_5 = child(div_8);
                    {
                      let $02 = derived_safe_equal(() => (deep_read_state(user$1()), untrack(() => {
                        var _a;
                        return (_a = user$1()) == null ? void 0 : _a.status_emoji;
                      })));
                      Emoji(node_5, {
                        className: "size-4",
                        get shortCode() {
                          return get$2($02);
                        }
                      });
                    }
                    reset(div_8);
                    append($$anchor5, div_8);
                  };
                  if_block(node_4, ($$render) => {
                    if (deep_read_state(user$1()), untrack(() => {
                      var _a;
                      return (_a = user$1()) == null ? void 0 : _a.status_emoji;
                    })) $$render(consequent_1);
                  });
                }
                var div_9 = sibling(node_4, 2);
                var text_3 = child(div_9, true);
                reset(div_9);
                reset(div_7);
                template_effect(() => set_text(text_3, (deep_read_state(user$1()), untrack(() => {
                  var _a;
                  return (_a = user$1()) == null ? void 0 : _a.status_message;
                }))));
                append($$anchor4, div_7);
              },
              $$slots: { default: true }
            });
          }
          reset(div_6);
          append($$anchor3, div_6);
        };
        if_block(node_2, ($$render) => {
          if (deep_read_state(user$1()), untrack(() => {
            var _a, _b;
            return ((_a = user$1()) == null ? void 0 : _a.status_emoji) || ((_b = user$1()) == null ? void 0 : _b.status_message);
          })) $$render(consequent_2);
        });
      }
      var node_6 = sibling(node_2, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_10 = root_6();
          var node_7 = child(div_10);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(user$1()), untrack(() => {
              var _a;
              return (_a = user$1()) == null ? void 0 : _a.bio;
            })));
            Tooltip(node_7, {
              get content() {
                return get$2($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var div_11 = root_5();
                var text_4 = child(div_11, true);
                reset(div_11);
                template_effect(() => set_text(text_4, (deep_read_state(user$1()), untrack(() => {
                  var _a;
                  return (_a = user$1()) == null ? void 0 : _a.bio;
                }))));
                append($$anchor4, div_11);
              },
              $$slots: { default: true }
            });
          }
          reset(div_10);
          append($$anchor3, div_10);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(user$1()), untrack(() => {
            var _a;
            return (_a = user$1()) == null ? void 0 : _a.bio;
          })) $$render(consequent_3);
        });
      }
      var node_8 = sibling(node_6, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_12 = root_8();
          each(div_12, 5, () => (deep_read_state(user$1()), untrack(() => user$1().groups)), index, ($$anchor4, group) => {
            var div_13 = root_7();
            var text_5 = child(div_13, true);
            reset(div_13);
            template_effect(() => set_text(text_5, (get$2(group), untrack(() => get$2(group).name))));
            append($$anchor4, div_13);
          });
          reset(div_12);
          append($$anchor3, div_12);
        };
        if_block(node_8, ($$render) => {
          if (deep_read_state(user$1()), untrack(() => {
            var _a;
            return (((_a = user$1()) == null ? void 0 : _a.groups) ?? []).length > 0;
          })) $$render(consequent_4);
        });
      }
      var node_9 = sibling(node_8, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_3 = root_9();
          var div_14 = sibling(first_child(fragment_3), 2);
          var button = child(div_14);
          var div_15 = child(button);
          var node_10 = child(div_15);
          ChatBubbleOval(node_10, { className: "size-4" });
          reset(div_15);
          var div_16 = sibling(div_15, 2);
          var text_6 = child(div_16, true);
          reset(div_16);
          reset(button);
          reset(div_14);
          template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Message")))]);
          event("click", button, () => {
            directMessageHandler();
          });
          append($$anchor3, fragment_3);
        };
        if_block(node_9, ($$render) => {
          if ($_user(), deep_read_state(user$1()), untrack(() => {
            var _a;
            return ((_a = $_user()) == null ? void 0 : _a.id) !== user$1().id;
          })) $$render(consequent_5);
        });
      }
      reset(div);
      template_effect(() => {
        set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(user$1()), untrack(() => {
          var _a;
          return `${REXPRO_API_BASE_URL}/users/${(_a = user$1()) == null ? void 0 : _a.id}/profile/image`;
        })));
        set_text(text, (deep_read_state(user$1()), untrack(() => user$1().name)));
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (user$1()) $$render(consequent_6);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function UserStatusLinkPreview($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let id = prop($$props, "id", 8, null);
  let side = prop($$props, "side", 8, "top");
  let align = prop($$props, "align", 8, "start");
  let sideOffset = prop($$props, "sideOffset", 8, 6);
  let user2 = mutable_source(null);
  onMount(async () => {
    if (id()) {
      set(user2, await getUserInfoById(localStorage.token, id()).catch((error) => {
        /* @__PURE__ */ console.error("Error fetching user by ID:", error);
        return null;
      }));
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Portal($$anchor2, {
        children: ($$anchor3, $$slotProps) => {
          Link_preview_content($$anchor3, {
            class: "w-[260px] rounded-2xl border border-gray-100  dark:border-gray-800 z-[9999] bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
            get side() {
              return side();
            },
            get align() {
              return align();
            },
            get sideOffset() {
              return sideOffset();
            },
            children: ($$anchor4, $$slotProps2) => {
              UserStatus($$anchor4, {
                get user() {
                  return get$2(user2);
                }
              });
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    };
    if_block(node, ($$render) => {
      if (get$2(user2)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  ChatBubbleOval as C,
  Link_preview as L,
  Portal as P,
  UserStatusLinkPreview as U,
  Link_preview_trigger as a,
  arrow as b,
  size as c,
  autoPlacement as d,
  computePosition as e,
  flip as f,
  autoUpdate as g,
  hide as h,
  inline as i,
  Link_preview_content as j,
  offset as o,
  shift as s
};
