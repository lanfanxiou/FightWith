//Swiperstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Swiperstyles =StyleSheet.create( {
    box1:{
        flex:1
    },
    image: {
        width:width,//scaleSizeW(705),
        height:scaleSizeH(380)
    },
});
export default Swiperstyles;