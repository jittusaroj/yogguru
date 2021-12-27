import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { TextInput, Appbar, Avatar, Button, Card, Title, Paragraph, IconButton, Badge } from 'react-native-paper';
import styled from 'styled-components';

const Astrologers = () => {


    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Bussiness" />
            </Appbar.Header>
            <View style={{ display: "flex", flexDirection: "row", padding: 10, backgroundColor: "lightgrey" }}>
                <Button>Available</Button>
                <Button>Filters</Button>
                <Button>On Chat</Button>
                <Button>Search</Button>
            </View>

            <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
                <Container>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={styles.mt4}>
                        <Card.Content style={{ padding: 0 }}>
                            <View style={styles.flex}>
                                <View>
                                    <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginLeft: -5 }}>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "green", color: "white" }} icon="phone"></IconButton>
                                        <IconButton mode="contained" color="white" style={{ backgroundColor: "skyblue", color: "white" }} icon="message"></IconButton>
                                    </View>
                                </View>
                                <View style={styles.ml5}>
                                    <Title>Know your destiny</Title>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Vedic, Numerology, Vaastu</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="medal" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Exp: 20 years</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="gold" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>Rs. 96/Min</Paragraph>
                                    </View>
                                    <View style={styles.fGrid}>
                                        <Avatar.Icon icon="group" color='black' size={30} style={{ backgroundColor: "transparent", }}></Avatar.Icon>
                                        <Paragraph>1529</Paragraph>
                                    </View>
                                </View>

                            </View>
                        </Card.Content>
                    </Card>


                </Container>


            </ScrollView>


        </>
    );
}
export default Astrologers

const Container = styled.View`
  flex: 1;
  padding:4px 8px;
  marginLeft:5px
  
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
    fGrid: {
        flex: 1,
        marginTop: -10,
        lineHeight: 0,
        flexDirection: "row",
        alignItems: "center"
    },
    mt4: {
        marginTop: 6
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
        alignItems: "center",
        padding: 0


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
        height: 70,
        padding: 10,
        marginTop: 15,
        borderRadius: 50,
        marginLeft: 5
    },
    logo: {
        width: 66,
        height: 58,
    },
    ml5: {
        marginLeft: 15,
    },
    mb5: {
        marginBottom: 5,
    },
});