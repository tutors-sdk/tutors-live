<script lang="ts">
  import "../app.postcss";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

{@render children()}
