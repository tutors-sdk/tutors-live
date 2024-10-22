<script lang="ts">
  import "../../app.postcss";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import { presenceService } from "$lib/services/presence.svelte";
  import Metric from "$lib/ui/time/Metric.svelte";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<TutorsShell title="Tutors Live Stream">
  <div slot="header" class="hidden md:inline-block w-full">
    <div class="flex justify-end">
      <Metric value={presenceService.studentsOnlineByCourse.value[0]?.length} title="Active Students" />
    </div>
  </div>

  <div class="flex flex-wrap justify-center p-4 m-4">
    <CoursesGroup />
  </div>
</TutorsShell>
