import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignupCirlce = (props) => {
  return (
    <View style={styles.circle}>
      <TouchableOpacity>
        <Text style={styles.circleText}>{props.question}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    width: 344,
    height: 344,
    backgroundColor: '#F1F8F2',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 344 / 2,
  },
  circleText: {
    flexWrap: 'wrap',
    // fontFamily: 'Nunito',
    fontSize: 20,
    lineHeight: 25,
    color: '#4D4D4D',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default SignupCirlce;
