<script>
  export let url;
  export let imageUrl;
  export let name;
  export let description;
</script>

<a href={url}>
  <div
    class="flex flex-col bg-white border border-black/10 transition duration-300 ease-in-out rounded-md overflow-hidden p-4"
  >
    <div class="flex items-center gap-3 mb-4">
      <div class="w-8 h-8 rounded-md overflow-hidden">
        <img src={imageUrl} alt="" srcset="" class="min-w-full min-h-full" />
      </div>
      <h2 class="flex-1 font-semibold">{name}</h2>
      <a
        href="/"
        class="px-5 py-3 text-sm font-medium hover:bg-black/5 rounded-md transition duration-300 ease-in-out"
        >Install</a
      >
    </div>

    <p class="h-16 text-sm text-gray-400">{description}</p>

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
    </div>
  </div>
</a>
