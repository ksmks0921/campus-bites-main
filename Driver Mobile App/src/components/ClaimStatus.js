import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

function FirstClaimed(props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Text style={{ fontSize: 13, color: "#39B54A" }}>
          {props.orderNumber}
        </Text>
      </View>
      <View style={styles.claimStatus}>
        <TouchableHighlight
          style={styles.claimButton}
          onPress={props.handleClaimed}
        >
          <Text style={{ color: "#FFFFFF" }}>Claim</Text>
          {/* <Image source={require("../assets/accept-icon.png")} /> */}
        </TouchableHighlight>
      </View>
    </View>
  );
}

function SecondClaimed(props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Text style={{ fontSize: 13, color: "#39B54A" }}>
          {props.orderNumber}
        </Text>
      </View>
      <View style={styles.claimStatus}>
        <TouchableHighlight
          onPress={() => {
            alert("You can not cancle order for now!");
          }}
        >
          <Image source={require("../assets/cancel-icon.png")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate("SecondClaim");
          }}
        >
          <Image source={require("../assets/accept-icon.png")} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

function ThirdClaimed(props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Text style={{ fontSize: 13, color: "#39B54A" }}>
          {props.orderNumber}
        </Text>
      </View>
      <View style={styles.claimStatus}>
        <TouchableHighlight
          onPress={() => {
            alert("You can not cancle order for now!");
          }}
        >
          <Image source={require("../assets/cancel-icon.png")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate("ThirdClaim");
          }}
        >
          <Image source={require("../assets/accept-icon.png")} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

function ClaimedStatus(props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Text style={{ fontSize: 13, color: "#39B54A" }}>
          {props.orderNumber}
        </Text>
      </View>
      <View style={styles.claimedStatus}>
        <Image source={require("../assets/claimed-icon.png")} />
      </View>
    </View>
  );
}

export { FirstClaimed, SecondClaimed, ThirdClaimed, ClaimedStatus };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 120,
    width: 130,
    justifyContent: "center",
  },
  claimStatus: {
    flexDirection: "row",
    position: "absolute",
    width: 75,
    left: "100%",
    justifyContent: "space-between",
  },
  claimedStatus: {
    flexDirection: "row",
    position: "absolute",
    width: 75,
    left: "80%",
    justifyContent: "space-between",
  },
  claimButton: {
    backgroundColor: "#39B54A",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 12,
  },
});
