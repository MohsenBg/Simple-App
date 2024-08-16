import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContext } from "@/Contexts";
import { FullScreenSize } from "@/function/Size";


const Navigation = () => {
  const { NavigationSelected, setNavigationSelected } =
    useContext(NavigationContext);

  const Navigate = (number: number) => {
    setNavigationSelected(number);
  };

  const IconStyles = [
    NavigationSelected == 1 ? style.IconColorActive : style.IconColorDeActive,
    NavigationSelected == 2 ? style.IconColorActive : style.IconColorDeActive,
    NavigationSelected == 3 ? style.IconColorActive : style.IconColorDeActive,
    NavigationSelected == 4 ? style.IconColorActive : style.IconColorDeActive,
  ];
  return (
    <View style={style.NavigationContainer}>
      <Pressable style={style.IconContainer} onPress={() => Navigate(1)}>
        <>
          <IconEntypo
            style={[IconStyles[0], style.Icons]}
            name="home"
            size={25}
          />
          <Text style={[IconStyles[0], style.Text]}>Main</Text>
        </>
      </Pressable>
      <Pressable style={style.IconContainer} onPress={() => Navigate(2)}>
        <>
          <IconMaterial
            style={[IconStyles[1], style.Icons]}
            name="devices"
            size={25}
          />
          <Text style={[IconStyles[1], style.Text]}>Workers</Text>
        </>
      </Pressable>
      <Pressable style={style.IconContainer} onPress={() => Navigate(3)}>
        <>
          <IconFontAwesome5
            style={[IconStyles[2], style.Icons]}
            name="money-bill"
            size={25}
          />
          <Text style={[IconStyles[2], style.Text]}>Payouts</Text>
        </>
      </Pressable>
      <Pressable style={style.IconContainer} onPress={() => Navigate(4)}>
        <>
          <IconMaterialCommunity
            style={[IconStyles[3], style.Icons]}
            name="wallet"
            size={25}
          />
          <Text style={[IconStyles[3], style.Text]}>Wallet</Text>
        </>
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: "#1B1D2C",
    width: FullScreenSize().width,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  IconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Icons: {
    height: 25,
  },
  IconColorDeActive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8B8B93",
  },
  IconColorActive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6B5CE9",
  },
  Text: {
    height: 20,
    fontSize: 12,
    fontFamily: "Kanit_Regular",
  },
});
export default Navigation;
