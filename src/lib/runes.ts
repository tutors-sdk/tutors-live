import { rune } from "./services/utils/runes.svelte";
import type { LoEvent } from "./services/types/presence";

export const transitionKey = rune("");
export const layout = rune("expanded");

export const currentTheme = rune("tutors");

export const coursesOnlineList = rune<LoEvent[]>([]);
export const studentsOnlineList = rune<LoEvent[]>([]);
