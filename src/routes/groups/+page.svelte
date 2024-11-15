<script lang="ts">
  import { tabSet } from "$lib/runes";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";

  tabSet.value = 3;
</script>

<CoursesGroup />
