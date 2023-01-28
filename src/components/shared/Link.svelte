<script>
  import { link } from "svelte-spa-router";

  export let href;
</script>

<a {href} use:link class="text-sm text-gray-600 hover:text-primary-500">
  <slot />
</a>
