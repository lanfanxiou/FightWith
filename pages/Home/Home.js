import React,{Component} from "react";
import {View,Image,Text,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";

const { width, height } = Dimensions.get('window');//获取手机的宽和高


class Home extends Component {

    render() {
        return (
            <View style={styles.box1}>
                {/*顶部*/}
                <View style={styles.view1}>
                    <View style={styles.log} >
                        <Image style={styles.logimg} source={require('../../imagers/static/a1.png')}/>
                    </View>
                    <View style={styles.logUser}>
                        <TouchableOpacity></TouchableOpacity>
                        <Image style={styles.userimg} source={require('../../imagers/static/index_user.png')}/>
                    </View>
                </View>

                {/*展示区*/}
                <View style={styles.view2}>
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


            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
    },
    view2:{
        flex:10,
        borderWidth:1,
        backgroundColor: '#000000'
    },
    image:{
        width:30,
        height:scaleSizeH(80),
    },
    log:{
        flex:1,
        justifyContent:'center'
    },
    logimg:{
        width:scaleSizeW(410),
        height:scaleSizeH(60),
        marginLeft:scaleSizeW(15)
    },
    logUser:{
        flexDirection:'row-reverse',
        flex:1,
        alignItems:'center',
    },
    userimg:{
        width:scaleSizeW(80),
        height:scaleSizeH(80),
        marginRight:scaleSizeW(25),
        borderWidth: 2,
        borderColor: '#666666'
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
    }

});
export default Home;
