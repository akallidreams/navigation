import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../helpers/colors";
import { IColor } from "../helpers/types";

interface IProps {
  size?: string | number;
  color?: IColor;
}

export const CloseIcon = (props: IProps) => {
  return (
    <Svg width={props.size || "20px"} height={props.size || "20px"} fill="none">
      <Path
        d="M1.711.313a.959.959 0 0 0-1.417 0 1.12 1.12 0 0 0 0 1.512L6.082 8 .294 14.175a1.12 1.12 0 0 0 0 1.512.959.959 0 0 0 1.417 0L7.5 9.512l5.789 6.175a.959.959 0 0 0 1.417 0 1.12 1.12 0 0 0 0-1.512L8.918 8l5.788-6.175a1.12 1.12 0 0 0 0-1.512.959.959 0 0 0-1.417 0L7.5 6.488 1.711.313Z"
        fill={props.color || colors.grey}
      />
    </Svg>
  );
};

export const BackIcon = (props: IProps) => {
  return (
    <Svg width={props.size || "20px"} height={props.size || "20px"} fill="none">
      <Path
        d="m1.547 7 5.265 5.794a.757.757 0 0 1 0 1 .603.603 0 0 1-.91 0L.185 7.498a.77.77 0 0 1 0-.998L5.903.207a.603.603 0 0 1 .909 0 .757.757 0 0 1 0 .998L1.547 7Z"
        fill={props.color || colors.grey}
      />
    </Svg>
  );
};
