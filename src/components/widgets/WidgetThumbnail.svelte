<script>
  import Button from "../shared/Button.svelte";

  export let url;
  export let imageUrl;
  export let name;
  export let description;
</script>

<a href={url}>
  <div
    class="flex flex-col bg-white border border-black/10 transition duration-300 ease-in-out rounded-md overflow-hidden p-4 gap-4"
  >
    <div class="flex items-start gap-2">
      <div class="w-12 h-12 rounded-md overflow-hidden">
        <img src={imageUrl} alt="" srcset="" class="min-w-full min-h-full" />
      </div>
      <div class="flex-1">
        <h2 class="font-semibold">{name}</h2>
        <p class="text-sm text-gray-400 text-ellipsis">{description}</p>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <a href="/" class="flex items-center gap-1">
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
      <Button type="outlined">Install</Button>
    </div>
  </div>
</a>
