import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Surahs from './Surahs';
import SurahPage from './SurahPage';
const Stack = createStackNavigator();

function SurahStack() {
    return (

        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Surahs" component={Surahs} />
            <Stack.Screen name="SurahPage" component={SurahPage} />
        </Stack.Navigator>
    );
}

export default SurahStack
