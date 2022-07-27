import { AkNavTypes } from "@akalli/ak";
import * as AssistantScreens from "../../../../../src/features/assistant"; // 5 levels to import
import * as MainScreens from "../../../../../src/features/main";
import * as AuthScreens from "../../../../../src/features/auth";
import { theme } from "../theme";

const generateAppRoutes = ({ MainScreens, AssistantScreens }) => [
  ...Object.keys(MainScreens).map((Screen) => ({
    Component: MainScreens[Screen as keyof typeof MainScreens],
    name: Screen,
    bg: theme.colors.white,
  })),
  ...Object.keys(AssistantScreens).map((Screen) => ({
    Component: AssistantScreens[Screen as keyof typeof AssistantScreens],
    name: Screen,
    bg: theme.colors.white,
  })),
];

const generateAuthStack = ({ AuthScreens }) => [
  ...Object.keys(AuthScreens).map((Screen) => ({
    Component: AuthScreens[Screen as keyof typeof AuthScreens],
    name: Screen,
    bg: theme.colors.white,
  })),
];

interface IStacks {
  authStack: AkNavTypes.IRoute[];
  appStack: AkNavTypes.IRoute[];
}

export const stacks: IStacks = {
  authStack: generateAuthStack({ AuthScreens }),
  appStack: generateAppRoutes({ MainScreens, AssistantScreens }),
};
