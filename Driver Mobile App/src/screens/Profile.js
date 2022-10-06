import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import DasboardFooter from '../components/DashboardFooter';

import EDProfile from '../components/EDProfile';

const Profile = () => {
  const [text, onChangeText] = React.useState('This is a text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.logoView}>
            <Text style={[styles.welcome]}>Profile</Text>
          </View>

          <EDProfile editVariable="Legal Name" editValue="Jay Jay" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 1.5,
                width: '80%',
                backgroundColor: '#4D4D4D',
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          </View>

          <EDProfile
            editVariable="Student Email"
            editValue="jamesworker1004@gmail.com"
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 1.5,
                width: '80%',
                backgroundColor: '#4D4D4D',
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          </View>
          <EDProfile
            editVariable="University"
            editValue="University Of St. Thomas"
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 1.5,
                width: '80%',
                backgroundColor: '#4D4D4D',
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          </View>
          <EDProfile editVariable="Year in College" editValue="Freshmen" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 1.5,
                width: '80%',
                backgroundColor: '#4D4D4D',
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          </View>
          <EDProfile editVariable="Phone" editValue="+1 321 234 5598" />
          <View style={styles.logoView}>
            <Text style={[styles.welcome]}>Payout Method</Text>
          </View>
          <View style={styles.dashboardView}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 28,
                fontWeight: '600',
                color: '#4D4D4D',
                marginLeft: 10,
              }}>
              Bank account ending in xxxx{' '}
            </Text>
            <Image
              style={styles.imageStyle}
              source={require('../assets/edit-pen.png')}
            />
          </View>
        </View>
      </ScrollView>

      <DasboardFooter />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  imageStyle: {
    margin: 10,
    height: 28,
    width: 28,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 0,
  },

  welcome: {
    color: '#4d4d4d',
    // fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 50,
    flex: 1,
    marginLeft: 40,
    marginTop: 10,
  },
  dashboardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFFBF1',
    height: 45,
    width: 327,
    borderColor: '#C6E9CB',
    borderWidth: 1,
    marginBottom: 15,
  },
  claimedStatus: {
    flexDirection: 'row',
    position: 'absolute',
    width: 75,
    left: 50,
    justifyContent: 'space-between',
  },
});
export default Profile;
