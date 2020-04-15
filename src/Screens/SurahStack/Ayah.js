import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Ayah = ({ item }) => {
    const { numberInSurah, text } = item
    const color = numberInSurah % 2 == 1 ? '#ffffff' : '#d8ebb5'
    return (
        <View key={numberInSurah} style={[styles.AyahContainer, { backgroundColor: color }]} >
            <Text style={styles.AyahNum}> {numberInSurah} </Text>
            <Text style={styles.AyahText}>{text}</Text>
        </View>
    )
}


export default Ayah
