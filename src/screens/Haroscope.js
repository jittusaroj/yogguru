import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import styled from 'styled-components/native';
const Haroscope = () => {

    const [password, setPassword] = useState(false)
    const [showpassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setPassword(!password)

    }
    const eyeIcon = password ? 'eye-off' : 'eye'
    const [text, setText] = useState('');
    return (
        <>
            {/* <Container>
            </Container> */}
            <Card style={{ backgroundColor: "white" }}>
                <Card.Content>
                    <Image style={styles.tinyLogo} source={require('../../assets/horoscope.jpg')}
                    />
                    <Title style={styles.center} >Know your destiny</Title>
                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                </Card.Content>
            </Card>
            <ScrollView>
                <Container>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mb5}>
                        <Card.Content>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                </View>
                                <View style={styles.ml5}>
                                    <Title style={styles.center} >Know your destiny</Title>
                                    <Paragraph style={styles.small}>Select your zodiac-sign</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </Container>

            </ScrollView>
        </>
    );
}
export default Haroscope
const Container = styled.View`
  flex: 1;
  width:100%;
  background-color: #f7f2f2;
  margin:auto;
  padding:5px 8px

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
const Center = styled.Text`
text-align:"center"
`


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,

    },
    mt4: {
        marginTop: 10
    },
    center: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "900"
    },
    small: {
        textAlign: "center",
        fontSize: 13,
    },
    leftAlign: {
        textAlign: "right",
        marginBottom: 30
    },
    bgTransparent: {
        backgroundColor: "transparent",
        shadowColor: "transparent"
    },
    formControl: {
        marginBottom: 15,
        backgroundColor: "transparent"
    },
    flex: {
        flex: 1,
        flexDirection: "row",
        

    },
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 70,
        alignSelf: 'center',
    },
    icon: {
        width: 70,
        height:70,
    },
    logo: {
        width: 66,
        height: 58,
    },
    ml5:{
        marginLeft:15,
    },
    mb5:{
        marginBottom:5,
    },
});