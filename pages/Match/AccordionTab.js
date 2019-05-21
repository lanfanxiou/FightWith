import React,{Component} from "react";
import { View,Text,FlatList,TouchableOpacity,StyleSheet,Dimensions,LayoutAnimation} from "react-native";
import FlastList from "./FlastList";
import styles from "../../styles/Match_styles/AccordionTabstyles";


class AccordionTab extends Component {

    constructor(props) {
        super(props);
        // 记录点击
        this.state = {
            isSelect: -1,
            list:[],
            MatchList: [],
        }
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
    };
    componentDidMount() {
        this.selectMatchList();
    }
    // header点击
    itemTap = (index) => {
        // 点击的item如果是同一个, 就置为初始状态-1, 也就是折叠的状态
        let select = index;
        if (this.state.isSelect === index){
            select = -1;
        }
        LayoutAnimation.easeInEaseOut();
        this.setState({
            isSelect: select
        })
    };

    // 渲染FlatList的item
    renderItem = (item) => {
        const text = item.item.scheduleName;
        const itemColor = item.item.id % 2 === 0 ? 'yellow' : 'tan';
        return (
            <View>
                {/*每组的点击header*/}
                <TouchableOpacity
                    style={[styles.listItemTouch, {backgroundColor:itemColor}]}
                    activeOpacity={0.6}
                    onPress={() => {this.itemTap(item.item.id)}}>
                    <Text style={styles.listItemText}>
                        {text}
                    </Text>
                </TouchableOpacity>
                {/*每组的折叠item, 相等显示, 不等隐藏*/}
                {this.state.isSelect === item.item.id ?
                    <View style={styles.listSubBg}>
                        <FlastList subState={this.state} setState={this.setState.bind(this)}/>
                    </View> : null}
            </View>
        );
    };

    render() {
        fetch('https://www.wulingshan.club/FightWith/json/jsonData1.json')
            .then((res) => {
                return res.json();
            }).then((data) => {
            const scheduleList = data.ScheduleList;
            if (scheduleList.code == 1) {
                this.setState({
                    list: scheduleList.data.Schedule,
                });
            }
        }).catch((e) => {
            alert(e.message);
        });
        return (
            <View style={styles.bgView}>
                <Text>111</Text>
                <FlatList
                    style={styles.flatList}
                    ref={(flatList) => (this.flatList = flatList)}
                    keyExtractor={(item, index) => index}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
export default AccordionTab;
