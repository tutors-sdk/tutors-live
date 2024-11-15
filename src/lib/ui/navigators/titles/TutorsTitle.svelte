<script lang="ts">
  import { title, subTitle } from "$lib/runes";
</script>

<div class="flex items-center">
  <div class="inline-flex">
    <img src="/logo.svg" alt={title.value} class="w-12 bg-none" />
  </div>
  <div class="ml-4 flex-nowrap">
    <h2 class="mr-4 hidden font-bold md:inline-block {subTitle.value ? 'text-lg' : 'text-2xl'}">
      {title.value}
    </h2>
    <div class="hidden md:block">
      <p class="text-sm font-bold">{subTitle.value}</p>
    </div>
  </div>
</div>
