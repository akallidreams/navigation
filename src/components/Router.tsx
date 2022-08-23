import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useMemo, useState } from "react";
import { PageContainer } from "./PageContainer";
import { Menu } from "./Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IRoute, IRouter, IRouterProps, IStack } from "../helpers/types";
import { utils } from "../helpers";
import { DictProvider, useAuth } from "../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            labelColor={props.drawer?.labelColor}
          />
        )
      }
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

const prodRouting = ({ config }: { config: IRouter }, { data }: any) =>
  data.isAuthenticated ? (
    <AppStack
      routes={config.screens.appStack}
      initial={config.appInitialRoute}
    />
  ) : config.authInitialRoute ? (
    <AuthStack
      routes={config.screens.authStack}
      initial={config.authInitialRoute}
    />
  ) : (
    console.error(
      "Config file couldn't find one of those configs: auth stack, app stack, authInitial or appInitial"
    )
  );

const devRouting = ({ config }: { config: IRouter }) =>
  config.activeStack === "auth" && config.authInitialRoute ? (
    <AuthStack
      routes={config.screens.authStack}
      initial={config.authInitialRoute}
    />
  ) : config.appInitialRoute ? (
    <AppStack
      routes={config.screens.appStack}
      initial={config.appInitialRoute}
      drawer={config.drawer}
    />
  ) : (
    console.error(
      "Config file couldn't find one of those configs: auth stack, app stack, authInitial or appInitial"
    )
  );

export const Router = (props: { config: IRouterProps }) => {
  const { data, actions } = useAuth();

  if (props.config.env === "prod") {
    if (!data) {
      throw new Error(
        "Auth provider is not defined, please wrap your app with AuthProvider"
      );
    }
    useEffect(() => {
      const authStorage = AsyncStorage.getItem("auth");
      authStorage.then((storage: string | null) => {
        const { accessToken, refreshToken, user } = JSON.parse(storage || "");
        actions.setTokens({ accessToken, refreshToken });
        actions.setUser(user);
        actions.setIsAuthenticated(true);
      });
    }, []);
  }

  const routes = useMemo(
    () => utils.createRoutes(props.config.screens),
    [props.config.screens]
  );
  const config = {
    ...props.config,
    screens: routes,
  };

  return (
    <DictProvider
      dicts={config.dicts || {}}
      defaultLang={props.config.defaultLanguage}
    >
      <NavigationContainer>
        {props.config.env === "prod"
          ? prodRouting({ config }, { data })
          : devRouting({ config })}
      </NavigationContainer>
    </DictProvider>
  );
};

/**
 @docs
 */
