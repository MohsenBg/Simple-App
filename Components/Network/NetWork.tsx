import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FullScreenSize } from "../../Function/Size";
import NetInfo from "@react-native-community/netinfo";
import { SateContext } from "../../Contexts";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: FullScreenSize().width,
    height: FullScreenSize().height,
    zIndex: 5,
    backgroundColor: "#202231",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B5EE0",
    height: 50,
    width: FullScreenSize().width - 80,
  },
});

const NetWork = () => {
  const { setTitle } = useContext(SateContext);

  const [isNetWorkError, setIsNetWorkError] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener((networkState) => {
      if (!networkState.isConnected && !isNetWorkError) {
        setIsNetWorkError(true);
        setTitle("Network error");
      }
    });
  }, []);

  const CheckNetWork = async () => {
    if ((await NetInfo.fetch()).isConnected) {
      setIsNetWorkError(false);
      setTitle("");
    }
  };

  return (
    <>
      {isNetWorkError ? (
        <View style={styles.container}>
          <View
            style={{
              marginBottom: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "URWGeometricBold",
                fontSize: 25,
                marginBottom: 10,
              }}
            >
              Connection error
            </Text>
            <Text
              style={{
                color: "#909397",
                fontSize: 18,
                fontFamily: "URWGeometricR",
              }}
            >
              Check up your Internet contention.
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={CheckNetWork}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Linotte_SemiBold",
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              position: "absolute",
              bottom: -50,
              width: 200,
              height: 200,
            }}
            source={require("../../assets/Images/emcd.png")}
            resizeMode="contain"
          />
        </View>
      ) : null}
    </>
  );
};

export default NetWork;
