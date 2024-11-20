<script lang="ts">
  import { tabSet } from "$lib/runes";
  import Card from "./Card.svelte";
  import type { CourseVisit } from "$lib/services/presence-types.svelte";

  interface Props {
    courseRecords: CourseVisit[];
  }
  let { courseRecords = [] }: Props = $props();
  tabSet.value = 4;
</script>

<div class="bg-surface-100 dark:bg-surface-800 mx-auto mb-2 w-full place-items-center overflow-hidden rounded-xl p-4 border-[1px]">
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
