import React,{Component} from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions,Button} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import MinimalismCalendar from "react-native-ocalendar";
const { width, height } = Dimensions.get('window');//获取手机的宽和高


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'灵山巅峰对决 2019年05月01日',
            data:'请选择比赛日期',
            data2:'05-01',
            isModalVisible: false,
        };
        this.DateTransfer=this.DateTransfer.bind(this)
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    DateTransfer(cont){
        this.setState({
            data:cont[0]+'-'+cont[1]+'-'+cont[2],
            data2:cont[1]+'-'+cont[2]
        })
    }
    render() {
        return (
            <View style={styles.box1}>
                <View style={styles.view2_3}>
                    <View style={styles.view2_2}>
                        <Text style={styles.tetsize}>{this.state.value}</Text>
                    </View>
                </View>
                <View style={styles.view3}>
                    <View style={styles.viewDate}>
                        <Text style={styles.tetsize}>{this.state.data2}</Text>
                    </View>
                    <View>
                       <TouchableOpacity onPress={this.toggleModal}>
                        <Image style={styles.btnimg} source={require('../../imagers/Match/btn.png')}/>
                       </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={this.state.isModalVisible}
                       //backdropColor={'rbga(0,0,0,0.5)'}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}
                        style={{alignItems:'center',marginBottom:scaleSizeH(510)}}
                >
                    <View style={styles.Cm_view1}>
                        <View style={styles.container}>
                            <TouchableOpacity
                                style={styles.Cm_view2}
                                onPress={()=>{}}>
                                <Text style={styles.Cm_view2tet}>{this.state.data}</Text>
                            </TouchableOpacity>
                            <MinimalismCalendar DateTransfer={this.DateTransfer}/>
                            <Button title="关闭" onPress={this.toggleModal} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
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
        fontSize:setSpText(30)
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
        marginTop: 30
    },
    Cm_view1:{
        width:width,
        height:scaleSizeH(920)
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
    }
});
export default Calendar;