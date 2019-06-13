import React,{Component} from "react";
import {View, Image, Text, StyleSheet, FlatList, ScrollView, Dimensions} from "react-native";
import styles from "../../styles/Home_styles/HomeStyle";
import GetSurplusTime from "../../utils/GetSurplusTime";
import {I18n} from "../../language/I18n";
import * as time from '../../utils/time.js'//引用js
var moment = require('moment');


{/*展示页*/}
class Exhibition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cby:time.getTime,
            cbk:1,
            cbj:0,
        };
    }
    componentDidMount(){
        alert(moment(time.getTime).format());
    }

    _renderItemArticle=({item})=>{
        return (

            <View>
                <View style={styles.cardbody}>
                    <Image style={styles.cbodyimg} source={{uri:item.Picture}}/>
                </View>
                <View style={styles.cardbodytxt}>
                    <Text style={styles.ctxt}>{item.GameTheme}</Text>
                    <Text style={styles.ctxt}>{item.StartDate}</Text>
                </View>
                <View style={styles.cbeginsfa}>
                    <View style={styles.cbegins}>

                        {moment(this.state.cby)<moment('2019-09-16')?<Text style={styles.cbeginstxt}>
                            {I18n.t('Exhibition.Distance start')}<GetSurplusTime stringTime={item.StartDate} units={{
                            century:"世纪",	//“世纪”分隔符
                            year:"年",		//“年”分隔符
                            month:"月",		//“月”分隔符
                            day:I18n.t('Exhibition.days'),		//“日”分隔符
                            hour:I18n.t('Exhibition.hours'),	//“时”分隔符
                            minute:I18n.t('Exhibition.minutes'),	//“分”分隔符
                            second:I18n.t('Exhibition.seconds')		//“秒”分隔符
                        }} />
                        </Text> :null}

                        {this.state.cby<item.StartDate?<Text style={styles.cbeginstxt}>赛事结束</Text> :null}

                        {this.state.cby==item.StartDate?<Text style={styles.cbeginstxt}>直播中</Text> :null}

                    </View>
                    <View style={styles.cline}></View>
                </View>
            </View>

        )
    };
    _keyExtractorArticle=(item,index)=>{
        return item.id
    };
    _separator=()=>{
        return <View style={{height:4,backgroundColor:'#000000'}}></View>
    };


    render() {

        return (
            <FlatList
                extraData={this.props.subState}
                renderItem={this._renderItemArticle}
                data={this.props.subState.HomeList}
                keyExtractor={this._keyExtractorArticle}
                horizontal={false}
                ItemSeparatorComponent={this._separator}//分割线
                showsHorizontalScrollIndicator={false}//滚动条隐藏
            />
        );
    }
}

export default Exhibition;
