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
import Footer from '../../components/Footer';

const SignupSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logoView}>
          <Text style={styles.welcome}>Success!</Text>
        </View>

        <Image
          style={{marginTop: 10, marginBottom: 50}}
          source={require('../../assets/check-btn.png')}></Image>

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            aligItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              textAlign: 'center',
              lineHeight: 24,
            }}>
            You are so close to making money on your schedule!
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 1.5,
              width: '80%',
              backgroundColor: '#39B54A',
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Text style={{textAlign: 'center', lineHeight: 22}}>
            We are just verifying you information. We will notify you once
            approved. This usually takes less than 24 hours. Once approved you
            can log in with your student email and password.
          </Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
            LOGIN
          </Text>
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
    width: '30%',
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
    fontWeight: '800',
    fontSize: 34,
  },
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
export default SignupSuccess;
