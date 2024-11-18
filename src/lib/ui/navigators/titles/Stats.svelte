<script>
  import { catalogueCount, studentCount } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
</script>

<div class="grid grid-cols-2">
  <div class="bg-gray-100 dark:bg-gray-800 p-1 text-xs">Courses: {presenceService.coursesOnline.value.length}</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-1 text-xs">Students: {presenceService.studentsOnline.value.length}</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-1 text-xs">Total: {catalogueCount.value}</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-1 text-xs">Total: {studentCount.value}</div>
</div>
