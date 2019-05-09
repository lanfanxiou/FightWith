import React,{Component} from "react";
import {View, Image, Text, StyleSheet, Button, TouchableOpacity, ImageBackground} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "../../utils/Screen";
import Modal from "react-native-modal";

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
                <Modal isVisible={this.state.isModalVisible}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}
                       style={{alignItems:'center'}}
                >
                    <View style={{backgroundColor:'#ffffff',width:scaleSizeW(700),height:scaleSizeH(700) }}>

                    </View>
                </Modal>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        width:200,
        height:200,
    }
});
export default Details;