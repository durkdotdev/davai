import type { ConfigType } from "@stitches/core/types/config";

import borderStyles from "../../tokens/borderStyles/values.json";
import borderWidths from "../../tokens/borderWidths/values.json";
import { colors, darkColors } from "../../tokens/colors/values";
import fonts from "../../tokens/fonts/values.json";
import fontSizes from "../../tokens/fontSizes/values.json";
import fontWeights from "../../tokens/fontWeights/values.json";
import letterSpacings from "../../tokens/letterSpacings/values.json";
import lineHeights from "../../tokens/lineHeights/values.json";
import radii from "../../tokens/radii/values.json";
import shadows from "../../tokens/shadows/values.json";
import sizes from "../../tokens/sizes/values";
import space from "../../tokens/space/values.json";
import transitions from "../../tokens/transitions/values.json";
import zIndices from "../../tokens/zIndices/values.json";

const baseThemeObject: ConfigType.Theme = {
  borderStyles,
  borderWidths,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices
};

export const createConfigThemeObject = (
  inputTheme: ConfigType.Theme = {},
  theme: "light" | "dark" = "light"
) => {
  const createdThemeObject: ConfigType.Theme = {
    colors: theme === "light" ? colors : darkColors,
    ...baseThemeObject
  };

  Object.keys(createdThemeObject).forEach((themeKey) => {
    if (inputTheme[themeKey])
      createdThemeObject[themeKey] = {
        ...createdThemeObject[themeKey],
        ...inputTheme[themeKey]
      };
  });

  return createdThemeObject;
};
