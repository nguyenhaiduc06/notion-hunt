<script>
  import { link } from "svelte-spa-router";
</script>

<div class="sticky top-0 bg-white">
  <div
    class="container mx-auto py-4 px-4 flex items-center gap-2 border-b border-b-gray-200"
  >
    <a href="/">
      <div
        class="bg-red-500 w-12 h-12 rounded flex items-center justify-center"
      >
        <h1 class="text-lg font-semibold text-white">NH</h1>
      </div>
    </a>
    <div
      role="button"
      class="border border-gray-200 py-1 px-3 w-64 rounded flex items-center mx-2"
    >
      <i class="ri-search-line mr-2 text-gray-400" />
      <p class="text-sm text-gray-400">Search...</p>
    </div>
    <nav class="flex gap-2 flex-1">
      <a
        href="/templates"
        class="px-3 py-1 rounded text-sm font-medium text-gray-900 hover:bg-gray-100"
        use:link>Templates</a
      >
      <a
        href="/widgets"
        class="px-3 py-1 rounded text-sm font-medium text-gray-900 hover:bg-gray-100"
        use:link>Widgets</a
      >
      <a
        href="/"
        class="px-3 py-1 rounded text-sm font-medium text-gray-900 hover:bg-gray-100"
        >Creators</a
      >
    </nav>

    <a
      href="/"
      class="px-3 py-1 rounded text-sm font-medium text-gray-900 hover:bg-gray-100"
      >Log in</a
    >
    <a
      href="/"
      class="px-3 py-1 rounded text-sm text-white font-medium hover:bg-primary-600 bg-primary-500 shadow-sm"
      >Sign up</a
    >
  </div>
</div>
