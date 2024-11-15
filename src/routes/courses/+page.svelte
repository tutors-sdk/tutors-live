<script lang="ts">
  import { tabSet } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import Courses from "$lib/ui/time/Courses.svelte";

  tabSet.value = 1;
  presenceService.startGlobalPresenceService();
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <Courses />
  </div>
</TutorsShell>
