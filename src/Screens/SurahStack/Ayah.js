import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Ayah = ({ item }) => {
    const color = item.numberInSurah % 2 == 1 ? '#ffffff' : '#d8ebb5'
    return (
        <View style={[styles.AyahContainer, { backgroundColor: color }]} >
            <Text style={styles.AyahNum}> {item.numberInSurah} </Text>
            <Text style={styles.AyahText}>{item.text}</Text>
        </View>
    )
}


export default Ayah
