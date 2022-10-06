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
import Circle from '../../components/SignupCircle';

const SignupQuestion3 = ({navigation}) => {
  const [text, onChangeText] = React.useState('This is a text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, top: 60, alignItems: 'center'}}>
        <Circle question="You will be paid every Friday your weeks earnings plus tips. You will be able to monitor your earnings in the app as well as add bank account information." />
        <Text
          style={{
            top: 10,
            fontWeight: 'bold',
            position: 'absolute',
            fontSize: 25,
            color: '#39B54A',
          }}>
          Payment
        </Text>
        <Image
          style={{position: 'absolute', top: 55}}
          source={require('../../assets/circle-arrow.png')}></Image>
      </View>

      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 40,
          // marginTop: 10,
        }}>
        <TouchableOpacity
          style={[styles.loginBtn, {backgroundColor: '#F27162'}]}>
          <Text
            style={[styles.loginText, {color: '#fff'}]}
            onPress={() => navigation.navigate('SignupQuestion2')}>
            No
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('SignupFinish')}>
            Yes
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
export default SignupQuestion3;
