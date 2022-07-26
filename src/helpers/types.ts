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
}

export interface IRouter {
  authStack: IRoute[];
  authInitial: string;
  appStack: IRoute[];
  appInitial: string;
  drawer?: IDrawer;
  activeStack: "app" | "auth";
  env: "dev" | "prod";
}

export interface IStack {
  routes: IRoute[];
  initial: string;
  drawer?: IDrawer;
}
