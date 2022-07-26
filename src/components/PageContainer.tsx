import { VStack } from "native-base";
import { React } from "react";

interface Props {
  children: React.element;
  bg?: string;
}

export const PageContainer = (props: Props) => {
  return (
    <VStack h="full" w="full" bg={props.bg || "white"} alignItems="center">
      {props.children}
    </VStack>
  );
};

/**
 @docs
- This component is a wrapper for every page that gives a background color and size.
 */
