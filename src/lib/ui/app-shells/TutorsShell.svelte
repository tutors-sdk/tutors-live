<script lang="ts">
  import TutorsTitle from "$lib/ui/navigators/titles/TutorsTitle.svelte";
  import Footer from "../navigators/footers/Footer.svelte";
  import Navigator from "$lib/ui/navigators/Navigator.svelte";
  import Stats from "../navigators/titles/Stats.svelte";
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import LayoutMenu from "$lib/ui/themes/menu/LayoutMenu.svelte";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0 z-10 backdrop-blur-sm p-4">
    <AppBar background="bg-surface-100-800" shadow="none" classes="h-16 justify-center border-surface-200 dark:border-surface-700">
      {#snippet lead()}
        <TutorsTitle />
      {/snippet}
      {#snippet trail()}
        <div class="flex justify-end items-end">
          <Navigator />
        </div>
        <span class="vr border-l-2"></span>
        <div class="">
          <Stats />
        </div>
        <span class="vr border-l-2"></span>
        <LayoutMenu />
        <span class="vr border-l-2"></span>
      {/snippet}
    </AppBar>
  </header>
  <main class="p-2 space-y-4 overflow-y-auto">
    {@render children()}
  </main>
  <footer class="p-4">
    <Footer />
  </footer>
</div>
