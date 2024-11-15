<script lang="ts">
  import { AppShell, AppBar, TabGroup, Tab } from "@skeletonlabs/skeleton";
  import LayoutMenu from "$lib/ui/themes/menu/LayoutMenu.svelte";
  import TutorsTitle from "$lib/ui/navigators/titles/TutorsTitle.svelte";
  import Footer from "../navigators/footers/Footer.svelte";
  import Metric from "../time/Metric.svelte";
  import { presenceService } from "$lib/services/presence.svelte";
  import { tabSet } from "$lib/runes";
  export let title = "Tutors Open Source Project";
  export let subTitle = "Open Web Learning Components";
</script>

<AppShell class="h-screen">
  <svelte:fragment slot="header">
    <AppBar background="bg-surface-100-800-token" shadow="none" class="h-20 justify-center border-surface-200 dark:border-surface-700">
      <svelte:fragment slot="lead">
        <TutorsTitle {title} subtitle={subTitle} />
      </svelte:fragment>
      <slot name="header">
        <div class="flex justify-end">
          <Metric value={presenceService.coursesOnline.value.length} title="Active Modules" />
          <Metric value={presenceService.studentsOnline.value.length} title="Active Students" />
        </div>
        <TabGroup>
          <Tab bind:group={tabSet.value} name="tab1" value={1}><a href="/courses">Courses</a></Tab>
          <Tab bind:group={tabSet.value} name="tab2" value={2}><a href="/students">Student</a></Tab>
          <Tab bind:group={tabSet.value} name="tab3" value={3}><a href="/groups">Student Groups</a></Tab>
          <Tab bind:group={tabSet.value} name="tab4" value={4}><a href="/catalogue">Catalogue</a></Tab>
        </TabGroup>
      </slot>
      <svelte:fragment slot="trail">
        <span class="divider-vertical h-10 hidden lg:block"></span>
        <LayoutMenu />
        <span class="divider-vertical h-10 hidden lg:block"></span>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
