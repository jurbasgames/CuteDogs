import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  Home,
  Favorites
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  </NavigationContainer>
}


