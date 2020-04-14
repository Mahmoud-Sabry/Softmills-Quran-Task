import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Surah from '../SurahStack/index';
import Empty from '../Empty/emptyComponent';

const Tabs = (props) => {
    return (
        <SafeAreaView style={styles.Container}>
            <Tab.Navigator
                tabBarOptions={{
                    style: { backgroundColor: '#ecce6d' },
                    indicatorStyle: { backgroundColor: '#2b580c' }
                }}
            >
                <Tab.Screen name="Surah" component={Surah} />
                <Tab.Screen name="Juz" component={Empty} />
                <Tab.Screen name="Page" component={Empty} />
                <Tab.Screen name="Hizb" component={Empty} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});

export default Tabs
