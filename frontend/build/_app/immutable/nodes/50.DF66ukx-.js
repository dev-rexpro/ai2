import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, k as get, w as set, c as child, r as reset, t as template_effect, m as deep_read_state, u as untrack, d as set_text, a as append, b as pop, q as mutable_source, f as from_html, g as comment, h as first_child, i as getContext, l as legacy_pre_effect, n as legacy_pre_effect_reset, s as setup_stores, z as sibling, y as event, x as derived_safe_equal, e as store_get, A as tick, C as deferred_template_effect, $ as $document, aW as text, aR as next, v as user_derived } from "../chunks/B-Kw_l3V.js";
import { i as if_block } from "../chunks/DWHK2A9K.js";
import { h as html } from "../chunks/BAc5ZjUQ.js";
import { h as head } from "../chunks/BmxCyGHt.js";
import { a as set_class, c as clsx, d as set_style, s as set_attribute, r as remove_input_defaults } from "../chunks/B9yCN616.js";
import { b as bind_value } from "../chunks/CgeA63xA.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import purify from "../chunks/C5m5pE-D.js";
import { m as marked } from "../chunks/zFu7_FHZ.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { p as page } from "../chunks/B35obKje.js";
import { a as getBackendConfig } from "../chunks/CwXWgxvI.js";
import { u as userSignIn, g as getSessionUser, a as updateUserTimezone, l as ldapUserSignIn, b as userSignUp } from "../chunks/C3caEY6s.js";
import { b as REXPRO_BASE_URL } from "../chunks/CZpnbXda.js";
import { u as user, c as config, k as socket, R as REXPRO_NAME } from "../chunks/BJ3rUC-5.js";
import { y as getUserTimezone, j as generateInitialsImage } from "../chunks/X0cYWxFO.js";
import { S as Spinner } from "../chunks/gJqE84vs.js";
import { p as prop } from "../chunks/COqmMDwI.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { t as transition, a as fly } from "../chunks/CDUneY82.js";
import { e as each, i as index } from "../chunks/qTQza25_.js";
import { A as ArrowRightCircle } from "../chunks/CMRT8nFR.js";
import { S as SensitiveInput } from "../chunks/CpgwHNSU.js";
var root$3 = from_html(`<div class=" marquee-item"> </div>`);
var root_1$1 = from_html(`<div><div><!></div></div>`);
function Marquee($$anchor, $$props) {
  push($$props, false);
  let idx = mutable_source(0);
  let className = prop($$props, "className", 8, "");
  let words = prop($$props, "words", 24, () => ["lorem", "ipsum"]);
  let duration = prop($$props, "duration", 8, 4e3);
  onMount(() => {
    setInterval(
      async () => {
        if (get(idx) === words().length - 1) {
          set(idx, 0);
        } else {
          set(idx, get(idx) + 1);
        }
      },
      duration()
    );
  });
  init();
  var div = root_1$1();
  var div_1 = child(div);
  var node = child(div_1);
  key(node, () => get(idx), ($$anchor2) => {
    var div_2 = root$3();
    var text2 = child(div_2, true);
    reset(div_2);
    template_effect(($0) => set_text(text2, $0), [
      () => (deep_read_state(words()), get(idx), untrack(() => words().at(get(idx))))
    ]);
    transition(1, div_2, () => fly, () => ({ y: "30%", duration: 1e3 }));
    append($$anchor2, div_2);
  });
  reset(div_1);
  reset(div);
  template_effect(() => set_class(div, 1, clsx(className())));
  append($$anchor, div);
  pop();
}
var root$2 = from_html(`<div class="image w-full h-full absolute top-0 left-0 bg-cover bg-center transition-opacity duration-1000 svelte-14ofdb6"></div>`);
function SlideShow($$anchor, $$props) {
  push($$props, false);
  let imageUrls = prop($$props, "imageUrls", 24, () => [
    `${REXPRO_BASE_URL}/assets/images/adam.jpg`,
    `${REXPRO_BASE_URL}/assets/images/galaxy.jpg`,
    `${REXPRO_BASE_URL}/assets/images/earth.jpg`,
    `${REXPRO_BASE_URL}/assets/images/space.jpg`
  ]);
  let duration = prop($$props, "duration", 8, 5e3);
  let selectedImageIdx = mutable_source(0);
  onMount(() => {
    setInterval(
      () => {
        set(selectedImageIdx, (get(selectedImageIdx) + 1) % (imageUrls().length - 1));
      },
      duration()
    );
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, imageUrls, index, ($$anchor2, imageUrl, idx) => {
    var div = root$2();
    template_effect(() => set_style(div, `opacity: ${get(selectedImageIdx) === idx ? 1 : 0}; background-image: url('${get(imageUrl) ?? ""}')`));
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
var root$1 = from_html(`<div class="w-full h-screen max-h-[100dvh] text-white relative"><div class="fixed m-10 z-50"><div class="flex space-x-2"><div class=" self-center"><img id="logo" class=" w-6 rounded-full" alt="logo"/></div></div></div> <!> <div class="w-full h-full absolute top-0 left-0 bg-linear-to-t from-20% from-black to-transparent"></div> <div class="w-full h-full absolute top-0 left-0 backdrop-blur-xs bg-black/50"></div> <div class="relative bg-transparent w-full h-screen max-h-[100dvh] flex z-10"><div class="flex flex-col justify-end w-full items-center pb-10 text-center"><div class="text-5xl lg:text-7xl font-secondary"><!> <div class="mt-0.5"> </div></div> <div class="flex justify-center mt-8"><div class="flex flex-col justify-center items-center"><button class="relative z-20 flex p-1 rounded-full bg-white/5 hover:bg-white/10 transition font-medium text-sm"><!></button> <div class="mt-1.5 font-primary text-base font-medium" aria-hidden="true"> </div></div></div></div></div></div>`);
function OnBoarding($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 8, true);
  let getStartedHandler = prop($$props, "getStartedHandler", 8, () => {
  });
  function setLogoImage() {
    const logo = document.getElementById("logo");
    if (logo) {
      const isDarkMode = document.documentElement.classList.contains("dark");
      if (isDarkMode) {
        const darkImage = new Image();
        darkImage.src = `${REXPRO_BASE_URL}/static/favicon-dark.png`;
        darkImage.onload = () => {
          logo.src = `${REXPRO_BASE_URL}/static/favicon-dark.png`;
          logo.style.filter = "";
        };
        darkImage.onerror = () => {
          logo.style.filter = "invert(1)";
        };
      }
    }
  }
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      setLogoImage();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var img = child(div_3);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var node_1 = sibling(div_1, 2);
      SlideShow(node_1, { duration: 5e3 });
      var div_4 = sibling(node_1, 6);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var node_2 = child(div_6);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          $i18n().t("Explore the cosmos"),
          $i18n().t("Unlock mysteries"),
          $i18n().t("Chart new frontiers"),
          $i18n().t("Dive into knowledge"),
          $i18n().t("Discover wonders"),
          $i18n().t("Ignite curiosity"),
          $i18n().t("Forge new paths"),
          $i18n().t("Unravel secrets"),
          $i18n().t("Pioneer insights"),
          $i18n().t("Embark on adventures")
        ])));
        Marquee(node_2, {
          duration: 5e3,
          get words() {
            return get($0);
          }
        });
      }
      var div_7 = sibling(node_2, 2);
      var text2 = child(div_7, true);
      reset(div_7);
      reset(div_6);
      var div_8 = sibling(div_6, 2);
      var div_9 = child(div_8);
      var button = child(div_9);
      var node_3 = child(button);
      ArrowRightCircle(node_3, { className: "size-6", "aria-hidden": "true" });
      reset(button);
      var div_10 = sibling(button, 2);
      var text_1 = child(div_10, true);
      reset(div_10);
      reset(div_9);
      reset(div_8);
      reset(div_5);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1, $2) => {
          set_attribute(img, "src", `${REXPRO_BASE_URL}/static/favicon.png`);
          set_text(text2, $0);
          set_attribute(button, "aria-label", $1);
          set_text(text_1, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t(`wherever you are`))),
          () => ($i18n(), untrack(() => $i18n().t("Get started"))),
          () => ($i18n(), untrack(() => $i18n().t(`Get started`)))
        ]
      );
      event("click", button, () => {
        getStartedHandler()();
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class=" my-auto pb-10 w-full sm:max-w-md"><div class="flex items-center justify-center gap-3 text-xl sm:text-2xl text-center font-medium dark:text-gray-200"><div> </div> <div><!></div></div></div>`);
var root_1 = from_html(`<div class="flex justify-center mb-6"><img id="logo" class="size-24 rounded-full"/></div>`);
var root_2 = from_html(`<div class="mt-1 text-xs font-medium text-gray-600 dark:text-gray-500"> </div>`);
var root_3 = from_html(`<div class="mb-2"><label for="name" class="text-sm font-medium text-left mb-1 block"> </label> <input type="text" id="name" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="name" required=""/></div>`);
var root_4 = from_html(`<div class="mb-2"><label for="username" class="text-sm font-medium text-left mb-1 block"> </label> <input type="text" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="username" name="username" id="username" required=""/></div>`);
var root_5 = from_html(`<div class="mb-2"><label for="email" class="text-sm font-medium text-left mb-1 block"> </label> <input type="email" id="email" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="email" name="email" required=""/></div>`);
var root_6 = from_html(`<div class="mt-2"><label for="confirm-password" class="text-sm font-medium text-left mb-1 block"> </label> <!></div>`);
var root_7 = from_html(`<div class="flex flex-col mt-4"><!> <!> <div><label for="password" class="text-sm font-medium text-left mb-1 block"> </label> <!></div> <!></div>`);
var root_8 = from_html(`<button class="bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5" type="submit"> </button>`);
var root_9 = from_html(`<div class=" mt-4 text-sm text-center"> <button class=" font-medium underline" type="button"> </button></div>`);
var root_10 = from_html(`<button class="bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5" type="submit"> </button> <!>`, 1);
var root_11 = from_html(`<span class="px-3 text-sm font-medium text-gray-900 dark:text-white bg-transparent"> </span>`);
var root_12 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="size-6 mr-3" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg> <span> </span></button>`);
var root_13 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" class="size-6 mr-3" aria-hidden="true"><rect x="1" y="1" width="9" height="9" fill="#f25022"></rect><rect x="1" y="11" width="9" height="9" fill="#00a4ef"></rect><rect x="11" y="1" width="9" height="9" fill="#7fba00"></rect><rect x="11" y="11" width="9" height="9" fill="#ffb900"></rect></svg> <span> </span></button>`);
var root_14 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 mr-3" aria-hidden="true"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"></path></svg> <span> </span></button>`);
var root_15 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"></path></svg> <span> </span></button>`);
var root_16 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><span> </span></button>`);
var root_17 = from_html(`<div class="inline-flex items-center justify-center w-full"><hr class="w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"/> <!> <hr class="w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"/></div> <div class="flex flex-col space-y-2"><!> <!> <!> <!> <!></div>`, 1);
var root_18 = from_html(`<div class="mt-2"><button class="flex justify-center items-center text-xs w-full text-center underline" type="button"><span> </span></button></div>`);
var root_19 = from_html(`<div class="max-w-3xl mx-auto"><div class="mt-2 text-[0.7rem] text-gray-500 dark:text-gray-400 marked"></div></div>`);
var root_20 = from_html(`<div class="my-auto flex flex-col justify-center items-center"><div class=" sm:max-w-md my-auto pb-10 w-full dark:text-gray-100"><!> <form class=" flex flex-col justify-center"><div class="mb-1"><div class=" text-2xl font-medium"><!></div> <!></div> <!> <div class="mt-5"><!></div></form> <!> <!></div> <!></div>`);
var root_21 = from_html(`<div class="fixed m-10 z-50"><div class="flex space-x-2"><div class=" self-center"><img id="logo" class=" w-6 rounded-full" alt=""/></div></div></div>`);
var root_22 = from_html(`<div class="fixed bg-transparent min-h-screen w-full flex justify-center font-primary z-50 text-black dark:text-white" id="auth-container"><div class="w-full px-10 min-h-screen flex flex-col text-center"><!></div></div> <!>`, 1);
var root_23 = from_html(`<!> <div class="w-full h-screen max-h-[100dvh] text-white relative" id="auth-page"><div class="w-full h-full absolute top-0 left-0 bg-white dark:bg-black"></div> <div class="w-full absolute top-0 left-0 right-0 h-8 drag-region"></div> <!></div>`, 1);
function _page($$anchor, $$props) {
  var _a;
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $REXPRO_NAME = () => store_get(REXPRO_NAME, "$REXPRO_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let mode = mutable_source(((_a = $config()) == null ? void 0 : _a.features.enable_ldap) ? "ldap" : "signin");
  let form = mutable_source(null);
  let name = mutable_source("");
  let email = mutable_source("");
  let password = mutable_source("");
  let confirmPassword = mutable_source("");
  let ldapUsername = mutable_source("");
  const setSessionUser = async (sessionUser, redirectPath = null) => {
    if (sessionUser) {
      /* @__PURE__ */ console.log(sessionUser);
      toast.success($i18n().t(`You're now logged in.`));
      if (sessionUser.token) {
        localStorage.token = sessionUser.token;
      }
      $socket().emit("user-join", { auth: { token: sessionUser.token } });
      await user.set(sessionUser);
      await config.set(await getBackendConfig());
      const timezone = getUserTimezone();
      if (sessionUser.token && timezone) {
        updateUserTimezone(sessionUser.token, timezone);
      }
      if (!redirectPath) {
        redirectPath = $page().url.searchParams.get("redirect") || "/";
      }
      goto(redirectPath);
      localStorage.removeItem("redirectPath");
    }
  };
  const signInHandler = async () => {
    const sessionUser = await userSignIn(get(email), get(password)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const signUpHandler = async () => {
    var _a2, _b;
    if ((_b = (_a2 = $config()) == null ? void 0 : _a2.features) == null ? void 0 : _b.enable_signup_password_confirmation) {
      if (get(password) !== get(confirmPassword)) {
        toast.error($i18n().t("Passwords do not match."));
        return;
      }
    }
    const sessionUser = await userSignUp(get(name), get(email), get(password), generateInitialsImage(get(name))).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const ldapSignInHandler = async () => {
    const sessionUser = await ldapUserSignIn(get(ldapUsername), get(password)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const submitHandler = async () => {
    if (get(mode) === "ldap") {
      await ldapSignInHandler();
    } else if (get(mode) === "signin") {
      await signInHandler();
    } else {
      await signUpHandler();
    }
  };
  const oauthCallbackHandler = async () => {
    function getCookie(name2) {
      const match = document.cookie.match(new RegExp("(?:^|; )" + name2.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
      return match ? decodeURIComponent(match[1]) : null;
    }
    const token = getCookie("token");
    if (!token) {
      return;
    }
    const sessionUser = await getSessionUser(token).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (!sessionUser) {
      return;
    }
    localStorage.token = token;
    await setSessionUser(sessionUser, localStorage.getItem("redirectPath") || null);
  };
  let onboarding = mutable_source(false);
  async function setLogoImage() {
    await tick();
    const logo = document.getElementById("logo");
    if (logo) {
      const isDarkMode = document.documentElement.classList.contains("dark");
      if (isDarkMode) {
        const darkImage = new Image();
        darkImage.src = `${REXPRO_BASE_URL}/static/favicon-dark.png`;
        darkImage.onload = () => {
          logo.src = `${REXPRO_BASE_URL}/static/favicon-dark.png`;
          logo.style.filter = "";
        };
        darkImage.onerror = () => {
          logo.style.filter = "invert(1)";
        };
      }
    }
  }
  onMount(async () => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    const redirectPath = $page().url.searchParams.get("redirect");
    if ($user() !== void 0) {
      goto(redirectPath || "/");
    } else {
      if (redirectPath) {
        localStorage.setItem("redirectPath", redirectPath);
      }
    }
    const error = $page().url.searchParams.get("error");
    if (error) {
      toast.error(error);
    }
    await oauthCallbackHandler();
    set(form, $page().url.searchParams.get("form"));
    if (((_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.auto_redirect) && !get(form) && !error) {
      const providers = Object.keys(((_d = (_c = $config()) == null ? void 0 : _c.oauth) == null ? void 0 : _d.providers) ?? {});
      if (providers.length === 1 && ((_f = (_e = $config()) == null ? void 0 : _e.features) == null ? void 0 : _f.auth) !== false && ((_h = (_g = $config()) == null ? void 0 : _g.features) == null ? void 0 : _h.enable_login_form) === false && !((_j = (_i = $config()) == null ? void 0 : _i.features) == null ? void 0 : _j.enable_ldap) && !((_l = (_k = $config()) == null ? void 0 : _k.features) == null ? void 0 : _l.auth_trusted_header) && !((_m = $config()) == null ? void 0 : _m.onboarding) && !localStorage.token && !document.cookie.split("; ").some((c) => c.startsWith("token="))) {
        window.location.href = `${REXPRO_BASE_URL}/oauth/${providers[0]}/login`;
        return;
      }
    }
    set(loaded, true);
    setLogoImage();
    if ((((_o = (_n = $config()) == null ? void 0 : _n.features) == null ? void 0 : _o.auth_trusted_header) ?? false) || ((_q = (_p = $config()) == null ? void 0 : _p.features) == null ? void 0 : _q.auth) === false) {
      await signInHandler();
    } else {
      set(onboarding, ((_r = $config()) == null ? void 0 : _r.onboarding) ?? false);
    }
  });
  init();
  var fragment = root_23();
  head("1s728sz", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `
		${`${$REXPRO_NAME()}`}
	`;
    });
  });
  var node = first_child(fragment);
  OnBoarding(node, {
    getStartedHandler: () => {
      var _a2;
      set(onboarding, false);
      set(mode, ((_a2 = $config()) == null ? void 0 : _a2.features.enable_ldap) ? "ldap" : "signup");
    },
    get show() {
      return get(onboarding);
    },
    set show($$value) {
      set(onboarding, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var node_1 = sibling(child(div), 4);
  {
    var consequent_23 = ($$anchor2) => {
      var fragment_1 = root_22();
      var div_1 = first_child(fragment_1);
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var div_3 = root();
          var div_4 = child(div_3);
          var div_5 = child(div_4);
          var text2 = child(div_5, true);
          reset(div_5);
          var div_6 = sibling(div_5, 2);
          var node_3 = child(div_6);
          Spinner(node_3, { className: "size-5" });
          reset(div_6);
          reset(div_4);
          reset(div_3);
          template_effect(($0) => set_text(text2, $0), [
            () => $i18n().t("Signing in to {{REXPRO_NAME}}", { REXPRO_NAME: $REXPRO_NAME() })
          ]);
          append($$anchor3, div_3);
        };
        var alternate_3 = ($$anchor3) => {
          var div_7 = root_20();
          var div_8 = child(div_7);
          var node_4 = child(div_8);
          {
            var consequent_1 = ($$anchor4) => {
              var div_9 = root_1();
              var img = child(div_9);
              reset(div_9);
              template_effect(() => {
                set_attribute(img, "src", `${REXPRO_BASE_URL}/static/favicon.png`);
                set_attribute(img, "alt", `${$REXPRO_NAME() ?? ""} logo`);
              });
              append($$anchor4, div_9);
            };
            if_block(node_4, ($$render) => {
              var _a2, _b;
              if (((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.auth_logo_position) === "center") $$render(consequent_1);
            });
          }
          var form_1 = sibling(node_4, 2);
          var div_10 = child(form_1);
          var div_11 = child(div_10);
          var node_5 = child(div_11);
          {
            var consequent_2 = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, $0), [
                () => $i18n().t(`Get started with {{REXPRO_NAME}}`, { REXPRO_NAME: $REXPRO_NAME() })
              ]);
              append($$anchor4, text_1);
            };
            var consequent_3 = ($$anchor4) => {
              var text_2 = text();
              template_effect(($0) => set_text(text_2, $0), [
                () => $i18n().t(`Sign in to {{REXPRO_NAME}} with LDAP`, { REXPRO_NAME: $REXPRO_NAME() })
              ]);
              append($$anchor4, text_2);
            };
            var consequent_4 = ($$anchor4) => {
              var text_3 = text();
              template_effect(($0) => set_text(text_3, $0), [
                () => $i18n().t(`Sign in to {{REXPRO_NAME}}`, { REXPRO_NAME: $REXPRO_NAME() })
              ]);
              append($$anchor4, text_3);
            };
            var alternate = ($$anchor4) => {
              var text_4 = text();
              template_effect(($0) => set_text(text_4, $0), [
                () => $i18n().t(`Sign up to {{REXPRO_NAME}}`, { REXPRO_NAME: $REXPRO_NAME() })
              ]);
              append($$anchor4, text_4);
            };
            if_block(node_5, ($$render) => {
              var _a2;
              if (((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false) $$render(consequent_2);
              else if (get(mode) === "ldap") $$render(consequent_3, 1);
              else if (get(mode) === "signin") $$render(consequent_4, 2);
              else $$render(alternate, -1);
            });
          }
          reset(div_11);
          var node_6 = sibling(div_11, 2);
          {
            var consequent_5 = ($$anchor4) => {
              var div_12 = root_2();
              var text_5 = child(div_12);
              reset(div_12);
              template_effect(
                ($0) => set_text(text_5, `ⓘ ${$REXPRO_NAME() ?? ""}
											${$0 ?? ""}`),
                [
                  () => $i18n().t("does not make any external connections, and your data stays securely on your locally hosted server.")
                ]
              );
              append($$anchor4, div_12);
            };
            if_block(node_6, ($$render) => {
              var _a2;
              if (((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false) $$render(consequent_5);
            });
          }
          reset(div_10);
          var node_7 = sibling(div_10, 2);
          {
            var consequent_9 = ($$anchor4) => {
              var div_13 = root_7();
              var node_8 = child(div_13);
              {
                var consequent_6 = ($$anchor5) => {
                  var div_14 = root_3();
                  var label = child(div_14);
                  var text_6 = child(label, true);
                  reset(label);
                  var input = sibling(label, 2);
                  remove_input_defaults(input);
                  reset(div_14);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_6, $0);
                      set_attribute(input, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Name"),
                      () => $i18n().t("Enter Your Full Name")
                    ]
                  );
                  bind_value(input, () => get(name), ($$value) => set(name, $$value));
                  append($$anchor5, div_14);
                };
                if_block(node_8, ($$render) => {
                  if (get(mode) === "signup") $$render(consequent_6);
                });
              }
              var node_9 = sibling(node_8, 2);
              {
                var consequent_7 = ($$anchor5) => {
                  var div_15 = root_4();
                  var label_1 = child(div_15);
                  var text_7 = child(label_1, true);
                  reset(label_1);
                  var input_1 = sibling(label_1, 2);
                  remove_input_defaults(input_1);
                  reset(div_15);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_7, $0);
                      set_attribute(input_1, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Username"),
                      () => $i18n().t("Enter Your Username")
                    ]
                  );
                  bind_value(input_1, () => get(ldapUsername), ($$value) => set(ldapUsername, $$value));
                  append($$anchor5, div_15);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_16 = root_5();
                  var label_2 = child(div_16);
                  var text_8 = child(label_2, true);
                  reset(label_2);
                  var input_2 = sibling(label_2, 2);
                  remove_input_defaults(input_2);
                  reset(div_16);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_8, $0);
                      set_attribute(input_2, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Email"),
                      () => $i18n().t("Enter Your Email")
                    ]
                  );
                  bind_value(input_2, () => get(email), ($$value) => set(email, $$value));
                  append($$anchor5, div_16);
                };
                if_block(node_9, ($$render) => {
                  if (get(mode) === "ldap") $$render(consequent_7);
                  else $$render(alternate_1, -1);
                });
              }
              var div_17 = sibling(node_9, 2);
              var label_3 = child(div_17);
              var text_9 = child(label_3, true);
              reset(label_3);
              var node_10 = sibling(label_3, 2);
              {
                let $0 = derived_safe_equal(() => $i18n().t("Enter Your Password"));
                let $1 = derived_safe_equal(() => get(mode) === "signup" ? "new-password" : "current-password");
                SensitiveInput(node_10, {
                  type: "password",
                  id: "password",
                  class: "my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600",
                  get placeholder() {
                    return get($0);
                  },
                  get autocomplete() {
                    return get($1);
                  },
                  name: "password",
                  screenReader: true,
                  required: true,
                  "aria-required": "true",
                  get value() {
                    return get(password);
                  },
                  set value($$value) {
                    set(password, $$value);
                  },
                  $$legacy: true
                });
              }
              reset(div_17);
              var node_11 = sibling(div_17, 2);
              {
                var consequent_8 = ($$anchor5) => {
                  var div_18 = root_6();
                  var label_4 = child(div_18);
                  var text_10 = child(label_4, true);
                  reset(label_4);
                  var node_12 = sibling(label_4, 2);
                  {
                    let $0 = derived_safe_equal(() => $i18n().t("Confirm Your Password"));
                    SensitiveInput(node_12, {
                      type: "password",
                      id: "confirm-password",
                      class: "my-0.5 w-full text-sm outline-hidden bg-transparent",
                      get placeholder() {
                        return get($0);
                      },
                      autocomplete: "new-password",
                      name: "confirm-password",
                      required: true,
                      get value() {
                        return get(confirmPassword);
                      },
                      set value($$value) {
                        set(confirmPassword, $$value);
                      },
                      $$legacy: true
                    });
                  }
                  reset(div_18);
                  template_effect(($0) => set_text(text_10, $0), [() => $i18n().t("Confirm Password")]);
                  append($$anchor5, div_18);
                };
                if_block(node_11, ($$render) => {
                  var _a2, _b;
                  if (get(mode) === "signup" && ((_b = (_a2 = $config()) == null ? void 0 : _a2.features) == null ? void 0 : _b.enable_signup_password_confirmation)) $$render(consequent_8);
                });
              }
              reset(div_13);
              template_effect(($0) => set_text(text_9, $0), [() => $i18n().t("Password")]);
              append($$anchor4, div_13);
            };
            if_block(node_7, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_9);
            });
          }
          var div_19 = sibling(node_7, 2);
          var node_13 = child(div_19);
          {
            var consequent_12 = ($$anchor4) => {
              var fragment_6 = comment();
              var node_14 = first_child(fragment_6);
              {
                var consequent_10 = ($$anchor5) => {
                  var button = root_8();
                  var text_11 = child(button, true);
                  reset(button);
                  template_effect(($0) => set_text(text_11, $0), [() => $i18n().t("Authenticate")]);
                  append($$anchor5, button);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_7 = root_10();
                  var button_1 = first_child(fragment_7);
                  var text_12 = child(button_1, true);
                  reset(button_1);
                  var node_15 = sibling(button_1, 2);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var div_20 = root_9();
                      var text_13 = child(div_20);
                      var button_2 = sibling(text_13);
                      var text_14 = child(button_2, true);
                      reset(button_2);
                      reset(div_20);
                      template_effect(
                        ($0, $1) => {
                          set_text(text_13, `${$0 ?? ""} `);
                          set_text(text_14, $1);
                        },
                        [
                          () => get(mode) === "signin" ? $i18n().t("Don't have an account?") : $i18n().t("Already have an account?"),
                          () => get(mode) === "signin" ? $i18n().t("Sign up") : $i18n().t("Sign in")
                        ]
                      );
                      event("click", button_2, () => {
                        if (get(mode) === "signin") {
                          set(mode, "signup");
                        } else {
                          set(mode, "signin");
                        }
                      });
                      append($$anchor6, div_20);
                    };
                    if_block(node_15, ($$render) => {
                      var _a2, _b;
                      if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_signup) && !(((_b = $config()) == null ? void 0 : _b.onboarding) ?? false)) $$render(consequent_11);
                    });
                  }
                  template_effect(($0) => set_text(text_12, $0), [
                    () => {
                      var _a2;
                      return get(mode) === "signin" ? $i18n().t("Sign in") : ((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false ? $i18n().t("Create Admin Account") : $i18n().t("Create Account");
                    }
                  ]);
                  append($$anchor5, fragment_7);
                };
                if_block(node_14, ($$render) => {
                  if (get(mode) === "ldap") $$render(consequent_10);
                  else $$render(alternate_2, -1);
                });
              }
              append($$anchor4, fragment_6);
            };
            if_block(node_13, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_12);
            });
          }
          reset(div_19);
          reset(form_1);
          var node_16 = sibling(form_1, 2);
          {
            var consequent_19 = ($$anchor4) => {
              var fragment_8 = root_17();
              var div_21 = first_child(fragment_8);
              var node_17 = sibling(child(div_21), 2);
              {
                var consequent_13 = ($$anchor5) => {
                  var span = root_11();
                  var text_15 = child(span, true);
                  reset(span);
                  template_effect(($0) => set_text(text_15, $0), [() => $i18n().t("or")]);
                  append($$anchor5, span);
                };
                if_block(node_17, ($$render) => {
                  var _a2, _b;
                  if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_13);
                });
              }
              next(2);
              reset(div_21);
              var div_22 = sibling(div_21, 2);
              var node_18 = child(div_22);
              {
                var consequent_14 = ($$anchor5) => {
                  var button_3 = root_12();
                  var span_1 = sibling(child(button_3), 2);
                  var text_16 = child(span_1, true);
                  reset(span_1);
                  reset(button_3);
                  template_effect(($0) => set_text(text_16, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Google" })
                  ]);
                  event("click", button_3, () => {
                    window.location.href = `${REXPRO_BASE_URL}/oauth/google/login`;
                  });
                  append($$anchor5, button_3);
                };
                if_block(node_18, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.google) $$render(consequent_14);
                });
              }
              var node_19 = sibling(node_18, 2);
              {
                var consequent_15 = ($$anchor5) => {
                  var button_4 = root_13();
                  var span_2 = sibling(child(button_4), 2);
                  var text_17 = child(span_2, true);
                  reset(span_2);
                  reset(button_4);
                  template_effect(($0) => set_text(text_17, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Microsoft" })
                  ]);
                  event("click", button_4, () => {
                    window.location.href = `${REXPRO_BASE_URL}/oauth/microsoft/login`;
                  });
                  append($$anchor5, button_4);
                };
                if_block(node_19, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.microsoft) $$render(consequent_15);
                });
              }
              var node_20 = sibling(node_19, 2);
              {
                var consequent_16 = ($$anchor5) => {
                  var button_5 = root_14();
                  var span_3 = sibling(child(button_5), 2);
                  var text_18 = child(span_3, true);
                  reset(span_3);
                  reset(button_5);
                  template_effect(($0) => set_text(text_18, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "GitHub" })
                  ]);
                  event("click", button_5, () => {
                    window.location.href = `${REXPRO_BASE_URL}/oauth/github/login`;
                  });
                  append($$anchor5, button_5);
                };
                if_block(node_20, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.github) $$render(consequent_16);
                });
              }
              var node_21 = sibling(node_20, 2);
              {
                var consequent_17 = ($$anchor5) => {
                  var button_6 = root_15();
                  var span_4 = sibling(child(button_6), 2);
                  var text_19 = child(span_4, true);
                  reset(span_4);
                  reset(button_6);
                  template_effect(($0) => set_text(text_19, $0), [
                    () => {
                      var _a2, _b, _c;
                      return $i18n().t("Continue with {{provider}}", { provider: ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.oidc) ?? "SSO" });
                    }
                  ]);
                  event("click", button_6, () => {
                    window.location.href = `${REXPRO_BASE_URL}/oauth/oidc/login`;
                  });
                  append($$anchor5, button_6);
                };
                if_block(node_21, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.oidc) $$render(consequent_17);
                });
              }
              var node_22 = sibling(node_21, 2);
              {
                var consequent_18 = ($$anchor5) => {
                  var button_7 = root_16();
                  var span_5 = child(button_7);
                  var text_20 = child(span_5, true);
                  reset(span_5);
                  reset(button_7);
                  template_effect(($0) => set_text(text_20, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Feishu" })
                  ]);
                  event("click", button_7, () => {
                    window.location.href = `${REXPRO_BASE_URL}/oauth/feishu/login`;
                  });
                  append($$anchor5, button_7);
                };
                if_block(node_22, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.feishu) $$render(consequent_18);
                });
              }
              reset(div_22);
              append($$anchor4, fragment_8);
            };
            var d = user_derived(() => {
              var _a2, _b;
              return Object.keys(((_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) ?? {}).length > 0;
            });
            if_block(node_16, ($$render) => {
              if (get(d)) $$render(consequent_19);
            });
          }
          var node_23 = sibling(node_16, 2);
          {
            var consequent_20 = ($$anchor4) => {
              var div_23 = root_18();
              var button_8 = child(div_23);
              var span_6 = child(button_8);
              var text_21 = child(span_6, true);
              reset(span_6);
              reset(button_8);
              reset(div_23);
              template_effect(($0) => set_text(text_21, $0), [
                () => get(mode) === "ldap" ? $i18n().t("Continue with Email") : $i18n().t("Continue with LDAP")
              ]);
              event("click", button_8, () => {
                var _a2;
                if (get(mode) === "ldap") set(mode, ((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false ? "signup" : "signin");
                else set(mode, "ldap");
              });
              append($$anchor4, div_23);
            };
            if_block(node_23, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_ldap) && ((_b = $config()) == null ? void 0 : _b.features.enable_login_form)) $$render(consequent_20);
            });
          }
          reset(div_8);
          var node_24 = sibling(div_8, 2);
          {
            var consequent_21 = ($$anchor4) => {
              var div_24 = root_19();
              var div_25 = child(div_24);
              html(div_25, () => {
                var _a2, _b;
                return purify.sanitize(marked((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.login_footer));
              }, true);
              reset(div_25);
              reset(div_24);
              append($$anchor4, div_24);
            };
            if_block(node_24, ($$render) => {
              var _a2, _b;
              if ((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.login_footer) $$render(consequent_21);
            });
          }
          reset(div_7);
          event("submit", form_1, (e) => {
            e.preventDefault();
            submitHandler();
          });
          append($$anchor3, div_7);
        };
        if_block(node_2, ($$render) => {
          var _a2, _b;
          if ((((_a2 = $config()) == null ? void 0 : _a2.features.auth_trusted_header) ?? false) || ((_b = $config()) == null ? void 0 : _b.features.auth) === false) $$render(consequent);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_2);
      reset(div_1);
      var node_25 = sibling(div_1, 2);
      {
        var consequent_22 = ($$anchor3) => {
          var div_26 = root_21();
          var div_27 = child(div_26);
          var div_28 = child(div_27);
          var img_1 = child(div_28);
          reset(div_28);
          reset(div_27);
          reset(div_26);
          template_effect(() => set_attribute(img_1, "src", `${REXPRO_BASE_URL}/static/favicon.png`));
          append($$anchor3, div_26);
        };
        if_block(node_25, ($$render) => {
          var _a2, _b;
          if (!((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.auth_logo_position)) $$render(consequent_22);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_23);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
