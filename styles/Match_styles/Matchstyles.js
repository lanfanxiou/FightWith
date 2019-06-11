//Matchstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Matchstyles =StyleSheet.create( {
    box1: {
        flex: 1,
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#333333'
    },
    view2: {
        flex: 10,
        backgroundColor: '#000000',
        padding: scaleSizeW(10)
    },
    image: {
        width: scaleSizeW(410),
        height: scaleSizeH(60),
        marginLeft: scaleSizeW(15)
    },
    view2_1: {
        flex: 1,
        flexDirection: 'row'
    },
    view4: {
        flex: 8
    },
    view4_1: {
        width: '100%',
        height: scaleSizeH(120),
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#303030',
        flexDirection: 'row',
    },
    view5:{
        width:width,
        height:scaleSizeH(160),
        justifyContent:'center',
        alignItems:'center',
    },
    view5_1:{
        width:scaleSizeW(250),
        height:scaleSizeH(70),
        marginTop:scaleSizeH(8),
        marginLeft:scaleSizeW(-20),
        backgroundColor:'#41C7DB',
        justifyContent:'center',
        alignItems:'center',
    },
    view5_txt:{
        color:'#000',
        fontSize:setSpText(20)
    }
});
export default Matchstyles;