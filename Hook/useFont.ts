import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    Kanit_Regular: require("../assets/fonts/Kanit-Medium.ttf"),
    Raleway_Bold: require("../assets/fonts/Raleway/Raleway-SemiBold.ttf"),
  });
export default useFonts;
