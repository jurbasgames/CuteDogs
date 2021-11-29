import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './styles'


export default function Header() {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={require('../../../assets/logo.png')} style={styles.image} />
        </TouchableOpacity>
    )
}


