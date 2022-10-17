import type * as Stitches from "@stitches/core";

type BaseSizesProps = {
  blockSize?: Stitches.PropertyValue<"blockSize">;
  minBlockSize?: Stitches.PropertyValue<"minBlockSize">;
  maxBlockSize?: Stitches.PropertyValue<"maxBlockSize">;
  inlineSize?: Stitches.PropertyValue<"inlineSize">;
  minInlineSize?: Stitches.PropertyValue<"minInlineSize">;
  maxInlineSize?: Stitches.PropertyValue<"maxInlineSize">;
  width?: Stitches.PropertyValue<"width">;
  minWidth?: Stitches.PropertyValue<"minWidth">;
  maxWidth?: Stitches.PropertyValue<"maxWidth">;
  height?: Stitches.PropertyValue<"height">;
  minHeight?: Stitches.PropertyValue<"minHeight">;
  maxHeight?: Stitches.PropertyValue<"maxHeight">;
  flexBasis?: Stitches.PropertyValue<"flexBasis">;
  gridTemplateColumns?: Stitches.PropertyValue<"gridTemplateColumns">;
  gridTemplateRows?: Stitches.PropertyValue<"gridTemplateRows">;
};

export type SizesProps = BaseSizesProps;
