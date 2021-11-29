import React, { useEffect, useState, useRef, createRef  } from 'react';
import { View } from 'react-native';
import { HomeView } from './style';
import { Header, CardItem } from '../../components';
import CardStack, { Card } from 'react-native-card-stack-swiper';

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

    useEffect( () => {
         api.get('/images/search?limit=20').then(response => {
            if (response) {
                setDog(response.data);
            }
        })
    }, []);
    let swiper = createRef();

    return (
        <HomeView>
            <Header />
            <View>
                <CardStack
                    style={{alignItems:'center'}}
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
                            />
                        </Card>
                    ))}
                </CardStack>

            </View>
            
        </HomeView>
    )

}

export default Home