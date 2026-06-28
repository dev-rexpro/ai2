import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, k as get, l as legacy_pre_effect, n as legacy_pre_effect_reset, C as deferred_template_effect, u as untrack, $ as $document, h as first_child, z as sibling, c as child, r as reset, a as append, b as pop, e as store_get, s as setup_stores, q as mutable_source, aR as next, t as template_effect, d as set_text, y as event, f as from_html, x as derived_safe_equal, v as user_derived, g as comment, m as deep_read_state, a$ as to_array, aW as text } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { r as remove_input_defaults, s as set_attribute, a as set_class } from "../chunks/B9yCN616.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { d as dayjs2, r as relativeTime } from "../chunks/BeGenu0j.js";
import "../chunks/B3L560rQ.js";
import { R as REXPRO_NAME, p as pinnedNotes, a as mobile, u as user, b as showSidebar, h as showArchivedChats } from "../chunks/BJ3rUC-5.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { c as createNoteHandler, d as downloadPdf } from "../chunks/rnYvrP1L.js";
import { U as UserMenu } from "../chunks/BmWiF3A2.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { m as marked } from "../chunks/zFu7_FHZ.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { f as fileSaver } from "../chunks/CVH2w_UO.js";
import { d as dayjsDuration } from "../chunks/DDd3niey.js";
import { s as searchNotes, c as createNewNote, d as deleteNoteById, t as toggleNotePinnedStatusById, g as getPinnedNoteList, a as getNoteById } from "../chunks/DnKF8DiH.js";
import { l as capitalizeFirstLetter, m as copyToClipboard, g as getTimeRange } from "../chunks/X0cYWxFO.js";
import { E as EllipsisHorizontal } from "../chunks/viyHXpU2.js";
import { C as ConfirmDialog } from "../chunks/Bt_XG8Gm.js";
import { S as Search } from "../chunks/C6CynPzh.js";
import { P as Plus } from "../chunks/CKKkwCWl.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { T as Tooltip } from "../chunks/CHPxBs0H.js";
import { N as NoteMenu } from "../chunks/CsPXaU3A.js";
import { F as FilesOverlay } from "../chunks/P-zj8Fyt.js";
import { X as XMark } from "../chunks/DAqPThR3.js";
import { D as DropdownOptions } from "../chunks/D3fZRBXo.js";
import { L as Loader } from "../chunks/Cbj8yul_.js";
import { S as Sidebar } from "../chunks/WvwlXjr7.js";
import { a as REXPRO_API_BASE_URL } from "../chunks/CZpnbXda.js";
var root$1 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-semibold"> </span>.</div>`);
var root_1$1 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_2$1 = from_html(`<div class=" text-sm font-medium capitalize flex-1 w-full line-clamp-1"> </div>`);
var root_3$1 = from_html(`<div> </div>`);
var root_4 = from_html(`<div class="shrink-0 text-gray-500"> </div>`);
var root_5 = from_html(`<button class="self-center w-fit text-sm p-1 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_6 = from_html(`<div class=" flex cursor-pointer w-full px-3.5 py-1.5 border border-gray-50 dark:border-gray-850/30 bg-transparent dark:hover:bg-gray-850 hover:bg-white rounded-2xl transition"><a class="w-full flex flex-col justify-between"><div class="flex-1"><div class="  flex items-center gap-2 self-center justify-between"><!> <div class="flex shrink-0 items-center text-xs gap-2.5"><!> <!> <div><!></div></div></div></div></a></div>`);
var root_7 = from_html(`<div></div>`);
var root_8 = from_html(`<div class=" flex space-x-4 cursor-pointer w-full px-4.5 py-4 border border-gray-50 dark:border-gray-850/30 bg-transparent dark:hover:bg-gray-850 hover:bg-white rounded-2xl transition"><div class=" flex flex-1 space-x-4 cursor-pointer w-full"><a class="w-full -translate-y-0.5 flex flex-col justify-between"><div class="flex-1"><div class="  flex items-center gap-2 self-center mb-1 justify-between"><div class=" font-semibold line-clamp-1 capitalize"> </div> <div><!></div></div> <div class=" text-xs text-gray-500 dark:text-gray-500 mb-3 line-clamp-3 min-h-10"><!></div></div> <div class=" text-xs px-0.5 w-full flex justify-between items-center"><div> </div> <!></div></a></div></div>`);
var root_9 = from_html(`<div class="w-full text-xs text-gray-500 dark:text-gray-500 font-medium px-2.5 pb-2.5"> </div> <!>`, 1);
var root_10 = from_html(`<div class="w-full flex justify-center py-4 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_11 = from_html(`<div class="@container h-full py-2.5 px-2.5"><div><!> <!></div></div>`);
var root_12 = from_html(`<div class="w-full h-full flex flex-col items-center justify-center"><div class="py-20 text-center"><div class=" text-sm text-gray-400 dark:text-gray-600"> </div> <div class="mt-1 text-xs text-gray-300 dark:text-gray-700"> </div></div></div>`);
var root_13 = from_html(`<div class="w-full h-full flex justify-center items-center py-10"><!></div>`);
var root_14 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><button class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center"><!> <div class=" ml-1 text-xs"> </div></button></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100/30 dark:border-gray-850/30"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex justify-between"><div class="flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-3 w-fit text-center text-sm rounded-full bg-transparent px-0.5 whitespace-nowrap"><!> <!></div></div> <div class="shrink-0"><!></div></div> <!></div>`, 1);
var root_15 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root_16 = from_html(`<!> <div id="notes-container" class="w-full min-h-full h-full px-3 md:px-[18px]"><!></div>`, 1);
function Notes($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  dayjs2.extend(dayjsDuration);
  dayjs2.extend(relativeTime);
  async function loadLocale(locales) {
    for (const locale of locales) {
      try {
        dayjs2.locale(locale);
        break;
      } catch (error) {
        /* @__PURE__ */ console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let selectedNote = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let items = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let sortKey = null;
  let displayOption = mutable_source(null);
  let viewOption = mutable_source(null);
  let permission = mutable_source(null);
  let page2 = 1;
  let itemsLoading = mutable_source(false);
  let allItemsLoaded = mutable_source(false);
  const downloadHandler = async (type) => {
    const note = await getNoteById(localStorage.token, get(selectedNote).id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (!note) return;
    if (type === "txt") {
      const blob = new Blob([note.data.content.md], { type: "text/plain" });
      saveAs(blob, `${note.title}.txt`);
    } else if (type === "md") {
      const blob = new Blob([note.data.content.md], { type: "text/markdown" });
      saveAs(blob, `${note.title}.md`);
    } else if (type === "pdf") {
      try {
        await downloadPdf(note);
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };
  const deleteNoteHandler = async (id) => {
    const res = await deleteNoteById(localStorage.token, id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      init$1();
    }
  };
  const inputFilesHandler = async (inputFiles) => {
    for (const file of inputFiles) {
      if (file.type !== "text/markdown") {
        toast.error($i18n().t("Only markdown files are allowed"));
        return;
      }
      const reader = new FileReader();
      reader.onload = async (event2) => {
        const content = event2.target.result;
        let name = file.name.replace(/\.md$/, "");
        if (typeof content !== "string") {
          toast.error($i18n().t("Invalid file content"));
          return;
        }
        const res = await createNewNote(localStorage.token, {
          title: name,
          data: {
            content: { json: null, html: marked.parse(content ?? ""), md: content }
          },
          meta: null,
          access_grants: []
        }).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          init$1();
        }
      };
      reader.readAsText(file);
    }
  };
  const reset$1 = () => {
    page2 = 1;
    set(items, null);
    set(total, null);
    set(allItemsLoaded, false);
    set(itemsLoading, false);
  };
  const loadMoreItems = async () => {
    if (get(allItemsLoaded)) return;
    page2 += 1;
    await getItemsPage();
  };
  const init$1 = async () => {
    reset$1();
    await getItemsPage();
  };
  const getItemsPage = async () => {
    set(itemsLoading, true);
    if (get(viewOption) === "created") {
      set(permission, null);
    }
    const res = await searchNotes(localStorage.token, get(query), get(viewOption), get(permission), sortKey, page2).catch(() => {
      return [];
    });
    if (res) {
      /* @__PURE__ */ console.log(res);
      set(total, res.total);
      const pageItems = res.items;
      if ((pageItems ?? []).length === 0) {
        set(allItemsLoaded, true);
      } else {
        set(allItemsLoaded, false);
      }
      if (get(items)) {
        const existingIds = new Set(get(items).map((item) => item.id));
        const newItems = pageItems.filter((item) => !existingIds.has(item.id));
        set(items, [...get(items), ...newItems]);
      } else {
        set(items, pageItems);
      }
    }
    set(itemsLoading, false);
    return res;
  };
  const groupNotes = (res) => {
    if (!Array.isArray(res)) {
      return [];
    }
    const grouped = {};
    const orderedKeys = [];
    for (const note of res) {
      const timeRange = getTimeRange(note.updated_at / 1e9);
      if (!grouped[timeRange]) {
        grouped[timeRange] = [];
        orderedKeys.push(timeRange);
      }
      grouped[timeRange].push({ ...note, timeRange });
    }
    return orderedKeys.map((key) => [key, grouped[key]]);
  };
  let dragged = mutable_source(false);
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
    var _a, _b;
    e.preventDefault();
    /* @__PURE__ */ console.log(e);
    if ((_a = e.dataTransfer) == null ? void 0 : _a.files) {
      const inputFiles = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles && inputFiles.length > 0) {
        /* @__PURE__ */ console.log(inputFiles);
        inputFilesHandler(inputFiles);
      }
    }
    set(dragged, false);
  };
  onMount(() => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.noteViewOption) ?? null);
    set(displayOption, (localStorage == null ? void 0 : localStorage.noteDisplayOption) ?? null);
    set(loaded, true);
    const dropzoneElement = document.getElementById("notes-container");
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragover", onDragOver);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("drop", onDrop);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragleave", onDragLeave);
    return () => {
      clearTimeout(get(searchDebounceTimer));
      if (dropzoneElement) {
        dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragover", onDragOver);
        dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("drop", onDrop);
        dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragleave", onDragLeave);
      }
    };
  });
  legacy_pre_effect(() => $i18n(), () => {
    loadLocale($i18n().languages);
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer), get(loaded)), () => {
    if (get(query) !== void 0) {
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          if (get(loaded)) {
            init$1();
          }
        },
        300
      ));
    }
  });
  legacy_pre_effect(() => (get(loaded), get(permission), get(viewOption)), () => {
    if (get(loaded) && sortKey !== void 0 && get(permission) !== void 0 && get(viewOption) !== void 0) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_16();
  head("1lmd4qv", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$REXPRO_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Notes")))]
    );
  });
  var node = first_child(fragment);
  FilesOverlay(node, {
    get show() {
      return get(dragged);
    }
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  {
    var consequent_8 = ($$anchor2) => {
      var fragment_1 = root_14();
      var node_2 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete note?"))));
        ConfirmDialog(node_2, {
          get title() {
            return get($0);
          },
          get show() {
            return get(showDeleteConfirm);
          },
          set show($$value) {
            set(showDeleteConfirm, $$value);
          },
          $$events: {
            confirm: () => {
              deleteNoteHandler(get(selectedNote).id);
              set(showDeleteConfirm, false);
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_1 = root$1();
            var text2 = child(div_1);
            var span = sibling(text2);
            var text_1 = child(span, true);
            reset(span);
            next();
            reset(div_1);
            template_effect(
              ($02) => {
                set_text(text2, `${$02 ?? ""} `);
                set_text(text_1, (get(selectedNote), untrack(() => get(selectedNote).title)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div_1);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var div_2 = sibling(node_2, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var text_2 = child(div_5, true);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var text_3 = child(div_6, true);
      reset(div_6);
      reset(div_4);
      var div_7 = sibling(div_4, 2);
      var button = child(div_7);
      var node_3 = child(button);
      Plus(node_3, { className: "size-3", strokeWidth: "2.5" });
      var div_8 = sibling(node_3, 2);
      var text_4 = child(div_8, true);
      reset(div_8);
      reset(button);
      reset(div_7);
      reset(div_3);
      reset(div_2);
      var div_9 = sibling(div_2, 2);
      var div_10 = child(div_9);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var node_4 = child(div_12);
      Search(node_4, { className: "size-3.5" });
      reset(div_12);
      var input = sibling(div_12, 2);
      remove_input_defaults(input);
      var node_5 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var div_13 = root_1$1();
          var button_1 = child(div_13);
          var node_6 = child(button_1);
          XMark(node_6, { className: "size-3", strokeWidth: "2" });
          reset(button_1);
          reset(div_13);
          event("click", button_1, () => {
            set(query, "");
          });
          append($$anchor3, div_13);
        };
        if_block(node_5, ($$render) => {
          if (get(query)) $$render(consequent);
        });
      }
      reset(div_11);
      reset(div_10);
      var div_14 = sibling(div_10, 2);
      var div_15 = child(div_14);
      var div_16 = child(div_15);
      var node_7 = child(div_16);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: null, label: $i18n().t("All") },
          { value: "created", label: $i18n().t("Created by you") },
          { value: "shared", label: $i18n().t("Shared with you") }
        ])));
        DropdownOptions(node_7, {
          align: "start",
          className: "flex shrink-0 items-center gap-2 px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-850 rounded-xl placeholder-gray-400 outline-hidden focus:outline-hidden",
          get items() {
            return get($0);
          },
          onChange: (value) => {
            if (value) {
              localStorage.noteViewOption = value;
            } else {
              delete localStorage.noteViewOption;
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
      var node_8 = sibling(node_7, 2);
      {
        var consequent_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
              { value: null, label: $i18n().t("Write") },
              { value: "read_only", label: $i18n().t("Read Only") }
            ])));
            DropdownOptions($$anchor3, {
              align: "start",
              get items() {
                return get($0);
              },
              get value() {
                return get(permission);
              },
              set value($$value) {
                set(permission, $$value);
              },
              $$legacy: true
            });
          }
        };
        var d = user_derived(() => (get(viewOption), untrack(() => [null, "shared"].includes(get(viewOption)))));
        if_block(node_8, ($$render) => {
          if (get(d)) $$render(consequent_1);
        });
      }
      reset(div_16);
      reset(div_15);
      var div_17 = sibling(div_15, 2);
      var node_9 = child(div_17);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: null, label: $i18n().t("List") },
          { value: "grid", label: $i18n().t("Grid") }
        ])));
        DropdownOptions(node_9, {
          align: "start",
          get items() {
            return get($0);
          },
          onChange: () => {
            if (get(displayOption)) {
              localStorage.noteDisplayOption = get(displayOption);
            } else {
              delete localStorage.noteDisplayOption;
            }
          },
          get value() {
            return get(displayOption);
          },
          set value($$value) {
            set(displayOption, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_17);
      reset(div_14);
      var node_10 = sibling(div_14, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_11 = first_child(fragment_3);
          {
            var consequent_6 = ($$anchor4) => {
              const groupedNotes = derived_safe_equal(() => (get(items), untrack(() => groupNotes(get(items)))));
              var div_18 = root_11();
              var div_19 = child(div_18);
              var node_12 = child(div_19);
              each(node_12, 1, () => get(groupedNotes), index, ($$anchor5, $$item, idx) => {
                var $$array = user_derived(() => to_array(get($$item), 2));
                let timeRange = () => get($$array)[0];
                let notesList = () => get($$array)[1];
                var fragment_4 = root_9();
                var div_20 = first_child(fragment_4);
                var text_5 = child(div_20, true);
                reset(div_20);
                var node_13 = sibling(div_20, 2);
                {
                  var consequent_2 = ($$anchor6) => {
                    var div_21 = root_7();
                    each(div_21, 7, notesList, (note) => note.id, ($$anchor7, note, idx2, $$array_1) => {
                      var div_22 = root_6();
                      var a = child(div_22);
                      var div_23 = child(a);
                      var div_24 = child(div_23);
                      var node_14 = child(div_24);
                      Tooltip(node_14, {
                        get content() {
                          return get(note), untrack(() => get(note).title);
                        },
                        className: "flex-1",
                        placement: "top-start",
                        children: ($$anchor8, $$slotProps) => {
                          var div_25 = root_2$1();
                          var text_6 = child(div_25, true);
                          reset(div_25);
                          template_effect(() => set_text(text_6, (get(note), untrack(() => get(note).title))));
                          append($$anchor8, div_25);
                        },
                        $$slots: { default: true }
                      });
                      var div_26 = sibling(node_14, 2);
                      var node_15 = child(div_26);
                      {
                        let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).updated_at / 1e6).format("LLLL"))));
                        Tooltip(node_15, {
                          get content() {
                            return get($0);
                          },
                          children: ($$anchor8, $$slotProps) => {
                            var div_27 = root_3$1();
                            var text_7 = child(div_27, true);
                            reset(div_27);
                            template_effect(($02) => set_text(text_7, $02), [
                              () => (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).updated_at / 1e6).fromNow()))
                            ]);
                            append($$anchor8, div_27);
                          },
                          $$slots: { default: true }
                        });
                      }
                      var node_16 = sibling(node_15, 2);
                      {
                        let $0 = derived_safe_equal(() => (get(note), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_16, {
                          get content() {
                            return get($0);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor8, $$slotProps) => {
                            var div_28 = root_4();
                            var text_8 = child(div_28, true);
                            reset(div_28);
                            template_effect(($02) => set_text(text_8, $02), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(note), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(note)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor8, div_28);
                          },
                          $$slots: { default: true }
                        });
                      }
                      var div_29 = sibling(node_16, 2);
                      var node_17 = child(div_29);
                      {
                        let $0 = derived_safe_equal(() => (get(note), untrack(() => get(note).is_pinned ?? false)));
                        NoteMenu(node_17, {
                          onDownload: (type) => {
                            set(selectedNote, get(note));
                            downloadHandler(type);
                          },
                          onCopyLink: async () => {
                            const baseUrl = window.location.origin;
                            const res = await copyToClipboard(`${baseUrl}/notes/${get(note).id}`);
                            if (res) {
                              toast.success($i18n().t("Copied link to clipboard"));
                            } else {
                              toast.error($i18n().t("Failed to copy link"));
                            }
                          },
                          onDelete: () => {
                            set(selectedNote, get(note));
                            set(showDeleteConfirm, true);
                          },
                          get isPinned() {
                            return get($0);
                          },
                          onPin: async () => {
                            await toggleNotePinnedStatusById(localStorage.token, get(note).id);
                            pinnedNotes.set(await getPinnedNoteList(localStorage.token).catch(() => []));
                            init$1();
                          },
                          children: ($$anchor8, $$slotProps) => {
                            var button_2 = root_5();
                            var node_18 = child(button_2);
                            EllipsisHorizontal(node_18, { className: "size-5" });
                            reset(button_2);
                            append($$anchor8, button_2);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_29);
                      reset(div_26);
                      reset(div_24);
                      reset(div_23);
                      reset(a);
                      reset(div_22);
                      template_effect(() => set_attribute(a, "href", (get(note), untrack(() => `/notes/${get(note).id}`))));
                      append($$anchor7, div_22);
                    });
                    reset(div_21);
                    template_effect(() => set_class(div_21, 1, `${(deep_read_state(get(groupedNotes)), untrack(() => get(groupedNotes).length - 1 !== idx ? "mb-3" : "")) ?? ""} gap-1.5 flex flex-col`));
                    append($$anchor6, div_21);
                  };
                  var consequent_4 = ($$anchor6) => {
                    var div_30 = root_7();
                    each(div_30, 7, notesList, (note) => note.id, ($$anchor7, note, idx2, $$array_2) => {
                      var div_31 = root_8();
                      var div_32 = child(div_31);
                      var a_1 = child(div_32);
                      var div_33 = child(a_1);
                      var div_34 = child(div_33);
                      var div_35 = child(div_34);
                      var text_9 = child(div_35, true);
                      reset(div_35);
                      var div_36 = sibling(div_35, 2);
                      var node_19 = child(div_36);
                      {
                        let $0 = derived_safe_equal(() => (get(note), untrack(() => get(note).is_pinned ?? false)));
                        NoteMenu(node_19, {
                          onDownload: (type) => {
                            set(selectedNote, get(note));
                            downloadHandler(type);
                          },
                          onCopyLink: async () => {
                            const baseUrl = window.location.origin;
                            const res = await copyToClipboard(`${baseUrl}/notes/${get(note).id}`);
                            if (res) {
                              toast.success($i18n().t("Copied link to clipboard"));
                            } else {
                              toast.error($i18n().t("Failed to copy link"));
                            }
                          },
                          onDelete: () => {
                            set(selectedNote, get(note));
                            set(showDeleteConfirm, true);
                          },
                          get isPinned() {
                            return get($0);
                          },
                          onPin: async () => {
                            await toggleNotePinnedStatusById(localStorage.token, get(note).id);
                            pinnedNotes.set(await getPinnedNoteList(localStorage.token).catch(() => []));
                            init$1();
                          },
                          children: ($$anchor8, $$slotProps) => {
                            var button_3 = root_5();
                            var node_20 = child(button_3);
                            EllipsisHorizontal(node_20, { className: "size-5" });
                            reset(button_3);
                            append($$anchor8, button_3);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_36);
                      reset(div_34);
                      var div_37 = sibling(div_34, 2);
                      var node_21 = child(div_37);
                      {
                        var consequent_3 = ($$anchor8) => {
                          var text_10 = text();
                          template_effect(() => set_text(text_10, (get(note), untrack(() => {
                            var _a, _b;
                            return (_b = (_a = get(note).data) == null ? void 0 : _a.content) == null ? void 0 : _b.md;
                          }))));
                          append($$anchor8, text_10);
                        };
                        var alternate = ($$anchor8) => {
                          var text_11 = text();
                          template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("No content")))]);
                          append($$anchor8, text_11);
                        };
                        if_block(node_21, ($$render) => {
                          if (get(note), untrack(() => {
                            var _a, _b;
                            return (_b = (_a = get(note).data) == null ? void 0 : _a.content) == null ? void 0 : _b.md;
                          })) $$render(consequent_3);
                          else $$render(alternate, -1);
                        });
                      }
                      reset(div_37);
                      reset(div_33);
                      var div_38 = sibling(div_33, 2);
                      var div_39 = child(div_38);
                      var text_12 = child(div_39, true);
                      reset(div_39);
                      var node_22 = sibling(div_39, 2);
                      {
                        let $0 = derived_safe_equal(() => (get(note), $i18n(), untrack(() => {
                          var _a, _b;
                          return ((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                        })));
                        Tooltip(node_22, {
                          get content() {
                            return get($0);
                          },
                          className: "flex shrink-0",
                          placement: "top-start",
                          children: ($$anchor8, $$slotProps) => {
                            var div_40 = root_4();
                            var text_13 = child(div_40, true);
                            reset(div_40);
                            template_effect(($02) => set_text(text_13, $02), [
                              () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(note), untrack(() => {
                                var _a, _b, _c, _d;
                                return $i18n().t("By {{name}}", {
                                  name: capitalizeFirstLetter(((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(note)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                                });
                              }))
                            ]);
                            append($$anchor8, div_40);
                          },
                          $$slots: { default: true }
                        });
                      }
                      reset(div_38);
                      reset(a_1);
                      reset(div_32);
                      reset(div_31);
                      template_effect(
                        ($0) => {
                          set_attribute(a_1, "href", (get(note), untrack(() => `/notes/${get(note).id}`)));
                          set_text(text_9, (get(note), untrack(() => get(note).title)));
                          set_text(text_12, $0);
                        },
                        [
                          () => (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).updated_at / 1e6).fromNow()))
                        ]
                      );
                      append($$anchor7, div_31);
                    });
                    reset(div_30);
                    template_effect(() => set_class(div_30, 1, `${(deep_read_state(get(groupedNotes)), untrack(() => get(groupedNotes).length - 1 !== idx ? "mb-5" : "")) ?? ""} gap-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`));
                    append($$anchor6, div_30);
                  };
                  if_block(node_13, ($$render) => {
                    if (get(displayOption) === null) $$render(consequent_2);
                    else if (get(displayOption) === "grid") $$render(consequent_4, 1);
                  });
                }
                template_effect(($0) => set_text(text_5, $0), [
                  () => ($i18n(), timeRange(), untrack(() => $i18n().t(timeRange())))
                ]);
                append($$anchor5, fragment_4);
              });
              var node_23 = sibling(node_12, 2);
              {
                var consequent_5 = ($$anchor5) => {
                  Loader($$anchor5, {
                    $$events: {
                      visible: (e) => {
                        if (!get(itemsLoading)) {
                          loadMoreItems();
                        }
                      }
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_41 = root_10();
                      var node_24 = child(div_41);
                      Spinner(node_24, { className: " size-4" });
                      var div_42 = sibling(node_24, 2);
                      var text_14 = child(div_42, true);
                      reset(div_42);
                      reset(div_41);
                      template_effect(($0) => set_text(text_14, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                      append($$anchor6, div_41);
                    },
                    $$slots: { default: true }
                  });
                };
                if_block(node_23, ($$render) => {
                  if (!get(allItemsLoaded)) $$render(consequent_5);
                });
              }
              reset(div_19);
              reset(div_18);
              append($$anchor4, div_18);
            };
            var alternate_1 = ($$anchor4) => {
              var div_43 = root_12();
              var div_44 = child(div_43);
              var div_45 = child(div_44);
              var text_15 = child(div_45, true);
              reset(div_45);
              var div_46 = sibling(div_45, 2);
              var text_16 = child(div_46, true);
              reset(div_46);
              reset(div_44);
              reset(div_43);
              template_effect(
                ($0, $1) => {
                  set_text(text_15, $0);
                  set_text(text_16, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("No Notes"))),
                  () => ($i18n(), untrack(() => $i18n().t("Create your first note by clicking on the plus button below.")))
                ]
              );
              append($$anchor4, div_43);
            };
            if_block(node_11, ($$render) => {
              if (get(items), untrack(() => (get(items) ?? []).length > 0)) $$render(consequent_6);
              else $$render(alternate_1, -1);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate_2 = ($$anchor3) => {
          var div_47 = root_13();
          var node_25 = child(div_47);
          Spinner(node_25, { className: "size-4" });
          reset(div_47);
          append($$anchor3, div_47);
        };
        if_block(node_10, ($$render) => {
          if (get(items) !== null && get(total) !== null) $$render(consequent_7);
          else $$render(alternate_2, -1);
        });
      }
      reset(div_9);
      template_effect(
        ($0, $1, $2) => {
          set_text(text_2, $0);
          set_text(text_3, get(total));
          set_text(text_4, $1);
          set_attribute(input, "placeholder", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Notes"))),
          () => ($i18n(), untrack(() => $i18n().t("New Note"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Notes")))
        ]
      );
      event("click", button, async () => {
        const res = await createNoteHandler(dayjs2().format("YYYY-MM-DD"));
        if (res) {
          goto(`/notes/${res.id}`);
        }
      });
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_15, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_3 = ($$anchor2) => {
      var div_48 = root_15();
      var node_26 = child(div_48);
      Spinner(node_26, { className: "size-4" });
      reset(div_48);
      append($$anchor2, div_48);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_8);
      else $$render(alternate_3, -1);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_1 = from_html(`<div><!></div>`);
var root_2 = from_html(`<button class="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Menu"><div class=" self-center"><img class="size-6 object-cover rounded-full" alt="User profile" draggable="false"/></div></button>`);
var root_3 = from_html(`<div><nav class="   px-2 pt-1.5 backdrop-blur-xl w-full drag-region"><div class=" flex items-center"><!> <div class="ml-2 py-0.5 self-center flex items-center justify-between w-full"><div><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium bg-transparent py-1 touch-auto pointer-events-auto"><a class="min-w-fit transition" href="/notes"> </a></div></div> <div class=" self-center flex items-center gap-1"><!></div></div></div></nav> <div class=" flex-1 max-h-full overflow-y-auto @container"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    if ($page().url.searchParams.get("content") !== null || $page().url.searchParams.get("title") !== null) {
      const title = $page().url.searchParams.get("title") ?? dayjs2().format("YYYY-MM-DD");
      const content = $page().url.searchParams.get("content") ?? "";
      const res = await createNoteHandler(title, content);
      if (res) {
        goto(`/notes/${res.id}`);
      }
      return;
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_3();
      var nav = child(div);
      var div_1 = child(nav);
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_1();
          var node_2 = child(div_2);
          {
            let $0 = derived_safe_equal(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"));
            Tooltip(node_2, {
              get content() {
                return get($0);
              },
              interactive: true,
              children: ($$anchor4, $$slotProps) => {
                var button = root();
                var div_3 = child(button);
                var node_3 = child(div_3);
                Sidebar(node_3, {});
                reset(div_3);
                reset(button);
                event("click", button, () => {
                  showSidebar.set(!$showSidebar());
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_2);
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center`));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var a = child(div_6);
      var text2 = child(a, true);
      reset(a);
      reset(div_6);
      reset(div_5);
      var div_7 = sibling(div_5, 2);
      var node_4 = child(div_7);
      {
        var consequent_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => {
              var _a;
              return (_a = $user()) == null ? void 0 : _a.role;
            });
            UserMenu($$anchor3, {
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
              children: ($$anchor4, $$slotProps) => {
                var button_1 = root_2();
                var div_8 = child(button_1);
                var img = child(div_8);
                reset(div_8);
                reset(button_1);
                template_effect(() => {
                  var _a;
                  return set_attribute(img, "src", `${REXPRO_API_BASE_URL}/users/${(_a = $user()) == null ? void 0 : _a.id}/profile/image`);
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_4, ($$render) => {
          if ($user() !== void 0 && $user() !== null) $$render(consequent_1);
        });
      }
      reset(div_7);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_9 = sibling(nav, 2);
      var node_5 = child(div_9);
      Notes(node_5, {});
      reset(div_9);
      reset(div);
      template_effect(
        ($0) => {
          set_class(div, 1, ` flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`);
          set_text(text2, $0);
        },
        [() => $i18n().t("Notes")]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
