<script>
  import WidgetsList from "../components/widgets/WidgetsList.svelte";
  import TemplatesList from "../components/templates/TemplatesList.svelte";
  import TopCreators from "../components/creators/TopCreators.svelte";
  import LatestStories from "../components/stories/LatestStories.svelte";
</script>

<div class="max-w-6xl mx-auto">
  <!-- <div class="py-24 flex flex-col items-center">
    <h1 class="text-5xl font-semibold ">Bring widgets to your Notion</h1>
    <p class="text-lg text-black/40 mt-5 tracking-normal max-w-xl text-center">
      Sprinkle a little magic on your day. Connect your tools, and take your
      daily workflow to the next level.
    </p>

    <div
      role="button"
      class="flex items-center p-4 border border-black/10 rounded-md w-full max-w-lg mt-12"
    >
      <p class="text-black/40 flex-1">Search...</p>
      <div class="flex gap-1">
        <div
          class="bg-black/10 rounded w-5 h-5 flex items-center justify-center"
        >
          <i class="ri-command-line text-black/60 text-xs" />
        </div>
        <div
          class="bg-black/10 rounded w-5 h-5 flex items-center justify-center"
        >
          <p class="text-black/60 text-xs">K</p>
        </div>
      </div>
    </div>
  </div> -->

  <div class="py-12 flex flex-col items-center gap-2">
    <h1 class="text-4xl text-center font-semibold text-gray-900">
      Notion pages with
      <span
        class="bg-gradient-to-r from-orange-500 via-red-600 to-red-400 bg-clip-text text-transparent"
        >Superpowers</span
      >
    </h1>
    <p class="text-lg text-gray-400 max-w-3xl text-center">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
  </div>

  <div class="grid grid-cols-4 pb-8">
    <div class="col-span-3 border-r border-r-gray-200 pr-8 flex flex-col gap-8">
      <TemplatesList />
      <WidgetsList />
    </div>
    <div class="pl-8 flex flex-col gap-8">
      <TopCreators />
      <LatestStories />
    </div>
  </div>

</div>
