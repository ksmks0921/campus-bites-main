import React, {useState} from 'react';
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

const SignupFinish = ({navigation}) => {
  const [securityNumber, setSecurityNumber] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logoView}>
          <Text style={styles.welcome}>Sign Up</Text>
        </View>
        <View style={styles.loginView}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#4D4D4D'}}>
            Please Enter Your Social
          </Text>
          <View style={styles.actions}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#4D4D4D'}}>
              Security Number{' '}
            </Text>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="* * * * * * * * * *"
            placeholderTextColor="#AFAFAF"
            secureTextEntry={true}
            onChangeText={setSecurityNumber}
            value={securityNumber}
          />
          <Image
            source={require('../../assets/eye.png')}
            style={styles.imageStyle}
          />
        </View>

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Text>
            This is required to distribute your earnings. If you have any
            questions please call us at
            {<Text style={{color: '#39B54A'}}> xxx-xxx-xxxx</Text>}
          </Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('SignupSuccess')}>
            Finish
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
export default SignupFinish;
