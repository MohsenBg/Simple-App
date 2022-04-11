import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { FullScreenSize } from "../../Function/Size";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "January",
    "February.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "January",
    "February.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayNames: ["S", "M", "T", "W", "T", "F", "S"],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
};
LocaleConfig.defaultLocale = "fr";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    zIndex: 5,
  },
  buttonContainer: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B5EE0",
    height: 50,
    marginVertical: 20,
  },
  Text: {
    fontSize: 16,
    fontFamily: "Linotte_SemiBold",
  },
});

const styleStartAndEnd = {
  color: "#6B5CE9",
  textColor: "white",
};
const stylePeriodsDay = {
  color: "#2D2F3E",
  textColor: "white",
};

function dateRange(startDate: string, endDate: string, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}

const Calendars = ({ setIsCalenderOpen }: any) => {
  const [Day, setDay] = useState<any>({
    [new Date().toISOString().slice(0, 10)]: {
      ...styleStartAndEnd,
      startingDay: true,
    },
  });

  const [IsPeriodActive, setIsPeriodActive] = useState(false);
  const handelDay = (date: DateData) => {
    const Start = new Date(Object.keys(Day)[0]);
    const userDate = new Date(date.dateString);
    if (Start == userDate) return;
    if (IsPeriodActive) {
      setIsPeriodActive(false);
      const data = {
        [userDate.toISOString().slice(0, 10)]: {
          ...styleStartAndEnd,
          startingDay: true,
        },
      };
      setDay(data);
    }
    let days = [];
    if (Start < userDate && !IsPeriodActive) {
      days = dateRange(Object.keys(Day)[0], date.dateString);
      let newData: any = {
        [Object.keys(Day)[0]]: { ...styleStartAndEnd, startingDay: true },
      };
      for (let i = 1; i < days.length; i++) {
        newData = {
          ...newData,
          [days[i].toISOString().slice(0, 10)]: { ...stylePeriodsDay },
        };
      }
      newData = {
        ...newData,
        [date.dateString]: { ...styleStartAndEnd, endingDay: true },
      };
      setDay(newData);
      setIsPeriodActive(true);
    } else if (Start > userDate && !IsPeriodActive) {
      const keys = Object.keys(Day);
      let biggestKey = keys[0];
      for (let i = 1; i < keys.length; i++) {
        const date = new Date(keys[i]);
        const bigger = new Date(biggestKey);
        if (date > bigger) biggestKey = keys[i];
      }
      days = dateRange(date.dateString, biggestKey);
      let newData: any = {
        [date.dateString]: { ...styleStartAndEnd, startingDay: true },
      };
      for (let i = 1; i < days.length; i++) {
        newData = {
          ...newData,
          [days[i].toISOString().slice(0, 10)]: { ...stylePeriodsDay },
        };
      }
      newData = {
        ...newData,
        [biggestKey]: { ...styleStartAndEnd, endingDay: true },
      };
      setDay(newData);
      setIsPeriodActive(true);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#161928",
          width: "100%",
          borderRadius: 20,
          paddingTop: 20,
        }}
      >
        <Calendar
          markingType={"period"}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "transparent",
            //daysTop
            textSectionTitleColor: "#ffffff",
            textSectionTitleDisabledColor: "#ffffff",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#ffffff",
            dayTextColor: "#ffffff",
            textDisabledColor: "#ffffff",
            dotColor: "#4F479C",
            selectedDotColor: "#ffffff",
            arrowColor: "white",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "white",
            indicatorColor: "white",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 25,
            //@ts-ignore
            textMonthFontFamily: "URWGeometricBold",
            textDayHeaderFontSize: 16,
          }}
          onDayPress={(e) => handelDay(e)}
          markedDates={Day}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setIsCalenderOpen(false)}
            style={[
              styles.buttonContainer,
              { flex: 0.5, backgroundColor: "transparent" },
            ]}
          >
            <Text style={[styles.Text, { color: "#6B5CE9" }]}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsCalenderOpen(false)}
            style={[styles.buttonContainer, { flex: 0.5 }]}
          >
            <Text style={[styles.Text, { color: "white" }]}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calendars;
