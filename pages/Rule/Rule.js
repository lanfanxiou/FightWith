import React,{Component} from "react";
import {View,Image,Text,StyleSheet,Button} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Details from "../static/Details";


class Rule extends Component {

    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <Details/>
                </View>

                <View style={styles.view2}>
                    <View >
                        <Text style={styles.ruletxt}>
                            MASFIGHT，中文名“斗战胜”（取自《西游记》“斗战胜佛”孙悟空，意为战无不胜），
                            是基于中国传统武术并融合世界各种竞技技击术的基础，由国际资深搏击赛事团队打造的全新独立的赛事。
                            区别于其他格斗赛事，斗战胜格斗赛以“武无第二”为目标，创立了独有的专利赛事规则“KO致胜制”，
                            规则简单明了，而且更公平、更刺激，同时对标UFC赛事水平，
                            打击UFC长期不求变革的市场痛点，是一个定位全球市场，背靠中国的顶级赛事。
                        </Text>
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
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
    },
    view2:{
        flex:10,
        borderWidth:1,
        backgroundColor: '#000000',
        padding:scaleSizeW(25)
    },
    image:{
        width:30,
        height:scaleSizeH(80),
    },
    ruletxt:{
        color:'#FFFFFF',
        fontSize:setSpText(30)
    }
});
export default Rule;
