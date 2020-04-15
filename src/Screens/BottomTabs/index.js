import React from 'react'
import Tabs from '../Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Dimensions, View, TouchableOpacity, StyleSheet } from 'react-native';
const { width } = Dimensions.get('screen');
import { Icon } from 'native-base';

import MyTabBar from './MyTabBar';
import Empty from '../Empty/emptyComponent';
const Tab = createBottomTabNavigator();



const BottomTabs = (props) => {
    return (
            <SafeAreaView style={styles.Container}>
            <View style={styles.headerContainer} >
                <TouchableOpacity style={styles.menuButton} onPress={()=> props.navigation.openDrawer()} >
                    <Icon type="Entypo" name="menu" style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Quran" component={Tabs} />
                <Tab.Screen name="Stats" component={Empty} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerContainer: {
        width,
        height: 50,
        backgroundColor: 'green'
    },
    menuButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcon: {
        color: '#ffffff',
        fontSize: 40
    },
});

export default BottomTabs
