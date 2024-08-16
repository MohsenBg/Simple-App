import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconArrow from "react-native-vector-icons/MaterialIcons";
import { NavigationContext, SateContext } from "@/Contexts";

const Header = ({ setIsPanelOpen }: any) => {
  const { NavigationSelected, setNavigationSelected } =
    useContext(NavigationContext);

  const [Title, setTitle] = useState<string>("Current");
  useEffect(() => {
    switch (NavigationSelected) {
      case 1:
        setTitle("Current");
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
  const StateC = useContext(SateContext);

  return (
    <View>
      <View style={style.container}>
        <Icon
          name="account-circle"
          color="white"
          style={style.userIcon}
          onPress={() => StateC.setTitle("Account")}
        />
        <View>
          <Text style={style.Text}>{Title}</Text>
          {NavigationSelected != 4 ? (
            <View style={style.ContainerTextBtc}>
              <Text style={style.TextBtc}>Bitcoin</Text>
              <Pressable onPress={() => setIsPanelOpen(true)}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={style.TextSymbol}>(BTC)</Text>
                  <IconArrow
                    name="keyboard-arrow-down"
                    style={style.IconArrow}
                  />
                </View>
              </Pressable>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#2D2F3E",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
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
    top: 12,
    left: 10,
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

export default Header;
