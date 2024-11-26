<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import Courses from "$lib/ui/time/Courses.svelte";
  import { title, subTitle, tabSet } from "$lib/runes";

  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Latest Tutors Course Activty";
  tabSet.value = 1;
</script>

<Courses />
