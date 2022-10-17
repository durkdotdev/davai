import { createStitches } from "@stitches/core";
import type { ConfigType } from "@stitches/core/types/config";
import type Stitches from "@stitches/core/types/stitches";

import {
  createConfigObject,
  createConfigThemeObject,
  InputConfigType
} from "./config";

export class Core {
  darkTheme: ConfigType.Theme;
  stitches: Stitches<string, {}, {}, {}, {}>;
  theme: "light" | "dark";

  constructor(
    inputConfig: InputConfigType = {},
    theme: "light" | "dark" = "light"
  ) {
    this.stitches = createStitches(createConfigObject(inputConfig));
    this.darkTheme = this.stitches.createTheme(
      createConfigThemeObject(inputConfig.theme || {}, "dark")
    );
    this.theme = theme
  };

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  
    if (document && document.body) {
      document.body.classList.remove(
        this.theme === "light"
          ? this.darkTheme.className
          : this.stitches.theme.className
      );
      document.body.classList.add(
        this.theme === "light"
          ? this.stitches.theme.className
          : this.darkTheme.className
      );
    }
  };
}

export type { InputConfigType } from "./config";
