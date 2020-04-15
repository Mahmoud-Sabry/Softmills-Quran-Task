import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getQuran, setNetwork } from '../../Redux/Slices/Quran';
import SurahItem from './SurahItem';
import styles from './styles';
import { useNetInfo } from "@react-native-community/netinfo";


const Surahs = (props) => {

    const dispatch = useDispatch();
    const quran = useSelector(state => state.quran.quran)
    const success = useSelector(state => state.quran.success)
    const fail = useSelector(state => state.quran.fail)
    const errorMessage = useSelector(state => state.quran.errorMessage)

    const netInfo = useNetInfo();

    if (netInfo.isConnected && !success) {
        dispatch(getQuran())
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                {!fail && <ActivityIndicator size="large" color="green" />}
                <Text style={styles.ErrorText}>{fail ? errorMessage : 'Loading'}</Text>
            </View>
        )
    } else if (!netInfo.isConnected && !success) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.ErrorText}>No Internet Connection</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <FlatList
                    data={quran}
                    style={styles.ListContainer}
                    renderItem={({ item }) => <SurahItem item={item} Props={props} />}
                    keyExtractor={item => item.number}
                />
            </SafeAreaView>
        )
    }

}

export default Surahs
