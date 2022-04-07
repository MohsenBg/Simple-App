import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import HandelNavigationComponents from "./Components/Other/HandelComponents";
import useFonts from "./Hook/useFont";
import { NavigationContext } from "./Contexts";
import { FullScreenSize } from "./Function/Size";
import * as Sentry from "sentry-expo";
import PanelCoinChanger from "./Components/Other/PanelCoinChanger";

Sentry.init({
  dsn: "https://fbe3e154473b4f3cb4d02c9d0a99365f@o1193295.ingest.sentry.io/6315515",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

// Access any @sentry/react-native exports via:
Sentry.Native;

// Access any @sentry/browser exports via:
Sentry.Browser;

export default function App() {
  const [NavigationSelected, setNavigationSelected] = useState<number>(1);
  const [IsReady, SetIsReady] = useState(false);
  const [IsPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const LoadFonts = async () => {
    await useFonts();
  };
  const Close = () => {
    setIsPanelOpen(false);
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
          <StatusBar backgroundColor="#202231" />
          <View style={styles.HeaderComponent}>
            <Header setIsPanelOpen={setIsPanelOpen} />
          </View>
          <View style={{ flex: 1, zIndex: 1 }}>
            <HandelNavigationComponents />
          </View>
          <View style={styles.NavigationComponent}>
            <Navigation />
          </View>
          {IsPanelOpen ? (
            <View style={styles.PanelChangeCoin}>
              <TouchableOpacity
                onPress={() => Close()}
                style={styles.PanelChangeCoin}
              ></TouchableOpacity>
              <PanelCoinChanger Close={Close} />
            </View>
          ) : null}
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
    padding: 0,
    margin: 0,
  },
  NavigationComponent: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
  HeaderComponent: {
    position: "absolute",
    top: 0,
    width: FullScreenSize().width,
    zIndex: 2,
  },
  PanelChangeCoin: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 5,
    backgroundColor: "rgba(0,0,0,.4)",
    width: FullScreenSize().width,
    height: FullScreenSize().height,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 18,
  },
});
