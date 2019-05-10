import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, Dimensions} from "react-native";
import {scaleSizeH, scaleSizeW} from "../../utils/Screen";
import Video from 'react-native-af-video-player'
import Details from "../static/Details";


const { width, height } = Dimensions.get('window');//获取手机的宽和高
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';


class Videotape extends Component {

    render() {

        return (
            <View style={styles.box1}>
                {/*顶部*/}
                <View style={styles.view1}>
                   <Details/>
                </View>
                <View style={styles.view2}>
                    <View style={styles.videolistarr}>
                        {/*视频*/}
                        <View style={styles.videolist}>
                            <View style={styles.videos}>
                                <View style={styles.container}>
                                    <Video
                                        autoPlay={true}
                                        loop={true}
                                        style={styles.videocontent}
                                        fullScreenOnly={false}
                                        inlineOnly={true}
                                        url={url}
                                    />
                                </View>
                            </View>
                            <View style={styles.videostxt}>
                                <Text style={styles.vidtxt}>MASFIGHT  菲律宾赛热血开场 强强碰撞胜者为王 </Text>
                            </View>
                            <View style={styles.videostime}>
                                <Text style={styles.vidtimetxt}>2019年03月27日</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333',

    },
    view2:{
        flex:10,
        borderWidth:1,
        padding:scaleSizeW(20),
        backgroundColor: '#000000'
    },
    image:{
        width:30,
        height:scaleSizeH(80),
    },
    //展示区
    videolistarr:{
        width:scaleSizeW(705),
        height:height,

        // backgroundColor:'#dedede'
    },
    videolist:{
        width:scaleSizeW(705),
        height:scaleSizeH(630),
        backgroundColor:'#ffffff',
        borderRadius:scaleSizeW(25),
        padding: scaleSizeW(60),
        marginBottom:scaleSizeW(70)
    },
    videos:{
        width:scaleSizeW(580),
        height:scaleSizeH(350),
        // backgroundColor:'#f40',
        justifyContent: 'center',
    },
    videostxt:{
        marginTop:scaleSizeH(28),
        width:scaleSizeW(580),
        height:scaleSizeH(100),

    },
    vidtxt:{
        color:'#000000',
        fontSize:scaleSizeW(33)
    },
    videostime:{
        width:scaleSizeW(580),
        height:scaleSizeH(80),

    },
    vidtimetxt:{
        color: '#000000',
        lineHeight:scaleSizeH(100)
    },
    container: {
        justifyContent: 'center',
        alignItems: "center"
    },
    videocontent: {
        width:scaleSizeW(580),
        height:scaleSizeH(350),
    },

});
export default Videotape;
