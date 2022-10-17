import type * as Stitches from "@stitches/core";

type BaseBorderStylesProps = {
  borderStyle?: Stitches.PropertyValue<"borderStyle">;
  borderTopStyle?: Stitches.PropertyValue<"borderTopStyle">;
  borderRightStyle?: Stitches.PropertyValue<"borderRightStyle">;
  borderBottomStyle?: Stitches.PropertyValue<"borderBottomStyle">;
  borderLeftStyle?: Stitches.PropertyValue<"borderLeftStyle">;
};

export type BorderStylesProps = BaseBorderStylesProps;
