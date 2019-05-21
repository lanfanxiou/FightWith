//Staticstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Staticstyles =StyleSheet.create( {
    box1:{
        flex:1
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
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
    Hm_view1:{
        backgroundColor:'#ffffff',
        width:scaleSizeW(600),
        height:scaleSizeH(600),
        borderWidth:2,
        borderColor:'#4E4E4E'
    },
    Hm_view2:{
        flex:1,
        backgroundColor:'#DDDDDD',
        flexDirection:'row',
        borderColor:'#4E4E4E',
        borderBottomWidth:1
    },
    Hm_text:{
        fontSize:setSpText(30),
        color:'#4E4E4E'
    },
    Hm_text2: {
        fontSize:setSpText(26),
        color:'#181818'
    },
    Hm_view3:{
        flex:1,
        flexDirection:'row'
    } ,
    Hm_view3_1:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    Hm_view3_2:{
        flex:6,
        justifyContent:'center'
    },
    Hm_view3_3:{
        borderWidth:1,
        borderColor:'#181818',
        width:scaleSizeW(300),
        height:scaleSizeH(80),
        justifyContent:'center'
    },
    Hm_view3_4:{
        flex:6,
        flexDirection:'row',
        alignItems:'center'
    },
    Hm_view3_5:{
        borderWidth:1,
        borderColor:'#181818',
        width:scaleSizeW(120),
        height:scaleSizeH(80),
        justifyContent:'center'
    },
    Hm_view3_6:{
        borderWidth:1,
        borderColor:'#181818',
        width:scaleSizeW(120),
        height:scaleSizeH(80),
        justifyContent:'center',
        alignItems:'center',
        marginLeft:scaleSizeW(25)
    },
    Hm_view4:{
        flex:9 ,
        justifyContent:'center'
    },
    Hm_view4_1:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    Hm_view4_1img:{
        width:scaleSizeW(30),
        height:scaleSizeH(30)
    },
    Hm_view5:{
        flex:10,
        alignItems:'center',
        justifyContent:'center'
    },
    Hm_view5_1:{
        width:scaleSizeW(500),
        height:scaleSizeH(400)
    },
    Hm_view5_2:{
        flex:10
    },
    Hm_view6:{
        flex:1,
        backgroundColor:'#DDDDDD',
        borderTopWidth:1,
        borderColor:'#9D9D9D',
        flexDirection:'row'
    },
    Hm_view6_1:{
        flex:6
    },
    Hm_view6_2:{
        flex:2,
        alignItems:'center',
        justifyContent: 'center'
    },
    Hm_view6_3:{
        width:scaleSizeW(100),
        height:scaleSizeH(35),
        backgroundColor:'#fff',
        borderRadius:scaleSizeW(10),
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#383838',
        borderWidth:0.5
    }
});
export default Staticstyles;