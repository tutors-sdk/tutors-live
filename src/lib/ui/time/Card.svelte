<script lang="ts">
  // import { Avatar } from "@skeletonlabs/skeleton-svelte";
  import Iconify from "@iconify/svelte";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";
  import { avatarWidth, cardWidths, headingText, iconHeight, imageHeight, textSize } from "$lib/runes";
  import type { CardDetails } from "$lib/services/presence-types.svelte";

  export let cardDetails: CardDetails;
</script>

<a href={cardDetails.route} target="_blank" rel="noreferrer">
  <div
    class="card bg-surface-50 border-[1px] border-y-8 border-primary-500 card-hover divide-surface-200-800 block divide-y overflow-hidden m-2 flex flex-col {cardWidths.value} bg-gray-100 dark:bg-gray-800"
  >
    <header class="h-[200px] flex items-center justify-center">
      {#if cardDetails.icon}
        <Iconify icon={cardDetails.icon.type} color={cardDetails.icon.color} height={iconHeight.value} />
      {:else}
        <img src={cardDetails.img} class="w-12 w-full hue-rotate-90 object-scale-down h-full" alt="banner" />
      {/if}
    </header>

    <article class="space-y-4 p-4 flex-grow text-center">
      <div>
        <h1 class={textSize.value}>{cardDetails.title}</h1>
      </div>
    </article>

    <footer class="p-4 text-center">
      <small class="opacity-60">{cardDetails.subtitle1}</small>
    </footer>
  </div>
</a>

<!-- <a href={cardDetails.route} target="_blank" rel="noreferrer">
  <div class="card !bg-surface-50 dark:!bg-surface-700 border-y-8 border-primary-500 m-2 {cardWidths.value} transition-all hover:scale-105">
    <div class="flex">
      <header class="card-header flex flex-row items-center justify-between p-3">
        {#if cardDetails.student}
          <Avatar src={cardDetails.student.avatar} alt={cardDetails.student.fullName} class="mr-2" width={avatarWidth.value} />
        {:else}
          <div class="line-clamp-2 flex-auto !text-lg font-semibold !text-black dark:!text-white {headingText.value}">
            {cardDetails.title}
          </div>
        {/if}
        <h6 class={textSize.value}>{cardDetails.student?.fullName} &nbsp &nbsp</h6>
        <div class="flex-none"><Icon type={cardDetails.type} height="30" /></div>
      </header>
    </div>
    <div class="card-body">
      <figure class="flex justify-center object-scale-down p-1">
        {#if cardDetails.icon}
          <Iconify icon={cardDetails.icon.type} color={cardDetails.icon.color} height={iconHeight.value} />
        {:else}
          <Avatar src={cardDetails.img} alt={cardDetails.title} width={imageHeight.value} rounded=     "rounded-xl" background="none" />
        {/if}
      </figure>
    </div>
    <footer class="card-footer">
      <div class="-m-4 mt-2 text-center">
        <div class="inline-flex w-full">
          <div class="{textSize.value} flex-auto font-semibold line-clamp-1">
            {cardDetails.subtitle1}
          </div>
        </div>
        <div class="line-clamp-1 {textSize.value}">
          {cardDetails.subtitle2}
        </div>
      </div>
    </footer>
  </div>
</a> -->
