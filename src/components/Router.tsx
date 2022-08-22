import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ReactElement, useEffect, useState } from "react";
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
  const CustomMenu = props.drawer?.CustomMenu as React.ElementType;
  return props.drawer ? (
    <Drawer.Navigator
      drawerContent={(drawer: any) =>
        props.drawer?.CustomMenu ? (
          <CustomMenu DrawerProps={drawer} routes={props.routes} />
        ) : (
          <Menu
            DrawerProps={drawer}
            routes={props.routes}
            labelColor={props.drawer?.basicMenu?.labelColor}
          />
        )
      }
      initialRouteName={props.initial}
      screenOptions={{
        headerShown: false,
        drawerPosition: props?.drawer?.basicMenu?.position || "right",
        drawerStyle: {
          backgroundColor: props?.drawer?.basicMenu?.bg || "black",
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
  ) : config.authInitial ? (
    <AuthStack routes={config.screens.authStack} initial={config.authInitial} />
  ) : (
    console.error(
      "Config file couldn't find one of those configs: auth stack, app stack, authInitial or appInitial"
    )
  );

const devRouting = ({ config }: { config: IRouter }) =>
  config.activeStack === "auth" && config.authInitial ? (
    <AuthStack routes={config.screens.authStack} initial={config.authInitial} />
  ) : config.appInitial ? (
    <AppStack
      routes={config.screens.appStack}
      initial={config.appInitial}
      drawer={config.drawer}
    />
  ) : (
    console.error(
      "Config file couldn't find one of those configs: auth stack, app stack, authInitial or appInitial"
    )
  );

export const Router = (props: { config: IRouterProps }) => {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(null);

  if (props.config.env === "prod") {
    const authSelector = props.config.useSelector((state: any) => state).auth;
    const persistRoot = props.config.AsyncStorage.getItem("persist:root");
    useEffect(() => {
      setAuth(authSelector);
      persistRoot.then((tk: string | null) => {
        // FIXME: tk type
        const local = JSON.parse(tk as string);
        const userToken = JSON.parse(local.auth);
        setToken(userToken.accessToken);
      });
    }, []);
  }

  const routes = utils.createRoutes(props.config.screens);
  const config = {
    ...props.config,
    screens: routes,
  };

  // FIXME: fix config type

  return (
    <NavigationContainer>
      {props.config.env === "prod"
        ? prodRouting({ config }, { auth, token })
        : devRouting({ config })}
    </NavigationContainer>
  );
};

/**
 @docs
 */
