import { rune } from "./services/utils/runes.svelte";
import type { LoEvent } from "./services/types/presence";

export const transitionKey = rune("");
export const layout = rune("expanded");

export const currentTheme = rune("tutors");

export const coursesOnlineList = rune<LoEvent[]>([]);
export const allStudentsOnlineList = rune<LoEvent[]>([]);

export const studentsOnline = rune(0);
export const studentsOnlineList = rune<LoEvent[]>([]);

export const coursesOnline = rune(0);
export const allStudentsOnline = rune(0);
