<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";
  import Iconify from "@iconify/svelte";
  import { cardTransition } from "$lib/ui/animations";
  import type { LoRecord } from "$lib/services/presence-types.svelte";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";
  import { avatarWidth, cardWidths, headingText, iconHeight, imageHeight, textSize } from "$lib/runes";

  export let lo: LoRecord;
</script>

<a href={lo.loRoute} target="_blank" rel="noreferrer">
  <div transition:cardTransition class="card !bg-surface-50 dark:!bg-surface-700 border-y-8 border-primary-500 m-2 {cardWidths.value} transition-all hover:scale-105">
    <div class="flex">
      <header class="card-header flex flex-row items-center justify-between p-3">
        <Avatar src={lo.user?.avatar} alt={lo.user?.fullName} class="mr-2" width={avatarWidth.value} />
        <h6 class={textSize.value}>{lo.user?.fullName} &nbsp &nbsp</h6>
        <div class="flex-none"><Icon type={lo.type} height="30" /></div>
      </header>
    </div>
    <div class="card-body">
      <figure class="flex justify-center object-scale-down p-1">
        {#if lo.icon}
          <Iconify icon={lo.icon.type} color={lo.icon.color} height={iconHeight.value} />
        {:else}
          <Avatar src={lo.img} alt={lo.title} width={imageHeight.value} rounded="rounded-xl" background="none" />
        {/if}
      </figure>
    </div>
    <footer class="card-footer">
      <div class="-m-4 mt-2 text-center">
        <div class="inline-flex w-full">
          <div class="{textSize.value} line-clamp-2 flex-auto font-semibold">{lo.courseTitle}</div>
        </div>
        <div class="line-clamp-1 {textSize.value}">
          {lo.title}
        </div>
      </div>
    </footer>
  </div>
</a>
