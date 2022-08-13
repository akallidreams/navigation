import { StyleSheet, Text, View } from "react-native";
import { Router } from "./src";
import { IRouterProps } from "./src/helpers/types";

// Sample screens

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text>I am the main screen</Text>
    </View>
  );
};

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text>I am the login screen</Text>
    </View>
  );
};

export const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>I am the another screen</Text>
    </View>
  );
};

// Config base file

const routerConfig: IRouterProps = {
  appInitial: "AnotherScreen", // Initial route
  authInitial: "Login", // Initial route for auth stack
  activeStack: "auth", // 'app' or 'auth'
  screens: {
    MainScreens: {
      Main: Main,
    },
    AssistantScreens: {
      AnotherScreen: AnotherScreen,
    },
    AuthScreens: {
      // Not authentedicated screens
      Login: Login,
    },
  },
};

// Provider
export default function App() {
  return <Router config={routerConfig} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
