import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, TouchableOpacity,TextInput} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import styles from "../../styles/Static_styles/Staticstyles";
import {I18n} from "../../language/I18n";
import * as api from "../../utils/api";


//全局通信变量
var websock;
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            userPwd:'',
            isModalVisible: false,
        };
        this._onChangeName = this._onChangeName.bind(this);
        this._onChangePwd = this._onChangePwd.bind(this);
        this._login = this._login.bind(this);
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
        websock = new WebSocket(api.api);
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
            var user1=JSON.stringify(res.Data);
            //保存用户信息
            if (res != null) {
                alert("登录成功"+this.state.userName)
            } else {
                alert('请检查账号密码是否正确！')
            }
        }
        websock.onerror=(e)=>{

        }
        websock.onclose=(e)=>{
            alert("您连接的网络！不行呀！");
        }
    }

    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <View style={styles.log} >
                        <Image style={styles.logimg} source={require('../../imagers/static/a1.png')}/>
                    </View>
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
