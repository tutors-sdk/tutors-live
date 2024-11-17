<script lang="ts">
  import { catalogueCount, studentCount } from "$lib/runes";
  import { getCatalogueCount, getStudentCount } from "$lib/services/catalogue";
  import { onMount } from "svelte";
  import "../app.postcss";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  onMount(async () => {
    catalogueCount.value = await getCatalogueCount();
    studentCount.value = await getStudentCount();
  });
</script>

{@render children()}
