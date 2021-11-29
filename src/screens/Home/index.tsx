import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HomeView } from './style';
import { Header } from '../../components/index';
import data from './data';
import { Entypo } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const Home = () => {
    console.log(data())
    const swiperRef = React.createRef();

    let [index, setIndex] = useState(0);
    const onSwiped = () => {
        setIndex((index + 1) % data.length);
    
    };

    return (
        <HomeView>
            <Header />
            <View style={{
                flex: 0.8,
            }}>
                

            </View>
            <View style={{
                justifyContent: "flex-end",
                flexDirection: "column"
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>
                    <Entypo.Button

                        name='cross'
                        size={94}
                        backgroundColor='#FF7777'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={"red"}
                        onPress={() => swiperRef.current.swipeLeft()}
                        borderRadius={200}
                        iconStyle={{
                            marginRight: 10,
                            marginLeft: 5
                        }}
                    />
                    <Entypo.Button
                        name='check'
                        size={94}
                        backgroundColor='#60DA60'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={"green"}
                        onPress={() => swiperRef.current.swipeRight()}
                        borderRadius={200}
                        iconStyle={{
                            marginRight: 0,
                            marginLeft: 10
                        }}
                    />
                </View>
            </View>
        </HomeView>
    )

}

export default Home