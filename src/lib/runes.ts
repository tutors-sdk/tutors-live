import { rune } from "./services/utils/runes.svelte";
import type { LoEvent } from "./services/presence-types";

export const layout = rune("expanded");

export const currentTheme = rune("tutors");

export const coursesOnlineList = rune<LoEvent[]>([]);
export const studentsOnlineList = rune<LoEvent[]>([]);

export const headingText = rune("!text-lg font-semibold");
export const cardWidths = rune("w-60 h-[21rem]");
export const iconHeight = rune("180");
export const imageHeight = rune("h-48");
export const textSize = rune("text-base");
export const avatarWidth = rune("w-12");
