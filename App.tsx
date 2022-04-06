import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import useFonts from "./Hook/useFont";
import { ContextsInterface } from "./Interface/Interface";

export const NavigationContext: React.Context<ContextsInterface> =
  React.createContext({
    NavigationSelected: 1,
    setNavigationSelected: null,
  });

export default function App() {
  const [NavigationSelected, setNavigationSelected] = useState<number>(1);
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <NavigationContext.Provider
          value={{ NavigationSelected, setNavigationSelected }}
        >
          <View>
            <Header />
          </View>
          <StatusBar style="auto" />
          <View style={styles.NavigationComponent}>
            <Navigation />
          </View>
        </NavigationContext.Provider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    position: "relative",
    flex: 1,
    backgroundColor: "#202231",
  },
  NavigationComponent: {
    position: "absolute",
    bottom: 0,
  },
  HeaderComponent: {},
});
