import React,{Component} from "react";
import {View,Image,Text,StyleSheet,FlatList,TouchableOpacity,ImageBackground,TextInput,AsyncStorage} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import {Actions} from "react-native-router-flux";
import styles from "../../styles/Match_styles/FlastListstyles";
import ModalDropdown from "react-native-modal-dropdown";
import {getTime} from "../../utils/time";



class FlastList extends Component {

    //支持红黄蓝数量
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            vote:0,
            vote1:0,
            vote2:0,
            vote3:0,
            isModalVisible: false,
            isModalVisible2: false,
            isModalVisible3: false,
            overtitle:'秋名山巅峰对决',
            coketext:'游戏玩法',
            overdate:'',
            overres:'',
            Conductdate:'',
            Conductres:'',
            soondate:'',
            soonres:'',
            resRed:'',
            resYew:'',
            resBlu:'',
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
            cokedata:{},
            ryb:3//比赛结果，123
        };
        this.toggleModal4 = this.toggleModal4.bind(this);
        this._test = this._test.bind(this);
        this._initws = this._initws.bind(this);
        this._getUserInfo = this._getUserInfo.bind(this);
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
                        vote:this.state.vote1,
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
                        vote:this.state.vote2,
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
                        vote:this.state.vote3,
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
        this._initws(1)
    };
    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
        this._initws(2)
    };
    toggleModal3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 });
        this._initws(4)
    };
    toggleModal4() {
        if(1==1){
            this.setState({
                isModalVisible:false
            });
            Actions.videotape();
        }

    };
    //读取异步保存用户信息
    _getUserInfo(){
        const that = this
        AsyncStorage.getItem('user', function (error, result) {
            if (error) {
                alert('读取失败')
            }else {
                const getName=JSON.parse(result);
                that.setState({userName:getName.name})
            }
        })
    }
    _renderItemArticle=({item})=>{
        if(item.GameType==1){
            this.setState({
                overdate:item.StartDate,
                overres:item.GameType ? "已结束" : "即将开始"
            });
            return (
                <TouchableOpacity onPress={this.toggleModal}>
                    <View style={styles.view4_1}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.StartDate}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <Text style={styles.f_tex}>{this.state.overres}</Text>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={{uri:item.OnePicture}}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.ParticipantOne}</Text>
                                </View>
                            </View>
                            {/*<View style={styles.f_view5}>*/}
                            {/*    <View style={styles.f_view5_1}><Text style={styles.f_view5_1tet}>{item.name1res}</Text></View>*/}
                            {/*    <View style={styles.f_view5_2}><Text style={styles.f_view5_2tex}>{item.name2res}</Text></View>*/}
                            {/*</View>*/}
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={{uri:item.TwoPicture}}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.ParticipantTwo}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view8}>
                            <Image style={styles.image} source={require('../../imagers/Match/box2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(item.GameType !==1 && item.GameType !==0){
            this.setState({
                Conductdate:item.StartDate,
                Conductres:"进行中"
            });
            return (
                <TouchableOpacity onPress={this.toggleModal2}>
                    <View style={styles.view4_2}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.StartDate}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <View style={styles.f_view1_1}>
                                    <Text style={styles.f_view1_1tet}>{this.state.Conductres}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={{uri:item.OnePicture}}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.ParticipantOne}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={{uri:item.TwoPicture}}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.ParticipantTwo}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.f_view8}>
                            <Image style={styles.image} source={require('../../imagers/Match/box2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(item.GameType==0){
            this.setState({
                soondate:item.StartDate,
                soonres:item.GameType ? "已结束" : "即将开始"
            });
            return (
                <TouchableOpacity onPress={this.toggleModal3}>
                    <View style={styles.view4_3}>
                        <View style={{flex:2}}>
                            <View style={styles.teview}>
                                <Text style={styles.tet}>{item.StartDate}</Text>
                            </View>
                            <View style={styles.f_view1}>
                                <Text style={styles.f_tex}>{this.state.soonres}</Text>
                            </View>
                        </View>
                        <View style={styles.f_view2}>
                            <View style={{flex:1}}>
                                <View style={styles.f_view3}>
                                    <Image style={styles.image2} source={{uri:item.OnePicture}}/>
                                </View>
                                <View style={styles.f_view4}>
                                    <Text style={styles.f_view4tet}>{item.ParticipantOne}</Text>
                                </View>
                            </View>
                            <View style={styles.f_view5}></View>
                            <View style={{flex:1}}>
                                <View style={styles.f_view6}>
                                    <Image style={styles.image2} source={{uri:item.TwoPicture}}/>
                                </View>
                                <View style={styles.f_view7}>
                                    <Text style={styles.f_view7tet}>{item.ParticipantTwo}</Text>
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
        return item.ID.toString();
    };

    componentDidMount() {
        this.setState({
            resRed:'红',
            resYew:'平',
            resBlu:'蓝'
        })
        this._getUserInfo();
    }
    _separator=()=>{
        return <View style={{height:4,backgroundColor:'#000000'}}></View>
    };
    // 分类选择下拉框位置
    _adjustType = () => {
        return({
            right: 16,
            top: 428,
        })
    }
    // 分类选择
    _selectType=(index,value) => {
        const  id = parseInt(index.substring(4));
        if(id==1){
            this.setState({
                resRed:'半场赢',
                resYew:'让平',
                resBlu:'半场赢'
            })
        }else if(id==2){
            this.setState({
                resRed:'全场赢',
                resYew:'让输',
                resBlu:'全场赢'
            })
        }
    }
    //不同赛事不同id
    _initws(id){
        var that=this;
        const data={
            "aintComprtitionID":id,
            "astrAccountName":this.state.userName
        }
        const str=JSON.stringify(data);
        const action = {
            "FromUser": "",
            "Tag": "ac",
            "Message": str,
            "ActionMethod":"GameMethodBLL.GetCompetitionMethod"
        };
        var wss=new WebSocket("ws://172.16.31.250:9009/");
        wss.onopen=function () {
            wss.send(JSON.stringify(action))
        }
        wss.onmessage=function (ev) {
            const data = JSON.parse(ev.data);
            const data1 = JSON.parse(data.Message);
            const datacode= JSON.stringify(data1.Result);
            if (datacode=='[]'){
                that.setState({
                    vote1: 0,
                    vote2: 0,
                    vote3: 0,
                    getId:id,
                    resRed:'红',
                    resYew:'平',
                    resBlu:'蓝',
                    cokedata:{
                        coke2:'无法投注',
                    },
                })
            }else {
                const vote1 = JSON.stringify(data1.Result[0].GameMethod[0].MethodID);
                const vote2 = JSON.stringify(data1.Result[0].GameMethod[1].MethodID);
                const vote3 = JSON.stringify(data1.Result[1].GameMethod[0].MethodID);
                const data2 = JSON.stringify(data1.Result[0].TypeName);
                const data3 = JSON.stringify(data1.Result[1].TypeName);
                that.setState({
                    vote1: vote1,
                    vote2: vote2,
                    vote3: vote3,
                    getId: id,
                    cokedata: {
                        coke1: data2,
                        coke2: data3,
                    },
                })
            }
        }
        wss.onclose=(e)=>{
            alert(this.state.wsClose);
        }
    }
    //测试确定按钮获取参数
    _test(){
        alert(this.state.userName+this.state.getId+this.state.vote);
        this.setState({
            tick:{
                red:false, //red
                yellow:false, //yellow
                blue:false //blue
            },
            isModalVisible: false,
            isModalVisible2: false,
            isModalVisible3: false
        });
    }
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
                       style={{paddingTop:scaleSizeH(230),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        {/*头部加图片加支持度*/}
                        <View style={styles.mo_view2}>
                            {/*头部*/}
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
                            {/*图片*/}
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
                            {/*新加功能/游戏玩法*/}
                            <View style={styles.coke}>
                                <View style={styles.coke_title}>
                                    <Text style={styles.coke_title_text}>{this.state.overtitle}</Text>
                                </View>
                                <ModalDropdown
                                    adjustFrame={this._adjustType}
                                    dropdownTextHighlightStyle={{color:'rgba(42, 130, 228, 1)'}}
                                    style={styles.coke_btn}
                                    dropdownStyle={styles.dropdown_coke}
                                    defaultValue={this.state.coketext}
                                    onSelect={this._selectType}
                                    options={this.state.cokedata}/>
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
                                            <Text style={styles.mo_view3_2tet}>{this.state.resRed}</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>{this.state.resYew}</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>{this.state.resBlu}</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*选择投注*/}
                        <View style={styles.select_bycoke}>
                            <TouchableOpacity style={styles.select_bycoke_view1}>
                                <TextInput editable={false} keyboardType="number-pad"  placeholderTextColor={'#FFF'} placeholder={'6-10'} maxLength={2}   style={styles.select_bycoke_view1_text}></TextInput>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.select_bycoke_view2} onPress={this._test}>
                                <Text style={styles.select_bycoke_view2_btn}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={this.state.isModalVisible2}
                       onBackdropPress={() => this.setState({ isModalVisible2: false })}
                       style={{paddingTop:scaleSizeH(230),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        {/*头部加图片加支持度*/}
                        <View style={styles.mo_view2}>
                            {/*头部*/}
                            <View style={styles.mo_view2_1_2}>
                                <View style={styles.mo_view2_2}>
                                    <Text style={styles.mo_view2_2tex1}>{this.state.Conductres}</Text>
                                    <Text style={styles.mo_view2_2tex2}>{this.state.Conductdate}</Text>
                                </View>
                                <View style={styles.mo_view2_3}></View>
                            </View>
                            {/*图片*/}
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>
                            {/*支持度*/}
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={{...styles.mo_view2_6_1_1,flex:this.state.lightPillar.red}}>
                                        {/*{this.state.ryb==1?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_2,flex:this.state.lightPillar.yellow}}>
                                        {/*{this.state.ryb==2?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_3,flex:this.state.lightPillar.blue}}>
                                        {/*{this.state.ryb==3?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                </View>
                            </View>
                            {/*新加功能/游戏玩法*/}
                            <View style={styles.coke}>
                                <View style={styles.coke_title}>
                                    <Text style={styles.coke_title_text}>{this.state.overtitle}</Text>
                                </View>
                                <ModalDropdown
                                    adjustFrame={this._adjustType}
                                    dropdownTextHighlightStyle={{color:'rgba(42, 130, 228, 1)'}}
                                    style={styles.coke_btn}
                                    dropdownStyle={styles.dropdown_coke}
                                    defaultValue={this.state.coketext}
                                    onSelect={this._selectType}
                                    options={this.state.cokedata}/>
                            </View>
                        </View>
                        {/*支持红黄蓝*/}
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
                                            <Text style={styles.mo_view3_2tet}>{this.state.resRed}</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>{this.state.resYew}</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>{this.state.resBlu}</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*选择投注*/}
                        <View style={styles.select_bycoke}>
                            <TouchableOpacity style={styles.select_bycoke_view1}>
                                <TextInput editable={false} keyboardType="number-pad"  placeholderTextColor={'#FFF'} placeholder={'6-10'} maxLength={2}   style={styles.select_bycoke_view1_text}></TextInput>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.select_bycoke_view2} onPress={this._test}>
                                <Text style={styles.select_bycoke_view2_btn}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={this.state.isModalVisible3}
                       onBackdropPress={() => this.setState({ isModalVisible3: false })}
                       style={{paddingTop:scaleSizeH(230),alignItems:'center'}}
                       backdropColor={'rbga(0,0,0,0.5)'}
                >
                    <View style={styles.mo_view1}>
                        {/*头部加图片加支持度*/}
                        <View style={styles.mo_view2}>
                            {/*头部*/}
                            <View style={styles.mo_view2_1_2}>
                                <View style={styles.mo_view2_2}>
                                    <Text style={styles.mo_view2_2tex1}>{this.state.soonres}</Text>
                                    <Text style={styles.mo_view2_2tex2}>{this.state.soondate}</Text>
                                </View>
                                <View style={styles.mo_view2_3}></View>
                            </View>
                            {/*图片*/}
                            <View style={styles.mo_view2_5}>
                                <ImageBackground style={styles.usimg} source={require('../../imagers/Match/box1.jpg')}/>
                            </View>
                            {/*支持度*/}
                            <View style={styles.mo_view2_6}>
                                <View style={styles.mo_view2_6_1}>
                                    <View style={{...styles.mo_view2_6_1_1,flex:this.state.lightPillar.red}}>
                                        {/*{this.state.ryb==1?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_2,flex:this.state.lightPillar.yellow}}>
                                        {/*{this.state.ryb==2?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                    <View style={{...styles.mo_view2_6_1_3,flex:this.state.lightPillar.blue}}>
                                        {/*{this.state.ryb==3?<Image source={require('../../imagers/Match/Selection.png')} style={styles.mo_view2_6img} />:null}*/}
                                    </View>
                                </View>
                            </View>
                            {/*新加功能/游戏玩法*/}
                            <View style={styles.coke}>
                                <View style={styles.coke_title}>
                                    <Text style={styles.coke_title_text}>{this.state.overtitle}</Text>
                                </View>
                                <ModalDropdown
                                    adjustFrame={this._adjustType}
                                    dropdownTextHighlightStyle={{color:'rgba(42, 130, 228, 1)'}}
                                    style={styles.coke_btn}
                                    dropdownStyle={styles.dropdown_coke}
                                    defaultValue={this.state.coketext}
                                    onSelect={this._selectType}
                                    options={this.state.cokedata}/>
                            </View>
                        </View>
                        {/*支持红黄蓝*/}
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
                                            <Text style={styles.mo_view3_2tet}>{this.state.resRed}</Text>
                                            {this.state.tick.red&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("yellow");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_3}>
                                            <Text style={styles.mo_view3_3tet}>{this.state.resYew}</Text>
                                            {this.state.tick.yellow&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{
                                        //执行打勾事件
                                        this.switchover("blue");

                                        this.setState({ isModalVisible: false });
                                    }}>
                                        <View style={styles.mo_view3_4}>
                                            <Text style={styles.mo_view3_4tet}>{this.state.resBlu}</Text>
                                            {this.state.tick.blue&&<Image style={styles.square} source={require('../../imagers/Match/square1.png')} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*选择投注*/}
                        <View style={styles.select_bycoke}>
                            <TouchableOpacity style={styles.select_bycoke_view1}>
                                <TextInput editable={true} keyboardType="number-pad"  placeholderTextColor={'#FFF'} placeholder={'6-10'} maxLength={2}   style={styles.select_bycoke_view1_text}></TextInput>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.select_bycoke_view2} onPress={this._test}>
                                <Text style={styles.select_bycoke_view2_btn}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default FlastList;
