<script lang="ts">
  import { headingText, textSize } from "$lib/runes";
  import type { LoRecord } from "$lib/services/presence-types.svelte";
  import StudentCard from "./StudentCard.svelte";

  export let los: LoRecord[];
</script>

<div class="bg-surface-100-800-token mx-auto mb-2 w-full place-items-center overflow-hidden rounded-xl p-4 border-[1px] border-surface-200-700-token">
  <div class="flex w-full justify-between pb-2">
    <h2 class="p-2 {headingText.value}">
      {los[0].courseTitle}
    </h2>
  </div>
  <div class="flex flex-wrap justify-center">
    {#each los as lo}
      <StudentCard {lo}></StudentCard>
    {/each}
  </div>
</div>
