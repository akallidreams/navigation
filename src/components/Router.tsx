import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageContainer } from "./PageContainer";
import { Menu } from "./Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IRoute, IRouter, IStack } from "../helpers/types";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = (props: { routes: IRoute[] }) =>
  props.routes.map(({ name, bg, Component }: IRoute) => (
    <Drawer.Screen
      name={name}
      key={name}
      children={() => (
        <PageContainer bg={bg}>
          <Component />
        </PageContainer>
      )}
    />
  ));

const AppStack = (props: IStack) => {
  return props.drawer ? (
    <Drawer.Navigator
      drawerContent={(drawer: any) => (
        <Menu
          DrawerProps={drawer}
          routes={props.routes}
          labelColor={props.drawer?.labelColor}
        />
      )}
      initialRouteName={props.initial}
      screenOptions={{
        headerShown: false,
        drawerPosition: props?.drawer?.position || "right",
        drawerStyle: {
          backgroundColor: props?.drawer?.bg || "black",
          width: 300,
          opacity: 0.9,
        },
      }}
    >
      {Screens({ routes: props.routes })}
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName={props.initial}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Screens({ routes: props.routes })}
    </Stack.Navigator>
  );
};

const AuthStack = (props: IStack) => {
  return (
    <Stack.Navigator
      initialRouteName={props.initial}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Screens({ routes: props.routes })}
    </Stack.Navigator>
  );
};

interface IProps {
  config: IRouter;
}

const prodRouting = ({ config }: IProps, { auth, token }: any) =>
  !auth.tokens.accessToken || token ? (
    <AppStack routes={config.appStack} initial={config.appInitial} />
  ) : (
    <AuthStack routes={config.authStack} initial={config.authInitial} />
  );

const devRouting = ({ config }: IProps) =>
  config.activeStack === "app" ? (
    <AppStack
      routes={config.appStack}
      initial={config.appInitial}
      drawer={config.drawer}
    />
  ) : (
    <AuthStack routes={config.authStack} initial={config.authInitial} />
  );

export const Router = (props: IProps) => {
  const { auth } = useSelector((state: any) => state);
  const persistRoot = AsyncStorage.getItem("persist:root");
  const [token, setToken] = useState();

  useEffect(() => {
    persistRoot.then((tk: string) => {
      // FIXME: tk type
      const local = JSON.parse(tk as string);
      const userToken = JSON.parse(local.auth);
      setToken(userToken.accessToken);
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        {props.config.env === "dev"
          ? devRouting(props)
          : prodRouting(props, { auth, token })}
      </NavigationContainer>
    </>
  );
};

/**
 @docs
- This component is a wrapper used to decide each page's routes and which pages are available while you're logged off and which pages are available while you're logged in using a token e.g.:
  Logged in `(AppStack)`: Dashboard
  Logged off `(AuthStack)`: SignIn, SignUp, ResetPassword, ConfirmEmail
 */
