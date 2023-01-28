<script>
  import { link } from "svelte-spa-router";
</script>

<div class="max-w-7xl mx-auto flex flex-col items-center py-24">
  <h1 class="text-4xl text-gray-900 font-semibold">
    Beautiful pages are just
    <span
      class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-flex items-center"
      >1 click
      <i class="ri-cursor-fill" /></span
    >
    away
  </h1>
  <p class="max-w-3xl text-gray-400 text-center text-lg mt-4">
    Say hello to the Store. A home for Extensions published by our community of
    Developers using our API. Find extensions to the tools you use in your
    day-to-day.
  </p>

  <div class="grid gap-8 w-full mt-24">
    <div
      class="bg-gradient-to-br from-orange-400 to-red-400 min-h-[660px] w-full rounded-xl p-16 grid grid-cols-[495px_auto]"
    >
      <div>
        <div
          class="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center"
        >
          <i class="ri-arrow-up-circle-line text-3xl text-white" />
        </div>

        <h1 class="text-xl font-semibold text-white mt-6">
          One up your productivity
        </h1>
        <p class="text-white/60 mt-3">
          On top of the core Raycast Extensions already built in, you can
          install Extensions built by Developers from the community. Everything
          you’ve asked for, in one place. Search and browse Extensions for your
          tools, actions and more.
        </p>
        <a
          href="/templates"
          use:link
          class="inline-flex items-center px-5 py-3 text-sm bg-white/20 rounded-md text-white mt-8"
          >Browse templates</a
        >
      </div>
    </div>
    <div
      class="w-full rounded-md grid md:grid-cols-[460px_minmax(0,_3fr)] gap-8"
    >
      <div class="bg-gray-800/5 rounded-xl p-16 min-h-[660px]">
        <div
          class="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center"
        >
          <i class="ri-arrow-up-circle-line text-3xl text-gray-800" />
        </div>
        <h1 class="text-xl font-semibold text-gray-800 mt-6">
          Lightweight and snappy
        </h1>
        <p class="text-gray-400 mt-2">
          Designed to be seamless and instant. View an Extension and hit ↵ to
          simply install it in milliseconds.
        </p>
      </div>
      <div class="bg-gray-100 rounded-xl" />
    </div>
  </div>
</div>
