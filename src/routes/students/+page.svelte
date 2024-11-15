<script lang="ts">
  import Students from "$lib/ui/time/Students.svelte";
  import { tabSet } from "$lib/runes";

  tabSet.value = 2;
</script>

<Students />
