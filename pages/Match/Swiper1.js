import React,{Component} from "react";
import {View,Image,StyleSheet,Dimensions,TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const { width, height } = Dimensions.get('window');//获取手机的宽和高
import styles from "../../styles/Match_styles/Swiperstyles";
import {api} from "../../utils/api";


class Swiper1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchList:[]
        };
        this.ggMakeMoney = this.ggMakeMoney.bind(this);
    }

    selectMatchList=()=>{
        var thiz=this;
        const action = {
            "FromUser": "",
            "Tag": "ac",
            "Message": "null",
            "ActionMethod":"CompetitionBLL.GetCompetitionByCarousel"
        };
        var wss=new WebSocket(api);
        wss.onopen=function () {
            wss.send(JSON.stringify(action))
        };
        wss.onmessage=function (ev) {
            var date=JSON.parse(ev.data);
            var res=JSON.parse(date.Message);
            var rees=res.Result;
            thiz.setState({
                MatchList:rees
            });
        };
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
                                <TouchableOpacity onPress={()=>{this.ggMakeMoney(info.ID)}}>
                                    <Image style={styles.image} source={{uri:info.Picture}}/>
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