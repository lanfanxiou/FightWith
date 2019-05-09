import React,{Component} from "react";
import {View,Image,StyleSheet,Dimensions} from "react-native";
import Swiper from "react-native-swiper";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const { width, height } = Dimensions.get('window');//获取手机的宽和高

class Swiper1 extends Component {

    render() {
        return (
            <View style={styles.box1}>
                <Swiper
                showsButtons={false}       //为false时不显示控制按钮
                paginationStyle={{      //小圆点位置
                    bottom: scaleSizeH(10)
                }}
                loop={true}        //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                autoplay={true}          //自动轮播
                autoplayTimeout={2}      //每隔2秒切换
            >
                <Image style={styles.image} source={require('../../imagers/Match/a1.jpg')}/>
                <Image style={styles.image} source={require('../../imagers/Match/a2.jpg')}/>
                <Image style={styles.image} source={require('../../imagers/Match/a1.jpg')}/>
                <Image style={styles.image} source={require('../../imagers/Match/a2.jpg')}/>
            </Swiper>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    image: {
        width:width,//scaleSizeW(705),
        height:scaleSizeH(380)
    },
});
export default Swiper1;