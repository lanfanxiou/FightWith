//我的订单
import React,{Component} from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions,Button} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import {Actions} from "react-native-router-flux";
const {width, height} = Dimensions.get('window');//获取手机的宽和高


class Myorder extends Component {

    render() {
        return (
            <View style={styles.box1}>
                <View>
                    <View style={styles.order_theme}>
                        <View style={styles.order_theme_opo}>
                            <TouchableOpacity onPress={Actions.pop}>
                                <Image style={styles.o_t_o_imag} source={require('../../imagers/Match/x.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.order_theme_txt}>
                            <Text style={styles.o_theme_t}>我的订单</Text>
                        </View>
                    </View>
                    <View style={styles.orders}>
                        <View style={styles.order_number}>
                            <View style={styles.o_number}>
                                <View style={styles.o_number_ord}>
                                    <Text style={styles.o_text}>订单编号 : </Text>
                                    <Text style={styles.o_text}> 1905300926330164211933</Text>
                                </View>
                                <View style={styles.o_number_txt}>
                                    <Text style={styles.o_texts}>交易完成</Text>
                                </View>
                            </View>
                            <View style={styles.o_tiem}>
                                <Text style={styles.o_text}>下单时间 : </Text>

                                <Text style={styles.o_text}>2019-05-30 09:26:33</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailedorder}>
                        <View style={styles.d_picture}>
                            <Image style={styles.d_image}   source={require('../../imagers/Match/IMG.jpg')}></Image>
                        </View>
                        <View style={styles.d_wriwords}>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>MASFIGHT</Text>
                                <Text style={styles.d_wriwords_sty_txt}>香港争霸赛</Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>2019-06-02 星期日 20:00</Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>人员A </Text>
                                <Text style={styles.d_wriwords_sty_txt}> VS </Text>
                                <Text style={styles.d_wriwords_sty_txt}> 人员B </Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txts}>270 </Text>
                                <Text style={styles.d_wriwords_sty_txt}> 元</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.unll}></View>

                </View>

                <View>
                    <View style={styles.orders}>
                        <View style={styles.order_number}>
                            <View style={styles.o_number}>
                                <View style={styles.o_number_ord}>
                                    <Text style={styles.o_text}>订单编号 : </Text>
                                    <Text style={styles.o_text}> 1905300926330164211933</Text>
                                </View>
                                <View style={styles.o_number_txt}>
                                    <Text style={styles.o_texts}>交易完成</Text>
                                </View>
                            </View>
                            <View style={styles.o_tiem}>
                                <Text style={styles.o_text}>下单时间 : </Text>

                                <Text style={styles.o_text}>2019-05-30 09:26:33</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailedorder}>
                        <View style={styles.d_picture}>
                            <Image style={styles.d_image}   source={require('../../imagers/Match/IMG.jpg')}></Image>
                        </View>
                        <View style={styles.d_wriwords}>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>MASFIGHT</Text>
                                <Text style={styles.d_wriwords_sty_txt}>香港争霸赛</Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>2019-06-02 星期日 20:00</Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txt}>人员A </Text>
                                <Text style={styles.d_wriwords_sty_txt}> VS </Text>
                                <Text style={styles.d_wriwords_sty_txt}> 人员B </Text>
                            </View>
                            <View style={styles.d_wriwords_sty}>
                                <Text style={styles.d_wriwords_sty_txts}>270 </Text>
                                <Text style={styles.d_wriwords_sty_txt}> 元</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.unll}></View>

                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1,
        backgroundColor:'#fff'
    },
    order_theme:{
        width:width,
        height:scaleSizeH(80),
        backgroundColor:'#EDEDED',
        flexDirection:'row',
    },
    order_theme_opo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    o_t_o_imag:{
        width:scaleSizeW(40),
        height:scaleSizeH(40)
    },
    order_theme_txt:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
    },
    o_theme_t:{
        color:'#000',
        fontSize:setSpText(40),
        marginLeft:scaleSizeW(-50)
    },
    orders:{
        width:width,
        height:scaleSizeH(160),
    },
    order_number:{
        width:width,
        height:scaleSizeH(160),

    },
    o_text:{
        fontSize:setSpText(25),
        color:'#000'
    },
    o_texts:{
        fontSize:setSpText(28),
        color:'#B9795E'
    },
    o_number:{
        flex: 2,
        flexDirection:'row',
        alignItems:'center',

    },
    o_number_ord:{
        flex:4,
        paddingLeft:scaleSizeW(20),
        flexDirection:'row',
    },
    o_number_txt:{
        flex:1,
        flexDirection:'row',
    },
    o_tiem:{
        flex: 2,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:scaleSizeW(20),

    },


    detailedorder:{
        flexDirection:'row',
        width:width,
        height:scaleSizeH(320),
        paddingLeft:scaleSizeW(20)
    },
    d_picture:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    d_image:{
        width:scaleSizeW(180),
        height:scaleSizeH(265)
    },
    d_wriwords:{
        flex:2.5,
        backgroundColor:'#eee'
    },
    d_wriwords_sty:{
        flex:4,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:scaleSizeW(40),
    },
    d_wriwords_sty_txt:{
        fontSize:setSpText(30),
        color:'#000'
    },
    d_wriwords_sty_txts:{
        fontSize:setSpText(30),
        color:'#f40'
    },
    unll:{
        width:width,
        height:scaleSizeH(50),
    }



});
export default Myorder;