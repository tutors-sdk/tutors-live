<script lang="ts">
  import { currentTheme, layout } from "$lib/runes";
  import { Popover } from "@skeletonlabs/skeleton-svelte";
  import { setIconLibForTheme, themes } from "../styles/icon-lib.svelte";
  import Icon from "../icons/Icon.svelte";
  let openState = $state(false);

  function popoverClose() {
    openState = false;
  }

  function setTheme(theme: string): void {
    throw new Error("Function not implemented.");
  }
</script>

<Popover
  bind:open={openState}
  positioning={{ placement: "top" }}
  triggerBase="btn preset-tonal"
  contentBase="card bg-surface-50 p-4 space-y-4 max-w-[320px]"
  arrow
  arrowBackground="!bg-surface-200 dark:!bg-surface-800"
>
  {#snippet trigger()}
    <button class="btn btn-sm">
      <Icon type="dark" />
      <span class="hidden text-sm font-bold lg:block">Layout <span class="pl-2 opacity-50">▾</span></span>
    </button>{/snippet}
  {#snippet content()}
    <nav class="card-body card list-nav w-56 space-y-4 p-4 shadow-lg" data-popup="design">
      <h6>Toggles</h6>

      <hr />
      <h6>Themes</h6>
      <ul class="list">
        {#each themes as theme}
          <li class="option !p-0">
            <button class="btn flex w-full justify-between" class:!variant-soft-primary={theme === currentTheme.value} onclick={setTheme(theme)}>
              <span class="flex-none">{theme}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/snippet}
</Popover>
