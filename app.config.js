export default {
    expo: {
      name: "Chat App ",
      slug: "Chat App",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        apiKey: "AIzaSyCSDqRzp8VgUvrYD8UrbCa7asY79i6x4XU",
  authDomain: "chat-app-7e901.firebaseapp.com",
  projectId: "chat-app-7e901",
  storageBucket: "chat-app-7e901.appspot.com",
  messagingSenderId: "213579861617",
  appId: "1:213579861617:web:38afdefee3189d4c2a95d0",
      },
    },
  };
  