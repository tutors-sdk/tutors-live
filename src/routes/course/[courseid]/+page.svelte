<script lang="ts">
  import CourseShell from "$lib/ui/app-shells/CourseShell.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
</script>

<CourseShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <CoursesGroup />
  </div>
</CourseShell>
