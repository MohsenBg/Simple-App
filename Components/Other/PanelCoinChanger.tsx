import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
const style = StyleSheet.create({
  container: {
    zIndex: 6,
    flex: 0.55,
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#1B1D2C",
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  Text: {
    height: 50,
    color: "#9899A2",
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(152,153,162,.1)",
  },
  CoinContainer: {
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(152,153,162,.1)",
  },
  TextBtc: {
    paddingHorizontal: 5,
    fontFamily: "Raleway_Bold",
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  TextSymbol: {
    fontFamily: "Raleway_Bold",
    color: "#A9AFBB",
    fontSize: 16,
  },
  Icon: {
    paddingRight: 5,
    color: "#6B5EE0",
    fontSize: 20,
  },
  TextCancel: {
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(152,153,162,.1)",
    paddingHorizontal: 5,
    fontFamily: "Raleway_Bold",
    textAlign: "center",
    fontSize: 16,
    height: 50,
    paddingTop: 10,
    width: "100%",
    color: "#6B5EE0",
  },
});

const PanelCoinChanger = ({ Close }: any) => {
  return (
    <View style={style.container}>
      <Text style={style.Text}>Coin</Text>
      <TouchableOpacity onPress={Close}>
        <View style={style.CoinContainer}>
          <Icon name="check" style={style.Icon} />
          <Image
            source={require("../../assets/Images/btc-logo.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={style.TextBtc}>Bitcoin</Text>
          <Text style={style.TextSymbol}>(BTC)</Text>
        </View>
      </TouchableOpacity>
      <Text style={style.TextCancel} onPress={Close}>
        Cancel
      </Text>
    </View>
  );
};

export default PanelCoinChanger;
