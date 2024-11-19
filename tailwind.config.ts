import type { Config } from "tailwindcss";
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
import tutors from "./src/lib/ui/themes/styles/tutors";

export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
  theme: {
    extend: {}
  },
  plugins: [
    skeleton({
      // NOTE: each theme included will be added to your CSS bundle
      themes: [themes.cerberus, themes.rose, themes.nosh, themes.mona, themes.nosh, themes.fennec, tutors]
    })
  ]
} satisfies Config;
