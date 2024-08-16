import { Dimensions } from "react-native";
import { DeviceType, device_type } from "@/device";

const type = DeviceType.WEB == device_type ? "window" : "screen";

export const FullScreenSize = () => {
  return {
    width: Dimensions.get(type).width,
    height: Dimensions.get(type).height,
  };
};
