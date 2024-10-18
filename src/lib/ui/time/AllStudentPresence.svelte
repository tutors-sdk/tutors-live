<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import StudentCard from "./StudentCard.svelte";
</script>

<div class="flex flex-wrap justify-center">
  {#each presenceService.studentsOnlineList.value as lo}
    <StudentCard {lo} />
  {/each}
</div>
