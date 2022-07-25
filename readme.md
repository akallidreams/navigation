# Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

# Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `Expo start` or `npm install` and scan QR code on `expo go`

# Dependencies of package.json

```json
"expo": "~45.0.0",
  "expo-status-bar": "~1.3.0",
  "native-base": "^3.4.9",
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "react-native": "0.68.2",
  "react-native-safe-area-context": "4.2.4",
  "react-native-svg": "12.3.0",
  "react-native-web": "0.17.7",
  "undefined": "react-dom/client"
```
