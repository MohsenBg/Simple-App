import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    Brevia_Semibold: require("@assets/fonts/Brevia-Semibold.otf"),
    Kanit_Regular: require("@assets/fonts/Kanit-Medium.ttf"),
    Raleway_Bold: require("@assets/fonts/Raleway/Raleway-SemiBold.ttf"),
    Linotte_SemiBold: require("@assets/fonts/Linotte-SemiBold.otf"),
    URWGeometricBold: require("@assets/fonts/URWGeometric/URWGeometricBold.otf"),
    URWGeometricR: require("@assets/fonts/URWGeometric/URWGeometricRegular.otf"),
    URWGeometricM: require("@assets/fonts/URWGeometric/URWGeometricMedium.otf"),
    URWGeometricLight: require("@assets/fonts/URWGeometric/URWGeometricLight.otf"),
  });
export default useFonts;
