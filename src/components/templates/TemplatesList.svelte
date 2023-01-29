<script>
  import Link from "../shared/Link.svelte";
  import TemplateThumbnail from "./TemplateThumbnail.svelte";

  const templates = [
    {
      imageUrl:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/60lt66DzMzRuICZyJRWO3S/2e886418f8f2aa5b78a681b2454b8b4f/Desktop-Highlight-1.jpg",
      name: "Workflows from leading startups",
      description: "A collection of the best templates from startups",
    },
    {
      imageUrl:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/3iJYDoppZ7y8h8d6ETtVhR/61111266cc5624b33ebb8d7f935fb7cc/Desktop-Highlight-2.jpg",
      name: "New year resolution hub",
      description:
        "The most comprehensive template for new year resolutions, planning and reflection.",
    },
    {
      imageUrl:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/6WYAijso48QdEFfXRb2Mdl/0e3da79ed376c57e492a81449b1f992b/Desktop-Highlight-3.jpg",
      name: "New year resolution hub",
      description:
        "The most comprehensive template for new year resolutions, planning and reflection.",
    },
    {
      imageUrl:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/6WYAijso48QdEFfXRb2Mdl/0e3da79ed376c57e492a81449b1f992b/Desktop-Highlight-3.jpg",
      name: "Minimalist annual review and reset",
      description:
        "The most comprehensive template for new year resolutions, planning and reflection.",
    },
  ];
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-baseline justify-between">
    <h1 class="text-2xl font-semibold">
      🚀 Stay productive with these templates
    </h1>
  </div>

  <div class="grid grid-cols-2 gap-x-4 gap-y-8">
    {#each templates as { imageUrl, name, description }}
      <TemplateThumbnail {imageUrl} {name} {description} />
    {/each}
  </div>

  <a href="/">
    <div
      class="border flex items-center justify-center p-4 text-gray-800 bg-white hover:border-gray-300 rounded mt-4"
    >
      <p>Browse all templates</p>
      <i class="ri-arrow-right-line ml-2" />
    </div>
  </a>
</div>
