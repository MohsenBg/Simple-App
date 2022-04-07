import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContext } from "../../Contexts";
import Main from "../Main/Main";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HandelNavigationComponents = () => {
  const { NavigationSelected } = useContext(NavigationContext);
  return (
    <View style={styles.container}>{NavigationSelected == 1 && <Main />}</View>
  );
};

export default HandelNavigationComponents;
