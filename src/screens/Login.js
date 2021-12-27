import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import styled from 'styled-components/native';
const Login = ({navigation}) => {

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
                    <Title>Login to your account</Title>
                    <TextInput style={styles.formControl} label="Username/Email" right={<TextInput.Icon name="email" />} />
                    <TextInput style={styles.formControl} label="Password" secureTextEntry={!password} right={<TextInput.Icon name={eyeIcon} onPress={(e) => togglePassword()} />} />
                    <Text style={styles.leftAlign} onPress={() =>navigation.navigate('forgetpassword')}>Forgot password ?</Text>
                    <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
                        Login
                    </Button>

                    <Text style={styles.mt4}> Registered not yet ? Register now</Text>
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
    mt4: {
        marginTop: 20
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
        marginTop: "40%",
        alignSelf: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
});