import { Icon } from "native-base";
import { Path } from "react-native-svg";
import { IIconProps } from "./types";
import { defaultValues } from ".";

export const CheckIcon = (props: IIconProps) => {
  return (
    <Icon size={props.size || defaultValues.size} viewBox="0 0 16 12">
      <Path
        d="M1.71447 4.1325L5.93205 8.35268L6.28559 8.70643L6.63925 8.35281L14.2858 0.707011L15.2928 1.7136L6.28571 10.7207L0.706816 5.1418L1.71447 4.1325Z"
        fill={props.color || defaultValues.color}
        stroke={props.color || defaultValues.color}
      />
    </Icon>
  );
};
