//个人中心
import React,{Component} from "react";
import {View, Image, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import {Actions} from "react-native-router-flux";
const {width, height} = Dimensions.get('window');//获取手机的宽和高


class PersonalCenter extends Component {

    render() {
        return (
            <View style={styles.box1}>
                <View style={styles.Member}>

                    <View style={styles.member_theme}>
                        <View style={styles.member_theme_opo}>
                            <TouchableOpacity onPress={Actions.pop}>
                                <Image style={styles.m_t_o_imag} source={require('../../imagers/Match/x.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.member_theme_txt}>
                            <Text style={styles.m_theme_t}>会员权益</Text>
                        </View>
                    </View>

                    <View style={styles.marginT}>
                        <View style={styles.integral}>
                            <View style={styles.integral_f}>

                                <View style={styles.integral_accounts}>
                                    <View style={styles.i_accounts_acc}>
                                        <Text style={styles.i_text}>帐           号 : </Text>
                                        <Text style={styles.i_text}>13686677654</Text>
                                    </View>
                                    <View style={styles.i_accounts_phone}>
                                        <Text style={styles.i_text}>你的积分: </Text>
                                        <Text style={styles.i_text}>270</Text>
                                    </View>
                                </View>

                                <View style={styles.integral_grade}>
                                    <View style={styles.i_accounts_acc}>
                                        <Text style={styles.i_text}>你 的 等 级 : </Text>
                                        <Text style={styles.i_text}>普通会员</Text>
                                    </View>
                                    <View style={styles.i_accounts_phone}></View>
                                </View>
                                <View style={styles.integral_termofval}>
                                    <View style={styles.i_accounts_acc}>
                                        <Text style={styles.i_text}>级别有效期 : </Text>
                                        <Text style={styles.i_text}>永久</Text>
                                    </View>
                                    <View style={styles.i_accounts_phone}></View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.recharge}>
                        <View style={styles.recharge_frame}>
                            <View style={styles.r_border}>
                                <TextInput style={styles.r_frame_value}>2000</TextInput>
                            </View>
                        </View>
                        <View style={styles.recharge_determine}>
                            <View style={styles.r_frame_btn}>
                                <TextInput style={styles.r_frame_txt}>充值</TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    Member:{
        width:width,
        height:scaleSizeH(700),
        backgroundColor:'#EEEDF2'
    },
    member_theme:{
        width:width,
        height:scaleSizeH(80),
        backgroundColor:'#EDEDED',
        flexDirection:'row',
    },
    member_theme_opo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    m_t_o_imag:{
        width:scaleSizeW(40),
        height:scaleSizeH(40)
    },
    member_theme_txt:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
    },
    m_theme_t:{
        color:'#000',
        fontSize:setSpText(40),
        marginLeft:scaleSizeW(-50)
    },
    marginT:{
        width:width,
        height:scaleSizeH(310),
        paddingTop:scaleSizeH(80),
        backgroundColor:'#FFA334'
    }
    ,
    integral:{
        width:width,
        height:scaleSizeH(200),

        backgroundColor: '#FFA334',
    },
    integral_f:{
        flex: 1,
        backgroundColor:'#FFA334'
    },
    integral_accounts:{
        flex:3,
        flexDirection:'row',
    },
    i_accounts_acc:{
        flex:3,
        flexDirection:'row',
        paddingLeft:scaleSizeW(30),
        alignItems:'center',
        height:scaleSizeH(80)

    },
    i_text:{
        fontSize: 25,
        color: '#fff'
    },
    i_accounts_phone:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:scaleSizeH(80)

    },
    integral_grade:{
        flex:3,
        flexDirection:'row',
    },
    integral_termofval:{
        flex:3,
        flexDirection:'row',
    },

    recharge:{
        width:width,
        height:scaleSizeH(200),
        backgroundColor:'#FFA334',
        marginTop:scaleSizeH(30),
        flexDirection:'row',
    },
    recharge_frame:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        height:scaleSizeH(200),
    },
    recharge_determine:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        height:scaleSizeH(200),

    },
    r_border:{
        width:scaleSizeW(280),
        height:scaleSizeH(80),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#f00',
        backgroundColor:'#fff'
    },
    r_frame_value:{
        padding:0,
        justifyContent:'center',
        alignItems:'center',
        fontSize: 25,
        color:'#000'
    },
    r_frame_btn:{
        width:scaleSizeW(250),
        height:scaleSizeH(80),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:scaleSizeW(10)
    },
    r_frame_txt:{
        fontSize:scaleSizeW(30)
    }
});
export default PersonalCenter;