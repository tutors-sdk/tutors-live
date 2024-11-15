<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import Card from "./Card.svelte";
</script>

<div class="bg-surface-100-800-token mx-auto mb-2 w-full place-items-center overflow-hidden rounded-xl p-4 border-[1px] border-surface-200-700-token">
  <div class="flex flex-wrap justify-center">
    {#each presenceService.studentsOnline.value as lo}
      <Card
        cardDetails={{
          route: lo?.loRoute,
          student: lo?.user,
          type: lo?.type,
          subtitle1: lo?.courseTitle,
          title: lo?.courseTitle,
          subtitle2: lo?.title + " (" + lo?.type + ")",
          img: lo?.img,
          icon: lo?.icon
        }}
      />
    {/each}
  </div>
</div>
