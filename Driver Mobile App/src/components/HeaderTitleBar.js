import React from 'react';
import {View, Text, Image} from 'react-native';

const HeaderTitleBar = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          top: -5,
          height: 65,
          resizeMode: "stretch",
        }}
        source={require("../assets/CB_full_2.png")}
      />
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 100,
        }}
      >
        <Text style={{ fontSize: 12, marginTop: 3 }}>Welcome,</Text>
        <Text style={{ fontSize: 12, color: "#39B54A" }}>Jay!</Text>
        <Image
          style={{ position: "absolute", left: 100, top: 5 }}
          source={require("../assets/delivery-divider.png")}
        />
        <View
          style={{
            position: "absolute",
            left: 120,
          }}
        >
          <View style={{ width: 80 }}>
            <Text style={{ fontSize: 12, marginTop: 3 }}>Weekly Total:</Text>
            <Text style={{ fontSize: 12, color: "#39B54A" }}>$72.45</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderTitleBar;
