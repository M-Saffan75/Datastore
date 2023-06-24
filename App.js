import React from 'react';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetSet from './Screens/GetSet';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetSet">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GetSet" component={GetSet} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})