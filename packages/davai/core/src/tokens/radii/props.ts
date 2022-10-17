import type * as Stitches from "@stitches/core";

type BaseRadiiProps = {
  borderRadius?: Stitches.PropertyValue<"borderRadius">;
  borderTopLeftRadius?: Stitches.PropertyValue<"borderTopLeftRadius">;
  borderTopRightRadius?: Stitches.PropertyValue<"borderTopRightRadius">;
  borderBottomRightRadius?: Stitches.PropertyValue<"borderBottomRightRadius">;
  borderBottomLeftRadius?: Stitches.PropertyValue<"borderBottomLeftRadius">;
};

export type RadiiProps = BaseRadiiProps;
