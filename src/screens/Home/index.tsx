import React from 'react';
import { View } from 'react-native';
//import CardStack, { Card } from 'react-native-card-stack-swiper';
import { HomeView } from './style'
import { Header } from '../../components/index';
import { Divider } from 'react-native-elements'


const Home = () => {
    return (
        <HomeView>
            <Header/>
            <Divider/>
            <View>
                Footer
            </View>
        </HomeView>
    )
}

export default Home