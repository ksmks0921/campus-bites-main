import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function EDProfile(props) {
  return (
    <View
      style={{
        width: '80%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginVertical: 10,
        alignContent: 'flex-start',
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          lineHeight: 24,
          color: '#39B54A',
        }}>
        {props.editVariable}
      </Text>
      <Image
        style={{position: 'absolute', left: 100, height: 20}}
        source={require('../assets/green-divider.png')}
      />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          left: 120,
          width: 250,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 24,
              color: '#4d4d4d',
            }}>
            {props.editValue}
          </Text>
        </View>
        <Image source={require('../assets/edit-pen.png')} />
        <View style={styles.claimedStatus}></View>
      </View>
    </View>
  );
}

export default EDProfile;

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
    // flexDirection: 'row',
    // position: 'absolute',
    width: 75,
    // left: 60,
    justifyContent: 'space-between',
  },
});
