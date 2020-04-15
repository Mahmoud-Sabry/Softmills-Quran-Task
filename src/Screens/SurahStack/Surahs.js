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
    const network = useSelector(state => state.quran.network)
    const fail = useSelector(state => state.quran.fail)
    const errorMessage = useSelector(state => state.quran.errorMessage)
    success ? null : dispatch(getQuran())

    const netInfo = useNetInfo();


    if (!success || (netInfo.isConnected && !success ) ) {
        dispatch(getQuran())
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator size="large" color="green" />
                <Text style={{ fontSize: 25, marginVertical: 5, color: 'green', textAlign:'center' }}>{fail ? errorMessage : 'Loading'}</Text>
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
