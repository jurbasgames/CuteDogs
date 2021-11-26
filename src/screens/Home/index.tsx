import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HomeView } from './style';
import { Header,Card } from '../../components/index';
import data from './data';
import { Entypo } from '@expo/vector-icons';
import api from '../../services/api'
import Slider from '../../components/Slider';

import Swiper from 'react-native-deck-swiper';

const Home = ({deck}) => {
    const swiperRef = React.createRef();

    let [index, setIndex] = useState(0);
    const onSwiped = () => {
        setIndex((index + 1) % deck.length);
    };

    return (
        <HomeView>
            <Header />
            <View style={{
                flex: 0.8,
            }}>
                <Swiper
                    ref={swiperRef}
                    cards={deck}
                    // [
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Vermin hunting, fox bolting",
                    //                 "height": {
                    //                     "imperial": "13 - 16",
                    //                     "metric": "33 - 41"
                    //                 },
                    //                 "history": " England",
                    //                 "id": 259,
                    //                 "life_span": "13 – 14 years",
                    //                 "name": "Wire Fox Terrier",
                    //                 "reference_image_id": "SJ6f2g9EQ",
                    //                 "temperament": "Fearless, Friendly, Bold, Keen, Alert, Quick",
                    //                 "weight": {
                    //                     "imperial": "15 - 19",
                    //                     "metric": "7 - 9"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 795,
                    //         "id": "SJ6f2g9EQ",
                    //         "url": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg",
                    //         "width": 1000
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Circus performer",
                    //                 "breed_group": "Non-Sporting",
                    //                 "country_code": "US",
                    //                 "height": {
                    //                     "imperial": "15 - 19",
                    //                     "metric": "38 - 48"
                    //                 },
                    //                 "id": 12,
                    //                 "life_span": "12 - 15 years",
                    //                 "name": "American Eskimo Dog",
                    //                 "reference_image_id": "Bymjyec4m",
                    //                 "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
                    //                 "weight": {
                    //                     "imperial": "20 - 40",
                    //                     "metric": "9 - 18"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 1631,
                    //         "id": "EB8A5HQHX",
                    //         "url": "https://cdn2.thedogapi.com/images/EB8A5HQHX.jpg",
                    //         "width": 1920
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Badger, otter hunting",
                    //                 "breed_group": "Terrier",
                    //                 "height": {
                    //                     "imperial": "21 - 23",
                    //                     "metric": "53 - 58"
                    //                 },
                    //                 "id": 4,
                    //                 "life_span": "10 - 13 years",
                    //                 "name": "Airedale Terrier",
                    //                 "origin": "United Kingdom, England",
                    //                 "reference_image_id": "1-7cgoZSh",
                    //                 "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
                    //                 "weight": {
                    //                     "imperial": "40 - 65",
                    //                     "metric": "18 - 29"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 1200,
                    //         "id": "h0vltXvfC",
                    //         "url": "https://cdn2.thedogapi.com/images/h0vltXvfC.jpg",
                    //         "width": 1344
                    //     },
                    //     {
                    //         "breeds": [],
                    //         "height": 667,
                    //         "id": "YmaAJ-aLR",
                    //         "url": "https://cdn2.thedogapi.com/images/YmaAJ-aLR.jpg",
                    //         "width": 1000
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Cattle herding, herding trials",
                    //                 "breed_group": "Herding",
                    //                 "country_code": "AU",
                    //                 "height": {
                    //                     "imperial": "17 - 20",
                    //                     "metric": "43 - 51"
                    //                 },
                    //                 "id": 21,
                    //                 "life_span": "12 - 14 years",
                    //                 "name": "Australian Cattle Dog",
                    //                 "reference_image_id": "IBkYVm4v1",
                    //                 "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
                    //                 "weight": {
                    //                     "imperial": "44 - 62",
                    //                     "metric": "20 - 28"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 565,
                    //         "id": "aBlkZ0fo0",
                    //         "url": "https://cdn2.thedogapi.com/images/aBlkZ0fo0.jpg",
                    //         "width": 1080
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Sheep herder",
                    //                 "breed_group": "Herding",
                    //                 "height": {
                    //                     "imperial": "18 - 22",
                    //                     "metric": "46 - 56"
                    //                 },
                    //                 "id": 50,
                    //                 "life_span": "12 - 16 years",
                    //                 "name": "Border Collie",
                    //                 "reference_image_id": "sGQvQUpsp",
                    //                 "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
                    //                 "weight": {
                    //                     "imperial": "30 - 45",
                    //                     "metric": "14 - 20"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 1080,
                    //         "id": "sGQvQUpsp",
                    //         "url": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
                    //         "width": 1080
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Sheep herder",
                    //                 "breed_group": "Herding",
                    //                 "height": {
                    //                     "imperial": "18 - 22",
                    //                     "metric": "46 - 56"
                    //                 },
                    //                 "id": 50,
                    //                 "life_span": "12 - 16 years",
                    //                 "name": "Border Collie",
                    //                 "reference_image_id": "sGQvQUpsp",
                    //                 "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
                    //                 "weight": {
                    //                     "imperial": "30 - 45",
                    //                     "metric": "14 - 20"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 1080,
                    //         "id": "hcx2zV5Bj",
                    //         "url": "https://cdn2.thedogapi.com/images/hcx2zV5Bj.jpg",
                    //         "width": 1080
                    //     },
                    //     {
                    //         "breeds": [
                    //             {
                    //                 "bred_for": "Good luck charms, mascots, watchdogs, herding dogs, and companions",
                    //                 "breed_group": "Non-Sporting",
                    //                 "height": {
                    //                     "imperial": "14 - 17",
                    //                     "metric": "36 - 43"
                    //                 },
                    //                 "id": 246,
                    //                 "life_span": "12 - 15 years",
                    //                 "name": "Tibetan Terrier",
                    //                 "reference_image_id": "6f5n_42mB",
                    //                 "temperament": "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
                    //                 "weight": {
                    //                     "imperial": "20 - 24",
                    //                     "metric": "9 - 11"
                    //                 }
                    //             }
                    //         ],
                    //         "height": 1080,
                    //         "id": "ZRQ0TYzz6",
                    //         "url": "https://cdn2.thedogapi.com/images/ZRQ0TYzz6.jpg",
                    //         "width": 1080
                    //     },
                    //     {
                    //         "breeds": [],
                    //         "height": 720,
                    //         "id": "rPpwljM2L",
                    //         "url": "https://cdn2.thedogapi.com/images/rPpwljM2L.jpg",
                    //         "width": 720
                    //     },
                    //     {
                    //         "breeds": [],
                    //         "height": 900,
                    //         "id": "fqYLZ9MFz",
                    //         "url": "https://cdn2.thedogapi.com/images/fqYLZ9MFz.jpg",
                    //         "width": 1600
                    //     }
                    // ]
                    cardIndex={0}
                    infinite
                    renderCard={
                        (card, index) => <Card card={card.url} />


                    }
                    backgroundColor={'transparent'}
                    onSwipedLeft={onSwiped}
                    onSwipedRight={onSwiped}
                    onSwipedAll={() => { }}
                    onTapCard={() => swiperRef.current.swipeLeft()}
                    cardVerticalMargin={50}
                    stackSize={4}
                    stackScale={10}
                    stackSeparation={14}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    disableTopSwipe
                    disableBottomSwipe
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    position: 'none',
                                    backgroundColor: "red",
                                    borderColor: 'red',
                                    color: 'white',
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {

                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: -20
                                }
                            }
                        },
                        right: {
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'green',
                                    borderColor: 'green',
                                    color: 'white',
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: 20
                                }
                            }
                        }
                    }}
                    overlayLabelWrapperStyle={{
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        zIndex: 2,
                        flex: 1,
                        width: '100%',
                        height: '100%'
                    }}
                />

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