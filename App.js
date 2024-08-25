// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
// // import { StatusBar } from "expo-status-bar";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image style={styles.tinyLogo} source={{ uri: "./assets/washcar.gif" }} />
//       <Text style={styles.text}>Let's Get Started</Text>
//       {/* <StatusBar style="auto" /> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   text: {
//     borderRadius: 10,
//     padding: 10,
//     color: "white",
//     fontSize: 28,
//     marginTop: "95%",
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000a0",
//   },
// });

import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox } from "react-native";

export default function App(props) {
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];

  // Ignore firebase v9 AsyncStorage warning
  React.useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
