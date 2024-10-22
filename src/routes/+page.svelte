<script lang="ts">
  import "../app.postcss";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import { presenceService } from "$lib/services/presence.svelte";
  import Metric from "$lib/ui/time/Metric.svelte";
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import Students from "$lib/ui/time/Students.svelte";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";
  import Courses from "$lib/ui/time/Courses.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  let tabSet: number = 1;

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<TutorsShell title="Tutors Live Stream">
  <div slot="header" class="hidden md:inline-block w-full">
    <div class="flex justify-end">
      <Metric value={presenceService.coursesOnline.value.length} title="Active Modules" />
      <Metric value={presenceService.studentsOnline.value.length} title="Active Students" />
    </div>
    <TabGroup>
      <Tab bind:group={tabSet} name="tab1" value={1}>Modules</Tab>
      <Tab bind:group={tabSet} name="tab2" value={2}>Students</Tab>
      <Tab bind:group={tabSet} name="tab3" value={3}>Student Groups</Tab>
    </TabGroup>
  </div>

  <TabGroup>
    <svelte:fragment slot="panel">
      <div class="flex flex-wrap justify-center p-4 m-4">
        {#if tabSet === 1}
          <Courses />
        {:else if tabSet === 2}
          <Students />
        {:else if tabSet === 3}
          <CoursesGroup />
        {/if}
      </div>
    </svelte:fragment>
  </TabGroup>
</TutorsShell>
