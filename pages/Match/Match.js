import React, {Component} from "react";
import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import Swipe from "./Swiper1";
import Details from "../static/Details";
import Calendar1 from "./Calendar1";
import AccordionTab from "./AccordionTab";
import styles from "../../styles/Match_styles/Matchstyles";


const {width, height} = Dimensions.get('window');//获取手机的宽和高
const arr = [require('../../imagers/Match/Country2.png'), require('../../imagers/Match/Country1.png')];

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchList: [],
            isModalVisible: false,
        };
    }

    selectMatchList = () => {
        fetch('https://www.wulingshan.club/FightWith/json/jsonData.json')
            .then((res) => {
                return res.json();
            }).then((data) => {
                const userInfo=data.UserInfo;
            if (userInfo.code == 1) {
                this.setState({
                    MatchList: userInfo.data.MatchList
                })
            }
        }).catch((e) => {
            alert(e.message);
        });
    }

    componentDidMount() {
        this.selectMatchList();
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
                        <Calendar1/>
                    </View>
                    {/*轮播图*/}
                    <View style={{flex: 5}}>
                        <Swipe/>
                    </View>
                    {/*FlastList列表*/}
                    <View style={styles.view4}>
                        <AccordionTab/>
                    </View>
                </View>
            </View>
        );
    }
}
export default Match;