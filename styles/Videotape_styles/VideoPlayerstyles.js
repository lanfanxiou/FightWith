//VideoPlayerstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const VideoPlayerstyles =StyleSheet.create( {
    playButton: {
        width: 50,
        height: 50,
    },
    bottomControl: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    timeText: {
        fontSize: 13,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    videoTitle: {
        fontSize: 14,
        color: 'white',
        flex: 1,
        marginRight: 10,
    },
    control_play_btn: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    control_switch_btn: {
        width: 15,
        height: 15,
        marginRight: 15
    },
    backButton: {
        flexDirection:'row',
        width: 44,
        height: 44,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10
    },
    bottomOptionView: {
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 15,
        height: 50
    },
    bottomOptionText: {
        fontSize: 14,
        color: 'white',
    },
    topOptionView: {
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 15,
        height: 50
    },
    topOptionItem: {
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    topImageOption: {
        width: 24,
        height: 24
    }
});
export default VideoPlayerstyles;