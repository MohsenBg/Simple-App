import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { Action_Type } from "@/items/Payout&Incame";
import Calendars from "./Calendars";
import { SateContext } from "@/Contexts";

const styles = StyleSheet.create({
  containerPayOut: {
    width: "100%",
    height: 60,
    padding: 15,
    paddingTop: 5,
  },
  tabs: {
    width: "100%",
    flexDirection: "row",
  },
  DefaultText: {
    fontFamily: "Raleway_Bold",
    color: "white",
    fontSize: 16,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.8,
  },
  right: {
    marginTop: 4,
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  DefaultIcon: {
    textAlign: "right",
    color: "white",
    fontSize: 23,
  },
  IconCalender: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 13,
    height: 13,
    backgroundColor: "#202231",
    borderRadius: 200,
  },

  light: {
    fontSize: 12,
    color: "#A9AFBB",
  },
});

const HeaderPayout = ({ scrollByBtn, ActionType }: any) => {
  const [IsCalenderOpen, setIsCalenderOpen] = useState(false);
  const { setTitle } = useContext(SateContext);
  return (
    <View style={styles.containerPayOut}>
      <View style={styles.tabs}>
        <View style={styles.left}>
          <Pressable onPress={() => scrollByBtn(Action_Type.INCOMES)}>
            <Text
              style={
                ActionType === Action_Type.INCOMES
                  ? [styles.DefaultText, { marginRight: 50, color: "white" }]
                  : [styles.DefaultText, { marginRight: 50, color: "#A9AFBB" }]
              }
            >
              Incomes
            </Text>
          </Pressable>
          <Pressable onPress={() => scrollByBtn(Action_Type.PAY_OUT)}>
            <Text
              style={
                ActionType === Action_Type.PAY_OUT
                  ? [styles.DefaultText, { color: "white" }]
                  : [styles.DefaultText, { color: "#A9AFBB" }]
              }
            >
              Payouts
            </Text>
          </Pressable>
        </View>
        <View style={styles.right}>
          <Pressable>
            <IconMaterialCommunityIcons
              name="export-variant"
              style={[styles.DefaultIcon, { marginRight: 20 }]}
              onPress={() => setTitle("Export")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setIsCalenderOpen(!IsCalenderOpen);
            }}
          >
            <IconMaterialCommunityIcons
              name="calendar-blank"
              style={styles.DefaultIcon}
            />
            <View style={styles.IconCalender}>
              <IconIonicons
                name="settings-sharp"
                style={{ fontSize: 13, color: "white" }}
              />
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={[styles.light, { flex: 0.6 }]}>Data</Text>
        <Text style={[styles.light, { flex: 0.4 }]}>Sum</Text>
      </View>
      {IsCalenderOpen ? (
        <Calendars setIsCalenderOpen={setIsCalenderOpen} />
      ) : null}
    </View>
  );
};

export default HeaderPayout;
