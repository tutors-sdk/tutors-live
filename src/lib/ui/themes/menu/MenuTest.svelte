<script lang="ts">
  import { Popover } from "@skeletonlabs/skeleton-svelte";
  import { themes } from "../styles/icon-lib.svelte";
  import Icon from "../icons/Icon.svelte";

  let openState = $state(false);

  function popoverClose() {
    openState = false;
  }
</script>

<Popover bind:open={openState} positioning={{ placement: "top" }} triggerBase="btn preset-tonal" contentBase="card bg-surface-50 p-4 space-y-4 max-w-[320px]">
  {#snippet trigger()}
    <Icon type="dark" />
    <span class="hidden text-sm font-bold lg:block">Layout <span class="pl-2 opacity-50">▾</span></span>{/snippet}
  {#snippet content()}
    <nav class="card-body card list-nav w-56 space-y-4 p-4 shadow-lg" data-popup="design">
      <h6>Toggles</h6>

      <hr />
      <h6>Themes</h6>
      <ul class="list">
        {#each themes as theme}
          <li class="option !p-0">
            <button class="btn flex w-full justify-between">
              <span class="flex-none">{theme}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/snippet}
</Popover>
