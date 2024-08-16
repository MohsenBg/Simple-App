import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Pressable,
  Platform,
} from "react-native";
import Header from "@components/header/Header";
import Navigation from "@components/navigation/Navigation";
import HandelNavigationComponents from "@components/other/HandelComponents";
import useFonts from "@/hook/useFont";
import { NavigationContext, SateContext } from "@/Contexts";
import { FullScreenSize } from "@/function/Size";
import * as Sentry from "sentry-expo";
import PanelCoinChanger from "@components/other/PanelCoinChanger";
import { ActivityIndicator } from "react-native";
import Empty from "@components/empty/Empty";
import AppSplashScreen from "@/components/loading/AppSplashScreen";
import Toast from 'react-native-toast-message';


if (Platform.OS === "android") {
  //@ts-expect-error
  if (!ActivityIndicator.defaultProps) ActivityIndicator.defaultProps = {};
  //@ts-expect-error
  ActivityIndicator.defaultProps.color = "#2196F2";
}

Sentry.init({
  dsn: "https://fbe3e154473b4f3cb4d02c9d0a99365f@o1193295.ingest.sentry.io/6315515",
  enableInExpoDevelopment: true,
  debug: true,
});

Sentry.Native;

Sentry.Browser;

export default function App() {
  const [NavigationSelected, setNavigationSelected] = useState<number>(1);
  const [IsReady, SetIsReady] = useState(false);
  const [IsPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [Title, setTitle] = useState<string>("");

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const LoadFonts = async () => {
    await useFonts();
    await delay(3000)
  };

  const Close = () => {
    setIsPanelOpen(false);
  };

  if (!IsReady) {
    return (
      <AppSplashScreen
        onAsyncLoad={LoadFonts}
        onFinished={() => SetIsReady(true)}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.toast}>
          <Toast />
        </View>
        <SateContext.Provider value={{ Title, setTitle }}>
          <NavigationContext.Provider
            value={{ NavigationSelected, setNavigationSelected }}
          >
            <StatusBar backgroundColor="#202231" />
            <Empty />
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
                <Pressable
                  onPress={() => Close()}
                  style={styles.PanelChangeCoin}
                ></Pressable>
                <PanelCoinChanger Close={Close} />
              </View>
            ) : null}

          </NavigationContext.Provider>
        </SateContext.Provider>
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
  toast: {
    zIndex: 1000,
  }
});
