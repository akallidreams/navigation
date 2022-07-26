import {
  DrawerActions,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const useNav = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const navigate = navigation.navigate;
  const routerState = navigation.getState();
  const routes = routerState.routeNames;
  const back = navigation.goBack;
  const drawer = {
    open: () => navigation.dispatch(DrawerActions.openDrawer()),
    close: () => navigation.dispatch(DrawerActions.closeDrawer()),
  };
  return { navigate, routerState, routes, route, back, drawer };
};

export { useNav };

/**
 @docs
- This custom hook is to shortcut react navigation hooks.
 */
