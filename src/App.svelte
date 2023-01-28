<script>
  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import { routes } from "./routes";
</script>

<div class="bg-white text-black/80">
  <NavBar />
  <Router {routes} />
</div>
