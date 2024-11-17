<script lang="ts">
  import { AppShell, AppBar, TabGroup, Tab } from "@skeletonlabs/skeleton";
  import LayoutMenu from "$lib/ui/themes/menu/LayoutMenu.svelte";
  import TutorsTitle from "$lib/ui/navigators/titles/TutorsTitle.svelte";
  import Footer from "../navigators/footers/Footer.svelte";
  import Navigator from "$lib/ui/navigators/Navigator.svelte";
  import Stats from "../navigators/titles/Stats.svelte";
</script>

<AppShell class="h-screen">
  <svelte:fragment slot="header">
    <AppBar background="bg-surface-100-800-token" shadow="none" class="h-20 justify-center border-surface-200 dark:border-surface-700">
      <svelte:fragment slot="lead">
        <TutorsTitle />
      </svelte:fragment>
      <slot name="header">
        <div class="flex justify-end items-end">
          <Navigator />
        </div>
      </slot>
      <svelte:fragment slot="trail">
        <span class="divider-vertical h-10 hidden lg:block"></span>
        <div class="">
          <Stats />
        </div>
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
