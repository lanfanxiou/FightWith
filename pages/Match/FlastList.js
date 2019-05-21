import React,{Component} from "react";
import {View,Image,Text,StyleSheet,FlatList,TouchableOpacity,ImageBackground} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import {Actions} from "react-native-router-flux";
import styles from "../../styles/Match_styles/FlastListstyles";

class FlastList extends Component {

    //支持红黄蓝数量
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
            soonres:'',
            tick:{
                red:false, //red
                yellow:false, //yellow
                blue:false //blue
            },
            lightPillar:{
                red:5,
                yellow:15,
                blue:30
            },
            ryb:3//比赛结果，123
        };
        this.toggleModal4 = this.toggleModal4.bind(this);
    }

    //切换标记
    switchover=(who)=>{
        switch(who){
            case "red":
                if(this.state.tick.red){  //红色取消打勾
                    let a=this.state.lightPillar.red-1;
                    let b=this.state.lightPillar.yellow;
                    let c=this.state.lightPillar.blue;
                    this.setState({
                        tick:{
                            red:false
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }else{  //红色打勾
                    let a=this.state.lightPillar.red+1;
                    let b=this.state.lightPillar.yellow;
                    let c=this.state.lightPillar.blue;
                    this.setState({
                        tick:{
                            red:true,
                            yellow:false,
                            blue:false
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }
                break;
            case "yellow":
                if(this.state.tick.yellow){  //黄色取消打勾
                    let a=this.state.lightPillar.red;
                    let b=this.state.lightPillar.yellow-1;
                    let c=this.state.lightPillar.blue;
                    this.setState({
                        tick:{
                            yellow:false
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }else{  //黄色打勾
                    let a=this.state.lightPillar.red;
                    let b=this.state.lightPillar.yellow+1;
                    let c=this.state.lightPillar.blue;
                    this.setState({
                        tick:{
                            red:false,
                            yellow:true,
                            blue:false
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }
                break;
            case "blue":
                if(this.state.tick.blue){  //蓝色取消打勾
                    let a=this.state.lightPillar.red;
                    let b=this.state.lightPillar.yellow;
                    let c=this.state.lightPillar.blue-1;
                    this.setState({
                        tick:{
                            blue:false
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }else{  //蓝色打勾
                    let a=this.state.lightPillar.red;
                    let b=this.state.lightPillar.yellow;
                    let c=this.state.lightPillar.blue+1;
                    this.setState({
                        tick:{
                            red:false,
                            yellow:false,
                            blue:true
                        },
                        lightPillar:{
                            red:a,
                            yellow:b,
                            blue:c
                        }
                    });
                }
                break;
        }
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    };
    toggleModal3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 });
    };
    toggleModal4() {
        if(1==1){
            this.setState({
                isModalVisible:false
            });
            Actions.videotape();
        }

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
                                    <Image style={styles.image2} source={{uri:item.name1con}}/>
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
                                    <Image style={styles.image2} source={{uri:item.name2con}}/>
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
                                    <Image style={styles.image2} source={{uri:item.name1con}}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.name1}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={{uri:item.name2con}}/>
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
                                    <Image style={styles.image2} source={{uri:item.name1con}}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.name1}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={{uri:item.name2con}}/>
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
                                    <TouchableOpacity onPress={this.toggleModal4}>
                                        <View style={styles.mo_view2_4}>
                                            <Text style={styles.mo_view2_4tet}>录像回播</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>

                            {/*支持度*/}
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={{...styles.mo_view2_6_1_1,flex:this.state.lightPillar.red}}>
                                        {this.state.ryb==1?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_2,flex:this.state.lightPillar.yellow}}>
                                        {this.state.ryb==2?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_3,flex:this.state.lightPillar.blue}}>
                                        {this.state.ryb==3?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}
                                    </View>
                                </View>
                            </View>

                        </View>

                        {/*支持红黄蓝*/}

                        <View style={styles.mo_view3}>
                            <View style={styles.mo_view3_1}>
                                <View style={styles.moview33_1_1} >
                                    <Text style={styles.moview3_1_txt}>您的支持方</Text>
                                </View>

                                <View style={styles.mo_view3_1div}>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("red");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_2}>
                                            <Text style={styles.mo_view3_2tet}>红</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>平</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>蓝</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
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
                                    <View style={styles.mo_view2_6_1}>
                                        <View style={{...styles.mo_view2_6_1_1,flex:this.state.lightPillar.red}}>
                                            {/*{this.state.ryb==1?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                        </View>
                                        <View style={{...styles.mo_view2_6_1_2,flex:this.state.lightPillar.yellow}}>
                                            {/*{this.state.ryb==2?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                        </View>
                                        <View style={{...styles.mo_view2_6_1_3,flex:this.state.lightPillar.blue}}>
                                            {/*{this.state.ryb==3?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mo_view33}>
                            <View style={styles.mo_view3_1}>
                                <View style={styles.moview3_1_1} >
                                    <Text style={styles.moview3_1_txt}>您的支持方</Text>
                                </View>

                                <View style={styles.mo_view3_1div}>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("red");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_2}>
                                            <Text style={styles.mo_view3_2tet}>红</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>平</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>蓝</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
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
                                    <View style={{...styles.mo_view2_6_1_1,flex:this.state.lightPillar.red}}>
                                        {/*{this.state.ryb==1?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_2,flex:this.state.lightPillar.yellow}}>
                                        {/*{this.state.ryb==2?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_3,flex:this.state.lightPillar.blue}}>
                                        {/*{this.state.ryb==3?<Image source={require('../../imagers/Match/result.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mo_view33}>
                            <View style={styles.mo_view3_1}>
                                <View style={styles.moview3_1_1} >
                                    <Text style={styles.moview3_1_txt}>您的支持方</Text>
                                </View>

                                <View style={styles.mo_view3_1div}>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("red");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_2}>
                                            <Text style={styles.mo_view3_2tet}>红</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>平</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>蓝</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default FlastList;