import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.TabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.BottomTab}
                    >
                        <Icon
                            type={label == 'Quran' ? "FontAwesome5" : "Ionicons"}
                            name={route.name == 'Quran' ? "quran" : "ios-stats"}
                            style={styles.TabIcon}
                        />
                        <Text style={styles.TabTitle}>
                            {label}
                        </Text>
                        {isFocused ? <View style={styles.underLine} /> : null}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default MyTabBar
