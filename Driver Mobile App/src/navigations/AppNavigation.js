import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen1 from '../screens/signup/SignupStep1';
import SignupScreen2 from '../screens/signup/SignupStep2';
import SignupQuestion1 from '../screens/signup/SignupQuestion1';
import SignupQuestion2 from '../screens/signup/SignupQuestion2';
import SignupQuestion3 from '../screens/signup/SignupQuestion3';
import SignupFinish from '../screens/signup/SignupFinish';
import SignupSuccess from '../screens/signup/SignupSuccess';
import SignupStepTwoAdd from '../screens/signup/SignupStepTwoAdd';
import AvailableDeliveries from '../screens/dashboard/AvailableDeliveries';
import DeliveriesClaimed from '../screens/dashboard/DeliveriesClaimed';
import LoginScreen from '../screens/LoginScreen';
import {AppStyles} from '../AppStyles';
import HeaderTitleBar from '../components/HeaderTitleBar';
import HeaderImageBar from '../components/HeaderImageBar';
import SecondDeliveriesClaimed from '../screens/dashboard/SecondDeliveriesClaimed';
import ThirdDeliveriesClaimed from '../screens/dashboard/ThirdDeliveriesClaimed';
import PaymentDelivered from '../screens/PaymentDelivered';
import CustomMenu from '../components/CustomMenu';
import Profile from '../screens/Profile';
import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{ headerBackTitleVisible: false, headerTintColor: 'white' }}
  >
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
      }}
    />
    <Stack.Screen
      name='Signup1'
      component={SignupScreen1}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='Signup2'
      component={SignupScreen2}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='SignupQuestion1'
      component={SignupQuestion1}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='SignupQuestion2'
      component={SignupQuestion2}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='SignupQuestion3'
      component={SignupQuestion3}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='SignupFinish'
      component={SignupFinish}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name='SignupSuccess'
      component={SignupSuccess}
      options={{
        headerTitle: () => <HeaderImageBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
)

const DashboardStack = () => (
  <Stack.Navigator
    initialRouteName="AvailableDashboard"
    screenOptions={({navigation}) => ({
      headerBackTitleVisible: false,
      headerTintColor: 'white',
      headerRight: () => <CustomMenu navigation={navigation} />,
    })}>
    <Stack.Screen
      name="Available"
      component={AvailableDeliveries}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="FirstClaim"
      component={DeliveriesClaimed}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="SecondClaim"
      component={SecondDeliveriesClaimed}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="ThirdClaim"
      component={ThirdDeliveriesClaimed}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="DeliveryPayment"
      component={PaymentDelivered}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTitle: () => <HeaderTitleBar />,
        headerStyle: {
          backgroundColor: '#39B54A',
        },
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="LoginStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginStack" component={LoginStack} />
    <Stack.Screen name="DashboardStack" component={DashboardStack} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
  },
});

export default AppNavigator;
