module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@styles": "./src/styles",
          "@navigation": "./src/navigation",
          "@svg": "./src/assets/svg",
          "@redux": "./src/redux",
        },
      },
    ],
  ],
};
