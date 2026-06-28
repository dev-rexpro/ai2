import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, t as template_effect, k as get, y as event, a as append, b as pop, e as store_get, s as setup_stores, z as sibling, c as child, d as set_text, w as set, f as from_html, q as mutable_source, r as reset, a_ as remove_textarea_child, aV as mutate, aR as next } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { s as set_attribute } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { b as bind_this } from "../chunks/BSYzg88z.js";
import { p as preventDefault } from "../chunks/CGgk3ROl.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { b as bubble_event } from "../chunks/C46Aw6eG.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { u as user } from "../chunks/BJ3rUC-5.js";
import { i as imageEdits, a as imageGenerations } from "../chunks/B0CJn_mI.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
var root = from_html(`<button class="relative group cursor-pointer"><img alt="" class="w-full aspect-square object-cover rounded-lg border border-gray-100/30 dark:border-gray-850/30"/> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div></button>`);
var root_1 = from_html(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"></div>`);
var root_2 = from_html(`<div class="h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm"> </div>`);
var root_3 = from_html(`<div class=" relative group"><div class="relative flex items-center"><img alt="" class="size-10 rounded-xl object-cover"/></div> <div class=" absolute -top-1 -right-1"><button class=" bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_4 = from_html(`<div class="flex flex-wrap gap-2 mb-2"></div>`);
var root_5 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"> </button>`);
var root_6 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg flex items-center gap-2" disabled=""><!> </button>`);
var root_7 = from_html(`<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><div class=" flex flex-col h-full px-4"><div class=" pt-0.5 pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="images-container"><div class=" h-full w-full flex flex-col"><div class="flex-1 p-1"><!></div></div></div> <div class="pb-3"><div class="border border-gray-100/30 dark:border-gray-850/30 w-full px-3 py-2.5 rounded-xl"><!> <div class="py-0.5"><textarea class=" w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="2"></textarea></div> <div class="flex justify-between items-center gap-2 mt-2"><div class="shrink-0"><input type="file" accept="image/*" multiple="" class="hidden"/> <button type="button" class="px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"> </button></div> <div class="flex gap-2 shrink-0"><!></div></div></div></div></div></div></div>`);
function Images($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let prompt = mutable_source("");
  let sourceImages = mutable_source([]);
  let generatedImages = mutable_source([]);
  let promptTextareaElement = mutable_source();
  let fileInputElement = mutable_source();
  const resizePromptTextarea = () => {
    if (get(promptTextareaElement)) {
      mutate(promptTextareaElement, get(promptTextareaElement).style.height = "");
      mutate(promptTextareaElement, get(promptTextareaElement).style.height = Math.min(get(promptTextareaElement).scrollHeight, 150) + "px");
    }
  };
  const handleFileUpload = (event2) => {
    const input = event2.target;
    if (input.files) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          var _a;
          if ((_a = e.target) == null ? void 0 : _a.result) {
            set(sourceImages, [...get(sourceImages), e.target.result]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
  const handleDrop = (event2) => {
    var _a;
    event2.preventDefault();
    const files = (_a = event2.dataTransfer) == null ? void 0 : _a.files;
    if (files) {
      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a2;
            if ((_a2 = e.target) == null ? void 0 : _a2.result) {
              set(sourceImages, [...get(sourceImages), e.target.result]);
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };
  const removeImage = (index2) => {
    set(sourceImages, get(sourceImages).filter((_, i) => i !== index2));
  };
  const submitHandler = async () => {
    if (!get(prompt).trim()) {
      toast.error($i18n().t("Please enter a prompt"));
      return;
    }
    set(loading, true);
    try {
      let result;
      if (get(sourceImages).length > 0) {
        /* @__PURE__ */ console.log("Calling imageEdits with", get(sourceImages).length, "images");
        result = await imageEdits(localStorage.token, get(sourceImages).length === 1 ? get(sourceImages)[0] : get(sourceImages), get(prompt));
      } else {
        /* @__PURE__ */ console.log("Calling imageGenerations");
        result = await imageGenerations(localStorage.token, get(prompt));
      }
      /* @__PURE__ */ console.log("Result:", result);
      if (result) {
        set(generatedImages, [...result, ...get(generatedImages)]);
      }
    } catch (error) {
      /* @__PURE__ */ console.error("Image generation/edit error:", error);
      toast.error(`${error}`);
    } finally {
      set(loading, false);
    }
  };
  const downloadImage = async (url, index2) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `image-${Date.now()}-${index2}.png`;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error($i18n().t("Failed to download image"));
    }
  };
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
      return;
    }
  });
  init();
  var div = root_7();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var node = child(div_5);
  {
    var consequent = ($$anchor2) => {
      var div_6 = root_1();
      each(div_6, 5, () => get(generatedImages), index, ($$anchor3, image, index2) => {
        var button = root();
        var img = child(button);
        next(2);
        reset(button);
        template_effect(() => set_attribute(img, "src", get(image).url));
        event("click", button, () => downloadImage(get(image).url, index2));
        append($$anchor3, button);
      });
      reset(div_6);
      append($$anchor2, div_6);
    };
    var alternate = ($$anchor2) => {
      var div_7 = root_2();
      var text = child(div_7, true);
      reset(div_7);
      template_effect(($0) => set_text(text, $0), [() => $i18n().t("Generated images will appear here")]);
      append($$anchor2, div_7);
    };
    if_block(node, ($$render) => {
      if (get(generatedImages).length > 0) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_5);
  reset(div_4);
  reset(div_3);
  var div_8 = sibling(div_3, 2);
  var div_9 = child(div_8);
  var node_1 = child(div_9);
  {
    var consequent_1 = ($$anchor2) => {
      var div_10 = root_4();
      each(div_10, 5, () => get(sourceImages), index, ($$anchor3, image, index2) => {
        var div_11 = root_3();
        var div_12 = child(div_11);
        var img_1 = child(div_12);
        reset(div_12);
        var div_13 = sibling(div_12, 2);
        var button_1 = child(div_13);
        reset(div_13);
        reset(div_11);
        template_effect(() => set_attribute(img_1, "src", get(image)));
        event("click", button_1, () => removeImage(index2));
        append($$anchor3, div_11);
      });
      reset(div_10);
      append($$anchor2, div_10);
    };
    if_block(node_1, ($$render) => {
      if (get(sourceImages).length > 0) $$render(consequent_1);
    });
  }
  var div_14 = sibling(node_1, 2);
  var textarea = child(div_14);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(promptTextareaElement, $$value), () => get(promptTextareaElement));
  reset(div_14);
  var div_15 = sibling(div_14, 2);
  var div_16 = child(div_15);
  var input_1 = child(div_16);
  bind_this(input_1, ($$value) => set(fileInputElement, $$value), () => get(fileInputElement));
  var button_2 = sibling(input_1, 2);
  var text_1 = child(button_2, true);
  reset(button_2);
  reset(div_16);
  var div_17 = sibling(div_16, 2);
  var node_2 = child(div_17);
  {
    var consequent_2 = ($$anchor2) => {
      var button_3 = root_5();
      var text_2 = child(button_3, true);
      reset(button_3);
      template_effect(
        ($0, $1) => {
          button_3.disabled = $0;
          set_text(text_2, $1);
        },
        [() => get(prompt).trim() === "", () => $i18n().t("Run")]
      );
      event("click", button_3, submitHandler);
      append($$anchor2, button_3);
    };
    var alternate_1 = ($$anchor2) => {
      var button_4 = root_6();
      var node_3 = child(button_4);
      Spinner(node_3, { className: "size-4" });
      var text_3 = sibling(node_3);
      reset(button_4);
      template_effect(($0) => set_text(text_3, ` ${$0 ?? ""}`), [() => $i18n().t("Running...")]);
      append($$anchor2, button_4);
    };
    if_block(node_2, ($$render) => {
      if (!get(loading)) $$render(consequent_2);
      else $$render(alternate_1, -1);
    });
  }
  reset(div_17);
  reset(div_15);
  reset(div_9);
  reset(div_8);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_attribute(textarea, "placeholder", $0);
      set_text(text_1, $1);
    },
    [
      () => get(sourceImages).length > 0 ? $i18n().t("Describe the edit...") : $i18n().t("Describe the image..."),
      () => $i18n().t("Add Image")
    ]
  );
  bind_value(textarea, () => get(prompt), ($$value) => set(prompt, $$value));
  event("input", textarea, resizePromptTextarea);
  event("focus", textarea, resizePromptTextarea);
  event("keydown", textarea, (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !get(loading)) {
      e.preventDefault();
      submitHandler();
    }
  });
  event("change", input_1, handleFileUpload);
  event("click", button_2, () => {
    var _a;
    return (_a = get(fileInputElement)) == null ? void 0 : _a.click();
  });
  event("dragover", button_2, preventDefault(function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  }));
  event("drop", button_2, handleDrop);
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Images($$anchor, {});
}
export {
  _page as component
};
