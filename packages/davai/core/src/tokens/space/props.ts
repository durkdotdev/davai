import type * as Stitches from "@stitches/core";

type BaseSpaceProps = {
  gap?: Stitches.PropertyValue<"gap">;
  gridGap?: Stitches.PropertyValue<"gap">;
  columnGap?: Stitches.PropertyValue<"columnGap">;
  gridColumnGap?: Stitches.PropertyValue<"columnGap">;
  rowGap?: Stitches.PropertyValue<"rowGap">;
  gridRowGap?: Stitches.PropertyValue<"rowGap">;
  inset?: Stitches.PropertyValue<"inset">;
  insetBlock?: Stitches.PropertyValue<"insetBlock">;
  insetBlockEnd?: Stitches.PropertyValue<"insetBlockEnd">;
  insetBlockStart?: Stitches.PropertyValue<"insetBlockStart">;
  insetInline?: Stitches.PropertyValue<"insetInline">;
  insetInlineEnd?: Stitches.PropertyValue<"insetInlineEnd">;
  insetInlineStart?: Stitches.PropertyValue<"insetInlineStart">;
  margin?: Stitches.PropertyValue<"margin">;
  marginTop?: Stitches.PropertyValue<"marginTop">;
  marginRight?: Stitches.PropertyValue<"marginRight">;
  marginBottom?: Stitches.PropertyValue<"marginBottom">;
  marginLeft?: Stitches.PropertyValue<"marginLeft">;
  marginBlock?: Stitches.PropertyValue<"marginBlock">;
  marginBlockEnd?: Stitches.PropertyValue<"marginBlockEnd">;
  marginBlockStart?: Stitches.PropertyValue<"marginBlockStart">;
  marginInline?: Stitches.PropertyValue<"marginInline">;
  marginInlineEnd?: Stitches.PropertyValue<"marginInlineEnd">;
  marginInlineStart?: Stitches.PropertyValue<"marginInlineStart">;
  padding?: Stitches.PropertyValue<"padding">;
  paddingTop?: Stitches.PropertyValue<"paddingTop">;
  paddingRight?: Stitches.PropertyValue<"paddingRight">;
  paddingBottom?: Stitches.PropertyValue<"paddingBottom">;
  paddingLeft?: Stitches.PropertyValue<"paddingLeft">;
  paddingBlock?: Stitches.PropertyValue<"paddingBlock">;
  paddingBlockEnd?: Stitches.PropertyValue<"paddingBlockEnd">;
  paddingBlockStart?: Stitches.PropertyValue<"paddingBlockStart">;
  paddingInline?: Stitches.PropertyValue<"paddingInline">;
  paddingInlineEnd?: Stitches.PropertyValue<"paddingInlineEnd">;
  paddingInlineStart?: Stitches.PropertyValue<"paddingInlineStart">;
  top?: Stitches.PropertyValue<"top">;
  right?: Stitches.PropertyValue<"right">;
  bottom?: Stitches.PropertyValue<"bottom">;
  left?: Stitches.PropertyValue<"left">;
  scrollMargin?: Stitches.PropertyValue<"scrollMargin">;
  scrollMarginTop?: Stitches.PropertyValue<"scrollMarginTop">;
  scrollMarginRight?: Stitches.PropertyValue<"scrollMarginRight">;
  scrollMarginBottom?: Stitches.PropertyValue<"scrollMarginBottom">;
  scrollMarginLeft?: Stitches.PropertyValue<"scrollMarginLeft">;
  scrollMarginX?: Stitches.PropertyValue<"scrollMargin">;
  scrollMarginY?: Stitches.PropertyValue<"scrollMargin">;
  scrollMarginBlock?: Stitches.PropertyValue<"scrollMarginBlock">;
  scrollMarginBlockEnd?: Stitches.PropertyValue<"scrollMarginBlockEnd">;
  scrollMarginBlockStart?: Stitches.PropertyValue<"scrollMarginBlockStart">;
  scrollMarginInline?: Stitches.PropertyValue<"scrollMarginInline">;
  scrollMarginInlineEnd?: Stitches.PropertyValue<"scrollMarginInlineEnd">;
  scrollMarginInlineStart?: Stitches.PropertyValue<"scrollMarginInlineStart">;
  scrollPadding?: Stitches.PropertyValue<"scrollPadding">;
  scrollPaddingTop?: Stitches.PropertyValue<"scrollPaddingTop">;
  scrollPaddingRight?: Stitches.PropertyValue<"scrollPaddingRight">;
  scrollPaddingBottom?: Stitches.PropertyValue<"scrollPaddingBottom">;
  scrollPaddingLeft?: Stitches.PropertyValue<"scrollPaddingLeft">;
  scrollPaddingX?: Stitches.PropertyValue<"scrollPadding">;
  scrollPaddingY?: Stitches.PropertyValue<"scrollPadding">;
  scrollPaddingBlock?: Stitches.PropertyValue<"scrollPaddingBlock">;
  scrollPaddingBlockEnd?: Stitches.PropertyValue<"scrollPaddingBlockEnd">;
  scrollPaddingBlockStart?: Stitches.PropertyValue<"scrollPaddingBlockStart">;
  scrollPaddingInline?: Stitches.PropertyValue<"scrollPaddingInline">;
  scrollPaddingInlineEnd?: Stitches.PropertyValue<"scrollPaddingInlineEnd">;
  scrollPaddingInlineStart?: Stitches.PropertyValue<"scrollPaddingInlineStart">;
};

