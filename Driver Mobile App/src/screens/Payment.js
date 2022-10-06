import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import DasboardFooter from '../components/DashboardFooter';
import PaymentCard from '../components/PaymentCard';

const Payment = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.balanceView}>
            <Text style={[styles.welcome, {marginLeft: 0}]}>Balance</Text>
            <Text style={[styles.welcome, {color: '#34B54A', marginLeft: 170}]}>
              $80.70
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 1.5,
                width: '90%',
                backgroundColor: '#4D4D4D',
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          </View>
          <View style={styles.logoView}>
            <Text style={[styles.welcome]}>Transaction History</Text>
          </View>
          <View style={styles.dashboardView}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 28,
                fontWeight: '600',
                color: '#4D4D4D',
                marginLeft: 10,
              }}>
              20.04.2022 - 26.04.2022{' '}
            </Text>
            <Image
              style={styles.imageStyle}
              source={require('../assets/icon-calendar.png')}
            />
          </View>
          <PaymentCard
            id="#538"
            amount={12.5}
            fees={2.5}
            name="Scooter"
            location="Ireland Hall"
          />
          <PaymentCard
            id="#538"
            amount={12.5}
            fees={2.5}
            name="Scooter"
            location="Ireland Hall"
          />
          <PaymentCard
            id="#538"
            amount={12.5}
            fees={2.5}
            name="Scooter"
            location="Ireland Hall"
          />
          <PaymentCard
            id="#538"
            amount={12.5}
            fees={2.5}
            name="Scooter"
            location="Ireland Hall"
          />
          <PaymentCard
            id="#538"
            amount={12.5}
            fees={2.5}
            name="Scooter"
            location="Ireland Hall"
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
    justifyContent: 'space-between',
  },

  welcome: {
    color: '#4d4d4d',
    // fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 50,
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
  dashboardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFFBF1',
    height: 45,
    width: '90%',
    borderColor: '#C6E9CB',
    borderWidth: 1,
    marginBottom: 15,
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    width: '90%',
    marginBottom: 15,
  },
});
export default Payment;
