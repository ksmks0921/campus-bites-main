import React from 'react';
import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigations/AppNavigation';

function CampusBitesApp() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <AppNavigator />;
}

AppRegistry.registerComponent('campusbites', () => CampusBitesApp);

export default CampusBitesApp;
