import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default ({ name, focused, color }) => {
  return (
    <Icon
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      size={25}
      color={focused? 'white' : color}
    />
  )
};