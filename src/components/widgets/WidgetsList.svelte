<script>
  import WidgetThumbnail from "./WidgetThumbnail.svelte";
  import Link from "../shared/Link.svelte";
  const widgets = [
    {
      url: "/widget",
      imageUrl:
        "https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2Frfi802gj8ifgy18mzdaflp9iun6l&w=64&q=75",
      name: "OpenAI GPT3",
      description: "Interact with OpenAI GPT3 AI",
    },
    {
      url: "",
      imageUrl:
        "https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2Fysykju5m9ry24nucwu6p2b0x518m&w=64&q=75",
      name: "Google Translate",
      description: "Simple translation using Google Translate",
    },
    {
      url: "",
      imageUrl:
        "https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2Faj0k7x8neqxsuij9lfnpuz8zkahe&w=64&q=75",
      name: "Spotify",
      description:
        "Search and Play Spotify music from Raycast, and control your library with convenient commands.",
    },
  ];
</script>

<div>
  <div class="flex items-baseline justify-between">
    <h1 class="text-2xl font-semibold">
      ⚡️ Supercharge your Notion pages with widgets
    </h1>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-4">
    {#each widgets as widget}
      <WidgetThumbnail
        url={widget.url}
        imageUrl={widget.imageUrl}
        name={widget.name}
        description={widget.description}
      />
    {/each}
  </div>
  <a href="/">
    <div
      class="border flex items-center justify-center p-4 text-gray-400 hover:border-gray-400 hover:text-gray-600 rounded mt-4"
    >
      <p>Browse all widgets</p>
      <i class="ri-arrow-right-line ml-2" />
    </div>
  </a>
</div>
