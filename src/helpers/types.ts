import React from "react";

export interface IRoute {
  Component: React.ElementType;
  name: string;
  bg: string | undefined;
  Icon?: React.ElementType;
}

export interface IDrawer {
  position: "left" | "right";
  bg: string;
  labelColor: string;
  icons?: any;
}

export interface IRouterBase {
  authInitial: string;
  appInitial: string;
  drawer?: IDrawer;
  activeStack: "app" | "auth";
  env: "dev" | "prod";
}
export interface IRouter extends IRouterBase {
  screens: {
    appStack: IRoute[];
    authStack: IRoute[];
  };
}

export interface IRouterProps extends IRouterBase {
  screens: IScreens;
}

export interface IStack {
  routes: IRoute[];
  initial: string;
  drawer?: IDrawer;
}

export interface IScreensNames {
  [key: string]: React.ElementType;
}

export interface IScreens {
  MainScreens: IScreensNames;
  AssistantScreens: IScreensNames;
  AuthScreens: IScreensNames;
}

export interface IBgs {
  authBg: string;
  appBg: string;
}
