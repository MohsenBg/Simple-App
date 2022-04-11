import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SateContext } from "../../Contexts";
import { FullScreenSize } from "../../Function/Size";
import Export from "../Export/Export";
import NetWork from "../Network/NetWork";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontFamily: "Raleway_Bold",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },

  IconBack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Empty = () => {
  const [loading, setLoading] = useState(true);
  const Opacity = useState(new Animated.Value(0))[0];
  const Top = useState(new Animated.Value(FullScreenSize().height + 50))[0];
  const { Title, setTitle } = useContext(SateContext);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      setTitle("");
      return true;
    });
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", () => {
        setTitle("");
        return true;
      });
    };
  }, []);

  useEffect(() => {
    let range = { min: 3000, max: 6000 };
    let delta = range.max - range.min;
    const randomTime = Math.round(range.min + Math.random() * delta);

    if (Title === "Export") {
      setTimeout(() => {
        setLoading(false);
      }, randomTime);
    } else {
      setLoading(true);
    }
  }, [Title]);

  useEffect(() => {
    if (Title !== "") {
      Animated.parallel([
        Animated.timing(Opacity, {
          useNativeDriver: false,
          duration: 250,
          delay: 150,
          toValue: 1,
        }),
        Animated.timing(Top, {
          useNativeDriver: false,
          duration: 250,
          toValue: 0,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(Opacity, {
          useNativeDriver: false,
          duration: 250,
          toValue: 0,
        }),
        Animated.timing(Top, {
          useNativeDriver: false,
          duration: 250,
          delay: 150,
          toValue: FullScreenSize().height + 50,
        }),
      ]).start();
    }
  }, [Title]);

  return (
    <Animated.View
      style={{
        backgroundColor: "#202231",
        width: FullScreenSize().width,
        height: FullScreenSize().height,
        position: "absolute",
        left: 0,
        opacity: Opacity,
        top: Top,
        zIndex: 10,
      }}
    >
      <NetWork />
      {Title !== "" ? (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#2D2F3E",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              height: 60,
              padding: 10,
            }}
          >
            <TouchableOpacity
              style={styles.IconBack}
              onPress={() => setTitle("")}
            >
              <Icon name="arrowleft" color="white" style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <View>
              <Text style={styles.Text}>{Title}</Text>
            </View>
          </View>
          {loading ? (
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
          ) : (
            <Export />
          )}
        </View>
      ) : null}
    </Animated.View>
  );
};

export default Empty;
