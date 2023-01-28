<script>
  import Button from "../shared/Button.svelte";

  export let imageUrl;
  export let name;
  export let description;
</script>

<a href="/">
  <div class="flex flex-col">
    <div
      class="aspect-video flex items-center justify-center rounded-md overflow-hidden border"
    >
      <img src={imageUrl} alt="" srcset="" class="min-w-full min-h-full" />
    </div>
    <div class="py-4">
      <h1 class="text-gray-800 font-semibold">{name}</h1>
      <p class="text-sm text-gray-400 mt-1 truncate">{description}</p>
    </div>
    <div class="flex items-center gap-4">
      <a href="/" class="flex items-center gap-2">
        <div class="w-5 h-5 rounded-full bg-black/10" />
        <span class="text-[13px] text-black/40 hover:text-black/60 font-medium">
          Hai Duc Nguyen
        </span>
      </a>

      <span class="flex items-center gap-1">
        <i class="ri-download-cloud-line text-black/40" />
        <p class="text-xs font-medium text-black/40">10,536</p>
      </span>
      <div class="flex-1" />
      <Button type="outlined">Duplicate</Button>
    </div>
  </div>
</a>
