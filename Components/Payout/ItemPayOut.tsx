import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";
import { items } from "../../Interface/Interface";
import IconArrow from "react-native-vector-icons/MaterialIcons";
import { Action_Type } from "../../Items/Payout&Incame";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 7,
    borderRadius: 10,
  },
  row1: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  TextDataContainer: {
    flexDirection: "row",
    flex: 0.6,
  },
  TextDay: {
    fontFamily: "URWGeometricBold",
    color: "white",
    paddingRight: 10,
  },
  TextTime: {
    fontFamily: "URWGeometricLight",
    color: "white",
  },
  TextAmount: {
    fontFamily: "URWGeometricBold",
    color: "white",
    flex: 0.4,
  },
  containerArrow: {
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  IconArrow: {
    fontSize: 18,
    color: "#A9AFBB",
  },
});
interface Props {
  item: items;
}

const UriBase = "https://blockchair.com/bitcoin/transaction/";
const ItemPayOut = ({ item }: Props) => {
  const value = useState(new Animated.Value(60))[0];
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  const handelOpenPanel = () => {
    if (IsOpen)
      Animated.timing(value, {
        toValue: 60,
        duration: 200,
        useNativeDriver: false,
      }).start();
    else
      Animated.timing(value, {
        toValue: 135,
        duration: 200,
        useNativeDriver: false,
      }).start();
    setIsOpen(!IsOpen);
  };

  return (
    <Animated.View
      key={item.Id}
      style={
        IsOpen
          ? [styles.item, { height: value, backgroundColor: "#2D2F3E" }]
          : [
              styles.item,
              { height: value, backgroundColor: "rgba(42,43,56,.8)" },
            ]
      }
    >
      <View style={styles.row1}>
        <View style={styles.TextDataContainer}>
          <Text style={styles.TextDay}>{item.Date.split(" ")[0]}</Text>
          <Text style={styles.TextTime}>{item.Date.split(" ")[1]}</Text>
        </View>
        <Text style={styles.TextAmount}>{item.Amount}</Text>
        <TouchableOpacity
          style={styles.containerArrow}
          onPress={handelOpenPanel}
        >
          <IconArrow
            name="keyboard-arrow-up"
            style={
              IsOpen
                ? [styles.IconArrow, { transform: [{ rotate: "180deg" }] }]
                : [styles.IconArrow]
            }
          />
        </TouchableOpacity>
      </View>
      {IsOpen ? (
        <>
          <View
            style={{ backgroundColor: "rgba(152,153,162,.2)", height: 1 }}
          />
          <View style={{ paddingVertical: 10 }}>
            {item.ActionType === Action_Type.INCOMES && (
              <>
                <View style={[styles.row1, { height: 20, marginBottom: 5 }]}>
                  <Text
                    style={[
                      styles.TextDataContainer,
                      { color: "#A9AFBB", fontFamily: "URWGeometricLight" },
                    ]}
                  >
                    Rewards type
                  </Text>
                  <Text
                    style={[
                      styles.TextAmount,
                      { color: "#A9AFBB", fontFamily: "URWGeometricLight" },
                    ]}
                  >
                    Avg. hashrate
                  </Text>
                </View>
                <View style={[styles.row1, { height: 20 }]}>
                  <Text style={[styles.TextDay, { flex: 0.6 }]}>
                    {item.Rewards}
                  </Text>
                  <Text style={[styles.TextDay, { flex: 0.4 }]}>
                    {item.Avg_hash} H/s
                  </Text>
                </View>
              </>
            )}
            {item.ActionType === Action_Type.PAY_OUT && (
              <>
                <View style={[styles.row1, { height: 20, marginBottom: 5 }]}>
                  <Text
                    style={[
                      styles.TextDataContainer,
                      {
                        color: "#A9AFBB",
                        fontFamily: "URWGeometricLight",
                        fontSize: 16,
                      },
                    ]}
                  >
                    Transaction Link
                  </Text>
                </View>
                <View style={[styles.row1, { height: 20, marginBottom: 5 }]}>
                  <Pressable
                    onPress={() => Linking.openURL(UriBase + item.Transaction)}
                  >
                    {({ pressed }) => (
                      <Text
                        numberOfLines={1}
                        style={{
                          fontFamily: "URWGeometricBold",
                          fontSize: 16,
                          color: "#6B5CE9",
                        }}
                      >
                        {item.Transaction}
                      </Text>
                    )}
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </>
      ) : null}
    </Animated.View>
  );
};

export default ItemPayOut;
