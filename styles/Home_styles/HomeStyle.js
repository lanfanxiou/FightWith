import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW} from "../../utils/Screen";

const { width, height } = Dimensions.get('window');//获取手机的宽和高


const HomeStyle =StyleSheet.create( {
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
    // 展示区
    cardbody:{
        width:scaleSizeW(705),
        height:scaleSizeH(370),
        marginTop:scaleSizeH(10),
        marginLeft: scaleSizeW(15),
        justifyContent:'center',
        alignItems:'center',


    },
    cbodyimg:{
        width:scaleSizeW(665),
        height:scaleSizeH(360),
    },
    cardbodytxt:{
        width:scaleSizeW(705),//705450
        height:scaleSizeH(66),
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
        width:scaleSizeW(500),
        //height:scaleSizeH(55),
        backgroundColor:'#333',
        borderWidth:0.3,
        borderColor:'#fff',
        marginTop:scaleSizeH(15),
    },
    cbeginstxt:{
        color: '#E9E905',
        fontSize:scaleSizeW(26),
        textAlign:'center',
        lineHeight:scaleSizeH(50),
    },
    cline:{
        width:scaleSizeW(550),
        borderWidth:0.5,
        borderColor:'#fff',
        marginTop:scaleSizeW(20),
        marginBottom:scaleSizeW(13),

    },
    blank:{
        height:scaleSizeH(200)
    },


    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    //时间文字
    time: {
        paddingHorizontal: 2,
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        lineHeight: 17,
    },
    //冒号
    colon: {
        fontSize: 13,
        color:'white',
        textAlign: 'center',
        lineHeight: 17,
    },
    tip:{
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 17
    }


});

export default HomeStyle;