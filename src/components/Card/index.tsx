import React from "react";
import { View, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {Img} from 'react-image'

export default function Card( card: string ) {
    let url = "https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg"
    console.log(card)
    return (
        <View style={styles.card}>
            <Img src={card.card} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}}//style={styles.cardImage} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    cardImage: {
      width: 160,
      height: 160,
      flex: 1,
      resizeMode: 'stretch'
    },
    card: {
      flex: 0.45,
      borderRadius: 8,
      shadowRadius: 25,
      shadowColor: '#000000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 0 },
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    }
})