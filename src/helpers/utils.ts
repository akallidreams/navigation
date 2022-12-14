import { IBgs, IColor, IScreens, IScreensNames } from "./types";

const snakelize = (str: string) =>
  str
    .split(/\.?(?=[A-Z])/)
    .join("-")
    .toLowerCase();

const generateStack = (Stack: IScreensNames, bg: IColor | undefined) =>
  Object.keys(Stack).map((Screen) => ({
    Component: Stack[Screen as keyof typeof Stack],
    name: Screen,
    bg: bg || "transparent",
  }));

export const createRoutes = (Screens: IScreens, bgs?: IBgs) => ({
  authStack: Screens.AuthScreens
    ? generateStack(Screens.AuthScreens, bgs?.authBg)
    : [],
  appStack: generateStack(
    { ...Screens.MainScreens, ...Screens.AssistantScreens },
    bgs?.appBg
  ),
});

const pascalize = (snakeWord: string) => {
  return snakeWord
    .split("-")
    .map((word) => word.replace(/^./, (str) => str.toUpperCase()))
    .join("");
};

export const utils = {
  pascalize,
  createRoutes,
};

// camelCase snake-case PascalCase
