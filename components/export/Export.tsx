import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import { FullScreenSize } from "@/function/Size";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as WebBrowser from "expo-web-browser"

const styles = StyleSheet.create({
  container: {
    height: FullScreenSize().height - 60,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    marginBottom: 50,
    backgroundColor: "#202231",
    width: FullScreenSize().width - 80,
    minHeight: 200,
    borderRadius: 10,
    alignItems: "center",
  },
  white: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontFamily: "Linotte_SemiBold",
  },
  buttonContainer: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B5EE0",
    height: 50,
    width: FullScreenSize().width - 100,
  },
  Icon: {
    marginRight: 10,
    color: "white",
    fontSize: 20,
  },
});

const Export = () => {

  const getFile = async (type: string) => {
    let Link = "";
    switch (type) {
      case "PDF":
        Link =
          "https://feji.us/dbto4z";
        break;
      case "XLSX":
        Link =
          "https://feji.us/cm4l75";
        break;

      default:
        break;
    }
    await WebBrowser.openBrowserAsync(Link);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text
          style={{
            color: "white",
            fontFamily: "URWGeometricBold",
            fontSize: 25,
            marginBottom: 10,
          }}
        >
          Export File
        </Text>
        <Text
          style={{
            color: "#909397",
            fontSize: 18,
            fontFamily: "URWGeometricR",
            marginBottom: 25,
          }}
        >
          Select Type of file you want export.
        </Text>
        <Pressable
          style={[styles.buttonContainer, { marginBottom: 10 }]}
          onPress={() => getFile("PDF")}
        >
          <IconAntDesign name="pdffile1" style={styles.Icon} />
          <Text style={[styles.white, { fontSize: 16 }]}>PDF</Text>
        </Pressable>
        <Pressable
          onPress={() => getFile("XLSX")}
          style={styles.buttonContainer}>
          <IconMaterialCommunityIcons
            name="microsoft-excel"
            style={styles.Icon}
          />
          <Text
            style={[styles.white, { fontSize: 16 }]}
          >
            XLSX
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Export;