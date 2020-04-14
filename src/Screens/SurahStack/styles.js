import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    ListContainer:{
        flex:1,
        marginTop: 15
    },
    itemContainer: {
        flexDirection: 'row',
        height: 70,
        width,
        marginVertical: 5,
        alignItems:'center',
    },
    surahNum: {
        marginHorizontal: 10,
        fontSize: 20,
        width: width * .09,
        color: 'green',

    },
    engNameContainer:{
        width: width * .4,
    },
    surahEngName:{
        fontSize: 20,
        color: 'green',
    },
    surahTranslateName:{
        fontSize: 15,
        color: 'gray',
    },
    arabicName:{
        fontSize: 20,
        color: 'green',
        textAlign:'right',
        fontFamily:'Amiri-Regular',
        width: width * .3,
    },
    surahIcon:{
        fontSize: 20,
        width: width*.1,
        color:'gray',
        fontFamily:'Amiri-Regular'
    },
    // Surah Page Styles
    Container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    HeaderContainer:{
        width,
    },
    SurahName:{
        fontSize:30,
        color:'#2b580c',
        textAlign:'center',
        marginTop: 15,
        fontFamily:'Amiri-Regular'
    },
    SurahEngName:{
        fontSize:25,
        color:'#2b580c',
        textAlign:'center',
        fontFamily:'Amiri-Regular'
    },
    AyahsCount:{
        fontSize: 15,
        color: '#2b580c',
        alignSelf:'center',
        fontFamily:'Amiri-Regular'
    },
    AyahsCountContainer:{
        flexDirection:'row',
        width: width*.7,
        alignSelf:'center',
        marginVertical: 10,
        justifyContent:'space-between'
    },
    // Ayah Component Styles
    AyahContainer:{
        width,
    },
    AyahText:{
        fontSize: 30,
        color:'#2b580c',
        textAlign:'right',
        marginHorizontal: 15,
        fontFamily:'Amiri-Regular'
    },
    AyahNum:{
        fontSize: 20,
        color:'#639a67',
        marginHorizontal: 5,
        fontFamily:'Amiri-Regular'
    }
});

export default styles;