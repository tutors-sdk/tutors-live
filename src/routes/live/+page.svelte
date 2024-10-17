<script lang="ts">
  import "../../app.postcss";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import { presenceService } from "$lib/services/presence";
  import AllCoursePresence from "$lib/ui/time/AllCoursePresence.svelte";
  import { allStudentsOnline, coursesOnline } from "$lib/runes";
  import Metric from "$lib/ui/time/Metric.svelte";
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import AllStudentPresence from "$lib/ui/time/AllStudentPresence.svelte";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";

  export let data: any;

  let listByCourse = false;
  let listModeStr = "List By Student";
  function switchMode() {
    listByCourse = !listByCourse;
    if (listByCourse) {
      listModeStr = "List By Course";
    } else {
      listModeStr = "List By Student";
    }
  }

  presenceService.startGlobalPresenceService();

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<TutorsShell title="Tutors Live Stream">
  <div slot="header" class="hidden md:inline-block w-full">
    <div class="flex justify-end">
      <SlideToggle on:click={switchMode} name="slider-label" background="bg-surface-300 dark:bg-surface-700">{listModeStr}</SlideToggle>
      <Metric value={coursesOnline.value} title="Active Modules" />
      <Metric value={allStudentsOnline.value} title="Active Students" />
    </div>
  </div>
  {#if listByCourse}
    <AllCoursePresence />
  {:else}
    <AllStudentPresence />
  {/if}
</TutorsShell>
