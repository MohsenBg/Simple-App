import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  box1: {
    padding: 18,
    borderRadius: 10,
    width: "100%",
    minHeight: 400,
    backgroundColor: "#242635",
    shadowRadius: 10,
  },
  TextTotalBalance: {
    fontSize: 20,
    color: "#797A84",
    fontFamily: "URWGeometricLight",
  },
  small: {
    color: "#797A84",
    fontFamily: "URWGeometricLight",
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    flexDirection: "row",
    flex: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D2F3E",
    height: 45,
  },
  TextBtn: {
    fontFamily: "URWGeometricBold",
    color: "#A3A3AC",
  },
});

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.TextTotalBalance}>Total balance</Text>
        <Text
          style={[
            styles.TextTotalBalance,
            { color: "#ffffff", fontSize: 30, fontFamily: "URWGeometricM" },
          ]}
        >
          0.0 BTC
        </Text>
        <Text style={styles.small}>≈ 0.0 $</Text>
        <View style={styles.btnContainer}>
          <View style={[styles.btn, { marginRight: 5 }]}>
            <Text style={styles.TextBtn}>Top up</Text>
          </View>
          <View style={[styles.btn, { marginLeft: 5 }]}>
            <Text style={styles.TextBtn}>Wiredraw</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Balance;
