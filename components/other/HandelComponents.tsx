import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContext } from "../../Contexts";
import Main from "../../page/Main";
import Payout from "../payout/Payout";
import Wallet from "../../page/Wallet";
import Worker from "../../page/Worker";

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
