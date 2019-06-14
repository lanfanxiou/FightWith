//Calenderstyles
import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
const windowW = Dimensions.get('window').width;

const { width, height } = Dimensions.get('window');//获取手机的宽和高

const Calenderstyles =StyleSheet.create( {
    box1:{
        flex:1,
        flexDirection:'row'
    },
    view2_2:{
        width:scaleSizeW(480),
        height:scaleSizeH(50),
        borderWidth:1,
        borderColor:'#CCCCCC',
        justifyContent:'center'
    },
    view2_3:{
        flex:4,
        // borderColor:'#00f',
        // borderWidth:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    tetsize:{
        color:'#ffffff',
        fontSize:setSpText(26)
    },
    viewDate:{
        width:scaleSizeW(160),
        height:scaleSizeH(50),
        borderWidth:1,
        borderColor:'#CCCCCC',
        backgroundColor:'#666666',
        alignItems:'center',
        justifyContent:'center'
    },
    btnimg:{
        width:scaleSizeW(60),
        height:scaleSizeH(60),
        marginLeft: scaleSizeW(10)
    },
    view3:{
        flex:2,
        // borderColor:'#00f',
        // borderWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    Cm_view1:{
        backgroundColor: '#F5FCFF',
        width:width,
        height:scaleSizeH(850)
    },
    Cm_view2:{
        paddingVertical:scaleSizeW(25),
        paddingHorizontal:scaleSizeW(35),
        borderRadius:scaleSizeW(9),
        alignItems:'center',justifyContent:'center'
    },
    Cm_view2tet:{
        fontSize:setSpText(35),
        color:'black'
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 360
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
});
export default Calenderstyles;