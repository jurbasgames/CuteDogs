import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  Home,
  Favorites,
  Profile
} from './src/screens'
import { Entypo } from '@expo/vector-icons'
import api from './src/services/api'

const Tab = createBottomTabNavigator();

interface Deck {
  id: number;
  url: string;
  categories?: any;
  breeds?: any;
}


export default function App() {
  const [deck, setDeck] = useState<Deck[]>([]);

    useEffect(() => {
        api.get('/images/search?limit=10').then(response => {
            console.log(response.data)
            setDeck(response.data);
        })
    }, []);
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={"Profile"}
      screenOptions={{
        headerShown: false,
        
        tabBarActiveTintColor: '#305865',
        tabBarInactiveTintColor: '#112025',
        tabBarStyle:{
          backgroundColor: '#16BAC6', 
          padding:5,
        }
      }}
      
        >
      
        <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='heart' size={size} color={color}/>

          )
        }}
        />
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='home' size={size} color={color}/>

          )
        }} />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='user' size={size} color={color}/>

          )
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


