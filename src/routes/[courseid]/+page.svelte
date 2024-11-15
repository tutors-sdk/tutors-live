<script lang="ts">
  import "../../app.postcss";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<CoursesGroup />
