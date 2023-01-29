<script>
  import { link } from "svelte-spa-router";
  import Button from "./shared/Button.svelte";
</script>

<div class="sticky top-0 bg-white flex items-center border-b border-b-gray-200">
  <div class="container mx-auto py-4 flex items-center gap-2 ">
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
      <a href="/templates" use:link>
        <Button type="ghost">Templates</Button>
      </a>
      <a href="/widgets" use:link>
        <Button type="ghost">Widgets</Button>
      </a>
      <a href="/widgets" use:link>
        <Button type="ghost">Creators</Button>
      </a>
      <a href="/widgets" use:link>
        <Button type="ghost">Blog</Button>
      </a>
    </nav>

    <a href="/login">
      <Button type="ghost">Log in</Button>
    </a>
    <a href="/login">
      <Button type="filled">Sign up</Button>
    </a>
  </div>
</div>
