import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, Text, View } from "react-native";
import { Router } from "./src";
import { IRouterProps } from "./src/helpers/types";
import { AuthProvider, useAuth, useDict } from "./src/hooks";

// Sample screens

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text>I am the main screen</Text>
    </View>
  );
};

export const Login = () => {
  const { dict, setLang } = useDict("auth");
  const { actions, data } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log(data);
          setLang("pt");
          actions.setIsAuthenticated(true);
        }}
        title={dict.alive}
      />
      <Text>I am the login screen</Text>
    </View>
  );
};

export const AnotherScreen = () => {
  const { dict, setLang } = useDict("auth");
  const { actions, data } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log(data);
          setLang("en");
          actions.setIsAuthenticated(false);
        }}
        title={dict.alive}
      />
      <Text>I am the another screen</Text>
    </View>
  );
};

// Config base file

const routerConfig: IRouterProps = {
  appInitialRoute: "AnotherScreen", // Initial route
  authInitialRoute: "Login", // Initial route for auth stack
  activeStack: "auth", // 'app' or 'auth'
  env: "prod",
  defaultLanguage: "en",
  dicts: {
    auth: {
      en: {
        alive: "I am alive.",
      },
      pt: {
        alive: "Eu estou vivo.",
      },
    },
  },
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
  return (
    <AuthProvider>
      <Router config={routerConfig} />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