type MapSpaceProps = {
  // m: (value: Stitches.PropertyValue<"margin">) => ({
  //   margin: value
  // }),
  // mt: (value: Stitches.PropertyValue<"marginTop">) => ({
  //   marginTop: value
  // }),
  // mr: (value: Stitches.PropertyValue<"marginRight">) => ({
  //   marginRight: value
  // }),
  // mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
  //   marginBottom: value
  // }),
  // ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
  //   marginLeft: value
  // }),
  // mx: (value: Stitches.PropertyValue<"marginInlineStart"> | Stitches.PropertyValue<"marginInlineEnd">) => ({
  //   marginInlineStart: value,
  //   marginInlineEnd: value
  // }),
  // my: (value: Stitches.PropertyValue<"marginTop"> | Stitches.PropertyValue<"marginBottom">) => ({
  //   marginTop: value,
  //   marginBottom: value
  // }),
  // marginX: (value: Stitches.PropertyValue<"marginInlineStart"> | Stitches.PropertyValue<"marginInlineEnd">) => ({
  //   marginInlineStart: value,
  //   marginInlineEnd: value
  // }),
  // marginY: (value: Stitches.PropertyValue<"marginTop"> | Stitches.PropertyValue<"marginBottom">) => ({
  //   marginTop: value,
  //   marginBottom: value
  // }),
  p?: Stitches.PropertyValue<"padding">;
  pt?: Stitches.PropertyValue<"paddingTop">;
  pr?: Stitches.PropertyValue<"paddingRight">;
  pb?: Stitches.PropertyValue<"paddingBottom">;
  pl?: Stitches.PropertyValue<"paddingLeft">;
  px?:
    | Stitches.PropertyValue<"paddingInlineStart">
    | Stitches.PropertyValue<"paddingInlineEnd">;
  py?:
    | Stitches.PropertyValue<"paddingTop">
    | Stitches.PropertyValue<"paddingBottom">;
  paddingX?:
    | Stitches.PropertyValue<"paddingInlineStart">
    | Stitches.PropertyValue<"paddingInlineEnd">;
  paddingY?:
    | Stitches.PropertyValue<"paddingTop">
    | Stitches.PropertyValue<"paddingBottom">;
};

export type SpaceProps = BaseSpaceProps;
