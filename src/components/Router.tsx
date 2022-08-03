import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { PageContainer } from "./PageContainer";
import { Menu } from "./Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IRoute, IRouter, IRouterProps, IStack } from "../helpers/types";
import { utils } from "../helpers";

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

const prodRouting = ({ config }: { config: IRouter }, { auth, token }: any) =>
  !auth.tokens.accessToken || token ? (
    <AppStack routes={config.screens.appStack} initial={config.appInitial} />
  ) : (
    <AuthStack routes={config.screens.authStack} initial={config.authInitial} />
  );

const devRouting = ({ config }: { config: IRouter }) =>
  config.activeStack === "app" ? (
    <AppStack
      routes={config.screens.appStack}
      initial={config.appInitial}
      drawer={config.drawer}
    />
  ) : (
    <AuthStack routes={config.screens.authStack} initial={config.authInitial} />
  );

export const Router = (props: { config: IRouterProps }) => {
  const { auth } = props.useSelector((state: any) => state);
  const persistRoot = props.AsyncStorage.getItem("persist:root");
  const [token, setToken] = useState();
  const routes = utils.createRoutes(props.config.screens);
  const config = {
    ...props.config,
    screens: routes,
  };

  useEffect(() => {
    persistRoot.then((tk: string | null) => {
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
          ? devRouting({ config })
          : prodRouting({ config }, { auth, token })}
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
