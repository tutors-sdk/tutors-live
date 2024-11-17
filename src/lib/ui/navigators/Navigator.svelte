<script lang="ts">
  import { tabSet } from "$lib/runes";
  import Icon from "../themes/icons/Icon.svelte";
</script>

<slot name="header">
  <div class="flex flex-row items-center justify-center gap-8">
    <a
      href="/courses"
      class="flex flex-col items-center hover:scale-110 transition-transform p-3 rounded-xl {tabSet.value === 1 ? 'text-primary scale-110 bg-gray-200 dark:bg-gray-600' : ''}"
    >
      <Icon type={"course"} height="30" />
      <span class="text-sm text-bold">Courses</span>
    </a>

    <a
      href="/students"
      class="flex flex-col items-center hover:scale-110 transition-transform p-3 rounded-xl {tabSet.value === 2 ? 'text-primary scale-110 bg-gray-200 dark:bg-gray-600' : ''}"
    >
      <Icon type={"live"} height="30" />
      <span class="text-sm text-bold">Students</span>
    </a>

    <a
      href="/groups"
      class="flex flex-col items-center hover:scale-110 transition-transform p-3 rounded-xl {tabSet.value === 3 ? 'text-primary scale-110 bg-gray-200 dark:bg-gray-600' : ''}"
    >
      <Icon type={"toc"} height="30" />
      <span class="text-sm text-bold">Groups</span>
    </a>

    <a
      href="/catalogue"
      class="flex flex-col items-center hover:scale-110 transition-transform p-3 rounded-xl {tabSet.value === 4 ? 'text-primary scale-110 bg-gray-200 dark:bg-gray-600' : ''}"
    >
      <Icon type={"archive"} height="30" />
      <span class="text-sm text-bold">Catalogue</span>
    </a>
  </div>
</slot>
