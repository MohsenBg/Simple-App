import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import PanelBalance from "@components/payout/PanelBalance";
import { FullScreenSize } from "@/function/Size";
import { SateContext } from "@/Contexts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 135,
  },
  touchable: {
    margin: 0,
    padding: 0,
    zIndex: 5,
    width: FullScreenSize().width,
    height: FullScreenSize().height,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  box1: {
    padding: 18,
    borderRadius: 10,
    width: "100%",
    minHeight: 400,
    backgroundColor: "rgba(40,40,55,.8)",
    shadowRadius: 10,
  },
  TextTotalBalance: {
    fontSize: 20,
    color: "#797A84",
    fontFamily: "URWGeometricLight",
    textShadowRadius: 3,
    textShadowColor: "black",
  },
  small: {
    color: "#797A84",
    fontFamily: "URWGeometricLight",
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  btn: {
    flexDirection: "row",
    flex: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D2F3E",
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
  containerTextRow: {
    marginTop: 10,
    flexDirection: "row",
  },
  TextRowL: {
    fontSize: 16,
    color: "#797A84",
    fontFamily: "URWGeometricM",
    flex: 0.5,
  },
  Right: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  TextRowR: {
    fontSize: 18,
    textAlign: "right",
    color: "white",
    fontFamily: "URWGeometricM",
  },
  box2: {
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
    minHeight: 50,
    backgroundColor: "rgba(40,40,55,.8)",
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  TransactionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#797A84",
    fontFamily: "URWGeometricBold",
  },
  box3: {
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
    minHeight: 125,
    backgroundColor: "rgba(40,40,55,.8)",
    shadowRadius: 10,
  },
});

const Balance = () => {
  const { setTitle } = useContext(SateContext);

  const [panelISOpen, setPanelISOpen] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      {panelISOpen ? (
        <Pressable
          style={styles.touchable}
          onPress={() => setPanelISOpen(false)}
        />
      ) : null}
      <View style={styles.box1}>
        <Text style={styles.TextTotalBalance}>Total balance</Text>
        <Text
          style={[
            styles.TextTotalBalance,
            { color: "#ffffff", fontSize: 30, fontFamily: "URWGeometricM" },
          ]}
        >
          0.0 BTC
        </Text>
        <Text style={styles.small}>≈ 0.0 $</Text>
        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => setTitle("Top up")}
            style={[styles.btn, { marginRight: 5 }]}
          >
            <IconMaterialCommunityIcons name="redo" style={styles.IconStyle} />
            <Text style={styles.TextBtn}>Top up</Text>
          </Pressable>
          <Pressable
            onPress={() => setTitle("Wiredraw")}
            style={[styles.btn, { marginLeft: 5 }]}
          >
            <IconMaterialCommunityIcons
              name="undo"
              style={[styles.IconStyle]}
            />
            <Text style={styles.TextBtn}>Wiredraw</Text>
          </Pressable>
        </View>
        <View style={styles.containerTextRow}>
          <Text style={styles.TextRowL}>In wallets</Text>
          <View style={styles.Right}>
            <Text style={styles.TextRowR}>0.0 $</Text>
            <Text style={[styles.small, { textAlign: "right" }]}>
              ≈ 0.0 BTC
            </Text>
          </View>
        </View>
        <View style={styles.containerTextRow}>
          <Text style={styles.TextRowL}>In deposits</Text>
          <View style={styles.Right}>
            <Text style={styles.TextRowR}>0.0 $</Text>
            <Text style={[styles.small, { textAlign: "right" }]}>
              ≈ 0.0 BTC
            </Text>
          </View>
        </View>
        <View style={styles.containerTextRow}>
          <Text style={styles.TextRowL}>In the mining account</Text>
          <View style={styles.Right}>
            <Text style={styles.TextRowR}>0.0 $</Text>
            <Text style={[styles.small, { textAlign: "right" }]}>
              ≈ 0.0 BTC
            </Text>
          </View>
        </View>
        <View style={styles.containerTextRow}>
          <Text style={styles.TextRowL}>Awaiting payout</Text>
          <View style={styles.Right}>
            <Text style={styles.TextRowR}>0.0 $</Text>
            <Text style={[styles.small, { textAlign: "right" }]}>
              ≈ 0.0 BTC
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.box2}
        onPress={() => setTitle("Transaction History")}
      >
        <IconMaterialCommunityIcons
          style={styles.IconStyle}
          name="script-text-outline"
        />
        <Text style={styles.TransactionText}>Transaction History</Text>
      </Pressable>
      <View style={[styles.box3, { position: "relative" }]}>
        <View
          style={[
            styles.containerTextRow,
            { alignItems: "center", paddingHorizontal: 20 },
          ]}
        >
          <Image
            source={require("../../assets/Images/btc-logo.png")}
            style={{
              width: 25,
              height: 25,
              marginTop: 3,
            }}
          />
          <Text
            style={[
              styles.TextTotalBalance,
              {
                color: "#ffffff",
                fontSize: 20,
                fontFamily: "URWGeometricM",
                marginLeft: 10,
              },
            ]}
          >
            Bitcoin
          </Text>
          <View style={{ flex: 1 }}>
            <IconEntypo
              onPress={() => setPanelISOpen(true)}
              name="dots-three-vertical"
              style={[
                styles.IconStyle,
                { fontSize: 18, textAlign: "right", marginRight: -5 },
              ]}
            />
            <PanelBalance panelISOpen={panelISOpen} />
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "rgba(152,153,162,.1)",
            marginTop: 8,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={[
              styles.TextTotalBalance,
              {
                color: "#ffffff",
                fontSize: 20,
                fontFamily: "URWGeometricM",
              },
            ]}
          >
            0.0
          </Text>
          <Text
            style={[
              styles.TextTotalBalance,
              { fontSize: 20, fontFamily: "URWGeometricM", marginLeft: 5 },
            ]}
          >
            BTC
          </Text>
        </View>
        <Text style={[styles.small, { paddingHorizontal: 20 }]}>≈ 0.0 $</Text>
      </View>
    </View>
  );
};

export default Balance;
