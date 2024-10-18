<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import LiveCourseCard from "./LiveCourseCard.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each presenceService.coursesOnlineList.value as lo}
    <LiveCourseCard {lo} />
  {/each}
</div>
