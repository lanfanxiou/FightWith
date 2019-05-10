import React,{Component} from "react";
import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Swipe from "./Swiper1";
import FlastList from "./FlastList";
import Details from "../static/Details";
import Calendar from "./Calendar";

const { width, height } = Dimensions.get('window');//获取手机的宽和高
const arr=[require('../../imagers/Match/Country2.png'),require('../../imagers/Match/Country1.png')];

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
             MatchList:[{id:1,date:'05-06 16:00',name1:'马里奥',name1res:'败',name1con:arr[0],name2:'杰里.奥希姆',name2res:'胜',name2con:arr[1],Result:'已结束',color:0},
                 {id:2,date:'05-06 16:20',name1:'路易吉',name1res:'',name1con:arr[0],name2:'林克',name2res:'',name2con:arr[1],Result:'进行中',color:1},
                 {id:3,date:'05-06 16:40',name1:'选手A',name1res:'',name1con:arr[0],name2:'选手B',name2res:'',name2con:arr[1],Result:'即将开始',color:2},
                 {id:4,date:'05-06 17:00',name1:'选手C',name1res:'',name1con:arr[0],name2:'选手D',name2res:'',name2con:arr[1],Result:'即将开始',color:2}]
        };
    }

    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <Details/>
                </View>
                <View style={styles.view2}>
                    <View style={styles.view2_1}>
                        <Calendar/>
                    </View>
                    {/*轮播图*/}
                    <View style={{flex:5}}>
                        <Swipe/>
                    </View>
                    {/*FlastList列表*/}
                    <View style={styles.view4}>
                        <FlastList subState={this.state} setState={this.setState.bind(this)}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1,
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
    },
    view2:{
        flex:10,
        backgroundColor: '#000000',
        padding:scaleSizeW(10)
    },
    image:{
        width:scaleSizeW(410),
        height:scaleSizeH(60),
        marginLeft:scaleSizeW(15)
    },
    view2_1:{
        flex:1,
        flexDirection:'row'
    },
    view4:{
        flex:8
    },
    view4_1:{
        width:'100%',
        height:scaleSizeH(120),
        borderWidth:1,
        borderColor:'#CCCCCC',
        backgroundColor:'#303030',
        flexDirection:'row',
    }

});
export default Match;