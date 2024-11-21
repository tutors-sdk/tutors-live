<script lang="ts">
  import Catalogue from "$lib/ui/time/Catalogue.svelte";
  import { title, subTitle, tabSet } from "$lib/runes";
  import TutorsShell from "$lib/ui/app-shells/TutorsShell.svelte";

  tabSet.value = 4;
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
  title.value = "Tutors Catalogue";
  subTitle.value = "Popular Tutors Courses";
</script>

<TutorsShell>
  <div class="flex flex-wrap justify-center p-2 m-2">
    <Catalogue courseRecords={data.courseRecords} />
  </div>
</TutorsShell>
