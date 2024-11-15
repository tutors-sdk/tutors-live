<script lang="ts">
  import { tabSet } from "$lib/runes";
  import Card from "./Card.svelte";
  import type { CourseRecord } from "$lib/services/presence-types.svelte";

  interface Props {
    courseRecords: CourseRecord[];
  }
  let { courseRecords = [] }: Props = $props();
  tabSet.value = 4;
</script>

<div class="bg-surface-100-800-token mx-auto mb-2 w-full place-items-center overflow-hidden rounded-xl p-4 border-[1px] border-surface-200-700-token">
  <div class="flex flex-wrap justify-center">
    {#each courseRecords as courseRecord}
      <Card
        cardDetails={{
          route: `https://tutors.dev/course/${courseRecord?.id}`,
          title: courseRecord?.title,
          type: "web",
          subtitle1: courseRecord?.credits,
          img: courseRecord?.image,
          icon: courseRecord?.icon
        }}
      />
    {/each}
  </div>
</div>
