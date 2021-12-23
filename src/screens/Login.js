import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import styled from 'styled-components/native';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [text, setText] = useState('');
    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
            {/* <Container>
            </Container> */}
            <Card style={styles.bgTransparent}>
                <Card.Content>
                    <Image style={styles.tinyLogo} source={require('../../assets/adaptive-icon.png')}
                    />
                    <TextInput style={styles.formControl} label="Username/Email" right={<TextInput.Icon name="eye" />} />
                    <TextInput style={styles.formControl} label="Password" secureTextEntry right={<TextInput.Icon name="eye" />} />

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>
                </Card.Content>

            </Card>
        </ImageBackground>
    );
}
export default Login
const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;
const P = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const TextField = styled.TextInput`
 background:inherit;
 margin-bottom:15px;
`


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    bgTransparent: {
        backgroundColor: "transparent",
        // border:"0",
        // boxShadow:"none"
    },
    formControl: {
        marginBottom: 15,
        backgroundColor: "transparent"
    },
    tinyLogo: {
        width: 150,
        marginLeft: "auto",
        height: 150,
    },
    logo: {
        width: 66,
        height: 58,
    },
});