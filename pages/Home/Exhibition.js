import {scaleSizeH, scaleSizeW} from "../../utils/Screen";
import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, ScrollView, Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');//获取手机的宽和高
{/*展示页*/}

class Exhibition extends Component {

    render() {
        return (
            <View style={styles.box1}>
                <ScrollView>
                <View style={styles.cardbody}>
                    <Image style={styles.cbodyimg} source={require('../../imagers/Home/index_list2.png')}/>
                </View>
                <View style={styles.cardbodytxt}>
                    <Text style={styles.ctxt}>MASFIGHT香港争霸赛</Text>
                    <Text style={styles.ctxt}>2019年05月28日 19:00:00</Text>
                </View>
                <View style={styles.cbeginsfa}>
                    <View style={styles.cbegins}>
                        <Text style={styles.cbeginstxt}>距离开赛21天6小时41分26秒</Text>
                    </View>
                    <View style={styles.cline}></View>
                </View>

                <View style={styles.cardbody}>
                    <Image style={styles.cbodyimg} source={require('../../imagers/Home/index_list1.png')}/>
                </View>
                <View style={styles.cardbodytxt}>
                    <Text style={styles.ctxt}>MASFIGHT 灵山巅峰对决</Text>
                    <Text style={styles.ctxt}>2019年05月01日 19:00:00</Text>
                </View>
                <View style={styles.cbeginsfa}>
                    <View style={styles.cbegins}>
                        <Text style={styles.cbeginstxt}>赛事结束</Text>
                    </View>
                    <View style={styles.cline}></View>
                </View>

                <View style={styles.cardbody}>
                    <Image style={styles.cbodyimg} source={require('../../imagers/Home/index_list3.png')}/>
                </View>
                <View style={styles.cardbodytxt}>
                    <Text style={styles.ctxt}>MASFIGHT 灵山巅峰对决</Text>
                    <Text style={styles.ctxt}>2019年05月01日 19:00:00</Text>
                </View>
                <View style={styles.cbeginsfa}>
                    <View style={styles.cbegins}>
                        <Text style={styles.cbeginstxt}>赛事结束</Text>
                    </View>
                    <View style={styles.cline}></View>
                </View>

                <View style={styles.cardbody}>
                    <Image style={styles.cbodyimg} source={require('../../imagers/Home/index_list4.png')}/>
                </View>
                <View style={styles.cardbodytxt}>
                    <Text style={styles.ctxt}>MASFIGHT 灵山巅峰对决</Text>
                    <Text style={styles.ctxt}>2019年05月01日 19:00:00</Text>
                </View>
                <View style={styles.cbeginsfa}>
                    <View style={styles.cbegins}>
                        <Text style={styles.cbeginstxt}>赛事结束</Text>
                    </View>
                    <View style={styles.cline}></View>
                </View>
                {/*空白分割*/}
                <View style={styles.blank}></View>
                </ScrollView>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    cardbody:{
        width:scaleSizeW(705),
        height:scaleSizeH(450),
        marginTop:scaleSizeH(13),
        marginLeft: scaleSizeW(15),
    },
    cbodyimg:{
        width:scaleSizeW(705),
        height:scaleSizeH(450),
    },
    cardbodytxt:{
        width:scaleSizeW(705),
        height:scaleSizeH(70),
        marginTop:scaleSizeH(10),
        marginLeft: scaleSizeW(15),
    },
    ctxt:{
        color:'#fff',
        textAlign: 'center',
        fontSize:scaleSizeW(21)
    },
    cbeginsfa:{
        width:width,
        alignItems:'center'
    },
    cbegins:{
        width:scaleSizeW(600),
        height:scaleSizeH(55),
        backgroundColor:'#333',
        borderWidth:0.3,
        borderColor:'#fff',

    },
    cbeginstxt:{
        color: '#E9E905',
        fontSize:scaleSizeW(26),
        textAlign:'center',
        lineHeight:scaleSizeH(50),
    },
    cline:{
        width:scaleSizeW(670),
        borderWidth:0.3,
        borderColor:'#fff',
        marginTop:scaleSizeW(20),
        marginBottom:scaleSizeW(10),
    },
    blank:{
        height:scaleSizeH(200)
    },
});
export default Exhibition;
