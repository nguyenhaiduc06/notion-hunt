<script>
  export let type;
</script>

{#if type == "filled"}
  <div
    role="button"
    class="px-3 py-1 rounded text-sm text-white font-medium hover:bg-primary-600 bg-primary-500 shadow-sm"
  >
    <slot />
  </div>
{:else if type == "outlined"}
  <div
    role="button"
    class="px-3 py-1 rounded text-sm text-gray-800 border border-gray-200 font-medium hover:bg-gray-100 bg-white shadow-sm"
  >
    <slot />
  </div>
{:else if type == "ghost"}
  <div
    role="button"
    class="px-3 py-1 rounded text-sm text-gray-800 font-medium hover:bg-gray-100 bg-white"
  >
    <slot />
  </div>
{:else}
  <p>wrong type</p>
{/if}
