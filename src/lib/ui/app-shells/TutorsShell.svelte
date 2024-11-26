<script lang="ts">
  import TutorsTitle from "$lib/ui/navigators/titles/TutorsTitle.svelte";
  import Footer from "../navigators/footers/Footer.svelte";
  import Navigator from "$lib/ui/navigators/Navigator.svelte";
  import Stats from "../navigators/titles/Stats.svelte";
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import LayoutMenu from "../themes/LayoutMenu.svelte";
  import { presenceService } from "$lib/services/presence.svelte";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0 backdrop-blur-sm p-4 bg-surface-100 dark:bg-surface-950">
    <AppBar shadow="none" classes="bg-surface-100 dark:bg-surface-950 h-14 justify-center border-surface-200 dark:border-surface-700">
      {#snippet lead()}
        <TutorsTitle />
      {/snippet}
      {#snippet trail()}
        {#if presenceService.listeningForCourse.value === ""}
          <div class="flex justify-end items-end">
            <Navigator />
          </div>
          <span class="vr border-l-2"></span>
          <div class="">
            <Stats />
          </div>
        {/if}
        <span class="vr border-l-2"></span>
        <LayoutMenu />
        <span class="vr border-l-2"></span>
      {/snippet}
    </AppBar>
  </header>
  <main class="overflow-y-auto">
    {@render children()}
  </main>
  <footer>
    <Footer />
  </footer>
</div>
