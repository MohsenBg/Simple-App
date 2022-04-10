import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContext } from "../../Contexts";
import Main from "../Main/Main";
import Payout from "../Payout/Payout";
import Wallet from "../Wallet/Wallet";
import Worker from "../Worker/Worker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HandelNavigationComponents = () => {
  const { NavigationSelected } = useContext(NavigationContext);
  return (
    <View style={styles.container}>
      {NavigationSelected == 1 && <Main />}
      {NavigationSelected == 2 && <Worker />}
      {NavigationSelected == 3 && <Payout />}
      {NavigationSelected == 4 && <Wallet />}
    </View>
  );
};

export default HandelNavigationComponents;
