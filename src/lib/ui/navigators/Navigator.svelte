<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import Metric from "../time/Metric.svelte";
  import { presenceService } from "$lib/services/presence.svelte";
  import { tabSet } from "$lib/runes";
</script>

<slot name="header">
  <div class="flex justify-end">
    <Metric value={presenceService.coursesOnline.value.length} title="Active Modules" />
    <Metric value={presenceService.studentsOnline.value.length} title="Active Students" />
  </div>
  <TabGroup>
    <Tab bind:group={tabSet.value} name="tab1" value={1}><a href="/courses">Courses</a></Tab>
    <Tab bind:group={tabSet.value} name="tab2" value={2}><a href="/students">Student</a></Tab>
    <Tab bind:group={tabSet.value} name="tab3" value={3}><a href="/groups">Student Groups</a></Tab>
    <Tab bind:group={tabSet.value} name="tab4" value={4}><a data-sveltekit-preload-data="tap" href="/catalogue">Catalogue</a></Tab>
  </TabGroup>
</slot>
