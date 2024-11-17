<script lang="ts">
  import { tabSet, title, subTitle } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Students Grouped by Course";
  tabSet.value = 3;
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <CoursesGroup />
  </div>
</TutorsShell>
