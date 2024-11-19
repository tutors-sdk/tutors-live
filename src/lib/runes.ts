import { rune } from "./services/utils/runes.svelte";

export const layout = rune("expanded");

export const currentTheme = rune("tutors");

export const headingText = rune("!text-lg font-semibold");
export const cardWidths = rune("w-60 h-[21rem]");
export const iconHeight = rune("180");
export const imageWidth = rune("w-36");
export const textSize = rune("text-base");
export const avatarWidth = rune("w-12");

export const title = rune("Tutors Open Source Project");
export const subTitle = rune("Open Web Learning Components");
export const catalogueCount = rune(0);
export const studentCount = rune(0);

export let tabSet = rune(1);
