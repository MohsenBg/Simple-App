import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconArrow from "react-native-vector-icons/MaterialIcons";

import { NavigationContext } from "../../App";
const style = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#2D2F3E",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "10px",
  },
  Text: {
    fontFamily: "Raleway_Bold",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  userIcon: {
    position: "absolute",
    display: "flex",
    top: "12px",
    left: "10px",
    paddingRight: 10,
    height: "100%",
    fontSize: 25,
  },
  TextBtc: {
    paddingRight: 5,
    fontFamily: "Raleway_Bold",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  TextSymbol: {
    fontFamily: "Raleway_Bold",
    color: "#A9AFBB",
    fontSize: 18,
  },
  ContainerTextBtc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  IconArrow: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    color: "#A9AFBB",
    paddingLeft: 5,
  },
});

const Header = () => {
  const { NavigationSelected, setNavigationSelected } =
    useContext(NavigationContext);

  const [Title, setTitle] = useState<string>("Current hashrate");

  useEffect(() => {
    switch (NavigationSelected) {
      case 1:
        setTitle("Current hashrate");
        break;
      case 2:
        setTitle("Workers");
        break;
      case 3:
        setTitle("Incomes and payouts");
        break;
      case 4:
        setTitle("Wallet");
        break;
      default:
        break;
    }
  }, [NavigationSelected]);

  return (
    <>
      <View style={style.container}>
        <Icon name="account-circle" color="white" style={style.userIcon} />
        <View>
          <Text style={style.Text}>{Title}</Text>
          {NavigationSelected != 4 ? (
            <View style={style.ContainerTextBtc}>
              <Text style={style.TextBtc}>Bitcoin</Text>
              <Text style={style.TextSymbol}>(BTC)</Text>
              <TouchableHighlight>
                <IconArrow name="keyboard-arrow-down" style={style.IconArrow} />
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </View>
      <Text></Text>
    </>
  );
};

export default Header;
