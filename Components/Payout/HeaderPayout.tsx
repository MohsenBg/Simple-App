import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FullScreenSize } from "../../Function/Size";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { Action_Type } from "../../Items/Payout&Incame";
import Calendars from "./Calendars";

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
    fontSize: 18,
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

const HeaderPayout = ({ setActionType, ActionType }: any) => {
  const [IsCalenderIsOpen, setIsCalenderIsOpen] = useState(false);
  return (
    <View style={styles.containerPayOut}>
      <View style={styles.tabs}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => setActionType(Action_Type.INCOMES)}>
            <Text
              style={
                ActionType === Action_Type.INCOMES
                  ? [styles.DefaultText, { marginRight: 50, color: "white" }]
                  : [styles.DefaultText, { marginRight: 50, color: "#A9AFBB" }]
              }
            >
              Incomes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActionType(Action_Type.PAY_OUT)}>
            <Text
              style={
                ActionType === Action_Type.PAY_OUT
                  ? [styles.DefaultText, { color: "white" }]
                  : [styles.DefaultText, { color: "#A9AFBB" }]
              }
            >
              Payouts
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <TouchableOpacity>
            <IconSimpleLineIcons
              name="question"
              style={[styles.DefaultIcon, { marginRight: 20 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsCalenderIsOpen(!IsCalenderIsOpen)}
          >
            <IconMaterialCommunityIcons
              name="calendar-blank"
              style={styles.DefaultIcon}
            />
            <View style={styles.IconCalender}>
              <IconIonicons
                name="md-settings-sharp"
                style={{ fontSize: 13, color: "white" }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={[styles.light, { flex: 0.6 }]}>Data</Text>
        <Text style={[styles.light, { flex: 0.4 }]}>Sum</Text>
      </View>
      {IsCalenderIsOpen ? (
        <Calendars setIsCalenderIsOpen={setIsCalenderIsOpen} />
      ) : null}
    </View>
  );
};

export default HeaderPayout;
