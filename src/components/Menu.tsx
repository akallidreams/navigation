import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { IRoute } from "../helpers/types";
import { Pressable, StyleSheet, View } from "react-native";
import { CloseIcon } from "./Icons";

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
      <View style={styles.closeButtonContainer}>
        <Pressable
          onPress={() => {
            dispatch(DrawerActions.closeDrawer());
          }}
        >
          <CloseIcon size={iconsSize} color={props.labelColor} />
        </Pressable>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerItemContainer}>
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
        </View>
      </DrawerContentScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    position: "absolute",
    right: "50",
    top: "65",
  },
  drawerItemContainer: {
    marginTop: "60px",
    paddingLeft: "25px",
  },
});
