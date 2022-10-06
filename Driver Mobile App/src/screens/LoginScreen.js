import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import Footer from '../components/Footer';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    if (email.length <= 0 || password.length <= 0) {
      Alert.alert('Please fill out the required fields.');
      return;
    } else {
      navigation.navigate('DashboardStack');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logoView}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.loginView}>
          <Text style={{fontSize: 15}}>
            Login to your account. Don't have account?
          </Text>
          <View style={styles.actions}>
            <Text style={{marginHorizontal: 5, fontSize: 15}}>Please</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup1')}>
              <Text style={styles.singUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Student Email"
            placeholderTextColor="#AFAFAF"
            onChangeText={setEmail}
            value={email}
          />
          <Image
            source={require('../assets/email.png')}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#AFAFAF"
            onChangeText={setPassword}
            value={password}
          />
          <Image
            source={require('../assets/eye.png')}
            style={styles.imageStyle}
          />
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#39B54A',
                fontWeight: '800',
                fontSize: 20,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => onPressLogin()}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Text>Clicking on the button, you agree to the </Text>
          <Text>CampusBites </Text>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#39B54A',
              }}>
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text style={{color: '#333'}}> and </Text>
          <Text style={{textDecorationLine: 'underline', color: '#39B54A'}}>
            Privacy Policy
          </Text>
        </View>
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
    textDecorationLine: 'underline',
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
export default LoginScreen;
