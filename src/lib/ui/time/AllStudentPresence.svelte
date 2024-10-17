<script lang="ts">
  import { allStudentsOnlineList } from "$lib/runes";
  import StudentCard from "./StudentCard.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each allStudentsOnlineList.value as lo}
    <StudentCard {lo} />
  {/each}
</div>
