import React,{Component} from "react";
import {View, Image, Text, TouchableOpacity, Dimensions,ScrollView,Button} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import {Calendar} from 'react-native-calendars';
import * as time from '../../utils/time.js'//引用js
import {LocaleConfig} from 'react-native-calendars';
import styles from "../../styles/Match_styles/Calenderstyles";


LocaleConfig.locales['fr'] = {
    monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    monthNamesShort: ['01.','02.','03','04','05','06','07','08','09','10','11','12'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['日','一','二','三','四','五','六']
};

LocaleConfig.defaultLocale = 'fr';


class Calendar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'灵山巅峰对决 2019年05月01日',
            data:'请选择比赛日期',
            data2:time.monthDay,
            isModalVisible: false,
            selected:'',
            time:'2019-05-10',
            time2:'2019-05-19'
        };
        this.onDayPress = this.onDayPress.bind(this);
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    onDayPress(day) {
        const s2=day.dateString.substring(5);
        this.setState({
            selected: day.dateString,
            data2:s2,
            data:s2
        });
    }
    render() {
        return (
            <View style={styles.box1}>
                <View style={styles.view2_3}>
                    <View style={styles.view2_2}>
                        <Text style={styles.tetsize}>{this.state.value}</Text>
                    </View>
                </View>
                <View style={styles.view3}>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <View style={styles.viewDate}>
                            <Text style={styles.tetsize}>{this.state.data2}</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                       <TouchableOpacity onPress={this.toggleModal}>
                        <Image style={styles.btnimg} source={require('../../imagers/Match/btn.png')}/>
                       </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={this.state.isModalVisible}
                       //backdropColor={'rbga(0,0,0,0.5)'}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}
                        style={{alignItems:'center',marginBottom:scaleSizeH(420)}}
                >
                    <View style={styles.Cm_view1}>
                        <ScrollView style={styles.container}>
                            <Text style={styles.text}>{this.state.data}</Text>
                            <Calendar
                                onDayPress={this.onDayPress}
                                style={styles.calendar}
                                minDate={this.state.time}
                                maxDate={'2019-05-29'}
                                monthFormat={'yyyy MM dd'}
                                hideExtraDays
                                markedDates={{
                                    [this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
                                    '2019-05-17': {marked: true},
                                    '2019-05-18': {marked: true, dotColor: 'red', activeOpacity: 0,text:'123'},
                                    [this.state.time2]: {marked: true, dotColor: 'red', activeOpacity: 0}
                                }}
                            />
                            <Text style={{fontSize:setSpText(19),color:"#CCCCCC"}}>红点:有比赛 蓝点:比赛推迟</Text>
                            <Button style={{marginBottom:0}} title="关闭" onPress={this.toggleModal} />
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default Calendar1;