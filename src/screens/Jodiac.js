import React, { component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import { Tabs, TabScreen, useTabIndex, useTabNavigation } from 'react-native-paper-tabs';
const Jodiac = () => {
    

    return (
        <>
            <Card style={{ backgroundColor: "white" }}>
                <Card.Content>
                    <Image style={styles.tinyLogo} source={require('../../assets/horoscope.jpg')}
                    />
                    <Title style={{textAlign:"center",marginBottom:10}} >Mesh</Title>
                </Card.Content>
            </Card>
            <ScrollView>
                <Tabs>
                    <TabScreen label="Today">
                        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
                            <Text>this is airplan tab view</Text>
                            <Text>this is airplan tab view</Text>

                        </View>
                    </TabScreen>
                    <TabScreen label="Tomorrow" >
                        <View style={{ backgroundColor: 'red' }} >
                            <Text>this is airplan tab view</Text>
                        </View>
                    </TabScreen>
                </Tabs>
                <Card>
                    <Card.Content>
                        <Title>24/10/2022</Title>
                        <Paragraph>
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                        </Paragraph>
                        <Paragraph>
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                            Proident culpa quis exercitation aute proident eiusmod elit.
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </>
    );
}
export default Jodiac


const styles = StyleSheet.create({
    
    tinyLogo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 70,
        alignSelf: 'center',
    },
    
});