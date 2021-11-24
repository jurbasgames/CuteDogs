import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HomeView } from './style';
import { Header, Card } from '../../components/index';
import Swiper from 'react-native-deck-swiper';
import data from './data';
import { Entypo } from '@expo/vector-icons';
import api from '../../services/api'

const swiperRef = React.createRef();



// Favoritar
// function favorites() {

// }

const Home = () => {
//     const [data, setData] = useState([]);
//     console.log("1",data)

//     useEffect( () => {
//         let res = api.get(
//             '/images/search?limit=1',
//         );
//         setData(res);
//         console.log("4")
        
//     }, []);
//     //-----------------------

    let [index, setIndex] = useState(0);
    const onSwiped = () => {
        setIndex((index + 1) % data.length
        );
    };
//     //-----------------------
//     console.log("2",data)
    return (
        <HomeView>
            <Header />
            <View style={{
                flex: 0.8,
            }}>
                <Swiper
                    ref={swiperRef}
                    cards={data}
                    cardIndex={index}
                    renderCard={card => <Card card={card} />}

                    backgroundColor={'transparent'}
                    onSwipedLeft={onSwiped}
                    onSwipedRight={onSwiped}
                    // onSwipedLeft={()=>{
                    //     getNext
                    // }}
                    // onSwipedRight={()=>{
                    //     getNext

                    // }}
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