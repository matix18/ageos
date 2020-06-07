import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, Title, Image, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './components/HomeScreen.js';
import HeaderScreen from './components/HeaderScreen.js';
import MeteoPage from './components/MeteoScreen.js';
import SearchPage from './components/SearchScreen.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackHomeScreen() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function StackMeteoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Méteo" component={MeteoScreen} />
    </Stack.Navigator>
  );
}

function StackRechercheScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recherche" component={RechercheScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomePage />
    </View>
  );
}

function MeteoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MeteoPage />
    </View>
  );
}

function RechercheScreen() {
  return (
    <SearchPage/>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <HeaderScreen>A.G.E.O.S Météo</HeaderScreen>
        <Tab.Navigator>
          <Tab.Screen name="Recherche" component={StackRechercheScreen} />
          <Tab.Screen name="Méto" component={StackMeteoScreen} />
          <Tab.Screen name="Home" component={StackHomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
