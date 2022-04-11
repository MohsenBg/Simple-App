import { PermissionsAndroid } from "react-native";

PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

export const StoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      console.log("Permission Denied");

      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
