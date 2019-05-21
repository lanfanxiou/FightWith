import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { widthW, height } = Dimensions.get('window');//获取手机的宽和高

const AccordionTabstyles =StyleSheet.create( {
    bgView: {
        flex: 1
    },

    flatList: {
        flex: 1
    },
    listItemTouch: {
        height: 50,
        width: windowW,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemText: {
        textAlign:'center',
        fontSize: 20
    },
    listSubBg: {
        width: windowW-10,
        marginTop: 5
    },
    listSubItemTouch: {
        marginTop: 2,
        height: 40,
        width: windowW,
        backgroundColor: 'cyan'
    }
});
export default AccordionTabstyles;