<script lang="ts">
  import { presenceService } from "$lib/services/presence.svelte";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";
  import "../app.postcss";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  presenceService.startGlobalPresenceService();
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    {@render children()}
  </div>
</TutorsShell>
