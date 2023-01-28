<script>
  import Link from "../shared/Link.svelte";
  import TemplateThumbnail from "./TemplateThumbnail.svelte";

  const templates = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      name: "Workflows from leading startups",
      description: "A collection of the best templates from startups",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1674751128002-288756b5c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "New year resolution hub",
      description:
        "The most comprehensive template for new year resolutions, planning and reflection.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1674751128002-288756b5c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "New year resolution hub",
      description:
        "The most comprehensive template for new year resolutions, planning and reflection.",
    },
  ];
</script>

<div>
  <div class="flex items-baseline justify-between">
    <h1 class="text-2xl font-semibold">
      🚀 Stay productive with these templates
    </h1>
    <Link href="/">Browse all</Link>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-4">
    {#each templates as { imageUrl, name, description }}
      <TemplateThumbnail {imageUrl} {name} {description} />
    {/each}
  </div>
</div>
