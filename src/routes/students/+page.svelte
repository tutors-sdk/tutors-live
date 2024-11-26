<script lang="ts">
  import Students from "$lib/ui/time/Students.svelte";
  import { tabSet, title, subTitle } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";

  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Latest Student Activity";
  tabSet.value = 2;
</script>

<Students />
