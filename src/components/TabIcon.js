import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { white } from '../colors';

export default ({ name, focused, inActiveColor }) => {
  return (
    <Icon
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      size={25}
      color={focused? white : inActiveColor}
    />
  )
};