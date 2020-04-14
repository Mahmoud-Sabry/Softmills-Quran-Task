import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    TabBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#2b580c',
        height: 70
    },
    BottomTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TabIcon: {
        color: '#ffffff'
    },
    TabTitle: {
        color: '#ffffff',
        fontSize: 20
    },
    underLine: {
        width: width * .3,
        height: 2,
        backgroundColor: '#639a67'
    }

})

export default styles