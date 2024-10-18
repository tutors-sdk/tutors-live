<script lang="ts">
  import { studentsOnlineList } from "$lib/runes";
  import StudentCard from "./StudentCard.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each studentsOnlineList.value as lo}
    <StudentCard {lo} />
  {/each}
</div>
