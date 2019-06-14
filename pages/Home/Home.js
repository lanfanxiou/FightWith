import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, AsyncStorage} from "react-native";
import Details from "../static/Details";
import Exhibition from "./Exhibition";
import styles from "../../styles/Home_styles/HomeStyle";
import {I18n} from "../../language/I18n";
import {api} from "../../utils/api";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HomeList:[],
            // HomeList1:[{"_id":"5cde634e6314ff991769ca5c","id":1,"Matchtime":"2019年5月28 19:00:00","Matchresult":"赛事结束","Livebroadcast":"直播中","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a1.jpg","MatchTheme":"MASFIGHT 香港争霸赛","Matchdate":"2019-07-01 19:00:00"},{"_id":"5cde63606314ff991769ca6c","id":2,"Matchtime":"2019年4月28 19:00:00","Matchresult":"赛事结束","Livebroadcast":"直播中","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a2.jpg","MatchTheme":"MASFIGHT 灵山巅峰对决","Matchdate":"2019-07-02 19:00:00"},{"_id":"5cde63716314ff991769ca80","id":3,"Matchtime":"2019年3月28 19:00:00","Matchresult":"赛事结束","Livebroadcast":"直播中","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a3.png","MatchTheme":"MASFIGHT 黄山争霸赛","Matchdate":"2019-06-03 19:00:00"},{"_id":"5cde63846314ff991769ca8f","id":4,"Matchtime":"2019年2月28 19:00:00","Matchresult":"赛事结束","Livebroadcast":"直播中","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a4.png","MatchTheme":"MASFIGHT  泰山巅峰对决","Matchdate":"2019-06-04 19:00:00"}],
            // HomeList2:[{"_id":"5cde634e6314ff991769ca5c","id":1,"Matchtime":"May 28th 2019 19:00:00","Matchresult":"End of event","Livebroadcast":"Live broadcast","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a1.jpg","MatchTheme":"MASFIGHT Hong Kong Tournament","Matchdate":"2019-07-01 19:00:00"},{"_id":"5cde63606314ff991769ca6c","id":2,"Matchtime":"April  28th 2019 19:00:00","Matchresult":"End of event","Livebroadcast":"Live broadcast","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a2.jpg","MatchTheme":"MASFIGHT Lingshan Peak Duel","Matchdate":"2019-06-02 19:00:00"},{"_id":"5cde63716314ff991769ca80","id":3,"Matchtime":"March 28th 2019 19:00:00","Matchresult":"End of event","Livebroadcast":"Live broadcast","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a3.png","MatchTheme":"MASFIGHT Huangshan Tournament","Matchdate":"2019-06-03 19:00:00"},{"_id":"5cde63846314ff991769ca8f","id":4,"Matchtime":"February 28th 2019 19:00:00","Matchresult":"End of event","Livebroadcast":"Live broadcast","Swiper":"http://www.wulingshan.club/FightWith/images/Match/a4.png","MatchTheme":"MASFIGHT  Taishan Peak Duel","Matchdate":"2019-06-04 19:00:00"}]
        };
    }
    selectIndexMatch=()=>{
        var thiz=this;
        const action = {
            "FromUser": "",
            "Tag": "ac",
            "Message": "null",
            "ActionMethod":"CompetitionBLL.GetCompetitionByIndex"
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
                HomeList:rees
            })
        }
    };
    //中英切换
    // selectMatchList=()=>{
    //     AsyncStorage.getItem(
    //         'language',
    //         (error,result)=>{
    //             this.setState({
    //                 HomeList: this.state.HomeList1
    //              });
    //             if (!error&&result=='en'){
    //                 this.setState({
    //                     HomeList: this.state.HomeList2
    //                 })
    //             }
    //         }
    //     )
    // };
    componentDidMount() {
        this.selectIndexMatch();
        //this.selectMatchList();
    }
    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <Details/>
                </View>
                {/*展示区*/}
                <View style={styles.view2}>
                    <Exhibition subState={this.state} setState={this.setState.bind(this)}/>
                </View>
            </View>
        );
    }
}
export default Home;
