module.exports = {
  root: true,
  extends: '@react-native-community',
  requireConfigFile: false,
  "rules": {
    "react-native/no-inline-styles": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
};
