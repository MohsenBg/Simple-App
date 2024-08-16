import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import { FullScreenSize } from "@/function/Size";
import { WalletTab } from "@interface/interface";
import Balance from "@/components/wallet/Balance";
import HeaderWallet from "@/components/wallet/HeaderWallet";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#2D2F3E",
    flex: 1,
  },
  Background: {
    marginTop: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#202231",
    flex: 1,
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});

const Tabs = [WalletTab.BALANCE, WalletTab.DEPOSITS];



const RenderData = ({ Tabs, index }: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: FullScreenSize().width,
        minHeight: FullScreenSize().height - 120,
      }}
    >
      {index == 0 && <Balance />}
      {index == 1 && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: FullScreenSize().width,
            minHeight: FullScreenSize().height - 200,
          }}
        >
          <ActivityIndicator animating={true} size={50} />
        </View>
      )}
    </ScrollView>
  );
};

const Wallet = () => {
  const TransitionX = useState(new Animated.Value(0))[0];
  const [Layout, setLayout] = useState(0);
  const scroll: React.MutableRefObject<FlatList<WalletTab> | null> =
    useRef(null);

  const handelScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.timing(TransitionX, {
      toValue: e.nativeEvent.contentOffset.x / 2,
      duration: 0,
      useNativeDriver: false,
    }).start();
    if (
      e.nativeEvent.contentOffset.x > FullScreenSize().width / 2 &&
      Layout != 1
    )
      setLayout(1);
    else if (
      e.nativeEvent.contentOffset.x < FullScreenSize().width / 2 &&
      Layout != 0
    )
      setLayout(0);
  };

  const MoveScroll = (index: number) => {
    switch (index) {
      case 0:
        scroll.current?.scrollToOffset({ offset: 0 });
        break;
      case 1:
        scroll.current?.scrollToEnd();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (Layout == 1) {
      timer = setInterval(() => {
        Toast.show({
          type: "error",
          text1: "Unable to connect to the server.",
          text2: "Please check your network."
        });
      }, 3000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [Layout]);

  return (
    <View style={styles.container}>
      <View style={styles.Background}>
        <HeaderWallet
          TransitionX={TransitionX}
          MoveScroll={MoveScroll}
          index={Layout}
        />
        <Animated.View
          style={{
            marginTop: -2,
            width: FullScreenSize().width / 2,
            backgroundColor: "#6B5EE0",
            height: 2.5,
            marginLeft: TransitionX,
          }}
        />
        <SafeAreaView>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            data={Tabs}
            renderItem={RenderData}
            bounces={false}
            onScroll={(e) => handelScroll(e)}
            ref={(ref) => (scroll.current = ref)}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Wallet;
