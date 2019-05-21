import React,{Component} from "react";
import {View,Image,StyleSheet,Dimensions,TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const { width, height } = Dimensions.get('window');//获取手机的宽和高
import styles from "../../styles/Match_styles/Swiperstyles";


class Swiper1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchList:[]
        };
        this.ggMakeMoney = this.ggMakeMoney.bind(this);
    }

    selectMatchList=()=>{
        fetch('https://www.wulingshan.club/FightWith/json/jsonData.json')
            .then((res) => {
                return res.json();
            }).then((data) => {
            const userInfo=data.UserInfo;
            if(userInfo.code==1){

                this.setState({
                    MatchList:userInfo.data.MatchList
                })
            }
        }).catch((e) => {
            alert(e.message);
        });
    };
    componentDidMount() {
        this.selectMatchList();
    }

    ggMakeMoney(id){
       if(id==1){

       }
    }
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
                    {this.state.MatchList.map((info, index) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={()=>{this.ggMakeMoney(info.id)}}>
                                    <Image style={styles.image} source={{uri:info.Swiper}}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
            </Swiper>

            </View>
        );
    }
}
export default Swiper1;