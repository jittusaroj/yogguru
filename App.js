import React,{component} from 'react';
import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import Haroscope from './src/screens/Haroscope';
import Jodiac from './src/screens/Jodiac';
import Astrologer from './src/screens/Astrologer';
 const App =()=>{
  
    return (
        <>
         {/* <Login /> */}
         {/* <Haroscope /> */}
         {/* <Jodiac /> */}
         <Astrologer />
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
