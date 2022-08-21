# Overview

This library is part of a larger framework with many solutions that you can access at [here](https://github.com/akallidreams/create-akalli-app). All the modules are independent so you can use it without the other ones but we recommend give it a try due the fact they make much easier to implement the features navigation[(@akalli/navigation)](https://github.com/akallidreams/navigation), global state[(@akalli/state)](https://github.com/akallidreams/state), smart components[(@akalli/components)](https://github.com/akallidreams/components) and icons[(@akalli/icons)](https://github.com/akallidreams/icons).

## Quick start

This package helps to use react navigation in react-native projects, with integrations such as redux persist, creation of routes automaticaly and authentication logic. Using a small and simple configuration object all that is delivered.

## Instalation

`npm install @akalli/navigation react-native-svg @react-navigation/drawer @react-navigation/native @react-navigation/native-stack @react-navigation/stack`

Basic example:

```tsx
// Sample screens

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text>I am the main another screen</Text>
    </View>
  );
};

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text>I am the main another screen</Text>
    </View>
  );
};

export const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>I am the main another screen</Text>
    </View>
  );
};

// Config base file

const routerConfig: IRouterProps = {
  appInitial: "Main", // Initial route
  screens: {
    MainScreens: {
      Main: Main,
    },
    AssistantScreens: {
      AnotherScreen: AnotherScreen,
    },
  },
};

// Provider
export default function App() {
  return <Router config={routerConfig} />;
}
```

**A more complex config example:**

```ts
const routerConfig: IRouterProps = {
  appInitial: "Main", // Initial route
  authInitial: "SignIn", // Auth initial route
  env: "prod", // authentication required to access app routes
  activeStack: "auth", // active stack, works only if not env = prod
  drawer: { // drawer props
    position: "left";
    bg: "#26a3c9",
    labelColor: "#e8d7cf",
    icons: {
      Main: MainScreenIcon,
      SignIn: SignScreenIcon,
      AnotherScreen: AnotherScreenIcon
    }
  },
  bgs: { // background colors
    authStack: "#26a3c9",
    appStack: "#e8d7cf"
  },
    useSelector: useSelector, // redux hook useSelector only necessary if env = prod
    AsyncStorage: AsyncStorage, // your persistence storage option to redux persist config only necessary if env =prod
  screens: {
    MainScreens: {
      Main: Main,
    },
    AssistantScreens: {
      AnotherScreen: AnotherScreen,
    },
    AuthScreens: {
      SignIn: SignIn,
    },
  },
};
```

## Custom drawer

If you want to create a complete custom drawer menu you can use `CustomMenu` propertie at the config. It receives 2 props, `DrawerProps` and `routes`.

# Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

npm i styled-components @react-navigation/drawer @react-navigation/native @react-navigation/native-stack @react-navigation/stack

# Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

# Dependencies of package.json

```json
    "dependencies": {
    "@react-navigation/drawer": "^6.4.1",
    "@react-navigation/native": "^6.0.8",
    "@react-navigation/native-stack": "^6.4.1",
    "@react-navigation/stack": "^6.1.1",
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "expo": "~45.0.0",
    "expo-status-bar": "~1.3.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-svg": "12.3.0",
    "react-native-web": "0.17.7",
    "react-native-gesture-handler": "~2.2.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@expo/webpack-config": "^0.16.27",
    "@storybook/addon-actions": "^5.3.21",
    "@storybook/addon-knobs": "^5.3.21",
    "@storybook/addon-links": "^5.3.21",
    "@storybook/addon-ondevice-actions": "^5.3.23",
    "@storybook/addon-ondevice-knobs": "^5.3.26",
    "@storybook/cli": "^6.5.9",
    "@storybook/react": "^6.5.9",
    "@storybook/react-native": "^5.3.25",
    "@storybook/react-native-server": "^5.3.23",
    "@types/react": "~17.0.21",
    "@types/react-native": "~0.66.13",
    "babel-loader": "^8.2.5",
    "chromatic": "^6.7.1",
    "typescript": "~4.3.5"
  }
```
