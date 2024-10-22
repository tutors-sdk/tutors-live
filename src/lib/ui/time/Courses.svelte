<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import CourseCard from "./CourseCard.svelte";
</script>

<div class="bg-surface-100-800-token mx-auto mb-2 w-full place-items-center overflow-hidden rounded-xl p-4 border-[1px] border-surface-200-700-token">
  <div class="flex flex-wrap justify-center">
    {#each presenceService.coursesOnline.value as lo}
      <CourseCard {lo} />
    {/each}
  </div>
</div>
