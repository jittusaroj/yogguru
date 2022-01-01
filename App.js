import React, { component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import Haroscope from './src/screens/Haroscope';
import Jodiac from './src/screens/Jodiac';
import Astrologer from './src/screens/Astrologer';
import Astrologers from './src/screens/Astrologers';
import Slider from './src/screens/Slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="haroscope" component={Haroscope} />
          <Stack.Screen name="forgetpassword" component={ForgotPassword} />
          <Stack.Screen name="astrologer" component={Astrologer} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <Home />
      {/* <Login /> */}
      {/* <Haroscope /> */}
      {/* <Jodiac /> */}
      {/* <Astrologer /> */}
      {/* <Slider /> */}
      {/* <Astrologers /> */}
      {/* <ForgotPassword /> */}
      {/* <Register /> */}
    </>
  );

}
export default App
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const P = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
