import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './Screens/BottomTabs';

const Drawer = createDrawerNavigator();
console.disableYellowBox = true;

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Provider store={store} >
                <NavigationContainer >
                    <Drawer.Navigator>
                        <Drawer.Screen name="Quran" component={BottomTabs} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
};

export default App;
