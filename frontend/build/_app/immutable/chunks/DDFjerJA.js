const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BdoKi0bE.js","./CQrtv1eE.js","./MP_eVmKb.js","./BeGenu0j.js","./kJfXdUOR.js","./DdMOiXWm.js"])))=>i.map(i=>d[i]);
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, p as push, o as onMount, j as onDestroy, k as get, w as set, c as child, z as sibling, r as reset, b as pop, q as mutable_source, d as set_text, u as untrack, y as event, f as from_html, aV as mutate, i as getContext, l as legacy_pre_effect, m as deep_read_state, n as legacy_pre_effect_reset, s as setup_stores, A as tick, h as first_child, aR as next, aW as text, x as derived_safe_equal, g as comment, e as store_get, aS as createEventDispatcher } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import { p as preventDefault, s as stopPropagation } from "./CGgk3ROl.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
import { G as pdfWorkerUrl, H as formatFileSize, I as getLineCount } from "./X0cYWxFO.js";
import { s as settings } from "./BJ3rUC-5.js";
import { _ as __vitePreload } from "./CQrtv1eE.js";
import { e as each, i as index } from "./qTQza25_.js";
import { h as html } from "./BAc5ZjUQ.js";
import { b as bind_this } from "./BSYzg88z.js";
import purify from "./C5m5pE-D.js";
import { g as getKnowledgeById } from "./BxjVhKR8.js";
import { g as getFileById, a as getFileContentById } from "./BipwcWe2.js";
import { p as panzoom, R as Reset, P as PanzoomContainer, C as CodeBlock, M as Markdown } from "./DR1P1jn4.js";
import { M as Modal } from "./tmhUPuyr.js";
import { X as XMark } from "./DAqPThR3.js";
import { S as Switch_1 } from "./l6D7S60E.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { d as dayjs2 } from "./BeGenu0j.js";
import { S as Spinner } from "./gJqE84vs.js";
import { b as bind_prop } from "./CoY6LkZW.js";
import { F as Folder, D as DocumentPage } from "./Cuik1dqC.js";
var root$5 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"></path><path d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"></path><path d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"></path></svg>`);
function Database($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10H16M8 6H12M8 14H11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function PageEdit($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path></svg>`);
function ChatBubble($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_html(`<div class="absolute inset-0 flex items-center justify-center"><!></div>`);
var root_1$2 = from_html(`<div class="absolute inset-0 flex items-center justify-center text-sm text-red-500"> </div>`);
var root_2$2 = from_html(`<div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-0.5 rounded-lg bg-white/90 dark:bg-gray-850/90 backdrop-blur-sm shadow-lg border border-gray-200/60 dark:border-gray-700/60 px-1 py-0.5"><button class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-500 dark:text-gray-400" aria-label="Zoom out"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3.5"><path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd"></path></svg></button> <button class="px-1.5 py-1 min-w-[3rem] text-center text-[11px] font-medium text-gray-500 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition tabular-nums" aria-label="Reset zoom"> </button> <button class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-500 dark:text-gray-400" aria-label="Zoom in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3.5"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path></svg></button></div>`);
var root_3$2 = from_html(`<div><!> <div class="overflow-y-auto h-full"><div class="w-full"></div></div> <!></div>`);
function PDFViewer($$anchor, $$props) {
  push($$props, false);
  let url = prop($$props, "url", 8, null);
  let data = prop($$props, "data", 8, null);
  let className = prop($$props, "className", 8, "w-full h-[70vh]");
  let outerContainer = mutable_source();
  let sceneElement = mutable_source();
  let loading = mutable_source(true);
  let error = mutable_source("");
  let pdfDoc = mutable_source(null);
  let pzInstance = null;
  let zoomLevel = mutable_source(1);
  let rerenderTimer = null;
  let lastRenderedZoom = 1;
  let textLayerInstances = [];
  const initPanzoom = () => {
    if (pzInstance) {
      pzInstance.dispose();
    }
    if (get(sceneElement)) {
      pzInstance = panzoom(get(sceneElement), {
        bounds: true,
        boundsPadding: 0.1,
        zoomSpeed: 0.065,
        beforeWheel: (e) => {
          if (!e.ctrlKey && !e.metaKey) {
            return true;
          }
          return false;
        },
        beforeMouseDown: (e) => {
          const transform = pzInstance == null ? void 0 : pzInstance.getTransform();
          if (transform && Math.abs(transform.scale - 1) < 0.01) {
            return true;
          }
          return false;
        }
      });
      pzInstance.on("zoom", () => {
        var _a;
        set(zoomLevel, ((_a = pzInstance == null ? void 0 : pzInstance.getTransform()) == null ? void 0 : _a.scale) ?? 1);
        if (rerenderTimer) clearTimeout(rerenderTimer);
        rerenderTimer = setTimeout(
          () => {
            if (Math.abs(get(zoomLevel) - lastRenderedZoom) > 0.05) {
              rerenderPages(get(zoomLevel));
            }
          },
          300
        );
      });
    }
  };
  const zoomIn = () => {
    if (!pzInstance || !get(outerContainer)) return;
    const cx = get(outerContainer).clientWidth / 2;
    const cy = get(outerContainer).clientHeight / 2;
    pzInstance.zoomTo(cx, cy, 1.25);
    set(zoomLevel, pzInstance.getTransform().scale);
  };
  const zoomOut = () => {
    if (!pzInstance || !get(outerContainer)) return;
    const cx = get(outerContainer).clientWidth / 2;
    const cy = get(outerContainer).clientHeight / 2;
    pzInstance.zoomTo(cx, cy, 0.8);
    set(zoomLevel, pzInstance.getTransform().scale);
  };
  const resetView = () => {
    if (pzInstance) {
      pzInstance.moveTo(0, 0);
      pzInstance.zoomAbs(0, 0, 1);
      set(zoomLevel, 1);
      rerenderPages(1);
    }
  };
  const rerenderPages = async (forZoom) => {
    var _a;
    if (!get(pdfDoc) || !get(sceneElement)) return;
    const pdfjs = await __vitePreload(() => import("./CruFmpkt.js"), true ? [] : void 0, import.meta.url);
    const dpr = window.devicePixelRatio || 1;
    const containerWidth = ((_a = get(outerContainer)) == null ? void 0 : _a.clientWidth) || 800;
    const pageWrappers = get(sceneElement).querySelectorAll(".pdf-page-wrapper");
    for (const tl of textLayerInstances) {
      try {
        tl.cancel();
      } catch (_) {
      }
    }
    textLayerInstances = [];
    for (let i = 0; i < pageWrappers.length; i++) {
      const page = await get(pdfDoc).getPage(i + 1);
      const viewport = page.getViewport({ scale: 1 });
      const cssScale = containerWidth / viewport.width;
      const renderScale = cssScale * forZoom * dpr;
      const scaledViewport = page.getViewport({ scale: renderScale });
      const cssViewport = page.getViewport({ scale: cssScale });
      const wrapper = pageWrappers[i];
      wrapper.style.setProperty("--scale-factor", String(cssViewport.scale));
      const canvas = wrapper.querySelector("canvas");
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
      }
      const textLayerDiv = wrapper.querySelector(".textLayer");
      if (textLayerDiv) {
        textLayerDiv.innerHTML = "";
        const textContent = await page.getTextContent();
        const textLayer = new pdfjs.TextLayer({
          textContentSource: textContent,
          container: textLayerDiv,
          viewport: cssViewport
        });
        await textLayer.render();
        textLayerInstances.push(textLayer);
      }
    }
    lastRenderedZoom = forZoom;
  };
  const renderAllPages = async () => {
    var _a;
    if (!get(pdfDoc) || !get(sceneElement)) return;
    mutate(sceneElement, get(sceneElement).innerHTML = "");
    for (const tl of textLayerInstances) {
      try {
        tl.cancel();
      } catch (_) {
      }
    }
    textLayerInstances = [];
    const pdfjs = await __vitePreload(() => import("./CruFmpkt.js"), true ? [] : void 0, import.meta.url);
    const dpr = window.devicePixelRatio || 1;
    for (let i = 1; i <= get(pdfDoc).numPages; i++) {
      const page = await get(pdfDoc).getPage(i);
      const viewport = page.getViewport({ scale: 1 });
      const containerWidth = ((_a = get(outerContainer)) == null ? void 0 : _a.clientWidth) || 800;
      const cssScale = containerWidth / viewport.width;
      const renderScale = cssScale * dpr;
      const scaledViewport = page.getViewport({ scale: renderScale });
      const cssViewport = page.getViewport({ scale: cssScale });
      const wrapper = document.createElement("div");
      wrapper.className = "pdf-page-wrapper";
      wrapper.style.position = "relative";
      wrapper.style.width = `${Math.round(cssScale * viewport.width)}px`;
      wrapper.style.height = `${Math.round(cssScale * viewport.height)}px`;
      wrapper.style.display = "block";
      wrapper.style.setProperty("--scale-factor", String(cssViewport.scale));
      if (i > 1) {
        wrapper.style.marginTop = "4px";
      }
      const canvas = document.createElement("canvas");
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      canvas.style.width = `${Math.round(cssScale * viewport.width)}px`;
      canvas.style.height = `${Math.round(cssScale * viewport.height)}px`;
      canvas.style.display = "block";
      wrapper.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
      const textLayerDiv = document.createElement("div");
      textLayerDiv.className = "textLayer";
      wrapper.appendChild(textLayerDiv);
      const textContent = await page.getTextContent();
      const textLayer = new pdfjs.TextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: cssViewport
      });
      await textLayer.render();
      textLayerInstances.push(textLayer);
      get(sceneElement).appendChild(wrapper);
    }
    lastRenderedZoom = 1;
    initPanzoom();
  };
  const loadPdf = async () => {
    if (!url() && !data()) return;
    set(loading, true);
    set(error, "");
    try {
      const pdfjs = await __vitePreload(() => import("./CruFmpkt.js"), true ? [] : void 0, import.meta.url);
      pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
      let pdfData;
      if (data()) {
        pdfData = data();
      } else {
        const res = await fetch(url(), { credentials: "include" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        pdfData = await res.arrayBuffer();
      }
      set(pdfDoc, await pdfjs.getDocument({ data: pdfData }).promise);
      await renderAllPages();
    } catch (e) {
      /* @__PURE__ */ console.error("PDF render error:", e);
      set(error, "Failed to load PDF.");
    } finally {
      set(loading, false);
    }
  };
  onMount(() => {
    loadPdf();
  });
  onDestroy(() => {
    if (rerenderTimer) clearTimeout(rerenderTimer);
    pzInstance == null ? void 0 : pzInstance.dispose();
    for (const tl of textLayerInstances) {
      try {
        tl.cancel();
      } catch (_) {
      }
    }
    textLayerInstances = [];
    if (get(pdfDoc)) {
      get(pdfDoc).destroy();
      set(pdfDoc, null);
    }
  });
  var $$exports = { resetView };
  init();
  var div = root_3$2();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root$2();
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var consequent_1 = ($$anchor2) => {
      var div_2 = root_1$2();
      var text2 = child(div_2, true);
      reset(div_2);
      template_effect(() => set_text(text2, get(error)));
      append($$anchor2, div_2);
    };
    if_block(node, ($$render) => {
      if (get(loading)) $$render(consequent);
      else if (get(error)) $$render(consequent_1, 1);
    });
  }
  var div_3 = sibling(node, 2);
  var div_4 = child(div_3);
  bind_this(div_4, ($$value) => set(sceneElement, $$value), () => get(sceneElement));
  reset(div_3);
  bind_this(div_3, ($$value) => set(outerContainer, $$value), () => get(outerContainer));
  var node_2 = sibling(div_3, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_5 = root_2$2();
      var button = child(div_5);
      var button_1 = sibling(button, 2);
      var text_1 = child(button_1);
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      reset(div_5);
      template_effect(($0) => set_text(text_1, `${$0 ?? ""}%`), [
        () => (get(zoomLevel), untrack(() => Math.round(get(zoomLevel) * 100)))
      ]);
      event("click", button, zoomOut);
      event("click", button_1, resetView);
      event("click", button_2, zoomIn);
      append($$anchor2, div_5);
    };
    if_block(node_2, ($$render) => {
      if (!get(loading) && !get(error) && get(pdfDoc)) $$render(consequent_2);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, `relative ${className() ?? ""}`));
  append($$anchor, div);
  bind_prop($$props, "resetView", resetView);
  return pop($$exports);
}
var root$1 = from_html(`<div class="capitalize shrink-0"> </div> •`, 1);
var root_1$1 = from_html(`<div class="line-clamp-1"> </div> •`, 1);
var root_2$1 = from_html(`<div class="capitalize shrink-0"> </div>`);
var root_3$1 = from_html(`<!> <!> <!>`, 1);
var root_4$1 = from_html(`<div class="capitalize shrink-0"><!></div> <div class="flex items-center gap-1 shrink-0"> </div>`, 1);
var root_5$1 = from_html(`<div class="flex items-center gap-1.5 text-xs"><!> <!></div>`);
var root_6$1 = from_html(`<div class=" self-end"><!></div>`);
var root_7$1 = from_html(`<div class="flex items-center gap-2 mb-2"><div class="flex-shrink-0 text-xs"> </div></div>`);
var root_8$1 = from_html(`<div></div>`);
var root_9$1 = from_html(`<div class="flex mb-2.5 scrollbar-none overflow-x-auto w-full border-b border-gray-50 dark:border-gray-850/30 text-center text-sm font-medium bg-transparent dark:text-gray-200"><button type="button"> </button> <button type="button"> </button></div>`);
var root_10 = from_html(`<button class="p-1.5 rounded-lg bg-white/80 dark:bg-gray-850/80 backdrop-blur-sm shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-500 dark:text-gray-400"><!></button>`);
var root_11 = from_html(`<img class="w-full object-contain rounded-lg" loading="lazy" draggable="false"/>`);
var root_12 = from_html(`<div class="relative w-full max-h-[70vh] overflow-hidden"><div class="absolute top-2 right-2 z-10"><!></div> <!></div>`);
var root_13 = from_html(`<button class="mt-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"> </button>`);
var root_14 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-sm prose dark:prose-invert max-w-full"><!></div> <!>`, 1);
var root_15 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap"> </div>`);
var root_16 = from_html(`<audio class="w-full border-0 rounded-lg mb-2" controls="" playsinline=""></audio>`);
var root_17 = from_html(`<div class="text-red-500 text-sm p-4"> </div>`);
var root_18 = from_html(`<button type="button"> </button>`);
var root_19 = from_html(`<div class="flex mb-2.5 scrollbar-none overflow-x-auto w-full border-b border-gray-50 dark:border-gray-850/30 text-center text-sm font-medium bg-transparent dark:text-gray-200"></div>`);
var root_20 = from_html(`<div class="office-preview overflow-auto max-h-[60vh]"></div>`);
var root_21 = from_html(`<div class="text-gray-500 text-sm p-4">No content available</div>`);
var root_22 = from_html(`<!> <!>`, 1);
var root_23 = from_html(`<div class="max-h-[60vh] overflow-scroll scrollbar-hidden text-sm relative"><!></div>`);
var root_24 = from_html(`<div class="max-h-[60vh] overflow-scroll scrollbar-hidden text-sm prose dark:prose-invert max-w-full"><!></div>`);
var root_25 = from_html(`<div class="office-preview max-h-[60vh] overflow-auto p-4 prose dark:prose-invert max-w-full text-sm"></div>`);
var root_26 = from_html(`<div class="flex items-center justify-center gap-3 pb-3 text-sm text-gray-500"><button class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg></button> <span> </span> <button class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></button></div>`);
var root_27 = from_html(`<div class="max-h-[60vh] overflow-auto"><div class="flex justify-center p-4"><img class="max-w-full max-h-[50vh] object-contain rounded-md shadow-lg" draggable="false"/></div> <!></div>`);
var root_28 = from_html(`<div class="flex items-center justify-center py-6"><!></div>`);
var root_29 = from_html(`<div class="font-primary px-4.5 py-3.5 w-full flex flex-col justify-center dark:text-gray-400"><div class=" pb-2"><div class="flex items-start justify-between"><div><div class=" font-medium text-lg dark:text-gray-100"><a href="#" class="hover:underline line-clamp-1"> </a></div></div> <div><button><!></button></div></div> <div><div class="flex flex-col items-center md:flex-row gap-1 justify-between w-full"><div class=" flex flex-wrap text-xs gap-1 text-gray-500"><!> <!> <!> <!></div> <!></div></div></div> <div class="max-h-[75vh] overflow-auto"><!></div></div>`);
function FileItemModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isMarkdown = mutable_source();
  const isCode = mutable_source();
  const i18n = getContext("i18n");
  const CONTENT_PREVIEW_LIMIT = 1e4;
  let expandedContent = mutable_source(false);
  let item = prop($$props, "item", 12);
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let enableFullContent = mutable_source(false);
  let loading = mutable_source(false);
  let isPDF = mutable_source(false);
  let isAudio = mutable_source(false);
  let isImage = mutable_source(false);
  let isExcel = mutable_source(false);
  let isDocx = mutable_source(false);
  let isPptx = mutable_source(false);
  let selectedTab = mutable_source("");
  let excelWorkbook = mutable_source(null);
  let excelSheetNames = mutable_source([]);
  let selectedSheet = mutable_source("");
  let excelHtml = mutable_source("");
  let excelError = mutable_source("");
  let rowCount = mutable_source(0);
  let docxHtml = mutable_source("");
  let docxError = mutable_source("");
  let pptxSlides = mutable_source([]);
  let pptxCurrentSlide = mutable_source(0);
  let pptxError = mutable_source("");
  let panzoomRef = mutable_source();
  const resetImageView = () => {
    var _a;
    (_a = get(panzoomRef)) == null ? void 0 : _a.reset();
  };
  const loadExcelContent = async () => {
    try {
      set(excelError, "");
      const [arrayBuffer, { read }] = await Promise.all([getFileContentById(item().id), __vitePreload(() => import("./CEl6Mv6n.js"), true ? [] : void 0, import.meta.url)]);
      set(excelWorkbook, read(arrayBuffer, { type: "array" }));
      set(excelSheetNames, get(excelWorkbook).SheetNames);
      if (get(excelSheetNames).length > 0) {
        set(selectedSheet, get(excelSheetNames)[0]);
        await renderExcelSheet();
      }
    } catch (error) {
      /* @__PURE__ */ console.error("Error loading Excel/CSV file:", error);
      set(excelError, $i18n().t("Failed to load Excel/CSV file. Please try downloading it instead."));
    }
  };
  const renderExcelSheet = async () => {
    if (!get(excelWorkbook) || !get(selectedSheet)) return;
    const { excelToTable } = await __vitePreload(async () => {
      const { excelToTable: excelToTable2 } = await import("./BdoKi0bE.js");
      return { excelToTable: excelToTable2 };
    }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
    const worksheet = get(excelWorkbook).Sheets[get(selectedSheet)];
    const result = await excelToTable(worksheet);
    set(excelHtml, purify.sanitize(result.html));
    set(rowCount, result.rowCount);
  };
  const loadDocxContent = async () => {
    try {
      set(docxError, "");
      const [arrayBuffer, mammoth] = await Promise.all([getFileContentById(item().id), __vitePreload(() => import("./MP_eVmKb.js").then((n) => n.i), true ? __vite__mapDeps([2,3,4]) : void 0, import.meta.url)]);
      const result = await mammoth.convertToHtml({ arrayBuffer });
      set(docxHtml, purify.sanitize(result.value));
    } catch (error) {
      /* @__PURE__ */ console.error("Error loading DOCX file:", error);
      set(docxError, $i18n().t("Failed to load DOCX file. Please try downloading it instead."));
    }
  };
  const loadPptxContent = async () => {
    try {
      set(pptxError, "");
      const [arrayBuffer, { pptxToImages }] = await Promise.all([
        getFileContentById(item().id),
        __vitePreload(() => import("./DdMOiXWm.js"), true ? __vite__mapDeps([5,1]) : void 0, import.meta.url)
      ]);
      const result = await pptxToImages(arrayBuffer);
      set(pptxSlides, result.images);
      set(pptxCurrentSlide, 0);
    } catch (error) {
      /* @__PURE__ */ console.error("Error loading PPTX file:", error);
      set(pptxError, $i18n().t("Failed to load PPTX file. Please try downloading it instead."));
    }
  };
  const loadContent = async () => {
    var _a, _b;
    set(selectedTab, "");
    set(expandedContent, false);
    if (((_a = item()) == null ? void 0 : _a.type) === "collection") {
      set(loading, true);
      const knowledge = await getKnowledgeById(localStorage.token, item().id).catch((e) => {
        /* @__PURE__ */ console.error("Error fetching knowledge base:", e);
        return null;
      });
      if (knowledge) {
        item(item().files = knowledge.files || [], true);
      }
      set(loading, false);
    } else if (((_b = item()) == null ? void 0 : _b.type) === "file") {
      set(loading, true);
      const file = await getFileById(localStorage.token, item().id).catch((e) => {
        /* @__PURE__ */ console.error("Error fetching file:", e);
        return null;
      });
      if (file) {
        item(item().file = file || {}, true);
      }
      if (get(isExcel)) {
        await loadExcelContent();
      }
      if (get(isDocx)) {
        await loadDocxContent();
      }
      if (get(isPptx)) {
        await loadPptxContent();
      }
      set(loading, false);
    }
    await tick();
  };
  onMount(() => {
    var _a;
    /* @__PURE__ */ console.log(item());
    if (((_a = item()) == null ? void 0 : _a.context) === "full") {
      set(enableFullContent, true);
    }
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d;
    set(isPDF, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/pdf" || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".pdf")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d;
    set(isMarkdown, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "text/markdown" || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".md")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a;
    set(isCode, ((_a = item()) == null ? void 0 : _a.name) && (item().name.toLowerCase().endsWith(".py") || item().name.toLowerCase().endsWith(".js") || item().name.toLowerCase().endsWith(".ts") || item().name.toLowerCase().endsWith(".java") || item().name.toLowerCase().endsWith(".html") || item().name.toLowerCase().endsWith(".css") || item().name.toLowerCase().endsWith(".json") || item().name.toLowerCase().endsWith(".cpp") || item().name.toLowerCase().endsWith(".c") || item().name.toLowerCase().endsWith(".h") || item().name.toLowerCase().endsWith(".sh") || item().name.toLowerCase().endsWith(".bash") || item().name.toLowerCase().endsWith(".yaml") || item().name.toLowerCase().endsWith(".yml") || item().name.toLowerCase().endsWith(".xml") || item().name.toLowerCase().endsWith(".sql") || item().name.toLowerCase().endsWith(".go") || item().name.toLowerCase().endsWith(".rs") || item().name.toLowerCase().endsWith(".php") || item().name.toLowerCase().endsWith(".rb")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    set(isAudio, (((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) ?? "").startsWith("audio/") || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".mp3")) || ((_e = item()) == null ? void 0 : _e.name) && ((_f = item()) == null ? void 0 : _f.name.toLowerCase().endsWith(".wav")) || ((_g = item()) == null ? void 0 : _g.name) && ((_h = item()) == null ? void 0 : _h.name.toLowerCase().endsWith(".ogg")) || ((_i = item()) == null ? void 0 : _i.name) && ((_j = item()) == null ? void 0 : _j.name.toLowerCase().endsWith(".m4a")) || ((_k = item()) == null ? void 0 : _k.name) && ((_l = item()) == null ? void 0 : _l.name.toLowerCase().endsWith(".webm")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c;
    set(isImage, (((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) ?? "").startsWith("image/") || ((_c = item()) == null ? void 0 : _c.name) && (item().name.toLowerCase().endsWith(".png") || item().name.toLowerCase().endsWith(".jpg") || item().name.toLowerCase().endsWith(".jpeg") || item().name.toLowerCase().endsWith(".gif") || item().name.toLowerCase().endsWith(".webp") || item().name.toLowerCase().endsWith(".svg") || item().name.toLowerCase().endsWith(".bmp") || item().name.toLowerCase().endsWith(".ico")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    set(isExcel, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/vnd.ms-excel" || ((_d = (_c = item()) == null ? void 0 : _c.meta) == null ? void 0 : _d.content_type) === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || ((_f = (_e = item()) == null ? void 0 : _e.meta) == null ? void 0 : _f.content_type) === "text/csv" || ((_h = (_g = item()) == null ? void 0 : _g.meta) == null ? void 0 : _h.content_type) === "application/csv" || ((_i = item()) == null ? void 0 : _i.name) && (item().name.toLowerCase().endsWith(".xls") || item().name.toLowerCase().endsWith(".xlsx") || item().name.toLowerCase().endsWith(".csv")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c;
    set(isDocx, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || ((_c = item()) == null ? void 0 : _c.name) && item().name.toLowerCase().endsWith(".docx"));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c;
    set(isPptx, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || ((_c = item()) == null ? void 0 : _c.name) && item().name.toLowerCase().endsWith(".pptx"));
  });
  legacy_pre_effect(() => (get(selectedSheet), get(excelWorkbook)), () => {
    if (get(selectedSheet) && get(excelWorkbook)) {
      renderExcelSheet();
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      loadContent();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_29();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var a = child(div_4);
      var text$1 = child(a, true);
      reset(a);
      reset(div_4);
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      var button = child(div_5);
      var node = child(button);
      XMark(node, {});
      reset(button);
      reset(div_5);
      reset(div_2);
      var div_6 = sibling(div_2, 2);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_1 = child(div_8);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_1 = root_3$1();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var fragment_2 = root$1();
              var div_9 = first_child(fragment_2);
              var text_1 = child(div_9, true);
              reset(div_9);
              next();
              template_effect(() => set_text(text_1, (deep_read_state(item()), untrack(() => item().type))));
              append($$anchor4, fragment_2);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.type;
              })) $$render(consequent);
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root_1$1();
              var div_10 = first_child(fragment_3);
              var text_2 = child(div_10, true);
              reset(div_10);
              next();
              template_effect(() => set_text(text_2, (deep_read_state(item()), untrack(() => item().description))));
              append($$anchor4, fragment_3);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.description;
              })) $$render(consequent_1);
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_11 = root_2$1();
              var text_3 = child(div_11, true);
              reset(div_11);
              template_effect(($0) => set_text(text_3, $0), [
                () => (deep_read_state(dayjs2), deep_read_state(item()), untrack(() => dayjs2(item().created_at * 1e3).format("LL")))
              ]);
              append($$anchor4, div_11);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.created_at;
              })) $$render(consequent_2);
            });
          }
          append($$anchor3, fragment_1);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return ((_a = item()) == null ? void 0 : _a.type) === "collection";
          })) $$render(consequent_3);
        });
      }
      var node_5 = sibling(node_1, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_4 = root$1();
          var div_12 = first_child(fragment_4);
          var text_4 = child(div_12, true);
          reset(div_12);
          next();
          template_effect(($0) => set_text(text_4, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(item()), untrack(() => formatFileSize(item().size)))
          ]);
          append($$anchor3, fragment_4);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(item()), untrack(() => item().size)) $$render(consequent_4);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var fragment_5 = root_4$1();
          var div_13 = first_child(fragment_5);
          var node_7 = child(div_13);
          {
            var consequent_5 = ($$anchor4) => {
              var text_5 = text();
              template_effect(($0) => set_text(text_5, $0), [
                () => ($i18n(), get(rowCount), untrack(() => $i18n().t("{{COUNT}} Rows", { COUNT: get(rowCount) })))
              ]);
              append($$anchor4, text_5);
            };
            var alternate = ($$anchor4) => {
              var text_6 = text();
              template_effect(($0) => set_text(text_6, $0), [
                () => ($i18n(), deep_read_state(getLineCount), deep_read_state(item()), untrack(() => {
                  var _a, _b, _c;
                  return $i18n().t("{{COUNT}} extracted lines", { COUNT: getLineCount(((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "") });
                }))
              ]);
              append($$anchor4, text_6);
            };
            if_block(node_7, ($$render) => {
              if (get(isExcel) && get(rowCount) > 0 && get(selectedTab) === "preview") $$render(consequent_5);
              else $$render(alternate, -1);
            });
          }
          reset(div_13);
          var div_14 = sibling(div_13, 2);
          var text_7 = child(div_14);
          reset(div_14);
          template_effect(($0) => set_text(text_7, `• ${$0 ?? ""}`), [
            () => ($i18n(), untrack(() => $i18n().t("Formatting may be inconsistent from source.")))
          ]);
          append($$anchor3, fragment_5);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b, _c;
            return (_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content;
          })) $$render(consequent_6);
        });
      }
      var node_8 = sibling(node_6, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_15 = root_2$1();
          var text_8 = child(div_15, true);
          reset(div_15);
          template_effect(($0) => set_text(text_8, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Knowledge Base")))
          ]);
          append($$anchor3, div_15);
        };
        if_block(node_8, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return (_a = item()) == null ? void 0 : _a.knowledge;
          })) $$render(consequent_7);
        });
      }
      reset(div_8);
      var node_9 = sibling(div_8, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_16 = root_6$1();
          var node_10 = child(div_16);
          {
            let $0 = derived_safe_equal(() => (get(enableFullContent), $i18n(), untrack(() => get(enableFullContent) ? $i18n().t("Inject the entire content as context for comprehensive processing, this is recommended for complex queries.") : $i18n().t("Default to segmented retrieval for focused and relevant content extraction, this is recommended for most cases."))));
            Tooltip(node_10, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var div_17 = root_5$1();
                var node_11 = child(div_17);
                {
                  var consequent_8 = ($$anchor5) => {
                    var text_9 = text();
                    template_effect(($02) => set_text(text_9, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Using Entire Document")))
                    ]);
                    append($$anchor5, text_9);
                  };
                  var alternate_1 = ($$anchor5) => {
                    var text_10 = text();
                    template_effect(($02) => set_text(text_10, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Using Focused Retrieval")))
                    ]);
                    append($$anchor5, text_10);
                  };
                  if_block(node_11, ($$render) => {
                    if (get(enableFullContent)) $$render(consequent_8);
                    else $$render(alternate_1, -1);
                  });
                }
                var node_12 = sibling(node_11, 2);
                Switch_1(node_12, {
                  get state() {
                    return get(enableFullContent);
                  },
                  set state($$value) {
                    set(enableFullContent, $$value);
                  },
                  $$events: {
                    change: (e) => {
                      item(item().context = e.detail ? "full" : void 0, true);
                    }
                  },
                  $$legacy: true
                });
                reset(div_17);
                append($$anchor4, div_17);
              },
              $$slots: { default: true }
            });
          }
          reset(div_16);
          append($$anchor3, div_16);
        };
        if_block(node_9, ($$render) => {
          if (edit()) $$render(consequent_9);
        });
      }
      reset(div_7);
      reset(div_6);
      reset(div_1);
      var div_18 = sibling(div_1, 2);
      var node_13 = child(div_18);
      {
        var consequent_36 = ($$anchor3) => {
          var fragment_10 = root_3$1();
          var node_14 = first_child(fragment_10);
          {
            var consequent_10 = ($$anchor4) => {
              var div_19 = root_8$1();
              each(div_19, 5, () => (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.files;
              })), index, ($$anchor5, file) => {
                var div_20 = root_7$1();
                var div_21 = child(div_20);
                var text_11 = child(div_21, true);
                reset(div_21);
                reset(div_20);
                template_effect(() => set_text(text_11, (get(file), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get(file)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name;
                }))));
                append($$anchor5, div_20);
              });
              reset(div_19);
              append($$anchor4, div_19);
            };
            if_block(node_14, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return ((_a = item()) == null ? void 0 : _a.type) === "collection";
              })) $$render(consequent_10);
            });
          }
          var node_15 = sibling(node_14, 2);
          {
            var consequent_11 = ($$anchor4) => {
              var div_22 = root_9$1();
              var button_1 = child(div_22);
              var text_12 = child(button_1, true);
              reset(button_1);
              var button_2 = sibling(button_1, 2);
              var text_13 = child(button_2, true);
              reset(button_2);
              reset(div_22);
              template_effect(
                ($0, $1) => {
                  set_class(button_1, 1, `min-w-fit py-1.5 px-4 border-b ${get(selectedTab) === "" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                  set_text(text_12, $0);
                  set_class(button_2, 1, `min-w-fit py-1.5 px-4 border-b ${get(selectedTab) === "preview" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                  set_text(text_13, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Content"))),
                  () => ($i18n(), untrack(() => $i18n().t("Preview")))
                ]
              );
              event("click", button_1, () => {
                set(selectedTab, "");
              });
              event("click", button_2, () => {
                set(selectedTab, "preview");
              });
              append($$anchor4, div_22);
            };
            if_block(node_15, ($$render) => {
              if (get(isAudio) || get(isPDF) || get(isExcel) || get(isCode) || get(isMarkdown) || get(isDocx) || get(isPptx)) $$render(consequent_11);
            });
          }
          var node_16 = sibling(node_15, 2);
          {
            var consequent_12 = ($$anchor4) => {
              var div_23 = root_12();
              var div_24 = child(div_23);
              var node_17 = child(div_24);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reset view"))));
                Tooltip(node_17, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var button_3 = root_10();
                    var node_18 = child(button_3);
                    Reset(node_18, { className: "size-4" });
                    reset(button_3);
                    event("click", button_3, resetImageView);
                    append($$anchor5, button_3);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_24);
              var node_19 = sibling(div_24, 2);
              bind_this(
                PanzoomContainer(node_19, {
                  children: ($$anchor5, $$slotProps2) => {
                    var img = root_11();
                    template_effect(() => {
                      set_attribute(img, "src", (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(item()), untrack(() => `${REXPRO_API_BASE_URL}/files/${item().id}/content`)));
                      set_attribute(img, "alt", (deep_read_state(item()), untrack(() => {
                        var _a;
                        return ((_a = item()) == null ? void 0 : _a.name) ?? "Image";
                      })));
                    });
                    append($$anchor5, img);
                  },
                  $$slots: { default: true },
                  $$legacy: true
                }),
                ($$value) => set(panzoomRef, $$value),
                () => get(panzoomRef)
              );
              reset(div_23);
              append($$anchor4, div_23);
            };
            var consequent_19 = ($$anchor4) => {
              var fragment_11 = comment();
              var node_20 = first_child(fragment_11);
              {
                var consequent_15 = ($$anchor5) => {
                  const rawContent = derived_safe_equal(() => (deep_read_state(item()), untrack(() => {
                    var _a, _b, _c;
                    return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                  })));
                  const isTruncated = derived_safe_equal(() => ($settings(), deep_read_state(get(rawContent)), get(expandedContent), untrack(() => {
                    var _a;
                    return (((_a = $settings()) == null ? void 0 : _a.renderMarkdownInPreviews) ?? true) && get(rawContent).length > CONTENT_PREVIEW_LIMIT && !get(expandedContent);
                  })));
                  var fragment_12 = comment();
                  var node_21 = first_child(fragment_12);
                  {
                    var consequent_14 = ($$anchor6) => {
                      var fragment_13 = root_14();
                      var div_25 = first_child(fragment_13);
                      var node_22 = child(div_25);
                      {
                        let $0 = derived_safe_equal(() => (deep_read_state(get(isTruncated)), deep_read_state(get(rawContent)), untrack(() => get(isTruncated) ? get(rawContent).slice(0, CONTENT_PREVIEW_LIMIT) : get(rawContent))));
                        Markdown(node_22, {
                          get content() {
                            return get($0);
                          },
                          id: "file-preview"
                        });
                      }
                      reset(div_25);
                      var node_23 = sibling(div_25, 2);
                      {
                        var consequent_13 = ($$anchor7) => {
                          var button_4 = root_13();
                          var text_14 = child(button_4, true);
                          reset(button_4);
                          template_effect(($0) => set_text(text_14, $0), [
                            () => ($i18n(), deep_read_state(get(rawContent)), untrack(() => $i18n().t("Show all ({{COUNT}} characters)", { COUNT: get(rawContent).length.toLocaleString() })))
                          ]);
                          event("click", button_4, () => {
                            set(expandedContent, true);
                          });
                          append($$anchor7, button_4);
                        };
                        if_block(node_23, ($$render) => {
                          if (get(isTruncated)) $$render(consequent_13);
                        });
                      }
                      append($$anchor6, fragment_13);
                    };
                    var alternate_2 = ($$anchor6) => {
                      var div_26 = root_15();
                      var text_15 = child(div_26, true);
                      reset(div_26);
                      template_effect(() => set_text(text_15, get(rawContent)));
                      append($$anchor6, div_26);
                    };
                    if_block(node_21, ($$render) => {
                      if ($settings(), untrack(() => {
                        var _a;
                        return ((_a = $settings()) == null ? void 0 : _a.renderMarkdownInPreviews) ?? true;
                      })) $$render(consequent_14);
                      else $$render(alternate_2, -1);
                    });
                  }
                  append($$anchor5, fragment_12);
                };
                var consequent_18 = ($$anchor5) => {
                  const rawContent = derived_safe_equal(() => (deep_read_state(item()), untrack(() => {
                    var _a;
                    return (((_a = item()) == null ? void 0 : _a.content) ?? "").trim() || "No content";
                  })));
                  const isTruncated = derived_safe_equal(() => ($settings(), deep_read_state(get(rawContent)), get(expandedContent), untrack(() => {
                    var _a;
                    return (((_a = $settings()) == null ? void 0 : _a.renderMarkdownInPreviews) ?? true) && get(rawContent).length > CONTENT_PREVIEW_LIMIT && !get(expandedContent);
                  })));
                  var fragment_14 = comment();
                  var node_24 = first_child(fragment_14);
                  {
                    var consequent_17 = ($$anchor6) => {
                      var fragment_15 = root_14();
                      var div_27 = first_child(fragment_15);
                      var node_25 = child(div_27);
                      {
                        let $0 = derived_safe_equal(() => (deep_read_state(get(isTruncated)), deep_read_state(get(rawContent)), untrack(() => get(isTruncated) ? get(rawContent).slice(0, CONTENT_PREVIEW_LIMIT) : get(rawContent))));
                        Markdown(node_25, {
                          get content() {
                            return get($0);
                          },
                          id: "file-preview-content"
                        });
                      }
                      reset(div_27);
                      var node_26 = sibling(div_27, 2);
                      {
                        var consequent_16 = ($$anchor7) => {
                          var button_5 = root_13();
                          var text_16 = child(button_5, true);
                          reset(button_5);
                          template_effect(($0) => set_text(text_16, $0), [
                            () => ($i18n(), deep_read_state(get(rawContent)), untrack(() => $i18n().t("Show all ({{COUNT}} characters)", { COUNT: get(rawContent).length.toLocaleString() })))
                          ]);
                          event("click", button_5, () => {
                            set(expandedContent, true);
                          });
                          append($$anchor7, button_5);
                        };
                        if_block(node_26, ($$render) => {
                          if (get(isTruncated)) $$render(consequent_16);
                        });
                      }
                      append($$anchor6, fragment_15);
                    };
                    var alternate_3 = ($$anchor6) => {
                      var div_28 = root_15();
                      var text_17 = child(div_28, true);
                      reset(div_28);
                      template_effect(() => set_text(text_17, get(rawContent)));
                      append($$anchor6, div_28);
                    };
                    if_block(node_24, ($$render) => {
                      if ($settings(), untrack(() => {
                        var _a;
                        return ((_a = $settings()) == null ? void 0 : _a.renderMarkdownInPreviews) ?? true;
                      })) $$render(consequent_17);
                      else $$render(alternate_3, -1);
                    });
                  }
                  append($$anchor5, fragment_14);
                };
                if_block(node_20, ($$render) => {
                  if (deep_read_state(item()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data;
                  })) $$render(consequent_15);
                  else if (deep_read_state(item()), untrack(() => {
                    var _a;
                    return (_a = item()) == null ? void 0 : _a.content;
                  })) $$render(consequent_18, 1);
                });
              }
              append($$anchor4, fragment_11);
            };
            var consequent_35 = ($$anchor4) => {
              var fragment_16 = comment();
              var node_27 = first_child(fragment_16);
              {
                var consequent_20 = ($$anchor5) => {
                  var audio = root_16();
                  template_effect(() => set_attribute(audio, "src", (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(item()), untrack(() => `${REXPRO_API_BASE_URL}/files/${item().id}/content`))));
                  append($$anchor5, audio);
                };
                var consequent_21 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(REXPRO_API_BASE_URL), deep_read_state(item()), untrack(() => `${REXPRO_API_BASE_URL}/files/${item().id}/content`)));
                    PDFViewer($$anchor5, {
                      get url() {
                        return get($0);
                      },
                      className: "w-full h-[70vh] border-0 rounded-lg"
                    });
                  }
                };
                var consequent_25 = ($$anchor5) => {
                  var fragment_18 = comment();
                  var node_28 = first_child(fragment_18);
                  {
                    var consequent_22 = ($$anchor6) => {
                      var div_29 = root_17();
                      var text_18 = child(div_29, true);
                      reset(div_29);
                      template_effect(() => set_text(text_18, get(excelError)));
                      append($$anchor6, div_29);
                    };
                    var alternate_5 = ($$anchor6) => {
                      var fragment_19 = root_22();
                      var node_29 = first_child(fragment_19);
                      {
                        var consequent_23 = ($$anchor7) => {
                          var div_30 = root_19();
                          each(div_30, 5, () => get(excelSheetNames), index, ($$anchor8, sheetName) => {
                            var button_6 = root_18();
                            var text_19 = child(button_6, true);
                            reset(button_6);
                            template_effect(() => {
                              set_class(button_6, 1, `min-w-fit py-1.5 px-4 border-b ${get(selectedSheet) === get(sheetName) ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                              set_text(text_19, get(sheetName));
                            });
                            event("click", button_6, () => {
                              set(selectedSheet, get(sheetName));
                            });
                            append($$anchor8, button_6);
                          });
                          reset(div_30);
                          append($$anchor7, div_30);
                        };
                        if_block(node_29, ($$render) => {
                          if (get(excelSheetNames), untrack(() => get(excelSheetNames).length > 1)) $$render(consequent_23);
                        });
                      }
                      var node_30 = sibling(node_29, 2);
                      {
                        var consequent_24 = ($$anchor7) => {
                          var div_31 = root_20();
                          html(div_31, () => get(excelHtml), true);
                          reset(div_31);
                          append($$anchor7, div_31);
                        };
                        var alternate_4 = ($$anchor7) => {
                          var div_32 = root_21();
                          append($$anchor7, div_32);
                        };
                        if_block(node_30, ($$render) => {
                          if (get(excelHtml)) $$render(consequent_24);
                          else $$render(alternate_4, -1);
                        });
                      }
                      append($$anchor6, fragment_19);
                    };
                    if_block(node_28, ($$render) => {
                      if (get(excelError)) $$render(consequent_22);
                      else $$render(alternate_5, -1);
                    });
                  }
                  append($$anchor5, fragment_18);
                };
                var consequent_26 = ($$anchor5) => {
                  var div_33 = root_23();
                  var node_31 = child(div_33);
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(item()), untrack(() => item().name.split(".").pop())));
                    CodeBlock(node_31, {
                      get code() {
                        return deep_read_state(item()), untrack(() => item().file.data.content);
                      },
                      get lang() {
                        return get($0);
                      },
                      token: null,
                      edit: false,
                      run: false,
                      save: false
                    });
                  }
                  reset(div_33);
                  append($$anchor5, div_33);
                };
                var consequent_27 = ($$anchor5) => {
                  var div_34 = root_24();
                  var node_32 = child(div_34);
                  Markdown(node_32, {
                    get content() {
                      return deep_read_state(item()), untrack(() => item().file.data.content);
                    },
                    id: "markdown-viewer"
                  });
                  reset(div_34);
                  append($$anchor5, div_34);
                };
                var consequent_30 = ($$anchor5) => {
                  var fragment_20 = comment();
                  var node_33 = first_child(fragment_20);
                  {
                    var consequent_28 = ($$anchor6) => {
                      var div_35 = root_17();
                      var text_20 = child(div_35, true);
                      reset(div_35);
                      template_effect(() => set_text(text_20, get(docxError)));
                      append($$anchor6, div_35);
                    };
                    var consequent_29 = ($$anchor6) => {
                      var div_36 = root_25();
                      html(div_36, () => get(docxHtml), true);
                      reset(div_36);
                      append($$anchor6, div_36);
                    };
                    var alternate_6 = ($$anchor6) => {
                      var div_37 = root_21();
                      append($$anchor6, div_37);
                    };
                    if_block(node_33, ($$render) => {
                      if (get(docxError)) $$render(consequent_28);
                      else if (get(docxHtml)) $$render(consequent_29, 1);
                      else $$render(alternate_6, -1);
                    });
                  }
                  append($$anchor5, fragment_20);
                };
                var consequent_34 = ($$anchor5) => {
                  var fragment_21 = comment();
                  var node_34 = first_child(fragment_21);
                  {
                    var consequent_31 = ($$anchor6) => {
                      var div_38 = root_17();
                      var text_21 = child(div_38, true);
                      reset(div_38);
                      template_effect(() => set_text(text_21, get(pptxError)));
                      append($$anchor6, div_38);
                    };
                    var consequent_33 = ($$anchor6) => {
                      var div_39 = root_27();
                      var div_40 = child(div_39);
                      var img_1 = child(div_40);
                      reset(div_40);
                      var node_35 = sibling(div_40, 2);
                      {
                        var consequent_32 = ($$anchor7) => {
                          var div_41 = root_26();
                          var button_7 = child(div_41);
                          var span = sibling(button_7, 2);
                          var text_22 = child(span);
                          reset(span);
                          var button_8 = sibling(span, 2);
                          reset(div_41);
                          template_effect(() => {
                            button_7.disabled = get(pptxCurrentSlide) === 0;
                            set_text(text_22, `${get(pptxCurrentSlide) + 1} / ${(get(pptxSlides), untrack(() => get(pptxSlides).length)) ?? ""}`);
                            button_8.disabled = (get(pptxCurrentSlide), get(pptxSlides), untrack(() => get(pptxCurrentSlide) === get(pptxSlides).length - 1));
                          });
                          event("click", button_7, () => set(pptxCurrentSlide, Math.max(0, get(pptxCurrentSlide) - 1)));
                          event("click", button_8, () => set(pptxCurrentSlide, Math.min(get(pptxSlides).length - 1, get(pptxCurrentSlide) + 1)));
                          append($$anchor7, div_41);
                        };
                        if_block(node_35, ($$render) => {
                          if (get(pptxSlides), untrack(() => get(pptxSlides).length > 1)) $$render(consequent_32);
                        });
                      }
                      reset(div_39);
                      template_effect(() => {
                        set_attribute(img_1, "src", (get(pptxSlides), get(pptxCurrentSlide), untrack(() => get(pptxSlides)[get(pptxCurrentSlide)])));
                        set_attribute(img_1, "alt", `Slide ${get(pptxCurrentSlide) + 1}`);
                      });
                      append($$anchor6, div_39);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var div_42 = root_21();
                      append($$anchor6, div_42);
                    };
                    if_block(node_34, ($$render) => {
                      if (get(pptxError)) $$render(consequent_31);
                      else if (get(pptxSlides), untrack(() => get(pptxSlides).length > 0)) $$render(consequent_33, 1);
                      else $$render(alternate_7, -1);
                    });
                  }
                  append($$anchor5, fragment_21);
                };
                var alternate_8 = ($$anchor5) => {
                  var div_43 = root_15();
                  var text_23 = child(div_43, true);
                  reset(div_43);
                  template_effect(($0) => set_text(text_23, $0), [
                    () => (deep_read_state(item()), untrack(() => {
                      var _a, _b, _c;
                      return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                    }))
                  ]);
                  append($$anchor5, div_43);
                };
                if_block(node_27, ($$render) => {
                  if (get(isAudio)) $$render(consequent_20);
                  else if (get(isPDF)) $$render(consequent_21, 1);
                  else if (get(isExcel)) $$render(consequent_25, 2);
                  else if (get(isCode)) $$render(consequent_26, 3);
                  else if (get(isMarkdown)) $$render(consequent_27, 4);
                  else if (get(isDocx)) $$render(consequent_30, 5);
                  else if (get(isPptx)) $$render(consequent_34, 6);
                  else $$render(alternate_8, -1);
                });
              }
              append($$anchor4, fragment_16);
            };
            if_block(node_16, ($$render) => {
              if (get(isImage)) $$render(consequent_12);
              else if (get(selectedTab) === "") $$render(consequent_19, 1);
              else if (get(selectedTab) === "preview") $$render(consequent_35, 2);
            });
          }
          append($$anchor3, fragment_10);
        };
        var alternate_9 = ($$anchor3) => {
          var div_44 = root_28();
          var node_36 = child(div_44);
          Spinner(node_36, { className: "size-5" });
          reset(div_44);
          append($$anchor3, div_44);
        };
        if_block(node_13, ($$render) => {
          if (!get(loading)) $$render(consequent_36);
          else $$render(alternate_9, -1);
        });
      }
      reset(div_18);
      reset(div);
      template_effect(() => set_text(text$1, (deep_read_state(item()), untrack(() => {
        var _a;
        return ((_a = item()) == null ? void 0 : _a.name) ?? "File";
      }))));
      event("click", a, preventDefault(() => {
        var _a, _b, _c, _d;
        if (item().type === "file" || item().url) {
          let fileId = ((_a = item()) == null ? void 0 : _a.id) ?? ((_b = item()) == null ? void 0 : _b.tempId);
          window.open(
            item().type === "file" ? ((_d = (_c = item()) == null ? void 0 : _c.url) == null ? void 0 : _d.startsWith("http")) ? item().url : `${REXPRO_API_BASE_URL}/files/${fileId}/content` : item().url,
            "_blank"
          );
        }
      }));
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class=" size-4.5"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd"></path><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path></svg>`);
var root_1 = from_html(`<div class="size-10 shrink-0 flex justify-center items-center bg-black/20 dark:bg-white/10 text-white rounded-xl"><!></div>`);
var root_2 = from_html(`<div class="pl-1.5"><!></div>`);
var root_3 = from_html(`<span class=" capitalize line-clamp-1"> </span>`);
var root_4 = from_html(`<span class="capitalize"> </span>`);
var root_5 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-2.5 w-full"><div class=" dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1"> </div> <div><!> <!></div></div>`);
var root_6 = from_html(`<div class="text-gray-500 text-xs capitalize shrink-0"> </div>`);
var root_7 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-1 w-full"><div class=" dark:text-gray-100 text-sm flex justify-between items-center"><div class="font-medium line-clamp-1 flex-1 pr-1"> </div> <!></div></div>`);
var root_8 = from_html(`<div class=" absolute -top-1 -right-1"><button type="button"><!></button></div>`);
var root_9 = from_html(`<!> <button type="button"><!> <!> <!></button>`, 1);
function FileItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let className = prop($$props, "className", 8, "w-60");
  let colorClassName = prop($$props, "colorClassName", 8, "bg-white dark:bg-gray-850 border border-gray-50/30 dark:border-gray-800/30");
  let url = prop($$props, "url", 8, null);
  let dismissible = prop($$props, "dismissible", 8, false);
  let modal = prop($$props, "modal", 8, false);
  let loading = prop($$props, "loading", 8, false);
  let item = prop($$props, "item", 12, null);
  let edit = prop($$props, "edit", 8, false);
  let small = prop($$props, "small", 8, false);
  let name = prop($$props, "name", 8);
  let type = prop($$props, "type", 8);
  let size = prop($$props, "size", 8);
  let showModal = mutable_source(false);
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  init();
  var fragment = root_9();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      FileItemModal($$anchor2, {
        get edit() {
          return edit();
        },
        get show() {
          return get(showModal);
        },
        set show($$value) {
          set(showModal, $$value);
        },
        get item() {
          return item();
        },
        set item($$value) {
          item($$value);
        },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (item()) $$render(consequent);
    });
  }
  var button = sibling(node, 2);
  var node_1 = child(button);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_1();
      var node_2 = child(div);
      {
        var consequent_1 = ($$anchor3) => {
          var svg = root();
          append($$anchor3, svg);
        };
        var alternate = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_2, ($$render) => {
          if (!loading()) $$render(consequent_1);
          else $$render(alternate, -1);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    var alternate_3 = ($$anchor2) => {
      var div_1 = root_2();
      var node_3 = child(div_1);
      {
        var consequent_7 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => (deep_read_state(type()), $i18n(), untrack(() => type() === "collection" ? $i18n().t("Collection") : type() === "note" ? $i18n().t("Note") : type() === "chat" ? $i18n().t("Chat") : type() === "file" ? $i18n().t("File") : $i18n().t("Document"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              placement: "top",
              children: ($$anchor4, $$slotProps) => {
                var fragment_4 = comment();
                var node_4 = first_child(fragment_4);
                {
                  var consequent_3 = ($$anchor5) => {
                    Database($$anchor5, {});
                  };
                  var consequent_4 = ($$anchor5) => {
                    PageEdit($$anchor5, {});
                  };
                  var consequent_5 = ($$anchor5) => {
                    ChatBubble($$anchor5, {});
                  };
                  var consequent_6 = ($$anchor5) => {
                    Folder($$anchor5, {});
                  };
                  var alternate_1 = ($$anchor5) => {
                    DocumentPage($$anchor5, {});
                  };
                  if_block(node_4, ($$render) => {
                    if (type() === "collection") $$render(consequent_3);
                    else if (type() === "note") $$render(consequent_4, 1);
                    else if (type() === "chat") $$render(consequent_5, 2);
                    else if (type() === "folder") $$render(consequent_6, 3);
                    else $$render(alternate_1, -1);
                  });
                }
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
          }
        };
        var alternate_2 = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_3, ($$render) => {
          if (!loading()) $$render(consequent_7);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (!small()) $$render(consequent_2);
      else $$render(alternate_3, -1);
    });
  }
  var node_5 = sibling(node_1, 2);
  {
    var consequent_13 = ($$anchor2) => {
      var div_2 = root_5();
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_6 = child(div_4);
      {
        var consequent_8 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("File")))]);
          append($$anchor3, text_1);
        };
        var consequent_9 = ($$anchor3) => {
          var text_2 = text();
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Note")))]);
          append($$anchor3, text_2);
        };
        var consequent_10 = ($$anchor3) => {
          var text_3 = text();
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Document")))]);
          append($$anchor3, text_3);
        };
        var consequent_11 = ($$anchor3) => {
          var text_4 = text();
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Collection")))]);
          append($$anchor3, text_4);
        };
        var alternate_4 = ($$anchor3) => {
          var span = root_3();
          var text_5 = child(span, true);
          reset(span);
          template_effect(() => set_text(text_5, type()));
          append($$anchor3, span);
        };
        if_block(node_6, ($$render) => {
          if (type() === "file") $$render(consequent_8);
          else if (type() === "note") $$render(consequent_9, 1);
          else if (type() === "doc") $$render(consequent_10, 2);
          else if (type() === "collection") $$render(consequent_11, 3);
          else $$render(alternate_4, -1);
        });
      }
      var node_7 = sibling(node_6, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var span_1 = root_4();
          var text_6 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_6, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
          ]);
          append($$anchor3, span_1);
        };
        if_block(node_7, ($$render) => {
          if (size()) $$render(consequent_12);
        });
      }
      reset(div_4);
      reset(div_2);
      template_effect(
        ($0) => {
          set_text(text$1, $0);
          set_class(div_4, 1, ` flex justify-between text-xs line-clamp-1 ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500";
          })) ?? ""}`);
        },
        [
          () => (deep_read_state(name()), untrack(() => decodeString(name())))
        ]
      );
      append($$anchor2, div_2);
    };
    var alternate_6 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(name()), untrack(() => decodeString(name()))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          className: "flex flex-col w-full",
          placement: "top-start",
          children: ($$anchor3, $$slotProps) => {
            var div_5 = root_7();
            var div_6 = child(div_5);
            var div_7 = child(div_6);
            var text_7 = child(div_7, true);
            reset(div_7);
            var node_8 = sibling(div_7, 2);
            {
              var consequent_14 = ($$anchor4) => {
                var div_8 = root_6();
                var text_8 = child(div_8, true);
                reset(div_8);
                template_effect(($02) => set_text(text_8, $02), [
                  () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
                ]);
                append($$anchor4, div_8);
              };
              var alternate_5 = ($$anchor4) => {
                var div_9 = root_6();
                var text_9 = child(div_9, true);
                reset(div_9);
                template_effect(() => set_text(text_9, type()));
                append($$anchor4, div_9);
              };
              if_block(node_8, ($$render) => {
                if (size()) $$render(consequent_14);
                else $$render(alternate_5, -1);
              });
            }
            reset(div_6);
            reset(div_5);
            template_effect(($02) => set_text(text_7, $02), [
              () => (deep_read_state(name()), untrack(() => decodeString(name())))
            ]);
            append($$anchor3, div_5);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_5, ($$render) => {
      if (!small()) $$render(consequent_13);
      else $$render(alternate_6, -1);
    });
  }
  var node_9 = sibling(node_5, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_10 = root_8();
      var button_1 = child(div_10);
      var node_10 = child(button_1);
      XMark(node_10, { className: "size-4" });
      reset(button_1);
      reset(div_10);
      template_effect(
        ($0) => {
          set_attribute(button_1, "aria-label", $0);
          set_class(button_1, 1, ` bg-white text-black border border-gray-50 rounded-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden group-hover:visible invisible transition";
          })) ?? ""}`);
        },
        [() => ($i18n(), untrack(() => $i18n().t("Remove File")))]
      );
      event("click", button_1, stopPropagation(() => {
        dispatch("dismiss");
      }));
      append($$anchor2, div_10);
    };
    if_block(node_9, ($$render) => {
      if (dismissible()) $$render(consequent_15);
    });
  }
  reset(button);
  template_effect(() => set_class(button, 1, `relative group p-1.5 ${className() ?? ""} flex items-center gap-1 ${colorClassName() ?? ""} ${small() ? "rounded-xl p-2" : "rounded-2xl"} text-left`));
  event("click", button, async () => {
    var _a, _b, _c, _d, _e;
    if (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) || ((_d = item()) == null ? void 0 : _d.type) === "file" || ((_e = item()) == null ? void 0 : _e.content) || modal()) {
      set(showModal, !get(showModal));
    } else {
      if (url()) {
        if (type() === "file") {
          if (url().startsWith("http")) {
            window.open(`${url()}/content`, "_blank").focus();
          } else {
            window.open(`${REXPRO_API_BASE_URL}/files/${url()}/content`, "_blank").focus();
          }
        } else {
          window.open(`${url()}`, "_blank").focus();
        }
      }
    }
    dispatch("click");
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ChatBubble as C,
  Database as D,
  FileItem as F,
  PageEdit as P,
  FileItemModal as a,
  PDFViewer as b
};
