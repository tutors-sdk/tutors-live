<script lang="ts">
  import { avatarWidth, cardWidths, headingText, iconHeight, imageHeight, layout, textSize } from "$lib/runes";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";

  function toggleLayout() {
    if (layout.value === "compacted") {
      layout.value = "expanded";
      textSize.value = "text-base";
      headingText.value = "!text-lg font-semibold";
      cardWidths.value = "w-60 h-[21rem]";
      iconHeight.value = "180";
      imageHeight.value = "h-32";
      avatarWidth.value = "w-12";
    } else {
      layout.value = "compacted";
      textSize.value = "text-xs";
      headingText.value = "!text-md font-medium";
      cardWidths.value = "w-36 h-[13rem]";
      iconHeight.value = "90";
      imageHeight.value = "h-16";
      avatarWidth.value = "w-10";
    }
  }
</script>

<button class="btn w-full flex justify-between" onclick={toggleLayout}>
  <span class="flex-none">{layout.value}</span>
  <Icon type={layout.value} />
</button>
