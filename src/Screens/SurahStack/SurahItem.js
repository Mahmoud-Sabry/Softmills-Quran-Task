import React, { Component } from 'react'
import { Text, View, TouchableOpacity, } from 'react-native'
import { Icon } from 'native-base';
import styles from './styles';

const SurahItem = ({ Props, item }) => {
    const { number, englishName, englishNameTranslation, name, revelationType } = item
    return (
        <TouchableOpacity key={number} style={styles.itemContainer} onPress={() => Props.navigation.navigate('SurahPage',{item})}>
            <Text style={styles.surahNum} >{number}</Text>
            <View style={styles.engNameContainer} >
                <Text style={styles.surahEngName} >{englishName}</Text>
                <Text style={styles.surahTranslateName} >{englishNameTranslation}</Text>
            </View>
            <Icon type="FontAwesome5" name={revelationType == "Meccan" ? "kaaba" : "mosque"} style={styles.surahIcon} />
            <Text style={styles.arabicName} >{name}</Text>
        </TouchableOpacity>
    )
}

export default SurahItem
