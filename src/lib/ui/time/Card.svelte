<script lang="ts">
  import Iconify from "@iconify/svelte";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";
  import { avatarWidth, cardWidths, headingText, iconHeight, imageWidth, textSize } from "$lib/runes";
  import type { CardDetails } from "$lib/services/presence-types.svelte";
  import { getTypeColour } from "../themes/styles/icon-lib.svelte";

  export let cardDetails: CardDetails;
</script>

<a href={cardDetails.route} target="_blank" rel="noreferrer">
  <div
    class="card preset-filled-{getTypeColour(cardDetails.type)}-50-950 border-[1px] border-y-8 border-{getTypeColour(
      cardDetails.type
    )}-500 m-2 {cardWidths.value} transition-all hover:scale-105 h-[320px] flex flex-col"
  >
    <div class="flex">
      <header class="card-header flex flex-row items-center justify-between p-3">
        {#if cardDetails.student}
          <img src={cardDetails.student.avatar} alt={cardDetails.student.fullName} class="rounded-3xl {avatarWidth.value}" />
        {:else}
          <div class="line-clamp-2 flex-auto !text-lg font-semibold !text-black dark:!text-white {headingText.value}">
            {cardDetails.title}
          </div>
        {/if}
        <h6 class={textSize.value}>{cardDetails.student?.fullName} &nbsp &nbsp</h6>
        <div class="flex-none"><Icon type={cardDetails.type} height="30" /></div>
      </header>
    </div>
    <div class="card-body flex-1">
      <figure class="flex justify-center object-scale-down p-1">
        {#if cardDetails.icon}
          <Iconify icon={cardDetails.icon.type} color={cardDetails.icon.color} height={iconHeight.value} />
        {:else}
          <img src={cardDetails.img} alt={cardDetails.title} class={imageWidth.value} />
        {/if}
      </figure>
    </div>
    <footer class="card-footer">
      <div class="text-center pb-2">
        <div class="inline-flex w-full items-end justify-center">
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
</a>
