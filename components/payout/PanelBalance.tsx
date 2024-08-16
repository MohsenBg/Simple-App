import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  container: {
    top: -5,
    right: 0,
    position: "absolute",
  },
  background: {
    width: 150,
    backgroundColor: "#323341",
    zIndex: 5,
    borderRadius: 8,
  },
  btn: {
    flexDirection: "row",
    paddingLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    height: 45,
  },
  TextBtn: {
    fontFamily: "URWGeometricBold",
    color: "#A3A3AC",
  },
  IconStyle: {
    marginRight: 10,
    fontSize: 20,
    color: "#A3A3AC",
  },
});
interface props {
  panelISOpen: boolean;
}
const PanelBalance = ({ panelISOpen }: props) => {
  const heightContainer = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (panelISOpen) {
      Animated.timing(heightContainer, {
        useNativeDriver: false,
        toValue: 100,
        duration: 200,
      }).start();
    } else {
      Animated.timing(heightContainer, {
        useNativeDriver: false,
        toValue: 0,
        duration: 200,
      }).start();
    }
  }, [panelISOpen]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[{ height: heightContainer }, styles.background]}>
          {panelISOpen ? (
            <>
              <View style={[styles.btn, { marginRight: 5 }]}>
                <IconMaterialCommunityIcons
                  name="redo"
                  style={styles.IconStyle}
                />
                <Text style={styles.TextBtn}>Top up</Text>
              </View>
              <View style={[styles.btn, { marginLeft: 5 }]}>
                <IconMaterialCommunityIcons
                  name="undo"
                  style={[styles.IconStyle]}
                />
                <Text style={styles.TextBtn}>Wiredraw</Text>
              </View>
            </>
          ) : null}
        </Animated.View>
      </View>
    </>
  );
};

export default PanelBalance;
