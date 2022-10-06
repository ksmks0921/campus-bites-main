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
import DocumentPicker from 'react-native-document-picker';

const SignupScreen2 = ({navigation}) => {
  const [singleFile, setSingleFile] = React.useState('');

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      setSingleFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logoView}>
          <Text style={styles.welcome}>Sign Up</Text>
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Text style={{fontSize: 16}}>Step 2.</Text>
          <TouchableOpacity>
            <Text style={{color: '#39B54A', fontSize: 16}}>Upload a photo</Text>
          </TouchableOpacity>
          <Text style={{color: '#333', fontSize: 16}}>
            {' '}
            of the front of your
          </Text>
          <Text style={{fontSize: 16}}> university student ID</Text>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              width: 244,
              height: 240,
              left: 30,
              top: 20,
              backgroundColor: '#C6E9CB',
            }}
          />
          <View
            style={{
              width: 244,
              height: 240,
              left: 10,
              top: 40,
              backgroundColor: '#F9F9F9',
              position: 'absolute',
            }}
          />
          <View
            style={{
              width: 268,
              left: -50,
              top: 80,
              position: 'absolute',
            }}>
            <Text style={{color: '#4D4D4D', fontSize: 20, fontWeight: '800'}}>
              Upload File here
            </Text>
            <Text style={{color: '#4d4d4d', marginTop: 3}}>
              jpg / png / raw
            </Text>
          </View>
          {}
          <TouchableOpacity style={styles.uploadID} onPress={selectOneFile}>
            {singleFile === '' ? (
              <Image source={require('../../assets/download-icon.png')} />
            ) : (
              <Image source={require('../../assets/white-check.png')} />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={[styles.loginBtn, {backgroundColor: '#fff'}]}>
            <Text
              style={[styles.loginText, {color: '#39B54A'}]}
              onPress={() => navigation.navigate('Signup1')}>
              ← Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate('SignupQuestion1')}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 20,
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
    marginTop: 20,
    color: '#39B54A',
    fontWeight: '800',
    fontSize: 34,
  },
  loginView: {
    marginBottom: 15,
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  uploadID: {
    position: 'absolute',
    width: 80,
    height: 80,
    left: 30,
    top: 185,
  },
});
export default SignupScreen2;
