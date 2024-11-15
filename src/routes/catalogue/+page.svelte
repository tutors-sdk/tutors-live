<script lang="ts">
  import Catalogue from "$lib/ui/time/Catalogue.svelte";
  import { tabSet } from "$lib/runes";

  tabSet.value = 4;
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
</script>

<Catalogue courseRecords={data.courseRecords} />
