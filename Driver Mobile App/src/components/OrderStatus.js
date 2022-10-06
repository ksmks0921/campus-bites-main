import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

function UnclaimedOrder() {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        left: 120,
        width: "60%",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: "#39B54A",
          textDecorationLine: "underline",
        }}
      >
        See more ...
      </Text>
      <Text style={{ fontSize: 12 }}>Scooter's</Text>
    </View>
  );
}

function ClaimedOrder() {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        top: 4,
        left: 100,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 20,
          width: 100,
        }}
      >
        <Text style={{ fontSize: 10, textAlign: "left" }}>
          Chicken Tenders BBQ Sauce
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          left: 115,
          width: 100,
          marginLeft: 5,
        }}
      >
        <Text style={{ fontSize: 10, textAlign: "left" }}>
          Side: Fries Drink: Pepsi{" "}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          left: 200,
          width: 100,
          marginLeft: 10,
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/next.png")} />
      </View>
    </View>
  );
}

const OrderButton = ({ cancel }) => {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableHighlight onPress={cancel}>
        <View>
          <Image source={require("../assets/btn-cancel.png")} />
        </View>
      </TouchableHighlight>

      <View>
        <Image source={require("../assets/haveit-btn.png")} />
      </View>
    </View>
  );
};

export {OrderButton, UnclaimedOrder, ClaimedOrder};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 120,
    width: 75,
    justifyContent: 'center',
  },
  claimStatus: {
    flexDirection: 'row',
    position: 'absolute',
    width: 75,
    left: 80,
    justifyContent: 'space-between',
  },
  claimedStatus: {
    flexDirection: 'row',
    position: 'absolute',
    width: 75,
    left: 60,
    justifyContent: 'space-between',
  },
});
