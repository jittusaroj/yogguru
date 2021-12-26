import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph, IconButton,Badge } from 'react-native-paper';
const Astrologer = () => {


    return (
        <>
            <View>
                <ImageBackground source={require('../../assets/astrobg.jpg')} style={{ width: '100%', height: 280, }}>
                    <View style={styles.flex}>
                        <View>
                            <Image style={styles.icon} source={require('../../assets/horoscope.jpg')} />
                            <Badge  style={{height:25,width:50,fontSize:18,borderRadius:30,backgroundColor:"white",float:"left"}}> 4+</Badge>
                        </View>
                        <View style={styles.ml5}>
                            <Title style={{ color: "white" }} >Know your destiny</Title>
                            <Paragraph style={{ color: "white" }}>Select your zodiac-sign</Paragraph>
                           
                        </View>
                    </View>
                    
                   
                   
                </ImageBackground>

            </View>

            <ScrollView >
                <Card style={{backgroundColor:"#16171c",color:"white",borderRadius:0}}>
                    <Card.Content>
                        <Title style={{ color: "white" }}>Experience</Title>
                        <Paragraph style={{color:"white"}}>12 Year</Paragraph>
                        <Title style={{ color: "white" }}>Consultation charge</Title>
                        <Paragraph style={{ color: "white" }}>Rs. 300/min </Paragraph>
                        <Title style={{ color: "white" }}> Location</Title>
                        <Paragraph style={{ color: "white" }}>New Delhi </Paragraph>
                        <Title style={{ color: "white" }}>Language spoken</Title>
                        <Paragraph style={{ color: "white" }}>Hindi, English </Paragraph>
                        <Title style={{ color: "white" }}> Expertise</Title>
                        <Paragraph style={{ color: "white" }}>Vedic, Prashna kundali </Paragraph>
                        <Title style={{ color: "white" }}>profile summery</Title>
                        <Paragraph style={{ color: "white",textAlign:"justify" }}>Aliquip veniam dolor est laborum non esse dolor tempor officia id.Aliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia
                            Aliquip veniam dolor est laborum non esse dolor tempor officia id.Aliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia idAliquip veniam dolor est laborum non esse dolor tempor officia id </Paragraph>
                    </Card.Content>
                </Card>

            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                <Button style={{ flex: 1, borderRadius: 0, padding: 10, fontSize: 15 }} icon="message">Chat now</Button>
                <Button onPress={(e)=>alert("Hi")}  mode="contained" style={{ flex: 1, borderRadius: 0, padding: 10, fontSize: 15 }} icon="phone">Call now</Button>
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
        marginTop:40,
        marginBottom:10,
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