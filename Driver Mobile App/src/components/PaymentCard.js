import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const PaymentCard = (props) => {
  return (
    <Shadow
      distance={12}
      startColor={'#00000008'}
      containerViewStyle={{marginVertical: 5}}
      radius={16}>
      <View style={[styles.card, {marginVertical: 0}]}>
        <View style={styles.id}>
          <Text style={{fontSize: 14, lineHeight: 24, fontWeight: '700'}}>
            {props.id}
          </Text>
          <Image source={require('../assets/payment-dash-icon.png')} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: 100,
            }}>
            <Text style={styles.amount}>${props.amount}</Text>
            <Text style={{color: '#A2B1C0'}}>(${props.fees})</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 1.5,
              width: '100%',
              backgroundColor: '#4D4D4D',
              marginTop: 5,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={[styles.id]}>
          <Text style={{fontSize: 14, lineHeight: 24, fontWeight: '700'}}>
            {props.name}'s
          </Text>
          <Text
            style={[
              styles.amount,
              {textDecorationLine: 'underline', marginLeft: 50},
            ]}>
            See more ...
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: 100,
            }}>
            <Text>{props.location}</Text>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  id: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 0,
    // top: 5,
  },
  amount: {
    marginRight: 15,
    fontSize: 14,
    lineHeight: 24,
    color: '#39B54A',
    fontWeight: '700',
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
