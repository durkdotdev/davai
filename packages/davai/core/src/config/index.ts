import { ConfigType } from "@stitches/core/types/config";
import { merge } from "lodash-es";

import { media } from "./media";
import { createConfigThemeObject } from "./theme";
import { themeMap } from "./themeMap";
import { utils } from "./utils";

export { createConfigThemeObject } from "./theme";

export type InputConfigType = {
  prefix?: ConfigType.Prefix | string;
  media?: ConfigType.Media;
  theme?: ConfigType.Theme;
  themeMap?: ConfigType.ThemeMap;
  utils?: ConfigType.Utils;
};

const defaultConfig: InputConfigType = {
  prefix: "davai",
  media,
  themeMap,
  theme: createConfigThemeObject(),
  utils
};

export const createConfigObject = (inputConfig: InputConfigType = {}) => {
  const createdConfigObject = { ...defaultConfig };

  Object.keys(defaultConfig).forEach((configKey) => {
    if (configKey === "prefix") {
      if (inputConfig[configKey])
        createdConfigObject[configKey] = `davai-${inputConfig[configKey]}`;
    } else {
      if (inputConfig[configKey])
        createdConfigObject[configKey] = merge(
          createdConfigObject[configKey],
          inputConfig[configKey]
        );
    }
  });

  return createdConfigObject;
};
