import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Image } from 'react-native';
import styles from './styles';

const CardItem = ({ actions, image, onPressLeft, onPressRight }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageStyle} />
            {actions && (

                <View style={styles.buttonContainer}>
                    <Entypo.Button

                        name='cross'
                        size={50}
                        backgroundColor='#FF7777'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={"red"}
                        onPress={() => onPressLeft()}
                        borderRadius={33}
                        iconStyle={{
                            marginRight: 0,
                            width: 50,
                            height: 50
                        }}/>
                        
                    <Entypo.Button
                        name='check'
                        size={50}
                        backgroundColor='#60DA60'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={"green"}
                        onPress={() => onPressRight()}
                        borderRadius={33}
                        iconStyle={{
                            marginRight: 0,
                            width: 50,
                            height: 50
                        }}/>
                </View>

            )}
        </View>
    )
};

export default CardItem;


