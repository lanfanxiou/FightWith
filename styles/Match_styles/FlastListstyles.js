//FlastListstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const FlastListstyles =StyleSheet.create( {
    box1:{
        flex:1
    },
    view4_1:{
        width:'100%',
        height:scaleSizeH(120),
        borderWidth:1,
        borderColor:'#CCCCCC',
        backgroundColor:'#303030',
        flexDirection:'row',
    },
    view4_2:{
        width:'100%',
        height:scaleSizeH(120),
        borderWidth:1,
        borderColor:'#CCCCCC',
        backgroundColor:'#00CB00',
        flexDirection:'row',
    },
    view4_3:{
        width:'100%',
        height:scaleSizeH(120),
        borderWidth:1,
        borderColor:'#CCCCCC',
        backgroundColor:'#003200',
        flexDirection:'row',
    },
    image:{
        width:scaleSizeW(70),
        height:scaleSizeH(70),
        borderRadius:scaleSizeW(80)
    },
    image2:{
        width:scaleSizeW(75),
        height:scaleSizeH(50),
    },
    teview:{
        flex:1,
        justifyContent:'center'
    },
    tet:{
        color:'#FFFFFF',
        fontSize:setSpText(28),
        marginLeft:scaleSizeW(10)
    },
    f_view1:{
        flex:1,
        justifyContent:'center'
    },
    f_tex:{
        color:'#FFFFFF',
        fontSize:setSpText(28),
        marginLeft:scaleSizeW(45)
    },
    f_view2:{
        flex:4,
        flexDirection:'row'
    },
    f_view3:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    f_view4:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    f_view4tet:{
        fontSize:setSpText(26),
        color:'#ffffff'
    },
    f_view5:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    f_view5_1:{
        backgroundColor:'#0000FF',
        height:scaleSizeH(40),
        borderWidth:0.3,
        borderColor:'#CCCCCC'
    },
    f_view5_1tet:{
        color:'#FFFFFF',
        fontSize:setSpText(30)
    },
    f_view5_2:{
        backgroundColor:'#FD0204',
        height:scaleSizeH(40),
        marginLeft:scaleSizeW(55),
        borderWidth:0.3,borderColor:'#CCCCCC'
    },
    f_view5_2tex:{
        color:'#FFFFFF',
        fontSize:setSpText(30)
    },
    f_view6:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    f_view7:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    f_view7tet:{
        fontSize:setSpText(22),
        color:'#ffffff'
    },
    f_view8:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    f_view1_1:{
        borderWidth:0.5,
        borderColor:'#262626',
        backgroundColor:'#00FF00',
        width:scaleSizeW(150),
        marginLeft:scaleSizeW(15)
    },
    f_view1_1tet:{
        color:'#464646',
        fontSize:setSpText(28),
        marginLeft:scaleSizeW(30)
    },
    usimg:{
        width:'100%',
        height:scaleSizeH(395),
    },
    mo_view1:{
        backgroundColor:'#ffffff',
        width:scaleSizeW(700),
        height:scaleSizeH(1000)
    },
    mo_view2:{
        flex:6,
        borderColor:'#BEBEBE',
        borderWidth:2
    },
    mo_view2_1:{
        flex:1,
        borderColor:'#666666',
        borderTopWidth:2,
        borderLeftWidth:1,
        backgroundColor:'#656565',
        flexDirection:'row'
    },
    mo_view2_1_2:{
        flex:1,
        borderColor:'#666666',
        borderTopWidth:2,
        borderLeftWidth:1,
        backgroundColor:'#00CC00',
        flexDirection:'row'
    },
    mo_view2_2:{
        flex:4,
        flexDirection:'row',
        alignItems:'center'
    },
    mo_view2_2tex1:{
        color:'#ffffff',
        fontSize:setSpText(36),
        fontWeight: '600',
        marginLeft:scaleSizeW(10)
    },
    mo_view2_2tex2:{
        color:'#ffffff',
        fontSize:setSpText(26),
        marginLeft:scaleSizeW(10)
    } ,
    mo_view2_3:{
        flex:2,
        justifyContent:'center'
    },
    mo_view2_4:{
        width:scaleSizeW(160),
        height:scaleSizeH(40),
        backgroundColor:'#FFFFFF',
        borderRadius:scaleSizeW(10),
        alignItems:'center',
        justifyContent:'center',
        marginLeft:scaleSizeW(30)
    },
    mo_view2_4tet:{
        color:'#000000',
        fontSize:setSpText(26)
    },
    mo_view2_5:{
        flex:4
    },
    mo_view2_6:{
        flex:0.7,
        backgroundColor:'#666666',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view2_6_1:{
        width:scaleSizeW(650),
        height:scaleSizeH(35),
        borderColor:'#fff',
        borderWidth:0.5,
        flexDirection:'row'
    },
    mo_view2_6_1_1:{
        backgroundColor:'#FF0000',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view2_6img:{
        width:scaleSizeW(35),
        height:scaleSizeH(35),
        //display:'none',
    },
    mo_view2_6_1_2:{
        backgroundColor:'#FFFF00',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view2_6_1_3:{
        backgroundColor:'#0000FF',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view3:{
        flex:2.3,
        backgroundColor:'#000000',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view33:{
        flex:2.3,
        backgroundColor:'#003200',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view3_1:{
        position:'absolute',
        width:scaleSizeW(550),
        height:scaleSizeH(150),
        borderWidth:1,
        borderColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    mo_view3_1div:{
        width:scaleSizeW(550),
        height:scaleSizeH(150),

        borderColor:'#ffffff',
        flexDirection:'row',
        left:scaleSizeW(-55),
        alignItems:'center'
    },
    moview3_1_1:{
        position:'relative',
        width:scaleSizeW(140),
        height: scaleSizeH(38),
        backgroundColor: '#003200',
        top:scaleSizeH(-70),
        left:scaleSizeW(80)
    },
    moview33_1_1:{
        position:'relative',
        width:scaleSizeW(140),
        height: scaleSizeH(38),
        backgroundColor: '#000',
        top:scaleSizeH(-70),
        left:scaleSizeW(80)
    },
    moview3_1_txt:{
        fontSize:scaleSizeW(21),
        color:'#ffffff'
    },
    mo_view3_2:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#FF0000',
        marginLeft:scaleSizeW(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' ,
    },
    mo_view3_2tet:{
        fontSize:setSpText(26),
        color:'#ffffff',
    },
    mo_view3_3:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#FFFF00',
        marginLeft:scaleSizeW(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mo_view3_3tet:{
        fontSize:setSpText(26),
        color:'#000000',
    },
    mo_view3_4:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#085295',
        marginLeft:scaleSizeW(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mo_view3_4tet:{
        fontSize:setSpText(26),
        color:'#ffffff'

    },
    square:{
        width:scaleSizeW(35),
        height:scaleSizeH(35)
    },
    coke:{
        width:"100%",
        height:scaleSizeH(75),
        flexDirection:'row'
    },
    coke_title:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        flex:2.3,
        textAlign: "center",
        borderColor:'#FFF',
        borderWidth:2
    },
    coke_title_text:{
        color:"#FFF",
        fontSize:setSpText(30),
    },
    coke_btn:{
        borderWidth:2,
        borderColor:'#FFF',
        flex:1,
        backgroundColor:'#656565',
        alignItems:'center',
        justifyContent:'center',
        width:scaleSizeW(200)
    },
    dropdown_coke:{
        width:scaleSizeW(200),

        height:scaleSizeH(250)
    },
    select_bycoke:{
        borderTopWidth:1,
        borderColor:'#FFF',
        flex:1,
        backgroundColor:'#EC1B23',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    select_bycoke_view1:{
        flex:1,
        height:'100%',
        justifyContent:'center'
    },
    select_bycoke_view1_text:{
        height:scaleSizeH(70),
        width:scaleSizeW(300),
        padding:0,
        textAlign:'center',
        color:'#FFF',
        backgroundColor:'#656565',
        borderColor:'#40C6DA',
        borderWidth:1,
        fontSize:setSpText(30),
        position:'absolute',
        right:0
    },
    select_bycoke_view2:{
        flex:1,
        height:'100%',
        justifyContent:'center'
    },
    select_bycoke_view2_btn:{
        width:scaleSizeW(300),
        textAlign:'center',
        paddingTop:7,
        color:'#000',
        backgroundColor:'#40C6DA',
        borderColor:'#656565',
        borderWidth:1,
        fontSize:setSpText(30),
        position:'absolute',
        left:6,
        height:scaleSizeH(70),
    }

});
export default FlastListstyles;
