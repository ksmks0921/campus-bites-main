import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={{fontSize: 12}}>
          © 2022 CampusBites | All Rights Reserved
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F1F8F2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
export default Footer;
