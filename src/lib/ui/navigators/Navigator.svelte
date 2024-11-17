<script lang="ts">
  import { tabSet } from "$lib/runes";
  import NavButton from "./NavButton.svelte";
</script>

<slot name="header">
  <div class="flex flex-row items-center justify-center gap-4">
    <NavButton href="/courses" iconType="course" text="Courses" isActive={tabSet.value === 1} />
    <NavButton href="/students" iconType="live" text="Students" isActive={tabSet.value === 2} />
    <NavButton href="/groups" iconType="toc" text="Groups" isActive={tabSet.value === 3} />
    <NavButton href="/catalogue" iconType="archive" text="Catalogue" isActive={tabSet.value === 4} />
  </div>
</slot>
