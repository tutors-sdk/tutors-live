<script lang="ts">
  import { catalogueCount, studentCount } from "$lib/runes";
  import { getCatalogueCount, getStudentCount } from "$lib/services/catalogue";
  import { onMount } from "svelte";
  import "../app.postcss";
  import { setTheme } from "$lib/ui/themes/styles/icon-lib.svelte";
  import TutorsShell from "$lib/ui/TutorsShell.svelte";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();

  onMount(async () => {
    catalogueCount.value = await getCatalogueCount();
    studentCount.value = await getStudentCount();
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      setTheme("tutors");
    }
  });
</script>

<TutorsShell>
  <div class="flex flex-wrap justify-center p-4 m-4">
    {@render children()}
  </div>
</TutorsShell>
