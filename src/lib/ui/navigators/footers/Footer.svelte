<script lang="ts">
  import SetuIcon from "$lib/ui/support/SetuIcon.svelte";
  import TutorsIcon from "$lib/ui/support/TutorsIcon.svelte";
  import TutorsMessage from "./TutorsMessage.svelte";
  import TutorsVersion from "./TutorsVersion.svelte";
</script>

<div class="bg-surface-100 dark:bg-surface-950 border-t-[1px] border-surface-200-700 bottom-0 mt-2">
  <div class="mx-auto w-11/12 py-2">
    <div class="flex grid-flow-col items-center">
      <div class="inline-flex flex-1">
        <TutorsIcon />
        <div>
          <TutorsVersion />
        </div>
        <div class="pl-8">
          <TutorsMessage />
        </div>
      </div>
      <SetuIcon />
    </div>
  </div>
</div>
