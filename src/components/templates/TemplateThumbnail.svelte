<script>
  export let imageUrl;
  export let name;
  export let description;
</script>

<a href="/">
  <div class="flex flex-col overflow-hidden">
    <div class="aspect-video flex items-center justify-center rounded-md overflow-hidden">
      <img src={imageUrl} alt="" srcset="" class="min-w-full min-h-full" />
    </div>
    <div class="pt-4">
      <h1 class="text-gray-800 font-semibold">{name}</h1>
      <p class="h-16 text-sm text-gray-400 mt-1">{description}</p>
    </div>
  </div>
</a>
