import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, aS as createEventDispatcher, j as onDestroy, k as get, o as onMount, l as legacy_pre_effect, w as set, n as legacy_pre_effect_reset, c as child, r as reset, z as sibling, u as untrack, t as template_effect, a as append, g as comment, h as first_child, d as set_text, m as deep_read_state, y as event, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, aW as text, f as from_html, aV as mutate } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { e as each, i as index } from "./qTQza25_.js";
import { s as slot } from "./zXynQJya.js";
import { b as bind_value, c as bind_files } from "./CgeA63xA.js";
import { b as bind_this } from "./BSYzg88z.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { c as config, u as user, s as settings } from "./BJ3rUC-5.js";
import { r as remove_input_defaults, s as set_attribute } from "./B9yCN616.js";
import { d as dayjs2 } from "./BeGenu0j.js";
import { s as searchNotes } from "./DnKF8DiH.js";
import { s as searchKnowledgeBases, a as searchKnowledgeFiles } from "./BxjVhKR8.js";
import { E as decodeString, v as v4 } from "./X0cYWxFO.js";
import { D as Dropdown } from "./8Pg1zo_Z.js";
import { S as Search } from "./C6CynPzh.js";
import { T as Tooltip } from "./CHPxBs0H.js";
import { P as PageEdit, D as Database, F as FileItem } from "./DDFjerJA.js";
import { D as DocumentPage } from "./Cuik1dqC.js";
import { u as uploadFile } from "./BipwcWe2.js";
import { t as toast } from "./B4Bn1xMI.js";
import { a as REXPRO_API_BASE_URL } from "./CZpnbXda.js";
var root$1 = from_html(`<div class="text-center text-xs text-gray-500 dark:text-gray-400 pt-4 pb-6"> </div>`);
var root_1$1 = from_html(`<div class="px-2 text-xs text-gray-500 py-1"><!></div>`);
var root_2$1 = from_html(`<div class="line-clamp-1 flex-1 text-sm text-left"> </div>`);
var root_3$1 = from_html(`<!> <div class=" px-2.5 py-1 rounded-xl w-full text-left flex justify-between items-center text-sm hover:bg-gray-50 hover:dark:bg-gray-800 hover:dark:text-gray-100 selected-command-option-button"><button class="w-full flex-1" type="button"><div class="  text-black dark:text-gray-100 flex items-center gap-1 shrink-0"><!> <!></div></button></div>`, 1);
var root_4$1 = from_html(`<div slot="content"><div class="z-[10000] text-black dark:text-white rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-70 p-1.5"><div class=" flex w-full space-x-2 px-2 pb-0.5"><div class="flex flex-1"><div class=" self-center mr-2"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div> <div class="max-h-56 overflow-y-scroll gap-0.5 flex flex-col"><!></div></div></div>`);
function KnowledgeSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  let query = mutable_source("");
  let searchDebounceTimer = mutable_source();
  let noteItems = mutable_source([]);
  let knowledgeItems = mutable_source([]);
  let fileItems = mutable_source([]);
  let items = mutable_source([]);
  onDestroy(() => {
    clearTimeout(get(searchDebounceTimer));
  });
  const getItems = () => {
    getNoteItems();
    getKnowledgeItems();
    getKnowledgeFileItems();
  };
  const getNoteItems = async () => {
    const res = await searchNotes(localStorage.token, get(query)).catch(() => {
      return null;
    });
    if (res) {
      set(noteItems, res.items.map((note) => {
        return {
          ...note,
          type: "note",
          name: note.title,
          description: dayjs2(note.updated_at / 1e6).fromNow()
        };
      }));
    }
  };
  const getKnowledgeItems = async () => {
    const res = await searchKnowledgeBases(localStorage.token, get(query)).catch(() => {
      return null;
    });
    if (res) {
      set(knowledgeItems, res.items.map((note) => {
        return { ...note, type: "collection" };
      }));
    }
  };
  const getKnowledgeFileItems = async () => {
    const res = await searchKnowledgeFiles(localStorage.token, get(query)).catch(() => {
      return null;
    });
    if (res) {
      set(fileItems, res.items.map((file) => {
        var _a;
        return {
          ...file,
          type: "file",
          name: ((_a = file.meta) == null ? void 0 : _a.name) || file.filename,
          description: file.description || ""
        };
      }));
    }
  };
  onMount(async () => {
    getItems();
  });
  legacy_pre_effect(() => (get(noteItems), get(knowledgeItems), get(fileItems)), () => {
    set(items, [
      ...get(noteItems),
      ...get(knowledgeItems),
      ...get(fileItems)
    ]);
  });
  legacy_pre_effect(() => (get(query), get(searchDebounceTimer)), () => {
    if (get(query) !== void 0) {
      clearTimeout(get(searchDebounceTimer));
      set(searchDebounceTimer, setTimeout(
        () => {
          getItems();
        },
        300
      ));
    }
  });
  legacy_pre_effect_reset();
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
          set(query, "");
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_4$1();
        var div_1 = child(div);
        var div_2 = child(div_1);
        var div_3 = child(div_2);
        var div_4 = child(div_3);
        var node_1 = child(div_4);
        Search(node_1, { className: "size-3.5" });
        reset(div_4);
        var input = sibling(div_4, 2);
        remove_input_defaults(input);
        reset(div_3);
        reset(div_2);
        var div_5 = sibling(div_2, 2);
        var node_2 = child(div_5);
        {
          var consequent = ($$anchor3) => {
            var div_6 = root$1();
            var text2 = child(div_6, true);
            reset(div_6);
            template_effect(($0) => set_text(text2, $0), [
              () => ($i18n(), untrack(() => $i18n().t("No knowledge found")))
            ]);
            append($$anchor3, div_6);
          };
          var alternate = ($$anchor3) => {
            var fragment_2 = comment();
            var node_3 = first_child(fragment_2);
            each(node_3, 1, () => get(items), index, ($$anchor4, item, i) => {
              var fragment_3 = root_3$1();
              var node_4 = first_child(fragment_3);
              {
                var consequent_4 = ($$anchor5) => {
                  var div_7 = root_1$1();
                  var node_5 = child(div_7);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var text_1 = text();
                      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Notes")))]);
                      append($$anchor6, text_1);
                    };
                    var consequent_2 = ($$anchor6) => {
                      var text_2 = text();
                      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Collections")))]);
                      append($$anchor6, text_2);
                    };
                    var consequent_3 = ($$anchor6) => {
                      var text_3 = text();
                      template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Files")))]);
                      append($$anchor6, text_3);
                    };
                    if_block(node_5, ($$render) => {
                      if (get(item), untrack(() => {
                        var _a;
                        return ((_a = get(item)) == null ? void 0 : _a.type) === "note";
                      })) $$render(consequent_1);
                      else if (get(item), untrack(() => {
                        var _a;
                        return ((_a = get(item)) == null ? void 0 : _a.type) === "collection";
                      })) $$render(consequent_2, 1);
                      else if (get(item), untrack(() => {
                        var _a;
                        return ((_a = get(item)) == null ? void 0 : _a.type) === "file";
                      })) $$render(consequent_3, 2);
                    });
                  }
                  reset(div_7);
                  append($$anchor5, div_7);
                };
                if_block(node_4, ($$render) => {
                  if (get(item), get(items), untrack(() => {
                    var _a, _b;
                    return i === 0 || ((_a = get(item)) == null ? void 0 : _a.type) !== ((_b = get(items)[i - 1]) == null ? void 0 : _b.type);
                  })) $$render(consequent_4);
                });
              }
              var div_8 = sibling(node_4, 2);
              var button = child(div_8);
              var div_9 = child(button);
              var node_6 = child(div_9);
              {
                var consequent_5 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Note"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      placement: "top",
                      tippyOptions: { zIndex: 1e5 },
                      children: ($$anchor6, $$slotProps2) => {
                        PageEdit($$anchor6, { className: "size-4" });
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                var consequent_6 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Collection"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      placement: "top",
                      tippyOptions: { zIndex: 1e5 },
                      children: ($$anchor6, $$slotProps2) => {
                        Database($$anchor6, { className: "size-4" });
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                var consequent_7 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("File"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      placement: "top",
                      tippyOptions: { zIndex: 1e5 },
                      children: ($$anchor6, $$slotProps2) => {
                        DocumentPage($$anchor6, { className: "size-4" });
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                if_block(node_6, ($$render) => {
                  if (get(item), untrack(() => get(item).type === "note")) $$render(consequent_5);
                  else if (get(item), untrack(() => get(item).type === "collection")) $$render(consequent_6, 1);
                  else if (get(item), untrack(() => get(item).type === "file")) $$render(consequent_7, 2);
                });
              }
              var node_7 = sibling(node_6, 2);
              {
                let $0 = derived_safe_equal(() => (get(item), deep_read_state(decodeString), untrack(() => {
                  var _a;
                  return get(item).description || decodeString((_a = get(item)) == null ? void 0 : _a.name);
                })));
                Tooltip(node_7, {
                  get content() {
                    return get($0);
                  },
                  placement: "top-start",
                  tippyOptions: { zIndex: 1e5 },
                  children: ($$anchor5, $$slotProps2) => {
                    var div_10 = root_2$1();
                    var text_4 = child(div_10, true);
                    reset(div_10);
                    template_effect(($02) => set_text(text_4, $02), [
                      () => (deep_read_state(decodeString), get(item), untrack(() => {
                        var _a;
                        return decodeString((_a = get(item)) == null ? void 0 : _a.name);
                      }))
                    ]);
                    append($$anchor5, div_10);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_9);
              reset(button);
              reset(div_8);
              event("click", button, () => {
                dispatch("select", get(item));
                set(show, false);
              });
              append($$anchor4, fragment_3);
            });
            append($$anchor3, fragment_2);
          };
          if_block(node_2, ($$render) => {
            if (get(items), untrack(() => get(items).length === 0)) $$render(consequent);
            else $$render(alternate, -1);
          });
        }
        reset(div_5);
        reset(div_1);
        reset(div);
        template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
        bind_value(input, () => get(query), ($$value) => set(query, $$value));
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_html(`<div class="mb-2"><div class="flex w-full justify-between mb-1"><div class=" self-center text-xs font-medium text-gray-500"> </div></div></div>`);
var root_1 = from_html(`<div class=" flex flex-wrap items-center gap-2 mb-2.5"></div>`);
var root_2 = from_html(`<div class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl"> </div>`);
var root_3 = from_html(`<button class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl" type="button"> </button>`);
var root_4 = from_html(`<div class="flex flex-wrap flex-row text-sm gap-1"><!> <!></div>`);
var root_5 = from_html(`<input type="file" hidden="" multiple=""/> <div><!> <div class="flex flex-col mb-1"><!> <!></div> <div class=" text-xs dark:text-gray-700"> </div></div>`, 1);
function Knowledge($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let selectedItems = prop($$props, "selectedItems", 28, () => []);
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let filesInputElement = mutable_source(null);
  let inputFiles = mutable_source(null);
  const uploadFileHandler = async (file, fullContext = false) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin" && !(((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.file_upload) ?? true)) {
      toast.error($i18n().t("You do not have permission to upload files."));
      return null;
    }
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId,
      ...fullContext ? { context: "full" } : {}
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    selectedItems([...selectedItems(), fileItem]);
    try {
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_g = (_f = (_e = $settings()) == null ? void 0 : _e.audio) == null ? void 0 : _f.stt) == null ? void 0 : _g.language)) {
        metadata = { language: (_j = (_i = (_h = $settings()) == null ? void 0 : _h.audio) == null ? void 0 : _i.stt) == null ? void 0 : _j.language };
      }
      const uploadedFile = await uploadFile(localStorage.token, file, metadata);
      if (uploadedFile) {
        /* @__PURE__ */ console.log("File upload completed:", {
          id: uploadedFile.id,
          name: fileItem.name,
          collection: (_k = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _k.collection_name
        });
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
        }
        fileItem.status = "uploaded";
        fileItem.file = uploadedFile;
        fileItem.id = uploadedFile.id;
        fileItem.collection_name = ((_l = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _l.collection_name) || (uploadedFile == null ? void 0 : uploadedFile.collection_name);
        fileItem.url = `${uploadedFile.id}`;
        selectedItems(selectedItems());
      } else {
        selectedItems(selectedItems().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
      }
    } catch (e) {
      toast.error(`${e}`);
      selectedItems(selectedItems().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
    }
  };
  const inputFilesHandler = async (inputFiles2) => {
    /* @__PURE__ */ console.log("Input files handler called with:", inputFiles2);
    inputFiles2.forEach(async (file) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      /* @__PURE__ */ console.log("Processing file:", {
        name: file.name,
        type: file.type,
        size: file.size,
        extension: file.name.split(".").at(-1)
      });
      if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
        /* @__PURE__ */ console.log("File exceeds max size limit:", {
          fileSize: file.size,
          maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
        });
        toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
        return;
      }
      if (!file["type"].startsWith("image/")) {
        uploadFileHandler(file);
      } else {
        toast.error($i18n().t(`Unsupported file type.`));
      }
    });
  };
  onMount(async () => {
    set(loaded, true);
  });
  legacy_pre_effect(() => deep_read_state(selectedItems()), () => {
    if (selectedItems() === null) {
      selectedItems([]);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_5();
  var input = first_child(fragment);
  bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
  var div = sibling(input, 2);
  var node = child(div);
  slot(node, $$props, "label", {}, ($$anchor2) => {
    var div_1 = root();
    var div_2 = child(div_1);
    var div_3 = child(div_2);
    var text2 = child(div_3, true);
    reset(div_3);
    reset(div_2);
    reset(div_1);
    template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Knowledge")))]);
    append($$anchor2, div_1);
  });
  var div_4 = sibling(node, 2);
  var node_1 = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var div_5 = root_1();
      each(div_5, 5, selectedItems, index, ($$anchor3, file, fileIdx) => {
        {
          let $0 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
          let $1 = derived_safe_equal(() => (get(file), untrack(() => {
            var _a, _b;
            return ((_a = get(file)) == null ? void 0 : _a.legacy) ? `Legacy${get(file).type ? ` ${get(file).type}` : ""}` : ((_b = get(file)) == null ? void 0 : _b.type) ?? "collection";
          })));
          FileItem($$anchor3, {
            get file() {
              return get(file);
            },
            small: true,
            get item() {
              return get(file);
            },
            get name() {
              return get(file), untrack(() => get(file).name);
            },
            modal: true,
            edit: true,
            get loading() {
              return get($0);
            },
            get type() {
              return get($1);
            },
            dismissible: true,
            $$events: {
              dismiss: (e) => {
                selectedItems(selectedItems().filter((_, idx) => idx !== fileIdx));
              }
            }
          });
        }
      });
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(selectedItems()), untrack(() => {
        var _a;
        return ((_a = selectedItems()) == null ? void 0 : _a.length) > 0;
      })) $$render(consequent);
    });
  }
  var node_2 = sibling(node_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_6 = root_4();
      var node_3 = child(div_6);
      KnowledgeSelector(node_3, {
        $$events: {
          select: (e) => {
            const item = e.detail;
            if (!selectedItems().find((k) => k.id === item.id)) {
              selectedItems([...selectedItems(), { ...item }]);
            }
          }
        },
        children: ($$anchor3, $$slotProps) => {
          var div_7 = root_2();
          var text_1 = child(div_7, true);
          reset(div_7);
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Select Knowledge")))
          ]);
          append($$anchor3, div_7);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button = root_3();
          var text_2 = child(button, true);
          reset(button);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Upload Files")))]);
          event("click", button, () => {
            get(filesInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_4, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.file_upload);
          })) $$render(consequent_1);
        });
      }
      reset(div_6);
      append($$anchor2, div_6);
    };
    if_block(node_2, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  reset(div_4);
  var div_8 = sibling(div_4, 2);
  var text_3 = child(div_8, true);
  reset(div_8);
  reset(div);
  template_effect(($0) => set_text(text_3, $0), [
    () => ($i18n(), untrack(() => $i18n().t('To attach knowledge base here, add them to the "Knowledge" workspace first.')))
  ]);
  bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
  event("change", input, async () => {
    if (get(inputFiles) && get(inputFiles).length > 0) {
      const _inputFiles = Array.from(get(inputFiles));
      inputFilesHandler(_inputFiles);
    } else {
      toast.error($i18n().t(`File not found.`));
    }
    mutate(filesInputElement, get(filesInputElement).value = "");
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
const getTerminalServers = async (token) => {
  const res = await fetch(`${REXPRO_API_BASE_URL}/terminals/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(() => null);
  if (!res || !res.ok) return [];
  return res.json().catch(() => []);
};
const getTerminalConfig = async (baseUrl, apiKey) => {
  const url = `${baseUrl.replace(/\/$/, "")}/api/config`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` }
  }).catch(() => null);
  if (!res || !res.ok) return null;
  return res.json().catch(() => null);
};
const getCwd = async (baseUrl, apiKey, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/cwd`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).catch(() => null);
  if (!res || !res.ok) return null;
  const json = await res.json().catch(() => null);
  return (json == null ? void 0 : json.cwd) ?? null;
};
const listFiles = async (baseUrl, apiKey, path = "/", sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/list?directory=${encodeURIComponent(path)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return (res == null ? void 0 : res.entries) ?? null;
};
const readFile = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/read?path=${encodeURIComponent(path)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).catch((err) => {
    return null;
  });
  if (!res || !res.ok) return null;
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.startsWith("image/") || contentType.startsWith("application/octet")) {
    return `[Binary file: ${contentType}]`;
  }
  const json = await res.json().catch(() => null);
  return (json == null ? void 0 : json.content) ?? null;
};
const downloadFileBlob = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/view?path=${encodeURIComponent(path)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).catch(() => null);
  if (!res || !res.ok) return null;
  const filename = path.split("/").pop() ?? "file";
  const blob = await res.blob();
  return { blob, filename };
};
const archiveFromTerminal = async (baseUrl, apiKey, paths, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/archive`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ paths })
  }).catch(() => null);
  if (!res || !res.ok) return null;
  const disposition = res.headers.get("content-disposition") ?? "";
  const match = disposition.match(/filename="?([^"]+)"?/);
  const filename = (match == null ? void 0 : match[1]) ?? "download.zip";
  const blob = await res.blob();
  return { blob, filename };
};
const uploadToTerminal = async (baseUrl, apiKey, directory, file, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/upload?directory=${encodeURIComponent(directory)}`;
  const body = new FormData();
  body.append("file", file);
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const createDirectory = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/mkdir`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ path })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const deleteEntry = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/delete?path=${encodeURIComponent(path)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "DELETE",
    headers
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const setCwd = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/cwd`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ path })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const moveEntry = async (baseUrl, apiKey, source, destination, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/move`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ source, destination })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return { error: (err == null ? void 0 : err.detail) ?? "Move failed" };
  });
  return res;
};
const getListeningPorts = async (baseUrl, apiKey) => {
  const url = `${baseUrl.replace(/\/$/, "")}/ports`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` }
  }).catch(() => null);
  if (!res || !res.ok) return [];
  const json = await res.json().catch(() => null);
  return (json == null ? void 0 : json.ports) ?? [];
};
const getPortProxyUrl = (baseUrl, port, path = "") => {
  return `${baseUrl.replace(/\/$/, "")}/proxy/${port}/${path}`;
};
const createNotebookSession = async (baseUrl, apiKey, path) => {
  const url = `${baseUrl.replace(/\/$/, "")}/notebooks`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ path })
  }).then(async (res2) => {
    if (!res2.ok) {
      const body = await res2.json().catch(() => ({}));
      return { error: (body == null ? void 0 : body.detail) ?? `HTTP ${res2.status}` };
    }
    return res2.json();
  }).catch((err) => {
    return { error: "Connection failed" };
  });
  return res;
};
const executeNotebookCell = async (baseUrl, apiKey, sessionId, cellIndex, source) => {
  const url = `${baseUrl.replace(/\/$/, "")}/notebooks/${sessionId}/execute`;
  const body = { cell_index: cellIndex };
  if (source !== void 0) body.source = source;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(async (res2) => {
    if (!res2.ok) {
      const body2 = await res2.json().catch(() => ({}));
      return { error: (body2 == null ? void 0 : body2.detail) ?? `HTTP ${res2.status}` };
    }
    return res2.json();
  }).catch((err) => {
    return { error: "Connection failed" };
  });
  return res;
};
const stopNotebookSession = async (baseUrl, apiKey, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/notebooks/${sessionId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${apiKey}` }
  }).catch(() => null);
  return (res == null ? void 0 : res.ok) ?? false;
};
export {
  Knowledge as K,
  getTerminalServers as a,
  getListeningPorts as b,
  createNotebookSession as c,
  getPortProxyUrl as d,
  executeNotebookCell as e,
  getCwd as f,
  getTerminalConfig as g,
  setCwd as h,
  downloadFileBlob as i,
  deleteEntry as j,
  archiveFromTerminal as k,
  listFiles as l,
  moveEntry as m,
  createDirectory as n,
  readFile as r,
  stopNotebookSession as s,
  uploadToTerminal as u
};
