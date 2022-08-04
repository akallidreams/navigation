import React from "react";
import { StyleSheet, View } from "react-native";
import { IColor } from "../helpers/types";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  bg?: IColor;
}

export const PageContainer = (props: Props) => {
  return <View style={pageContainerStyle(props.bg)}>{props.children}</View>;
};

const pageContainerStyle = (bg: IColor | undefined) =>
  StyleSheet.flatten({
    height: "100%",
    width: "100%",
    backgroundColor: bg || "transparent",
  });

/**
 @docs
- This component is a wrapper for every page that gives a background color and size.
 */
