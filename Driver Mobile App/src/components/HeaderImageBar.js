import React from 'react';
import { View, Text, Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const HeaderImageBar = () => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
      }}
    >
      <Image
        style={{
          top: -5,
          height: 50,
          resizeMode: "stretch",
          borderRadius: 12,
        }}
        source={require("../assets/rerrr.png")}
      />
    </View>
  );
};

export default HeaderImageBar;
