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
    }
});
export default Matchstyles;