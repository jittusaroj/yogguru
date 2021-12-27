import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Dimensions, Image } from 'react-native'
import CarouselComp from 'react-native-snap-carousel'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const appData = [
    {
        author: "Alice Walker",
        quote: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful",
        imgUrl: "https://source.unsplash.com/200x300/?nature"
    },
    {
        author: "Khalil Gibran",
        quote: "Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
        imgUrl: "https://source.unsplash.com/200x300/?water"
    },
    {
        author: "Helen Keller",
        quote: "To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug",
        imgUrl: "https://source.unsplash.com/200x300/?island"
    }
]
const Slider = () => {
    const isCarousel = useRef(null);
    const CarouselItem = ({ item, index }) => {
        return (
            <View>
                <Image source={{ uri: item.imgUrl }} />
                <Text style={styles.header}>{item.author}</Text>
                <Text style={styles.body}>{item.quote}</Text>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView>
                <View>
                    <CarouselComp
                        layout="tinder"
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={appData}
                        renderItem={CarouselItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}

                    />

                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }

    })
export default Slider
