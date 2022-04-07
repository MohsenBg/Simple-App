import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { DeviceType, device_type } from "../../device";

const type = DeviceType.WEB == device_type ? "window" : "screen";
const imageHeight = Math.round((Dimensions.get(type).width * 9) / 16);

const style = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
  },
  Background: {
    marginTop: 80,
    flex: 1,
    backgroundColor: "#2D2F3E",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: imageHeight + 100,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    zIndex: -1,
  },
  TextHashBig: {
    textAlign: "center",
    fontFamily: "Brevia_Semibold",
    color: "white",
    fontSize: 25,
    zIndex: 2,
  },
  Chart: {
    paddingHorizontal: 20,
    marginTop: -15,
  },
  box: {
    borderRadius: 3,
    backgroundColor: "#1B1D2C",
    width: "100%",
    // minHeight: 1000,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    paddingVertical: 10,
  },
  row: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  textHash: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A5A5AD",
    flex: 0.5,
  },
  textResult: {
    fontFamily: "Brevia_Semibold",
    textAlign: "center",
    color: "white",
    fontSize: 25,
    marginBottom: 5,
    flex: 0.5,
    display: "flex",
    justifyContent: "flex-end",
  },
});
const Main = () => {
  return (
    <>
      <View style={style.Background} />
      <View style={style.container}>
        <Text style={style.TextHashBig}>0.00 H/s</Text>
        <View style={style.Chart}>
          <Image
            resizeMode={"contain"}
            source={require("../../assets/Images/Chart.png")}
            style={{ width: "100%", height: imageHeight }}
          />
        </View>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <View style={style.box}>
            <View style={style.row}>
              <Text style={style.textHash}>Avg. hashrate /{"\n"}1h</Text>
              <Text style={style.textResult}>0.00 H/s</Text>
            </View>
            <View style={style.row}>
              <Text style={style.textHash}>Avg. hashrate /{"\n"}24h</Text>
              <Text style={style.textResult}>0.00 H/s</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Main;
