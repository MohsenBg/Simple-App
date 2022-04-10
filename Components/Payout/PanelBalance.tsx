import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});

const PanelBalance = () => {
  return (
    <View style={styles.container}>
      <Text>PanelBalance</Text>
    </View>
  );
};

export default PanelBalance;
