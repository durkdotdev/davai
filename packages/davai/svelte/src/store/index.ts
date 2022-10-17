import type { Core } from "@davai/core";
import { writable } from "svelte/store";

export const core = writable<Core>();

// let lightThemeClass: string;
// export const stitches = writable<CreatedStitchesInstanceType>();
// stitches.subscribe((value) => {
//     lightThemeClass = value?.theme.className;
//     console.log(value)
// });

// let darkThemeClass: string;
// export const darkTheme = writable<CreatedThemeType>();
// darkTheme.subscribe((value) => darkThemeClass = value?.className);

// export const theme = writable<DavaiTheme>(browser && localStorage.getItem("theme") || "light");
// theme.subscribe((value) => {
//   if (browser) {
//     localStorage.setItem("theme", value || "light");
//     if (value === "light") {
//       if (darkThemeClass) document.body.classList.remove(darkThemeClass);
//       if (lightThemeClass) document.body.classList.add(lightThemeClass);
//     } else {
//       if (lightThemeClass) document.body.classList.remove(lightThemeClass);
//       if (darkThemeClass) document.body.classList.add(darkThemeClass);
//     }
//   }
// });
