import React, { useEffect, useState, useRef, createRef  } from 'react';
import { View, Text } from 'react-native';
import { HomeView } from './style';
import { Header } from '../../components/index';
import { Entypo } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../../components/CardItem';
import data from './data';

import api from '../../services/api';

interface Dog {
    id: number;
    url: string;
    width: number;
    height: number;
    breeds?: Array<1>,
}

const Home = () => {
    
    const [dog, setDog] = useState<Dog[]>([]);

    useEffect(async () => {
        await api.get('/images/search?limit=10').then(response => {
            if (response) {
                console.log(response.data)
                setDog(response.data);
            }
        })
    }, []);
    let swiper = createRef();

    return (
        <HomeView>
            <Header />
        
            <View style={{ flex: 0.8, }}>
                
                <CardStack
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiperProp => { swiper = swiperProp }}
                >
                    {dog.map((item, index) => (
                        <Card key={index}>
                            <CardItem
                                image={item.url}
                                actions
                                onPressLeft={() => swiper.swipeLeft()}
                                onPressRight={() => swiper.swipeRight()}
                                variant
                            />
                        </Card>
                    ))}
                </CardStack>

            </View>
            
        </HomeView>
    )

}

export default Home