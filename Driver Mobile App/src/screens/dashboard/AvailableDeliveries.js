import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import { FirstClaimed, ClaimedStatus } from "../../components/ClaimStatus";
import DasboardFooter from "../../components/DashboardFooter";
import DeliveryCard from "../../components/DeliveryCard";
import { DeliveryComponent } from "../../components/DeliveryStatus";
import {
  UnclaimedOrder,
  ClaimedOrder,
  OrderButton,
} from "../../components/OrderStatus";

const AvailableDeliveries = ({ navigation }) => {
  const [claim, setClaim] = useState(false);
  const [claim1, setClaim1] = useState(false);
  const [claim2, setClaim2] = useState(false);
  const [claim3, setClaim3] = useState(false);
  const [claim4, setClaim4] = useState(false);
  const [claim5, setClaim5] = useState(false);
  const handleClaimed = () => {
    setClaim(true);
  };
  const handleClaimed1 = () => {
    setClaim1(true);
  };
  const handleClaimed2 = () => {
    setClaim2(true);
  };
  const handleClaimed3 = () => {
    setClaim3(true);
  };
  const handleClaimed4 = () => {
    setClaim4(true);
  };
  const handleClaimed5 = () => {
    setClaim5(true);
  };

  const handleCancel = () => {
    setClaim(false);
  };
  const handleCancel1 = () => {
    setClaim1(false);
  };
  const handleCancel2 = () => {
    setClaim2(false);
  };
  const handleCancel3 = () => {
    setClaim3(false);
  };
  const handleCancel4 = () => {
    setClaim4(false);
  };
  const handleCancel5 = () => {
    setClaim5(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.logoView}>
            <Text style={[styles.welcome]}>Available Deliveries</Text>
          </View>
          <View style={styles.dashboardView}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/claim-icon.png")}
            />
            <Text style={{ fontSize: 16, lineHeight: 28, fontWeight: "600" }}>
              Claim Up To 3 Orders{" "}
            </Text>
          </View>
          {claim === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim}
                  handleClaimed={handleClaimed}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton name="Delete" cancel={handleCancel} />}
            />
          )}

          {claim1 === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim1}
                  handleClaimed={handleClaimed1}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton cancel={handleCancel1} />}
            />
          )}
          {claim2 === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim2}
                  handleClaimed={handleClaimed2}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton cancel={handleCancel2} />}
            />
          )}
          {claim3 === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim3}
                  handleClaimed={handleClaimed3}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton cancel={handleCancel3} />}
            />
          )}
          {claim4 === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim4}
                  handleClaimed={handleClaimed4}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton cancel={handleCancel4} />}
            />
          )}
          {claim5 === false ? (
            <DeliveryCard
              claimComponent={
                <FirstClaimed
                  orderNumber="Petter Crouch"
                  navigation={navigation}
                  claim={claim5}
                  handleClaimed={handleClaimed5}
                />
              }
              orderComponent={<UnclaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
            />
          ) : (
            <DeliveryCard
              claimComponent={<ClaimedStatus orderNumber="Petter Crouch" />}
              orderComponent={<ClaimedOrder />}
              deliveryComponent={<DeliveryComponent />}
              orderButton={<OrderButton cancel={handleCancel5} />}
            />
          )}
        </View>
      </ScrollView>

      <DasboardFooter />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  imageStyle: {
    margin: 10,
    height: 28,
    width: 28,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 0,
  },

  welcome: {
    color: '#4d4d4d',
    // fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 50,
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  dashboardView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFFBF1',
    height: 45,
    width: '90%',
    borderColor: '#C6E9CB',
    borderWidth: 1,
    marginBottom: 15,
  },
});
export default AvailableDeliveries;
