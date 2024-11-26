<script lang="ts">
  import { subTitle, title } from "$lib/runes";
  import { presenceService } from "$lib/services/presence.svelte";
  import CoursesGroup from "$lib/ui/time/CoursesGroup.svelte";
  interface Props {
    data: any;
  }
  let { data }: Props = $props();
  title.value = "Tutors Live";
  subTitle.value = "Latest Student Activity";
  presenceService.listeningForCourse.value = data.courseid;
</script>

<CoursesGroup />
