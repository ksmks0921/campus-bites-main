import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const DeliveryCard = (props) => {
  return (
    <Shadow
      distance={12}
      startColor={"#00000008"}
      containerViewStyle={{ marginVertical: 5 }}
      radius={16}
    >
      <View style={[styles.card, { marginVertical: 0 }]}>
        <View
          style={{
            marginVertical: 0,
            top: 5,
          }}
        >
          <Text style={{ fontSize: 13 }}>Order Number</Text>
          <Image
            style={{ position: "absolute", left: 100, height: 20 }}
            source={require("../assets/delivery-divider.png")}
          />
          {props.claimComponent}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1.5,
              width: "100%",
              backgroundColor: "#4D4D4D",
              marginTop: 20,
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 0,
          }}
        >
          <View
            style={{
              width: 90,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 13 }}>Pickup</Text>
            <View
              style={{
                borderRadius: 12,
                borderColor: "#39B54A",
                borderWidth: 1,
                paddingLeft: 2,
                paddingRight: 2,
                marginLeft: 3,
              }}
            >
              <Text style={{ fontSize: 11, color: "#39854A" }}>1:40 PM </Text>
            </View>
          </View>
          <Image
            style={{ position: "absolute", left: 100, height: 30 }}
            source={require("../assets/green-divider.png")}
          />
          {props.orderComponent}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1.5,
              width: "100%",
              backgroundColor: "#C6E9CB",
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 0,
          }}
        >
          <View
            style={{
              width: 90,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 13 }}>Deliver</Text>
            <View
              style={{
                borderRadius: 12,
                borderColor: "#39B54A",
                borderWidth: 1,
                paddingLeft: 2,
                paddingRight: 2,
                marginLeft: 3,
              }}
            >
              <Text style={{ fontSize: 11, color: "#39854A" }}>7:00 AM</Text>
            </View>
          </View>
          <Image
            style={{ position: "absolute", left: 100, height: 30, top: -10 }}
            source={require("../assets/green-divider.png")}
          />
          {props.deliveryComponent}
        </View>
        {props.orderButton}
        {props.deliveryButton}
      </View>
    </Shadow>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '90%',
    marginVertical: 10,
  },
});
