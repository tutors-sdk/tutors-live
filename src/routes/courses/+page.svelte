<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import Courses from "$lib/ui/time/Courses.svelte";
  import { title, subTitle, tabSet } from "$lib/runes";

  tabSet.value = 1;
  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Latest Tutors Course Activty";
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <Courses />
  </div>
</TutorsShell>
