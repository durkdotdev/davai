import { defaultThemeMap } from "@stitches/core";
import type { ConfigType } from "@stitches/core/types/config";

import values from "./values.json";

export const themeMap: ConfigType.ThemeMap = {
  ...defaultThemeMap,
  ...values
};
