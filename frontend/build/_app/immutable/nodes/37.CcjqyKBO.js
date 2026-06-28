import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, p as push, i as getContext, c as child, r as reset, z as sibling, k as get, m as deep_read_state, u as untrack, y as event, w as set, b as pop, s as setup_stores, q as mutable_source, bu as autofocus, d as set_text, f as from_html, x as derived_safe_equal, e as store_get, aS as createEventDispatcher, h as first_child, a_ as remove_textarea_child, l as legacy_pre_effect, n as legacy_pre_effect_reset, bD as afterUpdate, aV as mutate, o as onMount, j as onDestroy } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { s as set_attribute, a as set_class, c as clsx, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { b as bind_value, c as bind_files, a as bind_checked } from "../chunks/CgeA63xA.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { c as config, s as settings, u as user } from "../chunks/BJ3rUC-5.js";
import { u as uploadFile, r as renameFileById, b as updateFileDataContentById } from "../chunks/BipwcWe2.js";
import { g as getKnowledgeById, r as resetKnowledgeById, b as syncKnowledgeDiff, f as syncKnowledgeCleanup, h as createKnowledgeDirectory, i as deleteKnowledgeDirectory, j as searchKnowledgeFilesById, k as getPendingKnowledgeFiles, u as updateKnowledgeAccessGrants, l as updateKnowledgeById, m as updateKnowledgeDirectory, n as moveFileInKnowledge, o as removeFileFromKnowledgeById } from "../chunks/BxjVhKR8.js";
import { p as processWeb } from "../chunks/CFCslPro.js";
import { l as capitalizeFirstLetter, H as formatFileSize, v as v4, o as blobToFile, m as copyToClipboard } from "../chunks/X0cYWxFO.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { d as dayjs2, r as relativeTime } from "../chunks/BeGenu0j.js";
import "../chunks/B3L560rQ.js";
import { d as dayjsDuration } from "../chunks/DDd3niey.js";
import { b as REXPRO_BASE_URL } from "../chunks/CZpnbXda.js";
import { D as Dropdown } from "../chunks/8Pg1zo_Z.js";
import { F as Folder, D as DocumentPage } from "../chunks/Cuik1dqC.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { D as Download } from "../chunks/D04FCXQM.js";
import { G as GarbageBin } from "../chunks/eobci2cJ.js";
import { P as Pencil } from "../chunks/Bga8-tII.js";
import { F as FolderOpen } from "../chunks/Dy6hVDZ3.js";
import { N as NewFolderAlt, A as AttachWebpageModal } from "../chunks/CCUPCXIX.js";
import { G as GlobeAlt } from "../chunks/Si-pTnNT.js";
import { A as ArrowUturnLeft, M as MicSolid } from "../chunks/El29DtH4.js";
import { p as preventDefault } from "../chunks/CGgk3ROl.js";
import { M as Modal } from "../chunks/tmhUPuyr.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { V as VoiceRecording } from "../chunks/Bsdbht5u.js";
import { C as ChevronRight } from "../chunks/BaIXj_tA.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { D as Drawer } from "../chunks/BIADelUi.js";
import { C as ChevronLeft } from "../chunks/D9uL0uGA.js";
import { A as AccessControlModal, L as LockClosed } from "../chunks/BURXHJDK.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { F as FilesOverlay } from "../chunks/P-zj8Fyt.js";
import { D as DropdownOptions } from "../chunks/D3fZRBXo.js";
import { C as Checkbox } from "../chunks/CuSe9V-c.js";
import { A as AdjustmentsHorizontal } from "../chunks/lVdf4dVj.js";
import { P as Pagination_1 } from "../chunks/3QixqFIZ.js";
var root$9 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
function ArrowUpCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$9();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$8 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path></svg>`);
function BarsArrowUp($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$8();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
async function computeFileHash(file) {
  var _a;
  const buffer = await file.arrayBuffer();
  if ((_a = globalThis.crypto) == null ? void 0 : _a.subtle) {
    const digest = await crypto.subtle.digest("SHA-256", buffer);
    return hexEncode(new Uint8Array(digest));
  }
  return sha256Fallback(new Uint8Array(buffer));
}
function hexEncode(bytes) {
  const hex = new Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    hex[i] = bytes[i].toString(16).padStart(2, "0");
  }
  return hex.join("");
}
const K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
function rotr(n, x) {
  return x >>> n | x << 32 - n;
}
function sha256Fallback(data) {
  const bitLen = data.length * 8;
  const padLen = (data.length + 8 >>> 6) + 1 << 6;
  const padded = new Uint8Array(padLen);
  padded.set(data);
  padded[data.length] = 128;
  const view = new DataView(padded.buffer);
  view.setUint32(padLen - 4, bitLen, false);
  let h0 = 1779033703;
  let h1 = 3144134277;
  let h2 = 1013904242;
  let h3 = 2773480762;
  let h4 = 1359893119;
  let h5 = 2600822924;
  let h6 = 528734635;
  let h7 = 1541459225;
  const w = new Uint32Array(64);
  for (let offset = 0; offset < padLen; offset += 64) {
    for (let i = 0; i < 16; i++) {
      w[i] = view.getUint32(offset + i * 4, false);
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(7, w[i - 15]) ^ rotr(18, w[i - 15]) ^ w[i - 15] >>> 3;
      const s1 = rotr(17, w[i - 2]) ^ rotr(19, w[i - 2]) ^ w[i - 2] >>> 10;
      w[i] = w[i - 16] + s0 + w[i - 7] + s1 | 0;
    }
    let a = h0, b = h1, c = h2, d = h3;
    let e = h4, f = h5, g = h6, h = h7;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
      const ch = e & f ^ ~e & g;
      const temp1 = h + S1 + ch + K[i] + w[i] | 0;
      const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
      const maj = a & b ^ a & c ^ b & c;
      const temp2 = S0 + maj | 0;
      h = g;
      g = f;
      f = e;
      e = d + temp1 | 0;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2 | 0;
    }
    h0 = h0 + a | 0;
    h1 = h1 + b | 0;
    h2 = h2 + c | 0;
    h3 = h3 + d | 0;
    h4 = h4 + e | 0;
    h5 = h5 + f | 0;
    h6 = h6 + g | 0;
    h7 = h7 + h | 0;
  }
  const result = new Uint8Array(32);
  const out = new DataView(result.buffer);
  out.setUint32(0, h0, false);
  out.setUint32(4, h1, false);
  out.setUint32(8, h2, false);
  out.setUint32(12, h3, false);
  out.setUint32(16, h4, false);
  out.setUint32(20, h5, false);
  out.setUint32(24, h6, false);
  out.setUint32(28, h7, false);
  return hexEncode(result);
}
var root$7 = from_html(`<input class="text-sm w-full bg-transparent border-none outline-hidden"/>`);
var root_1$5 = from_html(`<div class="line-clamp-1 text-sm"> </div>`);
var root_2$4 = from_html(`<div class="text-xs text-gray-400"> </div>`);
var root_3$3 = from_html(`<button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-850 transition" type="button"><!></button>`);
var root_4$2 = from_html(`<div slot="content"><div class="min-w-[140px] rounded-2xl p-1 z-[9999999] bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100 dark:border-gray-800"><button type="button" class="select-none flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2 text-sm"><!> </button> <button type="button" class="select-none flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2 text-sm"><!> </button></div></div>`);
var root_5$2 = from_html(`<div class="flex items-center"><!></div>`);
var root_6$2 = from_html(`<div draggable="true"><div class="flex items-center"><button class="p-1 rounded-full transition" type="button"><!></button></div> <button class="relative flex items-center gap-1 rounded-xl p-2 text-left flex-1 justify-between" type="button"><div><div class="flex gap-2 items-center line-clamp-1"><!></div></div> <div class="flex items-center gap-2 shrink-0"><!></div></button> <!></div>`);
function DirectoryRow($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(dayjsDuration);
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let directory = prop($$props, "directory", 8);
  let writeAccess = prop($$props, "writeAccess", 8, false);
  let onNavigate = prop($$props, "onNavigate", 8, () => {
  });
  let onRename = prop($$props, "onRename", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onFileDrop = prop($$props, "onFileDrop", 8, () => {
  });
  let onDirDrop = prop($$props, "onDirDrop", 8, () => {
  });
  let editing = mutable_source(false);
  let editName = mutable_source("");
  let editInput = mutable_source();
  let dragOver = mutable_source(false);
  let showDropdown = mutable_source(false);
  const startRename = () => {
    set(editName, directory().name);
    set(editing, true);
    set(showDropdown, false);
    setTimeout(() => {
      var _a;
      return (_a = get(editInput)) == null ? void 0 : _a.select();
    }, 0);
  };
  const submitRename = () => {
    if (!get(editName).trim() || get(editName) === directory().name) {
      set(editing, false);
      return;
    }
    onRename()(directory().id, get(editName).trim());
    set(editing, false);
  };
  const cancelRename = () => {
    set(editing, false);
  };
  init();
  var div = root_6$2();
  var div_1 = child(div);
  var button = child(div_1);
  var node = child(button);
  Folder(node, { className: "size-3.5" });
  reset(button);
  reset(div_1);
  var button_1 = sibling(div_1, 2);
  var div_2 = child(button_1);
  var div_3 = child(div_2);
  var node_1 = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var input = root$7();
      remove_input_defaults(input);
      autofocus(input, true);
      bind_this(input, ($$value) => set(editInput, $$value), () => get(editInput));
      bind_value(input, () => get(editName), ($$value) => set(editName, $$value));
      event("keydown", input, (e) => {
        if (e.key === "Enter") submitRename();
        if (e.key === "Escape") cancelRename();
      });
      event("blur", input, submitRename);
      event("click", input, (e) => e.stopPropagation());
      append($$anchor2, input);
    };
    var alternate = ($$anchor2) => {
      var div_4 = root_1$5();
      var text = child(div_4, true);
      reset(div_4);
      template_effect(() => set_text(text, (deep_read_state(directory()), untrack(() => directory().name))));
      append($$anchor2, div_4);
    };
    if_block(node_1, ($$render) => {
      if (get(editing)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_3);
  reset(div_2);
  var div_5 = sibling(div_2, 2);
  var node_2 = child(div_5);
  {
    var consequent_1 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), deep_read_state(directory()), untrack(() => dayjs2(directory().updated_at * 1e3).format("LLLL"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var div_6 = root_2$4();
            var text_1 = child(div_6, true);
            reset(div_6);
            template_effect(($02) => set_text(text_1, $02), [
              () => (deep_read_state(dayjs2), deep_read_state(directory()), untrack(() => dayjs2(directory().updated_at * 1e3).fromNow()))
            ]);
            append($$anchor3, div_6);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_2, ($$render) => {
      if (deep_read_state(directory()), untrack(() => directory().updated_at)) $$render(consequent_1);
    });
  }
  reset(div_5);
  reset(button_1);
  var node_3 = sibling(button_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_7 = root_5$2();
      var node_4 = child(div_7);
      Dropdown(node_4, {
        align: "end",
        sideOffset: 4,
        get show() {
          return get(showDropdown);
        },
        set show($$value) {
          set(showDropdown, $$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var button_2 = root_3$3();
          var node_5 = child(button_2);
          EllipsisHorizontal(node_5, { className: "size-3.5" });
          reset(button_2);
          append($$anchor3, button_2);
        },
        $$slots: {
          default: true,
          content: ($$anchor3, $$slotProps) => {
            var div_8 = root_4$2();
            var div_9 = child(div_8);
            var button_3 = child(div_9);
            var node_6 = child(button_3);
            Pencil(node_6, { className: "size-3.5" });
            var text_2 = sibling(node_6);
            reset(button_3);
            var button_4 = sibling(button_3, 2);
            var node_7 = child(button_4);
            GarbageBin(node_7, { className: "size-3.5" });
            var text_3 = sibling(node_7);
            reset(button_4);
            reset(div_9);
            reset(div_8);
            template_effect(
              ($0, $1) => {
                set_text(text_2, ` ${$0 ?? ""}`);
                set_text(text_3, ` ${$1 ?? ""}`);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Rename"))),
                () => ($i18n(), untrack(() => $i18n().t("Delete")))
              ]
            );
            event("click", button_3, () => startRename());
            event("click", button_4, () => onDelete()(directory().id));
            append($$anchor3, div_8);
          }
        },
        $$legacy: true
      });
      reset(div_7);
      append($$anchor2, div_7);
    };
    if_block(node_3, ($$render) => {
      if (writeAccess()) $$render(consequent_2);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, `group flex cursor-pointer w-full px-2 bg-transparent dark:hover:bg-gray-850/50 hover:bg-white rounded-xl transition
		${get(dragOver) ? "bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-850"}`));
  event("click", button, () => onNavigate()(directory().id));
  event("click", button_1, () => onNavigate()(directory().id));
  event("dragstart", div, (e) => {
    var _a;
    (_a = e.dataTransfer) == null ? void 0 : _a.setData("application/x-kb-dir-move", JSON.stringify({ dirId: directory().id }));
  });
  event("dblclick", div, () => {
    if (writeAccess()) startRename();
  });
  event("dragover", div, (e) => {
    var _a, _b;
    const hasFile = (_a = e.dataTransfer) == null ? void 0 : _a.types.includes("application/x-kb-file-move");
    const hasDir = (_b = e.dataTransfer) == null ? void 0 : _b.types.includes("application/x-kb-dir-move");
    if (!hasFile && !hasDir) return;
    e.preventDefault();
    e.stopPropagation();
    set(dragOver, true);
  });
  event("dragleave", div, () => {
    set(dragOver, false);
  });
  event("drop", div, (e) => {
    var _a, _b;
    e.preventDefault();
    e.stopPropagation();
    set(dragOver, false);
    const fileRaw = (_a = e.dataTransfer) == null ? void 0 : _a.getData("application/x-kb-file-move");
    if (fileRaw) {
      try {
        const data = JSON.parse(fileRaw);
        onFileDrop()(data.fileId, directory().id);
      } catch {
      }
      return;
    }
    const dirRaw = (_b = e.dataTransfer) == null ? void 0 : _b.getData("application/x-kb-dir-move");
    if (dirRaw) {
      try {
        const data = JSON.parse(dirRaw);
        if (data.dirId !== directory().id) {
          onDirDrop()(data.dirId, directory().id);
        }
      } catch {
      }
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$6 = from_html(`<button class="p-1 rounded-full transition" type="button"><!></button>`);
var root_1$4 = from_html(`<input class="text-sm w-full bg-transparent border-none outline-hidden"/>`);
var root_2$3 = from_html(`<span class="text-xs text-gray-500"> </span>`);
var root_3$2 = from_html(`<div class="line-clamp-1 text-sm"> <!></div>`);
var root_4$1 = from_html(`<div class="text-xs text-gray-400"> </div>`);
var root_5$1 = from_html(`<div class="shrink-0 text-gray-500"> </div>`);
var root_6$1 = from_html(`<button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-850 transition" type="button"><!></button>`);
var root_7$1 = from_html(`<div slot="content"><div class="min-w-[140px] rounded-2xl p-1 z-[9999999] bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100 dark:border-gray-800"><button type="button" class="select-none flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2 text-sm"><!> </button> <button type="button" class="select-none flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2 text-sm"><!> </button> <button type="button" class="select-none flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2 text-sm"><!> </button></div></div>`);
var root_8$1 = from_html(`<div class="flex items-center"><!></div>`);
var root_9$1 = from_html(`<div draggable="true"><div class="flex items-center"><!></div> <button class="relative flex items-center gap-1 rounded-xl p-2 text-left flex-1 justify-between" type="button"><div><div class="flex gap-2 items-center line-clamp-1"><!></div></div> <div class="flex items-center gap-2 shrink-0"><!> <!></div></button> <!></div>`);
var root_10$1 = from_html(`<div class=" max-h-full flex flex-col w-full gap-[0.5px]"><!> <!></div>`);
function Files($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(dayjsDuration);
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let knowledge = prop($$props, "knowledge", 8, null);
  let selectedFileId = prop($$props, "selectedFileId", 8, null);
  let files = prop($$props, "files", 24, () => []);
  let directories = prop($$props, "directories", 24, () => []);
  let onClick = prop($$props, "onClick", 8, (fileId) => {
  });
  let onDelete = prop($$props, "onDelete", 8, (fileId) => {
  });
  let onRename = prop($$props, "onRename", 8, (fileId, name) => {
  });
  let onNavigateDirectory = prop($$props, "onNavigateDirectory", 8, (directoryId) => {
  });
  let onRenameDirectory = prop($$props, "onRenameDirectory", 8, (id, name) => {
  });
  let onDeleteDirectory = prop($$props, "onDeleteDirectory", 8, (id) => {
  });
  let onMoveFileToDirectory = prop($$props, "onMoveFileToDirectory", 8, (fileId, directoryId) => {
  });
  let onMoveDirectoryToDirectory = prop($$props, "onMoveDirectoryToDirectory", 8, (dirId, targetDirectoryId) => {
  });
  let editingFileId = mutable_source(null);
  let editName = mutable_source("");
  let editInput = mutable_source();
  const startRename = (file) => {
    var _a;
    set(editingFileId, (file == null ? void 0 : file.id) ?? (file == null ? void 0 : file.tempId));
    set(editName, (file == null ? void 0 : file.name) ?? ((_a = file == null ? void 0 : file.meta) == null ? void 0 : _a.name) ?? "");
    setTimeout(() => {
      var _a2;
      return (_a2 = get(editInput)) == null ? void 0 : _a2.select();
    }, 0);
  };
  const submitRename = () => {
    if (get(editingFileId) && get(editName).trim()) {
      onRename()(get(editingFileId), get(editName).trim());
    }
    set(editingFileId, null);
  };
  const cancelRename = () => {
    set(editingFileId, null);
  };
  init();
  var div = root_10$1();
  var node = child(div);
  each(node, 1, directories, (dir) => dir.id, ($$anchor2, dir) => {
    {
      let $0 = derived_safe_equal(() => (deep_read_state(knowledge()), untrack(() => {
        var _a;
        return (_a = knowledge()) == null ? void 0 : _a.write_access;
      })));
      DirectoryRow($$anchor2, {
        get directory() {
          return get(dir);
        },
        get writeAccess() {
          return get($0);
        },
        onNavigate: (id) => onNavigateDirectory()(id),
        onRename: (id, name) => onRenameDirectory()(id, name),
        onDelete: (id) => onDeleteDirectory()(id),
        onFileDrop: (fileId, directoryId) => onMoveFileToDirectory()(fileId, directoryId),
        onDirDrop: (dirId, targetId) => onMoveDirectoryToDirectory()(dirId, targetId)
      });
    }
  });
  var node_1 = sibling(node, 2);
  each(node_1, 1, files, (file) => (file == null ? void 0 : file.id) ?? (file == null ? void 0 : file.itemId) ?? (file == null ? void 0 : file.tempId), ($$anchor2, file) => {
    var div_1 = root_9$1();
    var div_2 = child(div_1);
    var node_2 = child(div_2);
    {
      var consequent = ($$anchor3) => {
        var button = root$6();
        var node_3 = child(button);
        DocumentPage(node_3, { className: "size-3.5" });
        reset(button);
        event("click", button, () => {
          var _a, _b;
          let fileId = ((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId);
          onClick()(fileId);
        });
        append($$anchor3, button);
      };
      var alternate = ($$anchor3) => {
        Spinner($$anchor3, { className: "size-3.5" });
      };
      if_block(node_2, ($$render) => {
        if (get(file), untrack(() => {
          var _a;
          return ((_a = get(file)) == null ? void 0 : _a.status) !== "uploading";
        })) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    reset(div_2);
    var button_1 = sibling(div_2, 2);
    var div_3 = child(button_1);
    var div_4 = child(div_3);
    var node_4 = child(div_4);
    {
      var consequent_1 = ($$anchor3) => {
        var input = root_1$4();
        remove_input_defaults(input);
        autofocus(input, true);
        bind_this(input, ($$value) => set(editInput, $$value), () => get(editInput));
        bind_value(input, () => get(editName), ($$value) => set(editName, $$value));
        event("keydown", input, (e) => {
          if (e.key === "Enter") submitRename();
          if (e.key === "Escape") cancelRename();
        });
        event("blur", input, submitRename);
        event("click", input, (e) => e.stopPropagation());
        append($$anchor3, input);
      };
      var alternate_1 = ($$anchor3) => {
        var div_5 = root_3$2();
        var text = child(div_5);
        var node_5 = sibling(text);
        {
          var consequent_2 = ($$anchor4) => {
            var span = root_2$3();
            var text_1 = child(span, true);
            reset(span);
            template_effect(($0) => set_text(text_1, $0), [
              () => (deep_read_state(formatFileSize), get(file), untrack(() => {
                var _a, _b;
                return formatFileSize((_b = (_a = get(file)) == null ? void 0 : _a.meta) == null ? void 0 : _b.size);
              }))
            ]);
            append($$anchor4, span);
          };
          if_block(node_5, ($$render) => {
            if (get(file), untrack(() => {
              var _a, _b;
              return (_b = (_a = get(file)) == null ? void 0 : _a.meta) == null ? void 0 : _b.size;
            })) $$render(consequent_2);
          });
        }
        reset(div_5);
        template_effect(() => set_text(text, `${(get(file), untrack(() => {
          var _a, _b, _c;
          return ((_a = get(file)) == null ? void 0 : _a.name) ?? ((_c = (_b = get(file)) == null ? void 0 : _b.meta) == null ? void 0 : _c.name);
        })) ?? ""} `));
        append($$anchor3, div_5);
      };
      if_block(node_4, ($$render) => {
        if (get(editingFileId), get(file), untrack(() => {
          var _a, _b;
          return get(editingFileId) === (((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId));
        })) $$render(consequent_1);
        else $$render(alternate_1, -1);
      });
    }
    reset(div_4);
    reset(div_3);
    var div_6 = sibling(div_3, 2);
    var node_6 = child(div_6);
    {
      var consequent_3 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(file), untrack(() => dayjs2(get(file).updated_at * 1e3).format("LLLL"))));
          Tooltip($$anchor3, {
            get content() {
              return get($0);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_7 = root_4$1();
              var text_2 = child(div_7, true);
              reset(div_7);
              template_effect(($02) => set_text(text_2, $02), [
                () => (deep_read_state(dayjs2), get(file), untrack(() => dayjs2(get(file).updated_at * 1e3).fromNow()))
              ]);
              append($$anchor4, div_7);
            },
            $$slots: { default: true }
          });
        }
      };
      if_block(node_6, ($$render) => {
        if (get(file), untrack(() => {
          var _a;
          return (_a = get(file)) == null ? void 0 : _a.updated_at;
        })) $$render(consequent_3);
      });
    }
    var node_7 = sibling(node_6, 2);
    {
      var consequent_4 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (get(file), $i18n(), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get(file)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
          })));
          Tooltip($$anchor3, {
            get content() {
              return get($0);
            },
            className: "flex shrink-0",
            placement: "top-start",
            children: ($$anchor4, $$slotProps) => {
              var div_8 = root_5$1();
              var text_3 = child(div_8, true);
              reset(div_8);
              template_effect(($02) => set_text(text_3, $02), [
                () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(file), untrack(() => {
                  var _a, _b, _c, _d;
                  return $i18n().t("By {{name}}", {
                    name: capitalizeFirstLetter(((_b = (_a = get(file)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(file)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                  });
                }))
              ]);
              append($$anchor4, div_8);
            },
            $$slots: { default: true }
          });
        }
      };
      if_block(node_7, ($$render) => {
        if (get(file), untrack(() => {
          var _a;
          return (_a = get(file)) == null ? void 0 : _a.user;
        })) $$render(consequent_4);
      });
    }
    reset(div_6);
    reset(button_1);
    var node_8 = sibling(button_1, 2);
    {
      var consequent_5 = ($$anchor3) => {
        var div_9 = root_8$1();
        var node_9 = child(div_9);
        Dropdown(node_9, {
          align: "end",
          sideOffset: 4,
          children: ($$anchor4, $$slotProps) => {
            var button_2 = root_6$1();
            var node_10 = child(button_2);
            EllipsisHorizontal(node_10, { className: "size-3.5" });
            reset(button_2);
            append($$anchor4, button_2);
          },
          $$slots: {
            default: true,
            content: ($$anchor4, $$slotProps) => {
              var div_10 = root_7$1();
              var div_11 = child(div_10);
              var button_3 = child(div_11);
              var node_11 = child(button_3);
              Pencil(node_11, { className: "size-3.5" });
              var text_4 = sibling(node_11);
              reset(button_3);
              var button_4 = sibling(button_3, 2);
              var node_12 = child(button_4);
              Download(node_12, { className: "size-3.5" });
              var text_5 = sibling(node_12);
              reset(button_4);
              var button_5 = sibling(button_4, 2);
              var node_13 = child(button_5);
              GarbageBin(node_13, { className: "size-3.5" });
              var text_6 = sibling(node_13);
              reset(button_5);
              reset(div_11);
              reset(div_10);
              template_effect(
                ($0, $1, $2) => {
                  set_text(text_4, ` ${$0 ?? ""}`);
                  set_text(text_5, ` ${$1 ?? ""}`);
                  set_text(text_6, ` ${$2 ?? ""}`);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Rename"))),
                  () => ($i18n(), untrack(() => $i18n().t("Download"))),
                  () => ($i18n(), untrack(() => $i18n().t("Delete")))
                ]
              );
              event("click", button_3, () => {
                startRename(get(file));
              });
              event("click", button_4, () => {
                var _a, _b;
                let fileId = ((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId);
                window.open(`${REXPRO_BASE_URL}/api/v1/files/${fileId}/content`, "_blank");
              });
              event("click", button_5, () => {
                var _a, _b;
                onDelete()(((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId));
              });
              append($$anchor4, div_10);
            }
          }
        });
        reset(div_9);
        append($$anchor3, div_9);
      };
      if_block(node_8, ($$render) => {
        if (deep_read_state(knowledge()), untrack(() => {
          var _a;
          return (_a = knowledge()) == null ? void 0 : _a.write_access;
        })) $$render(consequent_5);
      });
    }
    reset(div_1);
    template_effect(() => set_class(div_1, 1, ` flex cursor-pointer w-full px-2 bg-transparent dark:hover:bg-gray-850/50 hover:bg-white rounded-xl transition ${selectedFileId() ? "" : "hover:bg-gray-100 dark:hover:bg-gray-850"}`));
    event("click", button_1, () => {
      var _a, _b;
      onClick()(((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId));
    });
    event("dblclick", button_1, () => {
      var _a;
      if ((_a = knowledge()) == null ? void 0 : _a.write_access) startRename(get(file));
    });
    event("dragstart", div_1, (e) => {
      var _a, _b, _c;
      const fileId = ((_a = get(file)) == null ? void 0 : _a.id) ?? ((_b = get(file)) == null ? void 0 : _b.tempId);
      if (fileId) {
        (_c = e.dataTransfer) == null ? void 0 : _c.setData("application/x-kb-file-move", JSON.stringify({ fileId }));
      }
    });
    append($$anchor2, div_1);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$5 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`);
function ArrowPath($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_html(`<button class=" p-1.5 rounded-xl hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path></svg></button>`);
var root_1$3 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_2$2 = from_html(`<div slot="content"><div class="min-w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <hr class="my-1 border-gray-100 dark:border-gray-800"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button> <hr class="my-1 border-gray-100 dark:border-gray-800"/> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function AddContentMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let onSync = prop($$props, "onSync", 8, () => {
  });
  let onUpload = prop($$props, "onUpload", 8, (data) => {
  });
  let onReset = prop($$props, "onReset", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    onOpenChange: (state) => {
      if (state === false) {
        onClose()();
      }
    },
    align: "end",
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Content"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var button = root$4();
            event("click", button, (e) => {
              e.stopPropagation();
              set(show, true);
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_2$2();
        var div_1 = child(div);
        var button_1 = child(div_1);
        var node = child(button_1);
        NewFolderAlt(node, {});
        var div_2 = sibling(node, 2);
        var text = child(div_2, true);
        reset(div_2);
        reset(button_1);
        var button_2 = sibling(button_1, 4);
        var node_1 = child(button_2);
        ArrowUpCircle(node_1, { strokeWidth: "2" });
        var div_3 = sibling(node_1, 2);
        var text_1 = child(div_3, true);
        reset(div_3);
        reset(button_2);
        var button_3 = sibling(button_2, 2);
        var node_2 = child(button_3);
        FolderOpen(node_2, { strokeWidth: "2" });
        var div_4 = sibling(node_2, 2);
        var text_2 = child(div_4, true);
        reset(div_4);
        reset(button_3);
        var node_3 = sibling(button_3, 2);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sync a local directory with this knowledge base. Only new and modified files will be uploaded. The directory structure will be mirrored."))));
          Tooltip(node_3, {
            get content() {
              return get($0);
            },
            className: "w-full",
            children: ($$anchor3, $$slotProps2) => {
              var button_4 = root_1$3();
              var node_4 = child(button_4);
              ArrowPath(node_4, { strokeWidth: "2" });
              var div_5 = sibling(node_4, 2);
              var text_3 = child(div_5, true);
              reset(div_5);
              reset(button_4);
              template_effect(($02) => set_text(text_3, $02), [
                () => ($i18n(), untrack(() => $i18n().t("Sync directory")))
              ]);
              event("click", button_4, () => {
                onSync()();
              });
              append($$anchor3, button_4);
            },
            $$slots: { default: true }
          });
        }
        var button_5 = sibling(node_3, 2);
        var node_5 = child(button_5);
        GlobeAlt(node_5, { strokeWidth: "2" });
        var div_6 = sibling(node_5, 2);
        var text_4 = child(div_6, true);
        reset(div_6);
        reset(button_5);
        var button_6 = sibling(button_5, 2);
        var node_6 = child(button_6);
        BarsArrowUp(node_6, { strokeWidth: "2" });
        var div_7 = sibling(node_6, 2);
        var text_5 = child(div_7, true);
        reset(div_7);
        reset(button_6);
        var button_7 = sibling(button_6, 4);
        var node_7 = child(button_7);
        ArrowUturnLeft(node_7, { strokeWidth: "2" });
        var div_8 = sibling(node_7, 2);
        var text_6 = child(div_8, true);
        reset(div_8);
        reset(button_7);
        reset(div_1);
        reset(div);
        template_effect(
          ($0, $1, $2, $3, $4, $5) => {
            set_text(text, $0);
            set_text(text_1, $1);
            set_text(text_2, $2);
            set_text(text_4, $3);
            set_text(text_5, $4);
            set_text(text_6, $5);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("New directory"))),
            () => ($i18n(), untrack(() => $i18n().t("Upload files"))),
            () => ($i18n(), untrack(() => $i18n().t("Upload directory"))),
            () => ($i18n(), untrack(() => $i18n().t("Add webpage"))),
            () => ($i18n(), untrack(() => $i18n().t("Add text content"))),
            () => ($i18n(), untrack(() => $i18n().t("Reset")))
          ]
        );
        event("click", button_1, () => {
          onUpload()({ type: "new_directory" });
          set(show, false);
        });
        event("click", button_2, () => {
          onUpload()({ type: "files" });
        });
        event("click", button_3, () => {
          onUpload()({ type: "directory" });
        });
        event("click", button_5, () => {
          onUpload()({ type: "web" });
        });
        event("click", button_6, () => {
          onUpload()({ type: "text" });
        });
        event("click", button_7, () => {
          onReset()();
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
var root$3 = from_html(`<div class=" max-w-full w-full"><!></div>`);
var root_1$2 = from_html(`<button class=" p-2 bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-white transition rounded-full" type="button"><!></button>`);
var root_2$1 = from_html(`<button class=" px-3.5 py-2 bg-black text-white dark:bg-white dark:text-black transition rounded-full" type="submit"> </button>`);
var root_3$1 = from_html(`<div class="absolute top-0 right-0 p-5"><button class="self-center dark:text-white" type="button"><!></button></div> <div class="flex flex-col md:flex-row w-full h-full md:space-x-4 dark:text-gray-200"><form class="flex flex-col w-full h-full"><div class=" flex-1 w-full h-full flex justify-center overflow-auto px-5 py-4"><div class=" max-w-3xl py-2 md:py-10 w-full flex flex-col gap-2"><div class="shrink-0 w-full flex justify-between items-center"><div class="w-full"><input class="w-full text-3xl bg-transparent outline-hidden svelte-1bctwft" type="text" required=""/></div></div> <div class=" flex-1 w-full h-full"><textarea class="w-full h-full min-h-[200px] bg-transparent outline-none resize-none text-base leading-relaxed placeholder:text-gray-300 dark:placeholder:text-gray-600"></textarea></div></div></div> <div class="flex flex-row items-center justify-end text-sm shrink-0 mt-1 p-4 gap-1.5"><div><!></div> <div class=" shrink-0"><!></div></div></form></div>`, 1);
function AddTextContentModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let name = mutable_source($i18n().t("Untitled"));
  let content = mutable_source("");
  let voiceInput = mutable_source(false);
  init();
  Modal($$anchor, {
    size: "full",
    containerClassName: "",
    className: "h-full bg-white dark:bg-gray-900",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_3$1();
      var div = first_child(fragment_1);
      var button = child(div);
      var node = child(button);
      XMark(node, { className: "size-3.5" });
      reset(button);
      reset(div);
      var div_1 = sibling(div, 2);
      var form = child(div_1);
      var div_2 = child(form);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var input = child(div_5);
      remove_input_defaults(input);
      reset(div_5);
      reset(div_4);
      var div_6 = sibling(div_4, 2);
      var textarea = child(div_6);
      remove_textarea_child(textarea);
      reset(div_6);
      reset(div_3);
      reset(div_2);
      var div_7 = sibling(div_2, 2);
      var div_8 = child(div_7);
      var node_1 = child(div_8);
      {
        var consequent = ($$anchor3) => {
          var div_9 = root$3();
          var node_2 = child(div_9);
          VoiceRecording(node_2, {
            className: "p-1",
            onCancel: () => {
              set(voiceInput, false);
            },
            onConfirm: (data) => {
              const { text, filename } = data;
              set(content, `${get(content)}${text} `);
              set(voiceInput, false);
            },
            get recording() {
              return get(voiceInput);
            },
            set recording($$value) {
              set(voiceInput, $$value);
            },
            $$legacy: true
          });
          reset(div_9);
          append($$anchor3, div_9);
        };
        var alternate = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Voice Input"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_1 = root_1$2();
                var node_3 = child(button_1);
                MicSolid(node_3, { className: "size-5" });
                reset(button_1);
                event("click", button_1, async () => {
                  try {
                    let stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(function(err) {
                      toast.error($i18n().t(`Permission denied when accessing microphone: {{error}}`, { error: err }));
                      return null;
                    });
                    if (stream) {
                      set(voiceInput, true);
                      const tracks = stream.getTracks();
                      tracks.forEach((track) => track.stop());
                    }
                    stream = null;
                  } catch {
                    toast.error($i18n().t("Permission denied when accessing microphone"));
                  }
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_1, ($$render) => {
          if (get(voiceInput)) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(div_8);
      var div_10 = sibling(div_8, 2);
      var node_4 = child(div_10);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Save"))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var button_2 = root_2$1();
            var text_1 = child(button_2, true);
            reset(button_2);
            template_effect(($02) => set_text(text_1, $02), [() => ($i18n(), untrack(() => $i18n().t("Save")))]);
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      reset(div_10);
      reset(div_7);
      reset(form);
      reset(div_1);
      template_effect(
        ($0, $1) => {
          set_attribute(input, "placeholder", $0);
          set_attribute(textarea, "placeholder", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Title"))),
          () => ($i18n(), untrack(() => $i18n().t("Write something...")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      bind_value(textarea, () => get(content), ($$value) => set(content, $$value));
      event("submit", form, preventDefault(() => {
        if (get(name).trim() === "" || get(content).trim() === "") {
          toast.error($i18n().t("Please fill in all fields."));
          set(name, get(name).trim());
          set(content, get(content).trim());
          return;
        }
        dispatch("submit", { name: get(name), content: get(content) });
        show(false);
        set(name, "");
        set(content, "");
      }));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$2 = from_html(`<div><div class="flex justify-between items-center dark:text-gray-100 px-5 pt-4 pb-2"><h3 class="text-base font-medium"> </h3> <button class="self-center shrink-0 ml-2"><!></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500"> </div> <input class="w-full text-sm bg-transparent outline-hidden font-primary placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"/></div></div> <div class="flex items-center justify-end px-4 pb-3.5 pt-2 gap-2"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"> </button> <button class="px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`);
function NewDirectoryModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let name = mutable_source("");
  const submitHandler = () => {
    if (!get(name).trim()) {
      toast.error($i18n().t("Name is required"));
      return;
    }
    dispatch("submit", { name: get(name).trim() });
    show(false);
    set(name, "");
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      set(name, "");
    }
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
      var div = root$2();
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
      reset(div_2);
      var div_5 = sibling(div_2, 2);
      var button_1 = child(div_5);
      var text_2 = child(button_1, true);
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      var text_3 = child(button_2, true);
      reset(button_2);
      reset(div_5);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5) => {
          set_text(text, $0);
          set_attribute(button, "aria-label", $1);
          set_text(text_1, $2);
          set_attribute(input, "placeholder", $3);
          set_text(text_2, $4);
          set_text(text_3, $5);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("New Directory"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Directory name"))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => ($i18n(), untrack(() => $i18n().t("Create")))
        ]
      );
      event("click", button, () => show(false));
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      event("keydown", input, (e) => {
        if (e.key === "Enter") submitHandler();
      });
      event("click", button_1, () => show(false));
      event("click", button_2, submitHandler);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_html(`<!> <button> </button>`, 1);
var root_1$1 = from_html(`<div class="flex items-center flex-1 min-w-0 overflow-x-auto scrollbar-none"><button> </button> <!></div>`);
function KnowledgeBreadcrumbs($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let rootLabel = prop($$props, "rootLabel", 8, "Root");
  let breadcrumbs = prop($$props, "breadcrumbs", 24, () => []);
  let onNavigate = prop($$props, "onNavigate", 8, () => {
  });
  let onMoveFile = prop($$props, "onMoveFile", 8, () => {
  });
  let onMoveDir = prop($$props, "onMoveDir", 8, () => {
  });
  let breadcrumbEl = mutable_source();
  let dragOverCrumb = mutable_source(null);
  afterUpdate(() => {
    if (get(breadcrumbEl)) mutate(breadcrumbEl, get(breadcrumbEl).scrollLeft = get(breadcrumbEl).scrollWidth);
  });
  const handleDragOver = (e, index2) => {
    var _a, _b;
    const hasFile = (_a = e.dataTransfer) == null ? void 0 : _a.types.includes("application/x-kb-file-move");
    const hasDir = (_b = e.dataTransfer) == null ? void 0 : _b.types.includes("application/x-kb-dir-move");
    if (!hasFile && !hasDir) return;
    e.preventDefault();
    e.stopPropagation();
    set(dragOverCrumb, index2);
  };
  const handleDragLeave = (index2) => {
    if (get(dragOverCrumb) === index2) set(dragOverCrumb, null);
  };
  const handleDrop = (e, targetDirId) => {
    var _a, _b;
    e.preventDefault();
    e.stopPropagation();
    set(dragOverCrumb, null);
    const fileRaw = (_a = e.dataTransfer) == null ? void 0 : _a.getData("application/x-kb-file-move");
    if (fileRaw) {
      try {
        const data = JSON.parse(fileRaw);
        if (data.fileId) onMoveFile()(data.fileId, targetDirId);
      } catch {
      }
      return;
    }
    const dirRaw = (_b = e.dataTransfer) == null ? void 0 : _b.getData("application/x-kb-dir-move");
    if (dirRaw) {
      try {
        const data = JSON.parse(dirRaw);
        if (data.dirId) onMoveDir()(data.dirId, targetDirId);
      } catch {
      }
    }
  };
  init();
  var div = root_1$1();
  var button = child(div);
  var text = child(button, true);
  reset(button);
  var node = sibling(button, 2);
  each(node, 1, breadcrumbs, index, ($$anchor2, crumb, i) => {
    var fragment = root$1();
    var node_1 = first_child(fragment);
    ChevronRight(node_1, {
      className: "size-3 shrink-0 mx-0.5 text-gray-300 dark:text-gray-600"
    });
    var button_1 = sibling(node_1, 2);
    var text_1 = child(button_1, true);
    reset(button_1);
    template_effect(() => {
      set_class(button_1, 1, `text-xs shrink-0 py-0.5 hover:underline transition
				${(deep_read_state(breadcrumbs()), untrack(() => i === breadcrumbs().length - 1 ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400")) ?? ""}
				${get(dragOverCrumb) === i ? "bg-gray-100 dark:bg-gray-800 rounded-lg" : ""}`);
      set_text(text_1, (get(crumb), untrack(() => get(crumb).name)));
    });
    event("click", button_1, () => onNavigate()(get(crumb).id));
    event("dragover", button_1, (e) => handleDragOver(e, i));
    event("dragleave", button_1, () => handleDragLeave(i));
    event("drop", button_1, (e) => handleDrop(e, get(crumb).id));
    append($$anchor2, fragment);
  });
  reset(div);
  bind_this(div, ($$value) => set(breadcrumbEl, $$value), () => get(breadcrumbEl));
  template_effect(() => {
    set_class(button, 1, `text-xs shrink-0 py-0.5 hover:underline transition
			${(deep_read_state(breadcrumbs()), untrack(() => breadcrumbs().length === 0 ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400")) ?? ""}
			${get(dragOverCrumb) === -1 ? "bg-gray-100 dark:bg-gray-800 rounded-lg" : ""}`);
    set_text(text, rootLabel());
  });
  event("click", button, () => onNavigate()(null));
  event("dragover", button, (e) => handleDragOver(e, -1));
  event("dragleave", button, () => handleDragLeave(-1));
  event("drop", button, (e) => handleDrop(e, null));
  append($$anchor, div);
  pop();
}
var root = from_html(`<div class="text-xs text-gray-500"> </div>`);
var root_1 = from_html(`<div class="self-center shrink-0"><button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div>`);
var root_2 = from_html(`<div class="text-xs shrink-0 text-gray-500"> </div>`);
var root_3 = from_html(`<button class="text-xs text-gray-500 font-mono shrink-0 px-2 py-1 rounded-lg cursor-pointer hover:underline transition whitespace-nowrap"> </button>`);
var root_4 = from_html(`<button class="p-1.5 mr-1 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition" type="button"><!></button>`);
var root_5 = from_html(`<div slot="content"><div class="min-w-[180px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full" type="button"><!> </button></div></div>`);
var root_6 = from_html(`<div><!></div>`);
var root_7 = from_html(`<div class="px-5 mt-2"><!></div>`);
var root_8 = from_html(`<div class="mx-2.5 mt-2.5 -mb-0.5"><div class="flex items-center gap-2.5 rounded-xl py-2 px-3 bg-gray-50 dark:bg-gray-850"><!> <div class="text-xs text-gray-500 dark:text-gray-400 truncate"> </div></div></div>`);
var root_9 = from_html(`<div class=" flex overflow-y-auto h-full w-full scrollbar-hidden text-xs"><!></div> <!>`, 1);
var root_10 = from_html(`<div class="my-3 flex flex-col justify-center text-center text-gray-500 text-xs"><div> </div></div>`);
var root_11 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_12 = from_html(`<div><button class="flex self-center w-fit text-sm py-1 px-2.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"> <!></button></div>`);
var root_13 = from_html(`<textarea class="w-full h-full text-sm outline-none resize-none px-3 py-2"></textarea>`);
var root_14 = from_html(`<div class="flex flex-col justify-start h-full max-h-full"><div class=" flex flex-col w-full h-full max-h-full"><div class="shrink-0 flex items-center p-2"><div class="mr-2"><button class="w-full text-left text-sm p-1.5 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850"><!></button></div> <div class=" flex-1 text-lg line-clamp-1"> </div> <!></div> <!></div></div>`);
var root_15 = from_html(`<div class="flex flex-row flex-1 gap-3 px-2.5 mt-2"><div class="flex-1 flex"><div class=" flex flex-col w-full space-x-2 rounded-lg h-full"><div class="w-full h-full flex flex-col min-h-full"><!></div></div></div> <!></div>`);
var root_16 = from_html(`<div class="my-10"><!></div>`);
var root_17 = from_html(`<!> <div class="w-full px-2"><div class=" flex w-full"><div class="flex-1"><div class="flex items-center justify-between w-full"><div class="w-full flex justify-between items-center"><input type="text" class="text-left w-full text-lg bg-transparent outline-hidden flex-1"/> <div class="shrink-0 mr-2.5"><!></div></div> <!></div> <div class="flex w-full items-center"><input type="text" class="text-left text-xs w-full text-gray-500 bg-transparent outline-hidden flex-1"/> <div class="hidden md:block"><!></div></div></div></div></div> <div class="mt-2 mb-2.5 py-2 -mx-0 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30 flex-1"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!> <!></div></div> <div class="px-3 flex justify-between"><div class="flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-3 w-fit text-center text-sm rounded-full bg-transparent px-0.5 whitespace-nowrap"><!> <!> <!></div></div></div> <!> <!> <!></div>`, 1);
var root_18 = from_html(`<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3 mb-2"> </div> <div class="flex items-center gap-1.5"><input type="checkbox"/> <div class="text-xs text-gray-500"> </div></div>`, 1);
var root_19 = from_html(`<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3"> </div>`);
var root_20 = from_html(`<!> <!> <!> <!> <!> <input id="files-input" type="file" multiple="" hidden=""/> <div class="flex flex-col w-full h-full min-h-full" id="collection-container"><!></div> <!> <!>`, 1);
function KnowledgeBase($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let largeScreen = true;
  let showAddWebpageModal = mutable_source(false);
  let showAddTextContentModal = mutable_source(false);
  let showNewDirectoryModal = mutable_source(false);
  let showSyncConfirmModal = mutable_source(false);
  let pendingSyncFiles = mutable_source(null);
  let syncing = mutable_source(null);
  let showAccessControlModal = mutable_source(false);
  let showResetConfirm = mutable_source(false);
  let id = mutable_source(null);
  let knowledge = mutable_source(null);
  let knowledgeId = mutable_source(null);
  let selectedFileId = mutable_source(null);
  let selectedFile = mutable_source(null);
  let selectedFileContent = mutable_source("");
  let inputFiles = mutable_source(null);
  let query = mutable_source("");
  let includeContent = mutable_source(false);
  let searchDebounceTimer = mutable_source();
  let viewOption = mutable_source(null);
  let sortKey = mutable_source(null);
  let direction = mutable_source(null);
  let currentPage = mutable_source(1);
  let fileItems = mutable_source(null);
  let fileItemsTotal = mutable_source(null);
  let currentDirectoryId = mutable_source(null);
  let directoryItems = mutable_source([]);
  let breadcrumbs = mutable_source([]);
  let showDeleteDirectoryConfirm = mutable_source(false);
  let pendingDeleteDirectoryId = mutable_source(null);
  let deleteDirectoryContents = mutable_source(true);
  let pendingPollTimer = null;
  const reset$1 = () => {
    set(currentPage, 1);
  };
  const init$1 = async () => {
    reset$1();
    await getItemsPage();
  };
  const getItemsPage = async () => {
    if (get(knowledgeId) === null) return;
    set(fileItems, null);
    set(fileItemsTotal, null);
    if (get(sortKey) === null) {
      set(direction, null);
    }
    const res = await searchKnowledgeFilesById(localStorage.token, get(knowledge).id, get(query), get(viewOption), get(sortKey), get(direction), get(currentPage), get(currentDirectoryId), get(includeContent)).catch(() => {
      return null;
    });
    if (res) {
      set(fileItems, res.items);
      set(fileItemsTotal, res.total);
      set(directoryItems, res.directories ?? []);
      set(breadcrumbs, res.breadcrumbs ?? []);
      try {
        const pendingFiles = await getPendingKnowledgeFiles(localStorage.token, get(knowledgeId));
        if (pendingFiles && pendingFiles.length > 0) {
          const existingIds = new Set(get(fileItems).map((f) => f.id));
          const newPending = pendingFiles.filter((f) => !existingIds.has(f.id)).map((f) => {
            var _a;
            return { ...f, name: ((_a = f.meta) == null ? void 0 : _a.name) ?? f.filename, status: "uploading" };
          });
          if (newPending.length > 0) {
            set(fileItems, [...newPending, ...get(fileItems)]);
            if (!pendingPollTimer) {
              pendingPollTimer = setInterval(
                async () => {
                  try {
                    const still = await getPendingKnowledgeFiles(localStorage.token, get(knowledgeId));
                    if (!still || still.length === 0) {
                      clearInterval(pendingPollTimer);
                      pendingPollTimer = null;
                      init$1();
                    }
                  } catch {
                  }
                },
                5e3
              );
            }
          }
        }
      } catch (e) {
        console.warn("Failed to fetch pending files:", e);
      }
    }
    return res;
  };
  const fileSelectHandler = async (file) => {
    var _a, _b;
    try {
      set(selectedFile, file);
      set(selectedFileContent, ((_b = (_a = get(selectedFile)) == null ? void 0 : _a.data) == null ? void 0 : _b.content) || "");
    } catch (e) {
      toast.error($i18n().t("Failed to load file content."));
    }
  };
  const createFileFromText = (name, content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const file = blobToFile(blob, `${name}.txt`);
    /* @__PURE__ */ console.log(file);
    return file;
  };
  const uploadWeb = async (urls) => {
    if (!Array.isArray(urls)) {
      urls = [urls];
    }
    const newFileItems = urls.map((url) => ({
      type: "file",
      file: "",
      id: null,
      url,
      name: url,
      size: null,
      status: "uploading",
      error: "",
      itemId: v4()
    }));
    set(fileItems, [...newFileItems, ...get(fileItems) ?? []]);
    for (const fileItem of newFileItems) {
      try {
        /* @__PURE__ */ console.log(fileItem);
        const res = await processWeb(localStorage.token, "", fileItem.url, false).catch((e) => {
          /* @__PURE__ */ console.error("Error processing web URL:", e);
          return null;
        });
        if (res) {
          /* @__PURE__ */ console.log(res);
          const file = createFileFromText(
            // Use URL as filename, sanitized
            fileItem.url.replace(/[^a-z0-9]/gi, "_").toLowerCase().slice(0, 50),
            res.content
          );
          const uploadedFile = await uploadFile(localStorage.token, file, {
            knowledge_id: get(knowledge).id,
            directory_id: get(currentDirectoryId)
          }).catch((e) => {
            toast.error(`${e}`);
            return null;
          });
          if (uploadedFile) {
            /* @__PURE__ */ console.log(uploadedFile);
            set(fileItems, get(fileItems).map((item) => {
              if (item.itemId === fileItem.itemId) {
                item.id = uploadedFile.id;
              }
              return item;
            }));
            if (uploadedFile.error) {
              console.warn("File upload warning:", uploadedFile.error);
              toast.warning(uploadedFile.error);
              set(fileItems, get(fileItems).filter((file2) => file2.id !== uploadedFile.id));
            } else {
              toast.success($i18n().t("File added successfully."));
              init$1();
            }
          } else {
            toast.error($i18n().t("Failed to upload file."));
          }
        } else {
          set(fileItems, get(fileItems).filter((item) => item.itemId !== fileItem.itemId));
          toast.error($i18n().t("Failed to process URL: {{url}}", { url: fileItem.url }));
        }
      } catch (e) {
        set(fileItems, get(fileItems).filter((item) => item.itemId !== fileItem.itemId));
        toast.error(`${e}`);
      }
    }
  };
  const uploadFileHandler = async (file) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    /* @__PURE__ */ console.log(file);
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      size: file.size,
      status: "uploading",
      error: "",
      itemId: v4()
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
      /* @__PURE__ */ console.log("File exceeds max size limit:", {
        fileSize: file.size,
        maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
      });
      toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
      return;
    }
    set(fileItems, [fileItem, ...get(fileItems) ?? []]);
    try {
      let metadata = {
        knowledge_id: get(knowledge).id,
        directory_id: get(currentDirectoryId),
        // If the file is an audio file, provide the language for STT.
        ...(file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_k = (_j = (_i = $settings()) == null ? void 0 : _i.audio) == null ? void 0 : _j.stt) == null ? void 0 : _k.language) ? { language: (_n = (_m = (_l = $settings()) == null ? void 0 : _l.audio) == null ? void 0 : _m.stt) == null ? void 0 : _n.language } : {}
      };
      const uploadedFile = await uploadFile(localStorage.token, file, metadata).catch((e) => {
        toast.error(`${e}`);
        return null;
      });
      if (uploadedFile) {
        /* @__PURE__ */ console.log(uploadedFile);
        set(fileItems, get(fileItems).map((item) => {
          if (item.itemId === fileItem.itemId) {
            item.id = uploadedFile.id;
          }
          return item;
        }));
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
          set(fileItems, get(fileItems).filter((file2) => file2.id !== uploadedFile.id));
        } else {
          toast.success($i18n().t("File added successfully."));
          init$1();
        }
      } else {
        toast.error($i18n().t("Failed to upload file."));
      }
    } catch (e) {
      toast.error(`${e}`);
    }
  };
  const uploadDirectoryHandler = async () => {
    const isFileSystemAccessSupported = "showDirectoryPicker" in window;
    try {
      if (isFileSystemAccessSupported) {
        await handleModernBrowserUpload();
      } else {
        await handleFirefoxUpload();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };
  const hasHiddenFolder = (path) => {
    return path.split("/").some((part) => part.startsWith("."));
  };
  const handleModernBrowserUpload = async () => {
    const dirHandle = await window.showDirectoryPicker();
    let totalFiles = 0;
    let uploadedFiles = 0;
    const updateProgress = () => {
      const percentage = uploadedFiles / totalFiles * 100;
      toast.info($i18n().t("Upload Progress: {{uploadedFiles}}/{{totalFiles}} ({{percentage}}%)", { uploadedFiles, totalFiles, percentage: percentage.toFixed(2) }));
    };
    async function countFiles(dirHandle2) {
      for await (const entry of dirHandle2.values()) {
        if (entry.name.startsWith(".")) continue;
        if (entry.kind === "file") {
          totalFiles++;
        } else if (entry.kind === "directory") {
          if (!entry.name.startsWith(".")) {
            await countFiles(entry);
          }
        }
      }
    }
    async function processDirectory(dirHandle2, path = "") {
      for await (const entry of dirHandle2.values()) {
        if (entry.name.startsWith(".")) continue;
        const entryPath = path ? `${path}/${entry.name}` : entry.name;
        if (hasHiddenFolder(entryPath)) continue;
        if (entry.kind === "file") {
          const file = await entry.getFile();
          const fileWithPath = new File([file], entryPath, { type: file.type });
          await uploadFileHandler(fileWithPath);
          uploadedFiles++;
          updateProgress();
        } else if (entry.kind === "directory") {
          if (!entry.name.startsWith(".")) {
            await processDirectory(entry, entryPath);
          }
        }
      }
    }
    await countFiles(dirHandle);
    updateProgress();
    if (totalFiles > 0) {
      await processDirectory(dirHandle);
    } else {
      /* @__PURE__ */ console.log("No files to upload.");
    }
  };
  const handleFirefoxUpload = async () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.webkitdirectory = true;
      input.directory = true;
      input.multiple = true;
      input.style.display = "none";
      document.body.appendChild(input);
      input.onchange = async () => {
        try {
          const files = Array.from(input.files).filter((file) => !hasHiddenFolder(file.webkitRelativePath));
          let totalFiles = files.length;
          let uploadedFiles = 0;
          const updateProgress = () => {
            const percentage = uploadedFiles / totalFiles * 100;
            toast.info($i18n().t("Upload Progress: {{uploadedFiles}}/{{totalFiles}} ({{percentage}}%)", { uploadedFiles, totalFiles, percentage: percentage.toFixed(2) }));
          };
          updateProgress();
          for (const file of files) {
            if (!file.name.startsWith(".")) {
              const relativePath = file.webkitRelativePath || file.name;
              const fileWithPath = new File([file], relativePath, { type: file.type });
              await uploadFileHandler(fileWithPath);
              uploadedFiles++;
              updateProgress();
            }
          }
          document.body.removeChild(input);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      input.onerror = (error) => {
        document.body.removeChild(input);
        reject(error);
      };
      input.click();
    });
  };
  const handleUploadError = (error) => {
    if (error.name === "AbortError") {
      toast.info($i18n().t("Directory selection was cancelled"));
    } else {
      toast.error($i18n().t("Error accessing directory"));
      /* @__PURE__ */ console.error("Directory access error:", error);
    }
  };
  const collectDirectoryFiles = async () => {
    const isFileSystemAccessSupported = "showDirectoryPicker" in window;
    try {
      if (isFileSystemAccessSupported) {
        const dirHandle = await window.showDirectoryPicker();
        const collected = [];
        async function traverse(handle, dirPath = "") {
          for await (const entry of handle.values()) {
            if (entry.name.startsWith(".")) continue;
            const entryPath = dirPath ? `${dirPath}/${entry.name}` : entry.name;
            if (hasHiddenFolder(entryPath)) continue;
            if (entry.kind === "file") {
              const file = await entry.getFile();
              collected.push({ path: dirPath, filename: entry.name, file });
            } else if (entry.kind === "directory") {
              await traverse(entry, entryPath);
            }
          }
        }
        await traverse(dirHandle);
        return collected;
      } else {
        return new Promise((resolve, reject) => {
          const input = document.createElement("input");
          input.type = "file";
          input.webkitdirectory = true;
          input.directory = true;
          input.multiple = true;
          input.style.display = "none";
          document.body.appendChild(input);
          input.onchange = () => {
            try {
              const files = Array.from(input.files || []).filter((file) => !hasHiddenFolder(file.webkitRelativePath) && !file.name.startsWith("."));
              const collected = files.map((file) => {
                const parts = file.webkitRelativePath.split("/");
                const withoutRoot = parts.slice(1);
                const filename = withoutRoot.pop() || file.name;
                const path = withoutRoot.join("/");
                return { path, filename, file };
              });
              document.body.removeChild(input);
              resolve(collected);
            } catch (error) {
              document.body.removeChild(input);
              reject(error);
            }
          };
          input.onerror = (error) => {
            document.body.removeChild(input);
            reject(error);
          };
          input.click();
        });
      }
    } catch (error) {
      handleUploadError(error);
      return null;
    }
  };
  const syncDirectoryHandler = async () => {
    var _a;
    if (!((_a = get(pendingSyncFiles)) == null ? void 0 : _a.length)) return;
    try {
      set(syncing, $i18n().t("Computing checksums ({{count}} files)", { count: get(pendingSyncFiles).length }));
      const manifest = await Promise.all(get(pendingSyncFiles).map(async (entry) => ({
        ...entry,
        checksum: await computeFileHash(entry.file),
        size: entry.file.size
      })));
      set(pendingSyncFiles, null);
      set(syncing, $i18n().t("Comparing with knowledge base..."));
      const diff = await syncKnowledgeDiff(localStorage.token, get(id), manifest.map(({ filename, path, checksum, size }) => ({ filename, path, checksum, size })));
      if (!diff) {
        toast.error($i18n().t("Failed to compare files."));
        return;
      }
      const staleFileIds = [
        ...diff.deleted.map((d) => d.file_id),
        ...diff.modified.map((m) => m.stale_file_id)
      ];
      if (staleFileIds.length > 0 || diff.rmdir.length > 0) {
        set(syncing, $i18n().t("Removing {{count}} stale files...", { count: staleFileIds.length }));
        await syncKnowledgeCleanup(localStorage.token, get(id), staleFileIds, diff.rmdir);
      }
      const directoryIdByPath = { ...diff.directory_map || {} };
      for (const dirPath of diff.mkdir) {
        const segments = dirPath.split("/");
        const name = segments.at(-1);
        const parentPath = segments.slice(0, -1).join("/");
        const parentId = parentPath ? directoryIdByPath[parentPath] : null;
        const directory = await createKnowledgeDirectory(localStorage.token, get(knowledge).id, name, parentId);
        if (directory) {
          directoryIdByPath[dirPath] = directory.id;
        }
      }
      const filesToUpload = manifest.filter((entry) => diff.added.some((a) => a.filename === entry.filename && a.path === entry.path) || diff.modified.some((m) => m.filename === entry.filename && m.path === entry.path));
      let uploadedCount = 0;
      for (const entry of filesToUpload) {
        uploadedCount++;
        const displayPath = entry.path ? `${entry.path}/${entry.filename}` : entry.filename;
        set(syncing, $i18n().t("Uploading {{current}}/{{total}}: {{file}}", {
          current: uploadedCount,
          total: filesToUpload.length,
          file: displayPath
        }));
        const fileObject = new File([entry.file], entry.filename, { type: entry.file.type });
        await uploadFile(localStorage.token, fileObject, {
          knowledge_id: get(knowledge).id,
          file_hash: entry.checksum,
          directory_id: entry.path ? directoryIdByPath[entry.path] : null
        }).catch(() => null);
      }
      toast.success($i18n().t("Sync complete: {{added}} added, {{modified}} modified, {{deleted}} deleted, {{unmodified}} unmodified", {
        added: diff.added.length,
        modified: diff.modified.length,
        deleted: diff.deleted.length,
        unmodified: diff.unmodified_count
      }));
      init$1();
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      set(syncing, null);
    }
  };
  const navigateToDirectory = (directoryId) => {
    set(currentDirectoryId, directoryId);
    set(currentPage, 1);
    set(selectedFileId, null);
    set(selectedFile, null);
    getItemsPage();
  };
  const createDirectoryHandler = async (name) => {
    const res = await createKnowledgeDirectory(localStorage.token, get(knowledge).id, name, get(currentDirectoryId)).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Directory created."));
      getItemsPage();
    }
  };
  const renameDirectoryHandler = async (dirId, name) => {
    const res = await updateKnowledgeDirectory(localStorage.token, get(knowledge).id, dirId, { name }).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Directory renamed."));
      getItemsPage();
    }
  };
  const confirmDeleteDirectory = (dirId) => {
    set(pendingDeleteDirectoryId, dirId);
    set(showDeleteDirectoryConfirm, true);
  };
  const deleteDirectoryHandler = async (moveFiles) => {
    if (!get(pendingDeleteDirectoryId)) return;
    const res = await deleteKnowledgeDirectory(localStorage.token, get(knowledge).id, get(pendingDeleteDirectoryId), moveFiles).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Directory deleted."));
      getItemsPage();
    }
    set(pendingDeleteDirectoryId, null);
  };
  const moveFileToDirectoryHandler = async (fileId, directoryId) => {
    const res = await moveFileInKnowledge(localStorage.token, get(knowledge).id, fileId, directoryId).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("File moved."));
      getItemsPage();
    }
  };
  const moveDirectoryHandler = async (dirId, targetParentId) => {
    if (dirId === targetParentId) return;
    const res = await updateKnowledgeDirectory(localStorage.token, get(knowledge).id, dirId, { parent_id: targetParentId }).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Directory moved."));
      getItemsPage();
    }
  };
  const deleteFileHandler = async (fileId) => {
    try {
      /* @__PURE__ */ console.log("Starting file deletion process for:", fileId);
      const res = await removeFileFromKnowledgeById(localStorage.token, get(id), fileId);
      /* @__PURE__ */ console.log("Knowledge base updated:", res);
      if (res) {
        toast.success($i18n().t("File removed successfully."));
        await init$1();
      }
    } catch (e) {
      /* @__PURE__ */ console.error("Error in deleteFileHandler:", e);
      toast.error(`${e}`);
    }
  };
  const renameFileHandler = async (fileId, name) => {
    try {
      const res = await renameFileById(localStorage.token, fileId, name);
      if (res) {
        toast.success($i18n().t("File renamed."));
        getItemsPage();
      }
    } catch (e) {
      toast.error(`${e}`);
    }
  };
  let debounceTimeout = null;
  let mediaQuery;
  let dragged = mutable_source(false);
  let isSaving = mutable_source(false);
  const updateFileContentHandler = async () => {
    if (get(isSaving)) {
      /* @__PURE__ */ console.log("Save operation already in progress, skipping...");
      return;
    }
    set(isSaving, true);
    try {
      const res = await updateFileDataContentById(localStorage.token, get(selectedFile).id, get(selectedFileContent)).catch((e) => {
        toast.error(`${e}`);
        return null;
      });
      if (res) {
        toast.success($i18n().t("File content updated successfully."));
        set(selectedFileId, null);
        set(selectedFile, null);
        set(selectedFileContent, "");
        await init$1();
      }
    } finally {
      set(isSaving, false);
    }
  };
  const changeDebounceHandler = () => {
    /* @__PURE__ */ console.log("debounce");
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(
      async () => {
        if (get(knowledge).name.trim() === "" || get(knowledge).description.trim() === "") {
          toast.error($i18n().t("Please fill in all fields."));
          return;
        }
        const res = await updateKnowledgeById(localStorage.token, get(id), {
          ...get(knowledge),
          name: get(knowledge).name,
          description: get(knowledge).description,
          access_grants: get(knowledge).access_grants ?? []
        }).catch((e) => {
          toast.error(`${e}`);
        });
        if (res) {
          toast.success($i18n().t("Knowledge updated successfully"));
        }
      },
      1e3
    );
  };
  const handleMediaQuery = async (e) => {
    if (e.matches) {
      largeScreen = true;
    } else {
      largeScreen = false;
    }
  };
  const onDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) {
      set(dragged, true);
    } else {
      set(dragged, false);
    }
  };
  const onDragLeave = () => {
    set(dragged, false);
  };
  const onDrop = async (e) => {
    var _a, _b, _c, _d, _e;
    e.preventDefault();
    set(dragged, false);
    if (!((_a = get(knowledge)) == null ? void 0 : _a.write_access)) {
      toast.error($i18n().t("You do not have permission to upload files to this knowledge base."));
      return;
    }
    const handleUploadingFileFolder = (items) => {
      for (const item of items) {
        if (item.isFile) {
          item.file((file) => {
            uploadFileHandler(file);
          });
          continue;
        }
        const wkentry = item.webkitGetAsEntry();
        const isDirectory = wkentry.isDirectory;
        if (isDirectory) {
          wkentry.createReader().readEntries(
            (entries) => {
              handleUploadingFileFolder(entries);
            },
            (error) => {
              /* @__PURE__ */ console.error("Error reading directory entries:", error);
            }
          );
        } else {
          uploadFileHandler(item.getAsFile());
        }
      }
    };
    if ((_c = (_b = e.dataTransfer) == null ? void 0 : _b.types) == null ? void 0 : _c.includes("Files")) {
      if ((_d = e.dataTransfer) == null ? void 0 : _d.files) {
        const inputItems = (_e = e.dataTransfer) == null ? void 0 : _e.items;
        if (inputItems && inputItems.length > 0) {
          handleUploadingFileFolder(inputItems);
        } else {
          toast.error($i18n().t(`File not found.`));
        }
      }
    }
  };
  onMount(async () => {
    var _a, _b;
    mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    const container = document.getElementById("collection-container");
    !largeScreen ? 100 : Math.floor(300 / container.clientWidth * 100);
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        entry.contentRect.width;
      }
    });
    resizeObserver.observe(container);
    set(id, $page().params.id);
    const res = await getKnowledgeById(localStorage.token, get(id)).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      set(knowledge, res);
      if (!Array.isArray((_a = get(knowledge)) == null ? void 0 : _a.access_grants)) {
        mutate(knowledge, get(knowledge).access_grants = []);
      }
      set(knowledgeId, (_b = get(knowledge)) == null ? void 0 : _b.id);
    } else {
      goto("/workspace/knowledge");
    }
    const dropZone = document.querySelector("body");
    dropZone == null ? void 0 : dropZone.addEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.addEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.addEventListener("dragleave", onDragLeave);
  });
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
    if (pendingPollTimer) {
      clearInterval(pendingPollTimer);
      pendingPollTimer = null;
    }
    mediaQuery == null ? void 0 : mediaQuery.removeEventListener("change", handleMediaQuery);
    const dropZone = document.querySelector("body");
    dropZone == null ? void 0 : dropZone.removeEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.removeEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.removeEventListener("dragleave", onDragLeave);
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer)), () => {
    if (get(query) !== void 0) {
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          getItemsPage();
        },
        300
      ));
    }
  });
  legacy_pre_effect(
    () => (get(knowledgeId), get(viewOption), get(sortKey), get(direction), get(currentPage), get(includeContent)),
    () => {
      if (get(knowledgeId) !== null && get(viewOption) !== void 0 && get(sortKey) !== void 0 && get(direction) !== void 0 && get(currentPage) !== void 0 && get(includeContent) !== void 0) {
        getItemsPage();
      }
    }
  );
  legacy_pre_effect(
    () => (get(query), get(viewOption), get(sortKey), get(direction)),
    () => {
      if (get(query) !== void 0 && get(viewOption) !== void 0 && get(sortKey) !== void 0 && get(direction) !== void 0) {
        reset$1();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root_20();
  var node = first_child(fragment);
  FilesOverlay(node, {
    get show() {
      return get(dragged);
    }
  });
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), get(pendingSyncFiles), untrack(() => {
      var _a;
      return $i18n().t("{{count}} files selected. Only new and modified files will be uploaded. Deleted files will be removed. The folder structure will be mirrored. Continue?", { count: ((_a = get(pendingSyncFiles)) == null ? void 0 : _a.length) ?? 0 });
    })));
    ConfirmDialog(node_1, {
      get message() {
        return get($0);
      },
      get show() {
        return get(showSyncConfirmModal);
      },
      set show($$value) {
        set(showSyncConfirmModal, $$value);
      },
      $$events: {
        confirm: () => {
          syncDirectoryHandler();
        },
        cancel: () => {
          set(pendingSyncFiles, null);
        }
      },
      $$legacy: true
    });
  }
  var node_2 = sibling(node_1, 2);
  AttachWebpageModal(node_2, {
    onSubmit: async (e) => {
      uploadWeb(e.data);
    },
    get show() {
      return get(showAddWebpageModal);
    },
    set show($$value) {
      set(showAddWebpageModal, $$value);
    },
    $$legacy: true
  });
  var node_3 = sibling(node_2, 2);
  AddTextContentModal(node_3, {
    get show() {
      return get(showAddTextContentModal);
    },
    set show($$value) {
      set(showAddTextContentModal, $$value);
    },
    $$events: {
      submit: (e) => {
        const file = createFileFromText(e.detail.name, e.detail.content);
        uploadFileHandler(file);
      }
    },
    $$legacy: true
  });
  var node_4 = sibling(node_3, 2);
  NewDirectoryModal(node_4, {
    get show() {
      return get(showNewDirectoryModal);
    },
    set show($$value) {
      set(showNewDirectoryModal, $$value);
    },
    $$events: {
      submit: (e) => {
        createDirectoryHandler(e.detail.name);
      }
    },
    $$legacy: true
  });
  var input_1 = sibling(node_4, 2);
  var div = sibling(input_1, 2);
  var node_5 = child(div);
  {
    var consequent_12 = ($$anchor2) => {
      var fragment_1 = root_17();
      var node_6 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        let $1 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        let $2 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return (((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.access_grants) == null ? void 0 : _c.allow_users) ?? true) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        AccessControlModal(node_6, {
          get share() {
            return get($0);
          },
          get sharePublic() {
            return get($1);
          },
          get shareUsers() {
            return get($2);
          },
          onChange: async () => {
            try {
              await updateKnowledgeAccessGrants(localStorage.token, get(id), get(knowledge).access_grants ?? []);
              toast.success($i18n().t("Saved"));
            } catch (error) {
              toast.error(`${error}`);
            }
          },
          accessRoles: ["read", "write"],
          get show() {
            return get(showAccessControlModal);
          },
          set show($$value) {
            set(showAccessControlModal, $$value);
          },
          get accessGrants() {
            return get(knowledge).access_grants;
          },
          set accessGrants($$value) {
            mutate(knowledge, get(knowledge).access_grants = $$value);
          },
          $$legacy: true
        });
      }
      var div_1 = sibling(node_6, 2);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var input_2 = child(div_5);
      remove_input_defaults(input_2);
      var div_6 = sibling(input_2, 2);
      var node_7 = child(div_6);
      {
        var consequent = ($$anchor3) => {
          var div_7 = root();
          var text = child(div_7, true);
          reset(div_7);
          template_effect(($0) => set_text(text, $0), [
            () => ($i18n(), get(fileItemsTotal), untrack(() => $i18n().t("{{COUNT}} files", { COUNT: get(fileItemsTotal) })))
          ]);
          append($$anchor3, div_7);
        };
        if_block(node_7, ($$render) => {
          if (get(fileItemsTotal)) $$render(consequent);
        });
      }
      reset(div_6);
      reset(div_5);
      var node_8 = sibling(div_5, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_8 = root_1();
          var button = child(div_8);
          var node_9 = child(button);
          LockClosed(node_9, { strokeWidth: "2.5", className: "size-3.5" });
          var div_9 = sibling(node_9, 2);
          var text_1 = child(div_9, true);
          reset(div_9);
          reset(button);
          reset(div_8);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Access")))]);
          event("click", button, () => {
            set(showAccessControlModal, true);
          });
          append($$anchor3, div_8);
        };
        var alternate = ($$anchor3) => {
          var div_10 = root_2();
          var text_2 = child(div_10, true);
          reset(div_10);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Read Only")))]);
          append($$anchor3, div_10);
        };
        if_block(node_8, ($$render) => {
          if (get(knowledge), untrack(() => {
            var _a;
            return (_a = get(knowledge)) == null ? void 0 : _a.write_access;
          })) $$render(consequent_1);
          else $$render(alternate, -1);
        });
      }
      reset(div_4);
      var div_11 = sibling(div_4, 2);
      var input_3 = child(div_11);
      remove_input_defaults(input_3);
      var div_12 = sibling(input_3, 2);
      var node_10 = child(div_12);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Click to copy ID"))));
        Tooltip(node_10, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_1 = root_3();
            var text_3 = child(button_1, true);
            reset(button_1);
            template_effect(() => set_text(text_3, get(id)));
            event("click", button_1, () => {
              copyToClipboard(get(id));
              toast.success($i18n().t("ID copied to clipboard"));
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
      reset(div_12);
      reset(div_11);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var div_13 = sibling(div_1, 2);
      var div_14 = child(div_13);
      var div_15 = child(div_14);
      var div_16 = child(div_15);
      var node_11 = child(div_16);
      Search(node_11, { className: "size-3.5" });
      reset(div_16);
      var input_4 = sibling(div_16, 2);
      remove_input_defaults(input_4);
      var node_12 = sibling(input_4, 2);
      Dropdown(node_12, {
        align: "end",
        children: ($$anchor3, $$slotProps) => {
          var button_2 = root_4();
          var node_13 = child(button_2);
          AdjustmentsHorizontal(node_13, { className: "size-3.5", strokeWidth: "2" });
          reset(button_2);
          append($$anchor3, button_2);
        },
        $$slots: {
          default: true,
          content: ($$anchor3, $$slotProps) => {
            var div_17 = root_5();
            var div_18 = child(div_17);
            var button_3 = child(div_18);
            var node_14 = child(button_3);
            {
              let $0 = derived_safe_equal(() => get(includeContent) ? "checked" : "unchecked");
              Checkbox(node_14, {
                get state() {
                  return get($0);
                },
                $$events: {
                  change: (e) => {
                    set(includeContent, e.detail === "checked");
                  }
                }
              });
            }
            var text_4 = sibling(node_14);
            reset(button_3);
            reset(div_18);
            reset(div_17);
            template_effect(($0) => set_text(text_4, ` ${$0 ?? ""}`), [() => ($i18n(), untrack(() => $i18n().t("File content")))]);
            event("click", button_3, () => {
              set(includeContent, !get(includeContent));
            });
            append($$anchor3, div_17);
          }
        }
      });
      var node_15 = sibling(node_12, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_19 = root_6();
          var node_16 = child(div_19);
          AddContentMenu(node_16, {
            onUpload: (data) => {
              if (data.type === "directory") {
                uploadDirectoryHandler();
              } else if (data.type === "new_directory") {
                set(showNewDirectoryModal, true);
              } else if (data.type === "web") {
                set(showAddWebpageModal, true);
              } else if (data.type === "text") {
                set(showAddTextContentModal, true);
              } else {
                document.getElementById("files-input").click();
              }
            },
            onSync: async () => {
              var _a;
              set(pendingSyncFiles, await collectDirectoryFiles());
              if ((_a = get(pendingSyncFiles)) == null ? void 0 : _a.length) {
                set(showSyncConfirmModal, true);
              }
            },
            onReset: () => {
              set(showResetConfirm, true);
            }
          });
          reset(div_19);
          append($$anchor3, div_19);
        };
        if_block(node_15, ($$render) => {
          if (get(knowledge), untrack(() => {
            var _a;
            return (_a = get(knowledge)) == null ? void 0 : _a.write_access;
          })) $$render(consequent_2);
        });
      }
      reset(div_15);
      reset(div_14);
      var div_20 = sibling(div_14, 2);
      var div_21 = child(div_20);
      var div_22 = child(div_21);
      var node_17 = child(div_22);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: null, label: $i18n().t("All") },
          { value: "created", label: $i18n().t("Created by you") },
          { value: "shared", label: $i18n().t("Shared with you") }
        ])));
        DropdownOptions(node_17, {
          align: "start",
          className: "flex shrink-0 items-center gap-2 px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-850 rounded-xl placeholder-gray-400 outline-hidden focus:outline-hidden",
          get items() {
            return get($0);
          },
          onChange: (value) => {
            if (value) {
              localStorage.workspaceViewOption = value;
            } else {
              delete localStorage.workspaceViewOption;
            }
          },
          get value() {
            return get(viewOption);
          },
          set value($$value) {
            set(viewOption, $$value);
          },
          $$legacy: true
        });
      }
      var node_18 = sibling(node_17, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sort"))));
        let $1 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: "name", label: $i18n().t("Name") },
          { value: "created_at", label: $i18n().t("Created At") },
          { value: "updated_at", label: $i18n().t("Updated At") }
        ])));
        DropdownOptions(node_18, {
          align: "start",
          get placeholder() {
            return get($0);
          },
          get items() {
            return get($1);
          },
          get value() {
            return get(sortKey);
          },
          set value($$value) {
            set(sortKey, $$value);
          },
          $$legacy: true
        });
      }
      var node_19 = sibling(node_18, 2);
      {
        var consequent_3 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
              { value: "asc", label: $i18n().t("Asc") },
              { value: null, label: $i18n().t("Desc") }
            ])));
            DropdownOptions($$anchor3, {
              align: "start",
              get items() {
                return get($0);
              },
              get value() {
                return get(direction);
              },
              set value($$value) {
                set(direction, $$value);
              },
              $$legacy: true
            });
          }
        };
        if_block(node_19, ($$render) => {
          if (get(sortKey)) $$render(consequent_3);
        });
      }
      reset(div_22);
      reset(div_21);
      reset(div_20);
      var node_20 = sibling(div_20, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_23 = root_7();
          var node_21 = child(div_23);
          KnowledgeBreadcrumbs(node_21, {
            get rootLabel() {
              return get(knowledge), untrack(() => get(knowledge).name);
            },
            get breadcrumbs() {
              return get(breadcrumbs);
            },
            onNavigate: (dirId) => navigateToDirectory(dirId),
            onMoveFile: (fileId, dirId) => moveFileToDirectoryHandler(fileId, dirId),
            onMoveDir: (dirId, targetId) => moveDirectoryHandler(dirId, targetId)
          });
          reset(div_23);
          append($$anchor3, div_23);
        };
        if_block(node_20, ($$render) => {
          if (get(currentDirectoryId) !== null) $$render(consequent_4);
        });
      }
      var node_22 = sibling(node_20, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_24 = root_8();
          var div_25 = child(div_24);
          var node_23 = child(div_25);
          Spinner(node_23, { className: "size-3.5 shrink-0" });
          var div_26 = sibling(node_23, 2);
          var text_5 = child(div_26, true);
          reset(div_26);
          reset(div_25);
          reset(div_24);
          template_effect(() => set_text(text_5, get(syncing)));
          append($$anchor3, div_24);
        };
        if_block(node_22, ($$render) => {
          if (get(syncing)) $$render(consequent_5);
        });
      }
      var node_24 = sibling(node_22, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_27 = root_15();
          var div_28 = child(div_27);
          var div_29 = child(div_28);
          var div_30 = child(div_29);
          var node_25 = child(div_30);
          {
            var consequent_7 = ($$anchor4) => {
              var fragment_3 = root_9();
              var div_31 = first_child(fragment_3);
              var node_26 = child(div_31);
              Files(node_26, {
                get files() {
                  return get(fileItems);
                },
                get directories() {
                  return get(directoryItems);
                },
                get knowledge() {
                  return get(knowledge);
                },
                get selectedFileId() {
                  return get(selectedFileId);
                },
                onClick: (fileId) => {
                  set(selectedFileId, fileId);
                  if (get(fileItems)) {
                    const file = get(fileItems).find((file2) => file2.id === get(selectedFileId));
                    if (file) {
                      fileSelectHandler(file);
                    } else {
                      set(selectedFile, null);
                    }
                  }
                },
                onDelete: (fileId) => {
                  set(selectedFileId, null);
                  set(selectedFile, null);
                  deleteFileHandler(fileId);
                },
                onRename: (fileId, name) => renameFileHandler(fileId, name),
                onNavigateDirectory: (dirId) => navigateToDirectory(dirId),
                onRenameDirectory: (id2, name) => renameDirectoryHandler(id2, name),
                onDeleteDirectory: (id2) => confirmDeleteDirectory(id2),
                onMoveFileToDirectory: (fileId, dirId) => moveFileToDirectoryHandler(fileId, dirId),
                onMoveDirectoryToDirectory: (dirId, targetId) => moveDirectoryHandler(dirId, targetId)
              });
              reset(div_31);
              var node_27 = sibling(div_31, 2);
              {
                var consequent_6 = ($$anchor5) => {
                  Pagination_1($$anchor5, {
                    get count() {
                      return get(fileItemsTotal);
                    },
                    perPage: 30,
                    get page() {
                      return get(currentPage);
                    },
                    set page($$value) {
                      set(currentPage, $$value);
                    },
                    $$legacy: true
                  });
                };
                if_block(node_27, ($$render) => {
                  if (get(fileItemsTotal) > 30) $$render(consequent_6);
                });
              }
              append($$anchor4, fragment_3);
            };
            var alternate_1 = ($$anchor4) => {
              var div_32 = root_10();
              var div_33 = child(div_32);
              var text_6 = child(div_33, true);
              reset(div_33);
              reset(div_32);
              template_effect(($0) => set_text(text_6, $0), [
                () => ($i18n(), untrack(() => $i18n().t("No content found")))
              ]);
              append($$anchor4, div_32);
            };
            if_block(node_25, ($$render) => {
              if (get(fileItems), get(directoryItems), untrack(() => get(fileItems).length > 0 || get(directoryItems).length > 0)) $$render(consequent_7);
              else $$render(alternate_1, -1);
            });
          }
          reset(div_30);
          reset(div_29);
          reset(div_28);
          var node_28 = sibling(div_28, 2);
          {
            var consequent_10 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => get(selectedFileId) !== null);
                Drawer($$anchor4, {
                  className: "h-full",
                  get show() {
                    return get($0);
                  },
                  onClose: () => {
                    set(selectedFileId, null);
                    set(selectedFile, null);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var div_34 = root_14();
                    var div_35 = child(div_34);
                    var div_36 = child(div_35);
                    var div_37 = child(div_36);
                    var button_4 = child(div_37);
                    var node_29 = child(button_4);
                    ChevronLeft(node_29, { strokeWidth: "2.5" });
                    reset(button_4);
                    reset(div_37);
                    var div_38 = sibling(div_37, 2);
                    var text_7 = child(div_38, true);
                    reset(div_38);
                    var node_30 = sibling(div_38, 2);
                    {
                      var consequent_9 = ($$anchor6) => {
                        var div_39 = root_12();
                        var button_5 = child(div_39);
                        var text_8 = child(button_5);
                        var node_31 = sibling(text_8);
                        {
                          var consequent_8 = ($$anchor7) => {
                            var div_40 = root_11();
                            var node_32 = child(div_40);
                            Spinner(node_32, {});
                            reset(div_40);
                            append($$anchor7, div_40);
                          };
                          if_block(node_31, ($$render) => {
                            if (get(isSaving)) $$render(consequent_8);
                          });
                        }
                        reset(button_5);
                        reset(div_39);
                        template_effect(
                          ($02) => {
                            button_5.disabled = get(isSaving);
                            set_text(text_8, `${$02 ?? ""} `);
                          },
                          [() => ($i18n(), untrack(() => $i18n().t("Save")))]
                        );
                        event("click", button_5, () => {
                          updateFileContentHandler();
                        });
                        append($$anchor6, div_39);
                      };
                      if_block(node_30, ($$render) => {
                        if (get(knowledge), untrack(() => {
                          var _a;
                          return (_a = get(knowledge)) == null ? void 0 : _a.write_access;
                        })) $$render(consequent_9);
                      });
                    }
                    reset(div_36);
                    var node_33 = sibling(div_36, 2);
                    key(node_33, () => (get(selectedFile), untrack(() => get(selectedFile).id)), ($$anchor6) => {
                      var textarea = root_13();
                      remove_textarea_child(textarea);
                      template_effect(
                        ($02, $1) => {
                          textarea.disabled = (get(knowledge), untrack(() => {
                            var _a;
                            return !((_a = get(knowledge)) == null ? void 0 : _a.write_access);
                          }));
                          set_attribute(textarea, "aria-label", $02);
                          set_attribute(textarea, "placeholder", $1);
                        },
                        [
                          () => ($i18n(), untrack(() => $i18n().t("File content"))),
                          () => ($i18n(), untrack(() => $i18n().t("Add content here")))
                        ]
                      );
                      bind_value(textarea, () => get(selectedFileContent), ($$value) => set(selectedFileContent, $$value));
                      append($$anchor6, textarea);
                    });
                    reset(div_35);
                    reset(div_34);
                    template_effect(
                      ($02) => {
                        set_attribute(button_4, "aria-label", $02);
                        set_text(text_7, (get(selectedFile), untrack(() => {
                          var _a, _b;
                          return (_b = (_a = get(selectedFile)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name;
                        })));
                      },
                      [() => ($i18n(), untrack(() => $i18n().t("Close")))]
                    );
                    event("click", button_4, () => {
                      set(selectedFileId, null);
                      set(selectedFile, null);
                    });
                    append($$anchor5, div_34);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_28, ($$render) => {
              if (get(selectedFileId) !== null) $$render(consequent_10);
            });
          }
          reset(div_27);
          append($$anchor3, div_27);
        };
        var alternate_2 = ($$anchor3) => {
          var div_41 = root_16();
          var node_34 = child(div_41);
          Spinner(node_34, { className: "size-4" });
          reset(div_41);
          append($$anchor3, div_41);
        };
        if_block(node_24, ($$render) => {
          if (get(fileItems) !== null && get(fileItemsTotal) !== null) $$render(consequent_11);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_13);
      template_effect(
        ($0, $1, $2, $3, $4, $5) => {
          set_attribute(input_2, "aria-label", $0);
          set_attribute(input_2, "placeholder", $1);
          input_2.disabled = (get(knowledge), untrack(() => {
            var _a;
            return !((_a = get(knowledge)) == null ? void 0 : _a.write_access);
          }));
          set_attribute(input_3, "aria-label", $2);
          set_attribute(input_3, "placeholder", $3);
          input_3.disabled = (get(knowledge), untrack(() => {
            var _a;
            return !((_a = get(knowledge)) == null ? void 0 : _a.write_access);
          }));
          set_attribute(input_4, "aria-label", $4);
          set_attribute(input_4, "placeholder", $5);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Description"))),
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Description"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Collection"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Collection")))
        ]
      );
      bind_value(input_2, () => get(knowledge).name, ($$value) => mutate(knowledge, get(knowledge).name = $$value));
      event("input", input_2, () => {
        changeDebounceHandler();
      });
      bind_value(input_3, () => get(knowledge).description, ($$value) => mutate(knowledge, get(knowledge).description = $$value));
      event("input", input_3, () => {
        changeDebounceHandler();
      });
      bind_value(input_4, () => get(query), ($$value) => set(query, $$value));
      event("focus", input_4, () => {
        set(selectedFileId, null);
      });
      event("wheel", div_21, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_3 = ($$anchor2) => {
      Spinner($$anchor2, { className: "size-5" });
    };
    if_block(node_5, ($$render) => {
      if (get(id) && get(knowledge)) $$render(consequent_12);
      else $$render(alternate_3, -1);
    });
  }
  reset(div);
  var node_35 = sibling(div, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete directory?"))));
    ConfirmDialog(node_35, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteDirectoryConfirm);
      },
      set show($$value) {
        set(showDeleteDirectoryConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteDirectoryHandler(!get(deleteDirectoryContents));
        },
        cancel: () => {
          set(pendingDeleteDirectoryId, null);
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_7 = root_18();
        var div_42 = first_child(fragment_7);
        var text_9 = child(div_42, true);
        reset(div_42);
        var div_43 = sibling(div_42, 2);
        var input_5 = child(div_43);
        remove_input_defaults(input_5);
        var div_44 = sibling(input_5, 2);
        var text_10 = child(div_44, true);
        reset(div_44);
        reset(div_43);
        template_effect(
          ($02, $1) => {
            set_text(text_9, $02);
            set_text(text_10, $1);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t(`Are you sure you want to delete this directory?`))),
            () => ($i18n(), untrack(() => $i18n().t("Delete all contents inside this directory")))
          ]
        );
        bind_checked(input_5, () => get(deleteDirectoryContents), ($$value) => set(deleteDirectoryContents, $$value));
        append($$anchor2, fragment_7);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var node_36 = sibling(node_35, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reset knowledge base?"))));
    ConfirmDialog(node_36, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showResetConfirm);
      },
      set show($$value) {
        set(showResetConfirm, $$value);
      },
      $$events: {
        confirm: async () => {
          await resetKnowledgeById(localStorage.token, get(id));
          toast.success($i18n().t("Knowledge base has been reset"));
          init$1();
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var div_45 = root_19();
        var text_11 = child(div_45, true);
        reset(div_45);
        template_effect(($02) => set_text(text_11, $02), [
          () => ($i18n(), untrack(() => $i18n().t("This will remove all files and directories from this knowledge base. This action cannot be undone.")))
        ]);
        append($$anchor2, div_45);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  bind_files(input_1, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
  event("change", input_1, async () => {
    if (get(inputFiles) && get(inputFiles).length > 0) {
      for (const file of get(inputFiles)) {
        await uploadFileHandler(file);
      }
      set(inputFiles, null);
      const fileInputElement = document.getElementById("files-input");
      if (fileInputElement) {
        fileInputElement.value = "";
      }
    } else {
      toast.error($i18n().t(`File not found.`));
    }
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  KnowledgeBase($$anchor, {});
}
export {
  _page as component
};
