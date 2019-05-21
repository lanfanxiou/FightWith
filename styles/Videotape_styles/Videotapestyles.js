//Videotapestyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Videotapestyles =StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor:'#000'
    },
    playButton: {
        width: 50,
        height: 50,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 5,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    bottomControl: {
        flexDirection: 'row',
        height: 50,
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    backButton: {
        flexDirection:'row',
        width: 44,
        height: 44,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10
    },
    control_play_btn: {
        width: 44,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default Videotapestyles;