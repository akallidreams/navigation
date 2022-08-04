import React from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type IColor = RGB | RGBA | HEX;

export interface IColors {
  primary: IColor;
  secondary?: IColor;
  grey?: IColor;
  greyLight?: IColor;
  greyDark?: IColor;
  white?: IColor;
  success?: IColor;
  error?: IColor;
}
export interface IRoute {
  Component: React.ElementType;
  name: string;
  bg?: IColor | undefined;
  Icon?: React.ElementType;
}

export interface IDrawer {
  position: "left" | "right";
  bg: IColor | undefined;
  labelColor: string;
  icons?: any;
}

export interface IRouterBase {
  authInitial: string;
  appInitial: string;
  drawer?: IDrawer;
  activeStack: "app" | "auth";
  env: "dev" | "prod";
  useSelector: any;
  AsyncStorage: any;
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
  authBg: IColor | undefined;
  appBg: IColor | undefined;
}
