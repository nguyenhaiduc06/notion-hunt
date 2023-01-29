<script>
  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import { routes } from "./routes";
</script>

<div class="bg-gray-50 text-black/80">
  <NavBar />
  <Router {routes} />
</div>
