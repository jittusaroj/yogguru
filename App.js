import React,{component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/screens/Login';
 const App =()=>{
    return (
        <>
         <Login />
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
