import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import {ClaimedStatus, SecondClaimed} from '../../components/ClaimStatus';
import DasboardFooter from '../../components/DashboardFooter';
import DeliveryCard from '../../components/DeliveryCard';
import {
  ClaimedOrder,
  OrderButton,
  UnclaimedOrder,
} from '../../components/OrderStatus';
import {DeliveryComponent} from '../../components/DeliveryStatus';

const DeliveriesClaimed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.logoView}>
            <Text style={[styles.welcome]}>Available Deliveries</Text>
          </View>
          <View style={styles.dashboardView}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/claim-icon-2.png')}
            />
            <Text style={{fontSize: 16, lineHeight: 28, fontWeight: '600'}}>
              Claim Up To 2 More Orders{' '}
            </Text>
          </View>
          <DeliveryCard
            claimComponent={<ClaimedStatus orderNumber="#538" />}
            orderComponent={<ClaimedOrder />}
            deliveryComponent={<DeliveryComponent />}
            orderButton={<OrderButton />}
          />
          <DeliveryCard
            claimComponent={
              <SecondClaimed orderNumber="#537" navigation={navigation} />
            }
            orderComponent={<UnclaimedOrder />}
            deliveryComponent={<DeliveryComponent />}
          />
          <DeliveryCard
            claimComponent={
              <SecondClaimed orderNumber="#537" navigation={navigation} />
            }
            orderComponent={<UnclaimedOrder />}
            deliveryComponent={<DeliveryComponent />}
          />
          <DeliveryCard
            claimComponent={
              <SecondClaimed orderNumber="#537" navigation={navigation} />
            }
            orderComponent={<UnclaimedOrder />}
            deliveryComponent={<DeliveryComponent />}
          />
          <DeliveryCard
            claimComponent={
              <SecondClaimed orderNumber="#537" navigation={navigation} />
            }
            orderComponent={<UnclaimedOrder />}
            deliveryComponent={<DeliveryComponent />}
          />
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
    // fontFamily: 'Nunito',
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
export default DeliveriesClaimed;
