import React, {Component} from "react";
import {View, Image, TouchableOpacity, Text, Dimensions} from "react-native";
import Swipe from "./Swiper1";
import Details from "../static/Details";
import Calendar1 from "./Calendar1";
import AccordionTab from "./AccordionTab";
import styles from "../../styles/Match_styles/Matchstyles";
import {Actions} from "react-native-router-flux";
import FlastList from "./FlastList";


const {width, height} = Dimensions.get('window');//获取手机的宽和高
const arr = [require('../../imagers/Match/Country2.png'), require('../../imagers/Match/Country1.png')];

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List2:[],
            isModalVisible: false,
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
                        <Calendar1 />
                    </View>
                    {/*轮播图*/}
                    <View style={{flex: 5}}>
                        <Swipe/>
                    </View>
                    {/*FlastList列表*/}
                    <View style={styles.view4}>
                        <AccordionTab/>
                    </View>
                    <View style={styles.view5}>
                        <TouchableOpacity onPress={Actions.PersonalCenter}>
                            <View style={styles.view5_1}>
                                <Text style={styles.view5_txt}>个人中心</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Actions.Myorder}>
                            <View style={styles.view5_1}>
                                <Text style={styles.view5_txt}>订单记录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Match;
