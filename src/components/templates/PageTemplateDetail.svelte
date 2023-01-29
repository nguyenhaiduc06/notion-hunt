<script>
  import Button from "../shared/Button.svelte";
</script>

<div class="max-w-6xl mx-auto py-12">
  <div class="flex items-start border-b border-b-gray-200 pb-4">
    <div
      class="h-24 aspect-video border border-gray-200 rounded flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/60lt66DzMzRuICZyJRWO3S/2e886418f8f2aa5b78a681b2454b8b4f/Desktop-Highlight-1.jpg"
        alt=""
        srcset=""
        class="min-w-full min-h-full"
      />
    </div>
    <div class="flex-1 px-2">
      <h1 class="font-semibold text-gray-800">
        Workflow from leading startups
      </h1>
      <p class="text-sm text-gray-400">
        A collection of the best templates from startups
      </p>
      <div class="flex py-4 gap-2">
        <Button type="filled">Duplicate</Button>
        <Button type="outlined">Visit website</Button>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-4 py-8">
    <div class="col-span-3 border-r border-r-gray-200 pr-8 flex flex-col gap-8">
      <h1 class="font-semibold text-gray-800">Overview</h1>
    </div>
    <div class="pl-8 flex flex-col gap-8">
      <div>
        <h1 class="uppercase text-xs font-medium text-gray-400">
          People also like
        </h1>
        <div class="h-64 w-full bg-gray-100 mt-4" />
      </div>
    </div>
  </div>
</div>
