import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { Box, Pressable, VStack } from "native-base";
import { AkIcons } from "@akalli/icons";
import { IRoute } from "../helpers/types";

interface Props {
  DrawerProps: DrawerContentComponentProps;
  routes: IRoute[];
  labelColor?: string;
}

const iconsSize = "18px";

export const Menu = (props: Props) => {
  const {
    navigation: { navigate, closeDrawer, dispatch },
  } = props.DrawerProps;

  return (
    <>
      <Box position="absolute" right="50" top="65">
        <Pressable
          onPress={() => {
            dispatch(DrawerActions.closeDrawer());
          }}
        >
          <AkIcons.NavIcons.CloseIcon
            size={iconsSize}
            color={props.labelColor}
          />
        </Pressable>
      </Box>
      <DrawerContentScrollView {...props}>
        <VStack mt="60px" pl="25px">
          {props.routes.map(({ name, Icon }) => (
            <DrawerItem
              key={name}
              labelStyle={{
                color: props.labelColor || "black",
              }}
              icon={Icon || null}
              onPress={() => {
                navigate(name);
              }}
              label={name}
            />
          ))}
        </VStack>
      </DrawerContentScrollView>
    </>
  );
};
