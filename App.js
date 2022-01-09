// In App.js in a new project

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import { setUpAxios } from "./src/Service"
import SplashScreen from 'react-native-splash-screen'
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#ffffff',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


setUpAxios();

function App() {

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        backgroundColor={"#b7bdfd"} />
      <Router />
    </NavigationContainer>
  );
}

export default App;