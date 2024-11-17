<script lang="ts">
  import Icon from "../themes/icons/Icon.svelte";

  export let iconType: string;
  export let text: string;
  export let href: string;
  export let isActive: boolean = false;
</script>

<a {href} class="flex flex-col items-center hover:scale-110 transition-transform p-1 rounded-xl {isActive ? 'text-primary scale-110 bg-gray-200 dark:bg-gray-600' : ''}">
  <Icon type={iconType} height="30" />
  <span class="text-sm text-bold">{text}</span>
</a>
