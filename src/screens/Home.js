import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Alert, ScrollView } from 'react-native';
import { Appbar, Searchbar, Avatar, Button, Title, Card, Badge } from 'react-native-paper';
import { IconButton, Colors, Surface } from 'react-native-paper';
import { BottomNavigation, Text, Paragraph } from 'react-native-paper';

import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { borderColor, shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const MusicRoute = () => <Text>Music</Text>;
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;
const Home = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#9A0680", color: "white", shadowColor: "transparent", shadowOpacity: 0, shadowOffset: 0 }}>
                <IconButton
                    icon="menu"
                    color={Colors.white}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                <Appbar.Content title="YouGuru" />
                <Appbar.Action icon="bell" onPress={_handleSearch} />

            </Appbar.Header>
            <ScrollView>
                <View style={{ backgroundColor: "#9A0680", padding: 19, }}>
                    <Searchbar style={{ borderRadius: 30, shadowOpacity: 0, shadowOffset: 0, shadowColor: "transparent" }} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
                </View>
                <View>
                    <View>
                        <SimpleCarousel
                            data={[{
                                title: 'Hokkaido',
                                source: require('../../assets/slider.jpg'),
                            },
                            {
                                title: 'Tokyo',
                                source: require('../../assets/slider.jpg'),
                            },
                            {
                                title: 'Osaka',
                                source: require('../../assets/slider.jpg'),
                            },
                            {
                                title: 'Kyoto',
                                source: require('../../assets/slider.jpg'),
                            },
                            {
                                title: 'Shimane',
                                source: require('../../assets/slider.jpg'),
                            }
                            ]}
                            renderItem={(props, i, width) => {
                                return (
                                    <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
                                )
                            }}
                        />
                    </View>
                    <StatusBar translucent={true} />
                </View>
                <Title style={{ paddingLeft: 15 }}>Categories</Title>
                <View style={styles.container}>

                    <View style={styles.category}>
                        <Image source={require('../../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and att</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and att</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../assets/slider.jpg')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and att</Text>
                    </View>
                    <View style={styles.category} onPress={() => alert("HI")}>
                        <Image source={require('../../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and attraction</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and att</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.textCenter}>Love and att</Text>
                    </View>


                </View>
                <Image source={require('../../assets/slider.jpg')} style={{ width: "100%", height: 200 }} />
                <View style={styles.containerFluid}>
                    
                    <Card style={{width:"49%",marginTop:10}}>
                        <Card.Cover style={{height:140}} source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions style={{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
                           <Title>Astro aswin</Title>
                           <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",}}>
                           <Paragraph style={{textDecorationLine:"line-through"}}>Rs. 51/min</Paragraph>
                            <Paragraph> Rs. 34.51/min</Paragraph>
                           </View>
                           <Text style={styles.badge}>4+</Text>
                        </Card.Actions>
                    </Card>
                </View>
            </ScrollView>
            {/* <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            /> */}


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        borderStyle: "solid",
        borderColor: "white",
        flexWrap: "wrap"

    },
    badge:{
        borderRightColor:"white",alignSelf:"center", color:"white",fontSize:18, backgroundColor:"red",padding:3,paddingLeft:30,paddingRight:30,borderRadius:30
    },
    containerFluid: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        flexWrap: "wrap"

    },
    icon: {
        width: 60, height: 50,
        alignSelf: "center",
        padding: 5
    },
    textCenter: {
        textAlign: "center",
        marginTop: 5
    },
    category: {
        padding: 20,
        textAlign: "center",
        borderLeftColor: "white",
        borderStyle: "solid"

    }
});
export default Home
