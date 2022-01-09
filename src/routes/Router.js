import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contact, Create, Details, Detailsdata, FirstScreen, Home } from '../pages';
import ButtonNavigator from './ButtonNavigator';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Appload = () => {
    return (
        <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            <Tab.Screen name="Create" component={Create} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}


const Router = () => {

    return (
        <Stack.Navigator initialRouteName='FirstScreen'>
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Appload" component={Appload} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsData" component={Detailsdata} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
