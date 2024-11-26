<script lang="ts">
  import { tabSet, title, subTitle } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Students Grouped by Course";
  tabSet.value = 3;
</script>

<CoursesGroup />
