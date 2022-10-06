import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Footer from '../components/DashboardFooter';
import Circle from '../components/SignupCircle';

const PaymentDelivered = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, top: 60, alignSelf: 'center'}}>
        <Circle />
        <Text
          style={{
            top: 80,
            left: 70,
            fontWeight: '700',
            position: 'absolute',
            fontSize: 16,
            color: '#39B54A',
          }}>
          BOOM!{' '}
        </Text>
        <Text style={{position: 'absolute', top: 120, left: 70}}>
          You Made Another
        </Text>
        <Text
          style={[styles.welcome, {position: 'absolute', top: 150, left: 130}]}>
          $8.25
        </Text>
        <View
          style={{
            position: 'relative',
            bottom: 150,
            left: 20,
          }}>
          <View
            style={{
              height: 4,
              width: '90%',
              backgroundColor: '#C6E9CB',
              // marginTop: 20,
              marginBottom: 20,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 10,
                color: '#4D4D4D',
              }}>
              Your Weekly Total is Now:
            </Text>
            <Text style={styles.welcome}>$80.70</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 40,
        }}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('ThirdClaim');
          }}>
          <Text style={styles.loginText}>Return to Dashboard</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  inputView: {
    flexDirection: 'row',
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 15,
    height: 50,
    color: '#777777',
    fontWeight: '800',
  },
  imageStyle: {
    padding: 10,
    marginTop: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  singUp: {
    color: '#39B54A',
    fontWeight: '500',
    fontSize: 15,
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#39B54A',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  },
  logo: {
    marginBottom: 25,
    width: 250,
    height: 100,
  },
  welcome: {
    color: '#39B54A',
    fontWeight: '700',
    fontSize: 32,
    // fontFamily: 'Nunito',
  },
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
export default PaymentDelivered;
