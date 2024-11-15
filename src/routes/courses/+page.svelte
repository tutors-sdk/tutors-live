<script lang="ts">
  import { tabSet } from "$lib/runes";
  import Courses from "$lib/ui/time/Courses.svelte";

  tabSet.value = 1;
</script>

<Courses />
