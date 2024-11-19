import { currentTheme } from "$lib/runes";
import type { IconType } from "$lib/services/presence-types.svelte";
import { FluentIconLib } from "../icons/fluent-icons";
import { HeroIconLib } from "../icons/hero-icons";

let StandardIconLib = FluentIconLib;
export const themes = ["tutors", "nosh", "rose", "fennec", "cerberus"];

export const themeIcons = {
  tutors: FluentIconLib,
  rose: FluentIconLib,
  nosh: FluentIconLib,
  fennec: FluentIconLib,
  cerberus: HeroIconLib
};

export function setIconLibForTheme(theme: string) {
  StandardIconLib = themeIcons[currentTheme.value];
}

export function getIcon(type: string): IconType {
  return StandardIconLib[type];
}

export function addIcon(type: string, icon: IconType) {
  FluentIconLib[type] = icon;
  HeroIconLib[type] = icon;
}
