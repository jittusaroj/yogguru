import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import styled from 'styled-components';
const ForgotPassword = () => {

    const [password, setPassword] = useState(false)
    const [showpassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setPassword(!password)

    }
    const eyeIcon = password ? 'eye-off' : 'eye'
    const [text, setText] = useState('');
    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
            {/* <Container>
            </Container> */}
            <Card style={styles.bgTransparent} >
                <Card.Content>
                    <Image style={styles.tinyLogo} source={require('../../assets/adaptive-icon.png')}
                    />
                    <Title>Reset your password</Title>
                    <TextInput style={styles.formControl} label="Registered Email" right={<TextInput.Icon name="email" />} />
                    <TextInput style={styles.formControl} label="New Password" secureTextEntry={!password} right={<TextInput.Icon name={eyeIcon} onPress={(e) => togglePassword()} />} />
                    <TextInput style={styles.formControl} label="Confirm New Password" secureTextEntry={!password} right={<TextInput.Icon name={eyeIcon} onPress={(e) => togglePassword()} />} />
                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        Reset password
                    </Button>
                    <Text style={styles.mt4}> Back to Login</Text>

                </Card.Content>

            </Card>
        </ImageBackground>
    );
}
export default ForgotPassword
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
    mt4: {
        marginTop: 10
    },
    leftAlign: {
        textAlign: "right",
        marginBottom: 30
    },
    bgTransparent: {
        backgroundColor: "transparent",
        shadowColor:"transparent"
    },
    formControl: {
        marginBottom: 15,
        backgroundColor: "transparent"
    },
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop:"30%",
        alignSelf: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
});