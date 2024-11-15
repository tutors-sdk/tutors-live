<script lang="ts">
  import { subTitle, title } from "$lib/runes";
  import CourseShell from "$lib/ui/app-shells/CourseShell.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
  title.value = "Tutors Live";
  subTitle.value = "Latest Student Activity";
</script>

<CourseShell title="Tutors Live Stream">
  <div class="flex flex-wrap justify-center p-4 m-4">
    <CoursesGroup />
  </div>
</CourseShell>
