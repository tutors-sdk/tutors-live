<script lang="ts">
  import { catalogueCount, studentCount } from "$lib/runes";
  import { getCatalogueCount, getStudentCount } from "$lib/services/catalogue";
  import { onMount } from "svelte";
  import "../app.postcss";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  onMount(async () => {
    catalogueCount.value = await getCatalogueCount();
    studentCount.value = await getStudentCount();
  });
</script>

{@render children()}
