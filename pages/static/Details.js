import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, TouchableOpacity,TextInput,AsyncStorage} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import styles from "../../styles/Static_styles/Staticstyles";
import {I18n} from "../../language/I18n";


//全局通信变量
var websock;
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            userPwd:'',
            user:'',
            isModalVisible: false,
            wsOk:'登录成功',
            wsNo:'密码或账号不正确',
            wsClose:'您连接的网络！不行呀！'
        };
        this._onChangeName = this._onChangeName.bind(this);
        this._onChangePwd = this._onChangePwd.bind(this);
        this._login = this._login.bind(this);
        this._getUserInfo = this._getUserInfo.bind(this);
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    //获取输入账号
    _onChangeName(inputData){
        this.setState({
            userName:inputData
        })
    }
    //获取输入密码
    _onChangePwd(inputData){
        this.setState({
            userPwd:inputData
        })
    }
    //登录
    _login(){
        websock = new WebSocket('ws://172.16.31.250:9009/');
        websock.onopen=()=>{
            var user = {
                'astrAccountName':this.state.userName,
                'astrUserPassWord': this.state.userPwd
            };
            var userLogin = JSON.stringify(user);
            let actions = {
                "FromUser":"",
                "Message": userLogin,
                "Tag": "ac",
                'ActionMethod': 'UserBLL.Login',

            }
            websock.send(JSON.stringify(actions));
        };
        websock.onmessage=(e)=>{
            // 接收消息
            var data = JSON.parse(e.data);
            var res = JSON.parse(data.Message);
            //保存用户信息

            if (res.Result != null) {
                var jsonInfo = JSON.stringify(res.Result);
                AsyncStorage.setItem("userInfo",jsonInfo);
                this.setState({ isModalVisible: false ,user:this.state.userName})
                //alert(this.state.wsOk)
            } else {
                alert(this.state.wsNo)
            }
        }
        websock.onerror=(e)=>{
        }
        websock.onclose=(e)=>{
            alert(this.state.wsClose);
        }
    }
    componentDidMount() {
        this._getUserInfo()
    }
    //读取异步保存用户信息
    _getUserInfo(){
        const that = this;
        //获取异步缓存用户所有信息
        AsyncStorage.getItem('userInfo', function (error, result) {
            if (error) {}else {
                const getInfo = JSON.parse(result);
                if(getInfo==undefined){
                    return;
                }else {
                    that.setState({userName:getInfo.AccountName,user:getInfo.AccountName})
                }

            }
        })

    }

    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <View style={styles.log} >
                        <Image style={styles.logimg} source={require('../../imagers/static/a1.png')}/>
                    </View>
                    <Text style={{color:'#FFF'}}>{this.state.user}</Text>
                    <View style={styles.logUser}>

                        <TouchableOpacity onPress={this.toggleModal}>
                            <Image style={styles.userimg} source={require('../../imagers/static/index_user.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={this.state.isModalVisible}
                       backdropColor={'rbga(0,0,0,0.5)'}
                       style={{alignItems:'center'}}
                >
                    <View style={styles.Hm_view1}>
                        <View style={styles.Hm_view2}>
                            <View style={styles.Hm_view4}>
                                <Text style={styles.Hm_text2}>{I18n.t('Details.Loginpanel')}</Text>
                            </View>
                            <View style={styles.Hm_view4_1}>
                                <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
                                    <Image style={styles.Hm_view4_1img} source={require('../../imagers/static/x.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Hm_view5}>
                            <View style={styles.Hm_view5_1}>
                                <View style={{flex:1}}></View>
                                <View style={styles.Hm_view5_2}>
                                    <View style={styles.Hm_view3}>
                                        <View style={styles.Hm_view3_1}>
                                            <Text style={styles.Hm_text}>{I18n.t('Details.Account')}</Text>
                                        </View>
                                        <View style={styles.Hm_view3_2}>
                                            <View style={styles.Hm_view3_3}>
                                                <TextInput style={styles.Hm_text} onChangeText={this._onChangeName}  placeholder={I18n.t('Details.name')} maxLength={10}></TextInput>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Hm_view3}>
                                        <View style={styles.Hm_view3_1}>
                                            <Text style={styles.Hm_text}>{I18n.t('Details.Password')}</Text>
                                        </View>
                                        <View style={styles.Hm_view3_2}>
                                            <View style={styles.Hm_view3_3}>
                                                <TextInput style={styles.Hm_text} onChangeText={this._onChangePwd} secureTextEntry={true}  placeholder={'请输入您的密码'} maxLength={10}></TextInput>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Hm_view3}>
                                        <View style={styles.Hm_view3_1}>
                                            <Text style={styles.Hm_text}>{I18n.t('Details.Verification')}</Text>
                                        </View>
                                        <View style={styles.Hm_view3_4}>
                                            <View style={styles.Hm_view3_5}>
                                                <Text style={styles.Hm_text}>1234</Text>
                                            </View>
                                            <View style={styles.Hm_view3_6}>
                                                <Text style={styles.Hm_text}>{I18n.t('Details.picture')}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1}}></View>
                            </View>
                        </View>
                        <View style={styles.Hm_view6}>
                            <View style={styles.Hm_view6_1}></View>
                            <View style={styles.Hm_view6_2}>
                                <TouchableOpacity onPress={this._login}>
                                    <View style={styles.Hm_view6_3}>
                                        <Text style={styles.Hm_text2} >{I18n.t('Details.sure')}</Text>
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
export default Details;
