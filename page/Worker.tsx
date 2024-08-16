import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, Pressable, Animated, ActivityIndicator } from "react-native";
import { FullScreenSize } from "@/function/Size";
import Loading from "@components/loading/Loading";
import Toast from "react-native-toast-message";


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
  const TransitionX = useState(new Animated.Value(0))[0];
  const [loading, setLoading] = useState(true);
  const [clickedAddWorker, setClickedAddWorker] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (clickedAddWorker) {
        Toast.show({
          type: "error",
          text1: "Unable to connect to the server.",
          text2: "Please check your network."
        });
        setClickedAddWorker(false);
      }
    }, 5000);
  }, [clickedAddWorker])

  return (
    <>
      {clickedAddWorker ?
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: FullScreenSize().width,
              height: FullScreenSize().height - 70,
            }}
          >
            <ActivityIndicator animating={true} size={50} />
          </View>
        </View>
        :
        <View style={styles.container}>
          {!loading ? (
            <>
              <Image
                source={require("@assets/Images/IconAdd.png")}
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
              <Pressable
                onPress={() => setClickedAddWorker(true)}
                style={styles.buttonContainer}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Linotte_SemiBold",
                  }}
                >
                  Add
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </View>
      }
    </>
  );
};

export default Worker;
