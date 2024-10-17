<script lang="ts">
  import { coursesOnlineList } from "$lib/runes";
  import LiveCourseCard from "./LiveCourseCard.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each coursesOnlineList.value as lo}
    <LiveCourseCard {lo} />
  {/each}
</div>
