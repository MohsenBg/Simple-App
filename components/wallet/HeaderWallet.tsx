import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { FullScreenSize } from "@/function/Size";

const styles = StyleSheet.create({
  container: {
    width: FullScreenSize().width,
  },
  DefaultText: {
    textAlign: "center",
    fontFamily: "URWGeometricBold",
    flex: 0.5,
    color: "#909397", //rgba(107,94,224,1) => -100,-100,+.4,=>
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "rgba(144,147,151,.1)",
  },
});

interface Props {
  TransitionX: Animated.Value;
  MoveScroll: (index: number) => void;
  index: number;
}

const HeaderWallet = ({ TransitionX, MoveScroll, index }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          onPress={() => MoveScroll(0)}
          style={
            index === 0
              ? [styles.DefaultText, { color: "#6B5EE0" }]
              : [styles.DefaultText]
          }
        >
          Balance
        </Text>
        <Text
          style={
            index === 1
              ? [styles.DefaultText, { color: "#6B5EE0" }]
              : [styles.DefaultText]
          }
          onPress={() => MoveScroll(1)}
        >
          Deposits
        </Text>
      </View>
    </View>
  );
};

export default HeaderWallet;
