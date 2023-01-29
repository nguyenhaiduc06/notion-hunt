import PageHome from "./PageHome.svelte";
import PageWidgetDetail from "../components/widgets/PageWidgetDetail.svelte";
import PageTemplateDetail from "../components/templates/PageTemplateDetail.svelte";

export const routes = {
  "/": PageHome,
  "/widget": PageWidgetDetail,
  "/template": PageTemplateDetail,
};
