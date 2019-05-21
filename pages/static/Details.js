import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";
import styles from "../../styles/Static_styles/Staticstyles";



class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

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
                                <Text style={styles.Hm_text2}>登录面板</Text>
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
                                            <Text style={styles.Hm_text}>账号 </Text>
                                        </View>
                                        <View style={styles.Hm_view3_2}>
                                            <View style={styles.Hm_view3_3}>
                                                <Text style={styles.Hm_text}>张三</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Hm_view3}>
                                        <View style={styles.Hm_view3_1}>
                                            <Text style={styles.Hm_text}>密码 </Text>
                                        </View>
                                        <View style={styles.Hm_view3_2}>
                                            <View style={styles.Hm_view3_3}>
                                                <Text style={styles.Hm_text}>***</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Hm_view3}>
                                        <View style={styles.Hm_view3_1}>
                                            <Text style={styles.Hm_text}>验证码 </Text>
                                        </View>
                                        <View style={styles.Hm_view3_4}>
                                            <View style={styles.Hm_view3_5}>
                                                <Text style={styles.Hm_text}>1234</Text>
                                            </View>
                                            <View style={styles.Hm_view3_6}>
                                                <Text style={styles.Hm_text}>图片</Text>
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
                                <TouchableOpacity>
                                    <View style={styles.Hm_view6_3}>
                                        <Text style={styles.Hm_text2}>确定</Text>
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
