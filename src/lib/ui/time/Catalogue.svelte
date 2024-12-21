<script lang="ts">
  import { tabSet } from "$lib/runes";
  import Card from "../themes/card/Card.svelte";
  import type { CourseVisit } from "$lib/services/presence-types.svelte";

  interface Props {
    courseRecords: CourseVisit[];
  }
  let { courseRecords = [] }: Props = $props();
  tabSet.value = 4;
</script>

<div class="bg-surface-100-800-token mx-2 sm:mx-4 mb-2 w-auto place-items-center overflow-hidden rounded-xl p-4 border-[1px] border-surface-200-700-token">
  <div class="flex flex-wrap justify-center">
    {#each courseRecords as courseRecord}
      <Card
        cardDetails={{
          route: `https://tutors.dev/course/${courseRecord?.id}`,
          title: courseRecord?.title,
          type: "course",
          subtitle1: courseRecord?.credits,
          img: courseRecord?.img,
          icon: courseRecord?.icon
        }}
      />
    {/each}
  </div>
</div>
