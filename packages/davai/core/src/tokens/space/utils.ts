import type * as Stitches from "@stitches/core";
import type { ConfigType } from "@stitches/core/types/config";

export const spaceUtils: ConfigType.Utils = {
  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value
  }),
  mx: (
    value:
      | Stitches.PropertyValue<"marginInlineStart">
      | Stitches.PropertyValue<"marginInlineEnd">
  ) => ({
    marginInlineStart: value,
    marginInlineEnd: value
  }),
  my: (
    value:
      | Stitches.PropertyValue<"marginTop">
      | Stitches.PropertyValue<"marginBottom">
  ) => ({
    marginTop: value,
    marginBottom: value
  }),
  marginX: (
    value:
      | Stitches.PropertyValue<"marginInlineStart">
      | Stitches.PropertyValue<"marginInlineEnd">
  ) => ({
    marginInlineStart: value,
    marginInlineEnd: value
  }),
  marginY: (
    value:
      | Stitches.PropertyValue<"marginTop">
      | Stitches.PropertyValue<"marginBottom">
  ) => ({
    marginTop: value,
    marginBottom: value
  }),
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value
  }),
  px: (
    value:
      | Stitches.PropertyValue<"paddingInlineStart">
      | Stitches.PropertyValue<"paddingInlineEnd">
  ) => ({
    paddingInlineStart: value,
    paddingInlineEnd: value
  }),
  py: (
    value:
      | Stitches.PropertyValue<"paddingTop">
      | Stitches.PropertyValue<"paddingBottom">
  ) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  paddingX: (
    value:
      | Stitches.PropertyValue<"paddingInlineStart">
      | Stitches.PropertyValue<"paddingInlineEnd">
  ) => ({
    paddingInlineStart: value,
    paddingInlineEnd: value
  }),
  paddingY: (
    value:
      | Stitches.PropertyValue<"paddingTop">
      | Stitches.PropertyValue<"paddingBottom">
  ) => ({
    paddingTop: value,
    paddingBottom: value
  })
};
