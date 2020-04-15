import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import Ayah from './Ayah';
import styles from './styles';
import { Icon } from 'native-base';

const SurahPage = (props) => {
    const { name, englishNameTranslation, revelationType, ayahs } = props.route.params.item
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView  >
                <View style={styles.HeaderContainer}>
                    <Text style={styles.SurahName} >{name}</Text>
                    <Text style={styles.SurahEngName} >{englishNameTranslation}</Text>
                    <View style={styles.AyahsCountContainer}>
                        <Icon
                            type="FontAwesome5"
                            name={revelationType == "Meccan" ? "kaaba" : "mosque"}
                            style={styles.surahIcon}
                        />
                        <Text style={styles.AyahsCount}>
                            Ayahs: {ayahs.length}
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={ayahs}
                    renderItem={({ item }) => <Ayah item={item} />}
                    extraData={item => item.number}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SurahPage
