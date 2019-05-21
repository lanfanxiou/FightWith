//Rulestyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Rulestyles =StyleSheet.create( {
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonMargin: {
        marginVertical: 10,
        marginLeft:5,
        backgroundColor: '#41C7DB'
    },
    text: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        margin: 5,
    },
    box1:{
        flex:1
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
    },
    view2:{
        flex:10,
        backgroundColor: '#000',

        padding:scaleSizeW(25)
    },
    ruletxt:{
        color:'#FFFFFF',
        fontSize:setSpText(30)
    },
});
export default Rulestyles;