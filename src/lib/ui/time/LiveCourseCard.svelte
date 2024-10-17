<script lang="ts">
  import Iconify from "@iconify/svelte";
  import { Avatar } from "@skeletonlabs/skeleton";
  import { cardTransition } from "$lib/ui/animations";
  import { type LoEvent } from "$lib/services/types/presence";

  export let lo: LoEvent;
  let target = "_blank";

  let headingText = "!text-md font-medium";
  let cardWidths = "w-60 h-[21rem]";
  let iconHeight = "180";
  let imageHeight = "h-48";
  let textSize = "text-base";
</script>

<a href={lo.loRoute} {target}>
  <div transition:cardTransition class="card !bg-surface-50 dark:!bg-surface-700 border-accent-500 m-2 border-y-8 {cardWidths} transition-all hover:scale-105">
    <header class="card-header flex flex-row items-center">
      <div class="inline-flex w-full">
        <div class="line-clamp-2 flex-auto {headingText} {textSize}">{lo.courseTitle}</div>
      </div>
    </header>
    <div class="card-body">
      <figure class="flex justify-center object-scale-down p-1">
        {#if lo.icon}
          <Iconify icon={lo.icon.type} color={lo.icon.color} height={iconHeight} />
        {:else}
          <Avatar src={lo.img} alt={lo.title} width={imageHeight} rounded="rounded-xl" background="none" />
        {/if}
      </figure>
    </div>
    <footer class="card-footer">
      <div class="-m-4 mt-2 text-center">
        <div class="line-clamp-1 {textSize}">
          {lo.title}
        </div>
      </div>
    </footer>
  </div>
</a>
