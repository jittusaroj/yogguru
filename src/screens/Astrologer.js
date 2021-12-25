import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
const Astrologer = () => {


    return (
        <>
            <View>
                <ImageBackground source={require('../../assets/astrobg.jpg')} style={{ width: '100%', height: 280, }}>
                    <View style={styles.flex}>
                        <View>
                            <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                        </View>
                        <View style={styles.ml5}>
                            <Title style={{ color: "white" }} >Know your destiny</Title>
                            <Paragraph style={{ color: "white" }}>Select your zodiac-sign</Paragraph>
                        </View>
                    </View>
                </ImageBackground>

            </View>

            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title>Experience</Title>
                        <Paragraph>12 Year</Paragraph>
                        <Title>Consultation charge</Title>
                        <Paragraph>Rs. 300/min </Paragraph>
                        <Title>Location</Title>
                        <Paragraph>New Delhi </Paragraph>
                        <Title>Language spoken</Title>
                        <Paragraph>Hindi, English </Paragraph>
                        <Title>Expertise</Title>
                        <Paragraph>Vedic, Prashna kundali </Paragraph>
                        <Title>profile summery</Title>
                        <Paragraph>Aliquip veniam dolor est laborum non esse dolor tempor officia id.Aliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia
                            Aliquip veniam dolor est laborum non esse dolor tempor officia id.Aliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia id </Paragraph>
                    </Card.Content>
                </Card>

            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                <Button style={{ flex: 1, borderRadius: 0, padding: 10, fontSize: 15 }} icon="message">Chat now</Button>
                <Button mode="contained" style={{ flex: 1, borderRadius: 0, padding: 10, fontSize: 15 }} icon="phone">Call now</Button>
            </View>

        </>
    );
}
export default Astrologer




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
        alignItems: "center",
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
        height: 70,
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