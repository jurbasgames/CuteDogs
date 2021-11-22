import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function Header() {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={require('../../../assets/logo.png')} style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginBottom: 8,

    },
    button:{
        display: 'flex',
        alignItems: "center",
        margin:12,
    }
})
