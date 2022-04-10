import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { FullScreenSize } from "../../Function/Size";
import Loading from "../loading/Loading";
const styles = StyleSheet.create({
  container: {
    // marginTop: 90,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B5EE0",
    height: 50,
    width: FullScreenSize().width - 50,
  },
});

const Worker = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <Image
            source={require("../../assets/Images/IconAdd.png")}
            style={{
              marginBottom: 20,
              marginLeft: 20,
              width: 105,
              height: 105,
            }}
          />
          <Text
            style={{
              color: "white",
              fontFamily: "Linotte_SemiBold",
              fontSize: 16,
            }}
          >
            Add worker
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Linotte_SemiBold",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </View>
  );
};

export default Worker;
