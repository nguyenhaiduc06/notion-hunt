<script>
  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import { routes } from "./routes";
</script>

<div class="bg-gray-50 text-black/80">
  <NavBar />
  <Router {routes} />
  <footer class="bg-gray-100 border-t border-t-gray-200">
    <div class="container mx-auto p-4">
      <p class="text-center flex items-center justify-center gap-1 text-gray-800">
        <i class="ri-code-s-slash-line" />
        with
        <i class="ri-heart-fill" />
        by Nguyen Hai Duc
      </p>
    </div>
  </footer>
</div>
