<script lang="ts">
  import Catalogue from "$lib/ui/time/Catalogue.svelte";
  import { tabSet } from "$lib/runes";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";

  tabSet.value = 4;
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
</script>

<TutorsShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <Catalogue courseRecords={data.courseRecords} />
  </div>
</TutorsShell>
