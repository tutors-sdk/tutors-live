<script lang="ts">
  import Students from "$lib/ui/time/Students.svelte";
  import { tabSet } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";

  tabSet.value = 2;
  presenceService.startGlobalPresenceService();
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <Students />
  </div>
</TutorsShell>
