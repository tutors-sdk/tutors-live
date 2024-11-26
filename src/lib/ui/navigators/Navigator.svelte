<script lang="ts">
  import { tabSet } from "$lib/runes";
  import NavButton from "./NavButton.svelte";
</script>

<slot name="header">
  <div class="flex flex-row items-center justify-center gap-4">
    <NavButton href="/courses" iconType="course" text="Courses" isActive={tabSet.value === 1} tip="Courses Currently Active" />
    <NavButton href="/students" iconType="live" text="Students" isActive={tabSet.value === 2} tip="Currently Live Students" />
    <NavButton href="/groups" iconType="toc" text="Groups" isActive={tabSet.value === 3} tip="Live Students by Group" />
    <NavButton href="/catalogue" iconType="archive" text="Catalogue" isActive={tabSet.value === 4} tip="Tutors Catalogue" />
  </div>
</slot>
