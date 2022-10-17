import type * as Stitches from "@stitches/core";
import type { ConfigType } from "@stitches/core/types/config";

export const utils: ConfigType.Utils = {
  marginX: (value: Stitches.PropertyValue<"margin">) => ({
    marginInlineStart: value,
    marginRight: value
  }),
  marginY: (value: Stitches.PropertyValue<"margin">) => ({
    marginTop: value,
    marginBottom: value
  })
};
