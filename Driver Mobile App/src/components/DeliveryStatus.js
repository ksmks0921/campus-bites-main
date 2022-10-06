import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

function DeliveryComponent() {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        left: 120,
        width: '60%',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: 12,
          color: '#39B54A',
          textDecorationLine: 'underline',
        }}>
        See more ...
      </Text>
      <Text style={{fontSize: 12}}>Ireland Hall</Text>
    </View>
  );
}

function DeliveredComponent() {
  return (
    <View style={styles.deliveredContainer}>
      <View
        style={{
          left: 40,
          width: 130,
        }}>
        <Text style={{fontSize: 10, textAlign: 'left'}}>Timmy</Text>
        <Text style={{fontSize: 10, color: '#39B54A'}}>+1(111)111-111 </Text>
      </View>
      <View
        style={{
          width: 80,
        }}>
        <Text style={{fontSize: 10, textAlign: 'left'}}>
          Ireland Hall Lobby by{' '}
        </Text>
      </View>
      <View
        style={{
          // position: 'absolute',
          // left: 200,
          width: 60,
          // justifyContent: 'center',
        }}>
        <Image source={require('../assets/next.png')} />
      </View>
    </View>
  );
}

function DeliveryButton(props) {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
      }}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('DeliveryPayment');
        }}>
        <Image
          style={{width: 320}}
          source={require('../assets/delivered-btn.png')}
        />
      </TouchableHighlight>
    </View>
  );
}

export {DeliveryComponent, DeliveredComponent, DeliveryButton};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 120,
    width: 75,
    justifyContent: 'center',
  },
  deliveredContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 80,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
