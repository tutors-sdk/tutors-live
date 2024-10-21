<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import CourseGroup from "./CourseGroup.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each presenceService.studentsByCourseList.value as los}
    <CourseGroup {los} />
  {/each}
</div>
