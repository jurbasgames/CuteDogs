import React from "react";
import { View, Image, StyleSheet } from "react-native";


export default function Card({ card }) {
    return (
        <View style={styles.card}>
            <Image source={card.url} style={styles.cardImage} />
        </View>
    )
};

const styles = StyleSheet.create({
    cardImage: {
      width: 160,
      flex: 1,
      resizeMode: 'contain'
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