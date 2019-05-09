import React,{Component} from "react";
import {View,Image,Text,StyleSheet,FlatList,TouchableOpacity,ImageBackground} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";



class FlastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalVisible2: false,
            isModalVisible3: false,
            overdate:'',
            overres:'',
            Conductdate:'',
            Conductres:'',
            soondate:'',
            soonres:''
        };
        // this.over = this.over.bind(this);
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    };
    toggleModal3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 });
    };
    _renderItemArticle=({item})=>{
        if(item.color==0){
            this.setState({
                overdate:item.date,
                overres:item.Result
            });
            return (
                <TouchableOpacity onPress={this.toggleModal}>
                    <View style={styles.view4_1}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.date}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <Text style={styles.f_tex}>{item.Result}</Text>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={item.name1con}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.name1}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}>
                                <View style={styles.f_view5_1}><Text style={styles.f_view5_1tet}>{item.name1res}</Text></View>
                                <View style={styles.f_view5_2}><Text style={styles.f_view5_2tex}>{item.name2res}</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={item.name2con}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.name2}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view8}>
                            <Image style={styles.image} source={require('../../imagers/Match/box2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(item.color==1){
            this.setState({
                Conductdate:item.date,
                Conductres:item.Result
            });
            return (
                <TouchableOpacity onPress={this.toggleModal2}>
                    <View style={styles.view4_2}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.date}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <View style={styles.f_view1_1}>
                                    <Text style={styles.f_view1_1tet}>{item.Result}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={item.name1con}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.name1}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={item.name2con}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.name2}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view8}>
                            <Image style={styles.image} source={require('../../imagers/Match/box2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(item.color==2){
            this.setState({
                soondate:item.date,
                soonres:item.Result
            });
            return (
                <TouchableOpacity onPress={this.toggleModal3}>
                    <View style={styles.view4_3}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.date}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <Text style={styles.f_tex}>{item.Result}</Text>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={item.name1con}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.name1}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={item.name2con}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.name2}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view8}>
                            <Image style={styles.image} source={require('../../imagers/Match/box2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    };
    _keyExtractorArticle=(item,index)=>{
        return item.id.toString();
    };
    _separator=()=>{
        return <View style={{height:4,backgroundColor:'#000000'}}></View>
    };

    render() {
        return (
            <View style={styles.box1}>
                <FlatList
                    extraData={this.props.subState}
                    renderItem={this._renderItemArticle}
                    data={this.props.subState.MatchList}
                    keyExtractor={this._keyExtractorArticle}
                    horizontal={false}
                    ItemSeparatorComponent={this._separator}//分割线
                    showsHorizontalScrollIndicator={false}//滚动条隐藏
                />
                {/*已结束*/}
                <Modal isVisible={this.state.isModalVisible}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}
                       style={{paddingTop:scaleSizeH(470),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        <View style={styles.mo_view2}>
                            <View style={styles.mo_view2_1}>
                                <View style={styles.mo_view2_2}>
                                    <Text style={styles.mo_view2_2tex1}>{this.state.overres}</Text>
                                    <Text style={styles.mo_view2_2tex2}>{this.state.overdate}</Text>
                                </View>
                                <View style={styles.mo_view2_3}>
                                    <TouchableOpacity>
                                        <View style={styles.mo_view2_4}>
                                            <Text style={styles.mo_view2_4tet}>录像回播</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={styles.mo_view2_6_1_1}></View>
                                    <View style={styles.mo_view2_6_1_2}></View>
                                    <View style={styles.mo_view2_6_1_3}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mo_view3}>
                            <View style={styles.mo_view3_1}>
                                <TouchableOpacity>
                                     <View style={styles.mo_view3_2}>
                                         <Text style={styles.mo_view3_2tet}>红</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_3}>
                                         <Text style={styles.mo_view3_3tet}>平</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_4}>
                                        <Text style={styles.mo_view3_4tet}>蓝</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={this.state.isModalVisible2}
                       onBackdropPress={() => this.setState({ isModalVisible2: false })}
                       style={{paddingTop:scaleSizeH(470),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        <View style={styles.mo_view2}>
                            <View style={styles.mo_view2_1_2}>
                                <View style={styles.mo_view2_2}>
                                    <Text style={styles.mo_view2_2tex1}>{this.state.Conductres}</Text>
                                    <Text style={styles.mo_view2_2tex2}>{this.state.Conductdate}</Text>
                                </View>
                                <View style={styles.mo_view2_3}></View>
                            </View>
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={styles.mo_view2_6_1_1}></View>
                                    <View style={styles.mo_view2_6_1_2}></View>
                                    <View style={styles.mo_view2_6_1_3}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mo_view3}>
                            <View style={styles.mo_view3_1}>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_2}>
                                        <Text style={styles.mo_view3_2tet}>红</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_3}>
                                        <Text style={styles.mo_view3_3tet}>平</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_4}>
                                        <Text style={styles.mo_view3_4tet}>蓝</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={this.state.isModalVisible3}
                       onBackdropPress={() => this.setState({ isModalVisible3: false })}
                       style={{paddingTop:scaleSizeH(470),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        <View style={styles.mo_view2}>
                            <View style={styles.mo_view2_1_2}>
                                <View style={styles.mo_view2_2}>
                                    <Text style={styles.mo_view2_2tex1}>{this.state.soonres}</Text>
                                    <Text style={styles.mo_view2_2tex2}>{this.state.soondate}</Text>
                                </View>
                                <View style={styles.mo_view2_3}></View>
                            </View>
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={styles.mo_view2_6_1_1}></View>
                                    <View style={styles.mo_view2_6_1_2}></View>
                                    <View style={styles.mo_view2_6_1_3}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mo_view3}>
                            <View style={styles.mo_view3_1}>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_2}>
                                        <Text style={styles.mo_view3_2tet}>红</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_3}>
                                        <Text style={styles.mo_view3_3tet}>平</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.mo_view3_4}>
                                        <Text style={styles.mo_view3_4tet}>蓝</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
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
        height:scaleSizeH(353),
    },
    mo_view1:{
        backgroundColor:'#ffffff',
        width:scaleSizeW(700),
        height:scaleSizeH(700)
    },
    mo_view2:{
        flex:8,
        borderColor:'#BEBEBE',
        borderWidth:2
    },
    mo_view2_1:{
        flex:2,
        borderColor:'#666666',
        borderTopWidth:2,
        borderLeftWidth:1,
        backgroundColor:'#666666',
        flexDirection:'row'
    },
    mo_view2_1_2:{
        flex:2,
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
        flex:10
    },
    mo_view2_6:{
        flex:2,
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
        flex:2,
        backgroundColor:'#FF0000'
    },
    mo_view2_6_1_2:{
        flex:1,
        backgroundColor:'#FFFF00'
    },
    mo_view2_6_1_3:{
        flex:3,
        backgroundColor:'#0000FF'
    },
    mo_view3:{
        flex:3,
        backgroundColor:'#000000',
        alignItems:'center',
        justifyContent:'center'
    },
    mo_view3_1:{
        width:scaleSizeW(550),
        height:scaleSizeH(150),
        borderWidth:1,
        borderColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    mo_view3_2:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#FF0000',
        marginLeft:scaleSizeW(10),
        justifyContent:'center',
        alignItems:'center'
    },
    mo_view3_2tet:{
        fontSize:setSpText(26),
        color:'#ffffff'
    },
    mo_view3_3:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#FFFF00',
        marginLeft:scaleSizeW(10),
        justifyContent:'center',
        alignItems:'center'
    },
    mo_view3_3tet:{
        fontSize:setSpText(26),
        color:'#000000'
    },
    mo_view3_4:{
        width:scaleSizeW(160),
        height:scaleSizeH(80),
        borderColor:'#666666',
        borderWidth:1,
        borderRadius:scaleSizeW(10),
        backgroundColor:'#085295',
        marginLeft:scaleSizeW(10),
        justifyContent:'center',
        alignItems:'center'
    },
    mo_view3_4tet:{
        fontSize:setSpText(26),
        color:'#ffffff'
    }


});
export default FlastList;