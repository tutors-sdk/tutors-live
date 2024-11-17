<script lang="ts">
  import Students from "$lib/ui/time/Students.svelte";
  import { tabSet, title, subTitle } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";

  presenceService.startGlobalPresenceService();
  title.value = "Tutors Live";
  subTitle.value = "Latest Student Activity";
  tabSet.value = 2;
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <Students />
  </div>
</TutorsShell>
