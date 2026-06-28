import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, i as getContext, o as onMount, w as set, g as comment, h as first_child, a as append, b as pop, s as setup_stores, q as mutable_source, k as get, e as store_get } from "../chunks/B-Kw_l3V.js";
import { k as key } from "../chunks/BQGcmJDz.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { t as toast } from "../chunks/B4Bn1xMI.js";
import { g as goto } from "../chunks/vYrFh_lq.js";
import { e as skills } from "../chunks/BJ3rUC-5.js";
import { c as createNewSkill, g as getSkills } from "../chunks/DRvubTJA.js";
import { S as SkillEditor } from "../chunks/DMoM1x87.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let skill = mutable_source(null);
  let clone = mutable_source(false);
  const onSubmit = async (_skill) => {
    const res = await createNewSkill(localStorage.token, _skill).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Skill created successfully"));
      await skills.set(await getSkills(localStorage.token));
      await goto("/workspace/skills");
    }
  };
  onMount(async () => {
    if (sessionStorage.skill) {
      const _skill = JSON.parse(sessionStorage.skill);
      sessionStorage.removeItem("skill");
      set(clone, true);
      set(skill, {
        name: _skill.name || "Skill",
        id: _skill.id || "",
        description: _skill.description || "",
        content: _skill.content || "",
        is_active: _skill.is_active ?? true,
        access_grants: _skill.access_grants !== void 0 ? _skill.access_grants : []
      });
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(skill), ($$anchor2) => {
    SkillEditor($$anchor2, {
      get skill() {
        return get(skill);
      },
      onSubmit,
      get clone() {
        return get(clone);
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
